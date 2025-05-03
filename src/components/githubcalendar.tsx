'use client';

import { useEffect } from "react";

export default function GithubCalendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;
    script.onload = () => {
    // @ts-expect-error – GitHubCalendar is a global from the script
    GitHubCalendar(".calendar", "dishita-soni", { responsive: true });
    };
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
    document.head.appendChild(link);
  }, []);

  return <div className="calendar">Loading...</div>;
}