import "./AvailableFood.css"
import React from 'react'

function AvailableFood() {
  return (
    <div>
      <div className="container">
        <h1>Available Foods</h1>
        <div className="food-categories">
            <div>
                <div className="food-item">
                    <img src="./images/food1.jpg" alt="food" className="food-item img"/>
                    <h2>Chicken</h2> 
                    <p>price: Ghc30</p>
                    <button>order</button>  
                </div>
                <div className="food-item">
                    <img src="./images/food1.jpg" alt="food" className="food-item img"/>
                    <h2>Chicken</h2> 
                    <p>price: Ghc30</p>
                    <button>order</button>  
                </div>
                <div className="food-item">
                    <img src="./images/food1.jpg" alt="food" className="food-item img"/>
                    <h2>Chicken</h2> 
                    <p>price: Ghc30</p>
                    <button>order</button>  
                </div>
            </div>
            <div>
            <div className="food-item">
                    <img src="./images/food1.jpg" alt="food" className="food-item img"/>
                    <h2>Chicken</h2> 
                    <p>price: Ghc30</p>
                    <button>order</button>  
                </div>
                <div className="food-item">
                    <img src="./images/food1.jpg" alt="food" className="food-item img"/>
                    <h2>Chicken</h2> 
                    <p>price: Ghc30</p>
                    <button>order</button>  
                </div>
                <div className="food-item">
                    <img src="./images/food1.jpg" alt="food" className="food-item img"/>
                    <h2>Chicken</h2> 
                    <p>price: Ghc30</p>
                    <button>order</button>  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableFood
