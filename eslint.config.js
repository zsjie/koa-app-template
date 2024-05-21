import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsEslint from 'typescript-eslint'

export default [
    ...tsEslint.configs.recommended,

    {
        plugins: {
            // add plugins here
            'simple-import-sort': simpleImportSort
        
        },
        rules: {
            // override/add rules settings here, such as:
            "simple-import-sort/imports": 2,
        },
    },
]
