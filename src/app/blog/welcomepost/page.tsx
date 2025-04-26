import { Blogpost } from "@/components/blogpost";
import { Navbar1 } from "@/components/navbar1";

export default function Home() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
        <Blogpost title="Welcome!" description="My first blog post (testing)"/>
      </main>
      <footer>

      </footer>
    </div>
  );
}