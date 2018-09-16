import React from 'react'
import Layout from '../components/layout'
import NotFound from './404'

import { space } from '../constant/image-list'

export default class Detail extends React.Component {
  state = {
    id: 1,
    image: false,
    fail: false,
  }
  componentDidMount() {
    const id = this.props.location.search.substring(1).split('=')[1]
    if(+id > 0 && +id < 10) {
      const spaces = space.filter(s => s.id === +id)[0]
      this.setState({id: +id, image: spaces.image})
    } else {
      this.setState({fail: true})
      return this.props.navigate('/404/')
    }
  }
  handleNavigate(navigate) {
    const newId = navigate === 'next' ? +this.state.id +1 : +this.state.id -1
    if(newId < 1 || newId > 9) return this.setState({fail: true})
    this.props.navigate(`/detail?id=${newId}`)
    const spaces = space.filter(s => s.id === newId)[0]
    this.setState({
      id: newId,
      image: spaces.image
    })
  }
  
  render() {
    if(this.state.fail) return <NotFound />
    return (
      <Layout>
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-12">
              <article className="tile is-child">
                <figure className="image is-4by3" style={{height: 100 + '%'}}>
                  {this.state.image && <img src={this.state.image} alt={`${this.state.image}`} />}
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-12 has-text-centered" style={{display: 'flex', justifyContent: 'center', paddingTop: 20}}>
              {this.state.id !== 1
                ? <div
                  className="tile is-child"
                  style={{cursor: 'pointer'}}
                  onClick={() => this.handleNavigate('prev')}
                  >
                    <i className="fas fa-arrow-left fa-3x"></i>
                </div>
                : null
              }
              {this.state.id !== 9
                ? <div
                  className="tile is-child"
                  style={{cursor: 'pointer'}}
                  onClick={() => this.handleNavigate('next')}
                  >
                   <i className="fas fa-arrow-right fa-3x"></i>
              </div>
              : null
            }
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}