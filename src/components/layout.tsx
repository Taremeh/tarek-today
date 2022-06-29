// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css, jsx } from '@emotion/react'


const Layout = ({ location, title, children }: any) => {

  // get indexPaths from gatsby-config
  const {site: {siteMetadata: {indexPaths}}} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          indexPaths
        }
      }
    }
  `)
  const isIndexPath = indexPaths.includes(location.pathname)

  let header

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentDate = new Date();

  if (isIndexPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <nav css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
        
          & a {
            font-family: "Josefin Sans", sans-serif;
            text-transform: uppercase;
            text-decoration: none;
            color: #1a202c;
            padding: .5em 1em .4em 1em;
            animation-name: ${isIndexPath ? "colorPulse" : "none" };
            animation-duration: .6s;
            transition: all .2s;
            background-color: var(--background-color-last);

            @keyframes colorPulse {
              0% {background-color: var(--background-color-last);}
              50% {background-color:  var(--background-color);}
              100% {background-color: var(--background-color-last);}
            }

            &:nth-of-type(1){
              --background-color: #f2a7b57b;
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(2) {
              animation-delay: .1s;
              transition: background-color .2s;
              --background-color: #A3A5D97b;
              --background-color-last: ${location.pathname === "/coding" ? "var(--background-color)" : "transparent"};
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(3) {
              animation-delay: .2s;
              --background-color: #0268737b;
              --background-color-last: ${location.pathname === "/university" ? "var(--background-color)" : "transparent"};
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(4) {
              animation-delay: .3s;
              --background-color: #01403A7b;
              --background-color-last: ${location.pathname === "/photo" ? "var(--background-color)" : "transparent"};
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(5) {
              animation-delay: .4s;
              --background-color: #F2EDA27b;
              --background-color-last: ${location.pathname === "/video" ? "var(--background-color)" : "transparent"};
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(6) {
              animation-delay: .5s;
              --background-color: #F2A7B57b;
              --background-color-last: ${location.pathname === "/writing" ? "var(--background-color)" : "transparent"};
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
          }
        `}>
          <Link to="/">Front</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/university">University</Link>
          <Link to="/photo">Photo</Link>
          <Link to="/video">Video</Link>
          <Link to="/writing">Writing</Link>
        </nav>
      </div>
    )
  } else {
    header = (
      <div>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      {/* <strong>{monthNames[currentDate.getMonth()]} {currentDate.getDate()} Edition</strong> */}
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isIndexPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout