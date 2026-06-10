const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        document.querySelectorAll(".nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        const filter = tab.dataset.filter;

        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        document.querySelectorAll(".product-card").forEach(card => {
            card.style.display = filter === "all" || card.classList.contains(filter)
                ? "block"
                : "none";
        });
    });
});


const dropdownToggle = document.querySelector(".dropdown-toggle");
const navDropdown = document.querySelector(".nav-dropdown");
if(dropdownToggle && navDropdown){
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        navDropdown.classList.toggle("open");
    });
    document.querySelectorAll(".dropdown-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navDropdown.classList.remove("open");
            if(navMenu){ navMenu.classList.remove("open"); }
        });
    });
}
