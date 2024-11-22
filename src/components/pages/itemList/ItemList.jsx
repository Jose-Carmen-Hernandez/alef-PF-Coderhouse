import Item from "../../common/item/Item";

const ItemList = ({ items, darkMode }) => {
  return items.map((item) => (
    <Item key={item.id} item={item} darkMode={darkMode} />
  ));
};

export default ItemList;
