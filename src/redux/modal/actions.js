const actions = {
  OPEN_MODAL_REQUEST: 'OPEN_MODAL_REQUEST',
  OPEN_MODAL_SUCCESS: 'OPEN_MODAL_SUCCESS',
  OPEN_MODAL_FAIL: 'OPEN_MODAL_FAIL',
  CLOSE_MODAL_REQUEST: 'CLOSE_MODAL_REQUEST',
  CLOSE_MODAL_SUCCESS: 'CLOSE_MODAL_SUCCESS',
  CLOSE_MODAL_FAIL: 'CLOSE_MODAL_FAIL',

  openModalRequest: payload => ({
    type: actions.OPEN_MODAL_REQUEST,
    payload,
  }),
  openModalSuccess: payload => ({
    type: actions.OPEN_MODAL_SUCCESS,
    payload,
  }),
  openModalFail: err => ({
    type: actions.OPEN_MODAL_FAIL,
    err,
  }),
  closeModalRequest: payload => ({
    type: actions.CLOSE_MODAL_REQUEST,
    payload,
  }),
  closeModalSuccess: payload => ({
    type: actions.CLOSE_MODAL_SUCCESS,
    payload,
  }),
  closeModalFail: err => ({
    type: actions.CLOSE_MODAL_FAIL,
    err,
  }),
};

export default actions;
