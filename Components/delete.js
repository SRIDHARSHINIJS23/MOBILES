import React from 'react';
import axios from 'axios';
import './delete.css';
import { useState} from 'react';


function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/gadgets/delete/' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("Deleted successfully");
    }
    return (
        <div className="header">
            <br></br>
         <center>
            <div className='body'>
            <h2>Delete The Details</h2>
            <br></br>
            <div>

                <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
                <br></br>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
            </div>
                </center>
          
            <h2>
                {error}
            </h2>
            </div>
    );
}

export default Deleteform;