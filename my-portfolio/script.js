(function() {
    const u = document.createElement("link").relList;
    if (u && u.supports && u.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const d of o)
            if (d.type === "childList")
                for (const h of d.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && r(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(o) {
        const d = {};
        return o.integrity && (d.integrity = o.integrity),
        o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const d = s(o);
        fetch(o.href, d)
    }
}
)();
const Wp = "phc_V7JMHB0fVJGRu8UHyrsj6pSL1BS76P5zD8qCi7lrTTV"
  , Ze = {
    colors: {
        text: "#5D5D5D",
        white: "#FFFFFF",
        border: "rgba(0, 10, 36, 0.08)"
    },
    font: {
        family: '"Geist"',
        weight: "600",
        size: {
            normal: "14px",
            button: "18px"
        },
        lineHeight: "20px"
    },
    button: {
        gradient: "linear-gradient(180deg, #A797FF 0%, #7057FF 100%)"
    },
    shadow: "0px 8px 12px 0px rgba(9, 10, 20, 0.06)",
    zIndex: `${Number.MAX_SAFE_INTEGER}`
}
  , gh = {
    close: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D303D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>')}`,
    generate: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.87 4.94c.227-.71 1.21-.723 1.456-.02l1.177 3.378 3.101 1.013c.708.231.714 1.216.01 1.455l-3.183 1.082-1.105 3.17c-.245.704-1.23.69-1.455-.02l-.989-3.107-3.367-1.203c-.702-.25-.68-1.234.04-1.455l3.282-1.016 1.043-3.277Z" fill="#FFF"/><path fill-rule="evenodd" d="M12.238 1.3c.167-.667 1.1-.667 1.266 0l.388 1.551 1.55.388c.666.166.667 1.1 0 1.266l-1.55.388-.388 1.55c-.167.666-1.1.667-1.266 0l-.388-1.55-1.55-.388c-.667-.166-.667-1.1 0-1.266l1.55-.388.388-1.551Z" fill="#FFF"/></svg>')}`
}
  , Yn = {
    readdyLogo: "https://public.readdy.ai/gen_page/readdy-logo.png",
    watermarkLogo: "https://public.readdy.ai/gen_page/watermark.png",
    readdyLink: "https://readdy.ai?ref=b",
    fontStylesheet: "https://fonts.googleapis.com/css2?family=Geist:wght@600&display=swap",
    posthogCDN: "https://cdn.jsdelivr.net/npm/posthog-js@1.96.1/dist/array.full.min.js"
}
  , ph = {
    en: {
        prefix: "This Website is Made with",
        suffix: ". You can also get one like this in minutes",
        button: "Get one for FREE"
    },
    zh: {
        prefix: "本网站来自",
        suffix: "。你也可以在几分钟内拥有同样的页面",
        button: "立即免费拥有"
    }
}
  , Ip = () => navigator.language?.toLowerCase().startsWith("zh") ?? !1
  , Zr = () => Ip() ? ph.zh : ph.en
  , Pp = () => window.innerWidth > 768 && !("ontouchstart"in window)
  , e0 = () => {
    const c = window.location.hostname;
    return ["readdy.ai", "dev.readdy.ai", "localhost"].some(s => c === s || c.endsWith(`.${s}`))
}
;
function t0() {
    if (window.posthog)
        return;
    const c = document.createElement("script");
    c.src = Yn.posthogCDN,
    c.async = !0,
    c.onload = () => {
        window.posthog?.init(Wp, {
            api_host: "https://us.i.posthog.com",
            autocapture: !1,
            capture_pageview: !1,
            capture_pageleave: !1,
            disable_session_recording: !0,
            disable_scroll_properties: !0,
            capture_performance: {
                web_vitals: !1
            },
            rageclick: !1,
            loaded: function(u) {
                u.sessionRecording && u.sessionRecording.stopRecording()
            }
        })
    }
    ,
    document.head.appendChild(c)
}
function yh(c, u) {
    window.posthog?.capture(c, {
        ...u,
        version: 2
    })
}
function Yt(c, u) {
    Object.assign(c.style, u)
}
function hu(c, u="0") {
    Yt(c, {
        color: Ze.colors.text,
        fontFamily: Ze.font.family,
        fontSize: Ze.font.size.normal,
        lineHeight: Ze.font.lineHeight,
        fontWeight: Ze.font.weight,
        whiteSpace: "nowrap",
        marginRight: u
    })
}
function mu(c, u="row") {
    Yt(c, {
        display: "flex",
        flexDirection: u,
        alignItems: "center",
        justifyContent: "center"
    })
}
function l0() {
    if (e0())
        return;
    const c = "https://readdy.ai/api/public/user/is_free"
      , u = "69305709-3a0e-4f54-9ceb-b4ce6669c2ac";
    async function s(O) {
        try {
            return !(await (await fetch(`${c}?projectId=${O}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json()).data.is_free
        } catch {
            return !0
        }
    }
    function r() {
        document.querySelector('link[rel="icon"]')?.remove();
        const O = document.createElement("link");
        O.type = "image/png",
        O.rel = "icon",
        O.href = Yn.readdyLogo,
        document.head.appendChild(O);
        const N = document.createElement("link");
        N.rel = "stylesheet",
        N.href = Yn.fontStylesheet,
        document.head.appendChild(N)
    }
    function o(O) {
        yh(O),
        window.open(Yn.readdyLink, "_blank")
    }
    function d() {
        const O = document.createElement("div");
        O.id = "close-button",
        Yt(O, {
            position: "absolute",
            top: "-12px",
            right: "-12px",
            width: "32px",
            height: "32px",
            backgroundColor: Ze.colors.white,
            borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: Ze.colors.border,
            cursor: "pointer",
            boxShadow: Ze.shadow
        }),
        mu(O);
        const N = document.createElement("img");
        return N.src = gh.close,
        Yt(N, {
            width: "24px",
            height: "24px"
        }),
        O.appendChild(N),
        O.addEventListener("click", _ => {
            _.stopPropagation(),
            yh("watermark_close_button_click"),
            document.getElementById("watermark")?.remove()
        }
        ),
        O
    }
    function h(O) {
        const N = document.createElement("div");
        N.id = "generate-button",
        Yt(N, {
            padding: O ? "8px 16px" : "10px 20px",
            background: Ze.button.gradient,
            borderRadius: "999px",
            border: "none",
            gap: "6px",
            cursor: "pointer",
            marginLeft: O ? "12px" : "0",
            whiteSpace: "nowrap",
            width: O ? "auto" : "100%"
        }),
        mu(N);
        const _ = document.createElement("img");
        _.src = gh.generate,
        Yt(_, {
            width: "16px",
            height: "16px",
            flexShrink: "0"
        });
        const Y = document.createElement("span");
        return Y.textContent = Zr().button,
        Yt(Y, {
            color: Ze.colors.white,
            fontFamily: Ze.font.family,
            fontSize: Ze.font.size.button,
            fontWeight: Ze.font.weight,
            lineHeight: Ze.font.lineHeight
        }),
        N.append(_, Y),
        N.addEventListener("click", B => {
            B.stopPropagation(),
            o("watermark_create_button_click")
        }
        ),
        N
    }
    function p() {
        const O = document.createElement("img");
        return O.src = Yn.watermarkLogo,
        Yt(O, {
            width: "92px",
            height: "auto",
            paddingLeft: "8px",
            flexShrink: "0"
        }),
        O
    }
    function y(O) {
        const N = Zr()
          , _ = document.createElement("div");
        _.textContent = N.prefix,
        hu(_);
        const Y = p()
          , B = document.createElement("div");
        B.textContent = N.suffix,
        hu(B, "12px"),
        O.append(_, Y, B, h(!0))
    }
    function g(O) {
        const N = Zr()
          , _ = document.createElement("div");
        mu(_),
        _.style.marginBottom = "4px";
        const Y = document.createElement("div");
        Y.textContent = N.prefix,
        hu(Y, "6px"),
        _.append(Y, p());
        const B = document.createElement("div");
        B.textContent = N.suffix,
        hu(B),
        Yt(B, {
            textAlign: "center",
            marginBottom: "12px"
        }),
        O.append(_, B, h(!1))
    }
    function E() {
        const O = Pp()
          , N = document.createElement("div");
        return N.id = "watermark",
        Yt(N, {
            zIndex: Ze.zIndex,
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: O ? "fit-content" : "calc(100% - 32px)",
            maxWidth: O ? "none" : "100%",
            backgroundColor: Ze.colors.white,
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: O ? "999px" : "36px",
            borderColor: Ze.colors.border,
            padding: O ? "12px 20px" : "16px",
            boxShadow: Ze.shadow,
            cursor: "pointer"
        }),
        mu(N, O ? "row" : "column"),
        N.appendChild(d()),
        O ? y(N) : g(N),
        N.addEventListener("click", _ => {
            _.target.closest("#generate-button, #close-button") || o("watermark_create_button_click")
        }
        ),
        N
    }
    function v(O) {
        const N = document.getElementById("watermark");
        !N && !O ? (document.body.appendChild(E()),
        r(),
        t0()) : O && N && N.remove()
    }
    s(u).then(v)
}
l0();
var Kr = {
    exports: {}
}
  , jn = {};
var vh;
function a0() {
    if (vh)
        return jn;
    vh = 1;
    var c = Symbol.for("react.transitional.element")
      , u = Symbol.for("react.fragment");
    function s(r, o, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d),
        o.key !== void 0 && (h = "" + o.key),
        "key"in o) {
            d = {};
            for (var p in o)
                p !== "key" && (d[p] = o[p])
        } else
            d = o;
        return o = d.ref,
        {
            $$typeof: c,
            type: r,
            key: h,
            ref: o !== void 0 ? o : null,
            props: d
        }
    }
    return jn.Fragment = u,
    jn.jsx = s,
    jn.jsxs = s,
    jn
}
var bh;
function n0() {
    return bh || (bh = 1,
    Kr.exports = a0()),
    Kr.exports
}
var H = n0()
  , Jr = {
    exports: {}
}
  , P = {};
var Sh;
function i0() {
    if (Sh)
        return P;
    Sh = 1;
    var c = Symbol.for("react.transitional.element")
      , u = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , y = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , E = Symbol.for("react.lazy")
      , v = Symbol.for("react.activity")
      , O = Symbol.iterator;
    function N(S) {
        return S === null || typeof S != "object" ? null : (S = O && S[O] || S["@@iterator"],
        typeof S == "function" ? S : null)
    }
    var _ = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Y = Object.assign
      , B = {};
    function Q(S, w, G) {
        this.props = S,
        this.context = w,
        this.refs = B,
        this.updater = G || _
    }
    Q.prototype.isReactComponent = {},
    Q.prototype.setState = function(S, w) {
        if (typeof S != "object" && typeof S != "function" && S != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, w, "setState")
    }
    ,
    Q.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate")
    }
    ;
    function V() {}
    V.prototype = Q.prototype;
    function J(S, w, G) {
        this.props = S,
        this.context = w,
        this.refs = B,
        this.updater = G || _
    }
    var ue = J.prototype = new V;
    ue.constructor = J,
    Y(ue, Q.prototype),
    ue.isPureReactComponent = !0;
    var ce = Array.isArray;
    function ye() {}
    var W = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Re = Object.prototype.hasOwnProperty;
    function Oe(S, w, G) {
        var X = G.ref;
        return {
            $$typeof: c,
            type: S,
            key: w,
            ref: X !== void 0 ? X : null,
            props: G
        }
    }
    function Ne(S, w) {
        return Oe(S.type, w, S.props)
    }
    function St(S) {
        return typeof S == "object" && S !== null && S.$$typeof === c
    }
    function Ie(S) {
        var w = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function(G) {
            return w[G]
        })
    }
    var Ve = /\/+/g;
    function Me(S, w) {
        return typeof S == "object" && S !== null && S.key != null ? Ie("" + S.key) : w.toString(36)
    }
    function lt(S) {
        switch (S.status) {
        case "fulfilled":
            return S.value;
        case "rejected":
            throw S.reason;
        default:
            switch (typeof S.status == "string" ? S.then(ye, ye) : (S.status = "pending",
            S.then(function(w) {
                S.status === "pending" && (S.status = "fulfilled",
                S.value = w)
            }, function(w) {
                S.status === "pending" && (S.status = "rejected",
                S.reason = w)
            })),
            S.status) {
            case "fulfilled":
                return S.value;
            case "rejected":
                throw S.reason
            }
        }
        throw S
    }
    function D(S, w, G, X, ee) {
        var ae = typeof S;
        (ae === "undefined" || ae === "boolean") && (S = null);
        var pe = !1;
        if (S === null)
            pe = !0;
        else
            switch (ae) {
            case "bigint":
            case "string":
            case "number":
                pe = !0;
                break;
            case "object":
                switch (S.$$typeof) {
                case c:
                case u:
                    pe = !0;
                    break;
                case E:
                    return pe = S._init,
                    D(pe(S._payload), w, G, X, ee)
                }
            }
        if (pe)
            return ee = ee(S),
            pe = X === "" ? "." + Me(S, 0) : X,
            ce(ee) ? (G = "",
            pe != null && (G = pe.replace(Ve, "$&/") + "/"),
            D(ee, w, G, "", function(Va) {
                return Va
            })) : ee != null && (St(ee) && (ee = Ne(ee, G + (ee.key == null || S && S.key === ee.key ? "" : ("" + ee.key).replace(Ve, "$&/") + "/") + pe)),
            w.push(ee)),
            1;
        pe = 0;
        var et = X === "" ? "." : X + ":";
        if (ce(S))
            for (var Ue = 0; Ue < S.length; Ue++)
                X = S[Ue],
                ae = et + Me(X, Ue),
                pe += D(X, w, G, ae, ee);
        else if (Ue = N(S),
        typeof Ue == "function")
            for (S = Ue.call(S),
            Ue = 0; !(X = S.next()).done; )
                X = X.value,
                ae = et + Me(X, Ue++),
                pe += D(X, w, G, ae, ee);
        else if (ae === "object") {
            if (typeof S.then == "function")
                return D(lt(S), w, G, X, ee);
            throw w = String(S),
            Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.")
        }
        return pe
    }
    function q(S, w, G) {
        if (S == null)
            return S;
        var X = []
          , ee = 0;
        return D(S, X, "", "", function(ae) {
            return w.call(G, ae, ee++)
        }),
        X
    }
    function $(S) {
        if (S._status === -1) {
            var w = S._result;
            w = w(),
            w.then(function(G) {
                (S._status === 0 || S._status === -1) && (S._status = 1,
                S._result = G)
            }, function(G) {
                (S._status === 0 || S._status === -1) && (S._status = 2,
                S._result = G)
            }),
            S._status === -1 && (S._status = 0,
            S._result = w)
        }
        if (S._status === 1)
            return S._result.default;
        throw S._result
    }
    var fe = typeof reportError == "function" ? reportError : function(S) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var w = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                error: S
            });
            if (!window.dispatchEvent(w))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return
        }
        console.error(S)
    }
      , ge = {
        map: q,
        forEach: function(S, w, G) {
            q(S, function() {
                w.apply(this, arguments)
            }, G)
        },
        count: function(S) {
            var w = 0;
            return q(S, function() {
                w++
            }),
            w
        },
        toArray: function(S) {
            return q(S, function(w) {
                return w
            }) || []
        },
        only: function(S) {
            if (!St(S))
                throw Error("React.Children.only expected to receive a single React element child.");
            return S
        }
    };
    return P.Activity = v,
    P.Children = ge,
    P.Component = Q,
    P.Fragment = s,
    P.Profiler = o,
    P.PureComponent = J,
    P.StrictMode = r,
    P.Suspense = y,
    P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W,
    P.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(S) {
            return W.H.useMemoCache(S)
        }
    },
    P.cache = function(S) {
        return function() {
            return S.apply(null, arguments)
        }
    }
    ,
    P.cacheSignal = function() {
        return null
    }
    ,
    P.cloneElement = function(S, w, G) {
        if (S == null)
            throw Error("The argument must be a React element, but you passed " + S + ".");
        var X = Y({}, S.props)
          , ee = S.key;
        if (w != null)
            for (ae in w.key !== void 0 && (ee = "" + w.key),
            w)
                !Re.call(w, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && w.ref === void 0 || (X[ae] = w[ae]);
        var ae = arguments.length - 2;
        if (ae === 1)
            X.children = G;
        else if (1 < ae) {
            for (var pe = Array(ae), et = 0; et < ae; et++)
                pe[et] = arguments[et + 2];
            X.children = pe
        }
        return Oe(S.type, ee, X)
    }
    ,
    P.createContext = function(S) {
        return S = {
            $$typeof: h,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        S.Provider = S,
        S.Consumer = {
            $$typeof: d,
            _context: S
        },
        S
    }
    ,
    P.createElement = function(S, w, G) {
        var X, ee = {}, ae = null;
        if (w != null)
            for (X in w.key !== void 0 && (ae = "" + w.key),
            w)
                Re.call(w, X) && X !== "key" && X !== "__self" && X !== "__source" && (ee[X] = w[X]);
        var pe = arguments.length - 2;
        if (pe === 1)
            ee.children = G;
        else if (1 < pe) {
            for (var et = Array(pe), Ue = 0; Ue < pe; Ue++)
                et[Ue] = arguments[Ue + 2];
            ee.children = et
        }
        if (S && S.defaultProps)
            for (X in pe = S.defaultProps,
            pe)
                ee[X] === void 0 && (ee[X] = pe[X]);
        return Oe(S, ae, ee)
    }
    ,
    P.createRef = function() {
        return {
            current: null
        }
    }
    ,
    P.forwardRef = function(S) {
        return {
            $$typeof: p,
            render: S
        }
    }
    ,
    P.isValidElement = St,
    P.lazy = function(S) {
        return {
            $$typeof: E,
            _payload: {
                _status: -1,
                _result: S
            },
            _init: $
        }
    }
    ,
    P.memo = function(S, w) {
        return {
            $$typeof: g,
            type: S,
            compare: w === void 0 ? null : w
        }
    }
    ,
    P.startTransition = function(S) {
        var w = W.T
          , G = {};
        W.T = G;
        try {
            var X = S()
              , ee = W.S;
            ee !== null && ee(G, X),
            typeof X == "object" && X !== null && typeof X.then == "function" && X.then(ye, fe)
        } catch (ae) {
            fe(ae)
        } finally {
            w !== null && G.types !== null && (w.types = G.types),
            W.T = w
        }
    }
    ,
    P.unstable_useCacheRefresh = function() {
        return W.H.useCacheRefresh()
    }
    ,
    P.use = function(S) {
        return W.H.use(S)
    }
    ,
    P.useActionState = function(S, w, G) {
        return W.H.useActionState(S, w, G)
    }
    ,
    P.useCallback = function(S, w) {
        return W.H.useCallback(S, w)
    }
    ,
    P.useContext = function(S) {
        return W.H.useContext(S)
    }
    ,
    P.useDebugValue = function() {}
    ,
    P.useDeferredValue = function(S, w) {
        return W.H.useDeferredValue(S, w)
    }
    ,
    P.useEffect = function(S, w) {
        return W.H.useEffect(S, w)
    }
    ,
    P.useEffectEvent = function(S) {
        return W.H.useEffectEvent(S)
    }
    ,
    P.useId = function() {
        return W.H.useId()
    }
    ,
    P.useImperativeHandle = function(S, w, G) {
        return W.H.useImperativeHandle(S, w, G)
    }
    ,
    P.useInsertionEffect = function(S, w) {
        return W.H.useInsertionEffect(S, w)
    }
    ,
    P.useLayoutEffect = function(S, w) {
        return W.H.useLayoutEffect(S, w)
    }
    ,
    P.useMemo = function(S, w) {
        return W.H.useMemo(S, w)
    }
    ,
    P.useOptimistic = function(S, w) {
        return W.H.useOptimistic(S, w)
    }
    ,
    P.useReducer = function(S, w, G) {
        return W.H.useReducer(S, w, G)
    }
    ,
    P.useRef = function(S) {
        return W.H.useRef(S)
    }
    ,
    P.useState = function(S) {
        return W.H.useState(S)
    }
    ,
    P.useSyncExternalStore = function(S, w, G) {
        return W.H.useSyncExternalStore(S, w, G)
    }
    ,
    P.useTransition = function() {
        return W.H.useTransition()
    }
    ,
    P.version = "19.2.3",
    P
}
var xh;
function ic() {
    return xh || (xh = 1,
    Jr.exports = i0()),
    Jr.exports
}
var U = ic();
const I = c => typeof c == "string"
  , Hn = () => {
    let c, u;
    const s = new Promise( (r, o) => {
        c = r,
        u = o
    }
    );
    return s.resolve = c,
    s.reject = u,
    s
}
  , Eh = c => c == null ? "" : "" + c
  , u0 = (c, u, s) => {
    c.forEach(r => {
        u[r] && (s[r] = u[r])
    }
    )
}
  , s0 = /###/g
  , Th = c => c && c.indexOf("###") > -1 ? c.replace(s0, ".") : c
  , Oh = c => !c || I(c)
  , Vn = (c, u, s) => {
    const r = I(u) ? u.split(".") : u;
    let o = 0;
    for (; o < r.length - 1; ) {
        if (Oh(c))
            return {};
        const d = Th(r[o]);
        !c[d] && s && (c[d] = new s),
        Object.prototype.hasOwnProperty.call(c, d) ? c = c[d] : c = {},
        ++o
    }
    return Oh(c) ? {} : {
        obj: c,
        k: Th(r[o])
    }
}
  , zh = (c, u, s) => {
    const {obj: r, k: o} = Vn(c, u, Object);
    if (r !== void 0 || u.length === 1) {
        r[o] = s;
        return
    }
    let d = u[u.length - 1]
      , h = u.slice(0, u.length - 1)
      , p = Vn(c, h, Object);
    for (; p.obj === void 0 && h.length; )
        d = `${h[h.length - 1]}.${d}`,
        h = h.slice(0, h.length - 1),
        p = Vn(c, h, Object),
        p?.obj && typeof p.obj[`${p.k}.${d}`] < "u" && (p.obj = void 0);
    p.obj[`${p.k}.${d}`] = s
}
  , r0 = (c, u, s, r) => {
    const {obj: o, k: d} = Vn(c, u, Object);
    o[d] = o[d] || [],
    o[d].push(s)
}
  , bu = (c, u) => {
    const {obj: s, k: r} = Vn(c, u);
    if (s && Object.prototype.hasOwnProperty.call(s, r))
        return s[r]
}
  , c0 = (c, u, s) => {
    const r = bu(c, s);
    return r !== void 0 ? r : bu(u, s)
}
  , em = (c, u, s) => {
    for (const r in u)
        r !== "__proto__" && r !== "constructor" && (r in c ? I(c[r]) || c[r]instanceof String || I(u[r]) || u[r]instanceof String ? s && (c[r] = u[r]) : em(c[r], u[r], s) : c[r] = u[r]);
    return c
}
  , Ba = c => c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var o0 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const f0 = c => I(c) ? c.replace(/[&<>"'\/]/g, u => o0[u]) : c;
class d0 {
    constructor(u) {
        this.capacity = u,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(u) {
        const s = this.regExpMap.get(u);
        if (s !== void 0)
            return s;
        const r = new RegExp(u);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(u, r),
        this.regExpQueue.push(u),
        r
    }
}
const h0 = [" ", ",", "?", "!", ";"]
  , m0 = new d0(20)
  , g0 = (c, u, s) => {
    u = u || "",
    s = s || "";
    const r = h0.filter(h => u.indexOf(h) < 0 && s.indexOf(h) < 0);
    if (r.length === 0)
        return !0;
    const o = m0.getRegExp(`(${r.map(h => h === "?" ? "\\?" : h).join("|")})`);
    let d = !o.test(c);
    if (!d) {
        const h = c.indexOf(s);
        h > 0 && !o.test(c.substring(0, h)) && (d = !0)
    }
    return d
}
  , lc = (c, u, s=".") => {
    if (!c)
        return;
    if (c[u])
        return Object.prototype.hasOwnProperty.call(c, u) ? c[u] : void 0;
    const r = u.split(s);
    let o = c;
    for (let d = 0; d < r.length; ) {
        if (!o || typeof o != "object")
            return;
        let h, p = "";
        for (let y = d; y < r.length; ++y)
            if (y !== d && (p += s),
            p += r[y],
            h = o[p],
            h !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof h) > -1 && y < r.length - 1)
                    continue;
                d += y - d + 1;
                break
            }
        o = h
    }
    return o
}
  , Qn = c => c?.replace("_", "-")
  , p0 = {
    type: "logger",
    log(c) {
        this.output("log", c)
    },
    warn(c) {
        this.output("warn", c)
    },
    error(c) {
        this.output("error", c)
    },
    output(c, u) {
        console?.[c]?.apply?.(console, u)
    }
};
class Su {
    constructor(u, s={}) {
        this.init(u, s)
    }
    init(u, s={}) {
        this.prefix = s.prefix || "i18next:",
        this.logger = u || p0,
        this.options = s,
        this.debug = s.debug
    }
    log(...u) {
        return this.forward(u, "log", "", !0)
    }
    warn(...u) {
        return this.forward(u, "warn", "", !0)
    }
    error(...u) {
        return this.forward(u, "error", "")
    }
    deprecate(...u) {
        return this.forward(u, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(u, s, r, o) {
        return o && !this.debug ? null : (I(u[0]) && (u[0] = `${r}${this.prefix} ${u[0]}`),
        this.logger[s](u))
    }
    create(u) {
        return new Su(this.logger,{
            prefix: `${this.prefix}:${u}:`,
            ...this.options
        })
    }
    clone(u) {
        return u = u || this.options,
        u.prefix = u.prefix || this.prefix,
        new Su(this.logger,u)
    }
}
var Gt = new Su;
class Tu {
    constructor() {
        this.observers = {}
    }
    on(u, s) {
        return u.split(" ").forEach(r => {
            this.observers[r] || (this.observers[r] = new Map);
            const o = this.observers[r].get(s) || 0;
            this.observers[r].set(s, o + 1)
        }
        ),
        this
    }
    off(u, s) {
        if (this.observers[u]) {
            if (!s) {
                delete this.observers[u];
                return
            }
            this.observers[u].delete(s)
        }
    }
    emit(u, ...s) {
        this.observers[u] && Array.from(this.observers[u].entries()).forEach( ([o,d]) => {
            for (let h = 0; h < d; h++)
                o(...s)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach( ([o,d]) => {
            for (let h = 0; h < d; h++)
                o.apply(o, [u, ...s])
        }
        )
    }
}
class Ah extends Tu {
    constructor(u, s={
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
        this.data = u || {},
        this.options = s,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(u) {
        this.options.ns.indexOf(u) < 0 && this.options.ns.push(u)
    }
    removeNamespaces(u) {
        const s = this.options.ns.indexOf(u);
        s > -1 && this.options.ns.splice(s, 1)
    }
    getResource(u, s, r, o={}) {
        const d = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
          , h = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let p;
        u.indexOf(".") > -1 ? p = u.split(".") : (p = [u, s],
        r && (Array.isArray(r) ? p.push(...r) : I(r) && d ? p.push(...r.split(d)) : p.push(r)));
        const y = bu(this.data, p);
        return !y && !s && !r && u.indexOf(".") > -1 && (u = p[0],
        s = p[1],
        r = p.slice(2).join(".")),
        y || !h || !I(r) ? y : lc(this.data?.[u]?.[s], r, d)
    }
    addResource(u, s, r, o, d={
        silent: !1
    }) {
        const h = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator;
        let p = [u, s];
        r && (p = p.concat(h ? r.split(h) : r)),
        u.indexOf(".") > -1 && (p = u.split("."),
        o = s,
        s = p[1]),
        this.addNamespaces(s),
        zh(this.data, p, o),
        d.silent || this.emit("added", u, s, r, o)
    }
    addResources(u, s, r, o={
        silent: !1
    }) {
        for (const d in r)
            (I(r[d]) || Array.isArray(r[d])) && this.addResource(u, s, d, r[d], {
                silent: !0
            });
        o.silent || this.emit("added", u, s, r)
    }
    addResourceBundle(u, s, r, o, d, h={
        silent: !1,
        skipCopy: !1
    }) {
        let p = [u, s];
        u.indexOf(".") > -1 && (p = u.split("."),
        o = r,
        r = s,
        s = p[1]),
        this.addNamespaces(s);
        let y = bu(this.data, p) || {};
        h.skipCopy || (r = JSON.parse(JSON.stringify(r))),
        o ? em(y, r, d) : y = {
            ...y,
            ...r
        },
        zh(this.data, p, y),
        h.silent || this.emit("added", u, s, r)
    }
    removeResourceBundle(u, s) {
        this.hasResourceBundle(u, s) && delete this.data[u][s],
        this.removeNamespaces(s),
        this.emit("removed", u, s)
    }
    hasResourceBundle(u, s) {
        return this.getResource(u, s) !== void 0
    }
    getResourceBundle(u, s) {
        return s || (s = this.options.defaultNS),
        this.getResource(u, s)
    }
    getDataByLanguage(u) {
        return this.data[u]
    }
    hasLanguageSomeTranslations(u) {
        const s = this.getDataByLanguage(u);
        return !!(s && Object.keys(s) || []).find(o => s[o] && Object.keys(s[o]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var tm = {
    processors: {},
    addPostProcessor(c) {
        this.processors[c.name] = c
    },
    handle(c, u, s, r, o) {
        return c.forEach(d => {
            u = this.processors[d]?.process(u, s, r, o) ?? u
        }
        ),
        u
    }
};
const lm = Symbol("i18next/PATH_KEY");
function y0() {
    const c = []
      , u = Object.create(null);
    let s;
    return u.get = (r, o) => (s?.revoke?.(),
    o === lm ? c : (c.push(o),
    s = Proxy.revocable(r, u),
    s.proxy)),
    Proxy.revocable(Object.create(null), u).proxy
}
function ac(c, u) {
    const {[lm]: s} = c(y0());
    return s.join(u?.keySeparator ?? ".")
}
const Rh = {}
  , Ch = c => !I(c) && typeof c != "boolean" && typeof c != "number";
class xu extends Tu {
    constructor(u, s={}) {
        super(),
        u0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], u, this),
        this.options = s,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = Gt.create("translator")
    }
    changeLanguage(u) {
        u && (this.language = u)
    }
    exists(u, s={
        interpolation: {}
    }) {
        const r = {
            ...s
        };
        return u == null ? !1 : this.resolve(u, r)?.res !== void 0
    }
    extractFromKey(u, s) {
        let r = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
        let d = s.ns || this.options.defaultNS || [];
        const h = r && u.indexOf(r) > -1
          , p = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !g0(u, r, o);
        if (h && !p) {
            const y = u.match(this.interpolator.nestingRegexp);
            if (y && y.length > 0)
                return {
                    key: u,
                    namespaces: I(d) ? [d] : d
                };
            const g = u.split(r);
            (r !== o || r === o && this.options.ns.indexOf(g[0]) > -1) && (d = g.shift()),
            u = g.join(o)
        }
        return {
            key: u,
            namespaces: I(d) ? [d] : d
        }
    }
    translate(u, s, r) {
        let o = typeof s == "object" ? {
            ...s
        } : s;
        if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)),
        typeof options == "object" && (o = {
            ...o
        }),
        o || (o = {}),
        u == null)
            return "";
        typeof u == "function" && (u = ac(u, o)),
        Array.isArray(u) || (u = [String(u)]);
        const d = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails
          , h = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
          , {key: p, namespaces: y} = this.extractFromKey(u[u.length - 1], o)
          , g = y[y.length - 1];
        let E = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
        E === void 0 && (E = ":");
        const v = o.lng || this.language
          , O = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (v?.toLowerCase() === "cimode")
            return O ? d ? {
                res: `${g}${E}${p}`,
                usedKey: p,
                exactUsedKey: p,
                usedLng: v,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(o)
            } : `${g}${E}${p}` : d ? {
                res: p,
                usedKey: p,
                exactUsedKey: p,
                usedLng: v,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(o)
            } : p;
        const N = this.resolve(u, o);
        let _ = N?.res;
        const Y = N?.usedKey || p
          , B = N?.exactUsedKey || p
          , Q = ["[object Number]", "[object Function]", "[object RegExp]"]
          , V = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays
          , J = !this.i18nFormat || this.i18nFormat.handleAsObject
          , ue = o.count !== void 0 && !I(o.count)
          , ce = xu.hasDefaultValue(o)
          , ye = ue ? this.pluralResolver.getSuffix(v, o.count, o) : ""
          , W = o.ordinal && ue ? this.pluralResolver.getSuffix(v, o.count, {
            ordinal: !1
        }) : ""
          , Re = ue && !o.ordinal && o.count === 0
          , Oe = Re && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${ye}`] || o[`defaultValue${W}`] || o.defaultValue;
        let Ne = _;
        J && !_ && ce && (Ne = Oe);
        const St = Ch(Ne)
          , Ie = Object.prototype.toString.apply(Ne);
        if (J && Ne && St && Q.indexOf(Ie) < 0 && !(I(V) && Array.isArray(Ne))) {
            if (!o.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const Ve = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(Y, Ne, {
                    ...o,
                    ns: y
                }) : `key '${p} (${this.language})' returned an object instead of string.`;
                return d ? (N.res = Ve,
                N.usedParams = this.getUsedParamsDetails(o),
                N) : Ve
            }
            if (h) {
                const Ve = Array.isArray(Ne)
                  , Me = Ve ? [] : {}
                  , lt = Ve ? B : Y;
                for (const D in Ne)
                    if (Object.prototype.hasOwnProperty.call(Ne, D)) {
                        const q = `${lt}${h}${D}`;
                        ce && !_ ? Me[D] = this.translate(q, {
                            ...o,
                            defaultValue: Ch(Oe) ? Oe[D] : void 0,
                            joinArrays: !1,
                            ns: y
                        }) : Me[D] = this.translate(q, {
                            ...o,
                            joinArrays: !1,
                            ns: y
                        }),
                        Me[D] === q && (Me[D] = Ne[D])
                    }
                _ = Me
            }
        } else if (J && I(V) && Array.isArray(_))
            _ = _.join(V),
            _ && (_ = this.extendTranslation(_, u, o, r));
        else {
            let Ve = !1
              , Me = !1;
            !this.isValidLookup(_) && ce && (Ve = !0,
            _ = Oe),
            this.isValidLookup(_) || (Me = !0,
            _ = p);
            const D = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Me ? void 0 : _
              , q = ce && Oe !== _ && this.options.updateMissing;
            if (Me || Ve || q) {
                if (this.logger.log(q ? "updateKey" : "missingKey", v, g, p, q ? Oe : _),
                h) {
                    const S = this.resolve(p, {
                        ...o,
                        keySeparator: !1
                    });
                    S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let $ = [];
                const fe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && fe && fe[0])
                    for (let S = 0; S < fe.length; S++)
                        $.push(fe[S]);
                else
                    this.options.saveMissingTo === "all" ? $ = this.languageUtils.toResolveHierarchy(o.lng || this.language) : $.push(o.lng || this.language);
                const ge = (S, w, G) => {
                    const X = ce && G !== _ ? G : D;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(S, g, w, X, q, o) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(S, g, w, X, q, o),
                    this.emit("missingKey", S, g, w, _)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && ue ? $.forEach(S => {
                    const w = this.pluralResolver.getSuffixes(S, o);
                    Re && o[`defaultValue${this.options.pluralSeparator}zero`] && w.indexOf(`${this.options.pluralSeparator}zero`) < 0 && w.push(`${this.options.pluralSeparator}zero`),
                    w.forEach(G => {
                        ge([S], p + G, o[`defaultValue${G}`] || Oe)
                    }
                    )
                }
                ) : ge($, p, Oe))
            }
            _ = this.extendTranslation(_, u, o, N, r),
            Me && _ === p && this.options.appendNamespaceToMissingKey && (_ = `${g}${E}${p}`),
            (Me || Ve) && this.options.parseMissingKeyHandler && (_ = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${g}${E}${p}` : p, Ve ? _ : void 0, o))
        }
        return d ? (N.res = _,
        N.usedParams = this.getUsedParamsDetails(o),
        N) : _
    }
    extendTranslation(u, s, r, o, d) {
        if (this.i18nFormat?.parse)
            u = this.i18nFormat.parse(u, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
                resolved: o
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const y = I(u) && (r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let g;
            if (y) {
                const v = u.match(this.interpolator.nestingRegexp);
                g = v && v.length
            }
            let E = r.replace && !I(r.replace) ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (E = {
                ...this.options.interpolation.defaultVariables,
                ...E
            }),
            u = this.interpolator.interpolate(u, E, r.lng || this.language || o.usedLng, r),
            y) {
                const v = u.match(this.interpolator.nestingRegexp)
                  , O = v && v.length;
                g < O && (r.nest = !1)
            }
            !r.lng && o && o.res && (r.lng = this.language || o.usedLng),
            r.nest !== !1 && (u = this.interpolator.nest(u, (...v) => d?.[0] === v[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${s[0]}`),
            null) : this.translate(...v, s), r)),
            r.interpolation && this.interpolator.reset()
        }
        const h = r.postProcess || this.options.postProcess
          , p = I(h) ? [h] : h;
        return u != null && p?.length && r.applyPostProcessor !== !1 && (u = tm.handle(p, u, s, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...o,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)),
        u
    }
    resolve(u, s={}) {
        let r, o, d, h, p;
        return I(u) && (u = [u]),
        u.forEach(y => {
            if (this.isValidLookup(r))
                return;
            const g = this.extractFromKey(y, s)
              , E = g.key;
            o = E;
            let v = g.namespaces;
            this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
            const O = s.count !== void 0 && !I(s.count)
              , N = O && !s.ordinal && s.count === 0
              , _ = s.context !== void 0 && (I(s.context) || typeof s.context == "number") && s.context !== ""
              , Y = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
            v.forEach(B => {
                this.isValidLookup(r) || (p = B,
                !Rh[`${Y[0]}-${B}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(p) && (Rh[`${Y[0]}-${B}`] = !0,
                this.logger.warn(`key "${o}" for languages "${Y.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                Y.forEach(Q => {
                    if (this.isValidLookup(r))
                        return;
                    h = Q;
                    const V = [E];
                    if (this.i18nFormat?.addLookupKeys)
                        this.i18nFormat.addLookupKeys(V, E, Q, B, s);
                    else {
                        let ue;
                        O && (ue = this.pluralResolver.getSuffix(Q, s.count, s));
                        const ce = `${this.options.pluralSeparator}zero`
                          , ye = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (O && (s.ordinal && ue.indexOf(ye) === 0 && V.push(E + ue.replace(ye, this.options.pluralSeparator)),
                        V.push(E + ue),
                        N && V.push(E + ce)),
                        _) {
                            const W = `${E}${this.options.contextSeparator || "_"}${s.context}`;
                            V.push(W),
                            O && (s.ordinal && ue.indexOf(ye) === 0 && V.push(W + ue.replace(ye, this.options.pluralSeparator)),
                            V.push(W + ue),
                            N && V.push(W + ce))
                        }
                    }
                    let J;
                    for (; J = V.pop(); )
                        this.isValidLookup(r) || (d = J,
                        r = this.getResource(Q, B, J, s))
                }
                ))
            }
            )
        }
        ),
        {
            res: r,
            usedKey: o,
            exactUsedKey: d,
            usedLng: h,
            usedNS: p
        }
    }
    isValidLookup(u) {
        return u !== void 0 && !(!this.options.returnNull && u === null) && !(!this.options.returnEmptyString && u === "")
    }
    getResource(u, s, r, o={}) {
        return this.i18nFormat?.getResource ? this.i18nFormat.getResource(u, s, r, o) : this.resourceStore.getResource(u, s, r, o)
    }
    getUsedParamsDetails(u={}) {
        const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , r = u.replace && !I(u.replace);
        let o = r ? u.replace : u;
        if (r && typeof u.count < "u" && (o.count = u.count),
        this.options.interpolation.defaultVariables && (o = {
            ...this.options.interpolation.defaultVariables,
            ...o
        }),
        !r) {
            o = {
                ...o
            };
            for (const d of s)
                delete o[d]
        }
        return o
    }
    static hasDefaultValue(u) {
        const s = "defaultValue";
        for (const r in u)
            if (Object.prototype.hasOwnProperty.call(u, r) && s === r.substring(0, s.length) && u[r] !== void 0)
                return !0;
        return !1
    }
}
class Nh {
    constructor(u) {
        this.options = u,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = Gt.create("languageUtils")
    }
    getScriptPartFromCode(u) {
        if (u = Qn(u),
        !u || u.indexOf("-") < 0)
            return null;
        const s = u.split("-");
        return s.length === 2 || (s.pop(),
        s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"))
    }
    getLanguagePartFromCode(u) {
        if (u = Qn(u),
        !u || u.indexOf("-") < 0)
            return u;
        const s = u.split("-");
        return this.formatLanguageCode(s[0])
    }
    formatLanguageCode(u) {
        if (I(u) && u.indexOf("-") > -1) {
            let s;
            try {
                s = Intl.getCanonicalLocales(u)[0]
            } catch {}
            return s && this.options.lowerCaseLng && (s = s.toLowerCase()),
            s || (this.options.lowerCaseLng ? u.toLowerCase() : u)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? u.toLowerCase() : u
    }
    isSupportedCode(u) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (u = this.getLanguagePartFromCode(u)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(u) > -1
    }
    getBestMatchFromCodes(u) {
        if (!u)
            return null;
        let s;
        return u.forEach(r => {
            if (s)
                return;
            const o = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(o)) && (s = o)
        }
        ),
        !s && this.options.supportedLngs && u.forEach(r => {
            if (s)
                return;
            const o = this.getScriptPartFromCode(r);
            if (this.isSupportedCode(o))
                return s = o;
            const d = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(d))
                return s = d;
            s = this.options.supportedLngs.find(h => {
                if (h === d)
                    return h;
                if (!(h.indexOf("-") < 0 && d.indexOf("-") < 0) && (h.indexOf("-") > 0 && d.indexOf("-") < 0 && h.substring(0, h.indexOf("-")) === d || h.indexOf(d) === 0 && d.length > 1))
                    return h
            }
            )
        }
        ),
        s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]),
        s
    }
    getFallbackCodes(u, s) {
        if (!u)
            return [];
        if (typeof u == "function" && (u = u(s)),
        I(u) && (u = [u]),
        Array.isArray(u))
            return u;
        if (!s)
            return u.default || [];
        let r = u[s];
        return r || (r = u[this.getScriptPartFromCode(s)]),
        r || (r = u[this.formatLanguageCode(s)]),
        r || (r = u[this.getLanguagePartFromCode(s)]),
        r || (r = u.default),
        r || []
    }
    toResolveHierarchy(u, s) {
        const r = this.getFallbackCodes((s === !1 ? [] : s) || this.options.fallbackLng || [], u)
          , o = []
          , d = h => {
            h && (this.isSupportedCode(h) ? o.push(h) : this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))
        }
        ;
        return I(u) && (u.indexOf("-") > -1 || u.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && d(this.formatLanguageCode(u)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && d(this.getScriptPartFromCode(u)),
        this.options.load !== "currentOnly" && d(this.getLanguagePartFromCode(u))) : I(u) && d(this.formatLanguageCode(u)),
        r.forEach(h => {
            o.indexOf(h) < 0 && d(this.formatLanguageCode(h))
        }
        ),
        o
    }
}
const Dh = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , _h = {
    select: c => c === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class v0 {
    constructor(u, s={}) {
        this.languageUtils = u,
        this.options = s,
        this.logger = Gt.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(u, s) {
        this.rules[u] = s
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(u, s={}) {
        const r = Qn(u === "dev" ? "en" : u)
          , o = s.ordinal ? "ordinal" : "cardinal"
          , d = JSON.stringify({
            cleanedCode: r,
            type: o
        });
        if (d in this.pluralRulesCache)
            return this.pluralRulesCache[d];
        let h;
        try {
            h = new Intl.PluralRules(r,{
                type: o
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                _h;
            if (!u.match(/-|_/))
                return _h;
            const y = this.languageUtils.getLanguagePartFromCode(u);
            h = this.getRule(y, s)
        }
        return this.pluralRulesCache[d] = h,
        h
    }
    needsPlural(u, s={}) {
        let r = this.getRule(u, s);
        return r || (r = this.getRule("dev", s)),
        r?.resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(u, s, r={}) {
        return this.getSuffixes(u, r).map(o => `${s}${o}`)
    }
    getSuffixes(u, s={}) {
        let r = this.getRule(u, s);
        return r || (r = this.getRule("dev", s)),
        r ? r.resolvedOptions().pluralCategories.sort( (o, d) => Dh[o] - Dh[d]).map(o => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : []
    }
    getSuffix(u, s, r={}) {
        const o = this.getRule(u, r);
        return o ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(s)}` : (this.logger.warn(`no plural rule found for: ${u}`),
        this.getSuffix("dev", s, r))
    }
}
const Mh = (c, u, s, r=".", o=!0) => {
    let d = c0(c, u, s);
    return !d && o && I(s) && (d = lc(c, s, r),
    d === void 0 && (d = lc(u, s, r))),
    d
}
  , kr = c => c.replace(/\$/g, "$$$$");
class b0 {
    constructor(u={}) {
        this.logger = Gt.create("interpolator"),
        this.options = u,
        this.format = u?.interpolation?.format || (s => s),
        this.init(u)
    }
    init(u={}) {
        u.interpolation || (u.interpolation = {
            escapeValue: !0
        });
        const {escape: s, escapeValue: r, useRawValueToEscape: o, prefix: d, prefixEscaped: h, suffix: p, suffixEscaped: y, formatSeparator: g, unescapeSuffix: E, unescapePrefix: v, nestingPrefix: O, nestingPrefixEscaped: N, nestingSuffix: _, nestingSuffixEscaped: Y, nestingOptionsSeparator: B, maxReplaces: Q, alwaysFormat: V} = u.interpolation;
        this.escape = s !== void 0 ? s : f0,
        this.escapeValue = r !== void 0 ? r : !0,
        this.useRawValueToEscape = o !== void 0 ? o : !1,
        this.prefix = d ? Ba(d) : h || "{{",
        this.suffix = p ? Ba(p) : y || "}}",
        this.formatSeparator = g || ",",
        this.unescapePrefix = E ? "" : v || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : E || "",
        this.nestingPrefix = O ? Ba(O) : N || Ba("$t("),
        this.nestingSuffix = _ ? Ba(_) : Y || Ba(")"),
        this.nestingOptionsSeparator = B || ",",
        this.maxReplaces = Q || 1e3,
        this.alwaysFormat = V !== void 0 ? V : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const u = (s, r) => s?.source === r ? (s.lastIndex = 0,
        s) : new RegExp(r,"g");
        this.regexp = u(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = u(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = u(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(u, s, r, o) {
        let d, h, p;
        const y = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , g = N => {
            if (N.indexOf(this.formatSeparator) < 0) {
                const Q = Mh(s, y, N, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(Q, void 0, r, {
                    ...o,
                    ...s,
                    interpolationkey: N
                }) : Q
            }
            const _ = N.split(this.formatSeparator)
              , Y = _.shift().trim()
              , B = _.join(this.formatSeparator).trim();
            return this.format(Mh(s, y, Y, this.options.keySeparator, this.options.ignoreJSONStructure), B, r, {
                ...o,
                ...s,
                interpolationkey: Y
            })
        }
        ;
        this.resetRegExp();
        const E = o?.missingInterpolationHandler || this.options.missingInterpolationHandler
          , v = o?.interpolation?.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: N => kr(N)
        }, {
            regex: this.regexp,
            safeValue: N => this.escapeValue ? kr(this.escape(N)) : kr(N)
        }].forEach(N => {
            for (p = 0; d = N.regex.exec(u); ) {
                const _ = d[1].trim();
                if (h = g(_),
                h === void 0)
                    if (typeof E == "function") {
                        const B = E(u, d, o);
                        h = I(B) ? B : ""
                    } else if (o && Object.prototype.hasOwnProperty.call(o, _))
                        h = "";
                    else if (v) {
                        h = d[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${_} for interpolating ${u}`),
                        h = "";
                else
                    !I(h) && !this.useRawValueToEscape && (h = Eh(h));
                const Y = N.safeValue(h);
                if (u = u.replace(d[0], Y),
                v ? (N.regex.lastIndex += h.length,
                N.regex.lastIndex -= d[0].length) : N.regex.lastIndex = 0,
                p++,
                p >= this.maxReplaces)
                    break
            }
        }
        ),
        u
    }
    nest(u, s, r={}) {
        let o, d, h;
        const p = (y, g) => {
            const E = this.nestingOptionsSeparator;
            if (y.indexOf(E) < 0)
                return y;
            const v = y.split(new RegExp(`${E}[ ]*{`));
            let O = `{${v[1]}`;
            y = v[0],
            O = this.interpolate(O, h);
            const N = O.match(/'/g)
              , _ = O.match(/"/g);
            ((N?.length ?? 0) % 2 === 0 && !_ || _.length % 2 !== 0) && (O = O.replace(/'/g, '"'));
            try {
                h = JSON.parse(O),
                g && (h = {
                    ...g,
                    ...h
                })
            } catch (Y) {
                return this.logger.warn(`failed parsing options string in nesting for key ${y}`, Y),
                `${y}${E}${O}`
            }
            return h.defaultValue && h.defaultValue.indexOf(this.prefix) > -1 && delete h.defaultValue,
            y
        }
        ;
        for (; o = this.nestingRegexp.exec(u); ) {
            let y = [];
            h = {
                ...r
            },
            h = h.replace && !I(h.replace) ? h.replace : h,
            h.applyPostProcessor = !1,
            delete h.defaultValue;
            const g = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
            if (g !== -1 && (y = o[1].slice(g).split(this.formatSeparator).map(E => E.trim()).filter(Boolean),
            o[1] = o[1].slice(0, g)),
            d = s(p.call(this, o[1].trim(), h), h),
            d && o[0] === u && !I(d))
                return d;
            I(d) || (d = Eh(d)),
            d || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${u}`),
            d = ""),
            y.length && (d = y.reduce( (E, v) => this.format(E, v, r.lng, {
                ...r,
                interpolationkey: o[1].trim()
            }), d.trim())),
            u = u.replace(o[0], d),
            this.regexp.lastIndex = 0
        }
        return u
    }
}
const S0 = c => {
    let u = c.toLowerCase().trim();
    const s = {};
    if (c.indexOf("(") > -1) {
        const r = c.split("(");
        u = r[0].toLowerCase().trim();
        const o = r[1].substring(0, r[1].length - 1);
        u === "currency" && o.indexOf(":") < 0 ? s.currency || (s.currency = o.trim()) : u === "relativetime" && o.indexOf(":") < 0 ? s.range || (s.range = o.trim()) : o.split(";").forEach(h => {
            if (h) {
                const [p,...y] = h.split(":")
                  , g = y.join(":").trim().replace(/^'+|'+$/g, "")
                  , E = p.trim();
                s[E] || (s[E] = g),
                g === "false" && (s[E] = !1),
                g === "true" && (s[E] = !0),
                isNaN(g) || (s[E] = parseInt(g, 10))
            }
        }
        )
    }
    return {
        formatName: u,
        formatOptions: s
    }
}
  , Uh = c => {
    const u = {};
    return (s, r, o) => {
        let d = o;
        o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (d = {
            ...d,
            [o.interpolationkey]: void 0
        });
        const h = r + JSON.stringify(d);
        let p = u[h];
        return p || (p = c(Qn(r), o),
        u[h] = p),
        p(s)
    }
}
  , x0 = c => (u, s, r) => c(Qn(s), r)(u);
class E0 {
    constructor(u={}) {
        this.logger = Gt.create("formatter"),
        this.options = u,
        this.init(u)
    }
    init(u, s={
        interpolation: {}
    }) {
        this.formatSeparator = s.interpolation.formatSeparator || ",";
        const r = s.cacheInBuiltFormats ? Uh : x0;
        this.formats = {
            number: r( (o, d) => {
                const h = new Intl.NumberFormat(o,{
                    ...d
                });
                return p => h.format(p)
            }
            ),
            currency: r( (o, d) => {
                const h = new Intl.NumberFormat(o,{
                    ...d,
                    style: "currency"
                });
                return p => h.format(p)
            }
            ),
            datetime: r( (o, d) => {
                const h = new Intl.DateTimeFormat(o,{
                    ...d
                });
                return p => h.format(p)
            }
            ),
            relativetime: r( (o, d) => {
                const h = new Intl.RelativeTimeFormat(o,{
                    ...d
                });
                return p => h.format(p, d.range || "day")
            }
            ),
            list: r( (o, d) => {
                const h = new Intl.ListFormat(o,{
                    ...d
                });
                return p => h.format(p)
            }
            )
        }
    }
    add(u, s) {
        this.formats[u.toLowerCase().trim()] = s
    }
    addCached(u, s) {
        this.formats[u.toLowerCase().trim()] = Uh(s)
    }
    format(u, s, r, o={}) {
        const d = s.split(this.formatSeparator);
        if (d.length > 1 && d[0].indexOf("(") > 1 && d[0].indexOf(")") < 0 && d.find(p => p.indexOf(")") > -1)) {
            const p = d.findIndex(y => y.indexOf(")") > -1);
            d[0] = [d[0], ...d.splice(1, p)].join(this.formatSeparator)
        }
        return d.reduce( (p, y) => {
            const {formatName: g, formatOptions: E} = S0(y);
            if (this.formats[g]) {
                let v = p;
                try {
                    const O = o?.formatParams?.[o.interpolationkey] || {}
                      , N = O.locale || O.lng || o.locale || o.lng || r;
                    v = this.formats[g](p, N, {
                        ...E,
                        ...o,
                        ...O
                    })
                } catch (O) {
                    this.logger.warn(O)
                }
                return v
            } else
                this.logger.warn(`there was no format function for ${g}`);
            return p
        }
        , u)
    }
}
const T0 = (c, u) => {
    c.pending[u] !== void 0 && (delete c.pending[u],
    c.pendingCount--)
}
;
class O0 extends Tu {
    constructor(u, s, r, o={}) {
        super(),
        this.backend = u,
        this.store = s,
        this.services = r,
        this.languageUtils = r.languageUtils,
        this.options = o,
        this.logger = Gt.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = o.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5,
        this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend?.init?.(r, o.backend, o)
    }
    queueLoad(u, s, r, o) {
        const d = {}
          , h = {}
          , p = {}
          , y = {};
        return u.forEach(g => {
            let E = !0;
            s.forEach(v => {
                const O = `${g}|${v}`;
                !r.reload && this.store.hasResourceBundle(g, v) ? this.state[O] = 2 : this.state[O] < 0 || (this.state[O] === 1 ? h[O] === void 0 && (h[O] = !0) : (this.state[O] = 1,
                E = !1,
                h[O] === void 0 && (h[O] = !0),
                d[O] === void 0 && (d[O] = !0),
                y[v] === void 0 && (y[v] = !0)))
            }
            ),
            E || (p[g] = !0)
        }
        ),
        (Object.keys(d).length || Object.keys(h).length) && this.queue.push({
            pending: h,
            pendingCount: Object.keys(h).length,
            loaded: {},
            errors: [],
            callback: o
        }),
        {
            toLoad: Object.keys(d),
            pending: Object.keys(h),
            toLoadLanguages: Object.keys(p),
            toLoadNamespaces: Object.keys(y)
        }
    }
    loaded(u, s, r) {
        const o = u.split("|")
          , d = o[0]
          , h = o[1];
        s && this.emit("failedLoading", d, h, s),
        !s && r && this.store.addResourceBundle(d, h, r, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[u] = s ? -1 : 2,
        s && r && (this.state[u] = 0);
        const p = {};
        this.queue.forEach(y => {
            r0(y.loaded, [d], h),
            T0(y, u),
            s && y.errors.push(s),
            y.pendingCount === 0 && !y.done && (Object.keys(y.loaded).forEach(g => {
                p[g] || (p[g] = {});
                const E = y.loaded[g];
                E.length && E.forEach(v => {
                    p[g][v] === void 0 && (p[g][v] = !0)
                }
                )
            }
            ),
            y.done = !0,
            y.errors.length ? y.callback(y.errors) : y.callback())
        }
        ),
        this.emit("loaded", p),
        this.queue = this.queue.filter(y => !y.done)
    }
    read(u, s, r, o=0, d=this.retryTimeout, h) {
        if (!u.length)
            return h(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: u,
                ns: s,
                fcName: r,
                tried: o,
                wait: d,
                callback: h
            });
            return
        }
        this.readingCalls++;
        const p = (g, E) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const v = this.waitingReads.shift();
                this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback)
            }
            if (g && E && o < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, u, s, r, o + 1, d * 2, h)
                }
                , d);
                return
            }
            h(g, E)
        }
          , y = this.backend[r].bind(this.backend);
        if (y.length === 2) {
            try {
                const g = y(u, s);
                g && typeof g.then == "function" ? g.then(E => p(null, E)).catch(p) : p(null, g)
            } catch (g) {
                p(g)
            }
            return
        }
        return y(u, s, p)
    }
    prepareLoading(u, s, r={}, o) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            o && o();
        I(u) && (u = this.languageUtils.toResolveHierarchy(u)),
        I(s) && (s = [s]);
        const d = this.queueLoad(u, s, r, o);
        if (!d.toLoad.length)
            return d.pending.length || o(),
            null;
        d.toLoad.forEach(h => {
            this.loadOne(h)
        }
        )
    }
    load(u, s, r) {
        this.prepareLoading(u, s, {}, r)
    }
    reload(u, s, r) {
        this.prepareLoading(u, s, {
            reload: !0
        }, r)
    }
    loadOne(u, s="") {
        const r = u.split("|")
          , o = r[0]
          , d = r[1];
        this.read(o, d, "read", void 0, void 0, (h, p) => {
            h && this.logger.warn(`${s}loading namespace ${d} for language ${o} failed`, h),
            !h && p && this.logger.log(`${s}loaded namespace ${d} for language ${o}`, p),
            this.loaded(u, h, p)
        }
        )
    }
    saveMissing(u, s, r, o, d, h={}, p= () => {}
    ) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(s)) {
            this.logger.warn(`did not save key "${r}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if (this.backend?.create) {
                const y = {
                    ...h,
                    isUpdate: d
                }
                  , g = this.backend.create.bind(this.backend);
                if (g.length < 6)
                    try {
                        let E;
                        g.length === 5 ? E = g(u, s, r, o, y) : E = g(u, s, r, o),
                        E && typeof E.then == "function" ? E.then(v => p(null, v)).catch(p) : p(null, E)
                    } catch (E) {
                        p(E)
                    }
                else
                    g(u, s, r, o, p, y)
            }
            !u || !u[0] || this.store.addResource(u[0], s, r, o)
        }
    }
}
const wh = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: c => {
        let u = {};
        if (typeof c[1] == "object" && (u = c[1]),
        I(c[1]) && (u.defaultValue = c[1]),
        I(c[2]) && (u.tDescription = c[2]),
        typeof c[2] == "object" || typeof c[3] == "object") {
            const s = c[3] || c[2];
            Object.keys(s).forEach(r => {
                u[r] = s[r]
            }
            )
        }
        return u
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: c => c,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
  , Lh = c => (I(c.ns) && (c.ns = [c.ns]),
I(c.fallbackLng) && (c.fallbackLng = [c.fallbackLng]),
I(c.fallbackNS) && (c.fallbackNS = [c.fallbackNS]),
c.supportedLngs?.indexOf?.("cimode") < 0 && (c.supportedLngs = c.supportedLngs.concat(["cimode"])),
typeof c.initImmediate == "boolean" && (c.initAsync = c.initImmediate),
c)
  , gu = () => {}
  , z0 = c => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(c)).forEach(s => {
        typeof c[s] == "function" && (c[s] = c[s].bind(c))
    }
    )
}
;
class Xn extends Tu {
    constructor(u={}, s) {
        if (super(),
        this.options = Lh(u),
        this.services = {},
        this.logger = Gt,
        this.modules = {
            external: []
        },
        z0(this),
        s && !this.isInitialized && !u.isClone) {
            if (!this.options.initAsync)
                return this.init(u, s),
                this;
            setTimeout( () => {
                this.init(u, s)
            }
            , 0)
        }
    }
    init(u={}, s) {
        this.isInitializing = !0,
        typeof u == "function" && (s = u,
        u = {}),
        u.defaultNS == null && u.ns && (I(u.ns) ? u.defaultNS = u.ns : u.ns.indexOf("translation") < 0 && (u.defaultNS = u.ns[0]));
        const r = wh();
        this.options = {
            ...r,
            ...this.options,
            ...Lh(u)
        },
        this.options.interpolation = {
            ...r.interpolation,
            ...this.options.interpolation
        },
        u.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = u.keySeparator),
        u.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = u.nsSeparator);
        const o = g => g ? typeof g == "function" ? new g : g : null;
        if (!this.options.isClone) {
            this.modules.logger ? Gt.init(o(this.modules.logger), this.options) : Gt.init(null, this.options);
            let g;
            this.modules.formatter ? g = this.modules.formatter : g = E0;
            const E = new Nh(this.options);
            this.store = new Ah(this.options.resources,this.options);
            const v = this.services;
            v.logger = Gt,
            v.resourceStore = this.store,
            v.languageUtils = E,
            v.pluralResolver = new v0(E,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),
            g && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (v.formatter = o(g),
            v.formatter.init && v.formatter.init(v, this.options),
            this.options.interpolation.format = v.formatter.format.bind(v.formatter)),
            v.interpolator = new b0(this.options),
            v.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            v.backendConnector = new O0(o(this.modules.backend),v.resourceStore,v,this.options),
            v.backendConnector.on("*", (N, ..._) => {
                this.emit(N, ..._)
            }
            ),
            this.modules.languageDetector && (v.languageDetector = o(this.modules.languageDetector),
            v.languageDetector.init && v.languageDetector.init(v, this.options.detection, this.options)),
            this.modules.i18nFormat && (v.i18nFormat = o(this.modules.i18nFormat),
            v.i18nFormat.init && v.i18nFormat.init(this)),
            this.translator = new xu(this.services,this.options),
            this.translator.on("*", (N, ..._) => {
                this.emit(N, ..._)
            }
            ),
            this.modules.external.forEach(N => {
                N.init && N.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        s || (s = gu),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(g => {
            this[g] = (...E) => this.store[g](...E)
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(g => {
            this[g] = (...E) => (this.store[g](...E),
            this)
        }
        );
        const p = Hn()
          , y = () => {
            const g = (E, v) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                p.resolve(v),
                s(E, v)
            }
            ;
            if (this.languages && !this.isInitialized)
                return g(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, g)
        }
        ;
        return this.options.resources || !this.options.initAsync ? y() : setTimeout(y, 0),
        p
    }
    loadResources(u, s=gu) {
        let r = s;
        const o = I(u) ? u : this.language;
        if (typeof u == "function" && (r = u),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (o?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const d = []
              , h = p => {
                if (!p || p === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(p).forEach(g => {
                    g !== "cimode" && d.indexOf(g) < 0 && d.push(g)
                }
                )
            }
            ;
            o ? h(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y => h(y)),
            this.options.preload?.forEach?.(p => h(p)),
            this.services.backendConnector.load(d, this.options.ns, p => {
                !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                r(p)
            }
            )
        } else
            r(null)
    }
    reloadResources(u, s, r) {
        const o = Hn();
        return typeof u == "function" && (r = u,
        u = void 0),
        typeof s == "function" && (r = s,
        s = void 0),
        u || (u = this.languages),
        s || (s = this.options.ns),
        r || (r = gu),
        this.services.backendConnector.reload(u, s, d => {
            o.resolve(),
            r(d)
        }
        ),
        o
    }
    use(u) {
        if (!u)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!u.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return u.type === "backend" && (this.modules.backend = u),
        (u.type === "logger" || u.log && u.warn && u.error) && (this.modules.logger = u),
        u.type === "languageDetector" && (this.modules.languageDetector = u),
        u.type === "i18nFormat" && (this.modules.i18nFormat = u),
        u.type === "postProcessor" && tm.addPostProcessor(u),
        u.type === "formatter" && (this.modules.formatter = u),
        u.type === "3rdParty" && this.modules.external.push(u),
        this
    }
    setResolvedLanguage(u) {
        if (!(!u || !this.languages) && !(["cimode", "dev"].indexOf(u) > -1)) {
            for (let s = 0; s < this.languages.length; s++) {
                const r = this.languages[s];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(u) < 0 && this.store.hasLanguageSomeTranslations(u) && (this.resolvedLanguage = u,
            this.languages.unshift(u))
        }
    }
    changeLanguage(u, s) {
        this.isLanguageChangingTo = u;
        const r = Hn();
        this.emit("languageChanging", u);
        const o = p => {
            this.language = p,
            this.languages = this.services.languageUtils.toResolveHierarchy(p),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(p)
        }
          , d = (p, y) => {
            y ? this.isLanguageChangingTo === u && (o(y),
            this.translator.changeLanguage(y),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", y),
            this.logger.log("languageChanged", y)) : this.isLanguageChangingTo = void 0,
            r.resolve( (...g) => this.t(...g)),
            s && s(p, (...g) => this.t(...g))
        }
          , h = p => {
            !u && !p && this.services.languageDetector && (p = []);
            const y = I(p) ? p : p && p[0]
              , g = this.store.hasLanguageSomeTranslations(y) ? y : this.services.languageUtils.getBestMatchFromCodes(I(p) ? [p] : p);
            g && (this.language || o(g),
            this.translator.language || this.translator.changeLanguage(g),
            this.services.languageDetector?.cacheUserLanguage?.(g)),
            this.loadResources(g, E => {
                d(E, g)
            }
            )
        }
        ;
        return !u && this.services.languageDetector && !this.services.languageDetector.async ? h(this.services.languageDetector.detect()) : !u && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(h) : this.services.languageDetector.detect(h) : h(u),
        r
    }
    getFixedT(u, s, r) {
        const o = (d, h, ...p) => {
            let y;
            typeof h != "object" ? y = this.options.overloadTranslationOptionHandler([d, h].concat(p)) : y = {
                ...h
            },
            y.lng = y.lng || o.lng,
            y.lngs = y.lngs || o.lngs,
            y.ns = y.ns || o.ns,
            y.keyPrefix !== "" && (y.keyPrefix = y.keyPrefix || r || o.keyPrefix);
            const g = this.options.keySeparator || ".";
            let E;
            return y.keyPrefix && Array.isArray(d) ? E = d.map(v => (typeof v == "function" && (v = ac(v, h)),
            `${y.keyPrefix}${g}${v}`)) : (typeof d == "function" && (d = ac(d, h)),
            E = y.keyPrefix ? `${y.keyPrefix}${g}${d}` : d),
            this.t(E, y)
        }
        ;
        return I(u) ? o.lng = u : o.lngs = u,
        o.ns = s,
        o.keyPrefix = r,
        o
    }
    t(...u) {
        return this.translator?.translate(...u)
    }
    exists(...u) {
        return this.translator?.exists(...u)
    }
    setDefaultNamespace(u) {
        this.options.defaultNS = u
    }
    hasLoadedNamespace(u, s={}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const r = s.lng || this.resolvedLanguage || this.languages[0]
          , o = this.options ? this.options.fallbackLng : !1
          , d = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const h = (p, y) => {
            const g = this.services.backendConnector.state[`${p}|${y}`];
            return g === -1 || g === 0 || g === 2
        }
        ;
        if (s.precheck) {
            const p = s.precheck(this, h);
            if (p !== void 0)
                return p
        }
        return !!(this.hasResourceBundle(r, u) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || h(r, u) && (!o || h(d, u)))
    }
    loadNamespaces(u, s) {
        const r = Hn();
        return this.options.ns ? (I(u) && (u = [u]),
        u.forEach(o => {
            this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
        }
        ),
        this.loadResources(o => {
            r.resolve(),
            s && s(o)
        }
        ),
        r) : (s && s(),
        Promise.resolve())
    }
    loadLanguages(u, s) {
        const r = Hn();
        I(u) && (u = [u]);
        const o = this.options.preload || []
          , d = u.filter(h => o.indexOf(h) < 0 && this.services.languageUtils.isSupportedCode(h));
        return d.length ? (this.options.preload = o.concat(d),
        this.loadResources(h => {
            r.resolve(),
            s && s(h)
        }
        ),
        r) : (s && s(),
        Promise.resolve())
    }
    dir(u) {
        if (u || (u = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)),
        !u)
            return "rtl";
        try {
            const o = new Intl.Locale(u);
            if (o && o.getTextInfo) {
                const d = o.getTextInfo();
                if (d && d.direction)
                    return d.direction
            }
        } catch {}
        const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , r = this.services?.languageUtils || new Nh(wh());
        return u.toLowerCase().indexOf("-latn") > 1 ? "ltr" : s.indexOf(r.getLanguagePartFromCode(u)) > -1 || u.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(u={}, s) {
        return new Xn(u,s)
    }
    cloneInstance(u={}, s=gu) {
        const r = u.forkResourceStore;
        r && delete u.forkResourceStore;
        const o = {
            ...this.options,
            ...u,
            isClone: !0
        }
          , d = new Xn(o);
        if ((u.debug !== void 0 || u.prefix !== void 0) && (d.logger = d.logger.clone(u)),
        ["store", "services", "language"].forEach(p => {
            d[p] = this[p]
        }
        ),
        d.services = {
            ...this.services
        },
        d.services.utils = {
            hasLoadedNamespace: d.hasLoadedNamespace.bind(d)
        },
        r) {
            const p = Object.keys(this.store.data).reduce( (y, g) => (y[g] = {
                ...this.store.data[g]
            },
            y[g] = Object.keys(y[g]).reduce( (E, v) => (E[v] = {
                ...y[g][v]
            },
            E), y[g]),
            y), {});
            d.store = new Ah(p,o),
            d.services.resourceStore = d.store
        }
        return d.translator = new xu(d.services,o),
        d.translator.on("*", (p, ...y) => {
            d.emit(p, ...y)
        }
        ),
        d.init(o, s),
        d.translator.options = o,
        d.translator.backendConnector.services.utils = {
            hasLoadedNamespace: d.hasLoadedNamespace.bind(d)
        },
        d
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const We = Xn.createInstance();
We.createInstance = Xn.createInstance;
We.createInstance;
We.dir;
We.init;
We.loadResources;
We.reloadResources;
We.use;
We.changeLanguage;
We.getFixedT;
We.t;
We.exists;
We.setDefaultNamespace;
We.hasLoadedNamespace;
We.loadNamespaces;
We.loadLanguages;
const A0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , R0 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , C0 = c => R0[c]
  , N0 = c => c.replace(A0, C0);
let jh = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: N0
};
const D0 = (c={}) => {
    jh = {
        ...jh,
        ...c
    }
}
  , _0 = {
    type: "3rdParty",
    init(c) {
        D0(c.options.react)
    }
}
  , M0 = U.createContext();
function U0({i18n: c, defaultNS: u, children: s}) {
    const r = U.useMemo( () => ({
        i18n: c,
        defaultNS: u
    }), [c, u]);
    return U.createElement(M0.Provider, {
        value: r
    }, s)
}
const {slice: w0, forEach: L0} = [];
function j0(c) {
    return L0.call(w0.call(arguments, 1), u => {
        if (u)
            for (const s in u)
                c[s] === void 0 && (c[s] = u[s])
    }
    ),
    c
}
function H0(c) {
    return typeof c != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(s => s.test(c))
}
const Hh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
  , B0 = function(c, u) {
    const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        path: "/"
    }
      , o = encodeURIComponent(u);
    let d = `${c}=${o}`;
    if (r.maxAge > 0) {
        const h = r.maxAge - 0;
        if (Number.isNaN(h))
            throw new Error("maxAge should be a Number");
        d += `; Max-Age=${Math.floor(h)}`
    }
    if (r.domain) {
        if (!Hh.test(r.domain))
            throw new TypeError("option domain is invalid");
        d += `; Domain=${r.domain}`
    }
    if (r.path) {
        if (!Hh.test(r.path))
            throw new TypeError("option path is invalid");
        d += `; Path=${r.path}`
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
        d += `; Expires=${r.expires.toUTCString()}`
    }
    if (r.httpOnly && (d += "; HttpOnly"),
    r.secure && (d += "; Secure"),
    r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            d += "; SameSite=Strict";
            break;
        case "lax":
            d += "; SameSite=Lax";
            break;
        case "strict":
            d += "; SameSite=Strict";
            break;
        case "none":
            d += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return r.partitioned && (d += "; Partitioned"),
    d
}
  , Bh = {
    create(c, u, s, r) {
        let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            path: "/",
            sameSite: "strict"
        };
        s && (o.expires = new Date,
        o.expires.setTime(o.expires.getTime() + s * 60 * 1e3)),
        r && (o.domain = r),
        document.cookie = B0(c, u, o)
    },
    read(c) {
        const u = `${c}=`
          , s = document.cookie.split(";");
        for (let r = 0; r < s.length; r++) {
            let o = s[r];
            for (; o.charAt(0) === " "; )
                o = o.substring(1, o.length);
            if (o.indexOf(u) === 0)
                return o.substring(u.length, o.length)
        }
        return null
    },
    remove(c, u) {
        this.create(c, "", -1, u)
    }
};
var q0 = {
    name: "cookie",
    lookup(c) {
        let {lookupCookie: u} = c;
        if (u && typeof document < "u")
            return Bh.read(u) || void 0
    },
    cacheUserLanguage(c, u) {
        let {lookupCookie: s, cookieMinutes: r, cookieDomain: o, cookieOptions: d} = u;
        s && typeof document < "u" && Bh.create(s, c, r, o, d)
    }
}
  , Y0 = {
    name: "querystring",
    lookup(c) {
        let {lookupQuerystring: u} = c, s;
        if (typeof window < "u") {
            let {search: r} = window.location;
            !window.location.search && window.location.hash?.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
            const d = r.substring(1).split("&");
            for (let h = 0; h < d.length; h++) {
                const p = d[h].indexOf("=");
                p > 0 && d[h].substring(0, p) === u && (s = d[h].substring(p + 1))
            }
        }
        return s
    }
}
  , G0 = {
    name: "hash",
    lookup(c) {
        let {lookupHash: u, lookupFromHashIndex: s} = c, r;
        if (typeof window < "u") {
            const {hash: o} = window.location;
            if (o && o.length > 2) {
                const d = o.substring(1);
                if (u) {
                    const h = d.split("&");
                    for (let p = 0; p < h.length; p++) {
                        const y = h[p].indexOf("=");
                        y > 0 && h[p].substring(0, y) === u && (r = h[p].substring(y + 1))
                    }
                }
                if (r)
                    return r;
                if (!r && s > -1) {
                    const h = o.match(/\/([a-zA-Z-]*)/g);
                    return Array.isArray(h) ? h[typeof s == "number" ? s : 0]?.replace("/", "") : void 0
                }
            }
        }
        return r
    }
};
let qa = null;
const qh = () => {
    if (qa !== null)
        return qa;
    try {
        if (qa = typeof window < "u" && window.localStorage !== null,
        !qa)
            return !1;
        const c = "i18next.translate.boo";
        window.localStorage.setItem(c, "foo"),
        window.localStorage.removeItem(c)
    } catch {
        qa = !1
    }
    return qa
}
;
var V0 = {
    name: "localStorage",
    lookup(c) {
        let {lookupLocalStorage: u} = c;
        if (u && qh())
            return window.localStorage.getItem(u) || void 0
    },
    cacheUserLanguage(c, u) {
        let {lookupLocalStorage: s} = u;
        s && qh() && window.localStorage.setItem(s, c)
    }
};
let Ya = null;
const Yh = () => {
    if (Ya !== null)
        return Ya;
    try {
        if (Ya = typeof window < "u" && window.sessionStorage !== null,
        !Ya)
            return !1;
        const c = "i18next.translate.boo";
        window.sessionStorage.setItem(c, "foo"),
        window.sessionStorage.removeItem(c)
    } catch {
        Ya = !1
    }
    return Ya
}
;
var Q0 = {
    name: "sessionStorage",
    lookup(c) {
        let {lookupSessionStorage: u} = c;
        if (u && Yh())
            return window.sessionStorage.getItem(u) || void 0
    },
    cacheUserLanguage(c, u) {
        let {lookupSessionStorage: s} = u;
        s && Yh() && window.sessionStorage.setItem(s, c)
    }
}
  , X0 = {
    name: "navigator",
    lookup(c) {
        const u = [];
        if (typeof navigator < "u") {
            const {languages: s, userLanguage: r, language: o} = navigator;
            if (s)
                for (let d = 0; d < s.length; d++)
                    u.push(s[d]);
            r && u.push(r),
            o && u.push(o)
        }
        return u.length > 0 ? u : void 0
    }
}
  , Z0 = {
    name: "htmlTag",
    lookup(c) {
        let {htmlTag: u} = c, s;
        const r = u || (typeof document < "u" ? document.documentElement : null);
        return r && typeof r.getAttribute == "function" && (s = r.getAttribute("lang")),
        s
    }
}
  , K0 = {
    name: "path",
    lookup(c) {
        let {lookupFromPathIndex: u} = c;
        if (typeof window > "u")
            return;
        const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        return Array.isArray(s) ? s[typeof u == "number" ? u : 0]?.replace("/", "") : void 0
    }
}
  , J0 = {
    name: "subdomain",
    lookup(c) {
        let {lookupFromSubdomainIndex: u} = c;
        const s = typeof u == "number" ? u + 1 : 1
          , r = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
        if (r)
            return r[s]
    }
};
let am = !1;
try {
    document.cookie,
    am = !0
} catch {}
const nm = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
am || nm.splice(1, 1);
const k0 = () => ({
    order: nm,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: c => c
});
class im {
    constructor(u) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector",
        this.detectors = {},
        this.init(u, s)
    }
    init() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            languageUtils: {}
        }
          , s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = u,
        this.options = j0(s, this.options || {}, k0()),
        typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = o => o.replace("-", "_")),
        this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
        this.i18nOptions = r,
        this.addDetector(q0),
        this.addDetector(Y0),
        this.addDetector(V0),
        this.addDetector(Q0),
        this.addDetector(X0),
        this.addDetector(Z0),
        this.addDetector(K0),
        this.addDetector(J0),
        this.addDetector(G0)
    }
    addDetector(u) {
        return this.detectors[u.name] = u,
        this
    }
    detect() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order
          , s = [];
        return u.forEach(r => {
            if (this.detectors[r]) {
                let o = this.detectors[r].lookup(this.options);
                o && typeof o == "string" && (o = [o]),
                o && (s = s.concat(o))
            }
        }
        ),
        s = s.filter(r => r != null && !H0(r)).map(r => this.options.convertDetectedLanguage(r)),
        this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null
    }
    cacheUserLanguage(u) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(u) > -1 || s.forEach(r => {
            this.detectors[r] && this.detectors[r].cacheUserLanguage(u, this.options)
        }
        ))
    }
}
im.type = "languageDetector";
const Gh = Object.assign({})
  , Gn = {};
Object.keys(Gh).forEach(c => {
    const u = c.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
    if (u) {
        const [,s] = u
          , r = Gh[c];
        Gn[s] || (Gn[s] = {
            translation: {}
        }),
        r.default && (Gn[s].translation = {
            ...Gn[s].translation,
            ...r.default
        })
    }
}
);
We.use(im).use(_0).init({
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    resources: Gn,
    interpolation: {
        escapeValue: !1
    }
});
var $r = {
    exports: {}
}
  , Bn = {}
  , Fr = {
    exports: {}
}
  , Wr = {};
var Vh;
function $0() {
    return Vh || (Vh = 1,
    (function(c) {
        function u(D, q) {
            var $ = D.length;
            D.push(q);
            e: for (; 0 < $; ) {
                var fe = $ - 1 >>> 1
                  , ge = D[fe];
                if (0 < o(ge, q))
                    D[fe] = q,
                    D[$] = ge,
                    $ = fe;
                else
                    break e
            }
        }
        function s(D) {
            return D.length === 0 ? null : D[0]
        }
        function r(D) {
            if (D.length === 0)
                return null;
            var q = D[0]
              , $ = D.pop();
            if ($ !== q) {
                D[0] = $;
                e: for (var fe = 0, ge = D.length, S = ge >>> 1; fe < S; ) {
                    var w = 2 * (fe + 1) - 1
                      , G = D[w]
                      , X = w + 1
                      , ee = D[X];
                    if (0 > o(G, $))
                        X < ge && 0 > o(ee, G) ? (D[fe] = ee,
                        D[X] = $,
                        fe = X) : (D[fe] = G,
                        D[w] = $,
                        fe = w);
                    else if (X < ge && 0 > o(ee, $))
                        D[fe] = ee,
                        D[X] = $,
                        fe = X;
                    else
                        break e
                }
            }
            return q
        }
        function o(D, q) {
            var $ = D.sortIndex - q.sortIndex;
            return $ !== 0 ? $ : D.id - q.id
        }
        if (c.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            c.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date
              , p = h.now();
            c.unstable_now = function() {
                return h.now() - p
            }
        }
        var y = []
          , g = []
          , E = 1
          , v = null
          , O = 3
          , N = !1
          , _ = !1
          , Y = !1
          , B = !1
          , Q = typeof setTimeout == "function" ? setTimeout : null
          , V = typeof clearTimeout == "function" ? clearTimeout : null
          , J = typeof setImmediate < "u" ? setImmediate : null;
        function ue(D) {
            for (var q = s(g); q !== null; ) {
                if (q.callback === null)
                    r(g);
                else if (q.startTime <= D)
                    r(g),
                    q.sortIndex = q.expirationTime,
                    u(y, q);
                else
                    break;
                q = s(g)
            }
        }
        function ce(D) {
            if (Y = !1,
            ue(D),
            !_)
                if (s(y) !== null)
                    _ = !0,
                    ye || (ye = !0,
                    Ie());
                else {
                    var q = s(g);
                    q !== null && lt(ce, q.startTime - D)
                }
        }
        var ye = !1
          , W = -1
          , Re = 5
          , Oe = -1;
        function Ne() {
            return B ? !0 : !(c.unstable_now() - Oe < Re)
        }
        function St() {
            if (B = !1,
            ye) {
                var D = c.unstable_now();
                Oe = D;
                var q = !0;
                try {
                    e: {
                        _ = !1,
                        Y && (Y = !1,
                        V(W),
                        W = -1),
                        N = !0;
                        var $ = O;
                        try {
                            t: {
                                for (ue(D),
                                v = s(y); v !== null && !(v.expirationTime > D && Ne()); ) {
                                    var fe = v.callback;
                                    if (typeof fe == "function") {
                                        v.callback = null,
                                        O = v.priorityLevel;
                                        var ge = fe(v.expirationTime <= D);
                                        if (D = c.unstable_now(),
                                        typeof ge == "function") {
                                            v.callback = ge,
                                            ue(D),
                                            q = !0;
                                            break t
                                        }
                                        v === s(y) && r(y),
                                        ue(D)
                                    } else
                                        r(y);
                                    v = s(y)
                                }
                                if (v !== null)
                                    q = !0;
                                else {
                                    var S = s(g);
                                    S !== null && lt(ce, S.startTime - D),
                                    q = !1
                                }
                            }
                            break e
                        } finally {
                            v = null,
                            O = $,
                            N = !1
                        }
                        q = void 0
                    }
                } finally {
                    q ? Ie() : ye = !1
                }
            }
        }
        var Ie;
        if (typeof J == "function")
            Ie = function() {
                J(St)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ve = new MessageChannel
              , Me = Ve.port2;
            Ve.port1.onmessage = St,
            Ie = function() {
                Me.postMessage(null)
            }
        } else
            Ie = function() {
                Q(St, 0)
            }
            ;
        function lt(D, q) {
            W = Q(function() {
                D(c.unstable_now())
            }, q)
        }
        c.unstable_IdlePriority = 5,
        c.unstable_ImmediatePriority = 1,
        c.unstable_LowPriority = 4,
        c.unstable_NormalPriority = 3,
        c.unstable_Profiling = null,
        c.unstable_UserBlockingPriority = 2,
        c.unstable_cancelCallback = function(D) {
            D.callback = null
        }
        ,
        c.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Re = 0 < D ? Math.floor(1e3 / D) : 5
        }
        ,
        c.unstable_getCurrentPriorityLevel = function() {
            return O
        }
        ,
        c.unstable_next = function(D) {
            switch (O) {
            case 1:
            case 2:
            case 3:
                var q = 3;
                break;
            default:
                q = O
            }
            var $ = O;
            O = q;
            try {
                return D()
            } finally {
                O = $
            }
        }
        ,
        c.unstable_requestPaint = function() {
            B = !0
        }
        ,
        c.unstable_runWithPriority = function(D, q) {
            switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
            }
            var $ = O;
            O = D;
            try {
                return q()
            } finally {
                O = $
            }
        }
        ,
        c.unstable_scheduleCallback = function(D, q, $) {
            var fe = c.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
            $ = typeof $ == "number" && 0 < $ ? fe + $ : fe) : $ = fe,
            D) {
            case 1:
                var ge = -1;
                break;
            case 2:
                ge = 250;
                break;
            case 5:
                ge = 1073741823;
                break;
            case 4:
                ge = 1e4;
                break;
            default:
                ge = 5e3
            }
            return ge = $ + ge,
            D = {
                id: E++,
                callback: q,
                priorityLevel: D,
                startTime: $,
                expirationTime: ge,
                sortIndex: -1
            },
            $ > fe ? (D.sortIndex = $,
            u(g, D),
            s(y) === null && D === s(g) && (Y ? (V(W),
            W = -1) : Y = !0,
            lt(ce, $ - fe))) : (D.sortIndex = ge,
            u(y, D),
            _ || N || (_ = !0,
            ye || (ye = !0,
            Ie()))),
            D
        }
        ,
        c.unstable_shouldYield = Ne,
        c.unstable_wrapCallback = function(D) {
            var q = O;
            return function() {
                var $ = O;
                O = q;
                try {
                    return D.apply(this, arguments)
                } finally {
                    O = $
                }
            }
        }
    }
    )(Wr)),
    Wr
}
var Qh;
function F0() {
    return Qh || (Qh = 1,
    Fr.exports = $0()),
    Fr.exports
}
var Ir = {
    exports: {}
}
  , Pe = {};
var Xh;
function W0() {
    if (Xh)
        return Pe;
    Xh = 1;
    var c = ic();
    function u(y) {
        var g = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var E = 2; E < arguments.length; E++)
                g += "&args[]=" + encodeURIComponent(arguments[E])
        }
        return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var r = {
        d: {
            f: s,
            r: function() {
                throw Error(u(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , o = Symbol.for("react.portal");
    function d(y, g, E) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: v == null ? null : "" + v,
            children: y,
            containerInfo: g,
            implementation: E
        }
    }
    var h = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(y, g) {
        if (y === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    Pe.createPortal = function(y, g) {
        var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(u(299));
        return d(y, g, null, E)
    }
    ,
    Pe.flushSync = function(y) {
        var g = h.T
          , E = r.p;
        try {
            if (h.T = null,
            r.p = 2,
            y)
                return y()
        } finally {
            h.T = g,
            r.p = E,
            r.d.f()
        }
    }
    ,
    Pe.preconnect = function(y, g) {
        typeof y == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        r.d.C(y, g))
    }
    ,
    Pe.prefetchDNS = function(y) {
        typeof y == "string" && r.d.D(y)
    }
    ,
    Pe.preinit = function(y, g) {
        if (typeof y == "string" && g && typeof g.as == "string") {
            var E = g.as
              , v = p(E, g.crossOrigin)
              , O = typeof g.integrity == "string" ? g.integrity : void 0
              , N = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            E === "style" ? r.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: v,
                integrity: O,
                fetchPriority: N
            }) : E === "script" && r.d.X(y, {
                crossOrigin: v,
                integrity: O,
                fetchPriority: N,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Pe.preinitModule = function(y, g) {
        if (typeof y == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var E = p(g.as, g.crossOrigin);
                    r.d.M(y, {
                        crossOrigin: E,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && r.d.M(y)
    }
    ,
    Pe.preload = function(y, g) {
        if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var E = g.as
              , v = p(E, g.crossOrigin);
            r.d.L(y, E, {
                crossOrigin: v,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    Pe.preloadModule = function(y, g) {
        if (typeof y == "string")
            if (g) {
                var E = p(g.as, g.crossOrigin);
                r.d.m(y, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: E,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                r.d.m(y)
    }
    ,
    Pe.requestFormReset = function(y) {
        r.d.r(y)
    }
    ,
    Pe.unstable_batchedUpdates = function(y, g) {
        return y(g)
    }
    ,
    Pe.useFormState = function(y, g, E) {
        return h.H.useFormState(y, g, E)
    }
    ,
    Pe.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    Pe.version = "19.2.3",
    Pe
}
var Zh;
function I0() {
    if (Zh)
        return Ir.exports;
    Zh = 1;
    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
            } catch (u) {
                console.error(u)
            }
    }
    return c(),
    Ir.exports = W0(),
    Ir.exports
}
var Kh;
function P0() {
    if (Kh)
        return Bn;
    Kh = 1;
    var c = F0()
      , u = ic()
      , s = I0();
    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function d(e) {
        var t = e
          , l = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (l = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function h(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function p(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function y(e) {
        if (d(e) !== e)
            throw Error(r(188))
    }
    function g(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e),
            t === null)
                throw Error(r(188));
            return t !== e ? null : e
        }
        for (var l = e, a = t; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var i = n.alternate;
            if (i === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === i.child) {
                for (i = n.child; i; ) {
                    if (i === l)
                        return y(n),
                        e;
                    if (i === a)
                        return y(n),
                        t;
                    i = i.sibling
                }
                throw Error(r(188))
            }
            if (l.return !== a.return)
                l = n,
                a = i;
            else {
                for (var f = !1, m = n.child; m; ) {
                    if (m === l) {
                        f = !0,
                        l = n,
                        a = i;
                        break
                    }
                    if (m === a) {
                        f = !0,
                        a = n,
                        l = i;
                        break
                    }
                    m = m.sibling
                }
                if (!f) {
                    for (m = i.child; m; ) {
                        if (m === l) {
                            f = !0,
                            l = i,
                            a = n;
                            break
                        }
                        if (m === a) {
                            f = !0,
                            a = i,
                            l = n;
                            break
                        }
                        m = m.sibling
                    }
                    if (!f)
                        throw Error(r(189))
                }
            }
            if (l.alternate !== a)
                throw Error(r(190))
        }
        if (l.tag !== 3)
            throw Error(r(188));
        return l.stateNode.current === l ? e : t
    }
    function E(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = E(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign
      , O = Symbol.for("react.element")
      , N = Symbol.for("react.transitional.element")
      , _ = Symbol.for("react.portal")
      , Y = Symbol.for("react.fragment")
      , B = Symbol.for("react.strict_mode")
      , Q = Symbol.for("react.profiler")
      , V = Symbol.for("react.consumer")
      , J = Symbol.for("react.context")
      , ue = Symbol.for("react.forward_ref")
      , ce = Symbol.for("react.suspense")
      , ye = Symbol.for("react.suspense_list")
      , W = Symbol.for("react.memo")
      , Re = Symbol.for("react.lazy")
      , Oe = Symbol.for("react.activity")
      , Ne = Symbol.for("react.memo_cache_sentinel")
      , St = Symbol.iterator;
    function Ie(e) {
        return e === null || typeof e != "object" ? null : (e = St && e[St] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Ve = Symbol.for("react.client.reference");
    function Me(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Ve ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case Y:
            return "Fragment";
        case Q:
            return "Profiler";
        case B:
            return "StrictMode";
        case ce:
            return "Suspense";
        case ye:
            return "SuspenseList";
        case Oe:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case _:
                return "Portal";
            case J:
                return e.displayName || "Context";
            case V:
                return (e._context.displayName || "Context") + ".Consumer";
            case ue:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case W:
                return t = e.displayName || null,
                t !== null ? t : Me(e.type) || "Memo";
            case Re:
                t = e._payload,
                e = e._init;
                try {
                    return Me(e(t))
                } catch {}
            }
        return null
    }
    var lt = Array.isArray
      , D = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , $ = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , fe = []
      , ge = -1;
    function S(e) {
        return {
            current: e
        }
    }
    function w(e) {
        0 > ge || (e.current = fe[ge],
        fe[ge] = null,
        ge--)
    }
    function G(e, t) {
        ge++,
        fe[ge] = e.current,
        e.current = t
    }
    var X = S(null)
      , ee = S(null)
      , ae = S(null)
      , pe = S(null);
    function et(e, t) {
        switch (G(ae, t),
        G(ee, e),
        G(X, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Bd(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Bd(t),
                e = qd(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        w(X),
        G(X, e)
    }
    function Ue() {
        w(X),
        w(ee),
        w(ae)
    }
    function Va(e) {
        e.memoizedState !== null && G(pe, e);
        var t = X.current
          , l = qd(t, e.type);
        t !== l && (G(ee, e),
        G(X, l))
    }
    function $n(e) {
        ee.current === e && (w(X),
        w(ee)),
        pe.current === e && (w(pe),
        Mn._currentValue = $)
    }
    var Ru, dc;
    function Ll(e) {
        if (Ru === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Ru = t && t[1] || "",
                dc = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ru + e + dc
    }
    var Cu = !1;
    function Nu(e, t) {
        if (!e || Cu)
            return "";
        Cu = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var j = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(j.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(j, [])
                                } catch (C) {
                                    var R = C
                                }
                                Reflect.construct(e, [], j)
                            } else {
                                try {
                                    j.call()
                                } catch (C) {
                                    R = C
                                }
                                e.call(j.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (C) {
                                R = C
                            }
                            (j = e()) && typeof j.catch == "function" && j.catch(function() {})
                        }
                    } catch (C) {
                        if (C && R && typeof C.stack == "string")
                            return [C.stack, R.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = a.DetermineComponentFrameRoot()
              , f = i[0]
              , m = i[1];
            if (f && m) {
                var b = f.split(`
`)
                  , A = m.split(`
`);
                for (n = a = 0; a < b.length && !b[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < A.length && !A[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === b.length || n === A.length)
                    for (a = b.length - 1,
                    n = A.length - 1; 1 <= a && 0 <= n && b[a] !== A[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (b[a] !== A[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || b[a] !== A[n]) {
                                    var M = `
` + b[a].replace(" at new ", " at ");
                                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)),
                                    M
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            Cu = !1,
            Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? Ll(l) : ""
    }
    function Cm(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Ll(e.type);
        case 16:
            return Ll("Lazy");
        case 13:
            return e.child !== t && t !== null ? Ll("Suspense Fallback") : Ll("Suspense");
        case 19:
            return Ll("SuspenseList");
        case 0:
        case 15:
            return Nu(e.type, !1);
        case 11:
            return Nu(e.type.render, !1);
        case 1:
            return Nu(e.type, !0);
        case 31:
            return Ll("Activity");
        default:
            return ""
        }
    }
    function hc(e) {
        try {
            var t = ""
              , l = null;
            do
                t += Cm(e, l),
                l = e,
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var Du = Object.prototype.hasOwnProperty
      , _u = c.unstable_scheduleCallback
      , Mu = c.unstable_cancelCallback
      , Nm = c.unstable_shouldYield
      , Dm = c.unstable_requestPaint
      , ot = c.unstable_now
      , _m = c.unstable_getCurrentPriorityLevel
      , mc = c.unstable_ImmediatePriority
      , gc = c.unstable_UserBlockingPriority
      , Fn = c.unstable_NormalPriority
      , Mm = c.unstable_LowPriority
      , pc = c.unstable_IdlePriority
      , Um = c.log
      , wm = c.unstable_setDisableYieldValue
      , Qa = null
      , ft = null;
    function cl(e) {
        if (typeof Um == "function" && wm(e),
        ft && typeof ft.setStrictMode == "function")
            try {
                ft.setStrictMode(Qa, e)
            } catch {}
    }
    var dt = Math.clz32 ? Math.clz32 : Hm
      , Lm = Math.log
      , jm = Math.LN2;
    function Hm(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Lm(e) / jm | 0) | 0
    }
    var Wn = 256
      , In = 262144
      , Pn = 4194304;
    function jl(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function ei(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , i = e.suspendedLanes
          , f = e.pingedLanes;
        e = e.warmLanes;
        var m = a & 134217727;
        return m !== 0 ? (a = m & ~i,
        a !== 0 ? n = jl(a) : (f &= m,
        f !== 0 ? n = jl(f) : l || (l = m & ~e,
        l !== 0 && (n = jl(l))))) : (m = a & ~i,
        m !== 0 ? n = jl(m) : f !== 0 ? n = jl(f) : l || (l = a & ~e,
        l !== 0 && (n = jl(l)))),
        n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n,
        l = t & -t,
        i >= l || i === 32 && (l & 4194048) !== 0) ? t : n
    }
    function Xa(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Bm(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function yc() {
        var e = Pn;
        return Pn <<= 1,
        (Pn & 62914560) === 0 && (Pn = 4194304),
        e
    }
    function Uu(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function Za(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function qm(e, t, l, a, n, i) {
        var f = e.pendingLanes;
        e.pendingLanes = l,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= l,
        e.entangledLanes &= l,
        e.errorRecoveryDisabledLanes &= l,
        e.shellSuspendCounter = 0;
        var m = e.entanglements
          , b = e.expirationTimes
          , A = e.hiddenUpdates;
        for (l = f & ~l; 0 < l; ) {
            var M = 31 - dt(l)
              , j = 1 << M;
            m[M] = 0,
            b[M] = -1;
            var R = A[M];
            if (R !== null)
                for (A[M] = null,
                M = 0; M < R.length; M++) {
                    var C = R[M];
                    C !== null && (C.lane &= -536870913)
                }
            l &= ~j
        }
        a !== 0 && vc(e, a, 0),
        i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t))
    }
    function vc(e, t, l) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var a = 31 - dt(t);
        e.entangledLanes |= t,
        e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
    }
    function bc(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
            var a = 31 - dt(l)
              , n = 1 << a;
            n & t | e[a] & t && (e[a] |= t),
            l &= ~n
        }
    }
    function Sc(e, t) {
        var l = t & -t;
        return l = (l & 42) !== 0 ? 1 : wu(l),
        (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    }
    function wu(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Lu(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function xc() {
        var e = q.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : rh(e.type))
    }
    function Ec(e, t) {
        var l = q.p;
        try {
            return q.p = e,
            t()
        } finally {
            q.p = l
        }
    }
    var ol = Math.random().toString(36).slice(2)
      , Ke = "__reactFiber$" + ol
      , at = "__reactProps$" + ol
      , ea = "__reactContainer$" + ol
      , ju = "__reactEvents$" + ol
      , Ym = "__reactListeners$" + ol
      , Gm = "__reactHandles$" + ol
      , Tc = "__reactResources$" + ol
      , Ka = "__reactMarker$" + ol;
    function Hu(e) {
        delete e[Ke],
        delete e[at],
        delete e[ju],
        delete e[Ym],
        delete e[Gm]
    }
    function ta(e) {
        var t = e[Ke];
        if (t)
            return t;
        for (var l = e.parentNode; l; ) {
            if (t = l[ea] || l[Ke]) {
                if (l = t.alternate,
                t.child !== null || l !== null && l.child !== null)
                    for (e = Kd(e); e !== null; ) {
                        if (l = e[Ke])
                            return l;
                        e = Kd(e)
                    }
                return t
            }
            e = l,
            l = e.parentNode
        }
        return null
    }
    function la(e) {
        if (e = e[Ke] || e[ea]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Ja(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(r(33))
    }
    function aa(e) {
        var t = e[Tc];
        return t || (t = e[Tc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Qe(e) {
        e[Ka] = !0
    }
    var Oc = new Set
      , zc = {};
    function Hl(e, t) {
        na(e, t),
        na(e + "Capture", t)
    }
    function na(e, t) {
        for (zc[e] = t,
        e = 0; e < t.length; e++)
            Oc.add(t[e])
    }
    var Vm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Ac = {}
      , Rc = {};
    function Qm(e) {
        return Du.call(Rc, e) ? !0 : Du.call(Ac, e) ? !1 : Vm.test(e) ? Rc[e] = !0 : (Ac[e] = !0,
        !1)
    }
    function ti(e, t, l) {
        if (Qm(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function li(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function Vt(e, t, l, a) {
        if (a === null)
            e.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(l);
                return
            }
            e.setAttributeNS(t, l, "" + a)
        }
    }
    function xt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Cc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Xm(e, t, l) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
              , i = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(f) {
                    l = "" + f,
                    i.call(this, f)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(f) {
                    l = "" + f
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Bu(e) {
        if (!e._valueTracker) {
            var t = Cc(e) ? "checked" : "value";
            e._valueTracker = Xm(e, t, "" + e[t])
        }
    }
    function Nc(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
          , a = "";
        return e && (a = Cc(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== l ? (t.setValue(e),
        !0) : !1
    }
    function ai(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Zm = /[\n"\\]/g;
    function Et(e) {
        return e.replace(Zm, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function qu(e, t, l, a, n, i, f, m) {
        e.name = "",
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"),
        t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xt(t)) : e.value !== "" + xt(t) && (e.value = "" + xt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"),
        t != null ? Yu(e, f, xt(t)) : l != null ? Yu(e, f, xt(l)) : a != null && e.removeAttribute("value"),
        n == null && i != null && (e.defaultChecked = !!i),
        n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"),
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + xt(m) : e.removeAttribute("name")
    }
    function Dc(e, t, l, a, n, i, f, m) {
        if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i),
        t != null || l != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
                Bu(e);
                return
            }
            l = l != null ? "" + xt(l) : "",
            t = t != null ? "" + xt(t) : l,
            m || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        e.checked = m ? e.checked : !!a,
        e.defaultChecked = !!a,
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f),
        Bu(e)
    }
    function Yu(e, t, l) {
        t === "number" && ai(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function ia(e, t, l, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var n = 0; n < l.length; n++)
                t["$" + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                n = t.hasOwnProperty("$" + e[l].value),
                e[l].selected !== n && (e[l].selected = n),
                n && a && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + xt(l),
            t = null,
            n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    e[n].selected = !0,
                    a && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function _c(e, t, l) {
        if (t != null && (t = "" + xt(t),
        t !== e.value && (e.value = t),
        l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + xt(l) : ""
    }
    function Mc(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null)
                    throw Error(r(92));
                if (lt(a)) {
                    if (1 < a.length)
                        throw Error(r(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            t = l
        }
        l = xt(t),
        e.defaultValue = l,
        a = e.textContent,
        a === l && a !== "" && a !== null && (e.value = a),
        Bu(e)
    }
    function ua(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Km = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Uc(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Km.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function wc(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(r(62));
        if (e = e.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var n in t)
                a = t[n],
                t.hasOwnProperty(n) && l[n] !== a && Uc(e, n, a)
        } else
            for (var i in t)
                t.hasOwnProperty(i) && Uc(e, i, t[i])
    }
    function Gu(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Jm = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , km = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ni(e) {
        return km.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Qt() {}
    var Vu = null;
    function Qu(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var sa = null
      , ra = null;
    function Lc(e) {
        var t = la(e);
        if (t && (e = t.stateNode)) {
            var l = e[at] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (qu(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                t = l.name,
                l.type === "radio" && t != null) {
                    for (l = e; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'),
                    t = 0; t < l.length; t++) {
                        var a = l[t];
                        if (a !== e && a.form === e.form) {
                            var n = a[at] || null;
                            if (!n)
                                throw Error(r(90));
                            qu(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (t = 0; t < l.length; t++)
                        a = l[t],
                        a.form === e.form && Nc(a)
                }
                break e;
            case "textarea":
                _c(e, l.value, l.defaultValue);
                break e;
            case "select":
                t = l.value,
                t != null && ia(e, !!l.multiple, t, !1)
            }
        }
    }
    var Xu = !1;
    function jc(e, t, l) {
        if (Xu)
            return e(t, l);
        Xu = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (Xu = !1,
            (sa !== null || ra !== null) && (Zi(),
            sa && (t = sa,
            e = ra,
            ra = sa = null,
            Lc(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Lc(e[t])
        }
    }
    function ka(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var a = l[at] || null;
        if (a === null)
            return null;
        l = a[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(r(231, t, typeof l));
        return l
    }
    var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Zu = !1;
    if (Xt)
        try {
            var $a = {};
            Object.defineProperty($a, "passive", {
                get: function() {
                    Zu = !0
                }
            }),
            window.addEventListener("test", $a, $a),
            window.removeEventListener("test", $a, $a)
        } catch {
            Zu = !1
        }
    var fl = null
      , Ku = null
      , ii = null;
    function Hc() {
        if (ii)
            return ii;
        var e, t = Ku, l = t.length, a, n = "value"in fl ? fl.value : fl.textContent, i = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++)
            ;
        var f = l - e;
        for (a = 1; a <= f && t[l - a] === n[i - a]; a++)
            ;
        return ii = n.slice(e, 1 < a ? 1 - a : void 0)
    }
    function ui(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function si() {
        return !0
    }
    function Bc() {
        return !1
    }
    function nt(e) {
        function t(l, a, n, i, f) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = i,
            this.target = f,
            this.currentTarget = null;
            for (var m in e)
                e.hasOwnProperty(m) && (l = e[m],
                this[m] = l ? l(i) : i[m]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? si : Bc,
            this.isPropagationStopped = Bc,
            this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = si)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = si)
            },
            persist: function() {},
            isPersistent: si
        }),
        t
    }
    var Bl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ri = nt(Bl), Fa = v({}, Bl, {
        view: 0,
        detail: 0
    }), $m = nt(Fa), Ju, ku, Wa, ci = v({}, Fa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Wa && (Wa && e.type === "mousemove" ? (Ju = e.screenX - Wa.screenX,
            ku = e.screenY - Wa.screenY) : ku = Ju = 0,
            Wa = e),
            Ju)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : ku
        }
    }), qc = nt(ci), Fm = v({}, ci, {
        dataTransfer: 0
    }), Wm = nt(Fm), Im = v({}, Fa, {
        relatedTarget: 0
    }), $u = nt(Im), Pm = v({}, Bl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), eg = nt(Pm), tg = v({}, Bl, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), lg = nt(tg), ag = v({}, Bl, {
        data: 0
    }), Yc = nt(ag), ng = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, ig = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ug = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function sg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ug[e]) ? !!t[e] : !1
    }
    function Fu() {
        return sg
    }
    var rg = v({}, Fa, {
        key: function(e) {
            if (e.key) {
                var t = ng[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = ui(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ig[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Fu,
        charCode: function(e) {
            return e.type === "keypress" ? ui(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , cg = nt(rg)
      , og = v({}, ci, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Gc = nt(og)
      , fg = v({}, Fa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fu
    })
      , dg = nt(fg)
      , hg = v({}, Bl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , mg = nt(hg)
      , gg = v({}, ci, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , pg = nt(gg)
      , yg = v({}, Bl, {
        newState: 0,
        oldState: 0
    })
      , vg = nt(yg)
      , bg = [9, 13, 27, 32]
      , Wu = Xt && "CompositionEvent"in window
      , Ia = null;
    Xt && "documentMode"in document && (Ia = document.documentMode);
    var Sg = Xt && "TextEvent"in window && !Ia
      , Vc = Xt && (!Wu || Ia && 8 < Ia && 11 >= Ia)
      , Qc = " "
      , Xc = !1;
    function Zc(e, t) {
        switch (e) {
        case "keyup":
            return bg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Kc(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var ca = !1;
    function xg(e, t) {
        switch (e) {
        case "compositionend":
            return Kc(t);
        case "keypress":
            return t.which !== 32 ? null : (Xc = !0,
            Qc);
        case "textInput":
            return e = t.data,
            e === Qc && Xc ? null : e;
        default:
            return null
        }
    }
    function Eg(e, t) {
        if (ca)
            return e === "compositionend" || !Wu && Zc(e, t) ? (e = Hc(),
            ii = Ku = fl = null,
            ca = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Vc && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Tg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Jc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Tg[e.type] : t === "textarea"
    }
    function kc(e, t, l, a) {
        sa ? ra ? ra.push(a) : ra = [a] : sa = a,
        t = Ii(t, "onChange"),
        0 < t.length && (l = new ri("onChange","change",null,l,a),
        e.push({
            event: l,
            listeners: t
        }))
    }
    var Pa = null
      , en = null;
    function Og(e) {
        Md(e, 0)
    }
    function oi(e) {
        var t = Ja(e);
        if (Nc(t))
            return e
    }
    function $c(e, t) {
        if (e === "change")
            return t
    }
    var Fc = !1;
    if (Xt) {
        var Iu;
        if (Xt) {
            var Pu = "oninput"in document;
            if (!Pu) {
                var Wc = document.createElement("div");
                Wc.setAttribute("oninput", "return;"),
                Pu = typeof Wc.oninput == "function"
            }
            Iu = Pu
        } else
            Iu = !1;
        Fc = Iu && (!document.documentMode || 9 < document.documentMode)
    }
    function Ic() {
        Pa && (Pa.detachEvent("onpropertychange", Pc),
        en = Pa = null)
    }
    function Pc(e) {
        if (e.propertyName === "value" && oi(en)) {
            var t = [];
            kc(t, en, e, Qu(e)),
            jc(Og, t)
        }
    }
    function zg(e, t, l) {
        e === "focusin" ? (Ic(),
        Pa = t,
        en = l,
        Pa.attachEvent("onpropertychange", Pc)) : e === "focusout" && Ic()
    }
    function Ag(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return oi(en)
    }
    function Rg(e, t) {
        if (e === "click")
            return oi(t)
    }
    function Cg(e, t) {
        if (e === "input" || e === "change")
            return oi(t)
    }
    function Ng(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var ht = typeof Object.is == "function" ? Object.is : Ng;
    function tn(e, t) {
        if (ht(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
          , a = Object.keys(t);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!Du.call(t, n) || !ht(e[n], t[n]))
                return !1
        }
        return !0
    }
    function eo(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function to(e, t) {
        var l = eo(e);
        e = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length,
                e <= t && a >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = eo(l)
        }
    }
    function lo(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lo(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function ao(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ai(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = ai(e.document)
        }
        return t
    }
    function es(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Dg = Xt && "documentMode"in document && 11 >= document.documentMode
      , oa = null
      , ts = null
      , ln = null
      , ls = !1;
    function no(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        ls || oa == null || oa !== ai(a) || (a = oa,
        "selectionStart"in a && es(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        ln && tn(ln, a) || (ln = a,
        a = Ii(ts, "onSelect"),
        0 < a.length && (t = new ri("onSelect","select",null,t,l),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = oa)))
    }
    function ql(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
        l["Webkit" + e] = "webkit" + t,
        l["Moz" + e] = "moz" + t,
        l
    }
    var fa = {
        animationend: ql("Animation", "AnimationEnd"),
        animationiteration: ql("Animation", "AnimationIteration"),
        animationstart: ql("Animation", "AnimationStart"),
        transitionrun: ql("Transition", "TransitionRun"),
        transitionstart: ql("Transition", "TransitionStart"),
        transitioncancel: ql("Transition", "TransitionCancel"),
        transitionend: ql("Transition", "TransitionEnd")
    }
      , as = {}
      , io = {};
    Xt && (io = document.createElement("div").style,
    "AnimationEvent"in window || (delete fa.animationend.animation,
    delete fa.animationiteration.animation,
    delete fa.animationstart.animation),
    "TransitionEvent"in window || delete fa.transitionend.transition);
    function Yl(e) {
        if (as[e])
            return as[e];
        if (!fa[e])
            return e;
        var t = fa[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in io)
                return as[e] = t[l];
        return e
    }
    var uo = Yl("animationend")
      , so = Yl("animationiteration")
      , ro = Yl("animationstart")
      , _g = Yl("transitionrun")
      , Mg = Yl("transitionstart")
      , Ug = Yl("transitioncancel")
      , co = Yl("transitionend")
      , oo = new Map
      , ns = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ns.push("scrollEnd");
    function Mt(e, t) {
        oo.set(e, t),
        Hl(t, [e])
    }
    var fi = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Tt = []
      , da = 0
      , is = 0;
    function di() {
        for (var e = da, t = is = da = 0; t < e; ) {
            var l = Tt[t];
            Tt[t++] = null;
            var a = Tt[t];
            Tt[t++] = null;
            var n = Tt[t];
            Tt[t++] = null;
            var i = Tt[t];
            if (Tt[t++] = null,
            a !== null && n !== null) {
                var f = a.pending;
                f === null ? n.next = n : (n.next = f.next,
                f.next = n),
                a.pending = n
            }
            i !== 0 && fo(l, n, i)
        }
    }
    function hi(e, t, l, a) {
        Tt[da++] = e,
        Tt[da++] = t,
        Tt[da++] = l,
        Tt[da++] = a,
        is |= a,
        e.lanes |= a,
        e = e.alternate,
        e !== null && (e.lanes |= a)
    }
    function us(e, t, l, a) {
        return hi(e, t, l, a),
        mi(e)
    }
    function Gl(e, t) {
        return hi(e, null, null, t),
        mi(e)
    }
    function fo(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, i = e.return; i !== null; )
            i.childLanes |= l,
            a = i.alternate,
            a !== null && (a.childLanes |= l),
            i.tag === 22 && (e = i.stateNode,
            e === null || e._visibility & 1 || (n = !0)),
            e = i,
            i = i.return;
        return e.tag === 3 ? (i = e.stateNode,
        n && t !== null && (n = 31 - dt(l),
        e = i.hiddenUpdates,
        a = e[n],
        a === null ? e[n] = [t] : a.push(t),
        t.lane = l | 536870912),
        i) : null
    }
    function mi(e) {
        if (50 < zn)
            throw zn = 0,
            gr = null,
            Error(r(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ha = {};
    function wg(e, t, l, a) {
        this.tag = e,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function mt(e, t, l, a) {
        return new wg(e,t,l,a)
    }
    function ss(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Zt(e, t) {
        var l = e.alternate;
        return l === null ? (l = mt(e.tag, t, e.key, e.mode),
        l.elementType = e.elementType,
        l.type = e.type,
        l.stateNode = e.stateNode,
        l.alternate = e,
        e.alternate = l) : (l.pendingProps = t,
        l.type = e.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = e.flags & 65011712,
        l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        l.sibling = e.sibling,
        l.index = e.index,
        l.ref = e.ref,
        l.refCleanup = e.refCleanup,
        l
    }
    function ho(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        e.type = l.type,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function gi(e, t, l, a, n, i) {
        var f = 0;
        if (a = e,
        typeof e == "function")
            ss(e) && (f = 1);
        else if (typeof e == "string")
            f = qp(e, l, X.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case Oe:
                return e = mt(31, l, t, n),
                e.elementType = Oe,
                e.lanes = i,
                e;
            case Y:
                return Vl(l.children, n, i, t);
            case B:
                f = 8,
                n |= 24;
                break;
            case Q:
                return e = mt(12, l, t, n | 2),
                e.elementType = Q,
                e.lanes = i,
                e;
            case ce:
                return e = mt(13, l, t, n),
                e.elementType = ce,
                e.lanes = i,
                e;
            case ye:
                return e = mt(19, l, t, n),
                e.elementType = ye,
                e.lanes = i,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case J:
                        f = 10;
                        break e;
                    case V:
                        f = 9;
                        break e;
                    case ue:
                        f = 11;
                        break e;
                    case W:
                        f = 14;
                        break e;
                    case Re:
                        f = 16,
                        a = null;
                        break e
                    }
                f = 29,
                l = Error(r(130, e === null ? "null" : typeof e, "")),
                a = null
            }
        return t = mt(f, l, t, n),
        t.elementType = e,
        t.type = a,
        t.lanes = i,
        t
    }
    function Vl(e, t, l, a) {
        return e = mt(7, e, a, t),
        e.lanes = l,
        e
    }
    function rs(e, t, l) {
        return e = mt(6, e, null, t),
        e.lanes = l,
        e
    }
    function mo(e) {
        var t = mt(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function cs(e, t, l) {
        return t = mt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = l,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var go = new WeakMap;
    function Ot(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = go.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: hc(t)
            },
            go.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: hc(t)
        }
    }
    var ma = []
      , ga = 0
      , pi = null
      , an = 0
      , zt = []
      , At = 0
      , dl = null
      , jt = 1
      , Ht = "";
    function Kt(e, t) {
        ma[ga++] = an,
        ma[ga++] = pi,
        pi = e,
        an = t
    }
    function po(e, t, l) {
        zt[At++] = jt,
        zt[At++] = Ht,
        zt[At++] = dl,
        dl = e;
        var a = jt;
        e = Ht;
        var n = 32 - dt(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var i = 32 - dt(t) + n;
        if (30 < i) {
            var f = n - n % 5;
            i = (a & (1 << f) - 1).toString(32),
            a >>= f,
            n -= f,
            jt = 1 << 32 - dt(t) + n | l << n | a,
            Ht = i + e
        } else
            jt = 1 << i | l << n | a,
            Ht = e
    }
    function os(e) {
        e.return !== null && (Kt(e, 1),
        po(e, 1, 0))
    }
    function fs(e) {
        for (; e === pi; )
            pi = ma[--ga],
            ma[ga] = null,
            an = ma[--ga],
            ma[ga] = null;
        for (; e === dl; )
            dl = zt[--At],
            zt[At] = null,
            Ht = zt[--At],
            zt[At] = null,
            jt = zt[--At],
            zt[At] = null
    }
    function yo(e, t) {
        zt[At++] = jt,
        zt[At++] = Ht,
        zt[At++] = dl,
        jt = t.id,
        Ht = t.overflow,
        dl = e
    }
    var Je = null
      , ze = null
      , oe = !1
      , hl = null
      , Rt = !1
      , ds = Error(r(519));
    function ml(e) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw nn(Ot(t, e)),
        ds
    }
    function vo(e) {
        var t = e.stateNode
          , l = e.type
          , a = e.memoizedProps;
        switch (t[Ke] = e,
        t[at] = a,
        l) {
        case "dialog":
            ie("cancel", t),
            ie("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            ie("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Rn.length; l++)
                ie(Rn[l], t);
            break;
        case "source":
            ie("error", t);
            break;
        case "img":
        case "image":
        case "link":
            ie("error", t),
            ie("load", t);
            break;
        case "details":
            ie("toggle", t);
            break;
        case "input":
            ie("invalid", t),
            Dc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            ie("invalid", t);
            break;
        case "textarea":
            ie("invalid", t),
            Mc(t, a.value, a.defaultValue, a.children)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || jd(t.textContent, l) ? (a.popover != null && (ie("beforetoggle", t),
        ie("toggle", t)),
        a.onScroll != null && ie("scroll", t),
        a.onScrollEnd != null && ie("scrollend", t),
        a.onClick != null && (t.onclick = Qt),
        t = !0) : t = !1,
        t || ml(e, !0)
    }
    function bo(e) {
        for (Je = e.return; Je; )
            switch (Je.tag) {
            case 5:
            case 31:
            case 13:
                Rt = !1;
                return;
            case 27:
            case 3:
                Rt = !0;
                return;
            default:
                Je = Je.return
            }
    }
    function pa(e) {
        if (e !== Je)
            return !1;
        if (!oe)
            return bo(e),
            oe = !0,
            !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
        l = !(l !== "form" && l !== "button") || Dr(e.type, e.memoizedProps)),
        l = !l),
        l && ze && ml(e),
        bo(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(r(317));
            ze = Zd(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(r(317));
            ze = Zd(e)
        } else
            t === 27 ? (t = ze,
            Cl(e.type) ? (e = Lr,
            Lr = null,
            ze = e) : ze = t) : ze = Je ? Nt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ql() {
        ze = Je = null,
        oe = !1
    }
    function hs() {
        var e = hl;
        return e !== null && (rt === null ? rt = e : rt.push.apply(rt, e),
        hl = null),
        e
    }
    function nn(e) {
        hl === null ? hl = [e] : hl.push(e)
    }
    var ms = S(null)
      , Xl = null
      , Jt = null;
    function gl(e, t, l) {
        G(ms, t._currentValue),
        t._currentValue = l
    }
    function kt(e) {
        e._currentValue = ms.current,
        w(ms)
    }
    function gs(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === l)
                break;
            e = e.return
        }
    }
    function ps(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var i = n.dependencies;
            if (i !== null) {
                var f = n.child;
                i = i.firstContext;
                e: for (; i !== null; ) {
                    var m = i;
                    i = n;
                    for (var b = 0; b < t.length; b++)
                        if (m.context === t[b]) {
                            i.lanes |= l,
                            m = i.alternate,
                            m !== null && (m.lanes |= l),
                            gs(i.return, l, e),
                            a || (f = null);
                            break e
                        }
                    i = m.next
                }
            } else if (n.tag === 18) {
                if (f = n.return,
                f === null)
                    throw Error(r(341));
                f.lanes |= l,
                i = f.alternate,
                i !== null && (i.lanes |= l),
                gs(f, l, e),
                f = null
            } else
                f = n.child;
            if (f !== null)
                f.return = n;
            else
                for (f = n; f !== null; ) {
                    if (f === e) {
                        f = null;
                        break
                    }
                    if (n = f.sibling,
                    n !== null) {
                        n.return = f.return,
                        f = n;
                        break
                    }
                    f = f.return
                }
            n = f
        }
    }
    function ya(e, t, l, a) {
        e = null;
        for (var n = t, i = !1; n !== null; ) {
            if (!i) {
                if ((n.flags & 524288) !== 0)
                    i = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var f = n.alternate;
                if (f === null)
                    throw Error(r(387));
                if (f = f.memoizedProps,
                f !== null) {
                    var m = n.type;
                    ht(n.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m])
                }
            } else if (n === pe.current) {
                if (f = n.alternate,
                f === null)
                    throw Error(r(387));
                f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Mn) : e = [Mn])
            }
            n = n.return
        }
        e !== null && ps(t, e, l, a),
        t.flags |= 262144
    }
    function yi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!ht(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Zl(e) {
        Xl = e,
        Jt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function ke(e) {
        return So(Xl, e)
    }
    function vi(e, t) {
        return Xl === null && Zl(e),
        So(e, t)
    }
    function So(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
        Jt === null) {
            if (e === null)
                throw Error(r(308));
            Jt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Jt = Jt.next = t;
        return l
    }
    var Lg = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                e.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(l) {
                return l()
            })
        }
    }
      , jg = c.unstable_scheduleCallback
      , Hg = c.unstable_NormalPriority
      , je = {
        $$typeof: J,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function ys() {
        return {
            controller: new Lg,
            data: new Map,
            refCount: 0
        }
    }
    function un(e) {
        e.refCount--,
        e.refCount === 0 && jg(Hg, function() {
            e.controller.abort()
        })
    }
    var sn = null
      , vs = 0
      , va = 0
      , ba = null;
    function Bg(e, t) {
        if (sn === null) {
            var l = sn = [];
            vs = 0,
            va = xr(),
            ba = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return vs++,
        t.then(xo, xo),
        t
    }
    function xo() {
        if (--vs === 0 && sn !== null) {
            ba !== null && (ba.status = "fulfilled");
            var e = sn;
            sn = null,
            va = 0,
            ba = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function qg(e, t) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return e.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(t)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var Eo = D.S;
    D.S = function(e, t) {
        ud = ot(),
        typeof t == "object" && t !== null && typeof t.then == "function" && Bg(e, t),
        Eo !== null && Eo(e, t)
    }
    ;
    var Kl = S(null);
    function bs() {
        var e = Kl.current;
        return e !== null ? e : Te.pooledCache
    }
    function bi(e, t) {
        t === null ? G(Kl, Kl.current) : G(Kl, t.pool)
    }
    function To() {
        var e = bs();
        return e === null ? null : {
            parent: je._currentValue,
            pool: e
        }
    }
    var Sa = Error(r(460))
      , Ss = Error(r(474))
      , Si = Error(r(542))
      , xi = {
        then: function() {}
    };
    function Oo(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function zo(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then(Qt, Qt),
        t = l),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Ro(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Qt, Qt);
            else {
                if (e = Te,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(r(482));
                e = t,
                e.status = "pending",
                e.then(function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Ro(e),
                e
            }
            throw kl = t,
            Sa
        }
    }
    function Jl(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (kl = l,
            Sa) : l
        }
    }
    var kl = null;
    function Ao() {
        if (kl === null)
            throw Error(r(459));
        var e = kl;
        return kl = null,
        e
    }
    function Ro(e) {
        if (e === Sa || e === Si)
            throw Error(r(483))
    }
    var xa = null
      , rn = 0;
    function Ei(e) {
        var t = rn;
        return rn += 1,
        xa === null && (xa = []),
        zo(xa, e, t)
    }
    function cn(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Ti(e, t) {
        throw t.$$typeof === O ? Error(r(525)) : (e = Object.prototype.toString.call(t),
        Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Co(e) {
        function t(T, x) {
            if (e) {
                var z = T.deletions;
                z === null ? (T.deletions = [x],
                T.flags |= 16) : z.push(x)
            }
        }
        function l(T, x) {
            if (!e)
                return null;
            for (; x !== null; )
                t(T, x),
                x = x.sibling;
            return null
        }
        function a(T) {
            for (var x = new Map; T !== null; )
                T.key !== null ? x.set(T.key, T) : x.set(T.index, T),
                T = T.sibling;
            return x
        }
        function n(T, x) {
            return T = Zt(T, x),
            T.index = 0,
            T.sibling = null,
            T
        }
        function i(T, x, z) {
            return T.index = z,
            e ? (z = T.alternate,
            z !== null ? (z = z.index,
            z < x ? (T.flags |= 67108866,
            x) : z) : (T.flags |= 67108866,
            x)) : (T.flags |= 1048576,
            x)
        }
        function f(T) {
            return e && T.alternate === null && (T.flags |= 67108866),
            T
        }
        function m(T, x, z, L) {
            return x === null || x.tag !== 6 ? (x = rs(z, T.mode, L),
            x.return = T,
            x) : (x = n(x, z),
            x.return = T,
            x)
        }
        function b(T, x, z, L) {
            var k = z.type;
            return k === Y ? M(T, x, z.props.children, L, z.key) : x !== null && (x.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Re && Jl(k) === x.type) ? (x = n(x, z.props),
            cn(x, z),
            x.return = T,
            x) : (x = gi(z.type, z.key, z.props, null, T.mode, L),
            cn(x, z),
            x.return = T,
            x)
        }
        function A(T, x, z, L) {
            return x === null || x.tag !== 4 || x.stateNode.containerInfo !== z.containerInfo || x.stateNode.implementation !== z.implementation ? (x = cs(z, T.mode, L),
            x.return = T,
            x) : (x = n(x, z.children || []),
            x.return = T,
            x)
        }
        function M(T, x, z, L, k) {
            return x === null || x.tag !== 7 ? (x = Vl(z, T.mode, L, k),
            x.return = T,
            x) : (x = n(x, z),
            x.return = T,
            x)
        }
        function j(T, x, z) {
            if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
                return x = rs("" + x, T.mode, z),
                x.return = T,
                x;
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                case N:
                    return z = gi(x.type, x.key, x.props, null, T.mode, z),
                    cn(z, x),
                    z.return = T,
                    z;
                case _:
                    return x = cs(x, T.mode, z),
                    x.return = T,
                    x;
                case Re:
                    return x = Jl(x),
                    j(T, x, z)
                }
                if (lt(x) || Ie(x))
                    return x = Vl(x, T.mode, z, null),
                    x.return = T,
                    x;
                if (typeof x.then == "function")
                    return j(T, Ei(x), z);
                if (x.$$typeof === J)
                    return j(T, vi(T, x), z);
                Ti(T, x)
            }
            return null
        }
        function R(T, x, z, L) {
            var k = x !== null ? x.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return k !== null ? null : m(T, x, "" + z, L);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case N:
                    return z.key === k ? b(T, x, z, L) : null;
                case _:
                    return z.key === k ? A(T, x, z, L) : null;
                case Re:
                    return z = Jl(z),
                    R(T, x, z, L)
                }
                if (lt(z) || Ie(z))
                    return k !== null ? null : M(T, x, z, L, null);
                if (typeof z.then == "function")
                    return R(T, x, Ei(z), L);
                if (z.$$typeof === J)
                    return R(T, x, vi(T, z), L);
                Ti(T, z)
            }
            return null
        }
        function C(T, x, z, L, k) {
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
                return T = T.get(z) || null,
                m(x, T, "" + L, k);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case N:
                    return T = T.get(L.key === null ? z : L.key) || null,
                    b(x, T, L, k);
                case _:
                    return T = T.get(L.key === null ? z : L.key) || null,
                    A(x, T, L, k);
                case Re:
                    return L = Jl(L),
                    C(T, x, z, L, k)
                }
                if (lt(L) || Ie(L))
                    return T = T.get(z) || null,
                    M(x, T, L, k, null);
                if (typeof L.then == "function")
                    return C(T, x, z, Ei(L), k);
                if (L.$$typeof === J)
                    return C(T, x, z, vi(x, L), k);
                Ti(x, L)
            }
            return null
        }
        function Z(T, x, z, L) {
            for (var k = null, de = null, K = x, le = x = 0, re = null; K !== null && le < z.length; le++) {
                K.index > le ? (re = K,
                K = null) : re = K.sibling;
                var he = R(T, K, z[le], L);
                if (he === null) {
                    K === null && (K = re);
                    break
                }
                e && K && he.alternate === null && t(T, K),
                x = i(he, x, le),
                de === null ? k = he : de.sibling = he,
                de = he,
                K = re
            }
            if (le === z.length)
                return l(T, K),
                oe && Kt(T, le),
                k;
            if (K === null) {
                for (; le < z.length; le++)
                    K = j(T, z[le], L),
                    K !== null && (x = i(K, x, le),
                    de === null ? k = K : de.sibling = K,
                    de = K);
                return oe && Kt(T, le),
                k
            }
            for (K = a(K); le < z.length; le++)
                re = C(K, T, le, z[le], L),
                re !== null && (e && re.alternate !== null && K.delete(re.key === null ? le : re.key),
                x = i(re, x, le),
                de === null ? k = re : de.sibling = re,
                de = re);
            return e && K.forEach(function(Ul) {
                return t(T, Ul)
            }),
            oe && Kt(T, le),
            k
        }
        function F(T, x, z, L) {
            if (z == null)
                throw Error(r(151));
            for (var k = null, de = null, K = x, le = x = 0, re = null, he = z.next(); K !== null && !he.done; le++,
            he = z.next()) {
                K.index > le ? (re = K,
                K = null) : re = K.sibling;
                var Ul = R(T, K, he.value, L);
                if (Ul === null) {
                    K === null && (K = re);
                    break
                }
                e && K && Ul.alternate === null && t(T, K),
                x = i(Ul, x, le),
                de === null ? k = Ul : de.sibling = Ul,
                de = Ul,
                K = re
            }
            if (he.done)
                return l(T, K),
                oe && Kt(T, le),
                k;
            if (K === null) {
                for (; !he.done; le++,
                he = z.next())
                    he = j(T, he.value, L),
                    he !== null && (x = i(he, x, le),
                    de === null ? k = he : de.sibling = he,
                    de = he);
                return oe && Kt(T, le),
                k
            }
            for (K = a(K); !he.done; le++,
            he = z.next())
                he = C(K, T, le, he.value, L),
                he !== null && (e && he.alternate !== null && K.delete(he.key === null ? le : he.key),
                x = i(he, x, le),
                de === null ? k = he : de.sibling = he,
                de = he);
            return e && K.forEach(function(Fp) {
                return t(T, Fp)
            }),
            oe && Kt(T, le),
            k
        }
        function Ee(T, x, z, L) {
            if (typeof z == "object" && z !== null && z.type === Y && z.key === null && (z = z.props.children),
            typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case N:
                    e: {
                        for (var k = z.key; x !== null; ) {
                            if (x.key === k) {
                                if (k = z.type,
                                k === Y) {
                                    if (x.tag === 7) {
                                        l(T, x.sibling),
                                        L = n(x, z.props.children),
                                        L.return = T,
                                        T = L;
                                        break e
                                    }
                                } else if (x.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Re && Jl(k) === x.type) {
                                    l(T, x.sibling),
                                    L = n(x, z.props),
                                    cn(L, z),
                                    L.return = T,
                                    T = L;
                                    break e
                                }
                                l(T, x);
                                break
                            } else
                                t(T, x);
                            x = x.sibling
                        }
                        z.type === Y ? (L = Vl(z.props.children, T.mode, L, z.key),
                        L.return = T,
                        T = L) : (L = gi(z.type, z.key, z.props, null, T.mode, L),
                        cn(L, z),
                        L.return = T,
                        T = L)
                    }
                    return f(T);
                case _:
                    e: {
                        for (k = z.key; x !== null; ) {
                            if (x.key === k)
                                if (x.tag === 4 && x.stateNode.containerInfo === z.containerInfo && x.stateNode.implementation === z.implementation) {
                                    l(T, x.sibling),
                                    L = n(x, z.children || []),
                                    L.return = T,
                                    T = L;
                                    break e
                                } else {
                                    l(T, x);
                                    break
                                }
                            else
                                t(T, x);
                            x = x.sibling
                        }
                        L = cs(z, T.mode, L),
                        L.return = T,
                        T = L
                    }
                    return f(T);
                case Re:
                    return z = Jl(z),
                    Ee(T, x, z, L)
                }
                if (lt(z))
                    return Z(T, x, z, L);
                if (Ie(z)) {
                    if (k = Ie(z),
                    typeof k != "function")
                        throw Error(r(150));
                    return z = k.call(z),
                    F(T, x, z, L)
                }
                if (typeof z.then == "function")
                    return Ee(T, x, Ei(z), L);
                if (z.$$typeof === J)
                    return Ee(T, x, vi(T, z), L);
                Ti(T, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z,
            x !== null && x.tag === 6 ? (l(T, x.sibling),
            L = n(x, z),
            L.return = T,
            T = L) : (l(T, x),
            L = rs(z, T.mode, L),
            L.return = T,
            T = L),
            f(T)) : l(T, x)
        }
        return function(T, x, z, L) {
            try {
                rn = 0;
                var k = Ee(T, x, z, L);
                return xa = null,
                k
            } catch (K) {
                if (K === Sa || K === Si)
                    throw K;
                var de = mt(29, K, null, T.mode);
                return de.lanes = L,
                de.return = T,
                de
            }
        }
    }
    var $l = Co(!0)
      , No = Co(!1)
      , pl = !1;
    function xs(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Es(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function yl(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function vl(e, t, l) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (me & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            a.pending = t,
            t = mi(e),
            fo(e, null, l),
            t
        }
        return hi(e, a, t, l),
        mi(e)
    }
    function on(e, t, l) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            bc(e, l)
        }
    }
    function Ts(e, t) {
        var l = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , i = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var f = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? n = i = f : i = i.next = f,
                    l = l.next
                } while (l !== null);
                i === null ? n = i = t : i = i.next = t
            } else
                n = i = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: i,
                shared: a.shared,
                callbacks: a.callbacks
            },
            e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
        e === null ? l.firstBaseUpdate = t : e.next = t,
        l.lastBaseUpdate = t
    }
    var Os = !1;
    function fn() {
        if (Os) {
            var e = ba;
            if (e !== null)
                throw e
        }
    }
    function dn(e, t, l, a) {
        Os = !1;
        var n = e.updateQueue;
        pl = !1;
        var i = n.firstBaseUpdate
          , f = n.lastBaseUpdate
          , m = n.shared.pending;
        if (m !== null) {
            n.shared.pending = null;
            var b = m
              , A = b.next;
            b.next = null,
            f === null ? i = A : f.next = A,
            f = b;
            var M = e.alternate;
            M !== null && (M = M.updateQueue,
            m = M.lastBaseUpdate,
            m !== f && (m === null ? M.firstBaseUpdate = A : m.next = A,
            M.lastBaseUpdate = b))
        }
        if (i !== null) {
            var j = n.baseState;
            f = 0,
            M = A = b = null,
            m = i;
            do {
                var R = m.lane & -536870913
                  , C = R !== m.lane;
                if (C ? (se & R) === R : (a & R) === R) {
                    R !== 0 && R === va && (Os = !0),
                    M !== null && (M = M.next = {
                        lane: 0,
                        tag: m.tag,
                        payload: m.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Z = e
                          , F = m;
                        R = t;
                        var Ee = l;
                        switch (F.tag) {
                        case 1:
                            if (Z = F.payload,
                            typeof Z == "function") {
                                j = Z.call(Ee, j, R);
                                break e
                            }
                            j = Z;
                            break e;
                        case 3:
                            Z.flags = Z.flags & -65537 | 128;
                        case 0:
                            if (Z = F.payload,
                            R = typeof Z == "function" ? Z.call(Ee, j, R) : Z,
                            R == null)
                                break e;
                            j = v({}, j, R);
                            break e;
                        case 2:
                            pl = !0
                        }
                    }
                    R = m.callback,
                    R !== null && (e.flags |= 64,
                    C && (e.flags |= 8192),
                    C = n.callbacks,
                    C === null ? n.callbacks = [R] : C.push(R))
                } else
                    C = {
                        lane: R,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null
                    },
                    M === null ? (A = M = C,
                    b = j) : M = M.next = C,
                    f |= R;
                if (m = m.next,
                m === null) {
                    if (m = n.shared.pending,
                    m === null)
                        break;
                    C = m,
                    m = C.next,
                    C.next = null,
                    n.lastBaseUpdate = C,
                    n.shared.pending = null
                }
            } while (!0);
            M === null && (b = j),
            n.baseState = b,
            n.firstBaseUpdate = A,
            n.lastBaseUpdate = M,
            i === null && (n.shared.lanes = 0),
            Tl |= f,
            e.lanes = f,
            e.memoizedState = j
        }
    }
    function Do(e, t) {
        if (typeof e != "function")
            throw Error(r(191, e));
        e.call(t)
    }
    function _o(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
            e = 0; e < l.length; e++)
                Do(l[e], t)
    }
    var Ea = S(null)
      , Oi = S(0);
    function Mo(e, t) {
        e = al,
        G(Oi, e),
        G(Ea, t),
        al = e | t.baseLanes
    }
    function zs() {
        G(Oi, al),
        G(Ea, Ea.current)
    }
    function As() {
        al = Oi.current,
        w(Ea),
        w(Oi)
    }
    var gt = S(null)
      , Ct = null;
    function bl(e) {
        var t = e.alternate;
        G(we, we.current & 1),
        G(gt, e),
        Ct === null && (t === null || Ea.current !== null || t.memoizedState !== null) && (Ct = e)
    }
    function Rs(e) {
        G(we, we.current),
        G(gt, e),
        Ct === null && (Ct = e)
    }
    function Uo(e) {
        e.tag === 22 ? (G(we, we.current),
        G(gt, e),
        Ct === null && (Ct = e)) : Sl()
    }
    function Sl() {
        G(we, we.current),
        G(gt, gt.current)
    }
    function pt(e) {
        w(gt),
        Ct === e && (Ct = null),
        w(we)
    }
    var we = S(0);
    function zi(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || Ur(l) || wr(l)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var $t = 0
      , te = null
      , Se = null
      , He = null
      , Ai = !1
      , Ta = !1
      , Fl = !1
      , Ri = 0
      , hn = 0
      , Oa = null
      , Yg = 0;
    function De() {
        throw Error(r(321))
    }
    function Cs(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!ht(e[l], t[l]))
                return !1;
        return !0
    }
    function Ns(e, t, l, a, n, i) {
        return $t = i,
        te = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        D.H = e === null || e.memoizedState === null ? yf : Xs,
        Fl = !1,
        i = l(a, n),
        Fl = !1,
        Ta && (i = Lo(t, l, a, n)),
        wo(e),
        i
    }
    function wo(e) {
        D.H = pn;
        var t = Se !== null && Se.next !== null;
        if ($t = 0,
        He = Se = te = null,
        Ai = !1,
        hn = 0,
        Oa = null,
        t)
            throw Error(r(300));
        e === null || Be || (e = e.dependencies,
        e !== null && yi(e) && (Be = !0))
    }
    function Lo(e, t, l, a) {
        te = e;
        var n = 0;
        do {
            if (Ta && (Oa = null),
            hn = 0,
            Ta = !1,
            25 <= n)
                throw Error(r(301));
            if (n += 1,
            He = Se = null,
            e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null,
                i.events = null,
                i.stores = null,
                i.memoCache != null && (i.memoCache.index = 0)
            }
            D.H = vf,
            i = t(l, a)
        } while (Ta);
        return i
    }
    function Gg() {
        var e = D.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? mn(t) : t,
        e = e.useState()[0],
        (Se !== null ? Se.memoizedState : null) !== e && (te.flags |= 1024),
        t
    }
    function Ds() {
        var e = Ri !== 0;
        return Ri = 0,
        e
    }
    function _s(e, t, l) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l
    }
    function Ms(e) {
        if (Ai) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ai = !1
        }
        $t = 0,
        He = Se = te = null,
        Ta = !1,
        hn = Ri = 0,
        Oa = null
    }
    function tt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return He === null ? te.memoizedState = He = e : He = He.next = e,
        He
    }
    function Le() {
        if (Se === null) {
            var e = te.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Se.next;
        var t = He === null ? te.memoizedState : He.next;
        if (t !== null)
            He = t,
            Se = e;
        else {
            if (e === null)
                throw te.alternate === null ? Error(r(467)) : Error(r(310));
            Se = e,
            e = {
                memoizedState: Se.memoizedState,
                baseState: Se.baseState,
                baseQueue: Se.baseQueue,
                queue: Se.queue,
                next: null
            },
            He === null ? te.memoizedState = He = e : He = He.next = e
        }
        return He
    }
    function Ci() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function mn(e) {
        var t = hn;
        return hn += 1,
        Oa === null && (Oa = []),
        e = zo(Oa, e, t),
        t = te,
        (He === null ? t.memoizedState : He.next) === null && (t = t.alternate,
        D.H = t === null || t.memoizedState === null ? yf : Xs),
        e
    }
    function Ni(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return mn(e);
            if (e.$$typeof === J)
                return ke(e)
        }
        throw Error(r(438, String(e)))
    }
    function Us(e) {
        var t = null
          , l = te.updateQueue;
        if (l !== null && (t = l.memoCache),
        t == null) {
            var a = te.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        l === null && (l = Ci(),
        te.updateQueue = l),
        l.memoCache = t,
        l = t.data[t.index],
        l === void 0)
            for (l = t.data[t.index] = Array(e),
            a = 0; a < e; a++)
                l[a] = Ne;
        return t.index++,
        l
    }
    function Ft(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Di(e) {
        var t = Le();
        return ws(t, Se, e)
    }
    function ws(e, t, l) {
        var a = e.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue
          , i = a.pending;
        if (i !== null) {
            if (n !== null) {
                var f = n.next;
                n.next = i.next,
                i.next = f
            }
            t.baseQueue = n = i,
            a.pending = null
        }
        if (i = e.baseState,
        n === null)
            e.memoizedState = i;
        else {
            t = n.next;
            var m = f = null
              , b = null
              , A = t
              , M = !1;
            do {
                var j = A.lane & -536870913;
                if (j !== A.lane ? (se & j) === j : ($t & j) === j) {
                    var R = A.revertLane;
                    if (R === 0)
                        b !== null && (b = b.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        }),
                        j === va && (M = !0);
                    else if (($t & R) === R) {
                        A = A.next,
                        R === va && (M = !0);
                        continue
                    } else
                        j = {
                            lane: 0,
                            revertLane: A.revertLane,
                            gesture: null,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        },
                        b === null ? (m = b = j,
                        f = i) : b = b.next = j,
                        te.lanes |= R,
                        Tl |= R;
                    j = A.action,
                    Fl && l(i, j),
                    i = A.hasEagerState ? A.eagerState : l(i, j)
                } else
                    R = {
                        lane: j,
                        revertLane: A.revertLane,
                        gesture: A.gesture,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    },
                    b === null ? (m = b = R,
                    f = i) : b = b.next = R,
                    te.lanes |= j,
                    Tl |= j;
                A = A.next
            } while (A !== null && A !== t);
            if (b === null ? f = i : b.next = m,
            !ht(i, e.memoizedState) && (Be = !0,
            M && (l = ba,
            l !== null)))
                throw l;
            e.memoizedState = i,
            e.baseState = f,
            e.baseQueue = b,
            a.lastRenderedState = i
        }
        return n === null && (a.lanes = 0),
        [e.memoizedState, a.dispatch]
    }
    function Ls(e) {
        var t = Le()
          , l = t.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch
          , n = l.pending
          , i = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var f = n = n.next;
            do
                i = e(i, f.action),
                f = f.next;
            while (f !== n);
            ht(i, t.memoizedState) || (Be = !0),
            t.memoizedState = i,
            t.baseQueue === null && (t.baseState = i),
            l.lastRenderedState = i
        }
        return [i, a]
    }
    function jo(e, t, l) {
        var a = te
          , n = Le()
          , i = oe;
        if (i) {
            if (l === void 0)
                throw Error(r(407));
            l = l()
        } else
            l = t();
        var f = !ht((Se || n).memoizedState, l);
        if (f && (n.memoizedState = l,
        Be = !0),
        n = n.queue,
        Bs(qo.bind(null, a, n, e), [e]),
        n.getSnapshot !== t || f || He !== null && He.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            za(9, {
                destroy: void 0
            }, Bo.bind(null, a, n, l, t), null),
            Te === null)
                throw Error(r(349));
            i || ($t & 127) !== 0 || Ho(a, t, l)
        }
        return l
    }
    function Ho(e, t, l) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: l
        },
        t = te.updateQueue,
        t === null ? (t = Ci(),
        te.updateQueue = t,
        t.stores = [e]) : (l = t.stores,
        l === null ? t.stores = [e] : l.push(e))
    }
    function Bo(e, t, l, a) {
        t.value = l,
        t.getSnapshot = a,
        Yo(t) && Go(e)
    }
    function qo(e, t, l) {
        return l(function() {
            Yo(t) && Go(e)
        })
    }
    function Yo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !ht(e, l)
        } catch {
            return !0
        }
    }
    function Go(e) {
        var t = Gl(e, 2);
        t !== null && ct(t, e, 2)
    }
    function js(e) {
        var t = tt();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
            Fl) {
                cl(!0);
                try {
                    l()
                } finally {
                    cl(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ft,
            lastRenderedState: e
        },
        t
    }
    function Vo(e, t, l, a) {
        return e.baseState = l,
        ws(e, Se, typeof a == "function" ? a : Ft)
    }
    function Vg(e, t, l, a, n) {
        if (Ui(e))
            throw Error(r(485));
        if (e = t.action,
        e !== null) {
            var i = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    i.listeners.push(f)
                }
            };
            D.T !== null ? l(!0) : i.isTransition = !1,
            a(i),
            l = t.pending,
            l === null ? (i.next = t.pending = i,
            Qo(t, i)) : (i.next = l.next,
            t.pending = l.next = i)
        }
    }
    function Qo(e, t) {
        var l = t.action
          , a = t.payload
          , n = e.state;
        if (t.isTransition) {
            var i = D.T
              , f = {};
            D.T = f;
            try {
                var m = l(n, a)
                  , b = D.S;
                b !== null && b(f, m),
                Xo(e, t, m)
            } catch (A) {
                Hs(e, t, A)
            } finally {
                i !== null && f.types !== null && (i.types = f.types),
                D.T = i
            }
        } else
            try {
                i = l(n, a),
                Xo(e, t, i)
            } catch (A) {
                Hs(e, t, A)
            }
    }
    function Xo(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            Zo(e, t, a)
        }, function(a) {
            return Hs(e, t, a)
        }) : Zo(e, t, l)
    }
    function Zo(e, t, l) {
        t.status = "fulfilled",
        t.value = l,
        Ko(t),
        e.state = l,
        t = e.pending,
        t !== null && (l = t.next,
        l === t ? e.pending = null : (l = l.next,
        t.next = l,
        Qo(e, l)))
    }
    function Hs(e, t, l) {
        var a = e.pending;
        if (e.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = l,
                Ko(t),
                t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function Ko(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Jo(e, t) {
        return t
    }
    function ko(e, t) {
        if (oe) {
            var l = Te.formState;
            if (l !== null) {
                e: {
                    var a = te;
                    if (oe) {
                        if (ze) {
                            t: {
                                for (var n = ze, i = Rt; n.nodeType !== 8; ) {
                                    if (!i) {
                                        n = null;
                                        break t
                                    }
                                    if (n = Nt(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                i = n.data,
                                n = i === "F!" || i === "F" ? n : null
                            }
                            if (n) {
                                ze = Nt(n.nextSibling),
                                a = n.data === "F!";
                                break e
                            }
                        }
                        ml(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return l = tt(),
        l.memoizedState = l.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Jo,
            lastRenderedState: t
        },
        l.queue = a,
        l = mf.bind(null, te, a),
        a.dispatch = l,
        a = js(!1),
        i = Qs.bind(null, te, !1, a.queue),
        a = tt(),
        n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        a.queue = n,
        l = Vg.bind(null, te, n, i, l),
        n.dispatch = l,
        a.memoizedState = e,
        [t, l, !1]
    }
    function $o(e) {
        var t = Le();
        return Fo(t, Se, e)
    }
    function Fo(e, t, l) {
        if (t = ws(e, t, Jo)[0],
        e = Di(Ft)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = mn(t)
            } catch (f) {
                throw f === Sa ? Si : f
            }
        else
            a = t;
        t = Le();
        var n = t.queue
          , i = n.dispatch;
        return l !== t.memoizedState && (te.flags |= 2048,
        za(9, {
            destroy: void 0
        }, Qg.bind(null, n, l), null)),
        [a, i, e]
    }
    function Qg(e, t) {
        e.action = t
    }
    function Wo(e) {
        var t = Le()
          , l = Se;
        if (l !== null)
            return Fo(t, l, e);
        Le(),
        t = t.memoizedState,
        l = Le();
        var a = l.queue.dispatch;
        return l.memoizedState = e,
        [t, a, !1]
    }
    function za(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        },
        t = te.updateQueue,
        t === null && (t = Ci(),
        te.updateQueue = t),
        l = t.lastEffect,
        l === null ? t.lastEffect = e.next = e : (a = l.next,
        l.next = e,
        e.next = a,
        t.lastEffect = e),
        e
    }
    function Io() {
        return Le().memoizedState
    }
    function _i(e, t, l, a) {
        var n = tt();
        te.flags |= e,
        n.memoizedState = za(1 | t, {
            destroy: void 0
        }, l, a === void 0 ? null : a)
    }
    function Mi(e, t, l, a) {
        var n = Le();
        a = a === void 0 ? null : a;
        var i = n.memoizedState.inst;
        Se !== null && a !== null && Cs(a, Se.memoizedState.deps) ? n.memoizedState = za(t, i, l, a) : (te.flags |= e,
        n.memoizedState = za(1 | t, i, l, a))
    }
    function Po(e, t) {
        _i(8390656, 8, e, t)
    }
    function Bs(e, t) {
        Mi(2048, 8, e, t)
    }
    function Xg(e) {
        te.flags |= 4;
        var t = te.updateQueue;
        if (t === null)
            t = Ci(),
            te.updateQueue = t,
            t.events = [e];
        else {
            var l = t.events;
            l === null ? t.events = [e] : l.push(e)
        }
    }
    function ef(e) {
        var t = Le().memoizedState;
        return Xg({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((me & 2) !== 0)
                throw Error(r(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function tf(e, t) {
        return Mi(4, 2, e, t)
    }
    function lf(e, t) {
        return Mi(4, 4, e, t)
    }
    function af(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function nf(e, t, l) {
        l = l != null ? l.concat([e]) : null,
        Mi(4, 4, af.bind(null, t, e), l)
    }
    function qs() {}
    function uf(e, t) {
        var l = Le();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && Cs(t, a[1]) ? a[0] : (l.memoizedState = [e, t],
        e)
    }
    function sf(e, t) {
        var l = Le();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && Cs(t, a[1]))
            return a[0];
        if (a = e(),
        Fl) {
            cl(!0);
            try {
                e()
            } finally {
                cl(!1)
            }
        }
        return l.memoizedState = [a, t],
        a
    }
    function Ys(e, t, l) {
        return l === void 0 || ($t & 1073741824) !== 0 && (se & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l,
        e = rd(),
        te.lanes |= e,
        Tl |= e,
        l)
    }
    function rf(e, t, l, a) {
        return ht(l, t) ? l : Ea.current !== null ? (e = Ys(e, l, a),
        ht(e, t) || (Be = !0),
        e) : ($t & 42) === 0 || ($t & 1073741824) !== 0 && (se & 261930) === 0 ? (Be = !0,
        e.memoizedState = l) : (e = rd(),
        te.lanes |= e,
        Tl |= e,
        t)
    }
    function cf(e, t, l, a, n) {
        var i = q.p;
        q.p = i !== 0 && 8 > i ? i : 8;
        var f = D.T
          , m = {};
        D.T = m,
        Qs(e, !1, t, l);
        try {
            var b = n()
              , A = D.S;
            if (A !== null && A(m, b),
            b !== null && typeof b == "object" && typeof b.then == "function") {
                var M = qg(b, a);
                gn(e, t, M, bt(e))
            } else
                gn(e, t, a, bt(e))
        } catch (j) {
            gn(e, t, {
                then: function() {},
                status: "rejected",
                reason: j
            }, bt())
        } finally {
            q.p = i,
            f !== null && m.types !== null && (f.types = m.types),
            D.T = f
        }
    }
    function Zg() {}
    function Gs(e, t, l, a) {
        if (e.tag !== 5)
            throw Error(r(476));
        var n = of(e).queue;
        cf(e, n, t, $, l === null ? Zg : function() {
            return ff(e),
            l(a)
        }
        )
    }
    function of(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: $,
            baseState: $,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ft,
                lastRenderedState: $
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ft,
                lastRenderedState: l
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function ff(e) {
        var t = of(e);
        t.next === null && (t = e.alternate.memoizedState),
        gn(e, t.next.queue, {}, bt())
    }
    function Vs() {
        return ke(Mn)
    }
    function df() {
        return Le().memoizedState
    }
    function hf() {
        return Le().memoizedState
    }
    function Kg(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var l = bt();
                e = yl(l);
                var a = vl(t, e, l);
                a !== null && (ct(a, t, l),
                on(a, t, l)),
                t = {
                    cache: ys()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Jg(e, t, l) {
        var a = bt();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ui(e) ? gf(t, l) : (l = us(e, t, l, a),
        l !== null && (ct(l, e, a),
        pf(l, t, a)))
    }
    function mf(e, t, l) {
        var a = bt();
        gn(e, t, l, a)
    }
    function gn(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ui(e))
            gf(t, n);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
            i !== null))
                try {
                    var f = t.lastRenderedState
                      , m = i(f, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = m,
                    ht(m, f))
                        return hi(e, t, n, 0),
                        Te === null && di(),
                        !1
                } catch {}
            if (l = us(e, t, n, a),
            l !== null)
                return ct(l, e, a),
                pf(l, t, a),
                !0
        }
        return !1
    }
    function Qs(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: xr(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ui(e)) {
            if (t)
                throw Error(r(479))
        } else
            t = us(e, l, a, 2),
            t !== null && ct(t, e, 2)
    }
    function Ui(e) {
        var t = e.alternate;
        return e === te || t !== null && t === te
    }
    function gf(e, t) {
        Ta = Ai = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        e.pending = t
    }
    function pf(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            bc(e, l)
        }
    }
    var pn = {
        readContext: ke,
        use: Ni,
        useCallback: De,
        useContext: De,
        useEffect: De,
        useImperativeHandle: De,
        useLayoutEffect: De,
        useInsertionEffect: De,
        useMemo: De,
        useReducer: De,
        useRef: De,
        useState: De,
        useDebugValue: De,
        useDeferredValue: De,
        useTransition: De,
        useSyncExternalStore: De,
        useId: De,
        useHostTransitionStatus: De,
        useFormState: De,
        useActionState: De,
        useOptimistic: De,
        useMemoCache: De,
        useCacheRefresh: De
    };
    pn.useEffectEvent = De;
    var yf = {
        readContext: ke,
        use: Ni,
        useCallback: function(e, t) {
            return tt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: ke,
        useEffect: Po,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null,
            _i(4194308, 4, af.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return _i(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            _i(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = tt();
            t = t === void 0 ? null : t;
            var a = e();
            if (Fl) {
                cl(!0);
                try {
                    e()
                } finally {
                    cl(!1)
                }
            }
            return l.memoizedState = [a, t],
            a
        },
        useReducer: function(e, t, l) {
            var a = tt();
            if (l !== void 0) {
                var n = l(t);
                if (Fl) {
                    cl(!0);
                    try {
                        l(t)
                    } finally {
                        cl(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            },
            a.queue = e,
            e = e.dispatch = Jg.bind(null, te, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = tt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = js(e);
            var t = e.queue
              , l = mf.bind(null, te, t);
            return t.dispatch = l,
            [e.memoizedState, l]
        },
        useDebugValue: qs,
        useDeferredValue: function(e, t) {
            var l = tt();
            return Ys(l, e, t)
        },
        useTransition: function() {
            var e = js(!1);
            return e = cf.bind(null, te, e.queue, !0, !1),
            tt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var a = te
              , n = tt();
            if (oe) {
                if (l === void 0)
                    throw Error(r(407));
                l = l()
            } else {
                if (l = t(),
                Te === null)
                    throw Error(r(349));
                (se & 127) !== 0 || Ho(a, t, l)
            }
            n.memoizedState = l;
            var i = {
                value: l,
                getSnapshot: t
            };
            return n.queue = i,
            Po(qo.bind(null, a, i, e), [e]),
            a.flags |= 2048,
            za(9, {
                destroy: void 0
            }, Bo.bind(null, a, i, l, t), null),
            l
        },
        useId: function() {
            var e = tt()
              , t = Te.identifierPrefix;
            if (oe) {
                var l = Ht
                  , a = jt;
                l = (a & ~(1 << 32 - dt(a) - 1)).toString(32) + l,
                t = "_" + t + "R_" + l,
                l = Ri++,
                0 < l && (t += "H" + l.toString(32)),
                t += "_"
            } else
                l = Yg++,
                t = "_" + t + "r_" + l.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Vs,
        useFormState: ko,
        useActionState: ko,
        useOptimistic: function(e) {
            var t = tt();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
            t = Qs.bind(null, te, !0, l),
            l.dispatch = t,
            [e, t]
        },
        useMemoCache: Us,
        useCacheRefresh: function() {
            return tt().memoizedState = Kg.bind(null, te)
        },
        useEffectEvent: function(e) {
            var t = tt()
              , l = {
                impl: e
            };
            return t.memoizedState = l,
            function() {
                if ((me & 2) !== 0)
                    throw Error(r(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }
      , Xs = {
        readContext: ke,
        use: Ni,
        useCallback: uf,
        useContext: ke,
        useEffect: Bs,
        useImperativeHandle: nf,
        useInsertionEffect: tf,
        useLayoutEffect: lf,
        useMemo: sf,
        useReducer: Di,
        useRef: Io,
        useState: function() {
            return Di(Ft)
        },
        useDebugValue: qs,
        useDeferredValue: function(e, t) {
            var l = Le();
            return rf(l, Se.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Di(Ft)[0]
              , t = Le().memoizedState;
            return [typeof e == "boolean" ? e : mn(e), t]
        },
        useSyncExternalStore: jo,
        useId: df,
        useHostTransitionStatus: Vs,
        useFormState: $o,
        useActionState: $o,
        useOptimistic: function(e, t) {
            var l = Le();
            return Vo(l, Se, e, t)
        },
        useMemoCache: Us,
        useCacheRefresh: hf
    };
    Xs.useEffectEvent = ef;
    var vf = {
        readContext: ke,
        use: Ni,
        useCallback: uf,
        useContext: ke,
        useEffect: Bs,
        useImperativeHandle: nf,
        useInsertionEffect: tf,
        useLayoutEffect: lf,
        useMemo: sf,
        useReducer: Ls,
        useRef: Io,
        useState: function() {
            return Ls(Ft)
        },
        useDebugValue: qs,
        useDeferredValue: function(e, t) {
            var l = Le();
            return Se === null ? Ys(l, e, t) : rf(l, Se.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ls(Ft)[0]
              , t = Le().memoizedState;
            return [typeof e == "boolean" ? e : mn(e), t]
        },
        useSyncExternalStore: jo,
        useId: df,
        useHostTransitionStatus: Vs,
        useFormState: Wo,
        useActionState: Wo,
        useOptimistic: function(e, t) {
            var l = Le();
            return Se !== null ? Vo(l, Se, e, t) : (l.baseState = e,
            [e, l.queue.dispatch])
        },
        useMemoCache: Us,
        useCacheRefresh: hf
    };
    vf.useEffectEvent = ef;
    function Zs(e, t, l, a) {
        t = e.memoizedState,
        l = l(a, t),
        l = l == null ? t : v({}, t, l),
        e.memoizedState = l,
        e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var Ks = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var a = bt()
              , n = yl(a);
            n.payload = t,
            l != null && (n.callback = l),
            t = vl(e, n, a),
            t !== null && (ct(t, e, a),
            on(t, e, a))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var a = bt()
              , n = yl(a);
            n.tag = 1,
            n.payload = t,
            l != null && (n.callback = l),
            t = vl(e, n, a),
            t !== null && (ct(t, e, a),
            on(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = bt()
              , a = yl(l);
            a.tag = 2,
            t != null && (a.callback = t),
            t = vl(e, a, l),
            t !== null && (ct(t, e, l),
            on(t, e, l))
        }
    };
    function bf(e, t, l, a, n, i, f) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, f) : t.prototype && t.prototype.isPureReactComponent ? !tn(l, a) || !tn(n, i) : !0
    }
    function Sf(e, t, l, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a),
        t.state !== e && Ks.enqueueReplaceState(t, t.state, null)
    }
    function Wl(e, t) {
        var l = t;
        if ("ref"in t) {
            l = {};
            for (var a in t)
                a !== "ref" && (l[a] = t[a])
        }
        if (e = e.defaultProps) {
            l === t && (l = v({}, l));
            for (var n in e)
                l[n] === void 0 && (l[n] = e[n])
        }
        return l
    }
    function xf(e) {
        fi(e)
    }
    function Ef(e) {
        console.error(e)
    }
    function Tf(e) {
        fi(e)
    }
    function wi(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Of(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function Js(e, t, l) {
        return l = yl(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            wi(e, t)
        }
        ,
        l
    }
    function zf(e) {
        return e = yl(e),
        e.tag = 3,
        e
    }
    function Af(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var i = a.value;
            e.payload = function() {
                return n(i)
            }
            ,
            e.callback = function() {
                Of(t, l, a)
            }
        }
        var f = l.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
            Of(t, l, a),
            typeof n != "function" && (Ol === null ? Ol = new Set([this]) : Ol.add(this));
            var m = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: m !== null ? m : ""
            })
        }
        )
    }
    function kg(e, t, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = l.alternate,
            t !== null && ya(t, l, n, !0),
            l = gt.current,
            l !== null) {
                switch (l.tag) {
                case 31:
                case 13:
                    return Ct === null ? Ki() : l.alternate === null && _e === 0 && (_e = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === xi ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? l.updateQueue = new Set([a]) : t.add(a),
                    vr(e, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === xi ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = t) : (l = t.retryQueue,
                    l === null ? t.retryQueue = new Set([a]) : l.add(a)),
                    vr(e, a, n)),
                    !1
                }
                throw Error(r(435, l.tag))
            }
            return vr(e, a, n),
            Ki(),
            !1
        }
        if (oe)
            return t = gt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = n,
            a !== ds && (e = Error(r(422), {
                cause: a
            }),
            nn(Ot(e, l)))) : (a !== ds && (t = Error(r(423), {
                cause: a
            }),
            nn(Ot(t, l))),
            e = e.current.alternate,
            e.flags |= 65536,
            n &= -n,
            e.lanes |= n,
            a = Ot(a, l),
            n = Js(e.stateNode, a, n),
            Ts(e, n),
            _e !== 4 && (_e = 2)),
            !1;
        var i = Error(r(520), {
            cause: a
        });
        if (i = Ot(i, l),
        On === null ? On = [i] : On.push(i),
        _e !== 4 && (_e = 2),
        t === null)
            return !0;
        a = Ot(a, l),
        l = t;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                e = n & -n,
                l.lanes |= e,
                e = Js(l.stateNode, a, e),
                Ts(l, e),
                !1;
            case 1:
                if (t = l.type,
                i = l.stateNode,
                (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ol === null || !Ol.has(i))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = zf(n),
                    Af(n, e, l, a),
                    Ts(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var ks = Error(r(461))
      , Be = !1;
    function $e(e, t, l, a) {
        t.child = e === null ? No(t, null, l, a) : $l(t, e.child, l, a)
    }
    function Rf(e, t, l, a, n) {
        l = l.render;
        var i = t.ref;
        if ("ref"in a) {
            var f = {};
            for (var m in a)
                m !== "ref" && (f[m] = a[m])
        } else
            f = a;
        return Zl(t),
        a = Ns(e, t, l, f, i, n),
        m = Ds(),
        e !== null && !Be ? (_s(e, t, n),
        Wt(e, t, n)) : (oe && m && os(t),
        t.flags |= 1,
        $e(e, t, a, n),
        t.child)
    }
    function Cf(e, t, l, a, n) {
        if (e === null) {
            var i = l.type;
            return typeof i == "function" && !ss(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
            t.type = i,
            Nf(e, t, i, a, n)) : (e = gi(l.type, null, a, t, t.mode, n),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (i = e.child,
        !lr(e, n)) {
            var f = i.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : tn,
            l(f, a) && e.ref === t.ref)
                return Wt(e, t, n)
        }
        return t.flags |= 1,
        e = Zt(i, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Nf(e, t, l, a, n) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (tn(i, a) && e.ref === t.ref)
                if (Be = !1,
                t.pendingProps = a = i,
                lr(e, n))
                    (e.flags & 131072) !== 0 && (Be = !0);
                else
                    return t.lanes = e.lanes,
                    Wt(e, t, n)
        }
        return $s(e, t, l, a, n)
    }
    function Df(e, t, l, a) {
        var n = a.children
          , i = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = i !== null ? i.baseLanes | l : l,
                e !== null) {
                    for (a = t.child = e.child,
                    n = 0; a !== null; )
                        n = n | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = n & ~i
                } else
                    a = 0,
                    t.child = null;
                return _f(e, t, i, l, a)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && bi(t, i !== null ? i.cachePool : null),
                i !== null ? Mo(t, i) : zs(),
                Uo(t);
            else
                return a = t.lanes = 536870912,
                _f(e, t, i !== null ? i.baseLanes | l : l, l, a)
        } else
            i !== null ? (bi(t, i.cachePool),
            Mo(t, i),
            Sl(),
            t.memoizedState = null) : (e !== null && bi(t, null),
            zs(),
            Sl());
        return $e(e, t, n, l),
        t.child
    }
    function yn(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function _f(e, t, l, a, n) {
        var i = bs();
        return i = i === null ? null : {
            parent: je._currentValue,
            pool: i
        },
        t.memoizedState = {
            baseLanes: l,
            cachePool: i
        },
        e !== null && bi(t, null),
        zs(),
        Uo(t),
        e !== null && ya(e, t, a, !0),
        t.childLanes = n,
        null
    }
    function Li(e, t) {
        return t = Hi({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Mf(e, t, l) {
        return $l(t, e.child, null, l),
        e = Li(t, t.pendingProps),
        e.flags |= 2,
        pt(t),
        t.memoizedState = null,
        e
    }
    function $g(e, t, l) {
        var a = t.pendingProps
          , n = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (oe) {
                if (a.mode === "hidden")
                    return e = Li(t, a),
                    t.lanes = 536870912,
                    yn(null, e);
                if (Rs(t),
                (e = ze) ? (e = Xd(e, Rt),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: dl !== null ? {
                        id: jt,
                        overflow: Ht
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = mo(e),
                l.return = t,
                t.child = l,
                Je = t,
                ze = null)) : e = null,
                e === null)
                    throw ml(t);
                return t.lanes = 536870912,
                null
            }
            return Li(t, a)
        }
        var i = e.memoizedState;
        if (i !== null) {
            var f = i.dehydrated;
            if (Rs(t),
            n)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Mf(e, t, l);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(r(558));
            else if (Be || ya(e, t, l, !1),
            n = (l & e.childLanes) !== 0,
            Be || n) {
                if (a = Te,
                a !== null && (f = Sc(a, l),
                f !== 0 && f !== i.retryLane))
                    throw i.retryLane = f,
                    Gl(e, f),
                    ct(a, e, f),
                    ks;
                Ki(),
                t = Mf(e, t, l)
            } else
                e = i.treeContext,
                ze = Nt(f.nextSibling),
                Je = t,
                oe = !0,
                hl = null,
                Rt = !1,
                e !== null && yo(t, e),
                t = Li(t, a),
                t.flags |= 4096;
            return t
        }
        return e = Zt(e.child, {
            mode: a.mode,
            children: a.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function ji(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(r(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function $s(e, t, l, a, n) {
        return Zl(t),
        l = Ns(e, t, l, a, void 0, n),
        a = Ds(),
        e !== null && !Be ? (_s(e, t, n),
        Wt(e, t, n)) : (oe && a && os(t),
        t.flags |= 1,
        $e(e, t, l, n),
        t.child)
    }
    function Uf(e, t, l, a, n, i) {
        return Zl(t),
        t.updateQueue = null,
        l = Lo(t, a, l, n),
        wo(e),
        a = Ds(),
        e !== null && !Be ? (_s(e, t, i),
        Wt(e, t, i)) : (oe && a && os(t),
        t.flags |= 1,
        $e(e, t, l, i),
        t.child)
    }
    function wf(e, t, l, a, n) {
        if (Zl(t),
        t.stateNode === null) {
            var i = ha
              , f = l.contextType;
            typeof f == "object" && f !== null && (i = ke(f)),
            i = new l(a,i),
            t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
            i.updater = Ks,
            t.stateNode = i,
            i._reactInternals = t,
            i = t.stateNode,
            i.props = a,
            i.state = t.memoizedState,
            i.refs = {},
            xs(t),
            f = l.contextType,
            i.context = typeof f == "object" && f !== null ? ke(f) : ha,
            i.state = t.memoizedState,
            f = l.getDerivedStateFromProps,
            typeof f == "function" && (Zs(t, l, f, a),
            i.state = t.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            f !== i.state && Ks.enqueueReplaceState(i, i.state, null),
            dn(t, a, i, n),
            fn(),
            i.state = t.memoizedState),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (e === null) {
            i = t.stateNode;
            var m = t.memoizedProps
              , b = Wl(l, m);
            i.props = b;
            var A = i.context
              , M = l.contextType;
            f = ha,
            typeof M == "object" && M !== null && (f = ke(M));
            var j = l.getDerivedStateFromProps;
            M = typeof j == "function" || typeof i.getSnapshotBeforeUpdate == "function",
            m = t.pendingProps !== m,
            M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || A !== f) && Sf(t, i, a, f),
            pl = !1;
            var R = t.memoizedState;
            i.state = R,
            dn(t, a, i, n),
            fn(),
            A = t.memoizedState,
            m || R !== A || pl ? (typeof j == "function" && (Zs(t, l, j, a),
            A = t.memoizedState),
            (b = pl || bf(t, l, b, a, R, A, f)) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = A),
            i.props = a,
            i.state = A,
            i.context = f,
            a = b) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            i = t.stateNode,
            Es(e, t),
            f = t.memoizedProps,
            M = Wl(l, f),
            i.props = M,
            j = t.pendingProps,
            R = i.context,
            A = l.contextType,
            b = ha,
            typeof A == "object" && A !== null && (b = ke(A)),
            m = l.getDerivedStateFromProps,
            (A = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== j || R !== b) && Sf(t, i, a, b),
            pl = !1,
            R = t.memoizedState,
            i.state = R,
            dn(t, a, i, n),
            fn();
            var C = t.memoizedState;
            f !== j || R !== C || pl || e !== null && e.dependencies !== null && yi(e.dependencies) ? (typeof m == "function" && (Zs(t, l, m, a),
            C = t.memoizedState),
            (M = pl || bf(t, l, M, a, R, C, b) || e !== null && e.dependencies !== null && yi(e.dependencies)) ? (A || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, C, b),
            typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, C, b)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = C),
            i.props = a,
            i.state = C,
            i.context = b,
            a = M) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return i = a,
        ji(e, t),
        a = (t.flags & 128) !== 0,
        i || a ? (i = t.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(),
        t.flags |= 1,
        e !== null && a ? (t.child = $l(t, e.child, null, n),
        t.child = $l(t, null, l, n)) : $e(e, t, l, n),
        t.memoizedState = i.state,
        e = t.child) : e = Wt(e, t, n),
        e
    }
    function Lf(e, t, l, a) {
        return Ql(),
        t.flags |= 256,
        $e(e, t, l, a),
        t.child
    }
    var Fs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ws(e) {
        return {
            baseLanes: e,
            cachePool: To()
        }
    }
    function Is(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
        t && (e |= vt),
        e
    }
    function jf(e, t, l) {
        var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, f;
        if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (we.current & 2) !== 0),
        f && (n = !0,
        t.flags &= -129),
        f = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (oe) {
                if (n ? bl(t) : Sl(),
                (e = ze) ? (e = Xd(e, Rt),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: dl !== null ? {
                        id: jt,
                        overflow: Ht
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = mo(e),
                l.return = t,
                t.child = l,
                Je = t,
                ze = null)) : e = null,
                e === null)
                    throw ml(t);
                return wr(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var m = a.children;
            return a = a.fallback,
            n ? (Sl(),
            n = t.mode,
            m = Hi({
                mode: "hidden",
                children: m
            }, n),
            a = Vl(a, n, l, null),
            m.return = t,
            a.return = t,
            m.sibling = a,
            t.child = m,
            a = t.child,
            a.memoizedState = Ws(l),
            a.childLanes = Is(e, f, l),
            t.memoizedState = Fs,
            yn(null, a)) : (bl(t),
            Ps(t, m))
        }
        var b = e.memoizedState;
        if (b !== null && (m = b.dehydrated,
        m !== null)) {
            if (i)
                t.flags & 256 ? (bl(t),
                t.flags &= -257,
                t = er(e, t, l)) : t.memoizedState !== null ? (Sl(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Sl(),
                m = a.fallback,
                n = t.mode,
                a = Hi({
                    mode: "visible",
                    children: a.children
                }, n),
                m = Vl(m, n, l, null),
                m.flags |= 2,
                a.return = t,
                m.return = t,
                a.sibling = m,
                t.child = a,
                $l(t, e.child, null, l),
                a = t.child,
                a.memoizedState = Ws(l),
                a.childLanes = Is(e, f, l),
                t.memoizedState = Fs,
                t = yn(null, a));
            else if (bl(t),
            wr(m)) {
                if (f = m.nextSibling && m.nextSibling.dataset,
                f)
                    var A = f.dgst;
                f = A,
                a = Error(r(419)),
                a.stack = "",
                a.digest = f,
                nn({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = er(e, t, l)
            } else if (Be || ya(e, t, l, !1),
            f = (l & e.childLanes) !== 0,
            Be || f) {
                if (f = Te,
                f !== null && (a = Sc(f, l),
                a !== 0 && a !== b.retryLane))
                    throw b.retryLane = a,
                    Gl(e, a),
                    ct(f, e, a),
                    ks;
                Ur(m) || Ki(),
                t = er(e, t, l)
            } else
                Ur(m) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = b.treeContext,
                ze = Nt(m.nextSibling),
                Je = t,
                oe = !0,
                hl = null,
                Rt = !1,
                e !== null && yo(t, e),
                t = Ps(t, a.children),
                t.flags |= 4096);
            return t
        }
        return n ? (Sl(),
        m = a.fallback,
        n = t.mode,
        b = e.child,
        A = b.sibling,
        a = Zt(b, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = b.subtreeFlags & 65011712,
        A !== null ? m = Zt(A, m) : (m = Vl(m, n, l, null),
        m.flags |= 2),
        m.return = t,
        a.return = t,
        a.sibling = m,
        t.child = a,
        yn(null, a),
        a = t.child,
        m = e.child.memoizedState,
        m === null ? m = Ws(l) : (n = m.cachePool,
        n !== null ? (b = je._currentValue,
        n = n.parent !== b ? {
            parent: b,
            pool: b
        } : n) : n = To(),
        m = {
            baseLanes: m.baseLanes | l,
            cachePool: n
        }),
        a.memoizedState = m,
        a.childLanes = Is(e, f, l),
        t.memoizedState = Fs,
        yn(e.child, a)) : (bl(t),
        l = e.child,
        e = l.sibling,
        l = Zt(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = t,
        l.sibling = null,
        e !== null && (f = t.deletions,
        f === null ? (t.deletions = [e],
        t.flags |= 16) : f.push(e)),
        t.child = l,
        t.memoizedState = null,
        l)
    }
    function Ps(e, t) {
        return t = Hi({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Hi(e, t) {
        return e = mt(22, e, null, t),
        e.lanes = 0,
        e
    }
    function er(e, t, l) {
        return $l(t, e.child, null, l),
        e = Ps(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Hf(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        gs(e.return, t, l)
    }
    function tr(e, t, l, a, n, i) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: i
        } : (f.isBackwards = t,
        f.rendering = null,
        f.renderingStartTime = 0,
        f.last = a,
        f.tail = l,
        f.tailMode = n,
        f.treeForkCount = i)
    }
    function Bf(e, t, l) {
        var a = t.pendingProps
          , n = a.revealOrder
          , i = a.tail;
        a = a.children;
        var f = we.current
          , m = (f & 2) !== 0;
        if (m ? (f = f & 1 | 2,
        t.flags |= 128) : f &= 1,
        G(we, f),
        $e(e, t, a, l),
        a = oe ? an : 0,
        !m && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Hf(e, l, t);
                else if (e.tag === 19)
                    Hf(e, l, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (n) {
        case "forwards":
            for (l = t.child,
            n = null; l !== null; )
                e = l.alternate,
                e !== null && zi(e) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = t.child,
            t.child = null) : (n = l.sibling,
            l.sibling = null),
            tr(t, !1, n, l, i, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (l = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && zi(e) === null) {
                    t.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = l,
                l = n,
                n = e
            }
            tr(t, !0, l, null, i, a);
            break;
        case "together":
            tr(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Wt(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
        Tl |= t.lanes,
        (l & t.childLanes) === 0)
            if (e !== null) {
                if (ya(e, t, l, !1),
                (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child,
            l = Zt(e, e.pendingProps),
            t.child = l,
            l.return = t; e.sibling !== null; )
                e = e.sibling,
                l = l.sibling = Zt(e, e.pendingProps),
                l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function lr(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && yi(e)))
    }
    function Fg(e, t, l) {
        switch (t.tag) {
        case 3:
            et(t, t.stateNode.containerInfo),
            gl(t, je, e.memoizedState.cache),
            Ql();
            break;
        case 27:
        case 5:
            Va(t);
            break;
        case 4:
            et(t, t.stateNode.containerInfo);
            break;
        case 10:
            gl(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Rs(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (bl(t),
                t.flags |= 128,
                null) : (l & t.child.childLanes) !== 0 ? jf(e, t, l) : (bl(t),
                e = Wt(e, t, l),
                e !== null ? e.sibling : null);
            bl(t);
            break;
        case 19:
            var n = (e.flags & 128) !== 0;
            if (a = (l & t.childLanes) !== 0,
            a || (ya(e, t, l, !1),
            a = (l & t.childLanes) !== 0),
            n) {
                if (a)
                    return Bf(e, t, l);
                t.flags |= 128
            }
            if (n = t.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            G(we, we.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Df(e, t, l, t.pendingProps);
        case 24:
            gl(t, je, e.memoizedState.cache)
        }
        return Wt(e, t, l)
    }
    function qf(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Be = !0;
            else {
                if (!lr(e, l) && (t.flags & 128) === 0)
                    return Be = !1,
                    Fg(e, t, l);
                Be = (e.flags & 131072) !== 0
            }
        else
            Be = !1,
            oe && (t.flags & 1048576) !== 0 && po(t, an, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var a = t.pendingProps;
                if (e = Jl(t.elementType),
                t.type = e,
                typeof e == "function")
                    ss(e) ? (a = Wl(e, a),
                    t.tag = 1,
                    t = wf(null, t, e, a, l)) : (t.tag = 0,
                    t = $s(null, t, e, a, l));
                else {
                    if (e != null) {
                        var n = e.$$typeof;
                        if (n === ue) {
                            t.tag = 11,
                            t = Rf(null, t, e, a, l);
                            break e
                        } else if (n === W) {
                            t.tag = 14,
                            t = Cf(null, t, e, a, l);
                            break e
                        }
                    }
                    throw t = Me(e) || e,
                    Error(r(306, t, ""))
                }
            }
            return t;
        case 0:
            return $s(e, t, t.type, t.pendingProps, l);
        case 1:
            return a = t.type,
            n = Wl(a, t.pendingProps),
            wf(e, t, a, n, l);
        case 3:
            e: {
                if (et(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(r(387));
                a = t.pendingProps;
                var i = t.memoizedState;
                n = i.element,
                Es(e, t),
                dn(t, a, null, l);
                var f = t.memoizedState;
                if (a = f.cache,
                gl(t, je, a),
                a !== i.cache && ps(t, [je], l, !0),
                fn(),
                a = f.element,
                i.isDehydrated)
                    if (i = {
                        element: a,
                        isDehydrated: !1,
                        cache: f.cache
                    },
                    t.updateQueue.baseState = i,
                    t.memoizedState = i,
                    t.flags & 256) {
                        t = Lf(e, t, a, l);
                        break e
                    } else if (a !== n) {
                        n = Ot(Error(r(424)), t),
                        nn(n),
                        t = Lf(e, t, a, l);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        ze = Nt(e.firstChild),
                        Je = t,
                        oe = !0,
                        hl = null,
                        Rt = !0,
                        l = No(t, null, a, l),
                        t.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling;
                else {
                    if (Ql(),
                    a === n) {
                        t = Wt(e, t, l);
                        break e
                    }
                    $e(e, t, a, l)
                }
                t = t.child
            }
            return t;
        case 26:
            return ji(e, t),
            e === null ? (l = Fd(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : oe || (l = t.type,
            e = t.pendingProps,
            a = Pi(ae.current).createElement(l),
            a[Ke] = t,
            a[at] = e,
            Fe(a, l, e),
            Qe(a),
            t.stateNode = a) : t.memoizedState = Fd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Va(t),
            e === null && oe && (a = t.stateNode = Jd(t.type, t.pendingProps, ae.current),
            Je = t,
            Rt = !0,
            n = ze,
            Cl(t.type) ? (Lr = n,
            ze = Nt(a.firstChild)) : ze = n),
            $e(e, t, t.pendingProps.children, l),
            ji(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && oe && ((n = a = ze) && (a = Ap(a, t.type, t.pendingProps, Rt),
            a !== null ? (t.stateNode = a,
            Je = t,
            ze = Nt(a.firstChild),
            Rt = !1,
            n = !0) : n = !1),
            n || ml(t)),
            Va(t),
            n = t.type,
            i = t.pendingProps,
            f = e !== null ? e.memoizedProps : null,
            a = i.children,
            Dr(n, i) ? a = null : f !== null && Dr(n, f) && (t.flags |= 32),
            t.memoizedState !== null && (n = Ns(e, t, Gg, null, null, l),
            Mn._currentValue = n),
            ji(e, t),
            $e(e, t, a, l),
            t.child;
        case 6:
            return e === null && oe && ((e = l = ze) && (l = Rp(l, t.pendingProps, Rt),
            l !== null ? (t.stateNode = l,
            Je = t,
            ze = null,
            e = !0) : e = !1),
            e || ml(t)),
            null;
        case 13:
            return jf(e, t, l);
        case 4:
            return et(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = $l(t, null, a, l) : $e(e, t, a, l),
            t.child;
        case 11:
            return Rf(e, t, t.type, t.pendingProps, l);
        case 7:
            return $e(e, t, t.pendingProps, l),
            t.child;
        case 8:
            return $e(e, t, t.pendingProps.children, l),
            t.child;
        case 12:
            return $e(e, t, t.pendingProps.children, l),
            t.child;
        case 10:
            return a = t.pendingProps,
            gl(t, t.type, a.value),
            $e(e, t, a.children, l),
            t.child;
        case 9:
            return n = t.type._context,
            a = t.pendingProps.children,
            Zl(t),
            n = ke(n),
            a = a(n),
            t.flags |= 1,
            $e(e, t, a, l),
            t.child;
        case 14:
            return Cf(e, t, t.type, t.pendingProps, l);
        case 15:
            return Nf(e, t, t.type, t.pendingProps, l);
        case 19:
            return Bf(e, t, l);
        case 31:
            return $g(e, t, l);
        case 22:
            return Df(e, t, l, t.pendingProps);
        case 24:
            return Zl(t),
            a = ke(je),
            e === null ? (n = bs(),
            n === null && (n = Te,
            i = ys(),
            n.pooledCache = i,
            i.refCount++,
            i !== null && (n.pooledCacheLanes |= l),
            n = i),
            t.memoizedState = {
                parent: a,
                cache: n
            },
            xs(t),
            gl(t, je, n)) : ((e.lanes & l) !== 0 && (Es(e, t),
            dn(t, null, null, l),
            fn()),
            n = e.memoizedState,
            i = t.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            t.memoizedState = n,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
            gl(t, je, a)) : (a = i.cache,
            gl(t, je, a),
            a !== n.cache && ps(t, [je], l, !0))),
            $e(e, t, t.pendingProps.children, l),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }
    function It(e) {
        e.flags |= 4
    }
    function ar(e, t, l, a, n) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (n & 335544128) === n)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (dd())
                    e.flags |= 8192;
                else
                    throw kl = xi,
                    Ss
        } else
            e.flags &= -16777217
    }
    function Yf(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !th(t))
            if (dd())
                e.flags |= 8192;
            else
                throw kl = xi,
                Ss
    }
    function Bi(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? yc() : 536870912,
        e.lanes |= t,
        Na |= t)
    }
    function vn(e, t) {
        if (!oe)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function Ae(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , l = 0
          , a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = e,
                n = n.sibling;
        else
            for (n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = e,
                n = n.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = l,
        t
    }
    function Wg(e, t, l) {
        var a = t.pendingProps;
        switch (fs(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ae(t),
            null;
        case 1:
            return Ae(t),
            null;
        case 3:
            return l = t.stateNode,
            a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            kt(je),
            Ue(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (pa(t) ? It(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            hs())),
            Ae(t),
            null;
        case 26:
            var n = t.type
              , i = t.memoizedState;
            return e === null ? (It(t),
            i !== null ? (Ae(t),
            Yf(t, i)) : (Ae(t),
            ar(t, n, null, a, l))) : i ? i !== e.memoizedState ? (It(t),
            Ae(t),
            Yf(t, i)) : (Ae(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== a && It(t),
            Ae(t),
            ar(t, n, e, a, l)),
            null;
        case 27:
            if ($n(t),
            l = ae.current,
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && It(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return Ae(t),
                    null
                }
                e = X.current,
                pa(t) ? vo(t) : (e = Jd(n, a, l),
                t.stateNode = e,
                It(t))
            }
            return Ae(t),
            null;
        case 5:
            if ($n(t),
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && It(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(r(166));
                    return Ae(t),
                    null
                }
                if (i = X.current,
                pa(t))
                    vo(t);
                else {
                    var f = Pi(ae.current);
                    switch (i) {
                    case 1:
                        i = f.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        i = f.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            i = f.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            i = f.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            i = f.createElement("div"),
                            i.innerHTML = "<script><\/script>",
                            i = i.removeChild(i.firstChild);
                            break;
                        case "select":
                            i = typeof a.is == "string" ? f.createElement("select", {
                                is: a.is
                            }) : f.createElement("select"),
                            a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                            break;
                        default:
                            i = typeof a.is == "string" ? f.createElement(n, {
                                is: a.is
                            }) : f.createElement(n)
                        }
                    }
                    i[Ke] = t,
                    i[at] = a;
                    e: for (f = t.child; f !== null; ) {
                        if (f.tag === 5 || f.tag === 6)
                            i.appendChild(f.stateNode);
                        else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                            f.child.return = f,
                            f = f.child;
                            continue
                        }
                        if (f === t)
                            break e;
                        for (; f.sibling === null; ) {
                            if (f.return === null || f.return === t)
                                break e;
                            f = f.return
                        }
                        f.sibling.return = f.return,
                        f = f.sibling
                    }
                    t.stateNode = i;
                    e: switch (Fe(i, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break e;
                    case "img":
                        a = !0;
                        break e;
                    default:
                        a = !1
                    }
                    a && It(t)
                }
            }
            return Ae(t),
            ar(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== a && It(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(r(166));
                if (e = ae.current,
                pa(t)) {
                    if (e = t.stateNode,
                    l = t.memoizedProps,
                    a = null,
                    n = Je,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    e[Ke] = t,
                    e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || jd(e.nodeValue, l)),
                    e || ml(t, !0)
                } else
                    e = Pi(e).createTextNode(a),
                    e[Ke] = t,
                    t.stateNode = e
            }
            return Ae(t),
            null;
        case 31:
            if (l = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (a = pa(t),
                l !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(r(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(r(557));
                        e[Ke] = t
                    } else
                        Ql(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ae(t),
                    e = !1
                } else
                    l = hs(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (pt(t),
                    t) : (pt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(r(558))
            }
            return Ae(t),
            null;
        case 13:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (n = pa(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(r(318));
                        if (n = t.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(r(317));
                        n[Ke] = t
                    } else
                        Ql(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ae(t),
                    n = !1
                } else
                    n = hs(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return t.flags & 256 ? (pt(t),
                    t) : (pt(t),
                    null)
            }
            return pt(t),
            (t.flags & 128) !== 0 ? (t.lanes = l,
            t) : (l = a !== null,
            e = e !== null && e.memoizedState !== null,
            l && (a = t.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
            i = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048)),
            l !== e && l && (t.child.flags |= 8192),
            Bi(t, t.updateQueue),
            Ae(t),
            null);
        case 4:
            return Ue(),
            e === null && zr(t.stateNode.containerInfo),
            Ae(t),
            null;
        case 10:
            return kt(t.type),
            Ae(t),
            null;
        case 19:
            if (w(we),
            a = t.memoizedState,
            a === null)
                return Ae(t),
                null;
            if (n = (t.flags & 128) !== 0,
            i = a.rendering,
            i === null)
                if (n)
                    vn(a, !1);
                else {
                    if (_e !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (i = zi(e),
                            i !== null) {
                                for (t.flags |= 128,
                                vn(a, !1),
                                e = i.updateQueue,
                                t.updateQueue = e,
                                Bi(t, e),
                                t.subtreeFlags = 0,
                                e = l,
                                l = t.child; l !== null; )
                                    ho(l, e),
                                    l = l.sibling;
                                return G(we, we.current & 1 | 2),
                                oe && Kt(t, a.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && ot() > Qi && (t.flags |= 128,
                    n = !0,
                    vn(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = zi(i),
                    e !== null) {
                        if (t.flags |= 128,
                        n = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Bi(t, e),
                        vn(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !i.alternate && !oe)
                            return Ae(t),
                            null
                    } else
                        2 * ot() - a.renderingStartTime > Qi && l !== 536870912 && (t.flags |= 128,
                        n = !0,
                        vn(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child,
                t.child = i) : (e = a.last,
                e !== null ? e.sibling = i : t.child = i,
                a.last = i)
            }
            return a.tail !== null ? (e = a.tail,
            a.rendering = e,
            a.tail = e.sibling,
            a.renderingStartTime = ot(),
            e.sibling = null,
            l = we.current,
            G(we, n ? l & 1 | 2 : l & 1),
            oe && Kt(t, a.treeForkCount),
            e) : (Ae(t),
            null);
        case 22:
        case 23:
            return pt(t),
            As(),
            a = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ae(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t),
            l = t.updateQueue,
            l !== null && Bi(t, l.retryQueue),
            l = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== l && (t.flags |= 2048),
            e !== null && w(Kl),
            null;
        case 24:
            return l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            kt(je),
            Ae(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, t.tag))
    }
    function Ig(e, t) {
        switch (fs(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return kt(je),
            Ue(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return $n(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (pt(t),
                t.alternate === null)
                    throw Error(r(340));
                Ql()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (pt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(r(340));
                Ql()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return w(we),
            null;
        case 4:
            return Ue(),
            null;
        case 10:
            return kt(t.type),
            null;
        case 22:
        case 23:
            return pt(t),
            As(),
            e !== null && w(Kl),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return kt(je),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Gf(e, t) {
        switch (fs(t),
        t.tag) {
        case 3:
            kt(je),
            Ue();
            break;
        case 26:
        case 27:
        case 5:
            $n(t);
            break;
        case 4:
            Ue();
            break;
        case 31:
            t.memoizedState !== null && pt(t);
            break;
        case 13:
            pt(t);
            break;
        case 19:
            w(we);
            break;
        case 10:
            kt(t.type);
            break;
        case 22:
        case 23:
            pt(t),
            As(),
            e !== null && w(Kl);
            break;
        case 24:
            kt(je)
        }
    }
    function bn(e, t) {
        try {
            var l = t.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var i = l.create
                          , f = l.inst;
                        a = i(),
                        f.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (m) {
            be(t, t.return, m)
        }
    }
    function xl(e, t, l) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                a = i;
                do {
                    if ((a.tag & e) === e) {
                        var f = a.inst
                          , m = f.destroy;
                        if (m !== void 0) {
                            f.destroy = void 0,
                            n = t;
                            var b = l
                              , A = m;
                            try {
                                A()
                            } catch (M) {
                                be(n, b, M)
                            }
                        }
                    }
                    a = a.next
                } while (a !== i)
            }
        } catch (M) {
            be(t, t.return, M)
        }
    }
    function Vf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                _o(t, l)
            } catch (a) {
                be(e, e.return, a)
            }
        }
    }
    function Qf(e, t, l) {
        l.props = Wl(e.type, e.memoizedProps),
        l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            be(e, t, a)
        }
    }
    function Sn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            be(e, t, n)
        }
    }
    function Bt(e, t) {
        var l = e.ref
          , a = e.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    be(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    be(e, t, n)
                }
            else
                l.current = null
    }
    function Xf(e) {
        var t = e.type
          , l = e.memoizedProps
          , a = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break e;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            be(e, e.return, n)
        }
    }
    function nr(e, t, l) {
        try {
            var a = e.stateNode;
            Sp(a, e.type, l, t),
            a[at] = t
        } catch (n) {
            be(e, e.return, n)
        }
    }
    function Zf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Cl(e.type) || e.tag === 4
    }
    function ir(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Zf(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Cl(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function ur(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            t.appendChild(e),
            l = l._reactRootContainer,
            l != null || t.onclick !== null || (t.onclick = Qt));
        else if (a !== 4 && (a === 27 && Cl(e.type) && (l = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (ur(e, t, l),
            e = e.sibling; e !== null; )
                ur(e, t, l),
                e = e.sibling
    }
    function qi(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && Cl(e.type) && (l = e.stateNode),
        e = e.child,
        e !== null))
            for (qi(e, t, l),
            e = e.sibling; e !== null; )
                qi(e, t, l),
                e = e.sibling
    }
    function Kf(e) {
        var t = e.stateNode
          , l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; )
                t.removeAttributeNode(n[0]);
            Fe(t, a, l),
            t[Ke] = e,
            t[at] = l
        } catch (i) {
            be(e, e.return, i)
        }
    }
    var Pt = !1
      , qe = !1
      , sr = !1
      , Jf = typeof WeakSet == "function" ? WeakSet : Set
      , Xe = null;
    function Pg(e, t) {
        if (e = e.containerInfo,
        Cr = uu,
        e = ao(e),
        es(e)) {
            if ("selectionStart"in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , i = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            i.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var f = 0
                          , m = -1
                          , b = -1
                          , A = 0
                          , M = 0
                          , j = e
                          , R = null;
                        t: for (; ; ) {
                            for (var C; j !== l || n !== 0 && j.nodeType !== 3 || (m = f + n),
                            j !== i || a !== 0 && j.nodeType !== 3 || (b = f + a),
                            j.nodeType === 3 && (f += j.nodeValue.length),
                            (C = j.firstChild) !== null; )
                                R = j,
                                j = C;
                            for (; ; ) {
                                if (j === e)
                                    break t;
                                if (R === l && ++A === n && (m = f),
                                R === i && ++M === a && (b = f),
                                (C = j.nextSibling) !== null)
                                    break;
                                j = R,
                                R = j.parentNode
                            }
                            j = C
                        }
                        l = m === -1 || b === -1 ? null : {
                            start: m,
                            end: b
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (Nr = {
            focusedElem: e,
            selectionRange: l
        },
        uu = !1,
        Xe = t; Xe !== null; )
            if (t = Xe,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                Xe = e;
            else
                for (; Xe !== null; ) {
                    switch (t = Xe,
                    i = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (l = 0; l < e.length; l++)
                                n = e[l],
                                n.ref.impl = n.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && i !== null) {
                            e = void 0,
                            l = t,
                            n = i.memoizedProps,
                            i = i.memoizedState,
                            a = l.stateNode;
                            try {
                                var Z = Wl(l.type, n);
                                e = a.getSnapshotBeforeUpdate(Z, i),
                                a.__reactInternalSnapshotBeforeUpdate = e
                            } catch (F) {
                                be(l, l.return, F)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            l = e.nodeType,
                            l === 9)
                                Mr(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Mr(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Xe = e;
                        break
                    }
                    Xe = t.return
                }
    }
    function kf(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            tl(e, l),
            a & 4 && bn(5, l);
            break;
        case 1:
            if (tl(e, l),
            a & 4)
                if (e = l.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (f) {
                        be(l, l.return, f)
                    }
                else {
                    var n = Wl(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (f) {
                        be(l, l.return, f)
                    }
                }
            a & 64 && Vf(l),
            a & 512 && Sn(l, l.return);
            break;
        case 3:
            if (tl(e, l),
            a & 64 && (e = l.updateQueue,
            e !== null)) {
                if (t = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        t = l.child.stateNode;
                        break;
                    case 1:
                        t = l.child.stateNode
                    }
                try {
                    _o(e, t)
                } catch (f) {
                    be(l, l.return, f)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Kf(l);
        case 26:
        case 5:
            tl(e, l),
            t === null && a & 4 && Xf(l),
            a & 512 && Sn(l, l.return);
            break;
        case 12:
            tl(e, l);
            break;
        case 31:
            tl(e, l),
            a & 4 && Wf(e, l);
            break;
        case 13:
            tl(e, l),
            a & 4 && If(e, l),
            a & 64 && (e = l.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (l = rp.bind(null, l),
            Cp(e, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Pt,
            !a) {
                t = t !== null && t.memoizedState !== null || qe,
                n = Pt;
                var i = qe;
                Pt = a,
                (qe = t) && !i ? ll(e, l, (l.subtreeFlags & 8772) !== 0) : tl(e, l),
                Pt = n,
                qe = i
            }
            break;
        case 30:
            break;
        default:
            tl(e, l)
        }
    }
    function $f(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        $f(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Hu(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ce = null
      , it = !1;
    function el(e, t, l) {
        for (l = l.child; l !== null; )
            Ff(e, t, l),
            l = l.sibling
    }
    function Ff(e, t, l) {
        if (ft && typeof ft.onCommitFiberUnmount == "function")
            try {
                ft.onCommitFiberUnmount(Qa, l)
            } catch {}
        switch (l.tag) {
        case 26:
            qe || Bt(l, t),
            el(e, t, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            qe || Bt(l, t);
            var a = Ce
              , n = it;
            Cl(l.type) && (Ce = l.stateNode,
            it = !1),
            el(e, t, l),
            Nn(l.stateNode),
            Ce = a,
            it = n;
            break;
        case 5:
            qe || Bt(l, t);
        case 6:
            if (a = Ce,
            n = it,
            Ce = null,
            el(e, t, l),
            Ce = a,
            it = n,
            Ce !== null)
                if (it)
                    try {
                        (Ce.nodeType === 9 ? Ce.body : Ce.nodeName === "HTML" ? Ce.ownerDocument.body : Ce).removeChild(l.stateNode)
                    } catch (i) {
                        be(l, t, i)
                    }
                else
                    try {
                        Ce.removeChild(l.stateNode)
                    } catch (i) {
                        be(l, t, i)
                    }
            break;
        case 18:
            Ce !== null && (it ? (e = Ce,
            Vd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
            Ha(e)) : Vd(Ce, l.stateNode));
            break;
        case 4:
            a = Ce,
            n = it,
            Ce = l.stateNode.containerInfo,
            it = !0,
            el(e, t, l),
            Ce = a,
            it = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            xl(2, l, t),
            qe || xl(4, l, t),
            el(e, t, l);
            break;
        case 1:
            qe || (Bt(l, t),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && Qf(l, t, a)),
            el(e, t, l);
            break;
        case 21:
            el(e, t, l);
            break;
        case 22:
            qe = (a = qe) || l.memoizedState !== null,
            el(e, t, l),
            qe = a;
            break;
        default:
            el(e, t, l)
        }
    }
    function Wf(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Ha(e)
            } catch (l) {
                be(t, t.return, l)
            }
        }
    }
    function If(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Ha(e)
            } catch (l) {
                be(t, t.return, l)
            }
    }
    function ep(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Jf),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Jf),
            t;
        default:
            throw Error(r(435, e.tag))
        }
    }
    function Yi(e, t) {
        var l = ep(e);
        t.forEach(function(a) {
            if (!l.has(a)) {
                l.add(a);
                var n = cp.bind(null, e, a);
                a.then(n, n)
            }
        })
    }
    function ut(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , i = e
                  , f = t
                  , m = f;
                e: for (; m !== null; ) {
                    switch (m.tag) {
                    case 27:
                        if (Cl(m.type)) {
                            Ce = m.stateNode,
                            it = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ce = m.stateNode,
                        it = !1;
                        break e;
                    case 3:
                    case 4:
                        Ce = m.stateNode.containerInfo,
                        it = !0;
                        break e
                    }
                    m = m.return
                }
                if (Ce === null)
                    throw Error(r(160));
                Ff(i, f, n),
                Ce = null,
                it = !1,
                i = n.alternate,
                i !== null && (i.return = null),
                n.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                Pf(t, e),
                t = t.sibling
    }
    var Ut = null;
    function Pf(e, t) {
        var l = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ut(t, e),
            st(e),
            a & 4 && (xl(3, e, e.return),
            bn(3, e),
            xl(5, e, e.return));
            break;
        case 1:
            ut(t, e),
            st(e),
            a & 512 && (qe || l === null || Bt(l, l.return)),
            a & 64 && Pt && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (l = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = Ut;
            if (ut(t, e),
            st(e),
            a & 512 && (qe || l === null || Bt(l, l.return)),
            a & 4) {
                var i = l !== null ? l.memoizedState : null;
                if (a = e.memoizedState,
                l === null)
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                a = e.type,
                                l = e.memoizedProps,
                                n = n.ownerDocument || n;
                                t: switch (a) {
                                case "title":
                                    i = n.getElementsByTagName("title")[0],
                                    (!i || i[Ka] || i[Ke] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a),
                                    n.head.insertBefore(i, n.querySelector("head > title"))),
                                    Fe(i, a, l),
                                    i[Ke] = e,
                                    Qe(i),
                                    a = i;
                                    break e;
                                case "link":
                                    var f = Pd("link", "href", n).get(a + (l.href || ""));
                                    if (f) {
                                        for (var m = 0; m < f.length; m++)
                                            if (i = f[m],
                                            i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                f.splice(m, 1);
                                                break t
                                            }
                                    }
                                    i = n.createElement(a),
                                    Fe(i, a, l),
                                    n.head.appendChild(i);
                                    break;
                                case "meta":
                                    if (f = Pd("meta", "content", n).get(a + (l.content || ""))) {
                                        for (m = 0; m < f.length; m++)
                                            if (i = f[m],
                                            i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                f.splice(m, 1);
                                                break t
                                            }
                                    }
                                    i = n.createElement(a),
                                    Fe(i, a, l),
                                    n.head.appendChild(i);
                                    break;
                                default:
                                    throw Error(r(468, a))
                                }
                                i[Ke] = e,
                                Qe(i),
                                a = i
                            }
                            e.stateNode = a
                        } else
                            eh(n, e.type, e.stateNode);
                    else
                        e.stateNode = Id(n, a, e.memoizedProps);
                else
                    i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : i.count--,
                    a === null ? eh(n, e.type, e.stateNode) : Id(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && nr(e, e.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            ut(t, e),
            st(e),
            a & 512 && (qe || l === null || Bt(l, l.return)),
            l !== null && a & 4 && nr(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (ut(t, e),
            st(e),
            a & 512 && (qe || l === null || Bt(l, l.return)),
            e.flags & 32) {
                n = e.stateNode;
                try {
                    ua(n, "")
                } catch (Z) {
                    be(e, e.return, Z)
                }
            }
            a & 4 && e.stateNode != null && (n = e.memoizedProps,
            nr(e, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (sr = !0);
            break;
        case 6:
            if (ut(t, e),
            st(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(r(162));
                a = e.memoizedProps,
                l = e.stateNode;
                try {
                    l.nodeValue = a
                } catch (Z) {
                    be(e, e.return, Z)
                }
            }
            break;
        case 3:
            if (lu = null,
            n = Ut,
            Ut = eu(t.containerInfo),
            ut(t, e),
            Ut = n,
            st(e),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Ha(t.containerInfo)
                } catch (Z) {
                    be(e, e.return, Z)
                }
            sr && (sr = !1,
            ed(e));
            break;
        case 4:
            a = Ut,
            Ut = eu(e.stateNode.containerInfo),
            ut(t, e),
            st(e),
            Ut = a;
            break;
        case 12:
            ut(t, e),
            st(e);
            break;
        case 31:
            ut(t, e),
            st(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            Yi(e, a)));
            break;
        case 13:
            ut(t, e),
            st(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Vi = ot()),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            Yi(e, a)));
            break;
        case 22:
            n = e.memoizedState !== null;
            var b = l !== null && l.memoizedState !== null
              , A = Pt
              , M = qe;
            if (Pt = A || n,
            qe = M || b,
            ut(t, e),
            qe = M,
            Pt = A,
            st(e),
            a & 8192)
                e: for (t = e.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (l === null || b || Pt || qe || Il(e)),
                l = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            b = l = t;
                            try {
                                if (i = b.stateNode,
                                n)
                                    f = i.style,
                                    typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    m = b.stateNode;
                                    var j = b.memoizedProps.style
                                      , R = j != null && j.hasOwnProperty("display") ? j.display : null;
                                    m.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim()
                                }
                            } catch (Z) {
                                be(b, b.return, Z)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            b = t;
                            try {
                                b.stateNode.nodeValue = n ? "" : b.memoizedProps
                            } catch (Z) {
                                be(b, b.return, Z)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (l === null) {
                            b = t;
                            try {
                                var C = b.stateNode;
                                n ? Qd(C, !0) : Qd(b.stateNode, !1)
                            } catch (Z) {
                                be(b, b.return, Z)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        l === t && (l = null),
                        t = t.return
                    }
                    l === t && (l = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = e.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            Yi(e, l))));
            break;
        case 19:
            ut(t, e),
            st(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            Yi(e, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ut(t, e),
            st(e)
        }
    }
    function st(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (Zf(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(r(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , i = ir(e);
                    qi(e, i, n);
                    break;
                case 5:
                    var f = l.stateNode;
                    l.flags & 32 && (ua(f, ""),
                    l.flags &= -33);
                    var m = ir(e);
                    qi(e, m, f);
                    break;
                case 3:
                case 4:
                    var b = l.stateNode.containerInfo
                      , A = ir(e);
                    ur(e, A, b);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (M) {
                be(e, e.return, M)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function ed(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                ed(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function tl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                kf(e, t.alternate, t),
                t = t.sibling
    }
    function Il(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                xl(4, t, t.return),
                Il(t);
                break;
            case 1:
                Bt(t, t.return);
                var l = t.stateNode;
                typeof l.componentWillUnmount == "function" && Qf(t, t.return, l),
                Il(t);
                break;
            case 27:
                Nn(t.stateNode);
            case 26:
            case 5:
                Bt(t, t.return),
                Il(t);
                break;
            case 22:
                t.memoizedState === null && Il(t);
                break;
            case 30:
                Il(t);
                break;
            default:
                Il(t)
            }
            e = e.sibling
        }
    }
    function ll(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , n = e
              , i = t
              , f = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                ll(n, i, l),
                bn(4, i);
                break;
            case 1:
                if (ll(n, i, l),
                a = i,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (A) {
                        be(a, a.return, A)
                    }
                if (a = i,
                n = a.updateQueue,
                n !== null) {
                    var m = a.stateNode;
                    try {
                        var b = n.shared.hiddenCallbacks;
                        if (b !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < b.length; n++)
                                Do(b[n], m)
                    } catch (A) {
                        be(a, a.return, A)
                    }
                }
                l && f & 64 && Vf(i),
                Sn(i, i.return);
                break;
            case 27:
                Kf(i);
            case 26:
            case 5:
                ll(n, i, l),
                l && a === null && f & 4 && Xf(i),
                Sn(i, i.return);
                break;
            case 12:
                ll(n, i, l);
                break;
            case 31:
                ll(n, i, l),
                l && f & 4 && Wf(n, i);
                break;
            case 13:
                ll(n, i, l),
                l && f & 4 && If(n, i);
                break;
            case 22:
                i.memoizedState === null && ll(n, i, l),
                Sn(i, i.return);
                break;
            case 30:
                break;
            default:
                ll(n, i, l)
            }
            t = t.sibling
        }
    }
    function rr(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++,
        l != null && un(l))
    }
    function cr(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && un(e))
    }
    function wt(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                td(e, t, l, a),
                t = t.sibling
    }
    function td(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            wt(e, t, l, a),
            n & 2048 && bn(9, t);
            break;
        case 1:
            wt(e, t, l, a);
            break;
        case 3:
            wt(e, t, l, a),
            n & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && un(e)));
            break;
        case 12:
            if (n & 2048) {
                wt(e, t, l, a),
                e = t.stateNode;
                try {
                    var i = t.memoizedProps
                      , f = i.id
                      , m = i.onPostCommit;
                    typeof m == "function" && m(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (b) {
                    be(t, t.return, b)
                }
            } else
                wt(e, t, l, a);
            break;
        case 31:
            wt(e, t, l, a);
            break;
        case 13:
            wt(e, t, l, a);
            break;
        case 23:
            break;
        case 22:
            i = t.stateNode,
            f = t.alternate,
            t.memoizedState !== null ? i._visibility & 2 ? wt(e, t, l, a) : xn(e, t) : i._visibility & 2 ? wt(e, t, l, a) : (i._visibility |= 2,
            Aa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && rr(f, t);
            break;
        case 24:
            wt(e, t, l, a),
            n & 2048 && cr(t.alternate, t);
            break;
        default:
            wt(e, t, l, a)
        }
    }
    function Aa(e, t, l, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var i = e
              , f = t
              , m = l
              , b = a
              , A = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                Aa(i, f, m, b, n),
                bn(8, f);
                break;
            case 23:
                break;
            case 22:
                var M = f.stateNode;
                f.memoizedState !== null ? M._visibility & 2 ? Aa(i, f, m, b, n) : xn(i, f) : (M._visibility |= 2,
                Aa(i, f, m, b, n)),
                n && A & 2048 && rr(f.alternate, f);
                break;
            case 24:
                Aa(i, f, m, b, n),
                n && A & 2048 && cr(f.alternate, f);
                break;
            default:
                Aa(i, f, m, b, n)
            }
            t = t.sibling
        }
    }
    function xn(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e
                  , a = t
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    xn(l, a),
                    n & 2048 && rr(a.alternate, a);
                    break;
                case 24:
                    xn(l, a),
                    n & 2048 && cr(a.alternate, a);
                    break;
                default:
                    xn(l, a)
                }
                t = t.sibling
            }
    }
    var En = 8192;
    function Ra(e, t, l) {
        if (e.subtreeFlags & En)
            for (e = e.child; e !== null; )
                ld(e, t, l),
                e = e.sibling
    }
    function ld(e, t, l) {
        switch (e.tag) {
        case 26:
            Ra(e, t, l),
            e.flags & En && e.memoizedState !== null && Yp(l, Ut, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Ra(e, t, l);
            break;
        case 3:
        case 4:
            var a = Ut;
            Ut = eu(e.stateNode.containerInfo),
            Ra(e, t, l),
            Ut = a;
            break;
        case 22:
            e.memoizedState === null && (a = e.alternate,
            a !== null && a.memoizedState !== null ? (a = En,
            En = 16777216,
            Ra(e, t, l),
            En = a) : Ra(e, t, l));
            break;
        default:
            Ra(e, t, l)
        }
    }
    function ad(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Tn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Xe = a,
                    id(a, e)
                }
            ad(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                nd(e),
                e = e.sibling
    }
    function nd(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Tn(e),
            e.flags & 2048 && xl(9, e, e.return);
            break;
        case 3:
            Tn(e);
            break;
        case 12:
            Tn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Gi(e)) : Tn(e);
            break;
        default:
            Tn(e)
        }
    }
    function Gi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Xe = a,
                    id(a, e)
                }
            ad(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                xl(8, t, t.return),
                Gi(t);
                break;
            case 22:
                l = t.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                Gi(t));
                break;
            default:
                Gi(t)
            }
            e = e.sibling
        }
    }
    function id(e, t) {
        for (; Xe !== null; ) {
            var l = Xe;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                xl(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                un(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                Xe = a;
            else
                e: for (l = e; Xe !== null; ) {
                    a = Xe;
                    var n = a.sibling
                      , i = a.return;
                    if ($f(a),
                    a === l) {
                        Xe = null;
                        break e
                    }
                    if (n !== null) {
                        n.return = i,
                        Xe = n;
                        break e
                    }
                    Xe = i
                }
        }
    }
    var tp = {
        getCacheForType: function(e) {
            var t = ke(je)
              , l = t.data.get(e);
            return l === void 0 && (l = e(),
            t.data.set(e, l)),
            l
        },
        cacheSignal: function() {
            return ke(je).controller.signal
        }
    }
      , lp = typeof WeakMap == "function" ? WeakMap : Map
      , me = 0
      , Te = null
      , ne = null
      , se = 0
      , ve = 0
      , yt = null
      , El = !1
      , Ca = !1
      , or = !1
      , al = 0
      , _e = 0
      , Tl = 0
      , Pl = 0
      , fr = 0
      , vt = 0
      , Na = 0
      , On = null
      , rt = null
      , dr = !1
      , Vi = 0
      , ud = 0
      , Qi = 1 / 0
      , Xi = null
      , Ol = null
      , Ye = 0
      , zl = null
      , Da = null
      , nl = 0
      , hr = 0
      , mr = null
      , sd = null
      , zn = 0
      , gr = null;
    function bt() {
        return (me & 2) !== 0 && se !== 0 ? se & -se : D.T !== null ? xr() : xc()
    }
    function rd() {
        if (vt === 0)
            if ((se & 536870912) === 0 || oe) {
                var e = In;
                In <<= 1,
                (In & 3932160) === 0 && (In = 262144),
                vt = e
            } else
                vt = 536870912;
        return e = gt.current,
        e !== null && (e.flags |= 32),
        vt
    }
    function ct(e, t, l) {
        (e === Te && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null) && (_a(e, 0),
        Al(e, se, vt, !1)),
        Za(e, l),
        ((me & 2) === 0 || e !== Te) && (e === Te && ((me & 2) === 0 && (Pl |= l),
        _e === 4 && Al(e, se, vt, !1)),
        qt(e))
    }
    function cd(e, t, l) {
        if ((me & 6) !== 0)
            throw Error(r(327));
        var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Xa(e, t)
          , n = a ? ip(e, t) : yr(e, t, !0)
          , i = a;
        do {
            if (n === 0) {
                Ca && !a && Al(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                i && !ap(l)) {
                    n = yr(e, t, !1),
                    i = !1;
                    continue
                }
                if (n === 2) {
                    if (i = t,
                    e.errorRecoveryDisabledLanes & i)
                        var f = 0;
                    else
                        f = e.pendingLanes & -536870913,
                        f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        t = f;
                        e: {
                            var m = e;
                            n = On;
                            var b = m.current.memoizedState.isDehydrated;
                            if (b && (_a(m, f).flags |= 256),
                            f = yr(m, f, !1),
                            f !== 2) {
                                if (or && !b) {
                                    m.errorRecoveryDisabledLanes |= i,
                                    Pl |= i,
                                    n = 4;
                                    break e
                                }
                                i = rt,
                                rt = n,
                                i !== null && (rt === null ? rt = i : rt.push.apply(rt, i))
                            }
                            n = f
                        }
                        if (i = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    _a(e, 0),
                    Al(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    i = n,
                    i) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Al(a, t, vt, !El);
                        break e;
                    case 2:
                        rt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (n = Vi + 300 - ot(),
                    10 < n)) {
                        if (Al(a, t, vt, !El),
                        ei(a, 0, !0) !== 0)
                            break e;
                        nl = t,
                        a.timeoutHandle = Yd(od.bind(null, a, l, rt, Xi, dr, t, vt, Pl, Na, El, i, "Throttled", -0, 0), n);
                        break e
                    }
                    od(a, l, rt, Xi, dr, t, vt, Pl, Na, El, i, null, -0, 0)
                }
            }
            break
        } while (!0);
        qt(e)
    }
    function od(e, t, l, a, n, i, f, m, b, A, M, j, R, C) {
        if (e.timeoutHandle = -1,
        j = t.subtreeFlags,
        j & 8192 || (j & 16785408) === 16785408) {
            j = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Qt
            },
            ld(t, i, j);
            var Z = (i & 62914560) === i ? Vi - ot() : (i & 4194048) === i ? ud - ot() : 0;
            if (Z = Gp(j, Z),
            Z !== null) {
                nl = i,
                e.cancelPendingCommit = Z(vd.bind(null, e, t, i, l, a, n, f, m, b, M, j, null, R, C)),
                Al(e, i, f, !A);
                return
            }
        }
        vd(e, t, i, l, a, n, f, m, b)
    }
    function ap(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ht(i(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
            t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                t = l;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Al(e, t, l, a) {
        t &= ~fr,
        t &= ~Pl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        a && (e.warmLanes |= t),
        a = e.expirationTimes;
        for (var n = t; 0 < n; ) {
            var i = 31 - dt(n)
              , f = 1 << i;
            a[i] = -1,
            n &= ~f
        }
        l !== 0 && vc(e, l, t)
    }
    function Zi() {
        return (me & 6) === 0 ? (An(0),
        !1) : !0
    }
    function pr() {
        if (ne !== null) {
            if (ve === 0)
                var e = ne.return;
            else
                e = ne,
                Jt = Xl = null,
                Ms(e),
                xa = null,
                rn = 0,
                e = ne;
            for (; e !== null; )
                Gf(e.alternate, e),
                e = e.return;
            ne = null
        }
    }
    function _a(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
        Tp(l)),
        l = e.cancelPendingCommit,
        l !== null && (e.cancelPendingCommit = null,
        l()),
        nl = 0,
        pr(),
        Te = e,
        ne = l = Zt(e.current, null),
        se = t,
        ve = 0,
        yt = null,
        El = !1,
        Ca = Xa(e, t),
        or = !1,
        Na = vt = fr = Pl = Tl = _e = 0,
        rt = On = null,
        dr = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
            a &= t; 0 < a; ) {
                var n = 31 - dt(a)
                  , i = 1 << n;
                t |= e[n],
                a &= ~i
            }
        return al = t,
        di(),
        l
    }
    function fd(e, t) {
        te = null,
        D.H = pn,
        t === Sa || t === Si ? (t = Ao(),
        ve = 3) : t === Ss ? (t = Ao(),
        ve = 4) : ve = t === ks ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        yt = t,
        ne === null && (_e = 1,
        wi(e, Ot(t, e.current)))
    }
    function dd() {
        var e = gt.current;
        return e === null ? !0 : (se & 4194048) === se ? Ct === null : (se & 62914560) === se || (se & 536870912) !== 0 ? e === Ct : !1
    }
    function hd() {
        var e = D.H;
        return D.H = pn,
        e === null ? pn : e
    }
    function md() {
        var e = D.A;
        return D.A = tp,
        e
    }
    function Ki() {
        _e = 4,
        El || (se & 4194048) !== se && gt.current !== null || (Ca = !0),
        (Tl & 134217727) === 0 && (Pl & 134217727) === 0 || Te === null || Al(Te, se, vt, !1)
    }
    function yr(e, t, l) {
        var a = me;
        me |= 2;
        var n = hd()
          , i = md();
        (Te !== e || se !== t) && (Xi = null,
        _a(e, t)),
        t = !1;
        var f = _e;
        e: do
            try {
                if (ve !== 0 && ne !== null) {
                    var m = ne
                      , b = yt;
                    switch (ve) {
                    case 8:
                        pr(),
                        f = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        gt.current === null && (t = !0);
                        var A = ve;
                        if (ve = 0,
                        yt = null,
                        Ma(e, m, b, A),
                        l && Ca) {
                            f = 0;
                            break e
                        }
                        break;
                    default:
                        A = ve,
                        ve = 0,
                        yt = null,
                        Ma(e, m, b, A)
                    }
                }
                np(),
                f = _e;
                break
            } catch (M) {
                fd(e, M)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Jt = Xl = null,
        me = a,
        D.H = n,
        D.A = i,
        ne === null && (Te = null,
        se = 0,
        di()),
        f
    }
    function np() {
        for (; ne !== null; )
            gd(ne)
    }
    function ip(e, t) {
        var l = me;
        me |= 2;
        var a = hd()
          , n = md();
        Te !== e || se !== t ? (Xi = null,
        Qi = ot() + 500,
        _a(e, t)) : Ca = Xa(e, t);
        e: do
            try {
                if (ve !== 0 && ne !== null) {
                    t = ne;
                    var i = yt;
                    t: switch (ve) {
                    case 1:
                        ve = 0,
                        yt = null,
                        Ma(e, t, i, 1);
                        break;
                    case 2:
                    case 9:
                        if (Oo(i)) {
                            ve = 0,
                            yt = null,
                            pd(t);
                            break
                        }
                        t = function() {
                            ve !== 2 && ve !== 9 || Te !== e || (ve = 7),
                            qt(e)
                        }
                        ,
                        i.then(t, t);
                        break e;
                    case 3:
                        ve = 7;
                        break e;
                    case 4:
                        ve = 5;
                        break e;
                    case 7:
                        Oo(i) ? (ve = 0,
                        yt = null,
                        pd(t)) : (ve = 0,
                        yt = null,
                        Ma(e, t, i, 7));
                        break;
                    case 5:
                        var f = null;
                        switch (ne.tag) {
                        case 26:
                            f = ne.memoizedState;
                        case 5:
                        case 27:
                            var m = ne;
                            if (f ? th(f) : m.stateNode.complete) {
                                ve = 0,
                                yt = null;
                                var b = m.sibling;
                                if (b !== null)
                                    ne = b;
                                else {
                                    var A = m.return;
                                    A !== null ? (ne = A,
                                    Ji(A)) : ne = null
                                }
                                break t
                            }
                        }
                        ve = 0,
                        yt = null,
                        Ma(e, t, i, 5);
                        break;
                    case 6:
                        ve = 0,
                        yt = null,
                        Ma(e, t, i, 6);
                        break;
                    case 8:
                        pr(),
                        _e = 6;
                        break e;
                    default:
                        throw Error(r(462))
                    }
                }
                up();
                break
            } catch (M) {
                fd(e, M)
            }
        while (!0);
        return Jt = Xl = null,
        D.H = a,
        D.A = n,
        me = l,
        ne !== null ? 0 : (Te = null,
        se = 0,
        di(),
        _e)
    }
    function up() {
        for (; ne !== null && !Nm(); )
            gd(ne)
    }
    function gd(e) {
        var t = qf(e.alternate, e, al);
        e.memoizedProps = e.pendingProps,
        t === null ? Ji(e) : ne = t
    }
    function pd(e) {
        var t = e
          , l = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Uf(l, t, t.pendingProps, t.type, void 0, se);
            break;
        case 11:
            t = Uf(l, t, t.pendingProps, t.type.render, t.ref, se);
            break;
        case 5:
            Ms(t);
        default:
            Gf(l, t),
            t = ne = ho(t, al),
            t = qf(l, t, al)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Ji(e) : ne = t
    }
    function Ma(e, t, l, a) {
        Jt = Xl = null,
        Ms(t),
        xa = null,
        rn = 0;
        var n = t.return;
        try {
            if (kg(e, n, t, l, se)) {
                _e = 1,
                wi(e, Ot(l, e.current)),
                ne = null;
                return
            }
        } catch (i) {
            if (n !== null)
                throw ne = n,
                i;
            _e = 1,
            wi(e, Ot(l, e.current)),
            ne = null;
            return
        }
        t.flags & 32768 ? (oe || a === 1 ? e = !0 : Ca || (se & 536870912) !== 0 ? e = !1 : (El = e = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = gt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        yd(t, e)) : Ji(t)
    }
    function Ji(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                yd(t, El);
                return
            }
            e = t.return;
            var l = Wg(t.alternate, t, al);
            if (l !== null) {
                ne = l;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ne = t;
                return
            }
            ne = t = e
        } while (t !== null);
        _e === 0 && (_e = 5)
    }
    function yd(e, t) {
        do {
            var l = Ig(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                ne = l;
                return
            }
            if (l = e.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                ne = e;
                return
            }
            ne = e = l
        } while (e !== null);
        _e = 6,
        ne = null
    }
    function vd(e, t, l, a, n, i, f, m, b) {
        e.cancelPendingCommit = null;
        do
            ki();
        while (Ye !== 0);
        if ((me & 6) !== 0)
            throw Error(r(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(r(177));
            if (i = t.lanes | t.childLanes,
            i |= is,
            qm(e, l, i, f, m, b),
            e === Te && (ne = Te = null,
            se = 0),
            Da = t,
            zl = e,
            nl = l,
            hr = i,
            mr = n,
            sd = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            op(Fn, function() {
                return Td(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = D.T,
                D.T = null,
                n = q.p,
                q.p = 2,
                f = me,
                me |= 4;
                try {
                    Pg(e, t, l)
                } finally {
                    me = f,
                    q.p = n,
                    D.T = a
                }
            }
            Ye = 1,
            bd(),
            Sd(),
            xd()
        }
    }
    function bd() {
        if (Ye === 1) {
            Ye = 0;
            var e = zl
              , t = Da
              , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = D.T,
                D.T = null;
                var a = q.p;
                q.p = 2;
                var n = me;
                me |= 4;
                try {
                    Pf(t, e);
                    var i = Nr
                      , f = ao(e.containerInfo)
                      , m = i.focusedElem
                      , b = i.selectionRange;
                    if (f !== m && m && m.ownerDocument && lo(m.ownerDocument.documentElement, m)) {
                        if (b !== null && es(m)) {
                            var A = b.start
                              , M = b.end;
                            if (M === void 0 && (M = A),
                            "selectionStart"in m)
                                m.selectionStart = A,
                                m.selectionEnd = Math.min(M, m.value.length);
                            else {
                                var j = m.ownerDocument || document
                                  , R = j && j.defaultView || window;
                                if (R.getSelection) {
                                    var C = R.getSelection()
                                      , Z = m.textContent.length
                                      , F = Math.min(b.start, Z)
                                      , Ee = b.end === void 0 ? F : Math.min(b.end, Z);
                                    !C.extend && F > Ee && (f = Ee,
                                    Ee = F,
                                    F = f);
                                    var T = to(m, F)
                                      , x = to(m, Ee);
                                    if (T && x && (C.rangeCount !== 1 || C.anchorNode !== T.node || C.anchorOffset !== T.offset || C.focusNode !== x.node || C.focusOffset !== x.offset)) {
                                        var z = j.createRange();
                                        z.setStart(T.node, T.offset),
                                        C.removeAllRanges(),
                                        F > Ee ? (C.addRange(z),
                                        C.extend(x.node, x.offset)) : (z.setEnd(x.node, x.offset),
                                        C.addRange(z))
                                    }
                                }
                            }
                        }
                        for (j = [],
                        C = m; C = C.parentNode; )
                            C.nodeType === 1 && j.push({
                                element: C,
                                left: C.scrollLeft,
                                top: C.scrollTop
                            });
                        for (typeof m.focus == "function" && m.focus(),
                        m = 0; m < j.length; m++) {
                            var L = j[m];
                            L.element.scrollLeft = L.left,
                            L.element.scrollTop = L.top
                        }
                    }
                    uu = !!Cr,
                    Nr = Cr = null
                } finally {
                    me = n,
                    q.p = a,
                    D.T = l
                }
            }
            e.current = t,
            Ye = 2
        }
    }
    function Sd() {
        if (Ye === 2) {
            Ye = 0;
            var e = zl
              , t = Da
              , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = D.T,
                D.T = null;
                var a = q.p;
                q.p = 2;
                var n = me;
                me |= 4;
                try {
                    kf(e, t.alternate, t)
                } finally {
                    me = n,
                    q.p = a,
                    D.T = l
                }
            }
            Ye = 3
        }
    }
    function xd() {
        if (Ye === 4 || Ye === 3) {
            Ye = 0,
            Dm();
            var e = zl
              , t = Da
              , l = nl
              , a = sd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0,
            Da = zl = null,
            Ed(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (Ol = null),
            Lu(l),
            t = t.stateNode,
            ft && typeof ft.onCommitFiberRoot == "function")
                try {
                    ft.onCommitFiberRoot(Qa, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = D.T,
                n = q.p,
                q.p = 2,
                D.T = null;
                try {
                    for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
                        var m = a[f];
                        i(m.value, {
                            componentStack: m.stack
                        })
                    }
                } finally {
                    D.T = t,
                    q.p = n
                }
            }
            (nl & 3) !== 0 && ki(),
            qt(e),
            n = e.pendingLanes,
            (l & 261930) !== 0 && (n & 42) !== 0 ? e === gr ? zn++ : (zn = 0,
            gr = e) : zn = 0,
            An(0)
        }
    }
    function Ed(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        un(t)))
    }
    function ki() {
        return bd(),
        Sd(),
        xd(),
        Td()
    }
    function Td() {
        if (Ye !== 5)
            return !1;
        var e = zl
          , t = hr;
        hr = 0;
        var l = Lu(nl)
          , a = D.T
          , n = q.p;
        try {
            q.p = 32 > l ? 32 : l,
            D.T = null,
            l = mr,
            mr = null;
            var i = zl
              , f = nl;
            if (Ye = 0,
            Da = zl = null,
            nl = 0,
            (me & 6) !== 0)
                throw Error(r(331));
            var m = me;
            if (me |= 4,
            nd(i.current),
            td(i, i.current, f, l),
            me = m,
            An(0, !1),
            ft && typeof ft.onPostCommitFiberRoot == "function")
                try {
                    ft.onPostCommitFiberRoot(Qa, i)
                } catch {}
            return !0
        } finally {
            q.p = n,
            D.T = a,
            Ed(e, t)
        }
    }
    function Od(e, t, l) {
        t = Ot(l, t),
        t = Js(e.stateNode, t, 2),
        e = vl(e, t, 2),
        e !== null && (Za(e, 2),
        qt(e))
    }
    function be(e, t, l) {
        if (e.tag === 3)
            Od(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Od(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ol === null || !Ol.has(a))) {
                        e = Ot(l, e),
                        l = zf(2),
                        a = vl(t, l, 2),
                        a !== null && (Af(l, a, t, e),
                        Za(a, 2),
                        qt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function vr(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new lp;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
            n === void 0 && (n = new Set,
            a.set(t, n));
        n.has(l) || (or = !0,
        n.add(l),
        e = sp.bind(null, e, t, l),
        t.then(e, e))
    }
    function sp(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        e.pingedLanes |= e.suspendedLanes & l,
        e.warmLanes &= ~l,
        Te === e && (se & l) === l && (_e === 4 || _e === 3 && (se & 62914560) === se && 300 > ot() - Vi ? (me & 2) === 0 && _a(e, 0) : fr |= l,
        Na === se && (Na = 0)),
        qt(e)
    }
    function zd(e, t) {
        t === 0 && (t = yc()),
        e = Gl(e, t),
        e !== null && (Za(e, t),
        qt(e))
    }
    function rp(e) {
        var t = e.memoizedState
          , l = 0;
        t !== null && (l = t.retryLane),
        zd(e, l)
    }
    function cp(e, t) {
        var l = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var a = e.stateNode
              , n = e.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        a !== null && a.delete(t),
        zd(e, l)
    }
    function op(e, t) {
        return _u(e, t)
    }
    var $i = null
      , Ua = null
      , br = !1
      , Fi = !1
      , Sr = !1
      , Rl = 0;
    function qt(e) {
        e !== Ua && e.next === null && (Ua === null ? $i = Ua = e : Ua = Ua.next = e),
        Fi = !0,
        br || (br = !0,
        dp())
    }
    function An(e, t) {
        if (!Sr && Fi) {
            Sr = !0;
            do
                for (var l = !1, a = $i; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var i = 0;
                        else {
                            var f = a.suspendedLanes
                              , m = a.pingedLanes;
                            i = (1 << 31 - dt(42 | e) + 1) - 1,
                            i &= n & ~(f & ~m),
                            i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
                        }
                        i !== 0 && (l = !0,
                        Nd(a, i))
                    } else
                        i = se,
                        i = ei(a, a === Te ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (i & 3) === 0 || Xa(a, i) || (l = !0,
                        Nd(a, i));
                    a = a.next
                }
            while (l);
            Sr = !1
        }
    }
    function fp() {
        Ad()
    }
    function Ad() {
        Fi = br = !1;
        var e = 0;
        Rl !== 0 && Ep() && (e = Rl);
        for (var t = ot(), l = null, a = $i; a !== null; ) {
            var n = a.next
              , i = Rd(a, t);
            i === 0 ? (a.next = null,
            l === null ? $i = n : l.next = n,
            n === null && (Ua = l)) : (l = a,
            (e !== 0 || (i & 3) !== 0) && (Fi = !0)),
            a = n
        }
        Ye !== 0 && Ye !== 5 || An(e),
        Rl !== 0 && (Rl = 0)
    }
    function Rd(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var f = 31 - dt(i)
              , m = 1 << f
              , b = n[f];
            b === -1 ? ((m & l) === 0 || (m & a) !== 0) && (n[f] = Bm(m, t)) : b <= t && (e.expiredLanes |= m),
            i &= ~m
        }
        if (t = Te,
        l = se,
        l = ei(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a = e.callbackNode,
        l === 0 || e === t && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Mu(a),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((l & 3) === 0 || Xa(e, l)) {
            if (t = l & -l,
            t === e.callbackPriority)
                return t;
            switch (a !== null && Mu(a),
            Lu(l)) {
            case 2:
            case 8:
                l = gc;
                break;
            case 32:
                l = Fn;
                break;
            case 268435456:
                l = pc;
                break;
            default:
                l = Fn
            }
            return a = Cd.bind(null, e),
            l = _u(l, a),
            e.callbackPriority = t,
            e.callbackNode = l,
            t
        }
        return a !== null && a !== null && Mu(a),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Cd(e, t) {
        if (Ye !== 0 && Ye !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var l = e.callbackNode;
        if (ki() && e.callbackNode !== l)
            return null;
        var a = se;
        return a = ei(e, e === Te ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a === 0 ? null : (cd(e, a, t),
        Rd(e, ot()),
        e.callbackNode != null && e.callbackNode === l ? Cd.bind(null, e) : null)
    }
    function Nd(e, t) {
        if (ki())
            return null;
        cd(e, t, !0)
    }
    function dp() {
        Op(function() {
            (me & 6) !== 0 ? _u(mc, fp) : Ad()
        })
    }
    function xr() {
        if (Rl === 0) {
            var e = va;
            e === 0 && (e = Wn,
            Wn <<= 1,
            (Wn & 261888) === 0 && (Wn = 256)),
            Rl = e
        }
        return Rl
    }
    function Dd(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ni("" + e)
    }
    function _d(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
        l.value = t.value,
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        e = new FormData(e),
        l.parentNode.removeChild(l),
        e
    }
    function hp(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var i = Dd((n[at] || null).action)
              , f = a.submitter;
            f && (t = (t = f[at] || null) ? Dd(t.formAction) : f.getAttribute("formAction"),
            t !== null && (i = t,
            f = null));
            var m = new ri("action","action",null,a,n);
            e.push({
                event: m,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Rl !== 0) {
                                var b = f ? _d(n, f) : new FormData(n);
                                Gs(l, {
                                    pending: !0,
                                    data: b,
                                    method: n.method,
                                    action: i
                                }, null, b)
                            }
                        } else
                            typeof i == "function" && (m.preventDefault(),
                            b = f ? _d(n, f) : new FormData(n),
                            Gs(l, {
                                pending: !0,
                                data: b,
                                method: n.method,
                                action: i
                            }, i, b))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var Er = 0; Er < ns.length; Er++) {
        var Tr = ns[Er]
          , mp = Tr.toLowerCase()
          , gp = Tr[0].toUpperCase() + Tr.slice(1);
        Mt(mp, "on" + gp)
    }
    Mt(uo, "onAnimationEnd"),
    Mt(so, "onAnimationIteration"),
    Mt(ro, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(_g, "onTransitionRun"),
    Mt(Mg, "onTransitionStart"),
    Mt(Ug, "onTransitionCancel"),
    Mt(co, "onTransitionEnd"),
    na("onMouseEnter", ["mouseout", "mouseover"]),
    na("onMouseLeave", ["mouseout", "mouseover"]),
    na("onPointerEnter", ["pointerout", "pointerover"]),
    na("onPointerLeave", ["pointerout", "pointerover"]),
    Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Hl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , pp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rn));
    function Md(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l]
              , n = a.event;
            a = a.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var f = a.length - 1; 0 <= f; f--) {
                        var m = a[f]
                          , b = m.instance
                          , A = m.currentTarget;
                        if (m = m.listener,
                        b !== i && n.isPropagationStopped())
                            break e;
                        i = m,
                        n.currentTarget = A;
                        try {
                            i(n)
                        } catch (M) {
                            fi(M)
                        }
                        n.currentTarget = null,
                        i = b
                    }
                else
                    for (f = 0; f < a.length; f++) {
                        if (m = a[f],
                        b = m.instance,
                        A = m.currentTarget,
                        m = m.listener,
                        b !== i && n.isPropagationStopped())
                            break e;
                        i = m,
                        n.currentTarget = A;
                        try {
                            i(n)
                        } catch (M) {
                            fi(M)
                        }
                        n.currentTarget = null,
                        i = b
                    }
            }
        }
    }
    function ie(e, t) {
        var l = t[ju];
        l === void 0 && (l = t[ju] = new Set);
        var a = e + "__bubble";
        l.has(a) || (Ud(t, e, 2, !1),
        l.add(a))
    }
    function Or(e, t, l) {
        var a = 0;
        t && (a |= 4),
        Ud(l, e, a, t)
    }
    var Wi = "_reactListening" + Math.random().toString(36).slice(2);
    function zr(e) {
        if (!e[Wi]) {
            e[Wi] = !0,
            Oc.forEach(function(l) {
                l !== "selectionchange" && (pp.has(l) || Or(l, !1, e),
                Or(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Wi] || (t[Wi] = !0,
            Or("selectionchange", !1, t))
        }
    }
    function Ud(e, t, l, a) {
        switch (rh(t)) {
        case 2:
            var n = Xp;
            break;
        case 8:
            n = Zp;
            break;
        default:
            n = Yr
        }
        l = n.bind(null, t, l, e),
        n = void 0,
        !Zu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
        a ? n !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
            passive: n
        }) : e.addEventListener(t, l, !1)
    }
    function Ar(e, t, l, a, n) {
        var i = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var m = a.stateNode.containerInfo;
                    if (m === n)
                        break;
                    if (f === 4)
                        for (f = a.return; f !== null; ) {
                            var b = f.tag;
                            if ((b === 3 || b === 4) && f.stateNode.containerInfo === n)
                                return;
                            f = f.return
                        }
                    for (; m !== null; ) {
                        if (f = ta(m),
                        f === null)
                            return;
                        if (b = f.tag,
                        b === 5 || b === 6 || b === 26 || b === 27) {
                            a = i = f;
                            continue e
                        }
                        m = m.parentNode
                    }
                }
                a = a.return
            }
        jc(function() {
            var A = i
              , M = Qu(l)
              , j = [];
            e: {
                var R = oo.get(e);
                if (R !== void 0) {
                    var C = ri
                      , Z = e;
                    switch (e) {
                    case "keypress":
                        if (ui(l) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        C = cg;
                        break;
                    case "focusin":
                        Z = "focus",
                        C = $u;
                        break;
                    case "focusout":
                        Z = "blur",
                        C = $u;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        C = $u;
                        break;
                    case "click":
                        if (l.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        C = qc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        C = Wm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        C = dg;
                        break;
                    case uo:
                    case so:
                    case ro:
                        C = eg;
                        break;
                    case co:
                        C = mg;
                        break;
                    case "scroll":
                    case "scrollend":
                        C = $m;
                        break;
                    case "wheel":
                        C = pg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        C = lg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        C = Gc;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        C = vg
                    }
                    var F = (t & 4) !== 0
                      , Ee = !F && (e === "scroll" || e === "scrollend")
                      , T = F ? R !== null ? R + "Capture" : null : R;
                    F = [];
                    for (var x = A, z; x !== null; ) {
                        var L = x;
                        if (z = L.stateNode,
                        L = L.tag,
                        L !== 5 && L !== 26 && L !== 27 || z === null || T === null || (L = ka(x, T),
                        L != null && F.push(Cn(x, L, z))),
                        Ee)
                            break;
                        x = x.return
                    }
                    0 < F.length && (R = new C(R,Z,null,l,M),
                    j.push({
                        event: R,
                        listeners: F
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (R = e === "mouseover" || e === "pointerover",
                    C = e === "mouseout" || e === "pointerout",
                    R && l !== Vu && (Z = l.relatedTarget || l.fromElement) && (ta(Z) || Z[ea]))
                        break e;
                    if ((C || R) && (R = M.window === M ? M : (R = M.ownerDocument) ? R.defaultView || R.parentWindow : window,
                    C ? (Z = l.relatedTarget || l.toElement,
                    C = A,
                    Z = Z ? ta(Z) : null,
                    Z !== null && (Ee = d(Z),
                    F = Z.tag,
                    Z !== Ee || F !== 5 && F !== 27 && F !== 6) && (Z = null)) : (C = null,
                    Z = A),
                    C !== Z)) {
                        if (F = qc,
                        L = "onMouseLeave",
                        T = "onMouseEnter",
                        x = "mouse",
                        (e === "pointerout" || e === "pointerover") && (F = Gc,
                        L = "onPointerLeave",
                        T = "onPointerEnter",
                        x = "pointer"),
                        Ee = C == null ? R : Ja(C),
                        z = Z == null ? R : Ja(Z),
                        R = new F(L,x + "leave",C,l,M),
                        R.target = Ee,
                        R.relatedTarget = z,
                        L = null,
                        ta(M) === A && (F = new F(T,x + "enter",Z,l,M),
                        F.target = z,
                        F.relatedTarget = Ee,
                        L = F),
                        Ee = L,
                        C && Z)
                            t: {
                                for (F = yp,
                                T = C,
                                x = Z,
                                z = 0,
                                L = T; L; L = F(L))
                                    z++;
                                L = 0;
                                for (var k = x; k; k = F(k))
                                    L++;
                                for (; 0 < z - L; )
                                    T = F(T),
                                    z--;
                                for (; 0 < L - z; )
                                    x = F(x),
                                    L--;
                                for (; z--; ) {
                                    if (T === x || x !== null && T === x.alternate) {
                                        F = T;
                                        break t
                                    }
                                    T = F(T),
                                    x = F(x)
                                }
                                F = null
                            }
                        else
                            F = null;
                        C !== null && wd(j, R, C, F, !1),
                        Z !== null && Ee !== null && wd(j, Ee, Z, F, !0)
                    }
                }
                e: {
                    if (R = A ? Ja(A) : window,
                    C = R.nodeName && R.nodeName.toLowerCase(),
                    C === "select" || C === "input" && R.type === "file")
                        var de = $c;
                    else if (Jc(R))
                        if (Fc)
                            de = Cg;
                        else {
                            de = Ag;
                            var K = zg
                        }
                    else
                        C = R.nodeName,
                        !C || C.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? A && Gu(A.elementType) && (de = $c) : de = Rg;
                    if (de && (de = de(e, A))) {
                        kc(j, de, l, M);
                        break e
                    }
                    K && K(e, R, A),
                    e === "focusout" && A && R.type === "number" && A.memoizedProps.value != null && Yu(R, "number", R.value)
                }
                switch (K = A ? Ja(A) : window,
                e) {
                case "focusin":
                    (Jc(K) || K.contentEditable === "true") && (oa = K,
                    ts = A,
                    ln = null);
                    break;
                case "focusout":
                    ln = ts = oa = null;
                    break;
                case "mousedown":
                    ls = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ls = !1,
                    no(j, l, M);
                    break;
                case "selectionchange":
                    if (Dg)
                        break;
                case "keydown":
                case "keyup":
                    no(j, l, M)
                }
                var le;
                if (Wu)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var re = "onCompositionStart";
                            break e;
                        case "compositionend":
                            re = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            re = "onCompositionUpdate";
                            break e
                        }
                        re = void 0
                    }
                else
                    ca ? Zc(e, l) && (re = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (re = "onCompositionStart");
                re && (Vc && l.locale !== "ko" && (ca || re !== "onCompositionStart" ? re === "onCompositionEnd" && ca && (le = Hc()) : (fl = M,
                Ku = "value"in fl ? fl.value : fl.textContent,
                ca = !0)),
                K = Ii(A, re),
                0 < K.length && (re = new Yc(re,e,null,l,M),
                j.push({
                    event: re,
                    listeners: K
                }),
                le ? re.data = le : (le = Kc(l),
                le !== null && (re.data = le)))),
                (le = Sg ? xg(e, l) : Eg(e, l)) && (re = Ii(A, "onBeforeInput"),
                0 < re.length && (K = new Yc("onBeforeInput","beforeinput",null,l,M),
                j.push({
                    event: K,
                    listeners: re
                }),
                K.data = le)),
                hp(j, e, A, l, M)
            }
            Md(j, t)
        })
    }
    function Cn(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function Ii(e, t) {
        for (var l = t + "Capture", a = []; e !== null; ) {
            var n = e
              , i = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || i === null || (n = ka(e, l),
            n != null && a.unshift(Cn(e, n, i)),
            n = ka(e, t),
            n != null && a.push(Cn(e, n, i))),
            e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function yp(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function wd(e, t, l, a, n) {
        for (var i = t._reactName, f = []; l !== null && l !== a; ) {
            var m = l
              , b = m.alternate
              , A = m.stateNode;
            if (m = m.tag,
            b !== null && b === a)
                break;
            m !== 5 && m !== 26 && m !== 27 || A === null || (b = A,
            n ? (A = ka(l, i),
            A != null && f.unshift(Cn(l, A, b))) : n || (A = ka(l, i),
            A != null && f.push(Cn(l, A, b)))),
            l = l.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var vp = /\r\n?/g
      , bp = /\u0000|\uFFFD/g;
    function Ld(e) {
        return (typeof e == "string" ? e : "" + e).replace(vp, `
`).replace(bp, "")
    }
    function jd(e, t) {
        return t = Ld(t),
        Ld(e) === t
    }
    function xe(e, t, l, a, n, i) {
        switch (l) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ua(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ua(e, "" + a);
            break;
        case "className":
            li(e, "class", a);
            break;
        case "tabIndex":
            li(e, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            li(e, l, a);
            break;
        case "style":
            wc(e, a, i);
            break;
        case "data":
            if (t !== "object") {
                li(e, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || l !== "href")) {
                e.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = ni("" + a),
            e.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof i == "function" && (l === "formAction" ? (t !== "input" && xe(e, t, "name", n.name, n, null),
                xe(e, t, "formEncType", n.formEncType, n, null),
                xe(e, t, "formMethod", n.formMethod, n, null),
                xe(e, t, "formTarget", n.formTarget, n, null)) : (xe(e, t, "encType", n.encType, n, null),
                xe(e, t, "method", n.method, n, null),
                xe(e, t, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = ni("" + a),
            e.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (e.onclick = Qt);
            break;
        case "onScroll":
            a != null && ie("scroll", e);
            break;
        case "onScrollEnd":
            a != null && ie("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(r(60));
                    e.innerHTML = l
                }
            }
            break;
        case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            l = ni("" + a),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
            break;
        case "popover":
            ie("beforetoggle", e),
            ie("toggle", e),
            ti(e, "popover", a);
            break;
        case "xlinkActuate":
            Vt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Vt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Vt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Vt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Vt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Vt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            ti(e, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Jm.get(l) || l,
            ti(e, l, a))
        }
    }
    function Rr(e, t, l, a, n, i) {
        switch (l) {
        case "style":
            wc(e, a, i);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(r(60));
                    e.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? ua(e, a) : (typeof a == "number" || typeof a == "bigint") && ua(e, "" + a);
            break;
        case "onScroll":
            a != null && ie("scroll", e);
            break;
        case "onScrollEnd":
            a != null && ie("scrollend", e);
            break;
        case "onClick":
            a != null && (e.onclick = Qt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!zc.hasOwnProperty(l))
                e: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    t = l.slice(2, n ? l.length - 7 : void 0),
                    i = e[at] || null,
                    i = i != null ? i[l] : null,
                    typeof i == "function" && e.removeEventListener(t, i, n),
                    typeof a == "function")) {
                        typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                        e.addEventListener(t, a, n);
                        break e
                    }
                    l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : ti(e, l, a)
                }
        }
    }
    function Fe(e, t, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            ie("error", e),
            ie("load", e);
            var a = !1, n = !1, i;
            for (i in l)
                if (l.hasOwnProperty(i)) {
                    var f = l[i];
                    if (f != null)
                        switch (i) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            xe(e, t, i, f, l, null)
                        }
                }
            n && xe(e, t, "srcSet", l.srcSet, l, null),
            a && xe(e, t, "src", l.src, l, null);
            return;
        case "input":
            ie("invalid", e);
            var m = i = f = n = null
              , b = null
              , A = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var M = l[a];
                    if (M != null)
                        switch (a) {
                        case "name":
                            n = M;
                            break;
                        case "type":
                            f = M;
                            break;
                        case "checked":
                            b = M;
                            break;
                        case "defaultChecked":
                            A = M;
                            break;
                        case "value":
                            i = M;
                            break;
                        case "defaultValue":
                            m = M;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null)
                                throw Error(r(137, t));
                            break;
                        default:
                            xe(e, t, a, M, l, null)
                        }
                }
            Dc(e, i, m, b, A, f, n, !1);
            return;
        case "select":
            ie("invalid", e),
            a = f = i = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (m = l[n],
                m != null))
                    switch (n) {
                    case "value":
                        i = m;
                        break;
                    case "defaultValue":
                        f = m;
                        break;
                    case "multiple":
                        a = m;
                    default:
                        xe(e, t, n, m, l, null)
                    }
            t = i,
            l = f,
            e.multiple = !!a,
            t != null ? ia(e, !!a, t, !1) : l != null && ia(e, !!a, l, !0);
            return;
        case "textarea":
            ie("invalid", e),
            i = n = a = null;
            for (f in l)
                if (l.hasOwnProperty(f) && (m = l[f],
                m != null))
                    switch (f) {
                    case "value":
                        a = m;
                        break;
                    case "defaultValue":
                        n = m;
                        break;
                    case "children":
                        i = m;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (m != null)
                            throw Error(r(91));
                        break;
                    default:
                        xe(e, t, f, m, l, null)
                    }
            Mc(e, a, n, i);
            return;
        case "option":
            for (b in l)
                l.hasOwnProperty(b) && (a = l[b],
                a != null) && (b === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : xe(e, t, b, a, l, null));
            return;
        case "dialog":
            ie("beforetoggle", e),
            ie("toggle", e),
            ie("cancel", e),
            ie("close", e);
            break;
        case "iframe":
        case "object":
            ie("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Rn.length; a++)
                ie(Rn[a], e);
            break;
        case "image":
            ie("error", e),
            ie("load", e);
            break;
        case "details":
            ie("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            ie("error", e),
            ie("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (A in l)
                if (l.hasOwnProperty(A) && (a = l[A],
                a != null))
                    switch (A) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, t));
                    default:
                        xe(e, t, A, a, l, null)
                    }
            return;
        default:
            if (Gu(t)) {
                for (M in l)
                    l.hasOwnProperty(M) && (a = l[M],
                    a !== void 0 && Rr(e, t, M, a, l, void 0));
                return
            }
        }
        for (m in l)
            l.hasOwnProperty(m) && (a = l[m],
            a != null && xe(e, t, m, a, l, null))
    }
    function Sp(e, t, l, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , i = null
              , f = null
              , m = null
              , b = null
              , A = null
              , M = null;
            for (C in l) {
                var j = l[C];
                if (l.hasOwnProperty(C) && j != null)
                    switch (C) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        b = j;
                    default:
                        a.hasOwnProperty(C) || xe(e, t, C, null, a, j)
                    }
            }
            for (var R in a) {
                var C = a[R];
                if (j = l[R],
                a.hasOwnProperty(R) && (C != null || j != null))
                    switch (R) {
                    case "type":
                        i = C;
                        break;
                    case "name":
                        n = C;
                        break;
                    case "checked":
                        A = C;
                        break;
                    case "defaultChecked":
                        M = C;
                        break;
                    case "value":
                        f = C;
                        break;
                    case "defaultValue":
                        m = C;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (C != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        C !== j && xe(e, t, R, C, a, j)
                    }
            }
            qu(e, f, m, b, A, M, i, n);
            return;
        case "select":
            C = f = m = R = null;
            for (i in l)
                if (b = l[i],
                l.hasOwnProperty(i) && b != null)
                    switch (i) {
                    case "value":
                        break;
                    case "multiple":
                        C = b;
                    default:
                        a.hasOwnProperty(i) || xe(e, t, i, null, a, b)
                    }
            for (n in a)
                if (i = a[n],
                b = l[n],
                a.hasOwnProperty(n) && (i != null || b != null))
                    switch (n) {
                    case "value":
                        R = i;
                        break;
                    case "defaultValue":
                        m = i;
                        break;
                    case "multiple":
                        f = i;
                    default:
                        i !== b && xe(e, t, n, i, a, b)
                    }
            t = m,
            l = f,
            a = C,
            R != null ? ia(e, !!l, R, !1) : !!a != !!l && (t != null ? ia(e, !!l, t, !0) : ia(e, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            C = R = null;
            for (m in l)
                if (n = l[m],
                l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m))
                    switch (m) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        xe(e, t, m, null, a, n)
                    }
            for (f in a)
                if (n = a[f],
                i = l[f],
                a.hasOwnProperty(f) && (n != null || i != null))
                    switch (f) {
                    case "value":
                        R = n;
                        break;
                    case "defaultValue":
                        C = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(r(91));
                        break;
                    default:
                        n !== i && xe(e, t, f, n, a, i)
                    }
            _c(e, R, C);
            return;
        case "option":
            for (var Z in l)
                R = l[Z],
                l.hasOwnProperty(Z) && R != null && !a.hasOwnProperty(Z) && (Z === "selected" ? e.selected = !1 : xe(e, t, Z, null, a, R));
            for (b in a)
                R = a[b],
                C = l[b],
                a.hasOwnProperty(b) && R !== C && (R != null || C != null) && (b === "selected" ? e.selected = R && typeof R != "function" && typeof R != "symbol" : xe(e, t, b, R, a, C));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var F in l)
                R = l[F],
                l.hasOwnProperty(F) && R != null && !a.hasOwnProperty(F) && xe(e, t, F, null, a, R);
            for (A in a)
                if (R = a[A],
                C = l[A],
                a.hasOwnProperty(A) && R !== C && (R != null || C != null))
                    switch (A) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(r(137, t));
                        break;
                    default:
                        xe(e, t, A, R, a, C)
                    }
            return;
        default:
            if (Gu(t)) {
                for (var Ee in l)
                    R = l[Ee],
                    l.hasOwnProperty(Ee) && R !== void 0 && !a.hasOwnProperty(Ee) && Rr(e, t, Ee, void 0, a, R);
                for (M in a)
                    R = a[M],
                    C = l[M],
                    !a.hasOwnProperty(M) || R === C || R === void 0 && C === void 0 || Rr(e, t, M, R, a, C);
                return
            }
        }
        for (var T in l)
            R = l[T],
            l.hasOwnProperty(T) && R != null && !a.hasOwnProperty(T) && xe(e, t, T, null, a, R);
        for (j in a)
            R = a[j],
            C = l[j],
            !a.hasOwnProperty(j) || R === C || R == null && C == null || xe(e, t, j, R, a, C)
    }
    function Hd(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function xp() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a]
                  , i = n.transferSize
                  , f = n.initiatorType
                  , m = n.duration;
                if (i && m && Hd(f)) {
                    for (f = 0,
                    m = n.responseEnd,
                    a += 1; a < l.length; a++) {
                        var b = l[a]
                          , A = b.startTime;
                        if (A > m)
                            break;
                        var M = b.transferSize
                          , j = b.initiatorType;
                        M && Hd(j) && (b = b.responseEnd,
                        f += M * (b < m ? 1 : (m - A) / (b - A)))
                    }
                    if (--a,
                    t += 8 * (i + f) / (n.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var Cr = null
      , Nr = null;
    function Pi(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Bd(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function qd(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Dr(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var _r = null;
    function Ep() {
        var e = window.event;
        return e && e.type === "popstate" ? e === _r ? !1 : (_r = e,
        !0) : (_r = null,
        !1)
    }
    var Yd = typeof setTimeout == "function" ? setTimeout : void 0
      , Tp = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Gd = typeof Promise == "function" ? Promise : void 0
      , Op = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(e) {
        return Gd.resolve(null).then(e).catch(zp)
    }
    : Yd;
    function zp(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Cl(e) {
        return e === "head"
    }
    function Vd(e, t) {
        var l = t
          , a = 0;
        do {
            var n = l.nextSibling;
            if (e.removeChild(l),
            n && n.nodeType === 8)
                if (l = n.data,
                l === "/$" || l === "/&") {
                    if (a === 0) {
                        e.removeChild(n),
                        Ha(t);
                        return
                    }
                    a--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    a++;
                else if (l === "html")
                    Nn(e.ownerDocument.documentElement);
                else if (l === "head") {
                    l = e.ownerDocument.head,
                    Nn(l);
                    for (var i = l.firstChild; i; ) {
                        var f = i.nextSibling
                          , m = i.nodeName;
                        i[Ka] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i),
                        i = f
                    }
                } else
                    l === "body" && Nn(e.ownerDocument.body);
            l = n
        } while (l);
        Ha(t)
    }
    function Qd(e, t) {
        var l = e;
        e = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display,
            l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
            l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue,
            l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
            a && a.nodeType === 8)
                if (l = a.data,
                l === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
            l = a
        } while (l)
    }
    function Mr(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Mr(l),
                Hu(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(l)
        }
    }
    function Ap(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[Ka])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (i = e.getAttribute("rel"),
                        i === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (i = e.getAttribute("src"),
                        (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var i = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === i)
                    return e
            } else
                return e;
            if (e = Nt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Rp(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Nt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Xd(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Nt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Ur(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function wr(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function Cp(e, t) {
        var l = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || l.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            e._reactRetry = a
        }
    }
    function Nt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var Lr = null;
    function Zd(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "/$" || l === "/&") {
                    if (t === 0)
                        return Nt(e.nextSibling);
                    t--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Kd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l !== "/$" && l !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Jd(e, t, l) {
        switch (t = Pi(l),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(r(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(r(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(r(454));
            return e;
        default:
            throw Error(r(451))
        }
    }
    function Nn(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Hu(e)
    }
    var Dt = new Map
      , kd = new Set;
    function eu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var il = q.d;
    q.d = {
        f: Np,
        r: Dp,
        D: _p,
        C: Mp,
        L: Up,
        m: wp,
        X: jp,
        S: Lp,
        M: Hp
    };
    function Np() {
        var e = il.f()
          , t = Zi();
        return e || t
    }
    function Dp(e) {
        var t = la(e);
        t !== null && t.tag === 5 && t.type === "form" ? ff(t) : il.r(e)
    }
    var wa = typeof document > "u" ? null : document;
    function $d(e, t, l) {
        var a = wa;
        if (a && typeof t == "string" && t) {
            var n = Et(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            kd.has(n) || (kd.add(n),
            e = {
                rel: e,
                crossOrigin: l,
                href: t
            },
            a.querySelector(n) === null && (t = a.createElement("link"),
            Fe(t, "link", e),
            Qe(t),
            a.head.appendChild(t)))
        }
    }
    function _p(e) {
        il.D(e),
        $d("dns-prefetch", e, null)
    }
    function Mp(e, t) {
        il.C(e, t),
        $d("preconnect", e, t)
    }
    function Up(e, t, l) {
        il.L(e, t, l);
        var a = wa;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + Et(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Et(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + Et(l.imageSizes) + '"]')) : n += '[href="' + Et(e) + '"]';
            var i = n;
            switch (t) {
            case "style":
                i = La(e);
                break;
            case "script":
                i = ja(e)
            }
            Dt.has(i) || (e = v({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
            Dt.set(i, e),
            a.querySelector(n) !== null || t === "style" && a.querySelector(Dn(i)) || t === "script" && a.querySelector(_n(i)) || (t = a.createElement("link"),
            Fe(t, "link", e),
            Qe(t),
            a.head.appendChild(t)))
        }
    }
    function wp(e, t) {
        il.m(e, t);
        var l = wa;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , n = 'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(e) + '"]'
              , i = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                i = ja(e)
            }
            if (!Dt.has(i) && (e = v({
                rel: "modulepreload",
                href: e
            }, t),
            Dt.set(i, e),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(_n(i)))
                        return
                }
                a = l.createElement("link"),
                Fe(a, "link", e),
                Qe(a),
                l.head.appendChild(a)
            }
        }
    }
    function Lp(e, t, l) {
        il.S(e, t, l);
        var a = wa;
        if (a && e) {
            var n = aa(a).hoistableStyles
              , i = La(e);
            t = t || "default";
            var f = n.get(i);
            if (!f) {
                var m = {
                    loading: 0,
                    preload: null
                };
                if (f = a.querySelector(Dn(i)))
                    m.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                    (l = Dt.get(i)) && jr(e, l);
                    var b = f = a.createElement("link");
                    Qe(b),
                    Fe(b, "link", e),
                    b._p = new Promise(function(A, M) {
                        b.onload = A,
                        b.onerror = M
                    }
                    ),
                    b.addEventListener("load", function() {
                        m.loading |= 1
                    }),
                    b.addEventListener("error", function() {
                        m.loading |= 2
                    }),
                    m.loading |= 4,
                    tu(f, t, a)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: m
                },
                n.set(i, f)
            }
        }
    }
    function jp(e, t) {
        il.X(e, t);
        var l = wa;
        if (l && e) {
            var a = aa(l).hoistableScripts
              , n = ja(e)
              , i = a.get(n);
            i || (i = l.querySelector(_n(n)),
            i || (e = v({
                src: e,
                async: !0
            }, t),
            (t = Dt.get(n)) && Hr(e, t),
            i = l.createElement("script"),
            Qe(i),
            Fe(i, "link", e),
            l.head.appendChild(i)),
            i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            },
            a.set(n, i))
        }
    }
    function Hp(e, t) {
        il.M(e, t);
        var l = wa;
        if (l && e) {
            var a = aa(l).hoistableScripts
              , n = ja(e)
              , i = a.get(n);
            i || (i = l.querySelector(_n(n)),
            i || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Dt.get(n)) && Hr(e, t),
            i = l.createElement("script"),
            Qe(i),
            Fe(i, "link", e),
            l.head.appendChild(i)),
            i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            },
            a.set(n, i))
        }
    }
    function Fd(e, t, l, a) {
        var n = (n = ae.current) ? eu(n) : null;
        if (!n)
            throw Error(r(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (t = La(l.href),
            l = aa(n).hoistableStyles,
            a = l.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                e = La(l.href);
                var i = aa(n).hoistableStyles
                  , f = i.get(e);
                if (f || (n = n.ownerDocument || n,
                f = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                i.set(e, f),
                (i = n.querySelector(Dn(e))) && !i._p && (f.instance = i,
                f.state.loading = 5),
                Dt.has(e) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                Dt.set(e, l),
                i || Bp(n, e, l, f.state))),
                t && a === null)
                    throw Error(r(528, ""));
                return f
            }
            if (t && a !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return t = l.async,
            l = l.src,
            typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ja(l),
            l = aa(n).hoistableScripts,
            a = l.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, e))
        }
    }
    function La(e) {
        return 'href="' + Et(e) + '"'
    }
    function Dn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Wd(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Bp(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Fe(t, "link", l),
        Qe(t),
        e.head.appendChild(t))
    }
    function ja(e) {
        return '[src="' + Et(e) + '"]'
    }
    function _n(e) {
        return "script[async]" + e
    }
    function Id(e, t, l) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                if (a)
                    return t.instance = a,
                    Qe(a),
                    a;
                var n = v({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"),
                Qe(a),
                Fe(a, "style", n),
                tu(a, l.precedence, e),
                t.instance = a;
            case "stylesheet":
                n = La(l.href);
                var i = e.querySelector(Dn(n));
                if (i)
                    return t.state.loading |= 4,
                    t.instance = i,
                    Qe(i),
                    i;
                a = Wd(l),
                (n = Dt.get(n)) && jr(a, n),
                i = (e.ownerDocument || e).createElement("link"),
                Qe(i);
                var f = i;
                return f._p = new Promise(function(m, b) {
                    f.onload = m,
                    f.onerror = b
                }
                ),
                Fe(i, "link", a),
                t.state.loading |= 4,
                tu(i, l.precedence, e),
                t.instance = i;
            case "script":
                return i = ja(l.src),
                (n = e.querySelector(_n(i))) ? (t.instance = n,
                Qe(n),
                n) : (a = l,
                (n = Dt.get(i)) && (a = v({}, l),
                Hr(a, n)),
                e = e.ownerDocument || e,
                n = e.createElement("script"),
                Qe(n),
                Fe(n, "link", a),
                e.head.appendChild(n),
                t.instance = n);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            tu(a, l.precedence, e));
        return t.instance
    }
    function tu(e, t, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, f = 0; f < a.length; f++) {
            var m = a[f];
            if (m.dataset.precedence === t)
                i = m;
            else if (i !== n)
                break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
        t.insertBefore(e, t.firstChild))
    }
    function jr(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Hr(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var lu = null;
    function Pd(e, t, l) {
        if (lu === null) {
            var a = new Map
              , n = lu = new Map;
            n.set(l, a)
        } else
            n = lu,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
        l = l.getElementsByTagName(e),
        n = 0; n < l.length; n++) {
            var i = l[n];
            if (!(i[Ka] || i[Ke] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = i.getAttribute(t) || "";
                f = e + f;
                var m = a.get(f);
                m ? m.push(i) : a.set(f, [i])
            }
        }
        return a
    }
    function eh(e, t, l) {
        e = e.ownerDocument || e,
        e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function qp(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function th(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Yp(e, t, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = La(a.href)
                  , i = t.querySelector(Dn(n));
                if (i) {
                    t = i._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = au.bind(e),
                    t.then(e, e)),
                    l.state.loading |= 4,
                    l.instance = i,
                    Qe(i);
                    return
                }
                i = t.ownerDocument || t,
                a = Wd(a),
                (n = Dt.get(n)) && jr(a, n),
                i = i.createElement("link"),
                Qe(i);
                var f = i;
                f._p = new Promise(function(m, b) {
                    f.onload = m,
                    f.onerror = b
                }
                ),
                Fe(i, "link", a),
                l.instance = i
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(l, t),
            (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++,
            l = au.bind(e),
            t.addEventListener("load", l),
            t.addEventListener("error", l))
        }
    }
    var Br = 0;
    function Gp(e, t) {
        return e.stylesheets && e.count === 0 && iu(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(l) {
            var a = setTimeout(function() {
                if (e.stylesheets && iu(e, e.stylesheets),
                e.unsuspend) {
                    var i = e.unsuspend;
                    e.unsuspend = null,
                    i()
                }
            }, 6e4 + t);
            0 < e.imgBytes && Br === 0 && (Br = 62500 * xp());
            var n = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && iu(e, e.stylesheets),
                e.unsuspend)) {
                    var i = e.unsuspend;
                    e.unsuspend = null,
                    i()
                }
            }, (e.imgBytes > Br ? 50 : 800) + t);
            return e.unsuspend = l,
            function() {
                e.unsuspend = null,
                clearTimeout(a),
                clearTimeout(n)
            }
        }
        : null
    }
    function au() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                iu(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var nu = null;
    function iu(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        nu = new Map,
        t.forEach(Vp, e),
        nu = null,
        au.call(e))
    }
    function Vp(e, t) {
        if (!(t.state.loading & 4)) {
            var l = nu.get(e);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                nu.set(e, l);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
                    var f = n[i];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f),
                    a = f)
                }
                a && l.set(null, a)
            }
            n = t.instance,
            f = n.getAttribute("data-precedence"),
            i = l.get(f) || a,
            i === a && l.set(null, n),
            l.set(f, n),
            this.count++,
            a = au.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(n, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Mn = {
        $$typeof: J,
        Provider: null,
        Consumer: null,
        _currentValue: $,
        _currentValue2: $,
        _threadCount: 0
    };
    function Qp(e, t, l, a, n, i, f, m, b) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Uu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Uu(0),
        this.hiddenUpdates = Uu(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = i,
        this.onRecoverableError = f,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = b,
        this.incompleteTransitions = new Map
    }
    function lh(e, t, l, a, n, i, f, m, b, A, M, j) {
        return e = new Qp(e,t,l,f,b,A,M,j,m),
        t = 1,
        i === !0 && (t |= 24),
        i = mt(3, null, null, t),
        e.current = i,
        i.stateNode = e,
        t = ys(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        i.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: t
        },
        xs(i),
        e
    }
    function ah(e) {
        return e ? (e = ha,
        e) : ha
    }
    function nh(e, t, l, a, n, i) {
        n = ah(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = yl(t),
        a.payload = {
            element: l
        },
        i = i === void 0 ? null : i,
        i !== null && (a.callback = i),
        l = vl(e, a, t),
        l !== null && (ct(l, e, t),
        on(l, e, t))
    }
    function ih(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function qr(e, t) {
        ih(e, t),
        (e = e.alternate) && ih(e, t)
    }
    function uh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Gl(e, 67108864);
            t !== null && ct(t, e, 67108864),
            qr(e, 67108864)
        }
    }
    function sh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = bt();
            t = wu(t);
            var l = Gl(e, t);
            l !== null && ct(l, e, t),
            qr(e, t)
        }
    }
    var uu = !0;
    function Xp(e, t, l, a) {
        var n = D.T;
        D.T = null;
        var i = q.p;
        try {
            q.p = 2,
            Yr(e, t, l, a)
        } finally {
            q.p = i,
            D.T = n
        }
    }
    function Zp(e, t, l, a) {
        var n = D.T;
        D.T = null;
        var i = q.p;
        try {
            q.p = 8,
            Yr(e, t, l, a)
        } finally {
            q.p = i,
            D.T = n
        }
    }
    function Yr(e, t, l, a) {
        if (uu) {
            var n = Gr(a);
            if (n === null)
                Ar(e, t, a, su, l),
                ch(e, a);
            else if (Jp(n, e, t, l, a))
                a.stopPropagation();
            else if (ch(e, a),
            t & 4 && -1 < Kp.indexOf(e)) {
                for (; n !== null; ) {
                    var i = la(n);
                    if (i !== null)
                        switch (i.tag) {
                        case 3:
                            if (i = i.stateNode,
                            i.current.memoizedState.isDehydrated) {
                                var f = jl(i.pendingLanes);
                                if (f !== 0) {
                                    var m = i;
                                    for (m.pendingLanes |= 2,
                                    m.entangledLanes |= 2; f; ) {
                                        var b = 1 << 31 - dt(f);
                                        m.entanglements[1] |= b,
                                        f &= ~b
                                    }
                                    qt(i),
                                    (me & 6) === 0 && (Qi = ot() + 500,
                                    An(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            m = Gl(i, 2),
                            m !== null && ct(m, i, 2),
                            Zi(),
                            qr(i, 2)
                        }
                    if (i = Gr(a),
                    i === null && Ar(e, t, a, su, l),
                    i === n)
                        break;
                    n = i
                }
                n !== null && a.stopPropagation()
            } else
                Ar(e, t, a, null, l)
        }
    }
    function Gr(e) {
        return e = Qu(e),
        Vr(e)
    }
    var su = null;
    function Vr(e) {
        if (su = null,
        e = ta(e),
        e !== null) {
            var t = d(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = h(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 31) {
                    if (e = p(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return su = e,
        null
    }
    function rh(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (_m()) {
            case mc:
                return 2;
            case gc:
                return 8;
            case Fn:
            case Mm:
                return 32;
            case pc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Qr = !1
      , Nl = null
      , Dl = null
      , _l = null
      , Un = new Map
      , wn = new Map
      , Ml = []
      , Kp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function ch(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Nl = null;
            break;
        case "dragenter":
        case "dragleave":
            Dl = null;
            break;
        case "mouseover":
        case "mouseout":
            _l = null;
            break;
        case "pointerover":
        case "pointerout":
            Un.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            wn.delete(t.pointerId)
        }
    }
    function Ln(e, t, l, a, n, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: i,
            targetContainers: [n]
        },
        t !== null && (t = la(t),
        t !== null && uh(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
    }
    function Jp(e, t, l, a, n) {
        switch (t) {
        case "focusin":
            return Nl = Ln(Nl, e, t, l, a, n),
            !0;
        case "dragenter":
            return Dl = Ln(Dl, e, t, l, a, n),
            !0;
        case "mouseover":
            return _l = Ln(_l, e, t, l, a, n),
            !0;
        case "pointerover":
            var i = n.pointerId;
            return Un.set(i, Ln(Un.get(i) || null, e, t, l, a, n)),
            !0;
        case "gotpointercapture":
            return i = n.pointerId,
            wn.set(i, Ln(wn.get(i) || null, e, t, l, a, n)),
            !0
        }
        return !1
    }
    function oh(e) {
        var t = ta(e.target);
        if (t !== null) {
            var l = d(t);
            if (l !== null) {
                if (t = l.tag,
                t === 13) {
                    if (t = h(l),
                    t !== null) {
                        e.blockedOn = t,
                        Ec(e.priority, function() {
                            sh(l)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = p(l),
                    t !== null) {
                        e.blockedOn = t,
                        Ec(e.priority, function() {
                            sh(l)
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function ru(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = Gr(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type,l);
                Vu = a,
                l.target.dispatchEvent(a),
                Vu = null
            } else
                return t = la(l),
                t !== null && uh(t),
                e.blockedOn = l,
                !1;
            t.shift()
        }
        return !0
    }
    function fh(e, t, l) {
        ru(e) && l.delete(t)
    }
    function kp() {
        Qr = !1,
        Nl !== null && ru(Nl) && (Nl = null),
        Dl !== null && ru(Dl) && (Dl = null),
        _l !== null && ru(_l) && (_l = null),
        Un.forEach(fh),
        wn.forEach(fh)
    }
    function cu(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Qr || (Qr = !0,
        c.unstable_scheduleCallback(c.unstable_NormalPriority, kp)))
    }
    var ou = null;
    function dh(e) {
        ou !== e && (ou = e,
        c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
            ou === e && (ou = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t]
                  , a = e[t + 1]
                  , n = e[t + 2];
                if (typeof a != "function") {
                    if (Vr(a || l) === null)
                        continue;
                    break
                }
                var i = la(l);
                i !== null && (e.splice(t, 3),
                t -= 3,
                Gs(i, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Ha(e) {
        function t(b) {
            return cu(b, e)
        }
        Nl !== null && cu(Nl, e),
        Dl !== null && cu(Dl, e),
        _l !== null && cu(_l, e),
        Un.forEach(t),
        wn.forEach(t);
        for (var l = 0; l < Ml.length; l++) {
            var a = Ml[l];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < Ml.length && (l = Ml[0],
        l.blockedOn === null); )
            oh(l),
            l.blockedOn === null && Ml.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , i = l[a + 1]
                  , f = n[at] || null;
                if (typeof i == "function")
                    f || dh(l);
                else if (f) {
                    var m = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (n = i,
                        f = i[at] || null)
                            m = f.formAction;
                        else if (Vr(n) !== null)
                            continue
                    } else
                        m = f.action;
                    typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3),
                    a -= 3),
                    dh(l)
                }
            }
    }
    function hh() {
        function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({
                handler: function() {
                    return new Promise(function(f) {
                        return n = f
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            n !== null && (n(),
            n = null),
            a || setTimeout(l, 20)
        }
        function l() {
            if (!a && !navigation.transition) {
                var i = navigation.currentEntry;
                i && i.url != null && navigation.navigate(i.url, {
                    state: i.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , n = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(l, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                n !== null && (n(),
                n = null)
            }
        }
    }
    function Xr(e) {
        this._internalRoot = e
    }
    fu.prototype.render = Xr.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(r(409));
        var l = t.current
          , a = bt();
        nh(l, a, e, t, null, null)
    }
    ,
    fu.prototype.unmount = Xr.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            nh(e.current, 2, null, e, null, null),
            Zi(),
            t[ea] = null
        }
    }
    ;
    function fu(e) {
        this._internalRoot = e
    }
    fu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = xc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++)
                ;
            Ml.splice(l, 0, e),
            l === 0 && oh(e)
        }
    }
    ;
    var mh = u.version;
    if (mh !== "19.2.3")
        throw Error(r(527, mh, "19.2.3"));
    q.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","),
            Error(r(268, e)));
        return e = g(t),
        e = e !== null ? E(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var $p = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!du.isDisabled && du.supportsFiber)
            try {
                Qa = du.inject($p),
                ft = du
            } catch {}
    }
    return Bn.createRoot = function(e, t) {
        if (!o(e))
            throw Error(r(299));
        var l = !1
          , a = ""
          , n = xf
          , i = Ef
          , f = Tf;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (i = t.onCaughtError),
        t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        t = lh(e, 1, !1, null, null, l, a, null, n, i, f, hh),
        e[ea] = t.current,
        zr(e),
        new Xr(t)
    }
    ,
    Bn.hydrateRoot = function(e, t, l) {
        if (!o(e))
            throw Error(r(299));
        var a = !1
          , n = ""
          , i = xf
          , f = Ef
          , m = Tf
          , b = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
        l.onCaughtError !== void 0 && (f = l.onCaughtError),
        l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
        l.formState !== void 0 && (b = l.formState)),
        t = lh(e, 1, !0, t, l ?? null, a, n, b, i, f, m, hh),
        t.context = ah(null),
        l = t.current,
        a = bt(),
        a = wu(a),
        n = yl(a),
        n.callback = null,
        vl(l, n, a),
        l = a,
        t.current.lanes = l,
        Za(t, l),
        qt(t),
        e[ea] = t.current,
        zr(e),
        new fu(t)
    }
    ,
    Bn.version = "19.2.3",
    Bn
}
var Jh;
function ey() {
    if (Jh)
        return $r.exports;
    Jh = 1;
    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
            } catch (u) {
                console.error(u)
            }
    }
    return c(),
    $r.exports = P0(),
    $r.exports
}
var ty = ey();
var kh = "popstate";
function ly(c={}) {
    function u(r, o) {
        let {pathname: d, search: h, hash: p} = r.location;
        return nc("", {
            pathname: d,
            search: h,
            hash: p
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function s(r, o) {
        return typeof o == "string" ? o : Zn(o)
    }
    return ny(u, s, null, c)
}
function Ge(c, u) {
    if (c === !1 || c === null || typeof c > "u")
        throw new Error(u)
}
function Lt(c, u) {
    if (!c) {
        typeof console < "u" && console.warn(u);
        try {
            throw new Error(u)
        } catch {}
    }
}
function ay() {
    return Math.random().toString(36).substring(2, 10)
}
function $h(c, u) {
    return {
        usr: c.state,
        key: c.key,
        idx: u
    }
}
function nc(c, u, s=null, r) {
    return {
        pathname: typeof c == "string" ? c : c.pathname,
        search: "",
        hash: "",
        ...typeof u == "string" ? Kn(u) : u,
        state: s,
        key: u && u.key || r || ay()
    }
}
function Zn({pathname: c="/", search: u="", hash: s=""}) {
    return u && u !== "?" && (c += u.charAt(0) === "?" ? u : "?" + u),
    s && s !== "#" && (c += s.charAt(0) === "#" ? s : "#" + s),
    c
}
function Kn(c) {
    let u = {};
    if (c) {
        let s = c.indexOf("#");
        s >= 0 && (u.hash = c.substring(s),
        c = c.substring(0, s));
        let r = c.indexOf("?");
        r >= 0 && (u.search = c.substring(r),
        c = c.substring(0, r)),
        c && (u.pathname = c)
    }
    return u
}
function ny(c, u, s, r={}) {
    let {window: o=document.defaultView, v5Compat: d=!1} = r
      , h = o.history
      , p = "POP"
      , y = null
      , g = E();
    g == null && (g = 0,
    h.replaceState({
        ...h.state,
        idx: g
    }, ""));
    function E() {
        return (h.state || {
            idx: null
        }).idx
    }
    function v() {
        p = "POP";
        let B = E()
          , Q = B == null ? null : B - g;
        g = B,
        y && y({
            action: p,
            location: Y.location,
            delta: Q
        })
    }
    function O(B, Q) {
        p = "PUSH";
        let V = nc(Y.location, B, Q);
        g = E() + 1;
        let J = $h(V, g)
          , ue = Y.createHref(V);
        try {
            h.pushState(J, "", ue)
        } catch (ce) {
            if (ce instanceof DOMException && ce.name === "DataCloneError")
                throw ce;
            o.location.assign(ue)
        }
        d && y && y({
            action: p,
            location: Y.location,
            delta: 1
        })
    }
    function N(B, Q) {
        p = "REPLACE";
        let V = nc(Y.location, B, Q);
        g = E();
        let J = $h(V, g)
          , ue = Y.createHref(V);
        h.replaceState(J, "", ue),
        d && y && y({
            action: p,
            location: Y.location,
            delta: 0
        })
    }
    function _(B) {
        return iy(B)
    }
    let Y = {
        get action() {
            return p
        },
        get location() {
            return c(o, h)
        },
        listen(B) {
            if (y)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(kh, v),
            y = B,
            () => {
                o.removeEventListener(kh, v),
                y = null
            }
        },
        createHref(B) {
            return u(o, B)
        },
        createURL: _,
        encodeLocation(B) {
            let Q = _(B);
            return {
                pathname: Q.pathname,
                search: Q.search,
                hash: Q.hash
            }
        },
        push: O,
        replace: N,
        go(B) {
            return h.go(B)
        }
    };
    return Y
}
function iy(c, u=!1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href),
    Ge(s, "No window.location.(origin|href) available to create URL");
    let r = typeof c == "string" ? c : Zn(c);
    return r = r.replace(/ $/, "%20"),
    !u && r.startsWith("//") && (r = s + r),
    new URL(r,s)
}
function um(c, u, s="/") {
    return uy(c, u, s, !1)
}
function uy(c, u, s, r) {
    let o = typeof u == "string" ? Kn(u) : u
      , d = sl(o.pathname || "/", s);
    if (d == null)
        return null;
    let h = sm(c);
    sy(h);
    let p = null;
    for (let y = 0; p == null && y < h.length; ++y) {
        let g = vy(d);
        p = py(h[y], g, r)
    }
    return p
}
function sm(c, u=[], s=[], r="", o=!1) {
    let d = (h, p, y=o, g) => {
        let E = {
            relativePath: g === void 0 ? h.path || "" : g,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: p,
            route: h
        };
        if (E.relativePath.startsWith("/")) {
            if (!E.relativePath.startsWith(r) && y)
                return;
            Ge(E.relativePath.startsWith(r), `Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            E.relativePath = E.relativePath.slice(r.length)
        }
        let v = ul([r, E.relativePath])
          , O = s.concat(E);
        h.children && h.children.length > 0 && (Ge(h.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`),
        sm(h.children, u, O, v, y)),
        !(h.path == null && !h.index) && u.push({
            path: v,
            score: my(v, h.index),
            routesMeta: O
        })
    }
    ;
    return c.forEach( (h, p) => {
        if (h.path === "" || !h.path?.includes("?"))
            d(h, p);
        else
            for (let y of rm(h.path))
                d(h, p, !0, y)
    }
    ),
    u
}
function rm(c) {
    let u = c.split("/");
    if (u.length === 0)
        return [];
    let[s,...r] = u
      , o = s.endsWith("?")
      , d = s.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [d, ""] : [d];
    let h = rm(r.join("/"))
      , p = [];
    return p.push(...h.map(y => y === "" ? d : [d, y].join("/"))),
    o && p.push(...h),
    p.map(y => c.startsWith("/") && y === "" ? "/" : y)
}
function sy(c) {
    c.sort( (u, s) => u.score !== s.score ? s.score - u.score : gy(u.routesMeta.map(r => r.childrenIndex), s.routesMeta.map(r => r.childrenIndex)))
}
var ry = /^:[\w-]+$/
  , cy = 3
  , oy = 2
  , fy = 1
  , dy = 10
  , hy = -2
  , Fh = c => c === "*";
function my(c, u) {
    let s = c.split("/")
      , r = s.length;
    return s.some(Fh) && (r += hy),
    u && (r += oy),
    s.filter(o => !Fh(o)).reduce( (o, d) => o + (ry.test(d) ? cy : d === "" ? fy : dy), r)
}
function gy(c, u) {
    return c.length === u.length && c.slice(0, -1).every( (r, o) => r === u[o]) ? c[c.length - 1] - u[u.length - 1] : 0
}
function py(c, u, s=!1) {
    let {routesMeta: r} = c
      , o = {}
      , d = "/"
      , h = [];
    for (let p = 0; p < r.length; ++p) {
        let y = r[p]
          , g = p === r.length - 1
          , E = d === "/" ? u : u.slice(d.length) || "/"
          , v = Eu({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: g
        }, E)
          , O = y.route;
        if (!v && g && s && !r[r.length - 1].route.index && (v = Eu({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: !1
        }, E)),
        !v)
            return null;
        Object.assign(o, v.params),
        h.push({
            params: o,
            pathname: ul([d, v.pathname]),
            pathnameBase: Ey(ul([d, v.pathnameBase])),
            route: O
        }),
        v.pathnameBase !== "/" && (d = ul([d, v.pathnameBase]))
    }
    return h
}
function Eu(c, u) {
    typeof c == "string" && (c = {
        path: c,
        caseSensitive: !1,
        end: !0
    });
    let[s,r] = yy(c.path, c.caseSensitive, c.end)
      , o = u.match(s);
    if (!o)
        return null;
    let d = o[0]
      , h = d.replace(/(.)\/+$/, "$1")
      , p = o.slice(1);
    return {
        params: r.reduce( (g, {paramName: E, isOptional: v}, O) => {
            if (E === "*") {
                let _ = p[O] || "";
                h = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1")
            }
            const N = p[O];
            return v && !N ? g[E] = void 0 : g[E] = (N || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: d,
        pathnameBase: h,
        pattern: c
    }
}
function yy(c, u=!1, s=!0) {
    Lt(c === "*" || !c.endsWith("*") || c.endsWith("/*"), `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`);
    let r = []
      , o = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, p, y) => (r.push({
        paramName: p,
        isOptional: y != null
    }),
    y ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return c.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : c !== "" && c !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,u ? void 0 : "i"), r]
}
function vy(c) {
    try {
        return c.split("/").map(u => decodeURIComponent(u).replace(/\//g, "%2F")).join("/")
    } catch (u) {
        return Lt(!1, `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),
        c
    }
}
function sl(c, u) {
    if (u === "/")
        return c;
    if (!c.toLowerCase().startsWith(u.toLowerCase()))
        return null;
    let s = u.endsWith("/") ? u.length - 1 : u.length
      , r = c.charAt(s);
    return r && r !== "/" ? null : c.slice(s) || "/"
}
var cm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , by = c => cm.test(c);
function Sy(c, u="/") {
    let {pathname: s, search: r="", hash: o=""} = typeof c == "string" ? Kn(c) : c, d;
    if (s)
        if (by(s))
            d = s;
        else {
            if (s.includes("//")) {
                let h = s;
                s = s.replace(/\/\/+/g, "/"),
                Lt(!1, `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`)
            }
            s.startsWith("/") ? d = Wh(s.substring(1), "/") : d = Wh(s, u)
        }
    else
        d = u;
    return {
        pathname: d,
        search: Ty(r),
        hash: Oy(o)
    }
}
function Wh(c, u) {
    let s = u.replace(/\/+$/, "").split("/");
    return c.split("/").forEach(o => {
        o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function Pr(c, u, s, r) {
    return `Cannot include a '${c}' character in a manually specified \`to.${u}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function xy(c) {
    return c.filter( (u, s) => s === 0 || u.route.path && u.route.path.length > 0)
}
function om(c) {
    let u = xy(c);
    return u.map( (s, r) => r === u.length - 1 ? s.pathname : s.pathnameBase)
}
function fm(c, u, s, r=!1) {
    let o;
    typeof c == "string" ? o = Kn(c) : (o = {
        ...c
    },
    Ge(!o.pathname || !o.pathname.includes("?"), Pr("?", "pathname", "search", o)),
    Ge(!o.pathname || !o.pathname.includes("#"), Pr("#", "pathname", "hash", o)),
    Ge(!o.search || !o.search.includes("#"), Pr("#", "search", "hash", o)));
    let d = c === "" || o.pathname === "", h = d ? "/" : o.pathname, p;
    if (h == null)
        p = s;
    else {
        let v = u.length - 1;
        if (!r && h.startsWith("..")) {
            let O = h.split("/");
            for (; O[0] === ".."; )
                O.shift(),
                v -= 1;
            o.pathname = O.join("/")
        }
        p = v >= 0 ? u[v] : "/"
    }
    let y = Sy(o, p)
      , g = h && h !== "/" && h.endsWith("/")
      , E = (d || h === ".") && s.endsWith("/");
    return !y.pathname.endsWith("/") && (g || E) && (y.pathname += "/"),
    y
}
var ul = c => c.join("/").replace(/\/\/+/g, "/")
  , Ey = c => c.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Ty = c => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c
  , Oy = c => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c
  , zy = class {
    constructor(c, u, s, r=!1) {
        this.status = c,
        this.statusText = u || "",
        this.internal = r,
        s instanceof Error ? (this.data = s.toString(),
        this.error = s) : this.data = s
    }
}
;
function Ay(c) {
    return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data"in c
}
function Ry(c) {
    return c.map(u => u.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var dm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function hm(c, u) {
    let s = c;
    if (typeof s != "string" || !cm.test(s))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: s
        };
    let r = s
      , o = !1;
    if (dm)
        try {
            let d = new URL(window.location.href)
              , h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s)
              , p = sl(h.pathname, u);
            h.origin === d.origin && p != null ? s = p + h.search + h.hash : o = !0
        } catch {
            Lt(!1, `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: r,
        isExternal: o,
        to: s
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var mm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(mm);
var Cy = ["GET", ...mm];
new Set(Cy);
var Ga = U.createContext(null);
Ga.displayName = "DataRouter";
var Ou = U.createContext(null);
Ou.displayName = "DataRouterState";
var Ny = U.createContext(!1)
  , gm = U.createContext({
    isTransitioning: !1
});
gm.displayName = "ViewTransition";
var Dy = U.createContext(new Map);
Dy.displayName = "Fetchers";
var _y = U.createContext(null);
_y.displayName = "Await";
var _t = U.createContext(null);
_t.displayName = "Navigation";
var zu = U.createContext(null);
zu.displayName = "Location";
var rl = U.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
rl.displayName = "Route";
var uc = U.createContext(null);
uc.displayName = "RouteError";
var pm = "REACT_ROUTER_ERROR"
  , My = "REDIRECT"
  , Uy = "ROUTE_ERROR_RESPONSE";
function wy(c) {
    if (c.startsWith(`${pm}:${My}:{`))
        try {
            let u = JSON.parse(c.slice(28));
            if (typeof u == "object" && u && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.location == "string" && typeof u.reloadDocument == "boolean" && typeof u.replace == "boolean")
                return u
        } catch {}
}
function Ly(c) {
    if (c.startsWith(`${pm}:${Uy}:{`))
        try {
            let u = JSON.parse(c.slice(40));
            if (typeof u == "object" && u && typeof u.status == "number" && typeof u.statusText == "string")
                return new zy(u.status,u.statusText,u.data)
        } catch {}
}
function jy(c, {relative: u}={}) {
    Ge(Jn(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: s, navigator: r} = U.useContext(_t)
      , {hash: o, pathname: d, search: h} = kn(c, {
        relative: u
    })
      , p = d;
    return s !== "/" && (p = d === "/" ? s : ul([s, d])),
    r.createHref({
        pathname: p,
        search: h,
        hash: o
    })
}
function Jn() {
    return U.useContext(zu) != null
}
function wl() {
    return Ge(Jn(), "useLocation() may be used only in the context of a <Router> component."),
    U.useContext(zu).location
}
var ym = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function vm(c) {
    U.useContext(_t).static || U.useLayoutEffect(c)
}
function sc() {
    let {isDataRoute: c} = U.useContext(rl);
    return c ? $y() : Hy()
}
function Hy() {
    Ge(Jn(), "useNavigate() may be used only in the context of a <Router> component.");
    let c = U.useContext(Ga)
      , {basename: u, navigator: s} = U.useContext(_t)
      , {matches: r} = U.useContext(rl)
      , {pathname: o} = wl()
      , d = JSON.stringify(om(r))
      , h = U.useRef(!1);
    return vm( () => {
        h.current = !0
    }
    ),
    U.useCallback( (y, g={}) => {
        if (Lt(h.current, ym),
        !h.current)
            return;
        if (typeof y == "number") {
            s.go(y);
            return
        }
        let E = fm(y, JSON.parse(d), o, g.relative === "path");
        c == null && u !== "/" && (E.pathname = E.pathname === "/" ? u : ul([u, E.pathname])),
        (g.replace ? s.replace : s.push)(E, g.state, g)
    }
    , [u, s, d, o, c])
}
U.createContext(null);
function kn(c, {relative: u}={}) {
    let {matches: s} = U.useContext(rl)
      , {pathname: r} = wl()
      , o = JSON.stringify(om(s));
    return U.useMemo( () => fm(c, JSON.parse(o), r, u === "path"), [c, o, r, u])
}
function By(c, u) {
    return bm(c)
}
function bm(c, u, s, r, o) {
    Ge(Jn(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: d} = U.useContext(_t)
      , {matches: h} = U.useContext(rl)
      , p = h[h.length - 1]
      , y = p ? p.params : {}
      , g = p ? p.pathname : "/"
      , E = p ? p.pathnameBase : "/"
      , v = p && p.route;
    {
        let V = v && v.path || "";
        xm(g, !v || V.endsWith("*") || V.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`)
    }
    let O = wl(), N;
    N = O;
    let _ = N.pathname || "/"
      , Y = _;
    if (E !== "/") {
        let V = E.replace(/^\//, "").split("/");
        Y = "/" + _.replace(/^\//, "").split("/").slice(V.length).join("/")
    }
    let B = um(c, {
        pathname: Y
    });
    return Lt(v || B != null, `No routes matched location "${N.pathname}${N.search}${N.hash}" `),
    Lt(B == null || B[B.length - 1].route.element !== void 0 || B[B.length - 1].route.Component !== void 0 || B[B.length - 1].route.lazy !== void 0, `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),
    Qy(B && B.map(V => Object.assign({}, V, {
        params: Object.assign({}, y, V.params),
        pathname: ul([E, d.encodeLocation ? d.encodeLocation(V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : V.pathname]),
        pathnameBase: V.pathnameBase === "/" ? E : ul([E, d.encodeLocation ? d.encodeLocation(V.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : V.pathnameBase])
    })), h, s, r, o)
}
function qy() {
    let c = ky()
      , u = Ay(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c)
      , s = c instanceof Error ? c.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , o = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , d = {
        padding: "2px 4px",
        backgroundColor: r
    }
      , h = null;
    return console.error("Error handled by React Router default ErrorBoundary:", c),
    h = U.createElement(U.Fragment, null, U.createElement("p", null, "💿 Hey developer 👋"), U.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", U.createElement("code", {
        style: d
    }, "ErrorBoundary"), " or", " ", U.createElement("code", {
        style: d
    }, "errorElement"), " prop on your route.")),
    U.createElement(U.Fragment, null, U.createElement("h2", null, "Unexpected Application Error!"), U.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, u), s ? U.createElement("pre", {
        style: o
    }, s) : null, h)
}
var Yy = U.createElement(qy, null)
  , Sm = class extends U.Component {
    constructor(c) {
        super(c),
        this.state = {
            location: c.location,
            revalidation: c.revalidation,
            error: c.error
        }
    }
    static getDerivedStateFromError(c) {
        return {
            error: c
        }
    }
    static getDerivedStateFromProps(c, u) {
        return u.location !== c.location || u.revalidation !== "idle" && c.revalidation === "idle" ? {
            error: c.error,
            location: c.location,
            revalidation: c.revalidation
        } : {
            error: c.error !== void 0 ? c.error : u.error,
            location: u.location,
            revalidation: c.revalidation || u.revalidation
        }
    }
    componentDidCatch(c, u) {
        this.props.onError ? this.props.onError(c, u) : console.error("React Router caught the following error during render", c)
    }
    render() {
        let c = this.state.error;
        if (this.context && typeof c == "object" && c && "digest"in c && typeof c.digest == "string") {
            const s = Ly(c.digest);
            s && (c = s)
        }
        let u = c !== void 0 ? U.createElement(rl.Provider, {
            value: this.props.routeContext
        }, U.createElement(uc.Provider, {
            value: c,
            children: this.props.component
        })) : this.props.children;
        return this.context ? U.createElement(Gy, {
            error: c
        }, u) : u
    }
}
;
Sm.contextType = Ny;
var ec = new WeakMap;
function Gy({children: c, error: u}) {
    let {basename: s} = U.useContext(_t);
    if (typeof u == "object" && u && "digest"in u && typeof u.digest == "string") {
        let r = wy(u.digest);
        if (r) {
            let o = ec.get(u);
            if (o)
                throw o;
            let d = hm(r.location, s);
            if (dm && !ec.get(u))
                if (d.isExternal || r.reloadDocument)
                    window.location.href = d.absoluteURL || d.to;
                else {
                    const h = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(d.to, {
                        replace: r.replace
                    }));
                    throw ec.set(u, h),
                    h
                }
            return U.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${d.absoluteURL || d.to}`
            })
        }
    }
    return c
}
function Vy({routeContext: c, match: u, children: s}) {
    let r = U.useContext(Ga);
    return r && r.static && r.staticContext && (u.route.errorElement || u.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = u.route.id),
    U.createElement(rl.Provider, {
        value: c
    }, s)
}
function Qy(c, u=[], s=null, r=null, o=null) {
    if (c == null) {
        if (!s)
            return null;
        if (s.errors)
            c = s.matches;
        else if (u.length === 0 && !s.initialized && s.matches.length > 0)
            c = s.matches;
        else
            return null
    }
    let d = c
      , h = s?.errors;
    if (h != null) {
        let E = d.findIndex(v => v.route.id && h?.[v.route.id] !== void 0);
        Ge(E >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),
        d = d.slice(0, Math.min(d.length, E + 1))
    }
    let p = !1
      , y = -1;
    if (s)
        for (let E = 0; E < d.length; E++) {
            let v = d[E];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (y = E),
            v.route.id) {
                let {loaderData: O, errors: N} = s
                  , _ = v.route.loader && !O.hasOwnProperty(v.route.id) && (!N || N[v.route.id] === void 0);
                if (v.route.lazy || _) {
                    p = !0,
                    y >= 0 ? d = d.slice(0, y + 1) : d = [d[0]];
                    break
                }
            }
        }
    let g = s && r ? (E, v) => {
        r(E, {
            location: s.location,
            params: s.matches?.[0]?.params ?? {},
            unstable_pattern: Ry(s.matches),
            errorInfo: v
        })
    }
    : void 0;
    return d.reduceRight( (E, v, O) => {
        let N, _ = !1, Y = null, B = null;
        s && (N = h && v.route.id ? h[v.route.id] : void 0,
        Y = v.route.errorElement || Yy,
        p && (y < 0 && O === 0 ? (xm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        _ = !0,
        B = null) : y === O && (_ = !0,
        B = v.route.hydrateFallbackElement || null)));
        let Q = u.concat(d.slice(0, O + 1))
          , V = () => {
            let J;
            return N ? J = Y : _ ? J = B : v.route.Component ? J = U.createElement(v.route.Component, null) : v.route.element ? J = v.route.element : J = E,
            U.createElement(Vy, {
                match: v,
                routeContext: {
                    outlet: E,
                    matches: Q,
                    isDataRoute: s != null
                },
                children: J
            })
        }
        ;
        return s && (v.route.ErrorBoundary || v.route.errorElement || O === 0) ? U.createElement(Sm, {
            location: s.location,
            revalidation: s.revalidation,
            component: Y,
            error: N,
            children: V(),
            routeContext: {
                outlet: null,
                matches: Q,
                isDataRoute: !0
            },
            onError: g
        }) : V()
    }
    , null)
}
function rc(c) {
    return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Xy(c) {
    let u = U.useContext(Ga);
    return Ge(u, rc(c)),
    u
}
function Zy(c) {
    let u = U.useContext(Ou);
    return Ge(u, rc(c)),
    u
}
function Ky(c) {
    let u = U.useContext(rl);
    return Ge(u, rc(c)),
    u
}
function cc(c) {
    let u = Ky(c)
      , s = u.matches[u.matches.length - 1];
    return Ge(s.route.id, `${c} can only be used on routes that contain a unique "id"`),
    s.route.id
}
function Jy() {
    return cc("useRouteId")
}
function ky() {
    let c = U.useContext(uc)
      , u = Zy("useRouteError")
      , s = cc("useRouteError");
    return c !== void 0 ? c : u.errors?.[s]
}
function $y() {
    let {router: c} = Xy("useNavigate")
      , u = cc("useNavigate")
      , s = U.useRef(!1);
    return vm( () => {
        s.current = !0
    }
    ),
    U.useCallback(async (o, d={}) => {
        Lt(s.current, ym),
        s.current && (typeof o == "number" ? await c.navigate(o) : await c.navigate(o, {
            fromRouteId: u,
            ...d
        }))
    }
    , [c, u])
}
var Ih = {};
function xm(c, u, s) {
    !u && !Ih[c] && (Ih[c] = !0,
    Lt(!1, s))
}
U.memo(Fy);
function Fy({routes: c, future: u, state: s, onError: r}) {
    return bm(c, void 0, s, r, u)
}
function Wy({basename: c="/", children: u=null, location: s, navigationType: r="POP", navigator: o, static: d=!1, unstable_useTransitions: h}) {
    Ge(!Jn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let p = c.replace(/^\/*/, "/")
      , y = U.useMemo( () => ({
        basename: p,
        navigator: o,
        static: d,
        unstable_useTransitions: h,
        future: {}
    }), [p, o, d, h]);
    typeof s == "string" && (s = Kn(s));
    let {pathname: g="/", search: E="", hash: v="", state: O=null, key: N="default"} = s
      , _ = U.useMemo( () => {
        let Y = sl(g, p);
        return Y == null ? null : {
            location: {
                pathname: Y,
                search: E,
                hash: v,
                state: O,
                key: N
            },
            navigationType: r
        }
    }
    , [p, g, E, v, O, N, r]);
    return Lt(_ != null, `<Router basename="${p}"> is not able to match the URL "${g}${E}${v}" because it does not start with the basename, so the <Router> won't render anything.`),
    _ == null ? null : U.createElement(_t.Provider, {
        value: y
    }, U.createElement(zu.Provider, {
        children: u,
        value: _
    }))
}
var yu = "get"
  , vu = "application/x-www-form-urlencoded";
function Au(c) {
    return typeof HTMLElement < "u" && c instanceof HTMLElement
}
function Iy(c) {
    return Au(c) && c.tagName.toLowerCase() === "button"
}
function Py(c) {
    return Au(c) && c.tagName.toLowerCase() === "form"
}
function ev(c) {
    return Au(c) && c.tagName.toLowerCase() === "input"
}
function tv(c) {
    return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey)
}
function lv(c, u) {
    return c.button === 0 && (!u || u === "_self") && !tv(c)
}
var pu = null;
function av() {
    if (pu === null)
        try {
            new FormData(document.createElement("form"),0),
            pu = !1
        } catch {
            pu = !0
        }
    return pu
}
var nv = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function tc(c) {
    return c != null && !nv.has(c) ? (Lt(!1, `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vu}"`),
    null) : c
}
function iv(c, u) {
    let s, r, o, d, h;
    if (Py(c)) {
        let p = c.getAttribute("action");
        r = p ? sl(p, u) : null,
        s = c.getAttribute("method") || yu,
        o = tc(c.getAttribute("enctype")) || vu,
        d = new FormData(c)
    } else if (Iy(c) || ev(c) && (c.type === "submit" || c.type === "image")) {
        let p = c.form;
        if (p == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let y = c.getAttribute("formaction") || p.getAttribute("action");
        if (r = y ? sl(y, u) : null,
        s = c.getAttribute("formmethod") || p.getAttribute("method") || yu,
        o = tc(c.getAttribute("formenctype")) || tc(p.getAttribute("enctype")) || vu,
        d = new FormData(p,c),
        !av()) {
            let {name: g, type: E, value: v} = c;
            if (E === "image") {
                let O = g ? `${g}.` : "";
                d.append(`${O}x`, "0"),
                d.append(`${O}y`, "0")
            } else
                g && d.append(g, v)
        }
    } else {
        if (Au(c))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = yu,
        r = null,
        o = vu,
        h = c
    }
    return d && o === "text/plain" && (h = d,
    d = void 0),
    {
        action: r,
        method: s.toLowerCase(),
        encType: o,
        formData: d,
        body: h
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function oc(c, u) {
    if (c === !1 || c === null || typeof c > "u")
        throw new Error(u)
}
function uv(c, u, s) {
    let r = typeof c == "string" ? new URL(c,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : c;
    return r.pathname === "/" ? r.pathname = `_root.${s}` : u && sl(r.pathname, u) === "/" ? r.pathname = `${u.replace(/\/$/, "")}/_root.${s}` : r.pathname = `${r.pathname.replace(/\/$/, "")}.${s}`,
    r
}
async function sv(c, u) {
    if (c.id in u)
        return u[c.id];
    try {
        let s = await import(c.module);
        return u[c.id] = s,
        s
    } catch (s) {
        return console.error(`Error loading route module \`${c.module}\`, reloading page...`),
        console.error(s),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function rv(c) {
    return c == null ? !1 : c.href == null ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string" : typeof c.rel == "string" && typeof c.href == "string"
}
async function cv(c, u, s) {
    let r = await Promise.all(c.map(async o => {
        let d = u.routes[o.route.id];
        if (d) {
            let h = await sv(d, s);
            return h.links ? h.links() : []
        }
        return []
    }
    ));
    return hv(r.flat(1).filter(rv).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function Ph(c, u, s, r, o, d) {
    let h = (y, g) => s[g] ? y.route.id !== s[g].route.id : !0
      , p = (y, g) => s[g].pathname !== y.pathname || s[g].route.path?.endsWith("*") && s[g].params["*"] !== y.params["*"];
    return d === "assets" ? u.filter( (y, g) => h(y, g) || p(y, g)) : d === "data" ? u.filter( (y, g) => {
        let E = r.routes[y.route.id];
        if (!E || !E.hasLoader)
            return !1;
        if (h(y, g) || p(y, g))
            return !0;
        if (y.route.shouldRevalidate) {
            let v = y.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash,window.origin),
                currentParams: s[0]?.params || {},
                nextUrl: new URL(c,window.origin),
                nextParams: y.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function ov(c, u, {includeHydrateFallback: s}={}) {
    return fv(c.map(r => {
        let o = u.routes[r.route.id];
        if (!o)
            return [];
        let d = [o.module];
        return o.clientActionModule && (d = d.concat(o.clientActionModule)),
        o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)),
        s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)),
        o.imports && (d = d.concat(o.imports)),
        d
    }
    ).flat(1))
}
function fv(c) {
    return [...new Set(c)]
}
function dv(c) {
    let u = {}
      , s = Object.keys(c).sort();
    for (let r of s)
        u[r] = c[r];
    return u
}
function hv(c, u) {
    let s = new Set;
    return new Set(u),
    c.reduce( (r, o) => {
        let d = JSON.stringify(dv(o));
        return s.has(d) || (s.add(d),
        r.push({
            key: d,
            link: o
        })),
        r
    }
    , [])
}
function Em() {
    let c = U.useContext(Ga);
    return oc(c, "You must render this element inside a <DataRouterContext.Provider> element"),
    c
}
function mv() {
    let c = U.useContext(Ou);
    return oc(c, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    c
}
var fc = U.createContext(void 0);
fc.displayName = "FrameworkContext";
function Tm() {
    let c = U.useContext(fc);
    return oc(c, "You must render this element inside a <HydratedRouter> element"),
    c
}
function gv(c, u) {
    let s = U.useContext(fc)
      , [r,o] = U.useState(!1)
      , [d,h] = U.useState(!1)
      , {onFocus: p, onBlur: y, onMouseEnter: g, onMouseLeave: E, onTouchStart: v} = u
      , O = U.useRef(null);
    U.useEffect( () => {
        if (c === "render" && h(!0),
        c === "viewport") {
            let Y = Q => {
                Q.forEach(V => {
                    h(V.isIntersecting)
                }
                )
            }
              , B = new IntersectionObserver(Y,{
                threshold: .5
            });
            return O.current && B.observe(O.current),
            () => {
                B.disconnect()
            }
        }
    }
    , [c]),
    U.useEffect( () => {
        if (r) {
            let Y = setTimeout( () => {
                h(!0)
            }
            , 100);
            return () => {
                clearTimeout(Y)
            }
        }
    }
    , [r]);
    let N = () => {
        o(!0)
    }
      , _ = () => {
        o(!1),
        h(!1)
    }
    ;
    return s ? c !== "intent" ? [d, O, {}] : [d, O, {
        onFocus: qn(p, N),
        onBlur: qn(y, _),
        onMouseEnter: qn(g, N),
        onMouseLeave: qn(E, _),
        onTouchStart: qn(v, N)
    }] : [!1, O, {}]
}
function qn(c, u) {
    return s => {
        c && c(s),
        s.defaultPrevented || u(s)
    }
}
function pv({page: c, ...u}) {
    let {router: s} = Em()
      , r = U.useMemo( () => um(s.routes, c, s.basename), [s.routes, c, s.basename]);
    return r ? U.createElement(vv, {
        page: c,
        matches: r,
        ...u
    }) : null
}
function yv(c) {
    let {manifest: u, routeModules: s} = Tm()
      , [r,o] = U.useState([]);
    return U.useEffect( () => {
        let d = !1;
        return cv(c, u, s).then(h => {
            d || o(h)
        }
        ),
        () => {
            d = !0
        }
    }
    , [c, u, s]),
    r
}
function vv({page: c, matches: u, ...s}) {
    let r = wl()
      , {manifest: o, routeModules: d} = Tm()
      , {basename: h} = Em()
      , {loaderData: p, matches: y} = mv()
      , g = U.useMemo( () => Ph(c, u, y, o, r, "data"), [c, u, y, o, r])
      , E = U.useMemo( () => Ph(c, u, y, o, r, "assets"), [c, u, y, o, r])
      , v = U.useMemo( () => {
        if (c === r.pathname + r.search + r.hash)
            return [];
        let _ = new Set
          , Y = !1;
        if (u.forEach(Q => {
            let V = o.routes[Q.route.id];
            !V || !V.hasLoader || (!g.some(J => J.route.id === Q.route.id) && Q.route.id in p && d[Q.route.id]?.shouldRevalidate || V.hasClientLoader ? Y = !0 : _.add(Q.route.id))
        }
        ),
        _.size === 0)
            return [];
        let B = uv(c, h, "data");
        return Y && _.size > 0 && B.searchParams.set("_routes", u.filter(Q => _.has(Q.route.id)).map(Q => Q.route.id).join(",")),
        [B.pathname + B.search]
    }
    , [h, p, r, o, g, u, c, d])
      , O = U.useMemo( () => ov(E, o), [E, o])
      , N = yv(E);
    return U.createElement(U.Fragment, null, v.map(_ => U.createElement("link", {
        key: _,
        rel: "prefetch",
        as: "fetch",
        href: _,
        ...s
    })), O.map(_ => U.createElement("link", {
        key: _,
        rel: "modulepreload",
        href: _,
        ...s
    })), N.map( ({key: _, link: Y}) => U.createElement("link", {
        key: _,
        nonce: s.nonce,
        ...Y
    })))
}
function bv(...c) {
    return u => {
        c.forEach(s => {
            typeof s == "function" ? s(u) : s != null && (s.current = u)
        }
        )
    }
}
var Sv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Sv && (window.__reactRouterVersion = "7.11.0")
} catch {}
function xv({basename: c, children: u, unstable_useTransitions: s, window: r}) {
    let o = U.useRef();
    o.current == null && (o.current = ly({
        window: r,
        v5Compat: !0
    }));
    let d = o.current
      , [h,p] = U.useState({
        action: d.action,
        location: d.location
    })
      , y = U.useCallback(g => {
        s === !1 ? p(g) : U.startTransition( () => p(g))
    }
    , [s]);
    return U.useLayoutEffect( () => d.listen(y), [d, y]),
    U.createElement(Wy, {
        basename: c,
        children: u,
        location: h.location,
        navigationType: h.action,
        navigator: d,
        unstable_useTransitions: s
    })
}
var Om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , zm = U.forwardRef(function({onClick: u, discover: s="render", prefetch: r="none", relative: o, reloadDocument: d, replace: h, state: p, target: y, to: g, preventScrollReset: E, viewTransition: v, unstable_defaultShouldRevalidate: O, ...N}, _) {
    let {basename: Y, unstable_useTransitions: B} = U.useContext(_t)
      , Q = typeof g == "string" && Om.test(g)
      , V = hm(g, Y);
    g = V.to;
    let J = jy(g, {
        relative: o
    })
      , [ue,ce,ye] = gv(r, N)
      , W = zv(g, {
        replace: h,
        state: p,
        target: y,
        preventScrollReset: E,
        relative: o,
        viewTransition: v,
        unstable_defaultShouldRevalidate: O,
        unstable_useTransitions: B
    });
    function Re(Ne) {
        u && u(Ne),
        Ne.defaultPrevented || W(Ne)
    }
    let Oe = U.createElement("a", {
        ...N,
        ...ye,
        href: V.absoluteURL || J,
        onClick: V.isExternal || d ? u : Re,
        ref: bv(_, ce),
        target: y,
        "data-discover": !Q && s === "render" ? "true" : void 0
    });
    return ue && !Q ? U.createElement(U.Fragment, null, Oe, U.createElement(pv, {
        page: J
    })) : Oe
});
zm.displayName = "Link";
var Ev = U.forwardRef(function({"aria-current": u="page", caseSensitive: s=!1, className: r="", end: o=!1, style: d, to: h, viewTransition: p, children: y, ...g}, E) {
    let v = kn(h, {
        relative: g.relative
    })
      , O = wl()
      , N = U.useContext(Ou)
      , {navigator: _, basename: Y} = U.useContext(_t)
      , B = N != null && Dv(v) && p === !0
      , Q = _.encodeLocation ? _.encodeLocation(v).pathname : v.pathname
      , V = O.pathname
      , J = N && N.navigation && N.navigation.location ? N.navigation.location.pathname : null;
    s || (V = V.toLowerCase(),
    J = J ? J.toLowerCase() : null,
    Q = Q.toLowerCase()),
    J && Y && (J = sl(J, Y) || J);
    const ue = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let ce = V === Q || !o && V.startsWith(Q) && V.charAt(ue) === "/", ye = J != null && (J === Q || !o && J.startsWith(Q) && J.charAt(Q.length) === "/"), W = {
        isActive: ce,
        isPending: ye,
        isTransitioning: B
    }, Re = ce ? u : void 0, Oe;
    typeof r == "function" ? Oe = r(W) : Oe = [r, ce ? "active" : null, ye ? "pending" : null, B ? "transitioning" : null].filter(Boolean).join(" ");
    let Ne = typeof d == "function" ? d(W) : d;
    return U.createElement(zm, {
        ...g,
        "aria-current": Re,
        className: Oe,
        ref: E,
        style: Ne,
        to: h,
        viewTransition: p
    }, typeof y == "function" ? y(W) : y)
});
Ev.displayName = "NavLink";
var Tv = U.forwardRef( ({discover: c="render", fetcherKey: u, navigate: s, reloadDocument: r, replace: o, state: d, method: h=yu, action: p, onSubmit: y, relative: g, preventScrollReset: E, viewTransition: v, unstable_defaultShouldRevalidate: O, ...N}, _) => {
    let {unstable_useTransitions: Y} = U.useContext(_t)
      , B = Cv()
      , Q = Nv(p, {
        relative: g
    })
      , V = h.toLowerCase() === "get" ? "get" : "post"
      , J = typeof p == "string" && Om.test(p)
      , ue = ce => {
        if (y && y(ce),
        ce.defaultPrevented)
            return;
        ce.preventDefault();
        let ye = ce.nativeEvent.submitter
          , W = ye?.getAttribute("formmethod") || h
          , Re = () => B(ye || ce.currentTarget, {
            fetcherKey: u,
            method: W,
            navigate: s,
            replace: o,
            state: d,
            relative: g,
            preventScrollReset: E,
            viewTransition: v,
            unstable_defaultShouldRevalidate: O
        });
        Y && s !== !1 ? U.startTransition( () => Re()) : Re()
    }
    ;
    return U.createElement("form", {
        ref: _,
        method: V,
        action: Q,
        onSubmit: r ? y : ue,
        ...N,
        "data-discover": !J && c === "render" ? "true" : void 0
    })
}
);
Tv.displayName = "Form";
function Ov(c) {
    return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Am(c) {
    let u = U.useContext(Ga);
    return Ge(u, Ov(c)),
    u
}
function zv(c, {target: u, replace: s, state: r, preventScrollReset: o, relative: d, viewTransition: h, unstable_defaultShouldRevalidate: p, unstable_useTransitions: y}={}) {
    let g = sc()
      , E = wl()
      , v = kn(c, {
        relative: d
    });
    return U.useCallback(O => {
        if (lv(O, u)) {
            O.preventDefault();
            let N = s !== void 0 ? s : Zn(E) === Zn(v)
              , _ = () => g(c, {
                replace: N,
                state: r,
                preventScrollReset: o,
                relative: d,
                viewTransition: h,
                unstable_defaultShouldRevalidate: p
            });
            y ? U.startTransition( () => _()) : _()
        }
    }
    , [E, g, v, s, r, u, c, o, d, h, p, y])
}
var Av = 0
  , Rv = () => `__${String(++Av)}__`;
function Cv() {
    let {router: c} = Am("useSubmit")
      , {basename: u} = U.useContext(_t)
      , s = Jy()
      , r = c.fetch
      , o = c.navigate;
    return U.useCallback(async (d, h={}) => {
        let {action: p, method: y, encType: g, formData: E, body: v} = iv(d, u);
        if (h.navigate === !1) {
            let O = h.fetcherKey || Rv();
            await r(O, s, h.action || p, {
                unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
                preventScrollReset: h.preventScrollReset,
                formData: E,
                body: v,
                formMethod: h.method || y,
                formEncType: h.encType || g,
                flushSync: h.flushSync
            })
        } else
            await o(h.action || p, {
                unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
                preventScrollReset: h.preventScrollReset,
                formData: E,
                body: v,
                formMethod: h.method || y,
                formEncType: h.encType || g,
                replace: h.replace,
                state: h.state,
                fromRouteId: s,
                flushSync: h.flushSync,
                viewTransition: h.viewTransition
            })
    }
    , [r, o, u, s])
}
function Nv(c, {relative: u}={}) {
    let {basename: s} = U.useContext(_t)
      , r = U.useContext(rl);
    Ge(r, "useFormAction must be used inside a RouteContext");
    let[o] = r.matches.slice(-1)
      , d = {
        ...kn(c || ".", {
            relative: u
        })
    }
      , h = wl();
    if (c == null) {
        d.search = h.search;
        let p = new URLSearchParams(d.search)
          , y = p.getAll("index");
        if (y.some(E => E === "")) {
            p.delete("index"),
            y.filter(v => v).forEach(v => p.append("index", v));
            let E = p.toString();
            d.search = E ? `?${E}` : ""
        }
    }
    return (!c || c === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (d.pathname = d.pathname === "/" ? s : ul([s, d.pathname])),
    Zn(d)
}
function Dv(c, {relative: u}={}) {
    let s = U.useContext(gm);
    Ge(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = Am("useViewTransitionState")
      , o = kn(c, {
        relative: u
    });
    if (!s.isTransitioning)
        return !1;
    let d = sl(s.currentLocation.pathname, r) || s.currentLocation.pathname
      , h = sl(s.nextLocation.pathname, r) || s.nextLocation.pathname;
    return Eu(o.pathname, h) != null || Eu(o.pathname, d) != null
}
function _v() {
    const c = wl();
    return H.jsxs("div", {
        className: "relative flex flex-col items-center justify-center h-screen text-center px-4",
        children: [H.jsx("h1", {
            className: "absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0",
            children: "404"
        }), H.jsxs("div", {
            className: "relative z-10",
            children: [H.jsx("h1", {
                className: "text-xl md:text-2xl font-semibold mt-6",
                children: "This page has not been generated"
            }), H.jsx("p", {
                className: "mt-2 text-base text-gray-400 font-mono",
                children: c.pathname
            }), H.jsx("p", {
                className: "mt-4 text-lg md:text-xl text-gray-500",
                children: "Tell me more about this page, so I can generate it"
            })]
        })]
    })
}
const Mv = () => {
    sc();
    const [c,u] = U.useState("home")
      , [s,r] = U.useState(!1)
      , [o,d] = U.useState({
        name: "",
        email: "",
        message: ""
    })
      , [h,p] = U.useState("");
    U.useEffect( () => {
        const v = () => {
            r(window.scrollY > 50);
            const N = ["home", "about", "project", "contact"].find(_ => {
                const Y = document.getElementById(_);
                if (Y) {
                    const B = Y.getBoundingClientRect();
                    return B.top <= 100 && B.bottom >= 100
                }
                return !1
            }
            );
            N && u(N)
        }
        ;
        return window.addEventListener("scroll", v),
        () => window.removeEventListener("scroll", v)
    }
    , []);
    const y = v => {
        const O = document.getElementById(v);
        O && O.scrollIntoView({
            behavior: "smooth"
        })
    }
      , g = async v => {
        v.preventDefault(),
        p("sending");
        try {
            const O = v.target
              , N = new FormData(O);
            (await fetch("https://readdy.ai/api/form/d5a5qumfmrgp9cvlutgg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(N).toString()
            })).ok ? (p("success"),
            d({
                name: "",
                email: "",
                message: ""
            }),
            setTimeout( () => p(""), 3e3)) : p("error")
        } catch {
            p("error")
        }
    }
      , E = v => {
        d({
            ...o,
            [v.target.name]: v.target.value
        })
    }
    ;
    return H.jsxs("div", {
        className: "relative min-h-screen bg-gradient-to-br from-purple-950 via-black to-green-950 text-white overflow-hidden",
        children: [H.jsx("div", {
            className: "fixed inset-0 pointer-events-none z-0",
            children: [...Array(15)].map( (v, O) => H.jsx("div", {
                className: "absolute animate-float-card opacity-20",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${15 + Math.random() * 10}s`
                },
                children: H.jsx("div", {
                    className: "w-16 h-24 bg-gradient-to-br from-purple-600 to-green-600 rounded-lg transform rotate-12 shadow-2xl"
                })
            }, O))
        }), H.jsx("nav", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s ? "bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/20" : ""}`,
            children: H.jsx("div", {
                className: "max-w-7xl mx-auto px-6 py-4",
                children: H.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [H.jsxs("div", {
                        className: "flex items-center gap-3 cursor-pointer",
                        onClick: () => y("home"),
                        children: [H.jsx("img", {
                            src: "https://static.readdy.ai/image/97d746b67cc1ddf5921855a4508ab8d5/8129bd48d4eb8b4b03b185d3e048999f.jpeg",
                            alt: "Logo",
                            className: "w-12 h-12 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-500/50"
                        }), H.jsx("span", {
                            className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent",
                            children: "Joker Portfolio"
                        })]
                    }), H.jsx("div", {
                        className: "flex gap-8",
                        children: ["home", "about", "project", "contact"].map(v => H.jsx("button", {
                            onClick: () => y(v),
                            className: `text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-purple-400 whitespace-nowrap cursor-pointer ${c === v ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-300"}`,
                            children: v
                        }, v))
                    })]
                })
            })
        }), H.jsxs("section", {
            id: "home",
            className: "relative min-h-screen flex items-center justify-center px-6",
            children: [H.jsx("div", {
                className: "absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/560337bdec208e881a2692f6d6c65eb8.jpg')] bg-cover bg-center opacity-30"
            }), H.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/50"
            }), H.jsxs("div", {
                className: "relative z-10 text-center max-w-4xl",
                children: [H.jsx("h1", {
                    className: "text-7xl font-bold mb-6 animate-fade-in",
                    children: H.jsx("span", {
                        className: "bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent",
                        children: "Welcome to Chaos"
                    })
                }), H.jsx("p", {
                    className: "text-2xl text-gray-300 mb-8 animate-fade-in-delay",
                    children: "Where creativity meets madness and innovation dances with chaos"
                }), H.jsxs("div", {
                    className: "flex gap-6 justify-center animate-fade-in-delay-2",
                    children: [H.jsx("button", {
                        onClick: () => y("project"),
                        className: "px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer",
                        children: "View Projects"
                    }), H.jsx("button", {
                        onClick: () => y("contact"),
                        className: "px-8 py-4 border-2 border-green-500 rounded-lg font-semibold hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer",
                        children: "Get in Touch"
                    })]
                })]
            })]
        }), H.jsx("section", {
            id: "about",
            className: "relative min-h-screen flex items-center justify-center px-6 py-20",
            children: H.jsxs("div", {
                className: "relative z-10 max-w-6xl w-full",
                children: [H.jsx("h2", {
                    className: "text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent",
                    children: "About the Madness"
                }), H.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [H.jsxs("div", {
                        className: "relative",
                        children: [H.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-purple-600/30 to-green-600/30 rounded-2xl blur-xl"
                        }), H.jsx("img", {
                            src: "https://readdy.ai/api/search-image?query=mysterious%20silhouette%20figure%20with%20purple%20and%20green%20dramatic%20lighting%20professional%20portrait%20dark%20moody%20atmosphere%20cinematic%20style&width=600&height=800&seq=about-img-001&orientation=portrait",
                            alt: "About",
                            className: "relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                        })]
                    }), H.jsxs("div", {
                        className: "space-y-6",
                        children: [H.jsx("p", {
                            className: "text-lg text-gray-300 leading-relaxed",
                            children: "In a world of order and predictability, I bring the unexpected. A creative mind that thrives in chaos, turning wild ideas into extraordinary realities."
                        }), H.jsx("p", {
                            className: "text-lg text-gray-300 leading-relaxed",
                            children: "With a passion for pushing boundaries and breaking conventions, every project is an opportunity to create something that makes people question what they thought was possible."
                        }), H.jsx("p", {
                            className: "text-lg text-gray-300 leading-relaxed",
                            children: "Why so serious? Let's make something amazing together."
                        }), H.jsxs("div", {
                            className: "grid grid-cols-3 gap-6 pt-8",
                            children: [H.jsxs("div", {
                                className: "text-center p-6 bg-purple-900/30 rounded-xl border border-purple-500/30",
                                children: [H.jsx("div", {
                                    className: "text-4xl font-bold text-purple-400 mb-2",
                                    children: "50+"
                                }), H.jsx("div", {
                                    className: "text-sm text-gray-400 uppercase",
                                    children: "Projects"
                                })]
                            }), H.jsxs("div", {
                                className: "text-center p-6 bg-green-900/30 rounded-xl border border-green-500/30",
                                children: [H.jsx("div", {
                                    className: "text-4xl font-bold text-green-400 mb-2",
                                    children: "100+"
                                }), H.jsx("div", {
                                    className: "text-sm text-gray-400 uppercase",
                                    children: "Clients"
                                })]
                            }), H.jsxs("div", {
                                className: "text-center p-6 bg-pink-900/30 rounded-xl border border-pink-500/30",
                                children: [H.jsx("div", {
                                    className: "text-4xl font-bold text-pink-400 mb-2",
                                    children: "5+"
                                }), H.jsx("div", {
                                    className: "text-sm text-gray-400 uppercase",
                                    children: "Years"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }), H.jsx("section", {
            id: "project",
            className: "relative min-h-screen flex items-center justify-center px-6 py-20",
            children: H.jsxs("div", {
                className: "relative z-10 max-w-7xl w-full",
                children: [H.jsx("h2", {
                    className: "text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent",
                    children: "Projects of Chaos"
                }), H.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [{
                        title: "Purple Reign",
                        desc: "A revolutionary web experience that defies conventional design principles",
                        image: "https://readdy.ai/api/search-image?query=abstract%20purple%20digital%20art%20modern%20web%20design%20interface%20futuristic%20technology%20glowing%20elements%20dark%20background&width=600&height=400&seq=proj-001&orientation=landscape"
                    }, {
                        title: "Green Machine",
                        desc: "An eco-tech platform merging sustainability with cutting-edge innovation",
                        image: "https://readdy.ai/api/search-image?query=abstract%20green%20digital%20technology%20eco%20friendly%20modern%20interface%20glowing%20circuits%20dark%20background&width=600&height=400&seq=proj-002&orientation=landscape"
                    }, {
                        title: "Chaos Theory",
                        desc: "Where randomness meets purpose in a symphony of digital artistry",
                        image: "https://readdy.ai/api/search-image?query=abstract%20chaotic%20colorful%20digital%20art%20purple%20green%20pink%20swirls%20modern%20design%20dark%20background&width=600&height=400&seq=proj-003&orientation=landscape"
                    }, {
                        title: "Neon Dreams",
                        desc: "A cyberpunk-inspired journey through light and shadow",
                        image: "https://readdy.ai/api/search-image?query=neon%20lights%20cyberpunk%20cityscape%20purple%20green%20glow%20futuristic%20urban%20night%20scene%20dark%20background&width=600&height=400&seq=proj-004&orientation=landscape"
                    }, {
                        title: "Digital Madness",
                        desc: "Breaking the boundaries between reality and virtual insanity",
                        image: "https://readdy.ai/api/search-image?query=abstract%20digital%20glitch%20art%20purple%20green%20distortion%20modern%20technology%20matrix%20style%20dark%20background&width=600&height=400&seq=proj-005&orientation=landscape"
                    }, {
                        title: "Wild Card",
                        desc: "The unpredictable project that changed everything",
                        image: "https://readdy.ai/api/search-image?query=playing%20cards%20flying%20purple%20green%20magical%20glow%20casino%20theme%20dramatic%20lighting%20dark%20background&width=600&height=400&seq=proj-006&orientation=landscape"
                    }].map( (v, O) => H.jsxs("div", {
                        className: "group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105",
                        children: [H.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-purple-600/50 to-green-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        }), H.jsx("div", {
                            className: "w-full h-64",
                            children: H.jsx("img", {
                                src: v.image,
                                alt: v.title,
                                className: "w-full h-full object-cover"
                            })
                        }), H.jsxs("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 z-20",
                            children: [H.jsx("h3", {
                                className: "text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300",
                                children: v.title
                            }), H.jsx("p", {
                                className: "text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0",
                                children: v.desc
                            })]
                        })]
                    }, O))
                })]
            })
        }), H.jsx("section", {
            id: "contact",
            className: "relative min-h-screen flex items-center justify-center px-6 py-20",
            children: H.jsxs("div", {
                className: "relative z-10 max-w-4xl w-full",
                children: [H.jsx("h2", {
                    className: "text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent",
                    children: "Let's Create Chaos"
                }), H.jsxs("div", {
                    className: "bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20",
                    children: [H.jsxs("form", {
                        id: "contact-form",
                        "data-readdy-form": !0,
                        onSubmit: g,
                        className: "space-y-6",
                        children: [H.jsxs("div", {
                            children: [H.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium text-gray-300 mb-2",
                                children: "Your Name"
                            }), H.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                value: o.name,
                                onChange: E,
                                required: !0,
                                className: "w-full px-4 py-3 bg-purple-900/20 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-sm",
                                placeholder: "Enter your name"
                            })]
                        }), H.jsxs("div", {
                            children: [H.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-300 mb-2",
                                children: "Email Address"
                            }), H.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: o.email,
                                onChange: E,
                                required: !0,
                                className: "w-full px-4 py-3 bg-purple-900/20 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-sm",
                                placeholder: "your.email@example.com"
                            })]
                        }), H.jsxs("div", {
                            children: [H.jsx("label", {
                                htmlFor: "message",
                                className: "block text-sm font-medium text-gray-300 mb-2",
                                children: "Message"
                            }), H.jsx("textarea", {
                                id: "message",
                                name: "message",
                                value: o.message,
                                onChange: E,
                                required: !0,
                                maxLength: 500,
                                rows: 6,
                                className: "w-full px-4 py-3 bg-purple-900/20 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 resize-none text-sm",
                                placeholder: "Tell me about your project..."
                            }), H.jsxs("div", {
                                className: "text-right text-xs text-gray-500 mt-1",
                                children: [o.message.length, "/500"]
                            })]
                        }), H.jsx("button", {
                            type: "submit",
                            disabled: h === "sending",
                            className: "w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer",
                            children: h === "sending" ? "Sending..." : "Send Message"
                        }), h === "success" && H.jsx("div", {
                            className: "p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center",
                            children: "Message sent successfully! I'll get back to you soon."
                        }), h === "error" && H.jsx("div", {
                            className: "p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center",
                            children: "Something went wrong. Please try again."
                        })]
                    }), H.jsx("div", {
                        className: "mt-8 pt-8 border-t border-purple-500/30",
                        children: H.jsxs("div", {
                            className: "flex justify-center gap-6",
                            children: [H.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 flex items-center justify-center bg-purple-600/30 rounded-full hover:bg-purple-600 transition-all duration-300 cursor-pointer",
                                children: H.jsx("i", {
                                    className: "ri-twitter-x-line text-xl"
                                })
                            }), H.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 flex items-center justify-center bg-purple-600/30 rounded-full hover:bg-purple-600 transition-all duration-300 cursor-pointer",
                                children: H.jsx("i", {
                                    className: "ri-linkedin-fill text-xl"
                                })
                            }), H.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 flex items-center justify-center bg-purple-600/30 rounded-full hover:bg-purple-600 transition-all duration-300 cursor-pointer",
                                children: H.jsx("i", {
                                    className: "ri-github-fill text-xl"
                                })
                            }), H.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 flex items-center justify-center bg-purple-600/30 rounded-full hover:bg-purple-600 transition-all duration-300 cursor-pointer",
                                children: H.jsx("i", {
                                    className: "ri-instagram-line text-xl"
                                })
                            })]
                        })
                    })]
                })]
            })
        }), H.jsx("footer", {
            className: "relative bg-gradient-to-r from-purple-900/50 to-green-900/50 backdrop-blur-md py-8 border-t border-purple-500/30",
            children: H.jsx("div", {
                className: "max-w-7xl mx-auto px-6 text-center",
                children: H.jsxs("p", {
                    className: "text-gray-400",
                    children: ["© 2025 Joker Portfolio. All rights reserved. | ", H.jsx("a", {
                        href: "https://readdy.ai/?ref=logo",
                        className: "text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer",
                        children: "Powered by Readdy"
                    })]
                })
            })
        })]
    })
}
  , Uv = [{
    path: "/",
    element: H.jsx(Mv, {})
}, {
    path: "*",
    element: H.jsx(_v, {})
}];
let Rm;
new Promise(c => {
    Rm = c
}
);
function wv() {
    const c = By(Uv)
      , u = sc();
    return U.useEffect( () => {
        window.REACT_APP_NAVIGATE = u,
        Rm(window.REACT_APP_NAVIGATE)
    }
    ),
    c
}
function Lv() {
    return H.jsx(U0, {
        i18n: We,
        children: H.jsx(xv, {
            basename: "/",
            children: H.jsx(wv, {})
        })
    })
}
ty.createRoot(document.getElementById("root")).render(H.jsx(U.StrictMode, {
    children: H.jsx(Lv, {})
}));
//# sourceMappingURL=index-kqPKF0B6.js.map
