import {useState} from "react"
import ActionBtn from "./ActionBtn";
import Counter from "./Counter";


function CounterWrap(){
    const [Count , setCount] = useState(0);
    let increment = () => {
        setCount( Count + 1)
    }

    let decrement = () => {
        if(Count > 0){
            setCount( Count - 1)
        }
    }
    return(
        <div style={{position:"absolute"}} className="w-100 d-flex flex-column align-items-center">
            <div className="w-100 d-flex justify-content-center">
            <Counter cnt = {Count}/>
            </div>
            <div className="w-100 d-flex justify-content-center justify-content-around">
                <ActionBtn method = {increment} name = {"+"} variant={"success"}/>
                <ActionBtn method = {decrement} name = {"-"} variant={"danger"}/>
            </div>
           
        </div>
        
    )
}

export default CounterWrap;