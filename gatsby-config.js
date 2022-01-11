module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-theme-i18n`,
            options: {
              defaultLang: `en`,
              configPath: require.resolve(`./i18n/config.json`),
            },
          },
    ]
}