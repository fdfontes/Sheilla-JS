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
  <div class="intro" class="${heroData.bgColor}">
    <div class="intro-content">
      <h1>${heroData.title || ""}</h1>
      <p class="subheading">${heroData.description}</p>
    </div>
  </div>
    `;
}

function Blocks(block) {
  if (block.type === "hero") {
    return Hero(block);
  }

  if (block.type === "one-column") {
    return `
    <div class="one-column">
      <div class="section-description ${block.title}">
        <h2>${block.title}</h2>
        <p>${block.description}</p>
        <img src="${block.sectionImg}" alt="${block.imgAlt}" id="section-image">
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
      <img id="section-image" src="${block.sectionImg}" alt="${block.imgAlt}">
    </div>
   `;
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
        <img id="arrow" src="/arrow-neutral.png"/>
      `;
  } else if (block.bgColor === "color-two") {
    return `
      <img id="arrow" src="/arrow-black.png"/>
    `;
  } else {
    return ``;
  }
}

// const blocksHTML = HomePage(blocksData);

// const blocksHTML = Layout(blocksData);

// @TODO: separate buildPage into a separate file
// @TODO: create separate files for all blocks - Hero.js, TwoColumns.js
export function buildPage(pageData, pageTitle) {
  const pageHTML = Layout(pageData);

  const blocksRoot = document.querySelector(".blocks-root");

  blocksRoot.innerHTML = pageHTML;

  const headHTML = Head(pageTitle);

  document.head.innerHTML = headHTML;
}
