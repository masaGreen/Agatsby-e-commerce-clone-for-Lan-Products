module.exports = {
  siteMetadata: {
    title: `Agatsby Project`,
    
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-layout",
    "gatsby-transformer-json",
    {
      resolve:"gatsby-source-filesystem",
      options:{
        name:"data",
        path:`${__dirname}/src/data`
      }
    },
    
  ]
};