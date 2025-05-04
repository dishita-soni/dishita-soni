import { Changelog1 } from "@/components/changelog1";
import { Navbar1 } from "@/components/navbar1";

export default function Projects() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
        <Changelog1 title="My projects" description="selected projects (team/solo) all formatted into a timeline!"/>
      </main>
      <footer>

      </footer>
    </div>
  );
}
