const swop = (
  reducers,
  initialState,
  identityReducer
) => (
  state = (initialState || identity)(),
  { type, payload }
) => (
  reducers[type] || identityReducer || identity
)(state, { type, payload });

export {
  swop
};

