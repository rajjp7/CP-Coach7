const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/submissions', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }

    const apiUrl = `https://codeforces.com/api/user.status?handle=${user.handle}&from=1&count=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/update-last-checked', auth, async (req, res) => {
    try{
        const {lastCheckedSubmissionID} = req.body;
        if(!lastCheckedSubmissionID) {
            return res.status(400).json({ message: 'Last checked submission ID is required' });
        }

        const user = await User.findByIdAndUpdate(
            req.user,
            { lastCheckedSubmissionID },
            { new: true }
        );

        res.status(200).json({
            message: 'Last checked submission ID updated successfully',
            user: {
                lastCheckedSubmissionID: user.lastCheckedSubmissionID
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/new-failed-submissions', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const apiUrl = `https://codeforces.com/api/user.status?handle=${user.handle}&from=1&count=20`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status !== 'OK') {
            return res.status(500).json({ message: 'Error fetching submissions from Codeforces' });
        }

        const newSubmissions = data.result.filter(sub => sub.id > user.lastCheckedSubmissionID);

        const failedSubmissions = newSubmissions.filter(sub => sub.verdict !== 'OK');
        res.json(failedSubmissions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/suggestions', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const problemsResponse = await fetch('https://codeforces.com/api/problemset.problems');
    const problemsData = await problemsResponse.json();
    if (problemsData.status !== 'OK') {
      return res.status(500).json({ message: 'Error fetching problemset from Codeforces' });
    }
    const allProblems = problemsData.result.problems;

    // Fetch user submissions
    const submissionsResponse = await fetch(`https://codeforces.com/api/user.status?handle=${user.handle}&from=1&count=1000`);
    const submissionsData = await submissionsResponse.json();
    if (submissionsData.status !== 'OK') {
      return res.status(500).json({ message: 'Error fetching submissions from Codeforces' });
    }

    const solvedProblems = new Set(
      submissionsData.result
        .filter(sub => sub.verdict === 'OK')
        .map(sub => sub.problem.contestId + sub.problem.index)
    );

    // Get the last 5 failed submissions
    const failedSubmissions = submissionsData.result
      .filter(sub => sub.verdict !== 'OK')
      .slice(0, 5);

    if (failedSubmissions.length === 0) {
      return res.json({ message: 'No failed submissions found to generate suggestions.' });
    }

    const suggestions = [];

    for (const failed of failedSubmissions) {
      const { contestId, index, tags = [], rating } = failed.problem;

      // Skip problems with no rating (or you can set default range)
      if (!rating) continue;

      const minRating = rating - 200;
      const maxRating = rating + 200;

      // Filter problems that share tags and are within rating range
      const matched = allProblems.filter(p => {
        const key = p.contestId + p.index;
        const sharesTag = p.tags.some(tag => tags.includes(tag));
        return (
          !solvedProblems.has(key) &&
          sharesTag &&
          p.rating &&
          p.rating >= minRating &&
          p.rating <= maxRating
        );
      });

      // Add these matches to suggestions
      suggestions.push(...matched);
    }

    // Remove duplicates
    const uniqueSuggestions = Array.from(
      new Map(
        suggestions.map(p => [p.contestId + p.index, p])
      ).values()
    );

    const response = uniqueSuggestions.map(p => ({
      contestId: p.contestId,
      index: p.index,
      name: p.name,
      rating: p.rating || 'Unrated',
      tags: p.tags,
      link: `https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`
    }));

    res.json(response);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});





module.exports = router;
