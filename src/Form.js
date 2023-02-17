import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({user, setUser}){
const navigateEle = useNavigate();
const [form, setForm] = useState({
    name: "",
    gender: "",
    email: "", 
    mobile: "",
    country: "",
});


const [flag, setFlag] = useState(false);

const [countries, setCountries] = useState([]);

const countriesData = async () => {
    try {
        const res = await axios.get("https://restcountries.com/v2/all");
        setCountries(res.data);
    }
    catch (error){
        console.log(error.message);
    }
}

useEffect(()=>{
    countriesData();
},[]);


function addData(e){
        if(form.rflag === true){
            setForm({...form, gender: e.target.value});
        }
        setForm({...form, [e.target.name] : e.target.value});
        console.log(form);
}

function handleSubmit(e){
    e.preventDefault();
    if(form.name === "" || form.gender === "" || form.email === "" || !form.mobile === "" || form.country === "(select)" || form.country === ""){
        alert(`All fields are compulsary`);
    }
    else{
        setFlag(true);
        setUser([...user, form]);
     }
}

function newUserBtn(e){
    if(flag === true){
        setFlag(false);
        console.log(user);
        setForm("");
    }
}

function gotoRecords(){
    navigateEle("/records");
    }

    if(flag === false){
        return(  
            <div className="body1">
                <br/>
                <div className="container">
                    <h1 className="text-center mt-4">Enter the User Data</h1>
                    <form className="p-5 mt-3 mx-auto d-block" onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label for="name" className="form-label">Enter your full name: </label>
                        <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={addData} required/>
                        </div>

                        <label for="gender" className="form-label">Select your gender:- </label>
                        <div className="mb-3 gender-div">
                        <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="gender" value="male" onChange={addData}/>
                        <label className="form-check-label" for="radio1">Male</label>
                        </div>

                        <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="gender" value="female" onChange={addData}/>
                        <label className="form-check-label" for="radio2">Female</label>
                        </div>
                        </div>

                        <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} placeholder="name@example.com" onChange={addData} required/>
                        </div> 
                    
                        <div className="mb-3 mt-3">
                        <label for="mobile" className="form-label">Mobile:</label>
                        <input type="tel" className="form-control" id="mobile" name="mobile" value={form.mobile} pattern="[0-9]{10}" onChange={addData} required/>
                        </div>

                        <div className="mb-3">
                        <label for="country" className="form-label">Select the Country:</label> 
                        <select className="form-select" name="country" onChange={addData} required>
                            <option>(select)</option>
                            {
                                countries.map((country, i)=>{
                                    return (
                                    <option key={i} value={country.name}>
                                        {country.name}
                                    </option>
                                    )
                                })
                            }
                        </select> 
                        </div>

                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                    <br/>
                    <button type="button" className="btn btn-dark mx-auto d-block" onClick={gotoRecords}>View All Records</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="body1">
                <br/>
                <div className="container">
                    <h1 className="text-center mt-4">You are successfully registered.</h1>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary m-2" onClick={newUserBtn}>Add New User</button>
                        <button type="button" className="btn btn-dark m-2" onClick={gotoRecords}>View All Records</button>
                    </div>
                </div>
            </div>
            )
    }
}

export default Form;


// mx-auto d-block