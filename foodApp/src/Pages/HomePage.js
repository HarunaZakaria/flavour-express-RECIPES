import React from 'react'
import Navbar from '../components/Navbar';
import Foods from '../FoodsData'
import Food from '../components/Food'



function HomePage() {
  return (
    <div>
        <Navbar />
        <div className='row'>

            {Foods.map(food =>{

                return <div className='col-md-4'> 
                    <div>
                        <Food Food={food}/>
                    </div>   
                </div>  
            })}

        </div>
       
    </div>
  )
}

export default HomePage
