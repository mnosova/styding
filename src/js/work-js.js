/* axios v0.19.0 | (c) 2019 by Matt Zabriskie */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        e.exports = n(1)
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            var t = new i(e), n = s(i.prototype.request, t);
            return o.extend(n, i.prototype, t), o.extend(n, t), n
        }

        var o = n(2), s = n(3), i = n(5), a = n(22), u = n(11), c = r(u);
        c.Axios = i, c.create = function (e) {
            return r(a(c.defaults, e))
        }, c.Cancel = n(23), c.CancelToken = n(24), c.isCancel = n(10), c.all = function (e) {
            return Promise.all(e)
        }, c.spread = n(25), e.exports = c, e.exports.default = c
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return "[object Array]" === j.call(e)
        }

        function o(e) {
            return "[object ArrayBuffer]" === j.call(e)
        }

        function s(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }

        function i(e) {
            var t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }

        function a(e) {
            return "string" == typeof e
        }

        function u(e) {
            return "number" == typeof e
        }

        function c(e) {
            return "undefined" == typeof e
        }

        function f(e) {
            return null !== e && "object" == typeof e
        }

        function p(e) {
            return "[object Date]" === j.call(e)
        }

        function d(e) {
            return "[object File]" === j.call(e)
        }

        function l(e) {
            return "[object Blob]" === j.call(e)
        }

        function h(e) {
            return "[object Function]" === j.call(e)
        }

        function m(e) {
            return f(e) && h(e.pipe)
        }

        function y(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }

        function g(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function x() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function v(e, t) {
            if (null !== e && "undefined" != typeof e) if ("object" != typeof e && (e = [e]), r(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
        }

        function w() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = w(t[n], e) : t[n] = e
            }

            for (var t = {}, n = 0, r = arguments.length; n < r; n++) v(arguments[n], e);
            return t
        }

        function b() {
            function e(e, n) {
                "object" == typeof t[n] && "object" == typeof e ? t[n] = b(t[n], e) : "object" == typeof e ? t[n] = b({}, e) : t[n] = e
            }

            for (var t = {}, n = 0, r = arguments.length; n < r; n++) v(arguments[n], e);
            return t
        }

        function E(e, t, n) {
            return v(t, function (t, r) {
                n && "function" == typeof t ? e[r] = S(t, n) : e[r] = t
            }), e
        }

        var S = n(3), R = n(4), j = Object.prototype.toString;
        e.exports = {
            isArray: r,
            isArrayBuffer: o,
            isBuffer: R,
            isFormData: s,
            isArrayBufferView: i,
            isString: a,
            isNumber: u,
            isObject: f,
            isUndefined: c,
            isDate: p,
            isFile: d,
            isBlob: l,
            isFunction: h,
            isStream: m,
            isURLSearchParams: y,
            isStandardBrowserEnv: x,
            forEach: v,
            merge: w,
            deepMerge: b,
            extend: E,
            trim: g
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }, function (e, t) {/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
        e.exports = function (e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            this.defaults = e, this.interceptors = {request: new i, response: new i}
        }

        var o = n(2), s = n(6), i = n(7), a = n(8), u = n(22);
        r.prototype.request = function (e) {
            "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = u(this.defaults, e), e.method = e.method ? e.method.toLowerCase() : "get";
            var t = [a, void 0], n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, r.prototype.getUri = function (e) {
            return e = u(this.defaults, e), s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, o.forEach(["delete", "get", "head", "options"], function (e) {
            r.prototype[e] = function (t, n) {
                return this.request(o.merge(n || {}, {method: e, url: t}))
            }
        }), o.forEach(["post", "put", "patch"], function (e) {
            r.prototype[e] = function (t, n, r) {
                return this.request(o.merge(r || {}, {method: e, url: t, data: n}))
            }
        }), e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        var o = n(2);
        e.exports = function (e, t, n) {
            if (!t) return e;
            var s;
            if (n) s = n(t); else if (o.isURLSearchParams(t)) s = t.toString(); else {
                var i = [];
                o.forEach(t, function (e, t) {
                    null !== e && "undefined" != typeof e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function (e) {
                        o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), i.push(r(t) + "=" + r(e))
                    }))
                }), s = i.join("&")
            }
            if (s) {
                var a = e.indexOf("#");
                a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
            }
            return e
        }
    }, function (e, t, n) {
        "use strict";

        function r() {
            this.handlers = []
        }

        var o = n(2);
        r.prototype.use = function (e, t) {
            return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
        }, r.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, r.prototype.forEach = function (e) {
            o.forEach(this.handlers, function (t) {
                null !== t && e(t)
            })
        }, e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }

        var o = n(2), s = n(9), i = n(10), a = n(11), u = n(20), c = n(21);
        e.exports = function (e) {
            r(e), e.baseURL && !u(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = s(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                delete e.headers[t]
            });
            var t = e.adapter || a.adapter;
            return t(e).then(function (t) {
                return r(e), t.data = s(t.data, t.headers, e.transformResponse), t
            }, function (t) {
                return i(t) || (r(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function (e, t, n) {
            return r.forEach(n, function (n) {
                e = n(e, t)
            }), e
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            !s.isUndefined(e) && s.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        function o() {
            var e;
            return "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) ? e = n(13) : "undefined" != typeof XMLHttpRequest && (e = n(13)), e
        }

        var s = n(2), i = n(12), a = {"Content-Type": "application/x-www-form-urlencoded"}, u = {
            adapter: o(),
            transformRequest: [function (e, t) {
                return i(t, "Accept"), i(t, "Content-Type"), s.isFormData(e) || s.isArrayBuffer(e) || s.isBuffer(e) || s.isStream(e) || s.isFile(e) || s.isBlob(e) ? e : s.isArrayBufferView(e) ? e.buffer : s.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : s.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300
            }
        };
        u.headers = {common: {Accept: "application/json, text/plain, */*"}}, s.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {}
        }), s.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = s.merge(a)
        }), e.exports = u
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function (e, t) {
            r.forEach(e, function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2), o = n(14), s = n(6), i = n(17), a = n(18), u = n(15);
        e.exports = function (e) {
            return new Promise(function (t, c) {
                var f = e.data, p = e.headers;
                r.isFormData(f) && delete p["Content-Type"];
                var d = new XMLHttpRequest;
                if (e.auth) {
                    var l = e.auth.username || "", h = e.auth.password || "";
                    p.Authorization = "Basic " + btoa(l + ":" + h)
                }
                if (d.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function () {
                        if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                            var n = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
                                r = e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                                s = {
                                    data: r,
                                    status: d.status,
                                    statusText: d.statusText,
                                    headers: n,
                                    config: e,
                                    request: d
                                };
                            o(t, c, s), d = null
                        }
                    }, d.onabort = function () {
                        d && (c(u("Request aborted", e, "ECONNABORTED", d)), d = null)
                    }, d.onerror = function () {
                        c(u("Network Error", e, null, d)), d = null
                    }, d.ontimeout = function () {
                        c(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
                    }, r.isStandardBrowserEnv()) {
                    var m = n(19),
                        y = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                    y && (p[e.xsrfHeaderName] = y)
                }
                if ("setRequestHeader" in d && r.forEach(p, function (e, t) {
                        "undefined" == typeof f && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e)
                    }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
                    d.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                    d && (d.abort(), c(e), d = null)
                }), void 0 === f && (f = null), d.send(f)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(16);
        e.exports = function (e, t, n, o, s) {
            var i = new Error(e);
            return r(i, t, n, o, s)
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function (e) {
            var t, n, s, i = {};
            return e ? (r.forEach(e.split("\n"), function (e) {
                if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
                    if (i[t] && o.indexOf(t) >= 0) return;
                    "set-cookie" === t ? i[t] = (i[t] ? i[t] : []).concat([n]) : i[t] = i[t] ? i[t] + ", " + n : n
                }
            }), i) : i
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function () {
            function e(e) {
                var t = e;
                return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                }
            }

            var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
            return t = e(window.location.href), function (n) {
                var o = r.isString(n) ? e(n) : n;
                return o.protocol === t.protocol && o.host === t.host
            }
        }() : function () {
            return function () {
                return !0
            }
        }()
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function () {
            return {
                write: function (e, t, n, o, s, i) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ")
                }, read: function (e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                }, remove: function (e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            }
        }() : function () {
            return {
                write: function () {
                }, read: function () {
                    return null
                }, remove: function () {
                }
            }
        }()
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function (e, t) {
            t = t || {};
            var n = {};
            return r.forEach(["url", "method", "params", "data"], function (e) {
                "undefined" != typeof t[e] && (n[e] = t[e])
            }), r.forEach(["headers", "auth", "proxy"], function (o) {
                r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : "undefined" != typeof t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : "undefined" != typeof e[o] && (n[o] = e[o])
            }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (r) {
                "undefined" != typeof t[r] ? n[r] = t[r] : "undefined" != typeof e[r] && (n[r] = e[r])
            }), n
        }
    }, function (e, t) {
        "use strict";

        function n(e) {
            this.message = e
        }

        n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e
            });
            var n = this;
            e(function (e) {
                n.reason || (n.reason = new o(e), t(n.reason))
            })
        }

        var o = n(23);
        r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, r.source = function () {
            var e, t = new r(function (t) {
                e = t
            });
            return {token: t, cancel: e}
        }, e.exports = r
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
    }])
});
//# sourceMappingURL=axios.min.map

//ilya

let a = [10, 20, 15, 1, 2, 3, 4, 5, 6, 7];
let b = 589;


//нам небходимо каждое число сложить другим
// то есть для каждого числа должен сработать перебор
// поэтому функция имеет вдва цикла for
//первый цикл берет каждое число по очереди в отдельности
// и для каждого срабатывает второй цикл складывая себя с соседним
// с соседним потому что с предыдущим сумма была получена в цикле ранее
// таким образом для числа 10 будет найденно 9 сумм
// а для числа 6 только одна сумма (6+7) т.к. (5+6) уже была найдена для цифры 5
// для числа 7 вообще нет суммы

function checkNumber(number, arr) {
    let sum;
    let result = false;
    for (let i = 0; i < arr.length - i; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            sum = arr[i] + arr[j + 1];
            result = sum === number;
            if (result) return result;
        }
    }
    return result;
}

let c = 'tatata';
let d = [10, 3, 89, {"key1": "1", "key2": "2", "key3": "3"}, true, "tatata", [7, 8, 9]];


//1. сравнивая между собой значения, которые могут быть различными по типу
//2. объекты никогда не равны
// поэтому каждый элемент массива приводится к строке json(обычную строку тоже нельзя сравнить)
function checkParam(param, arr) {
    let result = false;

    for (let i = 0; i < arr.length; i++) {
        result = JSON.stringify(arr[i]) === JSON.stringify(param);
        if (result) return result;
    }
    return result;
}

//простой fetch get запрос с обработкой ошибки
function getUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
        .then((response) => {
            if (response.status !== 200) {
                console.log(response.status);
                return;
            }
            return user = response.json()
        }).then((user) => {
        console.log(`Меня зовут ${user.name}`);
        console.log(`Я живу на ${user.address.street}`);

    }).catch(error => console.log(error));

}

let payload = {
    method: 'post',
    id: 9,
    body: '?id=8'

};

//post запрос со сформированными данными в массиве
function getUser2() {
    fetch('http://httpbin.org/post', payload)
        .then(response => {
            if (response.status !== 200) {
                console.log(response.status);
                return;
            }
            return response = response.json();
        }).then(response => {
        console.log(response);

    }).catch(error => console.log(error));

}

options = {
    method: 'get'
};

//простой axios get запрос с обработкой ошибки
function getAxios() {
    axios(`https://jsonplaceholder.typicode.com/users/${payload.id}`, options)
        .then(response => {
            return data = response.data
        })
        .then(data => console.log(data.name)
            .catch(error => console.log(error))
        );

}

function postAxios() {
    axios.post('http://httpbin.org/post', payload)
        .then(response => console.log(response))
        .catch(error => console.log(error))

}


//использование асинхронной функции в запросе
// суть в том чтобы дождаться получения данных
async function getPerson(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await response.json();

        return data;
    } catch (error) {

        throw new Error('error in getuser ')
    }


}

async function getPost(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let post = await response.json();

        return post;

    }
    catch (error) {
        throw new Error('error in getPost ')

    }


}

async function getComments(postId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        let post = await response.json();

        return post;

    }
    catch (error) {
        throw new Error('error in getComments ')

    }


}

//цепочка асинхронных вызовов, пока не получим одно не получим и другое
async function fetchAcyncResult() {
    try {
        let user = await getPerson(5);
        let userPost = await getPost(user.id);
        let userComment = await getComments(userPost[0].id);
        console.log(user);
        console.log(userPost);
        console.log(userComment);

    }
    catch (error) {
        console.log(error);

    }

}

const key = '3bcab38c01345ef3bbc4b3bd63cc517a';
let city = 'London';

//fetch работа с api
//формирование построки запроса
function getWeather() {
    function weatherRequest() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`, {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return data = response.json()
            }
        }).then(data => {
            let temperature = Math.round(data.main.temp);
            console.log(`Температура в Лондоне ${temperature}\u2103 Время: ${new Date()}`);
        })
            .catch(error => console.log(error));


    }

    weatherRequest();
    setInterval(function () {
        weatherRequest();
    }, 60000);
}

//axios работа с api
//формирование построки запроса
const key2 = '6bfa8f72fd4dacbb8246f9847f323990aabdfbf140fe0b08022354cf7d45a325c4ba69a5b2b2f55285869';
const url = `https://api.vk.com/method/groups.getById?group_ids=19103050&fields=members_count&access_token=${key2}&v=5.27`;
axios.get(url)
    .then((res) => {
        console.log(res);
        const {members_count} = res.response[0];
        res.status(200).send({
            subscribers: members_count
        });
    })
    .catch((e) => {
        console.log(e);
    });


const slArray = [
    {
        'id': 1,
        'name': 'one'
    },
    {
        'id': 2,
        'name': 'two'
    },
    {
        'id': 3,
        'name': 'three'
    },
    {
        'id': 4,
        'name': 'four'
    },
    {
        'id': 5,
        'name': 'five'
    }
];

function sliceArray(array = [], slice_mount) {
    let slicedArray = [];
    //разбивает массив на столько частей, чтобы в каждом подмассиве было по slice_mount
    //array.length/slice_mount количество частей, количество итераций
    for (let i = 0; i < Math.ceil(array.length / slice_mount); i++) {
        //заполняет новый массив с 0 по slice_mount
        //c пред места по новое место и т.д.
        slicedArray[i] = array.slice((i * slice_mount), (i * slice_mount) + slice_mount);
    }
    return slicedArray;
}


function getRandomItems(array = [], qty = 1) {
    //проверки
    if (!Array.isArray(array) || !array.length || !qty) {
        return [];
    }
    //копируем массив чтобы не менять оригинальный
    const _array = array.concat();
    const returnArray = [];
    //условие пока колво не станет 0
    //работает каждый раз
    while (qty--) {
        //берем рандомное число из кол-ва элементов в массиве
        const rand = Math.floor(Math.random() * _array.length);
        //заносим элемент с рандомным индексом в новый массив
        returnArray.push(_array[rand]);
        //отрезаем этот элемент от массва из которого брали
        _array.splice(rand, 1);
        //и если в массиве из которого берем ничего не остается, то возвращаем что получили
        if (!_array.length) {
            return returnArray;
        }
    }
    return returnArray;
}

const testPrices = ['200', '600', '800', '1300' , '300'];
const shav =2;
const mycash = 1600;

howMuchItemsCanIBuy = (prices = [], cache=0, n=0)=> {
    let result = 0;
    if(!prices.length && !Array.isArray(prices))return result;
    if(!cache && typeof +cache !== 'number' )return result;
    if(!n && typeof +n !== 'number' )return result;
    const resultArr = prices.map(num => +num).filter( num => num*n <= cache );
    if(!resultArr && !resultArr.length) return result;
    if(resultArr.reduce((a,b) => a+b) === cache) return resultArr.length;
    let newResultArr = [];
    let max = 0;
    for(let i = 0; i<= resultArr.length-1; i++){
         for(let n = i; n <= resultArr.length-1; n++){
             if(resultArr[n+1]) {
                 if ( resultArr[i] + resultArr[n+1] > max &&resultArr[i] + resultArr[n+1]<=cache){
                     max = resultArr[i] + resultArr[n+1];
                     newResultArr = [ resultArr[i], resultArr[n+1]]
                 }
             }
        }
    }
    if(newResultArr && newResultArr.length) return newResultArr.length;

};

const stringArray = ['JavaScript' , 'python', 'Php', 'Ruby' ];
getStringFromArray = (arr=[])=> {
    if(!Array.isArray(arr) && !arr.length) return;
   const newArr = arr.map((word, index)=>{
       if(index === arr.length-1) return `и ${word}`;
       else if((index === arr.length-2) ) return word;
           else return  `${word},`
   });
return newArr.join(' ');
};


const dataIn = {
    'a.b.c.m': 'm data',
    'a.b.x': 'x data',
    'd.e': 'e data',
    'd.d': 'd data',
    'testKey': 'test key data',
};

const dataOut = {
    'a': {
        'b': {
            'c': {
                'm': 'm data',
            },
            'x': 'x data',
        }
    },
    'd': {
        'e': 'e data',
        'd': 'd data',
    },
    'testKey': 'test key data',
};

const f = (data={}) => {

    let result = {};
    Object.entries(data).map(arr=>{
        let newArr = [];
        newArr.push(arr[0].split('.'));
        newArr.push(arr[1]);
        return makeObjFromArray(newArr);
    });

    function makeObjFromArray(arr=[]) {
        let keys = arr[0].slice(0, arr[0].length);
        keys.reduce((emptyObj, key, index) =>{
            if(index === keys.length-1) return  emptyObj[key] = arr[1];
            else return  emptyObj[key] = { ...emptyObj[key]};
        }, result);
    }

    console.log(result);
    return result;
};


const f2 = data => {
    //target это первое значение для функции reduce, подобно 0 или 1, старт, начало
    const target = {};
    const appendKey = (keys, value) => {
        //keys ['a','b','c','m']
        //value m data'
        keys.reduce((EmptyObj, key, index) => {
            //EmptyObj[а] = если индекс равен последнему эл массива, то  возвращаем посл строчку value
            //если нет, то заносим в объект пред значение reduce и  EmptyObj[key], если оно есть
            EmptyObj[key] = index === keys.length - 1 ? value : { ...EmptyObj[key] };
            return EmptyObj[key];
            //console.log('acc[key]', acc[key]);
            //target это первое значение для функции reduce
        }, target);
    };

    //берем ключи в виде массива и перебираем
    // '[a.b.c.m'], ['a.b.x'], ['d.e'], ['d.d'], ['testKey']

    Object.keys(data).map(dataKey =>
        //примеяем к каждому функцию которая вернет объект
        //dataKey.split('.') === ['a','b','c','m']
        //data[dataKey] === 'm data'
        appendKey(dataKey.split('.'), data[dataKey])
    );
    return target;
};






// Should display "true"

