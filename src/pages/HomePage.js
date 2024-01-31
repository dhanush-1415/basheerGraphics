import React , {useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid , Typography } from '@mui/material';
import Category from '../components/homepage/category';
import HomeSlider from '../components/homepage/slider';
import ProductList from '../components/homepage/productlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {




  return (
    <>
    <ToastContainer />
    <HomeSlider />
    {/* <Grid container direction='row' justifyContent="space-between" sx={{paddingTop:'50px' , width:'95%' , margin:'0 auto'}}>
      <Grid item md={2.7}>
        <Category/>
      </Grid>
      <Grid item md={9.2}>
          <Grid container  spacing={1.5}>
              < ProductList />
          </Grid>
      </Grid>
    </Grid> */}
    </>
  );
}

export default Home;
