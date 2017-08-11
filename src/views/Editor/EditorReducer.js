const defaultState = {
  canvas: null,
  activeObject: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'CANVAS_UPDATED':
      return action.payload;
    case 'OBJECT_UPDATED':
      return action.payload;
    default :
      return state;
  }
}
