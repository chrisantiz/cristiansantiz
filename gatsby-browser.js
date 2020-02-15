/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import './src/styles/tailwind.css';
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
  return (
    <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh' }}>
      <Layout {...props}>{element}</Layout>
    </div>
  )
}
