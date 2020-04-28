import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FunPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "Landscape-3.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Home" />
      <h1> Sup </h1>{" "}
      <Img fixed={data.image.childImageSharp.fixed} alt="grafitti bus" />{" "}
      <Img fluid={data.image.childImageSharp.fluid} alt="grafitti bus" />
    </div>
  )
}

export default FunPage
