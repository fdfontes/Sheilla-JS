// import { Arrow } from "/components/Arrow.js";

export function OneColumn(oneColumnData) {
  return /* html */ `
        <div class="one-column">
          <div class="section-description ${oneColumnData.title}">
            <h2>${oneColumnData.title}</h2>
            <p>${oneColumnData.description}</p>
            <img src="/assets/${oneColumnData.sectionImg}" alt="${oneColumnData.imgAlt}" id="section-image">
          </div>
        </div>
      </div>
    `;
}
