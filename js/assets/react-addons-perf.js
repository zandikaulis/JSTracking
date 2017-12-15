webpackJsonp([0], {
    "2Mqt": function(n, e, t) {
        "use strict";

        function o() {
            a || (a = !0, "undefined" != typeof console && console.error("ReactPerf is not supported in the production builds of React. To collect measurements, please use the development build of React instead."))
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
        t("BEQ0"), t("r1Nz"), t("YyeZ");
        var a = !1,
            p = {
                getLastMeasurements: r,
                getExclusive: i,
                getInclusive: u,
                getWasted: c,
                getOperations: f,
                printExclusive: function(n) {
                    return void o()
                },
                printInclusive: function(n) {
                    return void o()
                },
                printWasted: function(n) {
                    return void o()
                },
                printOperations: s,
                start: function() {
                    o()
                },
                stop: function() {
                    o()
                },
                isRunning: function() {
                    return o(), !1
                },
                printDOM: function(n) {
                    return !0, s()
                },
                getMeasurementsSummaryMap: function(n) {
                    return !0, c(n)
                }
            };
        n.exports = p
    },
    "5yLj": function(n, e, t) {
        "use strict";
        var o, r = t("KyV2");
        o = r.now ? function() {
            return r.now()
        } : function() {
            return Date.now()
        }, n.exports = o
    },
    KyV2: function(n, e, t) {
        "use strict";
        var o;
        t("czSA").canUseDOM && (o = window.performance || window.msPerformance || window.webkitPerformance), n.exports = o || {}
    },
    ShhX: function(n, e, t) {
        "use strict";
        t("YyeZ");
        var o, r = {
            onBeginProcessingChildContext: function() {
                !0
            },
            onEndProcessingChildContext: function() {
                !1
            },
            onSetState: function() {
                o()
            }
        };
        n.exports = r
    },
    "c+Ld": function(n, e, t) {
        n.exports = t("2Mqt")
    },
    r1Nz: function(n, e, t) {
        "use strict";

        function o(n, e, t, o, r, i, u, c) {
            try {
                e.call(t, o, r, i, u, c)
            } catch (e) {
                h[n] = !0
            }
        }

        function r(n, e, t, r, i, u) {
            for (var c = 0; c < v.length; c++) {
                var f = v[c],
                    s = f[n];
                s && o(n, s, f, e, t, r, i, u)
            }
        }

        function i() {
            d.purgeUnmountedComponents(), l.clearHistory()
        }

        function u() {
            var n = H,
                e = x,
                t = l.getHistory();
            if (0 === w) return H = 0, x = [], void i();
            if (e.length || t.length) {
                var o = d.getRegisteredIDs();
                y.push({
                    duration: g() - n,
                    measurements: e || [],
                    operations: t || [],
                    treeSnapshot: function(n) {
                        return n.reduce(function(n, e) {
                            var t = d.getOwnerID(e),
                                o = d.getParentID(e);
                            return n[e] = {
                                displayName: d.getDisplayName(e),
                                text: d.getText(e),
                                updateCount: d.getUpdateCount(e),
                                childIDs: d.getChildIDs(e),
                                ownerID: t || o && d.getOwnerID(o) || 0,
                                parentID: o
                            }, n
                        }, {})
                    }(o)
                })
            }
            i(), H = g(), x = []
        }

        function c(n) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        }

        function f(n) {
            if (!C || !I) return !1;
            var e = d.getElement(n);
            if (null == e || "object" != typeof e) return !1;
            return !("string" == typeof e.type)
        }

        function s(n, e) {
            if (f(n)) {
                var t = n + "::" + e;
                B = g(), performance.mark(t)
            }
        }

        function a(n, e) {
            if (f(n)) {
                var t = n + "::" + e,
                    o = d.getDisplayName(n) || "Unknown";
                if (g() - B > .1) {
                    var r = o + " [" + e + "]";
                    performance.measure(r, t)
                }
                performance.clearMarks(t), performance.clearMeasures(r)
            }
        }
        var p = t("ShhX"),
            l = t("zdRD"),
            d = t("5LTE"),
            m = t("czSA"),
            g = t("5yLj"),
            v = (t("YyeZ"), []),
            h = {},
            C = !1,
            y = [],
            D = [],
            w = 0,
            x = [],
            H = 0,
            M = null,
            S = 0,
            T = 0,
            k = null,
            E = !1,
            B = 0,
            I = "undefined" != typeof performance && "function" == typeof performance.mark && "function" == typeof performance.clearMarks && "function" == typeof performance.measure && "function" == typeof performance.clearMeasures,
            P = {
                addHook: function(n) {
                    v.push(n)
                },
                removeHook: function(n) {
                    for (var e = 0; e < v.length; e++) v[e] === n && (v.splice(e, 1), e--)
                },
                isProfiling: function() {
                    return C
                },
                beginProfiling: function() {
                    C || (C = !0, y.length = 0, u(), P.addHook(l))
                },
                endProfiling: function() {
                    C && (C = !1, u(), P.removeHook(l))
                },
                getFlushHistory: function() {
                    return y
                },
                onBeginFlush: function() {
                    w++, u(),
                        function() {
                            var n = {
                                startTime: S,
                                nestedFlushStartTime: g(),
                                debugID: M,
                                timerType: k
                            };
                            D.push(n), S = 0, T = 0, M = null, k = null
                        }(), r("onBeginFlush")
                },
                onEndFlush: function() {
                    u(), w--,
                        function() {
                            var n = D.pop(),
                                e = n.startTime,
                                t = n.nestedFlushStartTime,
                                o = n.debugID,
                                r = n.timerType,
                                i = g() - t;
                            S = e, T += i, M = o, k = r
                        }(), r("onEndFlush")
                },
                onBeginLifeCycleTimer: function(n, e) {
                    c(n), r("onBeginLifeCycleTimer", n, e), s(n, e),
                        function(n, e) {
                            0 !== w && (k && !E && (E = !0), S = g(), T = 0, M = n, k = e)
                        }(n, e)
                },
                onEndLifeCycleTimer: function(n, e) {
                    c(n),
                        function(n, e) {
                            0 !== w && (k === e || E || (E = !0), C && x.push({
                                timerType: e,
                                instanceID: n,
                                duration: g() - S - T
                            }), S = 0, T = 0, M = null, k = null)
                        }(n, e), a(n, e), r("onEndLifeCycleTimer", n, e)
                },
                onBeginProcessingChildContext: function() {
                    r("onBeginProcessingChildContext")
                },
                onEndProcessingChildContext: function() {
                    r("onEndProcessingChildContext")
                },
                onHostOperation: function(n) {
                    c(n.instanceID), r("onHostOperation", n)
                },
                onSetState: function() {
                    r("onSetState")
                },
                onSetChildren: function(n, e) {
                    c(n), e.forEach(c), r("onSetChildren", n, e)
                },
                onBeforeMountComponent: function(n, e, t) {
                    c(n), c(t, !0), r("onBeforeMountComponent", n, e, t), s(n, "mount")
                },
                onMountComponent: function(n) {
                    c(n), a(n, "mount"), r("onMountComponent", n)
                },
                onBeforeUpdateComponent: function(n, e) {
                    c(n), r("onBeforeUpdateComponent", n, e), s(n, "update")
                },
                onUpdateComponent: function(n) {
                    c(n), a(n, "update"), r("onUpdateComponent", n)
                },
                onBeforeUnmountComponent: function(n) {
                    c(n), r("onBeforeUnmountComponent", n), s(n, "unmount")
                },
                onUnmountComponent: function(n) {
                    c(n), a(n, "unmount"), r("onUnmountComponent", n)
                },
                onTestEvent: function() {
                    r("onTestEvent")
                }
            };
        P.addDevtool = P.addHook, P.removeDevtool = P.removeHook, P.addHook(p), P.addHook(d);
        var U = m.canUseDOM && window.location.href || "";
        /[?&]react_perf\b/.test(U) && P.beginProfiling(), n.exports = P
    },
    zdRD: function(n, e, t) {
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
    }
});
//# sourceMappingURL=react-addons-perf-381acfde3835c655022effb14c51d5ea.js.map