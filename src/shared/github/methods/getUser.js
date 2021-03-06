const graphql = require('@octokit/graphql');

async function getUser(authToken) {
    const response = await graphql.graphql({
        query: `
          query {
            viewer {
              id
              name
              bio
              login
              email
              company
              location
              isHireable
              avatarUrl
              url
              websiteUrl
              organizations {
                totalCount
              }
              repositories {
                totalCount
              }
              followers {
                totalCount
              }
              following {
                totalCount
              }
              createdAt
              updatedAt
            }
          }
        `,
        headers: {
            authorization: `token ${authToken}`,
        },
    });

    const result = response.viewer;

    return result;
}

module.exports = getUser;
