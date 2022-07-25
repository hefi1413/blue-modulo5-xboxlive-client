import React, { useEffect, useState } from 'react';
import './App.css';

interface selectedOptions {
    text: string,
    value: string,
};

function ListBox() {
    const [val, setVal] = useState<string[]>([]);

    const handleChange = (e) => {
        let value = Array.from(
                e.target.selectedOptions,
                    (option :selectedOptions) => option.value
        );
        setVal(value);
    };

    function clickButton() {
        console.log('val:', val);
    }

    useEffect( () => {

        //setVal(['3']);

    },[])

    return (
        <>
            <div className="App" style={{display: "flex"}}>
                <select multiple value={val} onChange={handleChange}>
                    <option value={1} selected>First option</option>
                    <option value={2}>Second option</option>
                    <option value={3} selected>Third option</option>
                </select>

                <button onClick={clickButton} >Click</button> 

            </div>
        </>
    )
};

export default ListBox;
