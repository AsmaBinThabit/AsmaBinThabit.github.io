// Dynamically update the year in the footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} My Website. All rights reserved.`;
