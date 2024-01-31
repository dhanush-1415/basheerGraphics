import { Typography , Grid ,Divider} from "@mui/material";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const HeaderL2 = () => {


    return(
        <>
            <Grid container justifyContent='space-evenly' sx={{padding:'30px 0px 20px', width:'45%' , margin:'0 auto'}}>
                <Grid item sx={{textAlign:'center' , color:'#f65d4e'}}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>Home</Typography>
                    <FiberManualRecordIcon fontSize="5px"/>
                </Grid>
                <Grid item sx={{textAlign:'center'}}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>Shop</Typography>
                    {/* <FiberManualRecordIcon fontSize="5px"/> */}
                </Grid>
                <Grid item sx={{textAlign:'center'}}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>Pages</Typography>
                    {/* <FiberManualRecordIcon fontSize="5px"/> */}
                </Grid>
                <Grid item sx={{textAlign:'center'}}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>Blog</Typography>
                    {/* <FiberManualRecordIcon fontSize="5px"/> */}
                </Grid>
                <Grid item sx={{textAlign:'center'}}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>Contact</Typography>
                    {/* <FiberManualRecordIcon fontSize="5px"/> */}
                </Grid>
            </Grid>
            <Divider />
        </>
    );
    }


export default HeaderL2;