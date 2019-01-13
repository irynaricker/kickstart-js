
const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);


  return payload
    .then(
      result => {
        return dispatch({
          type,
          payload: result.body ? result.json() : result
        });

      },
      err => {
        throw err;
      }
    );

};