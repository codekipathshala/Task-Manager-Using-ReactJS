import Header from "../components/Header";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  function handleData(data) {
    console.log(data);
    addTask(data);
    navigate("/all-tasks");
  }

  return (
    <div>
      <Header />

      <form
        onSubmit={handleSubmit(handleData)}
        className="max-w-lg mx-auto h-screen flex flex-col gap-2 "
      >
        <Input
          label={"title"}
          type="text"
          placeholder="Task Title"
          register={register}
        />
        <Input
          label={"description"}
          type="text"
          placeholder="Task description"
          register={register}
        />
        <label className="font-semibold capitalize">Task Status</label>
        <select
          {...register("status")}
          className="px-3 py-2 border border-gray-300 rounded my-1"
        >
          <option>Task Status</option>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <label className="font-semibold capitalize">Task Priority</label>
        <select
          {...register("priority")}
          className="px-3 py-2 border border-gray-300 rounded my-1"
        >
          <option>Task Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <Button type="submit" text="Add Task" />
      </form>
    </div>
  );
}

export default AddTask;
