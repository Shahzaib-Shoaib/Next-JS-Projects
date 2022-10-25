import {gql} from "graphql-request";

const blogQuery = ({handle} : any) => {

    const queryArguments = `handle: "${handle}"`;

    return gql`
        {
            blogs(first: 10) {
                edges {
                    node {
                        articleByHandle(${queryArguments}) {
                            id
                            handle
                            title
                            tags
                            excerpt
                            publishedAt
                            authorV2 {
                                name
                            }
                            image {
                                originalSrc
                            }
                            contentHtml
                        }
                    }
                }
            }
        }
    `
}

export default blogQuery;