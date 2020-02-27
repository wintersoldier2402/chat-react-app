import React from 'react';
import classNames from 'classnames';
import Eye from '../../chat-title/eye.svg'
import BarChart from '../../chat-title/barchart.svg'
import './ConversationItem.scss';

const ConversationItem = ({ conversation, isActive, onConversationItemSelected }) => {
    const className = classNames('conversation', {
        'active': isActive
    });

    return (
        <div className={className} onClick={() => onConversationItemSelected(conversation.id)}>
            <img src={conversation.imageUrl} alt={conversation.imageAlt} />
            <div className="title-text">{conversation.title}</div>
            
            <div className="conversation-message">
                {conversation.latestMessageText}
            </div>
            <div className="created-date">{conversation.createdAt}</div>
            <div className='image1'>
            <img src={Eye} style={{height:"16px"}} /></div>
            <div className="image2"><img src={BarChart} style={{height:"16px"}} /></div>
        </div>
    );
}

export default ConversationItem;