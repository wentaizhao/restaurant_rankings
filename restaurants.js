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
    name: "Bewon",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DddOTpklbC4/",
    note: "Gas but a bit off campus",
  },
  {
    name: "Rich J.C.",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DcztgxgEc4q/",
    note: "Good homey Korean food",
  },
  {
    name: "Jamaican Jerk Pit",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DdnG2tZFK0a/?img_index=3&stkn=bmVmZm14a2plMmIy",
    note: "Reliably gas",
  },
  {
    name: "Maize and Blue Deli",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/Dde1ICklJZC/",
    note: "Underrated AF",
  },
  {
    name: "Paris Banh Mi",
    tier: "tuff",
    instagramUrl: "https://www.instagram.com/p/DdCWd9MlHoo/",
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
    name: "Bodega Bros",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DdhHZA7FUxa/?stkn=eWQxbzB1aXd1a2dx",
    note: "Tuff but supports Cam Hendrix",
  },
  {
    name: "Zingerman's Deli",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dcuzf7zFVhI/",
    note: "Expensive and used to be better",
  },
  {
    name: "Noori Chicken",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DdkLPdflKWV/",
    note: "Stick to chicken to be safe, otherwise you're gambling",
  },
  {
    name: "Sadako Japanese Restaurant",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DdCZxtjFJ2I/",
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
    instagramUrl: "https://www.instagram.com/p/DdNCjX7lLCb/",
    note: "Lotta variety, good tues deal",
  },
  {
    name: "Mr. Spots",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DddNmOrFYnM/",
    note: "Close enough to ones from Philly",
  },
  {
    name: "Halal Bros",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/Dc_4tn_lGzH/",
    note: "Solid, no bs spot",
  },
  {
    name: "Jasmine Bubble Tea and Eatery",
    tier: "mid",
    instagramUrl: "https://www.instagram.com/p/DdND7FcFMrb/",
    note: "Small portions, solid",
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
  {
    name: "Pizza Bob's",
    tier: "fade",
    instagramUrl: "https://www.instagram.com/p/DddOmnglV-1/",
    note: "Disappointment",
  },
];
