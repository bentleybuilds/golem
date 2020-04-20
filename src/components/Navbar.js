import React, { Component } from 'react'
import NavItem from './NavItem'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeNavItem: ''
        }
    }

    activateItem = (navItemId) => {
        if(this.state.activeNavItem.length){
            document.getElementById(this.state.activeNavItem).classList.remove('active')
        }

        this.setState({activeNavItem:navItemId}, ()=>{
            document.getElementById(this.state.activeNavItem).classList.add('active')
        })
    }
    render(){

        return (
            <nav>
                <ul>
                    <NavItem item="Home" toLink="/" handleClick={this.activateItem}></NavItem>
                    <NavItem item="About" toLink="/about" handleClick={this.activateItem}></NavItem>
                    {/* <NavItem item="Projects" tolink="/projects"></NavItem> */}
                    <NavItem item="Education" toLink="/education" handleClick={this.activateItem}></NavItem>
                    <NavItem item="Skills" toLink="/skills" handleClick={this.activateItem}></NavItem>
                    <NavItem item="Contact" toLink="/contact" handleClick={this.activateItem}></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar