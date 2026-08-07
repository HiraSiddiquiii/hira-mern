import { useNavigate } from "react-router-dom";
import StudentManagement from "../StudentManagement";

function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (

        <>

            <div
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginBottom:"20px"
                }}
            >

                <h2>Dashboard</h2>

                <button onClick={logout}>

                    Logout

                </button>

            </div>

            <StudentManagement />

        </>

    );

}

export default Dashboard;