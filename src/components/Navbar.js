
import { toast } from "react-toastify";
function Navbar(){
    return(
       <div className="w-[100vw] text-center bg-slate-800 text-white py-4 text-3xl font-bold cursor-pointer" onClick={()=>toast.success("Clicked successfullt")}>
        Top Courses
       </div>
    );
};

export default Navbar;