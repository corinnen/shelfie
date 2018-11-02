import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            name: '',
            price: 0,
            imgurl: ''
        }
    }
    componentDidMount() {
        axios.get('api/inventory').then( response => {
            this.setState({
                products: response.data
            })
        })
    }
    handleChange = (val, key) => {
        let obj ={}
        obj[key] = val
        this.setState(obj)
    }
    addProduct = () => {
        let{name, price, imgurl} = this.state
        axios.post('/api/inventory', {name, price, imgurl}).then(response => {
            this.setState({
                Products: response.data,
                name: '',
                price: '',
                imgurl: ''
            })
        })
    }



    render () {
        let { products, name, price, imgurl } = this.state
        return (
            <div className='product-container'>
                <img></img>
               <div>Image URL:<input value={imgurl}type='text' placeholder='url' onChange={(e) => this.handleChange(e.target.value, 'imgurl')} ></input></div>
               <div>Product Name:<input value={name} type='text' placeholder='name' onChange={(e) => this.handleChange(e.target.value, 'name')}></input></div>
               <div>Price:<input value={price} onChange={(e) => this.handleChange(e.target.value, 'price')}></input></div>
               <div><button onClick={!this.addProduct}>Cancel</button></div>
               <div><button onClick={this.addProduct}>Add to Inventory</button></div>
            </div>
       
            // {
            //     products.map((products.index) => {
            //         return (

                    
            //         )
            //     } )
            // }
        )
    
    }


}