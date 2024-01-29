module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    },
};
