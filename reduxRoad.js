const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};
const wagonState = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + 15,
        distance : state.distance,
        days: state.days + 1
      };
    }
    case 'travel': {
      if (state.supplies - (20 * action.payload) > 0 ){
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        };
      } else {
        return state;
      };
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      };
    }

    default: {
      return state;
    }
  }
};
let wagon = wagonState(undefined, {});
console.log(wagon);
wagon = wagonState(wagon, {type: 'travel', payload: 1});
console.log (wagon);
wagon = wagonState(wagon, {type: 'gather', payload:1});
console.log(wagon);
wagon = wagonState(wagon, {type: 'tippedWagon', payload: 1});
console.log(wagon);
wagon = wagonState(wagon, {type: 'travel', payload: 3});
console.log (wagon);
wagon = wagonState(wagon, {type: 'travel', payload: 1});
console.log (wagon);
