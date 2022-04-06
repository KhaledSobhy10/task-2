import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = React.useState({});
  console.log(id);
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
        console.log(json);
      });
  }, []);
  return (
    <div className="card container">
      <h4>{productData.title}</h4>
      <h4>{productData.price}</h4>
      <img src={productData.image} alt=""  className="h-50 card-img-top" />
      <p>{productData.description}</p>
      </div>
  );
}
