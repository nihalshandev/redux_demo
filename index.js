const  redux = require('redux')
const createStore = redux.createStore

// defining actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAME = 'BUY_ICECREAME';
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};
const buyIceCream = ()=> {
  return {
    type: BUY_ICECREAME
  }
}

//initial State
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreames: 20
// };

const initialCakeState = {
  numOfCakes: 10
}

const initialICeCreamState = {
  numOfIcecreames: 20
}

// (preveState, action) => newState
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//       case BUY_ICECREAME: return {
//         ...state,
//         numOfIcecreames: state.numOfIcecreames - 1
//       } 
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action)=> {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
  }
}

const iceCreamReducer = (state = initialICeCreamState, action)=> {
  switch(action.type){
    case BUY_ICECREAME: return {
      numOfIcecreames: state.numOfIcecreames - 1
    }
  }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
