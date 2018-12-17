module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "wecanooo", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "기억하기 귀찮은 잡다한 기술이야기", // Site title.
  siteTitleAlt: "STUnitas 개발자의 블로그", // Alternative site title for SEO.
  siteLogo: "logos/dream.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://wecanooo.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/story", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "기억하자니 쓸데없이 귀찮고, 기억 안하자니 모르면 상당히 귀찮은 것들을 기록합니다.", // Website description used for RSS feeds/meta description tag.
  siteCover: "images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: false, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "wecanooo", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-77648426-1", // GA tracking ID.
  disqusShortname: "wecanooo", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/wecanooo",
    "https://twitter.com/wecanooo",
    "mailto:wecanooo@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/wecanooo",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/wecanooo",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:wecanooo@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "wecanooo@gmail.com", // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    url: "https://www.about.me/wecanooo" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
