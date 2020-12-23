import React from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";



class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        console.log("keri");
        e.preventDefault();
        //this.loadXMLDoc();
        // return <Redirect to='/login'/>
        this.props.history.push('/login');
    
    }  

    // loadXMLDoc() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         // document.getElementById("demo").innerHTML =
    //         // this.responseText;
    //     console.log(this.responseText)  
    //     }
    //     };
    //     xhttp.open("GET", 'https://fakestoreapi.com/products/', true);
    //     xhttp.send();
    //   }


    render() {
        return(
            <div className="App" >
                <form className="form"  >
                    <input className="form input todo" type = 'email' name='email' placeholder='Email' required onChange = {this.handleChange} />
                    <input className="form input todo" type = 'password' name='password' placeholder='Password' required onChange = {this.handleChange} />
                    <button className="form input todo" onClick={this.handleSubmit}>Login</button>
                    </form>
            </div>
        )
    }
}

export default Login;