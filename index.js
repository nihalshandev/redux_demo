

// defining actions
const BUY_CAKE = "BUY_CAKE";
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

//initial State
const initialState = {
  numOfCakes: 10,
};

// (preveState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

