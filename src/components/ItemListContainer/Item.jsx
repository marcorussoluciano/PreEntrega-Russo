const Item = ({ product }) => {
  return (
    <div className="item">
        <img src={product.img} alt="" />
        <p>{product.name}</p>
        <p>precio: ${product.price}</p>
    </div>
  )
}

export default Item