import { lighten } from 'polished';

const colors = {
    white: '#ffffff',
    grayLight: '#fafafa',
    grayMedium: '#e8e8e8',
    textGrayMedium: '#4b4b4b',

    headers: {
        h1: '#4b4b4b',
        h2: lighten(0.1, '#4b4b4b'),
        h3: lighten(0.12, '#4b4b4b'),
    }
};

export default colors;
