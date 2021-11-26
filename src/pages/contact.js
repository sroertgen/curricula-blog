import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const email = data.site.siteMetadata.email
  const social = data.site.siteMetadata.social

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>
        Kontaktiere uns gerne über unsere{" "}
        <a href={`mailto:${email}`}>Mailingliste</a>.
      </p>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        email
        social {
          github
        }
      }
    }
  }
`
