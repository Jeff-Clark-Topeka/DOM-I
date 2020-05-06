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

const servicesNav = document.getElementsByTagName('a').item(0);
servicesNav.textContent = (siteContent['nav']['nav-item-1'])

const productNav = document.getElementsByTagName('a').item(1);
productNav.textContent = (siteContent['nav']['nav-item-2'])

const visionNav = document.getElementsByTagName('a').item(2);
visionNav.textContent = (siteContent['nav']['nav-item-3'])

const featuresNav = document.getElementsByTagName('a').item(3);
featuresNav.textContent = (siteContent['nav']['nav-item-4'])

const aboutNav = document.getElementsByTagName('a').item(4);
aboutNav.textContent = (siteContent['nav']['nav-item-5'])

const contactNav = document.getElementsByTagName('a').item(5);
contactNav.textContent = (siteContent['nav']['nav-item-6']) 

const h1Text = document.getElementsByTagName('h1').item(0);
h1Text.textContent = (siteContent['cta']['h1'])

const button = document.getElementsByTagName('button').item(0);
button.textContent = (siteContent['cta']['button'])

const imgHeader = document.getElementById('cta-img');
imgHeader.setAttribute('src', siteContent['cta']['img-src'])

const featuresTitle = document.getElementsByTagName('h4').item(0);
featuresTitle.textContent = (siteContent['main-content']['features-h4'])

const featuresContent = document.getElementsByTagName('p').item(0);
featuresContent.textContent = (siteContent['main-content']['features-content'])

const aboutTitle = document.getElementsByTagName('h4').item(1);
aboutTitle.textContent = (siteContent['main-content']['about-h4'])

const aboutContent = document.getElementsByTagName('p').item(1);
aboutContent.textContent = (siteContent['main-content']['about-content'])

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const servicesTitle = document.getElementsByTagName('h4').item(2);
servicesTitle.textContent = (siteContent['main-content']['services-h4'])

const servicesContent = document.getElementsByTagName('p').item(2);
servicesContent.textContent = (siteContent['main-content']['services-content'])

const productTitle = document.getElementsByTagName('h4').item(3);
productTitle.textContent = (siteContent['main-content']['product-h4'])

const productContent = document.getElementsByTagName('p').item(3);
productContent.textContent = (siteContent['main-content']['product-content'])

const visionTitle = document.getElementsByTagName('h4').item(4);
visionTitle.textContent = (siteContent['main-content']['vision-h4'])

const visionContent = document.getElementsByTagName('p').item(4);
visionContent.textContent = (siteContent['main-content']['vision-content'])

const contactTitle = document.getElementsByTagName('h4').item(5);
contactTitle.textContent = (siteContent['contact']['contact-h4'])

const address = document.getElementsByTagName('p').item(5);
address.textContent = (siteContent['contact']['address'])

const phone = document.getElementsByTagName('p').item(6);
phone.textContent = (siteContent['contact']['phone'])

const email = document.getElementsByTagName('p').item(7);
email.textContent = (siteContent['contact']['email'])

const footer = document.getElementsByTagName('p').item(8);
footer.textContent = (siteContent['footer']['copyright'])

const navStyle = document.querySelectorAll('a');
navStyle.style.color = 'green'