import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
    
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow" >
    
    </Typography>
  );
};


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    <Stack direction="row">
        {targetMuscleExercises.length ? <HorizontalScrollbar data= {targetMuscleExercises}/>
        :<Loader/>}
    </Stack>
    </ScrollMenu>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
     Exercises that use the same equipment
    </Typography>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    <Stack direction="row" >
        { equipmentExercises.length ? <HorizontalScrollbar data= { equipmentExercises}/>
        :<Loader/>}
    </Stack>
    </ScrollMenu>
  </Box>
);

export default SimilarExercises;