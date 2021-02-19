import React from 'react';
import { Table } from 'react-bootstrap';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            products: []
        } 
    }
    componentDidMount(){
        const apiUrl= 'http://localhost/codeigniter/index.php/ReactApi/products';
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    });
                },
                error => {
                    this.setState({error});
                }
            )
    }
    render(){
        const {error,products} = this.state;
        if(error){
            return(
                <div className="error-msg">
                    Error: {error.message}
                </div>
            )
        }else{
            return(
                <div className="product-section">
                    <h2>Product List</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Product Name</th>
                                <th>SKU</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} >
                                    <td>{product.id}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                        
                        </tbody>                        
                    </Table>
                </div>
            )
        }
    }
    

}
export default ProductList;