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
    name: "Paris Banh Mi",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DdCWd9MlHoo/?stkn=dnJkNGd3dWc1azZk",
    note: "A little expensive but worth",
  },
  {
    name: "KPOT",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DczwSmokVtr/",
    note: "Expensive, but AYCE clears",
  },
  {
    name: "Slurping Turtle",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dc4RR7bFLc6/",
    note: "Solid taste but overpriced",
  },
  {
    name: "Zingerman's Deli",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dcuzf7zFVhI/",
    note: "Expensive and used to be better",
  },
  {
    name: "Sadako Japanese Restaurant",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DdCZxtjFJ2I/?stkn=eWd0cWFrbW90Zm8y",
    note: "come here if desparate 😂",
  },
  {
    name: "Pretzel Bell",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dc_padUFL5c/",
    note: "Worth it for happy hour",
  },
  {
    name: "New York Pizza Depot",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DdNCjX7lLCb/?stkn=c3U0ejJoYW84aDYx",
    note: "Lotta variety, good tues deal",
  },
  {
    name: "Halal Bros",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dc_4tn_lGzH/",
    note: "Solid, no bs spot",
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
  {
    name: "Good Time Charley's",
    tier: "fade",
    instagramUrl: "https://www.instagram.com/p/Dc6qyERFIpK/",
    note: "Mid bar food, but close to Rick's",
  },
];
