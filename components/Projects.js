export function Project(project) {
  return `
<article>
  <h3>${project.title}</h3>
  <p class="genre">${project.subtitle}</p>
  <p>${project.description}</p>
</article>
  `;
}
