(window.webpackJsonp = window.webpackJsonp || []).push([
    [87], {
        "1vHQ": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, a, c, r = n("/MKj"),
                o = n("fvjX"),
                s = n("1/iK"),
                l = n("y5D0"),
                d = n("kRBY"),
                u = n("mrSG"),
                v = n("q1tI"),
                m = n("/7QA"),
                p = n("ZDlU"),
                g = n("jCRX"),
                b = n.n(g),
                f = n("yR8l"),
                h = n("geRD"),
                E = n("Ue10"),
                S = n("wHfN");
            n("Bt4M");
            ! function(e) {
                e.ActivateButton = "activate-button", e.ActivationSuccessMessage = "activate-success", e.ActivationFailureMessage = "activate-failure"
            }(i || (i = {})),
            function(e) {
                e[e.Error = 1] = "Error", e[e.Initial = 2] = "Initial", e[e.Success = 3] = "Success", e[e.Processing = 4] = "Processing"
            }(a || (a = {})),
            function(e) {
                e.CodeIncorrect = "CODE_INCORRECT", e.CodeExpired = "CODE_EXPIRED", e.AlreadyLinked = "ALREADY_LINKED"
            }(c || (c = {}));
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activateStatus: a.Initial,
                            code: ""
                        }, t.onChange = function(e) {
                            t.setState({
                                code: e.currentTarget.value
                            })
                        }, t.onActivateButtonClick = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                activateStatus: a.Processing
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), e = this.state.code, [4, this.props.linkSSO(Object(h.a)({
                                                code: e
                                            }))];
                                        case 2:
                                            return (t = n.sent()) && t.data && t.data.linkSSO && t.data.linkSSO.error ? this.setState({
                                                activateStatus: a.Error,
                                                errorCode: t.data.linkSSO.error.code
                                            }) : this.setState({
                                                activateStatus: a.Success
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                activateStatus: a.Error,
                                                errorCode: c.CodeIncorrect
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? this.renderActivateForm() : (this.props.login(), v.createElement(p.a, {
                            message: Object(m.d)("You must be logged in to view this page", "ActivateDevice")
                        }))
                    }, t.prototype.renderActivateForm = function() {
                        return v.createElement(E.Xa, {
                            className: "activate-device-wrapper",
                            alignSelf: E.g.Center,
                            textAlign: E.Pb.Center,
                            fullHeight: !0,
                            fullWidth: !0
                        }, v.createElement(E.Cb, {
                            className: "activate-device-wrapper__background-container",
                            background: E.r.Base,
                            display: E.X.InlineBlock,
                            position: E.hb.Relative,
                            textAlign: E.Pb.Center
                        }, v.createElement(E.Ja, null, v.createElement(E.P, {
                            cols: 6
                        }, v.createElement(E.Cb, {
                            padding: 2
                        }, v.createElement(E.qb, {
                            asset: E.rb.LogoTwitch,
                            type: E.sb.Brand,
                            height: 50,
                            width: 129
                        }))), v.createElement(E.P, {
                            cols: 6
                        }, v.createElement(E.Cb, {
                            padding: 3
                        }, v.createElement(E.z, {
                            type: E.F.Default,
                            linkTo: "/"
                        }, Object(m.d)("Return To Twitch", "ActivateDevice"))))), this.renderInputForm(), this.renderSuccessPage(), v.createElement(E.Ja, null, v.createElement(E.P, {
                            cols: 6
                        }, v.createElement(E.Cb, {
                            padding: 2
                        }, v.createElement(E.W, {
                            color: E.O.Alt2
                        }, "© ", (new Date).getFullYear(), " Twitch Interactive, Inc."))), v.createElement(E.P, {
                            cols: 6
                        }, v.createElement(E.Cb, {
                            padding: 2
                        }, v.createElement(E.U, {
                            to: "https://www.twitch.tv/p/legal/terms-of-service/"
                        }, Object(m.d)("Terms of Service", "ActivateDevice")))))))
                    }, t.prototype.renderSuccessPage = function() {
                        if (this.state.activateStatus === a.Success) {
                            var e = Object(m.d)("You can <x:twitter>connect your Twitter account</x:twitter> to automatically send a tweet when you begin broadcasting. You can see which devices and apps you've connected in the <x:connection>Connections</x:connection> section of your settings.", {
                                "x:connection": function(e) {
                                    return v.createElement("a", {
                                        href: "../settings/connections"
                                    }, e)
                                },
                                "x:twitter": function(e) {
                                    return v.createElement("a", {
                                        href: "../settings/connections"
                                    }, e)
                                }
                            }, "ActivateDevice");
                            return v.createElement(E.Xa, {
                                className: "activate-device-wrapper__success",
                                alignItems: E.f.Center,
                                position: E.hb.Relative,
                                textAlign: E.Pb.Center,
                                "data-test-selector": i.ActivationSuccessMessage
                            }, v.createElement(E.Xa, {
                                className: "activate-device-wrapper__check_mark",
                                padding: 2
                            }, v.createElement("img", {
                                src: b.a
                            })), v.createElement(E.Xa, {
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    bottom: 1
                                }
                            }, v.createElement(E.W, {
                                type: E.Tb.H2
                            }, Object(m.d)("You've Done It!", "ActivateDevice"))), v.createElement(E.Xa, {
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    bottom: 2
                                }
                            }, v.createElement(E.W, {
                                color: E.O.Alt2
                            }, Object(m.d)("You've linked your Twitch Account!", "ActivateDevice"))), v.createElement(E.Xa, {
                                display: E.X.Block,
                                margin: 1,
                                className: "activate-device-success-wrapper__divider"
                            }), v.createElement(E.Xa, {
                                margin: {
                                    x: 1
                                },
                                padding: 2
                            }, v.createElement(E.W, {
                                color: E.O.Alt2
                            }, e)))
                        }
                    }, t.prototype.renderInputForm = function() {
                        var e = this.state.activateStatus === a.Processing;
                        if (this.state.activateStatus !== a.Success) return v.createElement(E.Xa, {
                            className: "activate-device-wrapper__form",
                            alignItems: E.f.Center,
                            position: E.hb.Relative,
                            textAlign: E.Pb.Center
                        }, v.createElement(E.Xa, {
                            padding: {
                                top: 2
                            }
                        }, v.createElement(E.W, {
                            type: E.Tb.H2
                        }, Object(m.d)("Activate Your Device", "ActivateDevice"))), v.createElement(E.Xa, {
                            padding: 1
                        }, v.createElement(E.W, {
                            color: E.O.Alt2
                        }, Object(m.d)("Enter the code given to you by your device to link it to your Twitch account.", "ActivateDevice"))), this.state.activateStatus === a.Error && this.renderErrorBar(), v.createElement(E.Xa, {
                            padding: 1,
                            flexGrow: 1,
                            className: "activate-device-wrapper__input",
                            alignItems: E.f.Center,
                            position: E.hb.Relative,
                            textAlign: E.Pb.Center
                        }, v.createElement(E.Ra, {
                            type: E.Ta.Text,
                            onChange: this.onChange,
                            value: this.state.code,
                            placeholder: Object(m.d)("Enter Code", "ActivateDevice")
                        })), v.createElement(E.Xa, {
                            padding: {
                                bottom: 2,
                                top: 1
                            }
                        }, v.createElement(E.z, {
                            onClick: this.onActivateButtonClick,
                            type: E.F.Default,
                            "data-test-selector": i.ActivateButton,
                            disabled: e
                        }, Object(m.d)("Activate", "ActivateDevice"))))
                    }, t.prototype.renderErrorBar = function() {
                        var e;
                        switch (this.state.errorCode) {
                            case c.CodeExpired:
                                e = Object(m.d)("Code Expired!", "ActivateDevice");
                                break;
                            case c.AlreadyLinked:
                                e = Object(m.d)("Already Linked!", "ActivateDevice");
                                break;
                            default:
                                e = Object(m.d)("Incorrect code!", "ActivateDevice")
                        }
                        return v.createElement(E.Cb, {
                            className: "activate-device-form__error",
                            textAlign: E.Pb.Center,
                            fontSize: E.Ca.Size4
                        }, v.createElement(E.eb, {
                            label: e,
                            type: E.fb.Alert,
                            "data-test-selector": i.ActivationFailureMessage
                        }))
                    }, t
                }(v.Component),
                A = Object(f.a)(S, {
                    name: "linkSSO"
                })(k);
            var C = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                }, function(e) {
                    return Object(o.bindActionCreators)({
                        login: function() {
                            return l.e(s.a.ActivateDevice)
                        }
                    }, e)
                })(A),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? v.createElement(E.Xa, {
                            className: "activate-device-root",
                            fullHeight: !0,
                            fullWidth: !0
                        }, v.createElement(E.Xa, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, v.createElement(C, null))) : (this.props.login(), v.createElement(E.Xa, null, v.createElement(p.a, {
                            message: Object(m.d)("You must be logged in to view this page", "ActivateDevicePage")
                        })))
                    }, t
                }(v.Component);
            var w = Object(r.connect)(function(e) {
                return {
                    isLoggedIn: Object(d.f)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(l.e)(s.a.ActivateDevice)
                    }
                }, e)
            })(O);
            n.d(t, "ActivateDevicePage", function() {
                return w
            }), n.d(t, "ActivateDevice", function() {
                return C
            })
        },
        Bt4M: function(e, t, n) {},
        jCRX: function(e, t, n) {
            e.exports = n.p + "assets/success_circle_large-be4c933ca19254050f0c.png"
        },
        wHfN: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ActivateDevice_LinkSSO"
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
                                    value: "LinkSSOInput"
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
                                value: "linkSSO"
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
                                        value: "link"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 115
                }
            };
            n.loc.source = {
                body: "mutation ActivateDevice_LinkSSO($input: LinkSSOInput!) {\nlinkSSO(input: $input) {\nlink {\nssoID\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);