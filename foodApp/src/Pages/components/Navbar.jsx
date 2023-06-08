import { Component } from "react"
import "./Navbar.css"
class  Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            
            <>
                <nav>
                    <a href="#"><img src="./images/logo1.png" alt="Logo"  className="logo"/></a>
                    <div>
                        <ul id="navbar" className= {
                            this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Menu">Menu</a></li>
                            <li><a href="/Order">Order</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="Signin">signin</a></li>
                            <li><a href="Signout">Signup</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        
                    </div>
                </nav>
            </>
        )
    }
}

export  default Navbar
 