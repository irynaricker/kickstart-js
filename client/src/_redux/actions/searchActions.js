import { PRODUCE_LOAD, PRODUCE_CLEAR } from '../reducers/searchReducers';
import { fetchProduce } from '../../_services/api';

export function loadProduce(type, variety) {
  return {
    type: PRODUCE_LOAD,
    payload: fetchProduce(type, variety)
  };
}

export function clearProduce() {
  return { type: PRODUCE_CLEAR };
}