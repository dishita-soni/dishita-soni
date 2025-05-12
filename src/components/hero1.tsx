import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  heading = "heading",
  description = "description",
  buttons = {
    primary: {
      text: "My LinkedIn!",
      url: "https://www.linkedin.com/in/dishita-soni",
    },
    secondary: {
      text: "Check out my GitHub!",
      url: "https://github.com/dishita-soni",
    },
  },
  image = {
    src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="py-22 px-32">
      <div className="container">
        <div className="grid items-center grid-cols-2 ">
          <div>
            {/*eslint-disable-next-line @next/next/no-img-element*/}          
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto w-80 rounded-md m-auto"
            />
            <p className="text-center mt-2 text-muted-foreground">Fun fact: I knit that vest! And crocheted that skirt!</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className=" text-4xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>
            <p className="mt-3 mb-10 max-w-xl text-primary lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url} target="_blank">
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero1 };
