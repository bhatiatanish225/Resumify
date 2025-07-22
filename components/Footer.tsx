export function Footer() {
  return (
    <footer className="w-full py-6 px-6 mt-auto border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg tracking-tight text-gray-900">Resumify</span>
          <span className="text-sm text-gray-500">Instantly create beautiful resumes powered by AI ✨</span>
        </div>
        {/* Center: Social + More links */}
        <div className="flex gap-3 items-center">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/bhatiatanish" className="size-8 flex items-center justify-center border-design-gray border rounded-md hover:bg-gray-100 transition">
            <img src="/footer/github.svg" className="size-5" alt="GitHub" />
            <span className="sr-only">GitHub</span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/tanishdotCache?t=SeyUnhrlKCR7GfJUudkkow&s=09" className="size-8 flex items-center justify-center border-design-gray border rounded-md hover:bg-gray-100 transition">
            <img src="/footer/x.svg" className="size-5" alt="X / Twitter" />
            <span className="sr-only">X / Twitter</span>
          </a>

        </div>
        {/* Right: Made with & copyright */}
        <div className="flex flex-col gap-1 items-end text-xs text-gray-400">
          <span> © {new Date().getFullYear()} Tanish Bhatia. All rights reserved.</span>
          <span>
            Made with <span className="text-pink-500">♥</span> by Tanish Bhatia
          </span>
        </div>
      </div>
    </footer>
  );
}
