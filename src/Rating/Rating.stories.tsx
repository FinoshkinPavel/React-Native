import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RatingControl, RatingValueType} from "./RatingControl";



export default {
    title: 'RatingControl',
    component: RatingControl,

} ;

export const EmptyRating = () => <RatingControl ratingValue={0} setRating={()=>{}}/>;
export const Rating1 = () => <RatingControl ratingValue={1} setRating={()=>{}}/>;
export const Rating2 = () => <RatingControl ratingValue={2} setRating={()=>{}}/>;
export const Rating3 = () => <RatingControl ratingValue={3} setRating={()=>{}}/>;
export const Rating4 = () => <RatingControl ratingValue={4} setRating={()=>{}}/>;
export const Rating5 = () => <RatingControl ratingValue={5} setRating={()=>{}}/>;

export const RatingChangeMode = () => {

    const [rating, setRating] = useState<RatingValueType>(0)
  return(
      <RatingControl ratingValue={rating} setRating={setRating}/>
  )
}



