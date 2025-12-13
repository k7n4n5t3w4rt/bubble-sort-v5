
export default (
  state ,
  action ,
)  => {
  switch (action.type) {
    case "CHANGE_PARAM":
      return {
        ...state,
        [action.payload.param]: action.payload.value,
      };

    default:
      return { ...state };
  }
};
