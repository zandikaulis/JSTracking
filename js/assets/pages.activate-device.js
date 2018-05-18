webpackJsonp([73], {
    "507O": function(e, t, n) {
        e.exports = n.p + "assets/success_circle_large-be4c933ca19254050f0ce5025bba28f9.png"
    },
    "9q4g": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a, c = n("RH2O"),
            r = n("2KeS"),
            o = n("+xm8"),
            s = n("f2i/"),
            l = n("Aj/L"),
            d = n("TToO"),
            u = n("GiK3"),
            v = n("6sO2"),
            m = n("yWCw"),
            p = n("507O"),
            g = n.n(p),
            _ = n("7vx8"),
            E = n("oIkB"),
            f = n("Odds"),
            k = n("KBuO");
        n("CRQe");
        ! function(e) {
            e[e.Error = 1] = "Error", e[e.Initial = 2] = "Initial", e[e.Success = 3] = "Success", e[e.Processing = 4] = "Processing"
        }(i || (i = {})),
        function(e) {
            e.CodeIncorrect = "CODE_INCORRECT", e.CodeExpired = "CODE_EXPIRED", e.AlreadyLinked = "ALREADY_LINKED"
        }(a || (a = {}));
        var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activateStatus: i.Initial
                    }, t.onChange = function(e) {
                        t.setState({
                            code: e.currentTarget.value
                        })
                    }, t.onActivateButtonClick = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            activateStatus: i.Processing
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), e = this.state.code, [4, this.props.linkSSO(Object(E.a)({
                                            code: e
                                        }))];
                                    case 2:
                                        return (t = n.sent()) && t.data && t.data.linkSSO && t.data.linkSSO.error ? this.setState({
                                            activateStatus: i.Error,
                                            errorCode: t.data.linkSSO.error.code
                                        }) : this.setState({
                                            activateStatus: i.Success
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            activateStatus: i.Error,
                                            errorCode: a.CodeIncorrect
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? this.renderActivateForm() : (this.props.login(), u.createElement(m.a, {
                        message: Object(v.d)("You must be logged in to view this page", "ActivateDevice")
                    }))
                }, t.prototype.renderActivateForm = function() {
                    return u.createElement(f._8, {
                        className: "activate-device-wrapper",
                        alignSelf: f.d.Center,
                        textAlign: f._45.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(f._35, {
                        className: "activate-device-wrapper__background-container",
                        background: f.n.Base,
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center
                    }, u.createElement(f.Y, null, u.createElement(f.L, {
                        cols: 6
                    }, u.createElement(f._35, {
                        padding: 2
                    }, u.createElement(f._24, {
                        asset: f._25.LogoTwitch,
                        type: f._26.Brand,
                        height: 50,
                        width: 129
                    }))), u.createElement(f.L, {
                        cols: 6
                    }, u.createElement(f._35, {
                        padding: 3
                    }, u.createElement(f.v, {
                        type: f.B.Default,
                        linkTo: "../"
                    }, Object(v.d)("Return To Twitch", "ActivateDevice"))))), this.renderInputForm(), this.renderSuccessPage(), u.createElement(f.Y, null, u.createElement(f.L, {
                        cols: 6
                    }, u.createElement(f._35, {
                        padding: 2
                    }, u.createElement(f.Q, {
                        color: f.K.Alt2
                    }, "© ", (new Date).getFullYear(), " Twitch Interactive, Inc."))), u.createElement(f.L, {
                        cols: 6
                    }, u.createElement(f._35, {
                        padding: 2
                    }, u.createElement(f.O, {
                        to: "https://www.twitch.tv/p/legal/terms-of-service/"
                    }, Object(v.d)("Terms of Service", "ActivateDevice")))))))
                }, t.prototype.renderSuccessPage = function() {
                    if (this.state.activateStatus === i.Success) {
                        var e = Object(v.d)("You can <x:twitter>connect your Twitter account</x:twitter> to automatically send a tweet when you begin broadcasting. You can see which devices and apps you've connected in the <x:connection>Connections</x:connection> section of your settings.", {
                            "x:connection": function(e) {
                                return u.createElement("span", {
                                    key: "connectionlink"
                                }, u.createElement("a", {
                                    href: "../settings/connections"
                                }, e))
                            },
                            "x:twitter": function(e) {
                                return u.createElement("span", {
                                    key: "twitterlink"
                                }, u.createElement("a", {
                                    href: "../settings/connections"
                                }, e))
                            }
                        }, "ActivateDevice");
                        return u.createElement(f._8, {
                            className: "activate-device-wrapper__success",
                            alignItems: f.c.Center,
                            position: f._15.Relative,
                            textAlign: f._45.Center,
                            "data-test-selector": "activate-success"
                        }, u.createElement(f._8, {
                            className: "activate-device-wrapper__check_mark",
                            padding: 2
                        }, u.createElement("img", {
                            src: g.a
                        })), u.createElement(f._8, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: 1
                            }
                        }, u.createElement(f.Q, {
                            type: f._49.H2
                        }, Object(v.d)("You've Done It!", "ActivateDevice"))), u.createElement(f._8, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: 2
                            }
                        }, u.createElement(f.Q, {
                            color: f.K.Alt2
                        }, Object(v.d)("You've linked your Twitch Account!", "ActivateDevice"))), u.createElement(f._8, {
                            display: f.R.Block,
                            margin: 1,
                            className: "activate-device-success-wrapper__divider"
                        }), u.createElement(f._8, {
                            margin: {
                                x: 1
                            },
                            padding: 2
                        }, u.createElement(f.Q, {
                            color: f.K.Alt2
                        }, e)))
                    }
                }, t.prototype.renderInputForm = function() {
                    var e = this.state.activateStatus === i.Processing;
                    if (this.state.activateStatus !== i.Success) return u.createElement(f._8, {
                        className: "activate-device-wrapper__form",
                        alignItems: f.c.Center,
                        position: f._15.Relative,
                        textAlign: f._45.Center
                    }, u.createElement(f._8, {
                        padding: {
                            top: 2
                        }
                    }, u.createElement(f.Q, {
                        type: f._49.H2
                    }, Object(v.d)("Activate Your Device", "ActivateDevice"))), u.createElement(f._8, {
                        padding: 1
                    }, u.createElement(f.Q, {
                        color: f.K.Alt2
                    }, Object(v.d)("Enter the code given to you by your device to link it to your Twitch account.", "ActivateDevice"))), this.state.activateStatus === i.Error && this.renderErrorBar(), u.createElement(f._8, {
                        padding: 1,
                        flexGrow: 1,
                        className: "activate-device-wrapper__input",
                        alignItems: f.c.Center,
                        position: f._15.Relative,
                        textAlign: f._45.Center
                    }, u.createElement(f._4, {
                        type: f._5.Text,
                        onChange: this.onChange,
                        value: this.state.code,
                        placeholder: Object(v.d)("Enter Code", "ActivateDevice")
                    })), u.createElement(f._8, {
                        padding: {
                            bottom: 2,
                            top: 1
                        }
                    }, u.createElement(f.v, {
                        onClick: this.onActivateButtonClick,
                        type: f.B.Default,
                        "data-test-selector": "activate-button",
                        disabled: e
                    }, Object(v.d)("Activate", "ActivateDevice"))))
                }, t.prototype.renderErrorBar = function() {
                    var e;
                    switch (this.state.errorCode) {
                        case a.CodeExpired:
                            e = Object(v.d)("Code Expired!", "ActivateDevice");
                            break;
                        case a.AlreadyLinked:
                            e = Object(v.d)("Already Linked!", "ActivateDevice");
                            break;
                        default:
                            e = Object(v.d)("Incorrect code!", "ActivateDevice")
                    }
                    return u.createElement(f._35, {
                        className: "activate-device-form__error",
                        textAlign: f._45.Center,
                        fontSize: f.V.Size4
                    }, u.createElement(f._12, {
                        label: e,
                        type: f._13.Alert,
                        "data-test-selector": "activate-failure"
                    }))
                }, t
            }(u.Component),
            S = Object(_.a)(k, {
                name: "linkSSO"
            })(h);
        var b = Object(c.b)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e)
                }
            }, function(e) {
                return Object(r.b)({
                    login: function() {
                        return s.f(o.a.ActivateDevice)
                    }
                }, e)
            })(S),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? u.createElement(f._8, {
                        className: "activate-device-root",
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(f._8, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(b, null))) : (this.props.login(), u.createElement(f._8, null, u.createElement(m.a, {
                        message: Object(v.d)("You must be logged in to view this page", "ActivateDevicePage")
                    })))
                }, t
            }(u.Component);
        var A = Object(c.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return Object(s.f)(o.a.ActivateDevice)
                }
            }, e)
        })(O);
        n.d(t, "ActivateDevicePage", function() {
            return A
        }), n.d(t, "ActivateDevice", function() {
            return b
        })
    },
    CRQe: function(e, t) {},
    KBuO: function(e, t) {
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
});
//# sourceMappingURL=pages.activate-device-d45add25c58ca06967b4fe56f2e3d155.js.map