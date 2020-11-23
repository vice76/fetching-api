import React from 'react';
import { Route, Link} from 'react-router-dom';
import './header.css';


function Header(){
    return (
        <div className="header">
            <nav>
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to={{
                                pathname: '/create',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}><button>Search</button></Link> </li>
                        </ul>
                    </nav>
        </div>
    )
}

export default Header;