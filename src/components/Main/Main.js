import React, { Component } from 'react'
import Content from './Content 1/Content1'
import Content2 from './Content 2/Content2'
import Content3 from './Content 3/Content3'
import './Main.css';

export default class Main extends Component {

  render() {
    return (
        <React.Fragment>
            <div className="main-styling">
                <Content data={"Content 1"} styling ={{backgroundColor:'red',flex:1}}/>
                <Content data={"Content 2"} styling ={{backgroundColor:'yellow',flex:1}}/>
                <Content data={"Content 3"} styling ={{backgroundColor:'green',flex:1}}/>
            </div>
        </React.Fragment>
    )
  }
}
