webpackJsonp([1], {
    1987: function(n, e, t) {
        "use strict";

        function o() {
            C || (C = !0, "undefined" != typeof console && console.error("ReactPerf is not supported in the production builds of React. To collect measurements, please use the development build of React instead."))
        }

        function r() {
            return o(), []
        }

        function i() {
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
            return o(), []
        }

        function u() {
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
            return o(), []
        }

        function c() {
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
            return o(), []
        }

        function f() {
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
            return o(), []
        }

        function s(n) {
            return void o()
        }

        function a(n) {
            return void o()
        }

        function p(n) {
            return void o()
        }

        function l(n) {
            return void o()
        }

        function d(n) {
            return y = !0, l(n)
        }

        function m(n) {
            return D = !0, c(n)
        }

        function g() {
            return void o()
        }

        function v() {
            return void o()
        }

        function h() {
            return o(), !1
        }
        var C = (t(16), t(1988), t(11), !1),
            y = !1,
            D = !1,
            w = {
                getLastMeasurements: r,
                getExclusive: i,
                getInclusive: u,
                getWasted: c,
                getOperations: f,
                printExclusive: s,
                printInclusive: a,
                printWasted: p,
                printOperations: l,
                start: g,
                stop: v,
                isRunning: h,
                printDOM: d,
                getMeasurementsSummaryMap: m
            };
        n.exports = w
    },
    1988: function(n, e, t) {
        "use strict";

        function o(n, e, t, o, r, i, u, c) {
            try {
                e.call(t, o, r, i, u, c)
            } catch (e) {
                x[n] = !0
            }
        }

        function r(n, e, t, r, i, u) {
            for (var c = 0; c < w.length; c++) {
                var f = w[c],
                    s = f[n];
                s && o(n, s, f, e, t, r, i, u)
            }
        }

        function i() {
            C.purgeUnmountedComponents(), h.clearHistory()
        }

        function u(n) {
            return n.reduce(function(n, e) {
                var t = C.getOwnerID(e),
                    o = C.getParentID(e);
                return n[e] = {
                    displayName: C.getDisplayName(e),
                    text: C.getText(e),
                    updateCount: C.getUpdateCount(e),
                    childIDs: C.getChildIDs(e),
                    ownerID: t || o && C.getOwnerID(o) || 0,
                    parentID: o
                }, n
            }, {})
        }

        function c() {
            var n = P,
                e = M,
                t = h.getHistory();
            if (0 === I) return P = 0, M = [], void i();
            if (e.length || t.length) {
                var o = C.getRegisteredIDs();
                k.push({
                    duration: D() - n,
                    measurements: e || [],
                    operations: t || [],
                    treeSnapshot: u(o)
                })
            }
            i(), P = D(), M = []
        }

        function f(n) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        }

        function s(n, e) {
            0 !== I && (S && !b && (b = !0), E = D(), U = 0, B = n, S = e)
        }

        function a(n, e) {
            0 !== I && (S === e || b || (b = !0), H && M.push({
                timerType: e,
                instanceID: n,
                duration: D() - E - U
            }), E = 0, U = 0, B = null, S = null)
        }

        function p() {
            var n = {
                startTime: E,
                nestedFlushStartTime: D(),
                debugID: B,
                timerType: S
            };
            T.push(n), E = 0, U = 0, B = null, S = null
        }

        function l() {
            var n = T.pop(),
                e = n.startTime,
                t = n.nestedFlushStartTime,
                o = n.debugID,
                r = n.timerType,
                i = D() - t;
            E = e, U += i, B = o, S = r
        }

        function d(n) {
            if (!H || !F) return !1;
            var e = C.getElement(n);
            return null != e && "object" == typeof e && !("string" == typeof e.type)
        }

        function m(n, e) {
            if (d(n)) {
                var t = n + "::" + e;
                O = D(), performance.mark(t)
            }
        }

        function g(n, e) {
            if (d(n)) {
                var t = n + "::" + e,
                    o = C.getDisplayName(n) || "Unknown";
                if (D() - O > .1) {
                    var r = o + " [" + e + "]";
                    performance.measure(r, t)
                }
                performance.clearMarks(t), performance.clearMeasures(r)
            }
        }
        var v = t(1989),
            h = t(1990),
            C = t(299),
            y = t(25),
            D = t(1991),
            w = (t(11), []),
            x = {},
            H = !1,
            k = [],
            T = [],
            I = 0,
            M = [],
            P = 0,
            B = null,
            E = 0,
            U = 0,
            S = null,
            b = !1,
            O = 0,
            F = "undefined" != typeof performance && "function" == typeof performance.mark && "function" == typeof performance.clearMarks && "function" == typeof performance.measure && "function" == typeof performance.clearMeasures,
            L = {
                addHook: function(n) {
                    w.push(n)
                },
                removeHook: function(n) {
                    for (var e = 0; e < w.length; e++) w[e] === n && (w.splice(e, 1), e--)
                },
                isProfiling: function() {
                    return H
                },
                beginProfiling: function() {
                    H || (H = !0, k.length = 0, c(), L.addHook(h))
                },
                endProfiling: function() {
                    H && (H = !1, c(), L.removeHook(h))
                },
                getFlushHistory: function() {
                    return k
                },
                onBeginFlush: function() {
                    I++, c(), p(), r("onBeginFlush")
                },
                onEndFlush: function() {
                    c(), I--, l(), r("onEndFlush")
                },
                onBeginLifeCycleTimer: function(n, e) {
                    f(n), r("onBeginLifeCycleTimer", n, e), m(n, e), s(n, e)
                },
                onEndLifeCycleTimer: function(n, e) {
                    f(n), a(n, e), g(n, e), r("onEndLifeCycleTimer", n, e)
                },
                onBeginProcessingChildContext: function() {
                    r("onBeginProcessingChildContext")
                },
                onEndProcessingChildContext: function() {
                    r("onEndProcessingChildContext")
                },
                onHostOperation: function(n) {
                    f(n.instanceID), r("onHostOperation", n)
                },
                onSetState: function() {
                    r("onSetState")
                },
                onSetChildren: function(n, e) {
                    f(n), e.forEach(f), r("onSetChildren", n, e)
                },
                onBeforeMountComponent: function(n, e, t) {
                    f(n), f(t, !0), r("onBeforeMountComponent", n, e, t), m(n, "mount")
                },
                onMountComponent: function(n) {
                    f(n), g(n, "mount"), r("onMountComponent", n)
                },
                onBeforeUpdateComponent: function(n, e) {
                    f(n), r("onBeforeUpdateComponent", n, e), m(n, "update")
                },
                onUpdateComponent: function(n) {
                    f(n), g(n, "update"), r("onUpdateComponent", n)
                },
                onBeforeUnmountComponent: function(n) {
                    f(n), r("onBeforeUnmountComponent", n), m(n, "unmount")
                },
                onUnmountComponent: function(n) {
                    f(n), g(n, "unmount"), r("onUnmountComponent", n)
                },
                onTestEvent: function() {
                    r("onTestEvent")
                }
            };
        L.addDevtool = L.addHook, L.removeDevtool = L.removeHook, L.addHook(v), L.addHook(C), /[?&]react_perf\b/.test(y.canUseDOM && window.location.href || "") && L.beginProfiling(), n.exports = L
    },
    1989: function(n, e, t) {
        "use strict";
        var o, r, i = (t(11), {
            onBeginProcessingChildContext: function() {
                o = !0
            },
            onEndProcessingChildContext: function() {
                o = !1
            },
            onSetState: function() {
                r()
            }
        });
        n.exports = i
    },
    1990: function(n, e, t) {
        "use strict";
        var o = [],
            r = {
                onHostOperation: function(n) {
                    o.push(n)
                },
                clearHistory: function() {
                    r._preventClearing || (o = [])
                },
                getHistory: function() {
                    return o
                }
            };
        n.exports = r
    },
    1991: function(n, e, t) {
        "use strict";
        var o, r = t(1992);
        o = r.now ? function() {
            return r.now()
        } : function() {
            return Date.now()
        }, n.exports = o
    },
    1992: function(n, e, t) {
        "use strict";
        var o, r = t(25);
        r.canUseDOM && (o = window.performance || window.msPerformance || window.webkitPerformance), n.exports = o || {}
    },
    2077: function(n, e, t) {
        n.exports = t(1987)
    }
});
//# sourceMappingURL=react-addons-perf-c703e7bf024b404b161a8dc26eedffce.js.map