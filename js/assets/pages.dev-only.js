webpackJsonp([57], {
    2062: function(e, t, n) {
        "use strict";

        function l() {
            E.i.debug("debug message")
        }

        function a() {
            E.i.info("info message")
        }

        function r() {
            E.i.warn("warn message")
        }

        function i() {
            var e = {};
            e.self = e, E.i.info("Can't serialize this arg, oh no.", e)
        }

        function o() {
            try {
                throw new Error("throwing an error.")
            } catch (e) {
                E.i.error(e, "Artisanal error handling.")
            }
        }

        function c() {
            try {
                throw new Error("throwing a super bad unrecoverable error.")
            } catch (e) {
                E.i.fatal(e, "Superb fatal error handling.")
            }
        }

        function m() {
            throw new Error("Throwing an uncaught error.")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(1),
            u = n(22),
            h = n(10),
            E = n(2),
            d = n(28),
            g = n(5),
            p = n(0),
            f = n(3),
            v = function(e) {
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
                return p.__extends(t, e), t.prototype.render = function() {
                    for (var e = [], t = 0; t < this.state.colA; t++) e.push(s.createElement(f.U, {
                        key: t,
                        display: f.H.Flex,
                        flexWrap: f.K.NoWrap,
                        margin: 1
                    }, s.createElement(f.U, {
                        margin: {
                            right: 1
                        }
                    }, s.createElement(f._1, {
                        height: 90,
                        width: 90
                    })), s.createElement(f.U, null, s.createElement(f._1, {
                        width: 300,
                        lineCount: 3
                    }))));
                    for (var n = [], t = 0; t < this.state.colB; t++) n.push(s.createElement(f.U, {
                        key: t,
                        display: f.H.Flex,
                        flexWrap: f.K.NoWrap,
                        margin: 1
                    }, s.createElement(f.U, {
                        margin: {
                            right: 1
                        }
                    }, s.createElement(f._1, {
                        height: 90,
                        width: 90
                    })), s.createElement(f.U, null, s.createElement(f._1, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var l = {
                        border: "solid 3px",
                        borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                        height: "500px"
                    };
                    return s.createElement("div", {
                        style: l
                    }, s.createElement(d.b, null, s.createElement(f.U, {
                        display: f.H.Flex,
                        flexWrap: f.K.NoWrap
                    }, s.createElement(f.U, {
                        margin: {
                            right: 1
                        }
                    }, e, this.state.loadingA && s.createElement(f.U, null, s.createElement(f.X, {
                        fillContent: !0
                    })), s.createElement(d.a, {
                        enabled: !0,
                        loadMore: this.loadMoreA,
                        pixelThreshold: 0
                    })), s.createElement(f.U, null, n, this.state.loadingB && s.createElement(f.U, null, s.createElement(f.X, {
                        fillContent: !0
                    })), s.createElement(d.a, {
                        contentLength: n.length,
                        enabled: !0,
                        loadMore: this.loadMoreB,
                        pixelThreshold: 100
                    })))))
                }, t
            }(s.Component),
            y = function() {
                return s.createElement(d.b, null, s.createElement("div", {
                    style: {
                        margin: "0 2rem"
                    }
                }, s.createElement("h1", {
                    style: {
                        margin: "2rem 0"
                    }
                }, "The Dev only page!"), s.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), s.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Logging and error reporting"), s.createElement("div", null, s.createElement(f.u, {
                    onClick: l
                }, "Log a debug-level message"), " ", s.createElement(f.u, {
                    onClick: a
                }, "Log a info-level message"), " ", s.createElement(f.u, {
                    onClick: r
                }, "Log a warning-level message"), " ", s.createElement(f.u, {
                    onClick: o
                }, "Log an error-level message with error"), " ", s.createElement(f.u, {
                    onClick: c
                }, "Log a fatal-level message with error"), " ", s.createElement(f.u, {
                    onClick: i
                }, "Log message with unserializable argument"), " ", s.createElement(f.u, {
                    onClick: m
                }, "Throw an error")), s.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Dynamic Settings"), s.createElement("ul", null, s.createElement("li", null, s.createElement("pre", null, "environment = ", JSON.stringify(E.b.get("environment", "<not set>")))), s.createElement("li", null, s.createElement("pre", null, "env_test = ", JSON.stringify(E.b.get("env_test", "<not set>")))), s.createElement("li", null, s.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(E.b.get("totally_invalid_key", "<default value>")))), s.createElement("li", null, s.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(E.b.get("experiments", "<default value>"))))), s.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Link tests"), s.createElement("ul", null, s.createElement("li", null, s.createElement(h.a, {
                    to: "/_dev"
                }, "Full path")), s.createElement("li", null, s.createElement(h.a, {
                    to: "/_dev?qs"
                }, "Full path, query string")), s.createElement("li", null, s.createElement(h.a, {
                    to: "/_dev#hash"
                }, "Full path, hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: "/_dev?qs#hash"
                }, "Full path, query string, hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: "_dev"
                }, "Relative (identical) path")), s.createElement("li", null, s.createElement(h.a, {
                    to: "_dev?qs"
                }, "Relative path, query string")), s.createElement("li", null, s.createElement(h.a, {
                    to: "_dev#hash"
                }, "Relative path, hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: "_dev?qs#hash"
                }, "Relative path, query string, hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: "?qs"
                }, "Query string")), s.createElement("li", null, s.createElement(h.a, {
                    to: "#hash"
                }, "Hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: "?qs#hash"
                }, "Query string and hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: {
                        pathname: "/_dev"
                    }
                }, "Location with pathname")), s.createElement("li", null, s.createElement(h.a, {
                    to: {
                        pathname: "_dev"
                    }
                }, "Location with relative (identical) pathname")), s.createElement("li", null, s.createElement(h.a, {
                    to: {
                        search: "?qs"
                    }
                }, "Location with query string")), s.createElement("li", null, s.createElement(h.a, {
                    to: {
                        hash: "hash"
                    }
                }, "Location with hash")), s.createElement("li", null, s.createElement(h.a, {
                    to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                }, "URL with query parameters, including tt_codes")), s.createElement("li", null, s.createElement(h.a, {
                    to: {
                        pathname: "/pondelinp",
                        state: {
                            content: "content",
                            medium: "medium"
                        }
                    }
                }, "Internal Link with location state, including tt_codes")), s.createElement("li", null, s.createElement(h.a, {
                    to: "/adamar/dashboard"
                }, "Legacy Link (dashbaord)"))), s.createElement(f.U, {
                    margin: {
                        top: 2
                    }
                }, s.createElement(f._21, {
                    type: f._26.H2
                }, " Infinite Scroll Test"), s.createElement(v, null))))
            },
            _ = Object(g.c)("DevOnlyPage", {
                destination: "dev",
                autoReportInteractive: !0
            })(y),
            w = function() {
                return s.createElement(u.d, null, s.createElement(u.b, {
                    path: "/_dev",
                    component: _
                }))
            };
        n.d(t, "DevOnlyRoot", function() {
            return w
        })
    }
});
//# sourceMappingURL=pages.dev-only-dd71eba40b147448c0888e1f2a9a2a4a.js.map