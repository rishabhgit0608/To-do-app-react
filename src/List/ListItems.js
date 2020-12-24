import React from 'react';
import './ListItems.css';


const ListItems = (props) => {
    const items = props.items;
    const listitems= items.map(item=>{
        return <div className="list" key="item.key">
            <p>{item.text}</p>
        </div>
    })
    return (
       <div className="allList">{listitems}</div>
    )
}

export default ListItems