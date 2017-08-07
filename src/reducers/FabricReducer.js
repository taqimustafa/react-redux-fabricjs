const defaultState = {
  canvas: null,
  activeObject: null
}

export default function (state = defaultState, action) {
    console.log('reducer called', action);
    switch (action.type) {
        case 'CANVAS_UPDATED':
            return action.payload;
            break;
    }
    return state;
}
