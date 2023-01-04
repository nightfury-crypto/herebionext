/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://herebio.works"
module.exports = {
    siteUrl: process.env.SITE_URL || siteUrl,
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        additionalSitemaps: [
            `${siteUrl}/sitemap-0.xml`,
        ]
    }
    // ...other options
}