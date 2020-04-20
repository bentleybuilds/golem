import React from 'react'
import { Link } from "react-router-dom"

const NavItem = ({ item, toLink, handleClick }) => (
    <li id={item}>
        <Link to = {toLink} onClick={()=>handleClick(item)}>
            {item}
        </Link>
    </li>
)

export default NavItem

