import React from "react"
import PlannerData from "./PlannerData"
import PlannerItem from "./PlannerItem"
import TellTime from "./TellTime"

export default class Planner extends React.Component{
    constructor(){
        super()
        this.state = {
            task: PlannerData,
            input: "",
            darkMode: true,

        }
        this.handleIdChange = this.handleIdChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
        this.clearAllTasks = this.clearAllTasks.bind(this)
        this.darkModeClick = this.darkModeClick.bind(this)
    }
// changes state of check box and id, see plannerItem component
    handleIdChange(id){
        this.setState((prevState)=>{
            const updatedTask = prevState.task.map((item)=>{
                // returning a brand new object that will replace the todo in the new array (new object, new todo in new array) 
                if(item.id === id){
                // if id of current task is the id we are requesting from prop's id above then return
                    return{
                        ...item,
                         // spread operator gives all properties from the todo array
                        completed: !item.completed
                        // manually override the completed property so now it is the opposite of item.completed (meaning are completed)
                    }
                } return item
            })
            return{
                 // if the if statement is false (meaning item wasn't completed) it will only return this item, which is the updatedState not reversed
                task: updatedTask
            }
        })
    }

    handleInputChange(e){
        this.setState({input: e.target.value})
    }


    addTask(e){
        e.preventDefault()
        this.setState({
            task:[
                ...this.state.task,
                {
                    id: Date.now(),
                    title: this.state.input,
                    completed: false
                }
            ]
        })
    }

    clearCompleted(){
        this.setState((prevState)=>{
            return{
                // only return whats not completed
                task: prevState.task.filter(item=> !item.completed)
            }
        })
    }

    clearAllTasks(){
        this.setState((prevState)=>{
            return{
                task: []
            }
        })
    }

 // ===========================Dark Mode
    darkModeClick(){
        this.setState((prevState)=>{
            return{
                darkMode: !prevState.darkMode
                // onclick darkMode state changes from previous state
            }
        })
    }
    // =========================== End Dark Mode

    render(){
        // console.log(this.state.task)
        const exampleData = this.state.task.map((item)=>
        <PlannerItem
            item={item}
            key={item.id}
            handleIdChange={this.handleIdChange}
        />
        )
        // console.log(exampleData)
        console.log(this.state.input)

         // ===========================Dark Mode
            const darkMode={
                backgroundColor:"black",
                color: "white",
                opacity:".8"
            }

            const lightMode={
                backgroundColor:"#f7f7f7",
                color: "black",
                opacity:".8"
            }

            let display = this.state.darkMode ? " " : null
            // if this.state.darkMode is equal to true, return " " else return null (nothing)
            let buttonText= this.state.darkMode ? "Turn On Light Mode" : "Turn On Dark Mode"
            // if this.state.darkMode is equal to true, return " Turn On Light Mode" else return "Turn On Dark Mode"
    
        // ===========================End Dark Mode
        return(
            <section style={{textAlign:"center"}}>
                <section>
                    
                </section>
                <section className="planner-bod container" style={display === " " ? darkMode : lightMode}>
                    <TellTime/>
                    {/* if display is equal to " " then return variable darkMode else return lightMode */}
                    <button
                    className="button-style"
                        type="button"
                        onClick={this.darkModeClick}
                        >
                        {buttonText}
                    </button>
                    {exampleData}
                    <section >
                        <section style={{marginTop:"30px", marginBottom:"5px"}}>
                            <input 
                            style={{padding:"4px"}}
                            type="text"
                            placeholder="Type Task Here"
                            onChange={this.handleInputChange}
                            />
                            <button 
                            className="button-style2"
                            type="button"
                            onClick={this.addTask}
                            >Add Task
                            </button>
                        </section>
                    
                        <section>
                            <button
                            className="button-style2"
                            type="button"
                            onClick={this.clearCompleted}
                            >Clear <em>Completed</em> Task</button>
                            <button
                            className="button-style2"
                            style={{backgroundColor:"red"}}
                            type="button"
                            onClick={this.clearAllTasks}
                            >Clear <em>All</em> Task</button>
                        </section>
                    </section>

                </section>
                <center class="call-to-action">Like this demo? See more at <a href="https://www.melanieharris.dev/portfolio.html">MelanieHarris.dev</a></center>
            </section>
        )
    }
}