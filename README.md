# The A² Restaurant Rankings 🍔

A single-page static site ranking every restaurant in Ann Arbor, as judged by two friends. No backend, no build step — just open `index.html` in a browser.

## How to add a restaurant

Everything lives in **`restaurants.js`**. **The order of the list is the ranking** — the first entry is #1. Rank numbers are calculated automatically, so never type them yourself.

Copy any existing entry and paste it at the position it deserves (pasting between #2 and #3 makes it the new #3; everything below renumbers on its own):

```js
{
  name: "New Spot",                                     // required
  tier: "tuff",                                         // required — "tuff", "mid", or "fade"
  instagramUrl: "https://www.instagram.com/reel/XXXX/", // the review video — tapping the card opens it
  note: "One-line hot take",                            // optional
},
```

Save the file and reload the page. Done.

### Field reference

| Field          | Required | What it is                                              |
| -------------- | -------- | ------------------------------------------------------- |
| `name`         | ✅       | Restaurant name shown on the card                        |
| `tier`         | ✅       | Exactly `"tuff"`, `"mid"`, or `"fade"` (lowercase)       |
| `instagramUrl` | —        | Review video link; tapping the card opens it in a new tab |
| `note`         | —        | Short take shown under the name                          |

**Tips**
- The list order is the ranking — first entry is #1. To move a restaurant, cut its `{ ... },` block and paste it at the new spot.
- Watch the trailing comma after each `},` — the most common typo.
- If the page suddenly shows nothing, you probably have a syntax error in `restaurants.js` (open the browser console to check).

## Viewing locally

Just double-click `index.html`, or serve the folder:

```sh
python3 -m http.server
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new GitHub repository and push all of these files to the `main` branch:
   ```sh
   git init
   git add .
   git commit -m "Restaurant rankings site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → Save
3. Wait a minute, then visit `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

To update the site later, just edit `restaurants.js`, commit, and push — Pages redeploys automatically.

## Files

| File             | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `restaurants.js` | **The data — the only file you edit** ✏️ |
| `index.html`     | Page structure                           |
| `styles.css`     | Sticker-book styling                     |
| `app.js`         | Sorting, filtering, rendering            |
