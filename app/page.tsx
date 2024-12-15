import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen bg-[#ebdbd1] flex flex-col md:flex-row items-center justify-center w-full">
      <div className="flex flex-col items-center">
        <BlurFade delay={0.25} inView>
          <h1 className="font-carelia text-[#605048] text-center text-7xl drop-shadow-lg">
            My Story Book
          </h1>
        </BlurFade>

        <div className="mt-8">
          <BlurFade delay={0.25 * 2} inView>
            <Image
              className="hover:scale-125 transition-transform duration-150"
              alt="Barnaby Frog"
              width={200}
              height={200}
              src="/BarnabyFrog.png"
            />
              <Link href='/barnaby-frog'>
              <p className="pt-5 text-center text-[#67574f]
              underline">click here to read</p></Link>
          </BlurFade>
        </div>
      </div>

      {/* Boy Image Section */}
      <div className="mt-8 md:mt-0 md:ml-12">
        <BlurFade delay={0.25 * 2} inView>
          <Image
            className="max-w-[600px] w-full h-auto" // Increased maximum size
            alt="boy"
            width={600}
            height={600}
            src="/boy.png"
          />
        
        </BlurFade>
      </div>
    </div>
  );
}
