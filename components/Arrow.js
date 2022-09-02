export function Arrow(block) {
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