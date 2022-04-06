import React from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


export default function Products() {
  const [products, setProducts] = React.useState([]);
  const { category } = useParams();
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
  }, []);

  return (
    <div className="list-group container d-flex flex-row">
      {products.map((product) => (
        <div key={product.id} className="card list-group-item" style={{width:300}}>
          <img src={product.image} alt=""  className="h-50 card-img-top" />
          <Link className="card-title" to={`/product/${product.id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
}
