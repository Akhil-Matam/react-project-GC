import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export function ShoppingProducts(){

    const [products, setProducts] = useState([{id:0, title:null, price:0, description:null, category:null, image:null, rating:{rate:0, count:0}}]);

    let params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })

    },[])

    return(
        <div>
            <div className="row">
                <div className="col-8">
                    <h1> {params.category.toUpperCase()} PRODUCTS </h1>
                    <ol>
                        {
                            products.map(product=>
                                <li key={product.id}> <Link to={`details/${product.id}`}> {product.title} </Link> </li>
                            )
                        }
                    </ol>
                    <Link to="/">Back to Home</Link>
                </div>
                <div className="col-4">
                      <Outlet />
                </div>
            </div>
        </div>
    )
}