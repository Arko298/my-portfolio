import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes/schema'

export default defineConfig({
  name: 'default',
  title: 'My-Portfolio',

  projectId: 'go9de36u',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types
  },
})
