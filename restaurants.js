/* ============================================================
   ANN ARBOR RESTAURANT RANKINGS — THE DATA FILE
   ============================================================

   This is the ONLY file you need to edit to update the site.

   THE ORDER OF THIS LIST IS THE RANKING.
   First entry = #1 (the best). Rank numbers are calculated
   automatically — never type them yourself.

   To add a restaurant: copy the example below and paste it at
   the spot it deserves. Pasting between #2 and #3 makes it the
   new #3, and everything below renumbers on its own.

   EXAMPLE ENTRY (copy me!):

   {
     name: "Restaurant Name",                        // REQUIRED — shown on the card
     tier: "tuff",                                   // REQUIRED — exactly one of: "tuff", "mid", "fade"
     instagramUrl: "https://www.instagram.com/reel/XXXX/", // link to the review video —
                                                     //   tapping the card opens it.
     note: "One-line hot take goes here",            // OPTIONAL — short take shown under the name.
   },

   NOTES:
   - To move a restaurant up or down, cut its whole { ... },
     block and paste it at the new spot.
   - Don't forget the comma after each closing brace }.
   ============================================================ */

const RESTAURANTS = [
  {
    name: "Rich J.C.",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DcztgxgEc4q/",
    note: "Good homey Korean food",
  },
  {
    name: "KPOT",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DczwSmokVtr/",
    note: "Expensive, but AYCE clears",
  },
  {
    name: "Zingerman's Deli",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dcuzf7zFVhI/",
    note: "Expensive and used to be better",
  },
  {
    name: "Lan City Noodle Bar",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DczvIj2EdKP/",
    note: "Quick eats and ok prices, mid",
  },
  {
    name: "No Thai",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DcpL3pXS2Oa/",
    note: "Quick, affordable but average",
  },
];
