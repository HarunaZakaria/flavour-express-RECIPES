import React from 'react'
import "./Welcome.css"

function Welcome() {
  return (
    <div>
       <div className="home">
                <div>
                    <h1>Welcome to Flavour Express</h1>
                </div>
                <div className="image-para">
                    <div>
                    <img src="./images/food.png" alt="Image" className="food-image"/>
                    </div>
                    <div>
                        <p>The best spot to purchase any local food that your body requires to remain healthy is right here.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Welcome
