import React, {Component} from 'react';
import Recipe from './Recipe';
import 'RecipeList.css'

class RecipeList extends Component {

    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spadsafdsf",
                ingredients: ['1', '2', '3'],
                img: 'spa.jpg'
            },
            {
                title: "Spaghetti",
                instructions: "Open jar of Spadsafdsf",
                ingredients: ['1', '2', '3'],
                img: 'spa.jpg'
            },
            {
                title: "Spaghetti",
                instructions: "Open jar of Spadsafdsf",
                ingredients: ['1', '2', '3'],
                img: 'spa.jpg'
            }
        ]
    };

    static propTypes = {
        recipes: PropTypes.arrayOf()
    };

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RecipeList;