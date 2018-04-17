webpackJsonp([61], {
    "507O": function(e, t, n) {
        e.exports = n.p + "assets/success_circle_large-be4c933ca19254050f0ce5025bba28f9.png"
    },
    "9q4g": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n("RH2O"),
            c = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            u = n("GiK3"),
            d = n("6sO2"),
            v = n("yWCw"),
            m = n("507O"),
            p = n.n(m),
            g = n("7vx8"),
            _ = n("oIkB"),
            f = n("Odds"),
            h = n("KBuO");
        n("CRQe");
        ! function(e) {
            e[e.Error = 1] = "Error", e[e.Initial = 2] = "Initial", e[e.Success = 3] = "Success", e[e.Processing = 4] = "Processing"
        }(i || (i = {}));
        var E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activateStatus: i.Initial
                    }, t.onChange = function(e) {
                        t.setState({
                            code: e.currentTarget.value
                        })
                    }, t.onActivateButtonClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            activateStatus: i.Processing
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), e = this.state.code, [4, this.props.linkSSO(Object(_.a)({
                                            code: e
                                        }))];
                                    case 2:
                                        return t.sent(), this.setState({
                                            activateStatus: i.Success
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            activateStatus: i.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? this.renderActivateForm() : (this.props.login(), u.createElement(v.a, {
                        message: Object(d.d)("You must be logged in to view this page", "ActivateDevice")
                    }))
                }, t.prototype.renderActivateForm = function() {
                    return u.createElement(f._7, {
                        className: "activate-device-wrapper",
                        alignSelf: f.d.Center,
                        textAlign: f._40.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(f._30, {
                        className: "activate-device-wrapper__background-container",
                        background: f.m.Base,
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center
                    }, u.createElement(f.X, null, u.createElement(f.K, {
                        cols: 6
                    }, u.createElement(f._30, {
                        padding: 2
                    }, u.createElement(f._20, {
                        asset: f._21.LogoTwitch,
                        type: f._22.Brand,
                        height: 50,
                        width: 129
                    }))), u.createElement(f.K, {
                        cols: 6
                    }, u.createElement(f._30, {
                        padding: 3
                    }, u.createElement(f.u, {
                        type: f.A.Default,
                        linkTo: "../"
                    }, Object(d.d)("Return To Twitch", "ActivateDevice"))))), this.renderInputForm(), this.renderSuccessPage(), u.createElement(f.X, null, u.createElement(f.K, {
                        cols: 6
                    }, u.createElement(f._30, {
                        padding: 2
                    }, u.createElement(f.P, {
                        color: f.J.Alt2
                    }, "© ", (new Date).getFullYear(), " Twitch Interactive, Inc."))), u.createElement(f.K, {
                        cols: 6
                    }, u.createElement(f._30, {
                        padding: 2
                    }, u.createElement(f.N, {
                        to: "https://www.twitch.tv/p/legal/terms-of-service/"
                    }, Object(d.d)("Terms of Service", "ActivateDevice")))))))
                }, t.prototype.renderSuccessPage = function() {
                    if (this.state.activateStatus === i.Success) {
                        var e = Object(d.d)("You can <x:twitter>connect your Twitter account</x:twitter> to automatically send a tweet when you begin broadcasting. You can see which devices and apps you've connected in the <x:connection>Connections</x:connection> section of your settings.", {
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
                        return u.createElement(f._7, {
                            className: "activate-device-wrapper__success",
                            alignItems: f.c.Center,
                            position: f._14.Relative,
                            textAlign: f._40.Center,
                            "data-test-selector": "activate-success"
                        }, u.createElement(f._7, {
                            className: "activate-device-wrapper__check_mark",
                            padding: 2
                        }, u.createElement("img", {
                            src: p.a
                        })), u.createElement(f._7, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: 1
                            }
                        }, u.createElement(f.P, {
                            type: f._44.H2
                        }, Object(d.d)("You've Done It!", "ActivateDevice"))), u.createElement(f._7, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: 2
                            }
                        }, u.createElement(f.P, {
                            color: f.J.Alt2
                        }, Object(d.d)("You've linked your Twitch Account!", "ActivateDevice"))), u.createElement(f._7, {
                            display: f.Q.Block,
                            margin: 1,
                            className: "activate-device-success-wrapper__divider"
                        }), u.createElement(f._7, {
                            margin: {
                                x: 1
                            },
                            padding: 2
                        }, u.createElement(f.P, {
                            color: f.J.Alt2
                        }, e)))
                    }
                }, t.prototype.renderInputForm = function() {
                    var e = this.state.activateStatus === i.Processing;
                    if (this.state.activateStatus !== i.Success) return u.createElement(f._7, {
                        className: "activate-device-wrapper__form",
                        alignItems: f.c.Center,
                        position: f._14.Relative,
                        textAlign: f._40.Center
                    }, u.createElement(f._7, {
                        padding: {
                            top: 2
                        }
                    }, u.createElement(f.P, {
                        type: f._44.H2
                    }, Object(d.d)("Activate Your Device", "ActivateDevice"))), u.createElement(f._7, {
                        padding: 1
                    }, u.createElement(f.P, {
                        color: f.J.Alt2
                    }, Object(d.d)("Enter the code given to you by your device to link it to your Twitch account.", "ActivateDevice"))), this.renderErrorBar(), u.createElement(f._7, {
                        padding: 1,
                        flexGrow: 1,
                        className: "activate-device-wrapper__input",
                        alignItems: f.c.Center,
                        position: f._14.Relative,
                        textAlign: f._40.Center
                    }, u.createElement(f._3, {
                        type: f._4.Text,
                        onChange: this.onChange,
                        value: this.state.code,
                        placeholder: Object(d.d)("Enter Code", "ActivateDevice")
                    })), u.createElement(f._7, {
                        padding: {
                            bottom: 2,
                            top: 1
                        }
                    }, u.createElement(f.u, {
                        onClick: this.onActivateButtonClick,
                        type: f.A.Default,
                        "data-test-selector": "activate-button",
                        disabled: e
                    }, Object(d.d)("Activate", "ActivateDevice"))))
                }, t.prototype.renderErrorBar = function() {
                    if (this.state.activateStatus === i.Error) return u.createElement(f._30, {
                        className: "activate-device-form__error",
                        textAlign: f._40.Center,
                        fontSize: f.U.Size4
                    }, u.createElement(f._11, {
                        label: Object(d.d)("Incorrect code!", "ActivateDevice"),
                        type: f._12.Alert,
                        "data-test-selector": "activate-failure"
                    }))
                }, t
            }(u.Component),
            b = Object(g.a)(h, {
                name: "linkSSO"
            })(E);
        var k = Object(a.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    login: function() {
                        return o.f(r.a.ActivateDevice)
                    }
                }, e)
            })(b),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? u.createElement(f._7, {
                        className: "activate-device-root",
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(f._7, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(k, null))) : (this.props.login(), u.createElement(f._7, null, u.createElement(v.a, {
                        message: Object(d.d)("You must be logged in to view this page", "ActivateDevicePage")
                    })))
                }, t
            }(u.Component);
        var A = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(c.b)({
                login: function() {
                    return Object(o.f)(r.a.ActivateDevice)
                }
            }, e)
        })(S);
        n.d(t, "ActivateDevicePage", function() {
            return A
        }), n.d(t, "ActivateDevice", function() {
            return k
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "mutation ActivateDevice_LinkSSO($input: LinkSSOInput!) {\nlinkSSO(input: $input) {\nlink {\nssoID\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.activate-device-94f5d245f004f46c7723787f99c7c3f0.js.map