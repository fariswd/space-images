import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="hero is-large">
      <div className="hero-body" >
        <div className="container has-text-centered">
          <h1 className="title">Made with</h1>
          <h2 className="subtitle">
            {`gatsbyjs, bulma, & <3`}
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)