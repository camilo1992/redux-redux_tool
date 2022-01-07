import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODCUTS = [
  {
    id: "p1",
    price: 6,
    title: "Tomorrow when the war began",
    description: "My first book",
  },
  {
    id: "p2",
    price: 5,
    title: "Memoirs of and addicted brain",
    description: "Last book",
  },
  {
    id: "p3",
    price: 7,
    title: "Sapiens",
    description: "Interesting book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODCUTS.map((product) => (
          <ProductItem
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
