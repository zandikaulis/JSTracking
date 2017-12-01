webpackJsonp([60], {
    1917: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserPage_User"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ReportUserPage_User($login: String!) {\n  user(login: $login) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2072: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                isLoggedIn: Object(p.d)(e),
                currentUser: Object(p.c)(e)
            }
        }

        function o(e) {
            return Object(i.bindActionCreators)({
                login: function() {
                    return Object(l.f)(s.a.ReportChannel)
                }
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(7),
            i = n(9),
            s = n(48),
            l = n(32),
            p = n(17),
            c = n(0),
            u = n(20),
            d = n(1),
            m = n(2),
            g = n(6),
            h = n(5),
            f = n(135),
            b = n(275),
            k = n(261),
            v = n(3),
            R = n(1917),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getReportingContext = function() {
                        var e = u.parse(t.props.location.search);
                        return {
                            contentType: e.contentType ? e.contentType : k.a.User,
                            contentID: e.contentId,
                            targetUserID: t.props.userToReportData.user.id
                        }
                    }, t.handleReportUserClose = function(e) {
                        e !== f.b.MutationError && e !== f.b.Success || t.props.history.push("/")
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.isLoggedIn || this.props.login()
                }, t.prototype.render = function() {
                    return d.createElement(v.U, {
                        "data-test-selector": "report-user-page",
                        alignItems: v.c.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        fullHeight: !0,
                        padding: 3
                    }, this.renderPage())
                }, t.prototype.renderPage = function() {
                    return this.props.isLoggedIn ? this.props.userToReportData.error ? d.createElement(v.U, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(v._21, {
                        fontSize: v.L.Size5
                    }, Object(m.d)("There was an unexpected error. Please refresh the page and try again", "ReportUserPage"))) : this.props.userToReportData && !this.props.userToReportData.loading && this.props.userToReportData.user ? d.createElement(b.a, {
                        onClose: this.handleReportUserClose,
                        reportContext: this.getReportingContext(),
                        title: Object(m.d)("Report {channelName}", {
                            channelName: this.props.match.params.channelName
                        }, "ReportUserPage")
                    }) : d.createElement(v._1, {
                        lineCount: 3
                    }) : d.createElement(v.U, {
                        "data-test-selector": "report-user-page__logged-out",
                        alignItems: v.c.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column
                    }, d.createElement(v.U, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(v._21, {
                        fontSize: v.L.Size5
                    }, Object(m.d)("You must be logged in to report {channelName}. Please log in to complete.", {
                        channelName: this.props.match.params.channelName
                    }, "ReportUserPage"))), d.createElement(v.u, {
                        onClick: this.props.login
                    }, Object(m.d)("Log in", "ReportUserPage")))
                }, t = c.__decorate([Object(g.a)(R, {
                    name: "userToReportData",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(h.c)("ReportUserPage", {
                    autoReportInteractive: !0,
                    destination: "reportUser.page"
                })], t)
            }(d.Component),
            U = y,
            N = Object(a.a)(r, o)(U);
        n.d(t, "ReportUserPage", function() {
            return N
        })
    }
});
//# sourceMappingURL=pages.report-user-page-6f1de5fb2f2e2c0e696d5a8ee08e1771.js.map