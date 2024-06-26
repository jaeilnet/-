import {Button} from "../src";
import {fn} from "@storybook/test";

export default {
    title: "Example/Header",
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "center",
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
};

export const LoggedIn = {
    args: {
        label: "Button",
    },
};

export const LoggedOut = {};
