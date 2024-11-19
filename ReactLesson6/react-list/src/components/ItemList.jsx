import React from "react";
import Item from "./Item";
import "../styles/ItemList.css"

const ItemList = ({ items, onRemoveItem }) => {
  if (items.length === 0) {
    return <p className="empty-message">Your Item is empty. Please add One!</p>;
  } else {
    return (
      <ul className="item-list">
        {items.map((item, index) => (
          <Item key={index} item={item} onRemove={() => onRemoveItem(index)} />
        ))}
      </ul>
    );
  }

//  return (
//     <div>
//       {items.length === 0 ? (
//         <p>No items to display.</p>
//       ) : (
//         <ul>
//           {items.map((item, index) => (
//             <Item key={index} item={item} onRemove={() => onRemoveItem(index)} />
//           ))}
//         </ul>
//       )}
//     </div>
//   );

};

export default ItemList;
