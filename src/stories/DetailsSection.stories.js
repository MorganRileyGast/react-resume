import { DetailsSection } from '../components/DetailsSection.component';

const meta = {
    title: 'Components/DetailsSection',
    component: DetailsSection,
};

export default meta;

export const WithData = {
    args: {
        data: [{
            title: 'Example',
            details: [
                { text: 'Hello, World!', highlight: 'Hello' },
                { text: 'foobar', highlight: 'foo' },
            ],
        }],
    },
};
