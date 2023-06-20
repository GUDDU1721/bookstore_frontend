import { Alert,IconButton} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addbook.css";
const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
    favourite:0
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post(`https://bookstore-guddu.cyclic.app/books`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
        favouritr:Number(inputs.favourite)
      })
      .then((res) => res.data);
  };
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [messageicon, setmessageicon] = useState("")
  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(inputs, checked);
    // sendRequest().then(() => history("/books"));
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(() => history("/books"));
    if(inputs.name!==""&&inputs.description!==""&&inputs.author!==""&&inputs.image!=="")
    {
      setMessage("Book Added Successfully")
      setmessageicon("success");
      setAlert(true);
    }
    else
    {
      setmessageicon("error");
      setMessage("Failed ! Input all the Parameters")
      setAlert(true);
    }
  };

 
  return (
    <div>
      <br/>
      <div class="login-box">
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="name" required="" value={inputs.name} onChange={handleChange} autoComplete="off"/>
      <label>Name of the Book</label>
    </div>
    <div class="user-box">
      <input type="text" name="author" required="" value={inputs.author} onChange={handleChange} autoComplete="off"/>
      <label>Author</label>
    </div>
    <div class="user-box">
      <input type="text" name="price" required="" value={inputs.price} onChange={handleChange} autoComplete="off"/>
      <label>Price</label>
    </div>
    <div class="user-box">
      <input type="text" name="description" required="" value={inputs.description} onChange={handleChange} autoComplete="off"/>
      <label>Description</label>
    </div>
    
    <div class="user-box">
      <input type="text" name="image" required="" value={inputs.image} onChange={handleChange} autoComplete="off"/>
      <label>Image URL</label>
    </div>
    <a onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Add Book
      
    </a>
  </form>
  
  {(() => {
            if (alert) {
              return (
                  <Alert severity={messageicon}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                         
                          setAlert(false);
                        }}
                      >✖ 
                      </IconButton>
                    }
                  >
                    {message}
                  
                    
                  </Alert>
                
              );
            }

            return null;
          })()}
</div>
<br/>
    </div>
  )
}
    

export default AddBook;