export function setActiveCanvas(canvas) {
  return {
    type: 'CANVAS_UPDATED',
    payload: {
      canvas,
    },
  };
}
