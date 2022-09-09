import { useState } from 'react';

const PersonCard = props => {
    const [getAge, setAge] = useState(props.age); 
    return (
        <div>
            <h2>{ props.lastName } , { props.firstName }</h2>
            <p>Age: {getAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={(event)=> setAge(getAge + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;