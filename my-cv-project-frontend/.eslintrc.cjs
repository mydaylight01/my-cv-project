module.exports = {
    root: true,
    env: {
        browser: true,
        es2025: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
};
