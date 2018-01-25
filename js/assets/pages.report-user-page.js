webpackJsonp([57], {
    DkuH: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            o = n("2KeS"),
            a = n("+xm8"),
            i = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            c = n("OAwv"),
            p = n("U7vG"),
            u = n("6sO2"),
            d = n("7vx8"),
            m = n("w9tK"),
            g = n("CSlQ"),
            h = n("LjAQ"),
            f = n("A5Hr"),
            b = n("mw/a"),
            k = n("Odds"),
            v = n("ucSk"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getReportingContext = function() {
                        var e = c.parse(t.props.location.search);
                        return {
                            contentType: e.contentType ? e.contentType : b.a.User,
                            contentID: e.contentId,
                            targetUserID: t.props.userToReportData.user.id
                        }
                    }, t.handleReportUserClose = function(e) {
                        e !== h.b.MutationError && e !== h.b.Success || t.props.history.push("/")
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.isLoggedIn || this.props.login()
                }, t.prototype.render = function() {
                    return p.createElement(k.V, {
                        "data-test-selector": "report-user-page",
                        alignItems: k.c.Center,
                        display: k.H.Flex,
                        flexDirection: k.J.Column,
                        fullHeight: !0,
                        padding: 3
                    }, this.renderPage())
                }, t.prototype.renderPage = function() {
                    return this.props.isLoggedIn ? this.props.userToReportData.error ? p.createElement(k.V, {
                        margin: {
                            bottom: 1
                        }
                    }, p.createElement(k._23, {
                        fontSize: k.L.Size5
                    }, Object(u.d)("There was an unexpected error. Please refresh the page and try again", "ReportUserPage"))) : this.props.userToReportData && !this.props.userToReportData.loading && this.props.userToReportData.user ? p.createElement(f.a, {
                        onClose: this.handleReportUserClose,
                        reportContext: this.getReportingContext(),
                        title: Object(u.d)("Report {channelName}", {
                            channelName: this.props.match.params.channelName
                        }, "ReportUserPage")
                    }) : p.createElement(k._3, {
                        lineCount: 3
                    }) : p.createElement(k.V, {
                        "data-test-selector": "report-user-page__logged-out",
                        alignItems: k.c.Center,
                        display: k.H.Flex,
                        flexDirection: k.J.Column
                    }, p.createElement(k.V, {
                        margin: {
                            bottom: 1
                        }
                    }, p.createElement(k._23, {
                        fontSize: k.L.Size5
                    }, Object(u.d)("You must be logged in to report {channelName}. Please log in to complete.", {
                        channelName: this.props.match.params.channelName
                    }, "ReportUserPage"))), p.createElement(k.u, {
                        onClick: this.props.login
                    }, Object(u.d)("Log in", "ReportUserPage")))
                }, t = l.__decorate([Object(d.a)(v, {
                    name: "userToReportData",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(g.c)("ReportUserPage", {
                    autoReportInteractive: !0,
                    destination: m.a.ReportUserPage
                })], t)
            }(p.Component),
            y = Object(r.a)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e),
                    currentUser: Object(s.c)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(i.f)(a.a.ReportChannel)
                    }
                }, e)
            })(R);
        n.d(t, "ReportUserPage", function() {
            return y
        })
    },
    ucSk: function(e, t) {
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
                end: 73
            }
        };
        n.loc.source = {
            body: "query ReportUserPage_User($login: String!) {\nuser(login: $login) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.report-user-page-c365874be7c62016bf2b4dcfc461fa7f.js.map