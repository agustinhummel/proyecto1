//este middleware imprime en consola lo que lleva nuestro action
export const logger = (store) => (next) => (action) => {

    next(action);
  }
  
  //este middleware agrega un pokemon favorito nuestro llamado eddie
  //esto sucede entre la req y antes de actualziar el store del reducer
  export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
      ...actionInfo,
      action: { ...actionInfo.action, payload: featured },
    };
    next(updatedActionInfo);
  }