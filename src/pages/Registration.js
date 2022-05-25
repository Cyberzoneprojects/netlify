import { useState, useEffect } from "react"

import { db } from '../firebase.config'
import { collection, addDoc } from 'firebase/firestore'
import Header from "./Header";
import {Link} from 'react-router-dom'
import { fireEvent } from "@testing-library/react";
function RegistrationForm() {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Pwd, setPwd] = useState('')

    const userCollectionRef = collection(db, "Users")

    const createUser = async () => {
        await addDoc(userCollectionRef, { Name: Name, Email: Email, Pwd: Pwd })
        // fire.auth().createUserWithEmailAndPassword(Name, Email, Pwd)
    }

    //   useEffect(()=>{
    //     const getUsers = async() => {
    //       const data = await getDocs(userCollectionRef);
    //       console.log(data)
    //       setUsers(data.docs.map((doc)=>({
    //         ...doc.data(), id:doc.id
    //       })))

    //     }

    //     getUsers()
    //   })

    return (
        <div className="App" style={{ display: 'block' }}>
            <Header btn='Sign In'/>
            <div><h1>Sign Up</h1></div>
            <form>
                <div>
                    Name:
                    <div>
                        <input
                            type="text"
                            onChange={(event) => { setName(event.target.value) }}
                        />
                    </div>
                </div>
                <div>
                    Email:
                    <div><input
                        type="email"
                        onChange={(event) => { setEmail(event.target.value) }}
                    /></div>
                </div>
                <div>
                    Password:
                    <div>
                        <input
                            type="password"
                            onChange={(event) => { setPwd(event.target.value) }}
                        />
                    </div>
                </div>

                <Link to='/login'><button onClick={createUser}>Sign Up</button></Link>
            </form>
        </div>
    );
}

export default RegistrationForm;
