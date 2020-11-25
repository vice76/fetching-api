import React from 'react';

const List = (props) =>{
    const newdata=props.data;

    return (
        <div>
            <h2>total repositories:{newdata.length}</h2>
            <p>
                {
                    newdata.map((rep) => 
                    <li key={rep.id}>
                    <a href={rep.html_url}>{rep.name}</a>
                    </li>)
                    
                }
            </p>
        </div>
    )
}

export default List;