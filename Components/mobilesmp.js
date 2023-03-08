import React,{useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';
import './mobilesmp.css';
import TextField from '@mui/material/TextField';
function Mobiles() {
  const[name,setName]=useState("");
  const[model,setModel]=useState("");
  const[price,setPrice]=useState("");
  const[ram,setRam]=useState("");
  const[storage,setStorage]=useState("");
  const[rating,setRating]=useState("");
  const[offer,setOffer]=useState("");
  const[open,setOpen]=useState();
  const[loading,setLoading]=useState(false);

  function handleClose(){
    setOpen(false);
  }
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const data={
        name: name,
        model: model,
        price: Number(price),
        ram: Number(ram),
        storage: Number(storage),
        rating: Number(rating),
        offer: Number(offer)

      };
      const res=await axios.post("http://localhost:8080/gadgets",data);
      await console.log(res);
      await setOpen(true);
    }
    catch(e){
      console.log(e.message);
    }
    setLoading(false);
    alert("Submitted Successfully");
  }
    return ( 
        <>
        <div className='top'>
        <center>
        <div className='main'>
          <br></br>
        <h1><center>GetConnected</center></h1>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
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

        <Button variant="contained" onClick={handleSubmit}>create</Button>
        </Box>

        </div>
        </center>
        </div>

        
        </>
     );
}

export default Mobiles;