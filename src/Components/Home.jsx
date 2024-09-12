import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

       <div className="home">
        <h2>Welcome....!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus numquam tempora vitae iusto, ipsum architecto dicta saepe repudiandae explicabo debitis eligendi dolorum, 
            cum praesentium officiis temporibus atque, ea dolorem fuga.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facilis suscipit quis, repellendus, aliquam expedita id ab saepe placeat doloremque natus accusamus distinctio molestias necessitatibus, possimus sed temporibus voluptas exercitationem.</p>

            <Link to={'/contact'}><button className="home-btn">Lets Start</button></Link>
       </div>
    </>
  )
}

export default Home
