import {Alert,IconButton} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [messageicon, setmessageicon] = useState("")

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://bookstore-guddu.cyclic.app/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`https://bookstore-guddu.cyclic.app/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
      if(inputs.name!=""&&inputs.description!=""&&inputs.author!=""&&inputs.image!="")
    {
      setMessage("Book Updated Successfully")
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
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
          
    <div>
     { inputs  &&  (<div class="login-box">
    <form onSubmit={handleSubmit}>
        <div class="user-box">
        <input type="text" name="name" required="" value={inputs.name} onChange={handleChange}/>
        <label>Name of the Book</label>
        </div>
        <div class="user-box">
        <input type="text" name="author" required="" value={inputs.author} onChange={handleChange}/>
        <label>Author</label>
        </div>
        <div class="user-box">
        <input type="text" name="price" required="" value={inputs.price} onChange={handleChange}/>
        <label>Price</label>
        </div>
        <div class="user-box">
        <input type="text" name="description" required="" value={inputs.description} onChange={handleChange}/>
        <label>Description</label>
        </div>
        
        <div class="user-box">
        <input type="text" name="image" required="" value={inputs.image} onChange={handleChange}/>
        <label>Image URL</label>
        </div>
        
        <a href="#" onClick={handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Update Book
        
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
    </div>)}
    </div>
  )
}

export default BookDetail;