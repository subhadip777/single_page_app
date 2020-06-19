//this component helps to configure all the actions to configure `store` in the scencs of controller..
import 'redux';
import { createStore,combineReducers } from 'redux'; //createstore holds 3 params `dispatch` `getstate` and `subscribe`
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore=()=>{
    const store= createStore(
        combineReducers({
            dishes:Dishes,
            Comments:Comments,
            Leaders:Leaders,
            Promotions:Promotions,
        })
    );
    return store;
}
