import { Changelog1 } from "@/components/changelog1";
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
          <Hero1 heading="welcome!" description="website desc" image={{src: "/images/monkeybirthday1.png", alt:"image load?"}}/>
            <h3 className="mb-5 text-center">my github contributions!</h3>
            <Image 
            src="https://ghchart.rshah.org/5a714d/dishita-soni" //SOURCE/CREDIT: https://github.com/2016rshah/githubchart-api
            alt="dishita-soni's Github commit chart"
            width={900}
            height={450}
            className="mx-auto"
            />
          <Changelog1 title="My projects" description="selected projects (team/solo) all formatted into a timeline!"/>
      </main>
      <footer>

      </footer>
    </div>
  );
}
