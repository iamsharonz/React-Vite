import { MouseEvent, useState } from "react";

function ListGroup()
{
    let items = ['Africa', 'Antartica', 'Anasthesia'];
    //const handleClick = (event: MouseEvent) => console.log(event);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return(
         //  fragements - as react cant return multiple elements 
        <>
    <h1>List</h1>
    {/* {items.length === 0 ? <p>No items found!</p> : null} */}
    {items.length === 0 && <p>No items found</p>}
    <ul className="list-group">
        {items.map((item, index) => (
            <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => setSelectedIndex(index)}>{item}</li>
        ))}
  </ul>
  </>
  )
}

export default ListGroup;