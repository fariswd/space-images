import React from 'react'

import Layout from '../components/layout'
import Footer from '../components/footer'
import Headline from '../components/headline'

import { space } from '../constant/image-list'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Headline />
        <div style={{marginTop: 30}}>
          <h1 className="title is-size-4">Space Images</h1>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: 100 + '%'}}>
            {space.map(s => {
              return (
                <div key={s.id} style={{
                  width: 30 + '%',
                  height: 150,
                  margin: 3,
                  backgroundImage: `url('${s.image}')`,
                  cursor: 'pointer',
                  }}
                  onClick={() => this.props.navigate(`/detail?id=${s.id}`)}
                />
              )
            })}
          </div>
        </div>
        <Footer />
      </Layout>
    )
  }
}
export default IndexPage
