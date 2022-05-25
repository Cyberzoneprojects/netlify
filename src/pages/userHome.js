import { useState, useEffect, } from "react"
// import './App.css';
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import UserInfo from "./userInfo";
import Signup from "./signup";
function UserHome() {
    const loc = useLocation();
    const info = loc.state
    // const navigate = useNavigate();
    console.log(info)
    const [users, setUsers] = useState([]);

    const userCollectionRef = collection(db, "Users")

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const d[]){ata = await getDocs(userCollectionRef);
    //         // console.log(data.docs.map((doc) => ({
    //         //     ...doc.data(), id: doc.id
    //         // })))
    //         setUsers(data.docs.map((doc) => ({
    //             ...doc.data(), id: doc.id
    //         }))) 
    //     }

    //     getUsers()
    // } , [])

    // console.log(users)
    return (
        <div>
            <div>
                <Header />
                <div className="userDash">
                    <aside>
                        <h3>Dashboard</h3>
                        <h3>Account</h3>
                        <Link to="/login"><h3 className="logoutbtn">Log Out</h3></Link>
                    </aside>
                    <main>
                        <div>

                            <UserInfo key={info.Email} Email={info.Email} Name={info.Name} />

                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default UserHome;