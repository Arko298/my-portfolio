import { about } from "./about"
import { author } from "./author"
import { blog } from "./blog"
import { category } from "./category"
import { contact } from "./contact"
import { project } from "./project"
import { skill } from "./skills"
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, project, about, skill, contact, author, category],
};
