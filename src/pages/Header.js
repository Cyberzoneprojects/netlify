import '../style.css'
import {Link} from "react-router-dom"
function Header (props) {
    return(

        <div className='container'>
            <div>
                <h5>Fueloo</h5>
            </div>
            <div>
                {
                    props.btn === 'SignUp'
                    ?<Link to='/signup'><button className='navBut'>{props.btn}</button></Link>
                    :<Link to='/login'><button className='navBut'>{props.btn}</button></Link>
                }
                
            </div>

        </div>
    )
}


export default Header;