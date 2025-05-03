import { Changelog1 } from "@/components/changelog1";
import GithubCalendar from "@/components/githubcalendar";
import { Hero1 } from "@/components/hero1";
import { Navbar1 } from "@/components/navbar1";

export default function Home() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
          <Hero1 heading="welcome!" description="website desc" image={{src: "/images/monkeybirthday1.png", alt:"image load?"}}/>
          <section className="py-10">
            <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
            <GithubCalendar />
          </section>
          <Changelog1 title="My projects" description="selected projects (team/solo) all formatted into a timeline!"/>
      </main>
      <footer>

      </footer>
    </div>
  );
}
