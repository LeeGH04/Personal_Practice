import React, { useState } from "react";

const   PLUS = (a,b) => a + b;
const MINUS = (a,b) => a - b;
const  MULRIPLY = (a,b) => a * b;

function Calculator({a, b}) {
    const [operator, setOperator] = useState(() => PLUS);
    return(
        <main>
            <h1>Calculator</h1>
            <button
                onClick={() => setOperator(null)}
            >
                RESET
            </button>
            <button
                onClick={() => setOperator(() => PLUS)}
            >
                PLUS
            </button>
            <button
                onClick={() => setOperator(() => MINUS)}
            >
                MINUS
            </button>
            <button
                onClick={() => setOperator(() => MULRIPLY)}
            >
                MULRIPLY
            </button>
            <p>
                Result of applying operator to {a} and {b}:
                <code>{operator ? operator(a, b) : 0}</code>
            </p>
        </main>
    );
}

function App() {
    return <Calculator a={7} b={4}/>
}

// function Accordion() {
//     const [isExpanded, setIsExpanded] = useState(false);
//     return (
//         <main>
//             <h2 style={{display: "flex", gap: "6px"}}>
//                 Secret password
//                 <button onClick={() => setIsExpanded(false)}>
//                     -
//                 </button>
//                 <button onClick={() => setIsExpanded(true)}>
//                     +
//                 </button>
//             </h2>
//             {isExpanded && (
//                 <p>
//                     password: <code>hunter2</code>
//                 </p>
//             )}
//         </main>
//     );
// }
// function App(){
//     return<Accordion />
// }


// function Counter({start}) {
//     const [counter, setCounter] = useState(null);
//     return (
//         <main>
//             <p>Counter: {counter}</p>
//             <button onClick={() => setCounter("hi there")}>
//                 Increment
//             </button>
//         </main>
//     );
// }
// function App(){
//     return (
//         <>
//             <Counter start={0}/>
//             <Counter start={123}/>
//             <Counter start={-64}/>
//         </>
//     );
// }




/*
        function Counter() {
                               const [counter, setCounter] = useState(0);
                               return (
                               <main>
                               <p>Counter: {counter}</p>
    <button onClick={() => setCounter((value) => value + 1)}>
        Increment
      </button>
    </main>
  );
}
*/

export default App;
