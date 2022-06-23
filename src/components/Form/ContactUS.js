import React from "react";

class ContactUS extends React.Component {

 state = {
     firstName : "",
     lastName : "",
     email : "",
     phone : "",
     firstNameErr : "",
     lastNameErr : "",
     emailErr : "",
     phoneErr : ""
 }

 validateForm = ()=>{
     let firstNameErr = "";
     let lastNameErr = "";
     let emailErr = "";
     let phoneErr = "";

     if(this.state.firstName.length <= 4){
         firstNameErr = "First Name should atleast have 4 Characters";
     }
     if(this.state.lastName.length < 1){
        lastNameErr = "Last Name is required";
    }
    if(!this.state.email.includes('@')){
        emailErr = "Enter a valid email";
    }
    if(this.state.phone.length !== 10){
        phoneErr = "Enter a valid phone number";
    }

    if(firstNameErr || lastNameErr || emailErr||phoneErr){
        this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
        return false
    }else{
        this.setState({firstNameErr,lastNameErr,emailErr,phoneErr});
        return true
    }
 }

 handleChange = (e)=>{
    const {name,value} = e.target;
    this.setState({[name] : value});
 }

 handleSubmit = (e) =>{
  e.preventDefault();
  const isValid = this.validateForm();
  if(isValid){
    console.log(this.state)
    console.log('form submitted')
  }
 
 }

 render(){
    return (
        <div>
          <form className="m-5" onClick={this.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter the First Name"
                name="firstName"
                className="mt-3"
                onChange = {this.handleChange}
                value={this.state.firstName}
              />
              <p className="text-danger">{this.state.firstNameErr}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter the Last Name"
                name="lastName"
                className="mt-3"
                onChange = {this.handleChange}
                value={this.state.lastName}
              />
            <p className="text-danger">{this.state.lastNameErr}</p>
            </div>
            <div>
              <input
                type="tel"
                placeholder="Enter the Phone Number"
                name="phone"
                className="mt-3"
                onChange = {this.handleChange}
                value = {this.state.phone}
              />
            <p className="text-danger">{this.state.phoneErr}</p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter the Email Id"
                name="email"
                className="mt-3"
                onChange = {this.handleChange}
                value = {this.state.email}
              />
            <p className="text-danger">{this.state.emailErr}</p>
            </div>
            <button type="submit" className="btn btn-info mt-3">Submit</button>
          </form>
        </div>
      );
 }

}

export default ContactUS;
