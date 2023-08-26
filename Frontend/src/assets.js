import React from 'react';


export default class Image extends React.Component {
    render() {
      return <img src={this.props.src} alt="Image 1"/>
      ;
    }
  }

  const image1 = new Image({ src: '/image1.png' });
  const image2 = new Image({ src: '/image2.png' });

 