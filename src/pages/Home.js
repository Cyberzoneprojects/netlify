import Header from "./Header";
import '../style.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div >
            <Header btn='Sign In'/>

            <div className="home">
                <h1 className="title">Learn More For <br />Less</h1>
            </div>
            <div className="cont1">
                <div >
                    <h3>Get Started Today</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div>
                    <img src="peace.png" />
                </div>
            </div>
            <div>
                <div className="sign">
                    <h2>Get Started <br/>Today</h2>
                    <Link to='/login'><button>Sign In</button></Link>
                </div>
            </div>
        </div>
    )
}


export default Home;