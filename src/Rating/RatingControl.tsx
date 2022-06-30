import React from "react";


export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    ratingValue: RatingValueType
    setRating: (value: RatingValueType)=>void
}


export const RatingControl = (props: RatingPropsType) => {
    return (
        <div>
            <Star value={1} ratingValue={props.ratingValue} setRating={props.setRating}/>
            <Star value={2} ratingValue={props.ratingValue} setRating={props.setRating}/>
            <Star value={3} ratingValue={props.ratingValue} setRating={props.setRating}/>
            <Star value={4} ratingValue={props.ratingValue} setRating={props.setRating}/>
            <Star value={5} ratingValue={props.ratingValue} setRating={props.setRating}/>
        </div>
    )
}

type StarTypeProps = {
    value: RatingValueType
    ratingValue: RatingValueType
    setRating: (value: RatingValueType)=>void
}

const Star = (props: StarTypeProps) => {
    return (
        <span onClick={()=>{props.setRating(props.value)}}>{props.ratingValue >= props.value? <b>star </b>: 'star '}</span>
    )
}