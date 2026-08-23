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
     tier: "good",                                   // REQUIRED — exactly one of: "good", "mid", "bad"
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
    name: "Zingerman's Delicatessen",
    tier: "good",
    instagramUrl: "https://www.instagram.com/reel/EXAMPLE1/",
    note: "The #8 Reuben is a religious experience.",
  },
  {
    name: "Miss Kim",
    tier: "good",
    instagramUrl: "https://www.instagram.com/reel/EXAMPLE2/",
    note: "Tteokbokki that slaps every single time.",
  },
  {
    name: "Frita Batidos",
    tier: "good",
    instagramUrl: "",
    note: "Chorizo frita + a batido. No further questions.",
  },
  {
    name: "NeoPapalis",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/reel/EXAMPLE4/",
    note: "Solid pizza, but we've had better crust.",
  },
  {
    name: "Panchero's",
    tier: "mid",
    // no instagramUrl and no note — cards render fine without them
  },
  {
    name: "Sketchy Gas Station Sushi",
    tier: "bad",
    instagramUrl: "",
    note: "Teddy is still recovering. 0/10.",
  },
];
