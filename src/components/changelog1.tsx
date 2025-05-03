import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Version = {
  title: string
  variant: "default" | "secondary" | "destructive" | "outline" | null | undefined
}

export type ChangelogEntry = {
  versions: Version[];
  date: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
};

export interface Changelog1Props {
  title?: string;
  description?: string;
  entries?: ChangelogEntry[];
  className?: string;
}

const Changelog1 = ({
  title = "",
  description = "",
  entries = defaultChangelogData,
}: Changelog1Props) => {
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

        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="flex grid-cols-2 gap-4 md:flex-row md:gap-16"
            >
              <div className="top-28 flex-row h-min shrink-0 items-center gap-4 md:sticky">
                <span className="flex text-xs font-medium text-muted-foreground mb-5">
                  {entry.date}
                </span>
                <div className="flex-col">
                    {entry.versions.map((version, idx)=> {
                      return <Badge key={`${version.title}-${idx}`} variant={version.variant} className="text-xs flex mb-3">
                        {version.title}
                        </Badge>
                    })}
                </div>
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
                    alt={` visual`} //TODO: Edit alt text
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

export { Changelog1 };

export const defaultChangelogData: ChangelogEntry[] = [
  {
    versions: [{title: "UWB Hackathon",
      variant: "secondary"
    }, {title: "Figma",
      variant: "default"
    }
    ] ,
    date: "April 2025",
    title: "tbd",
    description:
      "description of hackathon project",
    items: [
      "Hackathon!!"
    ],
    image: "/images/comingsoon.png",
  },
  {
    versions: [{title: "Computing For All",
      variant: "secondary"
    }, {title: "SQL/Node.js",
      variant: "default"
    }, {title: "React.js",
      variant: "default"
    }, {title: "JavaScript",
      variant: "default"
    }, {title: "HTML/CSS (Tailwind)",
      variant: "default"
    }
    ],
    date: "January 2025",
    title: "Reddit clone",
    description:
      "A website that mimics the basic functionalities of Reddit, allowing users to make/like posts, make comments, and filter posts by community.",
    items: [
      "Collaborated with team to build authentication (login/logout/signup), community-based posting, liking, and commenting features. Created sidebar community filter as well as entirety of project front-end with teammate using React.js;",
      "Independently connected front-end to Express/SQL backend and debugged database structures.",
      "Designed dynamic homepage to display posts from all joined communities; contributed significantly to both client-side logic and server-side functionality.",
      "Ensured that likes were displayed for all users both in the frontend and the backend.",
    ],
    image: "/images/redditclone.png",
  },
  {
    versions: [{title: "Computing For All",
      variant: "secondary"
    }, {title: "SQL/Node.js",
      variant: "default"
    }, {title: "JavaScript",
      variant: "default"
    }, {title: "HTML/CSS (Tailwind)",
      variant: "default"
    }
    ],
    date: "November 2024",
    title: "L5-Final-Project",
    description:
      "A flashcard website where you can create and study flashcard sets with no distractions",
    items: [
      "Planned out a CRUD system to implement ability to create, read, update, and delete cards.",
      "Wireframed and implemented four interactive front-end pages: Home, Create, Add-Cards, View-Set.",
      "Pair-programmed 80+ lines for backend integration.",
      "Contributed 545+ lines to the final product.",
    ],
    image: "/images/flashcards.png",
  },
  {
    versions: [{title: "Computing For All",
      variant: "secondary"
    }, {title: "SQL/Node.js",
      variant: "default"
    }, {title: "RESTful API endpoints",
      variant: "default"
    }, {title: "JavaScript",
      variant: "default"
    }, {title: "HTML/CSS",
      variant: "default"
    }
    ],
    date: "August 2024",
    title: "L4-Final-Project",
    description:
      "A website with inspiration from IMDB, allowing you to browse movies, add/remove from your watchlist, and search for movies through genre filters",
    items: [
      "Designed 3 of 5 front-end pages: Home, Genres, and Results Display;",
      "Developed 6 RESTful endpoints to enhance application functionality and access the TMDB API;",
      "Wrote 700+ lines of code for linked project.", //TODO link projects to titles
    ],
    image: "/images/movie.png",
  },
];
