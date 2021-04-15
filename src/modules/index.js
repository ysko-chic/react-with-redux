import {createAction, handleActions} from 'redux-actions';
import {Map, List} from 'immutable';

const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

export const create = createAction(CREATE); // parameter is color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // parameter is index
export const decrement = createAction(DECREMENT); // parameter is index
export const setColor = createAction(SET_COLOR); // parameter is {index, color}

const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
});

// 액션 타입에 counter라는 접두사가 있기 때문에 CREATE: 가 아닌 [CREATE]: 로 대괄호를 씌워주어야 한다.
export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0
            })
        ))
    },
    [REMOVE]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.pop());
    },
    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') + 1)
        ))
    },
    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') - 1)
        ))
    },
    [SET_COLOR]: (state, action) => {
        const counters = state.get('counters');
        return state.set('counters', counters.update(
            action.payload.index,
            (counter) => counter.set('color', action.payload.color)
        ))
    },
}, initialState);