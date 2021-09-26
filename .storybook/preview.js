import '../src/global.css';
import example from '../src/icons/example.svg';
example;

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    () => ({
        template: `
            <div id="app">
                <story />
            </div>
        `
    })
]