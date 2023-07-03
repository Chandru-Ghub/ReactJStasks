import React from 'react'
import './index.css'
import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = () => {
const sty = {backgroundColor:'lightGreen',color:'red'}

  const [card,newPcard] = useState(

    [{ price : 0,
      pricingType:'FREE',
      feature:[
        {feature:'single User',available:true},
        {feature:'5GB Storage',available:true},
        {feature:'Unlimited Public Project',available:true},
        {feature:'Community Access',available:true},
        {feature:'Unlimited Private Project',available:false},
        {feature:'Dedicated Phone Support',available:false},
        {feature:'Free Subdomain',available:false},
        {feature:'Monthly Status Reports',available:false},
        
      ]

       
    },
    { price : 9,
      pricingType:'PAID',
      feature:[
        {feature:'5 Users',available:true},
        {feature:'5GB Storage',available:true},
        {feature:'Unlimited Public Project',available:true},
        {feature:'Community Access',available:true},
        {feature:'Unlimited Private Project',available:true},
        {feature:'Dedicated Phone Support',available:true},
        {feature:'Free Subdomain',available:true},
        {feature:'Monthly Status Reports',available:false},
        
      ]

       
    },
    { price : 49,
      pricingType:'PAID',
      feature:[
        {feature:'Unlimited Users',available:true},
        {feature:'5GB Storage',available:true},
        {feature:'Unlimited Public Project',available:true},
        {feature:'Community Access',available:true},
        {feature:'Unlimited Private Project',available:true},
        {feature:'Dedicated Phone Support',available:true},
        {feature:'Free Subdomain',available:true},
        {feature:'Monthly Status Reports',available:true},
        
      ]

       
    }
    
    ]
    
   )
  return (

   <header>
        {card.map((a,i)=>{
          return(
         
   
    <div key={i}>

    
  
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h4 className="card-title text-muted text-uppercase text-center">{a.pricingType}</h4>
            <h2 className="card-price text-center">${a.price} <span className="period">/month</span></h2>
            <hr/>
            <ul className="fa-ul">
              {a.feature.map((con,index)=>{
                return(
               
                <li key={index} className={con.available?'':'line'}><span className="fa-li" ><i className="fas fa-check"></i></span>{con.feature}</li>
                )
              })}
             
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
{/* </section> */}
</div>
                    
          )
          
        })}
    
   
    </header>
  )
}

export default Cards