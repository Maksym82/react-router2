import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  console.log(categoryId);

  const currentCategoryArray = products.filter(product => product.categoryId === categoryId)

  console.log(currentCategoryArray);

  return (
    <div>
      {currentCategoryArray.length > 0 ?
        <>
          <h1>Category {categoryId}</h1>
          <ul style={{ display: "flex" }}>
            {currentCategoryArray.map((product) => (
              <li key={product.name}>
                <Link to={`/product/${product.id}`}>
                  {product.name} {product.price}$ <img src={product.img} alt={product.name}
                    style={{ width: "150px" }} />
                </Link>
              </li>
            ))}
          </ul>
        </>
        : <p>Not Found</p>
      }

    </div>
  );
}

export default Category;
