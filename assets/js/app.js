/* ============================================================
   Arghya.online — Application
   Vanilla JS · zero dependencies · data-driven sections
   ============================================================ */
"use strict";

/* ---------------- Icons (inline SVG) ---------------- */
const I = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  codeforces: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="10" width="4.5" height="9" rx="1.4" fill="#F8A11B"/><rect x="9.75" y="5" width="4.5" height="14" rx="1.4" fill="#318CE7"/><rect x="16.5" y="12" width="4.5" height="7" rx="1.4" fill="#D34836"/></svg>',
  vjudge: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#8b5cf6" stroke-width="1.8"/><path d="M7 7.5l3.2 9h1.2l-2-9H7Zm5.6 0-.5 2h1.9c.6 0 .9.3.8 1l-.7 3.9c-.3 1.4.5 2.1 1.8 2.1h1.6l.4-1.9h-1.1c-.5 0-.7-.3-.6-.9l.8-4.2c.2-1.2-.5-2-1.8-2h-2.6Z" fill="#8b5cf6"/></svg>',
  beecrowd: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7L12 2.2Z" stroke="#eab308" stroke-width="1.8" fill="rgba(234,179,8,0.12)"/><circle cx="12" cy="12" r="3.4" fill="#eab308"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M15.5 4.5 8.2 11.8a4.2 4.2 0 0 0 0 5.9l2.6 2.6"/><path d="M13.2 19.7a4.2 4.2 0 0 0 5.4-.5"/><path d="M10.5 13.5h9"/></svg>',
  hackerrank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z"/><path d="M9 8.5v7M15 8.5v7M9 12h6"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4a2 2 0 0 0 2 4h1M17 6h3a2 2 0 0 1-2 4h-1"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="14.5" r="5"/><path d="m9.5 10-3-7M14.5 10l3-7M12 9.5 10 3M12 9.5 14 3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.7 5.8 6.3.8-4.6 4.4 1.2 6.2L12 17.2 6.4 20.2l1.2-6.2L3 9.6l6.3-.8L12 3Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="3.5"/><path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3v6L4.8 18a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14 9V3"/><path d="M8 3h8M7.5 14h9"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.7 13.9-1.7 7 5-3 5 3-1.7-7"/></svg>',
  cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="3"/><path d="M7 9h6M7 12.5h4M15.5 20.5l1.5-1 1.5 1v-4h-3v4Z"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.8v2.4M15 2.8v2.4M9 18.8v2.4M15 18.8v2.4M2.8 9h2.4M2.8 15h2.4M18.8 9h2.4M18.8 15h2.4"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8.5 7.5-5 4.5 5 4.5M15.5 7.5l5 4.5-5 4.5"/></svg>',
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M3 15h18M8 4v16M16 4v16"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.7L3 17.7V21h3.3l5.7-5.7a4.5 4.5 0 0 0 5.7-6L14.4 12l-2.4-2.4 2.7-3.3Z"/></svg>',
  presentation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3h18M5 3v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3"/><path d="m12 15-4 6M12 15l4 6M9 8.5l2 2 4-4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="3"/><path d="M8 3v4M16 3v4M3.5 10.5h17"/></svg>',
  arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 3-9.5 9.5M21 3l-6.5 18-3-8.5L3 9.5 21 3Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.6-4.6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M4 20h16"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  edu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z"/><path d="M6.5 11.5V17c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-5.5M21.5 9v6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="3" y="7.5" width="18" height="13" rx="3"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
};
const svg = (name) => I[name] || I.star;

/* ---------------- Extra icons ---------------- */
I.telegram = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.9 6.6-1.7 8.1c-.13.57-.47.71-.95.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.53.26l.18-2.66 4.86-4.39c.21-.19-.05-.29-.33-.11l-6 3.78-2.59-.81c-.56-.18-.57-.56.12-.83l10.1-3.9c.47-.17.88.12.69.83Z"/></svg>';
I.play = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z"/></svg>';

/* ---------------- Fallback data (mirrors data.json for file:// viewing) ---------------- */
const FALLBACK_DATA = {
  "items": [
    {
      "type": "project",
      "title": "2D Pen Plotter Robot",
      "description": "Custom hardware automated writing robot built from scratch using CNC techniques, stepper drivers, and G-code interpretation.",
      "tags": ["C++", "Arduino", "Hardware Automation"],
      "link": "https://github.com/arghyadebsikder",
      "demo": "",
      "docs": "",
      "images": [],
      "video": "",
      "date": "2024",
      "category": "Robotics",
      "status": "Completed",
      "timeline": "3 months",
      "problem": "Writing repetitive documents by hand wastes hours and off-the-shelf plotters are expensive.",
      "solution": "Designed a 2-axis CNC plotter driven by an Arduino: custom G-code parser, stepper control with A4988 drivers, and a pen lift servo.",
      "challenges": "Backlash in the belt drive and timing jitter in step pulses; solved with acceleration profiles and interrupt-driven stepping.",
      "results": "Repeatable sub-millimetre accuracy on A4 paper at a fraction of commercial cost.",
      "impact": "Became my gateway into embedded control loops and motion systems."
    },
    {
      "type": "project",
      "title": "Line Follower Robot",
      "description": "Autonomous PID-controlled robot navigating complex tracks using IR sensor arrays and real-time motor tuning.",
      "tags": ["Arduino", "C++", "Robotics", "PID Control"],
      "link": "https://github.com/arghyadebsikder",
      "demo": "",
      "docs": "",
      "images": [],
      "video": "",
      "date": "2024",
      "category": "Robotics",
      "status": "Completed",
      "timeline": "6 weeks",
      "problem": "Naive on/off steering makes line followers oscillate and lose the track on sharp curves.",
      "solution": "Implemented a tuned PID loop over an 8-sensor IR array with weighted position estimation and dynamic speed scaling.",
      "challenges": "Sensor calibration under changing ambient light; added auto-calibration sweep at startup.",
      "results": "Stable high-speed runs through intersections, gaps, and hairpin turns.",
      "impact": "Competition-ready platform reused by juniors as a learning base."
    },
    {
      "type": "project",
      "title": "Competitive Programming Library",
      "description": "Battle-tested C++ templates for graphs, number theory, DP optimizations, and data structures used in live contests.",
      "tags": ["C++", "Algorithms", "Data Structures"],
      "link": "https://github.com/arghyadebsikder",
      "demo": "",
      "docs": "",
      "images": [],
      "video": "",
      "date": "2025",
      "category": "Competitive Programming",
      "status": "Active",
      "timeline": "Ongoing",
      "problem": "Re-deriving standard algorithms under contest pressure costs precious minutes.",
      "solution": "Curated a personal library of tested, benchmarked snippets: segment trees, LIS, Dijkstra, modular arithmetic, and more.",
      "challenges": "Balancing genericity with contest-speed typing; settled on short, memorizable implementations.",
      "results": "Consistently faster problem-to-AC time in rated contests.",
      "impact": "Shared with my university's CP community."
    },
    {
      "type": "project",
      "title": "Cinematic Campus Aftermovie",
      "description": "Shot and edited a high-energy event aftermovie with color grading, sound design, and motion graphics.",
      "tags": ["Premiere Pro", "Video Editing"],
      "link": "https://github.com/arghyadebsikder",
      "demo": "",
      "docs": "",
      "images": [],
      "video": "",
      "date": "2025",
      "category": "Video Editing",
      "status": "Completed",
      "timeline": "2 weeks",
      "problem": "Event recaps are usually long, flat, and unwatched.",
      "solution": "A tight edit: beat-matched cuts, speed ramps, clean sound design, and a consistent color grade.",
      "challenges": "Mixed footage sources with different color profiles; normalized via LUT pipeline.",
      "results": "A tight aftermovie that the audience actually rewatched and shared.",
      "impact": "Set the visual standard for subsequent campus events."
    },
    {
      "type": "presentation",
      "title": "Algorithms in Competitive Programming",
      "description": "Campus presentation on optimization techniques and dynamic programming — from brute force to O(n log n) elegance.",
      "tags": ["Algorithms", "Slide Deck"],
      "link": "#",
      "images": [],
      "video": "",
      "date": "2025"
    },
    {
      "type": "presentation",
      "title": "Intro to Embedded Systems",
      "description": "Hands-on workshop walking beginners through microcontrollers, sensors, and their first blinking LED to full automation.",
      "tags": ["Arduino", "Workshop", "Slide Deck"],
      "link": "#",
      "images": [],
      "video": "",
      "date": "2024"
    }
  ],
  "achievements": [
    {
      "icon": "trophy",
      "metric": "Top 10",
      "title": "Divisional Programming Contest",
      "description": "[Placeholder] Replace with your real contest result — rank, contest name, and year.",
      "tag": "Contest",
      "certificate": "",
      "prize": ""
    },
    {
      "icon": "medal",
      "metric": "Olympiad",
      "title": "National Olympiad Participant",
      "description": "[Placeholder] Add your olympiad achievements — math, informatics, or physics.",
      "tag": "Olympiad",
      "certificate": "",
      "prize": ""
    },
    {
      "icon": "star",
      "metric": "1000+",
      "title": "Problems Solved Globally",
      "description": "Cumulative solved count across Codeforces, VJudge, and Beecrowd.",
      "tag": "Ranking",
      "certificate": "",
      "prize": ""
    },
    {
      "icon": "youtube",
      "metric": "10K+",
      "title": "YouTube Milestone",
      "description": "[Placeholder] Add your channel milestone — views, subscribers, or a viral edit.",
      "tag": "Creator",
      "certificate": "",
      "prize": ""
    },
    {
      "icon": "scroll",
      "metric": "Scholar",
      "title": "Merit Scholarship",
      "description": "[Placeholder] Add scholarships or academic honors you have received.",
      "tag": "Academic",
      "certificate": "",
      "prize": ""
    },
    {
      "icon": "flask",
      "metric": "Research",
      "title": "Undergraduate Research",
      "description": "[Placeholder] Add your research work, poster sessions, or publications.",
      "tag": "Research",
      "certificate": "",
      "prize": ""
    }
  ],
  "skills": [
    {
      "icon": "code",
      "title": "Languages & Problem Solving",
      "tags": ["C / C++", "Python", "Data Structures & Algorithms", "Mathematics", "Contest Strategy"]
    },
    {
      "icon": "cpu",
      "title": "Embedded & Robotics",
      "tags": ["Arduino", "ESP32", "Raspberry Pi", "STM32", "PID Control", "Circuit Design", "Sensor Integration"]
    },
    {
      "icon": "film",
      "title": "Media & Tools",
      "tags": ["Video Editing (Premiere Pro)", "Color Grading", "Sound Design", "Git & GitHub", "Linux"]
    }
  ],
  "profiles": {
    "codeforces": {
      "handle": "arghyadebsikder",
      "url": "https://codeforces.com/profile/arghyadebsikder",
      "solved": 500,
      "badge": "Rated"
    },
    "vjudge": {
      "handle": "arghyadeb",
      "url": "https://vjudge.net/user/arghyadeb",
      "solved": 350,
      "badge": "Contests"
    },
    "beecrowd": {
      "handle": "1141274",
      "url": "https://judge.beecrowd.com/en/profile/1141274",
      "solved": 200,
      "badge": "Top Solver"
    },
    "github": {
      "handle": "arghyadebsikder",
      "url": "https://github.com/arghyadebsikder",
      "repos": 25,
      "badge": "Open Source"
    }
  },
  "resume": {
    "education": [
      {
        "title": "B.Sc. in Computer Science & Engineering",
        "subtitle": "[University name — update me]",
        "date": "20XX — present"
      },
      {
        "title": "Higher Secondary Certificate (Science)",
        "subtitle": "[College name — update me]",
        "date": "20XX"
      }
    ],
    "experience": [
      {
        "title": "Freelance Video Editor",
        "subtitle": "Event aftermovies, campus films, and creator content.",
        "date": "20XX — present"
      },
      {
        "title": "Robotics Team Member",
        "subtitle": "[Club/team name] — line follower & automation builds.",
        "date": "20XX — present"
      }
    ],
    "skillsSummary": ["C / C++", "Python", "DSA", "Mathematics", "Arduino", "ESP32", "Raspberry Pi", "Premiere Pro", "Git"],
    "languages": [
      { "name": "Bangla", "level": "native" },
      { "name": "English", "level": "professional" },
      { "name": "Hindi", "level": "conversational" }
    ]
  }
};

/* ---------------- Utilities ---------------- */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------------- Theme ---------------- */
const Theme = {
  init() {
    const param = new URLSearchParams(location.search).get("theme");
    const saved = localStorage.getItem("theme");
    this.set(param || saved || "dark", false);
    $("#themeToggle").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      this.set(cur === "dark" ? "light" : "dark", true);
    });
  },
  set(mode, persist) {
    document.documentElement.setAttribute("data-theme", mode);
    if (persist) localStorage.setItem("theme", mode);
    const btn = $("#themeToggle");
    if (btn) {
      btn.innerHTML = mode === "dark" ? svg("sun") : svg("moon");
      btn.setAttribute("aria-label", mode === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  },
};

/* ---------------- Typewriter ---------------- */
function typewriter() {
  const el = $("#typeTarget");
  if (!el) return;
  const roles = ["Competitive Programmer", "Math Lover", "Embedded Systems & Robotics Builder", "Video Editor"];
  if (prefersReduced) { el.textContent = roles.join(" \u00b7 "); return; }
  let ri = 0, ci = 0, deleting = false;
  const tick = () => {
    const word = roles[ri];
    el.textContent = word.slice(0, ci);
    let delay = deleting ? 45 : 110;
    if (!deleting && ci === word.length) { delay = 2800; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 500; }
    ci += deleting ? -1 : 1;
    setTimeout(tick, delay);
  };
  tick();
}

/* ---------------- Detail popup (modal) ---------------- */
const Modal = {
  overlay: null, body: null,
  init() {
    this.overlay = $("#modalOverlay");
    this.body = $("#modalBody");
    $("#modalClose").addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", (e) => { if (e.target === this.overlay) this.close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") this.close(); });
    /* switch between certificate / prize photo / video inside the popup */
    this.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".media-btn");
      if (!btn) return;
      $$(".media-btn", this.body).forEach((b) => b.classList.toggle("active", b === btn));
      const stage = $("#mediaStage", this.body);
      if (!stage) return;
      if (btn.dataset.media === "vid") stage.innerHTML = videoStage(btn.dataset.src, btn.dataset.title || "");
      else stage.innerHTML = `<img src="${esc(btn.dataset.src)}" alt="${esc(btn.dataset.title || "Photo")}">`;
    });
  },
  open(html, label) {
    this.body.innerHTML = html;
    this.overlay.setAttribute("aria-label", label || "Details");
    this.overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    $("#modalClose").focus();
  },
  close() {
    if (!this.overlay || !this.overlay.classList.contains("open")) return;
    this.overlay.classList.remove("open");
    this.body.innerHTML = "";
    document.body.style.overflow = "";
  },
};

function ytEmbed(url) {
  const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}
function videoStage(src, title) {
  const emb = ytEmbed(src);
  if (emb) return `<iframe src="${emb}" title="${esc(title)} video" allowfullscreen loading="lazy"></iframe>`;
  if (/\.(mp4|webm|mov)(\?|$)/i.test(src)) return `<video src="${esc(src)}" controls playsinline></video>`;
  return `<a class="btn btn-ghost btn-sm" href="${esc(src)}" target="_blank" rel="noopener">${svg("play")} Watch video</a>`;
}
function mediaFor(it) {
  const imgs = (it.images || []).filter(Boolean);
  const vid = String(it.video || "").trim();
  return { imgs, vid, has: imgs.length > 0 || !!vid };
}
function galleryHTML(m, title) {
  if (!m.has) return "";
  const btns = [];
  m.imgs.forEach((src, i) => btns.push(`<button class="filter-chip media-btn ${i === 0 ? "active" : ""}" data-media="img" data-src="${esc(src)}" data-title="${esc(title)}">${m.imgs.length > 1 ? `Photo ${i + 1}` : "Photo"}</button>`));
  if (m.vid) btns.push(`<button class="filter-chip media-btn ${m.imgs.length ? "" : "active"}" data-media="vid" data-src="${esc(m.vid)}" data-title="${esc(title)}">Video</button>`);
  const stage = m.imgs.length
    ? `<img src="${esc(m.imgs[0])}" alt="${esc(title)}">`
    : videoStage(m.vid, title);
  return `<div class="modal-media">${btns.length > 1 ? `<div class="media-switch">${btns.join("")}</div>` : ""}<div class="media-stage" id="mediaStage">${stage}</div></div>`;
}

/* ---------------- Data engine ---------------- */
async function loadData() {
  let data = FALLBACK_DATA;
  try {
    const res = await fetch("./data.json", { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.items)) data = json;
    }
  } catch (_) { /* file:// or offline — use fallback */ }
  const items = data.items || [];
  renderProjects(items.filter((it) => it.type === "project"));
  renderTalks(items.filter((it) => it.type !== "project"));
  renderAchievements(data.achievements || []);
  renderSkills(data.skills || []);
  renderProfiles(data.profiles || {});
  renderResume(data.resume || {});
  counters();
  liveStats(data.profiles || {});
}

/* ---------------- Achievements ---------------- */
function achMedia(a) {
  const m = [];
  if (a.certificate) m.push({ label: "Certificate", src: a.certificate });
  if (a.prize) m.push({ label: "Prize photo", src: a.prize });
  return m;
}
function openAchievement(a) {
  const media = achMedia(a);
  if (!media.length) return;
  const switcher = media.length > 1
    ? `<div class="media-switch">${media.map((m, i) => `<button class="filter-chip media-btn ${i === 0 ? "active" : ""}" data-media="img" data-src="${esc(m.src)}" data-title="${esc(a.title)} — ${esc(m.label)}">${esc(m.label)}</button>`).join("")}</div>`
    : "";
  Modal.open(`
    <div class="modal-kicker">// ${esc(a.tag || "Achievement")}</div>
    <h3 class="modal-title">${esc(a.title)}</h3>
    <p class="modal-desc">${esc(a.description || "")}</p>
    <div class="modal-media">${switcher}<div class="media-stage" id="mediaStage"><img src="${esc(media[0].src)}" alt="${esc(a.title)} — ${esc(media[0].label)}"></div></div>
  `, a.title);
}
function renderAchievements(items) {
  const grid = $("#achGrid");
  grid.innerHTML = items.map((a, i) => {
    const media = achMedia(a);
    const clickable = media.length > 0;
    const hint = media.length === 2 ? "View certificate & prize photo" : a.certificate ? "View certificate" : "View prize photo";
    return `
    <article class="ach-card glass glass-hover reveal ${clickable ? "card-click" : ""}" ${clickable ? `data-ach="${i}" tabindex="0" role="button" aria-label="${esc(a.title)}: ${esc(hint)}"` : ""}>
      <span class="chip ach-tag">${esc(a.tag)}</span>
      <div class="well">${svg(a.icon)}</div>
      <div class="ach-metric">${esc(a.metric)}</div>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.description)}</p>
      ${clickable ? `<span class="card-hint">${svg("eye")} ${esc(hint)}</span>` : ""}
    </article>`;
  }).join("");
  grid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-ach]");
    if (card) openAchievement(items[+card.dataset.ach]);
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-ach]");
    if (card) { e.preventDefault(); openAchievement(items[+card.dataset.ach]); }
  });
  Reveal.scan();
}

/* ---------------- Projects ---------------- */
let ALL_PROJECTS = [];
function openProject(p) {
  const m = mediaFor(p);
  const rows = [
    ["Problem", p.problem], ["Solution", p.solution], ["Challenges", p.challenges],
    ["Results", p.results], ["Impact", p.impact],
  ].filter(([, v]) => v)
    .map(([k, v]) => `<div class="case-row"><h4>${k}</h4><p>${esc(v)}</p></div>`).join("");
  const links = [
    p.link && p.link !== "#" ? `<a class="btn btn-ghost btn-sm" href="${esc(p.link)}" target="_blank" rel="noopener">${svg("github")} GitHub</a>` : "",
    p.demo ? `<a class="btn btn-ghost btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener">${svg("globe")} Live Demo</a>` : "",
    p.docs ? `<a class="btn btn-ghost btn-sm" href="${esc(p.docs)}" target="_blank" rel="noopener">${svg("doc")} Docs</a>` : "",
  ].filter(Boolean).join("");
  const meta = [p.category, p.status, p.date, p.timeline ? `timeline: ${p.timeline}` : ""]
    .filter(Boolean).map((x) => `<span class="chip">${esc(x)}</span>`).join("");
  Modal.open(`
    <div class="modal-kicker">// Case study</div>
    <h3 class="modal-title">${esc(p.title)}</h3>
    <div class="modal-meta">${meta}</div>
    <p class="modal-desc">${esc(p.description)}</p>
    ${galleryHTML(m, p.title)}
    ${rows ? `<div class="case-rows">${rows}</div>` : ""}
    ${links ? `<div class="modal-links">${links}</div>` : ""}
  `, p.title);
}
function renderProjects(projects) {
  ALL_PROJECTS = projects;
  const grid = $("#projectsGrid");
  grid.innerHTML = projects.map((p, idx) => {
    const m = mediaFor(p);
    const hasCase = !!(p.problem || p.solution || p.challenges || p.results || p.impact);
    const clickable = hasCase || m.has;
    const glyph = p.category === "Video Editing" ? "film" : p.category === "Competitive Programming" ? "code" : "cpu";
    const thumb = m.imgs.length ? `<img src="${esc(m.imgs[0])}" alt="${esc(p.title)}" loading="lazy">` : `<div class="well">${svg(glyph)}</div>`;
    return `
    <article class="project-card glass glass-hover reveal ${clickable ? "card-click" : ""}" data-category="${esc(p.category || "Other")}" data-search="${esc((p.title + " " + (p.tags || []).join(" ") + " " + (p.category || "")).toLowerCase())}" ${clickable ? `data-idx="${idx}" tabindex="0" role="button" aria-label="Open case study: ${esc(p.title)}"` : ""}>
      <div class="project-thumb">${thumb}
        <div class="proj-flags">
          ${p.status ? `<span class="chip status-chip">${esc(p.status)}</span>` : ""}
          <span class="chip">${esc(p.category || "project")}</span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-title-row"><h3>${esc(p.title)}</h3><span class="project-date">${esc(p.date || "")}</span></div>
        <p class="project-desc">${esc(p.description)}</p>
        <div class="project-tags">${(p.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${clickable ? `<span class="card-hint">${svg("eye")} Click for the full case study${m.has ? " · photos & video" : ""}</span>` : ""}
      </div>
    </article>`;
  }).join("");
  $("#projectCount").textContent = String(projects.length).padStart(2, "0") + " builds";
  grid.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest("[data-idx]");
    if (card) openProject(projects[+card.dataset.idx]);
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-idx]");
    if (card) { e.preventDefault(); openProject(projects[+card.dataset.idx]); }
  });
  buildFilters(projects);
  Reveal.scan();
}
function buildFilters(projects) {
  const cats = ["All", ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const bar = $("#filterChips");
  bar.innerHTML = cats.map((c, i) => `<button class="filter-chip ${i === 0 ? "active" : ""}" data-cat="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join("");
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    $$(".filter-chip", bar).forEach((b) => { b.classList.toggle("active", b === btn); b.setAttribute("aria-pressed", b === btn); });
    applyProjectFilter();
  });
  $("#projectSearch").addEventListener("input", applyProjectFilter);
}
function applyProjectFilter() {
  const cat = $("#filterChips .filter-chip.active")?.dataset.cat || "All";
  const q = $("#projectSearch").value.trim().toLowerCase();
  let visible = 0;
  $$("#projectsGrid .project-card").forEach((card) => {
    const okCat = cat === "All" || card.dataset.category === cat;
    const okQ = !q || card.dataset.search.includes(q);
    const show = okCat && okQ;
    card.classList.toggle("filtered-out", !show);
    if (show) visible++;
  });
  $("#noResults").classList.toggle("show", visible === 0);
}

/* ---------------- Talks ---------------- */
function openTalk(t) {
  const m = mediaFor(t);
  const hasSlides = t.link && t.link !== "#";
  const meta = [...(t.tags || []), t.date].filter(Boolean).map((x) => `<span class="chip">${esc(x)}</span>`).join("");
  Modal.open(`
    <div class="modal-kicker">// Presentation</div>
    <h3 class="modal-title">${esc(t.title)}</h3>
    <div class="modal-meta">${meta}</div>
    <p class="modal-desc">${esc(t.description)}</p>
    ${galleryHTML(m, t.title)}
    ${hasSlides ? `<div class="modal-links"><a class="btn btn-ghost btn-sm" href="${esc(t.link)}" target="_blank" rel="noopener">${svg("presentation")} View slides</a></div>` : ""}
  `, t.title);
}
function renderTalks(talks) {
  const list = $("#talksList");
  list.innerHTML = talks.map((t, i) => {
    const m = mediaFor(t);
    const hasSlides = t.link && t.link !== "#";
    const clickable = m.has || hasSlides;
    return `
    <article class="talk-row glass glass-hover reveal ${clickable ? "card-click" : ""}" ${clickable ? `data-talk="${i}" tabindex="0" role="button" aria-label="View details: ${esc(t.title)}"` : ""}>
      <span class="talk-index">${String(i + 1).padStart(2, "0")}</span>
      <div class="talk-icon">${svg("presentation")}</div>
      <div class="talk-body">
        <div class="talk-meta"><span class="chip">${esc(t.type || "presentation")}</span><span class="talk-date">${svg("calendar")} ${esc(t.date || "")}</span></div>
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.description)}</p>
        <div class="talk-tags">${(t.tags || []).map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
        ${clickable ? `<span class="card-hint">${svg("eye")} Click for details${m.has ? " · photos & video" : ""}</span>` : ""}
      </div>
    </article>`;
  }).join("");
  $("#talkCount").textContent = String(talks.length).padStart(2, "0") + " sessions";
  list.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest("[data-talk]");
    if (card) openTalk(talks[+card.dataset.talk]);
  });
  list.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-talk]");
    if (card) { e.preventDefault(); openTalk(talks[+card.dataset.talk]); }
  });
  Reveal.scan();
}

/* ---------------- Skills (simple tags, no bars) ---------------- */
function renderSkills(groups) {
  $("#skillsGrid").innerHTML = groups.map((g, i) => `
    <div class="glass glass-hover skill-card reveal ${i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""}">
      <div class="skill-head"><div class="well">${svg(g.icon || "star")}</div><h3>${esc(g.title)}</h3></div>
      <div class="skill-tags">${(g.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </div>`).join("");
  Reveal.scan();
}

/* ---------------- Coding profiles (dynamic + combined stats) ---------------- */
function renderProfiles(p) {
  const cf = p.codeforces || {}, vj = p.vjudge || {}, bc = p.beecrowd || {}, gh = p.github || {};
  const card = (icon, badge, badgeKey, numKey, num, label, name, url) => `
    <article class="glass glass-hover profile-card reveal">
      <span class="chip profile-badge" ${badgeKey ? `data-stat="${badgeKey}"` : ""}>${esc(badge)}</span>
      <div class="well">${svg(icon)}</div>
      <div class="profile-num"><span data-stat="${numKey}" data-count="${num || 0}" data-suffix="+">0</span></div>
      <div class="profile-num-label">${label}</div>
      <h3>${esc(name)}</h3>
      <a class="profile-link" href="${esc(url || "#")}" target="_blank" rel="noopener">Visit profile ${svg("externalLink")}</a>
    </article>`;
  $("#profilesGrid").innerHTML =
    card("codeforces", cf.badge || "Rated", "cf-rank", "cf-solved", cf.solved, 'problems solved · rating <b data-stat="cf-rating">—</b>', "Codeforces", cf.url) +
    card("vjudge", vj.badge || "Contests", "", "vj-solved", vj.solved, "problems solved", "VJudge", vj.url) +
    card("beecrowd", bc.badge || "Top Solver", "", "bc-solved", bc.solved, "problems solved", "Beecrowd", bc.url) +
    card("github", gh.badge || "Open Source", "", "gh-repos", gh.repos, 'repositories · <b data-stat="gh-followers">—</b> followers', "GitHub", gh.url);
  const total = (cf.solved || 0) + (vj.solved || 0) + (bc.solved || 0);
  $("#combinedPanel").innerHTML = `
    <div class="glass gh-panel counter-scope reveal">
      <div class="gh-panel-head">
        <h3>${svg("star")} Combined Statistics — all 4 platforms</h3>
        <div class="gh-stats">
          <div class="gh-stat"><b><span data-stat="total-solved" data-count="${total}" data-suffix="+">0</span></b><span>total problems solved</span></div>
          <div class="gh-stat"><b data-stat="cf-rating-2">—</b><span>Codeforces rating</span></div>
          <div class="gh-stat"><b><span data-stat="gh-repos-2" data-count="${gh.repos || 0}" data-suffix="+">0</span></b><span>GitHub repositories</span></div>
          <div class="gh-stat"><b data-stat="gh-followers-2">—</b><span>GitHub followers</span></div>
        </div>
      </div>
      <p class="contrib-note">// Codeforces & GitHub numbers auto-update live · VJudge & Beecrowd come from data.json (no public API)</p>
    </div>`;
  Reveal.scan();
}

async function liveStats(p) {
  const setNum = (key, val) => {
    $$(`[data-stat="${key}"]`).forEach((el) => {
      if (el.dataset.count !== undefined) { el.dataset.count = val; el.dataset.suffix = ""; }
      el.textContent = val;
    });
  };
  const totals = {
    cf: (p.codeforces && p.codeforces.solved) || 0,
    vj: (p.vjudge && p.vjudge.solved) || 0,
    bc: (p.beecrowd && p.beecrowd.solved) || 0,
  };
  const updateTotal = () => setNum("total-solved", totals.cf + totals.vj + totals.bc);
  /* GitHub — live */
  try {
    const res = await fetch(`https://api.github.com/users/${p.github.handle}`);
    if (res.ok) {
      const u = await res.json();
      if (Number.isFinite(u.public_repos)) { setNum("gh-repos", u.public_repos); setNum("gh-repos-2", u.public_repos); }
      if (Number.isFinite(u.followers)) { setNum("gh-followers", u.followers); setNum("gh-followers-2", u.followers); }
    }
  } catch (_) { /* offline — keep data.json numbers */ }
  /* Codeforces rating — live */
  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${p.codeforces.handle}`);
    if (res.ok) {
      const j = await res.json();
      const u = j.result && j.result[0];
      if (u && u.rating) { setNum("cf-rating", u.rating); setNum("cf-rating-2", u.rating); }
      if (u && u.rank) setNum("cf-rank", u.rank);
    }
  } catch (_) { /* keep fallback */ }
  /* Codeforces solved count — live */
  try {
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${p.codeforces.handle}`);
    if (res.ok) {
      const j = await res.json();
      if (j.status === "OK") {
        const seen = new Set();
        (j.result || []).forEach((s) => {
          if (s.verdict === "OK" && s.problem) seen.add(`${s.problem.contestId}-${s.problem.index}`);
        });
        if (seen.size) { totals.cf = seen.size; setNum("cf-solved", seen.size); updateTotal(); }
      }
    }
  } catch (_) { /* keep fallback */ }
  /* VJudge — attempted live fetch (falls back silently if blocked by CORS) */
  try {
    const res = await fetch(`https://vjudge.net/user/solveDetail/${p.vjudge.handle}`, { headers: { Accept: "application/json" } });
    if (res.ok) {
      const j = await res.json();
      const n = Object.values(j.acRecords || {}).reduce((s, arr) => s + (arr ? arr.length : 0), 0);
      if (n) { totals.vj = n; setNum("vj-solved", n); updateTotal(); }
    }
  } catch (_) { /* keep data.json number */ }
}

/* ---------------- Resume (dynamic from data.json) ---------------- */
function renderResume(r) {
  const item = (it) => `
    <div class="resume-item">
      <h4>${esc(it.title)}</h4>
      <p class="ri-sub">${esc(it.subtitle || "")}</p>
      <p class="ri-date">${esc(it.date || "")}</p>
    </div>`;
  $("#eduList").innerHTML = (r.education || []).map(item).join("");
  $("#expList").innerHTML = (r.experience || []).map(item).join("");
  $("#skillChips").innerHTML = (r.skillsSummary || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("");
  $("#langRows").innerHTML = (r.languages || []).map((l) => `<div class="lang-row"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>`).join("");
}

/* ---------------- Reveal on scroll ---------------- */
const Reveal = {
  io: null,
  init() {
    if (prefersReduced || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); this.io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    this.scan();
  },
  scan() {
    if (!this.io) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
    $$(".reveal:not(.in)").forEach((el) => this.io.observe(el));
  },
};

/* ---------------- Counters ---------------- */
function counters() {
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    if (prefersReduced) { el.textContent = target + suffix; return; }
    const t0 = performance.now(), dur = 1600;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (el.dataset.suffix || suffix);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (prefersReduced || !("IntersectionObserver" in window)) {
    $$("[data-count]").forEach(animate);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      $$("[data-count]", en.target).forEach(animate);
      io.unobserve(en.target);
    });
  }, { threshold: 0.3 });
  $$(".counter-scope").forEach((el) => io.observe(el));
}

/* ---------------- Timeline scroll animation ---------------- */
function timeline() {
  const rail = $("#timelineFill");
  const wrap = $("#timeline");
  if (!rail || !wrap) return;
  const update = () => {
    const r = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(Math.max((vh * 0.75 - r.top) / r.height, 0), 1);
    rail.style.height = (progress * 100) + "%";
  };
  document.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------------- Scroll spy / progress / back-top ---------------- */
function scrollFx() {
  const bar = $("#progressBar");
  const backTop = $("#backTop");
  const links = $$(".nav-links a, .mobile-menu a");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const onScroll = () => {
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = (pct * 100).toFixed(2) + "%";
    backTop.classList.toggle("show", h.scrollTop > 600);
    let current = null;
    for (const s of sections) if (s.getBoundingClientRect().top <= 140) current = s;
    links.forEach((a) => a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id));
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));
}

/* ---------------- Mobile menu ---------------- */
function mobileMenu() {
  const burger = $("#burger"), menu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.innerHTML = open ? svg("x") : svg("menu");
    burger.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) { menu.classList.remove("open"); burger.innerHTML = svg("menu"); burger.setAttribute("aria-expanded", "false"); }
  });
}

/* ---------------- Command palette ---------------- */
function palette() {
  const overlay = $("#paletteOverlay"), input = $("#paletteInput"), list = $("#paletteList");
  const baseItems = [
    { label: "About", kind: "section", icon: "star", go: "#about" },
    { label: "Journey", kind: "section", icon: "calendar", go: "#journey" },
    { label: "Achievements", kind: "section", icon: "trophy", go: "#achievements" },
    { label: "Projects", kind: "section", icon: "cpu", go: "#projects" },
    { label: "Presentations", kind: "section", icon: "presentation", go: "#presentations" },
    { label: "Research", kind: "section", icon: "flask", go: "#research" },
    { label: "Skills", kind: "section", icon: "code", go: "#skills" },
    { label: "Coding Profiles", kind: "section", icon: "github", go: "#profiles" },
    { label: "Resume", kind: "section", icon: "briefcase", go: "#resume" },
    { label: "Contact", kind: "section", icon: "mail", go: "#contact" },
    { label: "Toggle theme", kind: "action", icon: "sun", run: () => $("#themeToggle").click() },
    { label: "Download resume", kind: "action", icon: "download", run: () => window.open("./assets/resume.pdf", "_blank") },
    { label: "Copy email address", kind: "action", icon: "mail", run: () => navigator.clipboard?.writeText("arghyadebsikder@gmail.com") },
  ];
  let items = [], sel = 0;
  const open = () => { overlay.classList.add("open"); input.value = ""; render(""); input.focus(); };
  const close = () => overlay.classList.remove("open");
  const render = (q) => {
    const projectItems = ALL_PROJECTS.map((p) => ({ label: p.title, kind: "project", icon: "cpu", go: "#projects" }));
    items = [...baseItems, ...projectItems].filter((it) => !q || it.label.toLowerCase().includes(q));
    sel = 0;
    list.innerHTML = items.length
      ? items.map((it, i) => `<button class="palette-item ${i === 0 ? "sel" : ""}" data-i="${i}">${svg(it.icon)}<span>${esc(it.label)}</span><span class="pi-kind">${it.kind}</span></button>`).join("")
      : '<div class="palette-empty">No matches found.</div>';
  };
  const exec = (it) => {
    close();
    if (it.run) it.run();
    else if (it.go) { location.hash = it.go; }
  };
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); overlay.classList.contains("open") ? close() : open(); }
    else if (e.key === "Escape") close();
    else if (overlay.classList.contains("open")) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        sel = (sel + (e.key === "ArrowDown" ? 1 : items.length - 1)) % Math.max(items.length, 1);
        $$(".palette-item", list).forEach((b, i) => b.classList.toggle("sel", i === sel));
        $$(".palette-item", list)[sel]?.scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && items[sel]) { exec(items[sel]); }
    }
  });
  input.addEventListener("input", () => render(input.value.trim().toLowerCase()));
  list.addEventListener("click", (e) => {
    const b = e.target.closest(".palette-item");
    if (b) exec(items[+b.dataset.i]);
  });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  $("#paletteBtn").addEventListener("click", open);
}

/* ---------------- Magnetic buttons ---------------- */
function magnetic() {
  if (prefersReduced || window.matchMedia("(pointer: coarse)").matches) return;
  $$(".btn-primary").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / r.width;
      const dy = (e.clientY - r.top - r.height / 2) / r.height;
      btn.style.transform = `translate(${dx * 5}px, ${dy * 4 - 3}px)`;
    });
    btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
  });
}

/* ---------------- Contact form (mailto) ---------------- */
function contactForm() {
  const form = $("#contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cfName").value.trim();
    const email = $("#cfEmail").value.trim();
    const msg = $("#cfMsg").value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    location.href = `mailto:arghyadebsikder@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ---------------- Footer year ---------------- */
function footerYear() { $("#year").textContent = new Date().getFullYear(); }

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  Reveal.init();
  typewriter();
  Modal.init();
  loadData();
  timeline();
  scrollFx();
  mobileMenu();
  palette();
  magnetic();
  contactForm();
  footerYear();
  /* static icon mounts */
  $$("[data-icon]").forEach((el) => { el.innerHTML = svg(el.dataset.icon); });
});
