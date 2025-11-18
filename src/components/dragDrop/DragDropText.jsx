import React, { useState } from 'react'

export const DragDropText = () => {
    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }
    return (
        <>
            <div>DragDropText</div>
            <div>
                <input
                    onChange={(event) => handleInputChange(event)}
                    type="text"
                    name="message"
                    value={inputVal}
                />
            </div>
        </>
    )
}
