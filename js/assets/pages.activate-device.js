(window.webpackJsonp = window.webpackJsonp || []).push([
    [86], {
        "1vHQ": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                a = n("fvjX"),
                c = n("1/iK"),
                r = n("y5D0"),
                o = n("kRBY"),
                s = n("mrSG"),
                l = n("q1tI"),
                d = n("/7QA"),
                u = n("ZDlU"),
                v = n("NvVO"),
                p = n("2xye"),
                m = n("wIs1"),
                g = n("2Ygb"),
                h = n("GnwI"),
                f = n("cr+I");
            var k, b, S, E = n("jCRX"),
                _ = n.n(E),
                A = n("yR8l"),
                y = n("geRD"),
                w = n("Ue10"),
                O = n("wHfN");
            n("Bt4M");
            ! function(e) {
                e.ActivateButton = "activate-button", e.ActivationSuccessMessage = "activate-success", e.ActivationFailureMessage = "activate-failure"
            }(k || (k = {})),
            function(e) {
                e[e.Error = 1] = "Error", e[e.Initial = 2] = "Initial", e[e.Success = 3] = "Success", e[e.Processing = 4] = "Processing"
            }(b || (b = {})),
            function(e) {
                e.CodeIncorrect = "CODE_INCORRECT", e.CodeExpired = "CODE_EXPIRED", e.AlreadyLinked = "ALREADY_LINKED"
            }(S || (S = {}));
            var D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activateStatus: b.Initial,
                            code: ""
                        }, t.onChange = function(e) {
                            t.setState({
                                code: e.currentTarget.value
                            })
                        }, t.onActivateButtonClick = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return s.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                activateStatus: b.Processing
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), e = this.state.code, [4, this.props.linkSSO(Object(y.a)({
                                                code: e
                                            }))];
                                        case 2:
                                            return (t = n.sent()) && t.data && t.data.linkSSO && t.data.linkSSO.error ? this.setState({
                                                activateStatus: b.Error,
                                                errorCode: t.data.linkSSO.error.code
                                            }) : this.setState({
                                                activateStatus: b.Success
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                activateStatus: b.Error,
                                                errorCode: S.CodeIncorrect
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? this.renderActivateForm() : (this.props.login(), l.createElement(u.a, {
                            message: Object(d.d)("You must be logged in to view this page", "ActivateDevice")
                        }))
                    }, t.prototype.renderActivateForm = function() {
                        return l.createElement(w.Ya, {
                            className: "activate-device-wrapper",
                            alignSelf: w.g.Center,
                            textAlign: w.Sb.Center,
                            fullHeight: !0,
                            fullWidth: !0
                        }, l.createElement(w.Fb, {
                            className: "activate-device-wrapper__background-container",
                            background: w.r.Base,
                            display: w.X.InlineBlock,
                            position: w.kb.Relative,
                            textAlign: w.Sb.Center
                        }, l.createElement(w.Ja, null, l.createElement(w.P, {
                            cols: 6
                        }, l.createElement(w.Fb, {
                            padding: 2
                        }, l.createElement(w.tb, {
                            asset: w.ub.LogoTwitch,
                            type: w.vb.Brand,
                            height: 50,
                            width: 129
                        }))), l.createElement(w.P, {
                            cols: 6
                        }, l.createElement(w.Fb, {
                            padding: 3
                        }, l.createElement(w.z, {
                            type: w.F.Default,
                            linkTo: "/"
                        }, Object(d.d)("Return To Twitch", "ActivateDevice"))))), this.renderInputForm(), this.renderSuccessPage(), l.createElement(w.Ja, null, l.createElement(w.P, {
                            cols: 6
                        }, l.createElement(w.Fb, {
                            padding: 2
                        }, l.createElement(w.W, {
                            color: w.O.Alt2
                        }, "© ", (new Date).getFullYear(), " Twitch Interactive, Inc."))), l.createElement(w.P, {
                            cols: 6
                        }, l.createElement(w.Fb, {
                            padding: 2
                        }, l.createElement(w.U, {
                            to: "https://www.twitch.tv/p/legal/terms-of-service/"
                        }, Object(d.d)("Terms of Service", "ActivateDevice")))))))
                    }, t.prototype.renderSuccessPage = function() {
                        if (this.state.activateStatus === b.Success) {
                            var e = Object(d.d)("You can <x:twitter>connect your Twitter account</x:twitter> to automatically send a tweet when you begin broadcasting. You can see which devices and apps you've connected in the <x:connection>Connections</x:connection> section of your settings.", {
                                "x:connection": function(e) {
                                    return l.createElement("a", {
                                        href: "../settings/connections"
                                    }, e)
                                },
                                "x:twitter": function(e) {
                                    return l.createElement("a", {
                                        href: "../settings/connections"
                                    }, e)
                                }
                            }, "ActivateDevice");
                            return l.createElement(w.Ya, {
                                className: "activate-device-wrapper__success",
                                alignItems: w.f.Center,
                                position: w.kb.Relative,
                                textAlign: w.Sb.Center,
                                "data-test-selector": k.ActivationSuccessMessage
                            }, l.createElement(w.Ya, {
                                className: "activate-device-wrapper__check_mark",
                                padding: 2
                            }, l.createElement("img", {
                                src: _.a
                            })), l.createElement(w.Ya, {
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    bottom: 1
                                }
                            }, l.createElement(w.W, {
                                type: w.Wb.H2
                            }, Object(d.d)("You've Done It!", "ActivateDevice"))), l.createElement(w.Ya, {
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    bottom: 2
                                }
                            }, l.createElement(w.W, {
                                color: w.O.Alt2
                            }, Object(d.d)("You've linked your Twitch Account!", "ActivateDevice"))), l.createElement(w.Ya, {
                                display: w.X.Block,
                                margin: 1,
                                className: "activate-device-success-wrapper__divider"
                            }), l.createElement(w.Ya, {
                                margin: {
                                    x: 1
                                },
                                padding: 2
                            }, l.createElement(w.W, {
                                color: w.O.Alt2
                            }, e)))
                        }
                    }, t.prototype.renderInputForm = function() {
                        var e = this.state.activateStatus === b.Processing;
                        if (this.state.activateStatus !== b.Success) return l.createElement(w.Ya, {
                            className: "activate-device-wrapper__form",
                            alignItems: w.f.Center,
                            position: w.kb.Relative,
                            textAlign: w.Sb.Center
                        }, l.createElement(w.Ya, {
                            padding: {
                                top: 2
                            }
                        }, l.createElement(w.W, {
                            type: w.Wb.H2
                        }, Object(d.d)("Activate Your Device", "ActivateDevice"))), l.createElement(w.Ya, {
                            padding: 1
                        }, l.createElement(w.W, {
                            color: w.O.Alt2
                        }, Object(d.d)("Enter the code given to you by your device to link it to your Twitch account.", "ActivateDevice"))), this.state.activateStatus === b.Error && this.renderErrorBar(), l.createElement(w.Ya, {
                            padding: 1,
                            flexGrow: 1,
                            className: "activate-device-wrapper__input",
                            alignItems: w.f.Center,
                            position: w.kb.Relative,
                            textAlign: w.Sb.Center
                        }, l.createElement(w.Sa, {
                            type: w.Ua.Text,
                            onChange: this.onChange,
                            value: this.state.code,
                            placeholder: Object(d.d)("Enter Code", "ActivateDevice")
                        })), l.createElement(w.Ya, {
                            padding: {
                                bottom: 2,
                                top: 1
                            }
                        }, l.createElement(w.z, {
                            onClick: this.onActivateButtonClick,
                            type: w.F.Default,
                            "data-test-selector": k.ActivateButton,
                            disabled: e
                        }, Object(d.d)("Activate", "ActivateDevice"))))
                    }, t.prototype.renderErrorBar = function() {
                        var e;
                        switch (this.state.errorCode) {
                            case S.CodeExpired:
                                e = Object(d.d)("Code Expired!", "ActivateDevice");
                                break;
                            case S.AlreadyLinked:
                                e = Object(d.d)("Already Linked!", "ActivateDevice");
                                break;
                            default:
                                e = Object(d.d)("Incorrect code!", "ActivateDevice")
                        }
                        return l.createElement(w.Fb, {
                            className: "activate-device-form__error",
                            textAlign: w.Sb.Center,
                            fontSize: w.Ca.Size4
                        }, l.createElement(w.hb, {
                            label: e,
                            type: w.ib.Alert,
                            "data-test-selector": k.ActivationFailureMessage
                        }))
                    }, t
                }(l.Component),
                C = Object(A.a)(O, {
                    name: "linkSSO"
                })(D);
            var I = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(o.f)(e)
                    }
                }, function(e) {
                    return Object(a.bindActionCreators)({
                        login: function() {
                            return r.e(c.a.ActivateDevice)
                        }
                    }, e)
                })(C),
                x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? l.createElement(w.Ya, {
                            className: "activate-device-root",
                            fullHeight: !0,
                            fullWidth: !0
                        }, l.createElement(w.Ya, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, l.createElement(I, null))) : (this.props.login(), l.createElement(w.Ya, null, l.createElement(u.a, {
                            message: Object(d.d)("You must be logged in to view this page", "ActivateDevicePage")
                        })))
                    }, t
                }(l.Component),
                j = function(e, t) {
                    return function(n) {
                        var i = function(e) {
                            function i(n) {
                                var i = e.call(this, n) || this;
                                return i.logger = d.k.withCategory("withPageTracking"), i.tracked = !1, i.historyUnlistener = null, i.referenceTracking = {}, i.onHistoryChange = function(e, t) {
                                    "REPLACE" !== t && (i.tracked = !1, i.referenceTracking = {})
                                }, i.trackPageview = function() {
                                    if (!(i.tracked || t.skipPageviewTracking && t.skipPageviewTracking(i.props))) {
                                        i.tracked = !0;
                                        var e = {};
                                        if ("function" == typeof t.pageviewProperties ? e = t.pageviewProperties(i.props) : t.pageviewProperties && (e = s.__assign({}, t.pageviewProperties)), i.props.location.state) {
                                            var n = i.props.location.state,
                                                a = n.medium,
                                                c = n.content,
                                                r = n.content_index,
                                                o = n.email_id;
                                            e = s.__assign({}, e, {
                                                medium: a,
                                                content: c,
                                                content_index: r,
                                                email_id: o
                                            })
                                        }
                                        d.p.tracking.trackPageview(s.__assign({}, i.referenceTracking, e, {
                                            location: t.location
                                        }))
                                    }
                                }, n.rootLatencyTracker.setLocation(t.location), i
                            }
                            return s.__extends(i, e), i.prototype.componentDidMount = function() {
                                var e = this.props.history,
                                    t = e.location,
                                    n = t.pathname,
                                    i = t.hash,
                                    a = t.search,
                                    c = function(e) {
                                        var t = "" !== e ? f.parse(e) : {},
                                            n = {
                                                content: t.tt_content,
                                                content_index: t.tt_content_index,
                                                medium: t.tt_medium,
                                                email_id: t.tt_email_id
                                            };
                                        delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id;
                                        var i = f.stringify(t);
                                        return {
                                            referenceTracking: n,
                                            search: i.length > 0 ? "?" + i : ""
                                        }
                                    }(a);
                                c.search !== a && (this.logger.debug("Replacing history with stripped tt params"), e.replace({
                                    pathname: n,
                                    hash: i,
                                    search: c.search
                                })), this.referenceTracking = c.referenceTracking, this.historyUnlistener = e.listen(this.onHistoryChange), this.trackPageview()
                            }, i.prototype.componentDidUpdate = function() {
                                this.trackPageview()
                            }, i.prototype.componentWillUnmount = function() {
                                this.historyUnlistener && this.historyUnlistener()
                            }, i.prototype.render = function() {
                                return l.createElement(n, s.__assign({}, this.props))
                            }, i.displayName = Object(g.a)(i.name, n), i
                        }(l.Component);
                        return Object(a.compose)(m.a, Object(h.b)(e, {
                            destination: t.destination,
                            autoReportInteractive: t.autoReportInteractive
                        }))(i)
                    }
                }("ActivateDevicePage", {
                    autoReportInteractive: !0,
                    location: p.PageviewLocation.ActivateDevice,
                    destination: v.a.ActivateDevice
                })(x);
            var N = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(r.e)(c.a.ActivateDevice)
                    }
                }, e)
            })(j);
            n.d(t, "ActivateDevicePage", function() {
                return N
            }), n.d(t, "ActivateDevice", function() {
                return I
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