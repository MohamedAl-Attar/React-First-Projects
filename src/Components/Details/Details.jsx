import { useEffect , useState } from "react"
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
const Details = () => {
    const recent = useParams();
    const [currProduct , setCurrProduct] = useState({}); 
    useEffect(()=>{
        fetchSingleProduct();
    })

    const fetchSingleProduct = () => 
            fetch(`https://fakestoreapi.com/products/${recent.id}`)
            .then(res=>res.json())
            .then(json=>setCurrProduct(json))
    return(
        <div style={{marginLeft:'550px'}}>
            <Card style={{ width: '46rem' ,height : '50rem'}}>
                <Card.Img style={{height:'50%' ,width : '50%' , marginLeft : '200px', marginTop:'25px'}}  src={currProduct.image} />
                <Card.Body style={{marginTop: '70px'}}>
                    <Card.Title><h3>{currProduct.title}</h3></Card.Title>
                    <hr/>
                    <Card.Text>
                        <h5>cost: {currProduct.price}$</h5>
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                        {currProduct.description}
                    </Card.Text>
                </Card.Body>
            </Card>
         </div>
    )
}

export default Details