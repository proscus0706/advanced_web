import React, {Component} from 'react';

class HobbyList extends Component {
    render(){
        const style = {fontSize: '1.5em'};
        const hobbies = ['sleeping', 'eating', 'cuddling'];
        return (
            <ul>
                {hobbies.map((h, index) => {
                    return <li key={index} style={style}>{h}</li>})}
            </ul>
        )
    }
}

export default HobbyList;