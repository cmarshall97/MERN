import {useParams} from 'react-router-dom';

const UsingParams = (props) => {

    const {word,color,backColor} = useParams()
    return(
        <div>
            {
                isNaN(word) ? 
                <h2 style={color} >The word is : {word} </h2>
                :
                <h2>The number is : {word} </h2>
            }
        </div>
    )
}

export default UsingParams;