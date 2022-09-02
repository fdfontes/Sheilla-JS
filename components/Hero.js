export function Hero(heroData) {
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