import React from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Helmet title="this is page 2"/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
