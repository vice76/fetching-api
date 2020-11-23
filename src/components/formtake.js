import React from 'react';
import './formtake.css';

function Formtake() {
    const [inputValue, setInputValue] = React.useState("");
    const [repos , setRepos]= React.useState([]);


    React.useEffect(() => {
        if(!inputValue){
            return;
        }

        fetch("https://api.github.com/search/repositories?q="+ inputValue)
        .then(response => { 
            return response.json(); 
        })
        .then(data => { 
            console.log(data); 
            setRepos(data.items);
        });
    },[inputValue]);

    console.log(repos);

    return(
        <div>
            <form
                onSubmit={evt => {
                    evt.preventDefault()
                    setInputValue(evt.target.elements.query.value);
                }}
            >
                <input 
                    type="text"
                    name="query"
                    className="design_search"
                    placeholder="Serach github repos"
                />
            </form>
            <ul className="repo-list">
                {repos.map(repo =>{
                    return(
                        <li key={repo.id} className="repo-item">
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                            <p>{repo.description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Formtake;