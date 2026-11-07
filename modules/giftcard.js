

export function createGiftCard(gift) {

    const card = document.createElement("article");

    card.className = "gift-card";

    card.innerHTML = `
        <img src="${gift.image}" alt="${gift.name}">

        <div class="gift-info">

            <span class="gift-category">
                ${gift.category} / ${gift.subcategory}
            </span>

            <h2>${gift.name}</h2>

            <p>${gift.description}</p>

            <h3>Key Features</h3>

            <ul>
                ${gift.features.map(feature =>
                    `<li>${feature}</li>`
                ).join("")}
            </ul>

            <p class="recommendation">
                ${gift.recommendation}
            </p>

            <a href="${gift.link}"
               target="_blank"
               rel="noopener noreferrer"
               class="gift-link">
                View Product
            </a>

        </div>
    `;

    return card;
}
