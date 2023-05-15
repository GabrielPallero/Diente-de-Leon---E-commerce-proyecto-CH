import { Link } from "react-router-dom";
const Item = ({item}) => {
    return (
      <article className="card">
        <img className="card__img" src={item.image} alt={item.name} />
        <h2>{item.title}</h2>
        <Link to={`/item/${item.id}`}>detalle</Link>
      </article>
    )
  }
export default Item