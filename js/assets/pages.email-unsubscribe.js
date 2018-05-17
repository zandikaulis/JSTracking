webpackJsonp([81], {
    "0zm4": function(e, t) {
        var i = {
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
        i.loc.source = {
            body: "mutation UnsubscribeEmail($input: UnsubscribeEmailInput!) {\nunsubscribeEmail(input: $input) {\nisSuccess\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    mqYJ: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i("TToO"),
            s = i("OAwv"),
            a = i("GiK3"),
            r = i("3zLD"),
            c = i("6sO2"),
            l = i("7vx8"),
            o = i("j7/Y"),
            u = i("oIkB"),
            m = i("w9tK"),
            b = i("vH/s"),
            d = i("CSlQ"),
            p = i("0zm4"),
            E = i("Odds"),
            f = "verify-success",
            v = "verify-error",
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isError: !1,
                        isLoading: !1,
                        isSuccess: !1
                    }, t.renderStatus = function() {
                        return t.state.isError ? a.createElement(E._8, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": v
                        }, a.createElement(E.Q, {
                            type: E._49.H5,
                            color: E.K.Error
                        }, Object(c.d)("There was an error when unsubscribing.", "EmailUnsubscribe"))) : t.state.isSuccess ? a.createElement(E._8, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": f
                        }, a.createElement(E.Q, {
                            type: E._49.H5,
                            color: E.K.Alt2
                        }, Object(c.d)("You have successfully unsubscribed.", "EmailUnsubscribe"))) : t.state.isLoading ? a.createElement(E._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(E.Q, {
                            type: E._49.H5,
                            bold: !0
                        }, Object(c.d)("Unsubscribing...", "EmailUnsubscribe"))) : a.createElement(E._35, {
                            display: E.R.Flex,
                            flexDirection: E.T.Column,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(E._8, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(E.Q, {
                            type: E._49.H5,
                            color: E.K.Alt2
                        }, Object(c.d)("You will unsubscribe from future emails of this type from Twitch.", "EmailUnsubscribe"))), a.createElement(E._8, {
                            flexGrow: 0
                        }, a.createElement(E.v, {
                            type: E.B.Default,
                            onClick: t.confirmHandler
                        }, Object(c.d)("Confirm", "EmailUnsubscribe"))))
                    }, t.confirmHandler = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e, t, i;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.props.unsubscribeEmail) return [2];
                                        e = Object(s.parse)(this.props.location.search), this.setState({
                                            isLoading: !0
                                        }), t = {
                                            userID: e.user_id,
                                            validatingHash: e.validating_hash,
                                            sourceEmailType: e.source_email,
                                            sourceEmailID: e.email_id
                                        }, "kind" === e.block ? t.targetEmailType = e.email_type : t.targetChannelID = e.channel_id, i = Object(u.a)(t), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.unsubscribeEmail(i)];
                                    case 2:
                                        return n.sent().data.unsubscribeEmail.isSuccess ? this.setState({
                                            isSuccess: !0
                                        }) : this.setState({
                                            isError: !0
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            isError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(E._35, {
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 1
                        },
                        display: E.R.Flex,
                        flexDirection: E.T.Column
                    }, a.createElement(E.Q, {
                        className: "title",
                        type: E._49.H2
                    }, Object(c.d)("Email Unsubscribe", "EmailUnsubscribe")), this.renderStatus())
                }, t
            }(a.Component),
            y = Object(r.compose)(Object(l.a)(p, {
                name: "unsubscribeEmail"
            }), Object(d.d)("EmailUnsubscribePage", {
                destination: m.a.EmailUnsubscribe
            }), Object(o.a)({
                location: b.PageviewLocation.EmailUnsubscribe
            }))(h);
        i.d(t, "EmailUnsubscribePage", function() {
            return y
        })
    }
});
//# sourceMappingURL=pages.email-unsubscribe-fd16656e30075c6362444c9578172bc4.js.map