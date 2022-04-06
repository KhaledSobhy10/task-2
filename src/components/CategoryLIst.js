import React from "react";
import { Link } from "react-router-dom";

export default function CategoryList() {
  const [categoryList, setCategoryList] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategoryList(json);
      });
  }, []);

  return (
    <div className="list-group container">
      {categoryList.map((category) => (
        <Link key={category} to={`${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
}
