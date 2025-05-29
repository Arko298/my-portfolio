import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100).error('Title is required and should be under 100 characters.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the blog post (used for previews).',
      validation: (Rule) => Rule.max(200).error('Excerpt should be under 200 characters.'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }] },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility.'),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, media, publishedAt }) {
      return {
        title,
        media,
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date',
      };
    },
  },
});