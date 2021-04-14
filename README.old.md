# react-with-redux

1. App에서 Counter를 실행한다. (src/component)
2. redux를 사용하기 위해 actions를 정의한다. (src/actions)
3. 해당 액션들이 어떤 행동을 할지 reducer를 정의한다. (src/reducers)
4. reducer를 사용할 수 있도록 최상위 위치에서 store생성하여 provider로 컴포넌트를 감싼다. (src/index.js)
5. 해당 redux를 사용할 컴포넌트를 connect로 연동한다. (src/containers)