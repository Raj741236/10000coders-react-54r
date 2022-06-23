import React from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Accordion from "react-bootstrap/Accordion";
import "./App.css";
import AppRoutes from "./components/Routing component/AppRoutes";
import List from "./components/List and Keys/List";
import Counter from "./components/Counter/Counter";
import ContactUS from "./components/Form/ContactUS";
import MountingPhase from "./components/Mounting phase/MountingPhase";
import UserData from "./components/Life Cycle Methods/UserData";
import Task from "./components/Life Cycle Methods/Task/Task";


class JSXDemo extends React.Component {
  // render(){
  //   const jsx = <h1 id="jsx">This is JSX</h1>
  //   console.log(jsx);
  //   return jsx;
  // }
  // render(){
  //   const jsx = React.createElement('h1',{id : 'jsx'},'This is JSX');
  //   console.log(jsx);
  //   return jsx;
  // }
  // handleClick = ()=>{
  //   console.log('clicked')
  // }

  // render(){
  //   return(<button id='btn' onClick={this.handleClick}>Click here</button>)
  // }
  // render(){
  //   const jsx = React.createElement('button',{id:'btn',onClick : function(){
  //     console.log('clicked')
  //   }},"Click here");
  //   console.log(jsx);
  //   return jsx
  // }

  // render(){
  //   const para1 = '10000 coders'
  //   const para2 = true;
  //   return(<React.Fragment>
  //                 <div className="JSx">
  //                     <p>{para1}</p>
  //                     <p>{para2}</p>
  //                 </div>
  //                 <div></div>
  //         </React.Fragment>
  //   )}

  render(){
    return(
      <React.Fragment>
            <Header />
                {/* <AppRoutes/> */}
              {/* <Banner/>
              <Main/> */}
              {/* <List/> */}
            {/* <Counter /> */}
            {/* <ContactUS /> */}
            {/* <MountingPhase /> */}
            <UserData/>
            {/* <Task/> */}
            <Footer />
      </React.Fragment>
    )
  }

  // render() {
  //   return (
  //     <Accordion defaultActiveKey="0">
  //       <Accordion.Item eventKey="0">
  //         <Accordion.Header>Accordion Item #1</Accordion.Header>
  //         <Accordion.Body>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //           aliquip ex ea commodo consequat. Duis aute irure dolor in
  //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //           culpa qui officia deserunt mollit anim id est laborum.
  //         </Accordion.Body>
  //       </Accordion.Item>
  //       <Accordion.Item eventKey="1">
  //         <Accordion.Header>Accordion Item #2</Accordion.Header>
  //         <Accordion.Body>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //           aliquip ex ea commodo consequat. Duis aute irure dolor in
  //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //           culpa qui officia deserunt mollit anim id est laborum.
  //         </Accordion.Body>
  //       </Accordion.Item>
  //     </Accordion>
  //   );
  // }
}

export default JSXDemo;
