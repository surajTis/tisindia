module.exports = {
    "plugins": [
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009"
          },
          "stage": 3,
          "features": {
            "custom-properties": false
          }
        }
      ],
      [
        '@fullhuman/postcss-purgecss',
        {
          content: [
              './components/**/*.{js,jsx,ts,tsx}',
              './common/*.{js,jsx,ts,tsx}',
              './common/layout/*.{js,jsx,ts,tsx}'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: ["html", "body"]
        }
      ],
    ]
  }