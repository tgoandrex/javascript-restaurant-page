import { content } from "./utils/domElements";

const renderLandingPage = () => {
    const span = document.createElement("span");
    span.className = "headline";
    span.textContent = "A Taste of Home";
    content.appendChild(span);
    const divTestimonial = document.createElement("div");
    divTestimonial.id = "testimonials";
    content.appendChild(divTestimonial);
    const divTestimonialHeading = document.createElement("div");
    divTestimonialHeading.id = "testimonial-heading";
    divTestimonialHeading.textContent = "Our Testimonials:";
    divTestimonial.appendChild(divTestimonialHeading);
    const unorderedList = document.createElement("ul");
    divTestimonial.appendChild(unorderedList);

    const testimonials = [
        ["So good!", "-Lorem Ipsem"],
        ["Yum!", "-Jane Smith"],
        ["Shut up and take my money!", "-John Doe"]
    ];
    testimonials.forEach(function(testimonial) {
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        listItem.className = "testimonial";
        listItem.textContent = testimonial[0];
        unorderedList.appendChild(listItem);
        span.className = "testimonial-name";
        span.textContent = testimonial[1];
        listItem.appendChild(span);
    });
}

const renderMenuPage = () => {
    const span = document.createElement("span");
    span.className = "headline";
    span.textContent = "Menu";
    content.appendChild(span);
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-main";
    content.appendChild(menuDiv);

    const menuInfo = {
        appetizers: {"Stuffed Mushrooms": "$5.50", "Shrimp": "$7.00", "Mozzarella Sticks": "$4.50", "Onion Rings": "$4.00"},
        steaks: {"T-bone": "$15.00", "Ribeye": "$14.00", "Tenderloin": "$17.00", "Strip": "$15.50"},
        burgers: {"Cheeseburger": "$6.50", "Double Meat": "$9.00", "Mushroom": "$8.00", "Bacon": "$8.50"},
        sides: {"Fries": "$2.50", "Mashed Potatoes": "$3.00", "Green Beans": "$2.00", "Beans": "$2.50"},
        drinks: {"Soda": "$3.00", "Water": "$1.00", "Milk": "$2.00", "Wine": "$5.50"},
        desserts: {"Ice Cream": "$4.00", "Brownie": "$2.50", "Pie": "$3.00", "Doughnut": "$2.00"}
    };

    for(let section in menuInfo) {
        const menuSectionSpan = document.createElement("span");
        menuSectionSpan.id = `menu-${section}`;
        menuDiv.appendChild(menuSectionSpan);
        const menuTitleSpan = document.createElement("span");
        menuTitleSpan.className = "menu-title";
        menuTitleSpan.textContent = section;
        menuSectionSpan.appendChild(menuTitleSpan);
        const unorderedList = document.createElement("ul");
        menuSectionSpan.appendChild(unorderedList);

        for(let key in menuInfo[section]) {
            const listItem = document.createElement("li");
            listItem.textContent = key + " ";
            unorderedList.appendChild(listItem);
            const priceSpan = document.createElement("span");
            priceSpan.className = "menu-price";
            priceSpan.textContent = menuInfo[section][key]
            listItem.appendChild(priceSpan);
        }
    }
}

const renderContactPage = () => {

}

export {renderLandingPage, renderMenuPage, renderContactPage}