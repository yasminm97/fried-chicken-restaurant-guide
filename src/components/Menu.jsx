import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';

const Menu = () => {
    const [restaurants, setRestaurants] = useState([{name:'',location:'',rating:''}]);
    
    const handleSubmit = (name, location, rating) => {
            name = document.getElementById('restaurant-name').value;
            location = document.getElementById('restaurant-location').value;
            rating = parseFloat(document.getElementById('restaurant-rating').value);
            const newRestaurant = { name, location, rating };
            setRestaurants([...restaurants, newRestaurant]);
    };
    const handleDelete = (index) => {
        const newRestaurant = [...restaurants];
        newRestaurant.splice(index, 1); 
        setRestaurants(newRestaurant);
    };

    return(
        <div className="main-menu">
            <h1>Fried-Checken Finder</h1>
            <form>
             <input type="text" id='restaurant-name' placeholder='Restaurant Name'/>
             <input type="text" id='restaurant-location' placeholder='Location'/>
             <input type="number" id='restaurant-rating' placeholder='Rating'/>
             <button type="submit" onClick={()=>handleSubmit}>Add Restaurant</button>
            </form>
            <ul>
                {restaurants.map((rest, index) => (
                <li key={index}>
                    <div className='card'>
                        <h4 className='rest-name'>{rest.name}</h4>
                        <p className='location'>{rest.location}</p>
                        <div>
                        <Rating rating={rest.rating}/>
                        </div>
                        <button className='delete' onClick={() => handleDelete(index)}> <FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                </li>
            ))
            }
            </ul>
        </div>
    )
}
export default Menu;