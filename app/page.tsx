import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TopMenu } from '../components/TopMenu';
import { Footer } from '../components/Footer';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { BlurFade } from '@/components/ui/BlurFade';

export default function Home() {
  return (
    <>
      <TopMenu />

      <section className="flex-1 flex flex-col">
        <div className="flex flex-col min-h-[80vh]">
          {/* Main content */}
          <div className="flex-1 flex flex-col md:flex-row max-w-4xl mx-auto items-center px-5 md:px-2 py-8 md:pt-0">
            {/* Left side - Call to action */}
            <div className="w-full md:w-1/2 max-w-[378px] flex flex-col justify-center items-center md:items-start ">
              <div className="max-w-md text-center md:text-left">
                <h1 className="text-[32px] font-bold mb-4 flex items-center justify-center md:justify-start gap-4 flex-wrap text-design-black font-mono leading-4">
                  <span>Resumify</span>
                  <img
                    src="/right-arrow.png"
                    alt="Arrow Right Icon"
                    width={32}
                    height={32}
                    className="inline size-8"
                  />
                  <span>Personal Website</span>
                  <br />
                  <span>
                    in one <span className="hidden sm:inline">click</span>
                  </span>
                  <img
                    src="/highlight-pointer.png"
                    alt="Pointer Icon"
                    width={37}
                    height={37}
                    className="size-[37px] text-gray-400"
                  />
                </h1>

                <p className="text-base text-gray-600 mb-[30px] font-mono text-center md:text-left">
                  Transform your resume or LinkedIn into a beautiful personal website instantly.
                </p>

                <div className="relative flex flex-col items-center font-mono w-full md:w-fit">
                  <Link href="/upload">
                    <Button className="relative group flex items-center bg-design-black hover:bg-design-black/95 text-white px-6 py-3 h-auto text-base overflow-hidden">
                      <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
                      <img
                        src="/sparkle.png"
                        alt="Sparkle Icon"
                        className="h-5 w-5 mr-2 relative"
                      />
                      <span className="relative">Upload Resume</span>
                      <BorderBeam colorFrom="#5d5d5d" colorTo="#ffffff" />
                    </Button>
                  </Link>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Takes 1 minute!
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Preview */}
            <div className="w-full md:w-1/2 flex justify-center items-center flex-1 relative max-h-[700px] min-w-[50%] lg:min-w-[500px]">
              <div className="absolute inset-0 -bottom-4 rounded-3xl bg-black/5 blur-xl h-full"></div>
              <BlurFade delay={0.25} inView>
                <img
                  src="/cv-home.png"
                  className="relative w-full max-w-[500px] h-full object-cover overflow-hidden"
                  alt="CV Website Preview"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
