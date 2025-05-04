import { Hero1 } from "@/components/hero1";
import { Navbar1 } from "@/components/navbar1";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
            <h3 className="mb-5 mt-15 text-center">my github contributions!</h3>
            <Image 
            src="https://ghchart.rshah.org/041b28/dishita-soni" //SOURCE/CREDIT: https://github.com/2016rshah/githubchart-api
            alt="dishita-soni's Github commit chart"
            width={900}
            height={450}
            className="mx-auto"
            />
            <Hero1 heading="welcome!" description="website desc" image={{src: "/images/monkeyPfp.png", alt:"image load?"}}/>

      </main>
      <footer>
{/* TODO: ADD FOOTER */}
      </footer>
    </div>
  );
}
