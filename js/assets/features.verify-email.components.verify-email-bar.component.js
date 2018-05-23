webpackJsonp([73], {
    CNsG: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = i("TToO"),
            n = i("GiK3"),
            s = i("CIox"),
            o = i("2KeS"),
            l = i("6sO2"),
            c = i("7vx8"),
            m = i("CSlQ"),
            u = i("Kckk"),
            d = i("9u8h"),
            f = this,
            p = l.o.logger.withCategory("verify-email"),
            h = function(e, t) {
                return a.__awaiter(f, void 0, void 0, function() {
                    var i, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                i = "/kraken/users/" + e, a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, d.a.putOrThrow(i, {
                                    body: {
                                        email: t
                                    }
                                })];
                            case 2:
                                return a.sent(), [2, !0];
                            case 3:
                                return r = a.sent(), p.error(r, "Verify Email Service"), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            y = i("vH/s");
        ! function(e) {
            e.Click = "click", e.Dismiss = "dismiss"
        }(r || (r = {}));
        var E = i("Odds"),
            S = (i("yY1M"), i("RDCx"));
        i.d(t, "DISMISSAL_DATA_STORAGE_KEY", function() {
            return I
        }), i.d(t, "DISMISS_BTN_SELECTOR", function() {
            return C
        }), i.d(t, "VERIFY_BTN_SELECTOR", function() {
            return T
        }), i.d(t, "VerifyEmailBarPresentation", function() {
            return N
        }), i.d(t, "VerifyEmailBar", function() {
            return k
        });
        var v, I = "verifyemailbar_dismissal",
            _ = 18e5,
            g = 5e3,
            D = new Set(["/"]),
            C = "dimiss-btn",
            T = "verify-email-btn";
        ! function(e) {
            e[e.INITIAL = 0] = "INITIAL", e[e.CLICK_TO_VERIFY = 1] = "CLICK_TO_VERIFY", e[e.EMAIL_SENT = 2] = "EMAIL_SENT", e[e.ERROR_SENDING = 3] = "ERROR_SENDING", e[e.DISMISSED = 4] = "DISMISSED"
        }(v || (v = {}));
        var N = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.state = {
                        isError: !1,
                        verifyEmailBarState: v.INITIAL
                    }, i.resetAfterDismissalTimeoutID = null, i.afterVerifyDismissTimeoutID = null, i.dismissalData = null, i.logger = l.o.logger.withCategory("verify-email-bar"), i.dismissBarClickHandler = function(e) {
                        e && e.stopPropagation();
                        var t = i.dismissalData ? i.dismissalData.dismissalCount : 0;
                        i.dismissalData = {
                            dismissalCount: t + 1,
                            dismissalDateTimeMs: Date.now()
                        }, l.l.set(I, i.dismissalData), i.setState({
                            verifyEmailBarState: v.DISMISSED
                        }), i.resetAfterDismissalTimeoutID = setTimeout(function() {
                            return a.__awaiter(i, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch()];
                                        case 1:
                                            return e.sent(), this.setState({
                                                verifyEmailBarState: v.INITIAL
                                            }), this.resetAfterDismissalTimeoutID = null, [2]
                                    }
                                })
                            })
                        }, 1.01 * _), l.o.tracking.track(y.SpadeEventType.VerifyEmailBar, {
                            action: r.Dismiss
                        })
                    }, i.onClickToVerify = function(e) {
                        return a.__awaiter(i, void 0, void 0, function() {
                            var t, i = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e && e.currentTarget && (t = e.currentTarget) && t.blur(), [4, h(this.props.data.currentUser.id, this.props.data.currentUser.email)];
                                    case 1:
                                        return a.sent() ? this.setState({
                                            verifyEmailBarState: v.EMAIL_SENT
                                        }) : this.setState({
                                            verifyEmailBarState: v.ERROR_SENDING
                                        }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                            i.setState({
                                                verifyEmailBarState: v.DISMISSED
                                            }), i.afterVerifyDismissTimeoutID = null
                                        }, g), l.o.tracking.track(y.SpadeEventType.VerifyEmailBar, {
                                            action: r.Click
                                        }), [2]
                                }
                            })
                        })
                    }, i.dismissalData = l.l.getOptional(I), i
                }
                return a.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                    var i = this;
                    this.setState({
                        isError: !0
                    }, function() {
                        i.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                            info: t
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    null !== this.resetAfterDismissalTimeoutID && clearTimeout(this.resetAfterDismissalTimeoutID), null !== this.afterVerifyDismissTimeoutID && clearTimeout(this.afterVerifyDismissTimeoutID)
                }, t.prototype.componentDidMount = function() {
                    this.maybeChangeBarState()
                }, t.prototype.componentDidUpdate = function() {
                    this.maybeChangeBarState(), this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.maybeChangeBarState = function() {
                    this.state.verifyEmailBarState !== v.EMAIL_SENT && this.state.verifyEmailBarState !== v.ERROR_SENDING && (this.isVisible() && this.shouldHide() ? this.setState({
                        verifyEmailBarState: v.INITIAL
                    }) : this.state.verifyEmailBarState !== v.INITIAL || this.shouldHide() || this.setState({
                        verifyEmailBarState: v.CLICK_TO_VERIFY
                    }))
                }, t.prototype.render = function() {
                    if (this.state.isError) return null;
                    switch (this.state.verifyEmailBarState) {
                        case v.CLICK_TO_VERIFY:
                            return this.renderClickToVerify();
                        case v.EMAIL_SENT:
                            return this.renderEmailSent();
                        case v.ERROR_SENDING:
                            return this.renderErrorSending();
                        default:
                            return null
                    }
                }, t.prototype.isVisible = function() {
                    return this.state.verifyEmailBarState !== v.INITIAL && this.state.verifyEmailBarState !== v.DISMISSED
                }, t.prototype.renderClickToVerify = function() {
                    return n.createElement(E.e, {
                        type: E.j.SlideInTop,
                        duration: E.g.ExtraLong
                    }, n.createElement(E._8, {
                        fullWidth: !0,
                        position: E._15.Relative
                    }, n.createElement(E._35, {
                        className: "verify-email-bar",
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        justifyContent: E._7.Center,
                        elevation: 1
                    }, n.createElement(E._2, {
                        fullHeight: !0,
                        fullWidth: !0,
                        padding: 1
                    }, n.createElement("button", {
                        onClick: this.onClickToVerify,
                        "data-test-selector": T
                    }, n.createElement(E._8, {
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        justifyContent: E._7.Center
                    }, n.createElement(E._8, {
                        className: "verify-email-bar__copy",
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        margin: {
                            right: 1
                        },
                        padding: {
                            right: .5
                        }
                    }, n.createElement(E._24, {
                        asset: E._25.NotificationWarning,
                        type: E._26.Inherit
                    })), n.createElement(E._8, {
                        className: "verify-email-bar__copy"
                    }, n.createElement(E.Q, {
                        fontSize: E.V.Size5,
                        color: E.K.Inherit
                    }, Object(l.d)("Keep your account secure and verify {email}.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail")))))), n.createElement(E._35, {
                        className: "verify-email-bar__dismiss",
                        position: E._15.Absolute,
                        attachRight: !0,
                        margin: {
                            right: 2
                        },
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, n.createElement(E.O, {
                        type: E.P.Inherit,
                        onClick: this.dismissBarClickHandler,
                        "data-test-selector": C,
                        hoverColorInherit: !0,
                        hoverUnderlineNone: !0
                    }, Object(l.d)("Not Now", "VerifyEmail"))))))
                }, t.prototype.renderEmailSent = function() {
                    return n.createElement(E._35, {
                        className: "verify-email-bar verify-email-bar--success",
                        display: E.R.Flex,
                        justifyContent: E._7.Center,
                        alignItems: E.c.Center,
                        elevation: 1,
                        padding: 1
                    }, n.createElement(E._35, {
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        margin: {
                            right: 1
                        },
                        padding: {
                            right: .5
                        },
                        color: E.K.Overlay
                    }, n.createElement(E._24, {
                        asset: E._25.NavMessages,
                        type: E._26.Inherit
                    })), n.createElement(E.Q, {
                        fontSize: E.V.Size5,
                        color: E.K.Overlay
                    }, Object(l.d)("Check your inbox at {email} for your verification email.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail")))
                }, t.prototype.renderErrorSending = function() {
                    return n.createElement(E._35, {
                        className: "verify-email-bar verify-email-bar--error",
                        display: E.R.Flex,
                        justifyContent: E._7.Center,
                        alignItems: E.c.Center,
                        elevation: 1,
                        padding: 1
                    }, n.createElement(E._35, {
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        margin: {
                            right: 1
                        },
                        padding: {
                            right: .5
                        },
                        color: E.K.Overlay
                    }, n.createElement(E._24, {
                        asset: E._25.DeadGlitch,
                        type: E._26.Inherit
                    })), n.createElement(E.Q, {
                        fontSize: E.V.Size5,
                        color: E.K.Overlay
                    }, Object(l.d)("Oops...we were unable to send an email to {email}. Please try again later or update your email.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail")), n.createElement(E._35, {
                        position: E._15.Absolute,
                        attachRight: !0,
                        margin: {
                            right: 2
                        }
                    }, n.createElement(E.v, {
                        type: E.B.Hollow,
                        overlay: !0,
                        linkTo: "/settings/profile"
                    }, Object(l.d)("Update Email", "VerifyEmail"))))
                }, t.prototype.shouldHide = function() {
                    return !(this.isDataLoaded() && !this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell())
                }, t.prototype.isShowingPrimeUpsell = function() {
                    if (D.has(this.props.location.pathname)) {
                        var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                            t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                        return Object(u.n)(e, t)
                    }
                    return !1
                }, t.prototype.shouldRespectDismissal = function() {
                    var e = this.dismissalData;
                    return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + _)
                }, t.prototype.isDataLoaded = function() {
                    return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                }, t
            }(n.Component),
            k = Object(o.d)(Object(m.d)("VerifyEmail"), Object(c.a)(S), s.f)(N)
    },
    RDCx: function(e, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VerifyEmail_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "email"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 123
            }
        };
        i.loc.source = {
            body: "query VerifyEmail_CurrentUser {\ncurrentUser {\nid\nhasPrime\ndisplayName\nemail\nisEmailVerified\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    yY1M: function(e, t) {}
});
//# sourceMappingURL=features.verify-email.components.verify-email-bar.component-86201bba1f4cc3b7a49af68952469ec3.js.map