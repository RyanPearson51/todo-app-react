import React from 'react'

const buttonStyle = {
    backgroundColor: '#61dafb',
    color: 'black',
    fontSize: '14px',
    padding: '5px 30px',
    borderRadius: '5px',
    margin: '10px 5px',
    cursor: 'pointer'
}

function TodoCard(props) {

    const {title, clickToRemove, index} = props
    return (
    <li>{title}
        <button style = {buttonStyle} onClick={()=> {clickToRemove(index)}}>Remove</button>
    </li>
    
    )
}

export default TodoCard;