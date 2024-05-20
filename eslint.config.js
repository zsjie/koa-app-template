import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsEslint from 'typescript-eslint'

export default [
    ...tsEslint.configs.recommended,
    
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
            "simple-import-sort/imports": 2,
        },
    },
]
