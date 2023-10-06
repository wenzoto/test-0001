import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import "./styles.css";

const list = ["Ieghjklhjknl", "Irt", "Item 3kljjl", "I"];

const SortableListItem = SortableElement(({ item }) => {
  return <span className="list-group-item"> {item} </span>;
});

const SortableList = SortableContainer(({ items }) => {
  return (
    <div class="list-group-wrapper">
      <div className="list-group">
        {items.map((item, index) => {
          return (
            <SortableListItem axis="xy" key={index} index={index} item={item} />
          );
        })}
      </div>
    </div>
  );
});

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <SortableList axis={"xy"} items={list} />
      </div>
    </div>
  );
}
