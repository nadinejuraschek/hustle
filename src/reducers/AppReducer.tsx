import { GlobalState, Job, ReducerActions, Transaction } from 'context/types';

export const AppReducer = (
  state: GlobalState,
  action: ReducerActions
): GlobalState => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload as Transaction, ...state.transactions],
      };
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [action.payload as Job, ...state.jobs],
      };
    default:
      return state;
  }
};
