/**
* @file 暫時沒用到，自製 middleware 時參考用
*/
export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload does not have a .then property
    // we dont care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
          console.log("MM: ", response, action)
        // create a new action with the old type, but
        // replace the promise with the reponse data
        const newAction = { ...action, payload: response.data };
        dispatch(newAction);
    }).catch(
        error => {
            console.log("error: ", error.response, error)
        }
    );
  }
}
