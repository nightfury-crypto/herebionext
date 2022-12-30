/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://herebionext.netlify.app',
    generateRobotsTxt: true, // (optional)
    // ...other options
}