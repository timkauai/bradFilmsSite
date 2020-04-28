import React from "react"
import {
  Link
} from "gatsby"
import SEO from "../components/seo"

const IndexPage = ({
  data
}) => ( <
  div >
  <
  SEO title = "Home" / >
  <
  div class = "fullsizes" >
  <
  div class = "top" >
  <
  p > (01 / 05) < /p>{" "} <
  div class = "socials" >
  <
  div class = "insta" > < /div> <div class="youtube"> </div > {
    " "
  } <
  div class = "discord" > < /div>{" "} <
  /div>{" "} <
  /div>{" "} <
  div class = "main" >
  <
  div class = "mainCopy" > {
    " "
  } {
    data.allMarkdownRemark.edges.map(post => ( <
      h1 key = {
        post.node.id
      } > {
        post.node.frontmatter.homeLine1Copy
      } < /h1>
    ))
  } {
    " "
  } {
    data.allMarkdownRemark.edges.map(post => ( <
      h1 key = {
        post.node.id
      } > {
        post.node.frontmatter.homeLine2Copy
      } < /h1>
    ))
  } {
    " "
  } {
    data.allMarkdownRemark.edges.map(post => ( <
      h1 key = {
        post.node.id
      } > {
        post.node.frontmatter.homeLine3Copy
      } < /h1>
    ))
  } {
    " "
  } <
  /div>{" "} <
  /div>{" "} <
  div class = "bottom" >
  <
  div class = "projects" >
  <
  Link to = "/projects/" > {
    " "
  } {
    data.allMarkdownRemark.edges.map(post => ( <
      p key = {
        post.node.id
      } > {
        " "
      } {
        post.node.frontmatter.homeButtonToProjectsPage
      } {
        " "
      } <
      /p>
    ))
  } {
    " "
  } <
  /Link>{" "} <
  /div>{" "} <
  div > < /div> <div> </div > {
    " "
  } <
  div class = "about" >
  <
  Link to = "/ImgFunPage/" > {
    " "
  } {
    data.allMarkdownRemark.edges.map(post => ( <
      p key = {
        post.node.id
      } > {
        " "
      } {
        post.node.frontmatter.homeButtonToAboutPage
      } {
        " "
      } <
      /p>
    ))
  } {
    " "
  } <
  /Link>{" "} <
  /div>{" "} <
  /div>{" "} <
  /div>{" "} <
  /div>
)

export const pageQuery = graphql `
  query homePageIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            homeLine1Copy
            homeLine2Copy
            homeLine3Copy
            homeButtonToProjectsPage
            homeButtonToAboutPage
          }
        }
      }
    }
  }
`

export default IndexPage