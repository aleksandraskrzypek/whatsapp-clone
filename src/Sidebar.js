import React from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {SearchOutlined} from "@material-ui/icons"

import SidebarChat from "./SidebarChat"
import './Sidebar.css'

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar />
                <div className="sidebar-headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar-search'>
                <div className='sidebar-searchContainer'>
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
                
            </div>
            <div className='sidebar-chats'>
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar