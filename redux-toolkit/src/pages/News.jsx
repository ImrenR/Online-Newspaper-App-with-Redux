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


const News = () => {
  

  return (
    <>
    
        <img src={loadingGif} alt="" height="800px" />
 
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          
        </Box>
  
    </>
  );
};

export default News;
