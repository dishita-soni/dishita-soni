import Image from "next/image";

export type BlogpostEntry = {
  date: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
};

export interface BlostpostProps {
  title?: string;
  description?: string;
  entries?: BlogpostEntry[];
  className?: string;
}

const Blogpost = ({
  title = "Changelog",
  description = "Get the latest updates and improvements to our platform.",
  entries = defaultChangelogData,
}: BlostpostProps) => {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mb-3 text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
      <div className="container">

        <div className="mx-auto mt-16 max-w-5xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="flex grid-cols-2 gap-4 md:flex-row md:gap-16"
            >
              <div className="top-28 flex h-min shrink-0 items-center md:sticky mr-20">
                <span className="text-xs font-medium text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <div>
                <h2 className="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.image && (
                  <Image
                    width={600}
                    height={600}
                    src={entry.image}
                    alt={` visual`} //TODO edit alt statement
                    className="mt-8 max-w-200 rounded-lg object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blogpost };

export const defaultChangelogData: BlogpostEntry[] = [
  {
    date: "April 25, 2025",
    title: "UWB Hackathon Day 1",
    description:
      "We begin!! What shall we do today",
    items: [
      "Hackathon!!",
      "I am wondering how to format this tbh",
      "Am i going to write all my blog posts in the code in vs code LOL"
    ],
    image: "/images/comingsoon.png",
  },
];
