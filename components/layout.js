import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { INDIGO_DYE, COLUMBIA_BLUE } from './colors'

const Layout = ({ children }) => (
  <div className="Container">
    <Head>
      <title>DemiDigitalRenegades</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="LayoutMain">{children}</main>
    <style jsx>{`
      .Container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .LayoutMain {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: ${INDIGO_DYE};
        color: ${COLUMBIA_BLUE};
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout
