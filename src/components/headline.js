import React from 'react'

export default class Headline extends React.Component {
  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body" style={{
          backgroundImage: 'url("https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}>
        </div>
      </section>
    )
  }
}