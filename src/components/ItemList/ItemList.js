import Item from "../Item/Item";
const ItemList = ({ productos }) => {

    return (
      <section className="products-list">
        {productos.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </section>
    )
  }
export default ItemList;