import React, { Component } from 'react'
import { Menu, Image, Input } from 'semantic-ui-react'
import flipkartPlus from '../../assets/flipkartPlus.png'
import './Navbar.css'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ backgroundColor :  "#2874f0", height : 65, display : "flex", justifyContent : "space-around" }}>
        <Image style={{height : 35, width : 60, marginTop : 16 }} className="FlipImage" src={flipkartPlus} />
     <Input style={{ height : 40, width : 500, display : 'flex' , marginTop : 16}}  className='icon' icon='search' placeholder='Search...' />
        

        <Menu.Item
        style={{color : "white"}}
          name='upcomingEvents'
        />
        <Menu.Item
        style={{color : "white"}}
          name='More'
        />

        <Menu.Item
        style={{color : "white"}}
          name='Cart'
        />
      </Menu>
    )
  }
}