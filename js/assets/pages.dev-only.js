webpackJsonp([56], {
    1878: function(e, t) {
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
                    },
                    defaultValue: null
                }],
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                end: 201
            }
        };
        n.loc.source = {
            body: "query Dev_Only_GQL($shouldSkip: Boolean!) {\n  currentUser {\n    id\n  }\n\n  includeUser: currentUser @include(if: $shouldSkip) {\n    id\n  }\n\n  skipUser: currentUser @skip(if: $shouldSkip) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2074: function(e, t, n) {
        "use strict";

        function l() {
            h.i.debug("debug message")
        }

        function a() {
            h.i.info("info message")
        }

        function i() {
            h.i.warn("warn message")
        }

        function r() {
            var e = {};
            e.self = e, h.i.info("Can't serialize this arg, oh no.", e)
        }

        function o() {
            try {
                throw new Error("throwing an error.")
            } catch (e) {
                h.i.error(e, "Artisanal error handling.")
            }
        }

        function c() {
            try {
                throw new Error("throwing a super bad unrecoverable error.")
            } catch (e) {
                h.i.fatal(e, "Superb fatal error handling.")
            }
        }

        function s() {
            throw new Error("Throwing an uncaught error.")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(1),
            m = n(22),
            d = n(12),
            h = n(2),
            p = n(28),
            g = n(5),
            E = n(0),
            v = n(3),
            f = function(e) {
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
                return E.__extends(t, e), t.prototype.render = function() {
                    for (var e = [], t = 0; t < this.state.colA; t++) e.push(u.createElement(v.U, {
                        key: t,
                        display: v.H.Flex,
                        flexWrap: v.K.NoWrap,
                        margin: 1
                    }, u.createElement(v.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(v._2, {
                        height: 90,
                        width: 90
                    })), u.createElement(v.U, null, u.createElement(v._2, {
                        width: 300,
                        lineCount: 3
                    }))));
                    for (var n = [], t = 0; t < this.state.colB; t++) n.push(u.createElement(v.U, {
                        key: t,
                        display: v.H.Flex,
                        flexWrap: v.K.NoWrap,
                        margin: 1
                    }, u.createElement(v.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(v._2, {
                        height: 90,
                        width: 90
                    })), u.createElement(v.U, null, u.createElement(v._2, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var l = {
                        border: "solid 3px",
                        borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                        height: "500px"
                    };
                    return u.createElement("div", {
                        style: l
                    }, u.createElement(p.b, null, u.createElement(v.U, {
                        display: v.H.Flex,
                        flexWrap: v.K.NoWrap
                    }, u.createElement(v.U, {
                        margin: {
                            right: 1
                        }
                    }, e, this.state.loadingA && u.createElement(v.U, null, u.createElement(v.Y, {
                        fillContent: !0
                    })), u.createElement(p.a, {
                        enabled: !0,
                        loadMore: this.loadMoreA,
                        pixelThreshold: 0
                    })), u.createElement(v.U, null, n, this.state.loadingB && u.createElement(v.U, null, u.createElement(v.Y, {
                        fillContent: !0
                    })), u.createElement(p.a, {
                        contentLength: n.length,
                        enabled: !0,
                        loadMore: this.loadMoreB,
                        pixelThreshold: 100
                    })))))
                }, t
            }(u.Component),
            k = function() {
                return u.createElement(p.b, null, u.createElement("div", {
                    style: {
                        margin: "0 2rem"
                    }
                }, u.createElement("h1", {
                    style: {
                        margin: "2rem 0"
                    }
                }, "The Dev only page!"), u.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), u.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Logging and error reporting"), u.createElement("div", null, u.createElement(v.u, {
                    onClick: l
                }, "Log a debug-level message"), " ", u.createElement(v.u, {
                    onClick: a
                }, "Log a info-level message"), " ", u.createElement(v.u, {
                    onClick: i
                }, "Log a warning-level message"), " ", u.createElement(v.u, {
                    onClick: o
                }, "Log an error-level message with error"), " ", u.createElement(v.u, {
                    onClick: c
                }, "Log a fatal-level message with error"), " ", u.createElement(v.u, {
                    onClick: r
                }, "Log message with unserializable argument"), " ", u.createElement(v.u, {
                    onClick: s
                }, "Throw an error")), u.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Dynamic Settings"), u.createElement("ul", null, u.createElement("li", null, u.createElement("pre", null, "environment = ", JSON.stringify(h.b.get("environment", "<not set>")))), u.createElement("li", null, u.createElement("pre", null, "env_test = ", JSON.stringify(h.b.get("env_test", "<not set>")))), u.createElement("li", null, u.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(h.b.get("totally_invalid_key", "<default value>")))), u.createElement("li", null, u.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(h.b.get("experiments", "<default value>"))))), u.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Link tests"), u.createElement("ul", null, u.createElement("li", null, u.createElement(d.a, {
                    to: "/_dev"
                }, "Full path")), u.createElement("li", null, u.createElement(d.a, {
                    to: "/_dev?qs"
                }, "Full path, query string")), u.createElement("li", null, u.createElement(d.a, {
                    to: "/_dev#hash"
                }, "Full path, hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: "/_dev?qs#hash"
                }, "Full path, query string, hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: "_dev"
                }, "Relative (identical) path")), u.createElement("li", null, u.createElement(d.a, {
                    to: "_dev?qs"
                }, "Relative path, query string")), u.createElement("li", null, u.createElement(d.a, {
                    to: "_dev#hash"
                }, "Relative path, hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: "_dev?qs#hash"
                }, "Relative path, query string, hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: "?qs"
                }, "Query string")), u.createElement("li", null, u.createElement(d.a, {
                    to: "#hash"
                }, "Hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: "?qs#hash"
                }, "Query string and hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: {
                        pathname: "/_dev"
                    }
                }, "Location with pathname")), u.createElement("li", null, u.createElement(d.a, {
                    to: {
                        pathname: "_dev"
                    }
                }, "Location with relative (identical) pathname")), u.createElement("li", null, u.createElement(d.a, {
                    to: {
                        search: "?qs"
                    }
                }, "Location with query string")), u.createElement("li", null, u.createElement(d.a, {
                    to: {
                        hash: "hash"
                    }
                }, "Location with hash")), u.createElement("li", null, u.createElement(d.a, {
                    to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                }, "URL with query parameters, including tt_codes")), u.createElement("li", null, u.createElement(d.a, {
                    to: {
                        pathname: "/pondelinp",
                        state: {
                            content: "content",
                            medium: "medium"
                        }
                    }
                }, "Internal Link with location state, including tt_codes")), u.createElement("li", null, u.createElement(d.a, {
                    to: "/adamar/dashboard"
                }, "Legacy Link (dashbaord)"))), u.createElement(v.U, {
                    margin: {
                        top: 2
                    }
                }, u.createElement(v._22, {
                    type: v._27.H2
                }, " Infinite Scroll Test"), u.createElement(f, null))))
            },
            y = Object(g.c)("DevOnlyPage", {
                destination: "dev",
                autoReportInteractive: !0
            })(k),
            S = n(33),
            _ = n(6),
            b = n(1878),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return E.__extends(t, e), t.prototype.render = function() {
                    return u.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, u.createElement("p", null, "Testing GraphQL"))
                }, t
            }(u.Component),
            N = Object(S.compose)(Object(_.a)(b, {
                options: function(e) {
                    return {
                        variables: {
                            shouldSkip: e.shouldSkip
                        }
                    }
                }
            }), d.f)(w),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        shouldSkip: !0
                    }, t
                }
                return E.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return u.createElement(N, {
                        shouldSkip: this.state.shouldSkip
                    })
                }, t
            }(u.Component),
            L = function() {
                return u.createElement(m.d, null, u.createElement(m.b, {
                    path: "/_dev/gql",
                    component: U
                }), u.createElement(m.b, {
                    path: "/_dev",
                    component: y
                }))
            };
        n.d(t, "DevOnlyRoot", function() {
            return L
        })
    }
});
//# sourceMappingURL=pages.dev-only-d4f093d0ae2f818e25a44b1a5281b652.js.map