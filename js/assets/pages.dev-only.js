webpackJsonp([63], {
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a, o, l;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return l = s.sent(), [4, this.constructLegacyAPIResponse(l)];
                                case 2:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((i = o.sent()).error || i.requestError) throw new Error("Error while making request");
                                    return a = r.__assign({}, i, {
                                        body: i.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
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
                    var n = i.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": i.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(a.c)(n);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = i.o.logger.withCategory("legacy-api"), e
            }()
    },
    yMnN: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("GiK3"),
            i = n("CIox"),
            a = n("F8kA"),
            o = n("6sO2"),
            l = n("zCIC"),
            s = n("w9tK"),
            u = n("CSlQ"),
            c = n("TToO"),
            d = n("Odds"),
            h = function(e) {
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
                return c.__extends(t, e), t.prototype.render = function() {
                    for (var e = [], t = 0; t < this.state.colA; t++) e.push(r.createElement(d._7, {
                        key: t,
                        display: d.Q.Flex,
                        flexWrap: d.T.NoWrap,
                        margin: 1
                    }, r.createElement(d._7, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(d._13, {
                        height: 90,
                        width: 90
                    })), r.createElement(d._7, null, r.createElement(d._13, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var n = [];
                    for (t = 0; t < this.state.colB; t++) n.push(r.createElement(d._7, {
                        key: t,
                        display: d.Q.Flex,
                        flexWrap: d.T.NoWrap,
                        margin: 1
                    }, r.createElement(d._7, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(d._13, {
                        height: 90,
                        width: 90
                    })), r.createElement(d._7, null, r.createElement(d._13, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var i = {
                        border: "solid 3px",
                        borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                        height: "500px"
                    };
                    return r.createElement("div", {
                        style: i
                    }, r.createElement(l.b, null, r.createElement(d._7, {
                        display: d.Q.Flex,
                        flexWrap: d.T.NoWrap
                    }, r.createElement(d._7, {
                        margin: {
                            right: 1
                        }
                    }, e, this.state.loadingA && r.createElement(d._7, null, r.createElement(d._9, {
                        fillContent: !0
                    })), r.createElement(l.a, {
                        enabled: !0,
                        loadMore: this.loadMoreA,
                        pixelThreshold: 0
                    })), r.createElement(d._7, null, n, this.state.loadingB && r.createElement(d._7, null, r.createElement(d._9, {
                        fillContent: !0
                    })), r.createElement(l.a, {
                        contentLength: n.length,
                        enabled: !0,
                        loadMore: this.loadMoreB,
                        pixelThreshold: 100
                    })))))
                }, t
            }(r.Component),
            m = Object(u.d)("DevOnlyPage", {
                destination: s.a.DevOnly,
                autoReportInteractive: !0
            })(function() {
                return r.createElement(l.b, null, r.createElement("div", {
                    style: {
                        margin: "0 2rem"
                    }
                }, r.createElement("h1", {
                    style: {
                        margin: "2rem 0"
                    }
                }, "The Dev only page!"), r.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), r.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Logging and error reporting"), r.createElement("div", null, r.createElement(d.u, {
                    onClick: g
                }, "Log a debug-level message"), " ", r.createElement(d.u, {
                    onClick: p
                }, "Log a info-level message"), " ", r.createElement(d.u, {
                    onClick: v
                }, "Log a warning-level message"), " ", r.createElement(d.u, {
                    onClick: _
                }, "Log an error-level message with error"), " ", r.createElement(d.u, {
                    onClick: E
                }, "Log a fatal-level message with error"), " ", r.createElement(d.u, {
                    onClick: f
                }, "Log message with unserializable argument"), " ", r.createElement(d.u, {
                    onClick: y
                }, "Throw an error")), r.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Dynamic Settings"), r.createElement("ul", null, r.createElement("li", null, r.createElement("pre", null, "environment = ", JSON.stringify(o.b.get("environment", "<not set>")))), r.createElement("li", null, r.createElement("pre", null, "env_test = ", JSON.stringify(o.b.get("env_test", "<not set>")))), r.createElement("li", null, r.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(o.b.get("totally_invalid_key", "<default value>")))), r.createElement("li", null, r.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(o.b.get("experiments", "<default value>"))))), r.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Link tests"), r.createElement("ul", null, r.createElement("li", null, r.createElement(a.a, {
                    to: "/_dev"
                }, "Full path")), r.createElement("li", null, r.createElement(a.a, {
                    to: "/_dev?qs"
                }, "Full path, query string")), r.createElement("li", null, r.createElement(a.a, {
                    to: "/_dev#hash"
                }, "Full path, hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: "/_dev?qs#hash"
                }, "Full path, query string, hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: "_dev"
                }, "Relative (identical) path")), r.createElement("li", null, r.createElement(a.a, {
                    to: "_dev?qs"
                }, "Relative path, query string")), r.createElement("li", null, r.createElement(a.a, {
                    to: "_dev#hash"
                }, "Relative path, hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: "_dev?qs#hash"
                }, "Relative path, query string, hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: "?qs"
                }, "Query string")), r.createElement("li", null, r.createElement(a.a, {
                    to: "#hash"
                }, "Hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: "?qs#hash"
                }, "Query string and hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: {
                        pathname: "/_dev"
                    }
                }, "Location with pathname")), r.createElement("li", null, r.createElement(a.a, {
                    to: {
                        pathname: "_dev"
                    }
                }, "Location with relative (identical) pathname")), r.createElement("li", null, r.createElement(a.a, {
                    to: {
                        search: "?qs"
                    }
                }, "Location with query string")), r.createElement("li", null, r.createElement(a.a, {
                    to: {
                        hash: "hash"
                    }
                }, "Location with hash")), r.createElement("li", null, r.createElement(a.a, {
                    to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                }, "URL with query parameters, including tt_codes")), r.createElement("li", null, r.createElement(a.a, {
                    to: {
                        pathname: "/pondelinp",
                        state: {
                            content: "content",
                            medium: "medium"
                        }
                    }
                }, "Internal Link with location state, including tt_codes")), r.createElement("li", null, r.createElement(a.a, {
                    to: "/adamar/dashboard"
                }, "Legacy Link (dashbaord)"))), r.createElement(d._7, {
                    margin: {
                        top: 2
                    }
                }, r.createElement(d.P, {
                    type: d._44.H2
                }, " Infinite Scroll Test"), r.createElement(h, null))))
            });

        function g() {
            o.j.debug("debug message")
        }

        function p() {
            o.j.info("info message")
        }

        function v() {
            o.j.warn("warn message")
        }

        function f() {
            var e = {};
            e.self = e, o.j.info("Can't serialize this arg, oh no.", e)
        }

        function _() {
            try {
                throw new Error("throwing an error.")
            } catch (e) {
                o.j.error(e, "Artisanal error handling.")
            }
        }

        function E() {
            try {
                throw new Error("throwing a super bad unrecoverable error.")
            } catch (e) {
                o.j.fatal(e, "Superb fatal error handling.")
            }
        }

        function y() {
            throw new Error("Throwing an uncaught error.")
        }
        var k = n("3zLD"),
            w = n("7vx8"),
            b = n("z7vJ"),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, r.createElement("p", null, "Testing GraphQL"))
                }, t
            }(r.Component),
            S = Object(k.compose)(Object(w.a)(b, {
                options: function(e) {
                    return {
                        variables: {
                            shouldSkip: e.shouldSkip
                        }
                    }
                }
            }), a.f)(T),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        shouldSkip: !0
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return r.createElement(S, {
                        shouldSkip: this.state.shouldSkip
                    })
                }, t
            }(r.Component),
            q = n("9u8h"),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = o.o.logger.withCategory("legacy-api-test"), t.testFailingAPICall = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, q.a.getOrThrow("/v5/some-bad-route/test.json")];
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.testFailingAPICall()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, r.createElement("p", null, "Testing LegacyAPI"))
                }, t
            }(r.Component),
            C = function() {
                return r.createElement(i.e, null, r.createElement(i.c, {
                    path: "/_dev/legacy-api",
                    component: L
                }), r.createElement(i.c, {
                    path: "/_dev/gql",
                    component: O
                }), r.createElement(i.c, {
                    path: "/_dev",
                    component: m
                }))
            };
        n.d(t, "DevOnlyRoot", function() {
            return C
        })
    },
    z7vJ: function(e, t) {
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
    }
});
//# sourceMappingURL=pages.dev-only-0d215effbfcda1f1625c13de08794b48.js.map