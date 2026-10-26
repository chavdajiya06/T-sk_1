import { useSelector } from "react-redux";
export default function ComponentC(){
    const text = useSelector((state)=> state.text.value);
    return (
        <div className="component">
            <h3>Component C</h3>
            <p>Entered Text: </p>
            <div className="output">{text}</div>
        </div>
    )
}