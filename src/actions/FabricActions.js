export const setActiveCanvas = (canvas) => {
    console.log(canvas);
    return {
        type: 'CANVAS_UPDATED',
        payload: {
          canvas: canvas
        }
    }
};
