import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "./ui/Button";
function Header() {
  let { user, setUser } = useContext(AuthContext);

  function handleClick(){
    setUser(null)
  }

  return (
    <div className="px-5 py-3 flex items-center justify-between">
      <h1 className="font-semibold">TASK MANAGER</h1>

      {user && (
        <nav className="flex gap-4 items-center">
          <Link>Home</Link>
          <Link>All Task</Link>
          <Link>Add Task</Link>
          <Button type="button" text="Logout" onClick={handleClick}/>
        </nav>
      )}

      {!user && (
        <Link
          to="/login"
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
