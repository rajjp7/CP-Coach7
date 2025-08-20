import React from 'react';

// SVG Icon Components for features
const AnalyzeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PracticeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

const TrackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function LandingPage() {
  return (
    <div className="relative min-h-screen font-sans bg-[#0D1117] text-white scroll-smooth overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>

      <nav className="fixed top-0 inset-x-0 z-50 flex h-20 justify-between items-center px-4 md:px-8 bg-[#0D1117]/80 backdrop-blur-lg border-b border-gray-800">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Smart</span>
          <span className="text-indigo-300">CP</span>
          <span className="text-white">Coach</span>
        </h1>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
          <div className="flex items-center space-x-2">
            <a href="/login" className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 hover:text-white transition-colors duration-300">
              Login
            </a>
            <a href="/register" className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-600/20">
              Register
            </a>
          </div>
        </div>
        <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-tight mb-6">
            Turn <span className="text-red-500">Errors</span> into <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Stop guessing. Start improving. Smart CP Coach analyzes your failed submissions and gives you a focused path to mastery.
          </p>
          <a href="/register" className="text-lg font-bold px-8 py-4 rounded-lg bg-white text-gray-900 transform transition-transform duration-300 hover:scale-105 shadow-2xl shadow-white/10">
            Start Your Journey
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-32 px-4 bg-black/20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">What is Smart CP Coach?</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                It’s a straightforward, effective tool for competitive programmers. When a submission fails, our system analyzes the verdict and problem tags to suggest <strong>7 highly relevant problems</strong>.
                <br/><br/>
                This isn't about AI magic—it's about structured, targeted practice based on your actual performance, helping you conquer topics one step at a time.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <div className="relative">
                    <div className="p-4 bg-[#1a1a1a] rounded-t-lg flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-6 bg-[#0D1117] rounded-b-lg text-left font-mono text-sm text-gray-300">
                        <p><span className="text-red-400">verdict:</span> "WRONG_ANSWER"</p>
                        <p><span className="text-yellow-400">problem:</span> "1337A - Array Restoring"</p>
                        <p><span className="text-green-400">tags:</span> ["dp", "math"]</p>
                        <p className="mt-4 text-indigo-400 animate-pulse">&gt; Generating recommendations...</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">A Smarter Way to Practice</h3>
            <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">Focus on what matters most. Our features are designed to eliminate guesswork and accelerate your learning.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20">
                <AnalyzeIcon />
                <h4 className="text-xl font-semibold mb-3 text-white">Targeted Analysis</h4>
                <p className="text-gray-400">Instantly understand why your code failed—whether it's a wrong answer, time limit exceeded, or a runtime error.</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20">
                <PracticeIcon />
                <h4 className="text-xl font-semibold mb-3 text-white">Curated Problem Sets</h4>
                <p className="text-gray-400">Receive 7 hand-picked problems based on similar topics, allowing you to practice efficiently and master concepts.</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20">
                <TrackIcon />
                <h4 className="text-xl font-semibold mb-3 text-white">Visualize Your Progress</h4>
                <p className="text-gray-400">Track solved problems, monitor mastery of different tags, and see your skills improve over time with clear analytics.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center p-8 text-gray-500 text-sm bg-[#0D1117] border-t border-gray-800">
        © {new Date().getFullYear()} Smart CP Coach. Built with passion for the competitive programming community.
      </footer>
    </div>
  );
}
