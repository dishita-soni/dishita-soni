import { Blog8 } from "@/components/blog8";
import { Navbar1 } from "@/components/navbar1";

export default function Blog() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
        <h2 className="text-center my-10">Blog feature is still being built as of May 11, 2025</h2>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src="images/underconstruction.png"
          alt="Image with a monkey sitting on text that says 'Under Construction'"
          className="h-100 w-200 object-cover transition-opacity duration-100 fade-in m-auto"
        />
        <Blog8/>
      </main>
      <footer>

      </footer>
    </div>
  );
}
