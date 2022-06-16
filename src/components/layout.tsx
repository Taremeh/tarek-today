// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import * as React from "react"
import { Link } from "gatsby"
import { css, jsx } from '@emotion/react'


const Layout = ({ location, title, children }: any) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  const [loaded, setLoaded]= React.useState(false)

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentDate = new Date();

  React.useEffect(() => {
    function delay(time: number) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    
    delay(1000).then(() => setLoaded(true));
  },[])

  if (isRootPath) {
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
            animation-name: colorPulse;
            animation-duration: .6s;
            transition: all .2s;

            @keyframes colorPulse {
              0% {background-color: transparent;}
              50% {background-color:  var(--background-color);}
              100% {background-color: transparent;}
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
              --background-color: #A3A5D97b;
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(3) {
              animation-delay: .2s;
              --background-color: #0268737b;
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(4) {
              animation-delay: .3s;
              --background-color: #01403A7b;
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(5) {
              animation-delay: .4s;
              --background-color: #F2EDA27b;
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
            &:nth-of-type(6) {
              animation-delay: .5s;
              --background-color: #F2A7B57b;
              &:hover {
                background-color: var(--background-color);
                color: black;
              }
            }
          }
        `}>
          <Link to="/">Front</Link>
          <Link to="/">Coding</Link>
          <Link to="/">University</Link>
          <Link to="/">Photo</Link>
          <Link to="/">Video</Link>
          <Link to="/">Writing</Link>
        </nav>
      </div>
    )
  } else {
    header = (
      <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <strong>{monthNames[currentDate.getMonth()]} {currentDate.getDate()} Edition</strong>
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
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
