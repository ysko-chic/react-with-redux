import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {getRandomColor} from '../utils';

// store 안의 state 값을 props 로 연결해 줍니다.
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

/*
    액션 생성자를 사용하여 액션을 생성하고
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props로 연결해 줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
// connect(state, dispatch) 형식으로 props를 넘김
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;