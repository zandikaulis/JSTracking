(window.webpackJsonp = window.webpackJsonp || []).push([
    [67], {
        "+5a/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GQLLoadingPage"
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
                                        value: "login"
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
                    end: 49
                }
            };
            n.loc.source = {
                body: "query GQLLoadingPage {\ncurrentUser {\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "+6bW": function(e, t, n) {},
        "+6oQ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevOnlyLoadableParent"
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
                                        value: "hasPrime"
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
                    end: 59
                }
            };
            n.loc.source = {
                body: "query DevOnlyLoadableParent {\ncurrentUser {\nid\nhasPrime\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1rIY": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                o = n("2Ygb");

            function l(e, t) {
                var n = a.createContext(t),
                    l = n.Consumer,
                    s = n.Provider;
                return {
                    withContext: function(t) {
                        return function(n) {
                            var i;
                            return (i = function(e) {
                                function i() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return r.__extends(i, e), i.prototype.render = function() {
                                    var e = this;
                                    return a.createElement(l, null, function(i) {
                                        var o = t(i);
                                        return a.createElement(n, r.__assign({}, e.props, o))
                                    })
                                }, i
                            }(a.Component)).displayName = Object(o.a)("With" + e, n), i
                        }
                    },
                    InnerProvider: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r.__extends(n, t), n.prototype.componentDidMount = function() {
                            "object" === typeof this.props.value && this.props.value || i.k.error(new Error(n.displayName + " rendered without an appropriate initial value"), "Set an initial value in your provider component at mount time.")
                        }, n.prototype.render = function() {
                            return a.createElement(s, {
                                value: this.props.value
                            }, this.props.children)
                        }, n.displayName = "Inner" + e + "Provider", n
                    }(a.Component)
                }
            }
        },
        J4PI: function(e, t, n) {},
        LL7G: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Dev_Only_GQL"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "shouldSkip"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "includeUser"
                            },
                            name: {
                                kind: "Name",
                                value: "currentUser"
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
                                            value: "shouldSkip"
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
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "skipUser"
                            },
                            name: {
                                kind: "Name",
                                value: "currentUser"
                            },
                            arguments: [],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                            value: "shouldSkip"
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
                                        value: "id"
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
                    end: 174
                }
            };
            n.loc.source = {
                body: "query Dev_Only_GQL($shouldSkip: Boolean!) {\ncurrentUser {\nid\n}\nincludeUser: currentUser @include(if: $shouldSkip) {\nid\n}\nskipUser: currentUser @skip(if: $shouldSkip) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        NrqC: function(e, t, n) {},
        VQbD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return h
            });
            var r, a, i = n("mrSG"),
                o = n("TSYQ"),
                l = n("q1tI"),
                s = n("/7QA"),
                c = n("GnwI"),
                u = n("Ue10"),
                d = (n("J4PI"), "[data-js-selector=carousel-content]");
            ! function(e) {
                e.Previous = "previous", e.Next = "next"
            }(a || (a = {}));
            var m = ((r = {})[a.Previous] = u.tb.AngleLeft, r[a.Next] = u.tb.AngleRight, r),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            childrenRendered: !1,
                            windowWidth: window.innerWidth
                        }, t.onResize = function() {
                            t.setState({
                                windowWidth: window.innerWidth
                            })
                        }, t.moveCarouselForward = function() {
                            if (!t.isForwardButtonDisabled() && t.props.items) {
                                for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), r = t.state.currentElementIndex + 1, a = r; a < e.length; a++) {
                                    if (e[a].getBoundingClientRect().right - t.getBaseOffset() > n) {
                                        r = a;
                                        break
                                    }
                                }
                                t.setState({
                                    currentElementIndex: r
                                })
                            }
                        }, t.moveCarouselBackward = function() {
                            if (!t.isBackButtonDisabled()) {
                                for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), r = t.state.currentElementIndex - 1, a = r - 1; a >= 0; a--) {
                                    if (n < -1 * (e[a].getBoundingClientRect().left - t.getBaseOffset())) break;
                                    r = a
                                }
                                t.setState({
                                    currentElementIndex: r
                                })
                            }
                        }, t.isForwardButtonDisabled = function() {
                            if (!t.carouselContainerRef) return !0;
                            if (t.props.items) {
                                var e = t.getCarouselWidth(),
                                    n = t.getCarouselChildren();
                                if (t.state.currentElementIndex >= n.length - 1) return !0;
                                var r = n[t.state.currentElementIndex].getBoundingClientRect().left;
                                if (n[n.length - 1].getBoundingClientRect().right - r > e) return !1
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getCarouselChildren = function() {
                            if (!t.carouselContainerRef) return [];
                            var e = t.getCarouselSlider();
                            return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                        }, t.getCarouselSlider = function() {
                            return t.carouselContainerRef.querySelector(d)
                        }, t.getCarouselWidth = function() {
                            return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().width : 0
                        }, t.getBaseOffset = function() {
                            return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().left : 0
                        }, t.getSliderOffset = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.getCarouselSlider();
                            return e ? e.getBoundingClientRect().left : 0
                        }, t.getChildOffset = function(e) {
                            var n = t.getCarouselChildren();
                            return 0 === n.length || n.length <= e ? 0 : n[e].getBoundingClientRect().left
                        }, t.transformString = function() {
                            return -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px"
                        }, t.refHandler = function(e) {
                            return t.state.childrenRendered || null === t.props.items || t.setState({
                                childrenRendered: !0
                            }), t.carouselContainerRef = e
                        }, t.renderNavButton = function(e, n, r) {
                            var i, c = ((i = {})[a.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), i[a.Next] = Object(s.d)("next", "MediaCarouselNavButton"), i),
                                d = o("media-carousel__button", {
                                    "media-carousel__button--previous": e === a.Previous,
                                    "media-carousel__button--next": e === a.Next,
                                    "media-carousel__button--disabled": n
                                }, {
                                    "media-carousel__button--inset": !0 === t.props.insetStyle
                                });
                            return l.createElement(u.Xa, {
                                className: d,
                                position: u.jb.Relative,
                                display: u.X.Flex,
                                alignItems: u.f.Stretch
                            }, l.createElement(u.A, {
                                "data-test-selector": e + "-button",
                                "data-a-target": e + "-button",
                                onClick: r,
                                disabled: n,
                                ariaLabel: c[e],
                                icon: m[e],
                                size: u.B.Large
                            }))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.state.childrenRendered || null === this.props.items || this.setState({
                            childrenRendered: !0
                        })
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onResize)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onResize)
                    }, t.prototype.render = function() {
                        return l.createElement(u.Pa, i.__assign({}, this.props, {
                            position: u.jb.Relative
                        }), l.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, l.createElement(u.Xa, {
                            className: "media-carousel__child-container",
                            overflow: u.cb.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, l.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, l.createElement(u.Pa, {
                            className: "media-carousel__content",
                            display: u.X.Flex,
                            flexWrap: u.Ba.NoWrap,
                            flexDirection: u.Aa.Row,
                            alignItems: u.f.Center,
                            "data-js-selector": "carousel-content"
                        }, l.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), l.createElement(u.Xa, {
                            className: "media-carousel__nav",
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), l.createElement(u.Xa, {
                            className: "media-carousel__nav",
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.jb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                    }, t = i.__decorate([Object(c.b)("MediaCarousel", {
                        autoReportInteractive: !0
                    })], t)
                }(l.Component)
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                i = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a, i, o, l;
                            return r.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = r.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return l = s.sent(), [4, this.constructLegacyAPIResponse(l)];
                                    case 2:
                                        return [2, s.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = i.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, r.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, i;
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
                                        return a = r.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = a), [3, 4];
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
                        var n = a.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        cViM: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevOnlyChildGQL"
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
                                        value: "chatColor"
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
                    end: 72
                }
            };
            n.loc.source = {
                body: "query DevOnlyChildGQL {\ncurrentUser {\nid\nchatColor\nlogin\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        dQAD: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("q1tI"),
                i = n("4p7I"),
                o = n("yoKv"),
                l = n("mrSG"),
                s = n("1rIY"),
                c = n("Ue10"),
                u = (r = Object(s.a)("TestContext", {
                    value: "FALLBACK_TEST_VALUE",
                    updateValue: function() {
                        return null
                    }
                })).InnerProvider,
                d = r.withContext,
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            value: "initial_value",
                            updateValue: function(e) {
                                t.setState({
                                    value: e
                                })
                            }
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(a.Component);
            var h = function(e) {
                return a.createElement(c.Xa, null, "Current value: ", e.interestingValue, a.createElement("br", null), a.createElement(c.z, {
                    onClick: function() {
                        return e.doAnUpdate(e.buttonUpdatesContextTo)
                    }
                }, "Set context to ", e.buttonUpdatesContextTo))
            };
            h.displayName = "TestContextFormComponent";
            var p = d(function(e) {
                    return {
                        interestingValue: e.value,
                        doAnUpdate: e.updateValue
                    }
                })(h),
                g = function() {
                    return a.createElement(m, null, a.createElement(p, {
                        buttonUpdatesContextTo: "foo"
                    }), a.createElement(p, {
                        buttonUpdatesContextTo: "bar"
                    }), a.createElement(m, null, "Nested context override:", a.createElement(p, {
                        buttonUpdatesContextTo: "baz"
                    })))
                },
                f = n("/7QA"),
                v = n("8/mp"),
                E = n("NvVO"),
                y = n("GnwI"),
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.loadMoreA = function() {
                            return n.setState({
                                loadingA: !0
                            }), new Promise(function(e) {
                                setTimeout(function() {
                                    n.setState({
                                        loadingA: !1,
                                        colA: n.state.colA + 2
                                    }), e()
                                }, 3e3)
                            })
                        }, n.loadMoreB = function() {
                            return new Promise(function(e) {
                                n.setState({
                                    loadingB: !0
                                }), setTimeout(function() {
                                    n.setState({
                                        loadingB: !1,
                                        colB: n.state.colB + 5
                                    }), e()
                                }, 2e3)
                            })
                        }, n.state = {
                            colA: 5,
                            loadingA: !1,
                            colB: 6,
                            loadingB: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        for (var e = [], t = 0; t < this.state.colA; t++) e.push(a.createElement(c.Xa, {
                            key: t,
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            margin: 1
                        }, a.createElement(c.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(c.ib, {
                            height: 90,
                            width: 90
                        })), a.createElement(c.Xa, null, a.createElement(c.ib, {
                            width: 300,
                            lineCount: 3
                        }))));
                        var n = [];
                        for (t = 0; t < this.state.colB; t++) n.push(a.createElement(c.Xa, {
                            key: t,
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            margin: 1
                        }, a.createElement(c.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(c.ib, {
                            height: 90,
                            width: 90
                        })), a.createElement(c.Xa, null, a.createElement(c.ib, {
                            width: 300,
                            lineCount: 3
                        }))));
                        var r = {
                            border: "solid 3px",
                            borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                            height: "500px"
                        };
                        return a.createElement("div", {
                            style: r
                        }, a.createElement(v.b, null, a.createElement(c.Xa, {
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap
                        }, a.createElement(c.Xa, {
                            margin: {
                                right: 1
                            }
                        }, e, this.state.loadingA && a.createElement(c.Xa, null, a.createElement(c.Za, {
                            fillContent: !0
                        })), a.createElement(v.a, {
                            enabled: !0,
                            loadMore: this.loadMoreA,
                            pixelThreshold: 0
                        })), a.createElement(c.Xa, null, n, this.state.loadingB && a.createElement(c.Xa, null, a.createElement(c.Za, {
                            fillContent: !0
                        })), a.createElement(v.a, {
                            contentLength: n.length,
                            enabled: !0,
                            loadMore: this.loadMoreB,
                            pixelThreshold: 100
                        })))))
                    }, t
                }(a.Component),
                b = Object(y.b)("DevOnlyPage", {
                    destination: E.a.DevOnly,
                    autoReportInteractive: !0
                })(function() {
                    return a.createElement(v.b, null, a.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, a.createElement("h1", {
                        style: {
                            margin: "2rem 0"
                        }
                    }, "The Dev only page!"), a.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), a.createElement("h2", {
                        style: {
                            margin: "2rem 0"
                        }
                    }, "Logging and error reporting"), a.createElement("div", null, a.createElement(c.z, {
                        onClick: k
                    }, "Log a debug-level message"), a.createElement(c.z, {
                        onClick: w
                    }, "Log a info-level message"), a.createElement(c.z, {
                        onClick: C
                    }, "Log a warning-level message"), a.createElement(c.z, {
                        onClick: O
                    }, "Log an error-level message with error"), a.createElement(c.z, {
                        onClick: x
                    }, "Log a fatal-level message with error"), a.createElement(c.z, {
                        onClick: S
                    }, "Log message with unserializable argument"), a.createElement(c.z, {
                        onClick: N
                    }, "Throw an error")), a.createElement("h2", {
                        style: {
                            margin: "2rem 0"
                        }
                    }, "Dynamic Settings"), a.createElement("ul", null, a.createElement("li", null, a.createElement("pre", null, "environment = ", JSON.stringify(f.b.get("environment", "<not set>")))), a.createElement("li", null, a.createElement("pre", null, "env_test = ", JSON.stringify(f.b.get("env_test", "<not set>")))), a.createElement("li", null, a.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(f.b.get("totally_invalid_key", "<default value>")))), a.createElement("li", null, a.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(f.b.get("experiments", "<default value>"))))), a.createElement("h2", {
                        style: {
                            margin: "2rem 0"
                        }
                    }, "Localization"), a.createElement("ul", null, a.createElement("li", null, Object(f.e)("This is a placeholder string", "DevOnlyPage"))), a.createElement("h2", {
                        style: {
                            margin: "2rem 0"
                        }
                    }, "Link tests"), a.createElement("ul", null, a.createElement("li", null, a.createElement(c.U, {
                        to: "/_dev"
                    }, "Full path")), a.createElement("li", null, a.createElement(c.U, {
                        to: "/_dev?qs"
                    }, "Full path, query string")), a.createElement("li", null, a.createElement(c.U, {
                        to: "/_dev#hash"
                    }, "Full path, hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: "/_dev?qs#hash"
                    }, "Full path, query string, hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: "_dev"
                    }, "Relative (identical) path")), a.createElement("li", null, a.createElement(c.U, {
                        to: "_dev?qs"
                    }, "Relative path, query string")), a.createElement("li", null, a.createElement(c.U, {
                        to: "_dev#hash"
                    }, "Relative path, hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: "_dev?qs#hash"
                    }, "Relative path, query string, hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: "?qs"
                    }, "Query string")), a.createElement("li", null, a.createElement(c.U, {
                        to: "#hash"
                    }, "Hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: "?qs#hash"
                    }, "Query string and hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: {
                            pathname: "/_dev"
                        }
                    }, "Location with pathname")), a.createElement("li", null, a.createElement(c.U, {
                        to: {
                            pathname: "_dev"
                        }
                    }, "Location with relative (identical) pathname")), a.createElement("li", null, a.createElement(c.U, {
                        to: {
                            search: "?qs"
                        }
                    }, "Location with query string")), a.createElement("li", null, a.createElement(c.U, {
                        to: {
                            hash: "hash"
                        }
                    }, "Location with hash")), a.createElement("li", null, a.createElement(c.U, {
                        to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                    }, "URL with query parameters, including tt_codes")), a.createElement("li", null, a.createElement(c.U, {
                        to: {
                            pathname: "/pondelinp",
                            state: {
                                content: "content",
                                medium: "medium"
                            }
                        }
                    }, "Internal Link with location state, including tt_codes")), a.createElement("li", null, a.createElement(c.U, {
                        to: "/adamar/dashboard"
                    }, "Legacy Link (dashbaord)"))), a.createElement(c.Xa, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(c.W, {
                        type: c.Vb.H2
                    }, "Infinite Scroll Test"), a.createElement(_, null))))
                });

            function k() {
                f.k.debug("debug message")
            }

            function w() {
                f.k.info("info message")
            }

            function C() {
                f.k.warn("warn message")
            }

            function S() {
                var e = {};
                e.self = e, f.k.info("Can't serialize this arg, oh no.", e)
            }

            function O() {
                try {
                    throw new Error("throwing an error.")
                } catch (e) {
                    f.k.error(e, "Artisanal error handling.")
                }
            }

            function x() {
                try {
                    throw new Error("throwing a super bad unrecoverable error.")
                } catch (e) {
                    f.k.fatal(e, "Superb fatal error handling.")
                }
            }

            function N() {
                throw new Error("Throwing an uncaught error.")
            }
            var P = n("VQbD"),
                T = (n("NrqC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(v.b, null, a.createElement(c.Xa, {
                            className: "testing-carousel",
                            padding: 3
                        }, a.createElement(c.W, {
                            type: c.Vb.H2
                        }, "Media Carousel - Standard"), a.createElement(c.Xa, {
                            "data-a-target": "carousel-standard"
                        }, a.createElement(c.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, a.createElement(P.a, {
                            items: this.renderStandardItems()
                        }))), a.createElement(c.W, {
                            type: c.Vb.H2
                        }, "Media Carousel - Tiny"), a.createElement(c.Xa, {
                            "data-a-target": "carousel-standard-tiny"
                        }, a.createElement(c.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, a.createElement(P.a, {
                            items: this.renderStandardTinyItems()
                        }))), a.createElement(c.W, {
                            type: c.Vb.H2
                        }, "Media Carousel - HUGE"), a.createElement(c.Xa, {
                            "data-a-target": "carousel-standard-huge"
                        }, a.createElement(c.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, a.createElement(P.a, {
                            items: this.renderStandardHugeItems()
                        }))), a.createElement(c.W, {
                            type: c.Vb.H2
                        }, "Media Carousel - Single"), a.createElement(c.Xa, {
                            "data-a-target": "carousel-single"
                        }, a.createElement(c.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, a.createElement(P.a, {
                            items: this.renderSingleItem()
                        }))), a.createElement(c.W, {
                            type: c.Vb.H2
                        }, "Media Carousel - Single and HUGE"), a.createElement(c.Xa, {
                            "data-a-target": "carousel-single-huge"
                        }, a.createElement(c.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, a.createElement(P.a, {
                            items: this.renderSingleHugeItem()
                        }))), a.createElement(c.W, {
                            type: c.Vb.H2
                        }, "Media Carousel - Various Widths"), a.createElement(c.Xa, {
                            "data-a-target": "carousel-various-widths"
                        }, a.createElement(c.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, a.createElement(P.a, {
                            items: this.renderVariousWidthItems()
                        })))))
                    }, t.prototype.renderStandardItems = function() {
                        return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                            return a.createElement(c.Xa, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                },
                                "data-a-target": "standard-item-" + e
                            }, a.createElement("div", {
                                className: "testing-carousel__item",
                                style: {
                                    width: 200,
                                    height: 100
                                }
                            }, a.createElement(c.W, {
                                type: c.Vb.H1,
                                color: c.O.Overlay
                            }, e)))
                        })
                    }, t.prototype.renderStandardTinyItems = function() {
                        return [0, 1, 2].map(function(e) {
                            return a.createElement(c.Xa, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                },
                                "data-a-target": "standard-tiny-item-" + e
                            }, a.createElement("div", {
                                className: "testing-carousel__item",
                                style: {
                                    width: 20,
                                    height: 100
                                }
                            }, a.createElement(c.W, {
                                type: c.Vb.H1,
                                color: c.O.Overlay
                            }, e)))
                        })
                    }, t.prototype.renderStandardHugeItems = function() {
                        return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                            return a.createElement(c.Xa, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                },
                                "data-a-target": "standard-huge-item-" + e
                            }, a.createElement("div", {
                                className: "testing-carousel__item",
                                style: {
                                    width: 2e3,
                                    height: 100
                                }
                            }, a.createElement(c.W, {
                                type: c.Vb.H1,
                                color: c.O.Overlay
                            }, e)))
                        })
                    }, t.prototype.renderSingleItem = function() {
                        return [0].map(function(e) {
                            return a.createElement(c.Xa, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                },
                                "data-a-target": "single-item-" + e
                            }, a.createElement("div", {
                                className: "testing-carousel__item",
                                style: {
                                    width: 200,
                                    height: 100
                                }
                            }, a.createElement(c.W, {
                                type: c.Vb.H1,
                                color: c.O.Overlay
                            }, e)))
                        })
                    }, t.prototype.renderSingleHugeItem = function() {
                        return [0].map(function(e) {
                            return a.createElement(c.Xa, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                },
                                "data-a-target": "single-huge-item-" + e
                            }, a.createElement("div", {
                                className: "testing-carousel__item",
                                style: {
                                    width: 2e3,
                                    height: 100
                                }
                            }, a.createElement(c.W, {
                                type: c.Vb.H1,
                                color: c.O.Overlay
                            }, e)))
                        })
                    }, t.prototype.renderVariousWidthItems = function() {
                        return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                            return a.createElement(c.Xa, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                },
                                "data-a-target": "various-width-item-" + e
                            }, a.createElement("div", {
                                className: "testing-carousel__item",
                                style: {
                                    width: 30 * (e + 1),
                                    height: 100
                                }
                            }, a.createElement(c.W, {
                                type: c.Vb.H1,
                                color: c.O.Overlay
                            }, e)))
                        })
                    }, t
                }(a.Component)),
                U = n("/MKj"),
                R = n("fvjX"),
                D = n("KxT4"),
                L = n("IX50"),
                A = (n("+6bW"), D.c.Google),
                I = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onToggleTwitchAdsConsent = function() {
                            var e, t = !n.props.twitchAdsConsent;
                            n.props.saveVendorPreferences(((e = {})[A] = t, e))
                        }, n.state = {
                            gdprStates: [t.gdpr],
                            toggleValue: t.twitchAdsConsent
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.gdpr !== e.gdpr && this.setState(function(t) {
                            return {
                                gdprStates: t.gdprStates.concat([e.gdpr]),
                                toggleValue: e.twitchAdsConsent
                            }
                        })
                    }, t.prototype.render = function() {
                        var e = window.location.search.includes("gdpr_override"),
                            t = Object(D.f)();
                        return a.createElement(c.Xa, {
                            padding: 2
                        }, a.createElement(c.W, {
                            fontSize: c.Ca.Size2
                        }, "GDPR Consent"), a.createElement(c.W, null, "Testing our withGDPRConsent HOC. Each prop update will render the current GDPRStatus value in the section below."), a.createElement(c.W, null, "Red indicates it is not safe to load content - Green indicates it is."), a.createElement(c.Xa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(c.W, {
                            fontSize: c.Ca.Size4
                        }, t ? "Enabled" : "Disabled"), a.createElement(c.W, null, "Query String: ?gdpr_override / ?eea"), a.createElement(c.W, null, "Dynamic Settings: gdpr_consent_enabled"), a.createElement(c.Ea, {
                            label: "Grant test consent",
                            orientation: c.Fa.Horizontal
                        }, a.createElement(c.Xb, {
                            onChange: this.onToggleTwitchAdsConsent,
                            checked: this.props.twitchAdsConsent
                        }))), a.createElement(c.Eb, {
                            padding: {
                                y: 1
                            },
                            borderTop: !0,
                            borderBottom: !0,
                            flexDirection: c.Aa.Row,
                            display: c.X.Flex
                        }, this.state.gdprStates.map(function(e, t) {
                            var n = e.status,
                                r = e.blockConsentRequiredContent ? "gdpr-status-text" : "gdpr-status-text--safe";
                            return a.createElement(c.Eb, {
                                border: !0,
                                margin: {
                                    right: 1
                                },
                                key: t,
                                padding: 1,
                                className: r
                            }, a.createElement(c.W, {
                                fontSize: c.Ca.Size4,
                                color: c.O.Overlay
                            }, n))
                        })), e && a.createElement(c.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(c.W, {
                            italic: !0
                        }, "The query param override is enabled, which means you will see the consent notice even if you are not in an EEA country."), a.createElement(c.W, {
                            italic: !0
                        }, "Use the dynamic settings override instead to simulate the scenario where our consent solution determines you do not need to see the notice since you are not in an EEA country.")), a.createElement(c.Xa, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(c.z, {
                            onClick: this.props.resetConsent
                        }, "Reset Test")))
                    }, t
                }(a.Component),
                W = Object(R.compose)(Object(y.b)("GDPRTestPage", {
                    autoReportInteractive: !0,
                    destination: E.a.Unknown
                }), Object(U.connect)(function(e) {
                    return {
                        twitchAdsConsent: !!e.gdpr.vendorPreferences[A]
                    }
                }, function(e) {
                    return Object(R.bindActionCreators)({
                        saveVendorPreferences: L.c,
                        resetConsent: L.b
                    }, e)
                }), Object(D.j)(A))(I),
                q = n("yR8l"),
                F = n("cViM"),
                X = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderPropState = function(e, t) {
                            return a.createElement(c.Eb, {
                                border: !0,
                                margin: 1,
                                padding: 1,
                                flexDirection: c.Aa.Column,
                                display: c.X.Flex,
                                key: t.toString()
                            }, a.createElement(c.W, {
                                bold: !0
                            }, e.from), a.createElement(c.W, null, "Loading: " + e.loading), a.createElement(c.W, null, "currentUser: " + e.currentUser), a.createElement(c.W, null, "id: " + e.id), a.createElement(c.W, null, "chatColor: " + e.chatColor))
                        }, n.getStateFromProps = function(e, t) {
                            var n = e.data.currentUser;
                            return {
                                currentUser: !!n,
                                id: !!n && !!n.id,
                                chatColor: !!n && "string" == typeof n.chatColor,
                                loading: e.data.loading,
                                from: t
                            }
                        }, n.state = {
                            propStates: [n.getStateFromProps(t, "constructor")]
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.setState(function(t) {
                            return {
                                propStates: t.propStates.concat([e.getStateFromProps(e.props, "componentDidMount")])
                            }
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this;
                        this.setState(function(n) {
                            return {
                                propStates: n.propStates.concat([t.getStateFromProps(e, "componentWillReceiveProps")])
                            }
                        })
                    }, t.prototype.render = function() {
                        var e = this;
                        return a.createElement(c.Xa, {
                            flexDirection: c.Aa.Row,
                            display: c.X.Flex
                        }, this.state.propStates.map(function(t, n) {
                            return e.renderPropState(t, n)
                        }))
                    }, t
                }(a.Component),
                B = Object(q.a)(F)(X),
                j = n("+6oQ"),
                V = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.currentUser ? a.createElement(B, null) : null
                    }, t
                }(a.Component),
                H = Object(q.a)(j)(V),
                z = n("+5a/"),
                G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(H, null)
                    }, t
                }(a.Component),
                M = Object(q.a)(z)(G),
                Q = n("oJmH"),
                J = n("wIs1"),
                Y = n("LL7G"),
                K = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            style: {
                                margin: "0 2rem"
                            }
                        }, a.createElement("p", null, "Testing GraphQL"))
                    }, t
                }(a.Component),
                $ = Object(Q.compose)(Object(q.a)(Y, {
                    options: function(e) {
                        return {
                            variables: {
                                shouldSkip: e.shouldSkip
                            }
                        }
                    }
                }), J.a)(K),
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            shouldSkip: !0
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        setTimeout(function() {
                            return e.setState({
                                shouldSkip: !1
                            }, function() {
                                return setTimeout(function() {
                                    return e.setState({
                                        shouldSkip: !0
                                    })
                                }, 1e3)
                            })
                        }, 1e3)
                    }, t.prototype.render = function() {
                        return a.createElement($, {
                            shouldSkip: this.state.shouldSkip
                        })
                    }, t
                }(a.Component),
                ee = n("b6Yk"),
                te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = f.p.logger.withCategory("legacy-api-test"), t.testFailingAPICall = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, ee.a.getOrThrow("/v5/some-bad-route/test.json")];
                                        case 1:
                                            return e = n.sent(), this.logger.debug("API success for a bad route", {
                                                response: e
                                            }), [3, 3];
                                        case 2:
                                            return t = n.sent(), this.logger.error(t, "API failure caught"), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.testFailingAPICall()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            style: {
                                margin: "0 2rem"
                            }
                        }, a.createElement("p", null, "Testing LegacyAPI"))
                    }, t
                }(a.Component),
                ne = function() {
                    return a.createElement(o.a, null, a.createElement(i.a, {
                        path: "/_dev/gql",
                        component: Z
                    }), a.createElement(i.a, {
                        path: "/_dev/gql_loading",
                        component: M
                    }), a.createElement(i.a, {
                        path: "/_dev/gdpr",
                        component: W
                    }), a.createElement(i.a, {
                        path: "/_dev/legacy-api",
                        component: te
                    }), a.createElement(i.a, {
                        path: "/_dev/testing/carousel",
                        component: T
                    }), a.createElement(i.a, {
                        path: "/_dev/context",
                        component: g
                    }), a.createElement(i.a, {
                        path: "/_dev",
                        component: b
                    }))
                };
            n.d(t, "DevOnlyRoot", function() {
                return ne
            })
        }
    }
]);