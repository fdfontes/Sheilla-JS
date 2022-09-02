function Project(project) {
  return `
<article>
  <h3>${project.title}</h3>
  <p class="genre">${project.subtitle}</p>
  <p>${project.description}</p>
</article>
  `;
}

export function ProjectSection(projects) {
  return `
    <div class="layout-writing">
      <div class="projects"> 
      <h2>${projects.title}</h2>
        <div class="screenplays">
        ${projects.items.map(Project).join("\n")}
        </div>
      </div>
    </div>
   `;
}
