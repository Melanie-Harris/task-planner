import React from "react";
import "./planner.css";

export default function PlannerItem(props) {
const completedStyles={
    color:"grey",
    textDecoration:"line-through"
}

const todoStyles={

}

  return (
    <section className="planner-items">
      <input 
      type="checkbox" 
      checked={props.item.completed} 
      onChange={()=> props.handleIdChange(props.item.id)} 
      
      />
      <p style={props.item.completed ? completedStyles : todoStyles}>{props.item.title}</p>
    </section>
  );
}
