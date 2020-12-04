import React,{ useState } from 'react';
import { getData } from '../../services/api.service';
import List from '../list/list';
import '../../assets/styles/formtake.css';

function Formtake() {
    const [inputValue, setInputValue] = useState("");
    const [repos , setRepos]= useState([]);

    const handleSubmit=(event) => {
        event.preventDefault()
        console.log(inputValue);
        if(inputValue){
            getData(inputValue, (response) =>{
                console.log(response);
                setRepos(response.map((repo) =>{
                    return repo;
                }));
            })
        }
    };
    const handleChange=(event) => {
        setInputValue(event.target.value);
    };
    return(
        <div>
                <input 
                    type="text"
                    className="design_search"
                    placeholder="Serach github repos"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit} className="design_button">Search</button>
                <List data={repos}/>
        </div>
    )
}

export default Formtake;