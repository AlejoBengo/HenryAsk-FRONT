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
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
];
