import {Link} from 'react-router-dom';

const About = (props)=>{
    return(
        <div>
            <h1> About Component </h1>
            <Link to={'/'}>Go to home</Link>
        </div>
    )
}

export default About;