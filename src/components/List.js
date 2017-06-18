import React from 'react';
import './List.css';
import Item from './Item';

class List extends React.Component {
    
    render() {
        
        return (
            <div className="row">
                <div className="title">
                    <input type="text" placeholder="To Do?" />
                </div>
                <Item />
            </div>
        )
    }
}

export default List;