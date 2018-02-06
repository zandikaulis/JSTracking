webpackJsonp([57], {
    "9u8h": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return o
        });
        var r = i("TToO"),
            n = i("6sO2"),
            a = i("Aj/L"),
            s = "application/json; charset=UTF-8",
            o = function() {
                function e() {}
                return e.get = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        var n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = this.constructOptions(t, i), n = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, n), [4, this._fetch(e, t)];
                                case 1:
                                    return a = r.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, n.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, n;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return i = r.sent(), e.ok ? t.body = i : t.error = i, [3, 4];
                                case 3:
                                    return n = r.sent(), t.requestError = n, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return t === s ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var i = n.n.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": n.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = s);
                    var o = Object(a.c)(i);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e
            }()
    },
    CNsG: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, n = i("TToO"),
            a = i("U7vG"),
            s = i("CIox"),
            o = i("2KeS"),
            u = i("6sO2"),
            c = i("7vx8"),
            l = i("CSlQ"),
            d = i("R0Kh"),
            m = i("9u8h"),
            f = this,
            h = u.n.logger.withCategory("verify-email"),
            p = function(e, t) {
                return n.__awaiter(f, void 0, void 0, function() {
                    var i, r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                i = "/kraken/users/" + e, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, m.a.put(i, {
                                    body: {
                                        email: t
                                    }
                                })];
                            case 2:
                                return n.sent(), [2, !0];
                            case 3:
                                return r = n.sent(), h.error(r, "Verify Email Service"), [2, !1];
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
        var v = i("Odds"),
            _ = (i("yY1M"), i("RDCx"));
        i.d(t, "DISMISSAL_DATA_STORAGE_KEY", function() {
            return E
        }), i.d(t, "DISMISS_BTN_SELECTOR", function() {
            return T
        }), i.d(t, "VERIFY_BTN_SELECTOR", function() {
            return b
        }), i.d(t, "VerifyEmailBarPresentation", function() {
            return C
        }), i.d(t, "VerifyEmailBar", function() {
            return k
        });
        var S, E = "verifyemailbar_dismissal",
            I = 18e5,
            g = 5e3,
            D = new Set(["/"]),
            T = "dimiss-btn",
            b = "verify-email-btn";
        ! function(e) {
            e[e.INITIAL = 0] = "INITIAL", e[e.CLICK_TO_VERIFY = 1] = "CLICK_TO_VERIFY", e[e.EMAIL_SENT = 2] = "EMAIL_SENT", e[e.ERROR_SENDING = 3] = "ERROR_SENDING", e[e.DISMISSED = 4] = "DISMISSED"
        }(S || (S = {}));
        var C = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.state = {
                        verifyEmailBarState: S.INITIAL
                    }, i.resetAfterDismissalTimeoutID = null, i.afterVerifyDismissTimeoutID = null, i.dismissalData = null, i.dismissBarClickHandler = function(e) {
                        e && e.stopPropagation();
                        var t = i.dismissalData ? i.dismissalData.dismissalCount : 0;
                        i.dismissalData = {
                            dismissalCount: t + 1,
                            dismissalDateTimeMs: Date.now()
                        }, u.k.set(E, i.dismissalData), i.setState({
                            verifyEmailBarState: S.DISMISSED
                        }), i.resetAfterDismissalTimeoutID = setTimeout(function() {
                            return n.__awaiter(i, void 0, void 0, function() {
                                return n.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch()];
                                        case 1:
                                            return e.sent(), this.setState({
                                                verifyEmailBarState: S.INITIAL
                                            }), this.resetAfterDismissalTimeoutID = null, [2]
                                    }
                                })
                            })
                        }, 1.01 * I), u.n.tracking.track(y.SpadeEventType.VerifyEmailBar, {
                            action: r.Dismiss
                        })
                    }, i.onClickToVerify = function(e) {
                        return n.__awaiter(i, void 0, void 0, function() {
                            var t, i = this;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e && e.currentTarget && (t = e.currentTarget) && t.blur(), [4, p(this.props.data.currentUser.id, this.props.data.currentUser.email)];
                                    case 1:
                                        return n.sent() ? this.setState({
                                            verifyEmailBarState: S.EMAIL_SENT
                                        }) : this.setState({
                                            verifyEmailBarState: S.ERROR_SENDING
                                        }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                            i.setState({
                                                verifyEmailBarState: S.DISMISSED
                                            }), i.afterVerifyDismissTimeoutID = null
                                        }, g), u.n.tracking.track(y.SpadeEventType.VerifyEmailBar, {
                                            action: r.Click
                                        }), [2]
                                }
                            })
                        })
                    }, i.dismissalData = u.k.getOptional(E), i
                }
                return n.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    null !== this.resetAfterDismissalTimeoutID && clearTimeout(this.resetAfterDismissalTimeoutID), null !== this.afterVerifyDismissTimeoutID && clearTimeout(this.afterVerifyDismissTimeoutID)
                }, t.prototype.componentDidMount = function() {
                    this.maybeChangeBarState()
                }, t.prototype.componentDidUpdate = function() {
                    this.maybeChangeBarState(), this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.maybeChangeBarState = function() {
                    this.state.verifyEmailBarState !== S.EMAIL_SENT && this.state.verifyEmailBarState !== S.ERROR_SENDING && (this.isVisible() && this.shouldHide() ? this.setState({
                        verifyEmailBarState: S.INITIAL
                    }) : this.state.verifyEmailBarState !== S.INITIAL || this.shouldHide() || this.setState({
                        verifyEmailBarState: S.CLICK_TO_VERIFY
                    }))
                }, t.prototype.render = function() {
                    switch (this.state.verifyEmailBarState) {
                        case S.CLICK_TO_VERIFY:
                            return this.renderClickToVerify();
                        case S.EMAIL_SENT:
                            return this.renderEmailSent();
                        case S.ERROR_SENDING:
                            return this.renderErrorSending();
                        default:
                            return null
                    }
                }, t.prototype.isVisible = function() {
                    return this.state.verifyEmailBarState !== S.INITIAL && this.state.verifyEmailBarState !== S.DISMISSED
                }, t.prototype.renderClickToVerify = function() {
                    return a.createElement(v.W, {
                        fullWidth: !0,
                        position: v._5.Relative
                    }, a.createElement(v._20, {
                        className: "verify-email-banner",
                        display: v.I.Flex,
                        justifyContent: v.V.Center,
                        alignItems: v.c.Center
                    }, a.createElement(v.R, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement("button", {
                        onClick: this.onClickToVerify,
                        "data-test-selector": b
                    }, a.createElement(v._24, {
                        color: v.F.Alt,
                        fontSize: v.M.Size5
                    }, Object(u.d)("Click here to verify your email", "VerifyEmail")))), a.createElement(v._20, {
                        className: "verify-email-banner__dismiss",
                        position: v._5.Absolute,
                        attachRight: !0,
                        margin: {
                            right: 2
                        }
                    }, a.createElement(v.u, {
                        type: v.z.Text,
                        onClick: this.dismissBarClickHandler,
                        "data-test-selector": T
                    }, Object(u.d)("Not Now", "VerifyEmail")))))
                }, t.prototype.renderEmailSent = function() {
                    return a.createElement(v._20, {
                        className: "verify-email-banner verify-email-banner--success",
                        display: v.I.Flex,
                        justifyContent: v.V.Center,
                        alignItems: v.c.Center
                    }, a.createElement(v.W, {
                        className: "verify-email-banner__body"
                    }, a.createElement(v._24, {
                        fontSize: v.M.Size5
                    }, Object(u.d)("Verification email sent to {email}", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.renderErrorSending = function() {
                    return a.createElement(v._20, {
                        className: "verify-email-banner verify-email-banner--error",
                        display: v.I.Flex,
                        justifyContent: v.V.Center,
                        alignItems: v.c.Center
                    }, a.createElement(v.W, {
                        className: "verify-email-banner__body"
                    }, a.createElement(v._24, {
                        fontSize: v.M.Size5
                    }, Object(u.d)("Unable to send an email to {email}. Please try again later.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.shouldHide = function() {
                    return !(this.isDataLoaded() && !this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell())
                }, t.prototype.isShowingPrimeUpsell = function() {
                    if (D.has(this.props.location.pathname)) {
                        var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                            t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                        return Object(d.h)(e, t)
                    }
                    return !1
                }, t.prototype.shouldRespectDismissal = function() {
                    var e = this.dismissalData;
                    return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + I)
                }, t.prototype.isDataLoaded = function() {
                    return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                }, t
            }(a.Component),
            k = Object(o.d)(Object(l.d)("VerifyEmail"), Object(c.a)(_), s.e)(C)
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
//# sourceMappingURL=features.verify-email.components.verify-email-bar.component-f39d8f6f1ab172682ce92b6b1b5a7853.js.map