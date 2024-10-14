import "./ItemListContainer.css"
import useProducts from "../../hooks/useProducts"
import ItemList from './ItemList'
import hocFilterProducts from "../hoc/HocFilterProducts"


const ItemListContainer = ({ products }) => {

  return (
    <div>
        <ItemList products={products} />
    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

//export default ItemListContainer