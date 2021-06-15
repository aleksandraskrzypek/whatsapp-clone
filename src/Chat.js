import React, {useState, useEffect} from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import {AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"

import './Chat.css'


function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('')

    useEffect(() => {
      setSeed(Math.floor(Math.random() *5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typped >>>', input)
    }

    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat-headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className='chat-headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat-body'>
                <p className={`chat-message ${ true && `chat-reciver`}`}>
                    <span className='chat-name'>Lolo</span>
                    Hey Guys

                    <span className='chat-timestamp'>3:52pm</span>
                </p>
            </div>
            <div className='chat-footer'>
                <InsertEmoticonIcon />
                <form>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder="Type a message" 
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
