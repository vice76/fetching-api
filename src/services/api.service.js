import axios from 'axios';

export function getData(name , items){
    axios.get(`https://api.github.com/users/${name}/repos?per_page=30&sort=created:asc`)
    .then(response => {
        const res=response.data;
        if(items != null)
        items(res);
    }).catch(error => window.alert("USER NOT FOUND OR INPUT IS WRONG . TRY AGAIN"))
    
}