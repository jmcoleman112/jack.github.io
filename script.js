
/* =================================
   GIFT DATABASE
================================= */
import { createGiftCard } from "./modules/giftcard.js";
const gifts = [


{
    id: 1,
    name: "Insta360 Ace Pro 2",
    brand: "Insta360",
    category: "Tech",
    subcategory: "Action Cameras",

    description: "A premium action camera designed for capturing adventures, travel and high-quality video.",

    price: null,
    currency: "EUR",

    image: "images/insta360-ace-pro-2.jpg",

    link: "https://www.insta360.com/product/insta360-ace-pro2",

    features: [
        "8K video recording at 30fps",
        "4K video at up to 120fps",
        "50MP photography",
        "Leica-engineered lens",
        "Waterproof to 12 metres",
        "FlowState image stabilisation",
        "2.5-inch flip touchscreen"
    ],

    recommendation: "Great for travel, outdoor adventures, sports and content creation.",

    rating: 5
},

    {
        name: "Running Jacket",
        category: "Clothing",
        description: "Lightweight jacket for everyday running.",
        price: 75,
        image: "https://placehold.co/400x300?text=Jacket",
        link: "https://example.com"
    },

    {
        name: "Weekend Getaway",
        category: "Experiences",
        description: "A weekend away somewhere interesting.",
        price: 150,
        image: "https://placehold.co/400x300?text=Getaway",
        link: "https://example.com"
    },

    {
        name: "Coffee Machine",
        category: "Misc",
        description: "A compact coffee machine for home.",
        price: 120,
        image: "https://placehold.co/400x300?text=Coffee",
        link: "https://example.com"
    }

];


/* =================================
   DISPLAY GIFTS
================================= */

const giftGrid = document.getElementById("giftGrid");

function displayGifts(giftList) {

    giftGrid.innerHTML = "";

    if (giftList.length === 0) {
        giftGrid.innerHTML = "<p>No gifts found.</p>";
        return;
    }

    giftList.forEach(gift => {

        const card = document.createElement("div");
        card.className = "gift-card";

        card.innerHTML = `
            <img src="${gift.image}" alt="${gift.name}">

            <div class="gift-info">

                <div class="gift-category">
                    ${gift.category}
                </div>

                <h3>${gift.name}</h3>

                <p>${gift.description}</p>

                <div class="gift-price">
                    €${gift.price.toFixed(2)}
                </div>

                <a href="${gift.link}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="gift-link">
                    View Gift
                </a>

            </div>
        `;

        giftGrid.appendChild(card);

    });
}


/* =================================
   CATEGORY FILTERING
================================= */

const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "All";

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedCategory = button.dataset.category;

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        filterGifts();

    });

});


/* =================================
   SEARCH
================================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", filterGifts);


function filterGifts() {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredGifts = gifts.filter(gift => {

        const matchesCategory =
            selectedCategory === "All" ||
            gift.category === selectedCategory;

        const matchesSearch =
            gift.name.toLowerCase().includes(searchTerm) ||
            gift.description.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;

    });

    displayGifts(filteredGifts);

}


/* =================================
   INITIALISE WEBSITE
================================= */

displayGifts(gifts);
