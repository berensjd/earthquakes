import React from "react";
import _ from "lodash";

const TableBody = ({ data, columns }) => (
  <tbody>{renderRows(data, columns)}</tbody>
);

function renderRows(data, columns) {
  return data.map(item => (
    <tr key={item.id}>
      {columns.map(column => (
        <td key={createId(item, column)} id={createId(item, column)}>
          {renderCell(item, column)}
        </td>
      ))}
    </tr>
  ));
}

function renderCell(item, column) {
  if (column.content) return column.content(item);
  return _.get(item, column.path);
}

function createId(item, column) {
  return `${item.id}_${column.path || column.key}`;
}

export default TableBody;
