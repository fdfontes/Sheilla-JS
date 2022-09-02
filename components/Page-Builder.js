import { NavBar, NAV_BAR_LINKS_DATA } from "/components/Nav-Bar.js";
import { Footer, FOOTER_LINKS_DATA } from "/components/Footer.js";
// import { Head, PAGE_TITLE } from "/components/Head.js";
import { Contact } from "/components/Contact-Form.js";
import { Project } from "/components/Projects.js";
// import { Head } from "/components/Page-Blocks.js";

// function Layout(pageBlocks) {
//   return `
//   <head>${Head(PAGE_TITLE)}</head>
//   <body>
//     <nav class="nav-bar">${NavBar(NAV_BAR_LINKS_DATA)}</nav>
//     <main>${pageContent(pageBlocks)}</main>
//     <div>${Contact(CONTACT_FORM_DATA)}</div>
//     <footer class="bottom-bar">${Footer(FOOTER_LINKS_DATA)}</footer>
//   </body>
//   `;
// }

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

function Hero(heroData) {
  return /* html */ `
    <div class="${heroData.layout}">
      <div class="intro-content">
        <h1>${heroData.title || ""}</h1>
        ${
          heroData.description
            ? `
            <p class="subheading">${heroData.description}</p>
          `
            : ""
        }
        ${
          heroData.link && heroData.call
            ? `
              <a href="${heroData.link}"><button type="button">${heroData.call}</button></a>
              `
            : ""
        }
      </div>
    </div>
    `;
}

function Blocks(block) {
  if (block.type === "hero") {
    return Hero(block);
  }

  if (block.type === "one-column") {
    return /* html */ `
        <div class="one-column">
          <div class="section-description ${block.title}">
            <h2>${block.title}</h2>
            <p>${block.description}</p>
            <img src="/assets/${block.sectionImg}" alt="${block.imgAlt}" id="section-image">
          </div>
        </div>
      </div>
    `;
  }

  if (block.type === "two-columns") {
    return `
    <div class="two-columns" id="${block.title}">   
      <div class="section-description">
        <h2>${block.title}</h2>
        <p>${block.description}</p>
        ${
          // Ternary operator (inline IF statement): condition ? trueAnswer : falseAnswer
          block.link && block.call
            ? `
        <div class="text-arrow">
          <div id="link-more">
            <a href="${block.link}"><h3>${block.call}</h3>
          </div>
            ${Arrow(block)}</a>
        </div>
        `
            : ""
        }
      </div>
      <img id="section-image" src="/assets/${block.sectionImg}" alt="${
      block.imgAlt
    }">
    </div>
   `;
  }

  if (block.type === "projects") {
    return `
    <div class="layout-writing">
      <div class="projects"> 
      <h2>${block.title}</h2>
        <div class="screenplays">
        ${block.items.map(Project).join("\n")}
        </div>
      </div>
    </div>
   `;
  }

  if (block.type === "form") {
    return Contact(block);
  }

  return ``;
}

function Arrow(block) {
  console.log(block);
  if (
    ["color-one", "color-three"].includes(block.bgColor)
    // blocksData.bgColor === "color-one" ||
    // blocksData.bgColor === "color-three"
  ) {
    return `
        <img id="arrow" src="/assets/arrow-neutral.png"/>
      `;
  } else if (block.bgColor === "color-two") {
    return `
      <img id="arrow" src="/assets/arrow-black.png"/>
    `;
  } else {
    return ``;
  }
}

// const blocksHTML = HomePage(blocksData);

// const blocksHTML = Layout(blocksData);

// @TODO: separate buildPage into a separate file
// @TODO: create separate files for all blocks - Hero.js, TwoColumns.js
export function buildPage(pageData) {
  // if (block.type === "projects") {
  //   projectSectionsData.map(Blocks).join("\n");
  // }

  const pageHTML = Layout(pageData);

  const blocksRoot = document.querySelector(".page-layout-root");

  blocksRoot.innerHTML = pageHTML;

  // projectSectionsData.map(ProjectSection).join("\n");

  // const headHTML = Head(pageTitle);

  // document.head.innerHTML = headHTML;
}
