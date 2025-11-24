import Rect, {useState} from 'react';




function Counter (){
    // i want to add + or a - into array
    // ["+", "-"]
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prevArr => [...prevArr, "+"])
    }
    function addMinus(){
        setArr(prevArr => [...prevArr, "-"])
    }


    return (
        <div>
            <button onClick={addPlus}>+</button>
            <button onClick={addMinus}>-</button>
            {arr.toString()}
        </div>
    )

}

export default Counter;





//Counter Exercise 1

// function Counter (){
//     let [count, setCount] = useState(0);

// function increment() {
//         setCount((prevCount) => prevCount + 1);
//         setCount((prevCount) => prevCount + 1);

//     }

// function decrement() {
//         setCount((prevCount) => prevCount - 1);
//         setCount((prevCount) => prevCount - 1);
//     }
    

//     return (
//         <div>
//             <h2>Count</h2>

//             <button onClick={increment}>+</button>
//             <span>{count}</span>
//             <button onClick={decrement}>-</button>
//         </div>
//     )

// }

// export default Counter;