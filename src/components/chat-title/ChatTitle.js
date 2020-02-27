import React from 'react';
import Eye from './eye.svg'
import TrashIcon from '../controls/icons/trash-icon/TrashIcon';
import BarChart from './barchart.svg'
import './ChatTitle.scss';

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    let chatTitleContents = null;

    if (selectedConversation) {
        chatTitleContents = (
            <>
                <span>{ selectedConversation.title }</span>
                <div onClick={ () => { onDeleteConversation(); } } title="Delete Conversation">
                    <TrashIcon />
                </div>
            </>
        );
    }

    return (
        <div id="chat-title">
            <div className="chat-subtitle">
            <img src={Eye} /><a style={{padding:"10px" , cursor:"pointer"}}>Replies
            </a></div>
            <div className="chat-sub"><img src={BarChart} /><a style={{padding:"10px" , cursor:"pointer"}}>Reports</a></div>
        </div>
    );
}

export default ChatTitle;