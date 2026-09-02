import Card from "../components/Card";
import Header from "../components/Header"
import { TaskContext } from "../context/TaskContext"
import { useContext } from "react";


function AllTask() {


    const {tasks} = useContext(TaskContext);
    console.log(tasks)
  return (
    <div>
        <Header/>
        <h1 className="p-4 font-bold text-xl">All Tasks</h1>

        <section className='grid grid-cols-3 gap-4 p-4'>
            {
                tasks.map(function(val,idx,arr){
                    return <Card key={idx} data={val}/>
                })
            }
        </section>
    </div>
  )
}

export default AllTask