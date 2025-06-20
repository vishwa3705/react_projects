import { useState } from "react";
import './Button.css';

const Button = () => {
    const [toggleValue,setToggleValue] = useState("");
    const handleClick = () => {
        setToggleValue((prev) => prev === "on" ? "off" : "on");

    }
  return (
    <div className={`outterBox ${toggleValue==="on"?"c1":"c2"}`} onClick={handleClick}>
        <div className="innerBox">
            <p>{toggleValue}</p>
        </div>
    </div>
  )
}

export default Button;