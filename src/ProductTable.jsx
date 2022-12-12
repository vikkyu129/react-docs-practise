import { useState } from "react";
const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, checkBox }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (checkBox && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const SearchBar = ({ filterText, setFilterText, checkBox, setcheckBox }) => {
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Search Products"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checkBox}
              onChange={(e) => setcheckBox(e.target.checked)}
            />{" "}
            Show only Products in Stock
          </label>
        </div>
      </form>
    </div>
  );
};

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [checkBox, setcheckBox] = useState(false);
  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        checkBox={checkBox}
        setcheckBox={setcheckBox}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        checkBox={checkBox}
      />
    </>
  );
}
