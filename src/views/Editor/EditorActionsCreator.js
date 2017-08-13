export function setActiveCanvas(canvas) {
  return {
    type: 'CANVAS_UPDATED',
    payload: {
      canvas,
    },
  };
}
export function setActiveObject(activeObject) {
  return {
    type: 'OBJECT_UPDATED',
    payload: {
      activeObject,
    },
  };
}
export function changeLanguage(locale) {
  return {
    type: 'LANGUAGE_UPDATED',
    payload: {
      locale,
    },
  };
}
