module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "airbnb-typescript",
        "standard-with-typescript",
        "plugin:@typescript-eslint/recommended", 
        "plugin:prettier/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest", 
        sourceType: "module" 
    }
};