import { Contact } from "/components/Contact-Form.js";
import { ProjectSection } from "/components/Projects.js";
import { Hero } from "/components/Hero.js";
import { TwoColumns } from "/components/Two-Columns.js";
import { OneColumn } from "/components/One-Column.js";

export function Blocks(block) {
  if (block.type === "hero") {
    return Hero(block);
  }

  if (block.type === "one-column") {
    return OneColumn(block);
  }

  if (block.type === "two-columns") {
    return TwoColumns(block);
  }

  // multiple projects with a section title + projects listed in 2 columns
  if (block.type === "projects") {
    return ProjectSection(block);
  }

  if (block.type === "form") {
    return Contact(block);
  }

  return ``;
}
