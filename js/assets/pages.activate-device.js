webpackJsonp([59], {
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
            v = n("ZyA2"),
            m = n("yWCw"),
            p = n("507O"),
            g = n.n(p),
            _ = n("7vx8"),
            f = n("oIkB"),
            h = n("Odds"),
            E = n("KBuO");
        n("CRQe");
        ! function(e) {
            e[e.Error = 1] = "Error", e[e.Initial = 2] = "Initial", e[e.Success = 3] = "Success", e[e.Processing = 4] = "Processing"
        }(i || (i = {}));
        var b = function(e) {
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
                                        return t.trys.push([1, 3, , 4]), e = this.state.code, [4, this.props.linkSSO(Object(f.a)({
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
                    return this.props.isLoggedIn ? this.renderActivateForm() : (this.props.login(), u.createElement(m.a, {
                        message: Object(d.d)("You must be logged in to view this page", "ActivateDevice")
                    }))
                }, t.prototype.renderActivateForm = function() {
                    return u.createElement(h._7, {
                        className: "activate-device-wrapper",
                        alignSelf: h.d.Center,
                        textAlign: h._40.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(h._30, {
                        className: "activate-device-wrapper__background-container",
                        background: h.m.Base,
                        display: h.Q.InlineBlock,
                        position: h._14.Relative,
                        textAlign: h._40.Center
                    }, u.createElement(h.X, null, u.createElement(h.K, {
                        cols: 6
                    }, u.createElement(h._30, {
                        padding: 2
                    }, u.createElement(h._20, {
                        asset: h._21.LogoTwitch,
                        type: h._22.Brand,
                        height: 50,
                        width: 129
                    }))), u.createElement(h.K, {
                        cols: 6
                    }, u.createElement(h._30, {
                        padding: 3
                    }, u.createElement(h.u, {
                        type: h.A.Default,
                        linkTo: "../"
                    }, Object(d.d)("Return To Twitch", "ActivateDevice"))))), this.renderInputForm(), this.renderSuccessPage(), u.createElement(h.X, null, u.createElement(h.K, {
                        cols: 6
                    }, u.createElement(h._30, {
                        padding: 2
                    }, u.createElement(h.P, {
                        color: h.J.Alt2
                    }, "© ", (new Date).getFullYear(), " Twitch Interactive, Inc."))), u.createElement(h.K, {
                        cols: 6
                    }, u.createElement(h._30, {
                        padding: 2
                    }, u.createElement(h.N, {
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
                        return u.createElement(h._7, {
                            className: "activate-device-wrapper__success",
                            alignItems: h.c.Center,
                            position: h._14.Relative,
                            textAlign: h._40.Center,
                            "data-test-selector": "activate-success"
                        }, u.createElement(h._7, {
                            className: "activate-device-wrapper__check_mark",
                            padding: 2
                        }, u.createElement("img", {
                            src: g.a
                        })), u.createElement(h._7, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: 1
                            }
                        }, u.createElement(h.P, {
                            type: h._44.H2
                        }, Object(d.d)("You've Done It!", "ActivateDevice"))), u.createElement(h._7, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: 2
                            }
                        }, u.createElement(h.P, {
                            color: h.J.Alt2
                        }, Object(d.d)("You've linked your Twitch Account!", "ActivateDevice"))), u.createElement(h._7, {
                            display: h.Q.Block,
                            margin: 1,
                            className: "activate-device-success-wrapper__divider"
                        }), u.createElement(h._7, {
                            margin: {
                                x: 1
                            },
                            padding: 2
                        }, u.createElement(h.P, {
                            color: h.J.Alt2
                        }, e)))
                    }
                }, t.prototype.renderInputForm = function() {
                    var e = this.state.activateStatus === i.Processing;
                    if (this.state.activateStatus !== i.Success) return u.createElement(h._7, {
                        className: "activate-device-wrapper__form",
                        alignItems: h.c.Center,
                        position: h._14.Relative,
                        textAlign: h._40.Center
                    }, u.createElement(h._7, {
                        padding: {
                            top: 2
                        }
                    }, u.createElement(h.P, {
                        type: h._44.H2
                    }, Object(d.d)("Activate Your Device", "ActivateDevice"))), u.createElement(h._7, {
                        padding: 1
                    }, u.createElement(h.P, {
                        color: h.J.Alt2
                    }, Object(d.d)("Enter the code given to you by your device to link it to your Twitch account.", "ActivateDevice"))), this.renderErrorBar(), u.createElement(h._7, {
                        padding: 1,
                        flexGrow: 1,
                        className: "activate-device-wrapper__input",
                        alignItems: h.c.Center,
                        position: h._14.Relative,
                        textAlign: h._40.Center
                    }, u.createElement(h._3, {
                        type: h._4.Text,
                        onChange: this.onChange,
                        value: this.state.code,
                        placeholder: Object(d.d)("Enter Code", "ActivateDevice")
                    })), u.createElement(h._7, {
                        padding: {
                            bottom: 2,
                            top: 1
                        }
                    }, u.createElement(h.u, {
                        onClick: this.onActivateButtonClick,
                        type: h.A.Default,
                        "data-test-selector": "activate-button",
                        disabled: e
                    }, Object(d.d)("Activate", "ActivateDevice"))))
                }, t.prototype.renderErrorBar = function() {
                    if (this.state.activateStatus === i.Error) return u.createElement(h._30, {
                        className: "activate-device-form__error",
                        textAlign: h._40.Center,
                        fontSize: h.U.Size4
                    }, u.createElement(h._11, {
                        label: Object(d.d)("Incorrect code!", "ActivateDevice"),
                        type: h._12.Alert,
                        "data-test-selector": "activate-failure"
                    }))
                }, t
            }(u.Component),
            k = Object(_.a)(E, {
                name: "linkSSO"
            })(b);
        var S = Object(a.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    login: function() {
                        return o.f(r.a.ActivateDevice)
                    }
                }, e)
            })(k),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? u.createElement(h._7, {
                        className: "activate-device-root",
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(h._7, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, u.createElement(S, null), u.createElement(v.a, null))) : (this.props.login(), u.createElement(h._7, null, u.createElement(m.a, {
                        message: Object(d.d)("You must be logged in to view this page", "ActivateDevicePage")
                    }), " ", u.createElement(v.a, null)))
                }, t
            }(u.Component);
        var O = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(c.b)({
                login: function() {
                    return Object(o.f)(r.a.ActivateDevice)
                }
            }, e)
        })(A);
        n.d(t, "ActivateDevicePage", function() {
            return O
        }), n.d(t, "ActivateDevice", function() {
            return S
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
//# sourceMappingURL=pages.activate-device-fac0f4c09023281453776884bbc2b8f6.js.map