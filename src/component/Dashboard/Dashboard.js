import React, {Component } from 'react'
import Product from '../Product/Product';
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super()
        this.state= {
            product: {},
            edit: false,
            nameInput: '',
            priceInput: 0,
            imgInput: ''
        }
    }
    componentDidMount() {
        let {id} = this.props.match.params
        axios.get(`/api/inventory/${id}`).then (response => {
            let product = response.data[0]
            this.setState({
                product,
                nameInput: product.name,
                priceInput: product.price,
                imgInput: product.imgurl
            })
        })
    }
    changeEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    handleNameChange = (e) => {
        this.setState({
            nameInput: e.target.value
        })
    }
    handlePriceChange = (e) => {
        this.setState({
            priceInput: e.target.value
        })
    }
    handleImgChange = (e) => {
        this.setState({
            imgInput: e.target.value
        })
    }
    saveChanges = ()=> {
        let {nameInput, priceInput, imgInput} = this.state
        let {id} = this.state.product
        let newProduct = {
            name: nameInput,
            price: priceInput,
            imgurl: imgInput
        }
        axios.put(`/api/inventory/${id}`, newProduct).then (response => {
            let product = response.data[0]
            this.setState({
                edit: false,
                product
            })
        })
    }

    delete = () => {
        let {id} = this.state.product
        axios.delete(`/api/inventory/${id}`).then (response => {
            this.props.history.push ('/')
        })
    }

    render () {
        let {edit, nameInput, priceInput, imgInput} = this.state
        let {name, price, imgurl} = this.state.product
        return (
           
            <div>
                  <Product />
                {
                    edit
                    ?
                    <div> 
                        <span>Name:</span><input value={nameInput} onChange={this.handleNameChange}></input>
                        <span>Price:</span><input value={priceInput} onChange={this.handlePriceChange}></input>
                        <span>ImageURL:</span><input value={imgInput} onChange={this.handleImgChange}></input>
                        <button onClick={this.saveChanges}>Save</button>
                    </div>
                    :
                    <div>
                        <h4>{name}</h4>
                        <p>{price}</p>
                        <p>{imgurl}</p>
                        <div>
                            <button onClick={this.changeEdit}>Edit</button>
                            <button onClick={this.delete}>Delete</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}