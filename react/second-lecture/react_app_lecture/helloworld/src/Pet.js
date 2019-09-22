import React, {Component} from 'react';
//자바스크립트 파일이 아닐 때는, css extension을 붙여줘야 한다.
import './Pet.css';
import HobbyList from "./HobbyList";


class Pet extends Component {
    render(){
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img
                    src="https://s2.best-wallpaper.net/wallpaper/2560x1440/1601/Beautiful-japanese-girl-kimono-umbrella_2560x1440.jpg"
                    alt="Moxie"
                />
                <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
                <HobbyList/>
            </div>
        )
    }
}

export default Pet;