import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const SEO = ({description, keywords, title, image}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || ["gatsby blog", "gatsby MDX blog"]
                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )
                    }
                    />
                )
            }}
        />
    )
}

export const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
            image
            description
            title
            }
        }
    }
`
