(window.webpackJsonp = window.webpackJsonp || []).push([
    [120], {
        "/Z6v": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_2x-c98151cef856bab0e62c.png"
        },
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("Ue10"),
                o = (n("sL9O"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDraggingOver: !1
                        }, t.onDragEnter = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !0
                            })
                        }, t.onDragLeave = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            })
                        }, t.onFileInputChange = function(e) {
                            e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                        }, t.onFileDrop = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            }), t.finalizeSelections(e.dataTransfer.files)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(a.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, i.createElement(a.Qa, {
                            position: a.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: a.jc.Above
                        }, i.createElement("input", {
                            "data-a-target": "file-picker-input",
                            "data-test-selector": "file-picker-input",
                            className: "drag-and-drop-file-picker__input",
                            accept: this.props.allowedFileTypes.join(","),
                            multiple: this.props.multiFile || !1,
                            onChange: this.onFileInputChange,
                            type: "file",
                            onDragLeave: this.onDragLeave,
                            onDragEnter: this.onDragEnter,
                            onDrop: this.onFileDrop
                        })), this.props.children)
                    }, t.prototype.finalizeSelections = function(e) {
                        e && this.props.onFilesSubmitted(Array.from(e))
                    }, t
                }(i.Component))
        },
        "0HeA": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r, i, a = n("/7QA"),
                o = n("DMoW");
            ! function(e) {
                e.Default = "default", e.Extension = "extension"
            }(i || (i = {}));
            var s = ((r = {})[o.D.DEFAULT] = i.Default, r[o.D.EXTENSION] = i.Extension, r);

            function c(e, t) {
                a.o.track(e, {
                    panel_id: t.panelID,
                    panel_type: s[t.panelType],
                    channel_id: t.channelID,
                    panel_target: t.panelTarget || null
                })
            }
        },
        "1IJ0": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("9C/b"),
                o = n("/7QA"),
                s = n("2xye"),
                c = n("22qk"),
                l = n("Ue10"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.internalTrackingMediums = [s.PageviewMedium.ExtensionCategory, s.PageviewMedium.ExtensionConfiguration, s.PageviewMedium.ExtensionDiscovery, s.PageviewMedium.ExtensionInstalledModal, s.PageviewMedium.ExtensionManagement, s.PageviewMedium.ExtensionManagerCarousel, s.PageviewMedium.ExtensionPage, s.PageviewMedium.ExtensionSearch], t.goBack = function() {
                            var e = t.props,
                                n = e.channelLogin,
                                r = e.location,
                                i = e.history;
                            !n || r.state && t.internalTrackingMediums.includes(r.state.medium) ? i.goBack() : i.push(Object(c.c)(n))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.title,
                            n = e.showBackLink;
                        return i.createElement(l.Fb, {
                            background: l.r.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Stretch
                        }, n && i.createElement(l.Fb, {
                            border: !0,
                            display: l.X.Flex,
                            flexGrow: 0
                        }, i.createElement(l.A, {
                            ariaLabel: Object(o.d)("Navigate to previous page", "ExtensionPageHeader"),
                            size: l.B.Large,
                            icon: l.ub.AngleLeft,
                            onClick: this.goBack
                        })), i.createElement(l.Fb, {
                            border: !0,
                            display: l.X.Flex,
                            flexGrow: 1,
                            padding: 2
                        }, i.createElement(l.W, {
                            type: l.Wb.H4
                        }, t)))
                    }, t
                }(i.Component),
                d = Object(a.a)(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        "1OTy": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/0dD"),
                c = n("XDQu"),
                l = n("Ue10"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(l.Ma, {
                            label: this.props.label,
                            type: this.props.type,
                            src: this.props.src,
                            alt: this.props.alt,
                            srcSet: this.srcSet,
                            value: this.props.value,
                            onChange: this.props.onChange,
                            checked: this.props.checked
                        })
                    }, Object.defineProperty(t.prototype, "srcSet", {
                        get: function() {
                            return this.props.darkModeEnabled && this.props.darkSrcSet || this.props.srcSet
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component);
            var d = Object(o.compose)(Object(a.connect)(function(e) {
                return {
                    darkModeEnabled: Object(c.a)(e) === s.a.Dark
                }
            }))(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        "1P3F": function(e, t, n) {},
        "1pP+": function(e, t, n) {},
        "1uty": function(e, t, n) {
            "use strict";
            var r = "_erd";

            function i(e) {
                return e[r]
            }
            e.exports = {
                initState: function(e) {
                    return e[r] = {}, i(e)
                },
                getState: i,
                cleanState: function(e) {
                    delete e[r]
                }
            }
        },
        "22qk": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return "/ext/" + d(e, t)
            }

            function i(e, t, n) {
                return {
                    pathname: "" + o(e),
                    search: "?configure=true&extensionID=" + d(t, n)
                }
            }

            function a(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function o(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function c(e, t) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: t
                }
            }

            function l(e) {
                return "/ext/categories/" + e
            }

            function u(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function d(e, t) {
                return t ? e + "-" + t : e
            }
            n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "g", function() {
                return u
            })
        },
        "2DIU": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_1x-4f76ba5fbbaca5a76d41.png"
        },
        "2ORI": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_2x-302cb9125ccffd2d356d.png"
        },
        "2xEe": function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_1x-29d0a02f9cc67088594b.png"
        },
        "5IFo": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "g", function() {
                return m
            }), n.d(t, "f", function() {
                return h
            });
            var r, i = n("/7QA"),
                a = n("2xye");

            function o(e) {
                var t = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                i.o.track(a.SpadeEventType.ExtensionInstall, t)
            }

            function s(e) {
                var t = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                i.o.track(a.SpadeEventType.ExtensionConfigureView, t)
            }

            function c(e, t) {
                return {
                    action: e,
                    extension_id: t.extensionId,
                    extension_version: t.extensionVersion,
                    extension_anchor: "component",
                    extension_slot: function(e) {
                        if (!e) return null;
                        var t = e.split("-");
                        return t && 3 === t.length ? parseInt(t[2], 10) : null
                    }(t.slotName)
                }
            }

            function l(e) {
                i.o.track(a.SpadeEventType.ExtensionStreamerComponentSettings, c(r.Open, e))
            }

            function u(e) {
                i.o.track(a.SpadeEventType.ExtensionStreamerComponentSettings, c(r.Close, e))
            }

            function d(e) {
                i.o.track(a.SpadeEventType.ExtensionStreamerComponentSettings, c(r.Save, e))
            }

            function p(e) {
                return {
                    extension_id: e.extensionID,
                    extension_version: e.extensionVersion,
                    extension_anchor: e.anchor,
                    extension_mode: e.mode,
                    user_id: e.loginID,
                    channel_id: e.channelID
                }
            }

            function m(e) {
                i.o.track(a.SpadeEventType.ExtensionPopoutClicked, p(e))
            }

            function h(e) {
                i.o.track(a.SpadeEventType.ExtensionPopinClicked, p(e))
            }! function(e) {
                e.Open = "open", e.Close = "close", e.Save = "save"
            }(r || (r = {}))
        },
        "5gJ6": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("/7QA"),
                s = n("2DIU"),
                c = n.n(s),
                l = n("TSpM"),
                u = n.n(l),
                d = n("vE+g"),
                p = n.n(d),
                m = n("/Z6v"),
                h = n.n(m),
                f = n("WJ6U"),
                y = n.n(f),
                g = n("uReR"),
                b = n.n(g),
                v = n("SPyc"),
                E = n.n(v),
                C = n("bOWA"),
                k = n.n(C),
                P = n("KL9a"),
                S = n.n(P),
                x = n("iSjI"),
                O = n.n(x),
                I = n("bQeB"),
                w = n.n(I),
                _ = n("HvcU"),
                N = n.n(_),
                T = n("GA+j"),
                D = n.n(T),
                F = n("FBRg"),
                j = n.n(F),
                R = n("2xEe"),
                A = n.n(R),
                M = n("q8H6"),
                L = n.n(M),
                B = n("oQBz"),
                U = n.n(B),
                W = n("PwAB"),
                z = n.n(W),
                G = n("/0dD"),
                Y = n("DMoW"),
                H = n("XDQu"),
                q = n("Ue10"),
                X = (n("88jh"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if ("prime" === this.props.paymentProvider) return i.createElement(q.tb, {
                            asset: q.ub.LogoTwitchPrime,
                            width: 66,
                            height: 30,
                            type: q.vb.Brand
                        });
                        var e = this.imageSource,
                            t = e.src,
                            n = e.alt,
                            r = e.srcSet;
                        return i.createElement(q.Ya, {
                            className: "payment-method-image"
                        }, i.createElement(q.S, {
                            src: t,
                            alt: n,
                            srcSet: r
                        }))
                    }, Object.defineProperty(t.prototype, "imageSource", {
                        get: function() {
                            var e = Object(o.d)("credit card", "PaymentMethodImage");
                            switch (this.props.paymentProvider) {
                                case "xsolla_v3":
                                    return {
                                        src: z.a,
                                        srcSet: {
                                            "1x": U.a,
                                            "2x": z.a
                                        },
                                        alt: Object(o.d)("Xsolla icon", "PaymentMethodImage")
                                    };
                                case "google_iab":
                                    return {
                                        src: y.a,
                                        alt: Object(o.d)("Android icon", "PaymentMethodImage")
                                    }
                            }
                            var t = this.props.paymentInstrumentType ? this.props.paymentInstrumentType.toUpperCase() : void 0,
                                n = this.props.cardType ? this.props.cardType.toUpperCase() : void 0;
                            switch (t) {
                                case Y.F.CREDIT_CARD:
                                    switch (n) {
                                        case Y.E.AMERICAN_EXPRESS:
                                            return {
                                                src: b.a,
                                                alt: Object(o.d)("American Express", "PaymentMethodImage")
                                            };
                                        case Y.E.DISCOVER:
                                            return {
                                                src: E.a,
                                                alt: Object(o.d)("Discover", "PaymentMethodImage")
                                            };
                                        case Y.E.MASTERCARD:
                                            return {
                                                src: this.props.darkModeEnabled ? S.a : k.a,
                                                alt: Object(o.d)("Mastercard", "PaymentMethodImage")
                                            };
                                        case Y.E.VISA:
                                            return {
                                                src: O.a,
                                                alt: Object(o.d)("Visa", "PaymentMethodImage")
                                            };
                                        default:
                                            return {
                                                src: w.a,
                                                srcSet: {
                                                    "1x": w.a,
                                                    "2x": N.a
                                                },
                                                alt: e
                                            }
                                    }
                                case Y.F.AMAZON:
                                    return {
                                        src: this.props.darkModeEnabled ? p.a : c.a,
                                        srcSet: this.props.darkModeEnabled ? {
                                            "1x": p.a,
                                            "2x": h.a
                                        } : {
                                            "1x": c.a,
                                            "2x": u.a
                                        },
                                        alt: Object(o.d)("Amazon Pay", "PaymentMethodImage")
                                    };
                                case Y.F.PAYPAL:
                                    return {
                                        src: this.props.darkModeEnabled ? A.a : D.a,
                                        srcSet: this.props.darkModeEnabled ? {
                                            "1x": A.a,
                                            "2x": L.a
                                        } : {
                                            "1x": D.a,
                                            "2x": j.a
                                        },
                                        alt: Object(o.d)("Paypal", "PaymentMethodImage")
                                    };
                                default:
                                    return {
                                        src: w.a,
                                        srcSet: {
                                            "1x": w.a,
                                            "2x": N.a
                                        },
                                        alt: e
                                    }
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component));
            var V = Object(a.connect)(function(e) {
                return {
                    darkModeEnabled: Object(H.a)(e) === G.a.Dark
                }
            })(X);
            n.d(t, !1, function() {
                return X
            }), n.d(t, "a", function() {
                return V
            })
        },
        "6fcp": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
                }(r || (r = {}))
        },
        "6oOb": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.CONFIRMATION = 1] = "CONFIRMATION"
                }(r || (r = {}))
        },
        "7sSR": function(e, t, n) {
            "use strict";
            var r = n("t3DW").forEach,
                i = n("W+U1"),
                a = n("Sa1T"),
                o = n("LO96"),
                s = n("UFhH"),
                c = n("q7TX"),
                l = n("GOnX"),
                u = n("wnTG"),
                d = n("1uty"),
                p = n("GNKm"),
                m = n("yUZ2");

            function h(e) {
                return Array.isArray(e) || void 0 !== e.length
            }

            function f(e) {
                if (Array.isArray(e)) return e;
                var t = [];
                return r(e, function(e) {
                    t.push(e)
                }), t
            }

            function y(e) {
                return e && 1 === e.nodeType
            }

            function g(e, t, n) {
                var r = e[t];
                return void 0 !== r && null !== r || void 0 === n ? r : n
            }
            e.exports = function(e) {
                var t;
                if ((e = e || {}).idHandler) t = {
                    get: function(t) {
                        return e.idHandler.get(t, !0)
                    },
                    set: e.idHandler.set
                };
                else {
                    var n = o(),
                        b = s({
                            idGenerator: n,
                            stateHandler: d
                        });
                    t = b
                }
                var v = e.reporter;
                v || (v = c(!1 === v));
                var E = g(e, "batchProcessor", u({
                        reporter: v
                    })),
                    C = {};
                C.callOnAdd = !!g(e, "callOnAdd", !0), C.debug = !!g(e, "debug", !1);
                var k, P = a(t),
                    S = i({
                        stateHandler: d
                    }),
                    x = g(e, "strategy", "object"),
                    O = {
                        reporter: v,
                        batchProcessor: E,
                        stateHandler: d,
                        idHandler: t
                    };
                if ("scroll" === x && (l.isLegacyOpera() ? (v.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), x = "object") : l.isIE(9) && (v.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), x = "object")), "scroll" === x) k = m(O);
                else {
                    if ("object" !== x) throw new Error("Invalid strategy name: " + x);
                    k = p(O)
                }
                var I = {};
                return {
                    listenTo: function(e, n, i) {
                        function a(e) {
                            var t = P.get(e);
                            r(t, function(t) {
                                t(e)
                            })
                        }

                        function o(e, t, n) {
                            P.add(t, n), e && n(t)
                        }
                        if (i || (i = n, n = e, e = {}), !n) throw new Error("At least one element required.");
                        if (!i) throw new Error("Listener required.");
                        if (y(n)) n = [n];
                        else {
                            if (!h(n)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            n = f(n)
                        }
                        var s = 0,
                            c = g(e, "callOnAdd", C.callOnAdd),
                            l = g(e, "onReady", function() {}),
                            u = g(e, "debug", C.debug);
                        r(n, function(e) {
                            d.getState(e) || (d.initState(e), t.set(e));
                            var p = t.get(e);
                            if (u && v.log("Attaching listener to element", p, e), !S.isDetectable(e)) return u && v.log(p, "Not detectable."), S.isBusy(e) ? (u && v.log(p, "System busy making it detectable"), o(c, e, i), I[p] = I[p] || [], void I[p].push(function() {
                                ++s === n.length && l()
                            })) : (u && v.log(p, "Making detectable..."), S.markBusy(e, !0), k.makeDetectable({
                                debug: u
                            }, e, function(e) {
                                if (u && v.log(p, "onElementDetectable"), d.getState(e)) {
                                    S.markAsDetectable(e), S.markBusy(e, !1), k.addListener(e, a), o(c, e, i);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var m = e.offsetWidth,
                                            h = e.offsetHeight;
                                        t.startSize.width === m && t.startSize.height === h || a(e)
                                    }
                                    I[p] && r(I[p], function(e) {
                                        e()
                                    })
                                } else u && v.log(p, "Element uninstalled before being detectable.");
                                delete I[p], ++s === n.length && l()
                            }));
                            u && v.log(p, "Already detecable, adding listener."), o(c, e, i), s++
                        }), s === n.length && l()
                    },
                    removeListener: P.removeListener,
                    removeAllListeners: P.removeAllListeners,
                    uninstall: function(e) {
                        if (!e) return v.error("At least one element is required.");
                        if (y(e)) e = [e];
                        else {
                            if (!h(e)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            e = f(e)
                        }
                        r(e, function(e) {
                            P.removeAllListeners(e), k.uninstall(e), d.cleanState(e)
                        })
                    }
                }
            }
        },
        "85n/": function(e, t, n) {
            "use strict";
            var r = n("TQGo");
            n.d(t, "a", function() {
                return r.a
            })
        },
        "88jh": function(e, t, n) {},
        "8ENv": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                i = o(n("J2m7")),
                a = o(n("xweI"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.refs = {}
                }
                return r(e, [{
                    key: "add",
                    value: function(e, t) {
                        this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                    }
                }, {
                    key: "remove",
                    value: function(e, t) {
                        var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
                    }
                }, {
                    key: "isActive",
                    value: function() {
                        return this.active
                    }
                }, {
                    key: "getActive",
                    value: function() {
                        var e = this;
                        return (0, i.default)(this.refs[this.active.collection], function(t) {
                            return t.node.sortableInfo.index == e.active.index
                        })
                    }
                }, {
                    key: "getIndex",
                    value: function(e, t) {
                        return this.refs[e].indexOf(t)
                    }
                }, {
                    key: "getOrderedRefs",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                        return (0, a.default)(this.refs[e], function(e) {
                            return e.node.sortableInfo.index
                        })
                    }
                }]), e
            }();
            t.default = s
        },
        "8sUD": function(e, t, n) {},
        "9fjZ": function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TicketDescription"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "productName"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "taxCountry"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "product"
                            },
                            name: {
                                kind: "Name",
                                value: "subscriptionProduct"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priceInfo"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "taxCountry"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "taxCountry"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "currency"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "exponent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isTaxInclusive"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tax"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "total"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "interval"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unit"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasAdFree"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasFastChat"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasSubonlyVideoArchive"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tier"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "owner"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "displayName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "bannerImageURL"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "profileImageURL"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "width"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "300"
                                                }
                                            }],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastBadges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "badge"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionProducts"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "emotes"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "id"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "token"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "giftPromotion"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "newPrice"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "promotion"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "paidUpgradePromotion"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "benefit"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 667
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery TicketDescription($productName: String! $taxCountry: String) {\nproduct: subscriptionProduct(productName: $productName) {\nid\ndisplayName\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\ntier\nowner {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width: 300)\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\ntier\nemotes {\nid\ntoken\n}\n}\n}\ngiftPromotion {\nnewPrice\n}\nself {\npromotion {\nnewPrice\n}\npaidUpgradePromotion {\nnewPrice\n}\nbenefit {\nid\ngift {\nisGift\n}\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = r
        },
        AVF4: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_1x-0c57bd2e9d4cd4bb8474.png"
        },
        AfzZ: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("cZKs"),
                s = n("kRBY"),
                c = n("Ue10"),
                l = n("1hWM"),
                u = n("oJmH"),
                d = n("mLw1"),
                p = n("/7QA"),
                m = n("8/mp"),
                h = n("qCDY"),
                f = n("1IJ0"),
                y = n("YyE3"),
                g = n("22qk"),
                b = n("5IFo"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasCardImageError: !1
                        }, t.onCardImageError = function() {
                            t.setState({
                                hasCardImageError: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.props,
                            t = e.extensionID,
                            n = e.extensionsForChannel,
                            r = t.split("-"),
                            i = r[0],
                            a = r[1];
                        n && !n.loading && n.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(n.installedExtensions)
                        }), Object(b.d)({
                            extensionClientID: i,
                            extensionVersion: a
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.state.installation && e.extensionsForChannel && !e.extensionsForChannel.loading && e.extensionsForChannel.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(e.extensionsForChannel.installedExtensions)
                        })
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.channelID,
                            n = e.channelLogin,
                            r = e.languageCode,
                            a = e.locale,
                            o = this.isLoading(),
                            s = t || "",
                            u = n || "",
                            d = null;
                        if (o) d = this.renderPlaceholders();
                        else {
                            if (!this.state.installation) return this.renderRedirect(u);
                            var y = this.state.installation,
                                g = y.extension;
                            d = i.createElement(c.Ya, {
                                fullWidth: !0
                            }, i.createElement(c.Ya, {
                                padding: {
                                    bottom: 1
                                }
                            }, i.createElement(c.G, {
                                row: !0,
                                border: !1
                            }, i.createElement(c.I, {
                                alt: g.name,
                                src: this.state.hasCardImageError ? p.a.defaultAvatarURL : g.iconUrl,
                                aspect: c.p.Aspect1x1,
                                size: c.J.Size6,
                                onError: this.onCardImageError
                            }), i.createElement(c.H, null, i.createElement(c.Ya, {
                                padding: 1
                            }, i.createElement(c.W, {
                                type: c.Wb.H4
                            }, g.name), i.createElement(c.W, {
                                type: c.Wb.Span,
                                color: c.O.Alt2
                            }, Object(p.d)("Created by {extensionAuthor}", {
                                extensionAuthor: g.authorName
                            }, "ExtensionConfigurePresentation")))))), i.createElement(c.Ya, null, i.createElement(h.a, {
                                channelID: s,
                                channelLogin: n,
                                className: "",
                                extensionMode: l.ExtensionMode.Config,
                                installation: y,
                                languageCode: r,
                                locale: a,
                                login: n,
                                loginID: s,
                                isPopout: !1
                            })))
                        }
                        var b = i.createElement(f.a, {
                            channelLogin: n,
                            showBackLink: !1,
                            title: Object(p.d)("Configure", "ExtensionConfigurePresentation")
                        });
                        return i.createElement(m.b, null, i.createElement(c.Ya, {
                            padding: 2
                        }, b, i.createElement(c.Fb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, d)))
                    }, t.prototype.findExtensionFromInstallations = function(e) {
                        var t = this;
                        return e.find(function(e) {
                            var n = e.extension;
                            return t.props.extensionID === n.clientId + "-" + n.version
                        })
                    }, t.prototype.renderPlaceholders = function() {
                        return i.createElement(c.Ya, {
                            fullWidth: !0
                        }, i.createElement(c.Ya, {
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(c.Ya, null, i.createElement(c.jb, {
                            width: 60,
                            height: 60
                        })), i.createElement(c.Ya, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(c.jb, {
                            lineCount: 2,
                            width: 200
                        }))))
                    }, t.prototype.isLoading = function() {
                        return !this.props.extensionsForChannel || !this.props.extensionsForChannel.installedExtensions
                    }, t.prototype.renderRedirect = function(e) {
                        return i.createElement(d.a, {
                            to: Object(g.e)(e)
                        })
                    }, t
                }(i.Component),
                E = Object(u.compose)(Object(y.a)({
                    name: "extensionsForChannel",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID || ""
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelID
                    }
                }))(v),
                C = (n("nH1N"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.channelID,
                            n = e.channelLogin,
                            r = e.extensionID,
                            a = e.languageCode,
                            s = e.locale,
                            l = e.onClose;
                        return i.createElement(c.Fb, {
                            background: c.r.Base,
                            className: "extension-configure-modal"
                        }, i.createElement(E, {
                            channelLogin: n,
                            channelID: t,
                            extensionID: r,
                            languageCode: a,
                            locale: s
                        }), i.createElement(o.a, {
                            closeOnBackdropClick: !0,
                            onClose: l
                        }))
                    }, t
                }(i.Component));
            var k = Object(a.connect)(function(e) {
                var t = Object(s.e)(e);
                return {
                    channelID: t && t.id,
                    languageCode: Object(s.b)(e),
                    locale: Object(s.d)(e)
                }
            })(C);
            n.d(t, !1, function() {
                return C
            }), n.d(t, "a", function() {
                return k
            })
        },
        Aoab: function(e, t, n) {},
        BCEg: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            t.default = function(e) {
                var t, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), i(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = (0, s.findDOMNode)(this);
                            e.sortableHandle = !0
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, c.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = u.withRef ? "wrappedInstance" : null;
                            return o.default.createElement(e, r({
                                ref: t
                            }, this.props))
                        }
                    }]), n
                }(a.Component), t.displayName = (0, l.provideDisplayName)("sortableHandle", e), n
            };
            var a = n("q1tI"),
                o = u(a),
                s = n("i8i4"),
                c = u(n("QLaP")),
                l = n("jTc+");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        BIez: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_2x-051201f07d7c83cdf807.png"
        },
        BaCc: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionPanel_BitsBalance"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bitsBalance"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 67
                }
            };
            n.loc.source = {
                body: "query ExtensionPanel_BitsBalance {\ncurrentUser {\nid\nbitsBalance\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        C8FX: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10");
            n("uUdG");
            var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.price ? i.createElement(o.Ya, {
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column
                    }, this.props.productDiscountPrice && i.createElement(o.W, {
                        bold: !0,
                        className: "ticket-price__promotion",
                        fontSize: o.Ca.Size4
                    }, Object(a.d)("{discountedPrice} / First Month*", {
                        discountedPrice: this.props.productDiscountPrice
                    }, "TicketPrice")), i.createElement(o.Ya, {
                        display: o.X.Flex,
                        justifyContent: o.Xa.Center,
                        flexWrap: o.Ba.Wrap
                    }, i.createElement(o.W, {
                        type: o.Wb.Span,
                        fontSize: o.Ca.Size4,
                        decoration: this.props.productDiscountPrice ? o.Ub.Strikethrough : void 0,
                        "data-a-target": "js-test-ticket-price-text"
                    }, Object(a.d)("{price} / {interval}", {
                        price: i.createElement(o.W, {
                            type: o.Wb.Span,
                            bold: !0
                        }, this.props.price),
                        interval: function(e) {
                            switch (e) {
                                case "WEEK":
                                    return Object(a.d)("Week", "TicketPrice");
                                case "MONTH":
                                    return Object(a.d)("Month", "TicketPrice");
                                case "YEAR":
                                    return Object(a.d)("Year", "TicketPrice");
                                case "ONE_TIME":
                                    return Object(a.d)("One-Time Purchase", "TicketPrice");
                                default:
                                    return ""
                            }
                        }(this.props.interval)
                    }, "TicketDescription")), this.formattedTaxInclusivity && i.createElement(o.Qa, {
                        margin: {
                            left: .5
                        }
                    }, i.createElement(o.W, {
                        fontSize: o.Ca.Size4,
                        type: o.Wb.Span,
                        decoration: this.props.productDiscountPrice ? o.Ub.Strikethrough : void 0
                    }, Object(a.d)("(Includes VAT)", "TicketDescription"))))) : i.createElement(o.ab, {
                        fillContent: !0
                    })
                }, Object.defineProperty(t.prototype, "formattedTaxInclusivity", {
                    get: function() {
                        return this.props.showEuSubs && this.props.productPriceTaxInclusive ? Object(a.d)("(Includes VAT)", "TicketPrice") : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.PureComponent);
            n.d(t, "a", function() {
                return s
            })
        },
        CUlp: function(e, t, n) {
            var r, i;
            "undefined" != typeof window && window, void 0 === (i = "function" == typeof(r = function() {
                "use strict";

                function e() {}
                var t = e.prototype;
                return t.on = function(e, t) {
                    if (e && t) {
                        var n = this._events = this._events || {},
                            r = n[e] = n[e] || [];
                        return -1 == r.indexOf(t) && r.push(t), this
                    }
                }, t.once = function(e, t) {
                    if (e && t) {
                        this.on(e, t);
                        var n = this._onceEvents = this._onceEvents || {};
                        return (n[e] = n[e] || {})[t] = !0, this
                    }
                }, t.off = function(e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                        var r = n.indexOf(t);
                        return -1 != r && n.splice(r, 1), this
                    }
                }, t.emitEvent = function(e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                        n = n.slice(0), t = t || [];
                        for (var r = this._onceEvents && this._onceEvents[e], i = 0; i < n.length; i++) {
                            var a = n[i];
                            r && r[a] && (this.off(e, a), delete r[a]), a.apply(this, t)
                        }
                        return this
                    }
                }, t.allOff = function() {
                    delete this._events, delete this._onceEvents
                }, e
            }) ? r.call(t, n, t, e) : r) || (e.exports = i)
        },
        D8NC: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_1x-94c97f413ee6005ab1a1.png"
        },
        E3rh: function(e, t, n) {
            e.exports = n.p + "assets/more_methods_dark_2x-606b603eb4951527dc9f.png"
        },
        EF6p: function(e, t, n) {
            e.exports = n.p + "assets/more_methods_1x-98862ad01d0cfaef3e09.png"
        },
        "EZh/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = 3
        },
        EgbR: function(e, t, n) {},
        EuHz: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i = n("/MKj"),
                a = n("mrSG"),
                o = n("1hWM"),
                s = n("q1tI"),
                c = n("oJmH"),
                l = n("pQUg"),
                u = n.n(l),
                d = n("Nxrd"),
                p = n("/7QA"),
                m = n("yR8l"),
                h = n("geRD"),
                f = n("5zC2"),
                y = n("fvjX"),
                g = n("aCAx"),
                b = n("KJv/"),
                v = n("1rIY"),
                E = (r = Object(v.a)("ExtensionActionContext", {
                    currentChannelID: null,
                    currentActionRequest: null,
                    currentActionRequestUI: null,
                    sendActionResult: function() {
                        return null
                    }
                })).InnerProvider,
                C = r.withContext,
                k = n("MU5F"),
                P = n("x7UT"),
                S = n("UUve"),
                x = n("/aPz"),
                O = n("2xye"),
                I = n("6oOb"),
                w = n("KriR");
            var _, N = n("TilG"),
                T = 1e4;
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.InProgress = 1] = "InProgress", e[e.Confirming = 2] = "Confirming", e[e.TimedOut = 3] = "TimedOut", e[e.Subscribed = 4] = "Subscribed", e[e.Cancelled = 5] = "Cancelled", e[e.Error = 6] = "Error", e[e.ProductNotAvailable = 7] = "ProductNotAvailable"
            }(_ || (_ = {}));
            var D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checkoutProgress: I.a.NOT_STARTED,
                            subscriptionState: _.NotStarted
                        }, t.onCheckoutModalClosed = function() {
                            t.state.checkoutProgress !== I.a.CONFIRMATION && t.setState({
                                subscriptionState: _.Cancelled
                            })
                        }, t.onCheckoutProgress = function(e) {
                            e === I.a.CONFIRMATION && (t.waitForPubsubTimeout = setTimeout(function() {
                                t.waitForPubsubTimeout = void 0, t.setState({
                                    subscriptionState: _.TimedOut
                                })
                            }, T), t.setState({
                                subscriptionState: _.Confirming
                            })), t.setState({
                                checkoutProgress: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
                        var n = this.props.currentSubscriptionData;
                        if (n)
                            if (n.error) this.setState({
                                subscriptionState: _.Error
                            });
                            else if (this.state.subscriptionState !== _.NotStarted || n.loading) {
                            if (t.subscriptionState === this.state.subscriptionState) {
                                if (this.state.subscriptionState === _.Confirming) {
                                    var r = this.didUserReceiveSubscription(e),
                                        i = !!this.props.pubsub.messages.entitlementMessage;
                                    r ? (clearTimeout(this.waitForPubsubTimeout), this.waitForPubsubTimeout = void 0, this.setState({
                                        subscriptionState: _.Subscribed
                                    })) : i && this.waitForPubsubTimeout ? (clearTimeout(this.waitForPubsubTimeout), this.waitForPubsubTimeout = void 0, n.refetch()) : this.waitForPubsubTimeout || this.setState({
                                        subscriptionState: _.Cancelled
                                    })
                                }
                                return
                            }
                            switch (this.state.subscriptionState) {
                                case _.Confirming:
                                    n.refetch();
                                    break;
                                case _.TimedOut:
                                    this.setState({
                                        subscriptionState: _.Confirming
                                    });
                                    break;
                                case _.Subscribed:
                                case _.Cancelled:
                                case _.Error:
                                case _.ProductNotAvailable:
                                    this.handleActionResult()
                            }
                        } else this.handleActionRequest()
                    }, t.prototype.render = function() {
                        return null
                    }, t.prototype.didUserReceiveSubscription = function(e) {
                        var t = this.props.currentSubscriptionData,
                            n = e.currentSubscriptionData;
                        if (!t || !n) return !1;
                        var r = t.user,
                            i = n.user;
                        if (!(r && r.self && i && i.self)) return !1;
                        var a = null === i.self.subscriptionBenefit && null !== r.self.subscriptionBenefit,
                            o = !(!r.self.subscriptionBenefit || !i.self.subscriptionBenefit || r.self.subscriptionBenefit.tier === i.self.subscriptionBenefit.tier);
                        return a || o
                    }, t.prototype.handleActionRequest = function() {
                        var e = this.props,
                            t = e.currentActionRequest,
                            n = e.currentSubscriptionData;
                        if (t && n) {
                            var r = null;
                            switch (t.options.tier) {
                                case k.ActionRequestSubTier.Upsell:
                                    var i = n.user;
                                    if (i && i.subscriptionProducts && i.self) {
                                        var a = function(e, t) {
                                            if (!t) return null;
                                            var n = t.filter(function(e) {
                                                    return null !== e
                                                }).sort(function(e, t) {
                                                    return e.tier < t.tier ? -1 : e.tier > t.tier ? 1 : -0
                                                }),
                                                r = n.findIndex(function(t) {
                                                    return t.tier === e
                                                });
                                            return null === e ? n[0] : r === n.length - 1 ? null : n[r + 1]
                                        }(i.self.subscriptionBenefit && i.self.subscriptionBenefit.tier, i.subscriptionProducts);
                                        a && (r = a.name)
                                    }
                            }
                            r ? (this.setState({
                                subscriptionState: _.InProgress
                            }), this.openCheckout(r)) : this.setState({
                                subscriptionState: _.ProductNotAvailable
                            })
                        }
                    }, t.prototype.handleActionResult = function() {
                        this.props.sendActionResult({
                            didSubscribe: this.state.subscriptionState === _.Subscribed
                        })
                    }, t.prototype.openCheckout = function(e) {
                        var t = this.props,
                            n = t.currentActionRequest,
                            r = t.currentSubscriptionData,
                            i = t.showSubscriptionCheckoutModal;
                        if (n && r) {
                            var a = r.currentUser,
                                o = r.user;
                            p.o.track(O.SpadeEventType.ExtensionSubscribeToChannelActionInit, {
                                action: n.options.tier,
                                channel_id: o && o.id || "",
                                channel: o && o.login || "",
                                extension_id: n.extensionId,
                                product_name: e,
                                user_id: a && a.id || "",
                                user: a && a.login || ""
                            }), Object(S.f)(), p.n.set(S.d, e), i({
                                productName: e,
                                onCheckoutProgress: this.onCheckoutProgress,
                                onClose: this.onCheckoutModalClosed,
                                trackingContext: {
                                    detail: n.extensionId,
                                    source: w.c.Extension
                                }
                            })
                        }
                    }, t
                }(s.Component),
                F = Object(y.compose)(Object(m.a)(N, {
                    name: "currentSubscriptionData",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.currentChannelID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.currentActionRequest || !e.currentChannelID
                    }
                }), Object(P.a)([{
                    topic: function(e) {
                        return Object(x.I)(e.currentSubscriptionData && e.currentSubscriptionData.currentUser && e.currentSubscriptionData.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "entitlementMessage"
                    },
                    skip: function(e) {
                        return !e.currentSubscriptionData || !e.currentSubscriptionData.currentUser || !e.currentSubscriptionData.currentUser.id
                    }
                }]))(D);
            var j = Object(y.compose)(C(function(e) {
                    return {
                        currentActionRequest: e.currentActionRequest,
                        currentChannelID: e.currentChannelID,
                        sendActionResult: e.sendActionResult
                    }
                }), Object(i.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        showSubscriptionCheckoutModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(g.d)(b.CheckoutModal, t)
                        }
                    }, e)
                }))(F),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentActionRequest: null,
                            currentActionRequestUI: null,
                            isGlobalRender: !1
                        }, t.handleModalRequest = function(e) {
                            var n = null,
                                r = !1;
                            switch (e.action) {
                                case o.FunctionAction.SubscribeToChannel:
                                    n = s.createElement(j, null), r = !0;
                                    break;
                                default:
                                    return
                            }
                            t.setState({
                                currentActionRequest: e,
                                currentActionRequestUI: n,
                                isGlobalRender: r
                            })
                        }, t.sendActionResult = function(e) {
                            var n = t.state.currentActionRequest;
                            n && n.resultCallback && n.resultCallback(e), t.setState({
                                currentActionRequest: null,
                                currentActionRequestUI: null,
                                isGlobalRender: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.extensionService.on(o.ExtensionServiceEvents.RequestModal, this.handleModalRequest)
                    }, t.prototype.componentWillUnmount = function() {
                        o.extensionService.off(o.ExtensionServiceEvents.RequestModal, this.handleModalRequest)
                    }, t.prototype.render = function() {
                        return s.createElement(E, {
                            value: {
                                currentChannelID: this.props.channelID,
                                currentActionRequest: this.state.currentActionRequest,
                                currentActionRequestUI: this.state.currentActionRequestUI,
                                sendActionResult: this.sendActionResult
                            }
                        }, this.state.isGlobalRender && this.state.currentActionRequestUI, this.props.children)
                    }, t
                }(s.Component),
                A = n("OzNJ"),
                M = n("GnwI"),
                L = n("7JxC"),
                B = n("6x+I");
            var U, W = {
                    allowedTypes: ["BlockQuote", "Emph", "Hardbreak", "Heading", "Item", "Link", "List", "Paragraph", "Softbreak", "Strong", "Text"],
                    className: "panel-description",
                    renderers: {
                        Heading: function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return a.__extends(t, e), t.prototype.render = function() {
                                var e;
                                switch (this.props.level) {
                                    case 1:
                                        e = "h4";
                                        break;
                                    case 6:
                                        e = "h6";
                                        break;
                                    default:
                                        e = "h5"
                                }
                                return Object(s.createElement)(e, {}, this.props.children)
                            }, t
                        }(s.Component),
                        Link: function(e) {
                            return s.createElement("a", {
                                href: e.href,
                                title: e.title,
                                rel: "noopener noreferrer",
                                target: "_blank"
                            }, e.children)
                        }
                    },
                    skipHtml: !0,
                    softBreak: "br"
                },
                z = n("JVUd"),
                G = n("0HeA"),
                Y = n("Ue10");
            n("ZAO/");
            ! function(e) {
                e.Description = "description_test_selector", e.Image = "image_test_selector", e.Link = "link_url_test_selector", e.Panel = "channel_panel_test_selector", e.Title = "title_test_selector"
            }(U || (U = {}));
            var H = /^https?:\/\//,
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDescriptionClick = function(e) {
                            var n = e.target;
                            if ("A" === n.nodeName) {
                                var r = n;
                                t.trackClick(r.href)
                            }
                        }, t.onImageClick = function() {
                            t.props.panel.linkURL && t.trackClick(t.props.panel.linkURL)
                        }, t.trackClick = function(e) {
                            var n = t.props.panel.id;
                            n && Object(G.a)(O.SpadeEventType.PanelClick, {
                                panelID: n,
                                channelID: t.props.channelID,
                                panelType: t.props.panel.type,
                                panelTarget: e
                            })
                        }, t.trackImpression = function() {
                            var e = t.props.panel.id;
                            e && Object(G.a)(O.SpadeEventType.PanelImpression, {
                                panelID: e,
                                channelID: t.props.channelID,
                                panelType: t.props.panel.type
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.render = function() {
                        var e = this.props.panel.imageURL ? s.createElement("img", {
                            "data-test-selector": U.Image,
                            src: this.props.panel.imageURL,
                            alt: Object(p.d)("Panel Content", "ChannelPanels")
                        }) : "";
                        e && this.props.panel.linkURL && H.test(this.props.panel.linkURL) && (e = s.createElement(Y.U, {
                            to: this.props.panel.linkURL,
                            onClick: this.onImageClick,
                            targetBlank: !0,
                            "data-test-selector": U.Link
                        }, e));
                        var t = null;
                        return this.props.panel.description && (t = s.createElement("div", {
                            onClick: this.onDescriptionClick,
                            "data-test-selector": U.Description
                        }, s.createElement(Y.fc, null, s.createElement(B, a.__assign({
                            source: function(e) {
                                return e.replace(/(^|\n)(#+)([^\s#]+)/g, function(e, t, n, r) {
                                    return "" + t + n + " " + r
                                })
                            }(this.props.panel.description)
                        }, W))))), s.createElement(Y.Ya, a.__assign({
                            className: "default-panel",
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": U.Panel
                        }, Object(Y.kc)(this.props)), this.props.panel.title && s.createElement(Y.W, {
                            type: Y.Wb.H3,
                            "data-test-selector": U.Title
                        }, this.props.panel.title), e, t)
                    }, t
                }(s.Component),
                X = Object(c.compose)(Object(z.a)("DefaultPanel", {
                    pixels: 100
                }))(q),
                V = n("TVJu"),
                Z = n("EZh/"),
                K = n("DMoW"),
                Q = (n("8sUD"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isCreatingDefaultPanel: !1,
                            isCreatingExtensionPanel: !1,
                            isTypeSelectionMode: !1,
                            errorMessage: ""
                        }, t.createDefaultPanel = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isCreatingDefaultPanel: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.createPanel({
                                                channelID: this.props.channelID,
                                                type: K.D.DEFAULT
                                            })];
                                        case 2:
                                            return e.sent(), this.setState({
                                                errorMessage: "",
                                                isTypeSelectionMode: !1,
                                                isCreatingDefaultPanel: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                errorMessage: Object(p.d)("Failed to create Text/Image Panel, please try again.", "CreatePanel"),
                                                isCreatingDefaultPanel: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.createExtensionPanel = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isCreatingExtensionPanel: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.createPanel({
                                                channelID: this.props.channelID,
                                                type: K.D.EXTENSION
                                            })];
                                        case 2:
                                            return e.sent(), this.setState({
                                                errorMessage: "",
                                                isTypeSelectionMode: !1,
                                                isCreatingExtensionPanel: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                errorMessage: Object(p.d)("Failed to create Extension Panel, please try again.", "CreatePanel"),
                                                isCreatingExtensionPanel: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.toggleSelectionMode = function() {
                            t.setState({
                                isTypeSelectionMode: !t.state.isTypeSelectionMode
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = s.createElement(Y.z, {
                            fullWidth: !0,
                            icon: Y.ub.NavSettings,
                            onClick: this.createExtensionPanel,
                            state: this.state.isCreatingExtensionPanel ? Y.E.Loading : Y.E.Default,
                            type: Y.F.Hollow
                        }, Object(p.d)("Extension Panel", "CreatePanel"));
                        return this.state.isTypeSelectionMode ? s.createElement(Y.Fb, {
                            border: !0,
                            background: Y.r.Alt2,
                            className: "create-panel",
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(Y.o, {
                            ratio: Y.p.Aspect3x4
                        }, s.createElement(Y.Ya, {
                            padding: 1
                        }, this.state.errorMessage && s.createElement(Y.W, {
                            color: Y.O.Error
                        }, this.state.errorMessage), s.createElement(Y.Ya, {
                            margin: {
                                y: 1
                            }
                        }, s.createElement(Y.z, {
                            fullWidth: !0,
                            icon: Y.ub.GridLayout,
                            onClick: this.createDefaultPanel,
                            state: this.state.isCreatingDefaultPanel ? Y.E.Loading : Y.E.Default,
                            type: Y.F.Hollow
                        }, Object(p.d)("Add a Text or Image Panel", "CreatePanel"))), this.props.canCreateExtensionPanel && e))) : s.createElement(Y.Fb, {
                            border: !0,
                            background: Y.r.Alt2,
                            className: "create-panel",
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(Y.Va, {
                            type: Y.Wa.Alpha,
                            onClick: this.toggleSelectionMode
                        }, s.createElement(Y.o, {
                            ratio: Y.p.Aspect3x4
                        }, s.createElement(Y.Ya, {
                            display: Y.X.Flex,
                            alignItems: Y.f.Center,
                            justifyContent: Y.Xa.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(Y.tb, {
                            asset: Y.ub.Plus,
                            height: 100,
                            width: 100,
                            type: Y.vb.Placeholder
                        })))))
                    }, t
                }(s.Component)),
                J = n("kRBY"),
                $ = n("KJdW"),
                ee = n.n($),
                te = n("/ZC1"),
                ne = n("cZKs"),
                re = n("KGBd");
            n("xVpv");
            var ie = ["image/*"],
                ae = {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                },
                oe = {
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 180
                },
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            base64Image: "",
                            crop: ae,
                            error: "",
                            file: void 0,
                            isCropping: !1,
                            pixelCrop: oe
                        }, t.onFilesSubmitted = function(e) {
                            var n = e[0],
                                r = new FileReader;
                            r.onloadend = function() {
                                var e = r.result,
                                    i = new Image;
                                i.onload = function() {
                                    var r = function(e, t, n) {
                                            var r = e.height,
                                                i = e.width,
                                                a = r > t,
                                                o = i > n;
                                            return {
                                                percentCrop: {
                                                    x: 0,
                                                    y: 0,
                                                    height: (a ? t : r) / r * 100,
                                                    width: (o ? n : i) / i * 100
                                                },
                                                pixelCrop: {
                                                    x: 0,
                                                    y: 0,
                                                    height: a ? t : r,
                                                    width: o ? n : i
                                                }
                                            }
                                        }(i, oe.height, oe.width),
                                        a = r.percentCrop,
                                        o = r.pixelCrop;
                                    t.setState({
                                        base64Image: e,
                                        crop: a,
                                        file: n,
                                        isCropping: !0,
                                        pixelCrop: o
                                    })
                                }, i.onerror = function() {
                                    t.setState({
                                        error: "Failed to read file"
                                    })
                                }, i.src = e
                            }, r.onerror = function() {
                                t.setState({
                                    error: "Failed to read file"
                                })
                            }, r.readAsDataURL(n)
                        }, t.onImageSelectionComplete = function() {
                            var e = t.state,
                                n = e.file,
                                r = e.pixelCrop;
                            n && (t.props.onImageSelectionComplete({
                                file: n,
                                pixelCrop: r,
                                previewSrc: Object(re.a)(t.state.base64Image, t.state.pixelCrop.x, t.state.pixelCrop.y, t.state.pixelCrop.width, t.state.pixelCrop.height, t.state.pixelCrop.width, t.state.pixelCrop.height)
                            }), t.props.onClose())
                        }, t.updateCrop = function(e, n) {
                            t.setState({
                                crop: e,
                                pixelCrop: n
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(Y.Fb, {
                            background: Y.r.Base,
                            className: "default-panel-image-picker",
                            textAlign: Y.Sb.Center
                        }, this.state.base64Image ? this.renderImageCropper() : this.renderFilePicker(), s.createElement(ne.a, {
                            closeOnBackdropClick: !this.state.isCropping
                        }))
                    }, t.prototype.renderImageCropper = function() {
                        return s.createElement(Y.Ya, {
                            padding: 2
                        }, s.createElement(ee.a, {
                            src: this.state.base64Image,
                            crop: this.state.crop,
                            onChange: this.updateCrop,
                            onComplete: this.updateCrop
                        }), s.createElement(Y.Ya, {
                            display: Y.X.Flex,
                            flexDirection: Y.Aa.Row,
                            margin: {
                                top: 1
                            },
                            justifyContent: Y.Xa.Center
                        }, s.createElement(Y.z, {
                            onClick: this.onImageSelectionComplete
                        }, Object(p.d)("Done", "DefaultPanelImagePickerComponent")), s.createElement(Y.Ya, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(Y.z, {
                            onClick: this.props.onClose
                        }, Object(p.d)("Cancel", "DefaultPanelImagePickerComponent")))))
                    }, t.prototype.renderFilePicker = function() {
                        return s.createElement(Y.o, {
                            ratio: Y.p.Aspect1x1
                        }, s.createElement(te.a, {
                            allowedFileTypes: ie,
                            multiFile: !1,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, s.createElement(Y.Ya, {
                            display: Y.X.Flex,
                            flexDirection: Y.Aa.Column
                        }, s.createElement(Y.Ya, null, s.createElement(Y.tb, {
                            asset: Y.ub.Upload,
                            type: Y.vb.Alt2,
                            height: 50,
                            width: 50
                        })), s.createElement(Y.W, {
                            type: Y.Wb.H3,
                            color: Y.O.Alt2,
                            fontSize: Y.Ca.Size4
                        }, Object(p.d)("Choose a file or drag it here.", "DefaultPanelImagePickerComponent")))))
                    }, t
                }(s.Component);
            var ce = Object(i.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        onClose: g.c
                    }, e)
                })(se),
                le = n("PZVp"),
                ue = n("b6Yk");
            var de;
            n("U0Fp");
            ! function(e) {
                e.AddImage = "add_image_selector", e.SavePanel = "save_default_panel_selector"
            }(de || (de = {}));
            var pe, me = 1e6;
            ! function(e) {
                e[e.ImageUploadFailed = 0] = "ImageUploadFailed", e[e.ImageUploadSizeFailed = 1] = "ImageUploadSizeFailed", e[e.Unexpected = 2] = "Unexpected"
            }(pe || (pe = {}));
            var he = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canSave: !1,
                        description: t.props.panel.description || "",
                        errorMessage: "",
                        imagePreviewSRC: "",
                        imageURL: t.props.panel.imageURL || "",
                        isSaving: !1,
                        linkURL: t.props.panel.linkURL || "",
                        title: t.props.panel.title || ""
                    }, t.handleImageSelectionChanged = function(e) {
                        t.setState({
                            canSave: !0,
                            errorMessage: "",
                            imageCrop: e.pixelCrop,
                            imageFile: e.file,
                            imagePreviewSRC: e.previewSrc
                        })
                    }, t.handleInputChange = function(e) {
                        var n, r = e.currentTarget;
                        t.setState(((n = {
                            canSave: !0,
                            errorMessage: ""
                        })[r.name] = r.value, n))
                    }, t.handleDescriptionChange = function(e) {
                        var n, r = e.currentTarget;
                        t.setState(((n = {
                            canSave: !0,
                            errorMessage: ""
                        })[r.name] = r.value, n))
                    }, t.handleSaveComplete = function() {
                        t.setState({
                            canSave: !1,
                            errorMessage: "",
                            isSaving: !1
                        })
                    }, t.handleErrorMessage = function(e) {
                        var n;
                        switch (e) {
                            case pe.ImageUploadFailed:
                                n = Object(p.d)("Image Upload Failed. Please try again.", "DefaultPanelEditComponent");
                                break;
                            case pe.ImageUploadSizeFailed:
                                n = Object(p.d)("Please choose a file smaller than {maxFileSize}.", {
                                    maxFileSize: "1MB"
                                }, "DefaultPanelEditComponent");
                                break;
                            case pe.Unexpected:
                            default:
                                n = Object(p.d)("Something went wrong. Please try again.", "DefaultPanelEditComponent")
                        }
                        t.setState({
                            errorMessage: n,
                            isSaving: !1
                        })
                    }, t.savePanel = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.state.canSave) return [3, 6];
                                        if (this.setState({
                                                isSaving: !0
                                            }), e = this.state.imageFile, t = this.state.imageCrop, e && t) return [3, 5];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.updatePanel({
                                            id: this.props.panel.id,
                                            imageURL: this.props.panel.imageURL,
                                            description: this.state.description,
                                            linkURL: this.state.linkURL,
                                            title: this.state.title
                                        })];
                                    case 2:
                                        return n.sent(), this.handleSaveComplete(), [3, 4];
                                    case 3:
                                        return n.sent(), this.handleErrorMessage(pe.Unexpected), [3, 4];
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        this.saveWithPanelImage(), n.label = 6;
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }, t.saveWithPanelImage = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o = this;
                            return a.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e = this.state.imageCrop, (t = this.state.imageFile).size > me) return this.handleErrorMessage(pe.ImageUploadSizeFailed), [2];
                                        s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, function(e, t) {
                                            return a.__awaiter(this, void 0, Promise, function() {
                                                var n, r;
                                                return a.__generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return i.trys.push([0, 2, , 3]), [4, ue.a.post("/v5/users/" + e + "/upload_panel_image", {
                                                                body: {
                                                                    height: t.height,
                                                                    width: t.width,
                                                                    left: t.x,
                                                                    top: t.y
                                                                }
                                                            })];
                                                        case 1:
                                                            return 200 === (n = i.sent()).status && n.body ? [2, n.body] : [2, Promise.reject("Failed to fetch URL")];
                                                        case 2:
                                                            return r = i.sent(), [2, Promise.reject(r)];
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(this.props.channelID, e)];
                                    case 2:
                                        return i = s.sent(), r = i.upload_id, n = i.url, [3, 4];
                                    case 3:
                                        return s.sent(), [2, this.handleErrorMessage(pe.Unexpected)];
                                    case 4:
                                        return this.unsubscribe = p.l.subscribe({
                                            topic: Object(x.D)(r),
                                            success: function() {
                                                (function(e, t) {
                                                    return fetch(e, {
                                                        method: "PUT",
                                                        body: new Blob([t])
                                                    })
                                                })(n, t).catch(function() {
                                                    o.unsubscribe(), o.handleErrorMessage(pe.Unexpected)
                                                }), o.timeoutFunc = setTimeout(function() {
                                                    o.unsubscribe(), o.handleErrorMessage(pe.ImageUploadFailed)
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                o.handleErrorMessage(pe.Unexpected)
                                            },
                                            onMessage: function(e) {
                                                return a.__awaiter(o, void 0, void 0, function() {
                                                    return a.__generator(this, function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                if (e.upload_id !== r) return [3, 8];
                                                                switch (clearTimeout(this.timeoutFunc), e.status) {
                                                                    case le.a.POSTPROCESS_COMPLETE:
                                                                        return [3, 1];
                                                                    case le.a.FILE_SIZE_VALIDATION_FAILED:
                                                                        return [3, 5]
                                                                }
                                                                return [3, 6];
                                                            case 1:
                                                                return t.trys.push([1, 3, , 4]), [4, this.props.updatePanel({
                                                                    id: this.props.panel.id,
                                                                    imageURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-" + this.props.channelID + "-image-" + r,
                                                                    description: this.state.description,
                                                                    linkURL: this.state.linkURL,
                                                                    title: this.state.title
                                                                })];
                                                            case 2:
                                                                return t.sent(), this.handleSaveComplete(), [3, 4];
                                                            case 3:
                                                                return t.sent(), this.handleErrorMessage(pe.ImageUploadFailed), [3, 4];
                                                            case 4:
                                                                return [3, 7];
                                                            case 5:
                                                                return this.handleErrorMessage(pe.ImageUploadSizeFailed), [3, 7];
                                                            case 6:
                                                                this.handleErrorMessage(pe.Unexpected), t.label = 7;
                                                            case 7:
                                                                this.unsubscribe && this.unsubscribe(), t.label = 8;
                                                            case 8:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.showDefaultPanelImagePicker = function() {
                        t.props.showDefaultPanelImagePicker({
                            onImageSelectionComplete: t.handleImageSelectionChanged
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe()
                }, t.prototype.render = function() {
                    var e = this.props.panel,
                        t = Object(p.d)("Supports {markdownLink} (No HTML)", {
                            markdownLink: s.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics",
                                target: "_blank"
                            }, Object(p.d)("Markdown", "DefaultPanelEditComponent"))
                        }, "DefaultPanelEditComponent");
                    return s.createElement(Y.Ya, {
                        display: Y.X.Flex,
                        flexDirection: Y.Aa.Column,
                        padding: 1
                    }, s.createElement(Y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(Y.Ea, {
                        id: "panel-title",
                        label: Object(p.d)("Panel Title", "DefaultPanelEdit")
                    }, s.createElement(Y.Sa, {
                        defaultValue: e.title || "",
                        id: "panel-title",
                        name: "title",
                        onChange: this.handleInputChange,
                        type: Y.Ua.Text
                    }))), s.createElement(Y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(Y.Ya, {
                        display: Y.X.Flex,
                        flexDirection: Y.Aa.Row,
                        justifyContent: Y.Xa.Between,
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(Y.z, {
                        onClick: this.showDefaultPanelImagePicker,
                        "data-test-selector": de.AddImage
                    }, Object(p.d)("Add Image", "DefaultPanelEdit")), s.createElement("img", {
                        className: "panel-preview-image",
                        src: this.state.imagePreviewSRC ? this.state.imagePreviewSRC : e.imageURL || ""
                    })), s.createElement(Y.W, {
                        type: Y.Wb.P
                    }, Object(p.d)("Images will be scaled to 320px wide", "DefaultPanelEdit"))), s.createElement(Y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(Y.Ea, {
                        id: "panel-link-url",
                        label: Object(p.d)("Image Links To:", "DefaultPanelEdit")
                    }, s.createElement(Y.Sa, {
                        defaultValue: e.linkURL || "",
                        id: "panel-link-url",
                        name: "linkURL",
                        onChange: this.handleInputChange,
                        type: Y.Ua.Text
                    }))), s.createElement(Y.Ya, {
                        flexGrow: 1,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(Y.Ya, {
                        display: Y.X.Flex,
                        flexDirection: Y.Aa.Row,
                        justifyContent: Y.Xa.Between,
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(Y.W, {
                        type: Y.Wb.Strong
                    }, Object(p.d)("Description:", "DefaultPanelEdit")), s.createElement(Y.Ya, null, t)), s.createElement(Y.Tb, {
                        defaultValue: e.description || "",
                        id: "description",
                        name: "description",
                        noResize: !0,
                        onChange: this.handleDescriptionChange,
                        rows: 7
                    })), s.createElement(Y.Ya, {
                        textAlign: Y.Sb.Right
                    }, s.createElement(Y.z, {
                        type: Y.F.Text,
                        onClick: this.props.removePanel
                    }, Object(p.d)("Remove", "DefaultPanelEdit")), s.createElement(Y.z, {
                        "data-test-selector": de.SavePanel,
                        disabled: !this.state.canSave,
                        onClick: this.savePanel,
                        state: this.state.isSaving ? Y.E.Loading : Y.E.Default
                    }, Object(p.d)("Submit", "DefaultPanelEdit"))), s.createElement(Y.Ya, {
                        textAlign: Y.Sb.Center
                    }, this.state.errorMessage && s.createElement(Y.W, {
                        color: Y.O.Error
                    }, this.state.errorMessage)))
                }, t
            }(s.Component);
            var fe, ye = Object(i.connect)(function(e) {
                    return {
                        authToken: Object(J.a)(e)
                    }
                }, function(e) {
                    return {
                        showDefaultPanelImagePicker: function(t) {
                            return e(Object(g.d)(ce, t))
                        }
                    }
                })(he),
                ge = n("AfzZ"),
                be = n("22qk"),
                ve = n("eJ65");
            n("EgbR");
            ! function(e) {
                e.ExtensionManagement = "extension-management", e.LearnMore = "learn-more"
            }(fe || (fe = {}));
            var Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            feedbackFormSelected: !1
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.feedbackFormSelected;
                        return s.createElement(ve.a, null, s.createElement(Y.A, {
                            icon: Y.ub.More
                        }), s.createElement(Y.u, {
                            direction: Y.v.TopLeft,
                            size: e ? Y.w.Medium : Y.w.Small,
                            offsetY: "-4px"
                        }, s.createElement(Y.Fb, {
                            textAlign: Y.Sb.Left,
                            padding: {
                                top: .5,
                                bottom: .5
                            },
                            color: Y.O.Base
                        }, s.createElement(Y.Va, {
                            "data-test-selector": fe.ExtensionManagement,
                            linkTo: Object(be.e)(this.props.channelLogin),
                            targetBlank: !0
                        }, s.createElement(Y.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(Y.W, null, Object(p.d)("Extension Manager", "ExtensionPanelHelpButton")))), s.createElement(Y.Va, {
                            linkTo: "https://www.twitch.tv/creatorcamp/en/level-up/extensions/",
                            targetBlank: !0
                        }, s.createElement(Y.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(Y.W, null, Object(p.d)("Creator Camp", "ExtensionPanelHelpButton")))), s.createElement(Y.Va, {
                            "data-test-selector": fe.LearnMore,
                            linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                            targetBlank: !0
                        }, s.createElement(Y.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(Y.W, null, Object(p.d)("Learn More", "ExtensionPanelHelpButton")))))))
                    }, t
                }(s.Component),
                Ce = function(e) {
                    var t = e.channelLogin,
                        n = e.children;
                    return s.createElement(Y.Ya, {
                        display: Y.X.Flex,
                        fullWidth: !0,
                        justifyContent: Y.Xa.Between
                    }, s.createElement(Ee, {
                        channelLogin: t
                    }), s.createElement(Y.Ya, null, n))
                },
                ke = (n("b5uE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickConfigure = function() {
                            var e = t.props,
                                n = e.channelLogin,
                                r = e.showExtensionConfigureModal,
                                i = e.extensionInstallation;
                            if (i) {
                                var a = i.extension;
                                r({
                                    channelLogin: n,
                                    extensionID: a.id + "-" + a.version
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.channelLogin,
                            r = t.extensionInstallation,
                            i = t.extensionPanelCount,
                            a = t.panel,
                            o = t.removePanel,
                            c = Object(p.d)("Remove", "ExtensionPanelEdit");
                        if (r && void 0 !== i) {
                            var l = r.extension,
                                u = l.iconUrls,
                                d = l.name;
                            e = s.createElement(s.Fragment, null, s.createElement(Y.Ya, {
                                flexGrow: 1
                            }, s.createElement(Y.Ya, {
                                alignItems: Y.f.Center,
                                display: Y.X.Flex,
                                padding: {
                                    bottom: 2,
                                    x: 2
                                }
                            }, s.createElement(Y.S, {
                                alt: d,
                                className: "extension-panel-edit__extension-icon",
                                src: u.square100
                            }), s.createElement(Y.Ya, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(Y.W, {
                                type: Y.Wb.Strong
                            }, d))), s.createElement(Y.W, null, Object(p.d)("Panel Extension {panelExtensionNumber} of {totalPanelExtensionsAvailable}", {
                                panelExtensionNumber: i,
                                totalPanelExtensionsAvailable: Z.a
                            }, "ExtensionPanelEdit"))), s.createElement(Ce, {
                                channelLogin: n
                            }, s.createElement(Y.z, {
                                type: Y.F.Text,
                                onClick: o
                            }, c), s.createElement(Y.z, {
                                onClick: this.onClickConfigure
                            }, Object(p.d)("Configure", "ExtensionPanelEdit"))))
                        } else {
                            var m = Object(p.d)("This panel's name is: {panelName}", {
                                panelName: s.createElement(Y.W, {
                                    bold: !0,
                                    type: Y.Wb.Span,
                                    transform: Y.Vb.Uppercase
                                }, a.slotID)
                            }, "ExtensionPanelEdit");
                            e = s.createElement(s.Fragment, null, s.createElement(Y.Ya, {
                                flexGrow: 1
                            }, s.createElement(Y.Ya, {
                                padding: {
                                    bottom: 2
                                }
                            }, s.createElement(Y.W, null, Object(p.d)("To add an Extension to this space, activate it in your Extension Manager.", "Edit Extension Panel"))), s.createElement(Y.Ya, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(Y.z, {
                                linkTo: Object(be.e)(n)
                            }, Object(p.d)("Extension Manager", "Edit Extension Panel"))), s.createElement(Y.Ya, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(Y.W, null, m))), s.createElement(Ce, {
                                channelLogin: n
                            }, s.createElement(Y.z, {
                                type: Y.F.Text,
                                onClick: o
                            }, c)))
                        }
                        return s.createElement(Y.Ya, {
                            alignItems: Y.f.Center,
                            display: Y.X.Flex,
                            flexDirection: Y.Aa.Column,
                            padding: 1,
                            textAlign: Y.Sb.Center
                        }, s.createElement(Y.Ya, {
                            padding: 4
                        }, s.createElement(Y.tb, {
                            asset: Y.ub.Extensions,
                            type: Y.vb.Brand,
                            height: 40,
                            width: 40
                        })), e)
                    }, t
                }(s.PureComponent));
            var Pe, Se = Object(i.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        showExtensionConfigureModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(g.d)(ge.a, t)
                        }
                    }, e)
                })(ke),
                xe = (n("abgr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isRemoving: !1,
                            showRemoveConfirmation: !1
                        }, t.logger = p.k.withCategory("EditPanel"), t.cancelRemovePanel = function() {
                            t.setState({
                                showRemoveConfirmation: !1
                            })
                        }, t.confirmRemovePanel = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.setState({
                                                isRemoving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.deletePanel(this.props.panel)];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), this.logger.warn("Failed to delete panel", e), this.setState({
                                                isRemoving: !1,
                                                showRemoveConfirmation: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.removePanel = function() {
                            t.setState({
                                showRemoveConfirmation: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return "DefaultPanel" === this.props.panel.__typename ? e = s.createElement(ye, {
                            channelID: this.props.channelID,
                            panel: this.props.panel,
                            removePanel: this.removePanel,
                            updatePanel: this.props.updatePanel
                        }) : "ExtensionPanel" === this.props.panel.__typename && (e = s.createElement(Se, {
                            channelLogin: this.props.channelLogin,
                            extensionInstallation: this.props.extensionInstallation,
                            extensionPanelCount: this.props.extensionPanelCount,
                            panel: this.props.panel,
                            removePanel: this.removePanel
                        })), s.createElement(Y.Ya, {
                            position: Y.kb.Relative
                        }, this.state.showRemoveConfirmation && this.renderRemovingOverlay(), s.createElement(Y.Fb, {
                            border: !0,
                            background: Y.r.Alt2,
                            className: "edit-panel " + (this.props.isSorting ? "edit-panel--sorting" : ""),
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(Y.o, {
                            ratio: Y.p.Aspect3x4
                        }, e)))
                    }, t.prototype.renderRemovingOverlay = function() {
                        var e, t = this.props,
                            n = t.extensionInstallation,
                            r = t.isSorting;
                        return e = n ? Object(p.d)("Removing this panel will deactivate this extension. Are you sure you want to remove this panel?", "EditPanel") : Object(p.d)("Are you sure you want to remove this panel?", "EditPanel"), s.createElement(Y.Fb, {
                            border: !0,
                            className: "edit-panel edit-panel--overlay " + (r ? "edit-panel--sorting" : ""),
                            position: Y.kb.Absolute,
                            zIndex: Y.jc.Default
                        }, s.createElement(Y.o, {
                            ratio: Y.p.Aspect3x4
                        }, s.createElement(Y.Ya, {
                            alignItems: Y.f.Center,
                            display: Y.X.Flex,
                            flexDirection: Y.Aa.Column,
                            justifyContent: Y.Xa.Center,
                            padding: 2,
                            textAlign: Y.Sb.Center
                        }, s.createElement(Y.W, {
                            color: Y.O.Overlay
                        }, e), s.createElement(Y.Ya, {
                            margin: {
                                top: 2
                            }
                        }, s.createElement(Y.z, {
                            type: Y.F.Text,
                            onClick: this.cancelRemovePanel,
                            overlay: !0
                        }, Object(p.d)("Cancel", "EditPanel")), s.createElement(Y.Ya, {
                            display: Y.X.InlineBlock,
                            margin: {
                                left: 1
                            }
                        }, s.createElement(Y.z, {
                            "data-test-selector": "confirm_delete_panel_selector",
                            state: this.state.isRemoving ? Y.E.Loading : Y.E.Default,
                            onClick: this.confirmRemovePanel
                        }, Object(p.d)("Remove", "EditPanel")))))))
                    }, t
                }(s.PureComponent)),
                Oe = Object(d.SortableElement)(function(e) {
                    return s.createElement(Y.Ya, {
                        margin: {
                            x: 1
                        }
                    }, s.createElement(xe, {
                        channelID: e.channelID,
                        channelLogin: e.channelLogin,
                        extensionInstallation: e.extensionInstallation,
                        extensionPanelCount: e.extensionPanelCount,
                        panel: e.panel,
                        deletePanel: e.deletePanel,
                        updatePanel: e.updatePanel,
                        isSorting: e.isSorting
                    }))
                }),
                Ie = Object(d.SortableContainer)(function(e) {
                    var t = 0,
                        n = e.items.map(function(n, r) {
                            var i, a = !1;
                            return "ExtensionPanel" === n.__typename && (i = e.extensionSlots[n.slotID], a = !0, t++), s.createElement(Oe, {
                                key: n.id,
                                channelID: e.channelID,
                                channelLogin: e.channelLogin,
                                extensionInstallation: i,
                                extensionPanelCount: a ? t : void 0,
                                updatePanel: e.updatePanel,
                                deletePanel: e.deletePanel,
                                isSorting: e.isSorting,
                                index: r,
                                panel: n
                            })
                        }),
                        r = t < Z.a,
                        i = s.createElement(Y.Ya, {
                            margin: {
                                x: .5
                            }
                        }, s.createElement(Q, {
                            key: "create-panel",
                            canCreateExtensionPanel: r,
                            createPanel: e.createPanel,
                            channelID: e.channelID
                        }));
                    return s.createElement(Y.Ya, {
                        display: Y.X.Flex,
                        flexDirection: Y.Aa.Row,
                        flexWrap: Y.Ba.Wrap,
                        justifyContent: Y.Xa.Center
                    }, n, i)
                }),
                we = n("Oz8M"),
                _e = n("saS/"),
                Ne = n("Rsna"),
                Te = n("ry+o"),
                De = n("Og0W");
            n("1pP+");
            ! function(e) {
                e.Container = "channel_panels_container_selector", e.EmptyMessage = "no_panels_message", e.Masonry = "masonry_container_selector", e.EditToggle = "channel_panels_toggle_selector", e.Sortable = "sortable_edit_panel_list_selector"
            }(Pe || (Pe = {}));
            var Fe = {
                    columnWidth: 320,
                    fitWidth: !0,
                    gutter: 20,
                    horizontalOrder: !0,
                    transitionDuration: "0"
                },
                je = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            destroyedExtensions: [],
                            isEditMode: !1,
                            isSorting: !1,
                            popout: {}
                        }, t.onSortStart = function() {
                            t.setState({
                                isSorting: !0
                            })
                        }, t.toggleEditMode = function() {
                            t.setState({
                                isEditMode: !t.state.isEditMode
                            })
                        }, t.onExtensionPoppedOut = function(e, n, r) {
                            var i;
                            t.setState({
                                popout: a.__assign({}, t.state.popout, (i = {}, i[Object(A.c)(e, n)] = r, i))
                            })
                        }, t.onExtensionPopoutRestored = function(e, n) {
                            var r = Object(A.c)(e, n),
                                i = t.state.popout[r];
                            i && i.window && i.window.close();
                            var a = Object.keys(t.state.popout).filter(function(e) {
                                return e !== r
                            }).reduce(function(e, n) {
                                return e[n] = t.state.popout[n], e
                            }, {});
                            t.setState({
                                popout: a
                            })
                        }, t.layoutMasonry = function() {
                            t.masonryInstance && t.masonryInstance.layout && t.masonryInstance.layout()
                        }, t.saveMasonryRef = function(e) {
                            e && (t.masonryInstance = e.masonry)
                        }, t.updatePanelOrder = function(e) {
                            t.setState({
                                isSorting: !1
                            });
                            var n = t.props.channelPanelsData.user;
                            if (n) {
                                var r = Object(d.arrayMove)(n.panels, e.oldIndex, e.newIndex),
                                    i = r.map(function(e) {
                                        return e && e.id
                                    }).filter(function(e) {
                                        return e
                                    });
                                t.props.orderPanels(Object(h.a)({
                                    ids: i
                                })), Object(h.e)(De, {
                                    login: t.props.channelName
                                }, function(e) {
                                    return e.user && (e.user.panels = r), e
                                })
                            }
                        }, t.createPanel = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.createPanel(Object(h.a)(a.__assign({}, e, {
                                                channelID: this.props.channelID
                                            })))];
                                        case 1:
                                            return t = n.sent().data, Object(h.e)(De, {
                                                login: this.props.channelName
                                            }, function(e) {
                                                return t.createPanel && e.user && e.user.panels.push(t.createPanel.panel), e
                                            }), [3, 3];
                                        case 2:
                                            return n.sent(), [2, Promise.reject("Failed to create panel")];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.deletePanel = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.props.deletePanel(Object(h.a)(e))];
                                        case 1:
                                            return t.sent(), Object(h.e)(De, {
                                                login: this.props.channelName
                                            }, function(t) {
                                                return t.user && (t.user.panels = t.user.panels.filter(function(t) {
                                                    return t && t.id !== e.id
                                                })), t
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updatePanel = function(e) {
                            return t.props.updatePanel(Object(h.a)(e))
                        }, t.canEditPanels = function() {
                            var e = t.props.channelPanelsData,
                                n = e.currentUser,
                                r = e.user;
                            return !!(n && n.id && r && n.id === r.id) || !!(n && n.roles && n.roles.isSiteAdmin)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.channelPanelsData.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.channelID !== e.channelID && this.setState({
                            isEditMode: !1
                        }), this.props.rightColumnExpanded === e.rightColumnExpanded && this.props.sideNavExpanded === e.sideNavExpanded || this.layoutMasonry()
                    }, t.prototype.render = function() {
                        var e = this.props.channelPanelsData,
                            t = e.error,
                            n = e.loading,
                            r = e.user,
                            i = null;
                        if (n) return s.createElement(L.a, null);
                        i = this.state.isEditMode ? s.createElement(Y.Ya, null, this.renderEditPanels()) : t || !r || r && !r.panels.length ? s.createElement(Y.Fb, {
                            color: Y.O.Alt2,
                            padding: {
                                y: 5
                            },
                            textAlign: Y.Sb.Center,
                            "data-test-selector": Pe.EmptyMessage
                        }, s.createElement(Y.W, {
                            italic: !0,
                            fontSize: Y.Ca.Size4
                        }, Object(p.d)("It's empty in here", "ChannelPanels"))) : s.createElement(u.a, {
                            className: "channel-panels-container",
                            options: Fe,
                            "data-test-selector": Pe.Masonry,
                            ref: this.saveMasonryRef
                        }, this.renderPanels());
                        var a = s.createElement(Y.Ya, {
                            display: Y.X.Flex,
                            margin: {
                                bottom: 2
                            },
                            "data-test-selector": Pe.EditToggle
                        }, s.createElement(Y.Yb, {
                            id: "edit-panels-toggle",
                            onChange: this.toggleEditMode
                        }), s.createElement(Y.Ya, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(Y.W, null, Object(p.d)("Edit Panels", "Channel Panels"))));
                        return s.createElement(R, {
                            channelID: this.props.channelID
                        }, s.createElement(Y.Ya, {
                            className: "channel-panels",
                            "data-test-selector": Pe.Container
                        }, this.canEditPanels() && a, i))
                    }, t.prototype.renderEditPanels = function() {
                        var e = this.props.channelPanelsData.user;
                        if (!e) return null;
                        var t = e.panels.filter(function(e) {
                            return e
                        });
                        return s.createElement(Ie, {
                            axis: "xy",
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelName,
                            createPanel: this.createPanel,
                            deletePanel: this.deletePanel,
                            distance: 20,
                            extensionSlots: this.getExtensionSlots(),
                            isSorting: this.state.isSorting,
                            items: t,
                            onSortEnd: this.updatePanelOrder,
                            onSortStart: this.onSortStart,
                            updatePanel: this.updatePanel
                        })
                    }, t.prototype.renderPanels = function() {
                        var e = this,
                            t = this.props.channelPanelsData,
                            n = t.currentUser,
                            r = t.user;
                        if (!r) return null;
                        var i = this.getExtensionSlots();
                        return r.panels.map(function(t, r) {
                            if (!t) return null;
                            if ("ExtensionPanel" === t.__typename && t.slotID) {
                                var a = i[t.slotID];
                                if (a && !e.state.destroyedExtensions.includes(a.id)) {
                                    var c = void 0 !== e.state.popout[Object(A.d)(a)];
                                    return s.createElement("div", {
                                        key: t.id
                                    }, s.createElement(V.a, {
                                        channelID: e.props.channelID,
                                        channelName: e.props.channelName,
                                        installation: a,
                                        isFramePoppedOut: c,
                                        isPopout: !1,
                                        login: n && n.login,
                                        loginID: n && n.id,
                                        mode: o.ExtensionMode.Viewer,
                                        onExtensionLoaded: e.layoutMasonry,
                                        onExtensionPopoutClosed: e.onExtensionPopoutRestored,
                                        onExtensionPoppedOut: e.onExtensionPoppedOut,
                                        panel: t
                                    }))
                                }
                            } else if ("DefaultPanel" === t.__typename) return s.createElement(X, {
                                channelID: e.props.channelID,
                                "data-a-target": "panel-" + r,
                                key: t.id,
                                panel: t
                            })
                        })
                    }, t.prototype.getExtensionSlots = function() {
                        if (!this.props.extensionsForChannel) return {};
                        var e = this.props.extensionsForChannel.installedExtensions;
                        return e ? e.reduce(function(e, t) {
                            var n = t.activationConfig;
                            return t.extension.token && n.state === o.ExtensionActivationStatus.Active && (e[n.slot] = t), e
                        }, {}) : {}
                    }, t
                }(s.Component),
                Re = Object(c.compose)(Object(M.b)("ChannelPanels"), Object(m.a)(De, {
                    name: "channelPanelsData",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(m.a)(we, {
                    name: "createPanel"
                }), Object(m.a)(_e, {
                    name: "deletePanel"
                }), Object(m.a)(Te, {
                    name: "updatePanel"
                }), Object(m.a)(Ne, {
                    name: "orderPanels"
                }), Object(f.c)({
                    name: "extensionsForChannel",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }))(je);
            var Ae = Object(i.connect)(function(e) {
                return {
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(Re);
            n.d(t, "PublicProps", function() {}), n.d(t, "ChannelPanels", function() {
                return Ae
            })
        },
        FBRg: function(e, t, n) {
            e.exports = n.p + "assets/paypal_2x-bddabc156344e695fa56.png"
        },
        "GA+j": function(e, t, n) {
            e.exports = n.p + "assets/paypal_1x-a2a2f7d96b4384f9f1d7.png"
        },
        GNKm: function(e, t, n) {
            "use strict";
            var r = n("GOnX");
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    i = e.stateHandler.getState;
                if (!t) throw new Error("Missing required dependency: reporter.");

                function a(e) {
                    return i(e).object
                }
                return {
                    makeDetectable: function(e, a, o) {
                        o || (o = a, a = e, e = null), (e = e || {}).debug, r.isIE(8) ? o(a) : function(e, a) {
                            var o = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",
                                s = !1,
                                c = window.getComputedStyle(e),
                                l = e.offsetWidth,
                                u = e.offsetHeight;

                            function d() {
                                function n() {
                                    if ("static" === c.position) {
                                        e.style.position = "relative";
                                        var n = function(e, t, n, r) {
                                            var i = n[r];
                                            "auto" !== i && "0" !== function(e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(i) && (e.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0)
                                        };
                                        n(t, e, c, "top"), n(t, e, c, "right"), n(t, e, c, "bottom"), n(t, e, c, "left")
                                    }
                                }
                                "" !== c.position && (n(), s = !0);
                                var l = document.createElement("object");
                                l.style.cssText = o, l.tabIndex = -1, l.type = "text/html", l.onload = function() {
                                    s || n(),
                                        function e(t, n) {
                                            t.contentDocument ? n(t.contentDocument) : setTimeout(function() {
                                                e(t, n)
                                            }, 100)
                                        }(this, function(t) {
                                            a(e)
                                        })
                                }, r.isIE() || (l.data = "about:blank"), e.appendChild(l), i(e).object = l, r.isIE() && (l.data = "about:blank")
                            }
                            i(e).startSize = {
                                width: l,
                                height: u
                            }, n ? n.add(d) : d()
                        }(a, o)
                    },
                    addListener: function(e, t) {
                        if (!a(e)) throw new Error("Element is not detectable by this strategy.");

                        function n() {
                            t(e)
                        }
                        r.isIE(8) ? (i(e).object = {
                            proxy: n
                        }, e.attachEvent("onresize", n)) : a(e).contentDocument.defaultView.addEventListener("resize", n)
                    },
                    uninstall: function(e) {
                        r.isIE(8) ? e.detachEvent("onresize", i(e).object.proxy) : e.removeChild(a(e)), delete i(e).object
                    }
                }
            }
        },
        GOnX: function(e, t, n) {
            "use strict";
            var r = e.exports = {};
            r.isIE = function(e) {
                return !! function() {
                    var e = navigator.userAgent.toLowerCase();
                    return -1 !== e.indexOf("msie") || -1 !== e.indexOf("trident") || -1 !== e.indexOf(" edge/")
                }() && (!e || e === function() {
                    var e = 3,
                        t = document.createElement("div"),
                        n = t.getElementsByTagName("i");
                    do {
                        t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e"
                    } while (n[0]);
                    return e > 4 ? e : void 0
                }())
            }, r.isLegacyOpera = function() {
                return !!window.opera
            }
        },
        H5OX: function(e, t, n) {},
        HvcU: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_2x-9e855c7d5c5359ac9208.png"
        },
        Hy43: function(e, t, n) {
            var r, i;
            /*!
             * Outlayer v2.1.1
             * the brains and guts of a layout library
             * MIT license
             */
            /*!
             * Outlayer v2.1.1
             * the brains and guts of a layout library
             * MIT license
             */
            ! function(a, o) {
                "use strict";
                r = [n("CUlp"), n("QK1G"), n("YVj6"), n("KK1e")], void 0 === (i = function(e, t, n, r) {
                    return function(e, t, n, r, i) {
                        var a = e.console,
                            o = e.jQuery,
                            s = function() {},
                            c = 0,
                            l = {};

                        function u(e, t) {
                            var n = r.getQueryElement(e);
                            if (n) {
                                this.element = n, o && (this.$element = o(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(t);
                                var i = ++c;
                                this.element.outlayerGUID = i, l[i] = this, this._create();
                                var s = this._getOption("initLayout");
                                s && this.layout()
                            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
                        }
                        u.namespace = "outlayer", u.Item = i, u.defaults = {
                            containerStyle: {
                                position: "relative"
                            },
                            initLayout: !0,
                            originLeft: !0,
                            originTop: !0,
                            resize: !0,
                            resizeContainer: !0,
                            transitionDuration: "0.4s",
                            hiddenStyle: {
                                opacity: 0,
                                transform: "scale(0.001)"
                            },
                            visibleStyle: {
                                opacity: 1,
                                transform: "scale(1)"
                            }
                        };
                        var d = u.prototype;

                        function p(e) {
                            function t() {
                                e.apply(this, arguments)
                            }
                            return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
                        }
                        r.extend(d, t.prototype), d.option = function(e) {
                            r.extend(this.options, e)
                        }, d._getOption = function(e) {
                            var t = this.constructor.compatOptions[e];
                            return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
                        }, u.compatOptions = {
                            initLayout: "isInitLayout",
                            horizontal: "isHorizontal",
                            layoutInstant: "isLayoutInstant",
                            originLeft: "isOriginLeft",
                            originTop: "isOriginTop",
                            resize: "isResizeBound",
                            resizeContainer: "isResizingContainer"
                        }, d._create = function() {
                            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle);
                            var e = this._getOption("resize");
                            e && this.bindResize()
                        }, d.reloadItems = function() {
                            this.items = this._itemize(this.element.children)
                        }, d._itemize = function(e) {
                            for (var t = this._filterFindItemElements(e), n = this.constructor.Item, r = [], i = 0; i < t.length; i++) {
                                var a = t[i],
                                    o = new n(a, this);
                                r.push(o)
                            }
                            return r
                        }, d._filterFindItemElements = function(e) {
                            return r.filterFindElements(e, this.options.itemSelector)
                        }, d.getItemElements = function() {
                            return this.items.map(function(e) {
                                return e.element
                            })
                        }, d.layout = function() {
                            this._resetLayout(), this._manageStamps();
                            var e = this._getOption("layoutInstant"),
                                t = void 0 !== e ? e : !this._isLayoutInited;
                            this.layoutItems(this.items, t), this._isLayoutInited = !0
                        }, d._init = d.layout, d._resetLayout = function() {
                            this.getSize()
                        }, d.getSize = function() {
                            this.size = n(this.element)
                        }, d._getMeasurement = function(e, t) {
                            var r, i = this.options[e];
                            i ? ("string" == typeof i ? r = this.element.querySelector(i) : i instanceof HTMLElement && (r = i), this[e] = r ? n(r)[t] : i) : this[e] = 0
                        }, d.layoutItems = function(e, t) {
                            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
                        }, d._getItemsForLayout = function(e) {
                            return e.filter(function(e) {
                                return !e.isIgnored
                            })
                        }, d._layoutItems = function(e, t) {
                            if (this._emitCompleteOnItems("layout", e), e && e.length) {
                                var n = [];
                                e.forEach(function(e) {
                                    var r = this._getItemLayoutPosition(e);
                                    r.item = e, r.isInstant = t || e.isLayoutInstant, n.push(r)
                                }, this), this._processLayoutQueue(n)
                            }
                        }, d._getItemLayoutPosition = function() {
                            return {
                                x: 0,
                                y: 0
                            }
                        }, d._processLayoutQueue = function(e) {
                            this.updateStagger(), e.forEach(function(e, t) {
                                this._positionItem(e.item, e.x, e.y, e.isInstant, t)
                            }, this)
                        }, d.updateStagger = function() {
                            var e = this.options.stagger;
                            if (null !== e && void 0 !== e) return this.stagger = function(e) {
                                if ("number" == typeof e) return e;
                                var t = e.match(/(^\d*\.?\d*)(\w*)/),
                                    n = t && t[1],
                                    r = t && t[2];
                                if (!n.length) return 0;
                                n = parseFloat(n);
                                var i = m[r] || 1;
                                return n * i
                            }(e), this.stagger;
                            this.stagger = 0
                        }, d._positionItem = function(e, t, n, r, i) {
                            r ? e.goTo(t, n) : (e.stagger(i * this.stagger), e.moveTo(t, n))
                        }, d._postLayout = function() {
                            this.resizeContainer()
                        }, d.resizeContainer = function() {
                            var e = this._getOption("resizeContainer");
                            if (e) {
                                var t = this._getContainerSize();
                                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                            }
                        }, d._getContainerSize = s, d._setContainerMeasure = function(e, t) {
                            if (void 0 !== e) {
                                var n = this.size;
                                n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
                            }
                        }, d._emitCompleteOnItems = function(e, t) {
                            var n = this;

                            function r() {
                                n.dispatchEvent(e + "Complete", null, [t])
                            }
                            var i = t.length;
                            if (t && i) {
                                var a = 0;
                                t.forEach(function(t) {
                                    t.once(e, o)
                                })
                            } else r();

                            function o() {
                                ++a == i && r()
                            }
                        }, d.dispatchEvent = function(e, t, n) {
                            var r = t ? [t].concat(n) : n;
                            if (this.emitEvent(e, r), o)
                                if (this.$element = this.$element || o(this.element), t) {
                                    var i = o.Event(t);
                                    i.type = e, this.$element.trigger(i, n)
                                } else this.$element.trigger(e, n)
                        }, d.ignore = function(e) {
                            var t = this.getItem(e);
                            t && (t.isIgnored = !0)
                        }, d.unignore = function(e) {
                            var t = this.getItem(e);
                            t && delete t.isIgnored
                        }, d.stamp = function(e) {
                            (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
                        }, d.unstamp = function(e) {
                            (e = this._find(e)) && e.forEach(function(e) {
                                r.removeFrom(this.stamps, e), this.unignore(e)
                            }, this)
                        }, d._find = function(e) {
                            if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = r.makeArray(e)
                        }, d._manageStamps = function() {
                            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
                        }, d._getBoundingRect = function() {
                            var e = this.element.getBoundingClientRect(),
                                t = this.size;
                            this._boundingRect = {
                                left: e.left + t.paddingLeft + t.borderLeftWidth,
                                top: e.top + t.paddingTop + t.borderTopWidth,
                                right: e.right - (t.paddingRight + t.borderRightWidth),
                                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
                            }
                        }, d._manageStamp = s, d._getElementOffset = function(e) {
                            var t = e.getBoundingClientRect(),
                                r = this._boundingRect,
                                i = n(e),
                                a = {
                                    left: t.left - r.left - i.marginLeft,
                                    top: t.top - r.top - i.marginTop,
                                    right: r.right - t.right - i.marginRight,
                                    bottom: r.bottom - t.bottom - i.marginBottom
                                };
                            return a
                        }, d.handleEvent = r.handleEvent, d.bindResize = function() {
                            e.addEventListener("resize", this), this.isResizeBound = !0
                        }, d.unbindResize = function() {
                            e.removeEventListener("resize", this), this.isResizeBound = !1
                        }, d.onresize = function() {
                            this.resize()
                        }, r.debounceMethod(u, "onresize", 100), d.resize = function() {
                            this.isResizeBound && this.needsResizeLayout() && this.layout()
                        }, d.needsResizeLayout = function() {
                            var e = n(this.element),
                                t = this.size && e;
                            return t && e.innerWidth !== this.size.innerWidth
                        }, d.addItems = function(e) {
                            var t = this._itemize(e);
                            return t.length && (this.items = this.items.concat(t)), t
                        }, d.appended = function(e) {
                            var t = this.addItems(e);
                            t.length && (this.layoutItems(t, !0), this.reveal(t))
                        }, d.prepended = function(e) {
                            var t = this._itemize(e);
                            if (t.length) {
                                var n = this.items.slice(0);
                                this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
                            }
                        }, d.reveal = function(e) {
                            if (this._emitCompleteOnItems("reveal", e), e && e.length) {
                                var t = this.updateStagger();
                                e.forEach(function(e, n) {
                                    e.stagger(n * t), e.reveal()
                                })
                            }
                        }, d.hide = function(e) {
                            if (this._emitCompleteOnItems("hide", e), e && e.length) {
                                var t = this.updateStagger();
                                e.forEach(function(e, n) {
                                    e.stagger(n * t), e.hide()
                                })
                            }
                        }, d.revealItemElements = function(e) {
                            var t = this.getItems(e);
                            this.reveal(t)
                        }, d.hideItemElements = function(e) {
                            var t = this.getItems(e);
                            this.hide(t)
                        }, d.getItem = function(e) {
                            for (var t = 0; t < this.items.length; t++) {
                                var n = this.items[t];
                                if (n.element == e) return n
                            }
                        }, d.getItems = function(e) {
                            var t = [];
                            return (e = r.makeArray(e)).forEach(function(e) {
                                var n = this.getItem(e);
                                n && t.push(n)
                            }, this), t
                        }, d.remove = function(e) {
                            var t = this.getItems(e);
                            this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
                                e.remove(), r.removeFrom(this.items, e)
                            }, this)
                        }, d.destroy = function() {
                            var e = this.element.style;
                            e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
                                e.destroy()
                            }), this.unbindResize();
                            var t = this.element.outlayerGUID;
                            delete l[t], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace)
                        }, u.data = function(e) {
                            var t = (e = r.getQueryElement(e)) && e.outlayerGUID;
                            return t && l[t]
                        }, u.create = function(e, t) {
                            var n = p(u);
                            return n.defaults = r.extend({}, u.defaults), r.extend(n.defaults, t), n.compatOptions = r.extend({}, u.compatOptions), n.namespace = e, n.data = u.data, n.Item = p(i), r.htmlInit(n, e), o && o.bridget && o.bridget(e, n), n
                        };
                        var m = {
                            ms: 1,
                            s: 1e3
                        };
                        return u.Item = i, u
                    }(a, e, t, n, r)
                }.apply(t, r)) || (e.exports = i)
            }(window)
        },
        IRK4: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_1x-894b335a3c74ebaba75f.png"
        },
        ITnh: function(e, t, n) {
            e.exports = n("Lrin")()
        },
        JH5r: function(e, t, n) {},
        Jgup: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA");

            function i(e) {
                switch (e.toUpperCase()) {
                    case "A1":
                        return Object(r.d)("Anonymous Proxy", "format-country");
                    case "A2":
                        return Object(r.d)("Satellite Provider", "format-country");
                    case "AD":
                        return Object(r.d)("Andorra", "format-country");
                    case "AE":
                        return Object(r.d)("United Arab Emirates", "format-country");
                    case "AF":
                        return Object(r.d)("Afghanistan", "format-country");
                    case "AG":
                        return Object(r.d)("Antigua and Barbuda", "format-country");
                    case "AI":
                        return Object(r.d)("Anguilla", "format-country");
                    case "AL":
                        return Object(r.d)("Albania", "format-country");
                    case "AM":
                        return Object(r.d)("Armenia", "format-country");
                    case "AO":
                        return Object(r.d)("Angola", "format-country");
                    case "AP":
                        return Object(r.d)("Asia/Pacific Region", "format-country");
                    case "AQ":
                        return Object(r.d)("Antarctica", "format-country");
                    case "AR":
                        return Object(r.d)("Argentina", "format-country");
                    case "AS":
                        return Object(r.d)("American Samoa", "format-country");
                    case "AT":
                        return Object(r.d)("Austria", "format-country");
                    case "AU":
                        return Object(r.d)("Australia", "format-country");
                    case "AW":
                        return Object(r.d)("Aruba", "format-country");
                    case "AX":
                        return Object(r.d)("Aland Islands", "format-country");
                    case "AZ":
                        return Object(r.d)("Azerbaijan", "format-country");
                    case "BA":
                        return Object(r.d)("Bosnia and Herzegovina", "format-country");
                    case "BB":
                        return Object(r.d)("Barbados", "format-country");
                    case "BD":
                        return Object(r.d)("Bangladesh", "format-country");
                    case "BE":
                        return Object(r.d)("Belgium", "format-country");
                    case "BF":
                        return Object(r.d)("Burkina Faso", "format-country");
                    case "BG":
                        return Object(r.d)("Bulgaria", "format-country");
                    case "BH":
                        return Object(r.d)("Bahrain", "format-country");
                    case "BI":
                        return Object(r.d)("Burundi", "format-country");
                    case "BJ":
                        return Object(r.d)("Benin", "format-country");
                    case "BL":
                        return Object(r.d)("Saint Bartelemey", "format-country");
                    case "BM":
                        return Object(r.d)("Bermuda", "format-country");
                    case "BN":
                        return Object(r.d)("Brunei", "format-country");
                    case "BO":
                        return Object(r.d)("Bolivia", "format-country");
                    case "BQ":
                        return Object(r.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                    case "BR":
                        return Object(r.d)("Brazil", "format-country");
                    case "BS":
                        return Object(r.d)("Bahamas", "format-country");
                    case "BT":
                        return Object(r.d)("Bhutan", "format-country");
                    case "BV":
                        return Object(r.d)("Bouvet Island", "format-country");
                    case "BW":
                        return Object(r.d)("Botswana", "format-country");
                    case "BY":
                        return Object(r.d)("Belarus", "format-country");
                    case "BZ":
                        return Object(r.d)("Belize", "format-country");
                    case "CA":
                        return Object(r.d)("Canada", "format-country");
                    case "CC":
                        return Object(r.d)("Cocos (Keeling) Islands", "format-country");
                    case "CD":
                        return Object(r.d)("Congo, The Democratic Republic of the", "format-country");
                    case "CF":
                        return Object(r.d)("Central African Republic", "format-country");
                    case "CG":
                        return Object(r.d)("Congo", "format-country");
                    case "CH":
                        return Object(r.d)("Switzerland", "format-country");
                    case "CI":
                        return Object(r.d)("Ivory Coast", "format-country");
                    case "CK":
                        return Object(r.d)("Cook Islands", "format-country");
                    case "CL":
                        return Object(r.d)("Chile", "format-country");
                    case "CM":
                        return Object(r.d)("Cameroon", "format-country");
                    case "CN":
                        return Object(r.d)("China", "format-country");
                    case "CO":
                        return Object(r.d)("Colombia", "format-country");
                    case "CR":
                        return Object(r.d)("Costa Rica", "format-country");
                    case "CU":
                        return Object(r.d)("Cuba", "format-country");
                    case "CV":
                        return Object(r.d)("Cape Verde", "format-country");
                    case "CW":
                        return Object(r.d)("Curacao", "format-country");
                    case "CX":
                        return Object(r.d)("Christmas Island", "format-country");
                    case "CY":
                        return Object(r.d)("Cyprus", "format-country");
                    case "CZ":
                        return Object(r.d)("Czech Republic", "format-country");
                    case "DE":
                        return Object(r.d)("Germany", "format-country");
                    case "DJ":
                        return Object(r.d)("Djibouti", "format-country");
                    case "DK":
                        return Object(r.d)("Denmark", "format-country");
                    case "DM":
                        return Object(r.d)("Dominica", "format-country");
                    case "DO":
                        return Object(r.d)("Dominican Republic", "format-country");
                    case "DZ":
                        return Object(r.d)("Algeria", "format-country");
                    case "EC":
                        return Object(r.d)("Ecuador", "format-country");
                    case "EE":
                        return Object(r.d)("Estonia", "format-country");
                    case "EG":
                        return Object(r.d)("Egypt", "format-country");
                    case "EH":
                        return Object(r.d)("Western Sahara", "format-country");
                    case "ER":
                        return Object(r.d)("Eritrea", "format-country");
                    case "ES":
                        return Object(r.d)("Spain", "format-country");
                    case "ET":
                        return Object(r.d)("Ethiopia", "format-country");
                    case "EU":
                        return Object(r.d)("Europe", "format-country");
                    case "FI":
                        return Object(r.d)("Finland", "format-country");
                    case "FJ":
                        return Object(r.d)("Fiji", "format-country");
                    case "FK":
                        return Object(r.d)("Falkland Islands (Malvinas)", "format-country");
                    case "FM":
                        return Object(r.d)("Micronesia", "format-country");
                    case "FO":
                        return Object(r.d)("Faroe Islands", "format-country");
                    case "FR":
                        return Object(r.d)("France", "format-country");
                    case "GA":
                        return Object(r.d)("Gabon", "format-country");
                    case "GB":
                        return Object(r.d)("United Kingdom", "format-country");
                    case "GD":
                        return Object(r.d)("Grenada", "format-country");
                    case "GE":
                        return Object(r.d)("Georgia", "format-country");
                    case "GF":
                        return Object(r.d)("French Guiana", "format-country");
                    case "GG":
                        return Object(r.d)("Guernsey", "format-country");
                    case "GH":
                        return Object(r.d)("Ghana", "format-country");
                    case "GI":
                        return Object(r.d)("Gibraltar", "format-country");
                    case "GL":
                        return Object(r.d)("Greenland", "format-country");
                    case "GM":
                        return Object(r.d)("Gambia", "format-country");
                    case "GN":
                        return Object(r.d)("Guinea", "format-country");
                    case "GP":
                        return Object(r.d)("Guadeloupe", "format-country");
                    case "GQ":
                        return Object(r.d)("Equatorial Guinea", "format-country");
                    case "GR":
                        return Object(r.d)("Greece", "format-country");
                    case "GS":
                        return Object(r.d)("South Georgia and the South Sandwich Islands", "format-country");
                    case "GT":
                        return Object(r.d)("Guatemala", "format-country");
                    case "GU":
                        return Object(r.d)("Guam", "format-country");
                    case "GW":
                        return Object(r.d)("Guinea-Bissau", "format-country");
                    case "GY":
                        return Object(r.d)("Guyana", "format-country");
                    case "HK":
                        return Object(r.d)("Hong Kong", "format-country");
                    case "HM":
                        return Object(r.d)("Heard Island and McDonald Islands", "format-country");
                    case "HN":
                        return Object(r.d)("Honduras", "format-country");
                    case "HR":
                        return Object(r.d)("Croatia", "format-country");
                    case "HT":
                        return Object(r.d)("Haiti", "format-country");
                    case "HU":
                        return Object(r.d)("Hungary", "format-country");
                    case "ID":
                        return Object(r.d)("Indonesia", "format-country");
                    case "IE":
                        return Object(r.d)("Ireland", "format-country");
                    case "IL":
                        return Object(r.d)("Israel", "format-country");
                    case "IM":
                        return Object(r.d)("Isle of Man", "format-country");
                    case "IN":
                        return Object(r.d)("India", "format-country");
                    case "IO":
                        return Object(r.d)("British Indian Ocean Territory", "format-country");
                    case "IQ":
                        return Object(r.d)("Iraq", "format-country");
                    case "IR":
                        return Object(r.d)("Iran", "format-country");
                    case "IS":
                        return Object(r.d)("Iceland", "format-country");
                    case "IT":
                        return Object(r.d)("Italy", "format-country");
                    case "JE":
                        return Object(r.d)("Jersey", "format-country");
                    case "JM":
                        return Object(r.d)("Jamaica", "format-country");
                    case "JO":
                        return Object(r.d)("Jordan", "format-country");
                    case "JP":
                        return Object(r.d)("Japan", "format-country");
                    case "KE":
                        return Object(r.d)("Kenya", "format-country");
                    case "KG":
                        return Object(r.d)("Kyrgyzstan", "format-country");
                    case "KH":
                        return Object(r.d)("Cambodia", "format-country");
                    case "KI":
                        return Object(r.d)("Kiribati", "format-country");
                    case "KM":
                        return Object(r.d)("Comoros", "format-country");
                    case "KN":
                        return Object(r.d)("Saint Kitts and Nevis", "format-country");
                    case "KP":
                        return Object(r.d)("North Korea", "format-country");
                    case "KR":
                        return Object(r.d)("South Korea", "format-country");
                    case "KW":
                        return Object(r.d)("Kuwait", "format-country");
                    case "KY":
                        return Object(r.d)("Cayman Islands", "format-country");
                    case "KZ":
                        return Object(r.d)("Kazakhstan", "format-country");
                    case "LA":
                        return Object(r.d)("Laos", "format-country");
                    case "LB":
                        return Object(r.d)("Lebanon", "format-country");
                    case "LC":
                        return Object(r.d)("Saint Lucia", "format-country");
                    case "LI":
                        return Object(r.d)("Liechtenstein", "format-country");
                    case "LK":
                        return Object(r.d)("Sri Lanka", "format-country");
                    case "LR":
                        return Object(r.d)("Liberia", "format-country");
                    case "LS":
                        return Object(r.d)("Lesotho", "format-country");
                    case "LT":
                        return Object(r.d)("Lithuania", "format-country");
                    case "LU":
                        return Object(r.d)("Luxembourg", "format-country");
                    case "LV":
                        return Object(r.d)("Latvia", "format-country");
                    case "LY":
                        return Object(r.d)("Libya", "format-country");
                    case "MA":
                        return Object(r.d)("Morocco", "format-country");
                    case "MC":
                        return Object(r.d)("Monaco", "format-country");
                    case "MD":
                        return Object(r.d)("Moldova", "format-country");
                    case "ME":
                        return Object(r.d)("Montenegro", "format-country");
                    case "MF":
                        return Object(r.d)("Saint Martin", "format-country");
                    case "MG":
                        return Object(r.d)("Madagascar", "format-country");
                    case "MH":
                        return Object(r.d)("Marshall Islands", "format-country");
                    case "MK":
                        return Object(r.d)("Macedonia", "format-country");
                    case "ML":
                        return Object(r.d)("Mali", "format-country");
                    case "MM":
                        return Object(r.d)("Myanmar", "format-country");
                    case "MN":
                        return Object(r.d)("Mongolia", "format-country");
                    case "MO":
                        return Object(r.d)("Macao", "format-country");
                    case "MP":
                        return Object(r.d)("Northern Mariana Islands", "format-country");
                    case "MQ":
                        return Object(r.d)("Martinique", "format-country");
                    case "MR":
                        return Object(r.d)("Mauritania", "format-country");
                    case "MS":
                        return Object(r.d)("Montserrat", "format-country");
                    case "MT":
                        return Object(r.d)("Malta", "format-country");
                    case "MU":
                        return Object(r.d)("Mauritius", "format-country");
                    case "MV":
                        return Object(r.d)("Maldives", "format-country");
                    case "MW":
                        return Object(r.d)("Malawi", "format-country");
                    case "MX":
                        return Object(r.d)("Mexico", "format-country");
                    case "MY":
                        return Object(r.d)("Malaysia", "format-country");
                    case "MZ":
                        return Object(r.d)("Mozambique", "format-country");
                    case "NA":
                        return Object(r.d)("Namibia", "format-country");
                    case "NC":
                        return Object(r.d)("New Caledonia", "format-country");
                    case "NE":
                        return Object(r.d)("Niger", "format-country");
                    case "NF":
                        return Object(r.d)("Norfolk Island", "format-country");
                    case "NG":
                        return Object(r.d)("Nigeria", "format-country");
                    case "NI":
                        return Object(r.d)("Nicaragua", "format-country");
                    case "NL":
                        return Object(r.d)("Netherlands", "format-country");
                    case "NO":
                        return Object(r.d)("Norway", "format-country");
                    case "NP":
                        return Object(r.d)("Nepal", "format-country");
                    case "NR":
                        return Object(r.d)("Nauru", "format-country");
                    case "NU":
                        return Object(r.d)("Niue", "format-country");
                    case "NZ":
                        return Object(r.d)("New Zealand", "format-country");
                    case "O1":
                        return Object(r.d)("Other Country", "format-country");
                    case "OM":
                        return Object(r.d)("Oman", "format-country");
                    case "PA":
                        return Object(r.d)("Panama", "format-country");
                    case "PE":
                        return Object(r.d)("Peru", "format-country");
                    case "PF":
                        return Object(r.d)("French Polynesia", "format-country");
                    case "PG":
                        return Object(r.d)("Papua New Guinea", "format-country");
                    case "PH":
                        return Object(r.d)("Philippines", "format-country");
                    case "PK":
                        return Object(r.d)("Pakistan", "format-country");
                    case "PL":
                        return Object(r.d)("Poland", "format-country");
                    case "PM":
                        return Object(r.d)("Saint Pierre and Miquelon", "format-country");
                    case "PN":
                        return Object(r.d)("Pitcairn", "format-country");
                    case "PR":
                        return Object(r.d)("Puerto Rico", "format-country");
                    case "PS":
                        return Object(r.d)("Palestine", "format-country");
                    case "PT":
                        return Object(r.d)("Portugal", "format-country");
                    case "PW":
                        return Object(r.d)("Palau", "format-country");
                    case "PY":
                        return Object(r.d)("Paraguay", "format-country");
                    case "QA":
                        return Object(r.d)("Qatar", "format-country");
                    case "RE":
                        return Object(r.d)("Reunion", "format-country");
                    case "RO":
                        return Object(r.d)("Romania", "format-country");
                    case "RS":
                        return Object(r.d)("Serbia", "format-country");
                    case "RU":
                        return Object(r.d)("Russia", "format-country");
                    case "RW":
                        return Object(r.d)("Rwanda", "format-country");
                    case "SA":
                        return Object(r.d)("Saudi Arabia", "format-country");
                    case "SB":
                        return Object(r.d)("Solomon Islands", "format-country");
                    case "SC":
                        return Object(r.d)("Seychelles", "format-country");
                    case "SD":
                        return Object(r.d)("Sudan", "format-country");
                    case "SE":
                        return Object(r.d)("Sweden", "format-country");
                    case "SG":
                        return Object(r.d)("Singapore", "format-country");
                    case "SH":
                        return Object(r.d)("Saint Helena", "format-country");
                    case "SI":
                        return Object(r.d)("Slovenia", "format-country");
                    case "SJ":
                        return Object(r.d)("Svalbard and Jan Mayen", "format-country");
                    case "SK":
                        return Object(r.d)("Slovakia", "format-country");
                    case "SL":
                        return Object(r.d)("Sierra Leone", "format-country");
                    case "SM":
                        return Object(r.d)("San Marino", "format-country");
                    case "SN":
                        return Object(r.d)("Senegal", "format-country");
                    case "SO":
                        return Object(r.d)("Somalia", "format-country");
                    case "SR":
                        return Object(r.d)("Suriname", "format-country");
                    case "SS":
                        return Object(r.d)("South Sudan", "format-country");
                    case "ST":
                        return Object(r.d)("Sao Tome and Principe", "format-country");
                    case "SV":
                        return Object(r.d)("El Salvador", "format-country");
                    case "SX":
                        return Object(r.d)("Sint Maarten", "format-country");
                    case "SY":
                        return Object(r.d)("Syria", "format-country");
                    case "SZ":
                        return Object(r.d)("Swaziland", "format-country");
                    case "TC":
                        return Object(r.d)("Turks and Caicos Islands", "format-country");
                    case "TD":
                        return Object(r.d)("Chad", "format-country");
                    case "TF":
                        return Object(r.d)("French Southern Territories", "format-country");
                    case "TG":
                        return Object(r.d)("Togo", "format-country");
                    case "TH":
                        return Object(r.d)("Thailand", "format-country");
                    case "TJ":
                        return Object(r.d)("Tajikistan", "format-country");
                    case "TK":
                        return Object(r.d)("Tokelau", "format-country");
                    case "TL":
                        return Object(r.d)("East Timor", "format-country");
                    case "TM":
                        return Object(r.d)("Turkmenistan", "format-country");
                    case "TN":
                        return Object(r.d)("Tunisia", "format-country");
                    case "TO":
                        return Object(r.d)("Tonga", "format-country");
                    case "TR":
                        return Object(r.d)("Turkey", "format-country");
                    case "TT":
                        return Object(r.d)("Trinidad and Tobago", "format-country");
                    case "TV":
                        return Object(r.d)("Tuvalu", "format-country");
                    case "TW":
                        return Object(r.d)("Taiwan", "format-country");
                    case "TZ":
                        return Object(r.d)("Tanzania", "format-country");
                    case "UA":
                        return Object(r.d)("Ukraine", "format-country");
                    case "UG":
                        return Object(r.d)("Uganda", "format-country");
                    case "UM":
                        return Object(r.d)("United States Minor Outlying Islands", "format-country");
                    case "US":
                        return Object(r.d)("United States", "format-country");
                    case "UY":
                        return Object(r.d)("Uruguay", "format-country");
                    case "UZ":
                        return Object(r.d)("Uzbekistan", "format-country");
                    case "VA":
                        return Object(r.d)("Vatican City", "format-country");
                    case "VC":
                        return Object(r.d)("Saint Vincent and the Grenadines", "format-country");
                    case "VE":
                        return Object(r.d)("Venezuela", "format-country");
                    case "VG":
                        return Object(r.d)("British Virgin Islands", "format-country");
                    case "VI":
                        return Object(r.d)("U.S. Virgin Islands", "format-country");
                    case "VN":
                        return Object(r.d)("Vietnam", "format-country");
                    case "VU":
                        return Object(r.d)("Vanuatu", "format-country");
                    case "WF":
                        return Object(r.d)("Wallis and Futuna", "format-country");
                    case "WS":
                        return Object(r.d)("Samoa", "format-country");
                    case "YE":
                        return Object(r.d)("Yemen", "format-country");
                    case "YT":
                        return Object(r.d)("Mayotte", "format-country");
                    case "ZA":
                        return Object(r.d)("South Africa", "format-country");
                    case "ZM":
                        return Object(r.d)("Zambia", "format-country");
                    case "ZW":
                        return Object(r.d)("Zimbabwe", "format-country");
                    default:
                        return e
                }
            }
            var a = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
        },
        KGBd: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, i, a, o) {
                var s = document.createElement("canvas");
                s.width = a, s.height = o;
                var c = s.getContext("2d"),
                    l = "";
                if (c) {
                    var u = new Image;
                    u.src = e, c.drawImage(u, t, n, r, i, 0, 0, a, o), l = s.toDataURL("image/png")
                }
                return s.remove(), l
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "KJv/": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("cZKs"),
                c = n("8/mp"),
                l = n("yR8l"),
                u = n("UUve"),
                d = n("NvVO"),
                p = n("2xye"),
                m = n("WXY0"),
                h = n("GnwI"),
                f = n("Nk81"),
                y = n("Ue10"),
                g = n("LS/W");
            n("H5OX");

            function b(e) {
                return !e.recipientLogin
            }
            var v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startTime = Date.now(), t.handleOnClose = function() {
                            Object(u.f)(), t.props.onClose && t.props.onClose()
                        }, t.onBeforeUnloadHandler = function() {
                            Object(u.f)(), window.removeEventListener("beforeunload", t.onBeforeUnloadHandler)
                        }, t.trackBenchmarkComplete = function() {
                            t.props.latencyTracking.unsubscribeFromInteractivityCompletion(t.trackBenchmarkComplete);
                            var e = Date.now() - t.startTime;
                            new f.a(o.p.tracking, o.p.logger).trackCompleteTransition(d.a.SubsCheckoutPage, p.PageviewLocation.SubsCheckoutPage, "SubsCheckoutPage", e, e, !1, document.hidden)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.subscribeToInteractivityCompletion(this.trackBenchmarkComplete), this.reportInteractive(), window.addEventListener("beforeunload", this.onBeforeUnloadHandler)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        Object(u.f)(), this.props.latencyTracking.unsubscribeFromInteractivityCompletion(this.trackBenchmarkComplete)
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data && this.props.data.loading) e = null;
                        else {
                            var t = this.props.data && this.props.data.recipient || null;
                            e = i.createElement(c.b, {
                                suppressScrollX: !0
                            }, i.createElement(m.a, {
                                productName: this.props.productName,
                                isGift: !(!t || !t.id) || !!this.props.mysteryGiftCount,
                                recipientID: t && t.id,
                                recipientDisplayName: t && t.displayName,
                                trackingContext: this.props.trackingContext,
                                mysteryGiftCount: this.props.mysteryGiftCount || null,
                                isAnonymous: this.props.isAnonymous || !1,
                                onCheckoutProgress: this.props.onCheckoutProgress
                            }))
                        }
                        return i.createElement(y.Fb, {
                            background: y.r.Alt,
                            className: "checkout-modal__container"
                        }, e, i.createElement(s.a, {
                            ignoreEscKey: !0,
                            closeOnPageNavigation: !0,
                            onClose: this.handleOnClose
                        }))
                    }, t.prototype.reportInteractive = function() {
                        b(this.props) ? this.props.latencyTracking.reportInteractive() : !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(i.Component),
                E = Object(a.compose)(Object(h.b)("CheckoutModal"), Object(l.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.recipientLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return b(e)
                    }
                }))(v);
            n.d(t, "CheckoutModal", function() {
                return E
            }), n.d(t, "CheckoutModalPublicProps", function() {}), n.d(t, "clearSubscriptionCheckoutKeys", function() {
                return u.f
            }), n.d(t, "SUB_CHECKOUT__PRODUCT_KEY", function() {
                return u.d
            }), n.d(t, "SUB_CHECKOUT__RECIPIENT_KEY", function() {
                return u.e
            }), n.d(t, "showLoginModalWithCheckoutDispatch", function() {
                return u.g
            })
        },
        KK1e: function(e, t, n) {
            var r, i, a;
            window, i = [n("CUlp"), n("QK1G")], void 0 === (a = "function" == typeof(r = function(e, t) {
                "use strict";
                var n = document.documentElement.style,
                    r = "string" == typeof n.transition ? "transition" : "WebkitTransition",
                    i = "string" == typeof n.transform ? "transform" : "WebkitTransform",
                    a = {
                        WebkitTransition: "webkitTransitionEnd",
                        transition: "transitionend"
                    }[r],
                    o = {
                        transform: i,
                        transition: r,
                        transitionDuration: r + "Duration",
                        transitionProperty: r + "Property",
                        transitionDelay: r + "Delay"
                    };

                function s(e, t) {
                    e && (this.element = e, this.layout = t, this.position = {
                        x: 0,
                        y: 0
                    }, this._create())
                }
                var c = s.prototype = Object.create(e.prototype);
                c.constructor = s, c._create = function() {
                    this._transn = {
                        ingProperties: {},
                        clean: {},
                        onEnd: {}
                    }, this.css({
                        position: "absolute"
                    })
                }, c.handleEvent = function(e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e)
                }, c.getSize = function() {
                    this.size = t(this.element)
                }, c.css = function(e) {
                    var t = this.element.style;
                    for (var n in e) {
                        var r = o[n] || n;
                        t[r] = e[n]
                    }
                }, c.getPosition = function() {
                    var e = getComputedStyle(this.element),
                        t = this.layout._getOption("originLeft"),
                        n = this.layout._getOption("originTop"),
                        r = e[t ? "left" : "right"],
                        i = e[n ? "top" : "bottom"],
                        a = parseFloat(r),
                        o = parseFloat(i),
                        s = this.layout.size; - 1 != r.indexOf("%") && (a = a / 100 * s.width), -1 != i.indexOf("%") && (o = o / 100 * s.height), a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, a -= t ? s.paddingLeft : s.paddingRight, o -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = o
                }, c.layoutPosition = function() {
                    var e = this.layout.size,
                        t = {},
                        n = this.layout._getOption("originLeft"),
                        r = this.layout._getOption("originTop"),
                        i = n ? "paddingLeft" : "paddingRight",
                        a = n ? "left" : "right",
                        o = n ? "right" : "left",
                        s = this.position.x + e[i];
                    t[a] = this.getXValue(s), t[o] = "";
                    var c = r ? "paddingTop" : "paddingBottom",
                        l = r ? "top" : "bottom",
                        u = r ? "bottom" : "top",
                        d = this.position.y + e[c];
                    t[l] = this.getYValue(d), t[u] = "", this.css(t), this.emitEvent("layout", [this])
                }, c.getXValue = function(e) {
                    var t = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
                }, c.getYValue = function(e) {
                    var t = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
                }, c._transitionTo = function(e, t) {
                    this.getPosition();
                    var n = this.position.x,
                        r = this.position.y,
                        i = e == this.position.x && t == this.position.y;
                    if (this.setPosition(e, t), !i || this.isTransitioning) {
                        var a = e - n,
                            o = t - r,
                            s = {};
                        s.transform = this.getTranslate(a, o), this.transition({
                            to: s,
                            onTransitionEnd: {
                                transform: this.layoutPosition
                            },
                            isCleaning: !0
                        })
                    } else this.layoutPosition()
                }, c.getTranslate = function(e, t) {
                    var n = this.layout._getOption("originLeft"),
                        r = this.layout._getOption("originTop");
                    return "translate3d(" + (e = n ? e : -e) + "px, " + (t = r ? t : -t) + "px, 0)"
                }, c.goTo = function(e, t) {
                    this.setPosition(e, t), this.layoutPosition()
                }, c.moveTo = c._transitionTo, c.setPosition = function(e, t) {
                    this.position.x = parseFloat(e), this.position.y = parseFloat(t)
                }, c._nonTransition = function(e) {
                    for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
                }, c.transition = function(e) {
                    if (parseFloat(this.layout.options.transitionDuration)) {
                        var t = this._transn;
                        for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
                        for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
                        e.from && (this.css(e.from), this.element.offsetHeight), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
                    } else this._nonTransition(e)
                };
                var l = "opacity," + function(e) {
                    return e.replace(/([A-Z])/g, function(e) {
                        return "-" + e.toLowerCase()
                    })
                }(i);
                c.enableTransition = function() {
                    if (!this.isTransitioning) {
                        var e = this.layout.options.transitionDuration;
                        e = "number" == typeof e ? e + "ms" : e, this.css({
                            transitionProperty: l,
                            transitionDuration: e,
                            transitionDelay: this.staggerDelay || 0
                        }), this.element.addEventListener(a, this, !1)
                    }
                }, c.onwebkitTransitionEnd = function(e) {
                    this.ontransitionend(e)
                }, c.onotransitionend = function(e) {
                    this.ontransitionend(e)
                };
                var u = {
                    "-webkit-transform": "transform"
                };
                c.ontransitionend = function(e) {
                    if (e.target === this.element) {
                        var t = this._transn,
                            n = u[e.propertyName] || e.propertyName;
                        if (delete t.ingProperties[n], function(e) {
                                for (var t in e) return !1;
                                return !0
                            }(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) {
                            var r = t.onEnd[n];
                            r.call(this), delete t.onEnd[n]
                        }
                        this.emitEvent("transitionEnd", [this])
                    }
                }, c.disableTransition = function() {
                    this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
                }, c._removeStyles = function(e) {
                    var t = {};
                    for (var n in e) t[n] = "";
                    this.css(t)
                };
                var d = {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionDelay: ""
                };
                return c.removeTransitionStyles = function() {
                    this.css(d)
                }, c.stagger = function(e) {
                    e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
                }, c.removeElem = function() {
                    this.element.parentNode.removeChild(this.element), this.css({
                        display: ""
                    }), this.emitEvent("remove", [this])
                }, c.remove = function() {
                    r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                        this.removeElem()
                    }), this.hide()) : this.removeElem()
                }, c.reveal = function() {
                    delete this.isHidden, this.css({
                        display: ""
                    });
                    var e = this.layout.options,
                        t = {};
                    t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                        from: e.hiddenStyle,
                        to: e.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: t
                    })
                }, c.onRevealTransitionEnd = function() {
                    this.isHidden || this.emitEvent("reveal")
                }, c.getHideRevealTransitionEndProperty = function(e) {
                    var t = this.layout.options[e];
                    if (t.opacity) return "opacity";
                    for (var n in t) return n
                }, c.hide = function() {
                    this.isHidden = !0, this.css({
                        display: ""
                    });
                    var e = this.layout.options,
                        t = {};
                    t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                        from: e.visibleStyle,
                        to: e.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: t
                    })
                }, c.onHideTransitionEnd = function() {
                    this.isHidden && (this.css({
                        display: "none"
                    }), this.emitEvent("hide"))
                }, c.destroy = function() {
                    this.css({
                        position: "",
                        left: "",
                        right: "",
                        top: "",
                        bottom: "",
                        transition: "",
                        transform: ""
                    })
                }, s
            }) ? r.apply(t, i) : r) || (e.exports = a)
        },
        KL9a: function(e, t, n) {
            e.exports = n.p + "assets/mastercard_dark-a85ba185886a8899fef1.svg"
        },
        KRuc: function(e, t, n) {
            e.exports = n.p + "assets/paypal_2x-36ebff55eec001d935d0.png"
        },
        KYZ7: function(e, t, n) {
            e.exports = n.p + "assets/turbo-logo-a785836787e34974eea8.svg"
        },
        KjOM: function(e, t, n) {},
        LO96: function(e, t, n) {
            "use strict";
            e.exports = function() {
                var e = 1;
                return {
                    generate: function() {
                        return e++
                    }
                }
            }
        },
        "LS/W": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CheckoutModal_GiftRecipient"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recipientLogin"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "recipient"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "recipientLogin"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 122
                }
            };
            n.loc.source = {
                body: "query CheckoutModal_GiftRecipient ($recipientLogin: String!) {\nrecipient: user(login: $recipientLogin){\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Lrin: function(e, t, n) {
            "use strict";
            var r = n("vylb");

            function i() {}
            e.exports = function() {
                function e(e, t, n, i, a, o) {
                    if (o !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t
                };
                return n.checkPropTypes = i, n.PropTypes = n, n
            }
        },
        MU3X: function(e, t, n) {
            e.exports = n.p + "assets/more_methods_dark_1x-e97146d0a834e34ca979.png"
        },
        NAeX: function(e, t, n) {},
        NwMv: function(e, t, n) {},
        Nxrd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
            var r = n("jTc+");
            Object.defineProperty(t, "arrayMove", {
                enumerable: !0,
                get: function() {
                    return r.arrayMove
                }
            });
            var i = s(n("ezMb")),
                a = s(n("hk6T")),
                o = s(n("BCEg"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.SortableContainer = i.default, t.SortableElement = a.default, t.SortableHandle = o.default, t.sortableContainer = i.default, t.sortableElement = a.default, t.sortableHandle = o.default
        },
        Og0W: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPanels"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "panels"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "channelPanelsPanel"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "channelPanelsPanel"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Panel"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "channelPanelsDefaultPanel"
                            },
                            directives: []
                        }, {
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "channelPanelsExtensionPanel"
                            },
                            directives: []
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "channelPanelsExtensionPanel"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionPanel"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "slotID"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "channelPanelsDefaultPanel"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DefaultPanel"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "imageURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "linkURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 434
                }
            };
            n.loc.source = {
                body: "query ChannelPanels($login: String!) {\ncurrentUser {\nid\nlogin\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $login) {\nid\nlogin\npanels {\n...channelPanelsPanel\n}\n}\n}\nfragment channelPanelsPanel on Panel {\n...channelPanelsDefaultPanel\n...channelPanelsExtensionPanel\n}\nfragment channelPanelsExtensionPanel on ExtensionPanel {\nid\ntype\nslotID\n}\nfragment channelPanelsDefaultPanel on DefaultPanel {\nid\ntype\ntitle\nimageURL\nlinkURL\ndescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Oz8M: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ChannelPanelsCreatePanel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CreatePanelInput"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "createPanel"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "panel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "DefaultPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "title"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "imageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "linkURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "description"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ExtensionPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "slotID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 205
                }
            };
            n.loc.source = {
                body: "mutation ChannelPanelsCreatePanel($input: CreatePanelInput!) {\ncreatePanel(input: $input) {\npanel {\nid\ntype\n... on DefaultPanel {\ntitle\nimageURL\nlinkURL\ndescription\n}\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        OzNJ: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            });
            var r, i, a = n("1hWM"),
                o = n("DMoW");

            function s(e) {
                return e.isBitsEnabled ? r.Bits : e.vendorCode && e.sku ? r.InExtensionPurchases : null
            }

            function c(e) {
                var t = [];
                return e.component && e.component.viewerURL && t.push(o.x.COMPONENT), e.panel && e.panel.viewerURL && t.push(o.x.PANEL), e.videoOverlay && e.videoOverlay.viewerURL && t.push(o.x.VIDEO_OVERLAY), t
            }

            function l(e) {
                var t = [a.ExtensionPlatform.Web];
                return e.mobile && e.mobile.viewerURL && t.push(a.ExtensionPlatform.Mobile), t
            }

            function u(e, t) {
                return e + ":" + t
            }

            function d(e) {
                return u(e.extension.id, e.extension.version)
            }! function(e) {
                e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
            }(r || (r = {})),
            function(e) {
                e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
            }(i || (i = {}))
        },
        PZVp: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(r || (r = {}))
        },
        PwAB: function(e, t, n) {
            e.exports = n.p + "assets/xsolla_2x-b8ef30f34626976fddc4.png"
        },
        QK1G: function(e, t, n) {
            var r;
            /*!
             * getSize v2.0.2
             * measure size of elements
             * MIT license
             */
            /*!
             * getSize v2.0.2
             * measure size of elements
             * MIT license
             */
            ! function(i, a) {
                "use strict";
                void 0 === (r = function() {
                    return function() {
                        function e(e) {
                            var t = parseFloat(e),
                                n = -1 == e.indexOf("%") && !isNaN(t);
                            return n && t
                        }
                        var t = "undefined" == typeof console ? function() {} : function(e) {
                                console.error(e)
                            },
                            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                            r = n.length;

                        function i(e) {
                            var n = getComputedStyle(e);
                            return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                        }
                        var a, o = !1;

                        function s(t) {
                            if (function() {
                                    if (o) return;
                                    o = !0;
                                    var t = document.createElement("div");
                                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                                    var n = document.body || document.documentElement;
                                    n.appendChild(t);
                                    var r = i(t);
                                    s.isBoxSizeOuter = a = 200 == e(r.width), n.removeChild(t)
                                }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                                var c = i(t);
                                if ("none" == c.display) return function() {
                                    for (var e = {
                                            width: 0,
                                            height: 0,
                                            innerWidth: 0,
                                            innerHeight: 0,
                                            outerWidth: 0,
                                            outerHeight: 0
                                        }, t = 0; t < r; t++) {
                                        var i = n[t];
                                        e[i] = 0
                                    }
                                    return e
                                }();
                                var l = {};
                                l.width = t.offsetWidth, l.height = t.offsetHeight;
                                for (var u = l.isBorderBox = "border-box" == c.boxSizing, d = 0; d < r; d++) {
                                    var p = n[d],
                                        m = c[p],
                                        h = parseFloat(m);
                                    l[p] = isNaN(h) ? 0 : h
                                }
                                var f = l.paddingLeft + l.paddingRight,
                                    y = l.paddingTop + l.paddingBottom,
                                    g = l.marginLeft + l.marginRight,
                                    b = l.marginTop + l.marginBottom,
                                    v = l.borderLeftWidth + l.borderRightWidth,
                                    E = l.borderTopWidth + l.borderBottomWidth,
                                    C = u && a,
                                    k = e(c.width);
                                !1 !== k && (l.width = k + (C ? 0 : f + v));
                                var P = e(c.height);
                                return !1 !== P && (l.height = P + (C ? 0 : y + E)), l.innerWidth = l.width - (f + v), l.innerHeight = l.height - (y + E), l.outerWidth = l.width + g, l.outerHeight = l.height + b, l
                            }
                        }
                        return s
                    }()
                }.call(t, n, t, e)) || (e.exports = r)
            }(window)
        },
        QV0B: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("Ue10"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            collapsed: !0
                        }, t.toggleCollapsed = function() {
                            t.setState(function(e) {
                                return {
                                    collapsed: !e.collapsed
                                }
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.collapsable ? i.createElement(i.Fragment, null, i.createElement(a.Ya, {
                            display: this.state.collapsed ? a.X.Hide : a.X.Block,
                            breakpointLarge: {
                                display: a.X.Block
                            }
                        }, i.createElement(a.H, null, this.props.children)), i.createElement(a.Ya, {
                            display: a.X.Block,
                            breakpointLarge: {
                                display: a.X.Hide
                            }
                        }, i.createElement(a.Va, {
                            onClick: this.toggleCollapsed,
                            hover: !1,
                            type: a.Wa.Alpha
                        }, i.createElement(a.Ya, {
                            fullWidth: !0,
                            textAlign: a.Sb.Center,
                            alignItems: a.f.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(a.W, {
                            type: a.Wb.Span,
                            color: a.O.Link
                        }, this.state.collapsed ? this.props.showButtonLabel : this.props.hideButtonLabel))))) : i.createElement(a.H, null, this.props.children)
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        QxOQ: function(e, t, n) {},
        "R9u/": function(e, t, n) {},
        Rsna: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ChannelPanelsOrderPanels"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderPanelsInput"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "orderPanels"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "panels"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "DefaultPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "title"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "imageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "linkURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "description"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ExtensionPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "slotID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 206
                }
            };
            n.loc.source = {
                body: "mutation ChannelPanelsOrderPanels($input: OrderPanelsInput!) {\norderPanels(input: $input) {\npanels {\nid\ntype\n... on DefaultPanel {\ntitle\nimageURL\nlinkURL\ndescription\n}\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SPyc: function(e, t, n) {
            e.exports = n.p + "assets/discover-d67f6b00db816208999c.svg"
        },
        Sa1T: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = {};

                function n(n) {
                    var r = e.get(n);
                    return void 0 === r ? [] : t[r] || []
                }
                return {
                    get: n,
                    add: function(n, r) {
                        var i = e.get(n);
                        t[i] || (t[i] = []), t[i].push(r)
                    },
                    removeListener: function(e, t) {
                        for (var r = n(e), i = 0, a = r.length; i < a; ++i)
                            if (r[i] === t) {
                                r.splice(i, 1);
                                break
                            }
                    },
                    removeAllListeners: function(e) {
                        var t = n(e);
                        t && (t.length = 0)
                    }
                }
            }
        },
        T3lN: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CheckoutPayments"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "productName"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "includePromotion"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isAnonymous"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isGift"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recipientID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "mysteryGiftCount"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "taxCountry"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "residence"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "countryCode"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "postalCode"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "subscriptionProduct"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priceInfo"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "taxCountry"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "taxCountry"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "currency"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "exponent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isTaxInclusive"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tax"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "total"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "interval"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unit"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tier"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "owner"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "displayName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "login"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "checkoutConfigs"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "isAnonymous"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isAnonymous"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "isGift"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isGift"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "recipientID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "recipientID"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "mysteryGiftCount"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "mysteryGiftCount"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "taxCountryCode"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "taxCountry"
                                                    }
                                                }
                                            }],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canGift"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canPurchase"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isOneMonthFreeEligible"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paymentProviderConfigs"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "xsolla"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "iframeURL"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "recurly"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "payWithAmazonConfigs"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "clientID"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "isProduction"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "sellerID"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "publicKey"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "braintreeClientAuthorization"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "zuora"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "externalAccountID"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "token"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "tenantID"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "publicKey"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "signature"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "hostedPageID"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "hostedPageURL"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "externalAccountID"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "purchase"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "details"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "paymentProvider"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "currency"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "divisor"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "state"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "productType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "productTier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "compatiblePurchases"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "paymentProvider"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "currency"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "state"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "productType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "productTier"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "divisor"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "benefit"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgrade"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "endsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "purchasedWithPrime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "promotion"
                                            },
                                            arguments: [],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "include"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "includePromotion"
                                                        }
                                                    }
                                                }]
                                            }],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountValue"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "oldPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "paidUpgradePromotion"
                                            },
                                            arguments: [],
                                            directives: [{
                                                kind: "Directive",
                                                name: {
                                                    kind: "Name",
                                                    value: "include"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "if"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "includePromotion"
                                                        }
                                                    }
                                                }]
                                            }],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "oldPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountValue"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 1418
                }
            };
            n.loc.source = {
                body: "query CheckoutPayments($productName: String! $includePromotion: Boolean! $isAnonymous: Boolean $isGift: Boolean! $recipientID: ID $mysteryGiftCount: Int $taxCountry: String) {\ncurrentUser {\nid\ndisplayName\nresidence {\ncountryCode\npostalCode\n}\n}\nsubscriptionProduct(productName: $productName) {\nid\nname\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\ntier\ntype\nowner {\nid\ndisplayName\nlogin\n}\nself {\ncheckoutConfigs (isAnonymous: $isAnonymous isGift: $isGift recipientID: $recipientID mysteryGiftCount: $mysteryGiftCount taxCountryCode: $taxCountry) {\ncanGift\ncanPurchase\nisOneMonthFreeEligible\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\ndivisor\nstate\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\nproductType\nproductTier\ndivisor\n}\n}\nbenefit {\nid\ntier\npaidUpgrade {\nstartsAt\n}\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion @include(if: $includePromotion) {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\npaidUpgradePromotion @include(if: $includePromotion) {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        TEvY: function(e, t, n) {},
        TQGo: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("NAv5"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = n("5gJ6"),
                l = (n("KjOM"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(s.Fb, {
                            className: this.isExpired ? "payment-method-display--expired" : "",
                            display: s.X.Flex,
                            justifyContent: this.props.justifyContent || s.Xa.Between,
                            flexWrap: s.Ba.Wrap,
                            fullWidth: !0
                        }, a.createElement(s.Ya, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(c.a, {
                            paymentInstrumentType: this.props.paymentType,
                            cardType: this.props.cardType || void 0,
                            paymentProvider: this.props.provider
                        }), this.renderLastFour()), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            flexDirection: s.Aa.Column
                        }, this.renderBillingEmail(), this.renderExpirationDate()))
                    }, t.prototype.renderLastFour = function() {
                        return this.props.lastFour ? a.createElement(s.Ya, {
                            display: s.X.Flex,
                            margin: {
                                x: 2
                            }
                        }, a.createElement(s.W, {
                            bold: !0
                        }, Object(o.d)("Ending in {lastFour}", {
                            lastFour: this.props.lastFour
                        }, "PaymentMethodDisplay"))) : null
                    }, t.prototype.renderExpirationDate = function() {
                        var e = this.zeroIndexedMonth,
                            t = this.props.expirationYear;
                        if (void 0 === e || !t) return null;
                        var n = new Date(t, e),
                            r = "";
                        return r = this.isExpired ? Object(o.d)("Expired {expirationDate}", {
                            expirationDate: Object(o.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay") : Object(o.d)("Expires {expirationDate}", {
                            expirationDate: Object(o.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay"), a.createElement(s.Ya, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Xa.End
                        }, a.createElement(s.W, {
                            ellipsis: !0,
                            color: s.O.Alt2,
                            bold: this.isExpired
                        }, r))
                    }, t.prototype.renderBillingEmail = function() {
                        return this.props.billingEmail ? a.createElement(s.Ya, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Xa.End
                        }, a.createElement(s.W, {
                            ellipsis: !0,
                            color: s.O.Alt2
                        }, this.props.billingEmail)) : null
                    }, Object.defineProperty(t.prototype, "isExpired", {
                        get: function() {
                            var e = this.zeroIndexedMonth,
                                t = this.props.expirationYear;
                            if (void 0 === e || !t) return !1;
                            var n = Object(i.startOfMonth)(new Date),
                                r = new Date(t, e, 1);
                            return !!Object(i.isBefore)(r, n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "zeroIndexedMonth", {
                        get: function() {
                            if (this.props.expirationMonth) return this.props.expirationMonth - 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.PureComponent))
        },
        TSpM: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_2x-2eccd73373faaefa6764.png"
        },
        TVJu: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("/MKj"),
                a = n("fvjX"),
                o = n("1/iK"),
                s = n("aCAx"),
                c = n("y5D0"),
                l = n("kRBY"),
                u = n("/HY+"),
                d = n("TSYQ"),
                p = n("1hWM"),
                m = n("q1tI"),
                h = n("oJmH"),
                f = n("/7QA"),
                y = n("eJ65"),
                g = n("edgk"),
                b = n("DMoW"),
                v = n("2xye"),
                E = n("3CMh"),
                C = n("0Log"),
                k = n("geRD"),
                P = n("/aPz"),
                S = n("H31v");

            function x(e, t, n) {
                Object(k.e)(e, void 0, function(e) {
                    return e ? (e.currentUser && e.currentUser.bitsBalance && (e.currentUser.bitsBalance = n), e) : e
                }, function() {
                    return !t
                })
            }
            var O, I = n("4h+t"),
                w = n("BaCc"),
                _ = n("Ue10"),
                N = "test_selector_legal_disclaimer",
                T = "test_selector_confirm_button",
                D = "test_selector_buy_bits_button",
                F = "test_selector_cancel_button",
                j = function(e) {
                    var t = Object(I.a)(),
                        n = Object(f.d)("Confirm", "BitsConfrimationDialogue"),
                        r = Object(f.d)("Settings", "BitsConfrimationDialogue"),
                        i = m.createElement(_.U, {
                            to: "https://www.twitch.tv/settings/connections"
                        }, r),
                        a = m.createElement(_.Qa, {
                            display: _.X.InlineFlex,
                            alignContent: _.e.Center,
                            alignItems: _.f.Center,
                            margin: {
                                left: .5
                            }
                        }, m.createElement("span", null, m.createElement(E.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: t,
                            size: E.b.ExtremelySmall,
                            display: _.X.InlineFlex,
                            amount: e.newBalance,
                            alignItems: _.f.Center,
                            formattedNumber: !0
                        }))),
                        o = Object(f.d)("After confirming, your Bits balance will be {newBalance}", {
                            newBalance: a
                        }, "BitsConfrimationDialogue"),
                        s = Object(f.d)('By clicking "{ConfirmText}," you agree to share your Twitch ID with {ExtensionName}. You can manage account connections under {Settings}.', {
                            ConfirmText: n,
                            ExtensionName: e.extensionName,
                            Settings: i
                        }, "BitsConfrimationDialogue");
                    return m.createElement(_.Ya, {
                        className: "bits-confirmation-dialog"
                    }, m.createElement(_.Ya, {
                        padding: 1
                    }, m.createElement(_.Ya, {
                        margin: {
                            bottom: 1
                        },
                        display: _.X.Flex,
                        justifyContent: _.Xa.Between
                    }, m.createElement(_.Ya, null, m.createElement(_.W, {
                        fontSize: _.Ca.Size5,
                        bold: !0
                    }, e.extensionItemLabel), m.createElement(_.W, null, e.extensionName)), m.createElement("span", null, m.createElement(E.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: t,
                        size: E.b.ExtraSmall,
                        display: _.X.InlineFlex,
                        amount: e.cost,
                        alignItems: _.f.Center
                    }))), m.createElement(_.Ya, {
                        display: _.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(_.Qa, {
                        display: _.X.Flex
                    }, m.createElement(_.W, null, o))), m.createElement(_.Ya, {
                        display: _.X.Inline
                    }, m.createElement(_.Ya, {
                        display: _.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": T,
                        onClick: function() {
                            e.onConfirm().then(function(t) {
                                "number" == typeof t && Number.isInteger(t) && x(w, e.userID, t)
                            }), x(w, e.userID, e.newBalance)
                        }
                    }, n)), m.createElement(_.Ya, {
                        display: _.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": D,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: _.F.Hollow
                    }, e.buyBitsText)), m.createElement(_.Ya, {
                        display: _.X.InlineBlock
                    }, m.createElement(_.z, {
                        "data-test-selector": F,
                        onClick: e.onClose,
                        type: _.F.Hollow
                    }, e.cancelText)))), m.createElement(_.Fb, {
                        borderTop: !0,
                        padding: 1
                    }, m.createElement(_.W, {
                        "data-test-selector": N
                    }, s)))
                },
                R = "test_selector_buy_bits_button",
                A = "test_selector_cancel_button",
                M = Object(I.a)(),
                L = function(e) {
                    var t, n = e.bitsBalance - e.cost,
                        r = Math.abs(n),
                        i = m.createElement(_.Qa, {
                            display: _.X.InlineFlex,
                            margin: {
                                x: .5
                            }
                        }, m.createElement("span", null, m.createElement(E.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: M,
                            size: E.b.ExtremelySmall,
                            display: _.X.InlineFlex,
                            amount: r,
                            alignItems: _.f.Center,
                            formattedNumber: !0
                        })));
                    return t = m.createElement(_.Qa, {
                        display: _.X.Flex
                    }, m.createElement(_.W, null, Object(f.d)("You need {BitsRequired} more Bits to proceed.", {
                        BitsRequired: i
                    }, "BitsUpsellDialog"))), m.createElement(_.Ya, {
                        className: "bits-upsell-dialog",
                        padding: 1
                    }, m.createElement(_.Ya, {
                        margin: {
                            bottom: 1
                        },
                        display: _.X.Flex,
                        justifyContent: _.Xa.Between
                    }, m.createElement(_.Ya, null, m.createElement(_.W, {
                        fontSize: _.Ca.Size5,
                        bold: !0
                    }, e.extensionItemLabel), m.createElement(_.W, null, e.extensionName)), m.createElement("span", null, m.createElement(E.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: M,
                        size: E.b.ExtraSmall,
                        display: _.X.InlineFlex,
                        amount: e.cost,
                        alignItems: _.f.Center
                    }))), m.createElement(_.Ya, {
                        display: _.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, t), m.createElement(_.Ya, {
                        display: _.X.Inline
                    }, m.createElement(_.Ya, {
                        display: _.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": R,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: _.F.Default
                    }, e.buyBitsText)), m.createElement(_.Ya, {
                        display: _.X.InlineBlock
                    }, m.createElement(_.z, {
                        "data-test-selector": A,
                        onClick: e.onClose,
                        type: _.F.Hollow
                    }, e.cancelText))))
                },
                B = function(e) {
                    var t = Object(f.d)("Buy Bits", "UseBitsDialog"),
                        n = Object(f.d)("Cancel", "UseBitsDialog"),
                        r = null;
                    if (e)
                        if (e.bitsBalance >= e.cost) {
                            var i = e.bitsBalance - e.cost;
                            r = m.createElement(j, {
                                cost: e.cost,
                                extensionName: e.extensionName,
                                extensionItemLabel: e.extensionItemLabel,
                                newBalance: i,
                                bitsBalance: e.bitsBalance,
                                bitsLandingPageUrl: "https://twitch.tv/bits",
                                buyBitsText: t,
                                cancelText: n,
                                onConfirm: e.onConfirm,
                                onClose: e.onClose,
                                userID: e.userID
                            })
                        } else r = m.createElement(L, {
                            cost: e.cost,
                            extensionName: e.extensionName,
                            extensionItemLabel: e.extensionItemLabel,
                            bitsBalance: e.bitsBalance,
                            bitsLandingPageUrl: "https://twitch.tv/bits",
                            buyBitsText: t,
                            cancelText: n,
                            onConfirm: e.onConfirm,
                            onClose: e.onClose
                        });
                    return m.createElement(_.Ya, {
                        className: "use-bits-dialog"
                    }, r)
                },
                U = "test_selectors_close_button",
                W = function(e) {
                    var t = Object(f.d)("Sorry, something went wrong. Please try again.", "UseBitsErrorDialog"),
                        n = Object(f.d)("Close", "UseBitsErrorDialog");
                    return m.createElement(_.Ya, {
                        className: "use-bits-error-dialog",
                        padding: 1
                    }, m.createElement(_.Qa, {
                        display: _.X.Flex,
                        alignContent: _.e.Center,
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(_.W, null, t)), m.createElement(_.z, {
                        "data-test-selector": U,
                        onClick: e.onClose
                    }, n))
                },
                z = n("5zC2"),
                G = n("22qk"),
                Y = n("5IFo"),
                H = n("JVUd"),
                q = n("0HeA"),
                X = n("yR8l"),
                V = n("eDVu"),
                Z = n("VeT4"),
                K = (n("NAeX"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || !this.props.data.currentUser) return null;
                        var e = this.props.showSuccessText ? m.createElement(_.W, {
                                type: _.Wb.Span,
                                className: "extension-bits-balance-success"
                            }, Object(f.d)("Success!", "ExtensionPanelBitsBalanceDialog")) : null,
                            t = m.createElement(Z.a, {
                                withImage: !0,
                                withText: !0,
                                animated: !1,
                                count: this.props.data.currentUser.bitsBalance || 0,
                                bitsConfig: Object(I.a)()
                            });
                        return m.createElement(_.Ya, {
                            margin: {
                                top: 0,
                                right: 1,
                                bottom: .5,
                                left: 1
                            }
                        }, e, Object(f.d)("Bits Balance: {bitsComponent}", {
                            bitsComponent: t
                        }, "ExtensionPanelBitsBalanceDialog"))
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t
                }(m.Component)),
                Q = Object(h.compose)(Object(V.a)(function(e) {
                    return function(e, t, n) {
                        return {
                            topic: n ? Object(P.E)(n) : "",
                            type: C.PubsubMessageType.UserBitsBalanceUpdate,
                            mutator: function(e, t) {
                                return t && e.message_type === S.b.Balance ? (t.currentUser && e.data && (t.currentUser.bitsBalance = e.data.balance), t) : t
                            },
                            skip: !t || !n,
                            query: e
                        }
                    }(w, e.channelID, e.userID)
                }), Object(X.a)(w))(K);
            ! function(e) {
                e.ExtensionName = "extension_name_selector", e.ShowExtensionButton = "show_extension_button_selector"
            }(O || (O = {}));
            var J = function(e) {
                var t = e.extension.views.panel ? e.extension.views.panel.height : 300;
                return m.createElement(_.Ra, {
                    alignItems: _.f.Center,
                    background: _.r.Alt2,
                    borderLeft: !0,
                    borderTop: !0,
                    borderRight: !0,
                    display: _.X.Flex,
                    flexDirection: _.Aa.Column,
                    fullWidth: !0,
                    justifyContent: _.Xa.Center,
                    color: _.O.Base,
                    position: _.kb.Relative
                }, m.createElement("div", {
                    style: {
                        height: t
                    }
                }, m.createElement("img", {
                    src: e.extension.iconUrl
                }), m.createElement(_.Ya, {
                    margin: 1,
                    textAlign: _.Sb.Center
                }, m.createElement(_.W, {
                    fontSize: _.Ca.Size5
                }, Object(f.d)("{name} is popped out.", {
                    name: m.createElement(_.W, {
                        "data-test-selector": O.ExtensionName,
                        type: _.Wb.Span,
                        bold: !0
                    }, e.extension.name)
                }, "ExtensionPopoutPlaceholder"))), m.createElement(_.z, {
                    "data-test-selector": O.ShowExtensionButton,
                    onClick: e.onExtensionShowClicked
                }, Object(f.d)("Show Extension", "ExtensionPopoutPlaceholder"))))
            };
            J.displayName = "ExtensionPopoutPlaceholder";
            var $, ee = function(e) {
                    return m.createElement(_.Ya, {
                        padding: 1
                    }, m.createElement(_.Ya, null, m.createElement("span", null, Object(f.d)("You must be logged in to use this extension feature.", "FeatureNeedsAuthDialog")), m.createElement(_.Fb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Ya, {
                        display: _.X.Flex,
                        justifyContent: _.Xa.Start
                    }, m.createElement(_.z, {
                        "data-test-selector": "qa-needs-auth-close-selector",
                        type: _.F.Hollow,
                        onClick: e.close
                    }, Object(f.d)("Close", "FeatureNeedsAuthDialog")))))
                },
                te = function(e) {
                    var t = function(t) {
                        return m.createElement(_.Ya, null, m.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, t), m.createElement(_.Fb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start
                        }, m.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Close", "FollowDialog"))))
                    };
                    if (null === e.currentFollowRequest.options.channel) return m.createElement(_.Ya, {
                        padding: 1
                    }, t(Object(f.d)("The channel you are attempting to follow does not exist.", "FollowDialog")));
                    var n = Object(f.d)("You are about to follow {name}.", {
                            name: m.createElement(_.W, {
                                type: _.Wb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        r = Object(f.d)("Receive updates on {name}'s activity, including when they go live and upload videos or clips, on mobile, email, and web.", {
                            name: e.currentFollowRequest.options.channel
                        }, "FollowDialog"),
                        i = m.createElement(_.Ya, null, m.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, n), m.createElement(_.Fb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start
                        }, m.createElement(_.Ya, {
                            margin: {
                                right: 1
                            }
                        }, m.createElement(_.z, {
                            type: _.F.Default,
                            "data-test-selector": "toggle_follow_button_selector",
                            onClick: e.confirmFollow
                        }, Object(f.d)("Follow", "FollowDialog"))), m.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Cancel", "FollowDialog"))), m.createElement(_.Fb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start
                        }, m.createElement(_.Ya, {
                            flexGrow: 1
                        }, m.createElement(_.W, {
                            type: _.Wb.Span,
                            fontSize: _.Ca.Size5
                        }, Object(f.d)("Notifications", "FollowDialog"))), m.createElement(_.Yb, {
                            id: "ext-follow-notification",
                            checked: e.currentFollowRequest.notifications,
                            onChange: e.onNotificationsChanged
                        })), m.createElement(_.W, {
                            type: _.Wb.Span,
                            color: _.O.Alt2,
                            fontSize: _.Ca.Size7
                        }, r)),
                        a = Object(f.d)("You are already following {name}.", {
                            name: m.createElement(_.W, {
                                type: _.Wb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        o = e.currentFollowRequest.options.isFollowing ? t(a) : i;
                    return m.createElement(_.Ya, {
                        padding: 1
                    }, o)
                };
            ! function(e) {
                e.ManagePermissionsLink = "manage_permissions_link_selector", e.ToggleIdentityBalloon = "toggle_identity_balloon_selector", e.ToggleIdentityButton = "toggle_identity_button_selector"
            }($ || ($ = {}));
            var ne, re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGrantPermissionsButton = function() {
                        var e = Object(f.d)("Grant Permissions", "ExtensionPanel");
                        return m.createElement(_.Zb, {
                            label: e,
                            direction: _.bc.Top,
                            align: _.ac.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            ariaLabel: e,
                            icon: _.ub.PermissionsAdd
                        })))
                    }, t.renderRevokePermissionsButton = function() {
                        var e = Object(f.d)("Revoke Permissions", "ExtensionPanel");
                        return m.createElement(_.Zb, {
                            label: e,
                            direction: _.bc.Top,
                            align: _.ac.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            ariaLabel: e,
                            icon: _.ub.PermissionsAdded,
                            statusAlertIcon: _.ub.PermissionsRemove
                        })))
                    }, t.saveGrantPermissionsBalloonRef = function(e) {
                        t.grantPermissionsBalloon = e
                    }, t.onCancelIdentityLink = function() {
                        t.grantPermissionsBalloon.toggleBalloon(!1)
                    }, t.toggleIdentity = function() {
                        t.props.isLinked ? t.props.onUnlinkIdentity && t.props.onUnlinkIdentity() : t.props.onLinkIdentity && t.props.onLinkIdentity(), t.grantPermissionsBalloon.toggleBalloon(!1)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.grantPermissionsBalloon && this.grantPermissionsBalloon.toggleBalloon(this.props.isDialogOpen)
                }, t.prototype.componentDidUpdate = function(e) {
                    e.isDialogOpen !== this.props.isDialogOpen && this.grantPermissionsBalloon && this.grantPermissionsBalloon.toggleBalloon(this.props.isDialogOpen)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.isLinked;
                    if (!e.isLinkEnabled) return null;
                    var n = t ? this.renderRevokePermissionsButton() : this.renderGrantPermissionsButton(),
                        r = Object(f.d)("You are granting {name} the following access:", {
                            name: m.createElement(_.W, {
                                type: _.Wb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel"),
                        i = Object(f.d)("You are revoking the following access for {name}:", {
                            name: m.createElement(_.W, {
                                type: _.Wb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel");
                    return m.createElement(y.a, {
                        display: _.X.InlineFlex,
                        ref: this.saveGrantPermissionsBalloonRef,
                        onToggle: this.props.onDialogToggle
                    }, m.createElement("span", {
                        "data-test-selector": $.ToggleIdentityBalloon
                    }, n), m.createElement(_.u, {
                        direction: _.v.TopRight,
                        size: _.w.Small
                    }, m.createElement(_.Ya, {
                        padding: 1
                    }, m.createElement(_.Ya, null, t ? i : r), m.createElement(_.Fb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Ya, null, m.createElement(_.W, {
                        type: _.Wb.P,
                        bold: !0
                    }, Object(f.d)("Your Twitch User ID", "Extension Panel")), m.createElement(_.W, {
                        type: _.Wb.P
                    }, Object(f.d)("Allows this extension to know your User ID on Twitch.", "Extension Panel")), m.createElement("a", {
                        "data-test-selector": $.ManagePermissionsLink,
                        href: "https://twitch.tv/settings/connections",
                        target: "_blank"
                    }, Object(f.d)("Manage Permissions", "Extension Panel"))), m.createElement(_.Fb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Ya, {
                        display: _.X.Flex,
                        justifyContent: _.Xa.Center
                    }, m.createElement(_.Ya, {
                        margin: {
                            right: 1
                        }
                    }, m.createElement(_.z, {
                        type: _.F.Hollow,
                        onClick: this.onCancelIdentityLink
                    }, Object(f.d)("Cancel", "Extension Panel"))), m.createElement(_.z, {
                        type: t ? _.F.Alert : _.F.Default,
                        "data-test-selector": $.ToggleIdentityButton,
                        onClick: this.toggleIdentity
                    }, t ? Object(f.d)("Revoke", "Extension Panel") : Object(f.d)("Grant", "Extension Panel"))))))
                }, t
            }(m.Component);
            (ne || (ne = {})).PopoutButton = "popout_button_selector";
            var ie, ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(f.d)("Pop Out Extension", "PopoutButton");
                        return m.createElement("span", null, m.createElement(_.Zb, {
                            label: e,
                            direction: _.bc.Top,
                            align: _.ac.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            "data-test-selector": ne.PopoutButton,
                            onClick: this.onClick,
                            ariaLabel: e,
                            icon: _.ub.Popout
                        }))))
                    }, t
                }(m.Component),
                oe = function(e) {
                    var t, n = e.cancel,
                        r = e.confirm,
                        i = e.isLoggedIn,
                        a = e.isLinked,
                        o = e.isLinkEnabled,
                        s = e.purchaseIntentPayload;
                    return t = i ? m.createElement(_.Ya, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, m.createElement(_.Ya, {
                        padding: {
                            bottom: 2
                        }
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size5,
                        bold: !0
                    }, Object(f.d)("In-Extension Purchase", "PurchaseConfirmation"))), m.createElement(_.Ya, null, m.createElement(_.Ja, {
                        gutterSize: _.Ka.Default
                    }, m.createElement(_.P, {
                        cols: {
                            default: 9
                        }
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size6,
                        bold: !0
                    }, s.title)), m.createElement(_.P, {
                        cols: {
                            default: 3
                        }
                    }, m.createElement(_.Ya, {
                        fullWidth: !0,
                        textAlign: _.Sb.Right
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size6,
                        bold: !0
                    }, s.displayPrice))))), m.createElement(_.Ya, {
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(_.W, {
                        color: _.O.Alt2
                    }, Object(f.d)("{name} extension", {
                        name: s.extensionName
                    }, "PurchaseConfirmation"))), m.createElement(_.Ya, {
                        fullWidth: !0
                    }, m.createElement(_.W, {
                        className: "t-extension-panel__description",
                        color: _.O.Alt2
                    }, s.description), m.createElement(_.Fb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Ya, null, m.createElement(_.Ja, {
                        gutterSize: _.Ka.Default
                    }, m.createElement(_.P, {
                        cols: {
                            default: 4
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": "purchase_ui_buy_selector",
                        onClick: r,
                        fullWidth: !0
                    }, Object(f.d)("Buy", "PurchaseConfirmation"))), m.createElement(_.P, {
                        cols: {
                            default: 3
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: _.F.Hollow
                    }, Object(f.d)("Cancel", "PurchaseConfirmation")))), !a && m.createElement(_.Ya, null, m.createElement(_.Fb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.W, {
                        fontSize: _.Ca.Size8,
                        color: _.O.Alt2
                    }, Object(f.d)('By clicking "Buy", you agree to share your Twitch ID with {name}. You can manage account connections under', {
                        name: s.extensionName
                    }, "PurchaseConfirmation"), " ", m.createElement("a", {
                        href: "/settings/connections"
                    }, Object(f.d)("Settings", "PurchaseConfirmation")), "."))))) : m.createElement(_.Ya, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, m.createElement(_.Ya, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size5
                    }, Object(f.d)("You must be logged in to use this extension feature.", "PurchaseConfirmation"))), m.createElement(_.Fb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: _.F.Hollow
                    }, Object(f.d)("Close", "PurchaseConfirmation"))), m.createElement(_.u, {
                        direction: _.v.TopRight,
                        "data-test-selector": "purchase_ui_selector",
                        noTail: !o,
                        offsetX: "10px",
                        offsetY: "-2px",
                        tailOffset: 33,
                        show: !0,
                        size: _.w.Medium
                    }, m.createElement("button", {
                        className: "t-extension-panel__close t-extension-panel__top-controls",
                        onClick: n
                    }, m.createElement(_.tb, {
                        asset: _.ub.Close,
                        height: 11,
                        width: 11
                    })), m.createElement(_.Ya, {
                        display: _.X.Flex,
                        flexGrow: 1,
                        flexDirection: _.Aa.Column,
                        justifyContent: _.Xa.Center,
                        alignItems: _.f.Center
                    }, t))
                };
            (ie || (ie = {})).RestoreDefaultSizeButton = "restore-default-size-button";
            var se, ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRestoreDefaultSizeVisible: !1
                    }, t.defaultPopoutWidth = window.outerWidth, t.defaultPopoutHeight = window.outerHeight, t.onClick = function() {
                        window.resizeTo(t.defaultPopoutWidth, t.defaultPopoutHeight)
                    }, t.onWindowResize = function() {
                        var e = window.outerWidth,
                            n = window.outerHeight,
                            r = e !== t.defaultPopoutWidth || n !== t.defaultPopoutHeight;
                        t.setState({
                            isRestoreDefaultSizeVisible: r
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize)
                }, t.prototype.render = function() {
                    if (!this.props.isPopout || !this.state.isRestoreDefaultSizeVisible) return null;
                    var e = Object(f.d)("Resize to Default", "RestoreDefaultSizeButton");
                    return m.createElement("span", null, m.createElement(_.Zb, {
                        label: e,
                        direction: _.bc.Top,
                        align: _.ac.Right,
                        offsetX: ".6rem"
                    }, m.createElement(_.Ya, {
                        display: _.X.Flex,
                        alignItems: _.f.Center
                    }, m.createElement(_.A, {
                        "data-test-selector": ie.RestoreDefaultSizeButton,
                        onClick: this.onClick,
                        ariaLabel: e,
                        icon: _.ub.FullscreenExit
                    }))))
                }, t
            }(m.Component);
            ! function(e) {
                e.AcceptButton = "accept-button", e.DeclineButton = "decline-button", e.DeclinedMessage = "declined-message", e.WarningMessage = "warning-message"
            }(se || (se = {}));
            var le, ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        declined: !1
                    }, t.onDeclined = function() {
                        t.setState({
                            declined: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return e = this.state.declined ? m.createElement(m.Fragment, null, m.createElement(_.W, {
                        type: _.Wb.P,
                        "data-test-selector": se.DeclinedMessage
                    }, Object(f.d)("You’ve declined to use this test extension. To use it, please refresh this page and select accept.", "TestExtensionDialog")), m.createElement(_.Ya, {
                        padding: {
                            top: 2
                        },
                        display: _.X.Flex,
                        justifyContent: _.Xa.Center
                    }, m.createElement(_.z, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        type: _.F.Hollow
                    }, Object(f.d)("Learn More", "TestExtensionDialog")))) : m.createElement(m.Fragment, null, m.createElement(_.W, {
                        type: _.Wb.P,
                        "data-test-selector": se.WarningMessage
                    }, Object(f.d)("This is a Test Extension that Twitch has not evaluated; it may not be ready for primetime. Proceed only if you are familiar with the developer, the Extension, or Channel.", "TestExtensionDialog"), m.createElement(_.Qa, {
                        padding: {
                            left: .5
                        }
                    }, m.createElement(_.U, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                    }, Object(f.d)("Learn More.", "TestExtensionDialog")))), m.createElement(_.Ya, {
                        padding: {
                            top: 2
                        },
                        display: _.X.Flex,
                        justifyContent: _.Xa.Center
                    }, m.createElement(_.z, {
                        onClick: this.onDeclined,
                        type: _.F.Hollow,
                        "data-test-selector": se.DeclineButton
                    }, Object(f.d)("Decline", "TestExtensionDialog")), m.createElement(_.Ya, {
                        padding: {
                            left: 1
                        }
                    }, m.createElement(_.z, {
                        onClick: this.props.onAccepted,
                        "data-test-selector": se.AcceptButton
                    }, Object(f.d)("Accept", "TestExtensionDialog"))))), m.createElement(_.o, {
                        ratio: _.p.Aspect3x4
                    }, m.createElement(_.Fb, {
                        alignItems: _.f.Center,
                        border: !0,
                        display: _.X.Flex,
                        justifyContent: _.Xa.Center,
                        padding: 2
                    }, m.createElement(_.Ya, null, m.createElement(_.W, {
                        type: _.Wb.Strong
                    }, this.props.extensionName), e)))
                }, t
            }(m.Component);
            n("bVvr");
            ! function(e) {
                e.ExtensionDescriptionButton = "extension_description_button_selector", e.ExtensionReportButton = "extension_report_button_selector", e.ExtensionPanel = "extension_panel_selector", e.ExtensionDetailsLink = "extension_details_link_selector", e.ToggleFollowButton = "toggle_follow_button_selector", e.ConfirmationMessage = "confirmation_message_selector", e.PopoutButton = "popout_button_selector", e.UseBitsConfirmationToggleBalloonWrapper = "confirmation_message_selector"
            }(le || (le = {}));
            var de = 3e3,
                pe = 32,
                me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            bitsBalance: null,
                            currentFollowRequest: null,
                            currentUseBitsRequest: null,
                            isIdentityLinkOpen: !1,
                            isLinked: !1,
                            isLinkEnabled: !1,
                            popoutRestoreIntentTracked: !1,
                            purchaseIntent: null,
                            testExtensionAccepted: !1
                        }, t.renderExtensionFrame = function() {
                            var e, n = d("extension-panel-extension-frame", ((e = {})["extension-panel-extension-frame__popout"] = t.props.isPopout, e));
                            return t.extension.state === p.ExtensionState.Released || t.state.testExtensionAccepted ? m.createElement(_.Ya, null, m.createElement(_.Fb, {
                                borderTop: !0,
                                borderRight: !0,
                                borderLeft: !0
                            }, m.createElement(z.a, {
                                channelID: t.props.channelID,
                                channelLogin: t.props.channelName,
                                className: n,
                                extensionMode: t.props.mode,
                                installation: t.props.installation,
                                languageCode: t.props.languageCode,
                                locale: t.props.locale,
                                login: t.props.login,
                                loginID: t.props.loginID,
                                isPopout: t.props.isPopout,
                                onBeginPurchase: t.onBeginPurchase,
                                saveExtensionAPI: t.saveExtensionAPI
                            })), m.createElement(_.Ya, {
                                position: _.kb.Relative,
                                fullWidth: !0
                            }, t.purchaseUI())) : m.createElement(ue, {
                                extensionName: t.extension.name,
                                onAccepted: t.onTestExtensionAccepted
                            })
                        }, t.renderFollowConfirmation = function() {
                            return null === t.state.currentFollowRequest ? null : m.createElement(y.a, {
                                ref: t.saveFollowConfirmationBalloonRef
                            }, m.createElement("span", null), m.createElement(_.u, {
                                direction: _.v.TopRight,
                                size: _.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, m.createElement(te, {
                                currentFollowRequest: t.state.currentFollowRequest,
                                confirmFollow: t.confirmFollow,
                                onNotificationsChanged: t.onNotificationsChanged,
                                cancelFollow: t.cancelFollow
                            })))
                        }, t.renderFeatureNeedsAuthBalloon = function() {
                            return m.createElement(y.a, {
                                ref: t.saveFeatureNeedsAuthBalloonRef
                            }, m.createElement("span", null), m.createElement(_.u, {
                                direction: _.v.TopRight,
                                size: _.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, m.createElement(ee, {
                                close: t.dismissLoginPrompt
                            })))
                        }, t.renderUseBitsConfirmation = function() {
                            if (!t.state.currentUseBitsRequest || !t.state.currentUseBitsRequest.options) return null;
                            var e = null;
                            if (t.state.currentUseBitsRequest.options.error) e = m.createElement(W, {
                                error: t.state.currentUseBitsRequest.options.error,
                                onClose: t.cancelUseBits
                            });
                            else if (t.state.currentUseBitsRequest.options.payload) {
                                var n = t.state.currentUseBitsRequest.options.payload,
                                    r = n.bitsBalance,
                                    i = n.extensionItemLabel,
                                    a = n.extensionName,
                                    o = t.state.currentUseBitsRequest.options.payload.bitsRequired;
                                void 0 === o && (o = 0), e = m.createElement(B, {
                                    bitsBalance: r,
                                    cost: o,
                                    extensionItemLabel: i,
                                    extensionName: a,
                                    userID: t.props.loginID,
                                    onClose: t.cancelUseBits,
                                    onConfirm: t.confirmUseBits
                                })
                            }
                            return m.createElement(y.a, {
                                "data-test-selector": le.UseBitsConfirmationToggleBalloonWrapper,
                                ref: t.saveUseBitsConfirmationBalloonRef,
                                onToggle: t.onToggleUseBitsConfirmationBalloon
                            }, m.createElement("span", null), m.createElement(_.u, {
                                direction: _.v.TopRight,
                                size: _.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, e))
                        }, t.onTestExtensionAccepted = function() {
                            t.setState({
                                testExtensionAccepted: !0
                            })
                        }, t.getCurrentMedium = function() {
                            if (t.props.isPopout) return v.PageviewMedium.ExtensionPage;
                            switch (t.props.mode) {
                                case p.ExtensionMode.Dashboard:
                                    return v.PageviewMedium.DashboardLive;
                                case p.ExtensionMode.Config:
                                    return v.PageviewMedium.ExtensionConfiguration;
                                case p.ExtensionMode.Viewer:
                            }
                            return v.PageviewMedium.Channel
                        }, t.subscribeFrameEvents = function() {
                            t.extensionFrameAPI && (t.extensionFrameAPI.on(p.ExtensionFrameEvents.ShowBitsBalance, t.onShowBitsBalance), t.extensionFrameAPI.on(p.ExtensionFrameEvents.ShowUseBitsSuccess, t.onShowUseBitsSuccess), t.extensionFrameAPI.on(p.ExtensionFrameEvents.IdentityLinked, t.onIdentityLinked), t.extensionFrameAPI.on(p.ExtensionFrameEvents.ExtensionFrameLoaded, t.onExtensionLoaded), t.extensionFrameAPI.on(p.ExtensionFrameEvents.RequestModal, t.onModalRequested))
                        }, t.unsubscribeFrameEvents = function() {
                            t.extensionFrameAPI && (t.extensionFrameAPI.off(p.ExtensionFrameEvents.ShowBitsBalance, t.onShowBitsBalance), t.extensionFrameAPI.off(p.ExtensionFrameEvents.ShowUseBitsSuccess, t.onShowUseBitsSuccess), t.extensionFrameAPI.off(p.ExtensionFrameEvents.IdentityLinked, t.onIdentityLinked), t.extensionFrameAPI.off(p.ExtensionFrameEvents.ExtensionFrameLoaded, t.onExtensionLoaded), t.extensionFrameAPI.off(p.ExtensionFrameEvents.RequestModal, t.onModalRequested))
                        }, t.getPopoutHeight = function() {
                            var e = 300;
                            return t.extension.views.panel && (e = t.extension.views.panel.height), e + pe
                        }, t.getExtensionPopoutUrl = function() {
                            var e = t.props.installation.activationConfig,
                                n = t.extension.clientId + "-" + t.extension.version;
                            t.extension.state === p.ExtensionState.Released && (n = t.extension.clientId);
                            var r = "/popout/" + t.props.channelName + "/extensions/" + n + "/" + e.anchor;
                            return t.props.mode !== p.ExtensionMode.Viewer && (r = r + "/" + t.props.mode), r
                        }, t.onExtensionPopoutClosed = function() {
                            if (!t.state.popoutRestoreIntentTracked) {
                                var e = t.props.installation.activationConfig;
                                Object(Y.f)({
                                    extensionID: t.extension.clientId,
                                    extensionVersion: t.extension.version,
                                    anchor: e.anchor,
                                    mode: t.props.mode,
                                    loginID: t.props.loginID,
                                    channelID: t.props.channelID
                                }), t.setState({
                                    popoutRestoreIntentTracked: !0
                                })
                            }
                            if (t.props.onExtensionPopoutClosed) {
                                var n = t.extension,
                                    r = n.id,
                                    i = n.version;
                                t.props.onExtensionPopoutClosed(r, i)
                            }
                        }, t.onExtensionPopout = function() {
                            var e = t.props.installation.activationConfig;
                            Object(Y.g)({
                                extensionID: t.extension.clientId,
                                extensionVersion: t.extension.version,
                                anchor: e.anchor,
                                mode: t.props.mode,
                                loginID: t.props.loginID,
                                channelID: t.props.channelID
                            });
                            var n = "width=320,height=" + t.getPopoutHeight() + ",resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no",
                                r = window.open(t.getExtensionPopoutUrl(), "_blank", n);
                            if (r && (t.onExtensionPopoutClosed && Object(g.a)(r, t.onExtensionPopoutClosed), r.opener = null), t.props.onExtensionPoppedOut) {
                                var i = t.extension,
                                    a = i.id,
                                    o = i.version;
                                t.props.onExtensionPoppedOut(a, o, r)
                            }
                        }, t.onFollowRequested = function(e, n, r) {
                            t.setState({
                                currentFollowRequest: {
                                    options: e,
                                    defaultResult: r,
                                    notifications: !0,
                                    onResult: n
                                }
                            }), t.followConfirmationBalloon.toggleBalloon(!0)
                        }, t.onLoginRequested = function(e, n) {
                            t.onDismissLoginPrompt = function() {
                                e && void 0 !== n && e(n), t.featureNeedsAuthBalloon.toggleBalloon(!1)
                            }, t.featureNeedsAuthBalloon.toggleBalloon(!0)
                        }, t.confirmFollow = function() {
                            null !== t.state.currentFollowRequest && (t.state.currentFollowRequest.onResult({
                                didFollow: !0,
                                notifications: t.state.currentFollowRequest.notifications
                            }), t.setState({
                                currentFollowRequest: null
                            }), t.followConfirmationBalloon.toggleBalloon(!1))
                        }, t.cancelFollow = function() {
                            if (null === t.state.currentFollowRequest) return null;
                            t.state.currentFollowRequest.onResult(t.state.currentFollowRequest.defaultResult), t.setState({
                                currentFollowRequest: null
                            })
                        }, t.onUseBitsRequested = function(e, n, r) {
                            t.setState({
                                currentUseBitsRequest: {
                                    options: e,
                                    defaultResult: r,
                                    onResult: n
                                }
                            }), t.useBitsConfirmationBalloon.toggleBalloon(!0)
                        }, t.confirmUseBits = function() {
                            if (null === t.state.currentUseBitsRequest) return Promise.reject("no Bits request");
                            var e = function() {
                                t.useBitsConfirmationBalloon.toggleBalloon(!1), t.setState({
                                    currentUseBitsRequest: null
                                })
                            };
                            return t.state.currentUseBitsRequest.onResult({
                                didConfirm: !0,
                                didUseBits: !0
                            }).then(function(t) {
                                return e(), t
                            }).catch(function() {
                                return e(), Promise.reject("error using bits in extension")
                            })
                        }, t.cancelUseBits = function() {
                            if (null === t.state.currentUseBitsRequest) return null;
                            t.state.currentUseBitsRequest.onResult(t.state.currentUseBitsRequest.defaultResult), t.setState({
                                currentUseBitsRequest: null
                            })
                        }, t.saveExtensionAPI = function(e) {
                            t.unsubscribeFrameEvents(), t.extensionFrameAPI = e, t.subscribeFrameEvents()
                        }, t.saveFollowConfirmationBalloonRef = function(e) {
                            t.followConfirmationBalloon = e
                        }, t.saveFeatureNeedsAuthBalloonRef = function(e) {
                            t.featureNeedsAuthBalloon = e
                        }, t.saveUseBitsConfirmationBalloonRef = function(e) {
                            t.useBitsConfirmationBalloon = e
                        }, t.onToggleUseBitsConfirmationBalloon = function(e) {
                            e && null !== t.state.currentUseBitsRequest && t.state.currentUseBitsRequest.onResult({
                                didConfirm: !1,
                                didUseBits: !1
                            })
                        }, t.onExtensionLoaded = function() {
                            t.props.onExtensionLoaded && t.props.onExtensionLoaded()
                        }, t.onIdentityLinked = function(e, n) {
                            t.setState({
                                isLinked: e,
                                isLinkEnabled: n
                            })
                        }, t.onLinkIdentity = function() {
                            t.extensionFrameAPI.linkIdentity()
                        }, t.onUnlinkIdentity = function() {
                            t.extensionFrameAPI.unlinkIdentity()
                        }, t.onIdentityLinkDialogToggle = function(e) {
                            t.setState({
                                isIdentityLinkOpen: !e
                            })
                        }, t.cancelPurchase = function() {
                            t.setState({
                                purchaseIntent: null
                            })
                        }, t.renderBitsBalanceUI = function() {
                            var e = t.state && t.state.bitsBalance;
                            if (null !== e) {
                                var n = e.showSuccessText;
                                return t.hideBitsBalanceTimeout && (clearTimeout(t.hideBitsBalanceTimeout), t.hideBitsBalanceTimeout = null, t.startHideBitsBalanceTimer()), m.createElement(Q, {
                                    showSuccessText: n,
                                    startTimer: t.startHideBitsBalanceTimer,
                                    channelID: t.props.channelID,
                                    userID: t.props.loginID
                                })
                            }
                        }, t.startHideBitsBalanceTimer = function() {
                            t.hideBitsBalanceTimeout || (t.hideBitsBalanceTimeout = setTimeout(t.hideBitsBalance, de))
                        }, t.hideBitsBalance = function() {
                            t.hideBitsBalanceTimeout = null, t.setState({
                                bitsBalance: null
                            })
                        }, t.onShowBitsBalance = function() {
                            t.setState({
                                bitsBalance: {
                                    showSuccessText: !1
                                }
                            })
                        }, t.onShowUseBitsSuccess = function() {
                            t.setState({
                                bitsBalance: {
                                    showSuccessText: !0
                                }
                            })
                        }, t.onBeginPurchase = function(e, n) {
                            t.setState({
                                purchaseIntent: {
                                    payload: e,
                                    makePurchase: n
                                }
                            })
                        }, t.onNotificationsChanged = function(e) {
                            var n = t.state.currentFollowRequest;
                            null !== n && t.setState({
                                currentFollowRequest: r.__assign({}, n, {
                                    notifications: e.currentTarget.checked
                                })
                            })
                        }, t.onModalRequested = function(e) {
                            switch (e.action) {
                                case p.FunctionAction.FollowAction:
                                    var n = e,
                                        r = n.options;
                                    t.onFollowRequested(r, n.resultCallback, n.defaultResult);
                                    break;
                                case p.FunctionAction.LoginRequest:
                                    t.featureNeedsAuthBalloon && t.onLoginRequested(e.resultCallback, e.defaultResult);
                                    break;
                                case p.FunctionAction.UseBits:
                                    var i = e,
                                        a = i.options;
                                    t.onUseBitsRequested(a, i.resultCallback, i.defaultResult);
                                    break;
                                case p.FunctionAction.IdShareRequest:
                                    t.setState({
                                        isIdentityLinkOpen: !0
                                    })
                            }
                        }, t.handleReportExtensionClick = function() {
                            var e = t.extension,
                                n = e.id,
                                r = e.version,
                                i = e.name;
                            t.props.isLoggedIn ? t.props.showReportExtensionModal({
                                reportContext: {
                                    contentType: b.O.EXTENSION_REPORT,
                                    contentID: n + "-" + r,
                                    targetUserID: t.props.channelID
                                },
                                title: Object(f.d)("Report {extensionName}", {
                                    extensionName: i
                                }, "ReportExtensionModal")
                            }) : t.props.promptLogin()
                        }, t.dismissLoginPrompt = function() {
                            t.onDismissLoginPrompt && t.onDismissLoginPrompt(), t.onDismissLoginPrompt = null
                        }, t.trackImpression = function() {
                            if (t.props.panel) {
                                var e = t.props.panel.id;
                                e && Object(q.a)(v.SpadeEventType.PanelImpression, {
                                    panelID: e,
                                    channelID: t.props.channelID,
                                    panelType: t.props.panel.type
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "extension", {
                        get: function() {
                            return this.props.installation.extension
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.componentDidMount = function() {
                        this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.componentDidUpdate = function(e) {
                        !1 === e.isFramePoppedOut && !0 === this.props.isFramePoppedOut && this.setState({
                            popoutRestoreIntentTracked: !1
                        })
                    }, t.prototype.render = function() {
                        var e, t = Object(f.d)("More Info", "ExtensionPanel"),
                            n = Object(f.d)("Report Extension", "ExtensionPanel"),
                            r = Object(G.d)(this.extension.id, this.extension.version) + "?tt_medium=" + this.getCurrentMedium() + "&tt_content=" + v.PageviewContent.ExtensionPanel,
                            i = d(this.props.className || "extension-panel", ((e = {})["extension-panel__popout"] = this.props.isPopout, e)),
                            a = this.props.isFramePoppedOut ? m.createElement(J, {
                                extension: this.extension,
                                onExtensionShowClicked: this.onExtensionPopoutClosed
                            }) : this.renderExtensionFrame();
                        return m.createElement(_.Ya, {
                            className: i,
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": le.ExtensionPanel
                        }, a, m.createElement(_.Fb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            flexDirection: _.Aa.Column,
                            display: _.X.Flex
                        }, m.createElement(_.Fb, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.Ya, {
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, m.createElement("a", {
                            href: r,
                            target: "_blank",
                            "data-test-selector": le.ExtensionDetailsLink
                        }, this.extension.name)), this.props.isFramePoppedOut || this.props.isPopout ? null : m.createElement(ae, {
                            "data-test-selector": le.PopoutButton,
                            onClick: this.onExtensionPopout
                        }), m.createElement(ce, {
                            isPopout: this.props.isPopout
                        }), m.createElement(re, {
                            extension: this.extension,
                            isDialogOpen: this.state.isIdentityLinkOpen,
                            onDialogToggle: this.onIdentityLinkDialogToggle,
                            isLinked: this.state.isLinked,
                            isLinkEnabled: this.state.isLinkEnabled,
                            onLinkIdentity: this.onLinkIdentity,
                            onUnlinkIdentity: this.onUnlinkIdentity
                        }), this.renderFollowConfirmation(), this.renderFeatureNeedsAuthBalloon(), this.renderUseBitsConfirmation(), m.createElement(y.a, null, m.createElement("span", null, m.createElement(_.Zb, {
                            label: t,
                            direction: _.bc.Top,
                            align: _.ac.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            "data-test-selector": le.ExtensionDescriptionButton,
                            icon: _.ub.More,
                            ariaLabel: t
                        })))), m.createElement(_.u, {
                            direction: _.v.TopRight,
                            size: _.w.Medium,
                            offsetX: ".6rem"
                        }, m.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between,
                            flexWrap: _.Ba.NoWrap
                        }, m.createElement(_.Fb, {
                            padding: 1,
                            flexShrink: 3
                        }, m.createElement(_.W, null, this.extension.summary)), m.createElement(_.Fb, {
                            borderLeft: !0,
                            margin: 1
                        }, m.createElement(_.A, {
                            "data-test-selector": le.ExtensionReportButton,
                            ariaLabel: n,
                            icon: _.ub.ChatRiskFlag,
                            onClick: this.handleReportExtensionClick
                        })))))), this.renderBitsBalanceUI()))
                    }, t.prototype.purchaseUI = function() {
                        var e = this,
                            t = this.state && this.state.purchaseIntent;
                        if (null !== t) {
                            var n = this.state,
                                r = n.isLinked,
                                i = n.isLinkEnabled,
                                a = t,
                                o = a.payload,
                                s = a.makePurchase;
                            return m.createElement(oe, {
                                confirm: function() {
                                    s(), e.setState({
                                        purchaseIntent: null
                                    })
                                },
                                cancel: this.cancelPurchase,
                                isLinked: r,
                                isLinkEnabled: i,
                                purchaseIntentPayload: o,
                                isLoggedIn: this.props.isLoggedIn
                            })
                        }
                    }, t
                }(m.Component),
                he = Object(h.compose)(Object(H.a)("ExtensionPanel", {
                    pixels: 100
                }))(me);

            function fe(e) {
                return {
                    isLoggedIn: Object(l.f)(e),
                    languageCode: Object(l.b)(e),
                    locale: e.session.locale
                }
            }

            function ye(e) {
                return Object(a.bindActionCreators)({
                    promptLogin: function() {
                        return Object(c.e)(o.a.ReportHoster)
                    },
                    showReportExtensionModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(s.d)(u.a, t)
                    }
                }, e)
            }
            var ge = Object(i.connect)(fe, ye)(he);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return fe
            }), n.d(t, !1, function() {
                return ye
            }), n.d(t, "a", function() {
                return ge
            })
        },
        TilG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionActionSubscribeToChannel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionProducts"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "extensionActionSubscriptionProduct"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "extensionActionSubscriptionProduct"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SubscriptionProduct"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tier"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 304
                }
            };
            n.loc.source = {
                body: "query ExtensionActionSubscribeToChannel($channelID: ID!) {\ncurrentUser {\nid\nlogin\n}\nuser(id: $channelID) {\nid\nlogin\nsubscriptionProducts {\n...extensionActionSubscriptionProduct\n}\nself {\nsubscriptionBenefit {\nid\ntier\n}\n}\n}\n}\nfragment extensionActionSubscriptionProduct on SubscriptionProduct {\nname\ntier\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        U0Fp: function(e, t, n) {},
        UFhH: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e.idGenerator,
                    n = e.stateHandler.getState;
                return {
                    get: function(e) {
                        var t = n(e);
                        return t && void 0 !== t.id ? t.id : null
                    },
                    set: function(e) {
                        var r = n(e);
                        if (!r) throw new Error("setId required the element to have a resize detection state.");
                        var i = t.generate();
                        return r.id = i, i
                    }
                }
            }
        },
        UL9e: function(e, t, n) {
            "use strict";
            (e.exports = {}).getOption = function(e, t, n) {
                var r = e[t];
                if ((void 0 === r || null === r) && void 0 !== n) return n;
                return r
            }
        },
        "V+q8": function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                c = n("/7QA"),
                l = n("ZS2+"),
                u = n("yR8l"),
                d = n("tIid"),
                p = n("DMoW"),
                m = n("ZEQw"),
                h = n("uIkQ"),
                f = n("7SjK"),
                y = n("OpME"),
                g = n("Ue10"),
                b = function(e) {
                    return o.createElement(g.Ya, {
                        padding: 2
                    }, o.createElement(g.Qa, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(g.W, {
                        bold: !0
                    }, Object(c.d)("Subscription benefits", "ChannelSubscriptionBenefits"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Directly support the broadcaster", "ChannelSubscriptionBenefits"))), e.hasAdFree && o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Ad-free (with limited exceptions)", "ChannelSubscriptionBenefits"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Chat during subscriber-only mode", "ChannelSubscriptionBenefits"))), e.hasFastChat && o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Not affected by chat slow mode", "ChannelSubscriptionBenefits"))), e.hasSubonlyVideoArchive && o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Access to VODs", "ChannelSubscriptionBenefits"))), e.badges.length > 0 && o.createElement(o.Fragment, null, o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Subscriber Badges:", "ChannelSubscriptionBenefits"))), o.createElement(g.Ya, {
                        margin: {
                            bottom: 1
                        },
                        display: g.X.Flex,
                        flexWrap: g.Ba.Wrap,
                        justifyContent: g.Xa.Center
                    }, e.badges.map(function(e) {
                        return o.createElement(g.Ya, {
                            key: e.setID + "/" + e.version,
                            margin: .5
                        }, o.createElement(h.a, {
                            badge: e
                        }))
                    }))), e.emotes.length > 0 && o.createElement(o.Fragment, null, o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("{numEmotes, plural, one {# Subscriber Emote:} other {# Subscriber Emotes:}}", {
                        numEmotes: e.emotes.length
                    }, "ChannelSubscriptionBenefits"))), o.createElement(f.a, {
                        emotes: Object(y.b)(e.emotes)
                    })))
                },
                v = n("C8FX"),
                E = (n("QxOQ"), function(e) {
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "channel-subscription-header__banner-image",
                        style: {
                            backgroundImage: "url(" + e.bannerImageURL
                        }
                    }, o.createElement(g.Fb, {
                        background: g.r.Overlay,
                        position: g.kb.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }), o.createElement(g.Ya, {
                        className: "channel-subscription-header__banner-background",
                        textAlign: g.Sb.Center
                    }, o.createElement(g.Ya, {
                        padding: {
                            top: 3
                        },
                        display: g.X.Flex,
                        justifyContent: g.Xa.Center
                    }, o.createElement(g.q, {
                        alt: e.ownerDisplayName || "",
                        size: 96,
                        src: e.profileImageURL
                    })))), o.createElement(g.Ya, {
                        textAlign: g.Sb.Center,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(g.Qa, {
                        margin: {
                            top: 3
                        }
                    }, o.createElement(g.W, {
                        type: g.Wb.H4,
                        bold: !0
                    }, e.ownerDisplayName)), o.createElement(g.Qa, {
                        margin: .5
                    }, o.createElement(g.W, {
                        type: g.Wb.H5
                    }, e.productDisplayName)), o.createElement(v.a, {
                        price: e.productPrice,
                        interval: e.productPriceInterval,
                        productDiscountPrice: e.productDiscountPrice || void 0,
                        productPriceTaxInclusive: e.productPriceTaxInclusive,
                        showEuSubs: e.showEuSubs
                    })))
                }),
                C = n("ZDlU"),
                k = n("QV0B"),
                P = n("mb7O"),
                S = (n("ZsMu"), function() {
                    return o.createElement(P.a, null, o.createElement(g.Ya, {
                        className: "error-ticket-description__header",
                        padding: 2
                    }, o.createElement(g.Fb, {
                        fullHeight: !0,
                        background: g.r.Alt2
                    }, o.createElement(C.a, null))), o.createElement(k.a, {
                        collapsable: !0
                    }, o.createElement(g.Fb, {
                        className: "error-ticket-description__body",
                        padding: 2,
                        borderTop: !0
                    }, o.createElement(g.Fb, {
                        fullHeight: !0,
                        background: g.r.Alt2
                    }, o.createElement(C.a, null)))))
                }),
                x = (n("1P3F"), function() {
                    return o.createElement(P.a, null, o.createElement(g.Ya, {
                        className: "placeholder-ticket-description__header",
                        padding: 2
                    }, o.createElement(g.Fb, {
                        fullHeight: !0,
                        background: g.r.Alt2
                    })), o.createElement(k.a, {
                        collapsable: !0
                    }, o.createElement(g.Fb, {
                        padding: 2,
                        borderTop: !0
                    }, o.createElement(g.jb, {
                        lineCount: 30
                    }))))
                }),
                O = n("KYZ7"),
                I = n.n(O),
                w = (n("R9u/"), function(e) {
                    return o.createElement(P.a, null, o.createElement(g.Fb, {
                        background: g.r.Base
                    }, o.createElement(g.Ya, {
                        className: "turbo-ticket-description__banner-image",
                        padding: 3,
                        display: g.X.Flex,
                        alignItems: g.f.Center,
                        justifyContent: g.Xa.Center
                    }, o.createElement(g.S, {
                        className: "turbo-ticket-description__banner-logo",
                        src: I.a,
                        alt: Object(c.d)("Twitch Turbo Logo", "TurboTicketDescription")
                    })), o.createElement(g.Fb, {
                        borderBottom: !0,
                        textAlign: g.Sb.Center,
                        padding: 2
                    }, o.createElement(v.a, {
                        price: e.productPrice,
                        interval: e.productPriceInterval,
                        productPriceTaxInclusive: e.productPriceTaxInclusive,
                        showEuSubs: e.showEuSubs
                    })), o.createElement(k.a, {
                        collapsable: !0,
                        showButtonLabel: Object(c.d)("Show Turbo Benefits", "TurboTicketDescription"),
                        hideButtonLabel: Object(c.d)("Hide Turbo Benefits", "TurboTicketDescription")
                    }, o.createElement(g.Ya, {
                        padding: 2
                    }, o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, {
                        bold: !0
                    }, Object(c.d)("Subscription Benefits", "TurboTicketDescription"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Ad-Free Viewing (with limited exceptions)", "TurboTicketDescription"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Chat Badge", "TurboTicketDescription"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Expanded Emote Set", "TurboTicketDescription"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Custom Chat Username Colors", "TurboTicketDescription"))), o.createElement(g.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.W, null, Object(c.d)("Extended Broadcast Storage", "TurboTicketDescription")))))))
                }),
                _ = n("GnwI"),
                N = n("9fjZ"),
                T = l.a.wrap(function() {
                    return n.e(211).then(n.bind(null, "skV9"))
                }, "CampaignsTicketDescription"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTurboProduct = "turbo" === t.props.productName, t.tierToDisplayMap = {
                            1000: Object(c.d)("Tier 1 Channel Subscription", "TicketDescription"),
                            2000: Object(c.d)("Tier 2 Channel Subscription", "TicketDescription"),
                            3000: Object(c.d)("Tier 3 Channel Subscription", "TicketDescription")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.product,
                            n = e.loading,
                            r = e.error;
                        return !t && n ? o.createElement(x, null) : !t || r ? o.createElement(S, null) : this.isTurboProduct ? o.createElement(w, {
                            productPrice: this.price,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }) : this.isEsportsProduct ? o.createElement(T, {
                            ownerID: t.owner && t.owner.id,
                            badges: this.badges,
                            emotes: this.emotes,
                            productPrice: this.price,
                            productDiscountPrice: this.productDiscountPrice,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }) : o.createElement(P.a, null, o.createElement(g.Fb, {
                            background: g.r.Base
                        }, o.createElement(E, {
                            bannerImageURL: t.owner && t.owner.bannerImageURL,
                            profileImageURL: t.owner && t.owner.profileImageURL,
                            ownerDisplayName: t.owner && t.owner.displayName,
                            productDisplayName: this.productDisplayName,
                            productPrice: this.price,
                            productDiscountPrice: this.productDiscountPrice,
                            productPriceInterval: t.interval && t.interval.unit,
                            productPriceTaxInclusive: this.taxInclusive,
                            showEuSubs: this.props.showEuSubs
                        }), o.createElement(k.a, {
                            collapsable: !0,
                            showButtonLabel: Object(c.d)("Show Subscription Benefits", "TicketDescription"),
                            hideButtonLabel: Object(c.d)("Hide Subscription Benefits", "TicketDescription")
                        }, o.createElement(b, {
                            hasAdFree: t.hasAdFree,
                            hasFastChat: t.hasFastChat,
                            hasSubonlyVideoArchive: t.hasSubonlyVideoArchive,
                            badges: this.badges,
                            emotes: this.emotes
                        }))))
                    }, Object.defineProperty(t.prototype, "isEsportsProduct", {
                        get: function() {
                            var e = this.props.data.product;
                            return !!(e && e.owner && e.owner.id && Object(d.a)(e.owner.id, this.props.sessionUser))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "taxInclusive", {
                        get: function() {
                            var e = this.props.data.product && this.props.data.product.priceInfo;
                            return !("US" === this.props.priceCountry || e && "USD" === e.currency && null === this.props.priceCountry && "US" === this.props.data.requestInfo.countryCode) && !(!e || !e.isTaxInclusive)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "price", {
                        get: function() {
                            if (this.props.invoicePrice) return this.props.invoicePrice;
                            if (this.props.data.loading) return null;
                            var e = this.props.data.product;
                            return e && e.priceInfo ? Object(c.f)(e.priceInfo.total / Math.pow(10, e.priceInfo.exponent), {
                                style: "currency",
                                currency: e.priceInfo.currency
                            }) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productDiscountPrice", {
                        get: function() {
                            if (this.props.isGift) return this.props.data.product && this.props.data.product.giftPromotion && this.props.data.product.giftPromotion.newPrice;
                            if (!this.props.data.product || !this.props.data.product.self) return null;
                            var e = this.props.data.product.self.paidUpgradePromotion && this.props.data.product.self.paidUpgradePromotion.newPrice;
                            return this.props.showPaidUpgrade && e ? e : this.props.data.product.self.promotion && this.props.data.product.self.promotion.newPrice
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productDisplayName", {
                        get: function() {
                            var e = this.props.data.product;
                            return e && e.priceInfo && e.priceInfo.currency !== p.t.USD ? this.tierToDisplayMap[e.tier || ""] || Object(c.d)("Channel Subscription", "TicketDescription") : e && e.displayName
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "badges", {
                        get: function() {
                            var e = [];
                            if (this.props.data.product && this.props.data.product.owner && this.props.data.product.owner.broadcastBadges) {
                                var t = this.props.data.product.owner.broadcastBadges;
                                (t && t.filter(function(e) {
                                    return e && "subscriber" === e.setID
                                }).sort(function(e, t) {
                                    return e && t && parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                                })).forEach(function(t) {
                                    if (t) {
                                        var n = {
                                            id: t.id,
                                            setID: t.setID,
                                            version: t.version,
                                            title: t.title,
                                            image1x: t.image1x,
                                            image2x: t.image2x,
                                            image4x: t.image4x,
                                            clickAction: m.b,
                                            clickURL: t.clickURL || ""
                                        };
                                        e.push(n)
                                    }
                                })
                            }
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "emotes", {
                        get: function() {
                            var e = [],
                                t = this.props.data.product;
                            return t && t.owner && t.owner.subscriptionProducts && t.owner.subscriptionProducts.forEach(function(n) {
                                n && n.emotes && n.tier <= t.tier && n.emotes.forEach(function(t) {
                                    t && t.id && t.token && e.push({
                                        id: t.id,
                                        token: t.token
                                    })
                                })
                            }), e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                F = Object(s.compose)(Object(_.b)("TicketDescription"), Object(u.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                productName: e.productName,
                                taxCountry: e.priceCountry
                            }
                        }
                    }
                }))(D);
            var j = Object(r.connect)(function(e) {
                return {
                    sessionUser: Object(i.e)(e)
                }
            })(F);
            n.d(t, "a", function() {
                return j
            })
        },
        "W+U1": function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e.stateHandler.getState;
                return {
                    isDetectable: function(e) {
                        var n = t(e);
                        return n && !!n.isDetectable
                    },
                    markAsDetectable: function(e) {
                        t(e).isDetectable = !0
                    },
                    isBusy: function(e) {
                        return !!t(e).busy
                    },
                    markBusy: function(e, n) {
                        t(e).busy = !!n
                    }
                }
            }
        },
        WJ6U: function(e, t, n) {
            e.exports = n.p + "assets/android_1x-38340be28156bb72233a.svg"
        },
        WXY0: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                c = n("kRBY"),
                l = n("mrSG"),
                u = n("NAv5"),
                d = n("q1tI"),
                p = n("/7QA"),
                m = n("ZDlU"),
                h = n("yR8l"),
                f = n("x7UT"),
                y = n("0Log"),
                g = n("HGFl"),
                b = n("/aPz"),
                v = n("D7An"),
                E = n("DMoW"),
                C = n("b6Yk"),
                k = n("tIid");
            ! function(e) {
                e[e.PERSONAL_SUB = 0] = "PERSONAL_SUB", e[e.GIFT_SUB = 1] = "GIFT_SUB", e[e.MYSTERY_GIFT = 2] = "MYSTERY_GIFT"
            }(r || (r = {}));
            var P, S, x = n("Ue10"),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.product ? (e = this.props.purchaseFlow === r.GIFT_SUB || this.props.purchaseFlow === r.MYSTERY_GIFT ? this.isEsportPurchase ? this.giftEsportMessageText : this.giftSubMessageText : this.isEsportPurchase ? this.personalEsportMessageText : "turbo" === this.props.product.product.name ? this.turboMessageText : this.personalSubMessageText, d.createElement(x.Ya, null, e)) : d.createElement(x.jb, null);
                        var e
                    }, Object.defineProperty(t.prototype, "turboMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Twitch Turbo subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(x.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(x.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product && this.props.product.product.owner;
                            return e && e.id && Object(k.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "personalEsportMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Pass is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(x.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(x.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftEsportMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Pass gift is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(x.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(x.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "personalSubMessageText", {
                        get: function() {
                            if (this.props.product) {
                                var e = Object(p.d)("Buying a Channel Subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                        "x:link": function(e) {
                                            return d.createElement(x.U, {
                                                targetBlank: !0,
                                                to: "https://help.twitch.tv/"
                                            }, e)
                                        }
                                    }, "CheckoutDescription"),
                                    t = Object(p.d)('You may cancel at any time by selecting "Do Not Renew" on your <x:link>subscriptions page</x:link>.', {
                                        "x:link": function(e) {
                                            return d.createElement(x.U, {
                                                targetBlank: !0,
                                                to: "/subscriptions"
                                            }, e)
                                        }
                                    }, "CheckoutDescription");
                                return d.createElement(d.Fragment, null, d.createElement(x.W, null, e), this.props.product.product.interval.unit === E.U.MONTH && d.createElement(x.W, null, t))
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftSubMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Gift Subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(x.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(x.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.PureComponent),
                I = (n("JH5r"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(x.Fb, {
                            className: "checkout-error-brick",
                            background: x.r.Base,
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderRadius: x.x.Small,
                            display: x.X.Flex,
                            flexDirection: x.Aa.Column,
                            justifyContent: x.Xa.Center,
                            padding: {
                                x: 1,
                                y: 2
                            }
                        }, this.props.children)
                    }, t
                }(d.Component));
            n("acxT");
            ! function(e) {
                e[e.DefaultMessage = 0] = "DefaultMessage", e[e.PriceChangeNotice = 1] = "PriceChangeNotice", e[e.InvalidResidence = 2] = "InvalidResidence", e[e.InvalidPaymentMethod = 3] = "InvalidPaymentMethod"
            }(P || (P = {})),
            function(e) {
                e[e.Info = 0] = "Info", e[e.Error = 1] = "Error"
            }(S || (S = {}));
            var w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.level === S.Error ? d.createElement(I, null, d.createElement(x.W, {
                            bold: !0
                        }, this.title), d.createElement(x.Ya, {
                            margin: {
                                top: 1
                            }
                        }, d.createElement(x.W, null, this.message))) : this.props.level === S.Info ? d.createElement(x.Fb, {
                            className: "checkout-error--info",
                            display: x.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(x.tb, {
                            asset: x.ub.NotificationInfo
                        }), d.createElement(x.Ya, {
                            margin: {
                                left: 2
                            }
                        }, d.createElement(x.W, null, this.message))) : void 0
                    }, Object.defineProperty(t.prototype, "title", {
                        get: function() {
                            return this.props.errorCode === P.DefaultMessage ? Object(p.d)("Payment not processed", "CheckoutError") : this.props.errorCode === P.InvalidResidence ? Object(p.d)("Invalid country of residence", "CheckoutError") : this.props.errorCode === P.InvalidPaymentMethod ? Object(p.d)("This payment method is not available for your purchase at this time", "CheckoutError") : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "message", {
                        get: function() {
                            return this.props.errorCode === P.DefaultMessage ? Object(p.d)("Something went wrong, and your payment could not be processed at this time. Please try again later.", "CheckoutError") : this.props.errorCode === P.PriceChangeNotice ? Object(p.d)("We made a change to the price to reflect your country of purchase. Please review the updated price and confirm your payment again.", "CheckoutError") : this.props.errorCode === P.InvalidResidence ? Object(p.d)("Make sure your country of residence and postal code are both valid.", "CheckoutError") : this.props.errorCode === P.InvalidPaymentMethod ? Object(p.d)("Please continue checkout using another payment method.", "CheckoutError") : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                _ = n("6oOb"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.progress === _.a.CONFIRMATION ? d.createElement(x.W, {
                            type: x.Wb.H2,
                            bold: !0
                        }, Object(p.d)("Purchase Successful", "CheckoutHeader")) : d.createElement(x.W, {
                            type: x.Wb.H2,
                            bold: !0
                        }, this.headerText)
                    }, Object.defineProperty(t.prototype, "headerText", {
                        get: function() {
                            return this.props.purchaseFlow === r.GIFT_SUB || this.props.purchaseFlow === r.MYSTERY_GIFT ? this.isEsportPurchase ? Object(p.d)("Gift All-Access Pass", "CheckoutHeader") : Object(p.d)("Gift A Subscription", "CheckoutHeader") : this.props.purchaseFlow === r.PERSONAL_SUB ? this.isEsportPurchase ? Object(p.d)("Get Your All-Access Pass", "CheckoutHeader") : Object(p.d)("Subscription Payment Information", "CheckoutHeader") : Object(p.d)("Checkout", "CheckoutHeader")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product && this.props.product.product.owner;
                            return e && e.id && Object(k.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component);
            var T, D = Object(i.connect)(function(e) {
                    return {
                        sessionUser: Object(c.e)(e)
                    }
                })(N),
                F = (n("u/1r"), function(e) {
                    return d.createElement(x.Ya, {
                        fullWidth: !0,
                        padding: 3,
                        overflow: x.db.Auto
                    }, d.createElement(x.Ya, {
                        display: x.X.Flex,
                        justifyContent: x.Xa.Center,
                        flexWrap: x.Ba.Wrap
                    }, d.createElement(x.Ya, {
                        display: x.X.Hide,
                        alignItems: x.f.Start,
                        breakpointLarge: {
                            display: x.X.Flex
                        }
                    }, e.productDescription), d.createElement(x.Ya, {
                        className: "checkout-layout__content",
                        breakpointLarge: {
                            margin: {
                                left: 4
                            }
                        }
                    }, e.header, d.createElement(x.Ya, {
                        display: x.X.Flex,
                        breakpointLarge: {
                            display: x.X.Hide
                        }
                    }, e.productDescription), d.createElement(x.Ya, {
                        margin: {
                            y: 1
                        }
                    }, e.children))))
                }),
                j = function() {
                    var e = Object(p.d)('By clicking "Complete Purchase", you hereby agree to Twitch\'s <x:tos>Terms of Sale</x:tos> and <x:privacy>Privacy Policy</x:privacy>. Your payment method will be saved for future purchases, and, if applicable, recurring subscription payments.', {
                        "x:tos": function(e) {
                            return d.createElement(x.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/terms-of-sale/"
                            }, e)
                        },
                        "x:privacy": function(e) {
                            return d.createElement(x.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/privacy-policy/"
                            }, e)
                        }
                    }, "CheckoutDisclaimer");
                    return d.createElement(x.Ya, {
                        padding: {
                            y: 2
                        }
                    }, d.createElement(x.W, null, e))
                };

            function R(e) {
                switch (e) {
                    case T.GIFTABLE_RECIPIENT:
                    case T.NEW_PURCHASE:
                    case T.TIER_UPGRADE:
                    case T.PRIME_UPGRADE:
                    case T.UNKNOWN:
                        return !0;
                    case T.NO_ITEM:
                    case T.NON_GIFTABLE_RECIPIENT:
                    case T.NO_MASS_GIFTING:
                    case T.TIER_DOWNGRADE:
                    case T.MOBILE_UPGRADE:
                    case T.API_INELIGIBLE:
                    default:
                        return !1
                }
            }! function(e) {
                e[e.GIFTABLE_RECIPIENT = 0] = "GIFTABLE_RECIPIENT", e[e.NEW_PURCHASE = 1] = "NEW_PURCHASE", e[e.TIER_UPGRADE = 2] = "TIER_UPGRADE", e[e.PRIME_UPGRADE = 3] = "PRIME_UPGRADE", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.NO_ITEM = 5] = "NO_ITEM", e[e.NON_GIFTABLE_RECIPIENT = 6] = "NON_GIFTABLE_RECIPIENT", e[e.NO_MASS_GIFTING = 7] = "NO_MASS_GIFTING", e[e.TIER_DOWNGRADE = 8] = "TIER_DOWNGRADE", e[e.MOBILE_UPGRADE = 9] = "MOBILE_UPGRADE", e[e.API_INELIGIBLE = 10] = "API_INELIGIBLE"
            }(T || (T = {}));
            var A, M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e;
                        switch (this.props.productEligibility) {
                            case T.NON_GIFTABLE_RECIPIENT:
                                e = this.isEsportPurchase ? Object(p.d)("Sorry, an All-Access Pass to this channel is not available for <x:bold>{recipientName}</x:bold>.", {
                                    "x:bold": function(e) {
                                        return d.createElement(x.W, {
                                            type: x.Wb.Span,
                                            bold: !0
                                        }, e)
                                    },
                                    recipientName: this.props.product.recipient && this.props.product.recipient.displayName || ""
                                }, "IneligiblePurchaseNotice") : Object(p.d)("Sorry, a Gift Subscription to this channel is not available for <x:bold>{recipientName}</x:bold>.", {
                                    "x:bold": function(e) {
                                        return d.createElement(x.W, {
                                            type: x.Wb.Span,
                                            bold: !0
                                        }, e)
                                    },
                                    recipientName: this.props.product.recipient && this.props.product.recipient.displayName || ""
                                }, "IneligiblePurchaseNotice");
                                break;
                            case T.NO_MASS_GIFTING:
                                e = Object(p.d)("Community gifts are not eligible for this product.", "IneligiblePurchaseNotice");
                                break;
                            case T.TIER_DOWNGRADE:
                                var t = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.login;
                                e = Object(p.d)("You are currently subscribed to a higher-tier subscription that offers more benefits. <x:subsLink>Click here to compare subscription benefits</x:subsLink>. If you would still like to purchase this, please <x:subsMgmtLink>cancel your existing subscription</x:subsMgmtLink> or wait for your existing subscription to end.", {
                                    "x:subsLink": function(e) {
                                        return d.createElement(x.U, {
                                            type: x.V.Inherit,
                                            to: "/subs/" + (t || ""),
                                            underline: !0
                                        }, e)
                                    },
                                    "x:subsMgmtLink": function(e) {
                                        return d.createElement(x.U, {
                                            type: x.V.Inherit,
                                            to: "/subscriptions",
                                            underline: !0
                                        }, e)
                                    }
                                }, "IneligiblePurchaseNotice");
                                break;
                            case T.MOBILE_UPGRADE:
                                var n = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.displayName;
                                return d.createElement(m.a, null, d.createElement(x.W, {
                                    bold: !0
                                }, Object(p.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                    productDisplayName: n || ""
                                }, "IneligiblePurchaseNotice")), d.createElement(x.Ya, {
                                    margin: {
                                        top: 1
                                    }
                                }, d.createElement(x.W, null, Object(p.d)("Upgrading your mobile subscription is currently not supported.", "IneligiblePurchaseNotice"))));
                            default:
                                e = Object(p.d)("You are not eligible for this purchase.", "IneligiblePurchaseNotice")
                        }
                        return d.createElement(x.Fb, {
                            background: x.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.W, {
                            color: x.O.Error
                        }, e))
                    }, Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product.product.owner;
                            return e && e.id && Object(k.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.PureComponent),
                L = function(e) {
                    return d.createElement(x.Fb, {
                        background: x.r.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, d.createElement(x.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(x.W, null, Object(p.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                        newPrice: e.newPrice
                    }, "UpgradePrimeWarning"))), d.createElement(x.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(x.W, null, Object(p.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30 days after you last used your free subscription.", "UpgradePrimeWarning"))), d.createElement(x.W, null, Object(p.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
                },
                B = function(e) {
                    return d.createElement(x.Fb, {
                        background: x.r.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, d.createElement(x.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(x.W, null, Object(p.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                        originalPrice: e.originalPrice,
                        newPrice: e.newPrice
                    }, "UpgradeTierWarning"))), d.createElement(x.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(x.W, null, Object(p.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                        originalPrice: e.originalPrice
                    }, "UpgradeTierWarning"))), d.createElement(x.W, null, Object(p.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
                },
                U = (n("mIie"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.enablePaidUpgradeFlag = p.b.get("earth_wind_fire", !1), t.chargeTimeMessage = Object(p.d)("You will be charged on {date}", {
                            date: Object(p.c)(new Date(Date.now()), "medium")
                        }, "PurchasePreview"), t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.product) return null;
                        var e = d.createElement(d.Fragment, null),
                            t = d.createElement(d.Fragment, null);
                        if (this.props.purchaseFlow === r.GIFT_SUB) t = this.renderGiftSubPurchase();
                        else if (this.props.purchaseFlow === r.MYSTERY_GIFT) t = this.renderMysteryGiftSubPurchase();
                        else if (this.props.purchaseFlow === r.PERSONAL_SUB)
                            if (this.props.eligiblePromotions && this.props.eligiblePromotions.isOneMonthFreeEligible && (e = this.renderOneFreeMonth()), this.props.productEligibility === T.TIER_UPGRADE) t = this.renderTierUpgrade();
                            else if (this.props.productEligibility === T.PRIME_UPGRADE) {
                            var n = this.formattedPrice;
                            n && (t = d.createElement(L, {
                                newPrice: n
                            }))
                        } else this.props.productEligibility === T.NEW_PURCHASE && this.hasActiveGiftSubscription && (this.props.eligiblePromotions && this.props.eligiblePromotions.paidUpgradePromotion && (e = this.renderSubtemberDiscount()), t = this.renderGiftSubUpgrade());
                        return d.createElement(d.Fragment, null, e, (!this.hasActiveGiftSubscription || this.props.purchaseFlow !== r.PERSONAL_SUB) && d.createElement(x.Ya, {
                            margin: {
                                top: 1
                            }
                        }, d.createElement(x.W, null, this.chargeTimeMessage)), t)
                    }, t.prototype.renderTierUpgrade = function() {
                        var e = this.props.existingPurchases && this.props.existingPurchases.compatiblePurchases && this.props.existingPurchases.compatiblePurchases[0];
                        if (!e) return null;
                        var t = e.price,
                            n = e.currency,
                            r = e.divisor,
                            i = Object(p.f)(t / r, {
                                style: "currency",
                                currency: n
                            }),
                            a = this.formattedPrice;
                        return i && a ? d.createElement(B, {
                            originalPrice: i,
                            newPrice: a
                        }) : null
                    }, t.prototype.renderGiftSubUpgrade = function() {
                        var e = this.props.benefit.endsAt;
                        if (!e) return null;
                        var t = Object(g.c)(e);
                        return d.createElement(x.Fb, {
                            background: x.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.W, null, Object(p.d)("You will be charged when your Gift Subscription ends on <x:strong>{giftSubEndDateFormatted, date, short}</x:strong>.", {
                            giftSubEndDateFormatted: t,
                            "x:strong": function(e) {
                                return d.createElement(x.W, {
                                    type: x.Wb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PurchasePreview")))
                    }, t.prototype.renderGiftSubPurchase = function() {
                        var e, t = this.props.product && this.props.product.recipient && this.props.product.recipient.displayName,
                            n = this.props.isAnonymous;
                        return this.formattedPrice ? (e = this.isEsportPurchase ? n ? Object(p.d)("You are buying a {price} Anonymous Overwatch League All-Access Pass for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: d.createElement(x.W, {
                                type: x.Wb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview") : Object(p.d)("You are buying a {price} Overwatch League All-Access Pass for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: d.createElement(x.W, {
                                type: x.Wb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview") : n ? Object(p.d)("You are buying a Single Month {price} Anonymous Gift Subscription for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: d.createElement(x.W, {
                                type: x.Wb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview") : Object(p.d)("You are buying a Single Month {price} Gift Subscription for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: d.createElement(x.W, {
                                type: x.Wb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview"), d.createElement(x.Fb, {
                            background: x.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.W, null, e))) : null
                    }, t.prototype.renderMysteryGiftSubPurchase = function() {
                        if (!this.props.product) return null;
                        var e, t = this.props.isAnonymous,
                            n = this.props.product.product && this.props.product.product.tier,
                            r = n && parseInt(n, 10) / 1e3,
                            i = this.props.product.quantity;
                        if (!i || !this.formattedPrice) return null;
                        var a = Object(p.d)("Gift recipients will be chosen at random, starting with viewers of the streamer's channel who do not currently subscribe. <x:gift-info>Learn how Twitch picks recipients.</x:gift-info>", {
                            "x:gift-info": function(e) {
                                return d.createElement(x.U, {
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/articles/2903710-gift-subscriptions#CommunityGifting"
                                }, e)
                            }
                        }, "PurchasePreview");
                        e = this.isEsportPurchase ? t ? Object(p.d)("{quantity, plural, one {{quantity} x Anonymous Overwatch League All-Access Pass Gift} other {{quantity} x Anonymous Overwatch League All-Access Pass Gifts}}", {
                            quantity: i
                        }, "PurchasePreview") : Object(p.d)("{quantity, plural, one {{quantity} x Overwatch League All-Access Pass Gift} other {{quantity} x Overwatch League All-Access Pass Gifts}}", {
                            quantity: i
                        }, "PurchasePreview") : t ? Object(p.d)("{quantity, plural, one {{quantity} x Single Month Tier {numericalTier} Anonymous Gift Subscription} other {{quantity} x Single Month Tier {numericalTier} Anonymous Gift Subscriptions}}", {
                            quantity: i,
                            numericalTier: r
                        }, "PurchasePreview") : Object(p.d)("{quantity, plural, one {{quantity} x Single Month Tier {numericalTier} Gift Subscription} other {{quantity} x Single Month Tier {numericalTier} Gift Subscriptions}}", {
                            quantity: i,
                            numericalTier: r
                        }, "PurchasePreview");
                        var o = this.props.product.product.priceInfo.total * i,
                            s = Object(p.d)("{price} each", {
                                price: this.formattedPrice
                            }, "PurchasePreview"),
                            c = Object(p.d)("Total {totalPrice}", {
                                totalPrice: Object(p.f)(o / Math.pow(10, this.props.product.product.priceInfo.exponent), {
                                    style: "currency",
                                    currency: this.props.product.product.priceInfo.currency
                                })
                            }, "PurchasePreview");
                        return d.createElement(d.Fragment, null, d.createElement(x.Fb, {
                            background: x.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.Ya, null, d.createElement(x.W, {
                            type: x.Wb.H5
                        }, e)), d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.W, {
                            type: x.Wb.H5
                        }, s)), d.createElement(x.W, {
                            type: x.Wb.H5,
                            bold: !0
                        }, c)), d.createElement(x.W, null, a))
                    }, t.prototype.renderOneFreeMonth = function() {
                        var e = new Date,
                            t = this.props.benefit;
                        t && null !== t.endsAt && (e = Object(g.c)(t.endsAt));
                        var n = new Date(e);
                        return n.setMonth(e.getMonth() + 1), d.createElement(x.Fb, {
                            background: x.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.W, null, Object(p.d)("Your next month is on us. You will be charged when your free month ends on <x:strong>{futureChargeDate, date, short}</x:strong>.", {
                            futureChargeDate: n,
                            "x:strong": function(e) {
                                return d.createElement(x.W, {
                                    type: x.Wb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PurchasePreview")))
                    }, t.prototype.renderSubtemberDiscount = function() {
                        return this.enablePaidUpgradeFlag && this.props.eligiblePromotions && this.props.eligiblePromotions.paidUpgradePromotion ? d.createElement(x.Fb, {
                            background: x.r.Base,
                            className: "purchase-preview__promotion-banner",
                            padding: 1,
                            margin: {
                                y: 1
                            },
                            display: x.X.Flex,
                            flexDirection: x.Aa.Column
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("*Subtember Limited-Time Promotion Applied", "PurchasePreview")), d.createElement(x.W, null, Object(p.d)("Your first month will cost {discountedPrice} and {oldPrice} for each recurring month.", {
                            discountedPrice: this.props.eligiblePromotions.paidUpgradePromotion.newPrice,
                            oldPrice: this.props.eligiblePromotions.paidUpgradePromotion.oldPrice
                        }, "PurchasePreview"))) : null
                    }, Object.defineProperty(t.prototype, "formattedPrice", {
                        get: function() {
                            return this.props.product && this.props.product.product.priceInfo ? Object(p.f)(this.props.product.product.priceInfo.total / Math.pow(10, this.props.product.product.priceInfo.exponent), {
                                style: "currency",
                                currency: this.props.product.product.priceInfo.currency
                            }) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasActiveGiftSubscription", {
                        get: function() {
                            return !!(this.props.benefit && this.props.benefit.gift && this.props.benefit.gift.isGift)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            return this.props.product && this.props.product.product.owner && this.props.product.product.owner.id && Object(k.a)(this.props.product.product.owner.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component)),
                W = n("9C/b"),
                z = (n("NwMv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(x.Ya, {
                            className: "gift-sub-receipt__container",
                            padding: {
                                y: 2
                            }
                        }, d.createElement(x.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, this.getGiftSubReceiptInfo()), d.createElement(x.Fb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(x.Ya, {
                            className: "gift-sub-receipt__label",
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("Gift Status", "GiftSubReceipt"))), d.createElement(x.Ya, {
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, null, Object(p.d)("Active", "GiftSubReceipt")))), this.props.invoicePrice && d.createElement(x.Fb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(x.Ya, {
                            className: "gift-sub-receipt__label",
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("Your Invoice Total", "GiftSubReceipt"))), d.createElement(x.Ya, {
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, null, Object(p.f)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        })))), d.createElement(x.Ya, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(x.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "GiftSubReceipt"))))
                    }, t.prototype.getGiftSubReceiptInfo = function() {
                        if (this.props.invoicePrice) return this.props.isEsportChannel ? d.createElement(x.W, {
                            "data-test-selector": "esport-gift-sub-receipt-info-selector"
                        }, Object(p.d)("You have purchased a {price} Overwatch League All-Access Pass for <x:strong>{recipientDisplayName}</x:strong>", {
                            price: Object(p.f)(this.props.invoicePrice / 100, {
                                style: "currency",
                                currency: this.props.invoiceCurrency
                            }),
                            recipientDisplayName: this.props.recipientDisplayName || "",
                            "x:strong": function(e) {
                                return d.createElement(x.W, {
                                    type: x.Wb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "GiftSubReceipt")) : d.createElement(x.W, {
                            "data-test-selector": "gift-sub-receipt-info-selector"
                        }, Object(p.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                            price: Object(p.f)(this.props.invoicePrice / 100, {
                                style: "currency",
                                currency: this.props.invoiceCurrency
                            }),
                            recipientDisplayName: this.props.recipientDisplayName || "",
                            "x:strong": function(e) {
                                return d.createElement(x.W, {
                                    type: x.Wb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "GiftSubReceipt"))
                    }, t
                }(d.PureComponent)),
                G = Object(W.a)(z),
                Y = (n("XE3n"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(x.Ya, {
                            className: "gift-sub-receipt__container",
                            padding: {
                                y: 2
                            }
                        }, d.createElement(x.Fb, {
                            padding: {
                                bottom: 2
                            }
                        }, this.getMysteryGiftSubReceiptInfo()), d.createElement(x.Fb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(x.Ya, {
                            className: "gift-sub-receipt__label",
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("Gift Status", "MysteryGiftSubReceipt"))), d.createElement(x.Ya, {
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, null, Object(p.d)("Active", "MysteryGiftSubReceipt")))), this.props.invoicePrice && d.createElement(x.Fb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(x.Ya, {
                            className: "gift-sub-receipt__label",
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("Your Invoice Total", "MysteryGiftSubReceipt"))), d.createElement(x.Ya, {
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, null, Object(p.f)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        })))), d.createElement(x.Ya, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(x.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "MysteryGiftSubReceipt"))))
                    }, t.prototype.getMysteryGiftSubReceiptInfo = function() {
                        if (this.props.invoicePrice && this.props.tier) {
                            var e = parseInt(this.props.tier, 10) / 1e3,
                                t = Object(p.d)("{quantity, plural, one {Your gift is now being given in the channel.} other {Your gifts are now being given in the channel.}}", {
                                    quantity: this.props.mysteryGiftCount
                                }, "MysteryGiftSubReceipt");
                            return this.props.isEsportChannel ? d.createElement(d.Fragment, null, d.createElement(x.W, null, Object(p.d)("{quantity, plural, one {You have purchased {quantity} x Overwatch League All-Access Pass Gift.} other {You have purchased {quantity} x Overwatch League All-Access Pass Gifts.}}", {
                                quantity: this.props.mysteryGiftCount
                            }, "MysteryGiftSubReceipt")), d.createElement(x.W, null, t)) : d.createElement(d.Fragment, null, d.createElement(x.W, null, Object(p.d)("{quantity, plural, one {You have purchased {quantity} x Single Month Tier {tier} Gift Subscription.} other {You have purchased {quantity} x Single Month Tier {tier} Gift Subscriptions.}}", {
                                quantity: this.props.mysteryGiftCount,
                                tier: e
                            }, "MysteryGiftSubReceipt")), d.createElement(x.W, null, t))
                        }
                    }, t
                }(d.PureComponent)),
                H = Object(W.a)(Y),
                q = (n("ZHRK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), "turbo" === t.props.productOwnerLogin ? t.props.history.push("/settings/turbo") : t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.giftSubEndsAt ? Object(p.d)("Your paid subscription will begin on <x:strong>{endsAt}</x:strong> after your Gift Subscription ends", {
                            "x:strong": function(e) {
                                return d.createElement(x.W, {
                                    type: x.Wb.Span,
                                    bold: !0
                                }, e)
                            },
                            endsAt: Object(p.c)(new Date(this.props.giftSubEndsAt), "long")
                        }, "PersonalSubReceipt") : Object(p.d)("Active", "PersonalSubReceipt"), d.createElement(x.Ya, {
                            className: "personal-sub-receipt"
                        }, d.createElement(x.Fb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(x.Ya, {
                            className: "personal-sub-receipt__label",
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("Subscription for", "PersonalSubReceipt"))), d.createElement(x.Ya, {
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, null, this.props.purchaserDisplayName))), d.createElement(x.Fb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(x.Ya, {
                            className: "personal-sub-receipt__label",
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, {
                            bold: !0
                        }, Object(p.d)("Status", "PersonalSubReceipt"))), d.createElement(x.Ya, {
                            display: x.X.InlineBlock
                        }, d.createElement(x.W, null, e))), d.createElement(x.Ya, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(x.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "PersonalSubReceipt"))))
                    }, t
                }(d.Component)),
                X = Object(W.a)(q),
                V = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.product || !this.props.purchaseInvoice.price) return null;
                        var e = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.id || "",
                            t = Object(k.a)(e, this.props.sessionUser),
                            n = this.props.product.product,
                            i = n && n.owner,
                            a = this.props.benefit;
                        return this.props.purchaseFlow === r.MYSTERY_GIFT ? d.createElement(H, {
                            productOwnerDisplayName: i && i.displayName || "",
                            productOwnerLogin: i && i.login || "",
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            tier: this.props.purchaseInvoice.tier || "",
                            mysteryGiftCount: this.props.product.quantity || 1,
                            isEsportChannel: t
                        }) : this.props.purchaseFlow === r.GIFT_SUB ? this.props.product.recipient ? d.createElement(G, {
                            recipientDisplayName: this.props.product.recipient.displayName,
                            productOwnerDisplayName: i && i.displayName || "",
                            productOwnerLogin: i && i.login || "",
                            invoicePrice: this.props.purchaseInvoice && this.props.purchaseInvoice.price || void 0,
                            invoiceCurrency: this.props.purchaseInvoice && this.props.purchaseInvoice.currency || "USD",
                            isEsportChannel: t
                        }) : null : "turbo" === this.props.product.product.name ? this.props.benefit ? d.createElement(X, {
                            purchaserDisplayName: this.props.currentUser && this.props.currentUser.displayName || "",
                            productOwnerDisplayName: "turbo",
                            productOwnerLogin: "turbo",
                            giftSubEndsAt: a && a.gift && (a.gift.isGift || null) && a.endsAt,
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            invoiceDivisor: this.props.purchaseInvoice.divisor || 100
                        }) : null : d.createElement(X, {
                            purchaserDisplayName: this.props.currentUser && this.props.currentUser.displayName || "",
                            productOwnerDisplayName: i && i.displayName || "",
                            productOwnerLogin: i && i.login || "",
                            giftSubEndsAt: a && a.gift && (a.gift.isGift || null) && a.endsAt || "",
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            invoiceDivisor: this.props.purchaseInvoice.divisor || 100
                        })
                    }, t
                }(d.PureComponent),
                Z = n("V+q8"),
                K = n("oJmH"),
                Q = n("sV2v"),
                J = n("Jgup"),
                $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unsupportedCountries = new Set(["A1", "A2", "AP", "AQ", "CU", "EU", "IR", "KP", "MM", "O1", "SD", "SS", "SY", "TL"]), t.displayCountries = J.a.filter(function(e) {
                            return !t.unsupportedCountries.has(e)
                        }), t.onCountryChange = function(e) {
                            t.props.onChange({
                                countryCode: e.currentTarget.value,
                                zipCode: ""
                            })
                        }, t.onZipChange = function(e) {
                            t.props.onChange({
                                countryCode: t.props.countryCode,
                                zipCode: e.currentTarget.value
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(x.Ya, {
                            display: x.X.Flex,
                            flexWrap: x.Ba.Wrap
                        }, d.createElement(x.Ya, null, d.createElement(x.Ea, {
                            id: "country-of-residence",
                            label: Object(p.d)("Country of Residence", "CountryOfResidenceSelector"),
                            labelOptional: Object(p.d)("Price may vary", "CountryOfResidenceSelector")
                        }, d.createElement(x.Ab, {
                            onChange: this.onCountryChange,
                            value: this.props.countryCode
                        }, this.displayCountries.map(function(e) {
                            return d.createElement("option", {
                                key: e,
                                value: e
                            }, Object(J.b)(e))
                        })))), this.zipCodeRequired && d.createElement(x.Ya, {
                            margin: {
                                left: 1
                            }
                        }, d.createElement(x.Ea, {
                            id: "zip-code",
                            label: Object(p.d)("Postal Code", "CountryOfResidenceSelector")
                        }, d.createElement(x.Sa, {
                            type: x.Ua.Text,
                            placeholder: this.placeholderText,
                            value: this.props.zipCode || "",
                            error: this.props.zipCodeError,
                            onChange: this.onZipChange,
                            maxLength: this.zipCodeMaxLength
                        }))))
                    }, Object.defineProperty(t.prototype, "zipCodeRequired", {
                        get: function() {
                            return ["US", "CA"].includes(this.props.countryCode)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "placeholderText", {
                        get: function() {
                            switch (this.props.countryCode) {
                                case "US":
                                    return "12345";
                                case "CA":
                                    return "M5J 0A1";
                                default:
                                    return
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "zipCodeMaxLength", {
                        get: function() {
                            switch (this.props.countryCode) {
                                case "US":
                                    return 5;
                                case "CA":
                                    return 7;
                                default:
                                    return
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.PureComponent),
                ee = (n("lqDW"), function() {
                    return d.createElement(x.Fb, {
                        className: "payment-method--notice--unavailable",
                        display: x.X.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(x.tb, {
                        asset: x.ub.NotificationInfo
                    }), d.createElement(x.Ya, {
                        margin: {
                            left: 2
                        }
                    }, d.createElement(x.W, null, Object(p.d)('Please change your payment method and continue to checkout using the "{buttonLabel}” options.', {
                        buttonLabel: "More Methods"
                    }, "PaymentMethodNotice"))))
                });
            ! function(e) {
                e[e.ACTIVE = 0] = "ACTIVE", e[e.DISABLED = 1] = "DISABLED", e[e.HIDDEN = 2] = "HIDDEN"
            }(A || (A = {}));
            var te = n("KriR"),
                ne = n("GnwI"),
                re = (n("TEvY"), function() {
                    function e(e) {}
                    e.prototype.bind = function(e) {}
                }(), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            amazonScriptLoaded: null,
                            walletLoaded: null,
                            billingAgreementId: null,
                            awaitingResponse: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === A.ACTIVE,
                            zipCodeError: !1
                        }, t.handleSubmit = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e = this;
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.hasValidResidence() ? (this.setState({
                                                awaitingResponse: !0,
                                                zipCodeError: !1
                                            }), [4, this.props.onSuccess({
                                                payment_flow: te.b.RecurlyPayWithAmazon,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: this.state.billingAgreementId,
                                                    gateway: "amazon"
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                errorCallback: function() {
                                                    return e.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })]) : (this.setState({
                                                zipCodeError: !0
                                            }), [2]);
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t.hasValidResidence = function() {
                            return !t.props.showEuSubs || (!["US", "CA"].includes(t.state.userCountryOfResidence) || !!t.state.userZipCode)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        window.onAmazonLoginReady = function() {
                            window.amazon.Login.setClientId(e.props.clientID)
                        }, window.onAmazonPaymentsReady = function() {
                            e.props.latencyTracking.reportInteractive(), e.setState({
                                amazonScriptLoaded: !0
                            }), window.OffAmazonPayments.Button("recurly-amazon-pay__button", e.props.sellerID, {
                                type: "PwA",
                                color: "DarkGray",
                                useAmazonAddressBook: !1,
                                agreementType: "BillingAgreement",
                                authorization: function() {
                                    window.amazon.Login.authorize({
                                        scope: "profile payments:widget payments:autopay_consent payments:billing_address",
                                        popup: !0
                                    }, function(e) {
                                        if (e.error) return "err"
                                    })
                                },
                                onSignIn: function(t) {
                                    e.setState({
                                        walletLoaded: !0,
                                        billingAgreementId: t.getAmazonBillingAgreementId()
                                    }), e.initWidget()
                                }
                            })
                        };
                        var t = document.querySelector("#pwa-script");
                        t && document.body.removeChild(t);
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.id = "pwa-script", n.src = "https://static-na.payments-amazon.com/OffAmazonPayments/us" + (this.props.isProduction ? "" : "/sandbox") + "/js/Widgets.js?sellerId=" + this.props.sellerID, n.async = !0, document.body.appendChild(n)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.eligibilityStatus !== this.props.eligibilityStatus && this.setState({
                            paymentMethodEnabled: this.props.eligibilityStatus === A.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.initWidget = function() {
                        var e = {
                            agreementType: "BillingAgreement",
                            amazonBillingAgreementId: this.state.billingAgreementId,
                            sellerId: this.props.sellerID,
                            design: {
                                designMode: "responsive"
                            },
                            onPaymentSelect: function() {
                                return !0
                            },
                            onError: function() {
                                return !1
                            }
                        };
                        new window.OffAmazonPayments.Widgets.Wallet(e).bind("recurly-amazon-pay__wallet")
                    }, t.prototype.render = function() {
                        return this.state.amazonScriptLoaded ? d.createElement(d.Fragment, null, this.props.showEuSubs && d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement($, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), d.createElement(x.Fb, {
                            background: x.r.Base,
                            border: !0,
                            className: "recurly-amazon-pay"
                        }, !this.state.paymentMethodEnabled && d.createElement(x.Ya, {
                            display: x.X.Flex,
                            justifyContent: x.Xa.Center,
                            margin: 5
                        }, d.createElement(ee, null)), this.state.paymentMethodEnabled && d.createElement(d.Fragment, null, d.createElement(x.Ya, {
                            display: this.state.walletLoaded ? x.X.Hide : x.X.Flex,
                            justifyContent: x.Xa.Center,
                            margin: 5
                        }, d.createElement("div", {
                            id: "recurly-amazon-pay__button"
                        })), d.createElement(x.Ya, {
                            display: this.state.walletLoaded ? x.X.Flex : x.X.Hide,
                            flexDirection: x.Aa.Column,
                            alignItems: x.f.Center,
                            margin: {
                                top: 2
                            }
                        }, d.createElement("div", {
                            id: "recurly-amazon-pay__wallet",
                            className: "recurly-amazon-pay__wallet"
                        }), d.createElement(x.Ya, {
                            padding: {
                                top: 1
                            },
                            display: x.X.Flex,
                            justifyContent: x.Xa.Center
                        }, d.createElement(x.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? x.E.Loading : x.E.Default,
                            disabled: this.state.awaitingResponse
                        }, this.props.submitButtonCopy)))))) : d.createElement(x.ab, null)
                    }, t = l.__decorate([Object(ne.b)("RecurlyAmazonPay")], t)
                }(d.Component)),
                ie = n("/0dD"),
                ae = n("XDQu"),
                oe = n("6fcp"),
                se = (n("Aoab"), {
                    light: "#000",
                    dark: "#fff"
                }),
                ce = {
                    light: "#a49fad",
                    dark: "#898395"
                },
                le = function() {
                    return {
                        cvv: !1,
                        first_name: !1,
                        last_name: !1,
                        month: !1,
                        number: !1,
                        year: !1,
                        zip: !1
                    }
                },
                ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            firstName: "",
                            lastName: "",
                            recurlyReady: !1,
                            awaitingResponse: !1,
                            errorMessage: "",
                            errorState: le(),
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === A.ACTIVE
                        }, t.handleSubmit = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return l.__generator(this, function(n) {
                                    return e.preventDefault(), this.setState(function(e) {
                                        return {
                                            awaitingResponse: !0,
                                            errorState: l.__assign({}, e.errorState)
                                        }
                                    }), window.recurly.token(this.form, function(e, n) {
                                        return l.__awaiter(t, void 0, void 0, function() {
                                            var t;
                                            return l.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return t = this.validateResidence(), e || t.length ? (this.handleValidationError(e, t), this.setState({
                                                            awaitingResponse: !1
                                                        }), [3, 3]) : [3, 1];
                                                    case 1:
                                                        return [4, this.handleValidationSuccess(n)];
                                                    case 2:
                                                        r.sent(), r.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }), [2]
                                })
                            })
                        }, t.validateResidence = function() {
                            if (!t.props.showEuSubs) return [];
                            var e = [];
                            return ["US", "CA"].includes(t.state.userCountryOfResidence) && !t.state.userZipCode && e.push("zip"), e
                        }, t.handleValidationSuccess = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.onSuccess({
                                                payment_flow: te.b.RecurlyCreditCard,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: e.id,
                                                    gateway: "cc",
                                                    card_bin_country: e.billing_info && e.billing_info.cc_bin_country
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                errorCallback: function() {
                                                    return t.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleValidationError = function(e, n) {
                            var r = le(),
                                i = "";
                            n.length && n.forEach(function(e) {
                                r[e] = !0
                            }), e && (i = Object(p.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"), e.code !== oe.a.Validation && e.code !== oe.a.InvalidParameter || (e.fields && e.fields.forEach(function(e) {
                                r[e] = !0
                            }), i = Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"))), t.setState({
                                errorMessage: i,
                                errorState: r
                            })
                        }, t.handleFirstName = function(e) {
                            t.setState({
                                firstName: e.currentTarget.value
                            })
                        }, t.handleLastName = function(e) {
                            t.setState({
                                lastName: e.currentTarget.value
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this;
                        this.recurlyPollId = setInterval(function() {
                            window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                        }, 500)
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.recurlyPollId), clearInterval(this.hostedFieldPollId)
                    }, t.prototype.componentDidUpdate = function(e) {
                        window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs(), e.eligibilityStatus !== this.props.eligibilityStatus && this.setState({
                            paymentMethodEnabled: this.props.eligibilityStatus === A.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.render = function() {
                        var e = this;
                        return d.createElement(x.Ya, {
                            className: "recurly-credit-card",
                            fullWidth: !0
                        }, d.createElement(x.Ya, {
                            display: this.state.recurlyReady ? x.X.Hide : x.X.Block
                        }, d.createElement(x.ab, {
                            fillContent: !0
                        })), d.createElement(x.Ya, {
                            display: this.state.recurlyReady ? x.X.Block : x.X.Hide
                        }, d.createElement("form", {
                            className: "recurly-form",
                            ref: function(t) {
                                return e.form = t
                            }
                        }, d.createElement(x.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(x.Ea, {
                            id: "recurly-name",
                            label: Object(p.d)("Name", "RecurlyCreditCard")
                        }, d.createElement("div", {
                            id: "recurly-name"
                        }, d.createElement(x.Ja, {
                            gutterSize: x.Ka.Medium
                        }, d.createElement(x.P, {
                            cols: 6
                        }, d.createElement(x.Sa, {
                            id: "recurly-first-name",
                            type: x.Ua.Text,
                            placeholder: Object(p.d)("First Name", "RecurlyCreditCard"),
                            value: this.state.firstName,
                            onChange: this.handleFirstName,
                            error: this.state.errorState.first_name
                        }), d.createElement("input", {
                            type: "hidden",
                            "data-recurly": "first_name",
                            value: this.state.firstName
                        })), d.createElement(x.P, {
                            cols: 6
                        }, d.createElement(x.Sa, {
                            id: "recurly-last-name",
                            type: x.Ua.Text,
                            placeholder: Object(p.d)("Last Name", "RecurlyCreditCard"),
                            value: this.state.lastName,
                            onChange: this.handleLastName,
                            error: this.state.errorState.last_name
                        }), d.createElement("input", {
                            type: "hidden",
                            "data-recurly": "last_name",
                            value: this.state.lastName
                        })))))), d.createElement(x.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(x.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Credit Card", "RecurlyCreditCard")
                        }, d.createElement("div", {
                            id: "recurly-credit-card"
                        }, d.createElement(x.Ja, {
                            gutterSize: x.Ka.Medium
                        }, d.createElement(x.P, {
                            cols: 8
                        }, d.createElement("div", {
                            id: "recurly-number",
                            "data-recurly": "number",
                            className: this.state.errorState.number ? "recurly-error" : ""
                        })), d.createElement(x.P, {
                            cols: 4
                        }, d.createElement("div", {
                            id: "recurly-cvv",
                            "data-recurly": "cvv",
                            className: this.state.errorState.cvv ? "recurly-error" : ""
                        })))))), d.createElement(x.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(x.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Expiration Date", "RecurlyCreditCard")
                        }, d.createElement("div", {
                            id: "recurly-credit-card"
                        }, d.createElement(x.Ja, {
                            gutterSize: x.Ka.Medium
                        }, d.createElement(x.P, {
                            cols: 6
                        }, d.createElement("div", {
                            id: "recurly-month",
                            "data-recurly": "month",
                            className: this.state.errorState.month ? "recurly-error" : ""
                        })), d.createElement(x.P, {
                            cols: 6
                        }, d.createElement("div", {
                            id: "recurly-year",
                            "data-recurly": "year",
                            className: this.state.errorState.year ? "recurly-error" : ""
                        })))))), this.props.showEuSubs && d.createElement(x.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement($, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.errorState.zip,
                            onChange: this.handleCORChange
                        })), d.createElement("input", {
                            type: "hidden",
                            name: "recurly-country",
                            "data-recurly": "country",
                            value: "US"
                        }), d.createElement("input", {
                            type: "hidden",
                            name: "recurly-token",
                            "data-recurly": "token"
                        }), this.props.eligibilityStatus === A.DISABLED && d.createElement(ee, null), d.createElement(x.Ya, {
                            margin: {
                                top: 2
                            },
                            display: x.X.Flex,
                            justifyContent: x.Xa.Center,
                            breakpointLarge: {
                                justifyContent: x.Xa.Start
                            }
                        }, d.createElement(x.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? x.E.Loading : x.E.Default,
                            disabled: this.state.awaitingResponse || !this.state.paymentMethodEnabled
                        }, this.props.submitButtonCopy)))))
                    }, t.prototype.pollForHostedField = function() {
                        var e = this;
                        this.hostedFieldPollId = setInterval(function() {
                            document.querySelector(".recurly-hosted-field > iframe") && (e.setState({
                                recurlyReady: !0
                            }), clearInterval(e.hostedFieldPollId))
                        }, 500)
                    }, t.prototype.setupConfigs = function() {
                        var e = this.props.darkModeEnabled ? ce.dark : ce.light,
                            t = this.props.darkModeEnabled ? se.dark : se.light;
                        window.recurly.configure({
                            publicKey: this.props.publicKey,
                            fraud: {
                                kount: {
                                    dataCollector: !0
                                }
                            },
                            required: ["cvv"],
                            fields: {
                                all: {
                                    style: {
                                        height: "auto",
                                        fontSize: "12px",
                                        fontColor: t,
                                        placeholder: {
                                            color: e
                                        }
                                    }
                                },
                                number: {
                                    selector: "#recurly-number",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("Card Number", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                },
                                month: {
                                    selector: "#recurly-month",
                                    inputType: "select",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("Select Month", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                },
                                year: {
                                    selector: "#recurly-year",
                                    inputType: "select",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("Select Year", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                },
                                cvv: {
                                    selector: "#recurly-cvv",
                                    style: {
                                        fontColor: t,
                                        placeholder: {
                                            content: Object(p.d)("CVV", "RecurlyCreditCard"),
                                            color: e
                                        }
                                    }
                                }
                            }
                        })
                    }, t = l.__decorate([Object(ne.b)("RecurlyCreditCard")], t)
                }(d.Component);
            var de, pe = Object(i.connect)(function(e) {
                    return {
                        darkModeEnabled: Object(ae.a)(e) === ie.a.Dark
                    }
                })(ue),
                me = (n("a7Xb"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            paypalConfigured: !1,
                            awaitingResponse: !1,
                            hasError: !1,
                            zipCodeError: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === A.ACTIVE
                        }, t.handleValidationSuccess = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.onSuccess({
                                                payment_flow: te.b.RecurlyPaypal,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: e.id,
                                                    gateway: "paypal"
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                errorCallback: function() {
                                                    return t.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleValidationError = function() {
                            t.setState({
                                hasError: !0
                            })
                        }, t.handleClick = function() {
                            t.hasValidResidence() ? (t.setState({
                                awaitingResponse: !0,
                                hasError: !1,
                                zipCodeError: !1
                            }), t.paypalInstance.start()) : t.setState({
                                awaitingResponse: !1,
                                hasError: !0,
                                zipCodeError: !0
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t.hasValidResidence = function() {
                            return !t.props.showEuSubs || (!["US", "CA"].includes(t.state.userCountryOfResidence) || !!t.state.userZipCode)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.pollForRecurly = setInterval(function() {
                            window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                                paypalConfigured: !0
                            }))
                        }, 500)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.eligibilityStatus !== this.props.eligibilityStatus && this.setState({
                            paymentMethodEnabled: this.props.eligibilityStatus === A.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.pollForRecurly)
                    }, t.prototype.render = function() {
                        return this.state.paypalConfigured ? d.createElement(x.Ya, null, this.props.showEuSubs && d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement($, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), !this.state.paymentMethodEnabled && d.createElement(ee, null), d.createElement(x.Fb, {
                            className: "recurly-paypal",
                            background: x.r.Base,
                            border: !0,
                            display: x.X.Flex,
                            justifyContent: x.Xa.Center
                        }, d.createElement(x.Ya, {
                            margin: {
                                top: 5
                            }
                        }, d.createElement(x.z, {
                            "data-a-target": "recurly-paypal__button",
                            onClick: this.handleClick,
                            state: this.state.awaitingResponse ? x.E.Loading : x.E.Default,
                            disabled: this.state.awaitingResponse || !this.state.paymentMethodEnabled
                        }, Object(p.d)("Checkout With PayPal", "RecurlyPaypal"))))) : d.createElement(x.Ya, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(x.ab, null))
                    }, t.prototype.setupConfigs = function() {
                        var e = this;
                        window.recurly.configure(this.props.publicKey);
                        var t = window.recurly.PayPal({
                            braintree: {
                                clientAuthorization: this.props.braintreeClientAuthorization
                            }
                        });
                        t.on("token", function(t) {
                            e.handleValidationSuccess(t)
                        }), t.on("error", function() {
                            e.handleValidationError(), e.setState({
                                awaitingResponse: !1
                            })
                        }), t.on("cancel", function() {
                            e.setState({
                                awaitingResponse: !1
                            })
                        }), this.paypalInstance = t
                    }, t = l.__decorate([Object(ne.b)("RecurlyPaypal")], t)
                }(d.Component)),
                he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            xsollaLoaded: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode
                        }, t.onIframeLoad = function() {
                            t.props.latencyTracking.reportInteractive(), t.setState({
                                xsollaLoaded: !0
                            })
                        }, t.handleXsollaEvent = function(e) {
                            if ((!e.origin || e.origin.includes("xsolla")) && e.data) try {
                                var n = JSON.parse(e.data);
                                if (n.command && "status" === n.command)
                                    if (n.data && n.data.paymentInfo) switch (n.data.paymentInfo.status) {
                                        case "done":
                                            t.props.trackPaymentFormInteraction({
                                                paymentFlow: te.b.Xsolla,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Pending
                                            }), t.props.trackPaymentFormInteraction({
                                                paymentFlow: te.b.Xsolla,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Success
                                            });
                                            break;
                                        case "troubled":
                                            t.props.trackPaymentFormInteraction({
                                                paymentFlow: te.b.Xsolla,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Pending
                                            }), t.props.trackPaymentFormInteraction({
                                                paymentFlow: te.b.Xsolla,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Failed
                                            })
                                    }
                            } catch (e) {}
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                xsollaLoaded: !1
                            }), t.props.handleCountryChange(e.countryCode)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.iframe;
                        e && (e.addEventListener("load", this.onIframeLoad), window.addEventListener("message", this.handleXsollaEvent))
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("message", this.handleXsollaEvent)
                    }, t.prototype.render = function() {
                        var e = this;
                        return d.createElement(d.Fragment, null, this.props.showEuSubs && d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement($, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: !1,
                            onChange: this.handleCORChange
                        })), d.createElement(x.Ya, {
                            fullWidth: !0
                        }, !this.state.xsollaLoaded && d.createElement(x.ab, {
                            fillContent: !0
                        }), d.createElement(x.Ya, {
                            fullWidth: !0,
                            display: this.state.xsollaLoaded ? x.X.Inline : x.X.Hide
                        }, d.createElement("iframe", {
                            ref: function(t) {
                                return e.iframe = t
                            },
                            id: "xsolla",
                            src: this.props.iframeURL,
                            width: "100%",
                            height: "650px"
                        }))))
                    }, t = l.__decorate([Object(ne.b)("XsollaMoreMethods")], t)
                }(d.Component),
                fe = n("f00E"),
                ye = n("WlZp");
            n("vGoz");
            ! function(e) {
                e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
            }(de || (de = {}));
            var ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        zuoraConfigured: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        nullValueErrors: [],
                        sessionId: Object(fe.b)()
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.setState({
                            awaitingResponse: !0,
                            errorMessage: "",
                            nullValueErrors: []
                        }), window.Z.submit()
                    }, t.renderErrorMessage = function() {
                        if (t.state.nullValueErrors.length) {
                            var e = t.state.nullValueErrors.map(function(e, t) {
                                return d.createElement(x.Ya, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, d.createElement(x.W, {
                                    color: x.O.Error
                                }, "• ", e))
                            });
                            return d.createElement("div", null, d.createElement(x.Ya, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, d.createElement(x.W, {
                                color: x.O.Error
                            }, Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                        }
                        if (t.state.errorMessage) return d.createElement(x.Ya, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, d.createElement(x.W, {
                            color: x.O.Error
                        }, t.state.errorMessage))
                    }, t.successCallback = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t = this;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!e.success) return [2];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_flow: te.b.ZuoraCreditCard,
                                            payment_provider: "zuora",
                                            payment_info: {
                                                token: e.refId,
                                                gateway: "cc"
                                            },
                                            errorCallback: function() {
                                                return t.setState({
                                                    awaitingResponse: !1
                                                })
                                            }
                                        })];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.errorCallback = function(e, n, r) {
                        if (t.setState({
                                awaitingResponse: !1
                            }), "unknown" === n) return t.parseGatewayErrorMessage(r);
                        window.Z.sendErrorMessageToHpm(e, r)
                    }, t.parseGatewayErrorMessage = function(e) {
                        return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                            errorMessage: Object(p.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                        }) : t.setState({
                            errorMessage: Object(p.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            r = {
                                creditCardHolderName: Object(p.d)("Name on Card", "ZuoraCreditCard"),
                                creditCardAddress1: Object(p.d)("Billing Address", "ZuoraCreditCard"),
                                creditCardCity: Object(p.d)("City", "ZuoraCreditCard"),
                                creditCardPostalCode: Object(p.d)("Zip Code", "ZuoraCreditCard")
                            },
                            i = n.map(function(e) {
                                var t = r[e];
                                return t || ""
                            }).filter(function(e) {
                                return "" !== e
                            });
                        t.setState({
                            nullValueErrors: i
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                    else {
                        var t = document.createElement("script");
                        t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                            e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                        }
                    }
                }, t.prototype.render = function() {
                    return d.createElement("div", null, !this.state.zuoraConfigured && d.createElement(x.Ya, {
                        padding: {
                            y: 5
                        }
                    }, d.createElement(x.ab, {
                        fillContent: !0
                    })), d.createElement(x.Ya, {
                        display: this.state.zuoraConfigured ? x.X.Block : x.X.Hide,
                        "data-test-selector": de.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), d.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.awaitingResponse ? "zuora-disabled" : ""
                    }), d.createElement(x.Ya, {
                        margin: {
                            top: 2
                        },
                        display: x.X.Flex,
                        justifyContent: x.Xa.Center,
                        breakpointLarge: {
                            justifyContent: x.Xa.Start
                        }
                    }, d.createElement(x.z, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? x.E.Loading : x.E.Default,
                        disabled: this.state.awaitingResponse,
                        "data-test-selector": de.UPDATE_PAYMENT_BUTTON
                    }, this.props.submitButtonCopy)), d.createElement(ye.a, {
                        isProduction: this.props.isProductionConfig,
                        sessionId: this.state.sessionId
                    })))
                }, t.prototype.initZuoraIFrame = function() {
                    var e = this,
                        t = {
                            id: this.props.hostedPageID,
                            url: this.props.hostedPageURL,
                            style: "inline",
                            submitEnabled: "true",
                            field_accountId: this.props.externalAccountID,
                            tenantId: this.props.tenantID,
                            token: this.props.token,
                            key: this.props.publicKey,
                            signature: this.props.signature,
                            locale: this.formattedLocale
                        };
                    window.Z.renderWithErrorHandler(t, {
                        creditCardCountry: "USA"
                    }, this.successCallback, this.errorCallback);
                    var n = document.getElementById("z_hppm_iframe");
                    n && n.addEventListener("load", function() {
                        e.setState({
                            zuoraConfigured: !0
                        })
                    })
                }, Object.defineProperty(t.prototype, "formattedLocale", {
                    get: function() {
                        var e = this.props.languageCode || "en";
                        if (e.includes("-")) {
                            var t = e.split("-");
                            e = t[0] + "_" + t[1].toUpperCase()
                        }
                        return e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t = l.__decorate([Object(ne.b)("ZuoraCreditCard")], t)
            }(d.Component);
            var be, ve = Object(i.connect)(function(e) {
                return {
                    languageCode: Object(c.b)(e)
                }
            })(ge);
            ! function(e) {
                e.RecurlyAmazonPay = "recurly_amazon_pay", e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlySavedPayment = "recurly_saved_payment", e.Xsolla = "xsolla", e.ZuoraCreditCard = "zuora_credit_card"
            }(be || (be = {}));
            var Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.submitButtonCopy = Object(p.d)("Complete Purchase", "PaymentMethods"), t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        switch (this.props.type) {
                            case be.RecurlyAmazonPay:
                                return d.createElement(re, l.__assign({
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase
                                }, this.props.configs.recurly.payWithAmazonConfigs, {
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                }));
                            case be.RecurlyCreditCard:
                                return d.createElement(pe, {
                                    publicKey: this.props.configs.recurly.publicKey,
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                });
                            case be.RecurlyPaypal:
                                return d.createElement(me, {
                                    publicKey: this.props.configs.recurly.publicKey,
                                    braintreeClientAuthorization: this.props.configs.recurly.braintreeClientAuthorization,
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                });
                            case be.ZuoraCreditCard:
                                return d.createElement(ve, l.__assign({
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    isProductionConfig: this.props.configs.recurly.payWithAmazonConfigs.isProduction
                                }, this.props.configs.zuora));
                            default:
                                return d.createElement(he, l.__assign({
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    handleCountryChange: this.props.handleCountryChange,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                }, this.props.configs.xsolla))
                        }
                    }, t
                }(d.PureComponent),
                Ce = n("D8NC"),
                ke = n.n(Ce),
                Pe = n("yrda"),
                Se = n.n(Pe),
                xe = n("csmi"),
                Oe = n.n(xe),
                Ie = n("2ORI"),
                we = n.n(Ie),
                _e = n("AVF4"),
                Ne = n.n(_e),
                Te = n("BIez"),
                De = n.n(Te),
                Fe = n("EF6p"),
                je = n.n(Fe),
                Re = n("xgE2"),
                Ae = n.n(Re),
                Me = n("MU3X"),
                Le = n.n(Me),
                Be = n("E3rh"),
                Ue = n.n(Be),
                We = n("ZiR0"),
                ze = n.n(We),
                Ge = n("KRuc"),
                Ye = n.n(Ge),
                He = n("IRK4"),
                qe = n.n(He),
                Xe = n("bvmA"),
                Ve = n.n(Xe),
                Ze = n("1OTy"),
                Ke = {
                    CreditCard: function() {
                        return Object(p.d)("Credit Card", "TicketDescription")
                    },
                    Paypal: function() {
                        return Object(p.d)("Paypal", "TicketDescription")
                    },
                    AmazonPay: function() {
                        return Object(p.d)("Amazon Pay", "TicketDescription")
                    },
                    MoreMethods: function() {
                        return Object(p.d)("More Methods", "TicketDescription")
                    }
                },
                Qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.paymentProviders = [{
                            paymentMethodType: be.RecurlyCreditCard,
                            paymentFlow: te.b.RecurlyCreditCard,
                            button: {
                                label: Ke.CreditCard(),
                                src: Ne.a,
                                alt: Ke.CreditCard(),
                                srcSet: {
                                    "1x": Ne.a,
                                    "2x": De.a
                                },
                                darkSrcSet: {
                                    "1x": Ne.a,
                                    "2x": De.a
                                }
                            }
                        }, {
                            paymentMethodType: be.ZuoraCreditCard,
                            paymentFlow: te.b.ZuoraCreditCard,
                            button: {
                                label: Ke.CreditCard(),
                                src: Ne.a,
                                alt: Ke.CreditCard(),
                                srcSet: {
                                    "1x": Ne.a,
                                    "2x": De.a
                                },
                                darkSrcSet: {
                                    "1x": Ne.a,
                                    "2x": De.a
                                }
                            }
                        }, {
                            paymentMethodType: be.RecurlyPaypal,
                            paymentFlow: te.b.RecurlyPaypal,
                            button: {
                                label: Ke.Paypal(),
                                src: ze.a,
                                alt: Ke.Paypal(),
                                srcSet: {
                                    "1x": ze.a,
                                    "2x": Ye.a
                                },
                                darkSrcSet: {
                                    "1x": qe.a,
                                    "2x": Ve.a
                                }
                            }
                        }, {
                            paymentMethodType: be.RecurlyAmazonPay,
                            paymentFlow: te.b.RecurlyPayWithAmazon,
                            button: {
                                label: Ke.AmazonPay(),
                                src: ke.a,
                                alt: Ke.AmazonPay(),
                                srcSet: {
                                    "1x": ke.a,
                                    "2x": Se.a
                                },
                                darkSrcSet: {
                                    "1x": Oe.a,
                                    "2x": we.a
                                }
                            }
                        }, {
                            paymentMethodType: be.Xsolla,
                            paymentFlow: te.b.Xsolla,
                            button: {
                                label: Ke.MoreMethods(),
                                src: je.a,
                                alt: Ke.MoreMethods(),
                                srcSet: {
                                    "1x": je.a,
                                    "2x": Ae.a
                                },
                                darkSrcSet: {
                                    "1x": Le.a,
                                    "2x": Ue.a
                                }
                            }
                        }], t.handleClick = function(e, n) {
                            return function() {
                                t.props.trackPaymentFormInteraction({
                                    paymentFlow: n,
                                    action: te.a.RadioButtonClick,
                                    actionDetail: n
                                }), t.props.handleClick(e)
                            }
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (this.props.eligiblePaymentMethods.length <= 1) return null;
                        var e = this,
                            t = this.paymentProviders.map(function(t) {
                                var n = e.props.eligiblePaymentMethods.find(function(e) {
                                    return e.type === t.paymentMethodType
                                });
                                return n && n.status !== A.HIDDEN ? d.createElement(x.P, {
                                    key: t.paymentMethodType,
                                    cols: {
                                        default: 6,
                                        sm: 3
                                    }
                                }, d.createElement(Ze.a, {
                                    label: t.button.label,
                                    type: x.Na.Radio,
                                    src: t.button.src,
                                    alt: t.button.alt,
                                    srcSet: t.button.srcSet,
                                    darkSrcSet: t.button.darkSrcSet,
                                    value: t.paymentMethodType,
                                    onChange: e.handleClick(t.paymentMethodType, t.paymentFlow),
                                    checked: e.props.selectedProvider === t.paymentMethodType
                                })) : null
                            });
                        return d.createElement(x.Ya, null, d.createElement(x.Ja, {
                            gutterSize: x.Ka.Small
                        }, t))
                    }, t
                }(d.PureComponent),
                Je = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedProvider: null
                        }, t.renderPaymentMethods = function() {
                            var e = t.props,
                                n = e.configs,
                                r = e.handleCompletePurchase,
                                i = e.handleCountryChange,
                                a = e.trackPaymentFormInteraction,
                                o = t.props.eligiblePaymentMethods,
                                s = t.state.selectedProvider || t.defaultProvider,
                                c = t;
                            return Object.values(be).map(function(e) {
                                var t = o.find(function(t) {
                                    return t.type === e
                                });
                                return t && t.status !== A.HIDDEN ? d.createElement(x.Ya, {
                                    key: t.type,
                                    display: s === e ? x.X.Inline : x.X.Hide
                                }, d.createElement(Ee, {
                                    type: t.type,
                                    configs: n,
                                    eligibilityStatus: t.status,
                                    userCountryOfResidence: c.props.userCountryOfResidence,
                                    userZipCode: c.props.userZipCode,
                                    handleCompletePurchase: r,
                                    handleCountryChange: i,
                                    trackPaymentFormInteraction: a,
                                    showEuSubs: c.props.showEuSubs
                                })) : null
                            })
                        }, t.handlePaymentMethodSelectorToggleChange = function(e) {
                            t.setState({
                                selectedProvider: e
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(d.Fragment, null, d.createElement(Qe, {
                            eligiblePaymentMethods: this.props.eligiblePaymentMethods,
                            selectedProvider: this.state.selectedProvider || this.defaultProvider,
                            handleClick: this.handlePaymentMethodSelectorToggleChange,
                            trackPaymentFormInteraction: this.props.trackPaymentFormInteraction
                        }), d.createElement(Q.a, null), d.createElement(x.Ya, {
                            margin: {
                                top: 1
                            }
                        }, this.renderPaymentMethods()))
                    }, Object.defineProperty(t.prototype, "defaultProvider", {
                        get: function() {
                            if (!this.state.selectedProvider)
                                for (var e = [be.RecurlyCreditCard, be.ZuoraCreditCard, be.RecurlyPaypal, be.RecurlyAmazonPay, be.Xsolla], t = this.props.eligiblePaymentMethods.filter(function(e) {
                                        return e.status !== A.HIDDEN
                                    }).map(function(e) {
                                        return e.type
                                    }), n = 0, r = e; n < r.length; n++) {
                                    var i = r[n];
                                    if (t.includes(i)) return i
                                }
                            return be.Xsolla
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                $e = n("85n/"),
                et = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            awaitingResponse: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            zipCodeError: !1,
                            paymentMethodEnabled: t.props.eligibility.status === A.ACTIVE
                        }, t.isPaymentMethodExpired = function(e) {
                            var n = t.zeroIndexedMonth(e),
                                r = e.expirationYear;
                            if (void 0 === n || !r) return !1;
                            var i = Object(u.startOfMonth)(new Date),
                                a = new Date(r, n, 1);
                            return !!Object(u.isBefore)(a, i)
                        }, t.zeroIndexedMonth = function(e) {
                            if (e.expirationMonth) return e.expirationMonth - 1
                        }, t.handleSubmit = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return l.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.hasValidResidence()) return this.setState({
                                                zipCodeError: !0
                                            }), [2];
                                            switch (this.setState({
                                                awaitingResponse: !0,
                                                zipCodeError: !1
                                            }), this.props.savedPaymentMethod.paymentType.toUpperCase()) {
                                                case E.F.AMAZON:
                                                    e = te.b.RecurlyPayWithAmazon, t = "amazon";
                                                    break;
                                                case E.F.PAYPAL:
                                                    e = te.b.RecurlyPaypal, t = "paypal";
                                                    break;
                                                default:
                                                    e = te.b.RecurlyCreditCard, t = "cc"
                                            }
                                            return [4, this.props.handleCompletePurchase({
                                                payment_flow: e,
                                                payment_provider: "recurly",
                                                payment_info: {
                                                    token: "",
                                                    gateway: t,
                                                    card_bin_country: null
                                                },
                                                residence: {
                                                    country_code: this.state.userCountryOfResidence,
                                                    zip_code: this.state.userZipCode
                                                },
                                                savedPayment: !0,
                                                errorCallback: function() {
                                                    return n.setState({
                                                        awaitingResponse: !1
                                                    })
                                                }
                                            })];
                                        case 1:
                                            return r.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleCORChange = function(e) {
                            t.setState({
                                userCountryOfResidence: e.countryCode,
                                userZipCode: e.zipCode,
                                paymentMethodEnabled: !0
                            })
                        }, t.hasValidResidence = function() {
                            return !t.props.showEuSubs || (!["US", "CA"].includes(t.state.userCountryOfResidence) || !!t.state.userZipCode)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.eligibility !== this.props.eligibility && this.setState({
                            paymentMethodEnabled: this.props.eligibility.status === A.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.savedPaymentMethod,
                            t = this.isPaymentMethodExpired(e);
                        return d.createElement(d.Fragment, null, d.createElement(x.Fb, {
                            background: x.r.Base,
                            border: !0,
                            borderRadius: x.x.Small,
                            padding: 2
                        }, d.createElement($e.a, {
                            paymentType: e.paymentType,
                            cardType: e.cardType,
                            provider: e.provider,
                            lastFour: e.lastFour,
                            expirationYear: e.expirationYear,
                            billingEmail: e.billingEmail,
                            expirationMonth: e.expirationMonth
                        })), this.props.showEuSubs && d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement($, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), !this.state.paymentMethodEnabled && d.createElement(ee, null), d.createElement(x.Ya, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(x.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? x.E.Loading : x.E.Default,
                            disabled: this.state.awaitingResponse || t || !this.state.paymentMethodEnabled
                        }, Object(p.d)("Complete Purchase", "SavedMethods"))))
                    }, t
                }(d.Component),
                tt = function() {
                    function e(e) {
                        var t = this;
                        this.recurlyCountries = p.b.get("payments_recurly_countries", ["US"]), this.payPalEuSubsEnabled = p.b.get("paypal_eu_subs", !1), this.getDeterminedTaxCountry = function() {
                            if (t.userBestGuessCountry) return t.userBestGuessCountry;
                            var e = t.savedPaymentMethodBillingCountry;
                            return t.ipCountryCode && e && t.userCountryOfResidence ? t.ipCountryCode === e ? t.ipCountryCode : t.userCountryOfResidence : t.userCountryOfResidence ? t.userCountryOfResidence : t.ipCountryCode
                        }, this.productName = e.productName, this.userCountryOfResidence = e.userCountryOfResidence, this.ipCountryCode = e.ipCountryCode || "", this.userBestGuessCountry = e.userBestGuessCountry, this.savedPaymentMethodBillingCountry = e.savedPaymentMethodBillingCountry, this.savedPaymentMethodPaymentType = e.savedPaymentMethodPaymentType, this.showEuSubs = e.showEuSubs, this.disablePayPal = e.disablePayPal, this.disableAmazonPay = e.disableAmazonPay
                    }
                    return e.prototype.getAvailableMethods = function() {
                        if (!this.showEuSubs) return "owlallaccess2018" === this.productName ? [be.ZuoraCreditCard, be.Xsolla] : "US" !== this.ipCountryCode ? [be.Xsolla] : [be.RecurlyCreditCard, be.RecurlyPaypal, be.RecurlyAmazonPay, be.RecurlySavedPayment, be.Xsolla];
                        var e = [];
                        return this.recurlyCountries.includes(this.getDeterminedTaxCountry()) && "owlallaccess2018" !== this.productName && (this.recurlyCreditCardEligible && e.push(be.RecurlyCreditCard), this.recurlyPaypalEligible && e.push(be.RecurlyPaypal), this.recurlyAmazonPayEligible && e.push(be.RecurlyAmazonPay), this.recurlySavedPaymentEligible && e.push(be.RecurlySavedPayment)), this.xsollaEligible && e.push(be.Xsolla), this.zuoraCreditCardEligible && e.push(be.ZuoraCreditCard), e
                    }, Object.defineProperty(e.prototype, "recurlySavedPaymentEligible", {
                        get: function() {
                            if (this.savedPaymentMethodPaymentType) switch (this.savedPaymentMethodPaymentType.toUpperCase()) {
                                case E.F.AMAZON:
                                    return this.recurlyAmazonPayEligible;
                                case E.F.CREDIT_CARD:
                                    return this.recurlyCreditCardEligible;
                                case E.F.PAYPAL:
                                    return this.recurlyPaypalEligible;
                                default:
                                    return !1
                            }
                            return !1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "recurlyAmazonPayEligible", {
                        get: function() {
                            return !this.disableAmazonPay && "US" === this.getDeterminedTaxCountry()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "recurlyCreditCardEligible", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "recurlyPaypalEligible", {
                        get: function() {
                            return !this.disablePayPal && ("US" === this.getDeterminedTaxCountry() || this.payPalEuSubsEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "xsollaEligible", {
                        get: function() {
                            return !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "zuoraCreditCardEligible", {
                        get: function() {
                            return "owlallaccess2018" === this.productName
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }(),
                nt = n("iWNC");
            var rt = function(e) {
                var t = Date.now() - e;
                return function() {
                    var n = Date.now();
                    return t + e <= n ? (t = n, "cache-and-network") : "cache-first"
                }
            }(3e3);
            var it = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            useSavedPaymentMethod: !0,
                            eligiblePaymentMethods: []
                        }, t.tracker = new te.d({
                            allowDuplicateEvents: !1
                        }), t.toggleChangePaymentMethods = function() {
                            t.setState(function(e) {
                                return {
                                    useSavedPaymentMethod: !e.useSavedPaymentMethod
                                }
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        (this.dataReady(this.props) || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), null !== this.tracker.get("savedPaymentAvailable") && null !== this.tracker.get("savedPaymentDisplayed") && this.tracker.reportEvent());
                        var e = this.savedPaymentMethod;
                        this.eligibilityComputer = new tt({
                            productName: this.props.productName,
                            userCountryOfResidence: this.props.countryOfResidence,
                            ipCountryCode: this.props.ipCountryCode,
                            userBestGuessCountry: this.props.userBestGuessCountry,
                            savedPaymentMethodBillingCountry: e ? e.billingCountry : null,
                            savedPaymentMethodPaymentType: e ? e.paymentType : null,
                            showEuSubs: this.props.showEuSubs,
                            disablePayPal: this.disablePayPal,
                            disableAmazonPay: this.disableAmazonPay
                        });
                        var t = this.eligibilityComputer.getAvailableMethods();
                        if (this.props.showEuSubs) {
                            var n = Object.values(be).map(function(e) {
                                return {
                                    type: e,
                                    status: t.includes(e) ? A.ACTIVE : A.HIDDEN
                                }
                            });
                            this.setState({
                                eligiblePaymentMethods: n
                            })
                        } else {
                            n = t.map(function(e) {
                                return {
                                    type: e,
                                    status: A.ACTIVE
                                }
                            });
                            this.setState({
                                eligiblePaymentMethods: n
                            })
                        }
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        (this.dataReady(this.props) || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), null !== this.tracker.get("savedPaymentAvailable") && null !== this.tracker.get("savedPaymentDisplayed") && this.tracker.reportEvent());
                        var n = this.savedPaymentMethod;
                        if (e.userBestGuessCountry !== this.props.userBestGuessCountry || e.data && this.props.data && e.data.currentUser !== this.props.data.currentUser || !this.dataReady(e) && this.dataReady(this.props)) {
                            this.eligibilityComputer = new tt({
                                productName: this.props.productName,
                                userCountryOfResidence: this.props.countryOfResidence,
                                ipCountryCode: this.props.ipCountryCode,
                                userBestGuessCountry: this.props.userBestGuessCountry,
                                savedPaymentMethodBillingCountry: n ? n.billingCountry : null,
                                savedPaymentMethodPaymentType: n ? n.paymentType : null,
                                showEuSubs: this.props.showEuSubs,
                                disablePayPal: this.disablePayPal,
                                disableAmazonPay: this.disableAmazonPay
                            });
                            var r = this.eligibilityComputer.getAvailableMethods();
                            if (this.props.showEuSubs) {
                                var i = Object.values(be).map(function(e) {
                                    var n = t.eligiblePaymentMethods.find(function(t) {
                                            return t.type === e
                                        }),
                                        i = n && n.status === A.HIDDEN ? A.HIDDEN : A.DISABLED;
                                    return {
                                        type: e,
                                        status: r.includes(e) ? A.ACTIVE : i
                                    }
                                });
                                this.setState({
                                    eligiblePaymentMethods: i
                                })
                            } else {
                                i = r.map(function(e) {
                                    return {
                                        type: e,
                                        status: A.ACTIVE
                                    }
                                });
                                this.setState({
                                    eligiblePaymentMethods: i
                                })
                            }
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.error);
                        else if (!this.dataReady(this.props)) return d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(x.jb, {
                            lineCount: 6
                        }));
                        var e = this.savedPaymentMethodEligibility,
                            t = this.state.eligiblePaymentMethods.filter(function(e) {
                                return e.status !== A.HIDDEN
                            });
                        return d.createElement(d.Fragment, null, this.renderWalletHeader(), this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature && this.savedPaymentMethod && this.props.ipCountryCode && e && d.createElement(et, {
                            handleCompletePurchase: this.props.handleCompletePurchase,
                            savedPaymentMethod: this.savedPaymentMethod,
                            handleCountryChange: this.props.handleCountryChange,
                            eligibility: e,
                            userCountryOfResidence: this.props.countryOfResidence || this.props.ipCountryCode,
                            userZipCode: this.props.userZipCode,
                            showEuSubs: this.props.showEuSubs
                        }), this.props.configs && t.length > 0 && !(this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature) && this.props.ipCountryCode && d.createElement(x.Ya, {
                            "data-a-target": "PAYMENT_METHOD_SELECTOR"
                        }, d.createElement(Je, {
                            handleCompletePurchase: this.props.handleCompletePurchase,
                            handleCountryChange: this.props.handleCountryChange,
                            trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                            eligiblePaymentMethods: t,
                            userCountryOfResidence: this.props.countryOfResidence || this.props.ipCountryCode,
                            userZipCode: this.props.userZipCode,
                            configs: this.props.configs,
                            showEuSubs: this.props.showEuSubs
                        })))
                    }, t.prototype.renderWalletHeader = function() {
                        return d.createElement(x.Ya, {
                            display: x.X.Flex,
                            justifyContent: x.Xa.Between,
                            margin: {
                                y: 2
                            }
                        }, this.renderWalletTitle(), d.createElement(x.Ya, {
                            padding: {
                                left: 1
                            },
                            display: x.X.Flex,
                            alignItems: x.f.End
                        }, this.renderPaymentMethodToggle()))
                    }, t.prototype.renderWalletTitle = function() {
                        return this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature ? d.createElement(x.W, {
                            type: x.Wb.H4,
                            bold: !0
                        }, Object(p.d)("Saved Payment Method", "Wallet")) : d.createElement(x.W, {
                            type: x.Wb.H4,
                            bold: !0
                        }, Object(p.d)("Choose Your Payment Method", "Wallet"))
                    }, t.prototype.renderPaymentMethodToggle = function() {
                        if (this.showSavedPaymentsFeature) return this.state.useSavedPaymentMethod ? d.createElement(x.U, {
                            onClick: this.toggleChangePaymentMethods,
                            "data-a-target": "js-test-change-payment-method"
                        }, Object(p.d)("Change Payment Method", "Wallet")) : d.createElement(x.Ya, {
                            display: x.X.Flex
                        }, d.createElement(x.tb, {
                            asset: x.ub.AngleLeft,
                            width: 10,
                            height: 10,
                            type: x.vb.Brand
                        }), d.createElement(x.Ya, {
                            margin: {
                                left: 1
                            }
                        }, d.createElement(x.U, {
                            onClick: this.toggleChangePaymentMethods,
                            "data-a-target": "js-test-use-existing-payment-method"
                        }, Object(p.d)("Use Existing Payment Method", "Wallet"))))
                    }, Object.defineProperty(t.prototype, "isLargePurchase", {
                        get: function() {
                            if (!this.props.product) return !1;
                            var e = this.props.product.product.priceInfo,
                                t = this.props.product.quantity;
                            return e.total * t > 5e3
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showSavedPaymentsFeature", {
                        get: function() {
                            if (this.props.data && this.props.data.error) return !1;
                            if (!this.savedPaymentMethodEligibility || this.savedPaymentMethodEligibility.status === A.HIDDEN) return !1;
                            if ("owlallaccess2018" === this.props.productName) return !1;
                            if (this.savedPaymentMethod) {
                                if (this.isLargePurchase) {
                                    if (this.savedPaymentMethod.isRestricted) {
                                        var e = !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.settings && this.props.data.currentUser.settings.hasTwoFactorEnabled);
                                        return this.tracker.set({
                                            savedPaymentAvailable: !0,
                                            savedPaymentDisplayed: e
                                        }), e
                                    }
                                    return this.tracker.set({
                                        savedPaymentAvailable: !0,
                                        savedPaymentDisplayed: !0
                                    }), !0
                                }
                                return !0
                            }
                            return !1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "savedPaymentMethodEligibility", {
                        get: function() {
                            return this.state.eligiblePaymentMethods.find(function(e) {
                                return e.type === be.RecurlySavedPayment
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "savedPaymentMethod", {
                        get: function() {
                            var e = (this.props.data && this.props.data.currentUser && this.props.data.currentUser.paymentMethods || []).filter(function(e) {
                                return e.provider.toUpperCase() === E.G.RECURLY
                            })[0];
                            return e ? e.paymentType.toUpperCase() === E.F.PAYPAL && this.disablePayPal ? null : e.paymentType.toUpperCase() === E.F.AMAZON && this.disableAmazonPay ? null : e : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "disablePayPal", {
                        get: function() {
                            return !this.props.configs || !this.props.configs.recurly.braintreeClientAuthorization
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "disableAmazonPay", {
                        get: function() {
                            return !this.props.configs || !this.props.configs.recurly.payWithAmazonConfigs.clientID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.dataReady = function(e) {
                        return !!(e.configs && e.product && e.ipCountryCode && e.data.currentUser)
                    }, t
                }(d.Component),
                at = Object(K.compose)(Object(ne.b)("Wallet"), Object(h.a)(nt, {
                    options: function() {
                        return {
                            fetchPolicy: rt()
                        }
                    }
                }))(it);
            var ot, st, ct = n("T3lN");
            ! function(e) {
                e.ELIGIBLE_PURCHASE = "ELIGIBLE_PURCHASE", e.INELIGIBLE_PURCHASE = "INELIGIBLE_PURCHASE"
            }(st || (st = {}));
            var lt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            progress: _.a.NOT_STARTED,
                            showErrors: !1,
                            userBestGuessCountry: null
                        }, t.enablePaidUpgradeFlag = p.b.get("earth_wind_fire", !1), t.paidUpgradePromotionStartDate = p.b.get("earth_wind_fire_start", "2018-09-10T00:00:00Z"), t.paidUpgradePromotionEndDate = p.b.get("earth_wind_fire_end", "2018-11-02T59:59:59Z"), t.recurlyTaxEnabled = p.b.get("recurly_tax_enabled", "false"), t.pubsubTimeout = 3e4, t.inAsyncCheckoutExperiment = "async_checkout" === p.p.experiments.getAssignment(v.b.AsyncCheckout), t.trackPaymentFormInteraction = function(e) {
                            if (t.props.data.subscriptionProduct) {
                                var n = t.props.isGift ? te.e.Gifting : te.e.Personal;
                                t.props.mysteryGiftCount && (n = te.e.MysteryGifting);
                                var r = {
                                    channelLogin: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.login,
                                    channelId: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.id,
                                    paymentType: n,
                                    productId: t.props.productName,
                                    quantity: t.props.mysteryGiftCount || 1,
                                    ticketPrice: t.props.data.subscriptionProduct.priceInfo.total,
                                    currency: t.props.data.subscriptionProduct.priceInfo.currency,
                                    paymentFlow: e.paymentFlow,
                                    action: e.action,
                                    actionDetail: e.actionDetail || "",
                                    savedPayment: e.savedPayment || !1,
                                    isAnonymous: t.props.isAnonymous,
                                    trackingContext: t.props.trackingContext
                                };
                                Object(te.g)(r)
                            }
                        }, t.handleCountryChange = function(e) {
                            t.setState({
                                userBestGuessCountry: e
                            });
                            var n = l.__assign({}, t.props.data.variables, {
                                taxCountry: e
                            });
                            t.props.data.refetch(n)
                        }, t.completePurchase = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, i, a, o = this;
                                return l.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t = this.props.data.subscriptionProduct, n = this.isAsync, r = {
                                                payment_provider: e.payment_provider,
                                                payment_info: l.__assign({}, e.payment_info),
                                                is_gift: this.props.isGift,
                                                mystery_gift_count: this.props.mysteryGiftCount,
                                                is_anon: this.props.isAnonymous,
                                                recipient_id: this.props.recipientID,
                                                ip_country_code: this.props.data.requestInfo.countryCode,
                                                price_info: {
                                                    id: t && t.priceInfo && t.priceInfo.id,
                                                    currency: t && t.priceInfo && t.priceInfo.currency
                                                },
                                                residence: {
                                                    country_code: e.residence ? e.residence.country_code : "",
                                                    zip_code: e.residence ? function(e, t) {
                                                        return t ? "CA" !== e ? t : /^[a-zA-Z0-9]{6}$/.test(t) ? t.toUpperCase().slice(0, 3) + " " + t.toUpperCase().slice(3) : t.toUpperCase() : null
                                                    }(e.residence.country_code, e.residence.zip_code) : ""
                                                },
                                                async: n,
                                                device_id: p.p.session.deviceID,
                                                tab_session_id: p.p.session.tabID
                                            }, this.setState({
                                                showErrors: !1
                                            }), i = "/kraken/checkout/users/" + (this.props.data.currentUser && this.props.data.currentUser.id) + "/products/" + this.props.productName + "/purchase/complete", s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, C.a.post(i, {
                                                body: r
                                            }, {
                                                version: 5
                                            })];
                                        case 2:
                                            return a = s.sent(), n && a.body && !a.body.error && (this.timeout = setTimeout(function() {
                                                o.state.progress !== _.a.CONFIRMATION && (o.setState({
                                                    showErrors: !0,
                                                    errors: {
                                                        code: P.DefaultMessage,
                                                        level: S.Error
                                                    }
                                                }), e.errorCallback && e.errorCallback())
                                            }, this.pubsubTimeout)), a.error || a.body && a.body.error ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Failed,
                                                savedPayment: e.savedPayment
                                            }), a.body && "UNSUPPORTED_COUNTRY" === a.body.error && a.body.error_details && a.body.error_details.country ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: te.a.UnsupportedCountryAlert,
                                                actionDetail: a.body.error_details.country,
                                                savedPayment: e.savedPayment
                                            }), this.handleCountryChange(a.body.error_details.country)) : a.body && "INVALID_RESIDENCE" === a.body.error ? this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: P.InvalidResidence,
                                                    level: S.Error
                                                }
                                            }) : a.body && "PRICE_INFO_INVALID" === a.body.error && a.body.error_details && a.body.error_details.country ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: te.a.PriceChangeAlert,
                                                actionDetail: a.body.error_details.country,
                                                savedPayment: e.savedPayment
                                            }), this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: P.PriceChangeNotice,
                                                    level: S.Info
                                                }
                                            }), this.handleCountryChange(a.body.error_details.country)) : a.body && "INVALID_PAYMENT_METHOD" === a.body.error ? this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: P.InvalidPaymentMethod,
                                                    level: S.Error
                                                }
                                            }) : this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: P.DefaultMessage,
                                                    level: S.Error
                                                }
                                            }), e.errorCallback && e.errorCallback(), [2]) : (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Success,
                                                savedPayment: e.savedPayment
                                            }), n ? this.setState({
                                                purchaseResponse: a.body
                                            }) : (this.props.data.refetch(), this.setState({
                                                purchaseResponse: a.body,
                                                progress: _.a.CONFIRMATION
                                            })), [3, 4]);
                                        case 3:
                                            return s.sent(), this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: P.DefaultMessage,
                                                    level: S.Error
                                                }
                                            }), e.errorCallback && e.errorCallback(), this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: te.a.CompletePurchaseClick,
                                                actionDetail: te.f.Failed,
                                                savedPayment: e.savedPayment
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || (this.props.latencyTracking.reportInteractive(), this.state.progress < _.a.CONFIRMATION && this.productAlreadyOwned && !this.props.isGift && this.setState({
                            progress: _.a.CONFIRMATION
                        }))
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), this.state.progress < _.a.CONFIRMATION && this.productAlreadyOwned && !this.props.isGift && this.setState({
                            progress: _.a.CONFIRMATION
                        })), this.state.progress !== t.progress && this.props.onCheckoutProgress && this.props.onCheckoutProgress(this.state.progress)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.pubsub.messages.fulfillment;
                        if (this.isRelated(t)) {
                            var n = t && t.fulfillment;
                            if (n) switch (clearTimeout(this.timeout), n.status) {
                                case y.PurchaseFulfillmentStatus.Success:
                                    this.setState({
                                        progress: _.a.CONFIRMATION
                                    });
                                    break;
                                case y.PurchaseFulfillmentStatus.Failure:
                                default:
                                    this.setState({
                                        showErrors: !0,
                                        errors: {
                                            code: P.DefaultMessage,
                                            level: S.Error
                                        }
                                    })
                            }
                        }
                    }, t.prototype.componentWillUnmount = function() {
                        clearTimeout(this.timeout)
                    }, t.prototype.render = function() {
                        if (this.props.data.error) return d.createElement(m.a, null);
                        if (this.productEligibility === T.MOBILE_UPGRADE) {
                            var e = this.shoppingCartItem,
                                t = e && e.product && e.product.owner && e.product.owner.displayName;
                            return d.createElement(m.a, null, d.createElement(x.W, {
                                bold: !0
                            }, Object(p.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                productDisplayName: t || this.props.productName
                            }, "CheckoutPayments")), d.createElement(x.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, d.createElement(x.W, null, Object(p.d)("Upgrading your mobile subscription is currently not supported.", "CheckoutPayments"))))
                        }
                        if (this.state.progress === _.a.CONFIRMATION) {
                            var n = d.createElement(D, {
                                product: this.shoppingCartItem,
                                purchaseFlow: this.purchaseFlow,
                                progress: this.state.progress
                            });
                            return d.createElement(F, {
                                productDescription: this.renderTicketDescription(),
                                header: n
                            }, this.purchaseInvoice && d.createElement(V, {
                                currentUser: this.props.data.currentUser,
                                purchaseFlow: this.purchaseFlow,
                                product: this.shoppingCartItem,
                                purchaseInvoice: this.purchaseInvoice && this.purchaseInvoice,
                                sessionUser: this.props.sessionUser,
                                benefit: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.benefit
                            }))
                        }
                        var r = d.createElement(D, {
                                product: this.shoppingCartItem,
                                purchaseFlow: this.purchaseFlow,
                                progress: this.state.progress
                            }),
                            i = this.shoppingCartItem && this.shoppingCartItem.product.owner && this.shoppingCartItem.product.owner.displayName,
                            a = "/" + (i || "");
                        return d.createElement(F, {
                            productDescription: this.renderTicketDescription(),
                            header: r
                        }, !this.dataReady && d.createElement(x.Ya, {
                            display: x.X.Flex,
                            justifyContent: x.Xa.Center,
                            alignItems: x.f.Center
                        }, d.createElement(x.jb, {
                            lineCount: 20
                        })), d.createElement(x.Ya, {
                            display: this.dataReady ? x.X.Block : x.X.Hide
                        }, d.createElement(x.Ya, {
                            display: R(this.productEligibility) ? x.X.Hide : x.X.Block,
                            "data-test-selector": st.INELIGIBLE_PURCHASE
                        }, d.createElement(M, {
                            product: this.shoppingCartItem,
                            existingPurchases: this.existingPurchases,
                            productEligibility: this.productEligibility,
                            sessionUser: this.props.sessionUser
                        }), d.createElement(x.Ya, {
                            margin: {
                                top: 2
                            }
                        }, d.createElement(x.z, {
                            linkTo: a
                        }, Object(p.d)("Go back to {channel}", {
                            channel: i || "Twitch"
                        }, "CheckoutPayments")))), d.createElement(x.Ya, {
                            display: R(this.productEligibility) ? x.X.Block : x.X.Hide,
                            "data-test-selector": st.ELIGIBLE_PURCHASE
                        }, d.createElement(O, {
                            purchaseFlow: this.purchaseFlow,
                            product: this.shoppingCartItem
                        }), d.createElement(x.Ya, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(U, {
                            isAnonymous: this.props.isAnonymous,
                            purchaseFlow: this.purchaseFlow,
                            product: this.shoppingCartItem,
                            existingPurchases: this.existingPurchases,
                            productEligibility: this.productEligibility,
                            benefit: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.benefit,
                            eligiblePromotions: this.eligiblePromotions,
                            sessionUser: this.props.sessionUser
                        })), this.state.showErrors && this.state.errors && d.createElement(x.Ya, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(w, {
                            errorCode: this.state.errors.code,
                            level: this.state.errors.level
                        })), d.createElement(at, {
                            handleCompletePurchase: this.completePurchase,
                            handleCountryChange: this.handleCountryChange,
                            productName: this.props.productName,
                            trackPaymentFormInteraction: this.trackPaymentFormInteraction,
                            configs: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && this.shoppingCartItem && this.props.data.subscriptionProduct.self.checkoutConfigs.paymentProviderConfigs,
                            ipCountryCode: this.props.data.requestInfo && this.props.data.requestInfo.countryCode,
                            countryOfResidence: this.props.data.currentUser && this.props.data.currentUser.residence && this.props.data.currentUser.residence.countryCode,
                            userBestGuessCountry: this.state.userBestGuessCountry,
                            userZipCode: this.props.data.currentUser && this.props.data.currentUser.residence && this.props.data.currentUser.residence.postalCode,
                            product: this.shoppingCartItem,
                            showEuSubs: this.showEuSubs
                        }), d.createElement(j, null))))
                    }, t.prototype.renderTicketDescription = function() {
                        return this.productEligibility === T.MOBILE_UPGRADE || this.DEPRECRATE_hasActiveMobileSub ? null : d.createElement(Z.a, {
                            productName: this.props.productName,
                            isGift: this.props.isGift && this.canGift,
                            showPaidUpgrade: this.enablePaidUpgrade,
                            priceCountry: this.state.userBestGuessCountry,
                            invoicePrice: null,
                            showEuSubs: this.showEuSubs
                        })
                    }, Object.defineProperty(t.prototype, "isStandardGifting", {
                        get: function() {
                            return this.props.isGift && null !== this.props.recipientID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAsync", {
                        get: function() {
                            return this.isStandardGifting && (this.inAsyncCheckoutExperiment || this.props.isAnonymous)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isRelated = function(e) {
                        return !(!this.state.purchaseResponse || !e) && e.fulfillment.product_details.origin_id === this.state.purchaseResponse.origin_id
                    }, Object.defineProperty(t.prototype, "purchaseFlow", {
                        get: function() {
                            return this.props.isGift ? this.props.mysteryGiftCount && this.props.mysteryGiftCount > 0 ? r.MYSTERY_GIFT : r.GIFT_SUB : r.PERSONAL_SUB
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canPurchase", {
                        get: function() {
                            return !!(this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && this.props.data.subscriptionProduct.self.checkoutConfigs.canPurchase)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productEligibility", {
                        get: function() {
                            var e = this;
                            if (!this.canPurchase) return T.API_INELIGIBLE;
                            if (!this.shoppingCartItem) return T.NO_ITEM;
                            if (this.purchaseFlow === r.GIFT_SUB) return this.canGift ? T.GIFTABLE_RECIPIENT : T.NON_GIFTABLE_RECIPIENT;
                            if (this.purchaseFlow === r.MYSTERY_GIFT) return this.canGift ? T.GIFTABLE_RECIPIENT : T.NO_MASS_GIFTING;
                            var t = this.existingPurchases && this.existingPurchases.compatiblePurchases;
                            if (t) {
                                var n = t.find(function(e) {
                                        return e.paymentProvider.toUpperCase() === E.G.PRIME
                                    }),
                                    i = t.find(function(t) {
                                        return t.productType.toUpperCase() === E.W.CHANSUB && !!t.productTier && parseInt(e.shoppingCartItem.product.tier, 10) < parseInt(t.productTier, 10)
                                    }),
                                    a = t.find(function(t) {
                                        return t.productType.toUpperCase() === E.W.CHANSUB && !!t.productTier && parseInt(e.shoppingCartItem.product.tier, 10) > parseInt(t.productTier, 10)
                                    }),
                                    o = t.find(function(e) {
                                        return e.paymentProvider.toUpperCase() === E.G.GOOGLE_IAB
                                    });
                                if (n) return T.PRIME_UPGRADE;
                                if (i) return T.TIER_DOWNGRADE;
                                if (a) return o ? T.MOBILE_UPGRADE : T.TIER_UPGRADE
                            }
                            return !this.existingPurchases || this.existingPurchases && !this.existingPurchases.details && !this.existingPurchases.compatiblePurchases || this.existingPurchases.details && this.existingPurchases.details.state === E.X.INACTIVE ? T.NEW_PURCHASE : T.UNKNOWN
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "shoppingCartItem", {
                        get: function() {
                            var e = this.props.data.subscriptionProduct;
                            return e ? {
                                product: {
                                    id: e.id,
                                    name: e.name,
                                    priceInfo: e.priceInfo,
                                    interval: e.interval,
                                    tier: e.tier,
                                    owner: e.owner
                                },
                                recipient: this.props.recipientID ? {
                                    id: this.props.recipientID,
                                    displayName: this.props.recipientDisplayName
                                } : null,
                                quantity: this.props.mysteryGiftCount || 1
                            } : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "purchaseInvoice", {
                        get: function() {
                            if (this.state.purchaseResponse && this.state.purchaseResponse.invoice_total) return {
                                price: this.state.purchaseResponse.invoice_total.price,
                                currency: this.state.purchaseResponse.invoice_total.currency,
                                divisor: 100,
                                tier: this.state.purchaseResponse.product_tier
                            };
                            var e = this.existingPurchases && this.existingPurchases.details;
                            return e && {
                                price: e.price,
                                currency: e.currency,
                                divisor: e.divisor,
                                tier: e.productTier
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "existingPurchases", {
                        get: function() {
                            return this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.purchase
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productAlreadyOwned", {
                        get: function() {
                            return !(!this.existingPurchases || !this.existingPurchases.details)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "DEPRECRATE_hasActiveMobileSub", {
                        get: function() {
                            var e = this.existingPurchases;
                            return !(!e || !e.details || e.details.paymentProvider.toUpperCase() !== E.G.GOOGLE_IAB)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "enablePaidUpgrade", {
                        get: function() {
                            if (!this.enablePaidUpgradeFlag) return !1;
                            if (!this.props.data.subscriptionProduct || !this.props.data.subscriptionProduct.self) return !1;
                            var e = this.props.data.subscriptionProduct.self.benefit && this.props.data.subscriptionProduct.self.benefit.paidUpgrade && this.props.data.subscriptionProduct.self.benefit.paidUpgrade.startsAt,
                                t = !!(this.props.data.subscriptionProduct.self.benefit && this.props.data.subscriptionProduct.self.benefit.gift && this.props.data.subscriptionProduct.self.benefit.gift.isGift);
                            return !!(e && Object(u.isWithinRange)(Object(g.c)(e), Object(g.c)(this.paidUpgradePromotionStartDate), Object(g.c)(this.paidUpgradePromotionEndDate)) || this.productEligibility === T.NEW_PURCHASE && t && this.eligiblePromotions.paidUpgradePromotion)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canGift", {
                        get: function() {
                            return !!(this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && this.props.data.subscriptionProduct.self.checkoutConfigs.canGift)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "eligiblePromotions", {
                        get: function() {
                            var e = !1;
                            return this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.checkoutConfigs && (e = this.props.data.subscriptionProduct.self.checkoutConfigs.isOneMonthFreeEligible), {
                                isOneMonthFreeEligible: e,
                                promotion: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.promotion,
                                paidUpgradePromotion: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.paidUpgradePromotion
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "dataReady", {
                        get: function() {
                            return !(this.props.data.loading && !this.props.data.error && !this.props.data.subscriptionProduct)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showEuSubs", {
                        get: function() {
                            return "true" === this.recurlyTaxEnabled || "staff" === this.recurlyTaxEnabled && !!(this.props.sessionUser && this.props.sessionUser.roles && this.props.sessionUser.roles.isStaff)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                ut = Object(a.compose)(Object(h.a)(ct, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                productName: e.productName,
                                isAnonymous: e.isAnonymous,
                                isGift: e.isGift,
                                recipientID: e.recipientID,
                                includePromotion: function(e) {
                                    return !["turbo", "owlallaccess2018"].includes(e.productName)
                                }(e),
                                mysteryGiftCount: e.mysteryGiftCount,
                                taxCountry: ""
                            }
                        }
                    }
                }), Object(f.a)([{
                    topic: function(e) {
                        return Object(b.v)("" + (e.data.currentUser && e.data.currentUser.id))
                    },
                    mapMessageTypesToProps: (ot = {}, ot[y.PubsubMessageType.PurchaseFulfillmentEvents] = "fulfillment", ot)
                }]), Object(ne.b)("CheckoutPayments"))(lt);
            n.d(t, "a", function() {
                return dt
            });
            var dt = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e),
                    sessionUser: Object(c.e)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    promptLogin: function() {
                        return Object(s.e)(o.a.DashboardPage)
                    }
                }, e)
            })(ut)
        },
        WlZp: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "kaptchaIframeSrc", {
                        get: function() {
                            return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoHtm?m=300532&s=" + this.props.sessionId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "kaptchaImgSrc", {
                        get: function() {
                            return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoGif?m=300532&s=" + this.props.sessionId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return i.createElement("iframe", {
                            width: "1",
                            height: "1",
                            scrolling: "no",
                            src: this.kaptchaIframeSrc
                        }, i.createElement("img", {
                            width: "137",
                            height: "33",
                            src: this.kaptchaImgSrc
                        }))
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return a
            })
        },
        XE3n: function(e, t, n) {},
        YVj6: function(e, t, n) {
            var r, i;
            ! function(a, o) {
                r = [n("x0Ue")], void 0 === (i = function(e) {
                    return function(e, t) {
                        "use strict";
                        var n = {
                            extend: function(e, t) {
                                for (var n in t) e[n] = t[n];
                                return e
                            },
                            modulo: function(e, t) {
                                return (e % t + t) % t
                            },
                            makeArray: function(e) {
                                var t = [];
                                if (Array.isArray(e)) t = e;
                                else if (e && "object" == typeof e && "number" == typeof e.length)
                                    for (var n = 0; n < e.length; n++) t.push(e[n]);
                                else t.push(e);
                                return t
                            },
                            removeFrom: function(e, t) {
                                var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
                            }
                        };
                        n.getParent = function(e, n) {
                            for (; e.parentNode && e != document.body;)
                                if (e = e.parentNode, t(e, n)) return e
                        }, n.getQueryElement = function(e) {
                            return "string" == typeof e ? document.querySelector(e) : e
                        }, n.handleEvent = function(e) {
                            var t = "on" + e.type;
                            this[t] && this[t](e)
                        }, n.filterFindElements = function(e, r) {
                            var i = [];
                            return (e = n.makeArray(e)).forEach(function(e) {
                                if (e instanceof HTMLElement)
                                    if (r) {
                                        t(e, r) && i.push(e);
                                        for (var n = e.querySelectorAll(r), a = 0; a < n.length; a++) i.push(n[a])
                                    } else i.push(e)
                            }), i
                        }, n.debounceMethod = function(e, t, n) {
                            var r = e.prototype[t],
                                i = t + "Timeout";
                            e.prototype[t] = function() {
                                var e = this[i];
                                e && clearTimeout(e);
                                var t = arguments,
                                    a = this;
                                this[i] = setTimeout(function() {
                                    r.apply(a, t), delete a[i]
                                }, n || 100)
                            }
                        }, n.docReady = function(e) {
                            var t = document.readyState;
                            "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
                        }, n.toDashed = function(e) {
                            return e.replace(/(.)([A-Z])/g, function(e, t, n) {
                                return t + "-" + n
                            }).toLowerCase()
                        };
                        var r = e.console;
                        return n.htmlInit = function(t, i) {
                            n.docReady(function() {
                                var a = n.toDashed(i),
                                    o = "data-" + a,
                                    s = document.querySelectorAll("[" + o + "]"),
                                    c = document.querySelectorAll(".js-" + a),
                                    l = n.makeArray(s).concat(n.makeArray(c)),
                                    u = o + "-options",
                                    d = e.jQuery;
                                l.forEach(function(e) {
                                    var n, a = e.getAttribute(o) || e.getAttribute(u);
                                    try {
                                        n = a && JSON.parse(a)
                                    } catch (t) {
                                        return void(r && r.error("Error parsing " + o + " on " + e.className + ": " + t))
                                    }
                                    var s = new t(e, n);
                                    d && d.data(e, i, s)
                                })
                            })
                        }, n
                    }(a, e)
                }.apply(t, r)) || (e.exports = i)
            }(window)
        },
        "ZAO/": function(e, t, n) {},
        ZHRK: function(e, t, n) {},
        ZiR0: function(e, t, n) {
            e.exports = n.p + "assets/paypal_1x-2a610ceedc14dc7f9673.png"
        },
        ZsMu: function(e, t, n) {},
        a7Xb: function(e, t, n) {},
        abgr: function(e, t, n) {},
        acxT: function(e, t, n) {},
        b5uE: function(e, t, n) {},
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i, a, o, s;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((i = a.sent()).requestError) throw i.requestError;
                                        if (i.error) throw new Error("Error while sending legacy-api request: " + i.error.status + " - " + i.error.message);
                                        return [2, r.__assign({}, i, {
                                            body: i.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, i.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, i, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = i.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(a.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = i.p.logger.withCategory("legacy-api"), e
                }()
        },
        bOWA: function(e, t, n) {
            e.exports = n.p + "assets/mastercard-280a786ec3225a087428.svg"
        },
        bQeB: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_1x-a6b9cd93075728ab4114.png"
        },
        bVvr: function(e, t, n) {},
        bfgy: function(e, t, n) {},
        bvmA: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_2x-5364f28c059af7303d67.png"
        },
        csmi: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_1x-5810bf2a8f8185a1a905.png"
        },
        ezMb: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                r = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            t.default = function(e) {
                var t, n, m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.handleStart = function(e) {
                            var n = t.props,
                                r = n.distance,
                                i = n.shouldCancelStart;
                            if (2 === e.button || i(e)) return !1;
                            t._touched = !0, t._pos = {
                                x: e.pageX,
                                y: e.pageY
                            };
                            var a = (0, p.closest)(e.target, function(e) {
                                return null != e.sortableInfo
                            });
                            if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                                var o = t.props.useDragHandle,
                                    s = a.sortableInfo,
                                    c = s.index,
                                    l = s.collection;
                                if (o && !(0, p.closest)(e.target, function(e) {
                                        return null != e.sortableHandle
                                    })) return;
                                t.manager.active = {
                                    index: c,
                                    collection: l
                                }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), r || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                    return t.handlePress(e)
                                }, t.props.pressDelay))
                            }
                        }, t.nodeIsChild = function(e) {
                            return e.sortableInfo.manager === t.manager
                        }, t.handleMove = function(e) {
                            var n = t.props,
                                r = n.distance,
                                i = n.pressThreshold;
                            if (!t.state.sorting && t._touched) {
                                t._delta = {
                                    x: t._pos.x - e.pageX,
                                    y: t._pos.y - e.pageY
                                };
                                var a = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                                r || i && !(i && a >= i) ? r && a >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                            }
                        }, t.handleEnd = function() {
                            var e = t.props.distance;
                            t._touched = !1, e || t.cancel()
                        }, t.cancel = function() {
                            t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                        }, t.handlePress = function(e) {
                            var n = t.manager.getActive();
                            if (n) {
                                var r = t.props,
                                    i = r.axis,
                                    a = r.getHelperDimensions,
                                    o = r.helperClass,
                                    s = r.hideSortableGhost,
                                    c = r.onSortStart,
                                    l = r.useWindowAsScrollContainer,
                                    u = n.node,
                                    d = n.collection,
                                    m = u.sortableInfo.index,
                                    f = (0, p.getElementMargin)(u),
                                    y = t.container.getBoundingClientRect(),
                                    g = a({
                                        index: m,
                                        node: u,
                                        collection: d
                                    });
                                t.node = u, t.margin = f, t.width = g.width, t.height = g.height, t.marginOffset = {
                                    x: t.margin.left + t.margin.right,
                                    y: Math.max(t.margin.top, t.margin.bottom)
                                }, t.boundingClientRect = u.getBoundingClientRect(), t.containerBoundingRect = y, t.index = m, t.newIndex = m, t.axis = {
                                    x: i.indexOf("x") >= 0,
                                    y: i.indexOf("y") >= 0
                                }, t.offsetEdge = t.getEdgeOffset(u), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                    top: t.scrollContainer.scrollTop,
                                    left: t.scrollContainer.scrollLeft
                                }, t.initialWindowScroll = {
                                    top: window.pageYOffset,
                                    left: window.pageXOffset
                                };
                                var b, v = u.querySelectorAll("input, textarea, select"),
                                    E = u.cloneNode(!0),
                                    C = [].concat(h(E.querySelectorAll("input, textarea, select")));
                                if (C.forEach(function(e, t) {
                                        "file" !== e.type && v[t] && (e.value = v[t].value)
                                    }), t.helper = t.document.body.appendChild(E), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - f.top + "px", t.helper.style.left = t.boundingClientRect.left - f.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = u, u.style.visibility = "hidden", u.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (l ? 0 : y.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (l ? t.contentWindow.innerWidth : y.left + y.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (l ? 0 : y.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (l ? t.contentWindow.innerHeight : y.top + y.height) - t.boundingClientRect.top - t.height / 2), o)(b = t.helper.classList).add.apply(b, h(o.split(" ")));
                                t.listenerNode = e.touches ? u : t.contentWindow, p.events.move.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                                }), p.events.end.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                                }), t.setState({
                                    sorting: !0,
                                    sortingIndex: m
                                }), c && c({
                                    node: u,
                                    index: m,
                                    collection: d
                                }, e)
                            }
                        }, t.handleSortMove = function(e) {
                            var n = t.props.onSortMove;
                            e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                        }, t.handleSortEnd = function(e) {
                            var n = t.props,
                                r = n.hideSortableGhost,
                                i = n.onSortEnd,
                                a = t.manager.active.collection;
                            t.listenerNode && (p.events.move.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortMove)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                            })), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                            for (var o = t.manager.refs[a], s = 0, c = o.length; s < c; s++) {
                                var l = o[s],
                                    u = l.node;
                                l.edgeOffset = null, u.style[p.vendorPrefix + "Transform"] = "", u.style[p.vendorPrefix + "TransitionDuration"] = ""
                            }
                            clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                                sorting: !1,
                                sortingIndex: null
                            }), "function" == typeof i && i({
                                oldIndex: t.index,
                                newIndex: t.newIndex,
                                collection: a
                            }, e), t._touched = !1
                        }, t.autoscroll = function() {
                            var e = t.translate,
                                n = {
                                    x: 0,
                                    y: 0
                                },
                                r = {
                                    x: 1,
                                    y: 1
                                },
                                i = {
                                    x: 10,
                                    y: 10
                                };
                            e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, r.y = i.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, r.x = i.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, r.y = i.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, r.x = i.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                                t.isAutoScrolling = !0;
                                var e = {
                                    left: 1 * r.x * n.x,
                                    top: 1 * r.y * n.y
                                };
                                t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                            }, 5))
                        }, t.manager = new d.default, t.events = {
                            start: t.handleStart,
                            move: t.handleMove,
                            end: t.handleEnd
                        }, (0, u.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), a(n, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                manager: this.manager
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.getContainer,
                                r = t.useWindowAsScrollContainer,
                                i = this.props.contentWindow || window;
                            this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, l.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = r ? this.document.body : this.container, this.contentWindow = "function" == typeof i ? i() : i;
                            var a = function(t) {
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                    return e.container.addEventListener(n, e.events[t], !1)
                                })
                            };
                            for (var o in this.events) a(o)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this,
                                t = function(t) {
                                    e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                        return e.container.removeEventListener(n, e.events[t])
                                    })
                                };
                            for (var n in this.events) t(n)
                        }
                    }, {
                        key: "getEdgeOffset",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                top: 0,
                                left: 0
                            };
                            if (e) {
                                var n = {
                                    top: t.top + e.offsetTop,
                                    left: t.left + e.offsetLeft
                                };
                                return e.parentNode !== this.container ? this.getEdgeOffset(e.parentNode, n) : n
                            }
                        }
                    }, {
                        key: "getOffset",
                        value: function(e) {
                            return {
                                x: e.touches ? e.touches[0].pageX : e.pageX,
                                y: e.touches ? e.touches[0].pageY : e.pageY
                            }
                        }
                    }, {
                        key: "getLockPixelOffsets",
                        value: function() {
                            var e = this.props.lockOffset;
                            Array.isArray(e) || (e = [e, e]), (0, u.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                            var t = e,
                                n = i(t, 2),
                                r = n[0],
                                a = n[1];
                            return [this.getLockPixelOffset(r), this.getLockPixelOffset(a)]
                        }
                    }, {
                        key: "getLockPixelOffset",
                        value: function(e) {
                            var t = e,
                                n = e,
                                r = "px";
                            if ("string" == typeof e) {
                                var i = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                                (0, u.default)(null !== i, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), r = i[1]
                            }
                            return (0, u.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === r && (t = t * this.width / 100, n = n * this.height / 100), {
                                x: t,
                                y: n
                            }
                        }
                    }, {
                        key: "updatePosition",
                        value: function(e) {
                            var t = this.props,
                                n = t.lockAxis,
                                r = t.lockToContainerEdges,
                                a = this.getOffset(e),
                                o = {
                                    x: a.x - this.initialOffset.x,
                                    y: a.y - this.initialOffset.y
                                };
                            if (o.y -= window.pageYOffset - this.initialWindowScroll.top, o.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = o, r) {
                                var s = this.getLockPixelOffsets(),
                                    c = i(s, 2),
                                    l = c[0],
                                    u = c[1],
                                    d = {
                                        x: this.width / 2 - l.x,
                                        y: this.height / 2 - l.y
                                    },
                                    m = {
                                        x: this.width / 2 - u.x,
                                        y: this.height / 2 - u.y
                                    };
                                o.x = (0, p.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - m.x, o.x), o.y = (0, p.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - m.y, o.y)
                            }
                            "x" === n ? o.y = 0 : "y" === n && (o.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + o.x + "px," + o.y + "px, 0)"
                        }
                    }, {
                        key: "animateNodes",
                        value: function() {
                            var e = this.props,
                                t = e.transitionDuration,
                                n = e.hideSortableGhost,
                                r = this.manager.getOrderedRefs(),
                                i = {
                                    left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                    top: this.scrollContainer.scrollTop - this.initialScroll.top
                                },
                                a = {
                                    left: this.offsetEdge.left + this.translate.x + i.left,
                                    top: this.offsetEdge.top + this.translate.y + i.top
                                },
                                o = {
                                    top: window.pageYOffset - this.initialWindowScroll.top,
                                    left: window.pageXOffset - this.initialWindowScroll.left
                                };
                            this.newIndex = null;
                            for (var s = 0, c = r.length; s < c; s++) {
                                var l = r[s].node,
                                    u = l.sortableInfo.index,
                                    d = l.offsetWidth,
                                    m = l.offsetHeight,
                                    h = {
                                        width: this.width > d ? d / 2 : this.width / 2,
                                        height: this.height > m ? m / 2 : this.height / 2
                                    },
                                    f = {
                                        x: 0,
                                        y: 0
                                    },
                                    y = r[s].edgeOffset;
                                y || (r[s].edgeOffset = y = this.getEdgeOffset(l));
                                var g = s < r.length - 1 && r[s + 1],
                                    b = s > 0 && r[s - 1];
                                g && !g.edgeOffset && (g.edgeOffset = this.getEdgeOffset(g.node)), u !== this.index ? (t && (l.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? u < this.index && (a.left + o.left - h.width <= y.left && a.top + o.top <= y.top + h.height || a.top + o.top + h.height <= y.top) ? (f.x = this.width + this.marginOffset.x, y.left + f.x > this.containerBoundingRect.width - h.width && (f.x = g.edgeOffset.left - y.left, f.y = g.edgeOffset.top - y.top), null === this.newIndex && (this.newIndex = u)) : u > this.index && (a.left + o.left + h.width >= y.left && a.top + o.top + h.height >= y.top || a.top + o.top + h.height >= y.top + m) && (f.x = -(this.width + this.marginOffset.x), y.left + f.x < this.containerBoundingRect.left + h.width && (f.x = b.edgeOffset.left - y.left, f.y = b.edgeOffset.top - y.top), this.newIndex = u) : u > this.index && a.left + o.left + h.width >= y.left ? (f.x = -(this.width + this.marginOffset.x), this.newIndex = u) : u < this.index && a.left + o.left <= y.left + h.width && (f.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = u)) : this.axis.y && (u > this.index && a.top + o.top + h.height >= y.top ? (f.y = -(this.height + this.marginOffset.y), this.newIndex = u) : u < this.index && a.top + o.top <= y.top + h.height && (f.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = u))), l.style[p.vendorPrefix + "Transform"] = "translate3d(" + f.x + "px," + f.y + "px,0)") : n && (this.sortableGhost = l, l.style.visibility = "hidden", l.style.opacity = 0)
                            }
                            null == this.newIndex && (this.newIndex = this.index)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, u.default)(m.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = m.withRef ? "wrappedInstance" : null;
                            return s.default.createElement(e, r({
                                ref: t
                            }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                        }
                    }]), n
                }(o.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
                    axis: "y",
                    transitionDuration: 300,
                    pressDelay: 0,
                    pressThreshold: 5,
                    distance: 0,
                    useWindowAsScrollContainer: !1,
                    hideSortableGhost: !0,
                    shouldCancelStart: function(e) {
                        if (-1 !== ["input", "textarea", "select", "option", "button"].indexOf(e.target.tagName.toLowerCase())) return !0
                    },
                    lockToContainerEdges: !1,
                    lockOffset: "50%",
                    getHelperDimensions: function(e) {
                        var t = e.node;
                        return {
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    }
                }, t.propTypes = {
                    axis: c.default.oneOf(["x", "y", "xy"]),
                    distance: c.default.number,
                    lockAxis: c.default.string,
                    helperClass: c.default.string,
                    transitionDuration: c.default.number,
                    contentWindow: c.default.any,
                    onSortStart: c.default.func,
                    onSortMove: c.default.func,
                    onSortEnd: c.default.func,
                    shouldCancelStart: c.default.func,
                    pressDelay: c.default.number,
                    useDragHandle: c.default.bool,
                    useWindowAsScrollContainer: c.default.bool,
                    hideSortableGhost: c.default.bool,
                    lockToContainerEdges: c.default.bool,
                    lockOffset: c.default.oneOfType([c.default.number, c.default.string, c.default.arrayOf(c.default.oneOfType([c.default.number, c.default.string]))]),
                    getContainer: c.default.func,
                    getHelperDimensions: c.default.func
                }, t.childContextTypes = {
                    manager: c.default.object.isRequired
                }, n
            };
            var o = n("q1tI"),
                s = m(o),
                c = m(n("17x9")),
                l = n("i8i4"),
                u = m(n("QLaP")),
                d = m(n("8ENv")),
                p = n("jTc+");

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
        },
        hNNL: function(e, t, n) {
            var r, i, a;
            /*!
             * Masonry v4.2.0
             * Cascading grid layout library
             * http://masonry.desandro.com
             * MIT License
             * by David DeSandro
             */
            window, i = [n("Hy43"), n("QK1G")], void 0 === (a = "function" == typeof(r = function(e, t) {
                "use strict";
                var n = e.create("masonry");
                n.compatOptions.fitWidth = "isFitWidth";
                var r = n.prototype;
                return r._resetLayout = function() {
                    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
                    for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                    this.maxY = 0, this.horizontalColIndex = 0
                }, r.measureColumns = function() {
                    if (this.getContainerWidth(), !this.columnWidth) {
                        var e = this.items[0],
                            n = e && e.element;
                        this.columnWidth = n && t(n).outerWidth || this.containerWidth
                    }
                    var r = this.columnWidth += this.gutter,
                        i = this.containerWidth + this.gutter,
                        a = i / r,
                        o = r - i % r;
                    a = Math[o && o < 1 ? "round" : "floor"](a), this.cols = Math.max(a, 1)
                }, r.getContainerWidth = function() {
                    var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                        n = t(e);
                    this.containerWidth = n && n.innerWidth
                }, r._getItemLayoutPosition = function(e) {
                    e.getSize();
                    var t = e.size.outerWidth % this.columnWidth,
                        n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
                    n = Math.min(n, this.cols);
                    for (var r = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), i = {
                            x: this.columnWidth * r.col,
                            y: r.y
                        }, a = r.y + e.size.outerHeight, o = n + r.col, s = r.col; s < o; s++) this.colYs[s] = a;
                    return i
                }, r._getTopColPosition = function(e) {
                    var t = this._getTopColGroup(e),
                        n = Math.min.apply(Math, t);
                    return {
                        col: t.indexOf(n),
                        y: n
                    }
                }, r._getTopColGroup = function(e) {
                    if (e < 2) return this.colYs;
                    for (var t = [], n = this.cols + 1 - e, r = 0; r < n; r++) t[r] = this._getColGroupY(r, e);
                    return t
                }, r._getColGroupY = function(e, t) {
                    if (t < 2) return this.colYs[e];
                    var n = this.colYs.slice(e, e + t);
                    return Math.max.apply(Math, n)
                }, r._getHorizontalColPosition = function(e, t) {
                    var n = this.horizontalColIndex % this.cols;
                    n = e > 1 && n + e > this.cols ? 0 : n;
                    var r = t.size.outerWidth && t.size.outerHeight;
                    return this.horizontalColIndex = r ? n + e : this.horizontalColIndex, {
                        col: n,
                        y: this._getColGroupY(n, e)
                    }
                }, r._manageStamp = function(e) {
                    var n = t(e),
                        r = this._getElementOffset(e),
                        i = this._getOption("originLeft") ? r.left : r.right,
                        a = i + n.outerWidth,
                        o = Math.floor(i / this.columnWidth);
                    o = Math.max(0, o);
                    var s = Math.floor(a / this.columnWidth);
                    s -= a % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
                    for (var c = (this._getOption("originTop") ? r.top : r.bottom) + n.outerHeight, l = o; l <= s; l++) this.colYs[l] = Math.max(c, this.colYs[l])
                }, r._getContainerSize = function() {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var e = {
                        height: this.maxY
                    };
                    return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
                }, r._getContainerFitWidth = function() {
                    for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
                    return (this.cols - e) * this.columnWidth - this.gutter
                }, r.needsResizeLayout = function() {
                    var e = this.containerWidth;
                    return this.getContainerWidth(), e != this.containerWidth
                }, n
            }) ? r.apply(t, i) : r) || (e.exports = a)
        },
        hk6T: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
            t.default = function(e) {
                var t, n, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), i(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled,
                                r = e.index;
                            n || this.setDraggable(t, r)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                                var t = e.collection,
                                    n = e.disabled,
                                    r = e.index;
                                n ? this.removeDraggable(t) : this.setDraggable(t, r)
                            } else this.props.collection !== e.collection && (this.removeDraggable(this.props.collection), this.setDraggable(e.collection, e.index))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled;
                            n || this.removeDraggable(t)
                        }
                    }, {
                        key: "setDraggable",
                        value: function(e, t) {
                            var n = this.node = (0, c.findDOMNode)(this);
                            n.sortableInfo = {
                                index: t,
                                collection: e,
                                manager: this.context.manager
                            }, this.ref = {
                                node: n
                            }, this.context.manager.add(e, this.ref)
                        }
                    }, {
                        key: "removeDraggable",
                        value: function(e) {
                            this.context.manager.remove(e, this.ref)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, l.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = d.withRef ? "wrappedInstance" : null;
                            return o.default.createElement(e, r({
                                ref: t
                            }, (0, u.omit)(this.props, "collection", "disabled", "index")))
                        }
                    }]), n
                }(a.Component), t.displayName = (0, u.provideDisplayName)("sortableElement", e), t.contextTypes = {
                    manager: s.default.object.isRequired
                }, t.propTypes = {
                    index: s.default.number.isRequired,
                    collection: s.default.oneOfType([s.default.number, s.default.string]),
                    disabled: s.default.bool
                }, t.defaultProps = {
                    collection: 0
                }, n
            };
            var a = n("q1tI"),
                o = d(a),
                s = d(n("17x9")),
                c = n("i8i4"),
                l = d(n("QLaP")),
                u = n("jTc+");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        iSjI: function(e, t, n) {
            e.exports = n.p + "assets/visa-0862ac17dccf1c7a5a22.svg"
        },
        iWNC: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SavedInstruments_UserPaymentMethods"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "paymentMethods"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "provider"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "paymentType"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "billingCountry"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "billingEmail"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cardType"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "lastFour"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expirationMonth"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expirationYear"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isRestricted"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "settings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasTwoFactorEnabled"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 227
                }
            };
            n.loc.source = {
                body: "query SavedInstruments_UserPaymentMethods {\ncurrentUser {\nid\npaymentMethods {\nprovider\npaymentType\nbillingCountry\nbillingEmail\ncardType\nlastFour\nexpirationMonth\nexpirationYear\nisRestricted\n}\nsettings {\nhasTwoFactorEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "jTc+": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = function(e, t, n) {
                var r = e.slice(0);
                if (n >= r.length)
                    for (var i = n - r.length; 1 + i--;) r.push(void 0);
                return r.splice(n, 0, r.splice(t, 1)[0]), r
            }, t.omit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return Object.keys(e).reduce(function(t, r) {
                    return -1 === n.indexOf(r) && (t[r] = e[r]), t
                }, {})
            }, t.closest = function(e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    e = e.parentNode
                }
            }, t.limit = function(e, t, n) {
                if (n < e) return e;
                if (n > t) return t;
                return n
            }, t.getElementMargin = function(e) {
                var t = window.getComputedStyle(e);
                return {
                    top: r(t.marginTop),
                    right: r(t.marginRight),
                    bottom: r(t.marginBottom),
                    left: r(t.marginLeft)
                }
            }, t.provideDisplayName = function(e, t) {
                var n = t.displayName || t.name;
                return n ? e + "(" + n + ")" : e
            };
            t.events = {
                start: ["touchstart", "mousedown"],
                move: ["touchmove", "mousemove"],
                end: ["touchend", "touchcancel", "mouseup"]
            }, t.vendorPrefix = function() {
                if ("undefined" == typeof window || "undefined" == typeof document) return "";
                var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                    t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
                switch (t) {
                    case "ms":
                        return "ms";
                    default:
                        return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
                }
            }();

            function r(e) {
                return "px" === e.substr(-2) ? parseFloat(e) : 0
            }
        },
        lqDW: function(e, t, n) {},
        mIie: function(e, t, n) {},
        mb7O: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n("Ue10"),
                a = (n("bfgy"), function(e) {
                    return r.createElement(i.Ya, {
                        className: "ticket-wrapper__container",
                        "data-a-target": "js-test-ticket-container",
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(i.G, {
                        elevation: 1
                    }, e.children))
                }),
                o = a;
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return o
            })
        },
        nH1N: function(e, t, n) {},
        oQBz: function(e, t, n) {
            e.exports = n.p + "assets/xsolla_1x-920aa1ba72411e5fe0aa.png"
        },
        pQUg: function(e, t, n) {
            var r = "undefined" != typeof window,
                i = r ? window.Masonry || n("hNNL") : null,
                a = r ? n("vX6Q") : null,
                o = n("3OWR"),
                s = n("7sSR"),
                c = n("sEfC"),
                l = n("Puqe"),
                u = n("ITnh"),
                d = n("q1tI"),
                p = n("fhzG"),
                m = {
                    enableResizableChildren: u.bool,
                    disableImagesLoaded: u.bool,
                    onImagesLoaded: u.func,
                    updateOnEachImageLoad: u.bool,
                    options: u.object,
                    elementType: u.string,
                    onLayoutComplete: u.func,
                    onRemoveComplete: u.func
                },
                h = p({
                    masonry: !1,
                    erd: void 0,
                    latestKnownDomChildren: [],
                    displayName: "MasonryComponent",
                    propTypes: m,
                    getDefaultProps: function() {
                        return {
                            enableResizableChildren: !1,
                            disableImagesLoaded: !1,
                            updateOnEachImageLoad: !1,
                            options: {},
                            className: "",
                            elementType: "div",
                            onLayoutComplete: function() {},
                            onRemoveComplete: function() {}
                        }
                    },
                    initializeMasonry: function(e) {
                        this.masonry && !e || (this.masonry = new i(this.masonryContainer, this.props.options), this.props.onLayoutComplete && this.masonry.on("layoutComplete", this.props.onLayoutComplete), this.props.onRemoveComplete && this.masonry.on("removeComplete", this.props.onRemoveComplete), this.latestKnownDomChildren = this.getCurrentDomChildren())
                    },
                    getCurrentDomChildren: function() {
                        var e = this.masonryContainer,
                            t = this.props.options.itemSelector ? e.querySelectorAll(this.props.options.itemSelector) : e.children;
                        return Array.prototype.slice.call(t)
                    },
                    diffDomChildren: function() {
                        var e = !1,
                            t = this.latestKnownDomChildren.filter(function(e) {
                                return !!e.parentNode
                            });
                        t.length !== this.latestKnownDomChildren.length && (e = !0);
                        var n = this.getCurrentDomChildren(),
                            r = t.filter(function(e) {
                                return !~n.indexOf(e)
                            }),
                            i = n.filter(function(e) {
                                return !~t.indexOf(e)
                            }),
                            a = 0,
                            o = i.filter(function(e) {
                                var t = a === n.indexOf(e);
                                return t && a++, t
                            }),
                            s = i.filter(function(e) {
                                return -1 === o.indexOf(e)
                            }),
                            c = [];
                        return 0 === r.length && (c = t.filter(function(e, t) {
                            return t !== n.indexOf(e)
                        })), this.latestKnownDomChildren = n, {
                            old: t,
                            new: n,
                            removed: r,
                            appended: s,
                            prepended: o,
                            moved: c,
                            forceItemReload: e
                        }
                    },
                    performLayout: function() {
                        var e = this.diffDomChildren(),
                            t = e.forceItemReload || e.moved.length > 0;
                        e.removed.length > 0 && (this.props.enableResizableChildren && e.removed.forEach(this.erd.removeAllListeners, this.erd), this.masonry.remove(e.removed), t = !0), e.appended.length > 0 && (this.masonry.appended(e.appended), 0 === e.prepended.length && (t = !0), this.props.enableResizableChildren && e.appended.forEach(this.listenToElementResize, this)), e.prepended.length > 0 && (this.masonry.prepended(e.prepended), this.props.enableResizableChildren && e.prepended.forEach(this.listenToElementResize, this)), t && this.masonry.reloadItems(), this.masonry.layout()
                    },
                    imagesLoaded: function() {
                        this.props.disableImagesLoaded || a(this.masonryContainer).on(this.props.updateOnEachImageLoad ? "progress" : "always", c(function(e) {
                            this.props.onImagesLoaded && this.props.onImagesLoaded(e), this.masonry.layout()
                        }.bind(this), 100))
                    },
                    initializeResizableChildren: function() {
                        this.props.enableResizableChildren && (this.erd = s({
                            strategy: "scroll"
                        }), this.latestKnownDomChildren.forEach(this.listenToElementResize, this))
                    },
                    listenToElementResize: function(e) {
                        this.erd.listenTo(e, function() {
                            this.masonry.layout()
                        }.bind(this))
                    },
                    destroyErd: function() {
                        this.erd && this.latestKnownDomChildren.forEach(this.erd.uninstall, this.erd)
                    },
                    componentDidMount: function() {
                        this.initializeMasonry(), this.initializeResizableChildren(), this.imagesLoaded()
                    },
                    componentDidUpdate: function() {
                        this.performLayout(), this.imagesLoaded()
                    },
                    componentWillUnmount: function() {
                        this.destroyErd(), this.props.onLayoutComplete && this.masonry.off("layoutComplete", this.props.onLayoutComplete), this.props.onRemoveComplete && this.masonry.off("removeComplete", this.props.onRemoveComplete), this.masonry.destroy()
                    },
                    setRef: function(e) {
                        this.masonryContainer = e
                    },
                    render: function() {
                        var e = l(this.props, Object.keys(m));
                        return d.createElement(this.props.elementType, o({}, e, {
                            ref: this.setRef
                        }), this.props.children)
                    }
                });
            e.exports = h, e.exports.default = h
        },
        q7TX: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                function t() {}
                var n = {
                    log: t,
                    warn: t,
                    error: t
                };
                if (!e && window.console) {
                    var r = function(e, t) {
                        e[t] = function() {
                            var e = console[t];
                            if (e.apply) e.apply(console, arguments);
                            else
                                for (var n = 0; n < arguments.length; n++) e(arguments[n])
                        }
                    };
                    r(n, "log"), r(n, "warn"), r(n, "error")
                }
                return n
            }
        },
        q8H6: function(e, t, n) {
            e.exports = n.p + "assets/paypal_dark_2x-74742ec8600998675dc5.png"
        },
        "ry+o": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ChannelPanelsUpdatePanel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UpdatePanelInput"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "updatePanel"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "panel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "DefaultPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "title"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "imageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "linkURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "description"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ExtensionPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "slotID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 205
                }
            };
            n.loc.source = {
                body: "mutation ChannelPanelsUpdatePanel($input: UpdatePanelInput!) {\nupdatePanel(input: $input) {\npanel {\nid\ntype\n... on DefaultPanel {\ntitle\nimageURL\nlinkURL\ndescription\n}\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sL9O: function(e, t, n) {},
        sV2v: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("fvjX"),
                o = n("GnwI"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (!document.querySelector("#recurly-script")) {
                            var e = document.createElement("script");
                            e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                        }
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(i.Component),
                c = Object(a.compose)(Object(o.b)("RecurlyScript", {
                    autoReportInteractive: !0
                }))(s);
            n.d(t, !1, function() {
                return s
            }), n.d(t, "a", function() {
                return c
            })
        },
        "saS/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ChannelPanelsDeletePanel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DeletePanelInput"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "deletePanel"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "panel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "DefaultPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "title"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "imageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "linkURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "description"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ExtensionPanel"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "slotID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 205
                }
            };
            n.loc.source = {
                body: "mutation ChannelPanelsDeletePanel($input: DeletePanelInput!) {\ndeletePanel(input: $input) {\npanel {\nid\ntype\n... on DefaultPanel {\ntitle\nimageURL\nlinkURL\ndescription\n}\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        t3DW: function(e, t, n) {
            "use strict";
            (e.exports = {}).forEach = function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = t(e[n]);
                    if (r) return r
                }
            }
        },
        "u/1r": function(e, t, n) {},
        uReR: function(e, t, n) {
            e.exports = n.p + "assets/amex-0e89bed815722eb64119.svg"
        },
        uUdG: function(e, t, n) {},
        "vE+g": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_1x-27fb4921a874a8f4d84b.png"
        },
        vGoz: function(e, t, n) {},
        vX6Q: function(e, t, n) {
            var r, i;
            /*!
             * imagesLoaded v4.1.3
             * JavaScript is all like "You images are done yet or what?"
             * MIT License
             */
            /*!
             * imagesLoaded v4.1.3
             * JavaScript is all like "You images are done yet or what?"
             * MIT License
             */
            ! function(a, o) {
                "use strict";
                r = [n("CUlp")], void 0 === (i = function(e) {
                    return function(e, t) {
                        var n = e.jQuery,
                            r = e.console;

                        function i(e, t) {
                            for (var n in t) e[n] = t[n];
                            return e
                        }

                        function a(e, t, r) {
                            if (!(this instanceof a)) return new a(e, t, r);
                            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
                                var t = [];
                                if (Array.isArray(e)) t = e;
                                else if ("number" == typeof e.length)
                                    for (var n = 0; n < e.length; n++) t.push(e[n]);
                                else t.push(e);
                                return t
                            }(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(function() {
                                this.check()
                            }.bind(this))
                        }
                        a.prototype = Object.create(t.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                            this.images = [], this.elements.forEach(this.addElementImages, this)
                        }, a.prototype.addElementImages = function(e) {
                            "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                            var t = e.nodeType;
                            if (t && o[t]) {
                                for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
                                    var i = n[r];
                                    this.addImage(i)
                                }
                                if ("string" == typeof this.options.background) {
                                    var a = e.querySelectorAll(this.options.background);
                                    for (r = 0; r < a.length; r++) {
                                        var s = a[r];
                                        this.addElementBackgroundImages(s)
                                    }
                                }
                            }
                        };
                        var o = {
                            1: !0,
                            9: !0,
                            11: !0
                        };

                        function s(e) {
                            this.img = e
                        }

                        function c(e, t) {
                            this.url = e, this.element = t, this.img = new Image
                        }
                        return a.prototype.addElementBackgroundImages = function(e) {
                            var t = getComputedStyle(e);
                            if (t)
                                for (var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(t.backgroundImage); null !== r;) {
                                    var i = r && r[2];
                                    i && this.addBackground(i, e), r = n.exec(t.backgroundImage)
                                }
                        }, a.prototype.addImage = function(e) {
                            var t = new s(e);
                            this.images.push(t)
                        }, a.prototype.addBackground = function(e, t) {
                            var n = new c(e, t);
                            this.images.push(n)
                        }, a.prototype.check = function() {
                            var e = this;

                            function t(t, n, r) {
                                setTimeout(function() {
                                    e.progress(t, n, r)
                                })
                            }
                            this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
                                e.once("progress", t), e.check()
                            }) : this.complete()
                        }, a.prototype.progress = function(e, t, n) {
                            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + n, e, t)
                        }, a.prototype.complete = function() {
                            var e = this.hasAnyBroken ? "fail" : "done";
                            if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                                var t = this.hasAnyBroken ? "reject" : "resolve";
                                this.jqDeferred[t](this)
                            }
                        }, s.prototype = Object.create(t.prototype), s.prototype.check = function() {
                            this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                        }, s.prototype.getIsImageComplete = function() {
                            return this.img.complete && void 0 !== this.img.naturalWidth
                        }, s.prototype.confirm = function(e, t) {
                            this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
                        }, s.prototype.handleEvent = function(e) {
                            var t = "on" + e.type;
                            this[t] && this[t](e)
                        }, s.prototype.onload = function() {
                            this.confirm(!0, "onload"), this.unbindEvents()
                        }, s.prototype.onerror = function() {
                            this.confirm(!1, "onerror"), this.unbindEvents()
                        }, s.prototype.unbindEvents = function() {
                            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                        }, c.prototype = Object.create(s.prototype), c.prototype.check = function() {
                            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                        }, c.prototype.unbindEvents = function() {
                            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                        }, c.prototype.confirm = function(e, t) {
                            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
                        }, a.makeJQueryPlugin = function(t) {
                            (t = t || e.jQuery) && ((n = t).fn.imagesLoaded = function(e, t) {
                                return new a(this, e, t).jqDeferred.promise(n(this))
                            })
                        }, a.makeJQueryPlugin(), a
                    }(a, e)
                }.apply(t, r)) || (e.exports = i)
            }("undefined" != typeof window ? window : this)
        },
        vylb: function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        wnTG: function(e, t, n) {
            "use strict";
            var r = n("UL9e");

            function i() {
                var e = {},
                    t = 0,
                    n = 0,
                    r = 0;
                return {
                    add: function(i, a) {
                        a || (a = i, i = 0), i > n ? n = i : i < r && (r = i), e[i] || (e[i] = []), e[i].push(a), t++
                    },
                    process: function() {
                        for (var t = r; t <= n; t++)
                            for (var i = e[t], a = 0; a < i.length; a++)(0, i[a])()
                    },
                    size: function() {
                        return t
                    }
                }
            }
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = r.getOption(e, "async", !0),
                    a = r.getOption(e, "auto", !0);
                a && !n && (t && t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
                var o, s = i(),
                    c = !1;

                function l() {
                    for (c = !0; s.size();) {
                        var e = s;
                        s = i(), e.process()
                    }
                    c = !1
                }

                function u() {
                    o = function(e) {
                        return function(e) {
                            return setTimeout(e, 0)
                        }(e)
                    }(l)
                }
                return {
                    add: function(e, t) {
                        !c && a && n && 0 === s.size() && u(), s.add(e, t)
                    },
                    force: function(e) {
                        c || (void 0 === e && (e = n), o && (function(e) {
                            clearTimeout(e)
                        }(o), o = null), e ? u() : l())
                    }
                }
            }
        },
        x0Ue: function(e, t, n) {
            var r, i;
            ! function(a, o) {
                "use strict";
                void 0 === (i = "function" == typeof(r = o) ? r.call(t, n, t, e) : r) || (e.exports = i)
            }(window, function() {
                "use strict";
                var e = function() {
                    var e = window.Element.prototype;
                    if (e.matches) return "matches";
                    if (e.matchesSelector) return "matchesSelector";
                    for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
                        var r = t[n] + "MatchesSelector";
                        if (e[r]) return r
                    }
                }();
                return function(t, n) {
                    return t[e](n)
                }
            })
        },
        xVpv: function(e, t, n) {},
        xgE2: function(e, t, n) {
            e.exports = n.p + "assets/more_methods_2x-3b1c8bbdaabcd0fb7c8a.png"
        },
        yUZ2: function(e, t, n) {
            "use strict";
            var r = n("t3DW").forEach;
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    i = e.stateHandler.getState,
                    a = (e.stateHandler.hasState, e.idHandler);
                if (!n) throw new Error("Missing required dependency: batchProcessor");
                if (!t) throw new Error("Missing required dependency: reporter.");
                var o = function() {
                        var e = document.createElement("div");
                        e.style.cssText = "position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";
                        var t = document.createElement("div");
                        t.style.cssText = "position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;", t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
                        var n = 500 - t.clientWidth,
                            r = 500 - t.clientHeight;
                        return document.body.removeChild(t), {
                            width: n,
                            height: r
                        }
                    }(),
                    s = "erd_scroll_detection_container";

                function c(e, n, r) {
                    if (e.addEventListener) e.addEventListener(n, r);
                    else {
                        if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                        e.attachEvent("on" + n, r)
                    }
                }

                function l(e, n, r) {
                    if (e.removeEventListener) e.removeEventListener(n, r);
                    else {
                        if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                        e.detachEvent("on" + n, r)
                    }
                }

                function u(e) {
                    return i(e).container.childNodes[0].childNodes[0].childNodes[0]
                }

                function d(e) {
                    return i(e).container.childNodes[0].childNodes[0].childNodes[1]
                }
                return function(e, t) {
                    if (!document.getElementById(e)) {
                        var n = t + "_animation",
                            r = t + "_animation_active",
                            i = "/* Created by the element-resize-detector library. */\n";
                        i += "." + t + " > div::-webkit-scrollbar { display: none; }\n\n", i += "." + r + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + n + "; animation-name: " + n + "; }\n", i += "@-webkit-keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
                            function(t, n) {
                                n = n || function(e) {
                                    document.head.appendChild(e)
                                };
                                var r = document.createElement("style");
                                r.innerHTML = t, r.id = e, n(r)
                            }(i += "@keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
                    }
                }("erd_scroll_detection_scrollbar_style", s), {
                    makeDetectable: function(e, l, p) {
                        function m() {
                            if (e.debug) {
                                var n = Array.prototype.slice.call(arguments);
                                if (n.unshift(a.get(l), "Scroll: "), t.log.apply) t.log.apply(null, n);
                                else
                                    for (var r = 0; r < n.length; r++) t.log(n[r])
                            }
                        }

                        function h(e) {
                            var t = i(e).container.childNodes[0],
                                n = getComputedStyle(t);
                            return !n.width || -1 === n.width.indexOf("px")
                        }

                        function f() {
                            var e = getComputedStyle(l),
                                t = {};
                            return t.position = e.position, t.width = l.offsetWidth, t.height = l.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                        }

                        function y() {
                            if (m("storeStyle invoked."), i(l)) {
                                var e = f();
                                i(l).style = e
                            } else m("Aborting because element has been uninstalled")
                        }

                        function g(e, t, n) {
                            i(e).lastWidth = t, i(e).lastHeight = n
                        }

                        function b() {
                            return 2 * o.width + 1
                        }

                        function v() {
                            return 2 * o.height + 1
                        }

                        function E(e) {
                            return e + 10 + b()
                        }

                        function C(e) {
                            return e + 10 + v()
                        }

                        function k(e, t, n) {
                            var r = u(e),
                                i = d(e),
                                a = E(t),
                                o = C(n),
                                s = function(e) {
                                    return 2 * e + b()
                                }(t),
                                c = function(e) {
                                    return 2 * e + v()
                                }(n);
                            r.scrollLeft = a, r.scrollTop = o, i.scrollLeft = s, i.scrollTop = c
                        }

                        function P() {
                            var e = i(l).container;
                            if (!e) {
                                (e = document.createElement("div")).className = s, e.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;", i(l).container = e,
                                    function(e) {
                                        e.className += " " + s + "_animation_active"
                                    }(e), l.appendChild(e);
                                var t = function() {
                                    i(l).onRendered && i(l).onRendered()
                                };
                                c(e, "animationstart", t), i(l).onAnimationStart = t
                            }
                            return e
                        }

                        function S() {
                            if (m("Injecting elements"), i(l)) {
                                ! function() {
                                    var e = i(l).style;
                                    if ("static" === e.position) {
                                        l.style.position = "relative";
                                        var n = function(e, t, n, r) {
                                            var i = n[r];
                                            "auto" !== i && "0" !== function(e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(i) && (e.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0)
                                        };
                                        n(t, l, e, "top"), n(t, l, e, "right"), n(t, l, e, "bottom"), n(t, l, e, "left")
                                    }
                                }();
                                var e = i(l).container;
                                e || (e = P());
                                var n = o.width,
                                    r = o.height,
                                    a = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + function(e, t, n, r) {
                                        return e = e ? e + "px" : "0", t = t ? t + "px" : "0", n = n ? n + "px" : "0", "left: " + e + "; top: " + t + "; right: " + (r = r ? r + "px" : "0") + "; bottom: " + n + ";"
                                    }(-(1 + n), -(1 + r), -r, -n),
                                    u = document.createElement("div"),
                                    d = document.createElement("div"),
                                    p = document.createElement("div"),
                                    h = document.createElement("div"),
                                    f = document.createElement("div"),
                                    y = document.createElement("div");
                                u.dir = "ltr", u.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;", u.className = s, d.className = s, d.style.cssText = a, p.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", h.style.cssText = "position: absolute; left: 0; top: 0;", f.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", y.style.cssText = "position: absolute; width: 200%; height: 200%;", p.appendChild(h), f.appendChild(y), d.appendChild(p), d.appendChild(f), u.appendChild(d), e.appendChild(u), c(p, "scroll", g), c(f, "scroll", b), i(l).onExpandScroll = g, i(l).onShrinkScroll = b
                            } else m("Aborting because element has been uninstalled");

                            function g() {
                                i(l).onExpand && i(l).onExpand()
                            }

                            function b() {
                                i(l).onShrink && i(l).onShrink()
                            }
                        }

                        function x() {
                            function o(e, t, n) {
                                var r = function(e) {
                                        return u(e).childNodes[0]
                                    }(e),
                                    i = E(t),
                                    a = C(n);
                                r.style.width = i + "px", r.style.height = a + "px"
                            }

                            function s(r) {
                                var s = l.offsetWidth,
                                    u = l.offsetHeight;
                                m("Storing current size", s, u), g(l, s, u), n.add(0, function() {
                                    if (i(l))
                                        if (c()) {
                                            if (e.debug) {
                                                var n = l.offsetWidth,
                                                    r = l.offsetHeight;
                                                n === s && r === u || t.warn(a.get(l), "Scroll: Size changed before updating detector elements.")
                                            }
                                            o(l, s, u)
                                        } else m("Aborting because element container has not been initialized");
                                    else m("Aborting because element has been uninstalled")
                                }), n.add(1, function() {
                                    i(l) ? c() ? k(l, s, u) : m("Aborting because element container has not been initialized") : m("Aborting because element has been uninstalled")
                                }), r && n.add(2, function() {
                                    i(l) ? c() ? r() : m("Aborting because element container has not been initialized") : m("Aborting because element has been uninstalled")
                                })
                            }

                            function c() {
                                return !!i(l).container
                            }

                            function p() {
                                m("notifyListenersIfNeeded invoked");
                                var e = i(l);
                                return void 0 === i(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? m("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? m("Not notifying: Size already notified") : (m("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, void r(i(l).listeners, function(e) {
                                    e(l)
                                }))
                            }

                            function f() {
                                if (m("Scroll detected."), h(l)) m("Scroll event fired while unrendered. Ignoring...");
                                else {
                                    var e = l.offsetWidth,
                                        t = l.offsetHeight;
                                    e !== l.lastWidth || t !== l.lastHeight ? (m("Element size changed."), s(p)) : m("Element size has not changed (" + e + "x" + t + ").")
                                }
                            }
                            if (m("registerListenersAndPositionElements invoked."), i(l)) {
                                i(l).onRendered = function() {
                                    if (m("startanimation triggered."), h(l)) m("Ignoring since element is still unrendered...");
                                    else {
                                        m("Element rendered.");
                                        var e = u(l),
                                            t = d(l);
                                        0 !== e.scrollLeft && 0 !== e.scrollTop && 0 !== t.scrollLeft && 0 !== t.scrollTop || (m("Scrollbars out of sync. Updating detector elements..."), s(p))
                                    }
                                }, i(l).onExpand = f, i(l).onShrink = f;
                                var y = i(l).style;
                                o(l, y.width, y.height)
                            } else m("Aborting because element has been uninstalled")
                        }

                        function O() {
                            if (m("finalizeDomMutation invoked."), i(l)) {
                                var e = i(l).style;
                                g(l, e.width, e.height), k(l, e.width, e.height)
                            } else m("Aborting because element has been uninstalled")
                        }

                        function I() {
                            p(l)
                        }

                        function w() {
                            m("Installing..."), i(l).listeners = [],
                                function() {
                                    var e = f();
                                    i(l).startSize = {
                                        width: e.width,
                                        height: e.height
                                    }, m("Element start size", i(l).startSize)
                                }(), n.add(0, y), n.add(1, S), n.add(2, x), n.add(3, O), n.add(4, I)
                        }
                        p || (p = l, l = e, e = null), e = e || {}, m("Making detectable..."),
                            function(e) {
                                return ! function(e) {
                                    return e === e.ownerDocument.body || e.ownerDocument.body.contains(e)
                                }(e) || null === getComputedStyle(e)
                            }(l) ? (m("Element is detached"), P(), m("Waiting until element is attached..."), i(l).onRendered = function() {
                                m("Element is now attached"), w()
                            }) : w()
                    },
                    addListener: function(e, t) {
                        if (!i(e).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
                        i(e).listeners.push(t)
                    },
                    uninstall: function(e) {
                        var t = i(e);
                        t && (t.onExpandScroll && l(u(e), "scroll", t.onExpandScroll), t.onShrinkScroll && l(d(e), "scroll", t.onShrinkScroll), t.onAnimationStart && l(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
                    }
                }
            }
        },
        yrda: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_2x-914335e3401a72109a8a.png"
        }
    }
]);