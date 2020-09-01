function type(val) {
  return Object.prototype.toString.call(val).match(/\s(.*?)\]/)[1].toLowerCase();
}

function getQuery(key, val) {
  var _query;

  switch (type(val)) {
  case "boolean":
  case "number":
  case "string":
    _query = (key + "=" + encodeURIComponent(val));
    break;
  case "regexp":
    _query = (key + "=" + encodeURIComponent(val.source));
    break;
  case "date":
    _query = (key + "=" + val.getTime());
    break;
  case "array":
    _query = [];
    for (var i = 0; i < val.length; ++i) {
      if (/^boolean|number|string|regexp|date$/.test(type(val[i]))) {
        _query.push(getQuery(key, val[i]));
      }
    }
    break;
  case "object":
    _query = (key + "=" + encodeURIComponent(JSON.stringify(val)));
    break;
  default:
    _query = undefined;
  }

  return _query;
}

function objToQuery(data, url) {
  var queries = [];
  if (type(data) === "object") {
    for (var p in data) {
      var query = getQuery(p, data[p]);
      query && (queries = queries.concat(query));
    }
  }
  return url + "?" + queries.join("&");
}

function formatComponentName(vm) {
  try {
    if (vm.$root === vm) return "root";
    var name = vm._isVue
      ? (vm.$options && vm.$options.name) ||
          (vm.$options && vm.$options._componentTag)
      : vm.name;
    return (
      (name ? "component <" + name + ">" : "anonymous component") +
        (vm._isVue && vm.$options && vm.$options.__file
          ? " at " + (vm.$options && vm.$options.__file)
          : "")
    );
  } catch (error) {
    // 无需出错处理
  }
}

export default {
  type: type,
  getQuery: getQuery,
  objToQuery: objToQuery,
  formatComponentName: formatComponentName
};
