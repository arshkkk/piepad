module.exports = {
    semi: false,
    overrides: [
        {
            files: ['*.ts', '*.js', '*.tsx'],
            options: {
                semi: true,
                trailingComma: 'all',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
            },
        },
        {
            files: ['*.css', '*.md'],
            options: {
                semi: true,
                trailingComma: 'all',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
            },
        },
    ],
};
