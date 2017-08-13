const defaultState = {
  canvas: null,
  activeObject: null,
  locale: 'en',
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'CANVAS_UPDATED':
      return {
        ...state,
        ...action.payload,
      };
    case 'OBJECT_UPDATED':
      return {
        ...state,
        ...action.payload,
      };
    case 'LANGUAGE_UPDATED':
      return {
        ...state,
        ...action.payload,
      };
    default :
      return state;
  }
}
