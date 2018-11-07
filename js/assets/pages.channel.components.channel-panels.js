(window.webpackJsonp = window.webpackJsonp || []).push([
    [119], {
        "/Z6v": function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_dark_2x-c98151cef856bab0e62c.png"
        },
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("q1tI"),
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(a.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, r.createElement(a.Pa, {
                            position: a.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: a.ic.Above
                        }, r.createElement("input", {
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
                }(r.Component))
        },
        "0HeA": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var i, r, a = n("/7QA"),
                o = n("DMoW");
            ! function(e) {
                e.Default = "default", e.Extension = "extension"
            }(r || (r = {}));
            var s = ((i = {})[o.D.DEFAULT] = r.Default, i[o.D.EXTENSION] = r.Extension, i);

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
            var i = n("mrSG"),
                r = n("q1tI"),
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
                                i = e.location,
                                r = e.history;
                            !n || i.state && t.internalTrackingMediums.includes(i.state.medium) ? r.goBack() : r.push(Object(c.c)(n))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.title,
                            n = e.showBackLink;
                        return r.createElement(l.Eb, {
                            background: l.r.Alt2,
                            display: l.X.Flex,
                            alignItems: l.f.Stretch
                        }, n && r.createElement(l.Eb, {
                            border: !0,
                            display: l.X.Flex,
                            flexGrow: 0
                        }, r.createElement(l.A, {
                            ariaLabel: Object(o.d)("Navigate to previous page", "ExtensionPageHeader"),
                            size: l.B.Large,
                            icon: l.tb.AngleLeft,
                            onClick: this.goBack
                        })), r.createElement(l.Eb, {
                            border: !0,
                            display: l.X.Flex,
                            flexGrow: 1,
                            padding: 2
                        }, r.createElement(l.W, {
                            type: l.Vb.H4
                        }, t)))
                    }, t
                }(r.Component),
                d = Object(a.a)(u);
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
            var i = "_erd";

            function r(e) {
                return e[i]
            }
            e.exports = {
                initState: function(e) {
                    return e[i] = {}, r(e)
                },
                getState: r,
                cleanState: function(e) {
                    delete e[i]
                }
            }
        },
        "22qk": function(e, t, n) {
            "use strict";

            function i(e, t) {
                return "/ext/" + d(e, t)
            }

            function r(e, t, n) {
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
                return i
            }), n.d(t, "b", function() {
                return r
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
            var i, r = n("/7QA"),
                a = n("2xye");

            function o(e) {
                var t = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                r.o.track(a.SpadeEventType.ExtensionInstall, t)
            }

            function s(e) {
                var t = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                r.o.track(a.SpadeEventType.ExtensionConfigureView, t)
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
                r.o.track(a.SpadeEventType.ExtensionStreamerComponentSettings, c(i.Open, e))
            }

            function u(e) {
                r.o.track(a.SpadeEventType.ExtensionStreamerComponentSettings, c(i.Close, e))
            }

            function d(e) {
                r.o.track(a.SpadeEventType.ExtensionStreamerComponentSettings, c(i.Save, e))
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
                r.o.track(a.SpadeEventType.ExtensionPopoutClicked, p(e))
            }

            function h(e) {
                r.o.track(a.SpadeEventType.ExtensionPopinClicked, p(e))
            }! function(e) {
                e.Open = "open", e.Close = "close", e.Save = "save"
            }(i || (i = {}))
        },
        "5gJ6": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                g = n.n(f),
                y = n("uReR"),
                b = n.n(y),
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
                R = n("FBRg"),
                j = n.n(R),
                F = n("2xEe"),
                A = n.n(F),
                M = n("q8H6"),
                L = n.n(M),
                B = n("oQBz"),
                U = n.n(B),
                W = n("PwAB"),
                z = n.n(W),
                X = n("/0dD"),
                G = n("DMoW"),
                H = n("XDQu"),
                V = n("Ue10"),
                q = (n("88jh"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if ("prime" === this.props.paymentProvider) return r.createElement(V.sb, {
                            asset: V.tb.LogoTwitchPrime,
                            width: 66,
                            height: 30,
                            type: V.ub.Brand
                        });
                        var e = this.imageSource,
                            t = e.src,
                            n = e.alt,
                            i = e.srcSet;
                        return r.createElement(V.Xa, {
                            className: "payment-method-image"
                        }, r.createElement(V.S, {
                            src: t,
                            alt: n,
                            srcSet: i
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
                                        src: g.a,
                                        alt: Object(o.d)("Android icon", "PaymentMethodImage")
                                    }
                            }
                            var t = this.props.paymentInstrumentType ? this.props.paymentInstrumentType.toUpperCase() : void 0,
                                n = this.props.cardType ? this.props.cardType.toUpperCase() : void 0;
                            switch (t) {
                                case G.F.CREDIT_CARD:
                                    switch (n) {
                                        case G.E.AMERICAN_EXPRESS:
                                            return {
                                                src: b.a,
                                                alt: Object(o.d)("American Express", "PaymentMethodImage")
                                            };
                                        case G.E.DISCOVER:
                                            return {
                                                src: E.a,
                                                alt: Object(o.d)("Discover", "PaymentMethodImage")
                                            };
                                        case G.E.MASTERCARD:
                                            return {
                                                src: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? S.a : k.a,
                                                alt: Object(o.d)("Mastercard", "PaymentMethodImage")
                                            };
                                        case G.E.VISA:
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
                                case G.F.AMAZON:
                                    return {
                                        src: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? p.a : c.a,
                                        srcSet: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? {
                                            "1x": p.a,
                                            "2x": h.a
                                        } : {
                                            "1x": c.a,
                                            "2x": u.a
                                        },
                                        alt: Object(o.d)("Amazon Pay", "PaymentMethodImage")
                                    };
                                case G.F.PAYPAL:
                                    return {
                                        src: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? A.a : D.a,
                                        srcSet: this.props.darkModeEnabled && !this.props.ignoreDarkMode ? {
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
                }(r.Component));
            var Y = Object(a.connect)(function(e) {
                return {
                    darkModeEnabled: Object(H.a)(e) === X.a.Dark
                }
            })(q);
            n.d(t, !1, function() {
                return q
            }), n.d(t, "a", function() {
                return Y
            })
        },
        "6fcp": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
                }(i || (i = {}))
        },
        "6oOb": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.CONFIRMATION = 1] = "CONFIRMATION"
                }(i || (i = {}))
        },
        "7sSR": function(e, t, n) {
            "use strict";
            var i = n("t3DW").forEach,
                r = n("W+U1"),
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
                return i(e, function(e) {
                    t.push(e)
                }), t
            }

            function g(e) {
                return e && 1 === e.nodeType
            }

            function y(e, t, n) {
                var i = e[t];
                return void 0 !== i && null !== i || void 0 === n ? i : n
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
                var E = y(e, "batchProcessor", u({
                        reporter: v
                    })),
                    C = {};
                C.callOnAdd = !!y(e, "callOnAdd", !0), C.debug = !!y(e, "debug", !1);
                var k, P = a(t),
                    S = r({
                        stateHandler: d
                    }),
                    x = y(e, "strategy", "object"),
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
                    listenTo: function(e, n, r) {
                        function a(e) {
                            var t = P.get(e);
                            i(t, function(t) {
                                t(e)
                            })
                        }

                        function o(e, t, n) {
                            P.add(t, n), e && n(t)
                        }
                        if (r || (r = n, n = e, e = {}), !n) throw new Error("At least one element required.");
                        if (!r) throw new Error("Listener required.");
                        if (g(n)) n = [n];
                        else {
                            if (!h(n)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            n = f(n)
                        }
                        var s = 0,
                            c = y(e, "callOnAdd", C.callOnAdd),
                            l = y(e, "onReady", function() {}),
                            u = y(e, "debug", C.debug);
                        i(n, function(e) {
                            d.getState(e) || (d.initState(e), t.set(e));
                            var p = t.get(e);
                            if (u && v.log("Attaching listener to element", p, e), !S.isDetectable(e)) return u && v.log(p, "Not detectable."), S.isBusy(e) ? (u && v.log(p, "System busy making it detectable"), o(c, e, r), I[p] = I[p] || [], void I[p].push(function() {
                                ++s === n.length && l()
                            })) : (u && v.log(p, "Making detectable..."), S.markBusy(e, !0), k.makeDetectable({
                                debug: u
                            }, e, function(e) {
                                if (u && v.log(p, "onElementDetectable"), d.getState(e)) {
                                    S.markAsDetectable(e), S.markBusy(e, !1), k.addListener(e, a), o(c, e, r);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var m = e.offsetWidth,
                                            h = e.offsetHeight;
                                        t.startSize.width === m && t.startSize.height === h || a(e)
                                    }
                                    I[p] && i(I[p], function(e) {
                                        e()
                                    })
                                } else u && v.log(p, "Element uninstalled before being detectable.");
                                delete I[p], ++s === n.length && l()
                            }));
                            u && v.log(p, "Already detecable, adding listener."), o(c, e, r), s++
                        }), s === n.length && l()
                    },
                    removeListener: P.removeListener,
                    removeAllListeners: P.removeAllListeners,
                    uninstall: function(e) {
                        if (!e) return v.error("At least one element is required.");
                        if (g(e)) e = [e];
                        else {
                            if (!h(e)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            e = f(e)
                        }
                        i(e, function(e) {
                            P.removeAllListeners(e), k.uninstall(e), d.cleanState(e)
                        })
                    }
                }
            }
        },
        "85n/": function(e, t, n) {
            "use strict";
            var i = n("TQGo");
            n.d(t, "a", function() {
                return i.a
            })
        },
        "88jh": function(e, t, n) {},
        "8ENv": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = o(n("J2m7")),
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
                return i(e, [{
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
                        return (0, r.default)(this.refs[this.active.collection], function(t) {
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
            var i = {
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
            i.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery TicketDescription($productName: String! $taxCountry: String) {\nproduct: subscriptionProduct(productName: $productName) {\nid\ndisplayName\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\ntier\nowner {\nid\ndisplayName\nbannerImageURL\nprofileImageURL(width: 300)\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\ntier\nemotes {\nid\ntoken\n}\n}\n}\ngiftPromotion {\nnewPrice\n}\nself {\npromotion {\nnewPrice\n}\npaidUpgradePromotion {\nnewPrice\n}\nbenefit {\nid\ngift {\nisGift\n}\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = i
        },
        AVF4: function(e, t, n) {
            e.exports = n.p + "assets/credit_cards_1x-0c57bd2e9d4cd4bb8474.png"
        },
        AfzZ: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                g = n("YyE3"),
                y = n("22qk"),
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.props,
                            t = e.extensionID,
                            n = e.extensionsForChannel,
                            i = t.split("-"),
                            r = i[0],
                            a = i[1];
                        n && !n.loading && n.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(n.installedExtensions)
                        }), Object(b.d)({
                            extensionClientID: r,
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
                            i = e.languageCode,
                            a = e.locale,
                            o = this.isLoading(),
                            s = t || "",
                            u = n || "",
                            d = null;
                        if (o) d = this.renderPlaceholders();
                        else {
                            if (!this.state.installation) return this.renderRedirect(u);
                            var g = this.state.installation,
                                y = g.extension;
                            d = r.createElement(c.Xa, {
                                fullWidth: !0
                            }, r.createElement(c.Xa, {
                                padding: {
                                    bottom: 1
                                }
                            }, r.createElement(c.G, {
                                row: !0,
                                border: !1
                            }, r.createElement(c.I, {
                                alt: y.name,
                                src: this.state.hasCardImageError ? p.a.defaultAvatarURL : y.iconUrl,
                                aspect: c.p.Aspect1x1,
                                size: c.J.Size6,
                                onError: this.onCardImageError
                            }), r.createElement(c.H, null, r.createElement(c.Xa, {
                                padding: 1
                            }, r.createElement(c.W, {
                                type: c.Vb.H4
                            }, y.name), r.createElement(c.W, {
                                type: c.Vb.Span,
                                color: c.O.Alt2
                            }, Object(p.d)("Created by {extensionAuthor}", {
                                extensionAuthor: y.authorName
                            }, "ExtensionConfigurePresentation")))))), r.createElement(c.Xa, null, r.createElement(h.a, {
                                channelID: s,
                                channelLogin: n,
                                className: "",
                                extensionMode: l.ExtensionMode.Config,
                                installation: g,
                                languageCode: i,
                                locale: a,
                                login: n,
                                loginID: s,
                                isPopout: !1
                            })))
                        }
                        var b = r.createElement(f.a, {
                            channelLogin: n,
                            showBackLink: !1,
                            title: Object(p.d)("Configure", "ExtensionConfigurePresentation")
                        });
                        return r.createElement(m.b, null, r.createElement(c.Xa, {
                            padding: 2
                        }, b, r.createElement(c.Eb, {
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
                        return r.createElement(c.Xa, {
                            fullWidth: !0
                        }, r.createElement(c.Xa, {
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(c.Xa, null, r.createElement(c.ib, {
                            width: 60,
                            height: 60
                        })), r.createElement(c.Xa, {
                            padding: {
                                left: 1
                            }
                        }, r.createElement(c.ib, {
                            lineCount: 2,
                            width: 200
                        }))))
                    }, t.prototype.isLoading = function() {
                        return !this.props.extensionsForChannel || !this.props.extensionsForChannel.installedExtensions
                    }, t.prototype.renderRedirect = function(e) {
                        return r.createElement(d.a, {
                            to: Object(y.e)(e)
                        })
                    }, t
                }(r.Component),
                E = Object(u.compose)(Object(g.a)({
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.channelID,
                            n = e.channelLogin,
                            i = e.extensionID,
                            a = e.languageCode,
                            s = e.locale,
                            l = e.onClose;
                        return r.createElement(c.Eb, {
                            background: c.r.Base,
                            className: "extension-configure-modal"
                        }, r.createElement(E, {
                            channelLogin: n,
                            channelID: t,
                            extensionID: i,
                            languageCode: a,
                            locale: s
                        }), r.createElement(o.a, {
                            closeOnBackdropClick: !0,
                            onClose: l
                        }))
                    }, t
                }(r.Component));
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
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
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
                    }(n, t), r(n, [{
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
                            return o.default.createElement(e, i({
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
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10");
            n("uUdG");
            var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.price ? r.createElement(o.Xa, {
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column
                    }, this.props.productDiscountPrice && r.createElement(o.W, {
                        bold: !0,
                        className: "ticket-price__promotion",
                        fontSize: o.Ca.Size4
                    }, Object(a.d)("{discountedPrice} / First Month*", {
                        discountedPrice: this.props.productDiscountPrice
                    }, "TicketPrice")), r.createElement(o.Xa, {
                        display: o.X.Flex,
                        justifyContent: o.Wa.Center,
                        flexWrap: o.Ba.Wrap
                    }, r.createElement(o.W, {
                        type: o.Vb.Span,
                        fontSize: o.Ca.Size4,
                        decoration: this.props.productDiscountPrice ? o.Tb.Strikethrough : void 0,
                        "data-a-target": "js-test-ticket-price-text"
                    }, Object(a.d)("{price} / {interval}", {
                        price: r.createElement(o.W, {
                            type: o.Vb.Span,
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
                    }, "TicketDescription")), this.formattedTaxInclusivity && r.createElement(o.Pa, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(o.W, {
                        fontSize: o.Ca.Size4,
                        type: o.Vb.Span,
                        decoration: this.props.productDiscountPrice ? o.Tb.Strikethrough : void 0
                    }, Object(a.d)("(Includes VAT)", "TicketDescription"))))) : r.createElement(o.Za, {
                        fillContent: !0
                    })
                }, Object.defineProperty(t.prototype, "formattedTaxInclusivity", {
                    get: function() {
                        return this.props.showEuSubs && this.props.productPriceTaxInclusive ? Object(a.d)("(Includes VAT)", "TicketPrice") : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.PureComponent);
            n.d(t, "a", function() {
                return s
            })
        },
        CUlp: function(e, t, n) {
            var i, r;
            "undefined" != typeof window && window, void 0 === (r = "function" == typeof(i = function() {
                "use strict";

                function e() {}
                var t = e.prototype;
                return t.on = function(e, t) {
                    if (e && t) {
                        var n = this._events = this._events || {},
                            i = n[e] = n[e] || [];
                        return -1 == i.indexOf(t) && i.push(t), this
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
                        var i = n.indexOf(t);
                        return -1 != i && n.splice(i, 1), this
                    }
                }, t.emitEvent = function(e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                        n = n.slice(0), t = t || [];
                        for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
                            var a = n[r];
                            i && i[a] && (this.off(e, a), delete i[a]), a.apply(this, t)
                        }
                        return this
                    }
                }, t.allOff = function() {
                    delete this._events, delete this._onceEvents
                }, e
            }) ? i.call(t, n, t, e) : i) || (e.exports = r)
        },
        D8NC: function(e, t, n) {
            e.exports = n.p + "assets/amazon_pay_1x-94c97f413ee6005ab1a1.png"
        },
        EF6p: function(e, t, n) {
            e.exports = n.p + "assets/more_methods_1x-98862ad01d0cfaef3e09.png"
        },
        "EZh/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = 3
        },
        EgbR: function(e, t, n) {},
        EuHz: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("/MKj"),
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
                g = n("fvjX"),
                y = n("aCAx"),
                b = n("KJv/"),
                v = n("1rIY"),
                E = (i = Object(v.a)("ExtensionActionContext", {
                    currentChannelID: null,
                    currentActionRequest: null,
                    currentActionRequestUI: null,
                    sendActionResult: function() {
                        return null
                    }
                })).InnerProvider,
                C = i.withContext,
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
                                    var i = this.didUserReceiveSubscription(e),
                                        r = !!this.props.pubsub.messages.entitlementMessage;
                                    i ? (clearTimeout(this.waitForPubsubTimeout), this.waitForPubsubTimeout = void 0, this.setState({
                                        subscriptionState: _.Subscribed
                                    })) : r && this.waitForPubsubTimeout ? (clearTimeout(this.waitForPubsubTimeout), this.waitForPubsubTimeout = void 0, n.refetch()) : this.waitForPubsubTimeout || this.setState({
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
                        var i = t.user,
                            r = n.user;
                        if (!(i && i.self && r && r.self)) return !1;
                        var a = null === r.self.subscriptionBenefit && null !== i.self.subscriptionBenefit,
                            o = !(!i.self.subscriptionBenefit || !r.self.subscriptionBenefit || i.self.subscriptionBenefit.tier === r.self.subscriptionBenefit.tier);
                        return a || o
                    }, t.prototype.handleActionRequest = function() {
                        var e = this.props,
                            t = e.currentActionRequest,
                            n = e.currentSubscriptionData;
                        if (t && n) {
                            var i = null;
                            switch (t.options.tier) {
                                case k.ActionRequestSubTier.Upsell:
                                    var r = n.user;
                                    if (r && r.subscriptionProducts && r.self) {
                                        var a = function(e, t) {
                                            if (!t) return null;
                                            var n = t.filter(function(e) {
                                                    return null !== e
                                                }).sort(function(e, t) {
                                                    return e.tier < t.tier ? -1 : e.tier > t.tier ? 1 : -0
                                                }),
                                                i = n.findIndex(function(t) {
                                                    return t.tier === e
                                                });
                                            return null === e ? n[0] : i === n.length - 1 ? null : n[i + 1]
                                        }(r.self.subscriptionBenefit && r.self.subscriptionBenefit.tier, r.subscriptionProducts);
                                        a && (i = a.name)
                                    }
                            }
                            i ? (this.setState({
                                subscriptionState: _.InProgress
                            }), this.openCheckout(i)) : this.setState({
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
                            i = t.currentSubscriptionData,
                            r = t.showSubscriptionCheckoutModal;
                        if (n && i) {
                            var a = i.currentUser,
                                o = i.user;
                            p.o.track(O.SpadeEventType.ExtensionSubscribeToChannelActionInit, {
                                action: n.options.tier,
                                channel_id: o && o.id || "",
                                channel: o && o.login || "",
                                extension_id: n.extensionId,
                                product_name: e,
                                user_id: a && a.id || "",
                                user: a && a.login || ""
                            }), Object(S.d)(), p.n.set(S.b, e), r({
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
                R = Object(g.compose)(Object(m.a)(N, {
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
                        return Object(x.F)(e.currentSubscriptionData && e.currentSubscriptionData.currentUser && e.currentSubscriptionData.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "entitlementMessage"
                    },
                    skip: function(e) {
                        return !e.currentSubscriptionData || !e.currentSubscriptionData.currentUser || !e.currentSubscriptionData.currentUser.id
                    }
                }]))(D);
            var j = Object(g.compose)(C(function(e) {
                    return {
                        currentActionRequest: e.currentActionRequest,
                        currentChannelID: e.currentChannelID,
                        sendActionResult: e.sendActionResult
                    }
                }), Object(r.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showSubscriptionCheckoutModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(y.d)(b.CheckoutModal, t)
                        }
                    }, e)
                }))(R),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentActionRequest: null,
                            currentActionRequestUI: null,
                            isGlobalRender: !1
                        }, t.handleModalRequest = function(e) {
                            var n = null,
                                i = !1;
                            switch (e.action) {
                                case o.FunctionAction.SubscribeToChannel:
                                    n = s.createElement(j, null), i = !0;
                                    break;
                                default:
                                    return
                            }
                            t.setState({
                                currentActionRequest: e,
                                currentActionRequestUI: n,
                                isGlobalRender: i
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
                X = n("0HeA"),
                G = n("Ue10");
            n("ZAO/");
            ! function(e) {
                e.Description = "description_test_selector", e.Image = "image_test_selector", e.Link = "link_url_test_selector", e.Panel = "channel_panel_test_selector", e.Title = "title_test_selector"
            }(U || (U = {}));
            var H = /^https?:\/\//,
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDescriptionClick = function(e) {
                            var n = e.target;
                            if ("A" === n.nodeName) {
                                var i = n;
                                t.trackClick(i.href)
                            }
                        }, t.onImageClick = function() {
                            t.props.panel.linkURL && t.trackClick(t.props.panel.linkURL)
                        }, t.trackClick = function(e) {
                            var n = t.props.panel.id;
                            n && Object(X.a)(O.SpadeEventType.PanelClick, {
                                panelID: n,
                                channelID: t.props.channelID,
                                panelType: t.props.panel.type,
                                panelTarget: e
                            })
                        }, t.trackImpression = function() {
                            var e = t.props.panel.id;
                            e && Object(X.a)(O.SpadeEventType.PanelImpression, {
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
                        e && this.props.panel.linkURL && H.test(this.props.panel.linkURL) && (e = s.createElement(G.U, {
                            to: this.props.panel.linkURL,
                            onClick: this.onImageClick,
                            targetBlank: !0,
                            "data-test-selector": U.Link
                        }, e));
                        var t = null;
                        return this.props.panel.description && (t = s.createElement("div", {
                            onClick: this.onDescriptionClick,
                            "data-test-selector": U.Description
                        }, s.createElement(G.ec, null, s.createElement(B, a.__assign({
                            source: function(e) {
                                return e.replace(/(^|\n)(#+)([^\s#]+)/g, function(e, t, n, i) {
                                    return "" + t + n + " " + i
                                })
                            }(this.props.panel.description)
                        }, W))))), s.createElement(G.Xa, a.__assign({
                            className: "default-panel",
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": U.Panel
                        }, Object(G.jc)(this.props)), this.props.panel.title && s.createElement(G.W, {
                            type: G.Vb.H3,
                            "data-test-selector": U.Title
                        }, this.props.panel.title), e, t)
                    }, t
                }(s.Component),
                q = Object(c.compose)(Object(z.a)("DefaultPanel", {
                    pixels: 100
                }))(V),
                Y = n("TVJu"),
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
                        var e = s.createElement(G.z, {
                            fullWidth: !0,
                            icon: G.tb.NavSettings,
                            onClick: this.createExtensionPanel,
                            state: this.state.isCreatingExtensionPanel ? G.E.Loading : G.E.Default,
                            type: G.F.Hollow
                        }, Object(p.d)("Extension Panel", "CreatePanel"));
                        return this.state.isTypeSelectionMode ? s.createElement(G.Eb, {
                            border: !0,
                            background: G.r.Alt2,
                            className: "create-panel",
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(G.o, {
                            ratio: G.p.Aspect3x4
                        }, s.createElement(G.Xa, {
                            padding: 1
                        }, this.state.errorMessage && s.createElement(G.W, {
                            color: G.O.Error
                        }, this.state.errorMessage), s.createElement(G.Xa, {
                            margin: {
                                y: 1
                            }
                        }, s.createElement(G.z, {
                            fullWidth: !0,
                            icon: G.tb.GridLayout,
                            onClick: this.createDefaultPanel,
                            state: this.state.isCreatingDefaultPanel ? G.E.Loading : G.E.Default,
                            type: G.F.Hollow
                        }, Object(p.d)("Add a Text or Image Panel", "CreatePanel"))), this.props.canCreateExtensionPanel && e))) : s.createElement(G.Eb, {
                            border: !0,
                            background: G.r.Alt2,
                            className: "create-panel",
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(G.Ua, {
                            type: G.Va.Alpha,
                            onClick: this.toggleSelectionMode
                        }, s.createElement(G.o, {
                            ratio: G.p.Aspect3x4
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            justifyContent: G.Wa.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(G.sb, {
                            asset: G.tb.Plus,
                            height: 100,
                            width: 100,
                            type: G.ub.Placeholder
                        })))))
                    }, t
                }(s.Component)),
                J = n("kRBY"),
                $ = n("KJdW"),
                ee = n.n($),
                te = n("/ZC1"),
                ne = n("cZKs"),
                ie = n("KGBd");
            n("xVpv");
            var re = ["image/*"],
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
                                i = new FileReader;
                            i.onloadend = function() {
                                var e = i.result,
                                    r = new Image;
                                r.onload = function() {
                                    var i = function(e, t, n) {
                                            var i = e.height,
                                                r = e.width,
                                                a = i > t,
                                                o = r > n;
                                            return {
                                                percentCrop: {
                                                    x: 0,
                                                    y: 0,
                                                    height: (a ? t : i) / i * 100,
                                                    width: (o ? n : r) / r * 100
                                                },
                                                pixelCrop: {
                                                    x: 0,
                                                    y: 0,
                                                    height: a ? t : i,
                                                    width: o ? n : r
                                                }
                                            }
                                        }(r, oe.height, oe.width),
                                        a = i.percentCrop,
                                        o = i.pixelCrop;
                                    t.setState({
                                        base64Image: e,
                                        crop: a,
                                        file: n,
                                        isCropping: !0,
                                        pixelCrop: o
                                    })
                                }, r.onerror = function() {
                                    t.setState({
                                        error: "Failed to read file"
                                    })
                                }, r.src = e
                            }, i.onerror = function() {
                                t.setState({
                                    error: "Failed to read file"
                                })
                            }, i.readAsDataURL(n)
                        }, t.onImageSelectionComplete = function() {
                            var e = t.state,
                                n = e.file,
                                i = e.pixelCrop;
                            n && (t.props.onImageSelectionComplete({
                                file: n,
                                pixelCrop: i,
                                previewSrc: Object(ie.a)(t.state.base64Image, t.state.pixelCrop.x, t.state.pixelCrop.y, t.state.pixelCrop.width, t.state.pixelCrop.height, t.state.pixelCrop.width, t.state.pixelCrop.height)
                            }), t.props.onClose())
                        }, t.updateCrop = function(e, n) {
                            t.setState({
                                crop: e,
                                pixelCrop: n
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(G.Eb, {
                            background: G.r.Base,
                            className: "default-panel-image-picker",
                            textAlign: G.Rb.Center
                        }, this.state.base64Image ? this.renderImageCropper() : this.renderFilePicker(), s.createElement(ne.a, {
                            closeOnBackdropClick: !this.state.isCropping
                        }))
                    }, t.prototype.renderImageCropper = function() {
                        return s.createElement(G.Xa, {
                            padding: 2
                        }, s.createElement(ee.a, {
                            src: this.state.base64Image,
                            crop: this.state.crop,
                            onChange: this.updateCrop,
                            onComplete: this.updateCrop
                        }), s.createElement(G.Xa, {
                            display: G.X.Flex,
                            flexDirection: G.Aa.Row,
                            margin: {
                                top: 1
                            },
                            justifyContent: G.Wa.Center
                        }, s.createElement(G.z, {
                            onClick: this.onImageSelectionComplete
                        }, Object(p.d)("Done", "DefaultPanelImagePickerComponent")), s.createElement(G.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(G.z, {
                            onClick: this.props.onClose
                        }, Object(p.d)("Cancel", "DefaultPanelImagePickerComponent")))))
                    }, t.prototype.renderFilePicker = function() {
                        return s.createElement(G.o, {
                            ratio: G.p.Aspect1x1
                        }, s.createElement(te.a, {
                            allowedFileTypes: re,
                            multiFile: !1,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            flexDirection: G.Aa.Column
                        }, s.createElement(G.Xa, null, s.createElement(G.sb, {
                            asset: G.tb.Upload,
                            type: G.ub.Alt2,
                            height: 50,
                            width: 50
                        })), s.createElement(G.W, {
                            type: G.Vb.H3,
                            color: G.O.Alt2,
                            fontSize: G.Ca.Size4
                        }, Object(p.d)("Choose a file or drag it here.", "DefaultPanelImagePickerComponent")))))
                    }, t
                }(s.Component);
            var ce = Object(r.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        onClose: y.c
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
                        var n, i = e.currentTarget;
                        t.setState(((n = {
                            canSave: !0,
                            errorMessage: ""
                        })[i.name] = i.value, n))
                    }, t.handleDescriptionChange = function(e) {
                        var n, i = e.currentTarget;
                        t.setState(((n = {
                            canSave: !0,
                            errorMessage: ""
                        })[i.name] = i.value, n))
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
                            var e, t, n, i, r, o = this;
                            return a.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e = this.state.imageCrop, (t = this.state.imageFile).size > me) return this.handleErrorMessage(pe.ImageUploadSizeFailed), [2];
                                        s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, function(e, t) {
                                            return a.__awaiter(this, void 0, Promise, function() {
                                                var n, i;
                                                return a.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return r.trys.push([0, 2, , 3]), [4, ue.a.post("/v5/users/" + e + "/upload_panel_image", {
                                                                body: {
                                                                    height: t.height,
                                                                    width: t.width,
                                                                    left: t.x,
                                                                    top: t.y
                                                                }
                                                            })];
                                                        case 1:
                                                            return 200 === (n = r.sent()).status && n.body ? [2, n.body] : [2, Promise.reject("Failed to fetch URL")];
                                                        case 2:
                                                            return i = r.sent(), [2, Promise.reject(i)];
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(this.props.channelID, e)];
                                    case 2:
                                        return r = s.sent(), i = r.upload_id, n = r.url, [3, 4];
                                    case 3:
                                        return s.sent(), [2, this.handleErrorMessage(pe.Unexpected)];
                                    case 4:
                                        return this.unsubscribe = p.l.subscribe({
                                            topic: Object(x.A)(i),
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
                                                                if (e.upload_id !== i) return [3, 8];
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
                                                                    imageURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-" + this.props.channelID + "-image-" + i,
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
                    return s.createElement(G.Xa, {
                        display: G.X.Flex,
                        flexDirection: G.Aa.Column,
                        padding: 1
                    }, s.createElement(G.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(G.Ea, {
                        id: "panel-title",
                        label: Object(p.d)("Panel Title", "DefaultPanelEdit")
                    }, s.createElement(G.Ra, {
                        defaultValue: e.title || "",
                        id: "panel-title",
                        name: "title",
                        onChange: this.handleInputChange,
                        type: G.Ta.Text
                    }))), s.createElement(G.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(G.Xa, {
                        display: G.X.Flex,
                        flexDirection: G.Aa.Row,
                        justifyContent: G.Wa.Between,
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(G.z, {
                        onClick: this.showDefaultPanelImagePicker,
                        "data-test-selector": de.AddImage
                    }, Object(p.d)("Add Image", "DefaultPanelEdit")), s.createElement("img", {
                        className: "panel-preview-image",
                        src: this.state.imagePreviewSRC ? this.state.imagePreviewSRC : e.imageURL || ""
                    })), s.createElement(G.W, {
                        type: G.Vb.P
                    }, Object(p.d)("Images will be scaled to 320px wide", "DefaultPanelEdit"))), s.createElement(G.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(G.Ea, {
                        id: "panel-link-url",
                        label: Object(p.d)("Image Links To:", "DefaultPanelEdit")
                    }, s.createElement(G.Ra, {
                        defaultValue: e.linkURL || "",
                        id: "panel-link-url",
                        name: "linkURL",
                        onChange: this.handleInputChange,
                        type: G.Ta.Text
                    }))), s.createElement(G.Xa, {
                        flexGrow: 1,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(G.Xa, {
                        display: G.X.Flex,
                        flexDirection: G.Aa.Row,
                        justifyContent: G.Wa.Between,
                        margin: {
                            bottom: .5
                        }
                    }, s.createElement(G.W, {
                        type: G.Vb.Strong
                    }, Object(p.d)("Description:", "DefaultPanelEdit")), s.createElement(G.Xa, null, t)), s.createElement(G.Sb, {
                        defaultValue: e.description || "",
                        id: "description",
                        name: "description",
                        noResize: !0,
                        onChange: this.handleDescriptionChange,
                        rows: 7
                    })), s.createElement(G.Xa, {
                        textAlign: G.Rb.Right
                    }, s.createElement(G.z, {
                        type: G.F.Text,
                        onClick: this.props.removePanel
                    }, Object(p.d)("Remove", "DefaultPanelEdit")), s.createElement(G.z, {
                        "data-test-selector": de.SavePanel,
                        disabled: !this.state.canSave,
                        onClick: this.savePanel,
                        state: this.state.isSaving ? G.E.Loading : G.E.Default
                    }, Object(p.d)("Submit", "DefaultPanelEdit"))), s.createElement(G.Xa, {
                        textAlign: G.Rb.Center
                    }, this.state.errorMessage && s.createElement(G.W, {
                        color: G.O.Error
                    }, this.state.errorMessage)))
                }, t
            }(s.Component);
            var fe, ge = Object(r.connect)(function(e) {
                    return {
                        authToken: Object(J.a)(e)
                    }
                }, function(e) {
                    return {
                        showDefaultPanelImagePicker: function(t) {
                            return e(Object(y.d)(ce, t))
                        }
                    }
                })(he),
                ye = n("AfzZ"),
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
                        return s.createElement(ve.a, null, s.createElement(G.A, {
                            icon: G.tb.More
                        }), s.createElement(G.u, {
                            direction: G.v.TopLeft,
                            size: e ? G.w.Medium : G.w.Small,
                            offsetY: "-4px"
                        }, s.createElement(G.Eb, {
                            textAlign: G.Rb.Left,
                            padding: {
                                top: .5,
                                bottom: .5
                            },
                            color: G.O.Base
                        }, s.createElement(G.Ua, {
                            "data-test-selector": fe.ExtensionManagement,
                            linkTo: Object(be.e)(this.props.channelLogin),
                            targetBlank: !0
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(G.W, null, Object(p.d)("Extension Manager", "ExtensionPanelHelpButton")))), s.createElement(G.Ua, {
                            linkTo: "https://www.twitch.tv/creatorcamp/en/level-up/extensions/",
                            targetBlank: !0
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(G.W, null, Object(p.d)("Creator Camp", "ExtensionPanelHelpButton")))), s.createElement(G.Ua, {
                            "data-test-selector": fe.LearnMore,
                            linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                            targetBlank: !0
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(G.W, null, Object(p.d)("Learn More", "ExtensionPanelHelpButton")))))))
                    }, t
                }(s.Component),
                Ce = function(e) {
                    var t = e.channelLogin,
                        n = e.children;
                    return s.createElement(G.Xa, {
                        display: G.X.Flex,
                        fullWidth: !0,
                        justifyContent: G.Wa.Between
                    }, s.createElement(Ee, {
                        channelLogin: t
                    }), s.createElement(G.Xa, null, n))
                },
                ke = (n("b5uE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickConfigure = function() {
                            var e = t.props,
                                n = e.channelLogin,
                                i = e.showExtensionConfigureModal,
                                r = e.extensionInstallation;
                            if (r) {
                                var a = r.extension;
                                i({
                                    channelLogin: n,
                                    extensionID: a.id + "-" + a.version
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.channelLogin,
                            i = t.extensionInstallation,
                            r = t.extensionPanelCount,
                            a = t.panel,
                            o = t.removePanel,
                            c = Object(p.d)("Remove", "ExtensionPanelEdit");
                        if (i && void 0 !== r) {
                            var l = i.extension,
                                u = l.iconUrls,
                                d = l.name;
                            e = s.createElement(s.Fragment, null, s.createElement(G.Xa, {
                                flexGrow: 1
                            }, s.createElement(G.Xa, {
                                alignItems: G.f.Center,
                                display: G.X.Flex,
                                padding: {
                                    bottom: 2,
                                    x: 2
                                }
                            }, s.createElement(G.S, {
                                alt: d,
                                className: "extension-panel-edit__extension-icon",
                                src: u.square100
                            }), s.createElement(G.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(G.W, {
                                type: G.Vb.Strong
                            }, d))), s.createElement(G.W, null, Object(p.d)("Panel Extension {panelExtensionNumber} of {totalPanelExtensionsAvailable}", {
                                panelExtensionNumber: r,
                                totalPanelExtensionsAvailable: Z.a
                            }, "ExtensionPanelEdit"))), s.createElement(Ce, {
                                channelLogin: n
                            }, s.createElement(G.z, {
                                type: G.F.Text,
                                onClick: o
                            }, c), s.createElement(G.z, {
                                onClick: this.onClickConfigure
                            }, Object(p.d)("Configure", "ExtensionPanelEdit"))))
                        } else {
                            var m = Object(p.d)("This panel's name is: {panelName}", {
                                panelName: s.createElement(G.W, {
                                    bold: !0,
                                    type: G.Vb.Span,
                                    transform: G.Ub.Uppercase
                                }, a.slotID)
                            }, "ExtensionPanelEdit");
                            e = s.createElement(s.Fragment, null, s.createElement(G.Xa, {
                                flexGrow: 1
                            }, s.createElement(G.Xa, {
                                padding: {
                                    bottom: 2
                                }
                            }, s.createElement(G.W, null, Object(p.d)("To add an Extension to this space, activate it in your Extension Manager.", "Edit Extension Panel"))), s.createElement(G.Xa, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(G.z, {
                                linkTo: Object(be.e)(n)
                            }, Object(p.d)("Extension Manager", "Edit Extension Panel"))), s.createElement(G.Xa, {
                                padding: {
                                    y: 2
                                }
                            }, s.createElement(G.W, null, m))), s.createElement(Ce, {
                                channelLogin: n
                            }, s.createElement(G.z, {
                                type: G.F.Text,
                                onClick: o
                            }, c)))
                        }
                        return s.createElement(G.Xa, {
                            alignItems: G.f.Center,
                            display: G.X.Flex,
                            flexDirection: G.Aa.Column,
                            padding: 1,
                            textAlign: G.Rb.Center
                        }, s.createElement(G.Xa, {
                            padding: 4
                        }, s.createElement(G.sb, {
                            asset: G.tb.Extensions,
                            type: G.ub.Brand,
                            height: 40,
                            width: 40
                        })), e)
                    }, t
                }(s.PureComponent));
            var Pe, Se = Object(r.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showExtensionConfigureModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(y.d)(ye.a, t)
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
                        return "DefaultPanel" === this.props.panel.__typename ? e = s.createElement(ge, {
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
                        })), s.createElement(G.Xa, {
                            position: G.jb.Relative
                        }, this.state.showRemoveConfirmation && this.renderRemovingOverlay(), s.createElement(G.Eb, {
                            border: !0,
                            background: G.r.Alt2,
                            className: "edit-panel " + (this.props.isSorting ? "edit-panel--sorting" : ""),
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(G.o, {
                            ratio: G.p.Aspect3x4
                        }, e)))
                    }, t.prototype.renderRemovingOverlay = function() {
                        var e, t = this.props,
                            n = t.extensionInstallation,
                            i = t.isSorting;
                        return e = n ? Object(p.d)("Removing this panel will deactivate this extension. Are you sure you want to remove this panel?", "EditPanel") : Object(p.d)("Are you sure you want to remove this panel?", "EditPanel"), s.createElement(G.Eb, {
                            border: !0,
                            className: "edit-panel edit-panel--overlay " + (i ? "edit-panel--sorting" : ""),
                            position: G.jb.Absolute,
                            zIndex: G.ic.Default
                        }, s.createElement(G.o, {
                            ratio: G.p.Aspect3x4
                        }, s.createElement(G.Xa, {
                            alignItems: G.f.Center,
                            display: G.X.Flex,
                            flexDirection: G.Aa.Column,
                            justifyContent: G.Wa.Center,
                            padding: 2,
                            textAlign: G.Rb.Center
                        }, s.createElement(G.W, {
                            color: G.O.Overlay
                        }, e), s.createElement(G.Xa, {
                            margin: {
                                top: 2
                            }
                        }, s.createElement(G.z, {
                            type: G.F.Text,
                            onClick: this.cancelRemovePanel,
                            overlay: !0
                        }, Object(p.d)("Cancel", "EditPanel")), s.createElement(G.Xa, {
                            display: G.X.InlineBlock,
                            margin: {
                                left: 1
                            }
                        }, s.createElement(G.z, {
                            "data-test-selector": "confirm_delete_panel_selector",
                            state: this.state.isRemoving ? G.E.Loading : G.E.Default,
                            onClick: this.confirmRemovePanel
                        }, Object(p.d)("Remove", "EditPanel")))))))
                    }, t
                }(s.PureComponent)),
                Oe = Object(d.SortableElement)(function(e) {
                    return s.createElement(G.Xa, {
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
                        n = e.items.map(function(n, i) {
                            var r, a = !1;
                            return "ExtensionPanel" === n.__typename && (r = e.extensionSlots[n.slotID], a = !0, t++), s.createElement(Oe, {
                                key: n.id,
                                channelID: e.channelID,
                                channelLogin: e.channelLogin,
                                extensionInstallation: r,
                                extensionPanelCount: a ? t : void 0,
                                updatePanel: e.updatePanel,
                                deletePanel: e.deletePanel,
                                isSorting: e.isSorting,
                                index: i,
                                panel: n
                            })
                        }),
                        i = t < Z.a,
                        r = s.createElement(G.Xa, {
                            margin: {
                                x: .5
                            }
                        }, s.createElement(Q, {
                            key: "create-panel",
                            canCreateExtensionPanel: i,
                            createPanel: e.createPanel,
                            channelID: e.channelID
                        }));
                    return s.createElement(G.Xa, {
                        display: G.X.Flex,
                        flexDirection: G.Aa.Row,
                        flexWrap: G.Ba.Wrap,
                        justifyContent: G.Wa.Center
                    }, n, r)
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
            var Re = {
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
                        }, t.onExtensionPoppedOut = function(e, n, i) {
                            var r;
                            t.setState({
                                popout: a.__assign({}, t.state.popout, (r = {}, r[Object(A.c)(e, n)] = i, r))
                            })
                        }, t.onExtensionPopoutRestored = function(e, n) {
                            var i = Object(A.c)(e, n),
                                r = t.state.popout[i];
                            r && r.window && r.window.close();
                            var a = Object.keys(t.state.popout).filter(function(e) {
                                return e !== i
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
                                var i = Object(d.arrayMove)(n.panels, e.oldIndex, e.newIndex),
                                    r = i.map(function(e) {
                                        return e && e.id
                                    }).filter(function(e) {
                                        return e
                                    });
                                t.props.orderPanels(Object(h.a)({
                                    ids: r
                                })), Object(h.e)(De, {
                                    login: t.props.channelName
                                }, function(e) {
                                    return e.user && (e.user.panels = i), e
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
                                i = e.user;
                            return !!(n && n.id && i && n.id === i.id) || !!(n && n.roles && n.roles.isSiteAdmin)
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
                            i = e.user,
                            r = null;
                        if (n) return s.createElement(L.a, null);
                        r = this.state.isEditMode ? s.createElement(G.Xa, null, this.renderEditPanels()) : t || !i || i && !i.panels.length ? s.createElement(G.Eb, {
                            color: G.O.Alt2,
                            padding: {
                                y: 5
                            },
                            textAlign: G.Rb.Center,
                            "data-test-selector": Pe.EmptyMessage
                        }, s.createElement(G.W, {
                            italic: !0,
                            fontSize: G.Ca.Size4
                        }, Object(p.d)("It's empty in here", "ChannelPanels"))) : s.createElement(u.a, {
                            className: "channel-panels-container",
                            options: Re,
                            "data-test-selector": Pe.Masonry,
                            ref: this.saveMasonryRef
                        }, this.renderPanels());
                        var a = s.createElement(G.Xa, {
                            display: G.X.Flex,
                            margin: {
                                bottom: 2
                            },
                            "data-test-selector": Pe.EditToggle
                        }, s.createElement(G.Xb, {
                            id: "edit-panels-toggle",
                            onChange: this.toggleEditMode
                        }), s.createElement(G.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(G.W, null, Object(p.d)("Edit Panels", "Channel Panels"))));
                        return s.createElement(F, {
                            channelID: this.props.channelID
                        }, s.createElement(G.Xa, {
                            className: "channel-panels",
                            "data-test-selector": Pe.Container
                        }, this.canEditPanels() && a, r))
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
                            i = t.user;
                        if (!i) return null;
                        var r = this.getExtensionSlots();
                        return i.panels.map(function(t, i) {
                            if (!t) return null;
                            if ("ExtensionPanel" === t.__typename && t.slotID) {
                                var a = r[t.slotID];
                                if (a && !e.state.destroyedExtensions.includes(a.id)) {
                                    var c = void 0 !== e.state.popout[Object(A.d)(a)];
                                    return s.createElement("div", {
                                        key: t.id
                                    }, s.createElement(Y.a, {
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
                            } else if ("DefaultPanel" === t.__typename) return s.createElement(q, {
                                channelID: e.props.channelID,
                                "data-a-target": "panel-" + i,
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
                Fe = Object(c.compose)(Object(M.b)("ChannelPanels"), Object(m.a)(De, {
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
            var Ae = Object(r.connect)(function(e) {
                return {
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(Fe);
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
            var i = n("GOnX");
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    r = e.stateHandler.getState;
                if (!t) throw new Error("Missing required dependency: reporter.");

                function a(e) {
                    return r(e).object
                }
                return {
                    makeDetectable: function(e, a, o) {
                        o || (o = a, a = e, e = null), (e = e || {}).debug, i.isIE(8) ? o(a) : function(e, a) {
                            var o = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",
                                s = !1,
                                c = window.getComputedStyle(e),
                                l = e.offsetWidth,
                                u = e.offsetHeight;

                            function d() {
                                function n() {
                                    if ("static" === c.position) {
                                        e.style.position = "relative";
                                        var n = function(e, t, n, i) {
                                            var r = n[i];
                                            "auto" !== r && "0" !== function(e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(r) && (e.warn("An element that is positioned static has style." + i + "=" + r + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0)
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
                                }, i.isIE() || (l.data = "about:blank"), e.appendChild(l), r(e).object = l, i.isIE() && (l.data = "about:blank")
                            }
                            r(e).startSize = {
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
                        i.isIE(8) ? (r(e).object = {
                            proxy: n
                        }, e.attachEvent("onresize", n)) : a(e).contentDocument.defaultView.addEventListener("resize", n)
                    },
                    uninstall: function(e) {
                        i.isIE(8) ? e.detachEvent("onresize", r(e).object.proxy) : e.removeChild(a(e)), delete r(e).object
                    }
                }
            }
        },
        GOnX: function(e, t, n) {
            "use strict";
            var i = e.exports = {};
            i.isIE = function(e) {
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
            }, i.isLegacyOpera = function() {
                return !!window.opera
            }
        },
        H5OX: function(e, t, n) {},
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var i = n("NAv5"),
                r = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function a(e, t) {
                return Object(i.format)(e, t)
            }

            function o(e) {
                return Object(i.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var i = parseInt(n[0], 10),
                    r = parseInt(n[1].substring(0, 2), 10),
                    a = n[1].substring(n[1].length - 2);
                if (12 === i && "am" === a && (i = 0), "pm" === a && i < 12 && (i += 12), isNaN(i) || i < 0 || i > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(i, r), o
            }
        },
        HvcU: function(e, t, n) {
            e.exports = n.p + "assets/generic_credit_card_2x-9e855c7d5c5359ac9208.png"
        },
        Hy43: function(e, t, n) {
            var i, r;
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
                i = [n("CUlp"), n("QK1G"), n("YVj6"), n("KK1e")], void 0 === (r = function(e, t, n, i) {
                    return function(e, t, n, i, r) {
                        var a = e.console,
                            o = e.jQuery,
                            s = function() {},
                            c = 0,
                            l = {};

                        function u(e, t) {
                            var n = i.getQueryElement(e);
                            if (n) {
                                this.element = n, o && (this.$element = o(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t);
                                var r = ++c;
                                this.element.outlayerGUID = r, l[r] = this, this._create();
                                var s = this._getOption("initLayout");
                                s && this.layout()
                            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
                        }
                        u.namespace = "outlayer", u.Item = r, u.defaults = {
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
                        i.extend(d, t.prototype), d.option = function(e) {
                            i.extend(this.options, e)
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
                            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle);
                            var e = this._getOption("resize");
                            e && this.bindResize()
                        }, d.reloadItems = function() {
                            this.items = this._itemize(this.element.children)
                        }, d._itemize = function(e) {
                            for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], r = 0; r < t.length; r++) {
                                var a = t[r],
                                    o = new n(a, this);
                                i.push(o)
                            }
                            return i
                        }, d._filterFindItemElements = function(e) {
                            return i.filterFindElements(e, this.options.itemSelector)
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
                            var i, r = this.options[e];
                            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[e] = i ? n(i)[t] : r) : this[e] = 0
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
                                    var i = this._getItemLayoutPosition(e);
                                    i.item = e, i.isInstant = t || e.isLayoutInstant, n.push(i)
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
                                    i = t && t[2];
                                if (!n.length) return 0;
                                n = parseFloat(n);
                                var r = m[i] || 1;
                                return n * r
                            }(e), this.stagger;
                            this.stagger = 0
                        }, d._positionItem = function(e, t, n, i, r) {
                            i ? e.goTo(t, n) : (e.stagger(r * this.stagger), e.moveTo(t, n))
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

                            function i() {
                                n.dispatchEvent(e + "Complete", null, [t])
                            }
                            var r = t.length;
                            if (t && r) {
                                var a = 0;
                                t.forEach(function(t) {
                                    t.once(e, o)
                                })
                            } else i();

                            function o() {
                                ++a == r && i()
                            }
                        }, d.dispatchEvent = function(e, t, n) {
                            var i = t ? [t].concat(n) : n;
                            if (this.emitEvent(e, i), o)
                                if (this.$element = this.$element || o(this.element), t) {
                                    var r = o.Event(t);
                                    r.type = e, this.$element.trigger(r, n)
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
                                i.removeFrom(this.stamps, e), this.unignore(e)
                            }, this)
                        }, d._find = function(e) {
                            if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = i.makeArray(e)
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
                                i = this._boundingRect,
                                r = n(e),
                                a = {
                                    left: t.left - i.left - r.marginLeft,
                                    top: t.top - i.top - r.marginTop,
                                    right: i.right - t.right - r.marginRight,
                                    bottom: i.bottom - t.bottom - r.marginBottom
                                };
                            return a
                        }, d.handleEvent = i.handleEvent, d.bindResize = function() {
                            e.addEventListener("resize", this), this.isResizeBound = !0
                        }, d.unbindResize = function() {
                            e.removeEventListener("resize", this), this.isResizeBound = !1
                        }, d.onresize = function() {
                            this.resize()
                        }, i.debounceMethod(u, "onresize", 100), d.resize = function() {
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
                            return (e = i.makeArray(e)).forEach(function(e) {
                                var n = this.getItem(e);
                                n && t.push(n)
                            }, this), t
                        }, d.remove = function(e) {
                            var t = this.getItems(e);
                            this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
                                e.remove(), i.removeFrom(this.items, e)
                            }, this)
                        }, d.destroy = function() {
                            var e = this.element.style;
                            e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
                                e.destroy()
                            }), this.unbindResize();
                            var t = this.element.outlayerGUID;
                            delete l[t], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace)
                        }, u.data = function(e) {
                            var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
                            return t && l[t]
                        }, u.create = function(e, t) {
                            var n = p(u);
                            return n.defaults = i.extend({}, u.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, u.compatOptions), n.namespace = e, n.data = u.data, n.Item = p(r), i.htmlInit(n, e), o && o.bridget && o.bridget(e, n), n
                        };
                        var m = {
                            ms: 1,
                            s: 1e3
                        };
                        return u.Item = r, u
                    }(a, e, t, n, i)
                }.apply(t, i)) || (e.exports = r)
            }(window)
        },
        ITnh: function(e, t, n) {
            e.exports = n("Lrin")()
        },
        JH5r: function(e, t, n) {},
        Jgup: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA");

            function r(e) {
                switch (e.toUpperCase()) {
                    case "A1":
                        return Object(i.d)("Anonymous Proxy", "format-country");
                    case "A2":
                        return Object(i.d)("Satellite Provider", "format-country");
                    case "AD":
                        return Object(i.d)("Andorra", "format-country");
                    case "AE":
                        return Object(i.d)("United Arab Emirates", "format-country");
                    case "AF":
                        return Object(i.d)("Afghanistan", "format-country");
                    case "AG":
                        return Object(i.d)("Antigua and Barbuda", "format-country");
                    case "AI":
                        return Object(i.d)("Anguilla", "format-country");
                    case "AL":
                        return Object(i.d)("Albania", "format-country");
                    case "AM":
                        return Object(i.d)("Armenia", "format-country");
                    case "AO":
                        return Object(i.d)("Angola", "format-country");
                    case "AP":
                        return Object(i.d)("Asia/Pacific Region", "format-country");
                    case "AQ":
                        return Object(i.d)("Antarctica", "format-country");
                    case "AR":
                        return Object(i.d)("Argentina", "format-country");
                    case "AS":
                        return Object(i.d)("American Samoa", "format-country");
                    case "AT":
                        return Object(i.d)("Austria", "format-country");
                    case "AU":
                        return Object(i.d)("Australia", "format-country");
                    case "AW":
                        return Object(i.d)("Aruba", "format-country");
                    case "AX":
                        return Object(i.d)("Aland Islands", "format-country");
                    case "AZ":
                        return Object(i.d)("Azerbaijan", "format-country");
                    case "BA":
                        return Object(i.d)("Bosnia and Herzegovina", "format-country");
                    case "BB":
                        return Object(i.d)("Barbados", "format-country");
                    case "BD":
                        return Object(i.d)("Bangladesh", "format-country");
                    case "BE":
                        return Object(i.d)("Belgium", "format-country");
                    case "BF":
                        return Object(i.d)("Burkina Faso", "format-country");
                    case "BG":
                        return Object(i.d)("Bulgaria", "format-country");
                    case "BH":
                        return Object(i.d)("Bahrain", "format-country");
                    case "BI":
                        return Object(i.d)("Burundi", "format-country");
                    case "BJ":
                        return Object(i.d)("Benin", "format-country");
                    case "BL":
                        return Object(i.d)("Saint Bartelemey", "format-country");
                    case "BM":
                        return Object(i.d)("Bermuda", "format-country");
                    case "BN":
                        return Object(i.d)("Brunei", "format-country");
                    case "BO":
                        return Object(i.d)("Bolivia", "format-country");
                    case "BQ":
                        return Object(i.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                    case "BR":
                        return Object(i.d)("Brazil", "format-country");
                    case "BS":
                        return Object(i.d)("Bahamas", "format-country");
                    case "BT":
                        return Object(i.d)("Bhutan", "format-country");
                    case "BV":
                        return Object(i.d)("Bouvet Island", "format-country");
                    case "BW":
                        return Object(i.d)("Botswana", "format-country");
                    case "BY":
                        return Object(i.d)("Belarus", "format-country");
                    case "BZ":
                        return Object(i.d)("Belize", "format-country");
                    case "CA":
                        return Object(i.d)("Canada", "format-country");
                    case "CC":
                        return Object(i.d)("Cocos (Keeling) Islands", "format-country");
                    case "CD":
                        return Object(i.d)("Congo, The Democratic Republic of the", "format-country");
                    case "CF":
                        return Object(i.d)("Central African Republic", "format-country");
                    case "CG":
                        return Object(i.d)("Congo", "format-country");
                    case "CH":
                        return Object(i.d)("Switzerland", "format-country");
                    case "CI":
                        return Object(i.d)("Ivory Coast", "format-country");
                    case "CK":
                        return Object(i.d)("Cook Islands", "format-country");
                    case "CL":
                        return Object(i.d)("Chile", "format-country");
                    case "CM":
                        return Object(i.d)("Cameroon", "format-country");
                    case "CN":
                        return Object(i.d)("China", "format-country");
                    case "CO":
                        return Object(i.d)("Colombia", "format-country");
                    case "CR":
                        return Object(i.d)("Costa Rica", "format-country");
                    case "CU":
                        return Object(i.d)("Cuba", "format-country");
                    case "CV":
                        return Object(i.d)("Cape Verde", "format-country");
                    case "CW":
                        return Object(i.d)("Curacao", "format-country");
                    case "CX":
                        return Object(i.d)("Christmas Island", "format-country");
                    case "CY":
                        return Object(i.d)("Cyprus", "format-country");
                    case "CZ":
                        return Object(i.d)("Czech Republic", "format-country");
                    case "DE":
                        return Object(i.d)("Germany", "format-country");
                    case "DJ":
                        return Object(i.d)("Djibouti", "format-country");
                    case "DK":
                        return Object(i.d)("Denmark", "format-country");
                    case "DM":
                        return Object(i.d)("Dominica", "format-country");
                    case "DO":
                        return Object(i.d)("Dominican Republic", "format-country");
                    case "DZ":
                        return Object(i.d)("Algeria", "format-country");
                    case "EC":
                        return Object(i.d)("Ecuador", "format-country");
                    case "EE":
                        return Object(i.d)("Estonia", "format-country");
                    case "EG":
                        return Object(i.d)("Egypt", "format-country");
                    case "EH":
                        return Object(i.d)("Western Sahara", "format-country");
                    case "ER":
                        return Object(i.d)("Eritrea", "format-country");
                    case "ES":
                        return Object(i.d)("Spain", "format-country");
                    case "ET":
                        return Object(i.d)("Ethiopia", "format-country");
                    case "EU":
                        return Object(i.d)("Europe", "format-country");
                    case "FI":
                        return Object(i.d)("Finland", "format-country");
                    case "FJ":
                        return Object(i.d)("Fiji", "format-country");
                    case "FK":
                        return Object(i.d)("Falkland Islands (Malvinas)", "format-country");
                    case "FM":
                        return Object(i.d)("Micronesia", "format-country");
                    case "FO":
                        return Object(i.d)("Faroe Islands", "format-country");
                    case "FR":
                        return Object(i.d)("France", "format-country");
                    case "GA":
                        return Object(i.d)("Gabon", "format-country");
                    case "GB":
                        return Object(i.d)("United Kingdom", "format-country");
                    case "GD":
                        return Object(i.d)("Grenada", "format-country");
                    case "GE":
                        return Object(i.d)("Georgia", "format-country");
                    case "GF":
                        return Object(i.d)("French Guiana", "format-country");
                    case "GG":
                        return Object(i.d)("Guernsey", "format-country");
                    case "GH":
                        return Object(i.d)("Ghana", "format-country");
                    case "GI":
                        return Object(i.d)("Gibraltar", "format-country");
                    case "GL":
                        return Object(i.d)("Greenland", "format-country");
                    case "GM":
                        return Object(i.d)("Gambia", "format-country");
                    case "GN":
                        return Object(i.d)("Guinea", "format-country");
                    case "GP":
                        return Object(i.d)("Guadeloupe", "format-country");
                    case "GQ":
                        return Object(i.d)("Equatorial Guinea", "format-country");
                    case "GR":
                        return Object(i.d)("Greece", "format-country");
                    case "GS":
                        return Object(i.d)("South Georgia and the South Sandwich Islands", "format-country");
                    case "GT":
                        return Object(i.d)("Guatemala", "format-country");
                    case "GU":
                        return Object(i.d)("Guam", "format-country");
                    case "GW":
                        return Object(i.d)("Guinea-Bissau", "format-country");
                    case "GY":
                        return Object(i.d)("Guyana", "format-country");
                    case "HK":
                        return Object(i.d)("Hong Kong", "format-country");
                    case "HM":
                        return Object(i.d)("Heard Island and McDonald Islands", "format-country");
                    case "HN":
                        return Object(i.d)("Honduras", "format-country");
                    case "HR":
                        return Object(i.d)("Croatia", "format-country");
                    case "HT":
                        return Object(i.d)("Haiti", "format-country");
                    case "HU":
                        return Object(i.d)("Hungary", "format-country");
                    case "ID":
                        return Object(i.d)("Indonesia", "format-country");
                    case "IE":
                        return Object(i.d)("Ireland", "format-country");
                    case "IL":
                        return Object(i.d)("Israel", "format-country");
                    case "IM":
                        return Object(i.d)("Isle of Man", "format-country");
                    case "IN":
                        return Object(i.d)("India", "format-country");
                    case "IO":
                        return Object(i.d)("British Indian Ocean Territory", "format-country");
                    case "IQ":
                        return Object(i.d)("Iraq", "format-country");
                    case "IR":
                        return Object(i.d)("Iran", "format-country");
                    case "IS":
                        return Object(i.d)("Iceland", "format-country");
                    case "IT":
                        return Object(i.d)("Italy", "format-country");
                    case "JE":
                        return Object(i.d)("Jersey", "format-country");
                    case "JM":
                        return Object(i.d)("Jamaica", "format-country");
                    case "JO":
                        return Object(i.d)("Jordan", "format-country");
                    case "JP":
                        return Object(i.d)("Japan", "format-country");
                    case "KE":
                        return Object(i.d)("Kenya", "format-country");
                    case "KG":
                        return Object(i.d)("Kyrgyzstan", "format-country");
                    case "KH":
                        return Object(i.d)("Cambodia", "format-country");
                    case "KI":
                        return Object(i.d)("Kiribati", "format-country");
                    case "KM":
                        return Object(i.d)("Comoros", "format-country");
                    case "KN":
                        return Object(i.d)("Saint Kitts and Nevis", "format-country");
                    case "KP":
                        return Object(i.d)("North Korea", "format-country");
                    case "KR":
                        return Object(i.d)("South Korea", "format-country");
                    case "KW":
                        return Object(i.d)("Kuwait", "format-country");
                    case "KY":
                        return Object(i.d)("Cayman Islands", "format-country");
                    case "KZ":
                        return Object(i.d)("Kazakhstan", "format-country");
                    case "LA":
                        return Object(i.d)("Laos", "format-country");
                    case "LB":
                        return Object(i.d)("Lebanon", "format-country");
                    case "LC":
                        return Object(i.d)("Saint Lucia", "format-country");
                    case "LI":
                        return Object(i.d)("Liechtenstein", "format-country");
                    case "LK":
                        return Object(i.d)("Sri Lanka", "format-country");
                    case "LR":
                        return Object(i.d)("Liberia", "format-country");
                    case "LS":
                        return Object(i.d)("Lesotho", "format-country");
                    case "LT":
                        return Object(i.d)("Lithuania", "format-country");
                    case "LU":
                        return Object(i.d)("Luxembourg", "format-country");
                    case "LV":
                        return Object(i.d)("Latvia", "format-country");
                    case "LY":
                        return Object(i.d)("Libya", "format-country");
                    case "MA":
                        return Object(i.d)("Morocco", "format-country");
                    case "MC":
                        return Object(i.d)("Monaco", "format-country");
                    case "MD":
                        return Object(i.d)("Moldova", "format-country");
                    case "ME":
                        return Object(i.d)("Montenegro", "format-country");
                    case "MF":
                        return Object(i.d)("Saint Martin", "format-country");
                    case "MG":
                        return Object(i.d)("Madagascar", "format-country");
                    case "MH":
                        return Object(i.d)("Marshall Islands", "format-country");
                    case "MK":
                        return Object(i.d)("Macedonia", "format-country");
                    case "ML":
                        return Object(i.d)("Mali", "format-country");
                    case "MM":
                        return Object(i.d)("Myanmar", "format-country");
                    case "MN":
                        return Object(i.d)("Mongolia", "format-country");
                    case "MO":
                        return Object(i.d)("Macao", "format-country");
                    case "MP":
                        return Object(i.d)("Northern Mariana Islands", "format-country");
                    case "MQ":
                        return Object(i.d)("Martinique", "format-country");
                    case "MR":
                        return Object(i.d)("Mauritania", "format-country");
                    case "MS":
                        return Object(i.d)("Montserrat", "format-country");
                    case "MT":
                        return Object(i.d)("Malta", "format-country");
                    case "MU":
                        return Object(i.d)("Mauritius", "format-country");
                    case "MV":
                        return Object(i.d)("Maldives", "format-country");
                    case "MW":
                        return Object(i.d)("Malawi", "format-country");
                    case "MX":
                        return Object(i.d)("Mexico", "format-country");
                    case "MY":
                        return Object(i.d)("Malaysia", "format-country");
                    case "MZ":
                        return Object(i.d)("Mozambique", "format-country");
                    case "NA":
                        return Object(i.d)("Namibia", "format-country");
                    case "NC":
                        return Object(i.d)("New Caledonia", "format-country");
                    case "NE":
                        return Object(i.d)("Niger", "format-country");
                    case "NF":
                        return Object(i.d)("Norfolk Island", "format-country");
                    case "NG":
                        return Object(i.d)("Nigeria", "format-country");
                    case "NI":
                        return Object(i.d)("Nicaragua", "format-country");
                    case "NL":
                        return Object(i.d)("Netherlands", "format-country");
                    case "NO":
                        return Object(i.d)("Norway", "format-country");
                    case "NP":
                        return Object(i.d)("Nepal", "format-country");
                    case "NR":
                        return Object(i.d)("Nauru", "format-country");
                    case "NU":
                        return Object(i.d)("Niue", "format-country");
                    case "NZ":
                        return Object(i.d)("New Zealand", "format-country");
                    case "O1":
                        return Object(i.d)("Other Country", "format-country");
                    case "OM":
                        return Object(i.d)("Oman", "format-country");
                    case "PA":
                        return Object(i.d)("Panama", "format-country");
                    case "PE":
                        return Object(i.d)("Peru", "format-country");
                    case "PF":
                        return Object(i.d)("French Polynesia", "format-country");
                    case "PG":
                        return Object(i.d)("Papua New Guinea", "format-country");
                    case "PH":
                        return Object(i.d)("Philippines", "format-country");
                    case "PK":
                        return Object(i.d)("Pakistan", "format-country");
                    case "PL":
                        return Object(i.d)("Poland", "format-country");
                    case "PM":
                        return Object(i.d)("Saint Pierre and Miquelon", "format-country");
                    case "PN":
                        return Object(i.d)("Pitcairn", "format-country");
                    case "PR":
                        return Object(i.d)("Puerto Rico", "format-country");
                    case "PS":
                        return Object(i.d)("Palestine", "format-country");
                    case "PT":
                        return Object(i.d)("Portugal", "format-country");
                    case "PW":
                        return Object(i.d)("Palau", "format-country");
                    case "PY":
                        return Object(i.d)("Paraguay", "format-country");
                    case "QA":
                        return Object(i.d)("Qatar", "format-country");
                    case "RE":
                        return Object(i.d)("Reunion", "format-country");
                    case "RO":
                        return Object(i.d)("Romania", "format-country");
                    case "RS":
                        return Object(i.d)("Serbia", "format-country");
                    case "RU":
                        return Object(i.d)("Russia", "format-country");
                    case "RW":
                        return Object(i.d)("Rwanda", "format-country");
                    case "SA":
                        return Object(i.d)("Saudi Arabia", "format-country");
                    case "SB":
                        return Object(i.d)("Solomon Islands", "format-country");
                    case "SC":
                        return Object(i.d)("Seychelles", "format-country");
                    case "SD":
                        return Object(i.d)("Sudan", "format-country");
                    case "SE":
                        return Object(i.d)("Sweden", "format-country");
                    case "SG":
                        return Object(i.d)("Singapore", "format-country");
                    case "SH":
                        return Object(i.d)("Saint Helena", "format-country");
                    case "SI":
                        return Object(i.d)("Slovenia", "format-country");
                    case "SJ":
                        return Object(i.d)("Svalbard and Jan Mayen", "format-country");
                    case "SK":
                        return Object(i.d)("Slovakia", "format-country");
                    case "SL":
                        return Object(i.d)("Sierra Leone", "format-country");
                    case "SM":
                        return Object(i.d)("San Marino", "format-country");
                    case "SN":
                        return Object(i.d)("Senegal", "format-country");
                    case "SO":
                        return Object(i.d)("Somalia", "format-country");
                    case "SR":
                        return Object(i.d)("Suriname", "format-country");
                    case "SS":
                        return Object(i.d)("South Sudan", "format-country");
                    case "ST":
                        return Object(i.d)("Sao Tome and Principe", "format-country");
                    case "SV":
                        return Object(i.d)("El Salvador", "format-country");
                    case "SX":
                        return Object(i.d)("Sint Maarten", "format-country");
                    case "SY":
                        return Object(i.d)("Syria", "format-country");
                    case "SZ":
                        return Object(i.d)("Swaziland", "format-country");
                    case "TC":
                        return Object(i.d)("Turks and Caicos Islands", "format-country");
                    case "TD":
                        return Object(i.d)("Chad", "format-country");
                    case "TF":
                        return Object(i.d)("French Southern Territories", "format-country");
                    case "TG":
                        return Object(i.d)("Togo", "format-country");
                    case "TH":
                        return Object(i.d)("Thailand", "format-country");
                    case "TJ":
                        return Object(i.d)("Tajikistan", "format-country");
                    case "TK":
                        return Object(i.d)("Tokelau", "format-country");
                    case "TL":
                        return Object(i.d)("East Timor", "format-country");
                    case "TM":
                        return Object(i.d)("Turkmenistan", "format-country");
                    case "TN":
                        return Object(i.d)("Tunisia", "format-country");
                    case "TO":
                        return Object(i.d)("Tonga", "format-country");
                    case "TR":
                        return Object(i.d)("Turkey", "format-country");
                    case "TT":
                        return Object(i.d)("Trinidad and Tobago", "format-country");
                    case "TV":
                        return Object(i.d)("Tuvalu", "format-country");
                    case "TW":
                        return Object(i.d)("Taiwan", "format-country");
                    case "TZ":
                        return Object(i.d)("Tanzania", "format-country");
                    case "UA":
                        return Object(i.d)("Ukraine", "format-country");
                    case "UG":
                        return Object(i.d)("Uganda", "format-country");
                    case "UM":
                        return Object(i.d)("United States Minor Outlying Islands", "format-country");
                    case "US":
                        return Object(i.d)("United States", "format-country");
                    case "UY":
                        return Object(i.d)("Uruguay", "format-country");
                    case "UZ":
                        return Object(i.d)("Uzbekistan", "format-country");
                    case "VA":
                        return Object(i.d)("Vatican City", "format-country");
                    case "VC":
                        return Object(i.d)("Saint Vincent and the Grenadines", "format-country");
                    case "VE":
                        return Object(i.d)("Venezuela", "format-country");
                    case "VG":
                        return Object(i.d)("British Virgin Islands", "format-country");
                    case "VI":
                        return Object(i.d)("U.S. Virgin Islands", "format-country");
                    case "VN":
                        return Object(i.d)("Vietnam", "format-country");
                    case "VU":
                        return Object(i.d)("Vanuatu", "format-country");
                    case "WF":
                        return Object(i.d)("Wallis and Futuna", "format-country");
                    case "WS":
                        return Object(i.d)("Samoa", "format-country");
                    case "YE":
                        return Object(i.d)("Yemen", "format-country");
                    case "YT":
                        return Object(i.d)("Mayotte", "format-country");
                    case "ZA":
                        return Object(i.d)("South Africa", "format-country");
                    case "ZM":
                        return Object(i.d)("Zambia", "format-country");
                    case "ZW":
                        return Object(i.d)("Zimbabwe", "format-country");
                    default:
                        return e
                }
            }
            var a = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
        },
        KGBd: function(e, t, n) {
            "use strict";

            function i(e, t, n, i, r, a, o) {
                var s = document.createElement("canvas");
                s.width = a, s.height = o;
                var c = s.getContext("2d"),
                    l = "";
                if (c) {
                    var u = new Image;
                    u.src = e, c.drawImage(u, t, n, i, r, 0, 0, a, o), l = s.toDataURL("image/png")
                }
                return s.remove(), l
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "KJv/": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("cZKs"),
                c = n("8/mp"),
                l = n("yR8l"),
                u = n("UUve"),
                d = n("NvVO"),
                p = n("2xye"),
                m = n("SNyx"),
                h = n("GnwI"),
                f = n("Nk81"),
                g = n("Ue10"),
                y = n("LS/W");
            n("H5OX");

            function b(e) {
                return !e.recipientLogin
            }
            var v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startTime = Date.now(), t.handleOnClose = function() {
                            Object(u.d)(), t.props.onClose && t.props.onClose()
                        }, t.onBeforeUnloadHandler = function() {
                            Object(u.d)(), window.removeEventListener("beforeunload", t.onBeforeUnloadHandler)
                        }, t.trackBenchmarkComplete = function() {
                            t.props.latencyTracking.unsubscribeFromInteractivityCompletion(t.trackBenchmarkComplete);
                            var e = Date.now() - t.startTime;
                            new f.a(o.p.tracking, o.p.logger).trackCompleteTransition(d.a.SubsCheckoutPage, p.PageviewLocation.SubsCheckoutPage, "SubsCheckoutPage", e, e, !1, document.hidden)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.subscribeToInteractivityCompletion(this.trackBenchmarkComplete), this.reportInteractive(), window.addEventListener("beforeunload", this.onBeforeUnloadHandler)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        Object(u.d)(), this.props.latencyTracking.unsubscribeFromInteractivityCompletion(this.trackBenchmarkComplete)
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data && this.props.data.loading) e = null;
                        else {
                            var t = this.props.data && this.props.data.recipient || null;
                            e = r.createElement(c.b, {
                                suppressScrollX: !0
                            }, r.createElement(m.a, {
                                productName: this.props.productName,
                                isGift: !(!t || !t.id) || !!this.props.mysteryGiftCount,
                                recipientID: t && t.id,
                                recipientDisplayName: t && t.displayName,
                                trackingContext: this.props.trackingContext,
                                mysteryGiftCount: this.props.mysteryGiftCount || null,
                                onCheckoutProgress: this.props.onCheckoutProgress
                            }))
                        }
                        return r.createElement(g.Eb, {
                            background: g.r.Alt,
                            className: "checkout-modal__container"
                        }, e, r.createElement(s.a, {
                            ignoreEscKey: !0,
                            closeOnPageNavigation: !0,
                            onClose: this.handleOnClose
                        }))
                    }, t.prototype.reportInteractive = function() {
                        b(this.props) ? this.props.latencyTracking.reportInteractive() : !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                E = Object(a.compose)(Object(h.b)("CheckoutModal"), Object(l.a)(y, {
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
                return u.d
            }), n.d(t, "SUB_CHECKOUT__PRODUCT_KEY", function() {
                return u.b
            }), n.d(t, "SUB_CHECKOUT__RECIPIENT_KEY", function() {
                return u.c
            }), n.d(t, "showLoginModalWithCheckoutDispatch", function() {
                return u.e
            })
        },
        KK1e: function(e, t, n) {
            var i, r, a;
            window, r = [n("CUlp"), n("QK1G")], void 0 === (a = "function" == typeof(i = function(e, t) {
                "use strict";
                var n = document.documentElement.style,
                    i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
                    r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
                    a = {
                        WebkitTransition: "webkitTransitionEnd",
                        transition: "transitionend"
                    }[i],
                    o = {
                        transform: r,
                        transition: i,
                        transitionDuration: i + "Duration",
                        transitionProperty: i + "Property",
                        transitionDelay: i + "Delay"
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
                        var i = o[n] || n;
                        t[i] = e[n]
                    }
                }, c.getPosition = function() {
                    var e = getComputedStyle(this.element),
                        t = this.layout._getOption("originLeft"),
                        n = this.layout._getOption("originTop"),
                        i = e[t ? "left" : "right"],
                        r = e[n ? "top" : "bottom"],
                        a = parseFloat(i),
                        o = parseFloat(r),
                        s = this.layout.size; - 1 != i.indexOf("%") && (a = a / 100 * s.width), -1 != r.indexOf("%") && (o = o / 100 * s.height), a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, a -= t ? s.paddingLeft : s.paddingRight, o -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = o
                }, c.layoutPosition = function() {
                    var e = this.layout.size,
                        t = {},
                        n = this.layout._getOption("originLeft"),
                        i = this.layout._getOption("originTop"),
                        r = n ? "paddingLeft" : "paddingRight",
                        a = n ? "left" : "right",
                        o = n ? "right" : "left",
                        s = this.position.x + e[r];
                    t[a] = this.getXValue(s), t[o] = "";
                    var c = i ? "paddingTop" : "paddingBottom",
                        l = i ? "top" : "bottom",
                        u = i ? "bottom" : "top",
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
                        i = this.position.y,
                        r = e == this.position.x && t == this.position.y;
                    if (this.setPosition(e, t), !r || this.isTransitioning) {
                        var a = e - n,
                            o = t - i,
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
                        i = this.layout._getOption("originTop");
                    return "translate3d(" + (e = n ? e : -e) + "px, " + (t = i ? t : -t) + "px, 0)"
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
                }(r);
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
                            var i = t.onEnd[n];
                            i.call(this), delete t.onEnd[n]
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
                    i && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
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
            }) ? i.apply(t, r) : i) || (e.exports = a)
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
            var i = n("vylb");

            function r() {}
            e.exports = function() {
                function e(e, t, n, r, a, o) {
                    if (o !== i) {
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
                return n.checkPropTypes = r, n.PropTypes = n, n
            }
        },
        NAeX: function(e, t, n) {},
        NwMv: function(e, t, n) {},
        Nxrd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
            var i = n("jTc+");
            Object.defineProperty(t, "arrayMove", {
                enumerable: !0,
                get: function() {
                    return i.arrayMove
                }
            });
            var r = s(n("ezMb")),
                a = s(n("hk6T")),
                o = s(n("BCEg"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.SortableContainer = r.default, t.SortableElement = a.default, t.SortableHandle = o.default, t.sortableContainer = r.default, t.sortableElement = a.default, t.sortableHandle = o.default
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
                return i
            }), n.d(t, "a", function() {
                return r
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
            var i, r, a = n("1hWM"),
                o = n("DMoW");

            function s(e) {
                return e.isBitsEnabled ? i.Bits : e.vendorCode && e.sku ? i.InExtensionPurchases : null
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
            }(i || (i = {})),
            function(e) {
                e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
            }(r || (r = {}))
        },
        PZVp: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(i || (i = {}))
        },
        PwAB: function(e, t, n) {
            e.exports = n.p + "assets/xsolla_2x-b8ef30f34626976fddc4.png"
        },
        QK1G: function(e, t, n) {
            var i;
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
            ! function(r, a) {
                "use strict";
                void 0 === (i = function() {
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
                            i = n.length;

                        function r(e) {
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
                                    var i = r(t);
                                    s.isBoxSizeOuter = a = 200 == e(i.width), n.removeChild(t)
                                }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                                var c = r(t);
                                if ("none" == c.display) return function() {
                                    for (var e = {
                                            width: 0,
                                            height: 0,
                                            innerWidth: 0,
                                            innerHeight: 0,
                                            outerWidth: 0,
                                            outerHeight: 0
                                        }, t = 0; t < i; t++) {
                                        var r = n[t];
                                        e[r] = 0
                                    }
                                    return e
                                }();
                                var l = {};
                                l.width = t.offsetWidth, l.height = t.offsetHeight;
                                for (var u = l.isBorderBox = "border-box" == c.boxSizing, d = 0; d < i; d++) {
                                    var p = n[d],
                                        m = c[p],
                                        h = parseFloat(m);
                                    l[p] = isNaN(h) ? 0 : h
                                }
                                var f = l.paddingLeft + l.paddingRight,
                                    g = l.paddingTop + l.paddingBottom,
                                    y = l.marginLeft + l.marginRight,
                                    b = l.marginTop + l.marginBottom,
                                    v = l.borderLeftWidth + l.borderRightWidth,
                                    E = l.borderTopWidth + l.borderBottomWidth,
                                    C = u && a,
                                    k = e(c.width);
                                !1 !== k && (l.width = k + (C ? 0 : f + v));
                                var P = e(c.height);
                                return !1 !== P && (l.height = P + (C ? 0 : g + E)), l.innerWidth = l.width - (f + v), l.innerHeight = l.height - (g + E), l.outerWidth = l.width + y, l.outerHeight = l.height + b, l
                            }
                        }
                        return s
                    }()
                }.call(t, n, t, e)) || (e.exports = i)
            }(window)
        },
        QV0B: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.collapsable ? r.createElement(r.Fragment, null, r.createElement(a.Xa, {
                            display: this.state.collapsed ? a.X.Hide : a.X.Block,
                            breakpointLarge: {
                                display: a.X.Block
                            }
                        }, r.createElement(a.H, null, this.props.children)), r.createElement(a.Xa, {
                            display: a.X.Block,
                            breakpointLarge: {
                                display: a.X.Hide
                            }
                        }, r.createElement(a.Ua, {
                            onClick: this.toggleCollapsed,
                            hover: !1,
                            type: a.Va.Alpha
                        }, r.createElement(a.Xa, {
                            fullWidth: !0,
                            textAlign: a.Rb.Center,
                            alignItems: a.f.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(a.W, {
                            type: a.Vb.Span,
                            color: a.O.Link
                        }, this.state.collapsed ? this.props.showButtonLabel : this.props.hideButtonLabel))))) : r.createElement(a.H, null, this.props.children)
                    }, t
                }(r.Component);
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
        SNyx: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
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
                f = n("HGFl"),
                g = n("DMoW"),
                y = n("b6Yk"),
                b = n("tIid");
            ! function(e) {
                e[e.PERSONAL_SUB = 0] = "PERSONAL_SUB", e[e.GIFT_SUB = 1] = "GIFT_SUB", e[e.MYSTERY_GIFT = 2] = "MYSTERY_GIFT"
            }(i || (i = {}));
            var v, E, C = n("Ue10"),
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.product ? (e = this.props.purchaseFlow === i.GIFT_SUB || this.props.purchaseFlow === i.MYSTERY_GIFT ? this.isEsportPurchase ? this.giftEsportMessageText : this.giftSubMessageText : this.isEsportPurchase ? this.personalEsportMessageText : "turbo" === this.props.product.product.name ? this.turboMessageText : this.personalSubMessageText, d.createElement(C.Xa, null, e)) : d.createElement(C.ib, null);
                        var e
                    }, Object.defineProperty(t.prototype, "turboMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Twitch Turbo subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product && this.props.product.product.owner;
                            return e && e.id && Object(b.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "personalEsportMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Pass is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftEsportMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Pass gift is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "personalSubMessageText", {
                        get: function() {
                            if (this.props.product) {
                                var e = Object(p.d)("Buying a Channel Subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                        "x:link": function(e) {
                                            return d.createElement(C.U, {
                                                targetBlank: !0,
                                                to: "https://help.twitch.tv/"
                                            }, e)
                                        }
                                    }, "CheckoutDescription"),
                                    t = Object(p.d)('You may cancel at any time by selecting "Do Not Renew" on your <x:link>subscriptions page</x:link>.', {
                                        "x:link": function(e) {
                                            return d.createElement(C.U, {
                                                targetBlank: !0,
                                                to: "/subscriptions"
                                            }, e)
                                        }
                                    }, "CheckoutDescription");
                                return d.createElement(d.Fragment, null, d.createElement(C.W, null, e), this.props.product.product.interval.unit === g.T.MONTH && d.createElement(C.W, null, t))
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "giftSubMessageText", {
                        get: function() {
                            var e = Object(p.d)("Buying a Gift Subscription is fast, easy, and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                                "x:link": function(e) {
                                    return d.createElement(C.U, {
                                        targetBlank: !0,
                                        to: "https://help.twitch.tv/"
                                    }, e)
                                }
                            }, "CheckoutDescription");
                            return d.createElement(C.W, null, e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.PureComponent),
                P = (n("JH5r"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(C.Eb, {
                            className: "checkout-error-brick",
                            background: C.r.Base,
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderRadius: C.x.Small,
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            justifyContent: C.Wa.Center,
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
            }(v || (v = {})),
            function(e) {
                e[e.Info = 0] = "Info", e[e.Error = 1] = "Error"
            }(E || (E = {}));
            var S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.level === E.Error ? d.createElement(P, null, d.createElement(C.W, {
                            bold: !0
                        }, this.title), d.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, d.createElement(C.W, null, this.message))) : this.props.level === E.Info ? d.createElement(C.Eb, {
                            className: "checkout-error--info",
                            display: C.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(C.sb, {
                            asset: C.tb.NotificationInfo
                        }), d.createElement(C.Xa, {
                            margin: {
                                left: 2
                            }
                        }, d.createElement(C.W, null, this.message))) : void 0
                    }, Object.defineProperty(t.prototype, "title", {
                        get: function() {
                            return this.props.errorCode === v.DefaultMessage ? Object(p.d)("Payment not processed", "CheckoutError") : this.props.errorCode === v.InvalidResidence ? Object(p.d)("Invalid country of residence", "CheckoutError") : this.props.errorCode === v.InvalidPaymentMethod ? Object(p.d)("This payment method is not available for your purchase at this time", "CheckoutError") : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "message", {
                        get: function() {
                            return this.props.errorCode === v.DefaultMessage ? Object(p.d)("Something went wrong, and your payment could not be processed at this time. Please try again later.", "CheckoutError") : this.props.errorCode === v.PriceChangeNotice ? Object(p.d)("We made a change to the price to reflect your country of purchase. Please review the updated price and confirm your payment again.", "CheckoutError") : this.props.errorCode === v.InvalidResidence ? Object(p.d)("Make sure your country of residence and postal code are both valid.", "CheckoutError") : this.props.errorCode === v.InvalidPaymentMethod ? Object(p.d)("Please continue checkout using another payment method.", "CheckoutError") : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component),
                x = n("6oOb"),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.progress === x.a.CONFIRMATION ? d.createElement(C.W, {
                            type: C.Vb.H2,
                            bold: !0
                        }, Object(p.d)("Purchase Successful", "CheckoutHeader")) : d.createElement(C.W, {
                            type: C.Vb.H2,
                            bold: !0
                        }, this.headerText)
                    }, Object.defineProperty(t.prototype, "headerText", {
                        get: function() {
                            return this.props.purchaseFlow === i.GIFT_SUB || this.props.purchaseFlow === i.MYSTERY_GIFT ? this.isEsportPurchase ? Object(p.d)("Gift All-Access Pass", "CheckoutHeader") : Object(p.d)("Gift A Subscription", "CheckoutHeader") : this.props.purchaseFlow === i.PERSONAL_SUB ? this.isEsportPurchase ? Object(p.d)("Get Your All-Access Pass", "CheckoutHeader") : Object(p.d)("Subscription Payment Information", "CheckoutHeader") : Object(p.d)("Checkout", "CheckoutHeader")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product && this.props.product.product.owner;
                            return e && e.id && Object(b.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component);
            var I, w = Object(r.connect)(function(e) {
                    return {
                        sessionUser: Object(c.e)(e)
                    }
                })(O),
                _ = (n("u/1r"), function(e) {
                    return d.createElement(C.Xa, {
                        fullWidth: !0,
                        padding: 3,
                        overflow: C.cb.Auto
                    }, d.createElement(C.Xa, {
                        display: C.X.Flex,
                        justifyContent: C.Wa.Center,
                        flexWrap: C.Ba.Wrap
                    }, d.createElement(C.Xa, {
                        display: C.X.Hide,
                        alignItems: C.f.Start,
                        breakpointLarge: {
                            display: C.X.Flex
                        }
                    }, e.productDescription), d.createElement(C.Xa, {
                        className: "checkout-layout__content",
                        breakpointLarge: {
                            margin: {
                                left: 4
                            }
                        }
                    }, e.header, d.createElement(C.Xa, {
                        display: C.X.Flex,
                        breakpointLarge: {
                            display: C.X.Hide
                        }
                    }, e.productDescription), d.createElement(C.Xa, {
                        margin: {
                            y: 1
                        }
                    }, e.children))))
                }),
                N = function() {
                    var e = Object(p.d)('By clicking "Complete Purchase", you hereby agree to Twitch\'s <x:tos>Terms of Sale</x:tos> and <x:privacy>Privacy Policy</x:privacy>. Your payment method will be saved for future purchases, and, if applicable, recurring subscription payments.', {
                        "x:tos": function(e) {
                            return d.createElement(C.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/terms-of-sale/"
                            }, e)
                        },
                        "x:privacy": function(e) {
                            return d.createElement(C.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/privacy-policy/"
                            }, e)
                        }
                    }, "CheckoutDisclaimer");
                    return d.createElement(C.Xa, {
                        padding: {
                            y: 2
                        }
                    }, d.createElement(C.W, null, e))
                };

            function T(e) {
                switch (e) {
                    case I.GIFTABLE_RECIPIENT:
                    case I.NEW_PURCHASE:
                    case I.TIER_UPGRADE:
                    case I.PRIME_UPGRADE:
                    case I.UNKNOWN:
                        return !0;
                    case I.NO_ITEM:
                    case I.NON_GIFTABLE_RECIPIENT:
                    case I.NO_MASS_GIFTING:
                    case I.TIER_DOWNGRADE:
                    case I.MOBILE_UPGRADE:
                    case I.API_INELIGIBLE:
                    default:
                        return !1
                }
            }! function(e) {
                e[e.GIFTABLE_RECIPIENT = 0] = "GIFTABLE_RECIPIENT", e[e.NEW_PURCHASE = 1] = "NEW_PURCHASE", e[e.TIER_UPGRADE = 2] = "TIER_UPGRADE", e[e.PRIME_UPGRADE = 3] = "PRIME_UPGRADE", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.NO_ITEM = 5] = "NO_ITEM", e[e.NON_GIFTABLE_RECIPIENT = 6] = "NON_GIFTABLE_RECIPIENT", e[e.NO_MASS_GIFTING = 7] = "NO_MASS_GIFTING", e[e.TIER_DOWNGRADE = 8] = "TIER_DOWNGRADE", e[e.MOBILE_UPGRADE = 9] = "MOBILE_UPGRADE", e[e.API_INELIGIBLE = 10] = "API_INELIGIBLE"
            }(I || (I = {}));
            var D, R = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e;
                        switch (this.props.productEligibility) {
                            case I.NON_GIFTABLE_RECIPIENT:
                                e = this.isEsportPurchase ? Object(p.d)("Sorry, an All-Access Pass to this channel is not available for <x:bold>{recipientName}</x:bold>.", {
                                    "x:bold": function(e) {
                                        return d.createElement(C.W, {
                                            type: C.Vb.Span,
                                            bold: !0
                                        }, e)
                                    },
                                    recipientName: this.props.product.recipient && this.props.product.recipient.displayName || ""
                                }, "IneligiblePurchaseNotice") : Object(p.d)("Sorry, a Gift Subscription to this channel is not available for <x:bold>{recipientName}</x:bold>.", {
                                    "x:bold": function(e) {
                                        return d.createElement(C.W, {
                                            type: C.Vb.Span,
                                            bold: !0
                                        }, e)
                                    },
                                    recipientName: this.props.product.recipient && this.props.product.recipient.displayName || ""
                                }, "IneligiblePurchaseNotice");
                                break;
                            case I.NO_MASS_GIFTING:
                                e = Object(p.d)("Community gifts are not eligible for this product.", "IneligiblePurchaseNotice");
                                break;
                            case I.TIER_DOWNGRADE:
                                var t = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.login;
                                e = Object(p.d)("You are currently subscribed to a higher-tier subscription that offers more benefits. <x:subsLink>Click here to compare subscription benefits</x:subsLink>. If you would still like to purchase this, please <x:subsMgmtLink>cancel your existing subscription</x:subsMgmtLink> or wait for your existing subscription to end.", {
                                    "x:subsLink": function(e) {
                                        return d.createElement(C.U, {
                                            type: C.V.Inherit,
                                            to: "/subs/" + (t || ""),
                                            underline: !0
                                        }, e)
                                    },
                                    "x:subsMgmtLink": function(e) {
                                        return d.createElement(C.U, {
                                            type: C.V.Inherit,
                                            to: "/subscriptions",
                                            underline: !0
                                        }, e)
                                    }
                                }, "IneligiblePurchaseNotice");
                                break;
                            case I.MOBILE_UPGRADE:
                                var n = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.displayName;
                                return d.createElement(m.a, null, d.createElement(C.W, {
                                    bold: !0
                                }, Object(p.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                    productDisplayName: n || ""
                                }, "IneligiblePurchaseNotice")), d.createElement(C.Xa, {
                                    margin: {
                                        top: 1
                                    }
                                }, d.createElement(C.W, null, Object(p.d)("Upgrading your mobile subscription is currently not supported.", "IneligiblePurchaseNotice"))));
                            default:
                                e = Object(p.d)("You are not eligible for this purchase.", "IneligiblePurchaseNotice")
                        }
                        return d.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.W, {
                            color: C.O.Error
                        }, e))
                    }, Object.defineProperty(t.prototype, "isEsportPurchase", {
                        get: function() {
                            var e = this.props.product.product.owner;
                            return e && e.id && Object(b.a)(e.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.PureComponent),
                j = function(e) {
                    return d.createElement(C.Eb, {
                        background: C.r.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, d.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(C.W, null, Object(p.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                        newPrice: e.newPrice
                    }, "UpgradePrimeWarning"))), d.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(C.W, null, Object(p.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30 days after you last used your free subscription.", "UpgradePrimeWarning"))), d.createElement(C.W, null, Object(p.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
                },
                F = function(e) {
                    return d.createElement(C.Eb, {
                        background: C.r.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, d.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(C.W, null, Object(p.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                        originalPrice: e.originalPrice,
                        newPrice: e.newPrice
                    }, "UpgradeTierWarning"))), d.createElement(C.Xa, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(C.W, null, Object(p.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                        originalPrice: e.originalPrice
                    }, "UpgradeTierWarning"))), d.createElement(C.W, null, Object(p.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
                },
                A = (n("mIie"), function(e) {
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
                        if (this.props.purchaseFlow === i.GIFT_SUB) t = this.renderGiftSubPurchase();
                        else if (this.props.purchaseFlow === i.MYSTERY_GIFT) t = this.renderMysteryGiftSubPurchase();
                        else if (this.props.purchaseFlow === i.PERSONAL_SUB)
                            if (this.props.eligiblePromotions && this.props.eligiblePromotions.isOneMonthFreeEligible && (e = this.renderOneFreeMonth()), this.props.productEligibility === I.TIER_UPGRADE) t = this.renderTierUpgrade();
                            else if (this.props.productEligibility === I.PRIME_UPGRADE) {
                            var n = this.formattedPrice;
                            n && (t = d.createElement(j, {
                                newPrice: n
                            }))
                        } else this.props.productEligibility === I.NEW_PURCHASE && this.hasActiveGiftSubscription && (this.props.eligiblePromotions && this.props.eligiblePromotions.paidUpgradePromotion && (e = this.renderSubtemberDiscount()), t = this.renderGiftSubUpgrade());
                        return d.createElement(d.Fragment, null, e, (!this.hasActiveGiftSubscription || this.props.purchaseFlow !== i.PERSONAL_SUB) && d.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, d.createElement(C.W, null, this.chargeTimeMessage)), t)
                    }, t.prototype.renderTierUpgrade = function() {
                        var e = this.props.existingPurchases && this.props.existingPurchases.compatiblePurchases && this.props.existingPurchases.compatiblePurchases[0];
                        if (!e) return null;
                        var t = e.price,
                            n = e.currency,
                            i = e.divisor,
                            r = Object(p.f)(t / i, {
                                style: "currency",
                                currency: n
                            }),
                            a = this.formattedPrice;
                        return r && a ? d.createElement(F, {
                            originalPrice: r,
                            newPrice: a
                        }) : null
                    }, t.prototype.renderGiftSubUpgrade = function() {
                        var e = this.props.benefit.endsAt;
                        if (!e) return null;
                        var t = Object(f.c)(e);
                        return d.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.W, null, Object(p.d)("You will be charged when your Gift Subscription ends on <x:strong>{giftSubEndDateFormatted, date, short}</x:strong>.", {
                            giftSubEndDateFormatted: t,
                            "x:strong": function(e) {
                                return d.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PurchasePreview")))
                    }, t.prototype.renderGiftSubPurchase = function() {
                        var e, t = this.props.product && this.props.product.recipient && this.props.product.recipient.displayName;
                        return this.formattedPrice ? (e = this.isEsportPurchase ? Object(p.d)("You are buying a {price} Overwatch League All-Access Pass for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: d.createElement(C.W, {
                                type: C.Vb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview") : Object(p.d)("You are buying a Single Month {price} Gift Subscription for {recipientName}.", {
                            price: this.formattedPrice,
                            recipientName: d.createElement(C.W, {
                                type: C.Vb.Span,
                                bold: !0
                            }, t || "")
                        }, "PurchasePreview"), d.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.W, null, e))) : null
                    }, t.prototype.renderMysteryGiftSubPurchase = function() {
                        if (!this.props.product) return null;
                        var e, t = this.props.product.product && this.props.product.product.tier,
                            n = t && parseInt(t, 10) / 1e3,
                            i = this.props.product.quantity;
                        if (!i || !this.formattedPrice) return null;
                        var r = Object(p.d)("Gift recipients will be chosen at random, starting with viewers of the streamer's channel who do not currently subscribe. <x:gift-info>Learn how Twitch picks recipients.</x:gift-info>", {
                            "x:gift-info": function(e) {
                                return d.createElement(C.U, {
                                    targetBlank: !0,
                                    to: "https://help.twitch.tv/customer/portal/articles/2903710-gift-subscriptions#CommunityGifting"
                                }, e)
                            }
                        }, "PurchasePreview");
                        e = this.isEsportPurchase ? Object(p.d)("{quantity, plural, one {{quantity} x Overwatch League All-Access Pass Gift} other {{quantity} x Overwatch League All-Access Pass Gifts}}", {
                            quantity: i
                        }, "PurchasePreview") : Object(p.d)("{quantity, plural, one {{quantity} x Single Month Tier {numericalTier} Gift Subscription} other {{quantity} x Single Month Tier {numericalTier} Gift Subscriptions}}", {
                            quantity: i,
                            numericalTier: n
                        }, "PurchasePreview");
                        var a = this.props.product.product.priceInfo.total * i,
                            o = Object(p.d)("{price} each", {
                                price: this.formattedPrice
                            }, "PurchasePreview"),
                            s = Object(p.d)("Total {totalPrice}", {
                                totalPrice: Object(p.f)(a / Math.pow(10, this.props.product.product.priceInfo.exponent), {
                                    style: "currency",
                                    currency: this.props.product.product.priceInfo.currency
                                })
                            }, "PurchasePreview");
                        return d.createElement(d.Fragment, null, d.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.Xa, null, d.createElement(C.W, {
                            type: C.Vb.H5
                        }, e)), d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.W, {
                            type: C.Vb.H5
                        }, o)), d.createElement(C.W, {
                            type: C.Vb.H5,
                            bold: !0
                        }, s)), d.createElement(C.W, null, r))
                    }, t.prototype.renderOneFreeMonth = function() {
                        var e = new Date,
                            t = this.props.benefit;
                        t && null !== t.endsAt && (e = Object(f.c)(t.endsAt));
                        var n = new Date(e);
                        return n.setMonth(e.getMonth() + 1), d.createElement(C.Eb, {
                            background: C.r.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.W, null, Object(p.d)("Your next month is on us. You will be charged when your free month ends on <x:strong>{futureChargeDate, date, short}</x:strong>.", {
                            futureChargeDate: n,
                            "x:strong": function(e) {
                                return d.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PurchasePreview")))
                    }, t.prototype.renderSubtemberDiscount = function() {
                        return this.enablePaidUpgradeFlag && this.props.eligiblePromotions && this.props.eligiblePromotions.paidUpgradePromotion ? d.createElement(C.Eb, {
                            background: C.r.Base,
                            className: "purchase-preview__promotion-banner",
                            padding: 1,
                            margin: {
                                y: 1
                            },
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("*Subtember Limited-Time Promotion Applied", "PurchasePreview")), d.createElement(C.W, null, Object(p.d)("Your first month will cost {discountedPrice} and {oldPrice} for each recurring month.", {
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
                            return this.props.product && this.props.product.product.owner && this.props.product.product.owner.id && Object(b.a)(this.props.product.product.owner.id, this.props.sessionUser)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.Component)),
                M = n("9C/b"),
                L = (n("NwMv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(C.Xa, {
                            className: "gift-sub-receipt__container",
                            padding: {
                                y: 2
                            }
                        }, d.createElement(C.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, this.getGiftSubReceiptInfo()), d.createElement(C.Eb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Gift Status", "GiftSubReceipt"))), d.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, null, Object(p.d)("Active", "GiftSubReceipt")))), this.props.invoicePrice && d.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Your Invoice Total", "GiftSubReceipt"))), d.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, null, Object(p.f)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        })))), d.createElement(C.Xa, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(C.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "GiftSubReceipt"))))
                    }, t.prototype.getGiftSubReceiptInfo = function() {
                        if (this.props.invoicePrice) return this.props.isEsportChannel ? d.createElement(C.W, {
                            "data-test-selector": "esport-gift-sub-receipt-info-selector"
                        }, Object(p.d)("You have purchased a {price} Overwatch League All-Access Pass for <x:strong>{recipientDisplayName}</x:strong>", {
                            price: Object(p.f)(this.props.invoicePrice / 100, {
                                style: "currency",
                                currency: this.props.invoiceCurrency
                            }),
                            recipientDisplayName: this.props.recipientDisplayName || "",
                            "x:strong": function(e) {
                                return d.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "GiftSubReceipt")) : d.createElement(C.W, {
                            "data-test-selector": "gift-sub-receipt-info-selector"
                        }, Object(p.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                            price: Object(p.f)(this.props.invoicePrice / 100, {
                                style: "currency",
                                currency: this.props.invoiceCurrency
                            }),
                            recipientDisplayName: this.props.recipientDisplayName || "",
                            "x:strong": function(e) {
                                return d.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "GiftSubReceipt"))
                    }, t
                }(d.PureComponent)),
                B = Object(M.a)(L),
                U = (n("XE3n"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goBackToChannel = function() {
                            (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(C.Xa, {
                            className: "gift-sub-receipt__container",
                            padding: {
                                y: 2
                            }
                        }, d.createElement(C.Eb, {
                            padding: {
                                bottom: 2
                            }
                        }, this.getMysteryGiftSubReceiptInfo()), d.createElement(C.Eb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Gift Status", "MysteryGiftSubReceipt"))), d.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, null, Object(p.d)("Active", "MysteryGiftSubReceipt")))), this.props.invoicePrice && d.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Xa, {
                            className: "gift-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Your Invoice Total", "MysteryGiftSubReceipt"))), d.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, null, Object(p.f)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        })))), d.createElement(C.Xa, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(C.z, {
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
                            return this.props.isEsportChannel ? d.createElement(d.Fragment, null, d.createElement(C.W, null, Object(p.d)("{quantity, plural, one {You have purchased {quantity} x Overwatch League All-Access Pass Gift.} other {You have purchased {quantity} x Overwatch League All-Access Pass Gifts.}}", {
                                quantity: this.props.mysteryGiftCount
                            }, "MysteryGiftSubReceipt")), d.createElement(C.W, null, t)) : d.createElement(d.Fragment, null, d.createElement(C.W, null, Object(p.d)("{quantity, plural, one {You have purchased {quantity} x Single Month Tier {tier} Gift Subscription.} other {You have purchased {quantity} x Single Month Tier {tier} Gift Subscriptions.}}", {
                                quantity: this.props.mysteryGiftCount,
                                tier: e
                            }, "MysteryGiftSubReceipt")), d.createElement(C.W, null, t))
                        }
                    }, t
                }(d.PureComponent)),
                W = Object(M.a)(U),
                z = (n("ZHRK"), function(e) {
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
                                return d.createElement(C.W, {
                                    type: C.Vb.Span,
                                    bold: !0
                                }, e)
                            },
                            endsAt: Object(p.c)(new Date(this.props.giftSubEndsAt), "long")
                        }, "PersonalSubReceipt") : Object(p.d)("Active", "PersonalSubReceipt"), d.createElement(C.Xa, {
                            className: "personal-sub-receipt"
                        }, d.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Xa, {
                            className: "personal-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Subscription for", "PersonalSubReceipt"))), d.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, null, this.props.purchaserDisplayName))), d.createElement(C.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Xa, {
                            className: "personal-sub-receipt__label",
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, {
                            bold: !0
                        }, Object(p.d)("Status", "PersonalSubReceipt"))), d.createElement(C.Xa, {
                            display: C.X.InlineBlock
                        }, d.createElement(C.W, null, e))), d.createElement(C.Xa, {
                            margin: {
                                y: 3
                            }
                        }, d.createElement(C.z, {
                            onClick: this.goBackToChannel
                        }, Object(p.d)("Go back to {displayName}", {
                            displayName: this.props.productOwnerDisplayName
                        }, "PersonalSubReceipt"))))
                    }, t
                }(d.Component)),
                X = Object(M.a)(z),
                G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.product || !this.props.purchaseInvoice.price) return null;
                        var e = this.props.product.product && this.props.product.product.owner && this.props.product.product.owner.id || "",
                            t = Object(b.a)(e, this.props.sessionUser),
                            n = this.props.product.product,
                            r = n && n.owner,
                            a = this.props.benefit;
                        return this.props.purchaseFlow === i.MYSTERY_GIFT ? d.createElement(W, {
                            productOwnerDisplayName: r && r.displayName || "",
                            productOwnerLogin: r && r.login || "",
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            tier: this.props.purchaseInvoice.tier || "",
                            mysteryGiftCount: this.props.product.quantity || 1,
                            isEsportChannel: t
                        }) : this.props.purchaseFlow === i.GIFT_SUB ? this.props.product.recipient ? d.createElement(B, {
                            recipientDisplayName: this.props.product.recipient.displayName,
                            productOwnerDisplayName: r && r.displayName || "",
                            productOwnerLogin: r && r.login || "",
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
                            productOwnerDisplayName: r && r.displayName || "",
                            productOwnerLogin: r && r.login || "",
                            giftSubEndsAt: a && a.gift && (a.gift.isGift || null) && a.endsAt || "",
                            invoicePrice: this.props.purchaseInvoice.price,
                            invoiceCurrency: this.props.purchaseInvoice.currency || "USD",
                            invoiceDivisor: this.props.purchaseInvoice.divisor || 100
                        })
                    }, t
                }(d.PureComponent),
                H = n("V+q8"),
                V = n("oJmH"),
                q = n("sV2v"),
                Y = n("Jgup"),
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unsupportedCountries = new Set(["A1", "A2", "AP", "AQ", "CU", "EU", "IR", "KP", "MM", "O1", "SD", "SS", "SY", "TL"]), t.displayCountries = Y.a.filter(function(e) {
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
                        return d.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexWrap: C.Ba.Wrap
                        }, d.createElement(C.Xa, null, d.createElement(C.Ea, {
                            id: "country-of-residence",
                            label: Object(p.d)("Country of Residence", "CountryOfResidenceSelector"),
                            labelOptional: Object(p.d)("Price may vary", "CountryOfResidenceSelector")
                        }, d.createElement(C.zb, {
                            onChange: this.onCountryChange,
                            value: this.props.countryCode
                        }, this.displayCountries.map(function(e) {
                            return d.createElement("option", {
                                key: e,
                                value: e
                            }, Object(Y.b)(e))
                        })))), this.zipCodeRequired && d.createElement(C.Xa, {
                            margin: {
                                left: 1
                            }
                        }, d.createElement(C.Ea, {
                            id: "zip-code",
                            label: Object(p.d)("Postal Code", "CountryOfResidenceSelector")
                        }, d.createElement(C.Ra, {
                            type: C.Ta.Text,
                            placeholder: Object(p.d)("12345", "CountryOfResidenceSelector"),
                            value: this.props.zipCode || "",
                            error: this.props.zipCodeError,
                            onChange: this.onZipChange
                        }))))
                    }, Object.defineProperty(t.prototype, "zipCodeRequired", {
                        get: function() {
                            return ["US", "CA"].includes(this.props.countryCode)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(d.PureComponent),
                K = (n("lqDW"), function() {
                    return d.createElement(C.Eb, {
                        className: "payment-method--notice--unavailable",
                        display: C.X.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(C.sb, {
                        asset: C.tb.NotificationInfo
                    }), d.createElement(C.Xa, {
                        margin: {
                            left: 2
                        }
                    }, d.createElement(C.W, null, Object(p.d)('Please change your payment method and continue to checkout using the "{buttonLabel}” options.', {
                        buttonLabel: "More Methods"
                    }, "PaymentMethodNotice"))))
                });
            ! function(e) {
                e[e.ACTIVE = 0] = "ACTIVE", e[e.DISABLED = 1] = "DISABLED", e[e.HIDDEN = 2] = "HIDDEN"
            }(D || (D = {}));
            var Q = n("KriR"),
                J = n("GnwI"),
                $ = (n("TEvY"), function() {
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
                            paymentMethodEnabled: t.props.eligibilityStatus === D.ACTIVE,
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
                                                payment_flow: Q.b.RecurlyPayWithAmazon,
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
                            paymentMethodEnabled: this.props.eligibilityStatus === D.ACTIVE
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
                        return this.state.amazonScriptLoaded ? d.createElement(d.Fragment, null, this.props.showEuSubs && d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(Z, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), d.createElement(C.Eb, {
                            background: C.r.Base,
                            border: !0,
                            className: "recurly-amazon-pay"
                        }, !this.state.paymentMethodEnabled && d.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center,
                            margin: 5
                        }, d.createElement(K, null)), this.state.paymentMethodEnabled && d.createElement(d.Fragment, null, d.createElement(C.Xa, {
                            display: this.state.walletLoaded ? C.X.Hide : C.X.Flex,
                            justifyContent: C.Wa.Center,
                            margin: 5
                        }, d.createElement("div", {
                            id: "recurly-amazon-pay__button"
                        })), d.createElement(C.Xa, {
                            display: this.state.walletLoaded ? C.X.Flex : C.X.Hide,
                            flexDirection: C.Aa.Column,
                            alignItems: C.f.Center,
                            margin: {
                                top: 2
                            }
                        }, d.createElement("div", {
                            id: "recurly-amazon-pay__wallet",
                            className: "recurly-amazon-pay__wallet"
                        }), d.createElement(C.Xa, {
                            padding: {
                                top: 1
                            },
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, d.createElement(C.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse
                        }, this.props.submitButtonCopy)))))) : d.createElement(C.Za, null)
                    }, t = l.__decorate([Object(J.b)("RecurlyAmazonPay")], t)
                }(d.Component)),
                ee = n("/0dD"),
                te = n("XDQu"),
                ne = n("6fcp"),
                ie = (n("Aoab"), {
                    light: "#000",
                    dark: "#fff"
                }),
                re = {
                    light: "#a49fad",
                    dark: "#898395"
                },
                ae = function() {
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
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            firstName: "",
                            lastName: "",
                            recurlyReady: !1,
                            awaitingResponse: !1,
                            errorMessage: "",
                            errorState: ae(),
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === D.ACTIVE
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
                                            return l.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return t = this.validateResidence(), e || t.length ? (this.handleValidationError(e, t), this.setState({
                                                            awaitingResponse: !1
                                                        }), [3, 3]) : [3, 1];
                                                    case 1:
                                                        return [4, this.handleValidationSuccess(n)];
                                                    case 2:
                                                        i.sent(), i.label = 3;
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
                                                payment_flow: Q.b.RecurlyCreditCard,
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
                            var i = ae(),
                                r = "";
                            n.length && n.forEach(function(e) {
                                i[e] = !0
                            }), e && (r = Object(p.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"), e.code !== ne.a.Validation && e.code !== ne.a.InvalidParameter || (e.fields && e.fields.forEach(function(e) {
                                i[e] = !0
                            }), r = Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"))), t.setState({
                                errorMessage: r,
                                errorState: i
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
                            paymentMethodEnabled: this.props.eligibilityStatus === D.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.render = function() {
                        var e = this;
                        return d.createElement(C.Xa, {
                            className: "recurly-credit-card",
                            fullWidth: !0
                        }, d.createElement(C.Xa, {
                            display: this.state.recurlyReady ? C.X.Hide : C.X.Block
                        }, d.createElement(C.Za, {
                            fillContent: !0
                        })), d.createElement(C.Xa, {
                            display: this.state.recurlyReady ? C.X.Block : C.X.Hide
                        }, d.createElement("form", {
                            className: "recurly-form",
                            ref: function(t) {
                                return e.form = t
                            }
                        }, d.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(C.Ea, {
                            id: "recurly-name",
                            label: Object(p.d)("Name", "RecurlyCreditCard")
                        }, d.createElement("div", {
                            id: "recurly-name"
                        }, d.createElement(C.Ja, {
                            gutterSize: C.Ka.Medium
                        }, d.createElement(C.P, {
                            cols: 6
                        }, d.createElement(C.Ra, {
                            id: "recurly-first-name",
                            type: C.Ta.Text,
                            placeholder: Object(p.d)("First Name", "RecurlyCreditCard"),
                            value: this.state.firstName,
                            onChange: this.handleFirstName,
                            error: this.state.errorState.first_name
                        }), d.createElement("input", {
                            type: "hidden",
                            "data-recurly": "first_name",
                            value: this.state.firstName
                        })), d.createElement(C.P, {
                            cols: 6
                        }, d.createElement(C.Ra, {
                            id: "recurly-last-name",
                            type: C.Ta.Text,
                            placeholder: Object(p.d)("Last Name", "RecurlyCreditCard"),
                            value: this.state.lastName,
                            onChange: this.handleLastName,
                            error: this.state.errorState.last_name
                        }), d.createElement("input", {
                            type: "hidden",
                            "data-recurly": "last_name",
                            value: this.state.lastName
                        })))))), d.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(C.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Credit Card", "RecurlyCreditCard")
                        }, d.createElement("div", {
                            id: "recurly-credit-card"
                        }, d.createElement(C.Ja, {
                            gutterSize: C.Ka.Medium
                        }, d.createElement(C.P, {
                            cols: 8
                        }, d.createElement("div", {
                            id: "recurly-number",
                            "data-recurly": "number",
                            className: this.state.errorState.number ? "recurly-error" : ""
                        })), d.createElement(C.P, {
                            cols: 4
                        }, d.createElement("div", {
                            id: "recurly-cvv",
                            "data-recurly": "cvv",
                            className: this.state.errorState.cvv ? "recurly-error" : ""
                        })))))), d.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(C.Ea, {
                            id: "recurly-credit-card",
                            label: Object(p.d)("Expiration Date", "RecurlyCreditCard")
                        }, d.createElement("div", {
                            id: "recurly-credit-card"
                        }, d.createElement(C.Ja, {
                            gutterSize: C.Ka.Medium
                        }, d.createElement(C.P, {
                            cols: 6
                        }, d.createElement("div", {
                            id: "recurly-month",
                            "data-recurly": "month",
                            className: this.state.errorState.month ? "recurly-error" : ""
                        })), d.createElement(C.P, {
                            cols: 6
                        }, d.createElement("div", {
                            id: "recurly-year",
                            "data-recurly": "year",
                            className: this.state.errorState.year ? "recurly-error" : ""
                        })))))), this.props.showEuSubs && d.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(Z, {
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
                        }), this.props.eligibilityStatus === D.DISABLED && d.createElement(K, null), d.createElement(C.Xa, {
                            margin: {
                                top: 2
                            },
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center,
                            breakpointLarge: {
                                justifyContent: C.Wa.Start
                            }
                        }, d.createElement(C.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
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
                        var e = !window.location.href.includes("/products/") && this.props.darkModeEnabled,
                            t = e ? re.dark : re.light,
                            n = e ? ie.dark : ie.light;
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
                                        fontColor: n,
                                        placeholder: {
                                            color: t
                                        }
                                    }
                                },
                                number: {
                                    selector: "#recurly-number",
                                    style: {
                                        fontColor: n,
                                        placeholder: {
                                            content: Object(p.d)("Card Number", "RecurlyCreditCard"),
                                            color: t
                                        }
                                    }
                                },
                                month: {
                                    selector: "#recurly-month",
                                    inputType: "select",
                                    style: {
                                        fontColor: n,
                                        placeholder: {
                                            content: Object(p.d)("Select Month", "RecurlyCreditCard"),
                                            color: t
                                        }
                                    }
                                },
                                year: {
                                    selector: "#recurly-year",
                                    inputType: "select",
                                    style: {
                                        fontColor: n,
                                        placeholder: {
                                            content: Object(p.d)("Select Year", "RecurlyCreditCard"),
                                            color: t
                                        }
                                    }
                                },
                                cvv: {
                                    selector: "#recurly-cvv",
                                    style: {
                                        fontColor: n,
                                        placeholder: {
                                            content: Object(p.d)("CVV", "RecurlyCreditCard"),
                                            color: t
                                        }
                                    }
                                }
                            }
                        })
                    }, t = l.__decorate([Object(J.b)("RecurlyCreditCard")], t)
                }(d.Component);
            var se, ce = Object(r.connect)(function(e) {
                    return {
                        darkModeEnabled: Object(te.a)(e) === ee.a.Dark
                    }
                })(oe),
                le = (n("a7Xb"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            paypalConfigured: !1,
                            awaitingResponse: !1,
                            hasError: !1,
                            zipCodeError: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            paymentMethodEnabled: t.props.eligibilityStatus === D.ACTIVE
                        }, t.handleValidationSuccess = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.onSuccess({
                                                payment_flow: Q.b.RecurlyPaypal,
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
                            paymentMethodEnabled: this.props.eligibilityStatus === D.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.pollForRecurly)
                    }, t.prototype.render = function() {
                        return this.state.paypalConfigured ? d.createElement(C.Xa, null, this.props.showEuSubs && d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(Z, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), !this.state.paymentMethodEnabled && d.createElement(K, null), d.createElement(C.Eb, {
                            className: "recurly-paypal",
                            background: C.r.Base,
                            border: !0,
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, d.createElement(C.Xa, {
                            margin: {
                                top: 5
                            }
                        }, d.createElement(C.z, {
                            "data-a-target": "recurly-paypal__button",
                            onClick: this.handleClick,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse || !this.state.paymentMethodEnabled
                        }, Object(p.d)("Checkout With PayPal", "RecurlyPaypal"))))) : d.createElement(C.Xa, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(C.Za, null))
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
                    }, t = l.__decorate([Object(J.b)("RecurlyPaypal")], t)
                }(d.Component)),
                ue = function(e) {
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
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Pending
                                            }), t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Success
                                            });
                                            break;
                                        case "troubled":
                                            t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Pending
                                            }), t.props.trackPaymentFormInteraction({
                                                paymentFlow: Q.b.Xsolla,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Failed
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
                        return d.createElement(d.Fragment, null, this.props.showEuSubs && d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(Z, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: !1,
                            onChange: this.handleCORChange
                        })), d.createElement(C.Xa, {
                            fullWidth: !0
                        }, !this.state.xsollaLoaded && d.createElement(C.Za, {
                            fillContent: !0
                        }), d.createElement(C.Xa, {
                            fullWidth: !0,
                            display: this.state.xsollaLoaded ? C.X.Inline : C.X.Hide
                        }, d.createElement("iframe", {
                            ref: function(t) {
                                return e.iframe = t
                            },
                            id: "xsolla",
                            src: this.props.iframeURL,
                            width: "100%",
                            height: "650px"
                        }))))
                    }, t = l.__decorate([Object(J.b)("XsollaMoreMethods")], t)
                }(d.Component),
                de = n("f00E"),
                pe = n("WlZp");
            n("vGoz");
            ! function(e) {
                e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
            }(se || (se = {}));
            var me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        zuoraConfigured: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        nullValueErrors: [],
                        sessionId: Object(de.b)()
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.setState({
                            awaitingResponse: !0,
                            errorMessage: "",
                            nullValueErrors: []
                        }), window.Z.submit()
                    }, t.renderErrorMessage = function() {
                        if (t.state.nullValueErrors.length) {
                            var e = t.state.nullValueErrors.map(function(e, t) {
                                return d.createElement(C.Xa, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, d.createElement(C.W, {
                                    color: C.O.Error
                                }, "• ", e))
                            });
                            return d.createElement("div", null, d.createElement(C.Xa, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, d.createElement(C.W, {
                                color: C.O.Error
                            }, Object(p.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                        }
                        if (t.state.errorMessage) return d.createElement(C.Xa, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, d.createElement(C.W, {
                            color: C.O.Error
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
                                            payment_flow: Q.b.ZuoraCreditCard,
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
                    }, t.errorCallback = function(e, n, i) {
                        if (t.setState({
                                awaitingResponse: !1
                            }), "unknown" === n) return t.parseGatewayErrorMessage(i);
                        window.Z.sendErrorMessageToHpm(e, i)
                    }, t.parseGatewayErrorMessage = function(e) {
                        return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                            errorMessage: Object(p.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                        }) : t.setState({
                            errorMessage: Object(p.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            i = {
                                creditCardHolderName: Object(p.d)("Name on Card", "ZuoraCreditCard"),
                                creditCardAddress1: Object(p.d)("Billing Address", "ZuoraCreditCard"),
                                creditCardCity: Object(p.d)("City", "ZuoraCreditCard"),
                                creditCardPostalCode: Object(p.d)("Zip Code", "ZuoraCreditCard")
                            },
                            r = n.map(function(e) {
                                var t = i[e];
                                return t || ""
                            }).filter(function(e) {
                                return "" !== e
                            });
                        t.setState({
                            nullValueErrors: r
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
                    return d.createElement("div", null, !this.state.zuoraConfigured && d.createElement(C.Xa, {
                        padding: {
                            y: 5
                        }
                    }, d.createElement(C.Za, {
                        fillContent: !0
                    })), d.createElement(C.Xa, {
                        display: this.state.zuoraConfigured ? C.X.Block : C.X.Hide,
                        "data-test-selector": se.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), d.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.awaitingResponse ? "zuora-disabled" : ""
                    }), d.createElement(C.Xa, {
                        margin: {
                            top: 2
                        },
                        display: C.X.Flex,
                        justifyContent: C.Wa.Center,
                        breakpointLarge: {
                            justifyContent: C.Wa.Start
                        }
                    }, d.createElement(C.z, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                        disabled: this.state.awaitingResponse,
                        "data-test-selector": se.UPDATE_PAYMENT_BUTTON
                    }, this.props.submitButtonCopy)), d.createElement(pe.a, {
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
                }), t = l.__decorate([Object(J.b)("ZuoraCreditCard")], t)
            }(d.Component);
            var he, fe = Object(r.connect)(function(e) {
                return {
                    languageCode: Object(c.b)(e)
                }
            })(me);
            ! function(e) {
                e.RecurlyAmazonPay = "recurly_amazon_pay", e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlySavedPayment = "recurly_saved_payment", e.Xsolla = "xsolla", e.ZuoraCreditCard = "zuora_credit_card"
            }(he || (he = {}));
            var ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.submitButtonCopy = Object(p.d)("Complete Purchase", "PaymentMethods"), t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        switch (this.props.type) {
                            case he.RecurlyAmazonPay:
                                return d.createElement($, l.__assign({
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase
                                }, this.props.configs.recurly.payWithAmazonConfigs, {
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                }));
                            case he.RecurlyCreditCard:
                                return d.createElement(ce, {
                                    publicKey: this.props.configs.recurly.publicKey,
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    eligibilityStatus: this.props.eligibilityStatus,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                });
                            case he.RecurlyPaypal:
                                return d.createElement(le, {
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
                            case he.ZuoraCreditCard:
                                return d.createElement(fe, l.__assign({
                                    submitButtonCopy: this.submitButtonCopy,
                                    onSuccess: this.props.handleCompletePurchase,
                                    isProductionConfig: this.props.configs.recurly.payWithAmazonConfigs.isProduction
                                }, this.props.configs.zuora));
                            default:
                                return d.createElement(ue, l.__assign({
                                    userCountryOfResidence: this.props.userCountryOfResidence,
                                    userZipCode: this.props.userZipCode,
                                    handleCountryChange: this.props.handleCountryChange,
                                    trackPaymentFormInteraction: this.props.trackPaymentFormInteraction,
                                    showEuSubs: this.props.showEuSubs
                                }, this.props.configs.xsolla))
                        }
                    }, t
                }(d.PureComponent),
                ye = n("D8NC"),
                be = n.n(ye),
                ve = n("yrda"),
                Ee = n.n(ve),
                Ce = n("AVF4"),
                ke = n.n(Ce),
                Pe = n("BIez"),
                Se = n.n(Pe),
                xe = n("EF6p"),
                Oe = n.n(xe),
                Ie = n("xgE2"),
                we = n.n(Ie),
                _e = n("ZiR0"),
                Ne = n.n(_e),
                Te = n("KRuc"),
                De = n.n(Te),
                Re = {
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
                je = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.paymentProviders = [{
                            paymentMethodType: he.RecurlyCreditCard,
                            paymentFlow: Q.b.RecurlyCreditCard,
                            button: {
                                label: Re.CreditCard(),
                                src: ke.a,
                                alt: Re.CreditCard(),
                                srcSet: {
                                    "1x": ke.a,
                                    "2x": Se.a
                                }
                            }
                        }, {
                            paymentMethodType: he.ZuoraCreditCard,
                            paymentFlow: Q.b.ZuoraCreditCard,
                            button: {
                                label: Re.CreditCard(),
                                src: ke.a,
                                alt: Re.CreditCard(),
                                srcSet: {
                                    "1x": ke.a,
                                    "2x": Se.a
                                }
                            }
                        }, {
                            paymentMethodType: he.RecurlyPaypal,
                            paymentFlow: Q.b.RecurlyPaypal,
                            button: {
                                label: Re.Paypal(),
                                src: Ne.a,
                                alt: Re.Paypal(),
                                srcSet: {
                                    "1x": Ne.a,
                                    "2x": De.a
                                }
                            }
                        }, {
                            paymentMethodType: he.RecurlyAmazonPay,
                            paymentFlow: Q.b.RecurlyPayWithAmazon,
                            button: {
                                label: Re.AmazonPay(),
                                src: be.a,
                                alt: Re.AmazonPay(),
                                srcSet: {
                                    "1x": be.a,
                                    "2x": Ee.a
                                }
                            }
                        }, {
                            paymentMethodType: he.Xsolla,
                            paymentFlow: Q.b.Xsolla,
                            button: {
                                label: Re.MoreMethods(),
                                src: Oe.a,
                                alt: Re.MoreMethods(),
                                srcSet: {
                                    "1x": Oe.a,
                                    "2x": we.a
                                }
                            }
                        }], t.handleClick = function(e, n) {
                            return function() {
                                t.props.trackPaymentFormInteraction({
                                    paymentFlow: n,
                                    action: Q.a.RadioButtonClick,
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
                                return n && n.status !== D.HIDDEN ? d.createElement(C.P, {
                                    key: t.paymentMethodType,
                                    cols: {
                                        default: 6,
                                        sm: 3
                                    }
                                }, d.createElement(C.La, {
                                    label: t.button.label,
                                    type: C.Ma.Radio,
                                    src: t.button.src,
                                    alt: t.button.alt,
                                    srcSet: t.button.srcSet,
                                    value: t.paymentMethodType,
                                    onChange: e.handleClick(t.paymentMethodType, t.paymentFlow),
                                    checked: e.props.selectedProvider === t.paymentMethodType
                                })) : null
                            });
                        return d.createElement(C.Xa, null, d.createElement(C.Ja, {
                            gutterSize: C.Ka.Small
                        }, t))
                    }, t
                }(d.PureComponent),
                Fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedProvider: he.RecurlyCreditCard
                        }, t.renderPaymentMethods = function() {
                            var e = t.props,
                                n = e.configs,
                                i = e.handleCompletePurchase,
                                r = e.handleCountryChange,
                                a = e.trackPaymentFormInteraction,
                                o = t.props.eligiblePaymentMethods,
                                s = t;
                            return Object.values(he).map(function(e) {
                                var t = o.find(function(t) {
                                    return t.type === e
                                });
                                return t && t.status !== D.HIDDEN ? d.createElement(C.Xa, {
                                    key: t.type,
                                    display: s.state.selectedProvider === e ? C.X.Inline : C.X.Hide
                                }, d.createElement(ge, {
                                    type: t.type,
                                    configs: n,
                                    eligibilityStatus: t.status,
                                    userCountryOfResidence: s.props.userCountryOfResidence,
                                    userZipCode: s.props.userZipCode,
                                    handleCompletePurchase: i,
                                    handleCountryChange: r,
                                    trackPaymentFormInteraction: a,
                                    showEuSubs: s.props.showEuSubs
                                })) : null
                            })
                        }, t.handlePaymentMethodSelectorToggleChange = function(e) {
                            t.setState({
                                selectedProvider: e
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        for (var e = [he.RecurlyCreditCard, he.ZuoraCreditCard, he.RecurlyPaypal, he.RecurlyAmazonPay, he.Xsolla], t = this.props.eligiblePaymentMethods.filter(function(e) {
                                return e.status !== D.HIDDEN
                            }).map(function(e) {
                                return e.type
                            }), n = 0, i = e; n < i.length; n++) {
                            var r = i[n];
                            if (t.includes(r)) {
                                this.setState({
                                    selectedProvider: r
                                });
                                break
                            }
                        }
                    }, t.prototype.render = function() {
                        return d.createElement(d.Fragment, null, d.createElement(je, {
                            eligiblePaymentMethods: this.props.eligiblePaymentMethods,
                            selectedProvider: this.state.selectedProvider,
                            handleClick: this.handlePaymentMethodSelectorToggleChange,
                            trackPaymentFormInteraction: this.props.trackPaymentFormInteraction
                        }), d.createElement(q.a, null), d.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, this.renderPaymentMethods()))
                    }, t
                }(d.Component),
                Ae = n("85n/"),
                Me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            awaitingResponse: !1,
                            userCountryOfResidence: t.props.userCountryOfResidence,
                            userZipCode: t.props.userZipCode,
                            zipCodeError: !1,
                            paymentMethodEnabled: t.props.eligibility.status === D.ACTIVE
                        }, t.isPaymentMethodExpired = function(e) {
                            var n = t.zeroIndexedMonth(e),
                                i = e.expirationYear;
                            if (void 0 === n || !i) return !1;
                            var r = Object(u.startOfMonth)(new Date),
                                a = new Date(i, n, 1);
                            return !!Object(u.isBefore)(a, r)
                        }, t.zeroIndexedMonth = function(e) {
                            if (e.expirationMonth) return e.expirationMonth - 1
                        }, t.handleSubmit = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return l.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.hasValidResidence()) return this.setState({
                                                zipCodeError: !0
                                            }), [2];
                                            switch (this.setState({
                                                awaitingResponse: !0,
                                                zipCodeError: !1
                                            }), this.props.savedPaymentMethod.paymentType.toUpperCase()) {
                                                case g.F.AMAZON:
                                                    e = Q.b.RecurlyPayWithAmazon, t = "amazon";
                                                    break;
                                                case g.F.PAYPAL:
                                                    e = Q.b.RecurlyPaypal, t = "paypal";
                                                    break;
                                                default:
                                                    e = Q.b.RecurlyCreditCard, t = "cc"
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
                                            return i.sent(), [2]
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
                            paymentMethodEnabled: this.props.eligibility.status === D.ACTIVE
                        }), e.userCountryOfResidence !== this.props.userCountryOfResidence && this.setState({
                            userCountryOfResidence: this.props.userCountryOfResidence
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.savedPaymentMethod,
                            t = this.isPaymentMethodExpired(e);
                        return d.createElement(d.Fragment, null, d.createElement(C.Eb, {
                            background: C.r.Base,
                            border: !0,
                            borderRadius: C.x.Small,
                            padding: 2
                        }, d.createElement(Ae.a, {
                            paymentType: e.paymentType,
                            cardType: e.cardType,
                            provider: e.provider,
                            lastFour: e.lastFour,
                            expirationYear: e.expirationYear,
                            billingEmail: e.billingEmail,
                            expirationMonth: e.expirationMonth,
                            ignoreDarkMode: !0
                        })), this.props.showEuSubs && d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(Z, {
                            countryCode: this.state.userCountryOfResidence,
                            zipCode: this.state.userZipCode,
                            zipCodeError: this.state.zipCodeError,
                            onChange: this.handleCORChange
                        })), !this.state.paymentMethodEnabled && d.createElement(K, null), d.createElement(C.Xa, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(C.z, {
                            onClick: this.handleSubmit,
                            state: this.state.awaitingResponse ? C.E.Loading : C.E.Default,
                            disabled: this.state.awaitingResponse || t || !this.state.paymentMethodEnabled
                        }, Object(p.d)("Complete Purchase", "SavedMethods"))))
                    }, t
                }(d.Component),
                Le = function() {
                    function e(e) {
                        var t = this;
                        this.recurlyCountries = p.b.get("payments_recurly_countries", ["US"]), this.payPalEuSubsEnabled = p.b.get("paypal_eu_subs", !1), this.getDeterminedTaxCountry = function() {
                            if (t.userBestGuessCountry) return t.userBestGuessCountry;
                            var e = t.savedPaymentMethodBillingCountry;
                            return t.ipCountryCode && e && t.userCountryOfResidence ? t.ipCountryCode === e ? t.ipCountryCode : t.userCountryOfResidence : t.userCountryOfResidence ? t.userCountryOfResidence : t.ipCountryCode
                        }, this.productName = e.productName, this.userCountryOfResidence = e.userCountryOfResidence, this.ipCountryCode = e.ipCountryCode || "", this.userBestGuessCountry = e.userBestGuessCountry, this.savedPaymentMethodBillingCountry = e.savedPaymentMethodBillingCountry, this.savedPaymentMethodPaymentType = e.savedPaymentMethodPaymentType, this.showEuSubs = e.showEuSubs, this.disablePayPal = e.disablePayPal, this.disableAmazonPay = e.disableAmazonPay
                    }
                    return e.prototype.getAvailableMethods = function() {
                        if (!this.showEuSubs) return "owlallaccess2018" === this.productName ? [he.ZuoraCreditCard, he.Xsolla] : "US" !== this.ipCountryCode ? [he.Xsolla] : [he.RecurlyCreditCard, he.RecurlyPaypal, he.RecurlyAmazonPay, he.RecurlySavedPayment, he.Xsolla];
                        var e = [];
                        return this.recurlyCountries.includes(this.getDeterminedTaxCountry()) && "owlallaccess2018" !== this.productName && (this.recurlyCreditCardEligible && e.push(he.RecurlyCreditCard), this.recurlyPaypalEligible && e.push(he.RecurlyPaypal), this.recurlyAmazonPayEligible && e.push(he.RecurlyAmazonPay), this.recurlySavedPaymentEligible && e.push(he.RecurlySavedPayment)), this.xsollaEligible && e.push(he.Xsolla), this.zuoraCreditCardEligible && e.push(he.ZuoraCreditCard), e
                    }, Object.defineProperty(e.prototype, "recurlySavedPaymentEligible", {
                        get: function() {
                            if (this.savedPaymentMethodPaymentType) switch (this.savedPaymentMethodPaymentType.toUpperCase()) {
                                case g.F.AMAZON:
                                    return this.recurlyAmazonPayEligible;
                                case g.F.CREDIT_CARD:
                                    return this.recurlyCreditCardEligible;
                                case g.F.PAYPAL:
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
                Be = n("iWNC");
            var Ue = function(e) {
                var t = Date.now() - e;
                return function() {
                    var n = Date.now();
                    return t + e <= n ? (t = n, "cache-and-network") : "cache-first"
                }
            }(3e3);
            var We, ze = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            useSavedPaymentMethod: !0,
                            eligiblePaymentMethods: []
                        }, t.tracker = new Q.d({
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
                        this.eligibilityComputer = new Le({
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
                            var n = Object.values(he).map(function(e) {
                                return {
                                    type: e,
                                    status: t.includes(e) ? D.ACTIVE : D.HIDDEN
                                }
                            });
                            this.setState({
                                eligiblePaymentMethods: n
                            })
                        } else {
                            n = t.map(function(e) {
                                return {
                                    type: e,
                                    status: D.ACTIVE
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
                            this.eligibilityComputer = new Le({
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
                            var i = this.eligibilityComputer.getAvailableMethods();
                            if (this.props.showEuSubs) {
                                var r = Object.values(he).map(function(e) {
                                    var n = t.eligiblePaymentMethods.find(function(t) {
                                            return t.type === e
                                        }),
                                        r = n && n.status === D.HIDDEN ? D.HIDDEN : D.DISABLED;
                                    return {
                                        type: e,
                                        status: i.includes(e) ? D.ACTIVE : r
                                    }
                                });
                                this.setState({
                                    eligiblePaymentMethods: r
                                })
                            } else {
                                r = i.map(function(e) {
                                    return {
                                        type: e,
                                        status: D.ACTIVE
                                    }
                                });
                                this.setState({
                                    eligiblePaymentMethods: r
                                })
                            }
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.error);
                        else if (!this.dataReady(this.props)) return d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(C.ib, {
                            lineCount: 6
                        }));
                        var e = this.savedPaymentMethodEligibility,
                            t = this.state.eligiblePaymentMethods.filter(function(e) {
                                return e.status !== D.HIDDEN
                            });
                        return d.createElement(d.Fragment, null, this.renderWalletHeader(), this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature && this.savedPaymentMethod && this.props.ipCountryCode && e && d.createElement(Me, {
                            handleCompletePurchase: this.props.handleCompletePurchase,
                            savedPaymentMethod: this.savedPaymentMethod,
                            handleCountryChange: this.props.handleCountryChange,
                            eligibility: e,
                            userCountryOfResidence: this.props.countryOfResidence || this.props.ipCountryCode,
                            userZipCode: this.props.userZipCode,
                            showEuSubs: this.props.showEuSubs
                        }), this.props.configs && t.length > 0 && !(this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature) && this.props.ipCountryCode && d.createElement(C.Xa, {
                            "data-a-target": "PAYMENT_METHOD_SELECTOR"
                        }, d.createElement(Fe, {
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
                        return d.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            margin: {
                                y: 2
                            }
                        }, this.renderWalletTitle(), d.createElement(C.Xa, {
                            padding: {
                                left: 1
                            },
                            display: C.X.Flex,
                            alignItems: C.f.End
                        }, this.renderPaymentMethodToggle()))
                    }, t.prototype.renderWalletTitle = function() {
                        return this.state.useSavedPaymentMethod && this.showSavedPaymentsFeature ? d.createElement(C.W, {
                            type: C.Vb.H4,
                            bold: !0
                        }, Object(p.d)("Saved Payment Method", "Wallet")) : d.createElement(C.W, {
                            type: C.Vb.H4,
                            bold: !0
                        }, Object(p.d)("Choose Your Payment Method", "Wallet"))
                    }, t.prototype.renderPaymentMethodToggle = function() {
                        if (this.showSavedPaymentsFeature) return this.state.useSavedPaymentMethod ? d.createElement(C.U, {
                            onClick: this.toggleChangePaymentMethods,
                            "data-a-target": "js-test-change-payment-method"
                        }, Object(p.d)("Change Payment Method", "Wallet")) : d.createElement(C.Xa, {
                            display: C.X.Flex
                        }, d.createElement(C.sb, {
                            asset: C.tb.AngleLeft,
                            width: 10,
                            height: 10,
                            type: C.ub.Brand
                        }), d.createElement(C.Xa, {
                            margin: {
                                left: 1
                            }
                        }, d.createElement(C.U, {
                            onClick: this.toggleChangePaymentMethods,
                            "data-a-target": "js-test-use-existing-payment-method"
                        }, Object(p.d)("Use Existing Payment Method", "Wallet"))))
                    }, Object.defineProperty(t.prototype, "isLargePurchase", {
                        get: function() {
                            if (!this.props.product) return !1;
                            var e = this.props.product.product.priceInfo,
                                t = this.props.product.quantity;
                            return e.total * t > 5e4
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showSavedPaymentsFeature", {
                        get: function() {
                            if (this.props.data && this.props.data.error) return !1;
                            if (!this.savedPaymentMethodEligibility || this.savedPaymentMethodEligibility.status === D.HIDDEN) return !1;
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
                                return e.type === he.RecurlySavedPayment
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "savedPaymentMethod", {
                        get: function() {
                            var e = (this.props.data && this.props.data.currentUser && this.props.data.currentUser.paymentMethods || []).filter(function(e) {
                                return e.provider.toUpperCase() === g.G.RECURLY
                            })[0];
                            return e ? e.paymentType.toUpperCase() === g.F.PAYPAL && this.disablePayPal ? null : e.paymentType.toUpperCase() === g.F.AMAZON && this.disableAmazonPay ? null : e : null
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
                Xe = Object(V.compose)(Object(J.b)("Wallet"), Object(h.a)(Be, {
                    options: function() {
                        return {
                            fetchPolicy: Ue()
                        }
                    }
                }))(ze),
                Ge = n("T3lN");
            ! function(e) {
                e.ELIGIBLE_PURCHASE = "ELIGIBLE_PURCHASE", e.INELIGIBLE_PURCHASE = "INELIGIBLE_PURCHASE"
            }(We || (We = {}));
            var He = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            progress: x.a.NOT_STARTED,
                            showErrors: !1,
                            userBestGuessCountry: null
                        }, t.enablePaidUpgradeFlag = p.b.get("earth_wind_fire", !1), t.paidUpgradePromotionStartDate = p.b.get("earth_wind_fire_start", "2018-09-10T00:00:00Z"), t.paidUpgradePromotionEndDate = p.b.get("earth_wind_fire_end", "2018-11-02T59:59:59Z"), t.recurlyTaxEnabled = p.b.get("recurly_tax_enabled", "false"), t.trackPaymentFormInteraction = function(e) {
                            if (t.props.data.subscriptionProduct) {
                                var n = t.props.isGift ? Q.e.Gifting : Q.e.Personal;
                                t.props.mysteryGiftCount && (n = Q.e.MysteryGifting);
                                var i = {
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
                                    trackingContext: t.props.trackingContext
                                };
                                Object(Q.g)(i)
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
                                var t, n, i, r;
                                return l.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = this.props.data.subscriptionProduct, n = {
                                                payment_provider: e.payment_provider,
                                                payment_info: l.__assign({}, e.payment_info),
                                                is_gift: this.props.isGift,
                                                mystery_gift_count: this.props.mysteryGiftCount,
                                                recipient_id: this.props.recipientID,
                                                ip_country_code: this.props.data.requestInfo.countryCode,
                                                price_info: {
                                                    id: t && t.priceInfo && t.priceInfo.id,
                                                    currency: t && t.priceInfo && t.priceInfo.currency
                                                },
                                                residence: e.residence,
                                                device_id: p.p.session.deviceID,
                                                tab_session_id: p.p.session.tabID
                                            }, this.setState({
                                                showErrors: !1
                                            }), i = "/kraken/checkout/users/" + (this.props.data.currentUser && this.props.data.currentUser.id) + "/products/" + this.props.productName + "/purchase/complete", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, y.a.post(i, {
                                                body: n
                                            }, {
                                                version: 5
                                            })];
                                        case 2:
                                            return (r = a.sent()).error || r.body && r.body.error ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Failed,
                                                savedPayment: e.savedPayment
                                            }), r.body && "UNSUPPORTED_COUNTRY" === r.body.error && r.body.error_details && r.body.error_details.country ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.UnsupportedCountryAlert,
                                                actionDetail: r.body.error_details.country,
                                                savedPayment: e.savedPayment
                                            }), this.handleCountryChange(r.body.error_details.country)) : r.body && "INVALID_RESIDENCE" === r.body.error ? this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.InvalidResidence,
                                                    level: E.Error
                                                }
                                            }) : r.body && "PRICE_INFO_INVALID" === r.body.error && r.body.error_details && r.body.error_details.country ? (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.PriceChangeAlert,
                                                actionDetail: r.body.error_details.country,
                                                savedPayment: e.savedPayment
                                            }), this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.PriceChangeNotice,
                                                    level: E.Info
                                                }
                                            }), this.handleCountryChange(r.body.error_details.country)) : r.body && "INVALID_PAYMENT_METHOD" === r.body.error ? this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.InvalidPaymentMethod,
                                                    level: E.Error
                                                }
                                            }) : this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.DefaultMessage,
                                                    level: E.Error
                                                }
                                            }), e.errorCallback && e.errorCallback(), [2]) : (this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Success,
                                                savedPayment: e.savedPayment
                                            }), this.props.data.refetch(), this.setState({
                                                purchaseResponse: r.body,
                                                progress: x.a.CONFIRMATION
                                            }), [3, 4]);
                                        case 3:
                                            return a.sent(), this.setState({
                                                showErrors: !0,
                                                errors: {
                                                    code: v.DefaultMessage,
                                                    level: E.Error
                                                }
                                            }), e.errorCallback && e.errorCallback(), this.trackPaymentFormInteraction({
                                                paymentFlow: e.payment_flow,
                                                action: Q.a.CompletePurchaseClick,
                                                actionDetail: Q.f.Failed,
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
                        this.props.data.loading && !this.props.data.error || (this.props.latencyTracking.reportInteractive(), this.state.progress < x.a.CONFIRMATION && this.productAlreadyOwned && !this.props.isGift && this.setState({
                            progress: x.a.CONFIRMATION
                        }))
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (this.props.latencyTracking.reportInteractive(), this.state.progress < x.a.CONFIRMATION && this.productAlreadyOwned && !this.props.isGift && this.setState({
                            progress: x.a.CONFIRMATION
                        })), this.state.progress !== t.progress && this.props.onCheckoutProgress && this.props.onCheckoutProgress(this.state.progress)
                    }, t.prototype.render = function() {
                        if (this.props.data.error) return d.createElement(m.a, null);
                        if (this.productEligibility === I.MOBILE_UPGRADE) {
                            var e = this.shoppingCartItem,
                                t = e && e.product && e.product.owner && e.product.owner.displayName;
                            return d.createElement(m.a, null, d.createElement(C.W, {
                                bold: !0
                            }, Object(p.d)("You purchased a subscription to {productDisplayName} on your mobile device.", {
                                productDisplayName: t || this.props.productName
                            }, "CheckoutPayments")), d.createElement(C.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, d.createElement(C.W, null, Object(p.d)("Upgrading your mobile subscription is currently not supported.", "CheckoutPayments"))))
                        }
                        if (this.state.progress === x.a.CONFIRMATION) {
                            var n = d.createElement(w, {
                                product: this.shoppingCartItem,
                                purchaseFlow: this.purchaseFlow,
                                progress: this.state.progress
                            });
                            return d.createElement(_, {
                                productDescription: this.renderTicketDescription(),
                                header: n
                            }, this.purchaseInvoice && d.createElement(G, {
                                currentUser: this.props.data.currentUser,
                                purchaseFlow: this.purchaseFlow,
                                product: this.shoppingCartItem,
                                purchaseInvoice: this.purchaseInvoice && this.purchaseInvoice,
                                sessionUser: this.props.sessionUser,
                                benefit: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.benefit
                            }))
                        }
                        var i = d.createElement(w, {
                                product: this.shoppingCartItem,
                                purchaseFlow: this.purchaseFlow,
                                progress: this.state.progress
                            }),
                            r = this.shoppingCartItem && this.shoppingCartItem.product.owner && this.shoppingCartItem.product.owner.displayName,
                            a = "/" + (r || "");
                        return d.createElement(_, {
                            productDescription: this.renderTicketDescription(),
                            header: i
                        }, !this.dataReady && d.createElement(C.Xa, {
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center,
                            alignItems: C.f.Center
                        }, d.createElement(C.ib, {
                            lineCount: 20
                        })), d.createElement(C.Xa, {
                            display: this.dataReady ? C.X.Block : C.X.Hide
                        }, d.createElement(C.Xa, {
                            display: T(this.productEligibility) ? C.X.Hide : C.X.Block,
                            "data-test-selector": We.INELIGIBLE_PURCHASE
                        }, d.createElement(R, {
                            product: this.shoppingCartItem,
                            existingPurchases: this.existingPurchases,
                            productEligibility: this.productEligibility,
                            sessionUser: this.props.sessionUser
                        }), d.createElement(C.Xa, {
                            margin: {
                                top: 2
                            }
                        }, d.createElement(C.z, {
                            linkTo: a
                        }, Object(p.d)("Go back to {channel}", {
                            channel: r || "Twitch"
                        }, "CheckoutPayments")))), d.createElement(C.Xa, {
                            display: T(this.productEligibility) ? C.X.Block : C.X.Hide,
                            "data-test-selector": We.ELIGIBLE_PURCHASE
                        }, d.createElement(k, {
                            purchaseFlow: this.purchaseFlow,
                            product: this.shoppingCartItem
                        }), d.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(A, {
                            purchaseFlow: this.purchaseFlow,
                            product: this.shoppingCartItem,
                            existingPurchases: this.existingPurchases,
                            productEligibility: this.productEligibility,
                            benefit: this.props.data.subscriptionProduct && this.props.data.subscriptionProduct.self && this.props.data.subscriptionProduct.self.benefit,
                            eligiblePromotions: this.eligiblePromotions,
                            sessionUser: this.props.sessionUser
                        })), this.state.showErrors && this.state.errors && d.createElement(C.Xa, {
                            margin: {
                                y: 2
                            }
                        }, d.createElement(S, {
                            errorCode: this.state.errors.code,
                            level: this.state.errors.level
                        })), d.createElement(Xe, {
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
                        }), d.createElement(N, null))))
                    }, t.prototype.renderTicketDescription = function() {
                        return this.productEligibility === I.MOBILE_UPGRADE || this.DEPRECRATE_hasActiveMobileSub ? null : d.createElement(H.a, {
                            productName: this.props.productName,
                            isGift: this.props.isGift && this.canGift,
                            showPaidUpgrade: this.enablePaidUpgrade,
                            priceCountry: this.state.userBestGuessCountry,
                            invoicePrice: null,
                            showEuSubs: this.showEuSubs
                        })
                    }, Object.defineProperty(t.prototype, "purchaseFlow", {
                        get: function() {
                            return this.props.isGift ? this.props.mysteryGiftCount && this.props.mysteryGiftCount > 0 ? i.MYSTERY_GIFT : i.GIFT_SUB : i.PERSONAL_SUB
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
                            if (!this.canPurchase) return I.API_INELIGIBLE;
                            if (!this.shoppingCartItem) return I.NO_ITEM;
                            if (this.purchaseFlow === i.GIFT_SUB) return this.canGift ? I.GIFTABLE_RECIPIENT : I.NON_GIFTABLE_RECIPIENT;
                            if (this.purchaseFlow === i.MYSTERY_GIFT) return this.canGift ? I.GIFTABLE_RECIPIENT : I.NO_MASS_GIFTING;
                            var t = this.existingPurchases && this.existingPurchases.compatiblePurchases;
                            if (t) {
                                var n = t.find(function(e) {
                                        return e.paymentProvider.toUpperCase() === g.G.PRIME
                                    }),
                                    r = t.find(function(t) {
                                        return t.productType.toUpperCase() === g.V.CHANSUB && !!t.productTier && parseInt(e.shoppingCartItem.product.tier, 10) < parseInt(t.productTier, 10)
                                    }),
                                    a = t.find(function(t) {
                                        return t.productType.toUpperCase() === g.V.CHANSUB && !!t.productTier && parseInt(e.shoppingCartItem.product.tier, 10) > parseInt(t.productTier, 10)
                                    }),
                                    o = t.find(function(e) {
                                        return e.paymentProvider.toUpperCase() === g.G.GOOGLE_IAB
                                    });
                                if (n) return I.PRIME_UPGRADE;
                                if (r) return I.TIER_DOWNGRADE;
                                if (a) return o ? I.MOBILE_UPGRADE : I.TIER_UPGRADE
                            }
                            return !this.existingPurchases || this.existingPurchases && !this.existingPurchases.details && !this.existingPurchases.compatiblePurchases || this.existingPurchases.details && this.existingPurchases.details.state === g.W.INACTIVE ? I.NEW_PURCHASE : I.UNKNOWN
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
                            return !(!e || !e.details || e.details.paymentProvider.toUpperCase() !== g.G.GOOGLE_IAB)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "enablePaidUpgrade", {
                        get: function() {
                            if (!this.enablePaidUpgradeFlag) return !1;
                            if (!this.props.data.subscriptionProduct || !this.props.data.subscriptionProduct.self) return !1;
                            var e = this.props.data.subscriptionProduct.self.benefit && this.props.data.subscriptionProduct.self.benefit.paidUpgrade && this.props.data.subscriptionProduct.self.benefit.paidUpgrade.startsAt,
                                t = !!(this.props.data.subscriptionProduct.self.benefit && this.props.data.subscriptionProduct.self.benefit.gift && this.props.data.subscriptionProduct.self.benefit.gift.isGift);
                            return !!(e && Object(u.isWithinRange)(Object(f.c)(e), Object(f.c)(this.paidUpgradePromotionStartDate), Object(f.c)(this.paidUpgradePromotionEndDate)) || this.productEligibility === I.NEW_PURCHASE && t && this.eligiblePromotions.paidUpgradePromotion)
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
                Ve = Object(a.compose)(Object(h.a)(Ge, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                productName: e.productName,
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
                }), Object(J.b)("CheckoutPayments"))(He);
            var qe = Object(r.connect)(function(e) {
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
            })(Ve);
            n.d(t, "a", function() {
                return qe
            })
        },
        SPyc: function(e, t, n) {
            e.exports = n.p + "assets/discover-d67f6b00db816208999c.svg"
        },
        Sa1T: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = {};

                function n(n) {
                    var i = e.get(n);
                    return void 0 === i ? [] : t[i] || []
                }
                return {
                    get: n,
                    add: function(n, i) {
                        var r = e.get(n);
                        t[r] || (t[r] = []), t[r].push(i)
                    },
                    removeListener: function(e, t) {
                        for (var i = n(e), r = 0, a = i.length; r < a; ++r)
                            if (i[r] === t) {
                                i.splice(r, 1);
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
                    end: 1370
                }
            };
            n.loc.source = {
                body: "query CheckoutPayments($productName: String! $includePromotion: Boolean! $isGift: Boolean! $recipientID: ID $mysteryGiftCount: Int $taxCountry: String) {\ncurrentUser {\nid\ndisplayName\nresidence {\ncountryCode\npostalCode\n}\n}\nsubscriptionProduct(productName: $productName) {\nid\nname\npriceInfo(taxCountry: $taxCountry) {\ncurrency\nexponent\nid\nisTaxInclusive\nprice\ntax\ntotal\n}\ninterval {\nunit\n}\ntier\ntype\nowner {\nid\ndisplayName\nlogin\n}\nself {\ncheckoutConfigs (isGift: $isGift recipientID: $recipientID mysteryGiftCount: $mysteryGiftCount taxCountryCode: $taxCountry) {\ncanGift\ncanPurchase\nisOneMonthFreeEligible\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\ndivisor\nstate\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\nproductType\nproductTier\ndivisor\n}\n}\nbenefit {\nid\ntier\npaidUpgrade {\nstartsAt\n}\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion @include(if: $includePromotion) {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\npaidUpgradePromotion @include(if: $includePromotion) {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
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
            var i = n("mrSG"),
                r = n("NAv5"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = n("5gJ6"),
                l = (n("KjOM"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(s.Eb, {
                            className: this.isExpired ? "payment-method-display--expired" : "",
                            display: s.X.Flex,
                            justifyContent: this.props.justifyContent || s.Wa.Between,
                            flexWrap: s.Ba.Wrap,
                            fullWidth: !0
                        }, a.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(c.a, {
                            paymentInstrumentType: this.props.paymentType,
                            cardType: this.props.cardType || void 0,
                            paymentProvider: this.props.provider,
                            ignoreDarkMode: this.props.ignoreDarkMode
                        }), this.renderLastFour()), a.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            flexDirection: s.Aa.Column
                        }, this.renderBillingEmail(), this.renderExpirationDate()))
                    }, t.prototype.renderLastFour = function() {
                        return this.props.lastFour ? a.createElement(s.Xa, {
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
                            i = "";
                        return i = this.isExpired ? Object(o.d)("Expired {expirationDate}", {
                            expirationDate: Object(o.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay") : Object(o.d)("Expires {expirationDate}", {
                            expirationDate: Object(o.c)(n, {
                                month: "2-digit",
                                year: "numeric"
                            })
                        }, "PaymentMethodDisplay"), a.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Wa.End
                        }, a.createElement(s.W, {
                            ellipsis: !0,
                            color: s.O.Alt2,
                            bold: this.isExpired
                        }, i))
                    }, t.prototype.renderBillingEmail = function() {
                        return this.props.billingEmail ? a.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Wa.End
                        }, a.createElement(s.W, {
                            ellipsis: !0,
                            color: s.O.Alt2
                        }, this.props.billingEmail)) : null
                    }, Object.defineProperty(t.prototype, "isExpired", {
                        get: function() {
                            var e = this.zeroIndexedMonth,
                                t = this.props.expirationYear;
                            if (void 0 === e || !t) return !1;
                            var n = Object(r.startOfMonth)(new Date),
                                i = new Date(t, e, 1);
                            return !!Object(r.isBefore)(i, n)
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
            var i = n("mrSG"),
                r = n("/MKj"),
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
                g = n("eJ65"),
                y = n("edgk"),
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
                R = "test_selector_cancel_button",
                j = function(e) {
                    var t = Object(I.a)(),
                        n = Object(f.d)("Confirm", "BitsConfrimationDialogue"),
                        i = Object(f.d)("Settings", "BitsConfrimationDialogue"),
                        r = m.createElement(_.U, {
                            to: "https://www.twitch.tv/settings/connections"
                        }, i),
                        a = m.createElement(_.Pa, {
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
                            Settings: r
                        }, "BitsConfrimationDialogue");
                    return m.createElement(_.Xa, {
                        className: "bits-confirmation-dialog"
                    }, m.createElement(_.Xa, {
                        padding: 1
                    }, m.createElement(_.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: _.X.Flex,
                        justifyContent: _.Wa.Between
                    }, m.createElement(_.Xa, null, m.createElement(_.W, {
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
                    }))), m.createElement(_.Xa, {
                        display: _.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(_.Pa, {
                        display: _.X.Flex
                    }, m.createElement(_.W, null, o))), m.createElement(_.Xa, {
                        display: _.X.Inline
                    }, m.createElement(_.Xa, {
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
                    }, n)), m.createElement(_.Xa, {
                        display: _.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": D,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: _.F.Hollow
                    }, e.buyBitsText)), m.createElement(_.Xa, {
                        display: _.X.InlineBlock
                    }, m.createElement(_.z, {
                        "data-test-selector": R,
                        onClick: e.onClose,
                        type: _.F.Hollow
                    }, e.cancelText)))), m.createElement(_.Eb, {
                        borderTop: !0,
                        padding: 1
                    }, m.createElement(_.W, {
                        "data-test-selector": N
                    }, s)))
                },
                F = "test_selector_buy_bits_button",
                A = "test_selector_cancel_button",
                M = Object(I.a)(),
                L = function(e) {
                    var t, n = e.bitsBalance - e.cost,
                        i = Math.abs(n),
                        r = m.createElement(_.Pa, {
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
                            amount: i,
                            alignItems: _.f.Center,
                            formattedNumber: !0
                        })));
                    return t = m.createElement(_.Pa, {
                        display: _.X.Flex
                    }, m.createElement(_.W, null, Object(f.d)("You need {BitsRequired} more Bits to proceed.", {
                        BitsRequired: r
                    }, "BitsUpsellDialog"))), m.createElement(_.Xa, {
                        className: "bits-upsell-dialog",
                        padding: 1
                    }, m.createElement(_.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: _.X.Flex,
                        justifyContent: _.Wa.Between
                    }, m.createElement(_.Xa, null, m.createElement(_.W, {
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
                    }))), m.createElement(_.Xa, {
                        display: _.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, t), m.createElement(_.Xa, {
                        display: _.X.Inline
                    }, m.createElement(_.Xa, {
                        display: _.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": F,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: _.F.Default
                    }, e.buyBitsText)), m.createElement(_.Xa, {
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
                        i = null;
                    if (e)
                        if (e.bitsBalance >= e.cost) {
                            var r = e.bitsBalance - e.cost;
                            i = m.createElement(j, {
                                cost: e.cost,
                                extensionName: e.extensionName,
                                extensionItemLabel: e.extensionItemLabel,
                                newBalance: r,
                                bitsBalance: e.bitsBalance,
                                bitsLandingPageUrl: "https://twitch.tv/bits",
                                buyBitsText: t,
                                cancelText: n,
                                onConfirm: e.onConfirm,
                                onClose: e.onClose,
                                userID: e.userID
                            })
                        } else i = m.createElement(L, {
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
                    return m.createElement(_.Xa, {
                        className: "use-bits-dialog"
                    }, i)
                },
                U = "test_selectors_close_button",
                W = function(e) {
                    var t = Object(f.d)("Sorry, something went wrong. Please try again.", "UseBitsErrorDialog"),
                        n = Object(f.d)("Close", "UseBitsErrorDialog");
                    return m.createElement(_.Xa, {
                        className: "use-bits-error-dialog",
                        padding: 1
                    }, m.createElement(_.Pa, {
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
                X = n("22qk"),
                G = n("5IFo"),
                H = n("JVUd"),
                V = n("0HeA"),
                q = n("yR8l"),
                Y = n("eDVu"),
                Z = n("VeT4"),
                K = (n("NAeX"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || !this.props.data.currentUser) return null;
                        var e = this.props.showSuccessText ? m.createElement(_.W, {
                                type: _.Vb.Span,
                                className: "extension-bits-balance-success"
                            }, Object(f.d)("Success!", "ExtensionPanelBitsBalanceDialog")) : null,
                            t = m.createElement(Z.a, {
                                withImage: !0,
                                withText: !0,
                                animated: !1,
                                count: this.props.data.currentUser.bitsBalance || 0,
                                bitsConfig: Object(I.a)()
                            });
                        return m.createElement(_.Xa, {
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
                Q = Object(h.compose)(Object(Y.a)(function(e) {
                    return function(e, t, n) {
                        return {
                            topic: n ? Object(P.B)(n) : "",
                            type: C.PubsubMessageType.UserBitsBalanceUpdate,
                            mutator: function(e, t) {
                                return t && e.message_type === S.b.Balance ? (t.currentUser && e.data && (t.currentUser.bitsBalance = e.data.balance), t) : t
                            },
                            skip: !t || !n,
                            query: e
                        }
                    }(w, e.channelID, e.userID)
                }), Object(q.a)(w))(K);
            ! function(e) {
                e.ExtensionName = "extension_name_selector", e.ShowExtensionButton = "show_extension_button_selector"
            }(O || (O = {}));
            var J = function(e) {
                var t = e.extension.views.panel ? e.extension.views.panel.height : 300;
                return m.createElement(_.Qa, {
                    alignItems: _.f.Center,
                    background: _.r.Alt2,
                    borderLeft: !0,
                    borderTop: !0,
                    borderRight: !0,
                    display: _.X.Flex,
                    flexDirection: _.Aa.Column,
                    fullWidth: !0,
                    justifyContent: _.Wa.Center,
                    color: _.O.Base,
                    position: _.jb.Relative
                }, m.createElement("div", {
                    style: {
                        height: t
                    }
                }, m.createElement("img", {
                    src: e.extension.iconUrl
                }), m.createElement(_.Xa, {
                    margin: 1,
                    textAlign: _.Rb.Center
                }, m.createElement(_.W, {
                    fontSize: _.Ca.Size5
                }, Object(f.d)("{name} is popped out.", {
                    name: m.createElement(_.W, {
                        "data-test-selector": O.ExtensionName,
                        type: _.Vb.Span,
                        bold: !0
                    }, e.extension.name)
                }, "ExtensionPopoutPlaceholder"))), m.createElement(_.z, {
                    "data-test-selector": O.ShowExtensionButton,
                    onClick: e.onExtensionShowClicked
                }, Object(f.d)("Show Extension", "ExtensionPopoutPlaceholder"))))
            };
            J.displayName = "ExtensionPopoutPlaceholder";
            var $, ee = function(e) {
                    return m.createElement(_.Xa, {
                        padding: 1
                    }, m.createElement(_.Xa, null, m.createElement("span", null, Object(f.d)("You must be logged in to use this extension feature.", "FeatureNeedsAuthDialog")), m.createElement(_.Eb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Xa, {
                        display: _.X.Flex,
                        justifyContent: _.Wa.Start
                    }, m.createElement(_.z, {
                        "data-test-selector": "qa-needs-auth-close-selector",
                        type: _.F.Hollow,
                        onClick: e.close
                    }, Object(f.d)("Close", "FeatureNeedsAuthDialog")))))
                },
                te = function(e) {
                    var t = function(t) {
                        return m.createElement(_.Xa, null, m.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, t), m.createElement(_.Eb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Start
                        }, m.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Close", "FollowDialog"))))
                    };
                    if (null === e.currentFollowRequest.options.channel) return m.createElement(_.Xa, {
                        padding: 1
                    }, t(Object(f.d)("The channel you are attempting to follow does not exist.", "FollowDialog")));
                    var n = Object(f.d)("You are about to follow {name}.", {
                            name: m.createElement(_.W, {
                                type: _.Vb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        i = Object(f.d)("Receive updates on {name}'s activity, including when they go live and upload videos or clips, on mobile, email, and web.", {
                            name: e.currentFollowRequest.options.channel
                        }, "FollowDialog"),
                        r = m.createElement(_.Xa, null, m.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, n), m.createElement(_.Eb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Start
                        }, m.createElement(_.Xa, {
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
                        }, Object(f.d)("Cancel", "FollowDialog"))), m.createElement(_.Eb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), m.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Start
                        }, m.createElement(_.Xa, {
                            flexGrow: 1
                        }, m.createElement(_.W, {
                            type: _.Vb.Span,
                            fontSize: _.Ca.Size5
                        }, Object(f.d)("Notifications", "FollowDialog"))), m.createElement(_.Xb, {
                            id: "ext-follow-notification",
                            checked: e.currentFollowRequest.notifications,
                            onChange: e.onNotificationsChanged
                        })), m.createElement(_.W, {
                            type: _.Vb.Span,
                            color: _.O.Alt2,
                            fontSize: _.Ca.Size7
                        }, i)),
                        a = Object(f.d)("You are already following {name}.", {
                            name: m.createElement(_.W, {
                                type: _.Vb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        o = e.currentFollowRequest.options.isFollowing ? t(a) : r;
                    return m.createElement(_.Xa, {
                        padding: 1
                    }, o)
                };
            ! function(e) {
                e.ManagePermissionsLink = "manage_permissions_link_selector", e.ToggleIdentityBalloon = "toggle_identity_balloon_selector", e.ToggleIdentityButton = "toggle_identity_button_selector"
            }($ || ($ = {}));
            var ne, ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGrantPermissionsButton = function() {
                        var e = Object(f.d)("Grant Permissions", "ExtensionPanel");
                        return m.createElement(_.Yb, {
                            label: e,
                            direction: _.ac.Top,
                            align: _.Zb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            ariaLabel: e,
                            icon: _.tb.PermissionsAdd
                        })))
                    }, t.renderRevokePermissionsButton = function() {
                        var e = Object(f.d)("Revoke Permissions", "ExtensionPanel");
                        return m.createElement(_.Yb, {
                            label: e,
                            direction: _.ac.Top,
                            align: _.Zb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            ariaLabel: e,
                            icon: _.tb.PermissionsAdded,
                            statusAlertIcon: _.tb.PermissionsRemove
                        })))
                    }, t.saveGrantPermissionsBalloonRef = function(e) {
                        t.grantPermissionsBalloon = e
                    }, t.onCancelIdentityLink = function() {
                        t.grantPermissionsBalloon.toggleBalloon(!1)
                    }, t.toggleIdentity = function() {
                        t.props.isLinked ? t.props.onUnlinkIdentity && t.props.onUnlinkIdentity() : t.props.onLinkIdentity && t.props.onLinkIdentity(), t.grantPermissionsBalloon.toggleBalloon(!1)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.grantPermissionsBalloon && this.grantPermissionsBalloon.toggleBalloon(this.props.isDialogOpen)
                }, t.prototype.componentDidUpdate = function(e) {
                    e.isDialogOpen !== this.props.isDialogOpen && this.grantPermissionsBalloon && this.grantPermissionsBalloon.toggleBalloon(this.props.isDialogOpen)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.isLinked;
                    if (!e.isLinkEnabled) return null;
                    var n = t ? this.renderRevokePermissionsButton() : this.renderGrantPermissionsButton(),
                        i = Object(f.d)("You are granting {name} the following access:", {
                            name: m.createElement(_.W, {
                                type: _.Vb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel"),
                        r = Object(f.d)("You are revoking the following access for {name}:", {
                            name: m.createElement(_.W, {
                                type: _.Vb.Strong
                            }, this.props.extension.name)
                        }, "Extension Panel");
                    return m.createElement(g.a, {
                        display: _.X.InlineFlex,
                        ref: this.saveGrantPermissionsBalloonRef,
                        onToggle: this.props.onDialogToggle
                    }, m.createElement("span", {
                        "data-test-selector": $.ToggleIdentityBalloon
                    }, n), m.createElement(_.u, {
                        direction: _.v.TopRight,
                        size: _.w.Small
                    }, m.createElement(_.Xa, {
                        padding: 1
                    }, m.createElement(_.Xa, null, t ? r : i), m.createElement(_.Eb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Xa, null, m.createElement(_.W, {
                        type: _.Vb.P,
                        bold: !0
                    }, Object(f.d)("Your Twitch User ID", "Extension Panel")), m.createElement(_.W, {
                        type: _.Vb.P
                    }, Object(f.d)("Allows this extension to know your User ID on Twitch.", "Extension Panel")), m.createElement("a", {
                        "data-test-selector": $.ManagePermissionsLink,
                        href: "https://twitch.tv/settings/connections",
                        target: "_blank"
                    }, Object(f.d)("Manage Permissions", "Extension Panel"))), m.createElement(_.Eb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Xa, {
                        display: _.X.Flex,
                        justifyContent: _.Wa.Center
                    }, m.createElement(_.Xa, {
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
            var re, ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(f.d)("Pop Out Extension", "PopoutButton");
                        return m.createElement("span", null, m.createElement(_.Yb, {
                            label: e,
                            direction: _.ac.Top,
                            align: _.Zb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            "data-test-selector": ne.PopoutButton,
                            onClick: this.onClick,
                            ariaLabel: e,
                            icon: _.tb.Popout
                        }))))
                    }, t
                }(m.Component),
                oe = function(e) {
                    var t, n = e.cancel,
                        i = e.confirm,
                        r = e.isLoggedIn,
                        a = e.isLinked,
                        o = e.isLinkEnabled,
                        s = e.purchaseIntentPayload;
                    return t = r ? m.createElement(_.Xa, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, m.createElement(_.Xa, {
                        padding: {
                            bottom: 2
                        }
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size5,
                        bold: !0
                    }, Object(f.d)("In-Extension Purchase", "PurchaseConfirmation"))), m.createElement(_.Xa, null, m.createElement(_.Ja, {
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
                    }, m.createElement(_.Xa, {
                        fullWidth: !0,
                        textAlign: _.Rb.Right
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size6,
                        bold: !0
                    }, s.displayPrice))))), m.createElement(_.Xa, {
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(_.W, {
                        color: _.O.Alt2
                    }, Object(f.d)("{name} extension", {
                        name: s.extensionName
                    }, "PurchaseConfirmation"))), m.createElement(_.Xa, {
                        fullWidth: !0
                    }, m.createElement(_.W, {
                        className: "t-extension-panel__description",
                        color: _.O.Alt2
                    }, s.description), m.createElement(_.Eb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), m.createElement(_.Xa, null, m.createElement(_.Ja, {
                        gutterSize: _.Ka.Default
                    }, m.createElement(_.P, {
                        cols: {
                            default: 4
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": "purchase_ui_buy_selector",
                        onClick: i,
                        fullWidth: !0
                    }, Object(f.d)("Buy", "PurchaseConfirmation"))), m.createElement(_.P, {
                        cols: {
                            default: 3
                        }
                    }, m.createElement(_.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: _.F.Hollow
                    }, Object(f.d)("Cancel", "PurchaseConfirmation")))), !a && m.createElement(_.Xa, null, m.createElement(_.Eb, {
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
                    }, Object(f.d)("Settings", "PurchaseConfirmation")), "."))))) : m.createElement(_.Xa, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, m.createElement(_.Xa, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_.W, {
                        fontSize: _.Ca.Size5
                    }, Object(f.d)("You must be logged in to use this extension feature.", "PurchaseConfirmation"))), m.createElement(_.Eb, {
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
                    }, m.createElement(_.sb, {
                        asset: _.tb.Close,
                        height: 11,
                        width: 11
                    })), m.createElement(_.Xa, {
                        display: _.X.Flex,
                        flexGrow: 1,
                        flexDirection: _.Aa.Column,
                        justifyContent: _.Wa.Center,
                        alignItems: _.f.Center
                    }, t))
                };
            (re || (re = {})).RestoreDefaultSizeButton = "restore-default-size-button";
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
                            i = e !== t.defaultPopoutWidth || n !== t.defaultPopoutHeight;
                        t.setState({
                            isRestoreDefaultSizeVisible: i
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize)
                }, t.prototype.render = function() {
                    if (!this.props.isPopout || !this.state.isRestoreDefaultSizeVisible) return null;
                    var e = Object(f.d)("Resize to Default", "RestoreDefaultSizeButton");
                    return m.createElement("span", null, m.createElement(_.Yb, {
                        label: e,
                        direction: _.ac.Top,
                        align: _.Zb.Right,
                        offsetX: ".6rem"
                    }, m.createElement(_.Xa, {
                        display: _.X.Flex,
                        alignItems: _.f.Center
                    }, m.createElement(_.A, {
                        "data-test-selector": re.RestoreDefaultSizeButton,
                        onClick: this.onClick,
                        ariaLabel: e,
                        icon: _.tb.FullscreenExit
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return e = this.state.declined ? m.createElement(m.Fragment, null, m.createElement(_.W, {
                        type: _.Vb.P,
                        "data-test-selector": se.DeclinedMessage
                    }, Object(f.d)("You’ve declined to use this test extension. To use it, please refresh this page and select accept.", "TestExtensionDialog")), m.createElement(_.Xa, {
                        padding: {
                            top: 2
                        },
                        display: _.X.Flex,
                        justifyContent: _.Wa.Center
                    }, m.createElement(_.z, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        type: _.F.Hollow
                    }, Object(f.d)("Learn More", "TestExtensionDialog")))) : m.createElement(m.Fragment, null, m.createElement(_.W, {
                        type: _.Vb.P,
                        "data-test-selector": se.WarningMessage
                    }, Object(f.d)("This is a Test Extension that Twitch has not evaluated; it may not be ready for primetime. Proceed only if you are familiar with the developer, the Extension, or Channel.", "TestExtensionDialog"), m.createElement(_.Pa, {
                        padding: {
                            left: .5
                        }
                    }, m.createElement(_.U, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                    }, Object(f.d)("Learn More.", "TestExtensionDialog")))), m.createElement(_.Xa, {
                        padding: {
                            top: 2
                        },
                        display: _.X.Flex,
                        justifyContent: _.Wa.Center
                    }, m.createElement(_.z, {
                        onClick: this.onDeclined,
                        type: _.F.Hollow,
                        "data-test-selector": se.DeclineButton
                    }, Object(f.d)("Decline", "TestExtensionDialog")), m.createElement(_.Xa, {
                        padding: {
                            left: 1
                        }
                    }, m.createElement(_.z, {
                        onClick: this.props.onAccepted,
                        "data-test-selector": se.AcceptButton
                    }, Object(f.d)("Accept", "TestExtensionDialog"))))), m.createElement(_.o, {
                        ratio: _.p.Aspect3x4
                    }, m.createElement(_.Eb, {
                        alignItems: _.f.Center,
                        border: !0,
                        display: _.X.Flex,
                        justifyContent: _.Wa.Center,
                        padding: 2
                    }, m.createElement(_.Xa, null, m.createElement(_.W, {
                        type: _.Vb.Strong
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
                            return t.extension.state === p.ExtensionState.Released || t.state.testExtensionAccepted ? m.createElement(_.Xa, null, m.createElement(_.Eb, {
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
                            })), m.createElement(_.Xa, {
                                position: _.jb.Relative,
                                fullWidth: !0
                            }, t.purchaseUI())) : m.createElement(ue, {
                                extensionName: t.extension.name,
                                onAccepted: t.onTestExtensionAccepted
                            })
                        }, t.renderFollowConfirmation = function() {
                            return null === t.state.currentFollowRequest ? null : m.createElement(g.a, {
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
                            return m.createElement(g.a, {
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
                                    i = n.bitsBalance,
                                    r = n.extensionItemLabel,
                                    a = n.extensionName,
                                    o = t.state.currentUseBitsRequest.options.payload.bitsRequired;
                                void 0 === o && (o = 0), e = m.createElement(B, {
                                    bitsBalance: i,
                                    cost: o,
                                    extensionItemLabel: r,
                                    extensionName: a,
                                    userID: t.props.loginID,
                                    onClose: t.cancelUseBits,
                                    onConfirm: t.confirmUseBits
                                })
                            }
                            return m.createElement(g.a, {
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
                            var i = "/popout/" + t.props.channelName + "/extensions/" + n + "/" + e.anchor;
                            return t.props.mode !== p.ExtensionMode.Viewer && (i = i + "/" + t.props.mode), i
                        }, t.onExtensionPopoutClosed = function() {
                            if (!t.state.popoutRestoreIntentTracked) {
                                var e = t.props.installation.activationConfig;
                                Object(G.f)({
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
                                    i = n.id,
                                    r = n.version;
                                t.props.onExtensionPopoutClosed(i, r)
                            }
                        }, t.onExtensionPopout = function() {
                            var e = t.props.installation.activationConfig;
                            Object(G.g)({
                                extensionID: t.extension.clientId,
                                extensionVersion: t.extension.version,
                                anchor: e.anchor,
                                mode: t.props.mode,
                                loginID: t.props.loginID,
                                channelID: t.props.channelID
                            });
                            var n = "width=320,height=" + t.getPopoutHeight() + ",resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no",
                                i = window.open(t.getExtensionPopoutUrl(), "_blank", n);
                            if (i && (t.onExtensionPopoutClosed && Object(y.a)(i, t.onExtensionPopoutClosed), i.opener = null), t.props.onExtensionPoppedOut) {
                                var r = t.extension,
                                    a = r.id,
                                    o = r.version;
                                t.props.onExtensionPoppedOut(a, o, i)
                            }
                        }, t.onFollowRequested = function(e, n, i) {
                            t.setState({
                                currentFollowRequest: {
                                    options: e,
                                    defaultResult: i,
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
                        }, t.onUseBitsRequested = function(e, n, i) {
                            t.setState({
                                currentUseBitsRequest: {
                                    options: e,
                                    defaultResult: i,
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
                                currentFollowRequest: i.__assign({}, n, {
                                    notifications: e.currentTarget.checked
                                })
                            })
                        }, t.onModalRequested = function(e) {
                            switch (e.action) {
                                case p.FunctionAction.FollowAction:
                                    var n = e,
                                        i = n.options;
                                    t.onFollowRequested(i, n.resultCallback, n.defaultResult);
                                    break;
                                case p.FunctionAction.LoginRequest:
                                    t.featureNeedsAuthBalloon && t.onLoginRequested(e.resultCallback, e.defaultResult);
                                    break;
                                case p.FunctionAction.UseBits:
                                    var r = e,
                                        a = r.options;
                                    t.onUseBitsRequested(a, r.resultCallback, r.defaultResult);
                                    break;
                                case p.FunctionAction.IdShareRequest:
                                    t.setState({
                                        isIdentityLinkOpen: !0
                                    })
                            }
                        }, t.handleReportExtensionClick = function() {
                            var e = t.extension,
                                n = e.id,
                                i = e.version,
                                r = e.name;
                            t.props.isLoggedIn ? t.props.showReportExtensionModal({
                                reportContext: {
                                    contentType: b.N.EXTENSION_REPORT,
                                    contentID: n + "-" + i,
                                    targetUserID: t.props.channelID
                                },
                                title: Object(f.d)("Report {extensionName}", {
                                    extensionName: r
                                }, "ReportExtensionModal")
                            }) : t.props.promptLogin()
                        }, t.dismissLoginPrompt = function() {
                            t.onDismissLoginPrompt && t.onDismissLoginPrompt(), t.onDismissLoginPrompt = null
                        }, t.trackImpression = function() {
                            if (t.props.panel) {
                                var e = t.props.panel.id;
                                e && Object(V.a)(v.SpadeEventType.PanelImpression, {
                                    panelID: e,
                                    channelID: t.props.channelID,
                                    panelType: t.props.panel.type
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), Object.defineProperty(t.prototype, "extension", {
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
                            i = Object(X.d)(this.extension.id, this.extension.version) + "?tt_medium=" + this.getCurrentMedium() + "&tt_content=" + v.PageviewContent.ExtensionPanel,
                            r = d(this.props.className || "extension-panel", ((e = {})["extension-panel__popout"] = this.props.isPopout, e)),
                            a = this.props.isFramePoppedOut ? m.createElement(J, {
                                extension: this.extension,
                                onExtensionShowClicked: this.onExtensionPopoutClosed
                            }) : this.renderExtensionFrame();
                        return m.createElement(_.Xa, {
                            className: r,
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": le.ExtensionPanel
                        }, a, m.createElement(_.Eb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            flexDirection: _.Aa.Column,
                            display: _.X.Flex
                        }, m.createElement(_.Eb, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.Xa, {
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, m.createElement("a", {
                            href: i,
                            target: "_blank",
                            "data-test-selector": le.ExtensionDetailsLink
                        }, this.extension.name)), this.props.isFramePoppedOut || this.props.isPopout ? null : m.createElement(ae, {
                            "data-test-selector": le.PopoutButton,
                            onClick: this.onExtensionPopout
                        }), m.createElement(ce, {
                            isPopout: this.props.isPopout
                        }), m.createElement(ie, {
                            extension: this.extension,
                            isDialogOpen: this.state.isIdentityLinkOpen,
                            onDialogToggle: this.onIdentityLinkDialogToggle,
                            isLinked: this.state.isLinked,
                            isLinkEnabled: this.state.isLinkEnabled,
                            onLinkIdentity: this.onLinkIdentity,
                            onUnlinkIdentity: this.onUnlinkIdentity
                        }), this.renderFollowConfirmation(), this.renderFeatureNeedsAuthBalloon(), this.renderUseBitsConfirmation(), m.createElement(g.a, null, m.createElement("span", null, m.createElement(_.Yb, {
                            label: t,
                            direction: _.ac.Top,
                            align: _.Zb.Right,
                            offsetX: ".6rem"
                        }, m.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, m.createElement(_.A, {
                            "data-test-selector": le.ExtensionDescriptionButton,
                            icon: _.tb.More,
                            ariaLabel: t
                        })))), m.createElement(_.u, {
                            direction: _.v.TopRight,
                            size: _.w.Medium,
                            offsetX: ".6rem"
                        }, m.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Between,
                            flexWrap: _.Ba.NoWrap
                        }, m.createElement(_.Eb, {
                            padding: 1,
                            flexShrink: 3
                        }, m.createElement(_.W, null, this.extension.summary)), m.createElement(_.Eb, {
                            borderLeft: !0,
                            margin: 1
                        }, m.createElement(_.A, {
                            "data-test-selector": le.ExtensionReportButton,
                            ariaLabel: n,
                            icon: _.tb.ChatRiskFlag,
                            onClick: this.handleReportExtensionClick
                        })))))), this.renderBitsBalanceUI()))
                    }, t.prototype.purchaseUI = function() {
                        var e = this,
                            t = this.state && this.state.purchaseIntent;
                        if (null !== t) {
                            var n = this.state,
                                i = n.isLinked,
                                r = n.isLinkEnabled,
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
                                isLinked: i,
                                isLinkEnabled: r,
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

            function ge(e) {
                return Object(a.bindActionCreators)({
                    promptLogin: function() {
                        return Object(c.e)(o.a.ReportHoster)
                    },
                    showReportExtensionModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(s.d)(u.a, t)
                    }
                }, e)
            }
            var ye = Object(r.connect)(fe, ge)(he);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return fe
            }), n.d(t, !1, function() {
                return ge
            }), n.d(t, "a", function() {
                return ye
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
                        var i = n(e);
                        if (!i) throw new Error("setId required the element to have a resize detection state.");
                        var r = t.generate();
                        return i.id = r, r
                    }
                }
            }
        },
        UL9e: function(e, t, n) {
            "use strict";
            (e.exports = {}).getOption = function(e, t, n) {
                var i = e[t];
                if ((void 0 === i || null === i) && void 0 !== n) return n;
                return i
            }
        },
        "V+q8": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
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
                g = n("OpME"),
                y = n("Ue10"),
                b = function(e) {
                    return o.createElement(y.Xa, {
                        padding: 2
                    }, o.createElement(y.Pa, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(y.W, {
                        bold: !0
                    }, Object(c.d)("Subscription benefits", "ChannelSubscriptionBenefits"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Directly support the broadcaster", "ChannelSubscriptionBenefits"))), e.hasAdFree && o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Ad-free (with limited exceptions)", "ChannelSubscriptionBenefits"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Chat during subscriber-only mode", "ChannelSubscriptionBenefits"))), e.hasFastChat && o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Not affected by chat slow mode", "ChannelSubscriptionBenefits"))), e.hasSubonlyVideoArchive && o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Access to VODs", "ChannelSubscriptionBenefits"))), e.badges.length > 0 && o.createElement(o.Fragment, null, o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Subscriber Badges:", "ChannelSubscriptionBenefits"))), o.createElement(y.Xa, {
                        margin: {
                            bottom: 1
                        },
                        display: y.X.Flex,
                        flexWrap: y.Ba.Wrap,
                        justifyContent: y.Wa.Center
                    }, e.badges.map(function(e) {
                        return o.createElement(y.Xa, {
                            key: e.setID + "/" + e.version,
                            margin: .5
                        }, o.createElement(h.a, {
                            badge: e
                        }))
                    }))), e.emotes.length > 0 && o.createElement(o.Fragment, null, o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("{numEmotes, plural, one {# Subscriber Emote:} other {# Subscriber Emotes:}}", {
                        numEmotes: e.emotes.length
                    }, "ChannelSubscriptionBenefits"))), o.createElement(f.a, {
                        emotes: Object(g.b)(e.emotes)
                    })))
                },
                v = n("C8FX"),
                E = (n("QxOQ"), function(e) {
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "channel-subscription-header__banner-image",
                        style: {
                            backgroundImage: "url(" + e.bannerImageURL
                        }
                    }, o.createElement(y.Eb, {
                        background: y.r.Overlay,
                        position: y.jb.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }), o.createElement(y.Xa, {
                        className: "channel-subscription-header__banner-background",
                        textAlign: y.Rb.Center
                    }, o.createElement(y.Xa, {
                        padding: {
                            top: 3
                        },
                        display: y.X.Flex,
                        justifyContent: y.Wa.Center
                    }, o.createElement(y.q, {
                        alt: e.ownerDisplayName || "",
                        size: 96,
                        src: e.profileImageURL
                    })))), o.createElement(y.Xa, {
                        textAlign: y.Rb.Center,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(y.Pa, {
                        margin: {
                            top: 3
                        }
                    }, o.createElement(y.W, {
                        type: y.Vb.H4,
                        bold: !0
                    }, e.ownerDisplayName)), o.createElement(y.Pa, {
                        margin: .5
                    }, o.createElement(y.W, {
                        type: y.Vb.H5
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
                    return o.createElement(P.a, null, o.createElement(y.Xa, {
                        className: "error-ticket-description__header",
                        padding: 2
                    }, o.createElement(y.Eb, {
                        fullHeight: !0,
                        background: y.r.Alt2
                    }, o.createElement(C.a, null))), o.createElement(k.a, {
                        collapsable: !0
                    }, o.createElement(y.Eb, {
                        className: "error-ticket-description__body",
                        padding: 2,
                        borderTop: !0
                    }, o.createElement(y.Eb, {
                        fullHeight: !0,
                        background: y.r.Alt2
                    }, o.createElement(C.a, null)))))
                }),
                x = (n("1P3F"), function() {
                    return o.createElement(P.a, null, o.createElement(y.Xa, {
                        className: "placeholder-ticket-description__header",
                        padding: 2
                    }, o.createElement(y.Eb, {
                        fullHeight: !0,
                        background: y.r.Alt2
                    })), o.createElement(k.a, {
                        collapsable: !0
                    }, o.createElement(y.Eb, {
                        padding: 2,
                        borderTop: !0
                    }, o.createElement(y.ib, {
                        lineCount: 30
                    }))))
                }),
                O = n("KYZ7"),
                I = n.n(O),
                w = (n("R9u/"), function(e) {
                    return o.createElement(P.a, null, o.createElement(y.Eb, {
                        background: y.r.Base
                    }, o.createElement(y.Xa, {
                        className: "turbo-ticket-description__banner-image",
                        padding: 3,
                        display: y.X.Flex,
                        alignItems: y.f.Center,
                        justifyContent: y.Wa.Center
                    }, o.createElement(y.S, {
                        className: "turbo-ticket-description__banner-logo",
                        src: I.a,
                        alt: Object(c.d)("Twitch Turbo Logo", "TurboTicketDescription")
                    })), o.createElement(y.Eb, {
                        borderBottom: !0,
                        textAlign: y.Rb.Center,
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
                    }, o.createElement(y.Xa, {
                        padding: 2
                    }, o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, {
                        bold: !0
                    }, Object(c.d)("Subscription Benefits", "TurboTicketDescription"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Ad-Free Viewing (with limited exceptions)", "TurboTicketDescription"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Chat Badge", "TurboTicketDescription"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Expanded Emote Set", "TurboTicketDescription"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Custom Chat Username Colors", "TurboTicketDescription"))), o.createElement(y.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, null, Object(c.d)("Extended Broadcast Storage", "TurboTicketDescription")))))))
                }),
                _ = n("GnwI"),
                N = n("9fjZ"),
                T = l.a.wrap(function() {
                    return n.e(209).then(n.bind(null, "skV9"))
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
                            i = e.error;
                        return !t && n ? o.createElement(x, null) : !t || i ? o.createElement(S, null) : this.isTurboProduct ? o.createElement(w, {
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
                        }) : o.createElement(P.a, null, o.createElement(y.Eb, {
                            background: y.r.Base
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
                R = Object(s.compose)(Object(_.b)("TicketDescription"), Object(u.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                productName: e.productName,
                                taxCountry: e.priceCountry
                            }
                        }
                    }
                }))(D);
            var j = Object(i.connect)(function(e) {
                return {
                    sessionUser: Object(r.e)(e)
                }
            })(R);
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
        WlZp: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), Object.defineProperty(t.prototype, "kaptchaIframeSrc", {
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
                        return r.createElement("iframe", {
                            width: "1",
                            height: "1",
                            scrolling: "no",
                            src: this.kaptchaIframeSrc
                        }, r.createElement("img", {
                            width: "137",
                            height: "33",
                            src: this.kaptchaImgSrc
                        }))
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return a
            })
        },
        XE3n: function(e, t, n) {},
        YVj6: function(e, t, n) {
            var i, r;
            ! function(a, o) {
                i = [n("x0Ue")], void 0 === (r = function(e) {
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
                        }, n.filterFindElements = function(e, i) {
                            var r = [];
                            return (e = n.makeArray(e)).forEach(function(e) {
                                if (e instanceof HTMLElement)
                                    if (i) {
                                        t(e, i) && r.push(e);
                                        for (var n = e.querySelectorAll(i), a = 0; a < n.length; a++) r.push(n[a])
                                    } else r.push(e)
                            }), r
                        }, n.debounceMethod = function(e, t, n) {
                            var i = e.prototype[t],
                                r = t + "Timeout";
                            e.prototype[t] = function() {
                                var e = this[r];
                                e && clearTimeout(e);
                                var t = arguments,
                                    a = this;
                                this[r] = setTimeout(function() {
                                    i.apply(a, t), delete a[r]
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
                        var i = e.console;
                        return n.htmlInit = function(t, r) {
                            n.docReady(function() {
                                var a = n.toDashed(r),
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
                                        return void(i && i.error("Error parsing " + o + " on " + e.className + ": " + t))
                                    }
                                    var s = new t(e, n);
                                    d && d.data(e, r, s)
                                })
                            })
                        }, n
                    }(a, e)
                }.apply(t, i)) || (e.exports = r)
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
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r, a, o, s;
                            return i.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = a.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, i.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
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
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(a.e)(n);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = r.p.logger.withCategory("legacy-api"), e
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
        ezMb: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                r = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                i = !0,
                                r = !1,
                                a = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                            } catch (e) {
                                r = !0, a = e
                            } finally {
                                try {
                                    !i && s.return && s.return()
                                } finally {
                                    if (r) throw a
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
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
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
                                i = n.distance,
                                r = n.shouldCancelStart;
                            if (2 === e.button || r(e)) return !1;
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
                                }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), i || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                    return t.handlePress(e)
                                }, t.props.pressDelay))
                            }
                        }, t.nodeIsChild = function(e) {
                            return e.sortableInfo.manager === t.manager
                        }, t.handleMove = function(e) {
                            var n = t.props,
                                i = n.distance,
                                r = n.pressThreshold;
                            if (!t.state.sorting && t._touched) {
                                t._delta = {
                                    x: t._pos.x - e.pageX,
                                    y: t._pos.y - e.pageY
                                };
                                var a = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                                i || r && !(r && a >= r) ? i && a >= i && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                            }
                        }, t.handleEnd = function() {
                            var e = t.props.distance;
                            t._touched = !1, e || t.cancel()
                        }, t.cancel = function() {
                            t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                        }, t.handlePress = function(e) {
                            var n = t.manager.getActive();
                            if (n) {
                                var i = t.props,
                                    r = i.axis,
                                    a = i.getHelperDimensions,
                                    o = i.helperClass,
                                    s = i.hideSortableGhost,
                                    c = i.onSortStart,
                                    l = i.useWindowAsScrollContainer,
                                    u = n.node,
                                    d = n.collection,
                                    m = u.sortableInfo.index,
                                    f = (0, p.getElementMargin)(u),
                                    g = t.container.getBoundingClientRect(),
                                    y = a({
                                        index: m,
                                        node: u,
                                        collection: d
                                    });
                                t.node = u, t.margin = f, t.width = y.width, t.height = y.height, t.marginOffset = {
                                    x: t.margin.left + t.margin.right,
                                    y: Math.max(t.margin.top, t.margin.bottom)
                                }, t.boundingClientRect = u.getBoundingClientRect(), t.containerBoundingRect = g, t.index = m, t.newIndex = m, t.axis = {
                                    x: r.indexOf("x") >= 0,
                                    y: r.indexOf("y") >= 0
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
                                    }), t.helper = t.document.body.appendChild(E), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - f.top + "px", t.helper.style.left = t.boundingClientRect.left - f.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = u, u.style.visibility = "hidden", u.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (l ? 0 : g.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (l ? t.contentWindow.innerWidth : g.left + g.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (l ? 0 : g.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (l ? t.contentWindow.innerHeight : g.top + g.height) - t.boundingClientRect.top - t.height / 2), o)(b = t.helper.classList).add.apply(b, h(o.split(" ")));
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
                                i = n.hideSortableGhost,
                                r = n.onSortEnd,
                                a = t.manager.active.collection;
                            t.listenerNode && (p.events.move.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortMove)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                            })), t.helper.parentNode.removeChild(t.helper), i && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                            for (var o = t.manager.refs[a], s = 0, c = o.length; s < c; s++) {
                                var l = o[s],
                                    u = l.node;
                                l.edgeOffset = null, u.style[p.vendorPrefix + "Transform"] = "", u.style[p.vendorPrefix + "TransitionDuration"] = ""
                            }
                            clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                                sorting: !1,
                                sortingIndex: null
                            }), "function" == typeof r && r({
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
                                i = {
                                    x: 1,
                                    y: 1
                                },
                                r = {
                                    x: 10,
                                    y: 10
                                };
                            e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, i.y = r.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, i.x = r.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, i.y = r.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, i.x = r.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                                t.isAutoScrolling = !0;
                                var e = {
                                    left: 1 * i.x * n.x,
                                    top: 1 * i.y * n.y
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
                                i = t.useWindowAsScrollContainer,
                                r = this.props.contentWindow || window;
                            this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, l.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = i ? this.document.body : this.container, this.contentWindow = "function" == typeof r ? r() : r;
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
                                n = r(t, 2),
                                i = n[0],
                                a = n[1];
                            return [this.getLockPixelOffset(i), this.getLockPixelOffset(a)]
                        }
                    }, {
                        key: "getLockPixelOffset",
                        value: function(e) {
                            var t = e,
                                n = e,
                                i = "px";
                            if ("string" == typeof e) {
                                var r = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                                (0, u.default)(null !== r, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), i = r[1]
                            }
                            return (0, u.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === i && (t = t * this.width / 100, n = n * this.height / 100), {
                                x: t,
                                y: n
                            }
                        }
                    }, {
                        key: "updatePosition",
                        value: function(e) {
                            var t = this.props,
                                n = t.lockAxis,
                                i = t.lockToContainerEdges,
                                a = this.getOffset(e),
                                o = {
                                    x: a.x - this.initialOffset.x,
                                    y: a.y - this.initialOffset.y
                                };
                            if (o.y -= window.pageYOffset - this.initialWindowScroll.top, o.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = o, i) {
                                var s = this.getLockPixelOffsets(),
                                    c = r(s, 2),
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
                                i = this.manager.getOrderedRefs(),
                                r = {
                                    left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                    top: this.scrollContainer.scrollTop - this.initialScroll.top
                                },
                                a = {
                                    left: this.offsetEdge.left + this.translate.x + r.left,
                                    top: this.offsetEdge.top + this.translate.y + r.top
                                },
                                o = {
                                    top: window.pageYOffset - this.initialWindowScroll.top,
                                    left: window.pageXOffset - this.initialWindowScroll.left
                                };
                            this.newIndex = null;
                            for (var s = 0, c = i.length; s < c; s++) {
                                var l = i[s].node,
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
                                    g = i[s].edgeOffset;
                                g || (i[s].edgeOffset = g = this.getEdgeOffset(l));
                                var y = s < i.length - 1 && i[s + 1],
                                    b = s > 0 && i[s - 1];
                                y && !y.edgeOffset && (y.edgeOffset = this.getEdgeOffset(y.node)), u !== this.index ? (t && (l.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? u < this.index && (a.left + o.left - h.width <= g.left && a.top + o.top <= g.top + h.height || a.top + o.top + h.height <= g.top) ? (f.x = this.width + this.marginOffset.x, g.left + f.x > this.containerBoundingRect.width - h.width && (f.x = y.edgeOffset.left - g.left, f.y = y.edgeOffset.top - g.top), null === this.newIndex && (this.newIndex = u)) : u > this.index && (a.left + o.left + h.width >= g.left && a.top + o.top + h.height >= g.top || a.top + o.top + h.height >= g.top + m) && (f.x = -(this.width + this.marginOffset.x), g.left + f.x < this.containerBoundingRect.left + h.width && (f.x = b.edgeOffset.left - g.left, f.y = b.edgeOffset.top - g.top), this.newIndex = u) : u > this.index && a.left + o.left + h.width >= g.left ? (f.x = -(this.width + this.marginOffset.x), this.newIndex = u) : u < this.index && a.left + o.left <= g.left + h.width && (f.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = u)) : this.axis.y && (u > this.index && a.top + o.top + h.height >= g.top ? (f.y = -(this.height + this.marginOffset.y), this.newIndex = u) : u < this.index && a.top + o.top <= g.top + h.height && (f.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = u))), l.style[p.vendorPrefix + "Transform"] = "translate3d(" + f.x + "px," + f.y + "px,0)") : n && (this.sortableGhost = l, l.style.visibility = "hidden", l.style.opacity = 0)
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
                            return s.default.createElement(e, i({
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
            var i, r, a;
            /*!
             * Masonry v4.2.0
             * Cascading grid layout library
             * http://masonry.desandro.com
             * MIT License
             * by David DeSandro
             */
            window, r = [n("Hy43"), n("QK1G")], void 0 === (a = "function" == typeof(i = function(e, t) {
                "use strict";
                var n = e.create("masonry");
                n.compatOptions.fitWidth = "isFitWidth";
                var i = n.prototype;
                return i._resetLayout = function() {
                    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
                    for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                    this.maxY = 0, this.horizontalColIndex = 0
                }, i.measureColumns = function() {
                    if (this.getContainerWidth(), !this.columnWidth) {
                        var e = this.items[0],
                            n = e && e.element;
                        this.columnWidth = n && t(n).outerWidth || this.containerWidth
                    }
                    var i = this.columnWidth += this.gutter,
                        r = this.containerWidth + this.gutter,
                        a = r / i,
                        o = i - r % i;
                    a = Math[o && o < 1 ? "round" : "floor"](a), this.cols = Math.max(a, 1)
                }, i.getContainerWidth = function() {
                    var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                        n = t(e);
                    this.containerWidth = n && n.innerWidth
                }, i._getItemLayoutPosition = function(e) {
                    e.getSize();
                    var t = e.size.outerWidth % this.columnWidth,
                        n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
                    n = Math.min(n, this.cols);
                    for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), r = {
                            x: this.columnWidth * i.col,
                            y: i.y
                        }, a = i.y + e.size.outerHeight, o = n + i.col, s = i.col; s < o; s++) this.colYs[s] = a;
                    return r
                }, i._getTopColPosition = function(e) {
                    var t = this._getTopColGroup(e),
                        n = Math.min.apply(Math, t);
                    return {
                        col: t.indexOf(n),
                        y: n
                    }
                }, i._getTopColGroup = function(e) {
                    if (e < 2) return this.colYs;
                    for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) t[i] = this._getColGroupY(i, e);
                    return t
                }, i._getColGroupY = function(e, t) {
                    if (t < 2) return this.colYs[e];
                    var n = this.colYs.slice(e, e + t);
                    return Math.max.apply(Math, n)
                }, i._getHorizontalColPosition = function(e, t) {
                    var n = this.horizontalColIndex % this.cols;
                    n = e > 1 && n + e > this.cols ? 0 : n;
                    var i = t.size.outerWidth && t.size.outerHeight;
                    return this.horizontalColIndex = i ? n + e : this.horizontalColIndex, {
                        col: n,
                        y: this._getColGroupY(n, e)
                    }
                }, i._manageStamp = function(e) {
                    var n = t(e),
                        i = this._getElementOffset(e),
                        r = this._getOption("originLeft") ? i.left : i.right,
                        a = r + n.outerWidth,
                        o = Math.floor(r / this.columnWidth);
                    o = Math.max(0, o);
                    var s = Math.floor(a / this.columnWidth);
                    s -= a % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
                    for (var c = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, l = o; l <= s; l++) this.colYs[l] = Math.max(c, this.colYs[l])
                }, i._getContainerSize = function() {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var e = {
                        height: this.maxY
                    };
                    return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
                }, i._getContainerFitWidth = function() {
                    for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
                    return (this.cols - e) * this.columnWidth - this.gutter
                }, i.needsResizeLayout = function() {
                    var e = this.containerWidth;
                    return this.getContainerWidth(), e != this.containerWidth
                }, n
            }) ? i.apply(t, r) : i) || (e.exports = a)
        },
        hk6T: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
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
                    }(n, t), r(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled,
                                i = e.index;
                            n || this.setDraggable(t, i)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                                var t = e.collection,
                                    n = e.disabled,
                                    i = e.index;
                                n ? this.removeDraggable(t) : this.setDraggable(t, i)
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
                            return o.default.createElement(e, i({
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
                var i = e.slice(0);
                if (n >= i.length)
                    for (var r = n - i.length; 1 + r--;) i.push(void 0);
                return i.splice(n, 0, i.splice(t, 1)[0]), i
            }, t.omit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return Object.keys(e).reduce(function(t, i) {
                    return -1 === n.indexOf(i) && (t[i] = e[i]), t
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
                    top: i(t.marginTop),
                    right: i(t.marginRight),
                    bottom: i(t.marginBottom),
                    left: i(t.marginLeft)
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

            function i(e) {
                return "px" === e.substr(-2) ? parseFloat(e) : 0
            }
        },
        lqDW: function(e, t, n) {},
        mIie: function(e, t, n) {},
        mb7O: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("Ue10"),
                a = (n("bfgy"), function(e) {
                    return i.createElement(r.Xa, {
                        className: "ticket-wrapper__container",
                        "data-a-target": "js-test-ticket-container",
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(r.G, {
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
            var i = "undefined" != typeof window,
                r = i ? window.Masonry || n("hNNL") : null,
                a = i ? n("vX6Q") : null,
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
                        this.masonry && !e || (this.masonry = new r(this.masonryContainer, this.props.options), this.props.onLayoutComplete && this.masonry.on("layoutComplete", this.props.onLayoutComplete), this.props.onRemoveComplete && this.masonry.on("removeComplete", this.props.onRemoveComplete), this.latestKnownDomChildren = this.getCurrentDomChildren())
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
                            i = t.filter(function(e) {
                                return !~n.indexOf(e)
                            }),
                            r = n.filter(function(e) {
                                return !~t.indexOf(e)
                            }),
                            a = 0,
                            o = r.filter(function(e) {
                                var t = a === n.indexOf(e);
                                return t && a++, t
                            }),
                            s = r.filter(function(e) {
                                return -1 === o.indexOf(e)
                            }),
                            c = [];
                        return 0 === i.length && (c = t.filter(function(e, t) {
                            return t !== n.indexOf(e)
                        })), this.latestKnownDomChildren = n, {
                            old: t,
                            new: n,
                            removed: i,
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
                    var i = function(e, t) {
                        e[t] = function() {
                            var e = console[t];
                            if (e.apply) e.apply(console, arguments);
                            else
                                for (var n = 0; n < arguments.length; n++) e(arguments[n])
                        }
                    };
                    i(n, "log"), i(n, "warn"), i(n, "error")
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
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("fvjX"),
                o = n("GnwI"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (!document.querySelector("#recurly-script")) {
                            var e = document.createElement("script");
                            e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                        }
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component),
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
                    var i = t(e[n]);
                    if (i) return i
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
            var i, r;
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
                i = [n("CUlp")], void 0 === (r = function(e) {
                    return function(e, t) {
                        var n = e.jQuery,
                            i = e.console;

                        function r(e, t) {
                            for (var n in t) e[n] = t[n];
                            return e
                        }

                        function a(e, t, i) {
                            if (!(this instanceof a)) return new a(e, t, i);
                            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
                                var t = [];
                                if (Array.isArray(e)) t = e;
                                else if ("number" == typeof e.length)
                                    for (var n = 0; n < e.length; n++) t.push(e[n]);
                                else t.push(e);
                                return t
                            }(e), this.options = r({}, this.options), "function" == typeof t ? i = t : r(this.options, t), i && this.on("always", i), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(function() {
                                this.check()
                            }.bind(this))
                        }
                        a.prototype = Object.create(t.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                            this.images = [], this.elements.forEach(this.addElementImages, this)
                        }, a.prototype.addElementImages = function(e) {
                            "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                            var t = e.nodeType;
                            if (t && o[t]) {
                                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                                    var r = n[i];
                                    this.addImage(r)
                                }
                                if ("string" == typeof this.options.background) {
                                    var a = e.querySelectorAll(this.options.background);
                                    for (i = 0; i < a.length; i++) {
                                        var s = a[i];
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
                                for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                                    var r = i && i[2];
                                    r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
                                }
                        }, a.prototype.addImage = function(e) {
                            var t = new s(e);
                            this.images.push(t)
                        }, a.prototype.addBackground = function(e, t) {
                            var n = new c(e, t);
                            this.images.push(n)
                        }, a.prototype.check = function() {
                            var e = this;

                            function t(t, n, i) {
                                setTimeout(function() {
                                    e.progress(t, n, i)
                                })
                            }
                            this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
                                e.once("progress", t), e.check()
                            }) : this.complete()
                        }, a.prototype.progress = function(e, t, n) {
                            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, e, t)
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
                }.apply(t, i)) || (e.exports = r)
            }("undefined" != typeof window ? window : this)
        },
        vylb: function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        wnTG: function(e, t, n) {
            "use strict";
            var i = n("UL9e");

            function r() {
                var e = {},
                    t = 0,
                    n = 0,
                    i = 0;
                return {
                    add: function(r, a) {
                        a || (a = r, r = 0), r > n ? n = r : r < i && (i = r), e[r] || (e[r] = []), e[r].push(a), t++
                    },
                    process: function() {
                        for (var t = i; t <= n; t++)
                            for (var r = e[t], a = 0; a < r.length; a++)(0, r[a])()
                    },
                    size: function() {
                        return t
                    }
                }
            }
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = i.getOption(e, "async", !0),
                    a = i.getOption(e, "auto", !0);
                a && !n && (t && t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
                var o, s = r(),
                    c = !1;

                function l() {
                    for (c = !0; s.size();) {
                        var e = s;
                        s = r(), e.process()
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
            var i, r;
            ! function(a, o) {
                "use strict";
                void 0 === (r = "function" == typeof(i = o) ? i.call(t, n, t, e) : i) || (e.exports = r)
            }(window, function() {
                "use strict";
                var e = function() {
                    var e = window.Element.prototype;
                    if (e.matches) return "matches";
                    if (e.matchesSelector) return "matchesSelector";
                    for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
                        var i = t[n] + "MatchesSelector";
                        if (e[i]) return i
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
            var i = n("t3DW").forEach;
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    r = e.stateHandler.getState,
                    a = (e.stateHandler.hasState, e.idHandler);
                if (!n) throw new Error("Missing required dependency: batchProcessor");
                if (!t) throw new Error("Missing required dependency: reporter.");
                var o = function() {
                        var e = document.createElement("div");
                        e.style.cssText = "position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";
                        var t = document.createElement("div");
                        t.style.cssText = "position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;", t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
                        var n = 500 - t.clientWidth,
                            i = 500 - t.clientHeight;
                        return document.body.removeChild(t), {
                            width: n,
                            height: i
                        }
                    }(),
                    s = "erd_scroll_detection_container";

                function c(e, n, i) {
                    if (e.addEventListener) e.addEventListener(n, i);
                    else {
                        if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                        e.attachEvent("on" + n, i)
                    }
                }

                function l(e, n, i) {
                    if (e.removeEventListener) e.removeEventListener(n, i);
                    else {
                        if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                        e.detachEvent("on" + n, i)
                    }
                }

                function u(e) {
                    return r(e).container.childNodes[0].childNodes[0].childNodes[0]
                }

                function d(e) {
                    return r(e).container.childNodes[0].childNodes[0].childNodes[1]
                }
                return function(e, t) {
                    if (!document.getElementById(e)) {
                        var n = t + "_animation",
                            i = t + "_animation_active",
                            r = "/* Created by the element-resize-detector library. */\n";
                        r += "." + t + " > div::-webkit-scrollbar { display: none; }\n\n", r += "." + i + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + n + "; animation-name: " + n + "; }\n", r += "@-webkit-keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
                            function(t, n) {
                                n = n || function(e) {
                                    document.head.appendChild(e)
                                };
                                var i = document.createElement("style");
                                i.innerHTML = t, i.id = e, n(i)
                            }(r += "@keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
                    }
                }("erd_scroll_detection_scrollbar_style", s), {
                    makeDetectable: function(e, l, p) {
                        function m() {
                            if (e.debug) {
                                var n = Array.prototype.slice.call(arguments);
                                if (n.unshift(a.get(l), "Scroll: "), t.log.apply) t.log.apply(null, n);
                                else
                                    for (var i = 0; i < n.length; i++) t.log(n[i])
                            }
                        }

                        function h(e) {
                            var t = r(e).container.childNodes[0],
                                n = getComputedStyle(t);
                            return !n.width || -1 === n.width.indexOf("px")
                        }

                        function f() {
                            var e = getComputedStyle(l),
                                t = {};
                            return t.position = e.position, t.width = l.offsetWidth, t.height = l.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                        }

                        function g() {
                            if (m("storeStyle invoked."), r(l)) {
                                var e = f();
                                r(l).style = e
                            } else m("Aborting because element has been uninstalled")
                        }

                        function y(e, t, n) {
                            r(e).lastWidth = t, r(e).lastHeight = n
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
                            var i = u(e),
                                r = d(e),
                                a = E(t),
                                o = C(n),
                                s = function(e) {
                                    return 2 * e + b()
                                }(t),
                                c = function(e) {
                                    return 2 * e + v()
                                }(n);
                            i.scrollLeft = a, i.scrollTop = o, r.scrollLeft = s, r.scrollTop = c
                        }

                        function P() {
                            var e = r(l).container;
                            if (!e) {
                                (e = document.createElement("div")).className = s, e.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;", r(l).container = e,
                                    function(e) {
                                        e.className += " " + s + "_animation_active"
                                    }(e), l.appendChild(e);
                                var t = function() {
                                    r(l).onRendered && r(l).onRendered()
                                };
                                c(e, "animationstart", t), r(l).onAnimationStart = t
                            }
                            return e
                        }

                        function S() {
                            if (m("Injecting elements"), r(l)) {
                                ! function() {
                                    var e = r(l).style;
                                    if ("static" === e.position) {
                                        l.style.position = "relative";
                                        var n = function(e, t, n, i) {
                                            var r = n[i];
                                            "auto" !== r && "0" !== function(e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(r) && (e.warn("An element that is positioned static has style." + i + "=" + r + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0)
                                        };
                                        n(t, l, e, "top"), n(t, l, e, "right"), n(t, l, e, "bottom"), n(t, l, e, "left")
                                    }
                                }();
                                var e = r(l).container;
                                e || (e = P());
                                var n = o.width,
                                    i = o.height,
                                    a = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + function(e, t, n, i) {
                                        return e = e ? e + "px" : "0", t = t ? t + "px" : "0", n = n ? n + "px" : "0", "left: " + e + "; top: " + t + "; right: " + (i = i ? i + "px" : "0") + "; bottom: " + n + ";"
                                    }(-(1 + n), -(1 + i), -i, -n),
                                    u = document.createElement("div"),
                                    d = document.createElement("div"),
                                    p = document.createElement("div"),
                                    h = document.createElement("div"),
                                    f = document.createElement("div"),
                                    g = document.createElement("div");
                                u.dir = "ltr", u.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;", u.className = s, d.className = s, d.style.cssText = a, p.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", h.style.cssText = "position: absolute; left: 0; top: 0;", f.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", g.style.cssText = "position: absolute; width: 200%; height: 200%;", p.appendChild(h), f.appendChild(g), d.appendChild(p), d.appendChild(f), u.appendChild(d), e.appendChild(u), c(p, "scroll", y), c(f, "scroll", b), r(l).onExpandScroll = y, r(l).onShrinkScroll = b
                            } else m("Aborting because element has been uninstalled");

                            function y() {
                                r(l).onExpand && r(l).onExpand()
                            }

                            function b() {
                                r(l).onShrink && r(l).onShrink()
                            }
                        }

                        function x() {
                            function o(e, t, n) {
                                var i = function(e) {
                                        return u(e).childNodes[0]
                                    }(e),
                                    r = E(t),
                                    a = C(n);
                                i.style.width = r + "px", i.style.height = a + "px"
                            }

                            function s(i) {
                                var s = l.offsetWidth,
                                    u = l.offsetHeight;
                                m("Storing current size", s, u), y(l, s, u), n.add(0, function() {
                                    if (r(l))
                                        if (c()) {
                                            if (e.debug) {
                                                var n = l.offsetWidth,
                                                    i = l.offsetHeight;
                                                n === s && i === u || t.warn(a.get(l), "Scroll: Size changed before updating detector elements.")
                                            }
                                            o(l, s, u)
                                        } else m("Aborting because element container has not been initialized");
                                    else m("Aborting because element has been uninstalled")
                                }), n.add(1, function() {
                                    r(l) ? c() ? k(l, s, u) : m("Aborting because element container has not been initialized") : m("Aborting because element has been uninstalled")
                                }), i && n.add(2, function() {
                                    r(l) ? c() ? i() : m("Aborting because element container has not been initialized") : m("Aborting because element has been uninstalled")
                                })
                            }

                            function c() {
                                return !!r(l).container
                            }

                            function p() {
                                m("notifyListenersIfNeeded invoked");
                                var e = r(l);
                                return void 0 === r(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? m("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? m("Not notifying: Size already notified") : (m("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, void i(r(l).listeners, function(e) {
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
                            if (m("registerListenersAndPositionElements invoked."), r(l)) {
                                r(l).onRendered = function() {
                                    if (m("startanimation triggered."), h(l)) m("Ignoring since element is still unrendered...");
                                    else {
                                        m("Element rendered.");
                                        var e = u(l),
                                            t = d(l);
                                        0 !== e.scrollLeft && 0 !== e.scrollTop && 0 !== t.scrollLeft && 0 !== t.scrollTop || (m("Scrollbars out of sync. Updating detector elements..."), s(p))
                                    }
                                }, r(l).onExpand = f, r(l).onShrink = f;
                                var g = r(l).style;
                                o(l, g.width, g.height)
                            } else m("Aborting because element has been uninstalled")
                        }

                        function O() {
                            if (m("finalizeDomMutation invoked."), r(l)) {
                                var e = r(l).style;
                                y(l, e.width, e.height), k(l, e.width, e.height)
                            } else m("Aborting because element has been uninstalled")
                        }

                        function I() {
                            p(l)
                        }

                        function w() {
                            m("Installing..."), r(l).listeners = [],
                                function() {
                                    var e = f();
                                    r(l).startSize = {
                                        width: e.width,
                                        height: e.height
                                    }, m("Element start size", r(l).startSize)
                                }(), n.add(0, g), n.add(1, S), n.add(2, x), n.add(3, O), n.add(4, I)
                        }
                        p || (p = l, l = e, e = null), e = e || {}, m("Making detectable..."),
                            function(e) {
                                return ! function(e) {
                                    return e === e.ownerDocument.body || e.ownerDocument.body.contains(e)
                                }(e) || null === getComputedStyle(e)
                            }(l) ? (m("Element is detached"), P(), m("Waiting until element is attached..."), r(l).onRendered = function() {
                                m("Element is now attached"), w()
                            }) : w()
                    },
                    addListener: function(e, t) {
                        if (!r(e).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
                        r(e).listeners.push(t)
                    },
                    uninstall: function(e) {
                        var t = r(e);
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