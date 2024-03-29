module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    globals: {
        window: true,
        document: true,
        navigator: true,
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
        self: true,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    extends: ["./best-practices", "./errors", "./node", "./style", "./variables", "./es6", "./imports", "./strict"],
    plugins: ["prettier"],
};
