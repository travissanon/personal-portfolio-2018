/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

exports.createPages = ({
  boundActionCreators,
  graphql
}) => {
  const {
    createPage
  } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);

  return graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             excerpt(pruneLength: 250)
             html
             id
             frontmatter {
               date
               path
               title
             }
           }
         }
       }
     }
   `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({
      node
    }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};

// fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD76pHEv9h9HkG3EQfMGVsIEw7I3XjsS98&part=snippet&type=video&channelId=UClE-pN-OOQrRUwi6HFHmDpA&maxResults=25')
//   .then(res => res.json())
//   .then(data => {
//     data.items.forEach((item, i) => item.id = `${i}`);
//     fs.writeFile(`${__dirname}/src/data/videos/videos.json`, JSON.stringify(data.items, null, 2), (err) => !err ? console.log('It is done.') : console.log('Didnt work boi.'))
//   })
