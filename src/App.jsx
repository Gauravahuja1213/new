import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Teacher from "./Teacher";
import Ta from "./Ta";
function App()
{
return(
    <div>
<Router>
    <Routes>
    <Route path="/teacher" element={<Teacher/>} />
    <Route path="/ta" element={<Ta />} />
    </Routes>
</Router>
</div>
);
}


export default App;