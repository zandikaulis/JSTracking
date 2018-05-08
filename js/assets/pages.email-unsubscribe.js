webpackJsonp([77], {
    "0zm4": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnsubscribeEmail"
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
                                value: "UnsubscribeEmailInput"
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
                            value: "unsubscribeEmail"
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
                                    value: "isSuccess"
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
                end: 107
            }
        };
        n.loc.source = {
            body: "mutation UnsubscribeEmail($input: UnsubscribeEmailInput!) {\nunsubscribeEmail(input: $input) {\nisSuccess\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            s = n("F8kA"),
            o = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function s(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    s = a.content,
                                    c = a.medium,
                                    u = a.content_index;
                                o.o.tracking.trackPageview(i.__assign({
                                    content: s,
                                    medium: c,
                                    content_index: u,
                                    location: e.location
                                }, t))
                            }
                        }, o.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(s, n), s.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, s.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, s.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props))
                    }, s.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, s
                }(a.Component);
                return Object(s.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    mqYJ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            s = n("3zLD"),
            o = n("6sO2"),
            c = n("7vx8"),
            u = n("j7/Y"),
            l = n("oIkB"),
            m = n("w9tK"),
            p = n("vH/s"),
            d = n("CSlQ"),
            b = n("0zm4"),
            f = n("Odds"),
            h = "verify-success",
            _ = "verify-error",
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isError: !1,
                        isLoading: !1,
                        isSuccess: !1
                    }, t.renderStatus = function() {
                        return t.state.isError ? a.createElement(f._8, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": _
                        }, a.createElement(f.Q, {
                            type: f._49.H5,
                            color: f.K.Error
                        }, Object(o.d)("There was an error when unsubscribing.", "EmailUnsubscribe"))) : t.state.isSuccess ? a.createElement(f._8, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": h
                        }, a.createElement(f.Q, {
                            type: f._49.H5,
                            color: f.K.Alt2
                        }, Object(o.d)("You have successfully unsubscribed.", "EmailUnsubscribe"))) : t.state.isLoading ? a.createElement(f._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(f.Q, {
                            type: f._49.H5,
                            bold: !0
                        }, Object(o.d)("Unsubscribing...", "EmailUnsubscribe"))) : a.createElement(f._35, {
                            display: f.R.Flex,
                            flexDirection: f.T.Column,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(f._8, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(f.Q, {
                            type: f._49.H5,
                            color: f.K.Alt2
                        }, Object(o.d)("You will unsubscribe from future emails of this type from Twitch.", "EmailUnsubscribe"))), a.createElement(f._8, {
                            flexGrow: 0
                        }, a.createElement(f.v, {
                            type: f.B.Default,
                            onClick: t.confirmHandler
                        }, Object(o.d)("Confirm", "EmailUnsubscribe"))))
                    }, t.confirmHandler = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.unsubscribeEmail) return [2];
                                        e = Object(r.parse)(this.props.location.search), this.setState({
                                            isLoading: !0
                                        }), t = {
                                            userID: e.user_id,
                                            validatingHash: e.validating_hash,
                                            sourceEmailType: e.source_email,
                                            sourceEmailID: e.email_id
                                        }, "kind" === e.block ? t.targetEmailType = e.email_type : t.targetChannelID = e.channel_id, n = Object(l.a)(t), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.unsubscribeEmail(n)];
                                    case 2:
                                        return i.sent().data.unsubscribeEmail.isSuccess ? this.setState({
                                            isSuccess: !0
                                        }) : this.setState({
                                            isError: !0
                                        }), [3, 4];
                                    case 3:
                                        return i.sent(), this.setState({
                                            isError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(f._35, {
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 1
                        },
                        display: f.R.Flex,
                        flexDirection: f.T.Column
                    }, a.createElement(f.Q, {
                        className: "title",
                        type: f._49.H2
                    }, Object(o.d)("Email Unsubscribe", "EmailUnsubscribe")), this.renderStatus())
                }, t
            }(a.Component),
            v = Object(s.compose)(Object(c.a)(b, {
                name: "unsubscribeEmail"
            }), Object(d.d)("EmailUnsubscribePage", {
                destination: m.a.EmailUnsubscribe
            }), Object(u.a)({
                location: p.PageviewLocation.EmailUnsubscribe
            }))(k);
        n.d(t, "EmailUnsubscribePage", function() {
            return v
        })
    }
});
//# sourceMappingURL=pages.email-unsubscribe-70a170286166cc115f68a2d45b3dd46c.js.map