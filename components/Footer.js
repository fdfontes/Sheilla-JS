export function Footer(footerLinks) {
  if (Array.isArray(footerLinks) === false) {
    return ``;
  }
  return `
    <p class="email">sheillatheng@gmail.com</p>
    <div class="icon-bar">${footerLinks.map(FooterLink).join("\n")}</div>
  `;
}

function FooterLink(footerLink) {
  if (!footerLink.link || !footerLink.img) {
    return ``;
  }
  return `
   <a href="${footerLink.link}"><img src="/assets/${footerLink.img}" alt="${footerLink.alt}"/></a>
    `;
}

export const FOOTER_LINKS_DATA = [
  {
    link: "https://www.linkedin.com/in/sheillatheng",
    img: "/linkedin.png",
    alt: "my linkedin"
  },
  {
    link: "https://www.imdb.com/name/nm7610985/",
    img: "/imdb.png",
    alt: "my imdb profile"
  },
  {
    link: "",
    img: "",
    alt: ""
  },
  {
    link: "",
    img: "",
    alt: ""
  }
];

// const footerHTML = Footer(FOOTER_LINKS_DATA);

// const footerRoot = document.querySelector(".bottom-bar");

// footerRoot.innerHTML = footerHTML;
