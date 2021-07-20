import React from 'react'
import "./Header.css"
import rentbnb from "../../assets/rentbnb.png"
import { ExpandMore, Language, Search } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <img className="header__icon" src={rentbnb} alt="" />

            <div className="header__center">
                <input type="text" />
                <Search />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
