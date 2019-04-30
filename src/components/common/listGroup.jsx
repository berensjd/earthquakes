import React from "react";
const ListGroup = props => (
  <ul className="list-group">{renderListGroup(props)}</ul>
);

function renderListGroup({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) {
  return items.map(item => (
    <li
      onClick={() => onItemSelect(item)}
      key={item[valueProperty]}
      className={
        item === selectedItem ? "list-group-item active" : "list-group-item"
      }
    >
      {item[textProperty]}
    </li>
  ));
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
