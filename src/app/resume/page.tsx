import { Navbar1 } from "@/components/navbar1";
import ResumeView from "@/components/resume";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Resume() {
  return (
    <div>
      <main>
        <nav>
        <Navbar1/>
        </nav>
        <div className="flex justify-end pr-20">
          <Button className="flex">
            <a href={"/dishitasoni-resume-april25.pdf"} target="_blank">
                    view actual pdf here!
            </a>
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <ResumeView/>

      </main>
      <footer>

      </footer>
    </div>
  );
}
