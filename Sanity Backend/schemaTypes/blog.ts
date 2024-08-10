import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title:'Title',
    } ),
    defineField({
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
      }),
      defineField({
        name: 'image',
        type: 'image',
      }),
      defineField({
        name: 'launchAt',
        type: 'datetime',
        title:'Launch Schedules At '
      })
        
    
   
  ],
})