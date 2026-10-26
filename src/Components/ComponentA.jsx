import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
export default function ComponentA(){
    return (
        <div>
        <h2>Component A</h2>
        <ComponentB/>
        <ComponentC/>
        </div> 
    );
};