// setup Scrollspy https://getbootstrap.com/docs/5.0/components/scrollspy/
let base_element = document.getElementsByTagName("body")[0];
base_element.setAttribute("data-bs-spy", "scroll");
base_element.setAttribute("data-bs-target", "#nav-container");
base_element.setAttribute("data-bs-offset", "80");

let navbar_element = document.getElementById("nav-container");
navbar_element.className = "mdc-top-app-bar mdc-top-app-bar--fixed"
navbar_element.innerHTML = `
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <a class="mdc-top-app-bar__title crowdin-ignore" href="/">
                    <img src="assets/images/logo-56x56.png" alt="" class="crowdin-ignore"> Themerr-ng
                </a>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="navbarToggle">
                <!-- Navigation items will be injected here -->
            </section>
        </div>
`;

// create the navbar dynamically
let sections = document.querySelectorAll('section[id]');
let navbar = document.getElementById("navbarToggle")
navbar.className = "mdc-top-app-bar__section mdc-top-app-bar__section--align-end"

let nav_link_class = "mdc-top-app-bar__navigation-link mdc-typography--body1"

// Add HOME link
let home_link = document.createElement("a")
home_link.className = nav_link_class
home_link.href = "index.html"
home_link.textContent = "Home"
navbar.appendChild(home_link)

for(let i = 0; i < sections.length; ++i) {
    if (sections[i].id) {
        let navbar_link = document.createElement("a")
        navbar_link.className = nav_link_class
        navbar_link.href = `#${sections[i].id}`
        navbar_link.textContent = sections[i].id

        // check if crowdin-ignore is in the section classes and add it to the link
        if (sections[i].classList.contains("crowdin-ignore")) {
            navbar_link.classList.add("crowdin-ignore")
        }

        navbar.appendChild(navbar_link)
    }
}

// Add HOME link
let home_item = document.createElement("li")
home_item.className = nav_list_item_class
let home_link = document.createElement("a")

home_link.className = nav_link_class
home_link.href = "index.html"
home_link.textContent = "Home"
home_item.appendChild(home_link)
navbar_list.appendChild(home_item)

for(let i = 0; i < sections.length; ++i) {
    if (sections[i].id) {
        let navbar_item = document.createElement("li")
        navbar_item.className = nav_list_item_class
        let navbar_link = document.createElement("a")

        navbar_link.className = nav_link_class
        navbar_link.href = `#${sections[i].id}`
        navbar_link.textContent = sections[i].id

        // check if crowdin-ignore is in the section classes and add it to the link
        if (sections[i].classList.contains("crowdin-ignore")) {
            navbar_link.classList.add("crowdin-ignore")
        }

        navbar_item.appendChild(navbar_link)
        navbar_list.appendChild(navbar_item)
    }
}

        // Initialize Material Components for navigation links
initMaterialComponents();

function initMaterialComponents() {
    // Convert all nav links to MDCRipple elements
    const navLinks = document.querySelectorAll(`.\${nav_link_class.replace(' ', '.')}`);
    navLinks.forEach(link => {
        if (!link.classList.contains('mdc-ripple-upgraded')) {
            new mdc.ripple.MDCRipple(link);
        }
    });
    
    // Set up intersection observer for active link highlighting
    setupActiveLinkHighlighting();
}

function setupActiveLinkHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll(`.\${nav_link_class.replace(' ', '.')}`);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.\${nav_link_class.replace(' ', '.')}[href="#\${id}]`);
            
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('mdc-top-app-bar__navigation-link--active'));
                if (navLink) {
                    navLink.classList.add('mdc-top-app-bar__navigation-link--active');
                }
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));
}
