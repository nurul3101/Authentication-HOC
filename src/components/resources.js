import React, { Component } from 'react';
import Header from './header';

class Resources extends Component{
    render(){
        return(
            <div>
                <Header />
                <ul className="list-group">
                    <li className="list-group-item">Super Secret</li>
                    <li className="list-group-item">The Mighty Super Secret</li>
                </ul>   
            </div>
        )
    }
}

export default Resources;