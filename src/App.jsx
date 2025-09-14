import React from "react";

export default function App() {
  const projects = [
    {
      id: "soccer-fan",
      title: "Soccer Fan (Soccer Royale - Mini Action)",
      screenshot: "soccer-fan.png",
      playLink:
        "https://play.google.com/store/apps/details?id=com.Divyamu.SoccerFan&hl=en_IN",
      codeLink: null,
      concept:
        "Multiplayer football game built using Photon PUN. Fast-paced matches with simple controls and social play.",
      features: [
        "Realtime multiplayer using Photon PUN",
        "In-App Purchases (IAP) for cosmetic items",
        "Advertisements (rewarded & interstitial) integrated",
        "Achievements and Leaderboards for competitive play",
        "Simple responsive UI tuned for mobile & desktop",
      ],
      status: "completed",
    },
    {
      id: "bingo",
      title: "BINGO",
      screenshot: "bingo.png",
      playLink: "https://namrutha.itch.io/bingo",
      codeLink: "https://github.com/namruthagude/BINGO",
      concept:
        "Multiplayer number-based puzzle using Photon PUN. Also supports single-player vs CPU with a turn-based mechanic.",
      features: [
        "Turn-based multiplayer via Photon PUN",
        "Single-player mode with AI opponent",
        "Clear HUD and number-marking mechanics",
        'Win conditions award letters to form "BINGO"',
      ],
      status: "completed",
    },
    {
      id: "burnt-fortune",
      title: "Burnt Fortune",
      screenshot: "burnt-fortune.png",
      playLink: "https://namrutha.itch.io/burnt-fortune",
      codeLink: "https://github.com/namruthagude/BurntFortune",
      concept:
        'A jam game built in 72 hours for the Brackeys Game Jam (theme: "Risk it for the biscuit"). Focused on tight, replayable sessions with score-chasing.',
      features: [
        "Quick-run gameplay loop for score attack",
        "Polished and clean UI made under time constraints",
        "High-score tracking",
      ],
      status: "completed",
    },
    {
      id: "glitch-of-the-dead",
      title: "Glitch Of The Dead",
      screenshot: "glitch-of-the-dead.png",
        playLink: "https://namrutha.itch.io/glitch-of-the-dead",
      codeLink: "https://github.com/namruthagude/GlitchOfTheDead",
      concept:
        '72-hour jam game for Patch Notes (theme: "ERROR IS THE FEATURE"). Uses Unity Anonymous Authentication and Leaderboards.',
      features: [
        "Unity Anonymous Authentication for quick sign-ins",
        "Global Leaderboard integration",
        "Jam-focused design emphasizing the theme",
      ],
      status: "completed",
    },
    {
      id: "dino-mover",
      title: "Dinoo Mover",
      screenshot: "dino-mover.png",
      playLink: "https://namrutha.itch.io/dinoo",
      codeLink: "https://github.com/namruthagude/DinoMover",
      concept:
        "A colorful offline-friendly dino runner—playable when the internet is down. Designed to be lightweight and fun for short sessions.",
      features: [
        "Offline-play friendly (no network required)",
        "Colorful stylized visuals",
        "Simple controls for replayability",
      ],
      status: "completed",
    },
    {
      id: "pong",
      title: "PONG (Multiplayer)",
      playLink: "#",
      codeLink: "#",
      concept:
        "Modern multiplayer Pong built with Netcode for GameObjects. Focus on smooth networked gameplay and competitive scoring.",
      features: [
        "Multiplayer using Netcode for GameObjects",
        "Classic Pong mechanics with modern polish",
      ],
      status: "wip",
    },
    {
      id: "chess-ai",
      title: "Online Chess with AI",
      playLink: "#",
      codeLink: "#",
      concept:
        "A chess game with online multiplayer and AI that can detect and play the best move.",
      features: ["Multiplayer matchmaking", "AI-driven move evaluation"],
      status: "wip",
    },
    {
      id: "fps-game",
      title: "Fire Squad (FPS)",
      playLink: "#",
      codeLink: "#",
      concept:
        "A retro military themed FPS game supporting both single-player and multiplayer modes. Built with Photon PUN and Firebase Authentication.",
      features: ["Single-player and multiplayer modes", "Firebase Authentication"],
      status: "wip",
    },
    {
      id: "brickbreaker",
      title: "Brickbreaker (Design Stage)",
      playLink: "#",
      codeLink: "#",
      concept:
        "A modern twist on the classic brickbreaker. Currently in gameplay design stage focusing on level structure and mechanics.",
      features: ["Planned power-ups and varied brick types", "Level progression"],
      status: "wip",
    },
  ];

  const getImg = (filename) => {
    const base = import.meta.env.BASE_URL || "/";
    return `${base}assets/${filename}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Namrutha Gude — Portfolio
        </h1>
        <p className="mt-2 text-slate-700">
          Selected projects with detailed explanations, playable demos and source
          code.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className={`rounded-2xl overflow-hidden shadow-md ${p.status === "wip" ? "bg-yellow-50 border border-yellow-300" : "bg-white"}`}
          >
            {p.status !== "wip" && p.screenshot && (
              <div className="h-48 md:h-40 lg:h-44 bg-slate-100 flex items-center justify-center">
                <img
                  src={getImg(p.screenshot)}
                  alt={`${p.title} screenshot`}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const base = import.meta.env.BASE_URL || "/";
                    e.currentTarget.src = `${base}assets/placeholder.png`;
                  }}
                />
              </div>
            )}

            <div className="p-4 md:p-5">
              <h2 className="text-xl font-semibold text-blue-600 flex items-center justify-between">
                {p.title}
                {p.status === "wip" && (
                  <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded">🚧 WIP</span>
                )}
              </h2>

              <section className="mt-3 text-slate-700">
                <h3 className="font-medium">Concept</h3>
                <p className="mt-1 text-sm leading-relaxed">{p.concept}</p>
              </section>

              <section className="mt-3 text-slate-700">
                <h3 className="font-medium">Features</h3>
                <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </section>

              <div className="mt-4 flex gap-3">
                {p.playLink && p.playLink !== "#" && p.status !== "wip" ? (
                  <a
                    href={p.playLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
                    aria-label={`Play ${p.title}`}
                  >
                    ▶ Play
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (p.status === "wip") {
                        alert("This project is work-in-progress. Coming soon!");
                      } else {
                        alert("Play link not available yet.");
                      }
                    }}
                    className="flex-1 inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-400 bg-slate-100 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    ▶ Play
                  </button>
                )}

                {p.codeLink ? (
                  <a
                    href={p.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition ${p.status === "wip" ? "bg-slate-300 text-slate-600 cursor-not-allowed" : "bg-blue-600 text-white hover:opacity-95"}`}
                    onClick={(e) => {
                      if (p.status === "wip") {
                        e.preventDefault();
                        alert("Code link not available yet.");
                      }
                    }}
                  >
                    💻 View Code
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
