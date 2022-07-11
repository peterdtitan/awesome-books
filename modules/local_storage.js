const storageAvailable = (type) => {
  let storage = window[type];
  let x = '__storage_test__';
  try {
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
};

export default storageAvailable;
