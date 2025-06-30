
export default function LandingPage() {
  return (
 <div className="relative min-h-screen font-inter bg-radial-spotlight text-white flex flex-col scroll-smooth bg-noise overflow-hidden">

   <nav className="fixed top-0 inset-x-0 z-50 flex h-20 font-inter justify-between items-center px-6 py-4 shadow-lg bg-[#111827]/80 backdrop-blur-md border-b border-gray-700">

 <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center space-x-1">
  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
    Smart
  </span>
  <span className="text-indigo-400">CP</span>
  <span className="text-white">Coach</span>
</h1>

  <div className="space-x-10 text-base font-sans">
    <a
      href="#about"
      className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      About
    </a>
    <a
      href="#features"
      className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      Features
    </a>
    <a
      href="#testimonials"
      className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      Testimonials
    </a>
    <a
      href="/login"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-indigo-500 px-4 py-2 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-300"
    >
      Login
    </a>
    <a
      href="/register"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-indigo-500 px-4 py-2 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-300"
    >
      Register
    </a>
  </div>
</nav>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-5rem)] pt-12">
        <h2  className="text-[10vw] font-inter font-bold mb-6 text-white tracking-tight leading-tight">
          Smart CP Coach
        </h2>
       <p className="text-4xl md:text-5xl font-semibold font-libre text-gray-300 max-w-4xl mb-8 tracking-tight leading-snug">
         Every{" "}
  <span className="text-red-500 drop-shadow-[0_1px_2px_rgba(239,68,68,0.3)] transition duration-300 hover:text-yellow-500">
    Failed Submission
  </span>{" "}
  is a Step Forward.
</p>


      <a href="/register" className="inline-block bg-white text-[#0a0f1a] font-semibold px-8 py-4 rounded-2xl shadow-2xl text-lg tracking-wide transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-indigo-400">
  Start Practicing
</a>


      </section>

      {/* About Section */}
     {/* About Section */}
<section id="about" className="bg-[#0a0f1a] py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-6 tracking-tight text-white">About Smart CP Coach</h3>
    <p className="text-gray-400 text-lg leading-relaxed">
      Smart CP Coach is a simple, effective tool built for competitive programmers who want to improve their problem-solving step by step. Each time you submit a solution that fails, Smart CP Coach analyzes the verdict and the problem tags. Then, it suggests
      <strong> 7 carefully selected related problems</strong> you can solve to strengthen your understanding of that topic.
      No AI, no guesswork—just structured, focused practice based on your actual performance.
    </p>
  </div>
</section>

{/* Features Section */}
<section id="features" className="py-24 px-6 bg-[#111827]">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-12 tracking-tight text-white">Features</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#1f2937] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <h4 className="text-xl font-semibold mb-3 text-white">Submission Analysis</h4>
        <p className="text-gray-400 text-base">
          Understand exactly why your submission failed: wrong answer, time limit, or runtime error.
        </p>
      </div>
      <div className="bg-[#1f2937] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <h4 className="text-xl font-semibold mb-3 text-white">7 Related Problems</h4>
        <p className="text-gray-400 text-base">
          Get 7 recommended problems on similar topics to practice and improve efficiently.
        </p>
      </div>
      <div className="bg-[#1f2937] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <h4 className="text-xl font-semibold mb-3 text-white">Progress Tracking</h4>
        <p className="text-gray-400 text-base">
          Keep track of solved problems, tags you've mastered, and your improvement over time.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section id="testimonials" className="bg-[#0a0f1a] py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-12 tracking-tight text-white">What Users Say</h3>
    <div className="space-y-10">
      <blockquote className="bg-[#1f2937] p-8 rounded-2xl shadow-lg text-gray-300 hover:shadow-2xl transition duration-300">
        <p className="italic mb-3">
          "I finally understood why I kept failing certain problems. The 7 related suggestions helped me fill my knowledge gaps fast."
        </p>
        <footer className="text-gray-400 font-semibold">— Arjun, Codeforces Specialist</footer>
      </blockquote>
      <blockquote className="bg-[#1f2937] p-8 rounded-2xl shadow-lg text-gray-300 hover:shadow-2xl transition duration-300">
        <p className="italic mb-3">
          "It's like having a mentor who always knows what you should practice next—without any AI fluff."
        </p>
        <footer className="text-gray-400 font-semibold">— Sneha, 5⭐ Coder</footer>
      </blockquote>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="text-center p-6 text-gray-500 text-sm bg-[#111827] border-t border-gray-700">
  © {new Date().getFullYear()} Smart CP Coach. Built with 💙 for coders, by coders.
</footer>

    </div>
  );
}
