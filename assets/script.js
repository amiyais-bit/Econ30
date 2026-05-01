document.addEventListener("DOMContentLoaded", () => {
  const steps = Array.from(document.querySelectorAll(".story-step"));
  const visualTitle = document.getElementById("visualTitle");
  const visualText = document.getElementById("visualText");
  const visualLink = document.getElementById("visualLink");

  if (steps.length > 0 && visualTitle && visualText && visualLink) {
    const setVisual = (step) => {
      steps.forEach((item) => item.classList.remove("is-active"));
      step.classList.add("is-active");
      visualTitle.textContent = step.getAttribute("data-title") || "";
      visualText.textContent = step.getAttribute("data-text") || "";
      visualLink.setAttribute("href", step.getAttribute("data-link") || "#");
    };

    if ("IntersectionObserver" in window) {
      const stepObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisual(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );

      steps.forEach((step) => stepObserver.observe(step));
    }
  }

  const revealTargets = Array.from(
    document.querySelectorAll(
      ".hero, .region-intro, .region-tile, .food-card, .sticky-visual, .story-step"
    )
  );

  if ("IntersectionObserver" in window && revealTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealTargets.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  }

  const searchInput = document.getElementById("dishSearch");
  const cards = Array.from(document.querySelectorAll(".food-card"));

  if (!searchInput || cards.length === 0) {
    return;
  }

  const cardsGrid = document.querySelector(".cards-grid");
  const emptyMessage = document.createElement("p");
  emptyMessage.className = "empty-message";
  emptyMessage.textContent = "No dishes matched your search.";
  cardsGrid?.insertAdjacentElement("afterend", emptyMessage);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = (card.getAttribute("data-name") || "").toLowerCase();
      const state = (card.getAttribute("data-state") || "").toLowerCase();
      const isMatch = name.includes(query) || state.includes(query);
      card.classList.toggle("hidden", !isMatch);
      if (isMatch) {
        visibleCount += 1;
      }
    });

    emptyMessage.classList.toggle("visible", visibleCount === 0);
  });
});
