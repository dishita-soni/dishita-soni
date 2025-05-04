import { Navbar1 } from "@/components/navbar1";
import Image from 'next/image'

export default function Resume() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
        <Image
        src="/images/resume.png"
        alt="resume png"
        className="m-auto"
        width={800}
        height={900}/>
        <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer"> Resume </a>

      </main>
      <footer>

      </footer>
    </div>
  );
}
