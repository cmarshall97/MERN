import {useParams} from 'react-router-dom';

const UsingParams = (props) => {

    const {word,color,backColor} = useParams();
    return(
        <div>
            {
                isNaN(word) ? 
                <h2 style= {
                    color? //does this exist?
                    {color: color, backgroundColor:backColor} //if it does than apply these properties
                    :null //if it does not exist than we get null
                } >The word is : {word} </h2>
                :
                <h2>The number is : {word} </h2>
            }
        </div>
    )
}

export default UsingParams;