import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { getirData } from "../features/haberSlice";



const News = () => {
  
  
  const {haberler, loading}=useSelector((state)=> state.haberSlice)
const dispatch= useDispatch()

useEffect(() => {
    dispatch(getirData());
  }, []);
  return (
    <>
    {loading ?  (<img src={loadingGif} alt="" height="800px" />)
   :(
 <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((a)=>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        title="haber"
        sx={{height : 140}}
        image={a.urlToImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {a.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {a.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={()=>dispatch(clear(a.url))}>Clear</Button>
        <Button href={a.url} size="small">Detail</Button>
      </CardActions>
    </Card> )}
          
        </Box>
   ) }
        
 
       
  
    </>
  );
};

export default News;
