import { GlobalState, Job, ReducerActions, Transaction } from 'context/types';

export const AppReducer = (
  state: GlobalState,
  action: ReducerActions
): GlobalState => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload as Transaction],
      };
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [...state.jobs, action.payload as Job],
      };
    default:
      return state;
  }
};
