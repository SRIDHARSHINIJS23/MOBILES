import * as React from 'react';
import Box from '@mui/material/Box';
import './mobilesmp.css';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState} from 'react';
import axios from 'axios';

export default function UpdateForm() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [ram, setRam] = useState("");
    const [storage, setStorage] = useState("");
    const [rating, setRating] = useState("");
    const [offer, setOffer] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/gadgets/put",

                { id:id,
                  name:name,
                  model:model,
                  price:price,
                  ram:ram,
                  storage:storage,
                  rating:rating,
                  offer:offer

                

                });
            alert("Updation Successfully Completed");
            setId("");
            setName("");
            setModel("");
            setPrice("");
            setRam("");
            setStorage("");
            setRating("");
            setOffer("");


        }
        catch (err) {
            alert("User Updation Failed");
        }
    }

    return (
        <div className='top'>
            <center>

                <div className='main'>
                    <br></br>
           
           <center ><h2>Update The Details</h2></center>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
        <TextField
        required value={id}
        type="numbet"
          label="id"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(e)=>setId(e.target.value)}
        />
        <br></br>
        <TextField
        required value={name}
        type="text"
          label="name"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setName(event.target.value)}
        />
        <br></br>
        <TextField
        required value={model}
          type="text"
          label="model"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setModel(event.target.value)}
        />
        <br></br>
        <TextField
        required value={price}
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
        }}
        type="number"
          label="price"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setPrice(event.target.value)}
        />
        <br></br>
        <TextField
        required value={ram}
        InputProps={{
          endAdornment: <InputAdornment position="end">GB</InputAdornment>,
        }}
        type="number"
       
          label="ram"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setRam(event.target.value)}
        />
        <br></br>
        <TextField
        required value={storage}
        InputProps={{
          endAdornment: <InputAdornment position="end">GB</InputAdornment>,
        }}
        type="number"
          label="storage"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setStorage(event.target.value)}
        />
        <br></br>
        <TextField
        required value={rating}
        type="number"
          label="rating"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setRating(event.target.value)}
        />
        <br></br>
        <TextField
        value={offer}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        type="number"
          label="offer"
          id="standard-size-small"
          size="small"
          variant="standard"
          onChange={(event)=>setOffer(event.target.value)}
        />
        <br></br>

        <Button variant="contained" onClick={save}>Update</Button>
        </Box>
            
        <br></br>
        
                

        </div>
        </center>
        </div>
    );
}