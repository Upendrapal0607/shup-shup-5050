import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,

} from '@chakra-ui/react'
import { Patchproductsuccess } from '../Redux/ProductReducer/Action';
import { useDispatch } from 'react-redux';


const EditProduct = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}= useParams();
  const [data,setData]=useState({});
// console.log(data)
  // console.log("id",id);
  useEffect(()=>{
    axios.get(`http://localhost:8080/products/${id}`).then(res=>{
      setData(res.data)
    })
  },[id])

  const handleChange=(e)=>{
    const {value,name}=e.target
    setData(prev=>{
      return {...prev,[name]:name=="price"||name=="rating"?+value:value}
    })
  }

  const handleSubmit=(e)=>{
e.preventDefault();
dispatch(Patchproductsuccess(data,id)).then((res)=>{
  navigate("/")
})
  }

  const {image,name,brand,price,color,rating,gender,description,category}=data
  return (
    <div style={{width:"70%",margin:"auto",display:'flex',alignItems:'center',justifyContent:"center"}}>
    <form  onSubmit={handleSubmit} action="" style={{backgroundColor:" #0adbb8",width:"70%",border:"2px solid #8a9998",padding:"50px",display:"flex",flexDirection:"column",gap:"40px"}}>
     <FormControl isRequired w={"100%"}>
 <FormLabel>Name </FormLabel>
 <Input w={"100%"} value={name}  onChange={handleChange} name="name" type='text' placeholder='Name' />
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Image</FormLabel>
 <Input w={"100%"} value={image} onChange={handleChange} name='image'   type='text' placeholder='Image url' />
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Description</FormLabel>
 <Input w={"100%"} value={description} onChange={handleChange} name='description'   type='text' placeholder='About product' />
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Price</FormLabel>
 <Input w={"100%"} value={price} onChange={handleChange} name='price'   type='number' placeholder='Price' />
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Rating</FormLabel>
 <Input w={"100%"} value={rating} onChange={handleChange} name='rating'   type='number' placeholder='Rating' />
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Category</FormLabel>
 <Select placeholder='Select Category' value={category} name="category" onChange={handleChange}>
 <option value='topwear'>Top Wear</option>
 <option value='bottonwear'>Bottom Wear</option>
 <option value='footwear'>Foot Wear</option>
</Select>
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Brand</FormLabel>
 <Input w={"100%"} value={brand} onChange={handleChange} name='brand'   type='text' placeholder='Brand' />
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Color</FormLabel>
 <Select placeholder='Select Color' value={color} name="color" onChange={handleChange}>
 <option value='black'>Black</option>
 <option value='red'>Red</option>
 <option value='blue'>Blue</option>
 <option value='green'>Green</option>
 <option value='pink'>Pink</option>
 <option value='yellow'>Yellow</option>
 <option value='white'>White</option>
</Select>
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel>Gender</FormLabel>
 <Select placeholder='Select Gender' value={gender} name="gender" onChange={handleChange}>
 <option value='male'>Man</option>
 <option value='female'>Woman</option>
 <option value='kids'>Kids</option>
</Select>
</FormControl>
<FormControl isRequired w={"100%"}>
 <FormLabel></FormLabel>
 <Input w={"100%"} type='submit' bg={"#23d613"} cursor={"pointer"}/>
</FormControl>
     </form>
  
   </div>
 )
  
}

export default EditProduct
