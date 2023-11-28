module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended", 
        "plugin:prettier/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest", 
        sourceType: "module" 
    }
};