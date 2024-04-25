import { MouseEvent, useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props)
{
    //const handleClick = (event: MouseEvent) => console.log(event);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return(
         //  fragments - as react cant return multiple elements 
        <>
    <h1>{heading}</h1>
    {/* {items.length === 0 ? <p>No items found!</p> : null} */}
    {items.length === 0 && <p>No items found</p>}
    <ul className="list-group">
        {items.map((item, index) => (
            <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => { setSelectedIndex(index); onSelectItem(item);} }>{item}</li>
        ))}
  </ul>
  </>
  )
}

export default ListGroup;