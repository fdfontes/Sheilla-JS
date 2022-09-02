import { NavBar, NAV_BAR_LINKS_DATA } from "/components/Nav-Bar.js";
import { Footer, FOOTER_LINKS_DATA } from "/components/Footer.js";
import { Blocks } from "/components/Blocks.js";

function Layout(pageBlocks) {
  return `
    <nav class="nav-bar">${NavBar(NAV_BAR_LINKS_DATA)}</nav>
    <main>${pageContent(pageBlocks)}</main>
    <footer class="bottom-bar">${Footer(FOOTER_LINKS_DATA)}</footer>
  `;
}

function pageContent(homePage) {
  return `
    <main>${homePage.map(Blocks).join("\n")}</main>
    `;
}

// @TODO: separate buildPage into a separate file
// @TODO: create separate files for all blocks - Hero.js, TwoColumns.js
export function buildPage(pageData) {
  const pageHTML = Layout(pageData);

  const blocksRoot = document.querySelector(".page-layout-root");

  blocksRoot.innerHTML = pageHTML;
}
