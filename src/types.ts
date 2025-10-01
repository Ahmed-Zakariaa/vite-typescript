// Example: TypeScript Type Aliases
type Product = {
  id: number;
  name: string;
  price: number;
};

type DiscountedProduct = Product & { discount: number };

export function showTypesDemo(container: HTMLElement) {
  const product: DiscountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1200,
    discount: 10,
  };
  container.innerHTML = `
    <h2>Types Demo</h2>
    <p>ID: ${product.id}</p>
    <p>Name: ${product.name}</p>
    <p>Price: $${product.price}</p>
    <p>Discount: ${product.discount}%</p>
  `;
}
