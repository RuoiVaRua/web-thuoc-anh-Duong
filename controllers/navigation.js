const currentPageLocalStorage = localStorage.getItem("current-page");
const currentPageUrlPath = window.location.pathname;

async function addComponent(url, targetSelector, appendOrPrepend = "append") {
    await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((html) => {
            const targetElement = document.querySelector(targetSelector);
            if (!targetElement) {
                throw new Error(`Target element ${targetSelector} not found`);
            }
            const component = document.createElement("template");
            component.innerHTML = html;
            const contents = component.content.children;

            for (const content of contents) {
                if (appendOrPrepend === "append") {
                    targetElement.append(content);
                } else {
                    targetElement.prepend(content);
                }
            }
        })
        .catch((error) => {
            console.error("Error loading content:", error);
        });
}

function clearContent() {
    const targetElement = document.querySelector(".container");
    if (targetElement) {
        targetElement.innerHTML = "";
    }
}

function redirect(event, redirectTo) {
    event.preventDefault();

    const currentNavigatorBtn = document.querySelector(".current-menu-item");

    if (currentNavigatorBtn) {
        currentNavigatorBtn.classList.remove("current-menu-item");
        currentNavigatorBtn.classList.remove("current_page_item");
    }

    if (event.target.localName === "a") {
        event.target.parentNode.classList.add("current-menu-item");
        event.target.parentNode.classList.add("current_page_item");
    } else if (event.target.localName === "span") {
        event.target.parentNode.parentNode.parentNode.classList.add(
            "current-menu-item"
        );
        event.target.parentNode.parentNode.parentNode.classList.add(
            "current_page_item"
        );
    }

    if (["about", "contact", "products", "home"].includes(redirectTo)) {
        localStorage.setItem("current-page", redirectTo);
        clearContent();

        window.history.pushState(null, "", redirectTo);

        if (redirectTo === "home") redirectToHome();
        else if (redirectTo === "about") {
            addComponent("./pages/about.html", ".container");
        } else if (redirectTo === "products") {
            addComponent("./pages/products.html", ".container");
        } else if (redirectTo === "contact") {
            addComponent("./pages/contact.html", ".container");
        }
    }
}

async function redirectToHome() {
    window.history.pushState(null, "", "/");
    await Promise.all([
        // addComponent('./components/home-sections/home-slider.html', '.container'),
        addComponent(
            "./components/home-sections/general-introduction.html",
            ".container"
        ),
        // addComponent('./components/home-sections/hometown-specialties.html', '.container'),
        // addComponent('./components/home-sections/products-categories.html', '.container'),
        // addComponent('./components/home-sections/two-banners.html', '.container'),
        addComponent(
            "./components/home-sections/selling-products-header.html",
            ".container"
        ),
        addComponent(
            "./components/home-sections/selling-products-content.html",
            ".container"
        ),
        // addComponent('./components/home-sections/customer-reviews.html', '.container'),
        // addComponent('./components/home-sections/footer-banner.html', '.container'),
        // addComponent('./components/home-sections/event-news.html', '.container'),
        // addComponent('./components/home-sections/certificate-header.html', '.container'),
        // addComponent('./components/home-sections/certificate-content.html', '.container'),
    ]);
}

function checkUrlPath () {

}

(async () => {
    clearContent();

    await addComponent("./components/topbar.html", "body", "prepend");
    await addComponent("./components/header.html", ".main-wrapper", "prepend");

    if (currentPageUrlPath === "/" || currentPageUrlPath === "home") {
        await redirectToHome();
    } else if (["about", "contact", "products"].includes(currentPageUrlPath)) {
        window.history.pushState(null, "", currentPageUrlPath);
        await addComponent(`./pages/${currentPageUrlPath}.html`, ".container");
    }

    await addComponent("./components/footer.html", "body");
})();

window.onunload = window.onbeforeunload = () => {
    localStorage.removeItem("current-page");
}
