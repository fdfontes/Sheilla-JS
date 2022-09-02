import { Arrow } from "/components/Arrow.js";

export function TwoColumns(twoColumnsData) {
  return /* html */ `
    <div class="two-columns" id="${twoColumnsData.title}">   
      <div class="section-description">
        <h2>${twoColumnsData.title}</h2>
        <p>${twoColumnsData.description}</p>
        ${
          // Ternary operator (inline IF statement): condition ? trueAnswer : falseAnswer
          twoColumnsData.link && twoColumnsData.call
            ? `
        <div class="text-arrow">
          <div id="link-more">
            <a href="${twoColumnsData.link}"><h3>${twoColumnsData.call}</h3>
          </div>
            ${Arrow(twoColumnsData)}</a>
        </div>
        `
            : ""
        }
      </div>
      <img id="section-image" src="/assets/${twoColumnsData.sectionImg}" alt="${
    twoColumnsData.imgAlt
  }">
    </div>
   `;
}
