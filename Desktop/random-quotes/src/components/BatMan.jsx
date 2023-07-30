import { useState } from "react"

const quotes=["sssssss",
    "fffffff",
    "ggggggg",
    "yyyyyyy",
    "uuuuuuu",
    "sssssss",
    "fffffff",
    "ggggggg",
    "yyyyyyy",
    "uuuuuuu"]


const BatMan = () => {
    const [quot,setQuot]=useState("I'M BATMAN");
    
    return (
        <div className="main">
            <h1>{quot}</h1>
            <button className="btn" onClick={()=>setQuot(quotes[Math.floor(Math.random()*quotes.length-1)])}>Generate New Quote</button>
        </div>
    )
}
export default BatMan