document.addEventListener("DOMContentLoaded", () => {
    const loginScreen = document.getElementById("login-screen");
    const mainScreen = document.getElementById("main-screen");
    const loginBtn = document.getElementById("login-btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginError = document.getElementById("login-error");

    const searchInput = document.getElementById("search-input");
    const productList = document.getElementById("product-list");

    const products = [
        { name: "Smartphone", price: "R$ 1500", category: "eletronicos", image: "file:///D:/Gemini_Generated_Image_egw2d7egw2d7egw2.jpg" },
        { name: "Camiseta", price: "R$ 50", category: "roupas", image: "file:///D:/Gemini_Generated_Image_5uh4zc5uh4zc5uh4.jpg" },
        { name: "Sofá", price: "R$ 2500", category: "moveis", image: "file:///D:/Gemini_Generated_Image_4njp1c4njp1c4njp.jpg" },
        { name: "Fone de Ouvido", price: "R$ 300", category: "eletronicos", image: "file:///D:/Gemini_Generated_Image_4e4de94e4de94e4d.jpg" },
    ];

    function displayProducts(category, searchQuery = "") {
        productList.innerHTML = "";
        products
            .filter(p => (category === "all" || p.category === category) && p.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .forEach(product => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                productList.appendChild(productCard);
            });
    }

    loginBtn.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "admin" && password === "1234") {
            loginScreen.classList.add("fade-out");
            setTimeout(() => {
                loginScreen.classList.add("hidden");
                mainScreen.classList.remove("hidden");
                mainScreen.classList.add("fade-in");
                displayProducts("all");
            }, 1000);
        } else {
            loginError.textContent = "Usuário ou senha inválidos.";
        }
    });

    const navLinks = document.querySelectorAll(".category-btn");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const category = event.target.getAttribute("data-category");
            displayProducts(category);
        });
    });

    searchInput.addEventListener("input", () => {
        const searchQuery = searchInput.value.trim();
        const category = document.querySelector(".category-btn.active")?.getAttribute("data-category") || "all";
        displayProducts(category, searchQuery);
    });
});
