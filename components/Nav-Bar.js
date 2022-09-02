function NavBarLink(navBarLink) {
  return `
    <p><a href=${navBarLink.link}>${navBarLink.name}</a></p>
    `;
}

export function NavBar(links) {
  return `
  <div id="nav-content">
    <div id="logo"><p>st</p></div>
    <div id="nav-links">
    ${links.map(NavBarLink).join("\n")}
    </div>

  </div>
  `;
}

export const NAV_BAR_LINKS_DATA = [
  {
    link: '"index.html"',
    name: "home"
  },
  {
    link: '"writing.html"',
    name: "writing"
  },
  {
    link: '"pitch-deck.html"',
    name: "design"
  },
  {
    link: '"contact.html"',
    name: "contact"
  }
];

// tava passando links individuais const navHTML = navBarLinksData.map(NavBar).join("\n");
// a versao correta e a lista de links abaixo
// const navHTML = NavBar(AV_BAR_LINKS_DATA);

// const navBarRoot = document.querySelector(".nav-bar");

// navBarRoot.innerHTML = navHTML;
// console.log(navBarRoot);
