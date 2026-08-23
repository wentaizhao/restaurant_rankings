/* ============================================================
   ANN ARBOR RESTAURANT RANKINGS — THE DATA FILE
   ============================================================

   This is the ONLY file you need to edit to update the site.
   Copy the example below, paste it inside the RESTAURANTS list,
   change the values, save, and reload the page. That's it.

   EXAMPLE ENTRY (copy me!):

   {
     name: "Restaurant Name",                        // REQUIRED — shown on the card
     rank: 1,                                        // REQUIRED — 1 is the best. Use unique numbers.
     tier: "good",                                   // REQUIRED — exactly one of: "good", "mid", "bad"
     instagramUrl: "https://www.instagram.com/reel/XXXX/", // link to the review video —
                                                     //   tapping the card opens it.
     note: "One-line hot take goes here",            // OPTIONAL — short take shown under the name.
   },

   NOTES:
   - The list does NOT need to stay in order — the site sorts by
     rank automatically. But keep ranks unique: if a new spot
     lands at rank 3, bump the old 3, 4, 5... down by one.
   - Don't forget the comma after each closing brace }.
   ============================================================ */

const RESTAURANTS = [
  {
    name: "Zingerman's Delicatessen",
    rank: 1,
    tier: "good",
    instagramUrl: "https://www.instagram.com/reel/EXAMPLE1/",
    note: "The #8 Reuben is a religious experience.",
  },
  {
    name: "Miss Kim",
    rank: 2,
    tier: "good",
    instagramUrl: "https://www.instagram.com/reel/EXAMPLE2/",
    note: "Tteokbokki that slaps every single time.",
  },
  {
    name: "Frita Batidos",
    rank: 3,
    tier: "good",
    instagramUrl: "",
    note: "Chorizo frita + a batido. No further questions.",
  },
  {
    name: "NeoPapalis",
    rank: 4,
    tier: "mid",
    instagramUrl: "https://www.instagram.com/reel/EXAMPLE4/",
    note: "Solid pizza, but we've had better crust.",
  },
  {
    name: "Panchero's",
    rank: 5,
    tier: "mid",
    // no instagramUrl and no note — cards render fine without them
  },
  {
    name: "Sketchy Gas Station Sushi",
    rank: 6,
    tier: "bad",
    instagramUrl: "",
    note: "Teddy is still recovering. 0/10.",
  },
];
