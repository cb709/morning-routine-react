const setToLocalStorageByKey = (key, value) => {
    // console.log(key, value)
    let items = {}
    const locatData = JSON.parse(getToLocalStorageByKey('items'))
    if(locatData) {
        items = JSON.parse(JSON.stringify(locatData))
        items[key] = value;
        localStorage.setItem('items', JSON.stringify(items))
    }else {
        items[key] = value;
        localStorage.setItem('items', JSON.stringify(items))
    }
}

const getToLocalStorageByKey = (key) => {
   return localStorage.getItem(key)
}

export {setToLocalStorageByKey, getToLocalStorageByKey}
