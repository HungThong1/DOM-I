const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//nav
const header = document.querySelector("header")
const nav = document.querySelector("header nav a")
const h1 = document.querySelector(".cta .cta-text h1")
const button = document.querySelector(".cta .cta-text button")
const navOne = nav.nextElementSibling
const navTwo = navOne.nextElementSibling
const navThree = navTwo.nextElementSibling
const navFour = navThree.nextElementSibling
const navFive = navFour.nextElementSibling
nav.textContent = "Services"
navOne.textContent = "Product"
navTwo.textContent = "Vision"
navThree.textContent = "Features"
navFour.textContent = "About"
navFive.textContent = "Contact"
//cta
h1.innerText = "DOM \n Is \n Awesome"
button.innerText = "Get Started"
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', "img/header-img.png" )
//top main
const firstTopContent = document.querySelector(".text-content:nth-of-type(1)")
const h4Features = firstTopContent.querySelector("h4")
const featuresContents = firstTopContent.querySelector("p")
h4Features.textContent = "Features"
featuresContents.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const secondTopContent = document.querySelector(".text-content:nth-of-type(2)")
const h4About = secondTopContent.querySelector("h4")
const aboutContents = secondTopContent.querySelector("p")
h4About.textContent = "About"
aboutContents.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//imh
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', "img/mid-page-accent.jpg" )
//mid
const firstMidContent = document.querySelector(".bottom-content .text-content:nth-of-type(1)")
const secondMidContent = document.querySelector(".bottom-content .text-content:nth-of-type(2)")
const thirdMidContent = document.querySelector(".bottom-content .text-content:nth-of-type(3)")
const h4Services = firstMidContent.querySelector("h4")
const servicesContent = firstMidContent.querySelector("p")
const h4Product = secondMidContent.querySelector("h4")
const productContent = secondMidContent.querySelector("p")
const h4Vision = thirdMidContent.querySelector("h4")
const visionContent = thirdMidContent.querySelector("p")
h4Services.textContent = "Services"
servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4Product.textContent = "Product"
productContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.t"
h4Vision.textContent = "Vision"
visionContent.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const h4Contact = document.querySelector(".contact h4")
//contact
h4Contact.textContent = "Contact"
const address = document.querySelector(".contact p")
address.textContent = "123 Way 456 Street Somewhere, USA"
const phone = address.nextElementSibling
phone.textContent = "1 (888) 888-8888"
const email = phone.nextElementSibling
email.textContent = "sales@greatidea.io"
//footer
const footer = document.querySelector("footer p")
footer.textContent = "Copyright Great Idea! 2018"
// color
const allLinks = document.querySelectorAll('a')
for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].style.color = 'green'
}
//add nav bar item
const addNav = document.querySelector("nav");
const addElement1 = document.createElement("a");
addElement1.href = "#";
addElement1.textContent = "addednav1";
const addElement2 = document.createElement("a");
addElement2.href = "#";
addElement2.textContent = "addednav2";
addNav.appendChild(addElement1);
addNav.prepend(addElement2);