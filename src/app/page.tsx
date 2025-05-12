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
            <Hero1 heading="welcome!" description="This website is a collection of professional projects and personal hobbies!" image={{src: "/images/profilepic.png", alt:"Picture of Dishita Soni standing in a tulip field"}}/>

      </main>
      <footer>
{/* TODO: ADD FOOTER */}
      </footer>
    </div>
  );
}
