/*
 *
 */

import { bindActionCreators } from 'redux';

const identity = (x) => x;

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

const mapper = (actions) => (dispatch) => bindActionCreators(actions, dispatch)

export {
  mapper
};

export default swop;

