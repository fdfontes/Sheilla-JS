// This script is imported bt writing.html to create screenplays dynamically

/**
 * Function/component that creates the HTML for screenplays & short stories,
 * given their title, description and subtitle.
 *
 * Tip: this weird text between backticks (`) is called a template literal,
 * a special type of Javascript string that accepts dynamic code inside it.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

import { NavBar, NAV_BAR_LINKS_DATA } from "/nav-bar-components.js";
import { Footer, FOOTER_LINKS_DATA } from "/footer.js";

function Layout() {
  return `
  <nav class="nav-bar">${NavBar(NAV_BAR_LINKS_DATA)}</nav>
  <main>${ProjectSection(projectSectionsData)}</main>
  <footer class="bottom-bar">${Footer(FOOTER_LINKS_DATA)}</footer>
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
  ${
    // Array of { title: ..., subtitle: ..., description: ...}
    section.items
      // Array of <article><h3>....</h3>...</article>
      .map(Project)
      // string/text of the final project list HTML
      // Don't worry if this doesn't make sense yet
      .join("\n")
  }
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
// const sectionsHTML = projectSectionsData.map(ProjectSection).join("\n");

// Choose where in the HTML we want to add our sections

const projectsRoot = document.querySelector(".projects-root");

// Inject the sections as the inner HTML of the projects root.
// This is modifying the "innerHTML" property of the projectsRoot object/element.
// innerHTML is a common property to ALL elements in the document, and it controls what HTML is rendered inside it.

projectsRoot.innerHTML = sectionsHTML;

//  TESTS
// const person = {
//   age: 30,
//   name: "Fernanda",
//   nickname: "fe"
// };

// // Modifying the property "age" in the person object
// person.age = person.age + 1;

// console.log(document.querySelector("h1").innerHTML);

// console.log("message");
// Math.min(1, 4);

// function mapNumber(num) {
//   return `number: ${num}`;
// }

// console.log([1, 2, 3].map(mapNumber));

/*

Map example: [1, 2, 3].map((num) => `number: ${num}`)

items: [
  1,
  2,
  3
]

map: [
  "number: 1...",
  "...",
  "...",
]

1  ->  number: 1
2  ->  number: 2
3  ->  number: 3

*/
