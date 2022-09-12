import {useState} from 'react'

const Form = (props) => {
//setter function allows the change to notify react that this component has changed
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

//used for testing info in console and making sure we remain in state when we refresh
const userInfo = { 
    firstName,
    lastName,
    email,
    password,
    confirmPassword
}

const submitUser = (e) => {
    e.preventDefault() //keeps info from refreshing and losing state
    if (firstName && lastName && email && password && confirmPassword){ //if there is information in each than...
        console.log(userInfo) //console log it
    } else { //if not then 
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
}

    return (
        <div>
            <form onSubmit={submitUser}>
                <label>First name: </label>
                <input type="text" name="firstName" onChange = {(e)=> setFirstName(e.target.value)}/>
                { //if the firstname has data and the length is less than 2 then render this message as validation error
                    firstName && firstName.length < 2 ? <p>First name must be more than 2 characters!</p> : null
                }
                <label>Last name: </label>
                <input type="text" name="lastName" onChange = {(e)=> setLastName(e.target.value)}/>
                {
                    lastName && lastName.length < 2 ? <p>Last name must be more than 2 characters!</p> : null
                }
                <label>Email: </label>
                <input type="text" name="email" onChange = {(e)=> setEmail(e.target.value)}/>
                {
                    email && email.length < 5 ? <p>Email must be more than 5 characters!</p> : null
                }
                <label>Password: </label>
                <input type="password" name="password" onChange = {(e)=> setPassword(e.target.value)}/>
                {
                    password && password.length < 8 ? <p>Password must be at least 8 characters!</p> : null
                }
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange = {(e)=> setConfirmPassword(e.target.value)}/>
                {
                    confirmPassword && confirmPassword.length < 8 ? <p>Password must be at least 8 characters!</p> : null
                }
                <button>Submit</button>
            </form>
            <p>Your Form Data</p>
            <p>First Name:{firstName}</p>
            <p>Last Name:{lastName}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{confirmPassword}</p>
        </div>
    )
}

export default Form

