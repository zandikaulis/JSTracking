(window.webpackJsonp = window.webpackJsonp || []).push([
    [65], {
        AtgE: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("mrSG"),
                a = i("cr+I"),
                s = i("q1tI"),
                r = i("oJmH"),
                c = i("/7QA"),
                o = i("yR8l"),
                l = i("V+GM"),
                u = i("geRD"),
                m = i("NvVO"),
                b = i("2xye"),
                d = i("GnwI"),
                p = i("sL2n"),
                E = i("Ue10"),
                f = "verify-success",
                y = "verify-error",
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isError: !1,
                            isLoading: !1,
                            isSuccess: !1
                        }, t.renderStatus = function() {
                            return t.state.isError ? s.createElement(E.Wa, {
                                margin: {
                                    top: 1
                                },
                                "data-test-selector": y
                            }, s.createElement(E.W, {
                                type: E.Ob.H5,
                                color: E.O.Error
                            }, Object(c.d)("There was an error when unsubscribing.", "EmailUnsubscribe"))) : t.state.isSuccess ? s.createElement(E.Wa, {
                                margin: {
                                    top: 1
                                },
                                "data-test-selector": f
                            }, s.createElement(E.W, {
                                type: E.Ob.H5,
                                color: E.O.Alt2
                            }, Object(c.d)("You have successfully unsubscribed.", "EmailUnsubscribe"))) : t.state.isLoading ? s.createElement(E.Wa, {
                                margin: {
                                    top: 1
                                }
                            }, s.createElement(E.W, {
                                type: E.Ob.H5,
                                bold: !0
                            }, Object(c.d)("Unsubscribing...", "EmailUnsubscribe"))) : s.createElement(E.yb, {
                                display: E.X.Flex,
                                flexDirection: E.Z.Column,
                                margin: {
                                    top: 1
                                }
                            }, s.createElement(E.Wa, {
                                margin: {
                                    bottom: 1
                                }
                            }, s.createElement(E.W, {
                                type: E.Ob.H5,
                                color: E.O.Alt2
                            }, Object(c.d)("You will unsubscribe from future emails of this type from Twitch.", "EmailUnsubscribe"))), s.createElement(E.Wa, {
                                flexGrow: 0
                            }, s.createElement(E.z, {
                                type: E.F.Default,
                                onClick: t.confirmHandler
                            }, Object(c.d)("Confirm", "EmailUnsubscribe"))))
                        }, t.confirmHandler = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t, i;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.unsubscribeEmail) return [2];
                                            e = Object(a.parse)(this.props.location.search), this.setState({
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
                        return s.createElement(E.yb, {
                            padding: {
                                x: 3,
                                top: 3,
                                bottom: 1
                            },
                            display: E.X.Flex,
                            flexDirection: E.Z.Column
                        }, s.createElement(E.W, {
                            className: "title",
                            type: E.Ob.H2
                        }, Object(c.d)("Email Unsubscribe", "EmailUnsubscribe")), this.renderStatus())
                    }, t
                }(s.Component),
                v = Object(r.compose)(Object(o.a)(p, {
                    name: "unsubscribeEmail"
                }), Object(d.b)("EmailUnsubscribePage", {
                    destination: m.a.EmailUnsubscribe
                }), Object(l.a)({
                    location: b.PageviewLocation.EmailUnsubscribe
                }))(h);
            i.d(t, "EmailUnsubscribePage", function() {
                return v
            })
        },
        sL2n: function(e, t) {
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
        }
    }
]);