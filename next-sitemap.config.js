/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://medicooverseasconsultancy.com/",
  generateRobotsTxt: true, // (optional) Generates a `robots.txt` file
  sitemapSize: 5000, // Split sitemap into multiple files if it exceeds this number of URLs
  changefreq: "daily", // Specifies the frequency of changes, such as 'daily', 'weekly'
  priority: 0.7, // Specifies the priority of the URLs, ranging from 0.0 to 1.0
  exclude: ["/admin/*"], // Exclude specific paths or dynamic routes
  // Additional options...
};
