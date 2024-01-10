/** @type { import('@storybook/react').Preview } */
import '../src/styles/base.scss';
import './styleFixes.scss';

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#f8f8f8',
                },
                {
                    name: 'dark',
                    value: '#333333',
                },
                {
                    name: 'primary',
                    value: '#f9eafc',
                },
            ],
        },
    },
};

export default preview;
