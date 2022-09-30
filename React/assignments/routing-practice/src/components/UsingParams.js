import {useParams} from 'react';

const UsingParams = (props) => {

    const {num,word,color,backColor} = useParams()
    return(
        <div>
            <h2>The number is : {num} </h2>
            <h2 style={color} >The word is : {word} </h2>
            
        </div>
    )
}

export default UsingParams;