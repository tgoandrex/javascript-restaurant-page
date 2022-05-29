import { content } from "./utils/getContentDiv";

export const renderLandingPage = () => {
    const span = document.createElement("span");
    
    span.id = "headline";
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