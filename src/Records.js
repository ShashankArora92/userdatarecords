import { useNavigate } from "react-router-dom";
import "./Form.css";

function Records({user}){
    const navEle = useNavigate();
    console.log(user)

    function gotoHome(){
        navEle("/");
    }
    
    return(
        <div className="body2">
            <br/>
            <div className="container  table-responsive">
                <h1 className="text-center mt-3 heading2">Records</h1>
                <table className="table mt-5 table-hover" style={{border: "1px solid black"}}>
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>Country</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((record, i)=>(
                                <tr className="table-info" key={i}>
                                    <td>{record.name}</td>
                                    <td>{record.gender}</td>
                                    <td>{record.mobile}</td>
                                    <td>{record.country}</td>
                                    <td>{record.email}</td>
                                </tr>
                            ))
                    }
                </tbody>
                </table>
                <br/>
                <button type="button" className="btn btn-dark mx-auto d-block" onClick={gotoHome}>Home</button>
            </div>
        </div>
    )
}

export default Records;