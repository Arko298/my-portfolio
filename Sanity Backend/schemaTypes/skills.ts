import { defineField, defineType } from 'sanity';

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency',
      type: 'number',
      description: 'Rate your proficiency from 1 (beginner) to 5 (expert).',
      validation: (Rule) => Rule.min(1).max(5),// to be shown in percentage format
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Optional icon for the skill.',
    }),
  ],
});