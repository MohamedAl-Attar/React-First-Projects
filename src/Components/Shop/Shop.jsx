import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Shop = () => {
    const [products, setProducts] = useState([]);

    const fetchData = () => {
            /* ask about this => return*/ 
            fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }
    useEffect(() => {
        fetchData();
    }, [])

   

    return (
        <div className="container d-flex justify-content-around flex-wrap">
            {products.map((product) => {
                return (
                    
                        <div style={{marginTop:'15px'}} className="row d-flex " key = {product.id}>
                                <div className="d-flex flex-column" >
                                    <Card style={{ width: '23rem' ,height : '30rem', position : 'relative'}}>
                                        <Card.Img style={{height:'50%' ,width : '50%' , marginLeft :'100px' }} variant="top" src={product.image} />
                                        <Card.Body className="d-flex , flex-column justify-content-betwwen" >
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                {product.price}
                                            </Card.Text>
                                            <div style={{position : 'absolute' , bottom : '50px'}}>
                                                <Link className="btn btn-primary btn-sm" style={{textDecoration :'none' , marginLeft : '100px'   }} to={`/shop/${product.id}`}>More Details</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                        </div>
                    
                )
            })}
        </div>
    )
}

export default Shop