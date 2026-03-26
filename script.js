const filterButtons = document.querySelectorAll("[data-filter]");
const recommendationCards = document.querySelectorAll(".recommendation-card");

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    const nextFilter = button.dataset.filter;

    for (const candidate of filterButtons) {
      candidate.classList.toggle("active", candidate === button);
    }

    for (const card of recommendationCards) {
      const matches =
        nextFilter === "all" || card.dataset.category === nextFilter;

      card.classList.toggle("is-hidden", !matches);
    }
  });
}
