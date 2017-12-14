webpackJsonp([59], {
    107: function(e, t, n) {
        "use strict";

        function r(e) {
            return Object(o.bindActionCreators)({
                onClose: a.c
            }, e)
        }
        var i = n(7),
            o = n(9),
            a = n(37),
            s = n(0),
            l = n(1),
            c = n(2),
            u = n(115),
            d = n(3),
            h = (n(234), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleHistoryChange = function() {
                        t.handleClose()
                    }, t.handleGlobalKeypress = function(e) {
                        t.props.ignoreEscKey || 27 !== e.which || t.handleClose()
                    }, t.handleGlobalClick = function(e) {
                        var n = e.target;
                        t.props.closeOnBackdropClick && n.matches("." + u.b) && t.handleClose()
                    }, t.handleClose = function() {
                        t.props.onClose()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.ignoreEscKey || document.addEventListener("keydown", this.handleGlobalKeypress), this.props.closeOnBackdropClick && document.addEventListener("click", this.handleGlobalClick), this.props.closeOnPageNavigation && (this.historyUnlisten = c.n.history.listen(this.handleHistoryChange))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.handleGlobalKeypress), document.removeEventListener("click", this.handleGlobalKeypress), this.historyUnlisten && this.historyUnlisten()
                }, t.prototype.render = function() {
                    return l.createElement("div", {
                        className: "modal__close-button"
                    }, l.createElement(d.v, {
                        overlay: !0,
                        onClick: this.handleClose,
                        ariaLabel: Object(c.d)("Close modal", "ModalCloser"),
                        icon: d._10.Close,
                        "data-a-target": "modalClose"
                    }))
                }, t
            }(l.PureComponent)),
            p = Object(i.a)(null, r)(h);
        n.d(t, "a", function() {
            return p
        })
    },
    114: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n(2),
            i = /[^A-Za-z0-9]+/g,
            o = r.n.logger.withCategory("McGill"),
            a = function() {
                function e() {}
                return e.polyfillGoogletag = function() {
                    window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || []
                }, e.setAppWideTracking = function(e, t) {
                    var n = this;
                    this.polyfillGoogletag(), window.googletag.cmd.push(function() {
                        window.googletag.pubads().setTargeting(e, n.normalizeTargetingValue(t))
                    })
                }, e.clearAppWideTracking = function(e) {
                    this.polyfillGoogletag(), window.googletag.cmd.push(function() {
                        window.googletag.pubads().clearTargeting(e)
                    })
                }, e.createSlot = function(e, t, n, r, i) {
                    var a = this;
                    return o.debug("Creating slot", {
                        div: e,
                        adUnitPath: t,
                        size: n,
                        targeting: r
                    }), this.polyfillGoogletag(), new Promise(function(o, s) {
                        window.googletag.cmd.push(function() {
                            var l = window.googletag.defineSlot(t, n, e);
                            if (!l) return void s();
                            l.addService(window.googletag.companionAds()), l.addService(window.googletag.pubads()), Object.keys(r).forEach(function(e) {
                                l.setTargeting(e, a.normalizeTargetingValue(r[e]))
                            }), i && window.googletag.enableServices(), o(l)
                        })
                    })
                }, e.display = function(e) {
                    this.polyfillGoogletag(), window.googletag.cmd.push(function() {
                        window.googletag.enableServices(), window.googletag.display(e)
                    })
                }, e.destroySlot = function(e) {
                    this.polyfillGoogletag(), window.googletag.cmd.push(function() {
                        window.googletag.destroySlots([e])
                    })
                }, e.initialize = function(e) {
                    this.polyfillGoogletag(), window.googletag.cmd.push(function() {
                        window.googletag.pubads().enableSingleRequest(), window.googletag.companionAds().addEventListener("slotRenderEnded", e), window.googletag.pubads().addEventListener("slotRenderEnded", e)
                    })
                }, e.normalizeTargetingValue = function(e) {
                    var t = function(e) {
                        return e.replace(i, "_")
                    };
                    return "string" == typeof e ? t(e) : e.map(t)
                }, e
            }()
    },
    115: function(e, t, n) {
        "use strict";

        function r(e) {
            return c.createElement(u, {
                isOpen: e.showModal,
                contentLabel: "Modal",
                className: "modal__content",
                overlayClassName: "modal__backdrop " + h + " " + Object(d.c)(e.theme),
                shouldCloseOnOverlayClick: !1
            }, e.component && c.createElement(e.component, l.__assign({}, e.componentProps)))
        }

        function i(e) {
            return {
                showModal: e.modal.show,
                component: e.modal.modalID ? Object(a.a)(e) : null,
                componentProps: e.modal.modalProps,
                theme: Object(s.a)(e)
            }
        }
        var o = n(7),
            a = n(92),
            s = n(52),
            l = n(0),
            c = n(1),
            u = n(354),
            d = n(24),
            h = (n(190), "js-modal-backdrop"),
            p = Object(o.a)(i)(r);
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return h
        })
    },
    116: function(e, t, n) {
        "use strict";
        var r, i = n(0),
            o = n(4),
            a = n(10),
            s = n(1),
            l = n(2);
        n(241);
        ! function(e) {
            e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
        }(r || (r = {}));
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    hasPendingLoadMoreRequest: !1,
                    loadedMore: !0
                }, t.isTriggerVisible = function(e, t) {
                    var n = t.top,
                        r = t.top + t.height;
                    return !(e.bottom < n || e.top > r)
                }, t.getOrientation = function() {
                    return void 0 === t.props.orientation ? r.Up : t.props.orientation
                }, t.setWrapRef = function(e) {
                    return t.wrapElement = e
                }, t.setRef = function(e) {
                    return t.element = e
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.getOrientation(),
                    t = o({
                        "scrollable-trigger__trigger-area": !0,
                        "scrollable-trigger__trigger-area--up": e === r.Up,
                        "scrollable-trigger__trigger-area--down": e === r.Down
                    }),
                    n = {
                        height: this.props.pixelThreshold || 100
                    };
                return s.createElement("div", {
                    className: "scrollable-trigger__wrapper",
                    ref: this.setWrapRef
                }, s.createElement("div", {
                    className: t,
                    ref: this.setRef,
                    style: n
                }))
            }, t.prototype.componentDidMount = function() {
                var e = this.context.registerReceiver;
                if (!e) return void l.i.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider");
                this.unregister = e(this)
            }, t.prototype.componentWillUnmount = function() {
                this.unregister && this.unregister()
            }, t.prototype.componentWillReceiveProps = function(e) {
                !this.props.enabled && e.enabled && this.context.requestVisibilityCheck(this)
            }, t.prototype.checkVisible = function(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, r, o, a, s = this;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (void 0 === n && (n = this.props.requestCap || 5), !(this.element && this.state.loadedMore && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                if (t = this.element.getBoundingClientRect(), r = this.props.contentLength, o = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                this.setState({
                                    hasPendingLoadMoreRequest: !0
                                }), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                            case 2:
                                return i.sent(), this.setState({
                                    hasPendingLoadMoreRequest: !1
                                }), requestAnimationFrame(function() {
                                    if (s.element) {
                                        var t;
                                        t = void 0 !== s.props.contentLength && void 0 !== r ? s.props.contentLength > r : s.wrapElement.offsetTop > o, s.setState({
                                            loadedMore: t
                                        }), n && t && s.checkVisible(e, void 0, n - 1)
                                    }
                                }), [3, 4];
                            case 3:
                                throw a = i.sent(), this.element && this.setState({
                                    hasPendingLoadMoreRequest: !1
                                }), a;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.contextTypes = {
                registerReceiver: a.func,
                requestVisibilityCheck: a.func
            }, t
        }(s.Component);
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return c
        })
    },
    118: function(e, t) {
        function n(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }

        function r(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }

        function i(e, t) {
            var n = M(e) || p(e) ? r(e.length, String) : [],
                i = n.length,
                o = !!i;
            for (var a in e) !t && !T.call(e, a) || o && ("length" == a || c(a, i)) || n.push(a);
            return n
        }

        function o(e, t, n) {
            var r = e[t];
            T.call(e, t) && h(r, n) && (void 0 !== n || t in e) || (e[t] = n)
        }

        function a(e) {
            if (!d(e)) return R(e);
            var t = [];
            for (var n in Object(e)) T.call(e, n) && "constructor" != n && t.push(n);
            return t
        }

        function s(e, t) {
            return t = I(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, i = -1, o = I(r.length - t, 0), a = Array(o); ++i < o;) a[i] = r[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
                    return s[t] = a, n(e, this, s)
                }
        }

        function l(e, t, n, r) {
            n || (n = {});
            for (var i = -1, a = t.length; ++i < a;) {
                var s = t[i],
                    l = r ? r(n[s], e[s], s, n, e) : void 0;
                o(n, s, void 0 === l ? e[s] : l)
            }
            return n
        }

        function c(e, t) {
            return !!(t = null == t ? _ : t) && ("number" == typeof e || C.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function u(e, t, n) {
            if (!w(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? g(n) && c(t, n.length) : "string" == r && t in n) && h(n[t], e)
        }

        function d(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || L)
        }

        function h(e, t) {
            return e === t || e !== e && t !== t
        }

        function p(e) {
            return m(e) && T.call(e, "callee") && (!N.call(e, "callee") || x.call(e) == E)
        }

        function g(e) {
            return null != e && v(e.length) && !f(e)
        }

        function m(e) {
            return b(e) && g(e)
        }

        function f(e) {
            var t = w(e) ? x.call(e) : "";
            return t == k || t == S
        }

        function v(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= _
        }

        function w(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function b(e) {
            return !!e && "object" == typeof e
        }

        function y(e) {
            return g(e) ? i(e) : a(e)
        }
        var _ = 9007199254740991,
            E = "[object Arguments]",
            k = "[object Function]",
            S = "[object GeneratorFunction]",
            C = /^(?:0|[1-9]\d*)$/,
            L = Object.prototype,
            T = L.hasOwnProperty,
            x = L.toString,
            N = L.propertyIsEnumerable,
            R = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.keys, Object),
            I = Math.max,
            z = !N.call({
                valueOf: 1
            }, "valueOf"),
            M = Array.isArray,
            D = function(e) {
                return s(function(t, n) {
                    var r = -1,
                        i = n.length,
                        o = i > 1 ? n[i - 1] : void 0,
                        a = i > 2 ? n[2] : void 0;
                    for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && u(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
                        var s = n[r];
                        s && e(t, s, r, o)
                    }
                    return t
                })
            }(function(e, t) {
                if (z || d(t) || g(t)) return void l(t, y(t), e);
                for (var n in t) T.call(t, n) && o(e, n, t[n])
            });
        e.exports = D
    },
    119: function(e, t, n) {
        "use strict";

        function r(e) {
            var t = f.call(e, w),
                n = e[w];
            try {
                e[w] = void 0;
                var r = !0
            } catch (e) {}
            var i = v.call(e);
            return r && (t ? e[w] = n : delete e[w]), i
        }

        function i(e) {
            return _.call(e)
        }

        function o(e) {
            return null == e ? void 0 === e ? S : k : C && C in Object(e) ? b(e) : E(e)
        }

        function a(e, t) {
            return function(n) {
                return e(t(n))
            }
        }

        function s(e) {
            return null != e && "object" == typeof e
        }

        function l(e) {
            if (!R(e) || L(e) != I) return !1;
            var t = N(e);
            if (null === t) return !0;
            var n = A.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && D.call(n) == B
        }
        var c = n(157),
            u = "object" == typeof self && self && self.Object === Object && self,
            d = c.a || u || Function("return this")(),
            h = d,
            p = h.Symbol,
            g = p,
            m = Object.prototype,
            f = m.hasOwnProperty,
            v = m.toString,
            w = g ? g.toStringTag : void 0,
            b = r,
            y = Object.prototype,
            _ = y.toString,
            E = i,
            k = "[object Null]",
            S = "[object Undefined]",
            C = g ? g.toStringTag : void 0,
            L = o,
            T = a,
            x = T(Object.getPrototypeOf, Object),
            N = x,
            R = s,
            I = "[object Object]",
            z = Function.prototype,
            M = Object.prototype,
            D = z.toString,
            A = M.hasOwnProperty,
            B = D.call(Object);
        t.a = l
    },
    127: function(e, t, n) {
        "use strict";

        function r() {
            return {
                type: i
            }
        }
        n.d(t, "a", function() {
            return i
        }), t.b = r;
        var i = "features.ads.TRACKING_SET"
    },
    13: function(e, t, n) {
        "use strict";
        var r = n(178);
        n.d(t, "Spade", function() {
            return r.a
        });
        var i = n(60);
        n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
            return i.PageviewContent
        }), n.o(i, "PageviewDirectoryContentType") && n.d(t, "PageviewDirectoryContentType", function() {
            return i.PageviewDirectoryContentType
        }), n.o(i, "PageviewFollowingTab") && n.d(t, "PageviewFollowingTab", function() {
            return i.PageviewFollowingTab
        }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
            return i.PageviewLocation
        }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
            return i.PageviewMedium
        }), n.o(i, "ShareItemContext") && n.d(t, "ShareItemContext", function() {
            return i.ShareItemContext
        }), n.o(i, "ShareItemSourceItemType") && n.d(t, "ShareItemSourceItemType", function() {
            return i.ShareItemSourceItemType
        }), n.o(i, "ShareItemType") && n.d(t, "ShareItemType", function() {
            return i.ShareItemType
        }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
            return i.SpadeEventType
        }), n.o(i, "SpadeFollowingCategory") && n.d(t, "SpadeFollowingCategory", function() {
            return i.SpadeFollowingCategory
        }), n.o(i, "SpadeVideoBroadcastType") && n.d(t, "SpadeVideoBroadcastType", function() {
            return i.SpadeVideoBroadcastType
        }), n.o(i, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
            return i.TwitchDataType
        })
    },
    15: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e[e.Dev = 1] = "Dev", e[e.Production = 2] = "Production"
        }(r || (r = {}))
    },
    152: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(15),
            o = n(306),
            a = n(153),
            s = n(154);
        window.IntlMessageFormat = a, window.IntlRelativeFormat = s;
        var l = function() {
                function e() {
                    this.optimizedBuild = !0, this.embedded = void 0, this.buildID = "4bab13a2-6a42-4e66-be14-4500a9a6e720", this.spadeBatchWindow = 1e3, this.locales = [{
                        name: "English",
                        languageCode: "en",
                        locale: "en-US",
                        loader: function() {
                            return Promise.resolve({
                                formatData: {
                                    numberShort: o,
                                    intlMessageFormatKey: "en"
                                }
                            })
                        },
                        default: !0
                    }, {
                        name: "Dansk",
                        languageCode: "da",
                        locale: "da-DK",
                        loader: function() {
                            return n.e(27).then(n.bind(null, 2033))
                        }
                    }, {
                        name: "Deutsch",
                        languageCode: "de",
                        locale: "de-DE",
                        loader: function() {
                            return n.e(26).then(n.bind(null, 2034))
                        }
                    }, {
                        name: "English - UK",
                        languageCode: "en-gb",
                        locale: "en-GB",
                        loader: function() {
                            return n.e(31).then(n.bind(null, 2035))
                        }
                    }, {
                        name: "Español - España",
                        languageCode: "es",
                        locale: "es-ES",
                        loader: function() {
                            return n.e(23).then(n.bind(null, 2036))
                        }
                    }, {
                        name: "Español - Latinoamérica",
                        languageCode: "es-mx",
                        locale: "es-MX",
                        loader: function() {
                            return n.e(24).then(n.bind(null, 2037))
                        }
                    }, {
                        name: "Français",
                        languageCode: "fr",
                        locale: "fr-FR",
                        loader: function() {
                            return n.e(21).then(n.bind(null, 2038))
                        }
                    }, {
                        name: "Italiano",
                        languageCode: "it",
                        locale: "it-IT",
                        loader: function() {
                            return n.e(18).then(n.bind(null, 2039))
                        }
                    }, {
                        name: "Magyar",
                        languageCode: "hu",
                        locale: "hu-HU",
                        loader: function() {
                            return n.e(19).then(n.bind(null, 2040))
                        }
                    }, {
                        name: "Nederlands",
                        languageCode: "nl",
                        locale: "nl-NL",
                        loader: function() {
                            return n.e(15).then(n.bind(null, 2041))
                        }
                    }, {
                        name: "Norsk",
                        languageCode: "no",
                        locale: "no-NO",
                        loader: function() {
                            return n.e(14).then(n.bind(null, 2042))
                        },
                        cldrLocale: "nn"
                    }, {
                        name: "Polski",
                        languageCode: "pl",
                        locale: "pl-PL",
                        loader: function() {
                            return n.e(13).then(n.bind(null, 2043))
                        }
                    }, {
                        name: "Português",
                        languageCode: "pt",
                        locale: "pt-PT",
                        loader: function() {
                            return n.e(11).then(n.bind(null, 2044))
                        },
                        cldrLocale: "pt-pt"
                    }, {
                        name: "Português - Brasil",
                        languageCode: "pt-br",
                        locale: "pt-BR",
                        loader: function() {
                            return n.e(12).then(n.bind(null, 2045))
                        },
                        cldrLocale: "pt"
                    }, {
                        name: "Slovenčina",
                        languageCode: "sk",
                        locale: "sk-SK",
                        loader: function() {
                            return n.e(8).then(n.bind(null, 2046))
                        }
                    }, {
                        name: "Suomi",
                        languageCode: "fi",
                        locale: "fi-FI",
                        loader: function() {
                            return n.e(22).then(n.bind(null, 2047))
                        }
                    }, {
                        name: "Svenska",
                        languageCode: "sv",
                        locale: "sv-SE",
                        loader: function() {
                            return n.e(7).then(n.bind(null, 2048))
                        }
                    }, {
                        name: "Tiếng Việt",
                        languageCode: "vi",
                        locale: "vi-VN",
                        loader: function() {
                            return n.e(4).then(n.bind(null, 2049))
                        }
                    }, {
                        name: "Türkçe",
                        languageCode: "tr",
                        locale: "tr-TR",
                        loader: function() {
                            return n.e(5).then(n.bind(null, 2050))
                        }
                    }, {
                        name: "Čeština",
                        languageCode: "cs",
                        locale: "cs-CZ",
                        loader: function() {
                            return n.e(28).then(n.bind(null, 2051))
                        }
                    }, {
                        name: "Ελληνικά",
                        languageCode: "el",
                        locale: "el-GR",
                        loader: function() {
                            return n.e(25).then(n.bind(null, 2052))
                        }
                    }, {
                        name: "Български",
                        languageCode: "bg",
                        locale: "bg-BG",
                        loader: function() {
                            return n.e(29).then(n.bind(null, 2053))
                        }
                    }, {
                        name: "Русский",
                        languageCode: "ru",
                        locale: "ru-RU",
                        loader: function() {
                            return n.e(9).then(n.bind(null, 2054))
                        }
                    }, {
                        name: "العربية",
                        languageCode: "ar",
                        locale: "ar-SA",
                        loader: function() {
                            return n.e(30).then(n.bind(null, 2055))
                        }
                    }, {
                        name: "ภาษาไทย",
                        languageCode: "th",
                        locale: "th-TH",
                        loader: function() {
                            return n.e(6).then(n.bind(null, 2056))
                        }
                    }, {
                        name: "中文 简体",
                        languageCode: "zh-cn",
                        locale: "zh-CN",
                        loader: function() {
                            return n.e(3).then(n.bind(null, 2057))
                        },
                        cldrLocale: "zh-hans"
                    }, {
                        name: "中文 繁體",
                        languageCode: "zh-tw",
                        locale: "zh-TW",
                        loader: function() {
                            return n.e(2).then(n.bind(null, 2058))
                        },
                        cldrLocale: "zh-hant"
                    }, {
                        name: "日本語",
                        languageCode: "ja",
                        locale: "ja-JP",
                        loader: function() {
                            return n.e(17).then(n.bind(null, 2059))
                        }
                    }, {
                        name: "한국어",
                        languageCode: "ko",
                        locale: "ko-KR",
                        loader: function() {
                            return n.e(16).then(n.bind(null, 2060))
                        }
                    }, {
                        name: "हिंदी",
                        languageCode: "hi",
                        locale: "hi-IN",
                        loader: function() {
                            return n.e(20).then(n.bind(null, 2061))
                        }
                    }, {
                        name: "Română",
                        languageCode: "ro",
                        locale: "ro-RO",
                        loader: function() {
                            return n.e(10).then(n.bind(null, 2062))
                        }
                    }], this.passportAuthURL = "https://api.twitch.tv/kraken/oauth2/authorize", this.passportScopes = ["chat_login", "user_read", "user_subscriptions", "user_presence_friends_read"], this.defaultAvatarURL = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png", this.defaultStreamPreviewURL = "https://static-cdn.jtvnw.net/ttv-static/404_preview-160x90.jpg", this.defaultBoxArtURL = "https://static-cdn.jtvnw.net/ttv-boxart/404_boxart.png", this.defaultCollectionPreviewURL = "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png", this.hostingCacheDelay = 2001, this.legacyClientID = "jzkbprff40iqj646a697cyrvl0zt2m6", this.algoliaApplicationID = "XLUO134HOR", this.algoliaAPIKey = "d157112f6fc2cab93ce4b01227c80a6d", this.forceNetworkLogging = !1, this.networkLoggingHostNames = ["twitch.tv", "localhost", "jtvnw.net", "twitchcdn.net", "twitchcdn.tech", "twitchcdn-shadow.net", "twitchsvc.net", "twitchsvc.tech", "twitchsvc-shadow.net"], this.defaultNetworkLoggingThreshold = .2, this.layoutCacheKey = "TwitchCache:Layout", this.forceComponentBenchmarking = !1, this.defaultComponentBenchmarkingThreshold = .1, this.forceBenchmarkingTools = !1, this.dfpNetworkCode = "3576121", this.krakenEndpoint = "https://api.twitch.tv/kraken", this.defaultAPIVersion = "5", this.adblockAccount = 58, this.adblockID = "qFEaZsFQnwEdUIs", this.forceMinConsoleLogLevelKey = "twilight.minConsoleLogLevel", this.tryPrimeURI = "https://twitch.amazon.com/prime", this.experimentsOverrideCookie = "experiment_overrides", this.tmiHost = "irc-ws.chat.twitch.tv", this.persistentPlayerEnabledKey = "persistenceEnabled"
                }
                return e
            }(),
            c = "https://api.twitch.tv",
            u = "https://gql.twitch.tv",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildType = i.a.Production, t.apiBaseURL = c, t.graphqlEndpoint = u + "/gql", t.sentinelEndpoint = "https://sentinel.twitchsvc.net/error-report", t.defaultSpadeEndpoint = "https://spade.twitch.tv/track", t.authClientID = "kimne78kx3ncx6brgo4mv6wki5h1ko", t.passportRedirectURI = "https://go.twitch.tv/passport-callback", t.pubsubTopicUploadPrefix = "pubsub.upload", t.mixpanelToken = "809576468572134f909dffa6bd0dcfcf", t
                }
                return r.__extends(t, e), t
            }(l),
            h = n(67);
        Object(h.i)(new d)
    },
    157: function(e, t, n) {
        "use strict";
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.a = n
        }).call(t, n(34))
    },
    17: function(e, t, n) {
        "use strict";

        function r(e, t) {
            switch (void 0 === e && (e = h()), t.type) {
                case d.a:
                    return c.__assign({}, e, {
                        authInitialized: !0,
                        user: t.user
                    });
                case d.d:
                    return c.__assign({}, e, {
                        languageInitialized: !0,
                        languageCode: t.languageCode,
                        locale: t.locale
                    });
                case d.b:
                    return c.__assign({}, e, {
                        firstPageLoaded: !0
                    });
                case d.c:
                    return c.__assign({}, e, {
                        initialUserAvailabilityIsSet: !0
                    });
                default:
                    return e
            }
        }

        function i(e) {
            return e.session.authInitialized && e.session.languageInitialized
        }

        function o(e) {
            return !!e.session.user
        }

        function a(e) {
            return e.session.user
        }

        function s(e) {
            return e.session.user && e.session.user.authToken
        }

        function l(e) {
            return e.session.user && e.session.user.legacyCSRFToken
        }
        t.e = i, t.d = o, t.c = a, t.a = s, t.b = l;
        var c = n(0),
            u = n(2),
            d = n(54),
            h = function() {
                return {
                    authInitialized: !1,
                    initialUserAvailabilityIsSet: !1,
                    languageCode: "en",
                    locale: "en-US",
                    languageInitialized: !1,
                    firstPageLoaded: !!u.a.embedded
                }
            };
        u.n.store.registerReducer("session", r)
    },
    178: function(e, t, n) {
        "use strict";

        function r(e) {
            return i.__assign({}, e, {
                rendered_item_list: e.rendered_item_list.join(","),
                rendered_item_types: e.rendered_item_types.join(","),
                rendered_items_viewcounts: e.rendered_items_viewcounts.join(",")
            })
        }
        var i = n(0),
            o = n(25),
            a = n(349),
            s = n(60),
            l = n(98),
            c = n(74),
            u = n(184);
        n.d(t, "a", function() {
            return h
        });
        var d = new Set([s.SpadeEventType.Chat, s.SpadeEventType.Follow, s.SpadeEventType.Unfollow]),
            h = function() {
                function e(e) {
                    var t = this;
                    this.eventEmitter = new o.EventEmitter, this.eventQueue = new Array, this.hasCheckedInitialReferrer = !1, this.mixpanelEventQueue = new Array, this.trackingDataCache = {
                        platform: s.SpadePlatform.Web,
                        videoPlayerData: {
                            followCTAVisible: !1
                        }
                    }, this.referrerURL = "", this.firstBatchSubmitted = !1, this.getEventQueue = function() {
                        return t.eventQueue
                    }, this.getEndpoint = function() {
                        return t.endpoint
                    }, this.getLastPageview = function() {
                        return t.trackingDataCache.lastPageView
                    }, this.getPlatform = function() {
                        return t.trackingDataCache.platform
                    }, this.getVideoPlayerTrackingData = function() {
                        return t.trackingDataCache.videoPlayerData
                    }, this.getOrQueryDeviceFingerprint = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return i.__generator(this, function(t) {
                                return this.trackingDataCache.deviceFingerprint ? (this.logger.debug("Using cached device fingerprint"), [2, this.trackingDataCache.deviceFingerprint]) : this.deviceFingerprintPromise ? (this.logger.debug("Awaiting existing device fingerprint promise"), [2, this.deviceFingerprintPromise]) : (this.deviceFingerprintPromise = new Promise(function(t) {
                                    e.logger.debug("Querying device fingerprint");
                                    try {
                                        (new a.Fingerprint2).get(function(n, r) {
                                            e.trackingDataCache.deviceFingerprint = n, e.logger.debug("Identified device fingerprint", {
                                                fingerprint: n
                                            }), t(n);
                                            var i = {};
                                            r.forEach(function(e) {
                                                i["fp_" + e.key] = e.valueHash
                                            }), e.track(s.SpadeEventType.BrowserFingerprint, i)
                                        })
                                    } catch (n) {
                                        e.logger.debug("Error identifying fingerprint:", n), t(null)
                                    }
                                }), [2, this.deviceFingerprintPromise])
                            })
                        })
                    }, this.getOrQueryEventData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, e;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.trackingDataCache.eventData ? (this.logger.debug("Using cached event data"), [2, this.trackingDataCache.eventData]) : [3, 1];
                                    case 1:
                                        return this.eventDataPromise ? (this.logger.debug("Awaiting existing promise"), [4, this.eventDataPromise]) : [3, 3];
                                    case 2:
                                        return e = n.sent(), [2, e.data];
                                    case 3:
                                        return t = this.store.getState(), this.isLoggedIn(t) ? (this.logger.debug("Querying event data to submit events..."), this.eventDataPromise = this.apollo.client.query({
                                            query: u
                                        }), [4, this.eventDataPromise]) : [3, 5];
                                    case 4:
                                        e = n.sent(), e.data && !e.loading && (this.logger.debug("Event data query completed."), this.trackingDataCache.eventData = e.data), n.label = 5;
                                    case 5:
                                        return this.trackingDataCache.eventData || (this.trackingDataCache.eventData = {
                                            currentUser: {
                                                id: null,
                                                hasTurbo: !1,
                                                hasPrime: !1,
                                                language: null,
                                                login: null
                                            }
                                        }), [2, this.trackingDataCache.eventData]
                                }
                            })
                        })
                    }, this.processEvents = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, o, a, l, c;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.getOrQueryEventData(), n = this.getOrQueryDeviceFingerprint(), [4, t];
                                    case 1:
                                        return r = u.sent(), [4, n];
                                    case 2:
                                        for (o = u.sent(), a = 0, l = e; a < l.length; a++) c = l[a], c.properties.login = r.currentUser.login, c.properties.logged_in = !!r.currentUser.id, c.properties.user_id = r.currentUser.id ? +r.currentUser.id : null, c.properties.device_fingerprint = o, c.event === s.SpadeEventType.Pageview ? (c.properties.is_turbo = r.currentUser.hasTurbo, c.properties.language = r.currentUser.language || navigator.language) : c.event === s.SpadeEventType.Subscription && (c.properties.has_prime = r.currentUser.hasPrime), d.has(c.event) && this.mixpanelEventQueue.push({
                                            event: c.event,
                                            properties: i.__assign({
                                                token: this.config.mixpanelToken
                                            }, c.properties)
                                        });
                                        return [2]
                                }
                            })
                        })
                    }, this.onWindowUnload = function() {
                        t.logger.debug("Unload triggered."), t.sendEvents(!0)
                    }, this.logger = e.logger.withCategory("spade"), this.transmitLogger = this.logger.withCategory("transmitter"), this.endpoint = e.endpoint, this.session = e.session, this.apollo = e.apollo, this.config = e.config, this.store = e.store, this.adBlockSentinel = e.adBlockSentinel, this.adBlockDetector = e.adBlockDetector, this.logger.debug("Creating instance.", {
                        endpoint: this.endpoint,
                        sessionID: this.session.benchmarkID
                    }), window.addEventListener("unload", this.onWindowUnload)
                }
                return e.prototype.setPlatform = function(e) {
                    this.trackingDataCache.platform = e
                }, e.prototype.reportFollowCTAVisibility = function(e) {
                    this.trackingDataCache.videoPlayerData.followCTAVisible = e
                }, e.prototype.setVideoPlayerTrackingData = function(e) {
                    this.trackingDataCache.videoPlayerData = i.__assign({}, this.trackingDataCache.videoPlayerData, e)
                }, e.prototype.track = function(e, t) {
                    return this.trackEvent(e, t)
                }, e.prototype.trackExperiment = function(e) {
                    return this.track(s.SpadeEventType.ExperimentBranch, e)
                }, e.prototype.trackPageview = function(e) {
                    void 0 === e && (e = {});
                    var t = this.store.getState(),
                        n = i.__assign({
                            browser: navigator.userAgent,
                            collapse_right: t.ui && !t.ui.rightColumnExpanded,
                            collapse_left: t.ui && !t.ui.sideNavExpanded,
                            localstorage_device_id: this.session.localStorageDeviceID,
                            location: e.location || s.PageviewLocation.None,
                            page_session_id: this.session.pageviewID,
                            referrer: this.lastLocationURL ? this.lastLocationURL.href : document.referrer,
                            referrer_domain: this.lastLocationURL ? this.lastLocationURL.hostname : this.getCurrentReferrerURL().hostname,
                            sentinel_ab: this.adBlockSentinel.detect,
                            session_device_id: this.session.deviceID,
                            tab_session_id: this.session.tabID,
                            viewport_height: window.innerHeight,
                            viewport_width: window.innerWidth
                        }, e);
                    this.track(s.SpadeEventType.Pageview, n), this.trackingDataCache.lastPageView = n, this.eventEmitter.emit(s.SpadeEventType.Pageview), this.lastLocationURL = new URL(location.href)
                }, e.prototype.trackBenchmark = function(e, t) {
                    this.track(e, i.__assign({
                        benchmark_session_id: this.session.benchmarkID,
                        page_session_id: this.session.pageviewID
                    }, t))
                }, e.prototype.trackApiQueryBenchmark = function(e) {
                    this.track(s.SpadeEventType.APIQuery, i.__assign({
                        benchmark_session_id: this.session.benchmarkID,
                        page_session_id: this.session.pageviewID
                    }, e))
                }, e.prototype.trackItemSectionLoad = function(e) {
                    this.track(s.SpadeEventType.ItemSectionLoad, r(e))
                }, e.prototype.trackItemSectionClick = function(e) {
                    this.track(s.SpadeEventType.ItemSectionClick, e)
                }, e.prototype.trackEvent = function(e, t) {
                    this.hasCheckedInitialReferrer || this.setSpadeReferrerURL();
                    var n = i.__assign({
                            adblock: this.adBlockDetector.detect,
                            app_version: this.config.buildID,
                            client_app: "twilight",
                            device_id: this.session.deviceID,
                            domain: window.document.domain,
                            host: window.location.host,
                            platform: this.trackingDataCache.platform,
                            preferred_language: Object(c.b)({
                                includeChosenLanguage: !1
                            })[0],
                            referrer_host: this.lastLocationURL ? this.lastLocationURL.host : this.getCurrentReferrerURL().host,
                            referrer_url: this.referrerURL || "",
                            received_language: Object(c.a)() || "en",
                            tab_session_id: this.session.tabID,
                            batch_time: (new Date).getTime() / 1e3,
                            url: window.location.href
                        }, t),
                        r = {
                            event: e,
                            properties: n
                        };
                    this.logger.debug("Tracking event", r), this.eventQueue.push(r), this.scheduleEvents()
                }, e.prototype.sendEvents = function(e) {
                    return void 0 === e && (e = !1), i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, o, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return 0 === this.eventQueue.length ? [2] : [4, this.processEvents(this.eventQueue)];
                                case 1:
                                    return i.sent(), (this.sendMixpanelEvents(e), t = this.eventQueue, this.eventQueue = [], Date.now() < this.squelchUntil) ? (this.logger.debug("Skipped Spade transmission. Client event tracking is squelched due to failure to sumbit to Spade service."), [2]) : (n = new Blob([Object(l.a)(t)], {
                                        type: "application/x-www-form-urlencoded; charset=UTF-8"
                                    }), e && navigator.sendBeacon ? (navigator.sendBeacon(this.endpoint, n) ? this.transmitLogger.debug("Events sent using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }) : this.transmitLogger.warn("Events failed to send using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [3, 8]) : [3, 2]);
                                case 2:
                                    r = 1, i.label = 3;
                                case 3:
                                    if (!(r <= 3)) return [3, 8];
                                    i.label = 4;
                                case 4:
                                    return i.trys.push([4, 6, , 7]), [4, fetch(this.endpoint, {
                                        method: "POST",
                                        body: n
                                    })];
                                case 5:
                                    return i.sent(), this.firstBatchSubmitted || (this.firstBatchSubmitted = !0, (o = document.getElementById("root")) && o.setAttribute("data-a-page-events-submitted", Date.now().toString())), this.transmitLogger.debug("Events sent using fetch.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [2];
                                case 6:
                                    return a = i.sent(), r < 3 ? this.transmitLogger.warn("Events send attempt failed with fetch.", {
                                        attempt: r,
                                        size: n.size,
                                        transmitBatch: t
                                    }, a) : (this.squelchUntil = Date.now() + 6e4, this.transmitLogger.error(a, "Events failed to send using fetch. Maximum attemps tried, so events will be discarded, and further tracking will be temporarily squelched.", {
                                        attempt: r,
                                        size: n.size,
                                        maxAttempts: 3,
                                        squelch: this.squelchUntil,
                                        squelchDuration: 6e4
                                    })), [3, 7];
                                case 7:
                                    return ++r, [3, 3];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.scheduleEvents = function() {
                    var e = this;
                    this.eventQueueTimeout || (this.eventQueueTimeout = setTimeout(function() {
                        try {
                            if (!e.store.getState().session.firstPageLoaded) return e.eventQueueTimeout = 0, void e.scheduleEvents();
                            e.sendEvents()
                        } catch (t) {
                            e.transmitLogger.error(t, "Failed to send events.")
                        }
                        e.eventQueueTimeout = 0
                    }, this.config.spadeBatchWindow))
                }, e.prototype.sendMixpanelEvents = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return 0 === this.mixpanelEventQueue.length ? [2] : (t = this.mixpanelEventQueue, this.mixpanelEventQueue = [], Date.now() < this.squelchUntil ? (this.logger.debug("Skipped Mixpanel transmission. Client event tracking is squelched due to failure to submit to Spade service."), [2]) : (n = new Blob([Object(l.a)(t)], {
                                        type: "application/x-www-form-urlencoded; charset=UTF-8"
                                    }), e && navigator.sendBeacon ? (navigator.sendBeacon(this.endpoint, n) ? this.transmitLogger.debug("Mixpanel events sent using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }) : this.transmitLogger.warn("Mixpanel events failed to send using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [3, 7]) : [3, 1]));
                                case 1:
                                    r = 1, i.label = 2;
                                case 2:
                                    if (!(r <= 3)) return [3, 7];
                                    i.label = 3;
                                case 3:
                                    return i.trys.push([3, 5, , 6]), [4, fetch("https://api.mixpanel.com/track", {
                                        method: "POST",
                                        body: n
                                    })];
                                case 4:
                                    return i.sent(), this.transmitLogger.debug("Mixpanel events sent using fetch.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [2];
                                case 5:
                                    return o = i.sent(), r < 3 ? this.transmitLogger.warn("Mixpanel events send attempt failed with fetch.", {
                                        attempt: r,
                                        size: n.size,
                                        transmitBatch: t
                                    }, o) : this.transmitLogger.error(o, "Mixpanel events failed to send using fetch. Maximum attemps tried, so events will be discarded.", {
                                        attempt: r,
                                        size: n.size,
                                        maxAttempts: 3
                                    }), [3, 6];
                                case 6:
                                    return ++r, [3, 2];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.isLoggedIn = function(e) {
                    return !(!e.session || !e.session.user)
                }, e.prototype.getCurrentReferrerURL = function() {
                    return document.referrer.length ? new URL(document.referrer) : {
                        host: "",
                        hostname: "",
                        href: ""
                    }
                }, e.prototype.setSpadeReferrerURL = function() {
                    var e;
                    try {
                        e = new URL(document.referrer)
                    } catch (e) {}
                    e && "go.twitch.tv" !== e.hostname && "www.twitch.tv" !== e.hostname && (this.referrerURL = e.href), this.hasCheckedInitialReferrer = !0
                }, e
            }()
    },
    179: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return a
        });
        var r;
        ! function(e) {
            e.Web = "web", e.Desktop = "desktop"
        }(r || (r = {}));
        var i;
        ! function(e) {
            e.Live = "live", e.Communities = "communities", e.Games = "games", e.Hosts = "hosts"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.WatchParty = "watch_party", e.PastPremiere = "past_premiere", e.PremiereUpload = "premiere_upload"
        }(o || (o = {}));
        var a;
        ! function(e) {
            e.Clip = "clip", e.Channel = " channel", e.Chomment = "chomment", e.Collection = "collection", e.Event = "event", e.Game = "game", e.Stream = "stream", e.Video = "vod", e.User = "user"
        }(a || (a = {}))
    },
    18: function(e, t, n) {
        "use strict";

        function r() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function i() {
            return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
        t.a = r, t.b = i
    },
    180: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e.AchievementSpotlightImpression = "achievement_spotlight_impression", e.AchievementQuestBannerClick = "achievement_quest_banner_click", e.APIQuery = "benchmark_api_query", e.AppBooted = "benchmark_app_booted", e.AutohostChatImpression = "autohost_chat_impression", e.AutohostChatYes = "autohost_chat_yes", e.AutohostChatDismiss = "autohost_chat_dismiss", e.AutohostChatSettings = "autohost_chat_settings", e.BitsAdsAvailability = "bits_ads_availability", e.BitsAdsImpression = "bits_ads_impression", e.BitsAdsRequest = "bits_ads_request", e.BitsCardInteraction = "bits_card_interaction", e.BrowseForYou = "browse_for_you", e.BrowserFingerprint = "browser_fingerprint", e.BTTV = "bttv_check", e.Chat = "chat", e.ChatMentionUsed = "chat_mention_used", e.ChatRoomJoined = "chat_room_join", e.ChatSettingsChanged = "chat_client_setting_changed", e.ChatSettingsOpened = "chat_client_settings_open", e.ChatSuggestion = "chat-suggestions", e.ChatSuggestionComplete = "chat-completed-suggestion", e.ChommentCreated = "chomment_create", e.ChommentDeleted = "chomment_delete", e.ChommentUIAction = "chomment_ui_action", e.CommunityEdit = "community_client_edit", e.CommunityFollow = "community_client_follow", e.CommunityModeration = "community_client_channel_moderation", e.CommunityReport = "community_client_report", e.CommunityUnfollow = "community_client_unfollow", e.CompleteTransition = "benchmark_complete_transition", e.ComponentInitializing = "benchmark_component_initializing", e.ComponentInteractive = "benchmark_component_interactive", e.CrateNotificationAction = "crate_notification_action", e.EventFollowing = "oracle_user_notification_client", e.EventShare = "oracle_event_share", e.ExperimentBranch = "experiment_branch", e.FeaturedEventPresentation = "event_suggestions_shown", e.FeedCardImpression = "feed_client_card_impression", e.FeedCardEmbedImpression = "feed_client_card_embed_impression", e.FeedCardEmbedPlay = "feed_client_card_embed_play", e.FeedPost = "feed_client_post", e.FeedReaction = "feed_client_reaction", e.FetchStart = "benchmark_fetch_start", e.FFZ = "ffz_check", e.Follow = "follow", e.FrontPageCarouselClick = "frontpage_carousel_click", e.FrontPageCarouselDisplay = "carousel_display", e.FrontPageCarouselPromotionCardClick = "promotion_card_click", e.FrontPageCarouselPromotionCardView = "promotion_card_view", e.FrontPageCarouselNavButtonClick = "carousel_nav_button_click", e.FuelBuyButton = "fuel_buy_button", e.FuelGetGameClick = "fuel_get_game_click", e.FuelOfferView = "offer_view", e.FuelOfferInteraction = "offer_interaction", e.GameFollow = "follow-game", e.GameUnfollow = "unfollow-game", e.ItemSectionClick = "item_section_click", e.ItemSectionLoad = "item_section_load", e.OnboardingEvent = "onboarding_web", e.NetworkRequest = "network_request", e.NotificationCenterInteraction = "notification_center_interaction", e.NotificationImpression = "notification_impression", e.NotificationInteraction = "notification_interaction", e.Pageview = "pageview", e.PassportHide = "auth_exit", e.PassportShow = "auth_show", e.PresenceClick = "friend_presence_click", e.RaidPromptJoin = "raid_prompt_join", e.RaidPromptLeave = "raid_prompt_leave", e.RaidPromptImpression = "raid_prompt_impression", e.ShareItem = "share_item", e.SideNavChannelClick = "sidenav_channel_click", e.SideNavDetails = "sidenav_details", e.SideNavLoadMore = "sidenav_load_more", e.SiteLayoutMod = "site_layout_mod", e.SiteToggle = "twilight_site_toggle", e.StreamSummarySpotlightImpression = "summary_spotlight_impression", e.StreamSummarySpotlightClick = "summary_spotlight_click", e.StoreMerchClick = "store_item_select", e.StoreMerchView = "store_item_view", e.Subscription = "subscribe_button", e.SubsLandingStreamerClick = "subs_landing_streamer_click", e.ThemeChange = "dark_mode_toggle", e.Unfollow = "unfollow", e.VideoChatSettingChanged = "video_chat_setting_changed", e.VideoShare = "video_share", e.WhisperAllThreadsMod = "chat_convo_mod_global", e.WhisperIgnoreUser = "chat_ignore_client", e.WhisperReceived = "whisper_received", e.WhisperSearchClick = "search_click", e.WhisperSent = "whisper", e.WhisperThreadCreate = "chat_convo_create", e.WhisperThreadMod = "chat_convo_mod"
        }(r || (r = {}))
    },
    181: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "e", function() {
            return a
        }), n.d(t, "c", function() {
            return s
        });
        var r;
        ! function(e) {
            e.BitsLandingPage = "bits_landing", e.BrowseCommunities = "browse_communities", e.BrowseCreative = "browse_creative", e.BrowseForYou = "browse_for_you", e.Channel = "channel", e.ChannelClips = "channel_clips", e.ChannelClipsManager = "my_clips_channel", e.ChannelEvents = "channel_events", e.ChannelVideos = "channel_vods", e.ChannelCollections = "channel_collections", e.Chat = "chat", e.ClipsGame = "clips_game", e.Dashboard = "dashboard", e.DashboardAchievements = "dashboard/achievements", e.DashboardExtensions = "dashboard/extensions", e.DashboardStreamSummary = "dashboard/stream-summary", e.Directory = "directory", e.DirectoryPopular = "directory.popular", e.EmailVerification = "email_verification", e.EventDetails = "event_details", e.FrontPage = "home", e.GameDetail = "game_detail", e.MyClipsManager = "my_clips", e.None = "", e.OnboardingCommunitySelection = "onboarding/community-selection", e.StoreMerch = "store-merch", e.VideoWatchPage = "vod", e.SubsLandingPage = "subs-landing", e.SettingsPage = "settings", e.SubsBroadcasterPage = "subs-broadcaster"
        }(r || (r = {}));
        var i;
        ! function(e) {
            e.Channels = "channels", e.Communities = "communities", e.Games = "games", e.Hosts = "hosts", e.Mixed = "mixed", e.Videos = "vods"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e.ChatCard = "chat_card", e.Community = "community", e.EventLive = "event_suggestion_live", e.EventPast = "event_suggestion_past", e.EventUpcoming = "event_suggestion_upcoming", e.Following = "directory_following", e.FollowedChannels = "followed_channels", e.Game = "game", e.Games = "directory_games", e.Host = "host_channel", e.Live = "live_channel", e.LiveHost = "live_host", e.Logo = "twitch_logo", e.Popular = "popular_games", e.PopularOverallVideos = "popular_overall_videos", e.PopularVideos = "popular_videos", e.Presence = "friend_presence", e.RecentVideos = "recent_videos", e.LatestCollection = "latest_collection", e.RecommendedChannels = "recommended_channels", e.RecommendedVideos = "recommended_videos", e.SuggestedVideos = "suggested_videos", e.TextLink = "text_link", e.User = "user", e.Video = "video"
        }(o || (o = {}));
        var a;
        ! function(e) {
            e.Browse = "twitch_browse_directory", e.BrowseForYou = "twitch_browse_for_you", e.Channel = "twitch_channel", e.ChannelVideos = "channel_videos", e.Chat = "twitch_chat", e.ChatNotification = "chat_bar_notification", e.Community = "twitch_community_directory", e.Game = "twitch_game_directory", e.GameVideos = "twitch_video_game_directory", e.EventDetails = "event_details", e.Following = "following_directory", e.NavSearch = "header_search", e.NotificationCenter = "notification_center", e.NotificationToast = "notification_toast", e.SideNav = "twitch_socialcolumn", e.TopNav = "twitch_topnav", e.VideoEmbed = "vod_embed", e.VideoNotFoundPage = "vod_not_found", e.VideoWatchPage = "vod", e.Whispers = "conversations"
        }(a || (a = {}));
        var s;
        ! function(e) {
            e.Channels = "channels", e.Communities = "communities", e.Games = "games", e.Hosts = "hosts", e.Overview = "overview", e.Videos = "videos"
        }(s || (s = {}))
    },
    182: function(e, t) {},
    183: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        });
        var r;
        ! function(e) {
            e.Collection = "collection"
        }(r || (r = {}));
        var i;
        ! function(e) {
            e.Chomment = "chomment"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e.Collection = "collection", e.Chomment = "chomment"
        }(o || (o = {}))
    },
    184: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "language"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_CurrentUser {\n  currentUser {\n    id\n    login\n    hasTurbo\n    hasPrime\n    language\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    189: function(e, t, n) {
        "use strict";

        function r() {
            return {
                trackingSet: !1
            }
        }

        function i(e, t) {
            switch (void 0 === e && (e = r()), t.type) {
                case s.a:
                    return o.__assign({}, e, {
                        trackingSet: !0
                    });
                default:
                    return e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            a = n(2),
            s = n(127);
        a.n.store.registerReducer("ads", i);
        n(92), n(17), n(52)
    },
    190: function(e, t) {},
    191: function(e, t) {},
    192: function(e, t) {},
    193: function(e, t) {},
    194: function(e, t) {},
    195: function(e, t) {},
    196: function(e, t) {},
    197: function(e, t) {},
    198: function(e, t) {},
    199: function(e, t) {},
    2: function(e, t, n) {
        "use strict";
        var r = n(67);
        n.d(t, "a", function() {
            return r.a
        }), n.d(t, "b", function() {
            return r.b
        }), n.d(t, "c", function() {
            return r.c
        }), n.d(t, "d", function() {
            return r.d
        }), n.d(t, "e", function() {
            return r.e
        }), n.d(t, "f", function() {
            return r.f
        }), n.d(t, "g", function() {
            return r.g
        }), n.d(t, "h", function() {
            return r.h
        }), n.d(t, "i", function() {
            return r.j
        }), n.d(t, "k", function() {
            return r.l
        }), n.d(t, "j", function() {
            return r.k
        }), n.d(t, "m", function() {
            return r.n
        }), n.d(t, "l", function() {
            return r.m
        }), n.d(t, "n", function() {
            return r.o
        })
    },
    200: function(e, t) {},
    201: function(e, t) {},
    202: function(e, t) {},
    203: function(e, t) {},
    204: function(e, t) {},
    205: function(e, t) {},
    206: function(e, t) {},
    207: function(e, t) {},
    208: function(e, t) {},
    209: function(e, t) {},
    210: function(e, t) {},
    211: function(e, t) {},
    212: function(e, t) {},
    213: function(e, t) {},
    214: function(e, t) {},
    215: function(e, t) {},
    216: function(e, t) {},
    217: function(e, t) {},
    218: function(e, t) {},
    219: function(e, t) {},
    220: function(e, t) {},
    221: function(e, t) {},
    222: function(e, t) {},
    223: function(e, t) {},
    224: function(e, t) {},
    225: function(e, t) {},
    226: function(e, t) {},
    227: function(e, t) {},
    228: function(e, t) {},
    229: function(e, t) {},
    23: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Pass = 1] = "Pass", e[e.Fail = 2] = "Fail"
        }(r || (r = {}))
    },
    230: function(e, t) {},
    231: function(e, t) {},
    232: function(e, t) {},
    233: function(e, t) {},
    234: function(e, t) {},
    235: function(e, t) {},
    236: function(e, t) {},
    237: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Actions_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 120
            }
        };
        n.loc.source = {
            body: "query Core_Actions_CurrentUser {\n  currentUser {\n    displayName\n    id\n    login\n    roles {\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    238: function(e, t, n) {
        "use strict";

        function r() {
            var e = s.n.logger.withCategory("auth"),
                t = Object(u.b)();
            if ("/passport-callback" === window.location.pathname) return void i(t, e);
            if (!t && Object(d.b)()) return e.debug("No legacy CSRF token found."), void s.n.store.dispatch(Object(c.a)());
            var n = Object(u.d)(e);
            return n ? void(n.version === u.a ? (e.debug("Using existing user cookie."), s.n.store.dispatch(Object(c.d)({
                authToken: n.authToken,
                displayName: n.displayName,
                id: n.id,
                legacyCSRFToken: t,
                login: n.login,
                roles: n.roles
            }))) : (e.debug("User cookie version mismatch. Refreshing with auth token."), s.n.store.dispatch(Object(c.c)(n.authToken, t)))) : t ? (e.debug("Using legacy API token."), void s.n.store.dispatch(Object(c.b)(t))) : (e.debug("No user data found."), void s.n.store.dispatch(Object(c.a)()))
        }

        function i(e, t) {
            t.debug("Handling passport callback.");
            var n = o(window.location.hash, t);
            if (!n) return t.debug("Got invalid data from passport, removing existing auth data and reloading."), Object(u.e)(), s.n.store.dispatch(Object(c.a)()), void s.n.history.replace("/");
            var r = document.createElement("a");
            if (r.href = n.next, r.hostname !== window.location.hostname) return void(s.a.buildType !== l.a.Production || "twitch.tv" === r.hostname || r.hostname.endsWith(".twitch.tv") ? window.location.assign(r.protocol + "//" + r.host + window.location.pathname + window.location.search + window.location.hash) : (t.error(new Error("Attempted to redirect away from site."), "Attempted to redirect away from site."), s.n.store.dispatch(Object(c.a)()), s.n.history.replace("/")));
            var i = Object(u.c)(t);
            if (!i) return t.debug("No passport state cookie found, aborting."), s.n.store.dispatch(Object(c.a)()), void s.n.history.replace("/");
            Object(u.f)();
            try {
                if (i.nonce !== n.nonce) return t.error(new Error("Login nonce mismatch."), "Login nonce mismatch."), s.n.store.dispatch(Object(c.a)()), void s.n.history.replace("/")
            } catch (e) {
                return t.error(e, "Failed to parse session storage state."), s.n.store.dispatch(Object(c.a)()), void s.n.history.replace("/")
            }
            s.n.store.dispatch(Object(c.c)(n.token, e)), s.n.history.replace(r.pathname + r.search)
        }

        function o(e, t) {
            var n = a.parse(e);
            if (n) try {
                var r = JSON.parse(n.state);
                return {
                    next: r.next,
                    nonce: r.nonce,
                    token: n.access_token
                }
            } catch (e) {
                t.error(e, "Failed to parse incoming state.")
            }
        }
        t.a = r;
        var a = n(21),
            s = (n.n(a), n(2)),
            l = n(15),
            c = n(39),
            u = n(45),
            d = n(44)
    },
    239: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                authToken: e.session.user && e.session.user.authToken,
                username: e.session.user && e.session.user.login
            }
        }
        var i = n(7),
            o = n(0),
            a = n(1),
            s = n(2),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentWillMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.props.username && this.props.authToken && s.n.tmi.setIdentity(this.props.username, this.props.authToken), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, s.n.tmi.connect()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), s.i.warn("Failed to connect to TMI from chat manager. It will be retried as needed.", e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    s.n.tmi.disconnect()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.username && e.authToken && (e.username !== this.props.username || e.authToken !== this.props.authToken) && s.n.tmi.setIdentity(e.username, e.authToken)
                }, t.prototype.render = function() {
                    return null
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return c
        });
        var c = Object(i.a)(r)(l)
    },
    24: function(e, t, n) {
        "use strict";

        function r() {
            return l.k.get(u, o())
        }

        function i(e) {
            l.k.set(u, e)
        }

        function o() {
            var e = l.k.get(d, {
                activeTheme: ""
            });
            return e && "theme--dark" === e.activeTheme ? c.a.Dark : c.a.Light
        }

        function a(e) {
            switch (e) {
                case c.a.Dark:
                    return "tw-theme--dark";
                default:
                    return ""
            }
        }

        function s(e) {
            return e === c.a.Light ? "tw-theme--light" : a(e)
        }
        t.b = r, t.d = i, t.c = a, t.a = s;
        var l = n(2),
            c = n(27),
            u = "twilight.theme",
            d = "storage:theme"
    },
    240: function(e, t) {},
    241: function(e, t) {},
    242: function(e, t) {},
    243: function(e, t) {},
    244: function(e, t) {},
    245: function(e, t) {},
    246: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(1),
            o = n(2),
            a = n(6),
            s = n(3),
            l = n(247),
            c = (n(248), "euCookieDismiss"),
            u = "eu-cookie-notification__link",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.content = Object(o.d)("This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies. Review our {CookiePolicyLink} for more details.", {
                        CookiePolicyLink: i.createElement("a", {
                            "data-a-target": u,
                            className: "eu-cookie-alert__link",
                            href: "https://www.twitch.tv/p/cookie-policy",
                            target: "_blank"
                        }, "Cookie Policy")
                    }, "EUCookieAlert"), t.dismiss = function() {
                        o.k.set(c, !0), t.props.remove()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.checkForDismissedKey() && this.dismiss()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !e.data.loading && e.data.requestInfo && !1 === e.data.requestInfo.fromEU && this.dismiss()
                }, t.prototype.render = function() {
                    return this.props.data.requestInfo && this.props.data.requestInfo.fromEU || this.props.data.error ? i.createElement(s._28, {
                        onClose: this.dismiss
                    }, i.createElement(s.U, {
                        className: "eu-cookie-alert__body",
                        display: s.H.Flex,
                        alignItems: s.c.Center
                    }, i.createElement(s._18, {
                        textAlign: s._23.Center,
                        background: s.m.Base,
                        margin: {
                            x: "auto"
                        }
                    }, i.createElement(s._22, {
                        type: s._27.Span,
                        color: s.F.Base,
                        fontSize: s.L.Size5
                    }, this.content)))) : null
                }, t.prototype.checkForDismissedKey = function() {
                    return o.k.get(c, !1)
                }, t = r.__decorate([Object(a.a)(l)], t)
            }(i.Component),
            h = d,
            p = (n(249), [h]),
            g = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        toastsToShow: p.map(function(e, t) {
                            return {
                                Component: e,
                                props: {
                                    remove: function() {
                                        return n.removeToastAtIndex(t)
                                    }
                                }
                            }
                        })
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.toastsToShow.map(function(e, t) {
                        var n = e.Component,
                            o = e.props;
                        return i.createElement(s.U, {
                            key: "" + n.name + t,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(n, r.__assign({}, o)))
                    });
                    return 0 === e.length ? null : i.createElement(s.U, {
                        className: "toast-manager__container",
                        position: s._3.Fixed,
                        flexDirection: s.J.Column,
                        alignItems: s.c.Center,
                        justifyContent: s.T.Center
                    }, e)
                }, t.prototype.removeToastAtIndex = function(e) {
                    var t = this.state.toastsToShow.slice();
                    t.splice(e, 1), this.setState({
                        toastsToShow: t
                    })
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return g
        })
    },
    247: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FooterNotificationPopup_EUCookieAlert"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "fromEU"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 79
            }
        };
        n.loc.source = {
            body: "query FooterNotificationPopup_EUCookieAlert {\n  requestInfo {\n    fromEU\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    248: function(e, t) {},
    249: function(e, t) {},
    253: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(21),
            o = n(1),
            a = n(2),
            s = n(6),
            l = n(15),
            c = n(13),
            u = n(5),
            d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.logger = a.i.withCategory("Tracking/AmazonAds");
                    var r = a.b.get("amazon_ads_url", ""),
                        i = a.b.get("amazon_ads_countries", ["US"]),
                        o = t.countryCode,
                        s = o && i.includes(o);
                    return s && r ? (n.imageSrc = r, n.logger.debug("Created", {
                        imageSrc: n.imageSrc,
                        userCountry: o,
                        isSupportedCountry: s,
                        supportedCountries: i
                    })) : n.logger.debug("Skipping", {
                        isSupportedCountry: s,
                        userCountry: o,
                        supportedCountries: i
                    }), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.imageSrc ? o.createElement("img", {
                        src: this.imageSrc,
                        style: {
                            display: "none"
                        }
                    }) : null
                }, t = r.__decorate([Object(u.c)("AmazonAds")], t)
            }(o.Component),
            h = d,
            p = n(12),
            g = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderBinding = function(e) {
                        n.containerRef = e
                    }, n.onScriptLoaded = function() {
                        n.logger.debug("Script loaded"), n.sendBeacon()
                    }, n.sendBeacon = function() {
                        if (!window.COMSCORE || !window.COMSCORE.beacon) return void n.logger.debug("Could not send beacon; COMSCORE not available.", {
                            data: n.data
                        });
                        n.logger.debug("Sent", {
                            data: n.data
                        }), window.COMSCORE.beacon(n.data)
                    }, n.onHistoryChange = function() {
                        window.COMSCORE && window.COMSCORE.beacon && n.sendBeacon()
                    }, n.scriptSrc = a.b.get("comscore_url", ""), n.logger = a.i.withCategory("Tracking/Comscore"), n.data = {
                        c1: a.b.get("comscore_config_c1", 0),
                        c2: a.b.get("comscore_config_c2", 0),
                        c3: a.b.get("comscore_config_c3", 0),
                        c5: a.b.get("comscore_config_c5", "")
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scriptSrc) {
                        if (document.querySelector('[data-name="comscore"]')) return;
                        this.logger.debug("Loading", {
                            url: this.scriptSrc
                        });
                        var e = document.createElement("script");
                        e.async = !0, e.src = this.scriptSrc, e.dataset && (e.dataset.name = "comscore"), e.onload = this.onScriptLoaded, this.containerRef.appendChild(e)
                    } else this.logger.warn("Skipping");
                    this.props.history.listen(this.onHistoryChange), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.scriptSrc ? o.createElement("div", {
                        ref: this.renderBinding
                    }) : null
                }, t = r.__decorate([Object(u.c)("Comscore")], t)
            }(o.Component),
            m = Object(p.f)(g),
            f = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderBinding = function(e) {
                        n.containerRef = e
                    }, n.logger = a.i.withCategory("Tracking/GoogleAnalytics"), n.scriptSrc = a.b.get("google_analytics_url", ""), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scriptSrc) {
                        if (document.querySelector('[data-name="google-analytics"]')) return;
                        var e = document.createElement("script");
                        e.async = !0, e.src = this.scriptSrc, e.dataset && (e.dataset.name = "google-analytics"), this.containerRef.appendChild(e), this.logger.debug("Created", {
                            url: this.scriptSrc
                        })
                    } else this.logger.debug("Skipped");
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.scriptSrc ? o.createElement("div", {
                        ref: this.renderBinding
                    }) : null
                }, t = r.__decorate([Object(u.c)("GoogleAnalytics")], t)
            }(o.Component),
            v = f,
            w = n(60),
            b = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.getPageCode = function(e) {
                        switch (e) {
                            case "directory-game":
                                return "1148gameVIDE";
                            case "directory-creative":
                                return "1148directory_misc";
                            case "directory":
                                return "1148directory";
                            case "search":
                                return "4201search";
                            case "home":
                                return "1101homepage";
                            case "pages":
                                return "1148text";
                            case "channel":
                            case "video":
                                return "1148publVIDE";
                            case "video_list":
                                return "1148publcont";
                            default:
                                return null
                        }
                    }, n.onScriptLoad = function() {
                        n.trackPageView()
                    }, n.trackPageView = function() {
                        var e = a.m.getLastPageview();
                        if (!window.iom || !window.iom.c || !a.m.getLastPageview()) return void n.logger.debug("Unable to track pageview. IOM is missing.");
                        if (!e || !e.location) return void n.logger.debug("Pageview data unavailable or incomplete, skipping pageview.", e);
                        var t = n.getPageCode(e.location);
                        if (!t) return void n.logger.debug("Skipping pageview. No page code.", {
                            pageName: e.location
                        });
                        n.isMultiLingual && (t += "_multilanguage");
                        var r = "home" === e.location ? "ke" : "in",
                            i = {
                                st: "twitchtv",
                                cp: t,
                                mg: "yes",
                                sv: r
                            };
                        n.logger.debug("Tracking pageview", {
                            data: i
                        }), window.iom.c(i, 1)
                    }, n.renderBinding = function(e) {
                        n.containerRef = e
                    }, n.logger = a.i.withCategory("Tracking/IVW"), n.languageCode = a.n.intl.getLanguageCode() || "en";
                    var r = a.b.get("ivw_url", ""),
                        i = a.b.get("ivw_countries", [""]),
                        o = a.b.get("ivw_languages", ["de"]),
                        s = t.countryCode,
                        l = s && i.includes(t.countryCode),
                        c = n.languageCode && o.includes(n.languageCode);
                    return r && (l || c) ? (n.scriptSrc = r, n.isMultiLingual = !c, n.logger.debug("Created", {
                        url: r,
                        supportedCountries: i,
                        supportedLanguages: o,
                        languageCode: n.languageCode,
                        userCountry: s
                    })) : n.logger.debug("Skipping", {
                        url: r,
                        supportedCountries: i,
                        supportedLanguages: o,
                        languageCode: n.languageCode,
                        userCountry: s
                    }), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scriptSrc) {
                        if (document.querySelector('[data-name="ivw"]')) return;
                        var e = document.createElement("script");
                        e.async = !0, e.src = this.scriptSrc, e.dataset && (e.dataset.name = "ivw"), this.containerRef.appendChild(e), e.onload = this.onScriptLoad
                    }
                    a.m.eventEmitter.addListener(w.SpadeEventType.Pageview, this.trackPageView), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.scriptSrc ? o.createElement("div", {
                        ref: this.renderBinding
                    }) : null
                }, t = r.__decorate([Object(u.c)("IVW")], t)
            }(o.Component),
            y = Object(p.f)(b),
            _ = n(35),
            E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.renderBinding = function(e) {
                        n.containerRef = e
                    }, n.onScriptLoad = function() {
                        n.logger.debug("Script loaded"), n.checkForKrux(0)
                    }, n.checkForKrux = function(e) {
                        if (void 0 === window.Krux) return e > 50 && n.logger.warn("Failed to load", {
                            attempt: e
                        }), void setTimeout(function() {
                            return n.checkForKrux(++e)
                        }, 100);
                        n.logger.debug("Krux loaded", {
                            attempt: e
                        });
                        var t = n.retrieve("segs");
                        window.Krux.user = n.retrieve("user"), window.Krux.segments = t && t.split(",") || [], n.trackPageload()
                    }, n.trackPageload = function() {
                        n.logger.debug("Tracking pageload"), window.Krux("page:load", n.onTrackError, {
                            pageView: !0
                        })
                    }, n.onTrackError = function(e) {
                        e ? n.logger.warn("Failed to track pageview.", e) : n.logger.debug("Tracked pageview")
                    }, n.onHistoryChange = function() {
                        window.Krux ? n.trackPageload() : a.i.debug("Failed to track pageview; Krux not available.")
                    }, n.retrieve = function(e) {
                        var t = "kx" + e;
                        if (window.localStorage) return window.localStorage[t] || "";
                        if (navigator.cookieEnabled) {
                            var n = _.get(t);
                            return n && decodeURI(n[1]) || ""
                        }
                        return ""
                    }, n.logger = a.i.withCategory("Tracking/Krux");
                    var r = t.countryCode,
                        i = a.b.get("krux_countries", [""]);
                    if (r && i.includes(r)) {
                        var o = /\bkxsrc=([^&]+)/,
                            s = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\//i,
                            l = location.href.match(o),
                            c = l && decodeURIComponent(l[1]),
                            u = a.b.get("krux_url", "");
                        c && (s.test(c) ? u = c : "disable" === c && (u = "")), n.scriptSrc = u, n.logger.debug("Created", {
                            userCountry: r,
                            supportedCountries: i,
                            src: n.scriptSrc
                        })
                    } else n.logger.debug("Skipping", {
                        userCountry: r,
                        supportedCountries: i
                    });
                    return n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scriptSrc) {
                        if (document.querySelector('[data-name="krux"]')) return;
                        var e = document.createElement("script");
                        e.async = !0, e.src = this.scriptSrc, e.dataset && (e.dataset.name = "krux"), e.onload = this.onScriptLoad, this.containerRef.appendChild(e)
                    }
                    this.props.history.listen(this.onHistoryChange), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.scriptSrc ? o.createElement("div", {
                        ref: this.renderBinding
                    }) : null
                }, t = r.__decorate([Object(u.c)("Krux")], t)
            }(o.Component),
            k = Object(p.f)(E),
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderBinding = function(e) {
                        n.containerRef = e
                    }, n.logger = a.i.withCategory("Tracking/Quantcast"), n.scriptSrc = a.b.get("quantcast_url", ""), n.qacct = a.b.get("quantcast_account", ""), n.labels = a.b.get("quantcast_labels", ""), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scriptSrc && this.qacct && this.labels) {
                        if (document.querySelector('[data-name="quantcast"]')) return;
                        var e = {
                            qacct: this.qacct,
                            labels: this.labels
                        };
                        window._qoptions = e;
                        var t = document.createElement("script");
                        t.async = !0, t.src = this.scriptSrc, t.dataset && (t.dataset.name = "quantcast"), this.containerRef.appendChild(t), this.logger.debug("Created", {
                            url: this.scriptSrc,
                            options: e
                        })
                    } else this.logger.debug("Skipped");
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.scriptSrc ? o.createElement("div", {
                        ref: this.renderBinding
                    }) : null
                }, t = r.__decorate([Object(u.c)("Quantcast")], t)
            }(o.Component),
            C = S,
            L = n(254);
        n.d(t, "a", function() {
            return x
        });
        var T = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = a.i.withCategory("Tracking/Manager"), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive(), a.m.track(c.SpadeEventType.BTTV, {
                        is_bttv: !!window.BetterTTV
                    }), a.m.track(c.SpadeEventType.FFZ, {
                        is_ffz: !!window.FrankerFaceZ
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo.countryCode;
                    if (!e && a.a.buildType !== l.a.Production) {
                        var t = i.parse(this.props.history.location.search || "");
                        t.country ? (e = t.country, this.logger.debug("Using supplied country code", {
                            countryCode: e
                        })) : (e = "US", this.logger.debug("Using default country code", {
                            countryCode: e
                        }))
                    }
                    return o.createElement("div", null, o.createElement(h, {
                        countryCode: e
                    }), o.createElement(C, null), o.createElement(v, null), o.createElement(k, {
                        countryCode: e
                    }), o.createElement(m, null), o.createElement(y, {
                        countryCode: e
                    }))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = r.__decorate([Object(s.a)(L), Object(u.c)("TrackingManager")], t)
            }(o.Component),
            x = T
    },
    254: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TrackingManager_RequestInfo"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "ipAddress"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 88
            }
        };
        n.loc.source = {
            body: "query TrackingManager_RequestInfo {\n  requestInfo {\n    countryCode\n    ipAddress\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e[e.Light = 0] = "Light", e[e.Dark = 1] = "Dark"
        }(r || (r = {}))
    },
    28: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }
        var i = n(71),
            o = n(116),
            a = n(7),
            s = n(0),
            l = n(10),
            c = n(1),
            u = n(2),
            d = n(3),
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getStyles = function() {
                        var e = n.state,
                            t = e.anchoredBottom,
                            r = e.anchoredTop,
                            i = e.top,
                            o = e.width,
                            a = t || r,
                            s = "absolute";
                        return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (s = "inherit", a = !1) : a && (s = "fixed"), {
                            position: s,
                            top: r ? "inherit" : i,
                            width: a ? o : "inherit"
                        }
                    }, n.lockBottom = function(e) {
                        n.setState({
                            anchoredBottom: !0,
                            top: window.innerHeight - e,
                            width: n.element.getBoundingClientRect().width
                        })
                    }, n.lockTop = function() {
                        n.setState({
                            anchoredTop: !0,
                            width: n.element.getBoundingClientRect().width
                        })
                    }, n.resizeStickyColumn = function() {
                        n.unlock(n.state.lastOffset || 0), n.checkBounding(!0, 0)
                    }, n.setRef = function(e) {
                        return n.element = e
                    }, n.state = {
                        anchoredBottom: !1,
                        anchoredTop: !1,
                        lastOffset: void 0,
                        offsetTop: void 0,
                        top: void 0,
                        width: void 0
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.element.getBoundingClientRect();
                    this.setState({
                        offsetTop: e.top
                    });
                    var t = this.context.registerReceiver;
                    if (!t) return void u.i.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider");
                    this.unregister = t(this)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return c.createElement(d.U, {
                        position: d._3.Relative,
                        fullWidth: !0
                    }, c.createElement("div", {
                        className: "sticky-container",
                        ref: this.setRef,
                        style: this.getStyles()
                    }, this.props.children))
                }, t.prototype.checkVisible = function(e, t) {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e, n, r, o, a;
                        return s.__generator(this, function(s) {
                            return !t || t.type !== i.a.Resize && t.type !== i.a.Wheel && t.type !== i.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === i.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === i.a.Wheel && e ? (r = t.wheelEvent, o = void 0, o = 0 === r.deltaMode ? r.deltaY || r.wheelDelta : 16 * r.deltaY, a = o + t.offset, this.context.yScrollTo(a), this.checkBounding(o > 0, t.offset)) : t.type !== i.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                        })
                    })
                }, t.prototype.checkBounding = function(e, t) {
                    e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                        lastOffset: t
                    })
                }, t.prototype.shouldLock = function(e) {
                    var t = this.element.getBoundingClientRect(),
                        n = this.state.offsetTop || 0;
                    if (t.height < window.innerHeight - n) return void this.lockTop();
                    var r = t.top < n,
                        i = t.top >= window.innerHeight,
                        o = t.bottom < n,
                        a = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                        s = !i && !r,
                        l = !a && !o;
                    !s && !l || s && l || (!e && s && this.lockTop(), e && l && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), r && o && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), i && a && this.lockTop()
                }, t.prototype.unlock = function(e) {
                    var t, n = this.state,
                        r = n.offsetTop,
                        i = n.width,
                        o = this.element.getBoundingClientRect(),
                        a = window.innerHeight - (r || 0),
                        s = i;
                    t = "inherit", o.height <= a ? s = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - o.height + a - (this.props.bottomPixelThreshold || 0)), this.setState({
                        top: t,
                        width: s,
                        anchoredBottom: !1,
                        anchoredTop: !1
                    })
                }, t.contextTypes = {
                    registerReceiver: l.func,
                    yScrollTo: l.func
                }, t
            }(c.Component),
            p = Object(a.a)(r)(h);
        n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return o.a
        }), n.d(t, "c", function() {
            return p
        })
    },
    3: function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = {}, n = 0, r = Object.keys(e).filter(function(e) {
                    return e.startsWith("data-")
                }); n < r.length; n++) {
                var i = r[n];
                t[i] = e[i]
            }
            return t
        }

        function i(e) {
            for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
                var i = r[n];
                ut.has(i) && (t[i] = e[i])
            }
            return t
        }

        function o() {
            return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function a(e) {
            var t;
            return "string" == typeof e ? t = e : e.pathname && (t = e.pathname), !(!t || !/^\w+:\/\//.test(t) && !t.startsWith("//"))
        }
        var s, l = n(0),
            c = n(4),
            u = n(1);
        n(191);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Baseline = 4] = "Baseline", e[e.Stretch = 5] = "Stretch"
        }(s || (s = {}));
        var d, h = (M = {}, M[s.Start] = "align-content-start", M[s.End] = "align-content-end", M[s.Center] = "align-content-center", M[s.Baseline] = "align-content-baseline", M[s.Stretch] = "align-content-stretch", M);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Baseline = 4] = "Baseline", e[e.Stretch = 5] = "Stretch"
        }(d || (d = {}));
        var p, g = (D = {}, D[d.Start] = "align-items-start", D[d.End] = "align-items-end", D[d.Center] = "align-items-center", D[d.Baseline] = "align-items-baseline", D[d.Stretch] = "align-items-stretch", D);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Baseline = 4] = "Baseline", e[e.Stretch = 5] = "Stretch"
        }(p || (p = {}));
        var m, f = (A = {}, A[p.Start] = "align-self-start", A[p.End] = "align-self-end", A[p.Center] = "align-self-center", A[p.Baseline] = "align-self-baseline", A[p.Stretch] = "align-self-stretch", A);
        ! function(e) {
            e[e.Block = 1] = "Block", e[e.Flex = 2] = "Flex", e[e.Inline = 3] = "Inline", e[e.InlineBlock = 4] = "InlineBlock", e[e.InlineFlex = 5] = "InlineFlex", e[e.Hide = 6] = "Hide", e[e.HideAccessible = 7] = "HideAccessible"
        }(m || (m = {}));
        var v, w = (B = {}, B[m.Block] = "block", B[m.Flex] = "flex", B[m.Inline] = "inline", B[m.InlineBlock] = "inline-block", B[m.InlineFlex] = "inline-flex", B[m.Hide] = "hide", B[m.HideAccessible] = "hide-accessible", B);
        ! function(e) {
            e[e.Column = 1] = "Column", e[e.ColumnReverse = 2] = "ColumnReverse", e[e.Row = 3] = "Row", e[e.RowReverse = 4] = "RowReverse"
        }(v || (v = {}));
        var b, y = (P = {}, P[v.Column] = "flex-column", P[v.ColumnReverse] = "flex-column-reverse", P[v.Row] = "flex-row", P[v.RowReverse] = "flex-row-reverse", P);
        ! function(e) {
            e[e.Wrap = 1] = "Wrap", e[e.NoWrap = 2] = "NoWrap", e[e.WrapReverse = 3] = "WrapReverse"
        }(b || (b = {}));
        var _, E = (O = {}, O[b.Wrap] = "flex-wrap", O[b.NoWrap] = "flex-nowrap", O[b.WrapReverse] = "flex-wrap-reverse", O);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Between = 4] = "Between", e[e.Around = 5] = "Around"
        }(_ || (_ = {}));
        var k, S = (H = {}, H[_.Start] = "justify-content-start", H[_.End] = "justify-content-end", H[_.Center] = "justify-content-center", H[_.Between] = "justify-content-between", H[_.Around] = "justify-content-around", H);
        ! function(e) {
            e[e.Auto = 1] = "Auto", e[e.Scroll = 2] = "Scroll", e[e.Visible = 3] = "Visible", e[e.Hidden = 4] = "Hidden"
        }(k || (k = {}));
        var C, L = (F = {}, F[k.Auto] = "tw-overflow-auto", F[k.Scroll] = "tw-overflow-scroll", F[k.Visible] = "tw-overflow-visible", F[k.Hidden] = "tw-overflow-hidden", F);
        ! function(e) {
            e[e.Relative = 1] = "Relative", e[e.Absolute = 2] = "Absolute", e[e.Fixed = 3] = "Fixed"
        }(C || (C = {}));
        var T, x = (V = {}, V[C.Relative] = "relative", V[C.Absolute] = "absolute", V[C.Fixed] = "fixed", V);
        ! function(e) {
            e[e.None = 1] = "None", e[e.X = 2] = "X", e[e.Y = 3] = "Y"
        }(T || (T = {}));
        var N, R = (U = {}, U[T.None] = "tw-resize-none", U[T.X] = "tw-resize-x", U[T.Y] = "tw-resize-y", U);
        ! function(e) {
            e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right"
        }(N || (N = {}));
        var I, z = (q = {}, q[N.Left] = "align-left", q[N.Center] = "align-center", q[N.Right] = "align-right", q);
        ! function(e) {
            e[e.Default = 1] = "Default", e[e.Above = 2] = "Above", e[e.Below = 3] = "Below"
        }(I || (I = {}));
        var M, D, A, B, P, O, H, F, V, U, q, j, W, G = (j = {}, j[I.Default] = "tw-z-default", j[I.Above] = "tw-z-above", j[I.Below] = "tw-z-below", j),
            Q = new Set([0, .5, 1, 2, 3, 4, 5, "auto"]),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (p = {}, p["" + this.props.className] = !!this.props.className, p["tw-top-0"] = this.props.attachTop, p["tw-right-0"] = this.props.attachRight, p["tw-bottom-0"] = this.props.attachBottom, p["tw-left-0"] = this.props.attachLeft, p["tw-ellipsis"] = this.props.ellipsis, p["tw-full-width"] = this.props.fullWidth, p["tw-full-height"] = this.props.fullHeight, p);
                    this.props.overflow && (e[L[this.props.overflow]] = !0), this.props.resize && (e[R[T.X]] = !0), this.props.zIndex && (e[G[this.props.zIndex]] = !0);
                    var t = this.getBreakpointClasses(this.props),
                        n = this.getBreakpointClasses(this.props.breakpointExtraSmall, "xs"),
                        i = this.getBreakpointClasses(this.props.breakpointSmall, "sm"),
                        o = this.getBreakpointClasses(this.props.breakpointMedium, "md"),
                        a = this.getBreakpointClasses(this.props.breakpointLarge, "lg"),
                        s = this.getBreakpointClasses(this.props.breakpointExtraLarge, "xl"),
                        d = this.getBreakpointClasses(this.props.breakpointExtraExtraLarge, "xxl"),
                        h = u.Children.only(this.props.children);
                    return u.cloneElement(h, l.__assign({}, h.props, r(this.props), {
                        className: c(h.props.className, e, t, n, i, o, a, s, d)
                    }));
                    var p
                }, t.prototype.getBreakpointClasses = function(e, t) {
                    if (!e) return "";
                    var n = [];
                    if (t = t ? "tw-" + t + "-" : "tw-", e.alignContent && n.push(t + h[e.alignContent]), e.alignItems && n.push(t + g[e.alignItems]), e.alignSelf && n.push(t + f[e.alignSelf]), e.display && n.push(t + w[e.display]), e.flexDirection && n.push(t + y[e.flexDirection]), void 0 !== e.flexGrow && n.push(t + "flex-grow-" + e.flexGrow), void 0 !== e.flexOrder && n.push(t + "item-order-" + e.flexOrder), void 0 !== e.flexShrink && n.push(t + "flex-shrink-" + e.flexShrink), e.flexWrap && n.push(t + E[e.flexWrap]), e.justifyContent && n.push(t + S[e.justifyContent]), e.position && n.push(t + x[e.position]), e.textAlign && n.push(t + z[e.textAlign]), void 0 !== e.margin) {
                        var r = this.getSpacingClasses("mg", e.margin);
                        "string" == typeof r ? n.push(t + r) : r.forEach(function(e) {
                            n.push(t + e)
                        })
                    }
                    if (void 0 !== e.padding) {
                        var r = this.getSpacingClasses("pd", e.padding);
                        "string" == typeof r ? n.push(t + r) : r.forEach(function(e) {
                            n.push(t + e)
                        })
                    }
                    return n
                }, t.prototype.getSpacingClasses = function(e, t) {
                    if (void 0 === t || null === t) return "";
                    if ("object" == typeof t) {
                        if (t.x && (t.left || t.right)) throw new Error("Cannot use `x` and `left` or `right` at the same time.");
                        if (t.y && (t.top || t.bottom)) throw new Error("Cannot use `y` and `top` or `bottom` at the same time.");
                        var n = [];
                        return void 0 !== t.top && (.5 === t.top ? n.push(e + "-t-05") : n.push(e + "-t-" + t.top)), void 0 !== t.right && (.5 === t.right ? n.push(e + "-r-05") : n.push(e + "-r-" + t.right)), void 0 !== t.bottom && (.5 === t.bottom ? n.push(e + "-b-05") : n.push(e + "-b-" + t.bottom)), void 0 !== t.left && (.5 === t.left ? n.push(e + "-l-05") : n.push(e + "-l-" + t.left)), void 0 !== t.x && (.5 === t.x ? n.push(e + "-x-05") : n.push(e + "-x-" + t.x)), void 0 !== t.y && (.5 === t.y ? n.push(e + "-y-05") : n.push(e + "-y-" + t.y)), n
                    }
                    if (!Q.has(t) || "tw-pd" === e && "auto" === t) throw new Error(t + " is not a valid property of either margin or padding");
                    return .5 === t ? e + "-05" : "auto" === t ? e + "-auto" : e + "-" + t
                }, t
            }(u.Component),
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(K, l.__assign({}, this.props), u.createElement("div", {
                        ref: this.props.refDelegate
                    }, this.props.children))
                }, t
            }(K);
        n(192);
        ! function(e) {
            e[e.Short = 1] = "Short", e[e.Medium = 2] = "Medium", e[e.Long = 3] = "Long"
        }(W || (W = {}));
        var J, X = (ne = {}, ne[W.Short] = "tw-animation--delay-short", ne[W.Medium] = "tw-animation--delay-medium", ne[W.Long] = "tw-animation--delay-long", ne);
        ! function(e) {
            e[e.Short = 1] = "Short", e[e.Medium = 2] = "Medium", e[e.Long = 3] = "Long"
        }(J || (J = {}));
        var Y, $ = (re = {}, re[J.Short] = "tw-animation--duration-short", re[J.Medium] = "tw-animation--duration-medium", re[J.Long] = "tw-animation--duration-long", re);
        ! function(e) {
            e[e.Ease = 1] = "Ease", e[e.Linear = 2] = "Linear", e[e.EaseIn = 3] = "EaseIn", e[e.EaseOut = 4] = "EaseOut", e[e.EaseInOut = 5] = "EaseInOut"
        }(Y || (Y = {}));
        var ee, te = (ie = {}, ie[Y.Ease] = "tw-animation--timing-ease", ie[Y.Linear] = "tw-animation--timing-linear", ie[Y.EaseIn] = "tw-animation--timing-ease-in", ie[Y.EaseOut] = "tw-animation--timing-ease-out", ie[Y.EaseInOut] = "tw-animation--timing-ease-in-out", ie);
        ! function(e) {
            e[e.Bounce = 1] = "Bounce", e[e.BounceIn = 2] = "BounceIn", e[e.BounceOut = 3] = "BounceOut", e[e.FadeIn = 4] = "FadeIn", e[e.FadeOut = 5] = "FadeOut", e[e.SlideInTop = 6] = "SlideInTop", e[e.SlideInRight = 7] = "SlideInRight", e[e.SlideInBottom = 8] = "SlideInBottom", e[e.SlideInLeft = 9] = "SlideInLeft", e[e.SlideOutTop = 10] = "SlideOutTop", e[e.SlideOutRight = 11] = "SlideOutRight", e[e.SlideOutBottom = 12] = "SlideOutBottom", e[e.SlideOutLeft = 13] = "SlideOutLeft"
        }(ee || (ee = {}));
        var ne, re, ie, oe, ae, se = (oe = {}, oe[ee.Bounce] = "tw-animation--bounce", oe[ee.BounceIn] = "tw-animation--bounce-in", oe[ee.BounceOut] = "tw-animation--bounce-out", oe[ee.FadeIn] = "tw-animation--fade-in", oe[ee.FadeOut] = "tw-animation--fade-out", oe[ee.SlideInTop] = "tw-animation--slide-in-top", oe[ee.SlideInRight] = "tw-animation--slide-in-right", oe[ee.SlideInBottom] = "tw-animation--slide-in-bottom", oe[ee.SlideInLeft] = "tw-animation--slide-in-left", oe[ee.SlideOutTop] = "tw-animation--slide-out-top", oe[ee.SlideOutRight] = "tw-animation--slide-out-right", oe[ee.SlideOutBottom] = "tw-animation--slide-out-bottom", oe[ee.SlideOutLeft] = "tw-animation--slide-out-left", oe),
            le = function(e) {
                var t = {
                    "tw-animation": !0,
                    "tw-animation--animate": e.enabled,
                    "tw-animation--loop": e.loop
                };
                return e.delay && (t[X[e.delay]] = !0), e.duration ? t[$[e.duration]] = !0 : t[$[J.Short]] = !0, e.timing ? t[te[e.timing]] = !0 : t[te[Y.Ease]] = !0, e.type && (t[se[e.type]] = !0), u.createElement(K, l.__assign({
                    className: c(t)
                }, r(e)), u.createElement("div", {
                    onAnimationStart: e.onAnimationStart,
                    onAnimationEnd: e.onAnimationEnd,
                    "data-a-target": "tw-animation-target"
                }, e.children))
            };
        n(193);
        ! function(e) {
            e[e.Aspect21x9 = 1] = "Aspect21x9", e[e.Aspect16x9 = 2] = "Aspect16x9", e[e.Aspect4x3 = 3] = "Aspect4x3", e[e.Aspect1x1 = 4] = "Aspect1x1", e[e.Aspect3x4 = 5] = "Aspect3x4", e[e.BoxArt = 6] = "BoxArt"
        }(ae || (ae = {}));
        var ce;
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Center = 2] = "Center", e[e.Bottom = 3] = "Bottom"
        }(ce || (ce = {}));
        var ue, de, he, pe = (ue = {}, ue[ae.Aspect21x9] = "tw-aspect--21x9", ue[ae.Aspect16x9] = "tw-aspect--16x9", ue[ae.Aspect4x3] = "tw-aspect--4x3", ue[ae.Aspect1x1] = "tw-aspect--1x1", ue[ae.Aspect3x4] = "tw-aspect--3x4", ue[ae.BoxArt] = "tw-aspect--boxart", ue),
            ge = (de = {}, de[ce.Top] = "tw-aspect--align-top", de[ce.Center] = "tw-aspect--align-center", de[ce.Bottom] = "tw-aspect--align-bottom", de),
            me = function(e) {
                var t = {
                    "tw-aspect--overflow": e.overflow
                };
                return e.ratio ? t[pe[e.ratio]] = !0 : t[pe[ae.Aspect16x9]] = !0, e.align ? t[ge[e.align]] = !0 : t[ge[ce.Top]] = !0, u.createElement("figure", l.__assign({
                    className: c("tw-aspect", t)
                }, r(e)), e.children)
            };
        n(194);
        ! function(e) {
            e[e.Offline = 1] = "Offline", e[e.Invisible = 2] = "Invisible", e[e.Online = 3] = "Online", e[e.Busy = 4] = "Busy", e[e.Away = 5] = "Away"
        }(he || (he = {}));
        var fe, ve, we = (fe = {}, fe[he.Offline] = "tw-presence__indicator--offline", fe[he.Invisible] = "tw-presence__indicator--invisible", fe[he.Online] = "tw-presence__indicator--online", fe[he.Busy] = "tw-presence__indicator--busy", fe[he.Away] = "tw-presence__indicator--away", fe),
            be = function(e) {
                var t = {
                        "tw-presence": !0,
                        "tw-presence--border": e.border
                    },
                    n = {};
                return e.status ? n[we[e.status]] = !0 : n[we[he.Offline]] = !0, u.createElement(Z, l.__assign({
                    className: c(t),
                    display: m.InlineFlex,
                    position: C.Relative
                }, r(e)), u.createElement("div", {
                    className: "tw-presence__border"
                }), u.createElement("div", {
                    className: "tw-presence__indicator " + c(n)
                }))
            };
        n(195);
        ! function(e) {
            e[e.Base = 1] = "Base", e[e.Alt = 2] = "Alt", e[e.Alt2 = 3] = "Alt2", e[e.Link = 4] = "Link", e[e.Live = 5] = "Live", e[e.Error = 6] = "Error", e[e.Overlay = 7] = "Overlay", e[e.OverlayAlt = 8] = "OverlayAlt"
        }(ve || (ve = {}));
        var ye, _e = (Ie = {}, Ie[ve.Base] = "tw-c-text", Ie[ve.Alt] = "tw-c-text-alt", Ie[ve.Alt2] = "tw-c-text-alt-2", Ie[ve.Link] = "tw-c-text-link", Ie[ve.Live] = "tw-c-text-live", Ie[ve.Error] = "tw-c-text-error", Ie[ve.Overlay] = "tw-c-text-overlay", Ie[ve.OverlayAlt] = "tw-c-text-overlay-alt", Ie);
        ! function(e) {
            e[e.Size1 = 1] = "Size1", e[e.Size2 = 2] = "Size2", e[e.Size3 = 3] = "Size3", e[e.Size4 = 4] = "Size4", e[e.Size5 = 5] = "Size5", e[e.Size6 = 6] = "Size6", e[e.Size7 = 7] = "Size7", e[e.Size8 = 8] = "Size8"
        }(ye || (ye = {}));
        var Ee, ke = (ze = {}, ze[ye.Size1] = "tw-font-size-1", ze[ye.Size2] = "tw-font-size-2", ze[ye.Size3] = "tw-font-size-3", ze[ye.Size4] = "tw-font-size-4", ze[ye.Size5] = "tw-font-size-5", ze[ye.Size6] = "tw-font-size-6", ze[ye.Size7] = "tw-font-size-7", ze[ye.Size8] = "tw-font-size-8", ze);
        ! function(e) {
            e[e.Body = 1] = "Body", e[e.Heading = 2] = "Heading"
        }(Ee || (Ee = {}));
        var Se, Ce = (Me = {}, Me[Ee.Body] = "tw-line-height-body", Me[Ee.Heading] = "tw-line-height-heading", Me);
        ! function(e) {
            e[e.Underline = 1] = "Underline", e[e.Strikethrough = 2] = "Strikethrough"
        }(Se || (Se = {}));
        var Le, Te = (De = {}, De[Se.Underline] = "tw-underline", De[Se.Strikethrough] = "tw-strikethrough", De);
        ! function(e) {
            e[e.Capitalize = 1] = "Capitalize", e[e.Uppercase = 2] = "Uppercase"
        }(Le || (Le = {}));
        var xe, Ne = (Ae = {}, Ae[Le.Capitalize] = "tw-capcase", Ae[Le.Uppercase] = "tw-upcase", Ae);
        ! function(e) {
            e[e.P = 1] = "P", e[e.Span = 2] = "Span", e[e.H1 = 3] = "H1", e[e.H2 = 4] = "H2", e[e.H3 = 5] = "H3", e[e.H4 = 6] = "H4", e[e.H5 = 7] = "H5", e[e.H6 = 8] = "H6", e[e.Strong = 9] = "Strong", e[e.Em = 10] = "Em"
        }(xe || (xe = {}));
        var Re;
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Middle = 2] = "Middle", e[e.Baseline = 3] = "Baseline", e[e.Bottom = 4] = "Bottom", e[e.TextTop = 5] = "TextTop", e[e.TextBottom = 6] = "TextBottom"
        }(Re || (Re = {}));
        var Ie, ze, Me, De, Ae, Be, Pe, Oe = (Be = {}, Be[Re.Top] = "tw-align-top", Be[Re.Middle] = "tw-align-middle", Be[Re.Baseline] = "tw-align-baseline", Be[Re.Bottom] = "tw-align-bottom", Be[Re.TextTop] = "tw-align-text-top", Be[Re.TextBottom] = "tw-align-text-bottom", Be),
            He = function(e) {
                var t = (i = {
                    "tw-ellipsis": e.ellipsis || e.lines && e.lines > 0,
                    "tw-italic": e.italic,
                    "tw-nowrap": e.noWrap,
                    "tw-strong": e.bold
                }, i["tw-line-clamp-2"] = 2 === e.lines, i);
                e.align && (t[Oe[e.align]] = !0), e.color && (t[_e[e.color]] = !0), e.fontSize && (t[ke[e.fontSize]] = !0), e.lineHeight && (t[Ce[e.lineHeight]] = !0), e.transform && (t[Ne[e.transform]] = !0), e.decoration && (t[Te[e.decoration]] = !0);
                var n;
                return e.title ? n = e.title : e.ellipsis && "string" == typeof e.children && (n = e.children), u.createElement(e.type ? xe[e.type] : "p", l.__assign({
                    className: c(e.className, t)
                }, r(e), {
                    title: n
                }), e.children);
                var i
            };
        n(196);
        ! function(e) {
            e[e.Base = 1] = "Base", e[e.Alt = 2] = "Alt", e[e.Alt2 = 3] = "Alt2", e[e.Overlay = 4] = "Overlay", e[e.Accent = 5] = "Accent", e[e.AccentAlt = 6] = "AccentAlt", e[e.AccentAlt2 = 7] = "AccentAlt2"
        }(Pe || (Pe = {}));
        var Fe, Ve = (Ue = {}, Ue[Pe.Base] = "tw-c-background", Ue[Pe.Alt] = "tw-c-background-alt", Ue[Pe.Alt2] = "tw-c-background-alt-2", Ue[Pe.Overlay] = "tw-c-background-overlay", Ue[Pe.Accent] = "tw-c-background-accent", Ue[Pe.AccentAlt] = "tw-c-background-accent-alt", Ue[Pe.AccentAlt2] = "tw-c-background-accent-alt-2", Ue);
        ! function(e) {
            e[e.None = 1] = "None", e[e.Small = 2] = "Small", e[e.Medium = 3] = "Medium", e[e.Large = 4] = "Large", e[e.Rounded = 5] = "Rounded"
        }(Fe || (Fe = {}));
        var Ue, qe, je, We, Ge, Qe = (qe = {}, qe[Fe.None] = "tw-border-radius-none", qe[Fe.Small] = "tw-border-radius-small", qe[Fe.Medium] = "tw-border-radius-medium", qe[Fe.Large] = "tw-border-radius-large", qe[Fe.Rounded] = "tw-border-radius-rounded", qe),
            Ke = (je = {}, je[ve.Base] = "tw-c-text", je[ve.Alt] = "tw-c-text-alt", je[ve.Alt2] = "tw-c-text-alt-2", je[ve.Link] = "tw-c-text-link", je[ve.Live] = "tw-c-text-live", je[ve.Error] = "tw-c-text-error", je[ve.Overlay] = "tw-c-text-overlay", je[ve.OverlayAlt] = "tw-c-text-overlay-alt", je),
            Ze = (We = {}, We[ye.Size1] = "font-size-1", We[ye.Size2] = "font-size-2", We[ye.Size3] = "font-size-3", We[ye.Size4] = "font-size-4", We[ye.Size5] = "font-size-5", We[ye.Size6] = "font-size-6", We[ye.Size7] = "font-size-7", We[ye.Size8] = "font-size-8", We),
            Je = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (m = {
                        "tw-border-t": this.props.border || this.props.borderMarked || this.props.borderTop,
                        "tw-border-r": this.props.border || this.props.borderMarked || this.props.borderRight,
                        "tw-border-b": this.props.border || this.props.borderMarked || this.props.borderBottom,
                        "tw-border-l": this.props.border || this.props.borderLeft && !this.props.borderMarked,
                        "tw-border--marked": this.props.borderMarked
                    }, m["tw-elevation-" + this.props.elevation] = !!this.props.elevation, m);
                    this.props.borderRadius && (e[Qe[this.props.borderRadius]] = !0);
                    var t = this.getColorClass(),
                        n = this.getBackgroundClass(),
                        i = this.getBreakpointClasses(this.props),
                        o = this.getBreakpointClasses(this.props.breakpointExtraSmall, "xs"),
                        a = this.getBreakpointClasses(this.props.breakpointSmall, "sm"),
                        s = this.getBreakpointClasses(this.props.breakpointMedium, "md"),
                        d = this.getBreakpointClasses(this.props.breakpointLarge, "lg"),
                        h = this.getBreakpointClasses(this.props.breakpointExtraLarge, "xl"),
                        p = this.getBreakpointClasses(this.props.breakpointExtraExtraLarge, "xxl"),
                        g = l.__assign({}, this.props, r(this.props), {
                            className: c(this.props.className, e, n, t, i, o, a, s, d, h, p)
                        });
                    return u.createElement(Z, l.__assign({}, g));
                    var m
                }, t.prototype.getBreakpointClasses = function(e, t) {
                    if (!e) return "";
                    var n = [];
                    return t = t ? "tw-" + t + "-" : "tw-", e.fontSize && n.push(t + Ze[e.fontSize]), n
                }, t.prototype.getColorClass = function() {
                    return this.props.background !== Pe.Overlay || this.props.color ? this.props.color ? Ke[this.props.color] : "" : Ke[ve.Overlay]
                }, t.prototype.getBackgroundClass = function() {
                    return this.props.background ? Ve[this.props.background] : ""
                }, t
            }(u.Component),
            Xe = (n(197), function(e) {
                var t = (a = {
                        "tw-avatar": !0
                    }, a["tw-avatar--size-" + e.size] = !!e.size, a),
                    n = {};
                e.borderRadius && (n[Qe[e.borderRadius]] = !0);
                var i, o;
                return i = 300 === e.size ? "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_300x300.png" : 96 === e.size || 80 === e.size ? "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png" : "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png", e.presenceIndicator && (o = u.createElement(Z, {
                    className: "tw-avatar__presence",
                    display: m.Flex,
                    justifyContent: _.Center,
                    alignItems: d.Center,
                    position: C.Absolute
                }, u.createElement(be, {
                    border: !0,
                    status: e.presenceStatus
                }))), u.createElement("figure", l.__assign({
                    className: c(t)
                }, r(e)), u.createElement("img", {
                    className: c(n),
                    src: e.imageSrc || i,
                    alt: e.imageAlt,
                    onLoad: e.onImageLoad,
                    onError: e.onImageError
                }), o);
                var a
            });
        n(198);
        ! function(e) {
            e[e.Inherit = 0] = "Inherit", e[e.Alt = 1] = "Alt", e[e.Alt2 = 2] = "Alt2", e[e.Brand = 3] = "Brand", e[e.Live = 4] = "Live", e[e.Warn = 5] = "Warn", e[e.Alert = 6] = "Alert", e[e.Success = 7] = "Success", e[e.Prime = 8] = "Prime", e[e.Placeholder = 9] = "Placeholder", e[e.OverlayPlaceholder = 10] = "OverlayPlaceholder"
        }(Ge || (Ge = {}));
        var Ye, $e = (et = {}, et[Ge.Inherit] = "tw-svg__asset--inherit", et[Ge.Alt] = "tw-svg__asset--alt", et[Ge.Alt2] = "tw-svg__asset--alt-2", et[Ge.Brand] = "tw-svg__asset--brand", et[Ge.Live] = "tw-svg__asset--live", et[Ge.Warn] = "tw-svg__asset--warn", et[Ge.Alert] = "tw-svg__asset--alert", et[Ge.Success] = "tw-svg__asset--success", et[Ge.Prime] = "tw-svg__asset--prime", et[Ge.Placeholder] = "tw-svg__asset--placeholder", et[Ge.OverlayPlaceholder] = "tw-svg__asset--overlay-placeholder", et);
        ! function(e) {
            e[e.AddFriend = 1] = "AddFriend", e[e.AddUser = 2] = "AddUser", e[e.AddReaction = 3] = "AddReaction", e[e.AngleDown = 4] = "AngleDown", e[e.AngleLeft = 5] = "AngleLeft", e[e.AngleRight = 6] = "AngleRight", e[e.AngleUp = 7] = "AngleUp", e[e.ArrowDown = 8] = "ArrowDown", e[e.ArrowLeft = 9] = "ArrowLeft", e[e.ArrowRight = 10] = "ArrowRight", e[e.ArrowUp = 11] = "ArrowUp", e[e.Automod = 12] = "Automod", e[e.Ban = 13] = "Ban", e[e.Bits = 14] = "Bits", e[e.ChatRiskFlag = 15] = "ChatRiskFlag", e[e.ChatSettingsBack = 16] = "ChatSettingsBack", e[e.Check = 17] = "Check", e[e.Clip = 18] = "Clip", e[e.Close = 19] = "Close", e[e.Collections = 20] = "Collections", e[e.Communities = 21] = "Communities", e[e.Conversations = 22] = "Conversations", e[e.Copy = 23] = "Copy", e[e.Crate = 24] = "Crate", e[e.Crown = 25] = "Crown", e[e.DeadGlitch = 26] = "DeadGlitch", e[e.Download = 27] = "Download", e[e.Edit = 28] = "Edit", e[e.Emoticons = 29] = "Emoticons", e[e.Extensions = 30] = "Extensions", e[e.Facebook = 31] = "Facebook", e[e.Featured = 32] = "Featured", e[e.Filter = 33] = "Filter", e[e.FollowCheck = 34] = "FollowCheck", e[e.FollowX = 35] = "FollowX", e[e.Friends = 36] = "Friends", e[e.FriendsSC = 37] = "FriendsSC", e[e.Gear = 38] = "Gear", e[e.Global = 39] = "Global", e[e.GlyphArrDown = 40] = "GlyphArrDown", e[e.GlyphArrLeft = 41] = "GlyphArrLeft", e[e.GlyphArrRight = 42] = "GlyphArrRight", e[e.GlyphArrUp = 43] = "GlyphArrUp", e[e.GlyphFollowers = 44] = "GlyphFollowers", e[e.GlyphLength = 45] = "GlyphLength", e[e.GlyphLive = 46] = "GlyphLive", e[e.GlyphLiveSmall = 47] = "GlyphLiveSmall", e[e.GlyphViews = 48] = "GlyphViews", e[e.GridLayout = 49] = "GridLayout", e[e.Hash = 50] = "Hash", e[e.Heart = 51] = "Heart", e[e.HGCNexus = 52] = "HGCNexus", e[e.Hide = 53] = "Hide", e[e.HourGlass = 54] = "HourGlass", e[e.Ignore = 55] = "Ignore", e[e.Link = 56] = "Link", e[e.Lock = 57] = "Lock", e[e.LogoGlitch = 58] = "LogoGlitch", e[e.LogoTwitch = 59] = "LogoTwitch", e[e.LogoTwitchPrime = 60] = "LogoTwitchPrime", e[e.LogoTwitchPrimeHorizontal = 61] = "LogoTwitchPrimeHorizontal", e[e.Maximize = 62] = "Maximize", e[e.MessagesSC = 63] = "MessagesSC", e[e.Minimize = 64] = "Minimize", e[e.MiniPlayerExpand = 65] = "MiniPlayerExpand", e[e.MiniPlayerPause = 66] = "MiniPlayerPause", e[e.MiniPlayerPlay = 67] = "MiniPlayerPlay", e[e.More = 68] = "More", e[e.Muted = 69] = "Muted", e[e.NavBackpack = 70] = "NavBackpack", e[e.NavChannels = 71] = "NavChannels", e[e.NavCreative = 72] = "NavCreative", e[e.NavDashboard = 73] = "NavDashboard", e[e.NavDiscover = 74] = "NavDiscover", e[e.NavFollowing = 75] = "NavFollowing", e[e.NavGames = 76] = "NavGames", e[e.NavLogout = 77] = "NavLogout", e[e.NavManager = 78] = "NavManager", e[e.NavMessages = 79] = "NavMessages", e[e.NavMore = 80] = "NavMore", e[e.NavMyChannel = 81] = "NavMyChannel", e[e.NavProfile = 82] = "NavProfile", e[e.NavSearch = 83] = "NavSearch", e[e.NavSettings = 84] = "NavSettings", e[e.NavVideos = 85] = "NavVideos", e[e.Neck = 86] = "Neck", e[e.NotificationBell = 87] = "NotificationBell", e[e.OP = 88] = "OP", e[e.PermissionsAdd = 89] = "PermissionsAdd", e[e.PermissionsAdded = 90] = "PermissionsAdded", e[e.PermissionsRemove = 91] = "PermissionsRemove", e[e.Pin = 92] = "Pin", e[e.Pinned = 93] = "Pinned", e[e.Play = 94] = "Play", e[e.Playlist = 95] = "Playlist", e[e.Plus = 96] = "Plus", e[e.Popout = 97] = "Popout", e[e.QuestionMark = 98] = "QuestionMark", e[e.Reddit = 99] = "Reddit", e[e.RemoveTag = 100] = "RemoveTag", e[e.RequestsSC = 101] = "RequestsSC", e[e.Roman1 = 102] = "Roman1", e[e.Roman2 = 103] = "Roman2", e[e.Roman3 = 104] = "Roman3", e[e.Roman4 = 105] = "Roman4", e[e.Roman5 = 106] = "Roman5", e[e.RoomList = 107] = "RoomList", e[e.RoomListOpen = 108] = "RoomListOpen", e[e.SearchNoResults = 109] = "SearchNoResults", e[e.Share = 110] = "Share", e[e.Shirt = 111] = "Shirt", e[e.Star = 112] = "Star", e[e.Steam = 113] = "Steam", e[e.Sword = 114] = "Sword", e[e.Team = 115] = "Team", e[e.Theater = 116] = "Theater", e[e.Timeout = 117] = "Timeout", e[e.Timer = 118] = "Timer", e[e.ToBottom = 119] = "ToBottom", e[e.ToTop = 120] = "ToTop", e[e.Trash = 121] = "Trash", e[e.Trophy = 122] = "Trophy", e[e.Twitter = 123] = "Twitter", e[e.Unheart = 124] = "Unheart", e[e.Unignore = 125] = "Unignore", e[e.Unlock = 126] = "Unlock", e[e.Upload = 127] = "Upload", e[e.VKontakte = 128] = "VKontakte", e[e.Verified = 129] = "Verified", e[e.VideoPremiere = 130] = "VideoPremiere", e[e.VideoRerun = 131] = "VideoRerun", e[e.ViewerList = 132] = "ViewerList", e[e.Warning = 133] = "Warning", e[e.WhisperMuted = 134] = "WhisperMuted"
        }(Ye || (Ye = {}));
        var et, tt, nt, rt = (tt = {}, tt[Ye.AddFriend] = {
                path: u.createElement("path", {
                    d: "M3,6 L1,6 L1,7 L3,7 L3,9 L4,9 L4,7 L6,7 L6,6 L4,6 L4,4 L3,4 L3,6 Z M9.57142857,3 L12.4285714,3 L13.8571429,4.42857143 L13.8571429,8 L11.7142857,9.42857143 L11.7142857,10.1428571 L14.5714286,10.1428571 L16,11.5714286 L16,13 L6,13 L6,11.5714286 L7.42857143,10.1428571 L10.2857143,10.1428571 L10.2857143,9.42857143 L8.14285714,8 L8.14285714,4.42857143 L9.57142857,3 Z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.AddUser] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,9h-3v3h-2V9H7V7h3V4h2v3h3V9z M9,6H6v4h2h1v3h4l0,0l0,0v1h-3H4H1v-1l3-3h2L4,8V2h6v1H9V6z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.AddReaction] = {
                path: u.createElement("path", {
                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm4-12c0-.776-.223-1-1-1h-2V9c0-.776-.223-1-1-1-.776 0-1 .224-1 1v2H9c-.776 0-1 .224-1 1 0 .777.224 1 1 1h2v2c0 .777.224 1 1 1 .777 0 1-.223 1-1v-2h2c.777 0 1-.223 1-1z"
                }),
                width: 24,
                height: 24
            }, tt[Ye.AngleDown] = {
                path: u.createElement("path", {
                    d: "M8 8.89L2.556 3.444 1 5l7 7 7-7-1.556-1.556"
                }),
                width: 16,
                height: 16
            }, tt[Ye.AngleLeft] = {
                path: u.createElement("path", {
                    d: "M7.11 8l5.446-5.444L11 1 4 8l7 7 1.556-1.556"
                }),
                width: 16,
                height: 16
            }, tt[Ye.AngleRight] = {
                path: u.createElement("path", {
                    d: "M9.444 8L4 2.556 5.556 1l7 7-7 7L4 13.444"
                }),
                width: 16,
                height: 16
            }, tt[Ye.AngleUp] = {
                path: u.createElement("path", {
                    d: "M8 6.11l5.444 5.446L15 10 8 3l-7 7 1.556 1.556"
                }),
                width: 16,
                height: 16
            }, tt[Ye.ArrowDown] = {
                path: u.createElement("path", {
                    d: "M14.924 11.579a.994.994 0 0 0-.92-.616h-2.027V3.999A.997.997 0 0 0 10.983 3H8.998a.997.997 0 0 0-.995.999v6.964H5.995a.995.995 0 0 0-.92.616c-.153.373-.068.803.216 1.089l4.006 4.039a.992.992 0 0 0 1.406 0l4.006-4.039c.284-.286.369-.716.215-1.089",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, tt[Ye.ArrowLeft] = {
                path: u.createElement("path", {
                    d: "M8.42 14.924a.994.994 0 0 0 .617-.919v-2.028H16a.997.997 0 0 0 .999-.994V8.998a.997.997 0 0 0-1-.995H9.038V5.995a.995.995 0 0 0-.616-.919 1.003 1.003 0 0 0-1.09.215L3.294 9.297a.992.992 0 0 0 0 1.406l4.039 4.006c.286.284.716.369 1.089.215",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, tt[Ye.ArrowRight] = {
                path: u.createElement("path", {
                    d: "M11.579 5.076a.994.994 0 0 0-.616.919v2.028H3.999a.997.997 0 0 0-1 .994v1.985c0 .55.448.995 1 .995h6.964v2.008c0 .402.243.765.616.919.373.154.803.069 1.089-.215l4.039-4.006a.992.992 0 0 0 0-1.406l-4.04-4.006a1.003 1.003 0 0 0-1.088-.215",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, tt[Ye.ArrowUp] = {
                path: u.createElement("path", {
                    d: "M5.076 8.42a.994.994 0 0 0 .92.617h2.027V16c0 .552.446.999.994.999h1.985c.55 0 .995-.447.995-1V9.038h2.008a.995.995 0 0 0 .92-.616 1.003 1.003 0 0 0-.216-1.09l-4.006-4.038a.992.992 0 0 0-1.406 0L5.291 7.332a1.003 1.003 0 0 0-.215 1.089"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Automod] = {
                path: u.createElement("path", {
                    d: "M10 0l9 5c0 10.8852-9 15-9 15S1 15.8852 1 5l9-5z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Ban] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,15c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S11.866,15,8,15z M3,8c0,1.019,0.309,1.964,0.832,2.754l6.922-6.922C9.964,3.309,9.019,3,8,3C5.238,3,3,5.238,3,8z M12.169,5.246l-6.923,6.923C6.036,12.691,6.98,13,8,13c2.762,0,5-2.238,5-5C13,6.98,12.691,6.036,12.169,5.246z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Bits] = {
                path: u.createElement("path", {
                    d: "M16.6,13.2L9,17.4l-7.6-4.2L9,0.5L16.6,13.2z M9.1,9.4l-5,3l5,2.5l5-2.6L9.1,9.4z M6,8.9L9,7l3,1.9L9,4.4L6,8.9z"
                }),
                width: 18,
                height: 18
            }, tt[Ye.ChatRiskFlag] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M3,14 L1,14 L1,2 L3,2 L3,14 L3,14 Z M4,2 L11,2 L11,4 L15,4 L15,11 L8,11 L8,9 L4,9 L4,2 L4,2 Z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Check] = {
                path: u.createElement("path", {
                    d: "M16,2.24074074 C16,2.24074074 6.56165287,14.0131532 6.46051168,14 C6.39491888,13.9966933 0,8.44444444 0,8.44444444 L2.13570634,5.74074074 L6.10456062,9.12962963 L13.4905451,0 L16,2.24074074 Z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.ChatSettingsBack] = {
                path: u.createElement("path", {
                    d: "M1 5l6-4v8z",
                    fillRule: "evenodd"
                }),
                width: 10,
                height: 10
            }, tt[Ye.Clip] = {
                path: u.createElement("path", {
                    d: "M14.802 7.804l-3.83 1.026 2.928 2.321 3.83-1.026-2.928-2.321zm2.895-.776l3.981-1.067.777 2.898-1.83.49-2.928-2.321zM7.969 9.635l-1.745.467L7 13l3.898-1.044-2.929-2.321zM7 13h16v9H7v-9zm1.969 3h2.785l2.228-3h-2.785l-2.228 3zm7.018 0h2.785L21 13h-2.785l-2.228 3z"
                }),
                width: 30,
                height: 30
            }, tt[Ye.Close] = {
                path: u.createElement("path", {
                    d: "M8 6.586L3.757 2.343 2.343 3.757 6.586 8l-4.243 4.243 1.414 1.414L8 9.414l4.243 4.243 1.414-1.414L9.414 8l4.243-4.243-1.414-1.414",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Collections] = {
                path: u.createElement("path", {
                    d: "M1 7h18v12H1V7zm12 6l-5-3v6l5-3zM3 4h14v2H3V4zm2-3h10v2H5V1z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Communities] = {
                path: u.createElement("path", {
                    d: "M3.25 17L4 14H2l.75 3h.5zm12 0l.75-3h-2l.75 3h.5zm-6.82-1l-1.144-4H6L5 6h8l-1 6h-1.286L9.57 16H8.43zM5 5H4l.5 3H1V4h4v1zm-.333 4l.606 3.636L5 14H1L0 9h4.667zM13.5 8H17V4h-4v1h1l-.5 3zm-.167 1H18l-1 5h-4l-.273-1.364L13.333 9zM7 1h4v4H7V1z"
                }),
                width: 18,
                height: 18
            }, tt[Ye.Conversations] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M2.57894737,12.1904762 L0,12.1904762 L0,0 L14,0 L14,12.1904762 L7,12.1904762 L2.57894737,16 L2.57894737,12.1904762 Z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Copy] = {
                path: u.createElement("g", {
                    fillRule: "evenodd"
                }, u.createElement("path", {
                    d: "M9 19.607l4.755-4.755 3.535 3.535-4.754 4.755L9 19.607zm1.44-.025l4.022-4.023 2.12 2.12-4.022 4.024-2.12-2.122zm4.412-5.827L19.607 9l3.535 3.536-4.755 4.754-3.535-3.535zm.707.707l4.022-4.023 2.122 2.12-4.024 4.023-2.12-2.12z"
                }), u.createElement("path", {
                    d: "M12.987 17.74l4.754-4.753 1.415 1.414-4.754 4.755z"
                })),
                width: 32,
                height: 32
            }, tt[Ye.Crate] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M8 8h3v4.3l2-.7V8h3v3l-.4 1L8 15H7V7l1 1zM7 7v8H6L.4 12 0 11V8h1v3l4 2 1-1V8l1-1zM15 6h-2V3.4l-2-.6V6H8L7 7V1h1l7.6 2 .4 1v2h-1zM0 6V4l.4-1L6 1h1v6L6 6V2.1L1 3.9V6H0z"
                }), u.createElement("path", {
                    opacity: ".5",
                    d: "M13 8h3l-1-1h-2"
                }), u.createElement("path", {
                    fillOpacity: ".25",
                    d: "M13 7h2l1-1h-3"
                }), u.createElement("path", {
                    opacity: ".5",
                    d: "M8 8h3V7H7"
                }), u.createElement("path", {
                    fillOpacity: ".25",
                    d: "M7 7h4V6H8"
                }), u.createElement("path", {
                    opacity: ".25",
                    d: "M3 8H0l1-1h2M6 8H4V7h3"
                }), u.createElement("path", {
                    opacity: ".75",
                    d: "M11 5h2V3.4l-2-.6M11 12.3l2-.6V9h-2"
                }), u.createElement("path", {
                    d: "M1.5 3.3L.3 1.9l.2-.8L3.8 0l.5.1 1.5 1.6-4.3 1.6zm.1-1.5l.4.6 2.3-.8-.5-.6-2.2.8z"
                }), u.createElement("path", {
                    fillOpacity: ".5",
                    d: "M4 12.5l2 1V8H4M3 12l-2-1V8h2"
                }), u.createElement("path", {
                    opacity: ".3",
                    d: "M3 12.1l1 .4V9H3"
                }), u.createElement("path", {
                    fillOpacity: ".5",
                    d: "M4 2.7l2-.6V6H4M3 6H1V3.9l2-.7"
                }), u.createElement("path", {
                    opacity: ".3",
                    d: "M3 5h1V2.7l-1 .5"
                })),
                width: 16,
                height: 15
            }, tt[Ye.Crown] = {
                path: u.createElement("polygon", {
                    points: "15.7,5.8 10,0.1 4.3,5.8 0,1.5 0,12.9 20,12.9 20,1.5"
                }),
                width: 20,
                height: 13
            }, tt[Ye.DeadGlitch] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M26,17.4589613 L26,3 L4,3 L4,22.0601057 L10.0032868,22.0601057 L10.0032868,26 L14.0004537,22.0601057 L21.3322933,22.0601057 L26,17.4589613 L26,17.4589613 Z M21.0896458,26.0850335 L15.1583403,26.0850335 L11.2051771,30 L7.24798611,30 L7.24798611,26.0850335 L0,26.0850335 L0,5.21746493 L1.97773958,0 L29,0 L29,18.2620736 L21.0896458,26.0850335 L21.0896458,26.0850335 Z"
                }), u.createElement("path", {
                    d: "M20.8587626,12.1710126 L22.4052753,13.7175252 L23.7175252,12.4052753 L22.1710126,10.8587626 L23.7175252,9.31224999 L22.4052753,8 L20.8587626,9.54651264 L19.31225,8 L18,9.31224999 L19.5465126,10.8587626 L18,12.4052753 L19.31225,13.7175252 L20.8587626,12.1710126 Z M11.8587626,12.1710126 L13.4052753,13.7175252 L14.7175252,12.4052753 L13.1710126,10.8587626 L14.7175252,9.31224999 L13.4052753,8 L11.8587626,9.54651264 L10.31225,8 L9,9.31224999 L10.5465126,10.8587626 L9,12.4052753 L10.31225,13.7175252 L11.8587626,12.1710126 Z"
                })),
                width: 30,
                height: 30
            }, tt[Ye.Download] = {
                path: u.createElement("path", {
                    d: "M30.7,12.6c0.4-0.7,0.6-1.5,0.6-2.4c0-3-2.4-5.4-5.4-5.4c-1,0-2,0.3-2.8,0.8C21.6,2.3,18.2,0,14.3,0   C8.9,0,4.6,4.4,4.6,9.8c0,0.3,0,0.7,0.1,1C1.9,12.2,0,15.1,0,18.4c0,4.8,3.9,8.7,8.7,8.7h19.4c4.1,0,7.5-3.4,7.5-7.5   C35.6,16.4,33.6,13.6,30.7,12.6z M16.5,22.3l-6.7-7.1h4.5V7.9h4.4v7.3h4.6L16.5,22.3z"
                }),
                width: 35.6,
                height: 27.1
            }, tt[Ye.Edit] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6.414,12.414L3.586,9.586l8-8l2.828,2.828L6.414,12.414z M4.829,14H2l0,0v-2.828l0.586-0.586l2.828,2.828L4.829,14z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Emoticons] = {
                path: u.createElement("path", {
                    d: "M6.714 5.143H5v1.714h1.714V5.143zM12 0H4L0 4v8l4 4h8l4-4V4l-4-4zM5 2L2 5v6l3 3h6l3-3V5l-3-3H5zm4.286 4.857H11V5.143H9.286v1.714zM6 12h4l2-2V9H4v1l2 2z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Extensions] = {
                path: u.createElement("path", {
                    fillRule: "evenodd",
                    d: "M16 3v4h-2l-1 1v1l1 1h2v6h-5v-2l-1-1H9l-1 1v2H3v-6H1L0 9V8l1-1h2V3h5V1l1-1h1l1 1v2"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Facebook] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.842 24v-6.842h2.653l.398-2.667h-3.05v-1.7c0-.772.246-1.298 1.525-1.298L20 11.49V9.105A25.285 25.285 0 0 0 17.623 9c-2.353 0-3.963 1.243-3.963 3.525v1.967H11v2.666h2.66V24h3.182",
                    fillRule: "evenodd"
                }),
                width: 32,
                height: 32
            }, tt[Ye.Featured] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M0 0h20v20"
                }), " ", u.createElement("path", {
                    fill: "#FFF",
                    d: "M15 5V2h-2v3h-3v2h3v3h2V7h3V5"
                })),
                width: 20,
                height: 20
            }, tt[Ye.Filter] = {
                path: u.createElement("path", {
                    d: "M1 4h6v3H1V4zm0 5h10v3H1V9zm0 5h16v3H1v-3zm10.5-9.914l3 3 3-3L18.914 5.5 14.5 9.914 10.086 5.5 11.5 4.086z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.FollowCheck] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6.5,12.75L2,8.25l2-2l2.5,2.5l5.5-5.5l2,2L6.5,12.75z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.FollowX] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M14,11.5L11.5,14L8,10.5L4.5,14L2,11.5L5.5,8L2,4.5L4.5,2L8,5.5L11.5,2L14,4.5L10.5,8L14,11.5z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Friends] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M12.64 0h5.2l1.04 2v4L16.8 8v1h3.12L22 10v2H11l1.64-1.563V9h1.04V8l-1.04-.984v-2.25l-1.038-1.954V2"
                }), u.createElement("path", {
                    d: "M4 3h6l1 2v5l-2 2v1h3l2 1v2H0v-2l2-1h3v-1l-2-2V5"
                })),
                width: 21,
                height: 16
            }, tt[Ye.FriendsSC] = {
                path: u.createElement("path", {
                    d: "M17.5 6L19 7.5V12l-2 1v1h3l1 1v1h-5.5v-2.5L13 11V7.5L14.5 6h3zM9 2l2 2v5l-3 2v1h4l2 2v2H0v-2l2-2h4v-1L3 9V4l2-2h4z",
                    fillRule: "evenodd"
                }),
                width: 21,
                height: 16
            }, tt[Ye.Gear] = {
                path: u.createElement("path", {
                    d: "M6.359 0h3.282l1.436 2.8h3.282L16 5.2 14.359 8 16 10.8l-1.641 2.4h-3.282L9.64 16H6.359l-1.436-2.8H1.641L0 10.8 1.641 8 0 5.2l1.641-2.4h3.282L6.36 0zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Global] = {
                path: u.createElement("path", {
                    d: "M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12zm1.619-1.8A4.5 4.5 0 0 1 6 5.646V7.5l2 2v1.081l2.619 2.619zm1.881-1.371c.625-.773 1-1.757 1-2.829a4.491 4.491 0 0 0-1.671-3.5H10.5L9.041 6.959 8.5 7.5v1H11l1.5 1.5v1.829z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphArrDown] = {
                path: u.createElement("path", {
                    d: "M3 5h10l-5 6"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphArrLeft] = {
                path: u.createElement("path", {
                    d: "M11 3v10L5 8"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphArrRight] = {
                path: u.createElement("path", {
                    d: "M5 13V3l6 5"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphArrUp] = {
                path: u.createElement("path", {
                    d: "M3 11h10L8 5"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphFollowers] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,13.5L1.5,7V4l2-2h3L8,3.5L9.5,2h3l2,2v3L8,13.5z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphLength] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,14c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S11.313,14,8,14z M8,3C5.238,3,3,5.238,3,8s2.238,5,5,5s5-2.238,5-5S10.762,3,8,3z M9.646,10.354l-2-2L7.515,7.879l1-4l0.971,0.242L8.554,7.847l1.8,1.8L9.646,10.354z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphLive] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11,14H5H2v-1l3-3h2L5,8V2h6v6l-2,2h2l3,3v1H11z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphLiveSmall] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11,14H5H2v-1l3-3h2L5,8V2h6v6l-2,2h2l3,3v1H11z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GlyphViews] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11,13H5L1,9V8V7l4-4h6l4,4v1v1L11,13z M8,5C6.344,5,5,6.343,5,8c0,1.656,1.344,3,3,3c1.657,0,3-1.344,3-3C11,6.343,9.657,5,8,5z M8,9C7.447,9,7,8.552,7,8s0.447-1,1-1s1,0.448,1,1S8.553,9,8,9z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.GridLayout] = {
                path: u.createElement("path", {
                    d: "M0.8,0h14.5v3.9H0.8V0z M0.8,5h8.9v3.4H0.8V5z M11.4,5h3.8v3.4h-3.8V5z M0.8,9.6h14.5V16H0.8V9.6z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Hash] = {
                path: u.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.714 12l.572-4h4l-.572 4h-4zM17 12h-3.286l.572-4H17c.553 0 1-.447 1-1 0-.553-.447-1-1-1h-2.43L15 3c0-.552-.447-1-1-1-.553 0-1 .448-1 1l-.43 3h-4L9 3c0-.552-.447-1-1-1-.553 0-1 .448-1 1l-.43 3H3c-.552 0-1 .447-1 1 0 .553.448 1 1 1h3.286l-.572 4H3c-.552 0-1 .447-1 1 0 .553.448 1 1 1h2.43L5 17c0 .553.448 1 1 1 .553 0 1-.447 1-1l.43-3h4L11 17c0 .553.447 1 1 1 .553 0 1-.447 1-1l.43-3H17c.553 0 1-.447 1-1 0-.553-.447-1-1-1z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Heart] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,14L1,7V4l2-2h3l2,2l2-2h3l2,2v3L8,14z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.HGCNexus] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M11,0L9.7,4.4c0,0,7.7-1.4,9.7,8.9c0,0.1,0,0.1,0,0.2c0.4-1.1,0.6-2.3,0.6-3.5C20.1,4.8,16.1,0.5,11,0z"
                }), u.createElement("path", {
                    d: "M2.5,16.5c-0.1,0-0.1,0-0.2-0.1C3.1,17.4,4,18.1,5,18.7c4.5,2.6,10.2,1.3,13.2-2.9l-3.1-3.3C15.1,12.6,12.5,19.9,2.5,16.5z"
                }), u.createElement("path", {
                    d: "M8.2,0.2c0.1,0,0.1-0.1,0.2-0.1C7.2,0.3,6.1,0.7,5,1.3C0.5,3.9-1.2,9.5,0.9,14.2l4.4-1.1C5.3,13.1,0.3,7.1,8.2,0.2z"
                })),
                width: 20,
                height: 20
            }, tt[Ye.Hide] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6,7.10240605 L2.65360907,10.448797 L2.10240605,11 L1,9.89759395 L1.55120302,9.34639093 L4.89759395,6 L1.55120302,2.65360907 L1,2.10240605 L2.10240605,1 L2.65360907,1.55120302 L6,4.89759395 L9.34639093,1.55120302 L9.89759395,1 L11,2.10240605 L10.448797,2.65360907 L7.10240605,6 L10.448797,9.34639093 L11,9.89759395 L9.89759395,11 L9.34639093,10.448797 L6,7.10240605 L6,7.10240605 Z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.HourGlass] = {
                path: u.createElement("path", {
                    d: "M4.79 8.37c-.058-.508-.43-.426-2.76-1.79C-.64 5.018.08 3.134.08 3.134H6v.002l4.98.007s.66 1.88-2.01 3.45c-2.383 1.4-2.76 1.26-2.814 1.806v.048c0 .97.095.574 2.668 2.398 2.572 1.825 2.158 4.023 2.158 4.023H-.03s-.586-2.204 1.987-4.035c2.572-1.83 2.83-1.406 2.83-2.378 0-.03 0-.06.002-.085zM0 15.933h11V17H0zM0 1h11v1.067H0z"
                }),
                width: 11,
                height: 18
            }, tt[Ye.Ignore] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M13,11.341V16l-3.722-3.102C8.863,12.959,8.438,13,8,13c-3.866,0-7-2.462-7-5.5C1,4.462,4.134,2,8,2s7,2.462,7,5.5C15,8.996,14.234,10.35,13,11.341z M11,7H5v1h6V7z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Link] = {
                path: u.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9 4h4l2 2v4l-2 2H9v-2h4V6H9V4zm-2 8H3l-2-2V6l2-2h4v2H3v4h4v2zM6 7h4v2H6V7z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Lock] = {
                path: u.createElement("path", {
                    d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, tt[Ye.LogoGlitch] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M21,9h-2v6h2V9z M5.568,3L4,7v17h5v3h3.886L16,24h5l6-6V3H5.568z M25,16l-4,4h-6l-3,3v-3H8V5h17V16z M16,9h-2v6h2V9z",
                    fillRule: "evenodd"
                }),
                width: 30,
                height: 30
            }, tt[Ye.LogoTwitch] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M88,5h-6V0h-9l-6,5h-5.5L59,7.5V5h-5V0H36v5H16l-5-5H0v22l5,5.25L14,32h6v-1.5l3,1.5h12l2-3l1,3h7v-3l3,3h8l0.5-3l2.5,3h10l3-3v3h4l3-3v3h7l7-6V10L88,5z M13,13H8v6h5v6H6l-4-4V2h6v5h5V13z M36,21.5L32.5,25H15V7h6v12h2V7h6v12h2V7h5V21.5z M44,25h-6V7h6V25z M44,5h-6V2h6V5z M57,13h-5v6h5v6h-7l-4-4V2h6v5h5V13z M72,13h-7v6h7v6h-9l-4-4V11l4-4h9V13z M91,25h-6V13h-5v12h-6V2h6v5h7l4,4V25z",
                    fillRule: "evenodd"
                }),
                width: 94,
                height: 32
            }, tt[Ye.LogoTwitchPrime] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M289.2 110.3c.8-.5 1.2-1.5 1.2-2.4 0-2.1-1.3-3.2-3.8-3.2-3.3 0-5.2 2-5.7 6 1.5.3 3 .4 4.5.4 1.3.1 2.6-.2 3.8-.8z"
                }), u.createElement("path", {
                    d: "M287.9 15H269V0h-33.1l-15.6 15H203l-8 9.3V15h-16V0h-59v15H48.5L32.9 0H0v69.4L15.6 85l26 15h22.5v-2.9l8.7 2.9h42l7.4-8.1 1 8.1h27.5l.6-8.1 6.7 5.4v48c-.1.9.6 1.7 1.5 1.7h15.2c.9-.1 1.7-.8 1.8-1.8l1.6-8.2h1.6c3.8 0 7.4-1.9 9.6-5 0 0-.8 2.699976-1.1 3.599976-.2.5 0 .700024.5.900024.133333.333333 5.266667.5 15.4.5 1 .2 1.9-.500024 2.1-1.400024L207.5 132s.7 2.699976.9 3.599976c.1.9.9 1.500024 1.8 1.400024H266c2.5 0 2.7-.799976 3.5-1.599976 2.7.8 5.2 1.399976 7.8 1.599976 16.9.9 23.7-6.6 24-9.9.1-.8 2.2-13.2.8-21.1-1-5.8-6.6-11.4-15.9-11.4L304 83.2v-52L287.9 15zM26 41v18h16v19H19.1L6.9 65.9v-59H26V22h16v19H26zm81.5 37H49V22h19v37h7V22h19v37h7V22h19v44l-12.5 12zm19.5 0V22h19v56h-19zm19-62h-19V6.9h19V16zm7 49.9v-59h19V22h16v19h-16v18h16v19h-23.2L153 65.9zm32.1 59.4c-1.6 1.1-3.6 1.7-5.6 1.7-1.4 0-2.7-.2-4-.7-1.2-.4-2.3-1-3.2-1.8v11.2c.1.6-.2 1.1-.8 1.3h-5.4c-.4 0-.7-.1-1-.3-.2-.3-.3-.6-.3-1v-34.1c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h3.7c.7-.1 1.3.4 1.4 1.1l.4 1.3c1.1-1 2.3-1.8 3.7-2.4 1.4-.6 2.9-.9 4.4-.9 3-.1 6 1.2 7.8 3.6 1.9 2.4 2.9 5.7 2.9 9.8 0 2.7-.4 5.2-1.4 7.6-.8 1.9-2.2 3.6-3.9 4.9zM206.3 22H236v19h-22v18h22v19h-29.7L195 65.9V34.7L206.3 22zm5.6 84.6c-.3.2-.6.4-1 .3h-2.3c-1 0-1.9.1-2.9.3-1 .2-1.9.5-2.9.8v17.1c0 .4-.1.7-.3 1-.3.2-.6.3-1 .3h-4.9c-.6.1-1.2-.3-1.3-.9v-24c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h3.7c.7-.1 1.3.4 1.4 1.1l.7 2.8c1.1-1.3 2.4-2.4 3.8-3.2 1.2-.6 2.5-.9 3.8-.9h.7c.4 0 .7.1 1 .3.2.3.4.6.3 1l.2 4.3c0 .4-.1.7-.3 1zm11 19.5c-.3.2-.6.4-1 .3H217c-.6.1-1.2-.3-1.3-.9v-24c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h4.9c.6-.1 1.1.2 1.3.8v24.1c0 .4-.1.7-.3 1zm-6.5-30.9c-1.6-1.6-1.6-4.2 0-5.8 1.8-1.4 4.4-1.4 6.2 0 1.6 1.6 1.6 4.1 0 5.8-1.8 1.4-4.4 1.4-6.2 0zm52.9 29.9c0 .4-.1.7-.3 1-.3.2-.6.3-1 .3h-4.9c-.6.1-1.2-.3-1.3-.9V108.7c0-2.3-1-3.5-3.1-3.5-1.9 0-3.8.5-5.6 1.3V125c0 .4-.1.7-.3 1-.3.2-.6.4-1 .3H247c-.6.1-1.2-.3-1.3-.9V108.6c0-2.3-1-3.5-3.1-3.5-2 0-3.9.5-5.6 1.4V125c0 .4-.1.7-.3 1-.3.2-.6.3-1 .3h-4.9c-.6.1-1.2-.3-1.3-.9v-24c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h3.7c.7-.1 1.3.4 1.4 1.1l.4 1.4c1.5-1 3.2-1.9 4.9-2.5 1.4-.5 2.9-.7 4.5-.7 3.1 0 5.2 1.1 6.5 3.3 1.5-1 3.2-1.9 4.9-2.5 1.5-.5 3.1-.8 4.8-.8 2-.1 4 .6 5.5 2 1.4 1.5 2.1 3.5 2 5.6v18l-.1.1zm17.8-25.6c3.2 0 5.6.8 7.4 2.3 1.8 1.5 2.8 3.8 2.7 6.1.1 2.3-1 4.5-2.9 5.8-1.9 1.3-4.8 2-8.5 2-1.7 0-3.4-.2-5.1-.6.2 2.3.9 3.9 2.1 4.9 1.6 1.1 3.4 1.6 5.3 1.5.9 0 1.9-.1 2.8-.2 1.3-.2 2.5-.5 3.8-.8l.3-.1h.3c.6 0 .9.4.9 1.2v2.4c0 .4 0 .8-.2 1.1-.2.3-.5.5-.9.6-2.5 1-5.2 1.4-7.9 1.4-4.2 0-7.5-1.2-9.7-3.5-2.3-2.3-3.4-5.6-3.4-10s1.2-7.9 3.5-10.4c2.2-2.4 5.4-3.7 9.5-3.7zM278 78V41h-16v37h-19V6.9h19V22h22.3L297 34.7V78h-19z"
                }), u.createElement("path", {
                    d: "M177.3 105.1c-1.8 0-3.5.5-5 1.4v13.4c1.5.9 3.2 1.4 5 1.4 1.6.1 3.2-.6 4.2-1.9.9-1.3 1.3-3.3 1.3-6.1s-.4-4.9-1.3-6.2c-.9-1.4-2.5-2.1-4.2-2z"
                })),
                width: 304,
                height: 147
            }, tt[Ye.LogoTwitchPrimeHorizontal] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M537 38c-2.5-4-7.3-8.5-16.6-8.5-9.4 0-23 8.3-24 9a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.6 12.4 12.4 0 0 0-2.6-3.5c-3-3-6.4-4.2-11.3-4.2-3.2 0-9.2 2.4-9.8 2.8a1.3 1.3 0 0 1-1.2 0c-2.5-1.8-9.8-2.8-13.8-2.8a25.3 25.3 0 0 0-9.8 2h-.2a1 1 0 0 1-1 0 6.5 6.5 0 0 0-4.3-1.7 17 17 0 0 0-5 .8 24.6 24.6 0 0 1-3.2.7l-4.4.4a1 1 0 0 1-1-.4 1 1 0 0 1 0-1 14.6 14.6 0 0 0 .6-2 11 11 0 0 0-2-11 12 12 0 0 0-9.3-4 17 17 0 0 0-9.5 3c-.8.4-2.3 1.4-4.2 2.8-5.4 3.8-13.5 9.4-17.5 11.3-1.3.6-1.7-.8-3.7-1s-5 1-7.4 1.4l-3.8.5a1 1 0 0 1-1.2-.8 17 17 0 0 0-2.8-6c-4.8-7-12.8-8.6-18.6-8.8l-12.8-.2c-8 0-19.2.5-19.2.5l-16 14-15.4-15.4h-18.8V0h-32.6l-15.4 15.4h-17L192 24v-8.6h-15.3V0h-58.2v15.4H48L32.6 0H0v68.5L15.4 84 41 99.2h22.4V96l8.6 3.3h41.5l7.4-8.6 1 8.6h27l.6-8.6 9.8 8.6h24l1.7-8.6 8.7 8.6H221l8.7-8.6v8.6H245l12-8.6v8.6h51.2c5-3 10.4-6.3 13.2-8.3a1 1 0 0 1 1.5.3 1 1 0 0 1 0 .8c-.5 3-2 7.3-2 7.3h25.7l5.8-4a1.2 1.2 0 0 1 1.5 0 .4.4 0 0 1 0 .4l1.5 3.6h89.2l6-4.2a2.5 2.5 0 0 1 .8-.3 2 2 0 0 1 .8.2 28.3 28.3 0 0 0 8.6 4.4h.2a27.3 27.3 0 0 0 7.5.8c4.5 0 30.4-9 39-12.4l6.7-2.6a107.5 107.5 0 0 0 16-8 4 4 0 0 0 2-4c0-1-.7-3-1.4-6.6v-.4a1 1 0 0 1 .6-1c2.2-1 5.2-3.2 7-8.3 2.3-7 1.8-13.5-1.6-19zM41.2 41H25.7v17.2H41V77H19L7 65V7h18.7v15.3H41l.2 18.8zm77 24l-12 12H48V22.4h18.8v36h7v-36h18.7v36h7v-36H118V65zM144 77h-19V22.4h18.8V77zm0-61.5h-19V7h18.8v8.5zm41 25.7h-15.4v17H185v19h-22.3l-12-12V6.8h18.8v15.3H185v19zm48 0h-22.3v17H233v19h-29l-12-12V34l12-12h29v19zm60 36h-19v-36h-15.3v36h-19V7h19v15.3H281l12 12v43zm113.5-49.5a9.7 9.7 0 0 1 4-5 10.8 10.8 0 0 1 6-1.8 5.8 5.8 0 0 1 4.6 1.6 4.3 4.3 0 0 1 .7 4.6c-1.5 4.6-4.8 6.8-10 6.8-2.2 0-3.7-.5-4.7-1.6s-1.2-2.7-.5-4.7zm-55.3 33a26.6 26.6 0 0 1-17.7 6.5c-1 0-2.8 0-5-.2s-4 0-5 0a3 3 0 0 0-3 2 53.3 53.3 0 0 0-1.6 5.7l-.7 2.6h-15.8l4-11c2-6.5 3.8-11 4.8-14 3-9 5.7-18.2 8.2-28l.2-.5a1 1 0 0 1 1-.4c2.2-.3 7-.4 14.5-.4 4 0 8 0 12.5.2 6.3.2 10.8 2.2 13.4 6s3 9 1 15.5a38.7 38.7 0 0 1-10.8 16zm36.5-8h-2.3A10.6 10.6 0 0 0 380 54q-2 1-3 4.7-.7 1.6-1.6 4.8l-.2.7-1.8 5.5a34.5 34.5 0 0 0-1 3.6l-1 3.5a1 1 0 0 1-.7.6h-13-.4V77l3.4-10 1.6-4.8L364 57c2.3-6.7 3.5-12.2 3.7-16.5a1 1 0 0 1 0-.5.8.8 0 0 1 .5-.4l7-1c4.2-.8 6.3-1 7-1.3a5.7 5.7 0 0 1-.3 1.8c-.5 1.8-.8 3.3.2 3.6a.8.8 0 0 0 .8-.2 35 35 0 0 1 4-2 19.2 19.2 0 0 1 8-2 3 3 0 0 1 1.4.2A35.4 35.4 0 0 1 395 42l-1.5 3.4-1 3.3-.4 1.4-.5 2a1.5 1.5 0 0 1-1.7 1 4 4 0 0 0-2-.2zm22.4 5.8l-2.8 9.2c-1.5 4.7-2.3 7.3-3 9a.6.6 0 0 1-.5.6h-13.4l.2-.8 3-8.8c1.4-3.6 2.6-6.8 3.2-8.8a188.2 188.2 0 0 0 5.5-19.2l.2-.8s0-.4.7-.4c1.2 0 2.4 0 3.5.2a21.7 21.7 0 0 0 3.6.2c1 0 2.2 0 4-.2l3.5-.2s0 .3-.3.6c-2.3 5.5-4.7 11.8-7 19.3zM489.8 47l-2.4 6.7c-1 3-2 5.2-2.4 6.7-.7 1.7-1.5 4.4-2.6 8l-2.5 8a1.6 1.6 0 0 1-1 1h-13a2 2 0 0 1 0-1 49.6 49.6 0 0 1 1.7-4.8l.4-1c1-2.6 1.8-4.6 2.2-6q2.5-7.4 3.3-10.4c.5-2 .5-3.5-.3-4.5a4.2 4.2 0 0 0-3.5-1.4A8.3 8.3 0 0 0 465 50a9 9 0 0 0-3.8 4l-3.6 10.5-1.8 6-1.8 6a1 1 0 0 1-1 1h-13a1.2 1.2 0 0 1 .2-1l2-5.8c1-2.2 1.8-4.5 2.3-6l1.3-4 .2-.8 1.5-4.8c1-2.6 1-4.4 0-5.6a3.4 3.4 0 0 0-3.2-1.3 10.4 10.4 0 0 0-4.8 1.5 8.3 8.3 0 0 0-3.8 3.6l-3.2 9.7-1.8 5.5c-1 3.3-2 5.8-2.5 7.7a3 3 0 0 1-.5 1 .8.8 0 0 1-.5 0H414a4 4 0 0 1 .3-.6l.3-.8 3.2-9.2.5-1.4 3-8.7a138 138 0 0 0 4.2-15.6v-.3a4.3 4.3 0 0 1 0-.5 1.2 1.2 0 0 1 .6-.5 19.7 19.7 0 0 1 3.6-.6c2.3 0 3.5-.2 4-.3l3.6-1a16 16 0 0 1 3-.5 11.8 11.8 0 0 1-.4 2c-1 2.7-.8 3-.6 3.5a.7.7 0 0 0 .6.3h.2a5.4 5.4 0 0 0 1.3-.7 63 63 0 0 1 7.2-4 18 18 0 0 1 7.2-1.5 10.3 10.3 0 0 1 6 1.6 5.2 5.2 0 0 1 2.2 4.8l-.2 1.8 1.3-1.2a25.7 25.7 0 0 1 7.7-5 20 20 0 0 1 8-2c3.5 0 6 .8 7.7 2.4 2 2 2.3 4.4 1.3 7.8zm42.7 8c-1 2.6-2 4-3.8 4.4l-9 1-15.2 1h-.6v.7a5 5 0 0 0 2.4 5 10.6 10.6 0 0 0 5.5 1.4 22 22 0 0 0 8.5-2l1-.5 2.4-1.3a14 14 0 0 1 1 3.5c.6 3 .6 4.2.5 4.5a4.6 4.6 0 0 1-.6.7C520 77 514 78.7 507 78.7c-6.4 0-11-2-13.6-5.5s-3-8.8-1-15.2a33 33 0 0 1 10.8-15.5 26.6 26.6 0 0 1 17-6.2c5.2 0 9 2 11.2 5.5s2.6 8 1 13.2z"
                }), u.createElement("path", {
                    fill: "#FFF",
                    d: "M515 45.3a8 8 0 0 0-5.4 2.4 11.8 11.8 0 0 0-3.4 5 1.6 1.6 0 0 0 .6 2 1 1 0 0 0 .8 0c3.3 0 6.7-.3 10-.7 1 0 2-.4 2.2-1a6 6 0 0 0-.3-5.3 5 5 0 0 0-4.4-2.4zM339.2 34.8c-7 0-7.6.7-8 1s-.5.6-3.6 10l-1.2 4-1.2 3.7a1 1 0 0 0 0 .8c.5.5 1.3 1 8 1 6.4 0 10.8-3.3 13-9.7 1.2-3.6 1.2-6.4 0-8.2s-3.6-2.6-7-2.6z"
                })),
                width: 539.99,
                height: 100.22
            }, tt[Ye.Maximize] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M2,14 L14,14 L14,2 L2,2 L2,14 Z M0,0 L16,0 L16,16 L0,16 L0,0 L0,0 L0,0 Z"
                }), u.createElement("path", {
                    d: "M3,3 L13,3 L13,5 L3,5 L3,3 Z"
                })),
                width: 16,
                height: 16
            }, tt[Ye.MessagesSC] = {
                path: u.createElement("path", {
                    d: "M4 12H1V0h14v12H8l-4 4z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Minimize] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M2,14 L14,14 L14,2 L2,2 L2,14 Z M0,0 L16,0 L16,16 L0,16 L0,0 L0,0 L0,0 Z"
                }), u.createElement("path", {
                    d: "M3,11 L13,11 L13,13 L3,13 L3,11 Z"
                })),
                width: 16,
                height: 16
            }, tt[Ye.More] = {
                path: u.createElement("path", {
                    d: "M7,3 L9,3 L9,5 L7,5 L7,3 Z M7,7 L9,7 L9,9 L7,9 L7,7 Z M7,11 L9,11 L9,13 L7,13 L7,11 Z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Muted] = {
                path: u.createElement("path", {
                    d: "M12.08 7.835l-2.02-2.04.904-.912 2.02 2.04 2.113-2.136L16 5.7l-2.114 2.135 2.02 2.04-.904.91-2.02-2.04-1.923 1.945-.904-.912 1.924-1.943zm-8.072 2.812L7.57 13V3L4.367 5.115V5.06H0v5.587h4.008z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.NavBackpack] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16,15H2l-1-1V8h16v6L16,15z M1,4l1-1h14l1,1v2H1V4z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavChannels] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,14l-4-4v4H1V4h10v4l4-4h2v10H15z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavCreative] = {
                path: u.createElement("path", {
                    d: "M15.7 13.4l.8 1.5 1.5.8-1.5.8-.8 1.5-.8-1.5-1.5-.8 1.5-.8.8-1.5zM14.5 0l1.2 2.2 2.3 1.3-2.3 1.2-1.2 2.3-1.2-2.3-2.2-1.2 2.2-1.3 1.2-2.2zM8 2l3 5 5 3-5 3-3 5-3-5-5-3 5-3z"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavDashboard] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,16V2h16v14H1z M5,4H3v1h2V4z M5,7H3v1h2V7z M5,10H3v1h2V10zM5,13H3v1h2V13z M9,7H7v7h2V7z M12,10h-2v4h2V10z M15,4h-2v10h2V4z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavDiscover] = {
                path: u.createElement("path", {
                    d: "M4.7 13.29l-1.49-.32-1.74 3.55 3.54-1.74-.31-1.49M12.9 10.55l4.36-4.36L18 0l-6.19.74L7.45 5.1 3.36 4 0 7.36l4.41 1.19v3.23l1.82 1.82h3.22l1.19 4.4L14 14.64zM12.47 7L11 5.53l1.48-1.48 1.48 1.48z"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavFollowing] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,8V4l2-2h4l2,2l2-2h4l2,2v4l-8,8L1,8z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavGames] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M9,8.293l-3-3V1h6v4.293L9,8.293z M5.293,12H1V6h4.293l3,3L5.293,12z M9,9.707l3,3V17H6v-4.293L9,9.707z M12.707,6H17v6h-4.293l-3-3L12.707,6z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavLogout] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16,9l-6,6v-4H6V7h4V3L16,9z M4,13h4v2H2v-2V5V3h6v2H4V13z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavManager] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M17,3v11h-2h-4H8.707l-0.5-0.5h-1L7.5,13.207v-1.809l5.583-2.401L7.027,6.399V8.5H2.5v4.707L2.793,13.5h-1l-0.5,0.5H1V3h10\n\th4H17z M7,14H6l1-1V9H6H4H3v4l1,1H3H2l-1,1v2h8v-2l-1-1H7z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavMessages] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,15V3h16v12H1z M15.354,5.354l-0.707-0.707L9,10.293L3.354,4.646L2.646,5.354L6.293,9l-3.646,3.646l0.707,0.707L7,9.707l1.646,1.646h0.707L11,9.707l3.646,3.646l0.707-0.707L11.707,9L15.354,5.354z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavMore] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M13,11V7h4v4H13z M7,7h4v4H7V7z M1,7h4v4H1V7z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavMyChannel] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,14l-4-4v4H8.707l-0.5-0.5h-1L7.5,13.207V8.5h-5v4.707L2.793,13.5h-1l-0.5,0.5H1V4h10v4l4-4h2v10H15z M3,14h1l-1-1V9h1h2h1v4l-1,1h1h1l1,1v2H1v-2l1-1H3z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavProfile] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M2,16v-1l3-3h3L5,9V2h8v7l-3,3h3l3,3v1H2z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavSearch] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.707,15.293l-1.414,1.414l-4.825-4.825C9.487,12.58,8.295,13,7,13c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6c0,1.295-0.42,2.487-1.118,3.468L16.707,15.293z M7,3C4.791,3,3,4.791,3,7s1.791,4,4,4s4-1.791,4-4S9.209,3,7,3z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavSettings] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15.03,5.091v4.878l-2,2H8.151l-3.061,3.061L2.97,12.908l3.061-3.06V4.97l2-2h4.879L8.97,6.909l2.121,2.121L15.03,5.091z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.NavVideos] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,2v14h16V2H1z M6,12V6l7,3L6,12z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.Neck] = {
                path: u.createElement("path", {
                    d: "M9.305 1.877C9.689.84 10.887 0 12 0h6c1.105 0 2.31.838 2.695 1.877L30 27H0L9.305 1.877z",
                    fillRule: "evenodd"
                }),
                width: 35,
                height: 25
            }, tt[Ye.NotificationBell] = {
                path: u.createElement("path", {
                    d: "M10 18c1.104 0 2-.896 2-2H8c0 1.104.896 2 2 2m7-4.8v-.8c0-.213.01-.236-.228-.566L15.445 10V7.6C15.445 4.563 12.95 2 10 2S4.556 4.564 4.556 7.6V10l-1.328 1.834c-.24.33-.228.353-.228.566v1.2c0 .22.174.4.39.4h13.22c.214 0 .388-.18.388-.4v-.4z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.OP] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,7L1,16l4.666-7H1l14-9l-4.667,7H15z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.PermissionsAdd] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M17 10h-3v1.9938965L12.9101562 13H17v3l6-4.5L17 7"
                }), " ", u.createElement("path", {
                    d: "M1 19v-1l3-3h3l-3-3V5h8v7l-3 3h3l3 3v1"
                })),
                width: 24,
                height: 24
            }, tt[Ye.PermissionsAdded] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M1 19v-1l3-3h3l-3-3V5h8v7l-3 3h3l3 3v1"
                }), " ", u.createElement("path", {
                    d: "M21.3558345 8L23 9.61769336 16.5132525 16 13 12.5433131l1.6441655-1.6176933 1.869087 1.8389935"
                })),
                width: 24,
                height: 24
            }, tt[Ye.PermissionsRemove] = {
                path: u.createElement("g", null, u.createElement("path", {
                    d: "M1 19v-1l3-3h3l-3-3V5h8v7l-3 3h3l3 3v1"
                }), " ", u.createElement("path", {
                    d: "M18.01339 10.3400907l-2.3700453-2.3700453-1.6238705 1.62387052 2.3700453 2.3700453-2.3700453 2.3700453 1.6238705 1.6238705 2.3700453-2.3700453 2.37004522 2.37004523 1.62387052-1.6238705-2.37004523-2.37004524 2.37004526-2.37004523-1.6238705-1.6238705"
                })),
                width: 24,
                height: 24
            }, tt[Ye.Pin] = {
                path: u.createElement("path", {
                    d: "M4.154 15.926l3.68-4.313 1.56 1.556-4.314 3.68c-.12.093-.272.15-.428.142-.255 0-.486-.15-.593-.383-.11-.23-.07-.504.09-.7v.01zm9.508-.57l-1.28-1.282-6.723-6.73h4.06l2.37-3.902c.13-.214.33-.374.58-.423.16-.04.33-.03.48.03l.153.054 4.576 4.582.057.15c.15.403-.01.855-.368 1.063l-3.914 2.38v4.07zm-.288-11.14c0 .003-.002.004-.003.006l.01-.005zm3.436 3.4l-.023.015.023-.01zm-6.245 1.227H9.277l2.885 2.89v-1.286l.36-.22.36-.22 3.232-1.966-3.148-3.15-2.4 3.96z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Pinned] = {
                path: u.createElement("path", {
                    d: "M4.154 15.926l3.68-4.313 1.56 1.556-4.314 3.68c-.12.098-.272.15-.428.147-.255 0-.486-.15-.593-.383-.11-.232-.07-.504.092-.7v.008zm9.508-.57l-1.28-1.282-6.723-6.73h4.06l2.37-3.902c.13-.214.33-.374.58-.423.16-.037.33-.025.482.032l.156.057 4.576 4.582.057.152c.15.402-.01.854-.367 1.062l-3.913 2.38v4.068z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Play] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M5,0l20,15L5,30V0z",
                    fillRule: "evenodd"
                }),
                width: 30,
                height: 30
            }, tt[Ye.Playlist] = {
                path: u.createElement("path", {
                    d: "M10 5L0 10V0",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.QuestionMark] = {
                path: u.createElement("path", {
                    d: "M3 4l3-3h12l3 3v8l-3 3h-4v2H9v-4l3-3h4V6H8v4H3V4zm6 15h5v4H9v-4z",
                    fillRule: "evenodd"
                }),
                width: 24,
                height: 24
            }, tt[Ye.MiniPlayerExpand] = {
                path: u.createElement("path", {
                    d: "M4 10V2h14v11h-4v-2h2V4H6v4H4v2h8v8H2v-8h2zm11-1l-1.143-1.143L12.714 9 11 7.286l1.143-1.143L11 5h4v4z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.MiniPlayerPause] = {
                path: u.createElement("path", {
                    d: "M4 17h4V3H4v14zm8-14v14h4V3h-4z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.MiniPlayerPlay] = {
                path: u.createElement("path", {
                    d: "M4 2l12 8-12 8"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Plus] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,9H9v6H7V9H1V7h6V1h2v6h6V9z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Popout] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M12.707,4.707l-4,4L7.293,7.293l4-4L9,1h6v6L12.707,4.707z M4,12h7V9h2v5H2V3h5v2H4V12z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Reddit] = {
                path: u.createElement("path", {
                    d: "M21.998 8.692c.545 0 .988.447.988.994a.992.992 0 0 1-.987.995.99.99 0 0 1-.988-.994c0-.547.442-.994.987-.994h-.002zm-.5 5.16c-1.38-.896-3.162-1.42-5.07-1.495l1.047-3.335 2.85.675c.003.923.75 1.67 1.674 1.676a1.683 1.683 0 0 0 1.673-1.687A1.683 1.683 0 0 0 22 8c-.688 0-1.28.42-1.538 1.018l-3.14-.744a.342.342 0 0 0-.405.233L15.71 12.35c-2.006.037-3.888.566-5.33 1.5a2.014 2.014 0 0 0-1.346-.517A2.042 2.042 0 0 0 7 15.38c0 .72.376 1.386.992 1.757-.03.19-.045.386-.045.58 0 1.465.85 2.83 2.396 3.845a8.483 8.483 0 0 0 1.62.822c2.51.964 6.692.602 7.952 0 1.26-.6 1.128-.498 1.62-.822 1.545-1.015 2.396-2.38 2.396-3.844 0-.195-.014-.39-.044-.58a2.05 2.05 0 0 0-1.04-3.806c-.5 0-.98.185-1.348.52zm-5.56 7.326c1.333 0 2.284-.294 2.887-.9a.348.348 0 0 0 0-.49.342.342 0 0 0-.486 0c-.47.47-1.26.698-2.4.698-1.142 0-1.933-.23-2.4-.698a.342.342 0 0 0-.487 0 .347.347 0 0 0 0 .49c.603.606 1.553.9 2.886.9zm2.695-5.688a1.245 1.245 0 0 0-1.238 1.248c0 .686.555 1.246 1.238 1.246a1.245 1.245 0 0 0 1.24-1.247c0-.687-.557-1.246-1.24-1.246zm-5.39 0c-.682 0-1.237.56-1.237 1.248 0 .686.555 1.245 1.238 1.245.682 0 1.237-.56 1.237-1.245 0-.688-.554-1.247-1.236-1.247z",
                    fillRule: "evenodd"
                }),
                width: 32,
                height: 32
            }, tt[Ye.RemoveTag] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M4.10271979,3.43815904 L1.66456075,1 L1,1.66456075 L3.43815904,4.10271979 L1,6.54087884 L1.66456075,7.20543958 L4.10271979,4.76728054 L6.54087884,7.20543958 L7.20543958,6.54087884 L4.76728054,4.10271979 L7.20543958,1.66456075 L6.54087884,1 L4.10271979,3.43815904 Z",
                    strokeWidth: "0.4",
                    fillRule: "evenodd"
                }),
                width: 8,
                height: 8
            }, tt[Ye.RequestsSC] = {
                path: u.createElement("path", {
                    d: "M11 3L9 1H5L3 3v5l3 2v1H2l-2 2v2h14v-2l-2-2H8v-1l3-2V6H8V3h3zm1 1H9v1h3v3h1V5h3V4h-3V1h-1v3z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Roman1] = {
                path: u.createElement("path", {
                    d: "M8 17h4V3H8"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Roman2] = {
                path: u.createElement("path", {
                    d: "M4 17V3h4v14H4zm8 0V3h4v14h-4z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Roman3] = {
                path: u.createElement("path", {
                    d: "M2 17h4V3H2v14zm6 0h4V3H8v14zm6 0h4V3h-4v14z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Roman4] = {
                path: u.createElement("path", {
                    d: "M1 17h4V3H1v14zm10 0h4l4-14h-4l-2 10-2-10H7l4 14z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Roman5] = {
                path: u.createElement("path", {
                    d: "M8 17h4l6-14h-4l-4 10L6 3H2"
                }),
                width: 20,
                height: 20
            }, tt[Ye.RoomList] = {
                path: u.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.2 2.527c-.13-.165-.2-.366-.2-.572C9 1.427 9.447 1 10 1h8c.217 0 .427.067.6.19.442.317.53.916.2 1.337l-4 5.09c-.057.074-.124.138-.2.192-.442.313-1.07.23-1.4-.194l-4-5.09zM2 17h11c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1zm0-5h11c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1zm0-5h7c.553 0 1 .448 1 1s-.447 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1zm0-5h3c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.RoomListOpen] = {
                path: u.createElement("path", {
                    fillRule: "evenodd",
                    d: "M13.2 12.382c.33-.422.958-.507 1.4-.19.076.053.143.118.2.19l4 5.09c.33.423.242 1.02-.2 1.338-.173.123-.383.19-.6.19h-8c-.553 0-1-.428-1-.954 0-.207.07-.408.2-.573l4-5.09zM2 3c-.552 0-1-.448-1-1s.448-1 1-1h11c.552 0 1 .448 1 1s-.448 1-1 1H2zm0 5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h11c.552 0 1 .447 1 1 0 .553-.448 1-1 1H2zm0 5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h7c.553 0 1 .447 1 1 0 .553-.447 1-1 1H2zm0 5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h3c.552 0 1 .447 1 1 0 .553-.448 1-1 1H2z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.SearchNoResults] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M44.7314176,41.7572363 L37.4713285,48 L26.8572017,35.3514358 L19.8203892,37.5166089 L8.56540656,33.764948 L2,24.3857958 L2,13.1308131 L8.56540656,3.75166089 L19.8203892,0 L32.0132871,3.75166089 L38.2660553,12.8181747 L38.2660553,24.6984342 L34.7250756,29.8328548 L44.7314176,41.7572363 Z M25.8441673,26.223711 L20.1169645,28.1374567 L20.0888962,28.1374567 L14.3616933,26.223711 L11.0126384,21.4393468 L11.0126384,15.6981098 L14.3616933,10.9137457 L20.0888962,9 L20.1176024,9 L25.8448053,10.9137457 L29.5121799,15.6981098 L29.5121799,21.4393468 L25.8441673,26.223711 L25.8441673,26.223711 Z",
                    fillRule: "evenodd"
                }),
                width: 46,
                height: 48
            }, tt[Ye.Share] = {
                path: u.createElement("path", {
                    d: "M5 4v2H3v8h10V6h-2V4h4v12H1V4h4zm2-1H5l3-3 3 3H9v6H7V3z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Shirt] = {
                path: u.createElement("polygon", {
                    points: "7.9,5 5.3,0.9 0.4,3.8 2.2,7.6 4.4,7 4.4,15.1 11.6,15.1 11.6,7 13.8,7.6 15.6,3.8 10.9,0.9 "
                }),
                width: 16,
                height: 16
            }, tt[Ye.Star] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,6l-4.041,2.694L13,14l-5-3.333L3,14l2.041-5.306L1,6h5.077L8,1l1.924,5H15z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Steam] = {
                path: u.createElement("path", {
                    d: "M10,0C4.7,0,0.4,4.1,0,9.2l5.4,2.2c0.5-0.3,1-0.5,1.6-0.5c0.1,0,0.1,0,0.2,0l2.4-3.5V7.4c0-2.1,1.7-3.8,3.8-3.8 s3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8h-0.1l-3.4,2.4c0,0,0,0.1,0,0.1c0,1.6-1.3,2.8-2.8,2.8c-1.4,0-2.5-1-2.8-2.3l-3.8-1.6 C1.5,17,5.4,20,10,20c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M15.8,7.4c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 c0,1.4,1.1,2.5,2.5,2.5S15.8,8.8,15.8,7.4L15.8,7.4z M11.4,7.4c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9 C12.2,9.3,11.4,8.5,11.4,7.4L11.4,7.4z M6.3,15.2l-1.2-0.5c0.2,0.5,0.6,0.8,1.1,1c1.1,0.5,2.3-0.1,2.8-1.1c0.2-0.5,0.2-1.1,0-1.6 c-0.2-0.5-0.6-0.9-1.2-1.2c-0.5-0.2-1.1-0.2-1.6,0l1.3,0.5c0.8,0.3,1.2,1.2,0.8,2.1C8,15.2,7.1,15.5,6.3,15.2L6.3,15.2z"
                }),
                width: 20,
                height: 21
            }, tt[Ye.Sword] = {
                path: u.createElement("path", {
                    d: "M8.378 11.879L10 13.5l-2 .563L6.921 13h-.857l-.338.338.532.531L4 16l-1-1-1-1 2.131-2.258.531.531.338-.337v-.828L3.875 10 4.5 8l1.622 1.621L12.812 2H16v3.188z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.Team] = {
                path: u.createElement("path", {
                    d: "M15.5,0 L14,0 L14,5 L15.65,7.2 L14,16 L2,16 L0.35,7.2 L2,5 L2,0 L0.5,0 L15.5,0 Z M4,0 L8,3 L12,0 L4,0 Z M6,6 L6,7 L10,7 L9,6 L6,6 Z M9,7 L9,8 L10,8 L10,7 L9,7 Z M7,8 L7,9 L10,9 L10,8 L7,8 Z M9,9 L9,10 L10,10 L10,9 L9,9 Z M6,10 L6,11 L9,11 L10,10 L6,10 Z"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Theater] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,13h9V3H1V13z M11,3v10h4V3H11z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Timeout] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,15c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S11.866,15,8,15z M8,3C5.238,3,3,5.238,3,8s2.238,5,5,5s5-2.238,5-5S10.762,3,8,3z M7.293,8.707L7,8l1-4l0.902,3.607L11,11L7.293,8.707z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Timer] = {
                path: u.createElement("path", {
                    d: "M12.988 5.057C17.488 5.55 21 9.37 21 14c0 4.963-4.038 9-9 9s-9-4.037-9-9c0-4.63 3.513-8.45 8.012-8.943C11.01 5.037 11 5.02 11 5V3h-1c-.552 0-1-.447-1-1 0-.553.448-1 1-1h4c.552 0 1 .447 1 1 0 .553-.448 1-1 1h-1v2c0 .02-.01.037-.012.057zM12 21c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-12c.552 0 1 .447 1 1v4c0 .553-.448 1-1 1s-1-.447-1-1v-4c0-.553.448-1 1-1z"
                }),
                width: 24,
                height: 24
            }, tt[Ye.ToBottom] = {
                path: u.createElement("path", {
                    d: "M16 18H4a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2zm-1.04-8.41a1 1 0 0 1-.216 1.09l-4.025 4.046a1.003 1.003 0 0 1-1.414 0L5.279 10.68a1 1 0 0 1 .707-1.707h2.019V3a1 1 0 0 1 1-1h1.994a1 1 0 0 1 1 1v5.973h2.038a1 1 0 0 1 .924.617z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.ToTop] = {
                path: u.createElement("path", {
                    d: "M16 4H4a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2zm-1.04 6.429a1 1 0 0 1-.923.617h-2.038v5.973a1 1 0 0 1-1 1H9.005a1 1 0 0 1-1-1v-5.973h-2.02a1 1 0 0 1-.706-1.707l4.026-4.046a1 1 0 0 1 1.414 0l4.025 4.046a1 1 0 0 1 .217 1.09z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Trash] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M10,14.999H6H3v-11h3h4h3v11H10z M6,5.999v7h1v-7H6z M10,5.999H9v7h1V5.999zM3,1.999h4v-1h2v1h4v1H3V1.999z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Trophy] = {
                path: u.createElement("path", {
                    d: "M3.71 2.464C3.7 1.614 3.69 1 3.69 1h10.58l.012 1.464h3.688s.367 2.984-1.465 5.126c-.923 1.33-2.1 1.994-2.866 2.308-.708 1.486-1.918 2.596-3.36 3.008v2.007h1.832v2.196H5.888v-2.197h1.83V12.89c-1.404-.425-2.584-1.512-3.282-2.962-.763-.3-1.988-.965-2.94-2.338C-.338 5.448.03 2.464.03 2.464h3.68zm.014 1.1c.014 1.186.027 2.507.027 3.3 0 .487.05.96.14 1.417-.524-.29-1.174-.75-1.663-1.422-1.258-1.49-1.1-3.295-1.1-3.295h2.597zm10.567 0c.01 1.182.02 2.5.02 3.3 0 .473-.046.935-.132 1.38.51-.294 1.127-.744 1.595-1.386 1.258-1.49 1.1-3.295 1.1-3.295H14.29z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, tt[Ye.Twitter] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M23.966 11.533c-.55.26-1.142.436-1.763.515a3.252 3.252 0 0 0 1.35-1.81c-.6.38-1.26.65-1.95.794A2.983 2.983 0 0 0 19.363 10c-1.697 0-3.07 1.464-3.07 3.27 0 .256.025.505.078.745-2.55-.136-4.814-1.438-6.33-3.417a3.417 3.417 0 0 0-.414 1.644c0 1.134.543 2.135 1.366 2.722a2.918 2.918 0 0 1-1.39-.41v.042c0 1.584 1.057 2.906 2.463 3.206-.452.13-.928.15-1.388.056.392 1.3 1.526 2.245 2.87 2.27A5.917 5.917 0 0 1 9 21.483a8.31 8.31 0 0 0 4.707 1.47c5.648 0 8.736-4.982 8.736-9.304 0-.14-.003-.283-.008-.422a6.48 6.48 0 0 0 1.53-1.693",
                    fillRule: "evenodd"
                }),
                width: 32,
                height: 32
            }, tt[Ye.Unheart] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,9V7h14v2H1z M1,4l2-2h3l2,2l2-2h3l2,2v2H1V4z M8,14l-4.667-4h9.333L8,14z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Unignore] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M13,11.341V16l-3.722-3.102C8.863,12.959,8.438,13,8,13c-3.866,0-7-2.462-7-5.5C1,4.462,4.134,2,8,2s7,2.462,7,5.5C15,8.996,14.234,10.35,13,11.341z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Unlock] = {
                path: u.createElement("path", {
                    fillRule: "evenodd",
                    d: "M15.243 9.002h-6.46l-.6-1.8c-.452-1.36-.16-2.686 1.085-3.1 1.245-.416 2.275.47 2.728 1.83l.128.383-.008.003c.175.525.74.808 1.265.634.524-.175.805-.734.636-1.256v-.01.002l-.13-.385c-.8-2.405-2.957-3.862-5.247-3.1-2.29.764-3.143 3.222-2.34 5.627L6.687 9l-1.936.003c-.414 0-.75.357-.75.8V17.2c0 .44.336.8.75.8h10.493c.414 0 .75-.36.75-.8V9.8c0-.442-.336-.8-.75-.8"
                }),
                width: 20,
                height: 20
            }, tt[Ye.Upload] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M84.9630996 35.0930707c1.1070111-1.9372694 1.6605166-4.1512915 1.6605166-6.6420664 0-8.302583-6.6420664-14.9446495-14.9446494-14.9446495-2.7675277 0-5.5350554.8302583-7.7490775 2.2140222C59.7785978 6.58753565 50.3690037.222222 39.5756458.222222c-14.9446495 0-26.8450185 12.1771218-26.8450185 27.1217712 0 .8302583 0 1.9372694.2767528 2.7675277C5.25830258 33.9860596 0 42.0118899 0 51.1447312 0 64.4288641 10.7933579 75.222222 24.0774908 75.222222h53.6900369c11.3468634 0 20.7564575-9.4095941 20.7564575-20.7564576 0-8.8560885-5.5350553-16.605166-13.5608856-19.3726937zM45.9409594 22.0856906l18.5424354 19.6494465H52.0295203v20.2029521H39.8523985V41.7351371H27.1217712l18.8191882-19.6494465z",
                    fillRule: "evenodd"
                }),
                width: 99,
                height: 76
            }, tt[Ye.VKontakte] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.98 21.362s.362-.04.546-.238c.17-.183.165-.525.165-.525s-.023-1.605.722-1.842c.734-.233 1.676 1.55 2.675 2.236.755.52 1.33.405 1.33.405l2.67-.038s1.397-.086.735-1.185c-.055-.09-.386-.812-1.986-2.297-1.675-1.555-1.45-1.303.567-3.992 1.228-1.638 1.72-2.637 1.566-3.065-.147-.408-1.05-.3-1.05-.3l-3.008.018s-.223-.03-.388.07c-.162.096-.266.322-.266.322s-.476 1.267-1.11 2.345c-1.34 2.274-1.875 2.394-2.094 2.253-.51-.33-.382-1.322-.382-2.028 0-2.203.334-3.122-.65-3.36-.328-.08-.57-.13-1.405-.14-1.073-.01-1.98.004-2.495.256-.342.167-.606.54-.445.562.2.027.65.122.887.446.31.42.298 1.36.298 1.36s.177 2.595-.414 2.917c-.405.22-.96-.23-2.155-2.293-.612-1.057-1.074-2.225-1.074-2.225s-.09-.218-.248-.335c-.193-.14-.462-.186-.462-.186l-2.858.018s-.43.012-.587.2c-.14.165-.01.508-.01.508s2.236 5.234 4.77 7.872c2.323 2.42 4.96 2.26 4.96 2.26h1.196z"
                }),
                width: 32,
                height: 32
            }, tt[Ye.Verified] = {
                path: u.createElement("path", {
                    d: "M2.636 2.636L9 0l6.365 2.636L18 9l-2.635 6.365L9 18l-6.364-2.635L0 9l2.636-6.364zM7.38 13.11l6.097-6.42-1.45-1.378-4.726 4.98-1.613-1.52-1.37 1.458 3.065 2.88z"
                }),
                width: 18,
                height: 18
            }, tt[Ye.VideoPremiere] = {
                path: u.createElement("path", {
                    d: "M10 1c4.9 0 9 4.1 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm0 1.8c-3.9 0-7.2 3.3-7.2 7.2 0 3.9 3.3 7.2 7.2 7.2 3.9 0 7.2-3.3 7.2-7.2 0-3.9-3.3-7.2-7.2-7.2zm3.668 7.737l-4.8 3.4C8.784 13.98 8.69 14 8.6 14c-.11 0-.22-.03-.316-.09-.177-.107-.284-.3-.284-.51V6.6c0-.208.107-.4.284-.51C8.38 6.03 8.49 6 8.6 6c.09 0 .184.02.268.063l4.8 3.4c.204.102.332.31.332.537 0 .227-.128.435-.332.537z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.VideoRerun] = {
                path: u.createElement("path", {
                    d: "M17.953 4.797c-.004-.404-.25-.766-.626-.917-.12-.05-.247-.073-.373-.073-.264 0-.522.104-.713.3l-1.49 1.526c-.725-.937-1.677-1.684-2.795-2.167-1.745-.754-3.68-.783-5.45-.084-1.766.702-3.154 2.048-3.91 3.795-.753 1.744-.783 3.68-.083 5.446.7 1.767 2.048 3.156 3.794 3.91 1.745.756 3.68.785 5.447.084.563-.222.838-.858.615-1.42-.22-.564-.856-.838-1.42-.615-1.224.485-2.563.464-3.77-.058-1.21-.522-2.143-1.484-2.63-2.707-.483-1.225-.462-2.562.06-3.772.523-1.21 1.484-2.14 2.707-2.626 1.225-.49 2.563-.47 3.773.05.867.375 1.585.983 2.104 1.745L11.3 9.142c-.283.288-.364.718-.206 1.09.155.37.517.608.92.608h.01l4.993-.046c.552-.006.995-.457.99-1.01L17.96 4.79z"
                }),
                width: 20,
                height: 20
            }, tt[Ye.ViewerList] = {
                path: u.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6,12.999v-2h8v2H6z M6,6.999h8v2H6V6.999z M6,2.999h8v2H6V2.999z M2,10.999h2v2H2V10.999z M2,6.999h2v2H2V6.999z M2,2.999h2v2H2V2.999z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, tt[Ye.Warning] = {
                path: u.createElement("path", {
                    d: "M6.4,9.5h1.2v1H6.4V9.5z M6.4,5h1.2v4H6.4V5z M0,12h14c0,0-6.7-10-7-10C6.6,2,0,12,0,12z"
                }),
                width: 14,
                height: 14
            }, tt[Ye.WhisperMuted] = {
                path: u.createElement("path", {
                    d: "M14 4.308l-.08-.082-2.02.007.002-1.563-.665-.67h-2.23l-.66.67v1.556h-1.8L4.78 6.012v7.13L3 14.077V15L14 4.308zm1.336 4.226v4.685l1.664.89V16H8l7.336-7.466zM8 16h4v1.405l-1 .562L9.022 18 8 17.405V16zm8-12l1 1L4 18l-1-1"
                }),
                width: 20,
                height: 20
            }, tt),
            it = function(e) {
                var t = {};
                return e.type ? t[$e[e.type]] = !0 : t[$e[Ge.Inherit]] = !0, u.createElement("figure", l.__assign({
                    className: "tw-svg"
                }, r(e)), u.createElement("svg", {
                    className: c("tw-svg__asset", "tw-svg__asset--" + Ye[e.asset].toLowerCase(), t),
                    width: e.fill ? "100%" : (e.width || 16) + "px",
                    height: e.fill ? "100%" : (e.height || 16) + "px",
                    version: "1.1",
                    viewBox: "0 0 " + rt[e.asset].width + " " + rt[e.asset].height,
                    x: "0px",
                    y: "0px"
                }, rt[e.asset].path))
            };
        n(199);
        ! function(e) {
            e[e.Notification = 1] = "Notification", e[e.Alt = 2] = "Alt", e[e.Alt2 = 3] = "Alt2", e[e.Brand = 4] = "Brand", e[e.Live = 5] = "Live", e[e.Alert = 6] = "Alert", e[e.Success = 7] = "Success", e[e.Prime = 8] = "Prime", e[e.Dashboard = 9] = "Dashboard"
        }(nt || (nt = {}));
        var ot, at, st = (ot = {}, ot[nt.Notification] = "tw-badge--notification", ot[nt.Alt] = "tw-badge--alt", ot[nt.Alt2] = "tw-badge--alt-2", ot[nt.Brand] = "tw-badge--brand", ot[nt.Live] = "tw-badge--live", ot[nt.Alert] = "tw-badge--alert", ot[nt.Success] = "tw-badge--success", ot[nt.Prime] = "tw-badge--prime", ot[nt.Dashboard] = "tw-badge--dashboard", ot),
            lt = function(e) {
                var t = {
                    "tw-badge": !0
                };
                e.type && (t[st[e.type]] = !0);
                var n = {
                    width: e.size,
                    height: e.size
                };
                e.size && e.size;
                var i = u.createElement(K, l.__assign({
                    display: m.InlineFlex,
                    justifyContent: _.Center,
                    alignItems: d.Center,
                    className: c(t)
                }, r(e)), u.createElement("div", {
                    style: n
                }, u.createElement(Z, {
                    className: "tw-badge__icon",
                    display: m.Flex,
                    justifyContent: _.Center,
                    alignItems: d.Center
                }, u.createElement(it, {
                    asset: e.icon,
                    fill: !0
                }))));
                return e.border ? u.createElement(Z, {
                    className: "tw-badge__container",
                    display: m.InlineFlex,
                    position: C.Relative
                }, i) : i
            },
            ct = n(12),
            ut = new Set(["imageAlt", "imageSrc", "onImageError", "onImageLoad"]),
            dt = function(e) {
                var t, n, i;
                return e.row && (t = d.Center), e.elevation && (n = e.elevation), e.background === Pe.Overlay && (i = ve.Overlay), u.createElement(Z, l.__assign({
                    className: "tw-card",
                    position: C.Relative
                }, r(e)), u.createElement(Je, {
                    display: m.Flex,
                    flexDirection: e.row ? v.Row : v.Column,
                    alignItems: t,
                    elevation: n,
                    background: e.background,
                    color: i,
                    border: e.border,
                    flexWrap: b.NoWrap
                }, e.children))
            },
            ht = function(e) {
                return u.createElement(Z, l.__assign({
                    className: "tw-card-body",
                    position: C.Relative
                }, r(e)), e.children)
            };
        n(200);
        ! function(e) {
            e[e.Default = 1] = "Default", e[e.Size2 = 2] = "Size2", e[e.Size3 = 3] = "Size3", e[e.Size4 = 4] = "Size4", e[e.Size6 = 5] = "Size6", e[e.Size8 = 6] = "Size8", e[e.Size16 = 7] = "Size16", e[e.Size24 = 8] = "Size24", e[e.Size32 = 9] = "Size32"
        }(at || (at = {}));
        var pt, gt, mt = (pt = {}, pt[at.Size2] = "tw-card-img--size-2", pt[at.Size3] = "tw-card-img--size-3", pt[at.Size4] = "tw-card-img--size-4", pt[at.Size6] = "tw-card-img--size-6", pt[at.Size8] = "tw-card-img--size-8", pt[at.Size16] = "tw-card-img--size-16", pt[at.Size24] = "tw-card-img--size-24", pt[at.Size32] = "tw-card-img--size-32", pt),
            ft = function(e) {
                var t = {
                    "tw-card-img": !0
                };
                return e.size && (t[mt[e.size]] = !0), u.createElement(K, {
                    flexShrink: 0
                }, u.createElement("div", l.__assign({
                    className: c(t)
                }, r(e)), u.createElement(me, {
                    ratio: e.aspect ? e.aspect : ae.Aspect16x9,
                    overflow: e.overflow
                }, u.createElement("img", {
                    src: e.imageSrc,
                    alt: e.imageAlt,
                    onLoad: e.onImageLoad,
                    onError: e.onImageError
                })), e.children))
            },
            vt = (n(201), function(e) {
                var t = {
                        "tw-placeholder": !0,
                        "tw-placeholder--overlay": e.overlay,
                        "tw-placeholder--fill": !e.lineCount,
                        "tw-placeholder--custom-height": !!e.height
                    },
                    n = {
                        width: e.width ? e.width / 10 + "rem" : "",
                        height: e.height ? e.height / 10 + "rem" : ""
                    },
                    i = [];
                if (i.push({
                        key: o()
                    }), e.lineCount && e.lineCount > 1)
                    for (var a = 1; a < e.lineCount; a++) i.push({
                        key: o()
                    });
                return u.createElement("span", l.__assign({
                    className: "tw-placeholder-wrapper"
                }, r(e)), i.map(function(e) {
                    return u.createElement("span", {
                        className: c(t),
                        key: e.key,
                        style: n
                    })
                }))
            }),
            wt = (n(202), function(e) {
                var t;
                return t = u.createElement(dt, {
                    key: e.title
                }, u.createElement(ft, l.__assign({
                    aspect: ae.BoxArt
                }, i(e))), u.createElement(ht, null, u.createElement(Z, {
                    margin: {
                        top: .5
                    }
                }, u.createElement(He, {
                    className: "tw-box-art-card__title",
                    type: xe.H3,
                    fontSize: ye.Size5,
                    lineHeight: Ee.Body,
                    ellipsis: !0
                }, e.title), u.createElement(He, {
                    color: ve.Alt2,
                    ellipsis: !0
                }, e.info)))), e.placeholder ? u.createElement(Z, null, u.createElement(Z, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(me, {
                    ratio: ae.Aspect3x4
                }, u.createElement(vt, null))), u.createElement(He, null, u.createElement(vt, {
                    width: 150
                })), u.createElement(He, {
                    fontSize: ye.Size7
                }, u.createElement(vt, {
                    width: 100
                }))) : e.linkTo ? u.createElement("div", l.__assign({
                    className: "tw-box-art-card"
                }, r(e)), u.createElement(ct.a, {
                    to: e.linkTo,
                    title: e.title,
                    "data-a-target": "tw-box-art-card-link"
                }, t)) : u.createElement("div", l.__assign({
                    className: "tw-box-art-card"
                }, r(e)), t)
            });
        n(203);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Large = 2] = "Large"
        }(gt || (gt = {}));
        var bt, yt, _t = (bt = {}, bt[gt.Small] = "tw-loading-spinner--small", bt[gt.Large] = "tw-loading-spinner--large", bt),
            Et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showSpinner: 0 === t.props.delay
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this,
                        t = void 0 !== this.props.delay ? this.props.delay : 300;
                    t > 0 && (this.delayTimeout = window.setTimeout(function() {
                        e.setState({
                            showSpinner: !0
                        })
                    }, t))
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.delayTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.showSpinner) return null;
                    var e, t = {
                        "tw-loading-spinner": !0,
                        "tw-loading-spinner--inherit-color": this.props.inheritColor
                    };
                    return this.props.size && (t[_t[this.props.size]] = !0), e = u.createElement("div", l.__assign({
                        className: c(t)
                    }, r(this.props))), this.props.fillContent && (e = u.createElement(Z, {
                        display: m.Flex,
                        justifyContent: _.Center,
                        alignItems: d.Center,
                        fullWidth: !0,
                        fullHeight: !0
                    }, e)), e
                }, t
            }(u.Component);
        n(204);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Hollow = 1] = "Hollow", e[e.Text = 2] = "Text", e[e.Alert = 3] = "Alert", e[e.Success = 4] = "Success"
        }(yt || (yt = {}));
        var kt, St = (Tt = {}, Tt[yt.Hollow] = "tw-button--hollow", Tt[yt.Text] = "tw-button--text", Tt[yt.Alert] = "tw-button--alert", Tt[yt.Success] = "tw-button--success", Tt);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Large = 2] = "Large"
        }(kt || (kt = {}));
        var Ct, Lt = (xt = {}, xt[kt.Small] = "tw-button--small", xt[kt.Large] = "tw-button--large", xt);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Loading = 1] = "Loading", e[e.Success = 2] = "Success"
        }(Ct || (Ct = {}));
        var Tt, xt, Nt, Rt, It, zt = (Nt = {}, Nt[Ct.Loading] = "tw-button--state-loading", Nt[Ct.Success] = "tw-button--state-success", Nt),
            Mt = (Rt = {}, Rt[kt.Small] = {
                width: 12,
                height: 12
            }, Rt[kt.Large] = {
                width: 20,
                height: 20
            }, Rt),
            Dt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.props.blurAfterClick && t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t, n, i, o, s, h;
                    (this.props.disabled || this.props.state === Ct.Loading || this.props.state === Ct.Success) && (h = !0);
                    var p = {
                        "tw-button": !0,
                        "tw-button--dropmenu": this.props.dropdown,
                        "tw-button--overlay": this.props.overlay,
                        "tw-button--purchase": !!this.props.purchase,
                        "tw-button--status": !!this.props.statusAlertText || !!this.props.statusAlertIcon,
                        "tw-button--disabled": this.props.disabled,
                        "tw-button--full-width": this.props.fullWidth
                    };
                    if (this.props.statusAlertText || this.props.statusAlertIcon || this.props.state === Ct.Success ? p[St[yt.Success]] = !0 : this.props.type && (p[St[this.props.type]] = !0), this.props.size && (p[Lt[this.props.size]] = !0), this.props.state && (p[zt[this.props.state]] = !0), this.props.purchase && (t = u.createElement("span", {
                            className: "tw-button__num-block",
                            key: "tw-button-purchase"
                        }, this.props.purchase)), this.props.dropdown && (e = u.createElement("span", {
                            className: "tw-button__icon tw-button__icon--right",
                            key: "tw-button-dropdown"
                        }, u.createElement(it, {
                            asset: Ye.GlyphArrDown,
                            type: Ge.Inherit
                        }))), this.props.state === Ct.Loading && (o = u.createElement(Z, {
                            className: "tw-button__loading-spinner",
                            position: C.Absolute,
                            key: "tw-button-loading-spinner"
                        }, u.createElement(Et, {
                            delay: 0,
                            size: this.getSpinnerSize(this.props.size),
                            inheritColor: !0
                        }))), this.props.state === Ct.Success && (s = u.createElement(Z, {
                            className: "tw-button__success-icon",
                            position: C.Absolute,
                            display: m.Flex,
                            alignItems: d.Center,
                            justifyContent: _.Center,
                            key: "tw-button-success-icon"
                        }, u.createElement(it, {
                            asset: Ye.Check,
                            width: this.successIconSize(this.props.size),
                            height: this.successIconSize(this.props.size)
                        }))), this.props.icon) {
                        var g = {
                            width: 16,
                            height: 16
                        };
                        this.props.size && (g = Mt[this.props.size]), n = this.props.statusAlertIcon ? u.createElement(Z, {
                            className: "tw-button__icon tw-button__icon--status " + (this.props.children ? "tw-button__icon--left" : ""),
                            display: m.Flex,
                            key: "tw-button-icon"
                        }, u.createElement(Z, {
                            className: "tw-button__primary-icon",
                            display: m.Flex,
                            alignItems: d.Center,
                            justifyContent: _.Center
                        }, u.createElement(it, {
                            width: g.width,
                            height: g.height,
                            type: Ge.Inherit,
                            asset: this.props.icon
                        })), u.createElement(Z, {
                            className: "tw-button__alert-icon",
                            display: m.Flex,
                            alignItems: d.Center,
                            justifyContent: _.Center
                        }, u.createElement(it, {
                            width: g.width,
                            height: g.height,
                            type: Ge.Inherit,
                            asset: this.props.statusAlertIcon
                        }))) : u.createElement("span", {
                            className: "tw-button__icon " + (this.props.children ? "tw-button__icon--left" : ""),
                            key: "tw-button-icon"
                        }, u.createElement(it, {
                            width: g.width,
                            height: g.height,
                            type: Ge.Inherit,
                            asset: this.props.icon
                        }))
                    }
                    this.props.children && (i = this.props.statusAlertText ? u.createElement("span", {
                        className: "tw-button__text",
                        key: "tw-button-text"
                    }, u.createElement("span", {
                        className: "tw-button__primary-text",
                        "data-a-target": "tw-button-text"
                    }, this.props.children), u.createElement("span", {
                        className: "tw-button__alert-text"
                    }, this.props.statusAlertText)) : u.createElement("span", {
                        className: "tw-button__text",
                        "data-a-target": "tw-button-text",
                        key: "tw-button-text"
                    }, this.props.children));
                    var f;
                    this.props.tabIndex && (f = this.props.tabIndex);
                    var v;
                    this.props.targetBlank && (v = "_blank");
                    var w = [n, i, o, s, e, t],
                        b = l.__assign({
                            tabIndex: f,
                            onClick: this.onClick,
                            "aria-label": this.props.ariaLabel,
                            className: c(p)
                        }, r(this.props));
                    if (this.props.linkTo && !h) {
                        if (a(this.props.linkTo)) {
                            if ("string" == typeof this.props.linkTo) return u.createElement("a", l.__assign({
                                href: this.props.linkTo,
                                target: v,
                                ref: this.refHandler,
                                download: this.props.download
                            }, b), w);
                            throw new Error("External links with Location descriptors are not implemented in core-ui.button! Pass a string as linkTo instead.")
                        }
                        return u.createElement(ct.a, l.__assign({
                            to: this.props.linkTo,
                            target: v,
                            download: this.props.download
                        }, b), w)
                    }
                    return u.createElement("button", l.__assign({
                        disabled: h,
                        ref: this.refHandler
                    }, b), w)
                }, t.prototype.getSpinnerSize = function(e) {
                    switch (e) {
                        case kt.Small:
                            return gt.Small;
                        case kt.Large:
                            return gt.Large;
                        case kt.Default:
                        default:
                            return gt.Default
                    }
                }, t.prototype.successIconSize = function(e) {
                    switch (e) {
                        case kt.Small:
                            return 12;
                        case kt.Large:
                            return 20;
                        case kt.Default:
                        default:
                            return 16
                    }
                }, t
            }(u.Component);
        n(205);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Hollow = 1] = "Hollow", e[e.Primary = 2] = "Primary", e[e.Alert = 3] = "Alert", e[e.Secondary = 4] = "Secondary", e[e.Success = 5] = "Success"
        }(It || (It = {}));
        var At, Bt, Pt, Ot, Ht = (At = {}, At[It.Primary] = "tw-button-icon--primary", At[It.Hollow] = "tw-button-icon--hollow", At[It.Alert] = "tw-button-icon--alert", At[It.Secondary] = "tw-button-icon--secondary", At[It.Success] = "tw-button-icon--success", At),
            Ft = (Bt = {}, Bt[kt.Small] = "tw-button-icon--small", Bt[kt.Large] = "tw-button-icon--large", Bt),
            Vt = (Pt = {}, Pt[kt.Small] = {
                width: 12,
                height: 12
            }, Pt[kt.Large] = {
                width: 20,
                height: 20
            }, Pt),
            Ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.props.blurAfterClick && t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                        "tw-button-icon": !0,
                        "tw-button-icon--dropmenu": this.props.dropdown,
                        "tw-button-icon--disabled": this.props.disabled,
                        "tw-button-icon--overlay": this.props.overlay,
                        "tw-button-icon--status": !!this.props.statusAlertIcon
                    };
                    if (this.props.statusAlertIcon ? n[Ht[It.Success]] = !0 : this.props.type && (n[Ht[this.props.type]] = !0), this.props.size && (n[Ft[this.props.size]] = !0), this.props.dropdown && (e = u.createElement("span", {
                            className: "tw-button-icon__icon tw-button-icon__icon--right",
                            key: "tw-button-dropdown"
                        }, u.createElement(it, {
                            asset: Ye.GlyphArrDown,
                            type: Ge.Inherit
                        }))), this.props.icon) {
                        var i = {
                            width: 16,
                            height: 16
                        };
                        this.props.size && (i = Vt[this.props.size]), t = u.createElement("span", {
                            className: "tw-button-icon__icon"
                        }, u.createElement(it, {
                            width: i.width,
                            height: i.height,
                            type: Ge.Inherit,
                            asset: this.props.icon
                        })), t = this.props.statusAlertIcon ? u.createElement(Z, {
                            className: "tw-button-icon__icon tw-button-icon__icon--status",
                            display: m.Flex,
                            key: "tw-button-icon"
                        }, u.createElement(Z, {
                            className: "tw-button-icon__primary-icon",
                            display: m.Flex,
                            alignItems: d.Center,
                            justifyContent: _.Center
                        }, u.createElement(it, {
                            width: i.width,
                            height: i.height,
                            type: Ge.Inherit,
                            asset: this.props.icon
                        })), u.createElement(Z, {
                            className: "tw-button-icon__alert-icon",
                            display: m.Flex,
                            alignItems: d.Center,
                            justifyContent: _.Center
                        }, u.createElement(it, {
                            width: i.width,
                            height: i.height,
                            type: Ge.Inherit,
                            asset: this.props.statusAlertIcon
                        }))) : u.createElement("span", {
                            className: "tw-button-icon__icon",
                            key: "tw-button-icon"
                        }, u.createElement(it, {
                            width: i.width,
                            height: i.height,
                            type: Ge.Inherit,
                            asset: this.props.icon
                        }))
                    }
                    var o;
                    this.props.tabIndex && (o = this.props.tabIndex);
                    var s;
                    this.props.targetBlank && (s = "_blank");
                    var h = l.__assign({
                            tabIndex: o,
                            onClick: this.onClick,
                            "aria-label": this.props.ariaLabel,
                            className: c(n)
                        }, r(this.props)),
                        p = [t, e];
                    if (this.props.linkTo && !this.props.disabled) {
                        if (a(this.props.linkTo)) {
                            if ("string" == typeof this.props.linkTo) return u.createElement("a", l.__assign({
                                href: this.props.linkTo,
                                target: s,
                                download: this.props.download,
                                ref: this.refHandler
                            }, h), p);
                            throw new Error("External links with Location descriptors are not implemented in core-ui.button! Pass a string as linkTo instead.")
                        }
                        return u.createElement(ct.a, l.__assign({
                            to: this.props.linkTo,
                            target: s,
                            download: this.props.download
                        }, h), p)
                    }
                    return u.createElement("button", l.__assign({
                        disabled: this.props.disabled,
                        tabIndex: o,
                        ref: this.refHandler
                    }, h), p)
                }, t
            }(u.Component);
        n(206);
        ! function(e) {
            e[e.ExtraSmall = 1] = "ExtraSmall", e[e.Small = 2] = "Small", e[e.Medium = 3] = "Medium", e[e.Large = 4] = "Large", e[e.ExtraLarge = 5] = "ExtraLarge"
        }(Ot || (Ot = {}));
        var qt, jt = (Wt = {}, Wt[Ot.ExtraSmall] = "tw-balloon--xs", Wt[Ot.Small] = "tw-balloon--sm", Wt[Ot.Medium] = "tw-balloon--md", Wt[Ot.Large] = "tw-balloon--lg", Wt[Ot.ExtraLarge] = "tw-balloon--xl", Wt);
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Bottom = 2] = "Bottom", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right", e[e.TopLeft = 5] = "TopLeft", e[e.TopRight = 6] = "TopRight", e[e.BottomRight = 7] = "BottomRight", e[e.BottomLeft = 8] = "BottomLeft", e[e.TopCenter = 9] = "TopCenter", e[e.BottomCenter = 10] = "BottomCenter", e[e.LeftCenter = 11] = "LeftCenter", e[e.RightCenter = 12] = "RightCenter"
        }(qt || (qt = {}));
        var Wt, Gt, Qt, Kt = (Gt = {}, Gt[qt.Top] = "tw-balloon--up", Gt[qt.Bottom] = "tw-balloon--down", Gt[qt.Left] = "tw-balloon--left", Gt[qt.Right] = "tw-balloon--right", Gt[qt.TopLeft] = "tw-balloon--up tw-balloon--left", Gt[qt.TopRight] = "tw-balloon--up tw-balloon--right", Gt[qt.BottomRight] = "tw-balloon--down tw-balloon--right", Gt[qt.BottomLeft] = "tw-balloon--down", Gt[qt.TopCenter] = "tw-balloon--up tw-balloon--center", Gt[qt.BottomCenter] = "tw-balloon--down tw-balloon--center", Gt[qt.LeftCenter] = "tw-balloon--left tw-balloon--center", Gt[qt.RightCenter] = "tw-balloon--right tw-balloon--center", Gt),
            Zt = function(e) {
                var t = {
                    "tw-balloon": !0
                };
                e.size && (t[jt[e.size]] = !0), e.direction ? t[Kt[e.direction]] = !0 : t[Kt[qt.Bottom]] = !0;
                var n, i, o, a;
                e.offsetX && (e.direction === qt.Left || e.direction === qt.TopLeft || e.direction === qt.BottomLeft || e.direction === qt.LeftCenter || e.direction === qt.BottomRight || e.direction === qt.TopRight ? i = e.offsetX : n = e.offsetX), e.offsetY && (e.direction === qt.Top || e.direction === qt.TopLeft || e.direction === qt.TopRight || e.direction === qt.TopCenter ? a = e.offsetY : o = e.offsetY);
                var s, d, h, p = {
                    marginLeft: n,
                    marginRight: i,
                    marginTop: o,
                    marginBottom: a
                };
                e.tailOffset && (e.direction === qt.Left || e.direction === qt.Right || e.direction === qt.LeftCenter || e.direction === qt.RightCenter ? s = e.tailOffset + "px" : e.direction === qt.TopRight || e.direction === qt.BottomRight ? (d = e.tailOffset + "px", h = "auto") : (d = "auto", h = e.tailOffset + "px"));
                var g, f = {
                    top: s,
                    left: h,
                    right: d
                };
                return e.noTail || (g = u.createElement(K, {
                    position: C.Absolute
                }, u.createElement("div", {
                    className: "tw-balloon__tail",
                    style: f
                }))), u.createElement(K, {
                    display: e.show ? m.Block : m.Hide,
                    position: C.Absolute
                }, u.createElement("div", l.__assign({
                    style: p,
                    className: c(t)
                }, r(e)), u.createElement(Je, {
                    border: !0,
                    borderRadius: Fe.Small,
                    background: Pe.Base,
                    elevation: e.elevation ? e.elevation : 1
                }, e.children, g)))
            },
            Jt = (n(207), function(e) {
                var t, n = o(),
                    i = {
                        "tw-checkbox": !0,
                        "tw-checkbox--error": e.error
                    };
                return e.tabIndex && (t = e.tabIndex), u.createElement("div", l.__assign({
                    className: c(i)
                }, r(e)), u.createElement("input", {
                    className: "tw-checkbox__input",
                    type: "checkbox",
                    "data-a-target": "tw-checkbox",
                    checked: e.checked,
                    defaultChecked: e.defaultChecked,
                    disabled: e.disabled,
                    id: e.id ? e.id : n,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    ref: e.refDelegate,
                    required: e.required,
                    tabIndex: t,
                    value: e.value
                }), u.createElement("label", {
                    className: "tw-checkbox__label",
                    htmlFor: e.id ? e.id : n
                }, e.label))
            }),
            Xt = (n(208), function(e) {
                var t = {
                    "tw-drop-zone": !0,
                    "tw-drop-zone--over": e.dragOver,
                    "tw-drop-zone--error": e.error,
                    "tw-drop-zone--disabled": e.disabled
                };
                return u.createElement(Z, l.__assign({
                    className: c(t)
                }, r(e), {
                    alignItems: d.Center,
                    display: m.Flex,
                    fullHeight: !0,
                    fullWidth: !0,
                    justifyContent: _.Center,
                    position: C.Absolute,
                    attachTop: !0,
                    attachLeft: !0
                }), u.createElement("div", {
                    className: "tw-drop-zone__content"
                }, e.children))
            });
        n(209);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large", e[e.None = 4] = "None"
        }(Qt || (Qt = {}));
        var Yt, $t, en = (Yt = {}, Yt[Qt.Small] = "tw-grid--gutter-sm", Yt[Qt.Medium] = "tw-grid--gutter-md", Yt[Qt.Large] = "tw-grid--gutter-lg", Yt[Qt.None] = "tw-grid--gutter-none", Yt),
            tn = function(e) {
                var t = {
                    "tw-grid": !0
                };
                return e.gutterSize && (t[en[e.gutterSize]] = !0), u.createElement("div", l.__assign({
                    className: c(t)
                }, r(e)), e.children)
            },
            nn = (n(210), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (i = {}, i["tw-col-offset-" + this.props.offset] = this.props.offset && "number" == typeof this.props.offset, i),
                        t = this.getColumnCount("", this.props.cols),
                        n = this.getColumnCount("offset-", this.props.offset);
                    return u.createElement("div", l.__assign({
                        className: c(e, [t, n])
                    }, r(this.props)), this.props.children);
                    var i
                }, t.prototype.getColumnCount = function(e, t) {
                    if (!t) return "";
                    var n = [];
                    return "object" != typeof t ? "tw-col-" + t : (n.push("tw-col-" + e + t.default), t.xs && n.push("xs-tw-col-" + e + t.xs), t.sm && n.push("sm-tw-col-" + e + t.sm), t.md && n.push("md-tw-col-" + e + t.md), t.lg && n.push("lg-tw-col-" + e + t.lg), t.xl && n.push("xl-tw-col-" + e + t.xl), t.xxl && n.push("xxl-tw-col-" + e + t.xxl), n)
                }, t
            }(u.Component));
        n(211);
        ! function(e) {
            e[e.Text = 0] = "Text", e[e.Email = 1] = "Email", e[e.Password = 2] = "Password", e[e.Search = 3] = "Search"
        }($t || ($t = {}));
        var rn, on = function(e) {
                var t, n;
                e.tabIndex && (n = e.tabIndex);
                var i = {
                    "tw-input": !0,
                    "tw-input--error": e.error,
                    "tw-input--icon-left": e.icon && !e.iconRight,
                    "tw-input--icon-right": e.iconRight
                };
                return e.icon && (t = u.createElement("div", {
                    className: "tw-input__icon-group " + (e.iconRight ? "tw-input__icon-group--right" : "")
                }, u.createElement("div", {
                    className: "tw-input__icon"
                }, u.createElement(it, {
                    asset: e.icon,
                    type: Ge.Inherit
                })))), u.createElement(Z, l.__assign({
                    position: C.Relative
                }, r(e)), t, u.createElement("input", {
                    type: $t[e.type].toLowerCase(),
                    className: c(i),
                    placeholder: e.placeholder,
                    "aria-label": e.ariaLabel,
                    autoCapitalize: e.autoCapitalize ? "on" : "off",
                    autoCorrect: e.autoCorrect ? "on" : "off",
                    autoComplete: e.autoComplete,
                    autoFocus: e.autoFocus,
                    "data-a-target": "tw-input",
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onClick: e.onClick,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    maxLength: e.maxLength,
                    readOnly: e.readOnly,
                    ref: e.refDelegate,
                    required: e.required,
                    spellCheck: e.spellCheck,
                    tabIndex: n,
                    value: e.value
                }))
            },
            an = (n(212), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.props.blurAfterClick && t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "tw-interactable": !0,
                        "tw-interactable--alpha": this.props.alpha,
                        "tw-interactable--selected": this.props.selected,
                        "tw-interactable--hover": this.props.hover,
                        "tw-interactable--disabled": this.props.disabled,
                        "tw-interactable--alert": this.props.alert
                    };
                    this.props.tabIndex && (e = this.props.tabIndex);
                    var n;
                    this.props.targetBlank && (n = "_blank");
                    var i = l.__assign({
                        tabIndex: e,
                        onClick: this.onClick,
                        "aria-label": this.props.ariaLabel,
                        className: c(t)
                    }, r(this.props));
                    if (this.props.linkTo) {
                        if (a(this.props.linkTo)) {
                            if ("string" == typeof this.props.linkTo) return u.createElement("a", l.__assign({
                                href: this.props.linkTo,
                                target: n,
                                ref: this.refHandler
                            }, i), this.props.children);
                            throw new Error("External links with Location descriptors are not implemented in core-ui.interactable! Pass a string as linkTo instead.")
                        }
                        return u.createElement(ct.a, l.__assign({
                            to: this.props.linkTo,
                            target: n
                        }, i), this.props.children)
                    }
                    return u.createElement("button", l.__assign({
                        disabled: this.props.disabled,
                        ref: this.refHandler
                    }, i), this.props.children)
                }, t
            }(u.Component)),
            sn = (n(213), function(e) {
                var t, n, i = {
                        "tw-group": !0,
                        "tw-group--error": e.error
                    },
                    o = {
                        "tw-group__label": !0
                    };
                return e.labelOptional && (t = u.createElement("span", {
                    className: "tw-group__optional"
                }, "(", e.labelOptional, ")")), e.hint && !e.error ? n = u.createElement("p", {
                    className: "tw-group__hint"
                }, e.hint) : e.errorMessage && e.error && (n = u.createElement("p", {
                    className: "tw-group__hint"
                }, e.errorMessage)), u.createElement("div", l.__assign({
                    className: c(i)
                }, r(e)), u.createElement("label", {
                    className: c(o),
                    htmlFor: e.id
                }, e.label, t), e.children, n)
            });
        n(214);
        ! function(e) {
            e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
        }(rn || (rn = {}));
        var ln, cn, un = (ln = {}, ln[rn.Small] = "tw-live-indicator--small", ln[rn.Medium] = "tw-live-indicator--medium", ln[rn.Large] = "tw-live-indicator--large", ln),
            dn = function(e) {
                var t = {
                    "tw-live-indicator": !0,
                    "tw-live-indicator--pulse": e.pulse
                };
                return e.size ? t[un[e.size]] = !0 : t[un[rn.Small]] = !0, u.createElement(Z, l.__assign({
                    display: m.InlineBlock,
                    position: C.Relative,
                    className: c(t)
                }, r(e)))
            };
        n(215);
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Bottom = 2] = "Bottom", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right"
        }(cn || (cn = {}));
        var hn, pn = (gn = {}, gn[cn.Top] = "tw-tooltip--up", gn[cn.Bottom] = "tw-tooltip--down", gn[cn.Left] = "tw-tooltip--left", gn[cn.Right] = "tw-tooltip--right", gn);
        ! function(e) {
            e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right"
        }(hn || (hn = {}));
        var gn, mn, fn, vn = (mn = {}, mn[hn.Left] = "tw-tooltip--align-left", mn[hn.Center] = "tw-tooltip--align-center", mn[hn.Right] = "tw-tooltip--align-right", mn),
            wn = function(e) {
                var t = {
                        "tw-tooltip": !0,
                        "tw-tooltip--wrap": !!e.width
                    },
                    n = {
                        "tw-tooltip-wrapper": !0,
                        "tw-tooltip-wrapper--show": e.show
                    };
                e.direction ? t[pn[e.direction]] = !0 : t[pn[cn.Top]] = !0, e.align && e.align !== hn.Center && e.direction !== cn.Left && e.direction !== cn.Right ? t[vn[e.align]] = !0 : t[vn[hn.Center]] = !0;
                var i, o, a, s;
                e.offsetX && (e.align === hn.Right ? o = e.offsetX : i = e.offsetX), e.offsetY && (e.direction && e.direction !== cn.Top ? a = e.offsetY : s = e.offsetY);
                var d = {
                    marginLeft: i,
                    marginRight: o,
                    marginTop: a,
                    marginBottom: s,
                    width: e.width
                };
                return u.createElement(K, l.__assign({
                    display: e.display ? e.display : m.InlineFlex
                }, r(e)), u.createElement("div", {
                    className: c(n)
                }, e.children, u.createElement("div", {
                    className: c(t),
                    style: d,
                    "data-a-target": "tw-tooltip-label"
                }, e.label)))
            },
            bn = (n(216), function(e) {
                var t, n = {
                    "tw-stat": !0
                };
                e.icon && (t = u.createElement(it, {
                    type: Ge.Inherit,
                    asset: e.icon
                }));
                var i = u.createElement("div", l.__assign({
                    className: c(n)
                }, r(e)), u.createElement("span", {
                    className: "tw-stat__icon"
                }, t), u.createElement("span", {
                    className: "tw-stat__value",
                    "data-a-target": "tw-stat-value"
                }, e.value));
                return e.label ? u.createElement(wn, {
                    direction: e.tooltipDirection ? e.tooltipDirection : cn.Bottom,
                    align: e.tooltipAlign ? e.tooltipAlign : hn.Center,
                    label: e.label
                }, i) : i
            }),
            yn = (n(217), function(e) {
                var t, n = {
                    "tw-tag": !0
                };
                e.tabIndex && (t = e.tabIndex);
                var i;
                return i = e.icon ? u.createElement("span", {
                    className: "tw-tag__icon"
                }, u.createElement(it, {
                    width: 12,
                    height: 12,
                    type: Ge.Inherit,
                    asset: e.icon
                })) : u.createElement("span", {
                    className: "tw-tag__label"
                }, e.label), u.createElement("button", l.__assign({
                    onClick: e.onClose,
                    disabled: e.disabled,
                    tabIndex: t,
                    className: c(n)
                }, r(e)), i, u.createElement("span", {
                    className: "tw-tag__close"
                }, u.createElement(it, {
                    width: 8,
                    height: 8,
                    type: Ge.Inherit,
                    asset: Ye.Close
                })))
            });
        n(218);
        ! function(e) {
            e[e.Notification = 1] = "Notification", e[e.Brand = 2] = "Brand", e[e.Live = 3] = "Live", e[e.Alert = 4] = "Alert", e[e.Success = 5] = "Success", e[e.Prime = 6] = "Prime", e[e.Overlay = 7] = "Overlay"
        }(fn || (fn = {}));
        var _n, En, kn = (_n = {}, _n[fn.Notification] = "tw-pill--notification", _n[fn.Brand] = "tw-pill--brand", _n[fn.Live] = "tw-pill--live", _n[fn.Alert] = "tw-pill--alert", _n[fn.Success] = "tw-pill--success", _n[fn.Prime] = "tw-pill--prime", _n[fn.Overlay] = "tw-pill--overlay", _n),
            Sn = function(e) {
                var t = {
                    "tw-pill": !0
                };
                return e.type && (t[kn[e.type]] = !0), u.createElement("span", l.__assign({
                    className: c(t)
                }, r(e)), e.label)
            };
        n(219);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.ExtraSmall = 2] = "ExtraSmall"
        }(En || (En = {}));
        var Cn, Ln = (Tn = {}, Tn[En.Small] = "tw-progress-bar--sm", Tn[En.ExtraSmall] = "tw-progress-bar--xs", Tn);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Caution = 1] = "Caution", e[e.Error = 2] = "Error", e[e.Success = 3] = "Success"
        }(Cn || (Cn = {}));
        var Tn, xn, Nn, Rn = (xn = {}, xn[Cn.Caution] = "tw-progress-bar--caution", xn[Cn.Error] = "tw-progress-bar--error", xn[Cn.Success] = "tw-progress-bar--success", xn),
            In = function(e) {
                var t = {
                    "tw-progress-bar": !0,
                    "tw-progress-bar--countdown": !!e.countdown,
                    "tw-progress-bar--inherit": e.inherit,
                    "tw-progress-bar--mask": e.mask
                };
                return e.size && (t[Ln[e.size]] = !0), e.status && (t[Rn[e.status]] = !0), u.createElement("div", l.__assign({
                    className: c(t)
                }, r(e)), u.createElement("div", {
                    onAnimationEnd: e.onCountdownEnd,
                    className: "tw-progress-bar__fill",
                    style: {
                        width: e.value + "%",
                        animationDuration: e.countdown ? e.countdown + "s" : ""
                    },
                    "data-a-target": "tw-progress-bar-animation"
                }))
            },
            zn = (n(220), function(e) {
                var t, n = "tw-" + o(),
                    i = {
                        "tw-radio": !0,
                        "tw-radio--error": e.error
                    };
                return e.tabIndex && (t = e.tabIndex), u.createElement("div", l.__assign({
                    className: c(i)
                }, r(e)), u.createElement("input", {
                    type: "radio",
                    className: "tw-radio__input",
                    "data-a-target": "tw-radio",
                    autoFocus: e.autoFocus,
                    checked: e.checked,
                    defaultChecked: e.defaultChecked,
                    disabled: e.disabled,
                    id: e.id ? e.id : n,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    required: e.required,
                    ref: e.refDelegate,
                    tabIndex: t,
                    value: e.value
                }), u.createElement("label", {
                    className: "tw-radio__label",
                    htmlFor: e.id ? e.id : n
                }, e.label))
            }),
            Mn = (n(221), function(e) {
                var t, n = o(),
                    i = {
                        "tw-toggle": !0,
                        "tw-toggle--error": e.error
                    };
                return e.tabIndex && (t = e.tabIndex), u.createElement("div", l.__assign({
                    className: c(i)
                }, r(e)), u.createElement("input", {
                    className: "tw-toggle__input",
                    autoFocus: e.autoFocus,
                    checked: e.checked,
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id ? e.id : n,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    tabIndex: t,
                    type: "checkbox",
                    ref: e.refDelegate,
                    value: e.value,
                    "data-a-target": "tw-toggle"
                }), u.createElement("label", {
                    htmlFor: e.id ? e.id : n,
                    className: "tw-toggle__button"
                }))
            }),
            Dn = (n(222), function(e) {
                var t, n = {
                    "tw-range": !0,
                    "tw-range--error": e.error
                };
                return e.tabIndex && (t = e.tabIndex), u.createElement("input", l.__assign({
                    className: c(n),
                    id: e.id,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    tabIndex: t,
                    disabled: e.disabled,
                    type: "range",
                    min: e.min,
                    max: e.max,
                    name: e.name,
                    ref: e.refDelegate,
                    step: e.step,
                    value: e.value
                }, r(e)))
            }),
            An = (n(223), function(e) {
                var t, n = "tw-" + o();
                return e.tabIndex && (t = e.tabIndex), u.createElement("div", l.__assign({
                    className: c("tw-search-input")
                }, r(e)), u.createElement(K, {
                    display: m.HideAccessible
                }, u.createElement("label", {
                    htmlFor: e.id ? e.id : n
                }, "Search")), u.createElement(on, {
                    autoCapitalize: e.autoCapitalize,
                    autoFocus: e.autoFocus,
                    autoComplete: "off",
                    disabled: e.disabled,
                    error: e.error,
                    icon: Ye.NavSearch,
                    id: e.id ? e.id : n,
                    maxLength: e.maxLength,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    placeholder: e.placeholder,
                    refDelegate: e.refDelegate,
                    spellCheck: e.spellCheck,
                    tabIndex: t,
                    type: $t.Search,
                    value: e.value
                }))
            }),
            Bn = (n(224), function(e) {
                return u.createElement("div", l.__assign({
                    className: c("tw-segmented-button")
                }, r(e)), e.children)
            }),
            Pn = (n(225), function(e) {
                var t, n = {
                    "tw-segmented-button-option": !0
                };
                return e.tabIndex && (t = e.tabIndex), u.createElement("label", l.__assign({
                    className: c(n),
                    htmlFor: e.id
                }, r(e)), u.createElement("input", {
                    type: e.type || "radio",
                    className: "tw-segmented-button-option__input",
                    checked: e.checked,
                    defaultChecked: e.defaultChecked,
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    tabIndex: t,
                    ref: e.refDelegate,
                    value: e.value,
                    "data-a-target": "tw-segmented-button-option"
                }), u.createElement("span", {
                    className: "tw-segmented-button-option__label"
                }, e.label))
            });
        n(226);
        ! function(e) {
            e[e.Default = 1] = "Default", e[e.Hollow = 2] = "Hollow"
        }(Nn || (Nn = {}));
        var On, Hn, Fn = (On = {}, On[Nn.Default] = "", On[Nn.Hollow] = "tw-select--hollow", On),
            Vn = function(e) {
                var t = {
                    "tw-select": !0,
                    "tw-select--disabled": e.disabled,
                    "tw-select--error": e.error
                };
                e.type && (t[Fn[e.type]] = !0);
                var n;
                return e.tabIndex && (n = e.tabIndex), u.createElement("select", l.__assign({
                    className: c(t),
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    required: e.required,
                    tabIndex: n,
                    value: e.value,
                    ref: e.refDelegate
                }, r(e)), e.children)
            },
            Un = (n(227), function(e) {
                var t, n, i = {
                    "tw-tab-nav__item": !0,
                    "mg-l-auto": e.pullRight,
                    "tw-tab-nav__item--disabled": e.disabled
                };
                e.targetBlank && (n = "_blank");
                var o;
                if (e.active && (o = "active"), e.linkTo && !e.disabled)
                    if (a(e.linkTo)) {
                        if ("string" != typeof e.linkTo) throw new Error("External links with Location descriptors are not implemented in core-ui.button! Pass a string as linkTo instead.");
                        t = u.createElement("a", {
                            disabled: e.disabled,
                            target: n,
                            className: o,
                            onClick: e.onClick,
                            href: e.linkTo,
                            role: "tab",
                            "data-a-target": "tw-tab-link"
                        }, e.children)
                    } else t = u.createElement(ct.a, {
                        disabled: e.disabled,
                        target: n,
                        className: o,
                        onClick: e.onClick,
                        to: e.linkTo,
                        role: "tab",
                        "data-a-target": "tw-tab-link"
                    }, e.children);
                else t = u.createElement("button", {
                    disabled: e.disabled,
                    className: o,
                    onClick: e.onClick,
                    role: "tab",
                    "data-a-target": "tw-tab-link"
                }, e.children);
                return u.createElement("li", l.__assign({
                    className: c(i),
                    role: "presentation"
                }, r(e)), t)
            }),
            qn = (n(228), function(e) {
                return u.createElement("div", l.__assign({
                    className: e.alignRight ? "flex" : ""
                }, r(e)), u.createElement("ul", {
                    className: "tw-tab-nav " + (e.alignRight ? "mg-l-auto" : ""),
                    role: "tablist"
                }, e.children))
            }),
            jn = (n(229), function(e) {
                var t, n = {
                    "tw-textarea": !0,
                    "tw-textarea--no-resize": e.noResize,
                    "tw-textarea--error": e.error
                };
                e.tabIndex && (t = e.tabIndex);
                var i = {
                    paddingRight: e.paddingRight ? e.paddingRight / 10 + "rem" : null
                };
                return u.createElement(K, {
                    overflow: e.overflow
                }, u.createElement("textarea", l.__assign({
                    className: c(n),
                    autoFocus: e.autoFocus,
                    cols: e.cols,
                    disabled: e.disabled,
                    id: e.id,
                    maxLength: e.maxLength,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    style: i,
                    placeholder: e.placeholder,
                    rows: e.rows,
                    tabIndex: t,
                    value: e.value,
                    defaultValue: e.defaultValue,
                    ref: e.refDelegate
                }, r(e))))
            }),
            Wn = (n(230), function(e) {
                var t;
                return t = u.createElement(dt, {
                    key: e.title
                }, u.createElement(ft, l.__assign({
                    aspect: ae.Aspect16x9
                }, i(e))), u.createElement(ht, null, u.createElement(Z, {
                    margin: {
                        top: .5
                    }
                }, u.createElement(He, {
                    className: "tw-thumbnail-card__title",
                    type: xe.H3,
                    fontSize: ye.Size5,
                    lineHeight: Ee.Body,
                    ellipsis: !0
                }, e.title)), u.createElement(He, {
                    color: ve.Alt2,
                    ellipsis: !0
                }, e.info))), e.placeholder ? u.createElement(Z, null, u.createElement(Z, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(me, {
                    ratio: ae.Aspect16x9
                }, u.createElement(vt, null))), u.createElement(He, null, u.createElement(vt, {
                    width: 150
                })), u.createElement(He, {
                    fontSize: ye.Size7
                }, u.createElement(vt, {
                    width: 100
                }))) : e.linkTo ? u.createElement("div", l.__assign({
                    className: "tw-thumbnail-card"
                }, r(e)), u.createElement(ct.a, {
                    to: e.linkTo,
                    title: e.title,
                    "data-a-target": "tw-thumbnail-card-link"
                }, t)) : u.createElement("div", l.__assign({
                    className: "tw-thumbnail-card"
                }, r(e)), t)
            }),
            Gn = (n(231), function(e) {
                var t = {
                    "tw-toast": !0
                };
                return u.createElement(Z, {
                    fullWidth: !0
                }, u.createElement(Je, {
                    display: m.Flex,
                    flexWrap: b.NoWrap,
                    className: c(t),
                    elevation: 3,
                    background: Pe.Base,
                    border: !0
                }, u.createElement(Z, {
                    flexGrow: 1
                }, e.children), u.createElement(Je, {
                    display: m.Flex,
                    flexShrink: 0,
                    borderLeft: !0
                }, u.createElement(an, {
                    onClick: e.onClose,
                    ariaLabel: "Dismiss This",
                    tabIndex: e.tabIndex,
                    alpha: !0,
                    "data-a-target": "tw-toast-close"
                }, u.createElement(Z, {
                    padding: 1,
                    display: m.Flex,
                    alignItems: d.Center,
                    justifyContent: _.Center,
                    className: "tw-toast__dismiss-target"
                }, u.createElement(it, {
                    asset: Ye.Close
                }))))))
            });
        n(232);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.ExtraSmall = 1] = "ExtraSmall", e[e.Small = 2] = "Small", e[e.Large = 3] = "Large", e[e.None = 4] = "None"
        }(Hn || (Hn = {}));
        var Qn, Kn = (Zn = {}, Zn[Hn.ExtraSmall] = "tw-tower--gutter-xs", Zn[Hn.Small] = "tw-tower--gutter-sm", Zn[Hn.Large] = "tw-tower--gutter-lg", Zn[Hn.None] = "tw-tower--gutter-none", Zn);
        ! function(e) {
            e[e.ExtraSmall = 1] = "ExtraSmall", e[e.Small = 2] = "Small", e[e.Medium = 3] = "Medium", e[e.Large = 4] = "Large"
        }(Qn || (Qn = {}));
        var Zn, Jn, Xn = (Jn = {}, Jn[Qn.ExtraSmall] = "tw-tower--120", Jn[Qn.Small] = "tw-tower--180", Jn[Qn.Medium] = "tw-tower--240", Jn[Qn.Large] = "tw-tower--300", Jn),
            Yn = function(e) {
                var t = {
                    "tw-tower": !0,
                    "tw-tower--nogrow": e.noGrow
                };
                e.gutterSize && (t[Kn[e.gutterSize]] = !0), e.childWidth && (t[Xn[e.childWidth]] = !0);
                var n = new Array;
                if (e.placeholderItems)
                    for (var i = 0; i < e.placeholderItems; ++i) n.push(u.createElement("div", {
                        className: "tw-tower__placeholder",
                        key: i
                    }));
                return u.createElement(Z, l.__assign({
                    justifyContent: e.center ? _.Center : void 0,
                    flexWrap: e.noWrap ? b.NoWrap : b.Wrap,
                    className: c(t)
                }, r(e)), e.children, n)
            },
            $n = (n(233), function(e) {
                var t = {
                    "tw-typeset": !0
                };
                return u.createElement("div", l.__assign({
                    className: c(t)
                }, r(e)), e.children)
            });
        n.d(t, "e", function() {
            return le
        }), n.d(t, "f", function() {
            return W
        }), n.d(t, "g", function() {
            return J
        }), n.d(t, "h", function() {
            return Y
        }), n.d(t, "i", function() {
            return ee
        }), n.d(t, "j", function() {
            return me
        }), n.d(t, "k", function() {
            return ae
        }), n.d(t, "a", function() {
            return ce
        }), n.d(t, "l", function() {
            return Xe
        }), n.d(t, !1, function() {}), n.d(t, "n", function() {
            return lt
        }), n.d(t, "o", function() {
            return nt
        }), n.d(t, "t", function() {
            return wt
        }), n.d(t, "u", function() {
            return Dt
        }), n.d(t, "x", function() {
            return kt
        }), n.d(t, "z", function() {
            return yt
        }), n.d(t, "y", function() {
            return Ct
        }), n.d(t, "v", function() {
            return Ut
        }), n.d(t, "w", function() {
            return It
        }), n.d(t, "p", function() {
            return Zt
        }), n.d(t, "r", function() {
            return Ot
        }), n.d(t, "q", function() {
            return qt
        }), n.d(t, "B", function() {
            return ht
        }), n.d(t, "C", function() {
            return ft
        }), n.d(t, "D", function() {
            return at
        }), n.d(t, "A", function() {
            return dt
        }), n.d(t, "E", function() {
            return Jt
        }), n.d(t, "I", function() {
            return Xt
        }), n.d(t, "N", function() {
            return tn
        }), n.d(t, "O", function() {
            return Qt
        }), n.d(t, "G", function() {
            return nn
        }), n.d(t, "_9", function() {
            return it
        }), n.d(t, "_10", function() {
            return Ye
        }), n.d(t, "_11", function() {
            return Ge
        }), n.d(t, "Q", function() {
            return on
        }), n.d(t, "R", function() {
            return $t
        }), n.d(t, "S", function() {
            return an
        }), n.d(t, "M", function() {
            return sn
        }), n.d(t, "_18", function() {
            return Je
        }), n.d(t, "m", function() {
            return Pe
        }), n.d(t, "s", function() {
            return Fe
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, "d", function() {
            return p
        }), n.d(t, "P", function() {
            return K
        }), n.d(t, "U", function() {
            return Z
        }), n.d(t, "H", function() {
            return m
        }), n.d(t, "J", function() {
            return v
        }), n.d(t, "K", function() {
            return b
        }), n.d(t, "T", function() {
            return _
        }), n.d(t, !1, function() {
            return T
        }), n.d(t, "Z", function() {
            return k
        }), n.d(t, "_3", function() {
            return C
        }), n.d(t, "_23", function() {
            return N
        }), n.d(t, "_38", function() {
            return I
        }), n.d(t, "W", function() {
            return dn
        }), n.d(t, "X", function() {
            return rn
        }), n.d(t, "Y", function() {
            return Et
        }), n.d(t, "_16", function() {
            return gt
        }), n.d(t, "_17", function() {
            return bn
        }), n.d(t, "_21", function() {
            return yn
        }), n.d(t, "_0", function() {
            return Sn
        }), n.d(t, "_1", function() {
            return fn
        }), n.d(t, "_2", function() {
            return vt
        }), n.d(t, "_4", function() {
            return be
        }), n.d(t, "_5", function() {
            return he
        }), n.d(t, "_6", function() {
            return In
        }), n.d(t, "_7", function() {
            return En
        }), n.d(t, !1, function() {
            return Cn
        }), n.d(t, "_8", function() {
            return zn
        }), n.d(t, "_22", function() {
            return He
        }), n.d(t, "F", function() {
            return ve
        }), n.d(t, "L", function() {
            return ye
        }), n.d(t, "V", function() {
            return Ee
        }), n.d(t, "_25", function() {
            return Se
        }), n.d(t, "_26", function() {
            return Le
        }), n.d(t, "_27", function() {
            return xe
        }), n.d(t, "_37", function() {
            return Re
        }), n.d(t, "_29", function() {
            return Mn
        }), n.d(t, !1, function() {
            return Dn
        }), n.d(t, "_12", function() {
            return An
        }), n.d(t, "_13", function() {
            return Bn
        }), n.d(t, "_14", function() {
            return Pn
        }), n.d(t, "_15", function() {
            return Vn
        }), n.d(t, "_19", function() {
            return Un
        }), n.d(t, "_20", function() {
            return qn
        }), n.d(t, "_24", function() {
            return jn
        }), n.d(t, !1, function() {
            return Wn
        }), n.d(t, "_28", function() {
            return Gn
        }), n.d(t, "_30", function() {
            return wn
        }), n.d(t, "_32", function() {
            return cn
        }), n.d(t, "_31", function() {
            return hn
        }), n.d(t, "_33", function() {
            return Yn
        }), n.d(t, "_35", function() {
            return Hn
        }), n.d(t, "_34", function() {
            return Qn
        }), n.d(t, "_36", function() {
            return $n
        }), n.d(t, "_39", function() {
            return r
        })
    },
    308: function(e, t) {},
    310: function(e, t) {},
    311: function(e, t) {},
    322: function(e, t, n) {
        (function(t) {
            function n(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function r(e, t) {
                for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                return i
            }

            function i(e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                return e
            }

            function o(e, t, n, r, a) {
                var s = -1,
                    c = e.length;
                for (n || (n = l), a || (a = []); ++s < c;) {
                    var u = e[s];
                    t > 0 && n(u) ? t > 1 ? o(u, t - 1, n, r, a) : i(a, u) : r || (a[a.length] = u)
                }
                return a
            }

            function a(e, t) {
                return e = Object(e), s(e, t, function(t, n) {
                    return n in e
                })
            }

            function s(e, t, n) {
                for (var r = -1, i = t.length, o = {}; ++r < i;) {
                    var a = t[r],
                        s = e[a];
                    n(s, a) && (o[a] = s)
                }
                return o
            }

            function l(e) {
                return D(e) || u(e) || !!(z && e && e[z])
            }

            function c(e) {
                if ("string" == typeof e || v(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -w ? "-0" : t
            }

            function u(e) {
                return h(e) && x.call(e, "callee") && (!I.call(e, "callee") || N.call(e) == y)
            }

            function d(e) {
                return null != e && g(e.length) && !p(e)
            }

            function h(e) {
                return f(e) && d(e)
            }

            function p(e) {
                var t = m(e) ? N.call(e) : "";
                return t == _ || t == E
            }

            function g(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= b
            }

            function m(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function f(e) {
                return !!e && "object" == typeof e
            }

            function v(e) {
                return "symbol" == typeof e || f(e) && N.call(e) == k
            }
            var w = 1 / 0,
                b = 9007199254740991,
                y = "[object Arguments]",
                _ = "[object Function]",
                E = "[object GeneratorFunction]",
                k = "[object Symbol]",
                S = "object" == typeof t && t && t.Object === Object && t,
                C = "object" == typeof self && self && self.Object === Object && self,
                L = S || C || Function("return this")(),
                T = Object.prototype,
                x = T.hasOwnProperty,
                N = T.toString,
                R = L.Symbol,
                I = T.propertyIsEnumerable,
                z = R ? R.isConcatSpreadable : void 0,
                M = Math.max,
                D = Array.isArray,
                A = function(e, t) {
                    return t = M(void 0 === t ? e.length - 1 : t, 0),
                        function() {
                            for (var r = arguments, i = -1, o = M(r.length - t, 0), a = Array(o); ++i < o;) a[i] = r[t + i];
                            i = -1;
                            for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
                            return s[t] = a, n(e, this, s)
                        }
                }(function(e, t) {
                    return null == e ? {} : a(e, r(o(t, 1), c))
                });
            e.exports = A
        }).call(t, n(34))
    },
    37: function(e, t, n) {
        "use strict";

        function r(e, t) {
            return {
                type: o,
                modalComponent: e,
                modalProps: t
            }
        }

        function i() {
            return {
                type: a
            }
        }
        n.d(t, "b", function() {
            return o
        }), t.d = r, n.d(t, "a", function() {
            return a
        }), t.c = i;
        var o = "core.modal.MODAL_SHOWN",
            a = "core.ui.MODAL_CLOSED"
    },
    39: function(e, t, n) {
        "use strict";

        function r(e) {
            var t = {
                    next: window.location.href,
                    nonce: Object(_.b)()
                },
                n = {
                    client_id: f.a.authClientID,
                    embed: "true",
                    force_login: "true",
                    lang: f.n.intl.getLanguageCode() || "en",
                    login_type: e,
                    redirect_uri: f.a.passportRedirectURI,
                    response_type: "token",
                    scope: f.a.passportScopes.join(" "),
                    state: JSON.stringify(t)
                };
            return Object(k.g)(t), Object(E.a)(f.a.passportAuthURL, n)
        }

        function i(e) {
            return Object(N.d)(x, {
                action: e,
                initialTab: g.Login
            })
        }

        function o(e) {
            return Object(N.d)(x, {
                action: e,
                initialTab: g.Signup
            })
        }

        function a() {
            var e = this;
            return function(t, n) {
                return m.__awaiter(e, void 0, void 0, function() {
                    var e, t, r, i, o, a, s, l;
                    return m.__generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                if (e = f.n.logger.withCategory("auth.logout"), t = n(), !(r = Object(I.a)(t))) return e.warn("Attempted to log out without being logged in."), [2];
                                if (i = Object(I.b)(t)) return [3, 4];
                                c.label = 1;
                            case 1:
                                return c.trys.push([1, 3, , 4]), e.debug("No legacy CSRF token found, making blank request to get one."), [4, fetch("https://passport.twitch.tv/logout/new", {
                                    credentials: "include",
                                    method: "POST",
                                    mode: "no-cors"
                                })];
                            case 2:
                                return c.sent(), i = Object(k.b)(), [3, 4];
                            case 3:
                                return o = c.sent(), e.warn("Failed to acquire legacy CSRF token.", {
                                    err: o
                                }), [3, 4];
                            case 4:
                                return i ? [4, p(i, e)] : [3, 11];
                            case 5:
                                return a = c.sent(), a && a.authToken !== r ? [4, h(a.authToken, e)] : [3, 7];
                            case 6:
                                c.sent(), c.label = 7;
                            case 7:
                                return c.trys.push([7, 9, , 10]), e.debug("Invalidating passport session."), s = new FormData, s.append("api_token", i), [4, fetch("https://passport.twitch.tv/logout/new", {
                                    body: s,
                                    credentials: "include",
                                    method: "POST",
                                    mode: "no-cors"
                                })];
                            case 8:
                                return c.sent(), [3, 10];
                            case 9:
                                return l = c.sent(), e.error(l, "Failed to invalidate passport session."), [3, 10];
                            case 10:
                                return [3, 12];
                            case 11:
                                e.debug("Skipping legacy OAuth token revocation and passport session invalidation: No legacy CSRF token found."), c.label = 12;
                            case 12:
                                return [4, h(r, e)];
                            case 13:
                                return c.sent(), e.debug("Clearing auth cookies and reloading."), Object(k.e)(), window.location.reload(), [2]
                        }
                    })
                })
            }
        }

        function s() {
            return function(e) {
                f.n.apollo.authToken = null, e(Object(R.e)(null))
            }
        }

        function l(e) {
            return function(t) {
                f.n.apollo.authToken = e.authToken, t(Object(R.e)(e))
            }
        }

        function c(e, t, n) {
            var r = this;
            return void 0 === n && (n = !0),
                function(i) {
                    return m.__awaiter(r, void 0, void 0, function() {
                        var r, o, a, l;
                        return m.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    r = f.n.logger.withCategory("auth.init.token"), r.debug("Getting user data from GraphQL."), f.n.apollo.authToken = e, c.label = 1;
                                case 1:
                                    return c.trys.push([1, 3, , 4]), [4, f.n.apollo.client.query({
                                        fetchPolicy: "network-only",
                                        query: M
                                    })];
                                case 2:
                                    return o = c.sent(), o.data.currentUser ? (a = {
                                        authToken: e,
                                        displayName: o.data.currentUser.displayName,
                                        id: o.data.currentUser.id,
                                        legacyCSRFToken: t,
                                        login: o.data.currentUser.login,
                                        roles: {
                                            isStaff: !!o.data.currentUser.roles && o.data.currentUser.roles.isStaff
                                        }
                                    }, n && Object(k.h)(a), i(Object(R.e)(a)), [3, 4]) : (r.error(new Error("Failed to get user data from GraphQL, but there was no client error."), "Failed to get user data from GraphQL, but there was no client error."), i(s()), [2]);
                                case 3:
                                    return l = c.sent(), r.error(l, "Failed to get user data from GraphQL."), i(s()), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }
        }

        function u(e) {
            var t = this;
            return function(n) {
                return m.__awaiter(t, void 0, void 0, function() {
                    var t;
                    return m.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, p(e, f.n.logger.withCategory("auth.init.legacy"))];
                            case 1:
                                return t = r.sent(), t ? (f.n.apollo.authToken = t.authToken, Object(k.h)(t), n(Object(R.e)(t))) : n(s()), [2]
                        }
                    })
                })
            }
        }

        function d(e) {
            var t = this;
            return function(n) {
                return m.__awaiter(t, void 0, void 0, function() {
                    var t, r;
                    return m.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, f.n.intl.loadLocale(e ? [e].concat(Object(z.b)({
                                    includeChosenLanguage: !1
                                })) : Object(z.b)())];
                            case 1:
                                return i.sent(), t = f.n.intl.getLanguageCode() || "en", r = f.a.locales.find(function(e) {
                                    return e.languageCode === t
                                }), r || (f.n.logger.warn("Tried to use invalid language code, using default.", t), r = f.a.locales.find(function(e) {
                                    return !!e.default
                                })), n(Object(R.h)(r.languageCode, r.locale)), [2]
                        }
                    })
                })
            }
        }

        function h(e, t) {
            return m.__awaiter(this, void 0, void 0, function() {
                var n, r, i, o, a, s, l, c, u, d, h, p;
                return m.__generator(this, function(g) {
                    switch (g.label) {
                        case 0:
                            return g.trys.push([0, 8, , 9]), t.debug("Getting OAuth client ID for token."), [4, fetch(f.a.apiBaseURL + "/kraken", {
                                method: "GET",
                                headers: {
                                    authorization: "OAuth " + e
                                }
                            })];
                        case 1:
                            return n = g.sent(), 200 === n.status ? [3, 3] : (i = (r = t).warn, o = ["Got a " + n.status + " status response while getting OAuth client ID."], a = {}, [4, n.text()]);
                        case 2:
                            throw i.apply(r, o.concat([(a.body = g.sent(), a.status = n.status, a)])), new Error("Failed to get OAuth client ID: " + n.status + " status response.");
                        case 3:
                            return [4, n.json()];
                        case 4:
                            return (s = g.sent()) && s.token && s.token.client_id ? [3, 6] : (c = (l = t).warn, u = ["Received a malformed response while getting OAuth client ID."], d = {}, [4, n.text()]);
                        case 5:
                            throw c.apply(l, u.concat([(d.body = g.sent(), d)])), new Error("Failed to get OAuth client ID: Malformed response.");
                        case 6:
                            return t.debug("Revoking OAuth token.", {
                                clientID: s.token.client_id
                            }), h = new FormData, h.append("client_id", s.token.client_id), h.append("token", e), [4, fetch(f.a.apiBaseURL + "/kraken/oauth2/revoke", {
                                body: h,
                                method: "POST",
                                mode: "no-cors"
                            })];
                        case 7:
                            return g.sent(), [3, 9];
                        case 8:
                            return p = g.sent(), t.error(p, "Failed to revoke OAuth token."), [3, 9];
                        case 9:
                            return [2]
                    }
                })
            })
        }

        function p(e, t) {
            return m.__awaiter(this, void 0, void 0, function() {
                var n, r, i, o;
                return m.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            t.debug("Getting user data from legacy API.", {
                                legacyCSRFToken: e
                            }), a.label = 1;
                        case 1:
                            return a.trys.push([1, 4, , 5]), [4, fetch("https://api.twitch.tv/api/me?on_site=1", {
                                method: "GET",
                                headers: {
                                    "client-id": f.a.authClientID,
                                    "twitch-api-token": e
                                },
                                credentials: "include"
                            })];
                        case 2:
                            return n = a.sent(), [4, n.json()];
                        case 3:
                            return r = a.sent(), 200 !== n.status || r.error ? (t.error(new Error("Error getting user data from legacy API."), "Error getting user data from legacy API.", {
                                body: r,
                                legacyCSRFToken: e,
                                status: n.status
                            }), [2]) : (i = {
                                authToken: r.chat_oauth_token,
                                displayName: r.name,
                                id: r.id.toString(),
                                legacyCSRFToken: e,
                                login: r.login,
                                roles: {
                                    isStaff: r.is_staff
                                }
                            }, [2, i]);
                        case 4:
                            return o = a.sent(), t.error(o, "Error getting user data from legacy API.", {
                                legacyCSRFToken: e
                            }), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }
        var g, m = n(0),
            f = n(2),
            v = n(1),
            w = n(107),
            b = n(70);
        ! function(e) {
            e.Login = "login", e.Signup = "signup"
        }(g || (g = {}));
        var y;
        ! function(e) {
            e.Height = "height", e.Loaded = "loaded", e.KrakenCallback = "krakenCallback", e.PassportCallback = "passportCallback", e.Heartbeat = "heartbeat"
        }(y || (y = {}));
        var _ = n(18),
            E = n(69),
            k = n(45),
            S = n(56),
            C = n(13),
            L = n(3),
            T = (n(236), 5e3),
            x = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.frameLoadStart = 0, n.lastHeartbeart = 0, n.heartBeatCheckInterval = 0, n.logger = f.n.logger.withCategory("passport-modal"), n.nonce = Object(S.b)(), n.passportHosts = f.b.get("passport_hosts", []), n.handleMessage = function(e) {
                        if (n.logger.debug("Received a Passport frame message", e), window && document && n.passportHosts.includes(e.origin) && e.data) {
                            var t = {
                                messageType: null
                            };
                            if ("string" == typeof e.data && e.data.startsWith("{")) try {
                                t = JSON.parse(e.data)
                            } catch (e) {
                                return void n.logger.warn("Unable to parse Passport IFrame message", e)
                            } else {
                                if ("object" != typeof e.data) return void n.logger.warn("The Passport IFrame message was not a string or an object");
                                t = e.data
                            }
                            if (!t.messageType) return void n.logger.warn("The Passport IFrame message did not have a messageType");
                            switch (t.messageType) {
                                case y.Loaded:
                                    return n.frameRef ? void n.frameRef.contentWindow.postMessage(JSON.stringify({
                                        width: "100%"
                                    }), "*") : (n.logger.error(new Error("Passport IFrame Ref Missing"), "Received a loaded message from Passport but had no ref to the IFrame"), void n.setState({
                                        hasError: !0
                                    }));
                                case y.Height:
                                    var r = t;
                                    return r.height ? void n.setState({
                                        height: r.height
                                    }) : (n.logger.error(new Error("Invalid Passport Height Message"), "The Passport IFrame height message type had an invalid height"), void n.setState({
                                        hasError: !0
                                    }));
                                case y.KrakenCallback:
                                case y.PassportCallback:
                                    var i = t;
                                    return i.redirectURI ? void window.location.assign(i.redirectURI) : (n.setState({
                                        hasError: !0
                                    }), void n.logger.error(new Error("Invalid Passport Redirect Message"), "The Passport IFrame redirect message type had an invalid redirectURI"));
                                case y.Heartbeat:
                                    return void(n.lastHeartbeart = Date.now());
                                default:
                                    return
                            }
                        }
                    }, n.onClickTryAgain = function() {
                        n.setState({
                            isLoading: !0,
                            hasError: !1,
                            height: 0
                        }, function() {
                            return n.frameLoadStart = Date.now()
                        })
                    }, n.onFrameError = function() {
                        n.logger.error(new Error("Unable to load Passport IFrame"), "The IFrame called its onError handler."), n.state.hasError || n.setState({
                            hasError: !0,
                            isLoading: !1
                        })
                    }, n.onFrameLoad = function() {
                        n.state.isLoading && n.setState({
                            isLoading: !1
                        }, function() {
                            var e = Date.now() - n.frameLoadStart;
                            e > T && n.logger.warn("The Passport IFrame took a long time to load.", {
                                duration: e
                            })
                        })
                    }, n.renderContent = function() {
                        if (n.state.hasError) {
                            var e = Object(f.d)("Try Again", "PassportModal");
                            return v.createElement(L.U, {
                                fullHeight: !0,
                                flexDirection: L.J.Column,
                                display: L.H.Flex,
                                alignItems: L.c.Center,
                                justifyContent: L.T.Center
                            }, v.createElement(b.a, {
                                inline: !0,
                                key: "error",
                                message: Object(f.d)("Something went wrong", "PassportModal")
                            }), v.createElement(L.u, {
                                key: "try-again",
                                ariaLabel: e,
                                onClick: n.onClickTryAgain
                            }, e))
                        }
                        return v.createElement("iframe", {
                            height: n.state.height,
                            ref: n.setFrameRef,
                            onLoad: n.onFrameLoad,
                            onError: n.onFrameError,
                            scrolling: "no",
                            src: n.state.url,
                            width: "100%",
                            name: "passport"
                        })
                    }, n.setFrameRef = function(e) {
                        return n.frameRef = e
                    }, n.state = {
                        height: 0,
                        hasError: !1,
                        isLoading: !0,
                        url: r(n.props.initialTab)
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.handleMessage)
                }, t.prototype.componentDidMount = function() {
                    var e = this;
                    this.frameLoadStart = Date.now(), this.heartBeatCheckInterval = setInterval(function() {
                        e.lastHeartbeart && Date.now() - e.lastHeartbeart > 15e3 && (e.logger.error(new Error("Passport Heartbeat Timeout"), "Client did not receive a Passport heartbeat within the timeout.", {
                            heartbeatTimeout: 15e3
                        }), clearInterval(e.heartBeatCheckInterval))
                    }, 1e3), Object(S.c)(C.SpadeEventType.PassportShow, {
                        action: this.props.action,
                        nonce: this.nonce,
                        type: this.props.initialTab
                    })
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.handleMessage), clearInterval(this.heartBeatCheckInterval), Object(S.c)(C.SpadeEventType.PassportHide, {
                        action: this.props.action,
                        nonce: this.nonce,
                        type: this.props.initialTab
                    })
                }, t.prototype.render = function() {
                    return v.createElement(L.U, {
                        padding: {
                            top: 4,
                            bottom: 2,
                            x: 2
                        },
                        className: "passport-modal",
                        position: L._3.Relative
                    }, this.renderContent(), this.state.isLoading && !this.state.hasError && v.createElement(L._18, {
                        background: L.m.Base,
                        position: L._3.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachTop: !0
                    }, v.createElement(L.Y, {
                        fillContent: !0
                    })), v.createElement(w.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(v.Component),
            N = n(37),
            R = n(54),
            I = n(17),
            z = n(74),
            M = n(237);
        t.f = i, t.h = o, t.g = a, t.a = s, t.d = l, t.c = c, t.b = u, t.e = d
    },
    40: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.P = 80] = "P"
        }(r || (r = {}))
    },
    44: function(e, t, n) {
        "use strict";

        function r() {
            return "twitch.tv" === window.location.hostname || window.location.hostname.endsWith(".twitch.tv")
        }

        function i() {
            if (r()) return ".twitch.tv"
        }
        t.b = r, t.a = i
    },
    45: function(e, t, n) {
        "use strict";

        function r() {
            for (var e = 0, t = f; e < t.length; e++) {
                var n = t[e];
                d.remove(n, b)
            }
        }

        function i(e) {
            var t = {
                authToken: e.authToken,
                displayName: e.displayName,
                id: e.id,
                login: e.login,
                roles: e.roles,
                version: v
            };
            d.set(m, JSON.stringify(t), b)
        }

        function o(e) {
            var t = d.get(m);
            if (t) try {
                var n = JSON.parse(t);
                if (e.debug("Found user cookie.", n), !n.authToken || "string" != typeof n.authToken) throw new Error('Missing or invalid "authToken" value stored in user cookie.');
                if (!n.displayName || "string" != typeof n.displayName) throw new Error('Missing or invalid "displayName" value stored in user cookie.');
                if (!n.id) throw new Error('Missing "id" value in user cookie.');
                if ("number" == typeof n.id) e.debug('Converting numerical user cookie "id" value to string.'), n.id = String(n.id);
                else if ("string" != typeof n.id) throw new Error('Invalid "id" value stored in user cookie.');
                if (!n.login || "string" != typeof n.login) throw new Error('Missing or invalid "login" value stored in user cookie.');
                if (n.version) {
                    if ("number" != typeof n.version) throw new Error('Invalid "version" value stored in user cookie.')
                } else e.debug("Unversioned user cookie, using default."), n.version = 1;
                return e.debug("Successfully loaded user data.", n), n
            } catch (n) {
                e.error(n, "Failed to load data from user cookie.", {
                    data: t
                }), d.remove(m)
            }
        }

        function a() {
            return d.get(g)
        }

        function s(e) {
            var t = d.get(p);
            if (t) try {
                return JSON.parse(t)
            } catch (n) {
                e.withCategory("auth").error(n, "Failed to load login state from cookie.", {
                    state: t
                }), d.remove(p)
            }
        }

        function l(e) {
            d.set(p, JSON.stringify(e), w)
        }

        function c() {
            d.remove(p, w)
        }
        n.d(t, "a", function() {
            return v
        }), t.e = r, t.h = i, t.d = o, t.b = a, t.c = s, t.g = l, t.f = c;
        var u = n(0),
            d = n(35),
            h = (n.n(d), n(44)),
            p = "twilight-login-state",
            g = "api_token",
            m = "twilight-user",
            f = [p, m, "persistent", g, "_twitch_session_id", "login", "name", "twilight-auth"],
            v = 2,
            w = {
                domain: Object(h.a)(),
                secure: "https:" === window.location.protocol
            },
            b = u.__assign({}, w, {
                expires: 365
            })
    },
    5: function(e, t, n) {
        "use strict";

        function r(e, t) {
            return function(n) {
                return function(r) {
                    function a(n, i) {
                        var o = r.call(this, n) || this;
                        return o.logger = l.i.withCategory("latency-tracking"), o.getChildContext = function() {
                            return {
                                latencyTracking: o.tracker
                            }
                        }, t && t.isRoot ? o.tracker = l.n.benchmarking.getRootLatencyTracker() : i.latencyTracking ? o.tracker = i.latencyTracking.createChild(e, t && t.destination) : (o.tracker = new u(e, t && t.destination), o.tracker.root = new u("Root", t && t.destination)), o
                    }
                    return i.__extends(a, r), a.prototype.componentDidMount = function() {
                        t && t.autoReportInteractive && (this.logger.debug("Using default implementation of reportInteractive", {
                            componentID: e
                        }), this.tracker.reportInteractive())
                    }, a.prototype.render = function() {
                        var e = {
                            latencyTracking: this.tracker,
                            rootLatencyTracker: t && t.isRoot ? this.tracker : this.tracker.root
                        };
                        return o.createElement(n, i.__assign({}, this.props, e))
                    }, a.contextTypes = {
                        latencyTracking: s.object
                    }, a.childContextTypes = {
                        latencyTracking: s.object
                    }, a
                }(o.Component)
            }
        }
        var i = n(0),
            o = n(1),
            a = n(3),
            s = n(10),
            l = n(2),
            c = n(23),
            u = function() {
                function e(e, t) {
                    var n = this;
                    this.getLocation = function() {
                        return n.location
                    }, this.name = e, this.destination = t
                }
                return e.prototype.reportInteractive = function(e) {
                    return e
                }, e.prototype.createChild = function(t, n) {
                    return new e(t, n)
                }, e.prototype.setLocation = function(e) {
                    this.location = e
                }, e.prototype.reset = function() {}, e.prototype.registerCustomEvent = function(e, t, n, r) {
                    return {
                        key: t,
                        label: n,
                        benchmark: r,
                        duration: {
                            latencyStatus: c.a.Unknown,
                            group: e
                        }
                    }
                }, e.prototype.reportCustomEvent = function(e) {}, e.prototype.resetCustomEvents = function(e) {}, e
            }(),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(a.l, i.__assign({
                        size: this.props.size,
                        imageSrc: this.props.imageSrc,
                        imageAlt: this.props.imageAlt,
                        onImageLoad: this.handleLoad
                    }, Object(a._39)(this.props)))
                }, t = i.__decorate([r("CriticalAvatar")], t)
            }(o.Component),
            h = d,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement("img", i.__assign({
                        alt: this.props.alt,
                        className: this.props.className,
                        src: this.props.src,
                        onLoad: this.handleLoad
                    }, Object(a._39)(this.props)))
                }, t = i.__decorate([r("CriticalImage")], t)
            }(o.Component),
            g = p,
            m = n(28),
            f = n(40),
            v = n(27),
            w = n(24),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement("span", null, this.bytesToSize(this.props.totalSize))
                }, t.prototype.bytesToSize = function(e) {
                    var t = ["Bytes", "KB", "MB", "GB", "TB"];
                    if (0 === e) return "0 Bytes";
                    var n = Math.floor(Math.log(e) / Math.log(1024));
                    return Math.round(e / Math.pow(1024, n)) + " " + t[n]
                }, t
            }(o.Component),
            y = n(4),
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.metric.latencyStatus === c.a.Unknown || void 0 === this.props.metric.value) return o.createElement("span", {
                        className: "latency-metrics__dot-animation"
                    }, " ");
                    var e = this.props.metric.latencyStatus === c.a.Fail ? "red" : "green";
                    return o.createElement("span", {
                        className: "latency-metrics__item-number latency-metrics__item-" + e
                    }, Math.round(this.props.metric.value), " ms")
                }, t
            }(o.Component),
            E = _,
            k = (n(242), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onClickExpand = function() {
                        n.setState({
                            isExpanded: !n.state.isExpanded
                        })
                    };
                    var r = t.tracker.depth < 2;
                    return n.state = {
                        isExpanded: r
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.tracker.isRoot ? o.createElement("div", {
                        className: "latency-metrics-component"
                    }, o.createElement("div", {
                        className: "request-latency-metrics__header"
                    }, o.createElement("div", {
                        className: "request-latency-metrics__header-url"
                    }, "Component"), o.createElement("div", {
                        className: "request-latency-metrics__header-time"
                    }, "Started"), o.createElement("div", {
                        className: "request-latency-metrics__header-size"
                    }, "Duration")), o.createElement("ul", null, this.renderItem())) : this.renderItem()
                }, t.prototype.renderItem = function() {
                    var e = this.props.tracker,
                        t = e.children.length > 0,
                        n = {
                            "latency-metrics-component__metrics": !0,
                            "latency-metrics-component__metrics-with-children": t
                        };
                    return o.createElement("li", null, o.createElement("div", {
                        className: y(n),
                        onClick: this.onClickExpand
                    }, o.createElement("div", {
                        className: "latency-metrics-component__left"
                    }, o.createElement("span", {
                        className: "latency-metrics-component__name"
                    }, e.componentName), " ", t && o.createElement("span", null, "(", e.children.length, ")")), o.createElement("div", {
                        className: "latency-metrics-component__time"
                    }, Math.round(e.relativeStartTime), " ms"), o.createElement("div", {
                        className: "latency-metrics-component__duration"
                    }, o.createElement(E, {
                        metric: e.componentDuration
                    }))), o.createElement("ul", null, this.state.isExpanded && e.children.map(function(e) {
                        return o.createElement(S, {
                            tracker: e,
                            key: e.id
                        })
                    })))
                }, t
            }(o.Component)),
            S = k,
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.metric.latencyStatus === c.a.Unknown || void 0 === this.props.metric.value) return o.createElement("span", {
                        className: "latency-metrics__dot-animation"
                    }, " ");
                    var e = this.props.metric.latencyStatus === c.a.Fail ? "red" : "green";
                    return o.createElement("span", {
                        className: "latency-metrics__item-number latency-metrics__item-" + e
                    }, this.props.metric.value)
                }, t
            }(o.Component),
            L = C,
            T = (n(243), function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return o.createElement("div", {
                        className: "query-metrics"
                    }, o.createElement("div", {
                        className: "query-metrics__header"
                    }, o.createElement("div", {
                        className: "query-metrics__header-batch"
                    }, "Batch"), o.createElement("div", {
                        className: "query-metrics__header-name"
                    }, "Name"), o.createElement("div", {
                        className: "query-metrics__header-time"
                    }, "Started"), o.createElement("div", {
                        className: "query-metrics__header-time"
                    }, "Request"), o.createElement("div", {
                        className: "query-metrics__header-time"
                    }, "Query")), this.props.queryMetrics.map(function(t) {
                        return e.renderItem(t)
                    }))
                }, t.prototype.renderItem = function(e) {
                    var t = e.queryID;
                    return o.createElement("div", {
                        className: "query-metrics__item",
                        key: t
                    }, o.createElement("div", {
                        className: "query-metrics__item-batch"
                    }, e.batchID), o.createElement("div", {
                        className: "query-metrics__item-name"
                    }, this.renderQueryTitle(e)), o.createElement("div", {
                        className: "query-metrics__item-time"
                    }, Math.round(e.relativeStartTime), " ms"), o.createElement("div", {
                        className: "query-metrics__item-time"
                    }, e.requestDuration && e.requestDuration.latencyStatus && o.createElement(E, {
                        metric: e.requestDuration
                    })), o.createElement("div", {
                        className: "query-metrics__item-time"
                    }, o.createElement(E, {
                        metric: e.queryDuration
                    })))
                }, t.prototype.renderQueryTitle = function(e) {
                    var t = e.variables && e.variables;
                    return t && t.id ? o.createElement("span", null, e.operationName, " (id: ", t.id, ")") : o.createElement("span", null, e.operationName)
                }, t
            }(o.Component)),
            x = T,
            N = (n(244), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return o.createElement("div", {
                        className: "request-latency-metrics"
                    }, o.createElement("div", {
                        className: "request-latency-metrics__header"
                    }, o.createElement("div", {
                        className: "request-latency-metrics__header-url"
                    }, "Url"), o.createElement("div", {
                        className: "request-latency-metrics__header-time"
                    }, "Started"), o.createElement("div", {
                        className: "request-latency-metrics__header-size"
                    }, "Size"), o.createElement("div", {
                        className: "request-latency-metrics__header-time"
                    }, "Time")), this.props.metricsGroup.metrics.map(function(t) {
                        return e.renderItem(t)
                    }))
                }, t.prototype.getDisplayLink = function(e) {
                    var t = new URL(e),
                        n = t.hostname + t.pathname;
                    if (n.length < 24) return n;
                    var r = t.pathname.substring(t.pathname.lastIndexOf("/"));
                    r || l.i.warn("Failed to parse url", {
                        url: t,
                        fileName: r
                    });
                    var i = r.split(".");
                    return 3 === i.length && (r = i[0] + "." + i[2]), r.length > 24 && (r = r.substring(0, 16) + "..." + r.substring(r.lastIndexOf(".") - 4)), t.hostname + r
                }, t.prototype.renderItem = function(e) {
                    var t = e.networkEvent,
                        n = t.request_url + ":" + t.duration + ":" + t.start_time;
                    return o.createElement("div", {
                        className: "request-latency-metrics__item",
                        key: n
                    }, o.createElement("div", {
                        className: "request-latency-metrics__item-url",
                        title: t.request_url
                    }, o.createElement("div", null, this.getDisplayLink(t.request_url))), o.createElement("div", {
                        className: "request-latency-metrics__item-time"
                    }, Math.round(e.relativeStartTime), " ms"), o.createElement("div", {
                        className: "request-latency-metrics__item-size"
                    }, t.transfer_size && t.transfer_size > 0 ? o.createElement(b, {
                        totalSize: t.transfer_size
                    }) : o.createElement("span", null)), o.createElement("div", {
                        className: "request-latency-metrics__item-time"
                    }, o.createElement(E, {
                        metric: e.duration
                    })))
                }, t
            }(o.Component)),
            R = N,
            I = function() {
                function e() {}
                return e.getComponentStats = function(t) {
                    var n = 0,
                        r = 0,
                        i = 0,
                        o = 0;
                    e.updateLatencyStatus(t.rootInitDuration, 800), e.updateLatencyStatus(t.pageLoadDuration, 2e3), e.updateLatencyStatus(t.componentDuration, 2e3);
                    var a = e.flattenTrackers(t);
                    a.forEach(function(t) {
                        e.updateLatencyStatus(t.componentDuration, 400)
                    });
                    var s = a.map(function(e) {
                        return e.componentDuration.value || 0
                    });
                    s.length > 0 && (n = s.reduce(function(e, t) {
                        return e + t
                    }), r = Math.max.apply(Math, s), o = Math.min.apply(Math, s), i = n / s.length);
                    var l = {};
                    return a.forEach(function(e) {
                        l[e.componentDuration.latencyStatus] || (l[e.componentDuration.latencyStatus] = 0), l[e.componentDuration.latencyStatus]++
                    }), {
                        rootTracker: t,
                        average: e.getLatencyStatus(i, 400),
                        count: e.getLatencyStatus(a.length, 200),
                        max: e.getLatencyStatus(r, 400),
                        min: e.getLatencyStatus(o, 400),
                        countByStatus: l
                    }
                }, e.getNetworkStats = function(t) {
                    var n = t.networkEvents.filter(function(e) {
                        return e.isPrePageload
                    });
                    n.forEach(function(t) {
                        e.updateLatencyStatus(t.duration, 150)
                    });
                    var r = n.map(function(e) {
                            return e.networkEvent.duration
                        }),
                        i = n.map(function(e) {
                            return e.networkEvent.transfer_size || 0
                        }),
                        o = 0,
                        a = 0,
                        s = 0,
                        l = 0,
                        c = 0;
                    r.length && (o = r.reduce(function(e, t) {
                        return e + t
                    }), a = i.reduce(function(e, t) {
                        return e + t
                    }), s = Math.max.apply(Math, r), l = Math.min.apply(Math, r), c = o / r.length), n.sort(function(e, t) {
                        return (t.duration.value || 0) - (e.duration.value || 0)
                    });
                    var u = {};
                    return n.forEach(function(e) {
                        u[e.duration.latencyStatus] || (u[e.duration.latencyStatus] = 0), u[e.duration.latencyStatus]++
                    }), {
                        metrics: n,
                        average: e.getLatencyStatus(c, 150),
                        count: e.getLatencyStatus(n.length, 200),
                        max: e.getLatencyStatus(s, 150),
                        min: e.getLatencyStatus(l, 150),
                        totalSize: a,
                        countByStatus: u
                    }
                }, e.getQueryBatchStats = function(t) {
                    var n = t.queryBatchMetrics,
                        r = n.map(function(e) {
                            return e.slowestQueryInBatch || 0
                        }),
                        i = Math.max.apply(Math, r),
                        o = {
                            batchCount: {
                                value: n.length,
                                latencyStatus: c.a.Unknown
                            },
                            slowestQuery: {
                                value: i,
                                latencyStatus: c.a.Unknown
                            }
                        };
                    return e.updateLatencyStatus(o.batchCount, 3), e.updateLatencyStatus(o.slowestQuery, 150), o
                }, e.getQueryStats = function(t) {
                    var n = 0,
                        r = 0,
                        i = 0,
                        o = t.queryEvents;
                    o.forEach(function(t) {
                        e.updateLatencyStatus(t.requestDuration, 150), e.updateLatencyStatus(t.queryDuration, 150)
                    });
                    var a = o.map(function(e) {
                        return e.queryDuration.value || 0
                    });
                    a.length > 0 && (n = a.reduce(function(e, t) {
                        return e + t
                    }), r = Math.max.apply(Math, a), i = n / a.length), o.sort(function(e, t) {
                        return (t.queryDuration.value || 0) - (e.queryDuration.value || 0)
                    });
                    var s = {};
                    return o.forEach(function(e) {
                        s[e.queryDuration.latencyStatus] || (s[e.queryDuration.latencyStatus] = 0), s[e.queryDuration.latencyStatus]++
                    }), {
                        metrics: o,
                        count: e.getLatencyStatus(o.length, 200),
                        max: e.getLatencyStatus(r, 150),
                        average: e.getLatencyStatus(i, 150),
                        min: e.getLatencyStatus(0, 150),
                        countByStatus: s
                    }
                }, e.getLatencyStatus = function(e, t) {
                    return void 0 === e ? {
                        value: e,
                        latencyStatus: c.a.Unknown
                    } : {
                        value: e,
                        latencyStatus: e > t ? c.a.Fail : c.a.Pass
                    }
                }, e.updateLatencyStatus = function(e, t) {
                    e && void 0 !== e.value && (e.latencyStatus = e.value > t ? c.a.Fail : c.a.Pass)
                }, e.flattenTrackers = function(t, n) {
                    return n || (n = []), t.isRoot || n.push(t), t.children.forEach(function(t) {
                        e.flattenTrackers(t, n)
                    }), n
                }, e
            }(),
            z = (n(245), "twilight.perf-hide"),
            M = "twilight.perf-size",
            D = "twilight.perf-tab",
            A = 3,
            B = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderTab = function(e, t, r) {
                        var i = n.state.selectedTab === e,
                            s = function() {
                                return n.onClickTab(e)
                            };
                        return o.createElement(a.P, {
                            display: a.H.Flex,
                            alignItems: a.c.Center,
                            padding: .5,
                            margin: {
                                right: 1
                            }
                        }, o.createElement("button", {
                            onClick: s,
                            className: "latency-metrics__button" + (i ? " latency-metrics__button--selected" : "")
                        }, t, r && n.renderTabBubble(r)))
                    }, n.renderTabBubble = function(e) {
                        return o.createElement(a.U, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(a._0, {
                            label: e.toString(),
                            type: a._1.Notification
                        }))
                    }, n.onClickTab = function(e) {
                        l.k.set(D, e), n.setState({
                            selectedTab: e
                        })
                    }, n.onLatencyUpdate = function() {
                        var e = I.getComponentStats(n.tracker),
                            t = I.getNetworkStats(n.tracker),
                            r = I.getQueryStats(n.tracker),
                            i = I.getQueryBatchStats(n.tracker),
                            o = n.tracker.getCustomEvents();
                        n.setState({
                            componentStats: e,
                            networkStats: t,
                            queryStats: r,
                            queryBatchStats: i,
                            customEvents: o
                        })
                    }, n.onClickWindowSize = function() {
                        var e = n.state.size + 1;
                        e > A && (e = 0), l.k.set(M, e.toString()), n.setState({
                            size: e
                        })
                    }, n.onClickClose = function() {
                        n.setState({
                            hidden: !0
                        })
                    }, n.tracker = t.benchmarking.getRootLatencyTracker(), n.state = {
                        hidden: l.k.get(z, !1),
                        selectedTab: l.k.get(D, "overview"),
                        size: l.k.get(M, 0),
                        componentStats: I.getComponentStats(n.tracker),
                        networkStats: I.getNetworkStats(n.tracker),
                        queryStats: I.getQueryStats(n.tracker),
                        queryBatchStats: I.getQueryBatchStats(n.tracker),
                        customEvents: n.tracker.getCustomEvents()
                    }, n.tracker.subscribeToUpdates(n.onLatencyUpdate), n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    window.addEventListener("keydown", function(t) {
                        t.keyCode === f.a.P && t.shiftKey && e.state.hidden ? (l.k.remove(z), e.setState({
                            hidden: !1
                        })) : t.keyCode === f.a.P && t.shiftKey && !e.state.hidden && (l.k.set(z, !0), e.setState({
                            hidden: !0
                        }))
                    })
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("keydown")
                }, t.prototype.render = function() {
                    return this.state.hidden ? null : o.createElement(a.U, {
                        className: "latency-metrics latency-metrics__size-" + this.state.size + " " + Object(w.c)(v.a.Dark),
                        position: a._3.Fixed,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(a.U, {
                        className: "latency-metrics__header-container",
                        display: a.H.Flex,
                        flexWrap: a.K.NoWrap,
                        alignItems: a.c.Center,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            x: 1
                        }
                    }, this.renderTab("overview", "Overview"), this.renderTab("components", "Components", this.state.componentStats.countByStatus[c.a.Fail]), this.renderTab("queries", "Queries", this.state.queryStats.countByStatus[c.a.Fail]), this.renderTab("requests", "Requests", this.state.networkStats.countByStatus[c.a.Fail]), o.createElement("div", {
                        className: "latency-metrics__controls"
                    }, o.createElement(a.v, {
                        onClick: this.onClickWindowSize,
                        icon: a._10.Maximize,
                        size: a.x.Small,
                        overlay: !0,
                        ariaLabel: "Change Size"
                    }), o.createElement(a.v, {
                        onClick: this.onClickClose,
                        icon: a._10.Close,
                        size: a.x.Small,
                        overlay: !0,
                        ariaLabel: "Close"
                    }))), o.createElement(a.U, {
                        className: "latency-metrics__body",
                        display: a.H.Flex,
                        flexDirection: a.J.Column,
                        flexGrow: 1,
                        fullHeight: !0,
                        overflow: a.Z.Hidden
                    }, "overview" === this.state.selectedTab && this.renderOverviewTab(), "components" === this.state.selectedTab && this.renderComponentsTab(), "queries" === this.state.selectedTab && this.renderQueriesTab(), "requests" === this.state.selectedTab && this.renderRequestsTab()), o.createElement("div", {
                        className: "latency-metrics__footer"
                    }, o.createElement("span", {
                        className: "latency-metrics__hint-text"
                    }, 'Press "Shift + P" to toggle latency metrics')))
                }, t.prototype.renderOverviewTab = function() {
                    var e = this,
                        t = this.state.networkStats,
                        n = this.state.queryStats,
                        r = this.state.queryBatchStats,
                        i = this.state.componentStats;
                    return o.createElement(m.b, {
                        className: "latency-metrics__scroller"
                    }, o.createElement(a.U, null, o.createElement(a.U, {
                        className: "latency-metrics__item",
                        display: a.H.Flex,
                        justifyContent: a.T.Between,
                        flexWrap: a.K.NoWrap
                    }, o.createElement(a.U, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, o.createElement("span", null, "Initialize")), o.createElement(a.U, {
                        className: "latency-metrics__item-right",
                        display: a.H.Flex,
                        flexWrap: a.K.NoWrap,
                        flexShrink: 0
                    }, o.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, this.tracker.isFirstLoad ? o.createElement(E, {
                        metric: this.tracker.rootInitDuration
                    }) : o.createElement("span", null, "n/a")))), o.createElement(a.U, {
                        className: "latency-metrics__item",
                        display: a.H.Flex,
                        justifyContent: a.T.Between,
                        flexWrap: a.K.NoWrap
                    }, o.createElement(a.U, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, o.createElement("span", null, this.tracker.isFirstLoad ? "Page Load" : "App Transition")), o.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, o.createElement(E, {
                        metric: this.tracker.pageLoadDuration
                    }))), o.createElement(a.U, {
                        className: "latency-metrics__item",
                        display: a.H.Flex,
                        justifyContent: a.T.Between,
                        flexWrap: a.K.NoWrap
                    }, o.createElement(a.U, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, o.createElement("span", null, "Components (", i.count.value, ")")), o.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats"
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Slowest:"), o.createElement(E, {
                        metric: i.max
                    }), o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Average:"), o.createElement(E, {
                        metric: i.average
                    })))), o.createElement(a.U, {
                        className: "latency-metrics__item",
                        display: a.H.Flex,
                        justifyContent: a.T.Between,
                        flexWrap: a.K.NoWrap
                    }, o.createElement(a.U, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, o.createElement("span", null, "Queries (", n.count.value, ")")), o.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats"
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Batches:"), o.createElement(L, {
                        metric: r.batchCount
                    }), o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Slowest:"), o.createElement(E, {
                        metric: n.max
                    }), o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Average:"), o.createElement(E, {
                        metric: n.average
                    })))), o.createElement(a.U, {
                        className: "latency-metrics__item",
                        display: a.H.Flex,
                        justifyContent: a.T.Between,
                        flexWrap: a.K.NoWrap
                    }, o.createElement(a.U, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, o.createElement("span", null, "Requests (", t.count.value, ")")), o.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats"
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Slowest:"), o.createElement(E, {
                        metric: t.max
                    }), o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Average:"), o.createElement(E, {
                        metric: t.average
                    }), o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Size:"), " ", o.createElement(b, {
                        totalSize: t.totalSize
                    })))), Object.keys(this.state.customEvents).map(function(t) {
                        return e.renderCustomEventGroup(t, e.state.customEvents[t])
                    })))
                }, t.prototype.renderCustomEventGroup = function(e, t) {
                    var n = this;
                    return o.createElement(a.U, {
                        key: e,
                        className: "latency-metrics__item",
                        display: a.H.Flex,
                        justifyContent: a.T.Between,
                        flexWrap: a.K.NoWrap
                    }, o.createElement(a.U, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, o.createElement("span", null, e)), o.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, t.map(function(e) {
                        return n.renderCustomEvent(e)
                    })))
                }, t.prototype.renderCustomEvent = function(e) {
                    return o.createElement("span", {
                        key: e.key
                    }, o.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, e.label, ":"), " ", o.createElement(E, {
                        metric: e.duration
                    }))
                }, t.prototype.renderComponentsTab = function() {
                    return o.createElement(m.b, {
                        className: "latency-metrics__scroller"
                    }, o.createElement(S, {
                        tracker: this.tracker
                    }))
                }, t.prototype.renderRequestsTab = function() {
                    return o.createElement(m.b, {
                        className: "latency-metrics__scroller"
                    }, o.createElement(R, {
                        metricsGroup: this.state.networkStats
                    }))
                }, t.prototype.renderQueriesTab = function() {
                    return o.createElement(m.b, {
                        className: "latency-metrics__scroller"
                    }, o.createElement(x, {
                        queryMetrics: this.tracker.queryEvents
                    }))
                }, t
            }(o.Component),
            P = B;
        n.d(t, "a", function() {
            return h
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, "b", function() {
            return P
        }), n.d(t, "c", function() {
            return r
        })
    },
    52: function(e, t, n) {
        "use strict";

        function r() {
            var e = s.k.get(s.n.config.layoutCacheKey, {
                    resource: {
                        isSocialColumnClosedByUserAction: !1,
                        isRightColumnClosedByUserAction: !1
                    },
                    time: Date.now()
                }),
                t = Object(c.b)();
            return {
                persistentPlayerEnabled: s.k.get(s.n.config.persistentPlayerEnabledKey, !0),
                persistentPlayerIsPersisting: !1,
                rightColumnExpanded: !e.resource.isRightColumnClosedByUserAction,
                sideNavExpanded: !e.resource.isSocialColumnClosedByUserAction,
                theatreModeEnabled: !1,
                theme: t,
                topNavNotificationBarEnabled: !1
            }
        }

        function i(e, t) {
            switch (void 0 === e && (e = r()), t.type) {
                case u.e:
                    return a.__assign({}, e, {
                        rightColumnExpanded: !0
                    });
                case u.d:
                    return a.__assign({}, e, {
                        rightColumnExpanded: !1
                    });
                case u.g:
                    return a.__assign({}, e, {
                        sideNavExpanded: !0
                    });
                case u.f:
                    return a.__assign({}, e, {
                        sideNavExpanded: !1
                    });
                case u.i:
                    return a.__assign({}, e, {
                        theatreModeEnabled: !0
                    });
                case u.h:
                    return a.__assign({}, e, {
                        theatreModeEnabled: !1
                    });
                case u.j:
                    return a.__assign({}, e, {
                        theme: t.theme
                    });
                case u.c:
                    return a.__assign({}, e, {
                        persistentPlayerEnabled: !e.persistentPlayerEnabled
                    });
                case u.b:
                    return a.__assign({}, e, {
                        persistentPlayerIsPersisting: !1
                    });
                case u.a:
                    return a.__assign({}, e, {
                        persistentPlayerIsPersisting: !0
                    });
                case u.k:
                    return a.__assign({}, e, {
                        topNavNotificationBarEnabled: t.topNavNotificationBarEnabled
                    });
                default:
                    return e
            }
        }

        function o(e) {
            return e.ui.theatreModeEnabled ? l.a.Dark : e.ui.theme
        }
        t.a = o;
        var a = n(0),
            s = n(2),
            l = n(27),
            c = n(24),
            u = n(53);
        s.n.store.registerReducer("ui", i)
    },
    53: function(e, t, n) {
        "use strict";

        function r() {
            return {
                type: w
            }
        }

        function i() {
            return {
                type: b
            }
        }

        function o() {
            return {
                type: E
            }
        }

        function a() {
            return {
                type: k
            }
        }

        function s() {
            return {
                type: y
            }
        }

        function l() {
            return {
                type: _
            }
        }

        function c(e) {
            return {
                type: S,
                theme: e
            }
        }

        function u() {
            return {
                type: m
            }
        }

        function d() {
            return {
                type: f
            }
        }

        function h() {
            return {
                type: v
            }
        }

        function p(e) {
            return {
                type: g,
                topNavNotificationBarEnabled: e
            }
        }
        n.d(t, "k", function() {
            return g
        }), n.d(t, "c", function() {
            return m
        }), n.d(t, "a", function() {
            return f
        }), n.d(t, "b", function() {
            return v
        }), n.d(t, "d", function() {
            return w
        }), n.d(t, "e", function() {
            return b
        }), n.d(t, "i", function() {
            return y
        }), n.d(t, "h", function() {
            return _
        }), n.d(t, "f", function() {
            return E
        }), n.d(t, "g", function() {
            return k
        }), n.d(t, "j", function() {
            return S
        }), t.m = r, t.q = i, t.n = o, t.r = a, t.p = s, t.o = l, t.t = c, t.u = u, t.l = d, t.s = h, t.v = p;
        var g = "core.ui.TOP_NAV_NOTIFICATION_BAR_TOGGLED",
            m = "core.ui.PERSISTENT_PLAYER_TOGGLED",
            f = "core.ui.PERSISTENT_PLAYER_BEGAN_PERSISTING",
            v = "core.ui.PERSISTENT_PLAYER_STOPPED_PERSISTING",
            w = "core.ui.RIGHT_COLUMN_COLLAPSED",
            b = "core.ui.RIGHT_COLUMN_EXPANDED",
            y = "core.ui.THEATRE_ENABLED",
            _ = "core.ui.THEATRE_DISABLED",
            E = "core.ui.SIDE_NAV_COLLAPSED",
            k = "core.ui.SIDE_NAV_EXPANDED",
            S = "core.ui.THEME_CHANGED"
    },
    54: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                type: s,
                user: e || void 0
            }
        }

        function i(e, t) {
            return {
                type: l,
                languageCode: e,
                locale: t
            }
        }

        function o() {
            return {
                type: c
            }
        }

        function a() {
            return {
                type: u
            }
        }
        n.d(t, "a", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        }), t.e = r, t.h = i, t.f = o, t.g = a;
        var s = "core.session.AUTH_INITIALIZED",
            l = "core.session.LANGUAGE_INITIALIZED",
            c = "core.session.FIRST_PAGE_LOADED",
            u = "core.session.INITIAL_AVAILABILITY_SET"
    },
    56: function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {
                action: t.action,
                auth_ux: "modal",
                type: t.type,
                nonce: t.nonce
            };
            a.n.tracking.track(e, n)
        }

        function i() {
            for (var e = "", t = 0; t < s; t++) {
                var n = Math.floor(Math.random() * l.length);
                e += l.charAt(n)
            }
            return e
        }
        n.d(t, "a", function() {
            return o
        }), t.c = r, t.b = i;
        var o, a = n(2),
            s = 30,
            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        ! function(e) {
            e.BitsLandingPage = "bits_landing_page", e.ChatLoginButton = "chat_login_button", e.ChatSignupButton = "chat_signup_button", e.Chat = "chat", e.ChannelUpsellLogin = "channel_upsell_login", e.ChannelUpsellSignup = "channel_upsell_signup", e.ClipsManager = "clips_manager", e.DashboardPage = "dashboard_page", e.DirectoryFollowButton = "directory-follow-button", e.EventFollowButton = "event_follow_button", e.FeedReactionToggle = "feed_reaction_toggle", e.FollowButton = "follow-button", e.FollowGameButton = "follow-game-button", e.FollowingPage = "following_page", e.FriendAdd = "friend_add", e.HCGSignupButton = "hgc_signup_button", e.RaidJoin = "raid_join", e.ReportHoster = "report_hoster", e.ReportChannel = "report_channel", e.SubsLandingPage = "subs_landing_Page", e.TopNavLoginButton = "topnav_login_button", e.TopNavSignupButton = "topnav_signup_button", e.TrendingEmotesLogin = "trending-emotes-login", e.TrendingEmotesSignup = "trending-emotes-signup", e.VODComment = "vod_comment", e.VODOptions = "vod_options"
        }(o || (o = {}))
    },
    58: function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = {}, n = 0, r = Object.keys(e).filter(function(e) {
                    return e.startsWith("data-")
                }); n < r.length; n++) {
                var i = r[n];
                t[i] = e[i]
            }
            return t
        }
        t.a = r
    },
    6: function(e, t, n) {
        "use strict";

        function r(e) {
            return e.definitions.reduce(function(t, n) {
                if (n.kind !== w.Operation) return {};
                var r = n;
                if ("query" !== r.operation) return {};
                for (var o = 0, a = r.selectionSet.selections; o < a.length; o++) {
                    var s = a[o],
                        l = i(s, e);
                    l && (t = p.__assign({}, t, l))
                }
                return t
            }, {})
        }

        function i(e, t) {
            var n = o(e, t);
            if (!n || 0 === n.length) return {};
            var r = {};
            if (e.directives)
                for (var i = 0, a = e.directives; i < a.length; i++) {
                    var s = a[i],
                        l = s.name.value;
                    if ((l === h.Include || l === h.Skip) && s.arguments) {
                        var c = s.arguments[0];
                        if ("if" === c.name.value) {
                            var u = c.value.name.value;
                            r[l] = u
                        }
                    }
                }
            for (var d = {}, p = 0, g = n; p < g.length; p++) {
                d[g[p]] = r
            }
            return d
        }

        function o(e, t) {
            if (e.kind === v.Field) return [e.alias ? e.alias.value : e.name.value];
            if (e.kind === v.FragmentSpread) {
                var n = e.name.value,
                    r = t.definitions.find(function(e) {
                        return e.kind === w.Fragment && e.name.value === n
                    });
                if (!r) return;
                return r.selectionSet.selections.reduce(function(e, n) {
                    var r = o(n, t);
                    if (r) return e.concat(r)
                }, [])
            }
        }

        function a(e, t) {
            return t && t.options ? "object" == typeof t.options ? t.options.variables || {} : "function" == typeof t.options ? t.options(e).variables || {} : {} : {}
        }

        function s(e, t) {
            if (t && t.skip) {
                if ("boolean" == typeof t.skip) return t.skip;
                if ("function" == typeof t.skip) return t.skip(e)
            }
            return !1
        }

        function l(e, t, n) {
            if (!e[t]) return {};
            for (var r = {}, i = 0, o = Object.keys(e[t]); i < o.length; i++) {
                var a = o[i];
                n[a] && (r[a] = e[t][a])
            }
            return r
        }

        function c(e) {
            for (var t = e.dataProps, n = e.nextDataProps, r = e.nextProps, i = e.cachedData, o = e.operationName, s = e.operationOptions, l = e.queryFields, c = e.queryName, u = e.logger, d = !1, p = !1, g = 0, m = Object.keys(t); g < m.length; g++) {
                var f = m[g];
                if (void 0 === t[f] || void 0 !== n[f] || !r[o] || r[o].loading || r[o].error) void 0 !== n[f] && void 0 !== i[f] && (delete i[f], p = !0);
                else {
                    var v = l[f][h.Skip],
                        w = l[f][h.Include],
                        b = a(r, s);
                    if (v && void 0 !== b[v] && b[v]) continue;
                    if (w && void 0 !== b[w] && !b[w]) continue;
                    d = !0, i[f] = t[f]
                }
            }
            return p && u.debug("GraphQL corruption resolved for component.", {
                fieldName: o,
                queryName: c
            }), d
        }

        function u(e) {
            var t = e.definitions.find(function(e) {
                return e.kind === w.Operation && "query" === e.operation
            });
            return t && t.name && t.name.value || b
        }

        function d(e, t) {
            return function(n) {
                var i = function(i) {
                    function o() {
                        var n = null !== i && i.apply(this, arguments) || this;
                        return n.queryFields = r(e), n.operationName = t && t.name || "data", n.cachedData = {}, n.queryName = u(e), n.logger = f.i.withCategory("with-graphql"), n
                    }
                    return p.__extends(o, i), o.prototype.componentWillReceiveProps = function(e) {
                        if (!s(e, t)) {
                            var n = l(this.props, this.operationName, this.queryFields),
                                r = l(e, this.operationName, this.queryFields),
                                i = this;
                            if (c({
                                    dataProps: n,
                                    nextDataProps: r,
                                    cachedData: i.cachedData,
                                    operationName: i.operationName,
                                    queryFields: i.queryFields,
                                    queryName: i.queryName,
                                    logger: this.logger,
                                    operationOptions: t,
                                    nextProps: e
                                })) {
                                this.logCorruptDataFound();
                                var o = e[this.operationName];
                                o && o.refetch && o.refetch()
                            }
                        }
                    }, o.prototype.render = function() {
                        return g.createElement(n, p.__assign({}, this.getRenderProps()))
                    }, o.prototype.getRenderProps = function() {
                        return s(this.props, t) ? this.props : "object" != typeof this.props[this.operationName] ? this.props : p.__assign({}, this.props, (e = {}, e[this.operationName] = p.__assign({}, this.cachedData, this.props[this.operationName]), e));
                        var e
                    }, o.prototype.logCorruptDataFound = function() {
                        var e = f.b.get("withgraphql_error_on_corruption", !1),
                            t = {
                                fieldName: this.operationName,
                                queryName: this.queryName
                            },
                            n = "GraphQL data corrupted for component.";
                        e ? this.logger.error(new Error("GraphQL data corrupted for component using query " + this.queryName), n, t) : this.logger.warn(n, t)
                    }, o.displayName = "WithGraphQL(" + (n.displayName || n.name || "Component") + ")", o
                }(g.Component);
                return Object(m.graphql)(e, t)(i)
            }
        }
        var h, p = n(0),
            g = n(1),
            m = n(33),
            f = n(2);
        ! function(e) {
            e.Skip = "skip", e.Include = "include"
        }(h || (h = {}));
        var v;
        ! function(e) {
            e.Field = "Field", e.FragmentSpread = "FragmentSpread"
        }(v || (v = {}));
        var w;
        ! function(e) {
            e.Operation = "OperationDefinition", e.Fragment = "FragmentDefinition"
        }(w || (w = {}));
        var b = "UnnamedQuery";
        n.d(t, "a", function() {
            return d
        })
    },
    60: function(e, t, n) {
        "use strict";
        var r = n(179);
        n.d(t, "SpadeFollowingCategory", function() {
            return r.a
        }), n.d(t, "SpadePlatform", function() {
            return r.b
        }), n.d(t, "SpadeVideoBroadcastType", function() {
            return r.c
        }), n.d(t, "TwitchDataType", function() {
            return r.d
        });
        var i = n(180);
        n.d(t, "SpadeEventType", function() {
            return i.a
        });
        var o = n(181);
        n.d(t, "PageviewContent", function() {
            return o.a
        }), n.d(t, "PageviewDirectoryContentType", function() {
            return o.b
        }), n.d(t, "PageviewFollowingTab", function() {
            return o.c
        }), n.d(t, "PageviewLocation", function() {
            return o.d
        }), n.d(t, "PageviewMedium", function() {
            return o.e
        });
        var a = n(182);
        n.n(a);
        n.o(a, "ShareItemContext") && n.d(t, "ShareItemContext", function() {
            return a.ShareItemContext
        }), n.o(a, "ShareItemSourceItemType") && n.d(t, "ShareItemSourceItemType", function() {
            return a.ShareItemSourceItemType
        }), n.o(a, "ShareItemType") && n.d(t, "ShareItemType", function() {
            return a.ShareItemType
        });
        var s = n(183);
        n.d(t, "ShareItemContext", function() {
            return s.a
        }), n.d(t, "ShareItemSourceItemType", function() {
            return s.b
        }), n.d(t, "ShareItemType", function() {
            return s.c
        })
    },
    67: function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", r = 0; r < e; r++) n += t.charAt(Math.floor(Math.random() * t.length));
            return n
        }

        function i() {
            return "" + h + r(5) + "/" + r(10) + "/" + r(6) + "'/;ord='" + Date.now()
        }

        function o(e) {
            return !!(e && e.timing && e.getEntriesByType && e.setResourceTimingBufferSize && e.clearResourceTimings)
        }

        function a(e) {
            var t = e ? se()() : oe()(),
                n = t.push.bind(t),
                r = /^([^#?]+)?(\?[^#]+)?(\#.+)?$/i;
            return t.push = function(e, i) {
                var o = t.location.pathname,
                    a = "",
                    s = "";
                if ("string" == typeof e) {
                    var l = r.exec(e);
                    if (!l) return void n(e, i);
                    l[1] && (o = l[1]), l[2] && (a = l[2]), l[3] && (s = l[3])
                } else e.pathname && (o = e.pathname), e.search && (a = e.search, a.startsWith("?") || (a = "?" + a)), e.hash && (s = e.hash, s.startsWith("#") || (s = "#" + s));
                (o === t.location.pathname || !o.startsWith("/") && t.location.pathname.endsWith("/" + o)) && a === t.location.search && s === t.location.hash ? t.replace(e, i) : n(e, i)
            }, t
        }

        function s(e) {
            ge = new xe(e), me = ge.config, fe = ge.dynamicSettings, ve = ge.intl.formatDate, we = ge.intl.formatMessage, be = ge.intl.formatNumber, ye = ge.intl.formatNumberShort, _e = ge.intl.formatRelativeDate, Ee = ge.intl.formatTime, ke = ge.logger, Se = ge.pubsub, Ce = ge.storage, Le = ge.tempStorage, Te = ge.tracking
        }
        var l = n(1),
            c = n(33),
            u = n(117),
            d = n(15),
            h = "https://ad.doubleclick.net/ddm/ad/",
            p = n(98),
            g = function() {
                function e(e) {
                    this.detect = !1, this.logger = e.logger.withCategory("ad-block-detector"), this.logger.debug("Created.")
                }
                return e.prototype.detectAdBlock = function() {
                    this.logger.debug("Start ad block tests."), this.detectEasyList(), this.detectEasyListPrivacy()
                }, e.prototype.detectEasyList = function() {
                    var e = this,
                        t = {
                            method: "GET",
                            mode: "no-cors"
                        };
                    fetch(i(), t).then(function() {
                        e.logger.debug("DoubleClick is reachable.")
                    }).catch(function(t) {
                        e.logger.debug("DoubleClick is unreachable.", {
                            err: t
                        }), e.detect = !0
                    })
                }, e.prototype.detectEasyListPrivacy = function() {
                    var e = this,
                        t = {
                            event: "dummy-event",
                            properties: {
                                time: Date.now(),
                                random1: r(256),
                                random2: r(256),
                                random3: r(256),
                                random4: r(256)
                            }
                        },
                        n = {
                            method: "POST",
                            body: new Blob([Object(p.a)([t])], {
                                type: "application/x-www-form-urlencoded; charset=UTF-8"
                            })
                        };
                    fetch("https://spade.twitch.tv", n).then(function(t) {
                        e.logger.debug("Spade is reachable.", {
                            status: t.status
                        })
                    }).catch(function(t) {
                        e.logger.debug("Spade unreachable: ", {
                            err: t
                        }), e.detect = !0
                    })
                }, e.prototype.addTwitchGlobal = function() {
                    if (window.Twitch || (window.Twitch = {}), window.Twitch.sentinel) return void this.logger.debug("Sentinel global already exists.", {
                        sentinel: window.Twitch.sentinel
                    });
                    window.Twitch.sentinel = this, this.logger.debug("Setting global sentinel.")
                }, e
            }();
        window._sp_ = window._sp_ || {}, window._sp_.config = window._sp_.config || {};
        var m, f = function() {
                function e(e) {
                    var t = this;
                    this.detect = !1, this.logger = e.logger.withCategory("AdBlockSentinel"), window.sp_cid = e.cid, window._sp_.config.account_id = e.accountID, document.addEventListener("sp.blocking", function() {
                        t.logger.debug("Ad blocker detected"), t.detect = !0
                    }), document.addEventListener("sp.not_blocking", function() {
                        t.logger.debug("Ad blocker not detected"), t.detect = !1
                    }), this.logger.debug("Created")
                }
                return e.prototype.addTwitchGlobal = function() {
                    if (window.Twitch || (window.Twitch = {}), window.Twitch.sentinel) return void this.logger.debug("Sentinel global already exists");
                    window.Twitch.sentinel = this, this.logger.debug("Setting global sentinel")
                }, e.prototype.pageTransition = function() {
                    window._sp_ && window._sp_.pageChange ? (window._sp_.pageChange(), this.logger.debug("Called pageChange method")) : this.logger.debug("window._sp_ or window._sp_.pageChange does not exist.")
                }, e
            }(),
            v = n(0),
            w = n(35),
            b = n(347),
            y = n(21),
            _ = n(2),
            E = {
                "4d3d19a7-38c5-4328-9730-7d99565d5edd": "no",
                "ef25ca44-13bd-4e89-99d2-f9939c013fec": "off",
                "a9667563-723a-4cf7-b253-674d9eef0a53": "control",
                "e2969271-bad4-4088-a56d-9582b5e35a8f": "control",
                "74156eb2-ed95-482c-b006-60c1428e8846": "control",
                "9452d9e2-6588-408c-b8aa-1e54ff1e2f4a": "control",
                "011d1499-61b3-49b2-92b2-b2ffd353ef00": "no",
                "afc307f3-4011-40ba-9406-56c474b5922b": "control",
                "1318509a-bf97-475d-acdc-df6a24ef6e3e": "none",
                "3763f4e7-c786-4000-a6c3-b91b9c774302": "control",
                "d6bb4aa4-efae-4031-96be-f08950d6c8f4": "shown",
                "db2180db-bc89-4f97-8bef-208b1782e18f": "off",
                "4723fff0-7f41-43c7-88b3-246b014dfaf1": "control",
                "f866f89d-85de-4a5b-9b00-d97c791bc16d": "no",
                "47597570-dd4e-4996-85eb-86db164cae9c": "control",
                "50ac9a2b-63c2-46ed-9e7d-123363195dfd": "control",
                "7aa589f3-34d8-425f-8227-29007d50757e": "control"
            },
            k = {
                TWILIGHT_PREMIERE_UPLOAD_FLOW: "4d3d19a7-38c5-4328-9730-7d99565d5edd",
                STREAMER_TRAILERS: "ef25ca44-13bd-4e89-99d2-f9939c013fec",
                TWILIGHT_WEB_ONBOARDING: "a9667563-723a-4cf7-b253-674d9eef0a53",
                TWILIGHT_WEB_ONBOARDING_FOR_YOU: "e2969271-bad4-4088-a56d-9582b5e35a8f",
                TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING: "74156eb2-ed95-482c-b006-60c1428e8846",
                TWILIGHT_EXPANDO_FEATURO: "9452d9e2-6588-408c-b8aa-1e54ff1e2f4a",
                TWILIGHT_SUB_GIFTING: "011d1499-61b3-49b2-92b2-b2ffd353ef00",
                TWILIGHT_VIDEO_FEATURO_EN: "afc307f3-4011-40ba-9406-56c474b5922b",
                TWILIGHT_VIDEOS_IN_SIDENAV: "1318509a-bf97-475d-acdc-df6a24ef6e3e",
                TWILIGHT_FENIX_DOWN: "3763f4e7-c786-4000-a6c3-b91b9c774302",
                TWILIGHT_EVENT_GAME_DIRECTORY: "d6bb4aa4-efae-4031-96be-f08950d6c8f4",
                TWILIGHT_LEADERBOARDS: "db2180db-bc89-4f97-8bef-208b1782e18f",
                TWILIGHT_CHANNEL_LOGIN_UPSELL_V1: "4723fff0-7f41-43c7-88b3-246b014dfaf1",
                TWILIGHT_RAID_AUTO_JOIN: "f866f89d-85de-4a5b-9b00-d97c791bc16d",
                TWILIGHT_AML_RANKING_FOLLOWS: "47597570-dd4e-4996-85eb-86db164cae9c",
                TWILIGHT_NEW_BROWSE: "50ac9a2b-63c2-46ed-9e7d-123363195dfd",
                TWILIGHT_GROWTH_EMAIL_VERIFY_BAR: "7aa589f3-34d8-425f-8227-29007d50757e"
            },
            S = {
                TWILIGHT_PREMIERE_UPLOAD_FLOW: "yes",
                TWILIGHT_VIDEOS_IN_SIDENAV: "all_content"
            };
        ! function(e) {
            e.Channel = "channel_id", e.Device = "device_id", e.User = "user_id"
        }(m || (m = {}));
        var C, L = "twilight.ignore_experiments",
            T = function() {
                function e(e) {
                    this.ignoreExperiments = !1, this.logger = e.logger.withCategory("Experiment"), this.session = e.session, this.store = e.store, this.tracking = e.tracking, this.ignoreExperiments = e.storage.get(L, !1)
                }
                return e.prototype.getAssignment = function(e, t) {
                    return void 0 === t && (t = {}), v.__awaiter(this, void 0, void 0, function() {
                        var n, r, i, o, a;
                        return v.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return this.ignoreExperiments ? (this.logger.debug("Ingoring experiments because local storage key is present"), [2, null]) : [4, this.initialize()];
                                case 1:
                                    if (s.sent(), !k[e]) return this.logger.warn("Experiment name not in mapping", e), [2, null];
                                    if (n = k[e], !this.experiments[n]) return this.logger.warn("Unable to find experiment configuration", {
                                        name: e,
                                        id: n
                                    }), [2, null];
                                    if (r = this.experiments[n], !this.assignments[n]) return this.logger.warn("Unable to determine default assignment", {
                                        name: e,
                                        id: n,
                                        experiment: r
                                    }), [2, null];
                                    switch (i = this.assignments[n], this.overrides[n] ? o = this.overrides[n] : 3 === r.t ? t.channel ? o = Object(b.selectTreatment)(n, r, t.channel) : (this.logger.warn("Called getAssignment() for channel experiment with no channel", r), o = i) : o = i, r.t) {
                                        case 1:
                                            a = m.Device;
                                            break;
                                        case 2:
                                            a = m.User;
                                            break;
                                        case 3:
                                            a = m.Channel;
                                            break;
                                        default:
                                            a = void 0
                                    }
                                    return this.trackExperiment({
                                        assignment: o,
                                        channel: t.channel,
                                        id: n,
                                        name: r.name,
                                        version: r.v,
                                        type: a
                                    }), [2, o]
                            }
                        })
                    })
                }, e.prototype.trackExperiment = function(e) {
                    this.tracking.trackExperiment({
                        channel: e.channel || void 0,
                        device_id: this.session.deviceID,
                        login: this.login,
                        experiment_id: e.id,
                        experiment_group: e.assignment,
                        experiment_name: e.name,
                        experiment_version: e.version,
                        experiment_type: e.type
                    })
                }, e.prototype.initialize = function() {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return v.__generator(this, function(r) {
                            return this.initializing ? [2, this.initializing] : (this.initializing = new Promise(function(e) {
                                return n.initializeComplete = e
                            }), window.__twilightSettings && window.__twilightSettings.experiments ? (this.experiments = window.__twilightSettings && window.__twilightSettings.experiments, (e = Object(b.validate)(this.experiments)) && (this.logger.error(e, "Invalid experiment configuration. Experiments will be default"), this.experiments = {})) : (this.logger.warn("Unable to get experiment data from dynamic settings. Experiments will be default."), this.experiments = {}), t = this.store.getState().session.user, this.overrides = this.determineOverrides(!(!t || !t.roles) && t.roles.isStaff), this.login = t ? t.login : void 0, this.assignments = this.determineAssignments(this.experiments, this.session.deviceID, this.login), this.logger.debug("Experiment settings determined", {
                                overrides: this.overrides,
                                assignments: this.assignments,
                                experiments: this.experiments
                            }), this.initializeComplete(), [2, this.initializing])
                        })
                    })
                }, e.prototype.determineOverrides = function(e) {
                    var t = this,
                        n = {};
                    e && Object.keys(S).forEach(function(e) {
                        k[e] ? S[e] && (n[k[e]] = S[e]) : t.logger.warn("Staff experiment name is not in mapping", e)
                    });
                    var r = {};
                    try {
                        var i = w.get(_.a.experimentsOverrideCookie);
                        if (i) {
                            var o = JSON.parse(i);
                            Object.keys(o).forEach(function(e) {
                                E[e] ? r[e] = o[e] : t.logger.warn("Cookie experiment ID is not in DEFAULT_ASSIGNMENTS mapping", e)
                            })
                        }
                    } catch (e) {
                        this.logger.warn("Unable to parse cookie overrides", e)
                    }
                    var a = {},
                        s = y.parse(window.location.search);
                    if (s.experiments) try {
                        var l = JSON.parse(s.experiments);
                        Object.keys(l).forEach(function(e) {
                            k[e] ? a[k[e]] = l[e] : t.logger.warn("URL override experiment name is not in mapping", e)
                        })
                    } catch (e) {
                        this.logger.warn("Unable to parse URL overrides", e)
                    }
                    return v.__assign({}, n, r, a)
                }, e.prototype.determineAssignments = function(e, t, n) {
                    var r = this,
                        i = {};
                    return Object.keys(E).forEach(function(o) {
                        if (!e[o]) return void r.logger.warn("Experiment is deprecated", o);
                        var a = e[o];
                        1 === a.t ? i[o] = Object(b.selectTreatment)(o, a, t) : 2 === a.t && n ? i[o] = Object(b.selectTreatment)(o, a, n) : i[o] = E[o]
                    }), i
                }, e
            }(),
            x = n(177),
            N = n.n(x),
            R = function() {
                function e(e, t) {
                    this.store = e, this.logger = t.withCategory("pubsub")
                }
                return e.prototype.subscribe = function(e) {
                    var t = this;
                    this.driver || (this.driver = N.a.getInstance("production"));
                    var n = this.wrapMessageCallback(e.onMessage),
                        r = this.store.getState();
                    return this.driver.Listen({
                            topic: e.topic,
                            auth: r.session && r.session.user && r.session.user.authToken,
                            success: function() {
                                t.logger.debug("Subscribed to topic.", {
                                    opts: e
                                }), e.success && e.success()
                            },
                            failure: function(n) {
                                _.a.buildType === d.a.Production ? t.logger.warn("Failed to subscribe to topic.", {
                                    opts: e,
                                    err: n
                                }) : t.logger.error(new Error("Failed to subscribe to topic."), "Failed to subscribe to topic.", {
                                    opts: e,
                                    err: n
                                }), e.failure && e.failure(n)
                            },
                            message: n
                        }),
                        function() {
                            return t.unsubscribe(e, n)
                        }
                }, e.prototype.unsubscribe = function(e, t) {
                    var n = this;
                    this.driver.Unlisten({
                        topic: e.topic,
                        success: function() {
                            n.logger.debug("Unsubscribed from topic.", {
                                opts: e
                            })
                        },
                        failure: function(t) {
                            n.logger.error(new Error("Failed to unsubscribe from topic."), "Failed to unsubscribe from topic.", {
                                opts: e,
                                err: t
                            })
                        },
                        message: t
                    })
                }, e.prototype.wrapMessageCallback = function(e) {
                    var t = this;
                    return function(n) {
                        var r;
                        try {
                            r = JSON.parse(n)
                        } catch (e) {
                            return void t.logger.error(e, "Failed to parse message.", {
                                msg: n
                            })
                        }
                        e(r)
                    }
                }, e
            }(),
            I = function() {
                function e(e) {
                    this.currentPageComponentName = "", this.buildID = e.buildID, this.endpoint = e.endpoint, this.logger = e.logger.withCategory("sentinel"), this.session = e.session, this.store = e.store, this.logger.debug("Creating instance.", {
                        buildID: e.buildID,
                        endpoint: e.endpoint
                    })
                }
                return e.prototype.report = function(e) {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return v.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    t = {
                                        buildId: this.buildID,
                                        clientTime: Date.now(),
                                        deviceId: this.session.deviceID,
                                        pageComponentName: this.currentPageComponentName,
                                        pageSessionId: this.session.pageviewID,
                                        logEntries: e,
                                        platform: "web",
                                        product: "twilight",
                                        userAgent: navigator.userAgent,
                                        userId: 0,
                                        username: ""
                                    };
                                    try {
                                        n = this.store && this.store.getState().session.user, t.userId = n ? Number(n.id) : 0, t.username = n ? n.login : ""
                                    } catch (e) {
                                        this.logger.warn("Failed to get user data from the global store.", e)
                                    }
                                    this.logger.debug("Reporting error.", t), r = 1, o.label = 1;
                                case 1:
                                    if (!(r <= 3)) return [3, 6];
                                    o.label = 2;
                                case 2:
                                    return o.trys.push([2, 4, , 5]), [4, fetch(this.endpoint, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json; charset=UTF-8",
                                            Accept: "application/json; charset=UTF-8"
                                        },
                                        body: JSON.stringify(t)
                                    })];
                                case 3:
                                    return o.sent(), this.logger.debug("Report sent."), [2];
                                case 4:
                                    return i = o.sent(), this.logger.warn("Failed to submit error report.", {
                                        attempt: r,
                                        maxAttempts: 3
                                    }, i), [3, 5];
                                case 5:
                                    return ++r, [3, 1];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.setPageComponentName = function(e) {
                    this.currentPageComponentName = e
                }, e
            }(),
            z = n(13),
            M = n(350),
            D = function() {
                function e(e, t) {
                    this.logger = e.withCategory("tmi");
                    var n = this.getConnectionOptions(t);
                    this.disabled = n.disabled, this.logger.debug("Creating TMI client", n), this.client = new M.a({
                        connection: n,
                        logger: this.logger
                    })
                }
                return e.prototype.setIdentity = function(e, t) {
                    this.logger.debug("Setting identity", {
                        username: e,
                        authToken: t
                    }), this.client.updateIdentity({
                        username: e,
                        authToken: t
                    })
                }, e.prototype.connect = function() {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return v.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (this.disabled) return [2];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), this.pendingConnection ? this.logger.debug("Waiting on the pending connection...") : (this.logger.debug("Establishing a new connection to TMI..."), this.pendingConnection = this.client.connect()), [4, this.pendingConnection];
                                case 2:
                                    return e = n.sent(), this.logger.debug("Connection completed", e), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to connect, due to error", t), [3, 5];
                                case 4:
                                    return this.pendingConnection = null, [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.join = function(e) {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return v.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (this.disabled) return [2];
                                    r.label = 1;
                                case 1:
                                    return r.trys.push([1, 4, , 5]), [4, this.ensureConnected()];
                                case 2:
                                    return r.sent(), this.logger.debug("Joining channel..."), [4, this.client.joinChannel(e)];
                                case 3:
                                    return t = r.sent(), t.response.succeeded ? this.logger.debug("Joined channel", {
                                        duration: t.response.duration,
                                        channel: t.response.channel
                                    }) : this.logger.warn("Failed to join channel", {
                                        channel: t.response.channel
                                    }), [3, 5];
                                case 4:
                                    return n = r.sent(), this.logger.warn("Failed to join channel.", n), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.part = function(e) {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return v.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.client.isConnected()) return this.logger.warn("Attempt to part channel, but not connected."), [2];
                                    this.logger.debug("Parting channel..."), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), this.pendingPart = this.client.partChannel(e), [4, this.pendingPart];
                                case 2:
                                    return t = r.sent(), t.response.succeeded ? this.logger.debug("Parted channel", {
                                        channel: t.response.channel
                                    }) : this.logger.warn("Failed to part channel, due to response.", {
                                        channel: t.response.channel
                                    }), [3, 5];
                                case 3:
                                    return n = r.sent(), this.logger.warn("Failed to part channel, due to error.", n), [3, 5];
                                case 4:
                                    return this.logger.debug("Setting pending part to null"), this.pendingPart = null, [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.awaitParted = function() {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return v.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), this.pendingPart ? (this.logger.debug("Waiting for pending part operation..."), [4, this.pendingPart]) : [3, 2];
                                case 1:
                                    t.sent(), this.logger.debug("Pending part operation completed"), t.label = 2;
                                case 2:
                                    return [3, 4];
                                case 3:
                                    return e = t.sent(), this.logger.warn("Failed to ensure channel had parted before joining.", e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.disconnect = function() {
                    try {
                        this.client.disconnect()
                    } catch (e) {
                        this.logger.warn("Failed to disconnect client!", e)
                    }
                }, e.prototype.ensureConnected = function() {
                    return v.__awaiter(this, void 0, void 0, function() {
                        return v.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.client.isConnected() ? [3, 2] : (this.logger.debug("Connection not yet established. Waiting on connect to complete..."), [4, this.connect()]);
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    if (!this.client.isConnected()) throw new Error("Failed to connect");
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.getConnectionOptions = function(e) {
                    var t = {
                            disabled: !1,
                            secure: !0,
                            port: 443,
                            server: e.tmiHost
                        },
                        n = this.getQueryStringOptions();
                    return null === n ? (this.logger.debug("Using options from configuration"), t) : "false" === n.server ? v.__assign({}, t, {
                        disabled: !0
                    }) : e.buildType !== d.a.Dev ? t : {
                        disabled: !1,
                        secure: null !== n.secure ? n.secure : t.secure,
                        port: null !== n.port ? n.port : t.port,
                        server: null !== n.server ? n.server : t.server
                    }
                }, e.prototype.getQueryStringOptions = function() {
                    try {
                        var e = y.parse(window.location.search),
                            t = {
                                server: void 0 !== e.tmi_host ? e.tmi_host : null,
                                port: void 0 !== e.tmi_port ? +e.tmi_port : null,
                                secure: void 0 !== e.tmi_secure ? "false" !== e.tmi_secure : null
                            };
                        if (null !== t.server || null !== t.port || null !== t.secure) return this.logger.debug("Using options from query string", t), t
                    } catch (e) {
                        this.logger.warn("Failed to parse connection options from query string. Default options will be used.", e)
                    }
                    return null
                }, e
            }(),
            A = n(25),
            B = n(9),
            P = new c.IntrospectionFragmentMatcher({
                introspectionQueryResultData: {
                    __schema: {
                        types: [{
                            kind: "UNION",
                            name: "BitsOffer",
                            possibleTypes: [{
                                name: "BitsAdOffer"
                            }, {
                                name: "BitsBundleOffer"
                            }]
                        }, {
                            kind: "UNION",
                            name: "Activity",
                            possibleTypes: [{
                                name: "PlayingActivity"
                            }, {
                                name: "StreamingActivity"
                            }, {
                                name: "WatchingActivity"
                            }]
                        }, {
                            kind: "UNION",
                            name: "FeedItem",
                            possibleTypes: [{
                                name: "Post"
                            }, {
                                name: "Video"
                            }, {
                                name: "Stream"
                            }, {
                                name: "Clip"
                            }]
                        }, {
                            kind: "UNION",
                            name: "PostEmbed",
                            possibleTypes: [{
                                name: "Video"
                            }, {
                                name: "Clip"
                            }, {
                                name: "Stream"
                            }, {
                                name: "PhotoOEmbed"
                            }, {
                                name: "VideoOEmbed"
                            }]
                        }, {
                            kind: "INTERFACE",
                            name: "Panel",
                            possibleTypes: [{
                                name: "DefaultPanel"
                            }, {
                                name: "ExtensionPanel"
                            }]
                        }]
                    }
                }
            }),
            O = n(45),
            H = "apollo_excluded_errors",
            F = "apollo_log_errors",
            V = function() {
                function e(e) {
                    this.authToken = null, this.batchID = 0, this.excludedErrors = [], this.eventEmitter = new A.EventEmitter, this.logErrors = !1, this.queryID = 0, this.config = e.config, this.logger = e.logger.withCategory("apollo"), this.store = e.store, this.session = e.session, this.excludedErrors = e.dynamicSettings.get(H, []), this.logErrors = e.dynamicSettings.get(F, !1), this.client = this.createApolloClient(), this.reduxStore = Object(B.createStore)(Object(B.combineReducers)({
                        apollo: this.client.reducer()
                    }), (e.config.buildType !== d.a.Production && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || B.compose)(Object(B.applyMiddleware)(this.client.middleware())))
                }
                return e.prototype.addQueryMetricsListener = function(e) {
                    this.eventEmitter.addListener("query-metrics", e)
                }, e.prototype.removeQueryMetricsListener = function(e) {
                    this.eventEmitter.removeListener("query-metrics", e)
                }, e.prototype.createApolloClient = function() {
                    return new c.ApolloClient({
                        networkInterface: this.createNetworkInterface(),
                        queryDeduplication: !0,
                        fragmentMatcher: P
                    })
                }, e.prototype.createNetworkInterface = function() {
                    var e = this,
                        t = Object(c.createBatchingNetworkInterface)({
                            uri: this.config.graphqlEndpoint,
                            batchInterval: 10
                        });
                    return t.use([{
                        applyBatchMiddleware: function(t, n) {
                            var r = t.options;
                            r.twilight = {
                                batchID: ++e.batchID,
                                batchTimestamp: performance.timing.navigationStart + performance.now(),
                                requests: t.requests
                            }, r.headers || (r.headers = {}), r.headers["Client-Id"] = e.config.authClientID, r.headers["X-Device-Id"] = e.session.deviceID;
                            var i = e.store.getState();
                            i.session && (r.headers["Accept-Language"] = i.session.locale), e.authToken && (r.headers.Authorization = "OAuth " + e.authToken), n()
                        }
                    }]), t.useAfter([{
                        applyBatchAfterware: function(t, n) {
                            return v.__awaiter(e, void 0, void 0, function() {
                                var e, r, i, o, a, s, l, c, u, d = this;
                                return v.__generator(this, function(h) {
                                    switch (h.label) {
                                        case 0:
                                            e = 0, r = t.responses, h.label = 1;
                                        case 1:
                                            return e < r.length ? (i = r[e], i.status ? 401 !== i.status ? [3, 2] : this.config.embedded ? (this.logger.warn("Received 401 response from GraphQL."), [3, 4]) : (this.logger.warn("Received 401 response from GraphQL, logging user out."), Object(O.e)(), window.location.reload(!0), [2]) : [3, 5]) : [3, 6];
                                        case 2:
                                            return a = (o = this.logger).error, s = [new Error("Received non-200 response from GraphQL."), "Received non-200 response from GraphQL."], l = {
                                                status: i.status
                                            }, [4, i.text()];
                                        case 3:
                                            a.apply(o, s.concat([(l.body = h.sent(), l)])), h.label = 4;
                                        case 4:
                                            return n(), [2];
                                        case 5:
                                            return e++, [3, 1];
                                        case 6:
                                            return c = t.options, u = t.responses.map(function(e, t) {
                                                var n, r = e,
                                                    i = c.twilight.requests[t];
                                                if (n = r.extensions && !r.status ? {
                                                        queryID: ++d.queryID,
                                                        durationMs: r.extensions.durationMilliseconds,
                                                        operationName: r.extensions.operationName,
                                                        variables: i.variables
                                                    } : {
                                                        queryID: ++d.queryID,
                                                        operationName: "<extensions field missing>",
                                                        durationMs: 0
                                                    }, d.logErrors && r.errors && Array.isArray(r.errors)) {
                                                    var o = r.errors.filter(function(e) {
                                                        return !(!e || !e.message) && d.excludedErrors.every(function(t) {
                                                            return !e.message.startsWith(t)
                                                        })
                                                    });
                                                    r.errors.length !== o.length && d.logger.debug("Some errors were filtered and not submitted to sentinel", {
                                                        originalCount: r.errors.length,
                                                        filteredCount: o.length
                                                    }), o.length && d.logger.error(new Error("A GraphQL error occurred with " + n.operationName), "The GraphQL response returned with a non-empty errors array. The entire query will be discarded by Apollo.", {
                                                        info: n,
                                                        errors: o
                                                    })
                                                }
                                                return n
                                            }), this.eventEmitter.listeners("query-metrics", !0) && this.eventEmitter.emit("query-metrics", {
                                                batchID: c.twilight.batchID,
                                                batchTimestamp: c.twilight.batchTimestamp,
                                                queries: u
                                            }), n(), [2]
                                    }
                                })
                            })
                        }
                    }]), t
                }, e
            }(),
            U = n(351),
            q = n.n(U),
            j = function() {
                function e(e) {
                    var t = this;
                    this.reducers = {}, this.rootReducer = function(e, n) {
                        e || (e = {});
                        var r = {},
                            i = !1;
                        switch (n.type) {
                            case "twilight.registerReducer":
                                var o = t.reducers[n.name](e[n.name], {
                                    type: "@@INIT"
                                });
                                if (void 0 === o) throw new Error("Reducer for key " + n.name + " returned undefined!");
                                r = v.__assign({}, e, (s = {}, s[n.name] = o, s)), i = !0;
                                break;
                            default:
                                for (var a in t.reducers)
                                    if (t.reducers[a]) {
                                        var o = t.reducers[a](e[a], n);
                                        if (void 0 === o) throw new Error("Reducer for key " + a + " returned undefined!");
                                        r[a] = o, i = i || o !== e[a]
                                    }
                        }
                        return i ? r : e;
                        var s
                    }, this.reduxStore = Object(B.createStore)(this.rootReducer, (e.buildType !== d.a.Production && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || B.compose)(Object(B.applyMiddleware)(q.a)))
                }
                return e.prototype.getReduxStore = function() {
                    return this.reduxStore
                }, e.prototype.getState = function() {
                    return this.reduxStore.getState()
                }, e.prototype.dispatch = function(e) {
                    return this.reduxStore.dispatch(e)
                }, e.prototype.registerReducer = function(e, t) {
                    if (this.reducers[e]) throw Error("Reducer already registered: " + e);
                    this.reducers[e] = t, this.dispatch({
                        type: "twilight.registerReducer",
                        name: e
                    })
                }, e
            }(),
            W = function() {
                function e(e, t, n) {
                    this.sniffers = e, this.trackFunc = t, this.filterFunc = n, this.startCalled = !1
                }
                return e.prototype.start = function() {
                    return !this.startCalled && (this.startCalled = !0, this.sniffers.forEach(this.processSniffer.bind(this)), !0)
                }, e.prototype.flush = function() {
                    this.sniffers.forEach(function(e) {
                        return e.getAvailableResourceTimings()
                    })
                }, e.prototype.processSniffer = function(e) {
                    var t = e.frameURL,
                        n = e.getFrameTiming(),
                        r = n.navigationStart;
                    this.processFrameTiming(t, n), e.addResourceListener(this.processResourceTiming.bind(this, r)), e.getAvailableResourceTimings().forEach(this.processResourceTiming.bind(this, r))
                }, e.prototype.processFrameTiming = function(e, t) {
                    if (this.shouldSend(e)) {
                        var n = this.createFrameNetworkEventData(e, t);
                        this.trackFunc(n)
                    }
                }, e.prototype.processResourceTiming = function(e, t) {
                    if (this.shouldSend(t.name)) {
                        var n = this.createResourceNetworkEventData(e, t);
                        this.trackFunc(n)
                    }
                }, e.prototype.shouldSend = function(e) {
                    return !this.filterFunc || this.filterFunc(e)
                }, e.prototype.createFrameNetworkEventData = function(e, t) {
                    return {
                        type: "frame",
                        request_url: e,
                        start_time: t.navigationStart,
                        duration: Math.round(t.responseEnd - t.fetchStart),
                        dns_duration: this.computeDuration(t.domainLookupStart, t.domainLookupEnd),
                        connect_duration: this.computeDuration(t.connectStart, t.connectEnd),
                        request_duration: this.computeDuration(t.requestStart, t.responseStart),
                        response_duration: this.computeDuration(t.responseStart, t.responseEnd),
                        redirect_duration: this.computeDuration(t.redirectStart, t.redirectEnd)
                    }
                }, e.prototype.createResourceNetworkEventData = function(e, t) {
                    return {
                        type: "resource",
                        request_url: t.name,
                        start_time: e + t.startTime,
                        duration: Math.round(t.duration),
                        dns_duration: this.computeDuration(t.domainLookupStart, t.domainLookupEnd),
                        connect_duration: this.computeDuration(t.connectStart, t.connectEnd),
                        request_duration: this.computeDuration(t.requestStart, t.responseStart),
                        response_duration: this.computeDuration(t.responseStart, t.responseEnd),
                        redirect_duration: this.computeDuration(t.redirectStart, t.redirectEnd),
                        transfer_size: t.transferSize
                    }
                }, e.prototype.computeDuration = function(e, t) {
                    return e > 0 && t > 0 ? t - e : void 0
                }, e
            }(),
            G = "resource",
            Q = function() {
                function e(e, t, n) {
                    var r = this;
                    this.performance = t, this.frameURL = n, this.startCalled = !1, this.eventEmitter = new A.EventEmitter, this.emitterName = "network-sniffer", this.processNewResourceTimings = function() {
                        var e = r.performance.getEntriesByType(G);
                        if (0 !== e.length) {
                            for (var t = 0, n = e; t < n.length; t++) {
                                var i = n[t];
                                r.fireResourceListeners(i)
                            }
                            r.clearResourceBuffer()
                        }
                    }, this.logger = e.withCategory("network-sniffer"), o(t) ? this.logger.debug("Created") : this.logger.warn("No sniffing allowed!")
                }
                return e.prototype.start = function() {
                    return !this.startCalled && (this.startCalled = !0, this.setResourceBufferSize(), setInterval(this.processNewResourceTimings, 500), !0)
                }, e.prototype.getFrameTiming = function() {
                    return this.performance.timing
                }, e.prototype.getAvailableResourceTimings = function() {
                    return this.processNewResourceTimings(), this.performance.getEntriesByType(G)
                }, e.prototype.addResourceListener = function(e) {
                    this.eventEmitter.addListener(this.emitterName, e)
                }, e.prototype.removeResourceListener = function(e) {
                    this.eventEmitter.removeListener(this.emitterName, e)
                }, e.prototype.setResourceBufferSize = function() {
                    this.performance.setResourceTimingBufferSize(1e3)
                }, e.prototype.clearResourceBuffer = function() {
                    this.performance.clearResourceTimings(), this.setResourceBufferSize()
                }, e.prototype.fireResourceListeners = function(e) {
                    this.eventEmitter.emit(this.emitterName, e)
                }, e
            }(),
            K = function() {
                function e(e) {
                    var t = this;
                    this.buffer = [], this.eventEmitter = new A.EventEmitter, this.emitterName = "network-metrics", this.loggedHostWarnings = {}, this.shouldLogHosts = function(e) {
                        return function(n) {
                            var r = new URL(n),
                                i = r.hostname,
                                o = i.split(".");
                            o.length > 2 && (i = o[o.length - 2] + "." + o[o.length - 1]);
                            var a = e.some(function(e) {
                                return 0 === i.indexOf(e)
                            });
                            return a || t.loggedHostWarnings[i] || (t.loggedHostWarnings[i] = !0, t.logger.debug("Request not in whitelist", {
                                urlHost: i,
                                url: r
                            })), a
                        }
                    }, this.onRequestCompleted = function(e) {
                        if (!t.eventEmitter.listeners(t.emitterName, !0)) return void t.buffer.push(e);
                        if (t.buffer.length > 0) {
                            for (var n = 0, r = t.buffer; n < r.length; n++) {
                                var i = r[n];
                                t.eventEmitter.emit(t.emitterName, i)
                            }
                            t.buffer = []
                        }
                        t.eventEmitter.emit(t.emitterName, e)
                    }, this.config = e.config, this.logger = e.logger.withCategory("network monitoring"), this.window = e.window, this.session = e.session;
                    var n = this.createSniffers();
                    n.map(function(e) {
                        t.logger.debug("Starting network sniffer"), e.start()
                    }), this.networkLogger = new W(n, this.onRequestCompleted, this.shouldLogHosts(e.config.networkLoggingHostNames)), this.logger.debug("Starting network logger"), this.networkLogger.start()
                }
                return e.prototype.flush = function() {
                    this.networkLogger.flush()
                }, e.prototype.subscribeToUpdates = function(e) {
                    this.eventEmitter.addListener(this.emitterName, e)
                }, e.prototype.removeQueryMetricsListener = function(e) {
                    this.eventEmitter.removeListener(this.emitterName, e)
                }, e.prototype.createSniffers = function() {
                    var e = [];
                    if (this.canAccessPerformance(this.window)) {
                        var t = this.createSniffer(this.window);
                        t && (this.logger.debug("Creating network sniffer for main window"), e.push(t))
                    }
                    for (var n = 0; n < this.window.frames.length; n++)
                        if (this.canAccessFrame(n) && this.canAccessPerformance(this.window.frames[n].window)) {
                            var t = this.createSniffer(this.window.frames[n].window);
                            t && (this.logger.debug("Creating network sniffer for frame", n), e.push(t))
                        }
                    return e
                }, e.prototype.canAccessFrame = function(e) {
                    try {
                        return !!this.window.frames[e].window
                    } catch (t) {
                        return this.logger.warn("Can't access frame", {
                            index: e,
                            err: t
                        }), !1
                    }
                }, e.prototype.canAccessPerformance = function(e) {
                    try {
                        return o(e.performance)
                    } catch (e) {
                        return this.logger.warn("Unable to determine if network sniffing is allowed", e), !1
                    }
                }, e.prototype.createSniffer = function(e) {
                    try {
                        return new Q(this.logger, e.performance, e.location.href)
                    } catch (e) {
                        this.logger.warn("Unable to create network sniffer", e)
                    }
                }, e
            }(),
            Z = n(54),
            J = n(23),
            X = function() {
                function e(t, n) {
                    var r = this;
                    if (this.componentDuration = {
                            latencyStatus: J.a.Unknown
                        }, this.isRoot = !1, this.hasReportedInteractive = !1, this.customEvents = {}, this.hasSentInitializing = !1, this.hasSentInteractive = !1, this.setLocation = function(e) {
                            r.root.setLocation(e)
                        }, this.sendInitializingEvent = function(e, t, n) {
                            r.hasSentInitializing || (r.tracker.trackInitialize(e, t, n, r.componentName, r.relativeStartTime, r.id.toString(), r.startTimestamp, r.isPrePageLoad, r.root && r.root.hasLostVisibility, r.parent && r.parent.id.toString()), r.hasSentInitializing = !0)
                        }, this.sendInteractiveEvent = function(e, t, n) {
                            !r.hasSentInteractive && r.componentDuration.value && (r.tracker.trackInteractive(e, t, n, r.componentName, r.relativeStartTime, r.id.toString(), r.completedTimestamp, r.componentDuration.value, r.isPrePageLoad, r.root && r.root.hasLostVisibility, r.parent && r.parent.id.toString(), r.parent && r.parent.componentName), r.hasSentInteractive = !0)
                        }, this.shouldWarnChild = function() {
                            return r.getCurrentTimestamp() - r.completedTimestamp < 500
                        }, this.id = e.counter++, this.componentName = t, this.parent = n && n.parent, this.children = [], this.parent ? (this.tracker = this.parent.tracker, this.root = this.parent.root || this.parent, this.depth = this.parent.depth + 1, this.parent.registerChild(this)) : this.depth = 0, this.logger = n.logger, this.isPageComponent = this.componentName.endsWith("Page"), this.isPrePageLoad = this.isRoot || this.root && !this.root.completedTimestamp, this.isPageComponent) {
                        var i = n && n.destination;
                        i || (this.logger.error(new Error("The " + this.componentName + " component must supply a canonical destination, ex: directory.index"), "Invalid withLatencyTracking options"), i = this.componentName), this.logger.debug("Set root page to: " + i), this.root && this.root.setPage(this, i)
                    }
                    this.resetStartTime(), this.raiseUpdate(), this.logger.debug("Latency tracker created")
                }
                return e.prototype.reset = function(e) {
                    void 0 === e && (e = !0), this.completedTimestamp && (e && (this.children = [], this.hasReportedInteractive = !1), this.resetStartTime(), this.parent && this.parent.childReset(this), this.logger.debug(this.componentName + " reset", {
                        children: this.children
                    }), this.raiseUpdate())
                }, e.prototype.resetChildren = function() {
                    if (this.children && this.children.length)
                        for (var e = 0, t = this.children; e < t.length; e++) {
                            var n = t[e];
                            n.resetChildren()
                        }
                    this.children = []
                }, e.prototype.reportInteractive = function(e) {
                    if (this.hasReportedInteractive) return void this.logger.debug("Already reported interactive");
                    this.hasReportedInteractive = !0, this.logger.debug(this.componentName + " reported interactive", {
                        expectedChildCount: e,
                        children: this.getChildNames()
                    }), e && (this.expectedChildCount = e), this.checkChildCompleted()
                }, e.prototype.resetCustomEvents = function(e) {
                    this.root.customEvents[e] = []
                }, e.prototype.registerCustomEvent = function(e, t, n, r) {
                    var i = {
                        key: t,
                        label: n,
                        benchmark: r,
                        duration: {
                            latencyStatus: J.a.Unknown
                        }
                    };
                    return this.root.customEvents[e] || (this.root.customEvents[e] = []), this.root.customEvents[e].push(i), this.raiseUpdate(), i
                }, e.prototype.reportCustomEvent = function(e) {
                    if (!e.duration || !e.duration.value) {
                        var t = this.getCurrentTimestamp() - this.getRootInitTimestamp(),
                            n = t <= e.benchmark ? J.a.Pass : J.a.Fail;
                        e.duration.value = t, e.duration.latencyStatus = n, this.raiseUpdate()
                    }
                }, e.prototype.createChild = function(t, n) {
                    return new e(t, {
                        destination: n,
                        parent: this,
                        logger: this.logger.withCategory(t)
                    })
                }, e.prototype.sendBenchmarkEventsToSpade = function() {
                    if (this.root) {
                        var e = this.root.getLocation(),
                            t = this.root.getDestination(),
                            n = this.root.getPageComponentName();
                        if (t && e && n) {
                            this.sendInitializingEvent(t, e, n), this.sendInteractiveEvent(t, e, n);
                            for (var r = 0, i = this.children; r < i.length; r++) {
                                i[r].sendBenchmarkEventsToSpade()
                            }
                        }
                    }
                }, e.prototype.raiseUpdate = function() {
                    this.root && this.root.raiseUpdate()
                }, e.prototype.markCompleted = function() {
                    if (!this.completedTimestamp) {
                        this.completedTimestamp = this.getCurrentTimestamp();
                        var e = Math.round(this.completedTimestamp - this.startTimestamp);
                        this.componentDuration = {
                            value: e,
                            latencyStatus: J.a.Unknown
                        }, this.logger.debug("Done", {
                            componantName: this.componentName,
                            durationMs: this.componentDuration.value
                        }), this.parent && this.parent.childCompleted(this), this.raiseUpdate()
                    }
                }, e.prototype.checkChildCompleted = function() {
                    var e = this.expectedChildCount ? this.expectedChildCount : this.children.length;
                    this.children.filter(function(e) {
                        return e.completedTimestamp
                    }).length >= e && (this.logger.debug("All children completed", {
                        componentName: this.componentName,
                        expectedChildCount: e,
                        children: this.getChildNames()
                    }), this.markCompleted())
                }, e.prototype.registerChild = function(e) {
                    if (this.completedTimestamp) {
                        if (this.root && this.root.completedTimestamp) return void(this.shouldWarnChild() && this.logger.warn("Child attempted to register itself, but parent is already completed", {
                            child: e.componentName,
                            parent: this.componentName
                        }));
                        this.reset(!1)
                    }
                    this.children.push(e)
                }, e.prototype.getChildNames = function() {
                    return this.children.map(function(e) {
                        return e.componentName
                    })
                }, e.prototype.getRootInitTimestamp = function() {
                    return this.root.startTimestamp
                }, e.prototype.getNavigationStartTimestamp = function() {
                    return this.root ? this.root.navigationStart : Date.now()
                }, e.prototype.getCurrentTimestamp = function() {
                    return performance.timing.navigationStart + performance.now()
                }, e.prototype.getRelativeStartTimestamp = function() {
                    return Math.round(this.startTimestamp - this.getNavigationStartTimestamp())
                }, e.prototype.resetStartTime = function() {
                    var e = this.getCurrentTimestamp();
                    this.startTimestamp = e, this.relativeStartTime = this.getRelativeStartTimestamp(), this.completedTimestamp = 0, this.componentDuration = {
                        value: void 0,
                        latencyStatus: J.a.Unknown
                    }
                }, e.prototype.childReset = function(e) {
                    this.children.includes(e) || this.children.push(e), this.completedTimestamp ? this.logger.warn("Child component reset after this one completed", {
                        child: e.componentName
                    }) : this.logger.debug("Child component reset", {
                        child: e.componentName
                    })
                }, e.prototype.childCompleted = function(e) {
                    if (this.completedTimestamp) return void(this.shouldWarnChild() && this.logger.warn("Child attempted to report completed, but parent is already completed", {
                        child: e.componentName,
                        parent: this.componentName
                    }));
                    this.logger.debug(this.componentName + " child " + e.componentName + " completed", {
                        children: this.getChildNames()
                    }), this.hasReportedInteractive && this.checkChildCompleted()
                }, e.counter = 1, e
            }(),
            Y = function() {
                function e(e, t) {
                    this.tracking = e, this.logger = t.withCategory("tracker"), this.logger.debug("Created")
                }
                return e.prototype.trackNetworkRequestEvent = function(e, t, n, r, i, o) {
                    if (o.request_url === this.tracking.getEndpoint()) return void this.logger.debug("Skipping Spade network request.");
                    this.tracking.trackBenchmark(z.SpadeEventType.NetworkRequest, v.__assign({
                        is_pre_pageload: r,
                        destination: e,
                        location: t,
                        page_component_name: n,
                        client_time: o.start_time / 1e3,
                        relative_start_time: i
                    }, o))
                }, e.prototype.trackCompleteTransition = function(e, t, n, r, i, o, a) {
                    this.tracking.trackBenchmark(z.SpadeEventType.CompleteTransition, {
                        client_time: r / 1e3,
                        lost_visibility: a,
                        destination: e,
                        location: t,
                        page_component_name: n,
                        is_app_launch: o,
                        time_from_fetch: i
                    })
                }, e.prototype.trackAppBooted = function(e, t, n, r, i, o) {
                    this.tracking.trackBenchmark(z.SpadeEventType.AppBooted, {
                        client_time: r / 1e3,
                        lost_visibility: o,
                        destination: e,
                        location: t,
                        page_component_name: n,
                        time_from_fetch: i
                    })
                }, e.prototype.trackInitialize = function(e, t, n, r, i, o, a, s, l, c) {
                    this.tracking.trackBenchmark(z.SpadeEventType.ComponentInitializing, {
                        destination: e,
                        location: t,
                        page_component_name: n,
                        component: r,
                        component_id: o,
                        parent_component_id: c,
                        client_time: a / 1e3,
                        lost_visibility: l,
                        is_pre_pageload: s,
                        relative_start_time: i
                    })
                }, e.prototype.trackInteractive = function(e, t, n, r, i, o, a, s, l, c, u, d) {
                    this.tracking.trackBenchmark(z.SpadeEventType.ComponentInteractive, {
                        destination: e,
                        location: t,
                        page_component_name: n,
                        component: r,
                        component_id: o,
                        parent_component_id: u,
                        parent_component: d,
                        client_time: a / 1e3,
                        time_from_initializing: s / 1e3,
                        duration: s,
                        lost_visibility: c,
                        relative_start_time: i,
                        is_pre_pageload: l
                    })
                }, e.prototype.trackFetchStart = function(e, t, n, r, i) {
                    this.tracking.trackBenchmark(z.SpadeEventType.FetchStart, {
                        destination: e,
                        location: t,
                        page_component_name: n,
                        client_time: r / 1e3,
                        lost_visibility: i
                    })
                }, e.prototype.trackApiQuery = function(e, t, n, r, i, o, a, s, l) {
                    this.tracking.trackApiQueryBenchmark({
                        destination: e,
                        location: t,
                        client_time: r / 1e3,
                        page_component_name: i,
                        query_name: o,
                        is_pre_pageload: l,
                        execution_time: a,
                        request_time: s,
                        relative_start_time: n
                    })
                }, e
            }(),
            $ = function(e) {
                function t(t) {
                    var n = e.call(this, "Root", {
                        logger: t.logger.withCategory("latency-tracker")
                    }) || this;
                    if (n.rootInitDuration = {
                            latencyStatus: J.a.Unknown
                        }, n.pageLoadDuration = {
                            latencyStatus: J.a.Unknown
                        }, n.networkEvents = [], n.queryBatchMetrics = [], n.queryEvents = [], n.isFirstLoad = !0, n.isRoot = !0, n.hasLostVisibility = !1, n.emitter = new A.EventEmitter, n.getLocation = function() {
                            return n.location
                        }, n.setLocation = function(e) {
                            n.logger.debug("Updating location", {
                                location: e
                            }), n.location = e, n.sendBenchmarkEventsToSpade()
                        }, n.getDestination = function() {
                            return n.destination
                        }, n.getPageComponentName = function() {
                            return n.page && n.page.componentName
                        }, n.setPage = function(e, t) {
                            n.page = e, n.destination = t, n.sentinel.setPageComponentName(e.componentName)
                        }, n.sendAllEvents = function() {
                            n.networkMonitor && (n.networkMonitor.flush(), n.doReconcileQueries(!0)), n.sendBenchmarkEventsToSpade(), n.sendNetworkRequestsToSpade()
                        }, n.sendFetchStartEvent = function(e, t, r) {
                            n.isFirstLoad && !n.hasSentFetchStart && (n.tracker.trackFetchStart(e, t, r, performance.timing.fetchStart, n.hasLostVisibility), n.hasSentFetchStart = !0)
                        }, n.sendCompleteTransitionEvent = function(e, t, r) {
                            !n.hasSentCompleteTransition && n.pageLoadDuration.value && (n.tracker.trackCompleteTransition(e, t, r, n.completedTimestamp, n.pageLoadDuration.value, n.isFirstLoad, n.hasLostVisibility), n.hasSentCompleteTransition = !0)
                        }, n.sendAppBootedEvent = function(e, t, r) {
                            n.isFirstLoad && !n.hasSentAppBooted && n.rootInitDuration.value && (n.tracker.trackAppBooted(e, t, r, n.startTimestamp, n.rootInitDuration.value, n.hasLostVisibility), n.hasSentAppBooted = !0)
                        }, n.onNetworkRequest = function(e) {
                            var t = e.request_url.startsWith(n.graphqlEndpoint),
                                r = !n.completedTimestamp || e.start_time <= n.completedTimestamp,
                                i = Math.round(e.start_time - n.getNavigationStartTimestamp());
                            n.networkEvents.push({
                                networkEvent: e,
                                latencyStatus: J.a.Unknown,
                                relativeStartTime: i,
                                isPendingSpade: !0,
                                isApiRequest: t,
                                isPrePageload: r,
                                duration: {
                                    value: e.duration,
                                    latencyStatus: J.a.Unknown
                                }
                            }), n.reconcileQueries()
                        }, n.reconcileQueries = function() {
                            n.queryReconciliationTimer || (n.queryReconciliationTimer = setTimeout(function() {
                                n.queryReconciliationTimer = null, n.doReconcileQueries(!1), n.sendNetworkRequestsToSpade()
                            }, 250))
                        }, n.doReconcileQueries = function(e) {
                            for (var t = n.networkEvents.filter(function(e) {
                                    return e.isApiRequest
                                }), r = n.queryEvents.filter(function(e) {
                                    return !e.relatedNetworkEvent
                                }), i = 0, o = r; i < o.length; i++) {
                                var a = o[i];
                                ! function(r) {
                                    var i = t.find(function(e) {
                                        return e.networkEvent.duration >= r.slowestQueryInBatch && e.networkEvent.start_time >= r.batchTimestamp && e.networkEvent.start_time - r.batchTimestamp < 10
                                    });
                                    !i && e && (i = t.find(function(e) {
                                        return e.networkEvent.duration >= r.slowestQueryInBatch && e.networkEvent.start_time >= r.batchTimestamp
                                    })), i ? (r.relatedNetworkEvent = i.networkEvent, r.isPrePageload = i.isPrePageload, r.requestDuration = {
                                        value: Math.round(i.networkEvent.duration),
                                        latencyStatus: J.a.Unknown
                                    }) : e && n.logger.warn("Unable to find a related network event for query", {
                                        queryEvent: r,
                                        filteredApiRequests: t,
                                        allNetworkRequests: n.networkEvents.slice()
                                    })
                                }(a)
                            }
                            n.raiseUpdate()
                        }, n.onQuery = function(e) {
                            if (n.completedTimestamp && e.batchTimestamp > n.completedTimestamp) return void n.logger.debug("Query event data skipped, it is post page load.", e);
                            var t = Math.max.apply(Math, e.queries.map(function(e) {
                                return e.durationMs
                            }));
                            n.queryBatchMetrics.push({
                                batchID: e.batchID,
                                batchTimestamp: e.batchTimestamp,
                                latencyStatus: J.a.Unknown,
                                slowestQueryInBatch: t
                            });
                            for (var r = 0, i = e.queries; r < i.length; r++) {
                                var o = i[r];
                                n.queryEvents.push({
                                    batchID: e.batchID,
                                    batchTimestamp: e.batchTimestamp,
                                    relativeStartTime: Math.round(e.batchTimestamp - n.getNavigationStartTimestamp()),
                                    queryDuration: {
                                        value: o.durationMs,
                                        latencyStatus: J.a.Unknown
                                    },
                                    requestDuration: {
                                        latencyStatus: J.a.Unknown
                                    },
                                    operationName: o.operationName,
                                    queryID: o.queryID,
                                    slowestQueryInBatch: t,
                                    variables: o.variables,
                                    latencyStatus: J.a.Unknown,
                                    isPendingSpade: !0,
                                    isPrePageload: !1
                                })
                            }
                            n.logger.debug("GraphQL query completed: ", {
                                latestQueryData: e,
                                allBatches: n.queryBatchMetrics
                            }), n.reconcileQueries()
                        }, n.sendNetworkRequestsToSpade = function() {
                            if (n.networkEventsEnabled && n.destination && n.location && n.page) {
                                n.logger.debug("Sending ready network and query events to Spade");
                                var e = n.networkEvents.filter(function(e) {
                                    return e.isPendingSpade
                                });
                                if (e.length) {
                                    for (var t = 0, r = e; t < r.length; t++) {
                                        var i = r[t];
                                        i.isPendingSpade = !1, n.tracker.trackNetworkRequestEvent(n.destination, n.location, n.page.componentName, i.isPrePageload, i.relativeStartTime, i.networkEvent)
                                    }
                                    n.logger.debug("Sent network events to spade:", {
                                        count: e.length
                                    })
                                }
                                var o = n.queryEvents.filter(function(e) {
                                    return e.isPendingSpade && e.isPrePageload
                                });
                                if (o.length > 0) {
                                    for (var a = 0, s = 0, l = o; s < l.length; s++) {
                                        var c = l[s];
                                        void 0 !== c.requestDuration.value && void 0 !== c.queryDuration.value && (c.isPendingSpade = !1, n.tracker.trackApiQuery(n.destination, n.location, c.relativeStartTime, c.batchTimestamp, n.page.componentName, c.operationName, c.queryDuration.value, c.requestDuration.value, c.isPrePageload), a += 1)
                                    }
                                    n.logger.debug("Sent " + a + " query events to Spade, " + (o.length - a) + " events skipped because they are not yet ready.")
                                }
                            }
                        }, n.checkLostVisibility = function() {
                            n.hasLostVisibility || (n.hasLostVisibility = document.hidden)
                        }, n.root = n, n.store = t.store, n.networkEventsEnabled = t.networkEventsEnabled, n.componentEventsEnabled = t.componentEventsEnabled, n.toolsEnabled = t.toolsEnabled, n.graphqlEndpoint = t.config.graphqlEndpoint, n.tracker = new Y(t.tracking, n.logger), n.navigationStart = performance.timing.navigationStart, n.rootInitDuration = {
                            value: Math.round(n.startTimestamp - n.navigationStart),
                            latencyStatus: J.a.Unknown
                        }, n.networkMonitor = t.networkMonitor, n.sentinel = t.sentinel, n.networkEventsEnabled && n.networkMonitor && n.networkMonitor.subscribeToUpdates(n.onNetworkRequest), n.networkEventsEnabled && t.apollo && t.apollo.addQueryMetricsListener(n.onQuery), t.trackVisibility) try {
                        n.checkLostVisibility(), document.addEventListener("visibilitychange", n.checkLostVisibility)
                    } catch (e) {
                        n.logger.warn("Failed to attach event listener for document visibility change, assuming visibility has been lost.", e), n.hasLostVisibility = !0
                    }
                    return n.raiseUpdate(), n
                }
                return v.__extends(t, e), t.prototype.subscribeToUpdates = function(e) {
                    this.emitter.addListener("root-latency-tracker", e)
                }, t.prototype.getCustomEvents = function() {
                    return this.customEvents
                }, t.prototype.reset = function() {
                    this.isFirstLoad && this.store.dispatch(Object(Z.f)());
                    var e = this.getCurrentTimestamp();
                    this.customEvents = {}, this.resetChildren(), this.children = [], this.startTimestamp = e, this.navigationStart = e, this.relativeStartTime = 0, this.rootInitDuration = {
                        latencyStatus: J.a.Unknown
                    }, this.completedTimestamp = 0, this.componentDuration = {
                        latencyStatus: J.a.Unknown
                    }, this.hasReportedInteractive = !1, this.page = void 0, this.isFirstLoad = !1, this.pageLoadDuration = {
                        latencyStatus: J.a.Unknown
                    }, this.networkEvents = [], this.queryEvents = [], this.queryBatchMetrics = [], this.hasSentInitializing = !1, this.hasSentInteractive = !1, this.hasSentAppBooted = !1, this.hasSentCompleteTransition = !1, this.hasReportedInteractive = !1, this.hasLostVisibility = !1, this.raiseUpdate(), this.logger.debug("Reset Root")
                }, t.prototype.raiseUpdate = function() {
                    var e = this;
                    this.toolsEnabled && !this.dispatchTimer && (this.dispatchTimer = setTimeout(function() {
                        e.dispatchTimer = null, e.emitter.emit("root-latency-tracker")
                    }, 100))
                }, t.prototype.sendBenchmarkEventsToSpade = function() {
                    if (!this.destination || !this.location || !this.page) return void this.logger.debug("Unable to send events to spade. destination or location is not set");
                    if (this.sendFetchStartEvent(this.destination, this.location, this.page.componentName), this.sendAppBootedEvent(this.destination, this.location, this.page.componentName), this.componentEventsEnabled && (this.sendInitializingEvent(this.destination, this.location, this.page.componentName), this.sendInteractiveEvent(this.destination, this.location, this.page.componentName)), this.sendCompleteTransitionEvent(this.destination, this.location, this.page.componentName), this.componentEventsEnabled)
                        for (var e = 0, t = this.children; e < t.length; e++) {
                            var n = t[e];
                            n.sendBenchmarkEventsToSpade()
                        }
                }, t.prototype.registerChild = function(t) {
                    e.prototype.registerChild.call(this, t), this.logger.debug("Root page got a new child", {
                        newChild: t.componentName,
                        allChildren: this.getChildNames()
                    })
                }, t.prototype.checkChildCompleted = function() {
                    if (!this.page) return void this.logger.debug("Root page incomplete, pending a page to register.");
                    e.prototype.checkChildCompleted.call(this)
                }, t.prototype.markCompleted = function() {
                    if (!this.completedTimestamp) {
                        if (!this.page) return void this.logger.warn("Root page attemped to complete without a registered page component.");
                        if (this.completedTimestamp = this.getCurrentTimestamp(), this.componentDuration = {
                                value: Math.round(this.completedTimestamp - this.startTimestamp),
                                latencyStatus: J.a.Unknown
                            }, this.logger.debug("Root tracker done", {
                                durationMs: this.componentDuration
                            }), this.pageLoadDuration = {
                                value: (this.componentDuration.value || 0) + (this.rootInitDuration.value || 0),
                                latencyStatus: J.a.Unknown
                            }, this.logger.debug("Root page completed", {
                                pageLoadDuration: this.pageLoadDuration,
                                rootInitDuration: this.rootInitDuration,
                                componentDuration: this.componentDuration,
                                children: this.getChildNames()
                            }), this.raiseUpdate(), this.sendAllEvents(), this.isFirstLoad) {
                            this.store.dispatch(Object(Z.f)());
                            var e = document.getElementById("root");
                            e && e.setAttribute("data-a-page-loaded", Date.now().toString())
                        }
                    }
                }, t.prototype.getNavigationStartTimestamp = function() {
                    return this.navigationStart > 0 ? this.navigationStart : performance.timing.navigationStart
                }, t
            }(X),
            ee = {
                forceNetworkLoggingStorageKey: "twilight.force-component-benchmarking",
                forceComponentBenchmarkingStorageKey: "twilight.force-network-monitoring",
                forceToolsStorageKey: "twilight.force-benchmarking-tools"
            },
            te = {
                networkingThreshold: "benchmark_networking_threshold",
                componentThreshold: "benchmark_component_threshold"
            },
            ne = function() {
                function e(e) {
                    var t = this;
                    this.getRootLatencyTracker = function() {
                        return t.latencyTracker
                    }, this.logger = e.logger.withCategory("Benchmarking"), this.seed = Math.round(100 * Math.random()) / 100, this.storage = e.storage;
                    var n = e.dynamicSettings.get(te.networkingThreshold, e.config.defaultNetworkLoggingThreshold),
                        r = e.dynamicSettings.get(te.componentThreshold, e.config.defaultComponentBenchmarkingThreshold);
                    this.toolsEnabled = this.shouldEnableTools(e.config), this.componentsEnabled = this.shouldEnableComponentBenchmarking(e.config, r, this.toolsEnabled), this.networkingEnabled = this.shouldEnableNetworkBenchmarking(e.config, n, this.componentsEnabled, this.toolsEnabled), this.networkingEnabled && (this.networkMonitoring = new K(e)), this.latencyTracker = new $({
                        componentEventsEnabled: this.componentsEnabled,
                        networkEventsEnabled: this.networkingEnabled,
                        toolsEnabled: this.toolsEnabled,
                        config: e.config,
                        logger: e.logger,
                        apollo: e.apollo,
                        networkMonitor: this.networkMonitoring,
                        sentinel: e.sentinel,
                        tracking: e.tracking,
                        store: e.store,
                        trackVisibility: !0
                    }), this.logger.debug("Initialized", {
                        seed: this.seed,
                        toolsEnabled: this.toolsEnabled,
                        componentsEnabled: this.componentsEnabled,
                        componentThreshold: r,
                        networkingEnabled: this.networkingEnabled,
                        networkingThreshold: n
                    })
                }
                return e.prototype.shouldEnableTools = function(e) {
                    return e.forceComponentBenchmarking ? (this.logger.debug("Tools enabled, due to config."), !0) : !!this.storage.get(ee.forceToolsStorageKey, !1) && (this.logger.debug("Tools enabled, due to local storage."), !0)
                }, e.prototype.shouldEnableComponentBenchmarking = function(e, t, n) {
                    return n ? (this.logger.debug("Components enabled, due to Tools being enabled"), !0) : e.forceComponentBenchmarking ? (this.logger.debug("Components enabled, due to config."), !0) : this.storage.get(ee.forceComponentBenchmarkingStorageKey, !1) ? (this.logger.debug("Components enabled, due to local storage."), !0) : this.seed <= t && (this.logger.debug("Components enabled, due to random selection"), !0)
                }, e.prototype.shouldEnableNetworkBenchmarking = function(e, t, n, r) {
                    return n || r ? (this.logger.debug("Networking enabled, due to Components or Tools being enabled"), !0) : e.forceNetworkLogging ? (this.logger.debug("Networking enabled, due to config."), !0) : this.storage.get(ee.forceNetworkLoggingStorageKey, !1) ? (this.logger.debug("Networking enabled, due to local storage."), !0) : this.seed <= t && (this.logger.debug("Networking enabled, due to random selection"), !0)
                }, e
            }(),
            re = n(99),
            ie = n(185),
            oe = n.n(ie),
            ae = n(188),
            se = n.n(ae);
        ! function(e) {
            e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error", e[e.Fatal = 5] = "Fatal"
        }(C || (C = {}));
        var le = function() {
                function e(e, t) {
                    var n = this;
                    if (this.eventEmitter = new A.EventEmitter, this.addMessageListener = function(e) {
                            n.eventEmitter.addListener("message", e)
                        }, this.removeMessageListener = function(e) {
                            n.eventEmitter.removeListener("message", e)
                        }, this.onWindowError = function(e) {
                            e.error ? (e.preventDefault(), n.write(C.Error, "Uncaught error.", void 0, e.error, "uncaught")) : n.write(C.Warn, "Uncaught error, but the error object is null. This is usually caused by a browser permission issue. Please check the browser console.", [{
                                event: e
                            }], new Error("Uncaught error, but the error object is null."), "uncaught")
                        }, e && t) throw new Error("Cannot pass both `options` and `childOptions` arguments.");
                    e ? (this.buildType = e.buildType, this.buffer = [], this.minConsoleLogLevel = e.minConsoleLogLevel, this.maxBufferSize = e.maxBufferSize || 1e3) : t && (this.category = t.category, this.rootLogger = t.rootLogger)
                }
                return e.prototype.addWindowErrorListener = function() {
                    if (this.rootLogger) throw new Error("Attempted to add child logger to window error listeners.");
                    if (this.windowErrorListenerAdded) return void this.warn("Attempted to add window error listener multiple times.");
                    this.windowErrorListenerAdded = !0, window.addEventListener("error", this.onWindowError), this.debug("Window error listener added.")
                }, e.prototype.withCategory = function(t) {
                    return new e(null, {
                        rootLogger: this.rootLogger || this,
                        category: (this.category ? this.category + "." : "") + t
                    })
                }, e.prototype.debug = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    this.write(C.Debug, e, t)
                }, e.prototype.info = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    this.write(C.Info, e, t)
                }, e.prototype.warn = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    this.write(C.Warn, e, t)
                }, e.prototype.error = function(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    this.write(C.Error, t, n, e, "caught")
                }, e.prototype.fatal = function(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    this.write(C.Fatal, t, n, e, "fatal")
                }, e.prototype.flush = function() {
                    if (this.rootLogger) throw new Error("Cannot flush a child logger.");
                    var e = this.buffer;
                    return this.buffer = [], this.messagesTruncated && e.unshift({
                        time: e[0].time - 1,
                        level: C[C.Info].toLowerCase(),
                        message: "Log truncated.",
                        args: [{
                            firstMessageTime: this.firstMessageTime,
                            messagesTruncated: this.messagesTruncated,
                            truncationEvents: this.truncationEvents
                        }]
                    }), e
                }, e.prototype.write = function(e, t, n, r, i, o, a) {
                    if (void 0 === n && (n = []), void 0 === a && (a = !1), this.rootLogger) return void this.rootLogger.write(e, t, n, r, i, this.category, a);
                    this.buffer.length === this.maxBufferSize && (this.firstMessageTime || (this.firstMessageTime = this.buffer[0].time), this.truncationEvents = (this.truncationEvents || 0) + 1, this.messagesTruncated = (this.messagesTruncated || 0) + this.buffer.splice(0, Math.ceil(this.maxBufferSize / 10)).length), o = o || this.category, e >= this.minConsoleLogLevel && this.writeToConsole(e, o, t, n, r), e !== C.Debug && this.writeToBuffer(e, o, t, n, r, i, a), !this.onError || e !== C.Error && e !== C.Fatal || this.onError(this)
                }, e.prototype.writeToBuffer = function(e, t, n, r, i, o, a) {
                    void 0 === a && (a = !1);
                    var s = [],
                        l = {
                            time: Date.now(),
                            level: C[e].toLowerCase(),
                            message: n
                        };
                    if (r && r.length > 0 && (l.args = r.map(function(e, t) {
                            if (e instanceof Error) return {
                                name: e.name,
                                message: e.message,
                                stack: e.stack || null
                            };
                            if ("object" == typeof e) try {
                                return JSON.parse(JSON.stringify(e))
                            } catch (e) {
                                return s.push({
                                    message: n,
                                    argIndex: t,
                                    err: e
                                }), "<unserializable>"
                            } else if ("function" == typeof e) return e.name ? "<function " + e.name + ">" : "<anonymous function>";
                            return e
                        })), t && (l.category = t), i && (l.errors = [{
                            name: i.name,
                            message: i.message,
                            stack: i.stack || null,
                            type: o || "caught"
                        }]), this.buffer.push(l), !a)
                        for (var c = 0, u = s; c < u.length; c++) {
                            var h = u[c];
                            this.buildType === d.a.Production ? this.write(C.Warn, "Failed to serialize argument for log message.", [{
                                message: h.message,
                                argIndex: h.argIndex,
                                err: h.err
                            }], void 0, void 0, void 0, !0) : this.write(C.Error, "Failed to serialize argument for log message.", [{
                                message: h.message,
                                argIndex: h.argIndex
                            }], h.err, "caught", t, !0)
                        }
                    this.eventEmitter.emit("message", l)
                }, e.prototype.writeToConsole = function(e, t, n, r, i) {
                    var o = (new Date).toLocaleTimeString();
                    t = t ? "[" + t + "] " : "", n = o + " [" + C[e].toUpperCase() + "] " + t + n, e === C.Fatal && (e = C.Error);
                    var a = (console[C[e].toLowerCase()] || console.log).bind(console);
                    i ? a.apply(void 0, [n, i].concat(r)) : a.apply(void 0, [n].concat(r))
                }, e
            }(),
            ce = n(18),
            ue = n(44),
            de = function() {
                function e(e) {
                    var t = this;
                    this.onHistoryChange = function() {
                        t.pageviewID = t.getUniqueID()
                    }, this.storage = e.storage, this.tempStorage = e.tempStorage, this.benchmarkID = this.getOrCreateBenchmarkSessionID(), this.deviceID = this.getOrCreateDeviceID(), this.localStorageDeviceID = this.getOrCreateLocalStorageDeviceID(), this.pageviewID = this.getUniqueID(), this.tabID = this.getOrCreateSessionStorageUniqueID(), e.history.listen(this.onHistoryChange)
                }
                return e.prototype.getUniqueID = function() {
                    return Object(ce.b)().substring(0, 16)
                }, e.prototype.getOrCreateDeviceID = function() {
                    var e = w.get("unique_id");
                    return e || (e = Object(ce.b)().substring(0, 16), w.set("unique_id", e, {
                        expires: 3650,
                        domain: Object(ue.a)(),
                        secure: "https:" === window.location.protocol
                    }), e)
                }, e.prototype.getOrCreateBenchmarkSessionID = function() {
                    return w.get("twilight.automation_session_id") || Object(ce.b)().substring(0, 16)
                }, e.prototype.getOrCreateSessionStorageUniqueID = function() {
                    var e = this.tempStorage.get("session_storage_unique_id", "");
                    return e || (e = Object(ce.b)().substring(0, 16), this.tempStorage.set("session_storage_unique_id", e), e)
                }, e.prototype.getOrCreateLocalStorageDeviceID = function() {
                    var e = this.storage.get("local_storage_device_id", "");
                    return e || (e = Object(ce.b)().substring(0, 16), this.storage.set("local_storage_device_id", e), e)
                }, e
            }(),
            he = function() {
                function e(e, t) {
                    this.cache = {}, this.storage = e, this.logger = t
                }
                return e.prototype.get = function(e, t) {
                    var n = null;
                    try {
                        n = this.storage.getItem(e)
                    } catch (t) {
                        this.logger.warn("Failed to load stored value.", t, {
                            key: e
                        }), n = this.cache[e] || null
                    }
                    if (null === n || "undefined" === n) return t;
                    try {
                        return JSON.parse(n)
                    } catch (r) {
                        return this.logger.warn("Failed to deserialize stored value, removing from storage.", r, {
                            key: e,
                            value: n
                        }), this.remove(e), t
                    }
                }, e.prototype.getOptional = function(e) {
                    return this.get(e, null)
                }, e.prototype.set = function(e, t) {
                    var n;
                    try {
                        n = JSON.stringify(t)
                    } catch (n) {
                        throw this.logger.warn("Failed to serialize value.", n, {
                            key: e,
                            value: t
                        }), n
                    }
                    this.cache[e] = n;
                    try {
                        this.storage.setItem(e, n)
                    } catch (r) {
                        this.logger.warn("Failed to save value.", r, {
                            key: e,
                            value: t,
                            serializedValue: n
                        })
                    }
                }, e.prototype.remove = function(e) {
                    delete this.cache[e];
                    try {
                        this.storage.removeItem(e)
                    } catch (t) {
                        this.logger.warn("Failed to remove key from storage.", t, {
                            key: e
                        })
                    }
                }, e.prototype.clear = function() {
                    this.cache = {};
                    try {
                        this.storage.clear()
                    } catch (e) {
                        this.logger.warn("Failed to clear storage.", e)
                    }
                }, e
            }(),
            pe = n(353);
        n.d(t, "o", function() {
            return ge
        }), n.d(t, "a", function() {
            return me
        }), n.d(t, "b", function() {
            return fe
        }), n.d(t, "c", function() {
            return ve
        }), n.d(t, "d", function() {
            return we
        }), n.d(t, "e", function() {
            return be
        }), n.d(t, "f", function() {
            return ye
        }), n.d(t, "g", function() {
            return _e
        }), n.d(t, "h", function() {
            return Ee
        }), n.d(t, "j", function() {
            return ke
        }), n.d(t, "k", function() {
            return Se
        }), n.d(t, "l", function() {
            return Ce
        }), n.d(t, "m", function() {
            return Le
        }), n.d(t, "n", function() {
            return Te
        }), t.i = s;
        var ge, me, fe, ve, we, be, ye, _e, Ee, ke, Se, Ce, Le, Te, xe = function() {
            function e(e) {
                var t = this;
                this.dynamicSettings = new re.a, this.history = a(), this.pageTitle = "Twitch", this.config = e, this.store = new j(this.config);
                var n = this.config.buildType === d.a.Production ? C.Error : C.Debug;
                try {
                    var r = localStorage.getItem(this.config.forceMinConsoleLogLevelKey);
                    null !== r && (n = Number(r))
                } catch (e) {
                    console.error("Failed to get log level override from local storage.", {
                        err: e,
                        key: this.config.forceMinConsoleLogLevelKey
                    })
                }
                this.logger = new le({
                    minConsoleLogLevel: n,
                    maxBufferSize: 1e3,
                    buildType: this.config.buildType
                }), this.logger.addWindowErrorListener(), this.storage = new he(localStorage, this.logger.withCategory("storage")), this.tempStorage = new he(sessionStorage, this.logger.withCategory("tempStorage")), this.session = new de({
                    history: this.history,
                    storage: this.storage,
                    tempStorage: this.tempStorage
                }), this.config.embedded || (this.sentinel = new I({
                    buildID: e.buildID,
                    endpoint: e.sentinelEndpoint,
                    logger: this.logger,
                    session: this.session,
                    store: this.store
                }), this.logger.onError = function(e) {
                    t.sentinel.report(e.flush())
                }), this.adBlockSentinel = new f({
                    accountID: e.adblockAccount,
                    cid: e.adblockID,
                    logger: this.logger
                }), this.adBlockDetector = new g({
                    logger: this.logger
                }), this.adBlockDetector.addTwitchGlobal(), this.adBlockDetector.detectAdBlock(), this.apollo = new V({
                    config: this.config,
                    dynamicSettings: this.dynamicSettings,
                    logger: this.logger,
                    session: this.session,
                    store: this.store
                }), this.tracking = new z.Spade({
                    apollo: this.apollo,
                    config: this.config,
                    endpoint: this.dynamicSettings.get("spade_url", e.defaultSpadeEndpoint),
                    logger: this.logger,
                    session: this.session,
                    store: this.store,
                    adBlockSentinel: this.adBlockSentinel,
                    adBlockDetector: this.adBlockDetector
                }), this.pubsub = new R(this.store, this.logger), this.intl = new pe.TwilightIntl(e.locales), this.config.embedded || (this.benchmarking = new ne({
                    apollo: this.apollo,
                    config: this.config,
                    dynamicSettings: this.dynamicSettings,
                    logger: this.logger,
                    sentinel: this.sentinel,
                    session: this.session,
                    storage: this.storage,
                    store: this.store,
                    tracking: this.tracking,
                    window: window
                })), this.experiments = new T({
                    logger: this.logger,
                    session: this.session,
                    store: this.store,
                    storage: this.storage,
                    tracking: this.tracking
                }), this.tmi = new D(this.logger, this.config)
            }
            return e.prototype.mount = function(e, t) {
                u.render(this.wrap(e), t)
            }, e.prototype.wrap = function(e) {
                return l.createElement(c.ApolloProvider, {
                    store: this.store.getReduxStore(),
                    client: this.apollo.client
                }, e)
            }, e.prototype.setPageTitle = function(e) {
                this.pageTitle = e ? e + " - Twitch" : "Twitch", this.updateDocumentTitle()
            }, e.prototype.setBadgeCount = function(e) {
                this.badgeCount = e, this.updateDocumentTitle()
            }, e.prototype.updateDocumentTitle = function() {
                if (this.badgeCount > 0) {
                    var e = this.badgeCount > 99 ? "99+" : "" + this.badgeCount;
                    document.title = "(" + e + ") " + this.pageTitle
                } else document.title = this.pageTitle
            }, e
        }()
    },
    69: function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (void 0 === t && (t = {}), 0 === Object.keys(t).length) return e;
            var n = new URL(e),
                r = o.stringify(i.__assign({}, o.parse(n.search), t));
            return "" + n.origin + n.pathname + "?" + r + n.hash
        }
        t.a = r;
        var i = n(0),
            o = n(21);
        n.n(o)
    },
    70: function(e, t, n) {
        "use strict";
        var r = n(1),
            i = n(3),
            o = (n(235), function(e) {
                return r.createElement(i._18, {
                    className: "core-error",
                    color: i.F.Alt2,
                    display: i.H.Flex,
                    justifyContent: i.T.Center,
                    alignItems: i.c.Center,
                    fullWidth: !e.inline,
                    fullHeight: !e.inline
                }, r.createElement(i.U, {
                    className: "core-error__container",
                    display: i.H.InlineFlex,
                    alignItems: i.c.Center,
                    flexWrap: i.K.NoWrap
                }, r.createElement(i._18, {
                    margin: {
                        right: 2
                    },
                    flexShrink: 0,
                    color: i.F.Alt2
                }, r.createElement(i._9, {
                    asset: i._10.DeadGlitch,
                    width: 92,
                    height: 96
                })), r.createElement(i.U, {
                    className: "core-error__message-container",
                    display: i.H.Flex,
                    flexDirection: i.J.Column
                }, r.createElement(i._22, {
                    fontSize: i.L.Size4,
                    "data-a-target": "core-error-message"
                }, e.message), e.children)))
            });
        n.d(t, "a", function() {
            return o
        })
    },
    71: function(e, t, n) {
        "use strict";
        var r, i = n(0),
            o = n(4),
            a = n(10),
            s = n(1),
            l = n(356),
            c = n(58),
            u = (n(240), 100);
        ! function(e) {
            e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
        }(r || (r = {}));
        var d = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                    return {
                        registerReceiver: n.registerReceiver,
                        requestVisibilityCheck: n.requestVisibilityCheck,
                        getScrollContent: n.getScrollContent,
                        scrollToTop: n.scrollToTop,
                        yScrollTo: n.yScrollTo
                    }
                }, n.scrollToTop = function() {
                    n.scrollContent && (n.scrollContent.scrollTop = 0), n.onScroll()
                }, n.notifyReceivers = function(e) {
                    requestAnimationFrame(function() {
                        if (n.scrollContent) {
                            var t = n.scrollContent.getBoundingClientRect();
                            e && (e.offset = n.scrollContent.scrollTop), n.receivers.forEach(function(n) {
                                n.checkVisible(t, e)
                            })
                        }
                    })
                }, n.onResize = function() {
                    if (!n.resizeTimeout) {
                        var e = {
                            type: r.Resize,
                            offset: n.scrollContent.scrollTop
                        };
                        n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                            n.resizeTimeout = 0, n.notifyReceivers(e)
                        }, u)
                    }
                }, n.onScroll = function() {
                    if (!n.scrollTimeout && n.scrollContent) {
                        var e = {
                            type: r.Scroll,
                            offset: n.scrollContent.scrollTop
                        };
                        n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                            n.scrollTimeout = 0, n.notifyReceivers(e)
                        }, u)
                    }
                }, n.onWheel = function(e) {
                    if (!n.wheelTimeout && n.scrollContent) {
                        var t = {
                            type: r.Wheel,
                            offset: n.scrollContent.scrollTop,
                            wheelEvent: e
                        };
                        n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                            n.wheelTimeout = 0, n.notifyReceivers(t)
                        }, u)
                    }
                }, n.registerReceiver = function(e) {
                    return n.receivers.push(e), n.requestVisibilityCheck(e),
                        function() {
                            var t = n.receivers.indexOf(e);
                            n.receivers.splice(t, 1)
                        }
                }, n.requestVisibilityCheck = function(e) {
                    requestAnimationFrame(function() {
                        var t = n.scrollContent;
                        if (t) {
                            var r = t.getBoundingClientRect();
                            e.checkVisible(r)
                        }
                    })
                }, n.setRef = function(e) {
                    return n.root = e
                }, n.yScrollTo = function(e) {
                    n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                }, n.getScrollContent = function() {
                    return n.scrollContent
                }, n.adjustScrollbarOffset = function(e) {
                    if (n.root) {
                        var t = n.root.querySelector(".simplebar-track.vertical");
                        t && e ? t.style.marginTop = e : t && delete t.style.marginTop
                    }
                }, t.scrollRef && t.scrollRef(n), n
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                if (this.root) {
                    if (this.simplebarRef = new l(this.root), this.scrollContent = this.simplebarRef.getScrollElement(), this.props.contentClassName) {
                        var e = this.scrollContent.querySelector(".simplebar-content");
                        e && e.classList.add(this.props.contentClassName)
                    }
                    this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), this.adjustScrollbarOffset(this.props.scrollbarVerticalOffset), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                }
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.adjustScrollbarOffset(e.scrollbarVerticalOffset)
            }, t.prototype.componentWillUnmount = function() {
                this.root && (delete this.simplebarRef, this.scrollContent.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResize))
            }, t.prototype.render = function() {
                var e = this.props,
                    t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, i.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                    n = {
                        "scrollable-area": !0,
                        "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                        "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                    };
                return s.createElement("div", i.__assign({
                    className: o(t.className, n),
                    "data-test-selector": "scrollable-area-wrapper",
                    ref: this.setRef
                }, Object(c.a)(this.props), {
                    style: this.props.style
                }), s.Children.only(this.props.children))
            }, t.childContextTypes = {
                registerReceiver: a.func,
                requestVisibilityCheck: a.func,
                getScrollContent: a.func,
                scrollToTop: a.func,
                yScrollTo: a.func
            }, t
        }(s.Component);
        n.d(t, !1, function() {
            return "scrollable-area-wrapper"
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return d
        })
    },
    74: function(e, t, n) {
        "use strict";

        function r() {
            return void 0 === a && (a = s.get(c) || null), a
        }

        function i(e) {
            var t = [];
            if (!e || e.includeChosenLanguage) {
                var n = r();
                n && t.push(n)
            }
            return navigator.languages ? t = t.concat(navigator.languages.slice()) : navigator.language ? t.push(navigator.language) : navigator.userLanguage && t.push(navigator.userLanguage), t
        }

        function o(e) {
            a = e, s.set(c, e, {
                expires: 365,
                domain: Object(l.a)(),
                secure: "https:" === window.location.protocol
            })
        }
        t.a = r, t.b = i, t.c = o;
        var a, s = n(35),
            l = (n.n(s), n(44)),
            c = "language"
    },
    818: function(e, t, n) {
        n(152), n(189), e.exports = n(819)
    },
    819: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                isReady: e.session.authInitialized && e.session.languageInitialized,
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(u.d)(e)
            }
        }

        function i() {
            l.n.mount(a.createElement(s.c, {
                history: l.n.history
            }, a.createElement(z, null)), document.getElementById("root"))
        }

        function o() {
            var e = l.n.store.getState();
            !D && Object(u.e)(e) && (D = !0, M(), l.a.optimizedBuild ? i() : setTimeout(i, 100))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1),
            s = n(22),
            l = n(2),
            c = n(39),
            u = n(17),
            d = n(238),
            h = n(7),
            p = n(12),
            g = n(0),
            m = n(93),
            f = n(15),
            v = n(114),
            w = n(239),
            b = n(5),
            y = n(246),
            _ = n(253),
            E = n(3),
            k = (n(820), m.a.wrap(function() {
                return n.e(37).then(n.bind(null, 2091))
            }, "PopoutChatPage")),
            S = m.a.wrap(function() {
                return n.e(51).then(n.bind(null, 2092))
            }, "BitsRoot"),
            C = m.a.wrap(function() {
                return n.e(42).then(n.bind(null, 2094))
            }, "SubsRoot"),
            L = m.a.wrap(function() {
                return n.e(38).then(n.bind(null, 2097))
            }, "EmbeddedChatPage"),
            T = m.a.wrap(function() {
                return n.e(0).then(n.bind(null, 2098))
            }, "CommunitySelectionPage"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onHistoryChange = function() {
                        t.props.rootLatencyTracker.reset(), v.a.clearAppWideTracking("game"), v.a.clearAppWideTracking("chan"), v.a.clearAppWideTracking("pagetype")
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.history.listen(this.onHistoryChange), this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isReady ? a.createElement(E.U, {
                        className: "twilight-minimal-root",
                        position: E._3.Absolute,
                        overflow: E.Z.Hidden,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0
                    }, a.createElement(p.e, null, a.createElement(p.d, {
                        path: "/popout/:channelLogin/chat",
                        component: k
                    }), a.createElement(p.d, {
                        path: "/embed/:channelLogin/chat",
                        component: L
                    }), a.createElement(p.d, {
                        path: "/bits",
                        component: S
                    }), a.createElement(p.d, {
                        path: "/hi",
                        component: T
                    }), a.createElement(p.d, {
                        path: "/subs",
                        component: C
                    }), a.createElement(p.d, {
                        path: "/",
                        render: N
                    })), a.createElement(w.a, null), l.n.benchmarking.toolsEnabled && a.createElement(b.b, {
                        benchmarking: l.n.benchmarking
                    }), l.a.buildType !== f.a.Production && this.props.firstPageLoaded && a.createElement(y.a, null), this.props.firstPageLoaded && a.createElement(_.a, {
                        history: this.props.history
                    })) : null
                }, t.prototype.reportInteractive = function() {
                    this.props.isReady && this.props.latencyTracking.reportInteractive()
                }, t = g.__decorate([Object(b.c)("MinimalRoot", {
                    isRoot: !0
                })], t)
            }(a.Component),
            N = function() {
                return window.location.reload(), null
            },
            R = x,
            I = Object(h.a)(r)(R),
            z = Object(p.f)(I);
        l.a.optimizedBuild || n.e(1).then(n.bind(null, 2090)).then(function(e) {
            return window.Perf = e
        });
        var M, D = !1;
        M = l.n.store.getReduxStore().subscribe(o), Object(d.a)(), l.n.store.dispatch(Object(c.e)())
    },
    820: function(e, t) {},
    92: function(e, t, n) {
        "use strict";

        function r() {
            return {
                show: !1,
                modalID: null,
                modalProps: null
            }
        }

        function i(e) {
            var t = h.get(e);
            return t || (t = e.name + ":" + Object(c.a)(), h.set(e, t), d[t] = e), t
        }

        function o(e, t) {
            switch (void 0 === e && (e = r()), t.type) {
                case u.b:
                    return {
                        show: !0,
                        modalID: i(t.modalComponent),
                        modalProps: t.modalProps
                    };
                case u.a:
                    return {
                        show: !1,
                        modalID: null,
                        modalProps: null
                    };
                default:
                    return e
            }
        }

        function a(e) {
            return e.modal.modalID ? d[e.modal.modalID] : null
        }

        function s(e, t) {
            return e.modal.show && e.modal.modalID === i(t)
        }
        t.a = a, t.b = s;
        var l = n(2),
            c = n(18),
            u = n(37),
            d = {},
            h = new Map;
        l.n.store.registerReducer("modal", o)
    },
    93: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(1),
            o = n(2),
            a = n(70),
            s = n(3),
            l = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        showLoader: !1,
                        error: !1
                    }, n
                }
                return r.__extends(t, e), t.wrap = function(e, n, r) {
                    return function(o) {
                        return i.createElement(t, {
                            loader: e,
                            component: n,
                            componentProps: o,
                            failSilently: !(!r || !r.failSilently),
                            onRendered: r && r.onRendered
                        })
                    }
                }, t.prototype.componentDidUpdate = function(e, t) {
                    !t.Component && this.state.Component && this.props.onRendered && this.props.onRendered()
                }, t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, this.props.loader()];
                                case 1:
                                    return e = r.sent(), t = e[this.props.component], t || o.i.fatal(new Error("Component not found."), "Component not found.", {
                                        component: this.props.component
                                    }), this.setState({
                                        Component: t,
                                        showLoader: !1,
                                        error: !t
                                    }), [3, 3];
                                case 2:
                                    return n = r.sent(), o.i.fatal(n, "Error loading module.", {
                                        component: this.props.component
                                    }), this.setState({
                                        Component: void 0,
                                        showLoader: !1,
                                        error: !0
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.Component ? i.createElement(this.state.Component, r.__assign({}, this.props.componentProps)) : this.state.error ? this.props.failSilently ? null : i.createElement(a.a, {
                        message: Object(o.d)("Failed to load module.", "Loadable")
                    }) : i.createElement(s.Y, {
                        fillContent: !0
                    })
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return l
        })
    },
    98: function(e, t, n) {
        "use strict";

        function r(e) {
            var t = encodeURIComponent(JSON.stringify(e)),
                n = t.replace(/%([0-9A-F]{2})/g, function(e, t) {
                    return String.fromCharCode(Number("0x" + t))
                }),
                r = btoa(n);
            return "data=" + encodeURIComponent(r)
        }
        t.a = r
    },
    99: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function e() {}
            return e.prototype.get = function(e, t) {
                if ("experiments" === e) return t;
                var n = window.__twilightSettings && window.__twilightSettings[e];
                return void 0 !== n ? n : t
            }, e
        }()
    }
}, [818]);
//# sourceMappingURL=minimal-fba222e78244047c997c975782bbcecf.js.map