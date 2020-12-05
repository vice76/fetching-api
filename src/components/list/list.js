import React from 'react';
import '../../assets/styles/list.css';

const List = (props) =>{
    const newdata=props.data;
    
    return (
        <div className="style-list">
            <h2>total repositories:{newdata.length}</h2>
            <p>
                {
                    newdata.map((rep) => 
                    <li key={rep.id}>
                    <a href={rep.html_url} target="_blank" rel="noopener noreferrer">{rep.name}</a>
                    </li>)
                    
                }
            </p>
        </div>
    )
}

export default List;