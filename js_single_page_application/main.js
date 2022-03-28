const BASE_URL = "http://localhost:3000/api/v1";

const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include"
        }).then(res => res.json());

    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    }
};


function refreshProducts() {
    Product.all().then(products => {
        const productsContainer = document.querySelector("ul.product-list");
        productsContainer.innerHTML = products.map(q => {
            return `
                <li>
                    <a class="product-link" data-id="${q.id}" href="">
                        <span>${q.id} - </span>
                        ${q.title}
                    </a>
                </li>
            `;
        }).join("");
    });
}




function navigateTo(sectionId) {
    if (sectionId === "product-index") {
        refreshProducts();
    }

    document.querySelectorAll(".page").forEach(node => {
        node.classList.remove("active");
    });

    document.querySelector(`.page#${sectionId}`).classList.add("active");
    document.querySelectorAll(".navbar a").forEach(link => {
        link.classList.remove("active");
    });
    document.querySelector(`.navbar [data-target=${sectionId}]`).classList.add("active");
}

function getAndDisplayProduct(id) {
    Product.one(id).then(product => {
        const productDetailsContainer = document.querySelector("#product-show");
        const htmlString = `
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <small>Price: ${product.price}</small>
            <a class="link" data-target="product-edit" data-id="${product.id}" href="">Edit</a>
            |
            <a class="link" data-target="product-delete" data-id="${product.id}" href="">Delete</a>
            <h3>Reviews</h3>
            <ul>
                ${product.reviews.map(a => '<li>' + a.body + '</li>').join("")}
            </ul>
        `;
        productDetailsContainer.innerHTML = htmlString;
        navigateTo("product-show",);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    refreshProducts();
    document.querySelector(".navbar").addEventListener("click", event => {
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            navigateTo(targetPage);
        }
    });
    document.querySelector("ul.product-list").addEventListener("click", event => {
        const productLink = event.target.closest("a.product-link");
        if (productLink) {
            event.preventDefault();
            const { id } = productLink.dataset;
            getAndDisplayProduct(id);
        }
    });
});