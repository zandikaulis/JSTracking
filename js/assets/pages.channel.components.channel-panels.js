(window.webpackJsonp = window.webpackJsonp || []).push([
    [118], {
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("mrSG"),
                o = n("q1tI"),
                a = n("Ue10"),
                r = (n("sL9O"), function(e) {
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
                        return o.createElement(a.X, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, o.createElement(a.Na, {
                            position: a.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: a.ac.Above
                        }, o.createElement("input", {
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
                }(o.Component))
        },
        "0HeA": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i, o, a = n("/7QA"),
                r = n("DMoW");
            ! function(e) {
                e.Default = "default", e.Extension = "extension"
            }(o || (o = {}));
            var s = ((i = {})[r.x.DEFAULT] = o.Default, i[r.x.EXTENSION] = o.Extension, i);

            function l(e, t) {
                a.n.track(e, {
                    panel_id: t.panelID,
                    panel_type: s[t.panelType],
                    channel_id: t.channelID,
                    panel_target: t.panelTarget || null
                })
            }
        },
        "1pP+": function(e, t, n) {},
        "1uty": function(e, t, n) {
            "use strict";
            var i = "_erd";

            function o(e) {
                return e[i]
            }
            e.exports = {
                initState: function(e) {
                    return e[i] = {}, o(e)
                },
                getState: o,
                cleanState: function(e) {
                    delete e[i]
                }
            }
        },
        "22qk": function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "h", function() {
                return c
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "g", function() {
                return p
            });
            var i = n("/7QA"),
                o = n("D7An");

            function a(e, t) {
                return "/ext/" + h(e, t)
            }

            function r(e, t, n) {
                return "control" === i.o.experiments.getAssignment(o.b.ExtensionConfigureModal) ? {
                    pathname: s(e) + "/" + h(t, n) + "/configure"
                } : {
                    pathname: "" + l(e),
                    search: "?configure=true&extensionID=" + h(t, n)
                }
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function l(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function c(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function u(e, t) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: t
                }
            }

            function d(e) {
                return "/ext/categories/" + e
            }

            function p(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function h(e, t) {
                return t ? e + "-" + t : e
            }
        },
        "5IFo": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return r
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "g", function() {
                return h
            }), n.d(t, "f", function() {
                return m
            });
            var i, o = n("/7QA"),
                a = n("2xye");

            function r(e) {
                var t = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                o.n.track(a.SpadeEventType.ExtensionInstall, t)
            }

            function s(e) {
                var t = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                o.n.track(a.SpadeEventType.ExtensionConfigureView, t)
            }

            function l(e, t) {
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

            function c(e) {
                o.n.track(a.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Open, e))
            }

            function u(e) {
                o.n.track(a.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Close, e))
            }

            function d(e) {
                o.n.track(a.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Save, e))
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

            function h(e) {
                o.n.track(a.SpadeEventType.ExtensionPopoutClicked, p(e))
            }

            function m(e) {
                o.n.track(a.SpadeEventType.ExtensionPopinClicked, p(e))
            }! function(e) {
                e.Open = "open", e.Close = "close", e.Save = "save"
            }(i || (i = {}))
        },
        "7sSR": function(e, t, n) {
            "use strict";
            var i = n("t3DW").forEach,
                o = n("W+U1"),
                a = n("Sa1T"),
                r = n("LO96"),
                s = n("UFhH"),
                l = n("q7TX"),
                c = n("GOnX"),
                u = n("wnTG"),
                d = n("1uty"),
                p = n("GNKm"),
                h = n("yUZ2");

            function m(e) {
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

            function v(e, t, n) {
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
                    var n = r(),
                        y = s({
                            idGenerator: n,
                            stateHandler: d
                        });
                    t = y
                }
                var b = e.reporter;
                b || (b = l(!1 === b));
                var E = v(e, "batchProcessor", u({
                        reporter: b
                    })),
                    x = {};
                x.callOnAdd = !!v(e, "callOnAdd", !0), x.debug = !!v(e, "debug", !1);
                var k, C = a(t),
                    S = o({
                        stateHandler: d
                    }),
                    I = v(e, "strategy", "object"),
                    w = {
                        reporter: b,
                        batchProcessor: E,
                        stateHandler: d,
                        idHandler: t
                    };
                if ("scroll" === I && (c.isLegacyOpera() ? (b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), I = "object") : c.isIE(9) && (b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), I = "object")), "scroll" === I) k = h(w);
                else {
                    if ("object" !== I) throw new Error("Invalid strategy name: " + I);
                    k = p(w)
                }
                var P = {};
                return {
                    listenTo: function(e, n, o) {
                        function a(e) {
                            var t = C.get(e);
                            i(t, function(t) {
                                t(e)
                            })
                        }

                        function r(e, t, n) {
                            C.add(t, n), e && n(t)
                        }
                        if (o || (o = n, n = e, e = {}), !n) throw new Error("At least one element required.");
                        if (!o) throw new Error("Listener required.");
                        if (g(n)) n = [n];
                        else {
                            if (!m(n)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            n = f(n)
                        }
                        var s = 0,
                            l = v(e, "callOnAdd", x.callOnAdd),
                            c = v(e, "onReady", function() {}),
                            u = v(e, "debug", x.debug);
                        i(n, function(e) {
                            d.getState(e) || (d.initState(e), t.set(e));
                            var p = t.get(e);
                            if (u && b.log("Attaching listener to element", p, e), !S.isDetectable(e)) return u && b.log(p, "Not detectable."), S.isBusy(e) ? (u && b.log(p, "System busy making it detectable"), r(l, e, o), P[p] = P[p] || [], void P[p].push(function() {
                                ++s === n.length && c()
                            })) : (u && b.log(p, "Making detectable..."), S.markBusy(e, !0), k.makeDetectable({
                                debug: u
                            }, e, function(e) {
                                if (u && b.log(p, "onElementDetectable"), d.getState(e)) {
                                    S.markAsDetectable(e), S.markBusy(e, !1), k.addListener(e, a), r(l, e, o);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var h = e.offsetWidth,
                                            m = e.offsetHeight;
                                        t.startSize.width === h && t.startSize.height === m || a(e)
                                    }
                                    P[p] && i(P[p], function(e) {
                                        e()
                                    })
                                } else u && b.log(p, "Element uninstalled before being detectable.");
                                delete P[p], ++s === n.length && c()
                            }));
                            u && b.log(p, "Already detecable, adding listener."), r(l, e, o), s++
                        }), s === n.length && c()
                    },
                    removeListener: C.removeListener,
                    removeAllListeners: C.removeAllListeners,
                    uninstall: function(e) {
                        if (!e) return b.error("At least one element is required.");
                        if (g(e)) e = [e];
                        else {
                            if (!m(e)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            e = f(e)
                        }
                        i(e, function(e) {
                            C.removeAllListeners(e), k.uninstall(e), d.cleanState(e)
                        })
                    }
                }
            }
        },
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
                o = r(n("J2m7")),
                a = r(n("xweI"));

            function r(e) {
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
                        return (0, o.default)(this.refs[this.active.collection], function(t) {
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
                o = function() {
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
                    }(n, t), o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = (0, s.findDOMNode)(this);
                            e.sortableHandle = !0
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, l.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = u.withRef ? "wrappedInstance" : null;
                            return r.default.createElement(e, i({
                                ref: t
                            }, this.props))
                        }
                    }]), n
                }(a.Component), t.displayName = (0, c.provideDisplayName)("sortableHandle", e), n
            };
            var a = n("q1tI"),
                r = u(a),
                s = n("i8i4"),
                l = u(n("QLaP")),
                c = n("jTc+");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
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
        CUlp: function(e, t, n) {
            var i, o;
            "undefined" != typeof window && window, void 0 === (o = "function" == typeof(i = function() {
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
                        for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                            var a = n[o];
                            i && i[a] && (this.off(e, a), delete i[a]), a.apply(this, t)
                        }
                        return this
                    }
                }, t.allOff = function() {
                    delete this._events, delete this._onceEvents
                }, e
            }) ? i.call(t, n, t, e) : i) || (e.exports = o)
        },
        "EZh/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = 3
        },
        EuHz: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                o = n("mrSG"),
                a = n("1hWM"),
                r = n("q1tI"),
                s = n("oJmH"),
                l = n("pQUg"),
                c = n.n(l),
                u = n("Nxrd"),
                d = n("/7QA"),
                p = n("yR8l"),
                h = n("geRD"),
                m = n("5zC2"),
                f = n("OzNJ"),
                g = n("GnwI"),
                v = n("7JxC"),
                y = n("6x+I");
            var b, E = {
                    allowedTypes: ["BlockQuote", "Emph", "Hardbreak", "Heading", "Item", "Link", "List", "Paragraph", "Softbreak", "Strong", "Text"],
                    className: "panel-description",
                    renderers: {
                        Heading: function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return o.__extends(t, e), t.prototype.render = function() {
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
                                return Object(r.createElement)(e, {}, this.props.children)
                            }, t
                        }(r.Component),
                        Link: function(e) {
                            return r.createElement("a", {
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
                x = n("2xye"),
                k = n("JVUd"),
                C = n("0HeA"),
                S = n("Ue10");
            n("ZAO/");
            ! function(e) {
                e.Description = "description_test_selector", e.Image = "image_test_selector", e.Link = "link_url_test_selector", e.Panel = "channel_panel_test_selector", e.Title = "title_test_selector"
            }(b || (b = {}));
            var I = /^https?:\/\//,
                w = function(e) {
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
                            n && Object(C.a)(x.SpadeEventType.PanelClick, {
                                panelID: n,
                                channelID: t.props.channelID,
                                panelType: t.props.panel.type,
                                panelTarget: e
                            })
                        }, t.trackImpression = function() {
                            var e = t.props.panel.id;
                            e && Object(C.a)(x.SpadeEventType.PanelImpression, {
                                panelID: e,
                                channelID: t.props.channelID,
                                panelType: t.props.panel.type
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.render = function() {
                        var e = this.props.panel.imageURL ? r.createElement("img", {
                            "data-test-selector": b.Image,
                            src: this.props.panel.imageURL,
                            alt: Object(d.d)("Panel Content", "ChannelPanels")
                        }) : "";
                        e && this.props.panel.linkURL && I.test(this.props.panel.linkURL) && (e = r.createElement(S.T, {
                            to: this.props.panel.linkURL,
                            onClick: this.onImageClick,
                            targetBlank: !0,
                            "data-test-selector": b.Link
                        }, e));
                        var t = null;
                        return this.props.panel.description && (t = r.createElement("div", {
                            onClick: this.onDescriptionClick,
                            "data-test-selector": b.Description
                        }, r.createElement(S.Wb, null, r.createElement(y, o.__assign({
                            source: function(e) {
                                return e.replace(/(^|\n)(#+)([^\s#]+)/g, function(e, t, n, i) {
                                    return "" + t + n + " " + i
                                })
                            }(this.props.panel.description)
                        }, E))))), r.createElement(S.Va, o.__assign({
                            className: "default-panel",
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": b.Panel
                        }, Object(S.bc)(this.props)), this.props.panel.title && r.createElement(S.V, {
                            type: S.Nb.H3,
                            "data-test-selector": b.Title
                        }, this.props.panel.title), e, t)
                    }, t
                }(r.Component),
                P = Object(s.compose)(Object(k.a)("DefaultPanel", {
                    pixels: 100
                }))(w),
                _ = n("TVJu"),
                O = n("EZh/"),
                D = n("DMoW"),
                T = (n("8sUD"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isCreatingDefaultPanel: !1,
                            isCreatingExtensionPanel: !1,
                            isTypeSelectionMode: !1,
                            errorMessage: ""
                        }, t.createDefaultPanel = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isCreatingDefaultPanel: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.createPanel({
                                                channelID: this.props.channelID,
                                                type: D.x.DEFAULT
                                            })];
                                        case 2:
                                            return e.sent(), this.setState({
                                                errorMessage: "",
                                                isTypeSelectionMode: !1,
                                                isCreatingDefaultPanel: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                errorMessage: Object(d.d)("Failed to create Text/Image Panel, please try again.", "CreatePanel"),
                                                isCreatingDefaultPanel: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.createExtensionPanel = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isCreatingExtensionPanel: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.createPanel({
                                                channelID: this.props.channelID,
                                                type: D.x.EXTENSION
                                            })];
                                        case 2:
                                            return e.sent(), this.setState({
                                                errorMessage: "",
                                                isTypeSelectionMode: !1,
                                                isCreatingExtensionPanel: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                errorMessage: Object(d.d)("Failed to create Extension Panel, please try again.", "CreatePanel"),
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(S.z, {
                            fullWidth: !0,
                            icon: S.nb.NavSettings,
                            onClick: this.createExtensionPanel,
                            state: this.state.isCreatingExtensionPanel ? S.E.Loading : S.E.Default,
                            type: S.F.Hollow
                        }, Object(d.d)("Extension Panel", "CreatePanel"));
                        return this.state.isTypeSelectionMode ? r.createElement(S.xb, {
                            border: !0,
                            background: S.r.Alt2,
                            className: "create-panel",
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.o, {
                            ratio: S.p.Aspect3x4
                        }, r.createElement(S.Va, {
                            padding: 1
                        }, this.state.errorMessage && r.createElement(S.V, {
                            color: S.O.Error
                        }, this.state.errorMessage), r.createElement(S.Va, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(S.z, {
                            fullWidth: !0,
                            icon: S.nb.GridLayout,
                            onClick: this.createDefaultPanel,
                            state: this.state.isCreatingDefaultPanel ? S.E.Loading : S.E.Default,
                            type: S.F.Hollow
                        }, Object(d.d)("Add a Text or Image Panel", "CreatePanel"))), this.props.canCreateExtensionPanel && e))) : r.createElement(S.xb, {
                            border: !0,
                            background: S.r.Alt2,
                            className: "create-panel",
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.Sa, {
                            type: S.Ta.Alpha,
                            onClick: this.toggleSelectionMode
                        }, r.createElement(S.o, {
                            ratio: S.p.Aspect3x4
                        }, r.createElement(S.Va, {
                            display: S.W.Flex,
                            alignItems: S.f.Center,
                            justifyContent: S.Ua.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(S.mb, {
                            asset: S.nb.Plus,
                            height: 100,
                            width: 100,
                            type: S.ob.Placeholder
                        })))))
                    }, t
                }(r.Component)),
                L = n("aCAx"),
                R = n("kRBY"),
                N = n("KJdW"),
                F = n.n(N),
                B = n("/ZC1"),
                A = n("cZKs"),
                j = n("KGBd");
            n("xVpv");
            var z = ["image/*"],
                U = {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                },
                W = {
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 180
                },
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            base64Image: "",
                            crop: U,
                            error: "",
                            file: void 0,
                            isCropping: !1,
                            pixelCrop: W
                        }, t.onFilesSubmitted = function(e) {
                            var n = e[0],
                                i = new FileReader;
                            i.onloadend = function() {
                                var e = i.result,
                                    o = new Image;
                                o.onload = function() {
                                    var i = function(e, t, n) {
                                            var i = e.height,
                                                o = e.width,
                                                a = i > t,
                                                r = o > n;
                                            return {
                                                percentCrop: {
                                                    x: 0,
                                                    y: 0,
                                                    height: (a ? t : i) / i * 100,
                                                    width: (r ? n : o) / o * 100
                                                },
                                                pixelCrop: {
                                                    x: 0,
                                                    y: 0,
                                                    height: a ? t : i,
                                                    width: r ? n : o
                                                }
                                            }
                                        }(o, W.height, W.width),
                                        a = i.percentCrop,
                                        r = i.pixelCrop;
                                    t.setState({
                                        base64Image: e,
                                        crop: a,
                                        file: n,
                                        isCropping: !0,
                                        pixelCrop: r
                                    })
                                }, o.onerror = function() {
                                    t.setState({
                                        error: "Failed to read file"
                                    })
                                }, o.src = e
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
                                previewSrc: Object(j.a)(t.state.base64Image, t.state.pixelCrop.x, t.state.pixelCrop.y, t.state.pixelCrop.width, t.state.pixelCrop.height, t.state.pixelCrop.width, t.state.pixelCrop.height)
                            }), t.props.onClose())
                        }, t.updateCrop = function(e, n) {
                            t.setState({
                                crop: e,
                                pixelCrop: n
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(S.xb, {
                            background: S.r.Base,
                            className: "default-panel-image-picker",
                            textAlign: S.Jb.Center
                        }, this.state.base64Image ? this.renderImageCropper() : this.renderFilePicker(), r.createElement(A.a, {
                            closeOnBackdropClick: !this.state.isCropping
                        }))
                    }, t.prototype.renderImageCropper = function() {
                        return r.createElement(S.Va, {
                            padding: 2
                        }, r.createElement(F.a, {
                            src: this.state.base64Image,
                            crop: this.state.crop,
                            onChange: this.updateCrop,
                            onComplete: this.updateCrop
                        }), r.createElement(S.Va, {
                            display: S.W.Flex,
                            flexDirection: S.Y.Row,
                            margin: {
                                top: 1
                            },
                            justifyContent: S.Ua.Center
                        }, r.createElement(S.z, {
                            onClick: this.onImageSelectionComplete
                        }, Object(d.d)("Done", "DefaultPanelImagePickerComponent")), r.createElement(S.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.z, {
                            onClick: this.props.onClose
                        }, Object(d.d)("Cancel", "DefaultPanelImagePickerComponent")))))
                    }, t.prototype.renderFilePicker = function() {
                        return r.createElement(S.o, {
                            ratio: S.p.Aspect1x1
                        }, r.createElement(B.a, {
                            allowedFileTypes: z,
                            multiFile: !1,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, r.createElement(S.Va, {
                            display: S.W.Flex,
                            flexDirection: S.Y.Column
                        }, r.createElement(S.Va, null, r.createElement(S.mb, {
                            asset: S.nb.Upload,
                            type: S.ob.Alt2,
                            height: 50,
                            width: 50
                        })), r.createElement(S.V, {
                            type: S.Nb.H3,
                            color: S.O.Alt2,
                            fontSize: S.Aa.Size4
                        }, Object(d.d)("Choose a file or drag it here.", "DefaultPanelImagePickerComponent")))))
                    }, t
                }(r.Component),
                V = n("fvjX");
            var H = Object(i.connect)(null, function(e) {
                    return Object(V.bindActionCreators)({
                        onClose: L.c
                    }, e)
                })(M),
                q = n("PZVp"),
                G = n("/aPz"),
                Y = n("b6Yk");
            var Q;
            n("U0Fp");
            ! function(e) {
                e.AddImage = "add_image_selector", e.SavePanel = "save_default_panel_selector"
            }(Q || (Q = {}));
            var X, K = 1e6;
            ! function(e) {
                e[e.ImageUploadFailed = 0] = "ImageUploadFailed", e[e.ImageUploadSizeFailed = 1] = "ImageUploadSizeFailed", e[e.Unexpected = 2] = "Unexpected"
            }(X || (X = {}));
            var J = function(e) {
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
                            case X.ImageUploadFailed:
                                n = Object(d.d)("Image Upload Failed. Please try again.", "DefaultPanelEditComponent");
                                break;
                            case X.ImageUploadSizeFailed:
                                n = Object(d.d)("Please choose a file smaller than {maxFileSize}.", {
                                    maxFileSize: "1MB"
                                }, "DefaultPanelEditComponent");
                                break;
                            case X.Unexpected:
                            default:
                                n = Object(d.d)("Something went wrong. Please try again.", "DefaultPanelEditComponent")
                        }
                        t.setState({
                            errorMessage: n,
                            isSaving: !1
                        })
                    }, t.savePanel = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
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
                                        return n.sent(), this.handleErrorMessage(X.Unexpected), [3, 4];
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
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, r = this;
                            return o.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e = this.state.imageCrop, (t = this.state.imageFile).size > K) return this.handleErrorMessage(X.ImageUploadSizeFailed), [2];
                                        s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, function(e, t) {
                                            return o.__awaiter(this, void 0, Promise, function() {
                                                var n, i;
                                                return o.__generator(this, function(o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return o.trys.push([0, 2, , 3]), [4, Y.a.post("/v5/users/" + e + "/upload_panel_image", {
                                                                body: {
                                                                    height: t.height,
                                                                    width: t.width,
                                                                    left: t.x,
                                                                    top: t.y
                                                                }
                                                            })];
                                                        case 1:
                                                            return 200 === (n = o.sent()).status && n.body ? [2, n.body] : [2, Promise.reject("Failed to fetch URL")];
                                                        case 2:
                                                            return i = o.sent(), [2, Promise.reject(i)];
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(this.props.channelID, e)];
                                    case 2:
                                        return a = s.sent(), i = a.upload_id, n = a.url, [3, 4];
                                    case 3:
                                        return s.sent(), [2, this.handleErrorMessage(X.Unexpected)];
                                    case 4:
                                        return this.unsubscribe = d.k.subscribe({
                                            topic: Object(G.A)(i),
                                            success: function() {
                                                (function(e, t) {
                                                    return fetch(e, {
                                                        method: "PUT",
                                                        body: new Blob([t])
                                                    })
                                                })(n, t).catch(function() {
                                                    r.unsubscribe(), r.handleErrorMessage(X.Unexpected)
                                                }), r.timeoutFunc = setTimeout(function() {
                                                    r.unsubscribe(), r.handleErrorMessage(X.ImageUploadFailed)
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                r.handleErrorMessage(X.Unexpected)
                                            },
                                            onMessage: function(e) {
                                                return o.__awaiter(r, void 0, void 0, function() {
                                                    return o.__generator(this, function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                if (e.upload_id !== i) return [3, 8];
                                                                switch (clearTimeout(this.timeoutFunc), e.status) {
                                                                    case q.a.POSTPROCESS_COMPLETE:
                                                                        return [3, 1];
                                                                    case q.a.FILE_SIZE_VALIDATION_FAILED:
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
                                                                return t.sent(), this.handleErrorMessage(X.ImageUploadFailed), [3, 4];
                                                            case 4:
                                                                return [3, 7];
                                                            case 5:
                                                                return this.handleErrorMessage(X.ImageUploadSizeFailed), [3, 7];
                                                            case 6:
                                                                this.handleErrorMessage(X.Unexpected), t.label = 7;
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
                return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe()
                }, t.prototype.render = function() {
                    var e = this.props.panel,
                        t = Object(d.d)("Supports {markdownLink} (No HTML)", {
                            markdownLink: r.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics",
                                target: "_blank"
                            }, Object(d.d)("Markdown", "DefaultPanelEditComponent"))
                        }, "DefaultPanelEditComponent");
                    return r.createElement(S.Va, {
                        padding: 1
                    }, r.createElement(S.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.Ca, {
                        id: "panel-title",
                        label: Object(d.d)("Panel Title", "DefaultPanelEdit")
                    }, r.createElement(S.Pa, {
                        defaultValue: e.title || "",
                        id: "panel-title",
                        name: "title",
                        onChange: this.handleInputChange,
                        type: S.Ra.Text
                    }))), r.createElement(S.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.Va, {
                        display: S.W.Flex,
                        flexDirection: S.Y.Row,
                        justifyContent: S.Ua.Between,
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(S.z, {
                        onClick: this.showDefaultPanelImagePicker,
                        "data-test-selector": Q.AddImage
                    }, Object(d.d)("Add Image", "DefaultPanelEdit")), r.createElement("img", {
                        className: "panel-preview-image",
                        src: this.state.imagePreviewSRC ? this.state.imagePreviewSRC : e.imageURL || ""
                    })), r.createElement(S.V, {
                        type: S.Nb.P
                    }, Object(d.d)("Images will be scaled to 320px wide", "DefaultPanelEdit"))), r.createElement(S.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.Ca, {
                        id: "panel-link-url",
                        label: Object(d.d)("Image Links To:", "DefaultPanelEdit")
                    }, r.createElement(S.Pa, {
                        defaultValue: e.linkURL || "",
                        id: "panel-link-url",
                        name: "linkURL",
                        onChange: this.handleInputChange,
                        type: S.Ra.Text
                    }))), r.createElement(S.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.Va, {
                        display: S.W.Flex,
                        flexDirection: S.Y.Row,
                        justifyContent: S.Ua.Between,
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(S.V, {
                        type: S.Nb.Strong
                    }, Object(d.d)("Description:", "DefaultPanelEdit")), r.createElement(S.Va, null, t)), r.createElement(S.Kb, {
                        defaultValue: e.description || "",
                        id: "description",
                        name: "description",
                        noResize: !0,
                        onChange: this.handleDescriptionChange,
                        rows: 6
                    })), r.createElement(S.Va, {
                        display: S.W.Flex,
                        flexDirection: S.Y.Row
                    }, r.createElement(S.z, {
                        "data-test-selector": Q.SavePanel,
                        disabled: !this.state.canSave,
                        onClick: this.savePanel,
                        state: this.state.isSaving ? S.E.Loading : S.E.Default
                    }, Object(d.d)("Submit", "DefaultPanelEdit")), r.createElement(S.z, {
                        type: S.F.Text,
                        onClick: this.props.removePanel
                    }, Object(d.d)("Remove", "DefaultPanelEdit"))), r.createElement(S.Va, {
                        textAlign: S.Jb.Center
                    }, this.state.errorMessage && r.createElement(S.V, {
                        color: S.O.Error
                    }, this.state.errorMessage)))
                }, t
            }(r.Component);
            var Z, $ = Object(i.connect)(function(e) {
                    return {
                        authToken: Object(R.a)(e)
                    }
                }, function(e) {
                    return {
                        showDefaultPanelImagePicker: function(t) {
                            return e(Object(L.d)(H, t))
                        }
                    }
                })(J),
                ee = function(e) {
                    var t = e.channelName,
                        n = e.panel,
                        i = e.removePanel,
                        o = Object(d.d)("This panel's name is: {panelName}", {
                            panelName: r.createElement(S.V, {
                                bold: !0,
                                type: S.Nb.Span,
                                transform: S.Mb.Uppercase
                            }, " ", n.slotID)
                        }, "ExtensionPanelEdit");
                    return r.createElement(S.Va, {
                        alignItems: S.f.Center,
                        display: S.W.Flex,
                        flexDirection: S.Y.Column,
                        textAlign: S.Jb.Center
                    }, r.createElement(S.Va, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S.mb, {
                        asset: S.nb.Extensions,
                        type: S.ob.Brand,
                        height: 40,
                        width: 40
                    })), r.createElement(S.Va, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S.V, null, Object(d.d)("To add an Extension to this space, activate it in your Extension Manager.", "Edit Extension Panel"))), r.createElement(S.Va, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S.z, {
                        linkTo: "/" + t + "/dashboard/extensions"
                    }, Object(d.d)("Extension Manager", "Edit Extension Panel"))), r.createElement(S.Va, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S.V, null, o)), r.createElement(S.Va, {
                        fullWidth: !0,
                        margin: {
                            top: "auto"
                        }
                    }, r.createElement(S.z, {
                        type: S.F.Text,
                        fullWidth: !0,
                        onClick: i
                    }, Object(d.d)("Remove", "Edit Extension Panel"))))
                },
                te = (n("abgr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isRemoving: !1,
                            showRemoveConfirmation: !1
                        }, t.logger = d.j.withCategory("EditPanel"), t.cancelRemovePanel = function() {
                            t.setState({
                                showRemoveConfirmation: !1
                            })
                        }, t.confirmRemovePanel = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(S.xb, {
                                border: !0,
                                className: "edit-panel edit-panel--overlay " + (this.props.isSorting ? "edit-panel--sorting" : ""),
                                position: S.db.Absolute,
                                zIndex: S.ac.Default
                            }, r.createElement(S.o, {
                                ratio: S.p.Aspect3x4
                            }, r.createElement(S.Va, {
                                alignItems: S.f.Center,
                                display: S.W.Flex,
                                flexDirection: S.Y.Column,
                                justifyContent: S.Ua.Center,
                                textAlign: S.Jb.Center
                            }, r.createElement(S.V, {
                                color: S.O.Overlay
                            }, Object(d.d)("Are you sure you want to delete this panel?", "EditPanel")), r.createElement(S.Va, {
                                margin: {
                                    top: 2
                                }
                            }, r.createElement(S.z, {
                                "data-test-selector": "confirm_delete_panel_selector",
                                state: this.state.isRemoving ? S.E.Loading : S.E.Default,
                                onClick: this.confirmRemovePanel
                            }, Object(d.d)("Delete", "EditPanel")), r.createElement(S.Va, {
                                display: S.W.InlineBlock,
                                margin: {
                                    left: 1
                                }
                            }, r.createElement(S.z, {
                                type: S.F.Text,
                                onClick: this.cancelRemovePanel,
                                overlay: !0
                            }, Object(d.d)("Cancel", "EditPanel"))))))),
                            t = null;
                        return "DefaultPanel" === this.props.panel.__typename ? t = r.createElement($, {
                            channelID: this.props.channelID,
                            panel: this.props.panel,
                            removePanel: this.removePanel,
                            updatePanel: this.props.updatePanel
                        }) : "ExtensionPanel" === this.props.panel.__typename && (t = r.createElement(ee, {
                            channelName: this.props.channelName,
                            panel: this.props.panel,
                            removePanel: this.removePanel
                        })), r.createElement(S.Va, {
                            position: S.db.Relative
                        }, this.state.showRemoveConfirmation && e, r.createElement(S.xb, {
                            border: !0,
                            background: S.r.Alt2,
                            className: "edit-panel " + (this.props.isSorting ? "edit-panel--sorting" : ""),
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.o, {
                            ratio: S.p.Aspect3x4
                        }, t)))
                    }, t
                }(r.PureComponent)),
                ne = Object(u.SortableElement)(function(e) {
                    return r.createElement(S.Va, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(te, {
                        channelID: e.channelID,
                        channelName: e.channelName,
                        panel: e.panel,
                        deletePanel: e.deletePanel,
                        updatePanel: e.updatePanel,
                        isSorting: e.isSorting
                    }))
                }),
                ie = Object(u.SortableContainer)(function(e) {
                    var t = 0,
                        n = e.items.map(function(n, i) {
                            return "ExtensionPanel" === n.__typename && t++, r.createElement(ne, {
                                key: n.id,
                                channelID: e.channelID,
                                channelName: e.channelName,
                                updatePanel: e.updatePanel,
                                deletePanel: e.deletePanel,
                                isSorting: e.isSorting,
                                index: i,
                                panel: n
                            })
                        }),
                        i = t < O.a,
                        o = r.createElement(S.Va, {
                            margin: {
                                x: .5
                            }
                        }, r.createElement(T, {
                            key: "create-panel",
                            canCreateExtensionPanel: i,
                            createPanel: e.createPanel,
                            channelID: e.channelID
                        }));
                    return r.createElement(S.Va, {
                        display: S.W.Flex,
                        flexDirection: S.Y.Row,
                        flexWrap: S.Z.Wrap,
                        justifyContent: S.Ua.Center
                    }, n, o)
                }),
                oe = n("Oz8M"),
                ae = n("saS/"),
                re = n("Rsna"),
                se = n("ry+o"),
                le = n("Og0W");
            n("1pP+");
            ! function(e) {
                e.Container = "channel_panels_container_selector", e.EmptyMessage = "no_panels_message", e.Masonry = "masonry_container_selector", e.EditToggle = "channel_panels_toggle_selector", e.Sortable = "sortable_edit_panel_list_selector"
            }(Z || (Z = {}));
            var ce = {
                    columnWidth: 320,
                    fitWidth: !0,
                    gutter: 20,
                    horizontalOrder: !0,
                    transitionDuration: "0"
                },
                ue = function(e) {
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
                            var a;
                            t.setState({
                                popout: o.__assign({}, t.state.popout, (a = {}, a[Object(f.c)(e, n)] = i, a))
                            })
                        }, t.onExtensionPopoutRestored = function(e, n) {
                            var i = Object(f.c)(e, n),
                                o = t.state.popout[i];
                            o && o.window && o.window.close();
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
                                var i = Object(u.arrayMove)(n.panels, e.oldIndex, e.newIndex),
                                    o = i.map(function(e) {
                                        return e && e.id
                                    }).filter(function(e) {
                                        return e
                                    });
                                t.props.orderPanels(Object(h.a)({
                                    ids: o
                                })), Object(h.e)(le, {
                                    login: t.props.channelName
                                }, function(e) {
                                    return e.user && (e.user.panels = i), e
                                })
                            }
                        }, t.createPanel = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.createPanel(Object(h.a)(o.__assign({}, e, {
                                                channelID: this.props.channelID
                                            })))];
                                        case 1:
                                            return t = n.sent().data, Object(h.e)(le, {
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.props.deletePanel(Object(h.a)(e))];
                                        case 1:
                                            return t.sent(), Object(h.e)(le, {
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
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                            o = null;
                        if (n) return r.createElement(v.a, null);
                        o = this.state.isEditMode ? r.createElement(S.Va, null, this.renderEditPanels()) : t || !i || i && !i.panels.length ? r.createElement(S.xb, {
                            color: S.O.Alt2,
                            padding: {
                                y: 5
                            },
                            textAlign: S.Jb.Center,
                            "data-test-selector": Z.EmptyMessage
                        }, r.createElement(S.V, {
                            italic: !0,
                            fontSize: S.Aa.Size4
                        }, Object(d.d)("It's empty in here", "ChannelPanels"))) : r.createElement(c.a, {
                            className: "channel-panels-container",
                            options: ce,
                            "data-test-selector": Z.Masonry,
                            ref: this.saveMasonryRef
                        }, this.renderPanels());
                        var a = r.createElement(S.Va, {
                            display: S.W.Flex,
                            margin: {
                                bottom: 2
                            },
                            "data-test-selector": Z.EditToggle
                        }, r.createElement(S.Pb, {
                            id: "edit-panels-toggle",
                            onChange: this.toggleEditMode
                        }), r.createElement(S.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.V, null, Object(d.d)("Edit Panels", "Channel Panels"))));
                        return r.createElement(S.Va, {
                            className: "channel-panels",
                            "data-test-selector": Z.Container
                        }, this.canEditPanels() && a, o)
                    }, t.prototype.renderEditPanels = function() {
                        var e = this.props.channelPanelsData.user;
                        if (!e) return null;
                        var t = e.panels.filter(function(e) {
                            return e
                        });
                        return r.createElement(ie, {
                            axis: "xy",
                            channelID: this.props.channelID,
                            channelName: this.props.channelName,
                            createPanel: this.createPanel,
                            deletePanel: this.deletePanel,
                            distance: 20,
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
                        var o = this.getExtensionSlots();
                        return i.panels.map(function(t, i) {
                            if (!t) return null;
                            if ("ExtensionPanel" === t.__typename && t.slotID) {
                                var s = o[t.slotID];
                                if (s && !e.state.destroyedExtensions.includes(s.id)) {
                                    var l = void 0 !== e.state.popout[Object(f.d)(s)];
                                    return r.createElement("div", {
                                        key: t.id
                                    }, r.createElement(_.a, {
                                        channelID: e.props.channelID,
                                        channelName: e.props.channelName,
                                        installation: s,
                                        isFramePoppedOut: l,
                                        isPopout: !1,
                                        login: n && n.login,
                                        loginID: n && n.id,
                                        mode: a.ExtensionMode.Viewer,
                                        onExtensionLoaded: e.layoutMasonry,
                                        onExtensionPopoutClosed: e.onExtensionPopoutRestored,
                                        onExtensionPoppedOut: e.onExtensionPoppedOut,
                                        panel: t
                                    }))
                                }
                            } else if ("DefaultPanel" === t.__typename) return r.createElement(P, {
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
                            return t.extension.token && n.state === a.ExtensionActivationStatus.Active && (e[n.slot] = t), e
                        }, {}) : {}
                    }, t
                }(r.Component),
                de = Object(s.compose)(Object(g.c)("ChannelPanels"), Object(p.a)(le, {
                    name: "channelPanelsData",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(p.a)(oe, {
                    name: "createPanel"
                }), Object(p.a)(ae, {
                    name: "deletePanel"
                }), Object(p.a)(se, {
                    name: "updatePanel"
                }), Object(p.a)(re, {
                    name: "orderPanels"
                }), Object(m.c)({
                    name: "extensionsForChannel",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }))(ue);
            var pe = Object(i.connect)(function(e) {
                return {
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(de);
            n.d(t, "PublicProps", function() {}), n.d(t, "ChannelPanels", function() {
                return pe
            })
        },
        GNKm: function(e, t, n) {
            "use strict";
            var i = n("GOnX");
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState;
                if (!t) throw new Error("Missing required dependency: reporter.");

                function a(e) {
                    return o(e).object
                }
                return {
                    makeDetectable: function(e, a, r) {
                        r || (r = a, a = e, e = null), (e = e || {}).debug, i.isIE(8) ? r(a) : function(e, a) {
                            var r = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",
                                s = !1,
                                l = window.getComputedStyle(e),
                                c = e.offsetWidth,
                                u = e.offsetHeight;

                            function d() {
                                function n() {
                                    if ("static" === l.position) {
                                        e.style.position = "relative";
                                        var n = function(e, t, n, i) {
                                            var o = n[i];
                                            "auto" !== o && "0" !== function(e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(o) && (e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0)
                                        };
                                        n(t, e, l, "top"), n(t, e, l, "right"), n(t, e, l, "bottom"), n(t, e, l, "left")
                                    }
                                }
                                "" !== l.position && (n(), s = !0);
                                var c = document.createElement("object");
                                c.style.cssText = r, c.tabIndex = -1, c.type = "text/html", c.onload = function() {
                                    s || n(),
                                        function e(t, n) {
                                            t.contentDocument ? n(t.contentDocument) : setTimeout(function() {
                                                e(t, n)
                                            }, 100)
                                        }(this, function(t) {
                                            a(e)
                                        })
                                }, i.isIE() || (c.data = "about:blank"), e.appendChild(c), o(e).object = c, i.isIE() && (c.data = "about:blank")
                            }
                            o(e).startSize = {
                                width: c,
                                height: u
                            }, n ? n.add(d) : d()
                        }(a, r)
                    },
                    addListener: function(e, t) {
                        if (!a(e)) throw new Error("Element is not detectable by this strategy.");

                        function n() {
                            t(e)
                        }
                        i.isIE(8) ? (o(e).object = {
                            proxy: n
                        }, e.attachEvent("onresize", n)) : a(e).contentDocument.defaultView.addEventListener("resize", n)
                    },
                    uninstall: function(e) {
                        i.isIE(8) ? e.detachEvent("onresize", o(e).object.proxy) : e.removeChild(a(e)), delete o(e).object
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
        Hy43: function(e, t, n) {
            var i, o;
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
            ! function(a, r) {
                "use strict";
                i = [n("CUlp"), n("QK1G"), n("YVj6"), n("KK1e")], void 0 === (o = function(e, t, n, i) {
                    return function(e, t, n, i, o) {
                        var a = e.console,
                            r = e.jQuery,
                            s = function() {},
                            l = 0,
                            c = {};

                        function u(e, t) {
                            var n = i.getQueryElement(e);
                            if (n) {
                                this.element = n, r && (this.$element = r(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t);
                                var o = ++l;
                                this.element.outlayerGUID = o, c[o] = this, this._create();
                                var s = this._getOption("initLayout");
                                s && this.layout()
                            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
                        }
                        u.namespace = "outlayer", u.Item = o, u.defaults = {
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
                            for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0; o < t.length; o++) {
                                var a = t[o],
                                    r = new n(a, this);
                                i.push(r)
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
                            var i, o = this.options[e];
                            o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[e] = i ? n(i)[t] : o) : this[e] = 0
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
                                var o = h[i] || 1;
                                return n * o
                            }(e), this.stagger;
                            this.stagger = 0
                        }, d._positionItem = function(e, t, n, i, o) {
                            i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n))
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
                            var o = t.length;
                            if (t && o) {
                                var a = 0;
                                t.forEach(function(t) {
                                    t.once(e, r)
                                })
                            } else i();

                            function r() {
                                ++a == o && i()
                            }
                        }, d.dispatchEvent = function(e, t, n) {
                            var i = t ? [t].concat(n) : n;
                            if (this.emitEvent(e, i), r)
                                if (this.$element = this.$element || r(this.element), t) {
                                    var o = r.Event(t);
                                    o.type = e, this.$element.trigger(o, n)
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
                                o = n(e),
                                a = {
                                    left: t.left - i.left - o.marginLeft,
                                    top: t.top - i.top - o.marginTop,
                                    right: i.right - t.right - o.marginRight,
                                    bottom: i.bottom - t.bottom - o.marginBottom
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
                            delete c[t], delete this.element.outlayerGUID, r && r.removeData(this.element, this.constructor.namespace)
                        }, u.data = function(e) {
                            var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
                            return t && c[t]
                        }, u.create = function(e, t) {
                            var n = p(u);
                            return n.defaults = i.extend({}, u.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, u.compatOptions), n.namespace = e, n.data = u.data, n.Item = p(o), i.htmlInit(n, e), r && r.bridget && r.bridget(e, n), n
                        };
                        var h = {
                            ms: 1,
                            s: 1e3
                        };
                        return u.Item = o, u
                    }(a, e, t, n, i)
                }.apply(t, i)) || (e.exports = o)
            }(window)
        },
        ITnh: function(e, t, n) {
            e.exports = n("Lrin")()
        },
        KGBd: function(e, t, n) {
            "use strict";

            function i(e, t, n, i, o, a, r) {
                var s = document.createElement("canvas");
                s.width = a, s.height = r;
                var l = s.getContext("2d"),
                    c = "";
                if (l) {
                    var u = new Image;
                    u.src = e, l.drawImage(u, t, n, i, o, 0, 0, a, r), c = s.toDataURL("image/png")
                }
                return s.remove(), c
            }
            n.d(t, "a", function() {
                return i
            })
        },
        KK1e: function(e, t, n) {
            var i, o, a;
            window, o = [n("CUlp"), n("QK1G")], void 0 === (a = "function" == typeof(i = function(e, t) {
                "use strict";
                var n = document.documentElement.style,
                    i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
                    o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
                    a = {
                        WebkitTransition: "webkitTransitionEnd",
                        transition: "transitionend"
                    }[i],
                    r = {
                        transform: o,
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
                var l = s.prototype = Object.create(e.prototype);
                l.constructor = s, l._create = function() {
                    this._transn = {
                        ingProperties: {},
                        clean: {},
                        onEnd: {}
                    }, this.css({
                        position: "absolute"
                    })
                }, l.handleEvent = function(e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e)
                }, l.getSize = function() {
                    this.size = t(this.element)
                }, l.css = function(e) {
                    var t = this.element.style;
                    for (var n in e) {
                        var i = r[n] || n;
                        t[i] = e[n]
                    }
                }, l.getPosition = function() {
                    var e = getComputedStyle(this.element),
                        t = this.layout._getOption("originLeft"),
                        n = this.layout._getOption("originTop"),
                        i = e[t ? "left" : "right"],
                        o = e[n ? "top" : "bottom"],
                        a = parseFloat(i),
                        r = parseFloat(o),
                        s = this.layout.size; - 1 != i.indexOf("%") && (a = a / 100 * s.width), -1 != o.indexOf("%") && (r = r / 100 * s.height), a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= t ? s.paddingLeft : s.paddingRight, r -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = r
                }, l.layoutPosition = function() {
                    var e = this.layout.size,
                        t = {},
                        n = this.layout._getOption("originLeft"),
                        i = this.layout._getOption("originTop"),
                        o = n ? "paddingLeft" : "paddingRight",
                        a = n ? "left" : "right",
                        r = n ? "right" : "left",
                        s = this.position.x + e[o];
                    t[a] = this.getXValue(s), t[r] = "";
                    var l = i ? "paddingTop" : "paddingBottom",
                        c = i ? "top" : "bottom",
                        u = i ? "bottom" : "top",
                        d = this.position.y + e[l];
                    t[c] = this.getYValue(d), t[u] = "", this.css(t), this.emitEvent("layout", [this])
                }, l.getXValue = function(e) {
                    var t = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
                }, l.getYValue = function(e) {
                    var t = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
                }, l._transitionTo = function(e, t) {
                    this.getPosition();
                    var n = this.position.x,
                        i = this.position.y,
                        o = e == this.position.x && t == this.position.y;
                    if (this.setPosition(e, t), !o || this.isTransitioning) {
                        var a = e - n,
                            r = t - i,
                            s = {};
                        s.transform = this.getTranslate(a, r), this.transition({
                            to: s,
                            onTransitionEnd: {
                                transform: this.layoutPosition
                            },
                            isCleaning: !0
                        })
                    } else this.layoutPosition()
                }, l.getTranslate = function(e, t) {
                    var n = this.layout._getOption("originLeft"),
                        i = this.layout._getOption("originTop");
                    return "translate3d(" + (e = n ? e : -e) + "px, " + (t = i ? t : -t) + "px, 0)"
                }, l.goTo = function(e, t) {
                    this.setPosition(e, t), this.layoutPosition()
                }, l.moveTo = l._transitionTo, l.setPosition = function(e, t) {
                    this.position.x = parseFloat(e), this.position.y = parseFloat(t)
                }, l._nonTransition = function(e) {
                    for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
                }, l.transition = function(e) {
                    if (parseFloat(this.layout.options.transitionDuration)) {
                        var t = this._transn;
                        for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
                        for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
                        e.from && (this.css(e.from), this.element.offsetHeight), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
                    } else this._nonTransition(e)
                };
                var c = "opacity," + function(e) {
                    return e.replace(/([A-Z])/g, function(e) {
                        return "-" + e.toLowerCase()
                    })
                }(o);
                l.enableTransition = function() {
                    if (!this.isTransitioning) {
                        var e = this.layout.options.transitionDuration;
                        e = "number" == typeof e ? e + "ms" : e, this.css({
                            transitionProperty: c,
                            transitionDuration: e,
                            transitionDelay: this.staggerDelay || 0
                        }), this.element.addEventListener(a, this, !1)
                    }
                }, l.onwebkitTransitionEnd = function(e) {
                    this.ontransitionend(e)
                }, l.onotransitionend = function(e) {
                    this.ontransitionend(e)
                };
                var u = {
                    "-webkit-transform": "transform"
                };
                l.ontransitionend = function(e) {
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
                }, l.disableTransition = function() {
                    this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
                }, l._removeStyles = function(e) {
                    var t = {};
                    for (var n in e) t[n] = "";
                    this.css(t)
                };
                var d = {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionDelay: ""
                };
                return l.removeTransitionStyles = function() {
                    this.css(d)
                }, l.stagger = function(e) {
                    e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
                }, l.removeElem = function() {
                    this.element.parentNode.removeChild(this.element), this.css({
                        display: ""
                    }), this.emitEvent("remove", [this])
                }, l.remove = function() {
                    i && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                        this.removeElem()
                    }), this.hide()) : this.removeElem()
                }, l.reveal = function() {
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
                }, l.onRevealTransitionEnd = function() {
                    this.isHidden || this.emitEvent("reveal")
                }, l.getHideRevealTransitionEndProperty = function(e) {
                    var t = this.layout.options[e];
                    if (t.opacity) return "opacity";
                    for (var n in t) return n
                }, l.hide = function() {
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
                }, l.onHideTransitionEnd = function() {
                    this.isHidden && (this.css({
                        display: "none"
                    }), this.emitEvent("hide"))
                }, l.destroy = function() {
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
            }) ? i.apply(t, o) : i) || (e.exports = a)
        },
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
        Lrin: function(e, t, n) {
            "use strict";
            var i = n("vylb");

            function o() {}
            e.exports = function() {
                function e(e, t, n, o, a, r) {
                    if (r !== i) {
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
                return n.checkPropTypes = o, n.PropTypes = n, n
            }
        },
        NAeX: function(e, t, n) {},
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
            var o = s(n("ezMb")),
                a = s(n("hk6T")),
                r = s(n("BCEg"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.SortableContainer = o.default, t.SortableElement = a.default, t.SortableHandle = r.default, t.sortableContainer = o.default, t.sortableElement = a.default, t.sortableHandle = r.default
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
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            });
            var i, o, a = n("1hWM"),
                r = n("DMoW");

            function s(e) {
                return e.isBitsEnabled ? i.Bits : e.vendorCode && e.sku ? i.InExtensionPurchases : null
            }

            function l(e) {
                var t = [];
                return e.component && e.component.viewerURL && t.push(r.s.COMPONENT), e.panel && e.panel.viewerURL && t.push(r.s.PANEL), e.videoOverlay && e.videoOverlay.viewerURL && t.push(r.s.VIDEO_OVERLAY), t
            }

            function c(e) {
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
            }(o || (o = {}))
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
            ! function(o, a) {
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

                        function o(e) {
                            var n = getComputedStyle(e);
                            return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                        }
                        var a, r = !1;

                        function s(t) {
                            if (function() {
                                    if (r) return;
                                    r = !0;
                                    var t = document.createElement("div");
                                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                                    var n = document.body || document.documentElement;
                                    n.appendChild(t);
                                    var i = o(t);
                                    s.isBoxSizeOuter = a = 200 == e(i.width), n.removeChild(t)
                                }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                                var l = o(t);
                                if ("none" == l.display) return function() {
                                    for (var e = {
                                            width: 0,
                                            height: 0,
                                            innerWidth: 0,
                                            innerHeight: 0,
                                            outerWidth: 0,
                                            outerHeight: 0
                                        }, t = 0; t < i; t++) {
                                        var o = n[t];
                                        e[o] = 0
                                    }
                                    return e
                                }();
                                var c = {};
                                c.width = t.offsetWidth, c.height = t.offsetHeight;
                                for (var u = c.isBorderBox = "border-box" == l.boxSizing, d = 0; d < i; d++) {
                                    var p = n[d],
                                        h = l[p],
                                        m = parseFloat(h);
                                    c[p] = isNaN(m) ? 0 : m
                                }
                                var f = c.paddingLeft + c.paddingRight,
                                    g = c.paddingTop + c.paddingBottom,
                                    v = c.marginLeft + c.marginRight,
                                    y = c.marginTop + c.marginBottom,
                                    b = c.borderLeftWidth + c.borderRightWidth,
                                    E = c.borderTopWidth + c.borderBottomWidth,
                                    x = u && a,
                                    k = e(l.width);
                                !1 !== k && (c.width = k + (x ? 0 : f + b));
                                var C = e(l.height);
                                return !1 !== C && (c.height = C + (x ? 0 : g + E)), c.innerWidth = c.width - (f + b), c.innerHeight = c.height - (g + E), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c
                            }
                        }
                        return s
                    }()
                }.call(t, n, t, e)) || (e.exports = i)
            }(window)
        },
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
                        var o = e.get(n);
                        t[o] || (t[o] = []), t[o].push(i)
                    },
                    removeListener: function(e, t) {
                        for (var i = n(e), o = 0, a = i.length; o < a; ++o)
                            if (i[o] === t) {
                                i.splice(o, 1);
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
        TVJu: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("/MKj"),
                a = n("fvjX"),
                r = n("1/iK"),
                s = n("aCAx"),
                l = n("y5D0"),
                c = n("kRBY"),
                u = n("/HY+"),
                d = n("TSYQ"),
                p = n("1hWM"),
                h = n("q1tI"),
                m = n("oJmH"),
                f = n("/7QA"),
                g = n("eJ65"),
                v = n("edgk"),
                y = n("2xye"),
                b = n("4Wd7"),
                E = n("0Log"),
                x = n("geRD"),
                k = n("/aPz"),
                C = n("H31v");

            function S(e, t, n) {
                Object(x.e)(e, void 0, function(e) {
                    return e ? (e.currentUser && e.currentUser.bitsBalance && (e.currentUser.bitsBalance = n), e) : e
                }, function() {
                    return !t
                })
            }
            var I, w = n("4h+t"),
                P = n("BaCc"),
                _ = n("Ue10"),
                O = "test_selector_legal_disclaimer",
                D = "test_selector_confirm_button",
                T = "test_selector_buy_bits_button",
                L = "test_selector_cancel_button",
                R = function(e) {
                    var t = Object(w.a)(),
                        n = Object(f.d)("Confirm", "BitsConfrimationDialogue"),
                        i = Object(f.d)("Settings", "BitsConfrimationDialogue"),
                        o = h.createElement(_.T, {
                            to: "https://www.twitch.tv/settings/connections"
                        }, i),
                        a = h.createElement(_.Na, {
                            display: _.W.InlineFlex,
                            alignContent: _.e.Center,
                            alignItems: _.f.Center,
                            margin: {
                                left: .5
                            }
                        }, h.createElement("span", null, h.createElement(b.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: t,
                            size: b.b.ExtremelySmall,
                            display: _.W.InlineFlex,
                            amount: e.newBalance,
                            alignItems: _.f.Center,
                            formattedNumber: !0
                        }))),
                        r = Object(f.d)("After confirming, your Bits balance will be {newBalance}", {
                            newBalance: a
                        }, "BitsConfrimationDialogue"),
                        s = Object(f.d)('By clicking "{ConfirmText}," you agree to share your Twitch ID with {ExtensionName}. You can manage account connections under {Settings}.', {
                            ConfirmText: n,
                            ExtensionName: e.extensionName,
                            Settings: o
                        }, "BitsConfrimationDialogue");
                    return h.createElement(_.Va, {
                        className: "bits-confirmation-dialog"
                    }, h.createElement(_.Va, {
                        padding: 1
                    }, h.createElement(_.Va, {
                        margin: {
                            bottom: 1
                        },
                        display: _.W.Flex,
                        justifyContent: _.Ua.Between
                    }, h.createElement(_.Va, null, h.createElement(_.V, {
                        fontSize: _.Aa.Size5,
                        bold: !0
                    }, e.extensionItemLabel), h.createElement(_.V, null, e.extensionName)), h.createElement("span", null, h.createElement(b.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: t,
                        size: b.b.ExtraSmall,
                        display: _.W.InlineFlex,
                        amount: e.cost,
                        alignItems: _.f.Center
                    }))), h.createElement(_.Va, {
                        display: _.W.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, h.createElement(_.Na, {
                        display: _.W.Flex
                    }, h.createElement(_.V, null, r))), h.createElement(_.Va, {
                        display: _.W.Inline
                    }, h.createElement(_.Va, {
                        display: _.W.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, h.createElement(_.z, {
                        "data-test-selector": D,
                        onClick: function() {
                            e.onConfirm().then(function(t) {
                                "number" == typeof t && Number.isInteger(t) && S(P, e.userID, t)
                            }), S(P, e.userID, e.newBalance)
                        }
                    }, n)), h.createElement(_.Va, {
                        display: _.W.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, h.createElement(_.z, {
                        "data-test-selector": T,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: _.F.Hollow
                    }, e.buyBitsText)), h.createElement(_.Va, {
                        display: _.W.InlineBlock
                    }, h.createElement(_.z, {
                        "data-test-selector": L,
                        onClick: e.onClose,
                        type: _.F.Hollow
                    }, e.cancelText)))), h.createElement(_.xb, {
                        borderTop: !0,
                        padding: 1
                    }, h.createElement(_.V, {
                        "data-test-selector": O
                    }, s)))
                },
                N = "test_selector_buy_bits_button",
                F = "test_selector_cancel_button",
                B = Object(w.a)(),
                A = function(e) {
                    var t, n = e.bitsBalance - e.cost,
                        i = Math.abs(n),
                        o = h.createElement(_.Na, {
                            display: _.W.InlineFlex,
                            margin: {
                                x: .5
                            }
                        }, h.createElement("span", null, h.createElement(b.a, {
                            animated: !1,
                            showImage: !0,
                            showAmount: !0,
                            prefix: "Cheer",
                            bitsConfig: B,
                            size: b.b.ExtremelySmall,
                            display: _.W.InlineFlex,
                            amount: i,
                            alignItems: _.f.Center,
                            formattedNumber: !0
                        })));
                    return t = h.createElement(_.Na, {
                        display: _.W.Flex
                    }, h.createElement(_.V, null, Object(f.d)("You need {BitsRequired} more Bits to proceed.", {
                        BitsRequired: o
                    }, "BitsUpsellDialog"))), h.createElement(_.Va, {
                        className: "bits-upsell-dialog",
                        padding: 1
                    }, h.createElement(_.Va, {
                        margin: {
                            bottom: 1
                        },
                        display: _.W.Flex,
                        justifyContent: _.Ua.Between
                    }, h.createElement(_.Va, null, h.createElement(_.V, {
                        fontSize: _.Aa.Size5,
                        bold: !0
                    }, e.extensionItemLabel), h.createElement(_.V, null, e.extensionName)), h.createElement("span", null, h.createElement(b.a, {
                        animated: !1,
                        showImage: !0,
                        showAmount: !0,
                        prefix: "Cheer",
                        bitsConfig: B,
                        size: b.b.ExtraSmall,
                        display: _.W.InlineFlex,
                        amount: e.cost,
                        alignItems: _.f.Center
                    }))), h.createElement(_.Va, {
                        display: _.W.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, t), h.createElement(_.Va, {
                        display: _.W.Inline
                    }, h.createElement(_.Va, {
                        display: _.W.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, h.createElement(_.z, {
                        "data-test-selector": N,
                        linkTo: e.bitsLandingPageUrl,
                        targetBlank: !0,
                        type: _.F.Default
                    }, e.buyBitsText)), h.createElement(_.Va, {
                        display: _.W.InlineBlock
                    }, h.createElement(_.z, {
                        "data-test-selector": F,
                        onClick: e.onClose,
                        type: _.F.Hollow
                    }, e.cancelText))))
                },
                j = function(e) {
                    var t = Object(f.d)("Buy Bits", "UseBitsDialog"),
                        n = Object(f.d)("Cancel", "UseBitsDialog"),
                        i = null;
                    if (e)
                        if (e.bitsBalance >= e.cost) {
                            var o = e.bitsBalance - e.cost;
                            i = h.createElement(R, {
                                cost: e.cost,
                                extensionName: e.extensionName,
                                extensionItemLabel: e.extensionItemLabel,
                                newBalance: o,
                                bitsBalance: e.bitsBalance,
                                bitsLandingPageUrl: "https://twitch.tv/bits",
                                buyBitsText: t,
                                cancelText: n,
                                onConfirm: e.onConfirm,
                                onClose: e.onClose,
                                userID: e.userID
                            })
                        } else i = h.createElement(A, {
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
                    return h.createElement(_.Va, {
                        className: "use-bits-dialog"
                    }, i)
                },
                z = "test_selectors_close_button",
                U = function(e) {
                    var t = Object(f.d)("Sorry, something went wrong. Please try again.", "UseBitsErrorDialog"),
                        n = Object(f.d)("Close", "UseBitsErrorDialog");
                    return h.createElement(_.Va, {
                        className: "use-bits-error-dialog",
                        padding: 1
                    }, h.createElement(_.Na, {
                        display: _.W.Flex,
                        alignContent: _.e.Center,
                        margin: {
                            bottom: 1
                        }
                    }, h.createElement(_.V, null, t)), h.createElement(_.z, {
                        "data-test-selector": z,
                        onClick: e.onClose
                    }, n))
                },
                W = n("5zC2"),
                M = n("22qk"),
                V = n("5IFo"),
                H = n("JVUd"),
                q = n("4qQ0"),
                G = n("0HeA"),
                Y = n("yR8l"),
                Q = n("eDVu"),
                X = n("KtNF"),
                K = (n("NAeX"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.data.currentUser && this.props.startTimer && this.props.startTimer()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || !this.props.data.currentUser) return null;
                        var e = this.props.showSuccessText ? h.createElement(_.V, {
                                type: _.Nb.Span,
                                className: "extension-bits-balance-success"
                            }, Object(f.d)("Success!", "ExtensionPanelBitsBalanceDialog")) : null,
                            t = h.createElement(X.a, {
                                withImage: !0,
                                withText: !0,
                                animated: !1,
                                count: this.props.data.currentUser.bitsBalance || 0,
                                bitsConfig: Object(w.a)()
                            });
                        return h.createElement(_.Va, {
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
                }(h.Component)),
                J = Object(m.compose)(Object(Q.a)(function(e) {
                    return function(e, t, n) {
                        return {
                            topic: n ? Object(k.B)(n) : "",
                            type: E.PubsubMessageType.UserBitsBalanceUpdate,
                            mutator: function(e, t) {
                                return t && e.message_type === C.b.Balance ? (t.currentUser && e.data && (t.currentUser.bitsBalance = e.data.balance), t) : t
                            },
                            skip: !t || !n,
                            query: e
                        }
                    }(P, e.channelID, e.userID)
                }), Object(Y.a)(P))(K);
            ! function(e) {
                e.ExtensionName = "extension_name_selector", e.ShowExtensionButton = "show_extension_button_selector"
            }(I || (I = {}));
            var Z = function(e) {
                var t = e.extension.views.panel ? e.extension.views.panel.height : 300;
                return h.createElement(_.Oa, {
                    alignItems: _.f.Center,
                    background: _.r.Alt2,
                    borderLeft: !0,
                    borderTop: !0,
                    borderRight: !0,
                    display: _.W.Flex,
                    flexDirection: _.Y.Column,
                    fullWidth: !0,
                    justifyContent: _.Ua.Center,
                    color: _.O.Base,
                    position: _.db.Relative
                }, h.createElement("div", {
                    style: {
                        height: t
                    }
                }, h.createElement("img", {
                    src: e.extension.iconUrl
                }), h.createElement(_.Va, {
                    margin: 1,
                    textAlign: _.Jb.Center
                }, h.createElement(_.V, {
                    fontSize: _.Aa.Size5
                }, Object(f.d)("{name} is popped out.", {
                    name: h.createElement(_.V, {
                        "data-test-selector": I.ExtensionName,
                        type: _.Nb.Span,
                        bold: !0
                    }, e.extension.name)
                }, "ExtensionPopoutPlaceholder"))), h.createElement(_.z, {
                    "data-test-selector": I.ShowExtensionButton,
                    onClick: e.onExtensionShowClicked
                }, Object(f.d)("Show Extension", "ExtensionPopoutPlaceholder"))))
            };
            Z.displayName = "ExtensionPopoutPlaceholder";
            var $, ee = function(e) {
                    return h.createElement(_.Va, {
                        padding: 1
                    }, h.createElement(_.Va, null, h.createElement("span", null, Object(f.d)("You must be logged in to use this extension feature.", "FeatureNeedsAuthDialog")), h.createElement(_.xb, {
                        borderTop: !0,
                        margin: {
                            y: 1
                        }
                    }), h.createElement(_.Va, {
                        display: _.W.Flex,
                        justifyContent: _.Ua.Start
                    }, h.createElement(_.z, {
                        "data-test-selector": "qa-needs-auth-close-selector",
                        type: _.F.Hollow,
                        onClick: e.close
                    }, Object(f.d)("Close", "FeatureNeedsAuthDialog")))))
                },
                te = function(e) {
                    var t = function(t) {
                        return h.createElement(_.Va, null, h.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, t), h.createElement(_.xb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), h.createElement(_.Va, {
                            display: _.W.Flex,
                            justifyContent: _.Ua.Start
                        }, h.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Close", "FollowDialog"))))
                    };
                    if (null === e.currentFollowRequest.options.channel) return h.createElement(_.Va, {
                        padding: 1
                    }, t(Object(f.d)("The channel you are attempting to follow does not exist.", "FollowDialog")));
                    var n = Object(f.d)("You are about to follow {name}.", {
                            name: h.createElement(_.V, {
                                type: _.Nb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        i = Object(f.d)("Receive updates on {name}'s activity, including when they go live and upload videos or clips, on mobile, email, and web.", {
                            name: e.currentFollowRequest.options.channel
                        }, "FollowDialog"),
                        o = h.createElement(_.Va, null, h.createElement("span", {
                            "data-test-selector": "confirmation_message_selector"
                        }, n), h.createElement(_.xb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), h.createElement(_.Va, {
                            display: _.W.Flex,
                            justifyContent: _.Ua.Start
                        }, h.createElement(_.Va, {
                            margin: {
                                right: 1
                            }
                        }, h.createElement(_.z, {
                            type: _.F.Default,
                            "data-test-selector": "toggle_follow_button_selector",
                            onClick: e.confirmFollow
                        }, Object(f.d)("Follow", "FollowDialog"))), h.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: e.cancelFollow
                        }, Object(f.d)("Cancel", "FollowDialog"))), h.createElement(_.xb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), h.createElement(_.Va, {
                            display: _.W.Flex,
                            justifyContent: _.Ua.Start
                        }, h.createElement(_.Va, {
                            flexGrow: 1
                        }, h.createElement(_.V, {
                            type: _.Nb.Span,
                            fontSize: _.Aa.Size5
                        }, Object(f.d)("Notifications", "FollowDialog"))), h.createElement(_.Pb, {
                            id: "ext-follow-notification",
                            checked: e.currentFollowRequest.notifications,
                            onChange: e.onNotificationsChanged
                        })), h.createElement(_.V, {
                            type: _.Nb.Span,
                            color: _.O.Alt2,
                            fontSize: _.Aa.Size7
                        }, i)),
                        a = Object(f.d)("You are already following {name}.", {
                            name: h.createElement(_.V, {
                                type: _.Nb.Span,
                                bold: !0
                            }, e.currentFollowRequest.options.channel)
                        }, "FollowDialog"),
                        r = e.currentFollowRequest.options.isFollowing ? t(a) : o;
                    return h.createElement(_.Va, {
                        padding: 1
                    }, r)
                };
            ! function(e) {
                e.ManagePermissionsLink = "manage_permissions_link_selector", e.ToggleIdentityBalloon = "toggle_identity_balloon_selector", e.ToggleIdentityButton = "toggle_identity_button_selector"
            }($ || ($ = {}));
            var ne, ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGrantPermissionsButton = function() {
                            var e = Object(f.d)("Grant Permissions", "ExtensionPanel");
                            return h.createElement(_.Qb, {
                                label: e,
                                direction: _.Sb.Top,
                                align: _.Rb.Right,
                                offsetX: ".6rem"
                            }, h.createElement(_.Va, {
                                display: _.W.Flex,
                                alignItems: _.f.Center
                            }, h.createElement(_.A, {
                                ariaLabel: e,
                                icon: _.nb.PermissionsAdd
                            })))
                        }, t.renderRevokePermissionsButton = function() {
                            var e = Object(f.d)("Revoke Permissions", "ExtensionPanel");
                            return h.createElement(_.Qb, {
                                label: e,
                                direction: _.Sb.Top,
                                align: _.Rb.Right,
                                offsetX: ".6rem"
                            }, h.createElement(_.Va, {
                                display: _.W.Flex,
                                alignItems: _.f.Center
                            }, h.createElement(_.A, {
                                ariaLabel: e,
                                icon: _.nb.PermissionsAdded,
                                statusAlertIcon: _.nb.PermissionsRemove
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
                                name: h.createElement(_.V, {
                                    type: _.Nb.Strong
                                }, this.props.extension.name)
                            }, "Extension Panel"),
                            o = Object(f.d)("You are revoking the following access for {name}:", {
                                name: h.createElement(_.V, {
                                    type: _.Nb.Strong
                                }, this.props.extension.name)
                            }, "Extension Panel");
                        return h.createElement(g.a, {
                            display: _.W.InlineFlex,
                            ref: this.saveGrantPermissionsBalloonRef,
                            onToggle: this.props.onDialogToggle
                        }, h.createElement("span", {
                            "data-test-selector": $.ToggleIdentityBalloon
                        }, n), h.createElement(_.u, {
                            direction: _.v.TopRight,
                            size: _.w.Small
                        }, h.createElement(_.Va, {
                            padding: 1
                        }, h.createElement(_.Va, null, t ? o : i), h.createElement(_.xb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), h.createElement(_.Va, null, h.createElement(_.V, {
                            type: _.Nb.P,
                            bold: !0
                        }, Object(f.d)("Your Twitch User ID", "Extension Panel")), h.createElement(_.V, {
                            type: _.Nb.P
                        }, Object(f.d)("Allows this extension to know your User ID on Twitch.", "Extension Panel")), h.createElement("a", {
                            "data-test-selector": $.ManagePermissionsLink,
                            href: "https://twitch.tv/settings/connections",
                            target: "_blank"
                        }, Object(f.d)("Manage Permissions", "Extension Panel"))), h.createElement(_.xb, {
                            borderTop: !0,
                            margin: {
                                y: 1
                            }
                        }), h.createElement(_.Va, {
                            display: _.W.Flex,
                            justifyContent: _.Ua.Center
                        }, h.createElement(_.Va, {
                            margin: {
                                right: 1
                            }
                        }, h.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: this.onCancelIdentityLink
                        }, Object(f.d)("Cancel", "Extension Panel"))), h.createElement(_.z, {
                            type: t ? _.F.Alert : _.F.Default,
                            "data-test-selector": $.ToggleIdentityButton,
                            onClick: this.toggleIdentity
                        }, t ? Object(f.d)("Revoke", "Extension Panel") : Object(f.d)("Grant", "Extension Panel"))))))
                    }, t
                }(h.Component),
                oe = n("x65u");
            (ne || (ne = {})).PopoutButton = "popout_button_selector";
            var ae, re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!Object(oe.a)()) return null;
                        var e = Object(f.d)("Pop Out Extension", "PopoutButton");
                        return h.createElement("span", null, h.createElement(_.Qb, {
                            label: e,
                            direction: _.Sb.Top,
                            align: _.Rb.Right,
                            offsetX: ".6rem"
                        }, h.createElement(_.Va, {
                            display: _.W.Flex,
                            alignItems: _.f.Center
                        }, h.createElement(_.A, {
                            "data-test-selector": ne.PopoutButton,
                            onClick: this.onClick,
                            ariaLabel: e,
                            icon: _.nb.Popout
                        }))))
                    }, t
                }(h.Component),
                se = function(e) {
                    var t, n = e.cancel,
                        i = e.confirm,
                        o = e.isLoggedIn,
                        a = e.isLinked,
                        r = e.isLinkEnabled,
                        s = e.purchaseIntentPayload;
                    return t = o ? h.createElement(_.Va, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, h.createElement(_.Va, {
                        padding: {
                            bottom: 2
                        }
                    }, h.createElement(_.V, {
                        fontSize: _.Aa.Size5,
                        bold: !0
                    }, Object(f.d)("In-Extension Purchase", "PurchaseConfirmation"))), h.createElement(_.Va, null, h.createElement(_.Ha, {
                        gutterSize: _.Ia.Default
                    }, h.createElement(_.P, {
                        cols: {
                            default: 9
                        }
                    }, h.createElement(_.V, {
                        fontSize: _.Aa.Size6,
                        bold: !0
                    }, s.title)), h.createElement(_.P, {
                        cols: {
                            default: 3
                        }
                    }, h.createElement(_.Va, {
                        fullWidth: !0,
                        textAlign: _.Jb.Right
                    }, h.createElement(_.V, {
                        fontSize: _.Aa.Size6,
                        bold: !0
                    }, s.displayPrice))))), h.createElement(_.Va, {
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, h.createElement(_.V, {
                        color: _.O.Alt2
                    }, Object(f.d)("{name} extension", {
                        name: s.extensionName
                    }, "PurchaseConfirmation"))), h.createElement(_.Va, {
                        fullWidth: !0
                    }, h.createElement(_.V, {
                        className: "t-extension-panel__description",
                        color: _.O.Alt2
                    }, s.description), h.createElement(_.xb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), h.createElement(_.Va, null, h.createElement(_.Ha, {
                        gutterSize: _.Ia.Default
                    }, h.createElement(_.P, {
                        cols: {
                            default: 4
                        }
                    }, h.createElement(_.z, {
                        "data-test-selector": "purchase_ui_buy_selector",
                        onClick: i,
                        fullWidth: !0
                    }, Object(f.d)("Buy", "PurchaseConfirmation"))), h.createElement(_.P, {
                        cols: {
                            default: 3
                        }
                    }, h.createElement(_.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: _.F.Hollow
                    }, Object(f.d)("Cancel", "PurchaseConfirmation")))), !a && h.createElement(_.Va, null, h.createElement(_.xb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), h.createElement(_.V, {
                        fontSize: _.Aa.Size8,
                        color: _.O.Alt2
                    }, Object(f.d)('By clicking "Buy", you agree to share your Twitch ID with {name}. You can manage account connections under', {
                        name: s.extensionName
                    }, "PurchaseConfirmation"), " ", h.createElement("a", {
                        href: "/settings/connections"
                    }, Object(f.d)("Settings", "PurchaseConfirmation")), "."))))) : h.createElement(_.Va, {
                        padding: {
                            x: 1,
                            bottom: 1,
                            top: .5
                        },
                        fullWidth: !0
                    }, h.createElement(_.Va, {
                        padding: {
                            top: 2
                        }
                    }, h.createElement(_.V, {
                        fontSize: _.Aa.Size5
                    }, Object(f.d)("You must be logged in to use this extension feature.", "PurchaseConfirmation"))), h.createElement(_.xb, {
                        borderBottom: !0,
                        margin: {
                            y: 1
                        }
                    }), h.createElement(_.z, {
                        "data-test-selector": "purchase_ui_cancel_selector",
                        onClick: n,
                        type: _.F.Hollow
                    }, Object(f.d)("Close", "PurchaseConfirmation"))), h.createElement(_.u, {
                        direction: _.v.TopRight,
                        "data-test-selector": "purchase_ui_selector",
                        noTail: !r,
                        offsetX: "10px",
                        offsetY: "-2px",
                        tailOffset: 33,
                        show: !0,
                        size: _.w.Medium
                    }, h.createElement("button", {
                        className: "t-extension-panel__close t-extension-panel__top-controls",
                        onClick: n
                    }, h.createElement(_.mb, {
                        asset: _.nb.Close,
                        height: 11,
                        width: 11
                    })), h.createElement(_.Va, {
                        display: _.W.Flex,
                        flexGrow: 1,
                        flexDirection: _.Y.Column,
                        justifyContent: _.Ua.Center,
                        alignItems: _.f.Center
                    }, t))
                };
            (ae || (ae = {})).RestoreDefaultSizeButton = "restore-default-size-button";
            var le, ce = function(e) {
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
                    return h.createElement("span", null, h.createElement(_.Qb, {
                        label: e,
                        direction: _.Sb.Top,
                        align: _.Rb.Right,
                        offsetX: ".6rem"
                    }, h.createElement(_.Va, {
                        display: _.W.Flex,
                        alignItems: _.f.Center
                    }, h.createElement(_.A, {
                        "data-test-selector": ae.RestoreDefaultSizeButton,
                        onClick: this.onClick,
                        ariaLabel: e,
                        icon: _.nb.FullscreenExit
                    }))))
                }, t
            }(h.Component);
            n("bVvr");
            ! function(e) {
                e.ExtensionDescriptionButton = "extension_description_button_selector", e.ExtensionReportButton = "extension_report_button_selector", e.ExtensionPanel = "extension_panel_selector", e.ExtensionDetailsLink = "extension_details_link_selector", e.ToggleFollowButton = "toggle_follow_button_selector", e.ConfirmationMessage = "confirmation_message_selector", e.PopoutButton = "popout_button_selector", e.UseBitsConfirmationToggleBalloonWrapper = "confirmation_message_selector"
            }(le || (le = {}));
            var ue = 3e3,
                de = 32,
                pe = function(e) {
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
                            purchaseIntent: null
                        }, t.renderExtensionFrame = function() {
                            var e, n = d("extension-panel-extension-frame", ((e = {})["extension-panel-extension-frame__popout"] = t.props.isPopout, e));
                            return h.createElement(_.Va, null, h.createElement(_.xb, {
                                borderTop: !0,
                                borderRight: !0,
                                borderLeft: !0
                            }, h.createElement(W.a, {
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
                            })), h.createElement(_.Va, {
                                position: _.db.Relative,
                                fullWidth: !0
                            }, t.purchaseUI()))
                        }, t.renderFollowConfirmation = function() {
                            return null === t.state.currentFollowRequest ? null : h.createElement(g.a, {
                                ref: t.saveFollowConfirmationBalloonRef
                            }, h.createElement("span", null), h.createElement(_.u, {
                                direction: _.v.TopRight,
                                size: _.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, h.createElement(te, {
                                currentFollowRequest: t.state.currentFollowRequest,
                                confirmFollow: t.confirmFollow,
                                onNotificationsChanged: t.onNotificationsChanged,
                                cancelFollow: t.cancelFollow
                            })))
                        }, t.renderFeatureNeedsAuthBalloon = function() {
                            return h.createElement(g.a, {
                                ref: t.saveFeatureNeedsAuthBalloonRef
                            }, h.createElement("span", null), h.createElement(_.u, {
                                direction: _.v.TopRight,
                                size: _.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, h.createElement(ee, {
                                close: t.dismissLoginPrompt
                            })))
                        }, t.renderUseBitsConfirmation = function() {
                            if (!t.state.currentUseBitsRequest || !t.state.currentUseBitsRequest.options) return null;
                            var e = null;
                            if (t.state.currentUseBitsRequest.options.error) e = h.createElement(U, {
                                error: t.state.currentUseBitsRequest.options.error,
                                onClose: t.cancelUseBits
                            });
                            else if (t.state.currentUseBitsRequest.options.payload) {
                                var n = t.state.currentUseBitsRequest.options.payload,
                                    i = n.bitsBalance,
                                    o = n.extensionItemLabel,
                                    a = n.extensionName,
                                    r = t.state.currentUseBitsRequest.options.payload.bitsRequired;
                                void 0 === r && (r = 0), e = h.createElement(j, {
                                    bitsBalance: i,
                                    cost: r,
                                    extensionItemLabel: o,
                                    extensionName: a,
                                    userID: t.props.loginID,
                                    onClose: t.cancelUseBits,
                                    onConfirm: t.confirmUseBits
                                })
                            }
                            return h.createElement(g.a, {
                                "data-test-selector": le.UseBitsConfirmationToggleBalloonWrapper,
                                ref: t.saveUseBitsConfirmationBalloonRef,
                                onToggle: t.onToggleUseBitsConfirmationBalloon
                            }, h.createElement("span", null), h.createElement(_.u, {
                                direction: _.v.TopRight,
                                size: _.w.Medium,
                                noTail: !0,
                                offsetY: "2rem",
                                offsetX: "-2rem"
                            }, e))
                        }, t.getCurrentMedium = function() {
                            if (t.props.isPopout) return y.PageviewMedium.ExtensionPage;
                            switch (t.props.mode) {
                                case p.ExtensionMode.Dashboard:
                                    return y.PageviewMedium.DashboardLive;
                                case p.ExtensionMode.Config:
                                    return y.PageviewMedium.ExtensionConfiguration;
                                case p.ExtensionMode.Viewer:
                            }
                            return y.PageviewMedium.Channel
                        }, t.subscribeFrameEvents = function() {
                            t.extensionFrameAPI && (t.extensionFrameAPI.on("showBitsBalance", t.onShowBitsBalance), t.extensionFrameAPI.on("showUseBitsSuccess", t.onShowUseBitsSuccess), t.extensionFrameAPI.on("identityLinked", t.onIdentityLinked), t.extensionFrameAPI.on("extensionFrameLoaded", t.onExtensionLoaded), t.extensionFrameAPI.on("requestModal", t.onModalRequested))
                        }, t.unsubscribeFrameEvents = function() {
                            t.extensionFrameAPI && (t.extensionFrameAPI.off("showBitsBalance", t.onShowBitsBalance), t.extensionFrameAPI.off("showUseBitsSuccess", t.onShowUseBitsSuccess), t.extensionFrameAPI.off("identityLinked", t.onIdentityLinked), t.extensionFrameAPI.off("extensionFrameLoaded", t.onExtensionLoaded), t.extensionFrameAPI.off("requestModal", t.onModalRequested))
                        }, t.getPopoutHeight = function() {
                            var e = 300;
                            return t.extension.views.panel && (e = t.extension.views.panel.height), e + de
                        }, t.getExtensionPopoutUrl = function() {
                            var e = t.props.installation.activationConfig,
                                n = t.extension.clientId + "-" + t.extension.version;
                            t.extension.state === p.ExtensionState.Released && (n = t.extension.clientId);
                            var i = "/popout/" + t.props.channelName + "/extensions/" + n + "/" + e.anchor;
                            return t.props.mode !== p.ExtensionMode.Viewer && (i = i + "/" + t.props.mode), i
                        }, t.onExtensionPopoutClosed = function() {
                            if (!t.state.popoutRestoreIntentTracked) {
                                var e = t.props.installation.activationConfig;
                                Object(V.f)({
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
                                    o = n.version;
                                t.props.onExtensionPopoutClosed(i, o)
                            }
                        }, t.onExtensionPopout = function() {
                            var e = t.props.installation.activationConfig;
                            Object(V.g)({
                                extensionID: t.extension.clientId,
                                extensionVersion: t.extension.version,
                                anchor: e.anchor,
                                mode: t.props.mode,
                                loginID: t.props.loginID,
                                channelID: t.props.channelID
                            });
                            var n = "width=320,height=" + t.getPopoutHeight() + ",resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no",
                                i = window.open(t.getExtensionPopoutUrl(), "_blank", n);
                            if (i && (t.onExtensionPopoutClosed && Object(v.a)(i, t.onExtensionPopoutClosed), i.opener = null), t.props.onExtensionPoppedOut) {
                                var o = t.extension,
                                    a = o.id,
                                    r = o.version;
                                t.props.onExtensionPoppedOut(a, r, i)
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
                                return t.hideBitsBalanceTimeout && (clearTimeout(t.hideBitsBalanceTimeout), t.hideBitsBalanceTimeout = null, t.startHideBitsBalanceTimer()), h.createElement(J, {
                                    showSuccessText: n,
                                    startTimer: t.startHideBitsBalanceTimer,
                                    channelID: t.props.channelID,
                                    userID: t.props.loginID
                                })
                            }
                        }, t.startHideBitsBalanceTimer = function() {
                            t.hideBitsBalanceTimeout || (t.hideBitsBalanceTimeout = setTimeout(t.hideBitsBalance, ue))
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
                                case p.FunctionAction.UseBitsPromptRequired:
                                    var o = e,
                                        a = o.options;
                                    t.onUseBitsRequested(a, o.resultCallback, o.defaultResult);
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
                                o = e.name;
                            t.props.isLoggedIn ? t.props.showReportExtensionModal({
                                reportContext: {
                                    contentType: q.a.Extension,
                                    contentID: n + "-" + i,
                                    targetUserID: t.props.channelID
                                },
                                title: Object(f.d)("Report {extensionName}", {
                                    extensionName: o
                                }, "ReportExtensionModal")
                            }) : t.props.promptLogin()
                        }, t.dismissLoginPrompt = function() {
                            t.onDismissLoginPrompt && t.onDismissLoginPrompt(), t.onDismissLoginPrompt = null
                        }, t.trackImpression = function() {
                            if (t.props.panel) {
                                var e = t.props.panel.id;
                                e && Object(G.a)(y.SpadeEventType.PanelImpression, {
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
                            i = Object(M.d)(this.extension.id, this.extension.version) + "?tt_medium=" + this.getCurrentMedium() + "&tt_content=" + y.PageviewContent.ExtensionPanel,
                            o = d(this.props.className || "extension-panel", ((e = {})["extension-panel__popout"] = this.props.isPopout, e)),
                            a = this.props.isFramePoppedOut ? h.createElement(Z, {
                                extension: this.extension,
                                onExtensionShowClicked: this.onExtensionPopoutClosed
                            }) : this.renderExtensionFrame();
                        return h.createElement(_.Va, {
                            className: o,
                            margin: {
                                bottom: 2,
                                right: 2
                            },
                            "data-test-selector": le.ExtensionPanel
                        }, a, h.createElement(_.xb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            flexDirection: _.Y.Column,
                            display: _.W.Flex
                        }, h.createElement(_.xb, {
                            display: _.W.Flex,
                            alignItems: _.f.Center
                        }, h.createElement(_.Va, {
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, h.createElement("a", {
                            href: i,
                            target: "_blank",
                            "data-test-selector": le.ExtensionDetailsLink
                        }, this.extension.name)), this.props.isFramePoppedOut || this.props.isPopout ? null : h.createElement(re, {
                            "data-test-selector": le.PopoutButton,
                            onClick: this.onExtensionPopout
                        }), h.createElement(ce, {
                            isPopout: this.props.isPopout
                        }), h.createElement(ie, {
                            extension: this.extension,
                            isDialogOpen: this.state.isIdentityLinkOpen,
                            onDialogToggle: this.onIdentityLinkDialogToggle,
                            isLinked: this.state.isLinked,
                            isLinkEnabled: this.state.isLinkEnabled,
                            onLinkIdentity: this.onLinkIdentity,
                            onUnlinkIdentity: this.onUnlinkIdentity
                        }), this.renderFollowConfirmation(), this.renderFeatureNeedsAuthBalloon(), this.renderUseBitsConfirmation(), h.createElement(g.a, null, h.createElement("span", null, h.createElement(_.Qb, {
                            label: t,
                            direction: _.Sb.Top,
                            align: _.Rb.Right,
                            offsetX: ".6rem"
                        }, h.createElement(_.Va, {
                            display: _.W.Flex,
                            alignItems: _.f.Center
                        }, h.createElement(_.A, {
                            "data-test-selector": le.ExtensionDescriptionButton,
                            icon: _.nb.More,
                            ariaLabel: t
                        })))), h.createElement(_.u, {
                            direction: _.v.TopRight,
                            size: _.w.Medium,
                            offsetX: ".6rem"
                        }, h.createElement(_.Va, {
                            display: _.W.Flex,
                            justifyContent: _.Ua.Between,
                            flexWrap: _.Z.NoWrap
                        }, h.createElement(_.xb, {
                            padding: 1,
                            flexShrink: 3
                        }, h.createElement(_.V, null, this.extension.summary)), h.createElement(_.xb, {
                            borderLeft: !0,
                            margin: 1
                        }, h.createElement(_.A, {
                            "data-test-selector": le.ExtensionReportButton,
                            ariaLabel: n,
                            icon: _.nb.ChatRiskFlag,
                            onClick: this.handleReportExtensionClick
                        })))))), this.renderBitsBalanceUI()))
                    }, t.prototype.purchaseUI = function() {
                        var e = this,
                            t = this.state && this.state.purchaseIntent;
                        if (null !== t) {
                            var n = this.state,
                                i = n.isLinked,
                                o = n.isLinkEnabled,
                                a = t,
                                r = a.payload,
                                s = a.makePurchase;
                            return h.createElement(se, {
                                confirm: function() {
                                    s(), e.setState({
                                        purchaseIntent: null
                                    })
                                },
                                cancel: this.cancelPurchase,
                                isLinked: i,
                                isLinkEnabled: o,
                                purchaseIntentPayload: r,
                                isLoggedIn: this.props.isLoggedIn
                            })
                        }
                    }, t
                }(h.Component),
                he = Object(m.compose)(Object(H.a)("ExtensionPanel", {
                    pixels: 100
                }))(pe);

            function me(e) {
                return {
                    isLoggedIn: Object(c.f)(e),
                    languageCode: Object(c.b)(e),
                    locale: e.session.locale
                }
            }

            function fe(e) {
                return Object(a.bindActionCreators)({
                    promptLogin: function() {
                        return Object(l.e)(r.a.ReportHoster)
                    },
                    showReportExtensionModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(s.d)(u.a, t)
                    }
                }, e)
            }
            var ge = Object(o.connect)(me, fe)(he);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return me
            }), n.d(t, !1, function() {
                return fe
            }), n.d(t, "a", function() {
                return ge
            })
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
                        var o = t.generate();
                        return i.id = o, o
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
        YVj6: function(e, t, n) {
            var i, o;
            ! function(a, r) {
                i = [n("x0Ue")], void 0 === (o = function(e) {
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
                            var o = [];
                            return (e = n.makeArray(e)).forEach(function(e) {
                                if (e instanceof HTMLElement)
                                    if (i) {
                                        t(e, i) && o.push(e);
                                        for (var n = e.querySelectorAll(i), a = 0; a < n.length; a++) o.push(n[a])
                                    } else o.push(e)
                            }), o
                        }, n.debounceMethod = function(e, t, n) {
                            var i = e.prototype[t],
                                o = t + "Timeout";
                            e.prototype[t] = function() {
                                var e = this[o];
                                e && clearTimeout(e);
                                var t = arguments,
                                    a = this;
                                this[o] = setTimeout(function() {
                                    i.apply(a, t), delete a[o]
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
                        return n.htmlInit = function(t, o) {
                            n.docReady(function() {
                                var a = n.toDashed(o),
                                    r = "data-" + a,
                                    s = document.querySelectorAll("[" + r + "]"),
                                    l = document.querySelectorAll(".js-" + a),
                                    c = n.makeArray(s).concat(n.makeArray(l)),
                                    u = r + "-options",
                                    d = e.jQuery;
                                c.forEach(function(e) {
                                    var n, a = e.getAttribute(r) || e.getAttribute(u);
                                    try {
                                        n = a && JSON.parse(a)
                                    } catch (t) {
                                        return void(i && i.error("Error parsing " + r + " on " + e.className + ": " + t))
                                    }
                                    var s = new t(e, n);
                                    d && d.data(e, o, s)
                                })
                            })
                        }, n
                    }(a, e)
                }.apply(t, i)) || (e.exports = o)
            }(window)
        },
        "ZAO/": function(e, t, n) {},
        abgr: function(e, t, n) {},
        bVvr: function(e, t, n) {},
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
                o = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                i = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                            } catch (e) {
                                o = !0, a = e
                            } finally {
                                try {
                                    !i && s.return && s.return()
                                } finally {
                                    if (o) throw a
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
                var t, n, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
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
                                o = n.shouldCancelStart;
                            if (2 === e.button || o(e)) return !1;
                            t._touched = !0, t._pos = {
                                x: e.pageX,
                                y: e.pageY
                            };
                            var a = (0, p.closest)(e.target, function(e) {
                                return null != e.sortableInfo
                            });
                            if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                                var r = t.props.useDragHandle,
                                    s = a.sortableInfo,
                                    l = s.index,
                                    c = s.collection;
                                if (r && !(0, p.closest)(e.target, function(e) {
                                        return null != e.sortableHandle
                                    })) return;
                                t.manager.active = {
                                    index: l,
                                    collection: c
                                }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), i || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                    return t.handlePress(e)
                                }, t.props.pressDelay))
                            }
                        }, t.nodeIsChild = function(e) {
                            return e.sortableInfo.manager === t.manager
                        }, t.handleMove = function(e) {
                            var n = t.props,
                                i = n.distance,
                                o = n.pressThreshold;
                            if (!t.state.sorting && t._touched) {
                                t._delta = {
                                    x: t._pos.x - e.pageX,
                                    y: t._pos.y - e.pageY
                                };
                                var a = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                                i || o && !(o && a >= o) ? i && a >= i && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
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
                                    o = i.axis,
                                    a = i.getHelperDimensions,
                                    r = i.helperClass,
                                    s = i.hideSortableGhost,
                                    l = i.onSortStart,
                                    c = i.useWindowAsScrollContainer,
                                    u = n.node,
                                    d = n.collection,
                                    h = u.sortableInfo.index,
                                    f = (0, p.getElementMargin)(u),
                                    g = t.container.getBoundingClientRect(),
                                    v = a({
                                        index: h,
                                        node: u,
                                        collection: d
                                    });
                                t.node = u, t.margin = f, t.width = v.width, t.height = v.height, t.marginOffset = {
                                    x: t.margin.left + t.margin.right,
                                    y: Math.max(t.margin.top, t.margin.bottom)
                                }, t.boundingClientRect = u.getBoundingClientRect(), t.containerBoundingRect = g, t.index = h, t.newIndex = h, t.axis = {
                                    x: o.indexOf("x") >= 0,
                                    y: o.indexOf("y") >= 0
                                }, t.offsetEdge = t.getEdgeOffset(u), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                    top: t.scrollContainer.scrollTop,
                                    left: t.scrollContainer.scrollLeft
                                }, t.initialWindowScroll = {
                                    top: window.pageYOffset,
                                    left: window.pageXOffset
                                };
                                var y, b = u.querySelectorAll("input, textarea, select"),
                                    E = u.cloneNode(!0),
                                    x = [].concat(m(E.querySelectorAll("input, textarea, select")));
                                if (x.forEach(function(e, t) {
                                        "file" !== e.type && b[t] && (e.value = b[t].value)
                                    }), t.helper = t.document.body.appendChild(E), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - f.top + "px", t.helper.style.left = t.boundingClientRect.left - f.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", s && (t.sortableGhost = u, u.style.visibility = "hidden", u.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (c ? 0 : g.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (c ? t.contentWindow.innerWidth : g.left + g.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (c ? 0 : g.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (c ? t.contentWindow.innerHeight : g.top + g.height) - t.boundingClientRect.top - t.height / 2), r)(y = t.helper.classList).add.apply(y, m(r.split(" ")));
                                t.listenerNode = e.touches ? u : t.contentWindow, p.events.move.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                                }), p.events.end.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                                }), t.setState({
                                    sorting: !0,
                                    sortingIndex: h
                                }), l && l({
                                    node: u,
                                    index: h,
                                    collection: d
                                }, e)
                            }
                        }, t.handleSortMove = function(e) {
                            var n = t.props.onSortMove;
                            e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                        }, t.handleSortEnd = function(e) {
                            var n = t.props,
                                i = n.hideSortableGhost,
                                o = n.onSortEnd,
                                a = t.manager.active.collection;
                            t.listenerNode && (p.events.move.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortMove)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                            })), t.helper.parentNode.removeChild(t.helper), i && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                            for (var r = t.manager.refs[a], s = 0, l = r.length; s < l; s++) {
                                var c = r[s],
                                    u = c.node;
                                c.edgeOffset = null, u.style[p.vendorPrefix + "Transform"] = "", u.style[p.vendorPrefix + "TransitionDuration"] = ""
                            }
                            clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                                sorting: !1,
                                sortingIndex: null
                            }), "function" == typeof o && o({
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
                                o = {
                                    x: 10,
                                    y: 10
                                };
                            e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, i.y = o.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, i.x = o.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, i.y = o.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, i.x = o.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
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
                                o = this.props.contentWindow || window;
                            this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, c.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = i ? this.document.body : this.container, this.contentWindow = "function" == typeof o ? o() : o;
                            var a = function(t) {
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                    return e.container.addEventListener(n, e.events[t], !1)
                                })
                            };
                            for (var r in this.events) a(r)
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
                                n = o(t, 2),
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
                                var o = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                                (0, u.default)(null !== o, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), i = o[1]
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
                                r = {
                                    x: a.x - this.initialOffset.x,
                                    y: a.y - this.initialOffset.y
                                };
                            if (r.y -= window.pageYOffset - this.initialWindowScroll.top, r.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = r, i) {
                                var s = this.getLockPixelOffsets(),
                                    l = o(s, 2),
                                    c = l[0],
                                    u = l[1],
                                    d = {
                                        x: this.width / 2 - c.x,
                                        y: this.height / 2 - c.y
                                    },
                                    h = {
                                        x: this.width / 2 - u.x,
                                        y: this.height / 2 - u.y
                                    };
                                r.x = (0, p.limit)(this.minTranslate.x + d.x, this.maxTranslate.x - h.x, r.x), r.y = (0, p.limit)(this.minTranslate.y + d.y, this.maxTranslate.y - h.y, r.y)
                            }
                            "x" === n ? r.y = 0 : "y" === n && (r.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + r.x + "px," + r.y + "px, 0)"
                        }
                    }, {
                        key: "animateNodes",
                        value: function() {
                            var e = this.props,
                                t = e.transitionDuration,
                                n = e.hideSortableGhost,
                                i = this.manager.getOrderedRefs(),
                                o = {
                                    left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                    top: this.scrollContainer.scrollTop - this.initialScroll.top
                                },
                                a = {
                                    left: this.offsetEdge.left + this.translate.x + o.left,
                                    top: this.offsetEdge.top + this.translate.y + o.top
                                },
                                r = {
                                    top: window.pageYOffset - this.initialWindowScroll.top,
                                    left: window.pageXOffset - this.initialWindowScroll.left
                                };
                            this.newIndex = null;
                            for (var s = 0, l = i.length; s < l; s++) {
                                var c = i[s].node,
                                    u = c.sortableInfo.index,
                                    d = c.offsetWidth,
                                    h = c.offsetHeight,
                                    m = {
                                        width: this.width > d ? d / 2 : this.width / 2,
                                        height: this.height > h ? h / 2 : this.height / 2
                                    },
                                    f = {
                                        x: 0,
                                        y: 0
                                    },
                                    g = i[s].edgeOffset;
                                g || (i[s].edgeOffset = g = this.getEdgeOffset(c));
                                var v = s < i.length - 1 && i[s + 1],
                                    y = s > 0 && i[s - 1];
                                v && !v.edgeOffset && (v.edgeOffset = this.getEdgeOffset(v.node)), u !== this.index ? (t && (c.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? u < this.index && (a.left + r.left - m.width <= g.left && a.top + r.top <= g.top + m.height || a.top + r.top + m.height <= g.top) ? (f.x = this.width + this.marginOffset.x, g.left + f.x > this.containerBoundingRect.width - m.width && (f.x = v.edgeOffset.left - g.left, f.y = v.edgeOffset.top - g.top), null === this.newIndex && (this.newIndex = u)) : u > this.index && (a.left + r.left + m.width >= g.left && a.top + r.top + m.height >= g.top || a.top + r.top + m.height >= g.top + h) && (f.x = -(this.width + this.marginOffset.x), g.left + f.x < this.containerBoundingRect.left + m.width && (f.x = y.edgeOffset.left - g.left, f.y = y.edgeOffset.top - g.top), this.newIndex = u) : u > this.index && a.left + r.left + m.width >= g.left ? (f.x = -(this.width + this.marginOffset.x), this.newIndex = u) : u < this.index && a.left + r.left <= g.left + m.width && (f.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = u)) : this.axis.y && (u > this.index && a.top + r.top + m.height >= g.top ? (f.y = -(this.height + this.marginOffset.y), this.newIndex = u) : u < this.index && a.top + r.top <= g.top + m.height && (f.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = u))), c.style[p.vendorPrefix + "Transform"] = "translate3d(" + f.x + "px," + f.y + "px,0)") : n && (this.sortableGhost = c, c.style.visibility = "hidden", c.style.opacity = 0)
                            }
                            null == this.newIndex && (this.newIndex = this.index)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, u.default)(h.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = h.withRef ? "wrappedInstance" : null;
                            return s.default.createElement(e, i({
                                ref: t
                            }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                        }
                    }]), n
                }(r.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
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
                    axis: l.default.oneOf(["x", "y", "xy"]),
                    distance: l.default.number,
                    lockAxis: l.default.string,
                    helperClass: l.default.string,
                    transitionDuration: l.default.number,
                    contentWindow: l.default.any,
                    onSortStart: l.default.func,
                    onSortMove: l.default.func,
                    onSortEnd: l.default.func,
                    shouldCancelStart: l.default.func,
                    pressDelay: l.default.number,
                    useDragHandle: l.default.bool,
                    useWindowAsScrollContainer: l.default.bool,
                    hideSortableGhost: l.default.bool,
                    lockToContainerEdges: l.default.bool,
                    lockOffset: l.default.oneOfType([l.default.number, l.default.string, l.default.arrayOf(l.default.oneOfType([l.default.number, l.default.string]))]),
                    getContainer: l.default.func,
                    getHelperDimensions: l.default.func
                }, t.childContextTypes = {
                    manager: l.default.object.isRequired
                }, n
            };
            var r = n("q1tI"),
                s = h(r),
                l = h(n("17x9")),
                c = n("i8i4"),
                u = h(n("QLaP")),
                d = h(n("8ENv")),
                p = n("jTc+");

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
        },
        hNNL: function(e, t, n) {
            var i, o, a;
            /*!
             * Masonry v4.2.0
             * Cascading grid layout library
             * http://masonry.desandro.com
             * MIT License
             * by David DeSandro
             */
            window, o = [n("Hy43"), n("QK1G")], void 0 === (a = "function" == typeof(i = function(e, t) {
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
                        o = this.containerWidth + this.gutter,
                        a = o / i,
                        r = i - o % i;
                    a = Math[r && r < 1 ? "round" : "floor"](a), this.cols = Math.max(a, 1)
                }, i.getContainerWidth = function() {
                    var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                        n = t(e);
                    this.containerWidth = n && n.innerWidth
                }, i._getItemLayoutPosition = function(e) {
                    e.getSize();
                    var t = e.size.outerWidth % this.columnWidth,
                        n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
                    n = Math.min(n, this.cols);
                    for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), o = {
                            x: this.columnWidth * i.col,
                            y: i.y
                        }, a = i.y + e.size.outerHeight, r = n + i.col, s = i.col; s < r; s++) this.colYs[s] = a;
                    return o
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
                        o = this._getOption("originLeft") ? i.left : i.right,
                        a = o + n.outerWidth,
                        r = Math.floor(o / this.columnWidth);
                    r = Math.max(0, r);
                    var s = Math.floor(a / this.columnWidth);
                    s -= a % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
                    for (var l = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, c = r; c <= s; c++) this.colYs[c] = Math.max(l, this.colYs[c])
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
            }) ? i.apply(t, o) : i) || (e.exports = a)
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
                o = function() {
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
                    }(n, t), o(n, [{
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
                            var n = this.node = (0, l.findDOMNode)(this);
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
                            return (0, c.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = d.withRef ? "wrappedInstance" : null;
                            return r.default.createElement(e, i({
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
                r = d(a),
                s = d(n("17x9")),
                l = n("i8i4"),
                c = d(n("QLaP")),
                u = n("jTc+");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        "jTc+": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = function(e, t, n) {
                var i = e.slice(0);
                if (n >= i.length)
                    for (var o = n - i.length; 1 + o--;) i.push(void 0);
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
        pQUg: function(e, t, n) {
            var i = "undefined" != typeof window,
                o = i ? window.Masonry || n("hNNL") : null,
                a = i ? n("vX6Q") : null,
                r = n("3OWR"),
                s = n("7sSR"),
                l = n("sEfC"),
                c = n("Puqe"),
                u = n("ITnh"),
                d = n("q1tI"),
                p = n("fhzG"),
                h = {
                    enableResizableChildren: u.bool,
                    disableImagesLoaded: u.bool,
                    onImagesLoaded: u.func,
                    updateOnEachImageLoad: u.bool,
                    options: u.object,
                    elementType: u.string,
                    onLayoutComplete: u.func,
                    onRemoveComplete: u.func
                },
                m = p({
                    masonry: !1,
                    erd: void 0,
                    latestKnownDomChildren: [],
                    displayName: "MasonryComponent",
                    propTypes: h,
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
                        this.masonry && !e || (this.masonry = new o(this.masonryContainer, this.props.options), this.props.onLayoutComplete && this.masonry.on("layoutComplete", this.props.onLayoutComplete), this.props.onRemoveComplete && this.masonry.on("removeComplete", this.props.onRemoveComplete), this.latestKnownDomChildren = this.getCurrentDomChildren())
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
                            o = n.filter(function(e) {
                                return !~t.indexOf(e)
                            }),
                            a = 0,
                            r = o.filter(function(e) {
                                var t = a === n.indexOf(e);
                                return t && a++, t
                            }),
                            s = o.filter(function(e) {
                                return -1 === r.indexOf(e)
                            }),
                            l = [];
                        return 0 === i.length && (l = t.filter(function(e, t) {
                            return t !== n.indexOf(e)
                        })), this.latestKnownDomChildren = n, {
                            old: t,
                            new: n,
                            removed: i,
                            appended: s,
                            prepended: r,
                            moved: l,
                            forceItemReload: e
                        }
                    },
                    performLayout: function() {
                        var e = this.diffDomChildren(),
                            t = e.forceItemReload || e.moved.length > 0;
                        e.removed.length > 0 && (this.props.enableResizableChildren && e.removed.forEach(this.erd.removeAllListeners, this.erd), this.masonry.remove(e.removed), t = !0), e.appended.length > 0 && (this.masonry.appended(e.appended), 0 === e.prepended.length && (t = !0), this.props.enableResizableChildren && e.appended.forEach(this.listenToElementResize, this)), e.prepended.length > 0 && (this.masonry.prepended(e.prepended), this.props.enableResizableChildren && e.prepended.forEach(this.listenToElementResize, this)), t && this.masonry.reloadItems(), this.masonry.layout()
                    },
                    imagesLoaded: function() {
                        this.props.disableImagesLoaded || a(this.masonryContainer).on(this.props.updateOnEachImageLoad ? "progress" : "always", l(function(e) {
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
                        var e = c(this.props, Object.keys(h));
                        return d.createElement(this.props.elementType, r({}, e, {
                            ref: this.setRef
                        }), this.props.children)
                    }
                });
            e.exports = m, e.exports.default = m
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
        vX6Q: function(e, t, n) {
            var i, o;
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
            ! function(a, r) {
                "use strict";
                i = [n("CUlp")], void 0 === (o = function(e) {
                    return function(e, t) {
                        var n = e.jQuery,
                            i = e.console;

                        function o(e, t) {
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
                            }(e), this.options = o({}, this.options), "function" == typeof t ? i = t : o(this.options, t), i && this.on("always", i), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(function() {
                                this.check()
                            }.bind(this))
                        }
                        a.prototype = Object.create(t.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                            this.images = [], this.elements.forEach(this.addElementImages, this)
                        }, a.prototype.addElementImages = function(e) {
                            "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                            var t = e.nodeType;
                            if (t && r[t]) {
                                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                                    var o = n[i];
                                    this.addImage(o)
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
                        var r = {
                            1: !0,
                            9: !0,
                            11: !0
                        };

                        function s(e) {
                            this.img = e
                        }

                        function l(e, t) {
                            this.url = e, this.element = t, this.img = new Image
                        }
                        return a.prototype.addElementBackgroundImages = function(e) {
                            var t = getComputedStyle(e);
                            if (t)
                                for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                                    var o = i && i[2];
                                    o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
                                }
                        }, a.prototype.addImage = function(e) {
                            var t = new s(e);
                            this.images.push(t)
                        }, a.prototype.addBackground = function(e, t) {
                            var n = new l(e, t);
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
                        }, l.prototype = Object.create(s.prototype), l.prototype.check = function() {
                            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                        }, l.prototype.unbindEvents = function() {
                            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                        }, l.prototype.confirm = function(e, t) {
                            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
                        }, a.makeJQueryPlugin = function(t) {
                            (t = t || e.jQuery) && ((n = t).fn.imagesLoaded = function(e, t) {
                                return new a(this, e, t).jqDeferred.promise(n(this))
                            })
                        }, a.makeJQueryPlugin(), a
                    }(a, e)
                }.apply(t, i)) || (e.exports = o)
            }("undefined" != typeof window ? window : this)
        },
        vylb: function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        wnTG: function(e, t, n) {
            "use strict";
            var i = n("UL9e");

            function o() {
                var e = {},
                    t = 0,
                    n = 0,
                    i = 0;
                return {
                    add: function(o, a) {
                        a || (a = o, o = 0), o > n ? n = o : o < i && (i = o), e[o] || (e[o] = []), e[o].push(a), t++
                    },
                    process: function() {
                        for (var t = i; t <= n; t++)
                            for (var o = e[t], a = 0; a < o.length; a++)(0, o[a])()
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
                var r, s = o(),
                    l = !1;

                function c() {
                    for (l = !0; s.size();) {
                        var e = s;
                        s = o(), e.process()
                    }
                    l = !1
                }

                function u() {
                    r = function(e) {
                        return function(e) {
                            return setTimeout(e, 0)
                        }(e)
                    }(c)
                }
                return {
                    add: function(e, t) {
                        !l && a && n && 0 === s.size() && u(), s.add(e, t)
                    },
                    force: function(e) {
                        l || (void 0 === e && (e = n), r && (function(e) {
                            clearTimeout(e)
                        }(r), r = null), e ? u() : c())
                    }
                }
            }
        },
        x0Ue: function(e, t, n) {
            var i, o;
            ! function(a, r) {
                "use strict";
                void 0 === (o = "function" == typeof(i = r) ? i.call(t, n, t, e) : i) || (e.exports = o)
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
        x65u: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA"),
                o = "extensions_popout_enabled";

            function a() {
                return "on" === i.b.get(o, "off")
            }
        },
        xVpv: function(e, t, n) {},
        yUZ2: function(e, t, n) {
            "use strict";
            var i = n("t3DW").forEach;
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState,
                    a = (e.stateHandler.hasState, e.idHandler);
                if (!n) throw new Error("Missing required dependency: batchProcessor");
                if (!t) throw new Error("Missing required dependency: reporter.");
                var r = function() {
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

                function l(e, n, i) {
                    if (e.addEventListener) e.addEventListener(n, i);
                    else {
                        if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                        e.attachEvent("on" + n, i)
                    }
                }

                function c(e, n, i) {
                    if (e.removeEventListener) e.removeEventListener(n, i);
                    else {
                        if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                        e.detachEvent("on" + n, i)
                    }
                }

                function u(e) {
                    return o(e).container.childNodes[0].childNodes[0].childNodes[0]
                }

                function d(e) {
                    return o(e).container.childNodes[0].childNodes[0].childNodes[1]
                }
                return function(e, t) {
                    if (!document.getElementById(e)) {
                        var n = t + "_animation",
                            i = t + "_animation_active",
                            o = "/* Created by the element-resize-detector library. */\n";
                        o += "." + t + " > div::-webkit-scrollbar { display: none; }\n\n", o += "." + i + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + n + "; animation-name: " + n + "; }\n", o += "@-webkit-keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
                            function(t, n) {
                                n = n || function(e) {
                                    document.head.appendChild(e)
                                };
                                var i = document.createElement("style");
                                i.innerHTML = t, i.id = e, n(i)
                            }(o += "@keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
                    }
                }("erd_scroll_detection_scrollbar_style", s), {
                    makeDetectable: function(e, c, p) {
                        function h() {
                            if (e.debug) {
                                var n = Array.prototype.slice.call(arguments);
                                if (n.unshift(a.get(c), "Scroll: "), t.log.apply) t.log.apply(null, n);
                                else
                                    for (var i = 0; i < n.length; i++) t.log(n[i])
                            }
                        }

                        function m(e) {
                            var t = o(e).container.childNodes[0],
                                n = getComputedStyle(t);
                            return !n.width || -1 === n.width.indexOf("px")
                        }

                        function f() {
                            var e = getComputedStyle(c),
                                t = {};
                            return t.position = e.position, t.width = c.offsetWidth, t.height = c.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                        }

                        function g() {
                            if (h("storeStyle invoked."), o(c)) {
                                var e = f();
                                o(c).style = e
                            } else h("Aborting because element has been uninstalled")
                        }

                        function v(e, t, n) {
                            o(e).lastWidth = t, o(e).lastHeight = n
                        }

                        function y() {
                            return 2 * r.width + 1
                        }

                        function b() {
                            return 2 * r.height + 1
                        }

                        function E(e) {
                            return e + 10 + y()
                        }

                        function x(e) {
                            return e + 10 + b()
                        }

                        function k(e, t, n) {
                            var i = u(e),
                                o = d(e),
                                a = E(t),
                                r = x(n),
                                s = function(e) {
                                    return 2 * e + y()
                                }(t),
                                l = function(e) {
                                    return 2 * e + b()
                                }(n);
                            i.scrollLeft = a, i.scrollTop = r, o.scrollLeft = s, o.scrollTop = l
                        }

                        function C() {
                            var e = o(c).container;
                            if (!e) {
                                (e = document.createElement("div")).className = s, e.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;", o(c).container = e,
                                    function(e) {
                                        e.className += " " + s + "_animation_active"
                                    }(e), c.appendChild(e);
                                var t = function() {
                                    o(c).onRendered && o(c).onRendered()
                                };
                                l(e, "animationstart", t), o(c).onAnimationStart = t
                            }
                            return e
                        }

                        function S() {
                            if (h("Injecting elements"), o(c)) {
                                ! function() {
                                    var e = o(c).style;
                                    if ("static" === e.position) {
                                        c.style.position = "relative";
                                        var n = function(e, t, n, i) {
                                            var o = n[i];
                                            "auto" !== o && "0" !== function(e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(o) && (e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0)
                                        };
                                        n(t, c, e, "top"), n(t, c, e, "right"), n(t, c, e, "bottom"), n(t, c, e, "left")
                                    }
                                }();
                                var e = o(c).container;
                                e || (e = C());
                                var n = r.width,
                                    i = r.height,
                                    a = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + function(e, t, n, i) {
                                        return e = e ? e + "px" : "0", t = t ? t + "px" : "0", n = n ? n + "px" : "0", "left: " + e + "; top: " + t + "; right: " + (i = i ? i + "px" : "0") + "; bottom: " + n + ";"
                                    }(-(1 + n), -(1 + i), -i, -n),
                                    u = document.createElement("div"),
                                    d = document.createElement("div"),
                                    p = document.createElement("div"),
                                    m = document.createElement("div"),
                                    f = document.createElement("div"),
                                    g = document.createElement("div");
                                u.dir = "ltr", u.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;", u.className = s, d.className = s, d.style.cssText = a, p.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", m.style.cssText = "position: absolute; left: 0; top: 0;", f.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", g.style.cssText = "position: absolute; width: 200%; height: 200%;", p.appendChild(m), f.appendChild(g), d.appendChild(p), d.appendChild(f), u.appendChild(d), e.appendChild(u), l(p, "scroll", v), l(f, "scroll", y), o(c).onExpandScroll = v, o(c).onShrinkScroll = y
                            } else h("Aborting because element has been uninstalled");

                            function v() {
                                o(c).onExpand && o(c).onExpand()
                            }

                            function y() {
                                o(c).onShrink && o(c).onShrink()
                            }
                        }

                        function I() {
                            function r(e, t, n) {
                                var i = function(e) {
                                        return u(e).childNodes[0]
                                    }(e),
                                    o = E(t),
                                    a = x(n);
                                i.style.width = o + "px", i.style.height = a + "px"
                            }

                            function s(i) {
                                var s = c.offsetWidth,
                                    u = c.offsetHeight;
                                h("Storing current size", s, u), v(c, s, u), n.add(0, function() {
                                    if (o(c))
                                        if (l()) {
                                            if (e.debug) {
                                                var n = c.offsetWidth,
                                                    i = c.offsetHeight;
                                                n === s && i === u || t.warn(a.get(c), "Scroll: Size changed before updating detector elements.")
                                            }
                                            r(c, s, u)
                                        } else h("Aborting because element container has not been initialized");
                                    else h("Aborting because element has been uninstalled")
                                }), n.add(1, function() {
                                    o(c) ? l() ? k(c, s, u) : h("Aborting because element container has not been initialized") : h("Aborting because element has been uninstalled")
                                }), i && n.add(2, function() {
                                    o(c) ? l() ? i() : h("Aborting because element container has not been initialized") : h("Aborting because element has been uninstalled")
                                })
                            }

                            function l() {
                                return !!o(c).container
                            }

                            function p() {
                                h("notifyListenersIfNeeded invoked");
                                var e = o(c);
                                return void 0 === o(c).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? h("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? h("Not notifying: Size already notified") : (h("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, void i(o(c).listeners, function(e) {
                                    e(c)
                                }))
                            }

                            function f() {
                                if (h("Scroll detected."), m(c)) h("Scroll event fired while unrendered. Ignoring...");
                                else {
                                    var e = c.offsetWidth,
                                        t = c.offsetHeight;
                                    e !== c.lastWidth || t !== c.lastHeight ? (h("Element size changed."), s(p)) : h("Element size has not changed (" + e + "x" + t + ").")
                                }
                            }
                            if (h("registerListenersAndPositionElements invoked."), o(c)) {
                                o(c).onRendered = function() {
                                    if (h("startanimation triggered."), m(c)) h("Ignoring since element is still unrendered...");
                                    else {
                                        h("Element rendered.");
                                        var e = u(c),
                                            t = d(c);
                                        0 !== e.scrollLeft && 0 !== e.scrollTop && 0 !== t.scrollLeft && 0 !== t.scrollTop || (h("Scrollbars out of sync. Updating detector elements..."), s(p))
                                    }
                                }, o(c).onExpand = f, o(c).onShrink = f;
                                var g = o(c).style;
                                r(c, g.width, g.height)
                            } else h("Aborting because element has been uninstalled")
                        }

                        function w() {
                            if (h("finalizeDomMutation invoked."), o(c)) {
                                var e = o(c).style;
                                v(c, e.width, e.height), k(c, e.width, e.height)
                            } else h("Aborting because element has been uninstalled")
                        }

                        function P() {
                            p(c)
                        }

                        function _() {
                            h("Installing..."), o(c).listeners = [],
                                function() {
                                    var e = f();
                                    o(c).startSize = {
                                        width: e.width,
                                        height: e.height
                                    }, h("Element start size", o(c).startSize)
                                }(), n.add(0, g), n.add(1, S), n.add(2, I), n.add(3, w), n.add(4, P)
                        }
                        p || (p = c, c = e, e = null), e = e || {}, h("Making detectable..."),
                            function(e) {
                                return ! function(e) {
                                    return e === e.ownerDocument.body || e.ownerDocument.body.contains(e)
                                }(e) || null === getComputedStyle(e)
                            }(c) ? (h("Element is detached"), C(), h("Waiting until element is attached..."), o(c).onRendered = function() {
                                h("Element is now attached"), _()
                            }) : _()
                    },
                    addListener: function(e, t) {
                        if (!o(e).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
                        o(e).listeners.push(t)
                    },
                    uninstall: function(e) {
                        var t = o(e);
                        t && (t.onExpandScroll && c(u(e), "scroll", t.onExpandScroll), t.onShrinkScroll && c(d(e), "scroll", t.onShrinkScroll), t.onAnimationStart && c(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
                    }
                }
            }
        }
    }
]);