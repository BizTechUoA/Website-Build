document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function closePopup() {
    // Assuming you're using a modal, find and hide the modal or popup.
    var popup = document.querySelector('.your-popup-selector'); // Replace with your actual popup selector.
    if (popup) {
        popup.style.display = 'none'; // Or use a proper hide function based on your popup implementation.
    }

    // Optionally scroll to the events section smoothly.
    document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
}

function renderMemberPerks() {
    const container = document.getElementById("member-perks-grid");

    if (!container) {
        return;
    }

    memberPerks.forEach((perk, index) => {
        const perkElement = document.createElement("div");

        perkElement.className = "col col-6 col-md-3 text-center";

        perkElement.innerHTML = `
            <a
                href="#member-perk-modal"
                data-lity="#member-perk-modal"
                class="member-perk-link"
                data-perk-index="${index}"
            >
                <button
                    type="button"
                    class="logo-button"
                    style="background-image: url('${perk.image}');"
                    aria-label="View ${perk.name} member perk">
                </button>
            </a>
        `;

        container.appendChild(perkElement);
    });
}


function setupMemberPerkClicks() {
    const perkLinks = document.querySelectorAll(".member-perk-link");

    perkLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const index = Number(link.dataset.perkIndex);
            const perk = memberPerks[index];

            document.getElementById("member-perk-modal-name").textContent =
                perk.name;

            document.getElementById("member-perk-modal-deal").textContent =
                perk.deal;

            document.getElementById("member-perk-modal-conditions").textContent =
                perk.conditions;

            const logo =
                document.getElementById("member-perk-modal-logo");

            logo.src = perk.image;
            logo.alt = `${perk.name} logo`;
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    renderMemberPerks();
    setupMemberPerkClicks();
});