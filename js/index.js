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
    "vision-content":"vision-h4"
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

const imgID =
document.getElementById("logo-img")
// console.log(imgID)

const Idimg =
document.getElementById("cta-img")
// console.log(Idimg)

const navStyles = 
document.querySelectorAll("nav a")

navStyles.forEach(element => {
  element.stlye.color = 'green'
});

const newCont = 
document.querySelector('header')

// nav

const NewNav =
document.createElement("a");

NewNav.textContent =   {
  "nav-item-1": "Services",
  "nav-item-2": "Product",
  "nav-item-3": "Vision",
  "nav-item-4": "Features",
  "nav-item-5": "About",
  "nav-item-6": "Contact",
  "img-src": "img/logo.png"
}

const nav = 
document.querySelector("nav")
nav.appendChild(header)

// const NewCTA = 
// documentquerySelector('.cta')

// cta

const newH1 =
document.createElement("h1");
newH1.textContent =  "DOM Is Awesome";

const newButton = 
document.createElement("button")
newButton.textContent = "Get Started";

const imgID =
document.getElementById("logo-img")
// console.log(imgID)

// maincontent

const FeatH4 = 
document.createElement("features-h4")
FeatH4.textContent = "Features";

const H4Cont = 
document.createElement("features-content")
H4Cont.textContent =  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const AH4 = 
document.createElement("about-h4")
AH4.textContent = ("About");

const AboutCont = ("about-content")
document.createElement = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const midImg = 
document.querySelector("middle-img-src")

midImg.src =  "img/mid-page-accent.jpg"
midImg.alt = "code snippets across the screen"

const servH4 = 
document.createElement = ("services-h4")
servH4.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const prodH4 = 
    document.createElement = ("product-h4")
    prodH4.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const VisH4 = 
document.createElement = ("vision-h4")
VisH4.textContent = "Vision";

const viscon = 
document.createEllement = ("vision-content")
viscon.textConent = "vision-h4";

// contact

const contH4 = 
document.createElement = ("contact-h4")
contH4.textConent = "Contact";

const Addr = 
document.createElement = ("address")
Addr.textContent = "123 Way 456 Street Somewhere, USA";

const phn = 
document.createElement = ("phone")
phn.textContent = "1 (888) 888-8888";

const em = 
document.createElement = ("email")
em.textContent = "sales@greatidea.io";



