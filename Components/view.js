import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import './view.css';
function DataBaseView() {
    const[content,addContent]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/gadgets/get').then(function(response)
        {
            addContent(response.data);
        })
    });
    return ( 
        <div className='g1'>
            <center>
        <div className="get">
            <h1> GetConnected</h1>
            <br></br>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>RAM</th>
                    <th>Storage</th>
                    <th>Rating</th>
                    <th>Offer</th>
                </tr>
                {content.map((value)=>(<tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.model}</td>
                    <td>{value.price}</td>
                    <td>{value.ram}</td>
                    <td>{value.storage}</td>
                    <td>{value.rating}</td>
                    <td>{value.offer}</td>
                </tr>))}
            </table>
        </div>
        </center>
        </div>
     );
}

export default DataBaseView;