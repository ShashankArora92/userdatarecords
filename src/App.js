import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import Records from "./Records";

function App(){
    const [user, setUser] = useState([]);     //main states that has records

    return(
        <Routes> 
        <Route path="/" element={<Form user={user} setUser={setUser} />}/>
        <Route path="/records" element={<Records user={user}/>}/>
        </Routes>
    );
}

export default App;