
export const PRODUCE_LOAD = 'PRODUCE_LOAD';
export const PRODUCE_CLEAR = 'PRODUCE_CLEAR';

export function produce(state = [], { type, payload }) {
    console.log(`heeeellllpp ${payload}`)
  switch(type) {
    case PRODUCE_LOAD:
      return payload;
    case PRODUCE_CLEAR:
      return [];
    default:
      return state;
  }
}
