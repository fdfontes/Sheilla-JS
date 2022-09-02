function Layout() {
  return `
  <main>${ProjectSection(projectSectionsData)}</main>
  `;
}

function Project(project) {
  return `
<article>
  <h3>${project.title}</h3>
  <p class="genre">${project.subtitle}</p>
  <p>${project.description}</p>
</article>
  `;
}

function ProjectSection(section) {
  return `
<h2>${section.title}</h2>
<div class="screenplays">
  ${section.items.map(Project).join("\n")}
</div>  
`;
}

const projectSectionsData = [
  // Section #1
  {
    title: "Screenplays",
    items: [
      {
        title: "Amano",
        subtitle: "ONE HOUR PILOT / SCI-FI, DRAMA",
        description:
          "In a future ruled by corporations, CEO Mirai Amano expects her daughters, Seph and Theo, to live up to the legacy of her name, but this proves difficult when the behemoth she’s built and the world supporting it begins unraveling."
      },
      {
        title: "MNEMOSYNE",
        subtitle: "DIGITAL SERIES PILOT / URBAN FANTASY",
        description:
          "Amelia's world takes a dark and supernatural turn after she is haunted by an eerie vision of her missing girlfriend."
      },
      {
        title: "MERMAID",
        subtitle: "SHORT FILM / DRAMA",
        description:
          "A three part anthology exploring human connection and lack thereof, centering on a young woman named Marina."
      },
      {
        title: "OUR FOREST HEIGHTS",
        subtitle: "HALF-HOUR PILOT / COMEDY-DRAMA",
        description:
          "Two best friends living in the same immigrant neighbourhood in Calgary are horrified to learn they are going to separate high schools and must face the formative trenches alone."
      }
    ]
  },

  // Section #2
  {
    title: "Short Stories",
    items: [
      {
        title: "89TH FLOOR",
        subtitle: "SCI-FI",
        description:
          "The most powerful woman in the world loses everything in a single night, to a girl bent on getting revenge."
      },
      {
        title: "VOLKOV",
        subtitle: "SCI-FI",
        description:
          "Ana, who has been on the run after joining a group of extremists, reunites with her husband who she left behind 10 years ago."
      }
    ]
  }
];

let rendered = projectSectionsData.map(ProjectSection).join("\n");

const sectionsHTML = Layout();

const projectsRoot = document.querySelector(".projects-root");

projectsRoot.innerHTML = sectionsHTML;
