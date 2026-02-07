import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <nav className=" max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
              NotesBoard
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-4" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
