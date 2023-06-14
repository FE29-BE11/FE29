import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

// https://vitejs.dev/config/
const require = createRequire(import.meta.url);
const postcss = require('postcss')

module.exports = {
  plugins: [
    // Plugin-postcss
    require('postcss'),
  ],
};