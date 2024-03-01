const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
    },
  },
  eslint: {
    mode: "extends",
    configure: {
      extends: ["react-app", "react-app/jest"],
      settings: {
        "import/resolver": {
          alias: {
            map: [["@", "./src"]],
            extensions: [".js", ".jsx", ".tsx", ".tsx"],
          },
        },
      },
    },
  },
};
