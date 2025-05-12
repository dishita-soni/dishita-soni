import { Navbar1 } from "@/components/navbar1";

export default function Game() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
        <h1 className="text-center my-10 ">Currently in the brainstorming/design phase of production.</h1>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src="images/underconstruction.png"
          alt="Image with a monkey sitting on text that says 'Under Construction'"
          className="h-100 w-200 object-cover transition-opacity duration-100 fade-in m-auto"
        />
      </main>
      <footer>

      </footer>
    </div>
  );
}
