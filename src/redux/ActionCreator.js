import * as ActionTypes from './ActionTypes';


export const addcomment=(dishId,rating,author,comment)=>({

    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
})