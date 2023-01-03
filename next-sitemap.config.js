/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://herebio.works',
    generateRobotsTxt: true, // (optional)
    // ...other options
}