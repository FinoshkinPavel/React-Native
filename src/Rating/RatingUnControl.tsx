import React, {useState} from "react";



export const RatingUnControl = () => {

    type ratingType = 0 |1 | 2 | 3 | 4 | 5

    const [rating, setRating] = useState<ratingType> (0 )

    return (
        <div>
            <Star selected={rating > 0} rating={1} setRating={setRating}/>
            <Star selected={rating > 1} rating={2} setRating={setRating}/>
            <Star selected={rating > 2} rating={3} setRating={setRating}/>
            <Star selected={rating > 3} rating={4} setRating={setRating}/>
            <Star selected={rating > 4} rating={5} setRating={setRating}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    rating: 0 |1 | 2 | 3 | 4 | 5
    setRating: (value: 0 |1 | 2 | 3 | 4 | 5)=>void
}

const Star = (props: StarPropsType) => {
    
    const clickChangeRatingHandler = () => {
        props.setRating(props.rating)
    }
    
    return(
        <span onClick={clickChangeRatingHandler}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}