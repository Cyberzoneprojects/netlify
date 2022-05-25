import { useState, useEffect } from "react"

import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Header from "./Header";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../style.css"
function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    const [Email, setEmail] = useState('');
    const [Pwd, setPwd] = useState('')
    const [finalUser, setFinalUser] = useState()
    const userCollectionRef = collection(db, "Users")

    // const createUser = async () => {
    //     await addDoc(userCollectionRef, { Email: Email, Pwd: Pwd })
    // }
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            // console.log(data.docs)
            setUsers(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getUsers()
        console.log(users)
    }, [])
    // console.log(users)
//     setUsers([
//         {
//             name:"rom",
//             pass: "123"
//         }
// ])

    const authUser = (e) => {
        e.preventDefault()
        users.map((
            (user) => {if(user.Email === Email && user.Pwd===Pwd){
                setFinalUser({Email: user.Email, Name:user.Name}) }}
                // navigate('/userhome', {state:{Name:user.Name, Email:user.Email}})
                // : window.location.reload()?
        ))


        if(finalUser !== []){
            console.log(finalUser)
            navigate('/userhome', {state:{Name:finalUser.Name, Email:finalUser.Email}})
        }

        // users.forEach((user)=>{
        //     if(user.Email === Email && user.Pwd===Pwd){
        //         navigate('/userhome', {state:{Name:user.Name, Email:user.Email}})
        //     }
        // })
        // users.forEach((user)=>{
        //     if(user.name === "rom" && user.pass === "123"){
        //         navigate('/userhome', {state:{Name:user.Name, Email:user.Email}})
        //     }
        // })
        // console.log("yes")
    }

    return (
        <div className="App">
            <Header btn='SignUp'/>
            <div>
                <h1>Sign In</h1>
            </div>
            <form>

                <div>
                    Email:
                    <div className="field">
                        <input
                            type="email"
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                </div>
                <div>
                    Password:
                    <div className="field">
                        <input
                            type="password"
                            onChange={(event) => { setPwd(event.target.value) }}
                        />
                    </div>
                </div>
                <button onClick={authUser}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
