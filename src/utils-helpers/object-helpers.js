// can mutable object1 Object.assign ib better
const deepMerge = (obj1, obj2) => {
  if(typeof obj1 === 'object') {
    for (const i of Object.keys(obj1)) {
      if(typeof obj2[i] !== 'undefined') {
        obj1[i] = deepMerge(obj1[i], obj2[i]);
      }
    }

    for (const i of Object.keys(obj2)) {
      if(typeof obj1[i] === 'undefined') {
        obj1[i] = obj2[i];
      }
    }

    return obj1;
  } else {
    return obj2;
  }
};

export default deepMerge;

//полная копия без последующей мутации
//const newObj = {...cloneDeep(object1), ...cloneDeep(object2) }
function cloneDeep(object) {
  try {
    return JSON.parse(JSON.stringify(object));
  }
  catch (e) {
    console.error(e);
    return undefined;
  }
}

const objectHelper = {
  cloneDeep
};

export default objectHelper;

class ObjectHelper {
  constructor (obj) {
    this.obj = obj;
  }

  filter(fields) {
    if(!fields || typeof fields !== 'object') {
      return obj;
    }
    if(Object.prototype.toString.call(fields) === '[object Array]') {
      return this._filterByArray(fields);
    }
    return this._filterByObj(fields);
  }

  _filterByArray(fields) {
    const ret = {};
    for (let i=0; i<fields.length; i++) {
      if (this.obj[fields[i]]) {
        ret[fields[i]] = this.obj[fields[i]];
      }
    }
    return ret;
  }

  _filterByObj(fields) {
    const ret = {};
    for (const i in fields) {
      if (this.obj[fields[i]]) {
        ret[fields[i]] = this.obj[fields[i]];
      }
    }
    return ret;
  }
}

export default ObjectHelper;