// @TODO: Should icon be configurable?
export function Head(pageTitle) {
  return `
  <!-- BOILERPLATE -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />

  <!-- SPECIFIC -->
  <title>${pageTitle}</title>
  <link rel="icon" href="/assets/moon-icon.png" />
  <link rel="stylesheet" href="/mystyles.css" />
  `;
}

// const pageTitle = "sheilla theng";

export function headBuild(pageTitle) {
  const headHTML = Head(pageTitle);

  const headRoot = document.querySelector(".head-root");

  headRoot.innerHTML = headHTML;
}
