import {useState} from 'react'

const Form = (props) => {
//setter function allows the change to notify react that this component has changed
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

//used for testing info in console and making sure we remain in state when we refresh
// const userInfo = { 
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword
// }

// const submitUser = (e) => {
//     e.preventDefault()
//     console.log(userInfo)
// }

    return (
        <div>
            <form onSubmit={submitUser}>
                <label>First name:</label>
                <input type="text" name="firstName" onChange = {(e)=> setFirstName(e.target.value)}/>
                <label>Last name:</label>
                <input type="text" name="lastName" onChange = {(e)=> setLastName(e.target.value)}/>
                <label>email:</label>
                <input type="text" name="email" onChange = {(e)=> setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="text" name="password" onChange = {(e)=> setPassword(e.target.value)}/>
                <label>Confirm Password:</label>
                <input type="text" name="confirmPassword" onChange = {(e)=> setConfirmPassword(e.target.value)}/>
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

