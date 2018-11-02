import React from 'react'

export default function Product(props) {
   let {name, price, imgurl, id} = props
    return (
        <div>
           <h4>{name}</h4>
           <p>{price}</p>
           <img>{imgurl}</img>
        </div>
    )
}