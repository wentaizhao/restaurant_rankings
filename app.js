/* Renders the ranking from the RESTAURANTS array in restaurants.js.
   Nothing in here needs editing to add/remove restaurants. */

(function () {
  "use strict";

  const TIERS = { good: "GOOD", mid: "MID", bad: "BAD" };

  const list = document.getElementById("ranking-list");
  const countBadge = document.getElementById("count-badge");
  const emptyState = document.getElementById("empty-state");
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));

  // Entries must have a name and a numeric rank to be displayed.
  const data = typeof RESTAURANTS !== "undefined" && Array.isArray(RESTAURANTS) ? RESTAURANTS : [];
  const restaurants = data
    .filter(function (r) {
      const valid = r && typeof r.name === "string" && r.name.trim() !== "" && typeof r.rank === "number";
      if (!valid) console.warn("Skipping invalid restaurant entry:", r);
      return valid;
    })
    .slice()
    .sort(function (a, b) { return a.rank - b.rank; });

  let activeTier = "all";

  function buildCard(r) {
    const item = document.createElement("li");
    const tier = TIERS[r.tier] ? r.tier : "unranked";
    item.className = "card card--" + tier;

    const rankChip = document.createElement("span");
    rankChip.className = "card-rank";
    rankChip.textContent = r.rank;
    rankChip.setAttribute("aria-label", "Rank " + r.rank);

    const body = document.createElement("div");
    body.className = "card-body";

    const name = document.createElement("h2");
    name.className = "card-name";
    name.textContent = r.name;

    // Tier is conveyed by color; keep an invisible label for screen readers.
    const srTier = document.createElement("span");
    srTier.className = "sr-only";
    srTier.textContent = ", tier: " + (TIERS[r.tier] || "unranked").toLowerCase();
    name.append(srTier);

    body.append(name);

    if (typeof r.note === "string" && r.note.trim() !== "") {
      const note = document.createElement("p");
      note.className = "card-note";
      note.textContent = r.note;
      body.append(note);
    }

    item.append(rankChip, body);

    // Tapping anywhere on the card opens the Instagram review.
    if (typeof r.instagramUrl === "string" && r.instagramUrl.trim() !== "") {
      const cover = document.createElement("a");
      cover.className = "card-cover";
      cover.href = r.instagramUrl;
      cover.target = "_blank";
      cover.rel = "noopener noreferrer";
      cover.setAttribute("aria-label", "Watch the Instagram review of " + r.name);
      item.append(cover);
      item.classList.add("card--tappable");
    }
    return item;
  }

  function render() {
    const visible = activeTier === "all"
      ? restaurants
      : restaurants.filter(function (r) { return r.tier === activeTier; });

    list.textContent = "";
    visible.forEach(function (r) { list.append(buildCard(r)); });

    emptyState.hidden = visible.length !== 0;
    countBadge.textContent = activeTier === "all"
      ? restaurants.length + " ranked"
      : visible.length + " of " + restaurants.length;
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeTier = btn.dataset.tier;
      filterButtons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      render();
    });
  });

  render();
})();
