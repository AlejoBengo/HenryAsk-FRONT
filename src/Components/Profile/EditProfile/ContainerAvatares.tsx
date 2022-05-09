import React , {useState} from 'react';
/*-----------IMPORT MUI & CSS-----------*/
import {ImageList, ImageListItem, Button} from '@mui/material'
import { Img } from '../../Style/StyledComponents';

export default function ContainerAvatares(props:any) {

  let {userInfo , setUserInfo , setAvatar , handleClose} = props

  const handleClick = (img:any)=>{
    setUserInfo(userInfo = {...userInfo , profile_picture:""})
    setUserInfo(userInfo = {...userInfo, avatar:img});
    
    setAvatar(img)
  }


  return (
    <ImageList sx={{ width: "34rem", height: "34rem" , overflow:"hidden"}} cols={3} rowHeight={190}>
      {itemData.map((item) => (

        <Button onClick={(e) =>(handleClick(item.img), handleClose())} value={item.img} sx={{padding:"0px" , margin:"0px" , height:"auto"}}>
          <Img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="no funciona la img"
            loading="lazy"
            />
        </Button>
        
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651459729/avatares/unicorn_ntmtyp.png',
    title: 'Breakfast',
  },
  {
    img: "https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pig_tzhrjl.png",
    title: 'Burger',
  },
  {
    img: "https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pigeon_yfv9ka.png",
    title: 'Camera',
  },
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/secret_wqhn3g.png',
    title: 'Coffee',
  },
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/score_hghnpc.png',
    title: 'Hats',
  },
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/sandwich_s6vidk.png',
    title: 'Honey',
  },
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/speedrun_t56kga.png',
    title: 'Basketball',
  },
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/ice_breaker_fyfsw4.png',
    title: 'Fern',
  },
  {
    img: 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/movie_k5yk2g.png',
    title: 'Mushrooms',
  },
];
