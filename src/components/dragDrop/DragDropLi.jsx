import React, { useState } from "react";

const DragDropLi = () => {
    const [items, setItems] = useState([
        "Bacon Ipsum",
        "Corporate Ipsum",
        "Esperanto Ipsum",
        "Gibberish Ipsum",
        "Space Ipsum",
        "Tokipona Ipsum",
        "Hipster Ipsum",
    ]);

    const [dragIndex, setDragIndex] = useState(null);

    const handleDragStart = (index) => {
        setDragIndex(index);
    }

    const handleDrop = (ind) => {
        const updated = [...items];
        const draggedItem = updated[dragIndex];
        updated.splice(dragIndex, 1);
        updated.splice(ind, 0, draggedItem)
        setItems(updated);
    }

    return <>
        <ul className="dragabble-list">
            {
                items.map((item, ind) => {
                    return <li key={ind}
                        draggable
                        onDragStart={() => handleDragStart(ind)}
                        onDragOver={(e) => { e.preventDefault() }}
                        onDrop={() => handleDrop(ind)}
                        style={{
                            padding: '10px',
                            margin: '6px 0px',
                            backgroundColor: '#eee',
                            borderRadius: '5px',
                            cursor: 'grab',
                            color: '#000',
                            listStyle: "none"
                        }}
                    >
                        {item}
                    </li>
                })
            }
        </ul>
    </>
}

export default DragDropLi;