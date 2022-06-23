import React, { Component } from 'react';

const styling = {
    bannerStyling:{
        backgroundColor : 'pink',
        height : '300px',
        textAlign : 'center',
    },
    banner2styling : {
        backgroundColor : 'green',
        height : '300px',

    }
}

export default class Banner extends Component {
 

  render() {
    return (
      <section>
         <h1 style={styling.bannerStyling}>Banner</h1>
      </section>
    )
  }
}
