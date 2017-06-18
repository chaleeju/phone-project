import React from 'react';
import './Item.css';

class Item extends React.Component {
    
    render() {
        
        return (
            <div className="list">
                <div className="item">
                    <div className="box">공부하기</div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        )
    }
}

export default Item;