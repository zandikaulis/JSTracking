webpackJsonp([54], {
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "email"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
    bKmq: function(e, t, i) {
        "use strict";

        function r(e) {
            return Object(o.bindActionCreators)({
                toggleTopNavNotificationBar: l.v
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, a = i("RH2O"),
            s = i("CIox"),
            o = i("2KeS"),
            l = i("7enT"),
            u = i("TToO"),
            c = i("U7vG"),
            d = i("6sO2"),
            m = i("7vx8"),
            f = i("CSlQ"),
            h = i("R0Kh"),
            p = i("9u8h"),
            v = d.n.logger.withCategory("verify-email"),
            y = i("Odds"),
            _ = (i("yY1M"), i("RDCx")),
            S = "verifyemailbar_dismissal",
            E = 36e5,
            I = 7e3,
            g = new Set(["/"]);
        ! function(e) {
            e[e.INITIAL = 0] = "INITIAL", e[e.CLICK_TO_VERIFY = 1] = "CLICK_TO_VERIFY", e[e.EMAIL_SENT = 2] = "EMAIL_SENT", e[e.ERROR_SENDING = 3] = "ERROR_SENDING", e[e.DISMISSED = 4] = "DISMISSED"
        }(n || (n = {}));
        var T = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.state = {
                        verifyEmailBarState: n.INITIAL
                    }, i.resetAfterDismissalTimeoutID = null, i.afterVerifyDismissTimeoutID = null, i.topNavNotificationBarEnabled = !1, i.dismissalData = null, i.dismissBarClickHandler = function(e) {
                        e && e.stopPropagation();
                        var t = i.dismissalData ? i.dismissalData.dismissalCount : 0;
                        i.dismissalData = {
                            dismissalCount: t + 1,
                            dismissalDateTimeMs: Date.now()
                        }, d.k.set(S, i.dismissalData), i.setState({
                            verifyEmailBarState: n.DISMISSED
                        }), i.resetAfterDismissalTimeoutID = setTimeout(function() {
                            return u.__awaiter(i, void 0, void 0, function() {
                                return u.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch()];
                                        case 1:
                                            return e.sent(), this.setState({
                                                verifyEmailBarState: n.INITIAL
                                            }), this.resetAfterDismissalTimeoutID = null, [2]
                                    }
                                })
                            })
                        }, 1.01 * E)
                    }, i.onClickToVerify = function(e) {
                        return u.__awaiter(i, void 0, void 0, function() {
                            var t, i = this;
                            return u.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e && e.currentTarget && (t = e.currentTarget) && t.blur(), [4, function(e, t) {
                                            return u.__awaiter(this, void 0, void 0, function() {
                                                var i, r;
                                                return u.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            i = "/kraken/users/" + e, n.label = 1;
                                                        case 1:
                                                            return n.trys.push([1, 3, , 4]), [4, p.a.put(i, {
                                                                body: {
                                                                    email: t
                                                                }
                                                            })];
                                                        case 2:
                                                            return n.sent(), [2, !0];
                                                        case 3:
                                                            return r = n.sent(), v.error(r, "Verify Email Service"), [2, !1];
                                                        case 4:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(this.props.data.currentUser.id, this.props.data.currentUser.email)];
                                    case 1:
                                        return r.sent() ? this.setState({
                                            verifyEmailBarState: n.EMAIL_SENT
                                        }) : this.setState({
                                            verifyEmailBarState: n.ERROR_SENDING
                                        }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                            i.setState({
                                                verifyEmailBarState: n.DISMISSED
                                            }), i.afterVerifyDismissTimeoutID = null
                                        }, I), [2]
                                }
                            })
                        })
                    }, i.dismissalData = d.k.getOptional(S), i
                }
                return u.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    null !== this.resetAfterDismissalTimeoutID && clearTimeout(this.resetAfterDismissalTimeoutID), null !== this.afterVerifyDismissTimeoutID && clearTimeout(this.afterVerifyDismissTimeoutID)
                }, t.prototype.componentDidMount = function() {
                    this.maybeChangeBarState()
                }, t.prototype.componentDidUpdate = function() {
                    this.maybeChangeBarState(), this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.maybeChangeBarState = function() {
                    this.state.verifyEmailBarState !== n.EMAIL_SENT && this.state.verifyEmailBarState !== n.ERROR_SENDING && (this.maybeToggleTopNavNotificationBar(), this.isVisible() && this.shouldHide() ? this.setState({
                        verifyEmailBarState: n.INITIAL
                    }) : this.state.verifyEmailBarState !== n.INITIAL || this.shouldHide() || this.setState({
                        verifyEmailBarState: n.CLICK_TO_VERIFY
                    }))
                }, t.prototype.render = function() {
                    switch (this.state.verifyEmailBarState) {
                        case n.CLICK_TO_VERIFY:
                            return this.renderClickToVerify();
                        case n.EMAIL_SENT:
                            return this.renderEmailSent();
                        case n.ERROR_SENDING:
                            return this.renderErrorSending();
                        default:
                            return null
                    }
                }, t.prototype.isVisible = function() {
                    return this.state.verifyEmailBarState !== n.INITIAL && this.state.verifyEmailBarState !== n.DISMISSED
                }, t.prototype.renderClickToVerify = function() {
                    return c.createElement(y.U, {
                        fullWidth: !0,
                        position: y._3.Relative
                    }, c.createElement(y._18, {
                        className: "verify-email-banner",
                        display: y.H.Flex,
                        justifyContent: y.T.Center,
                        alignItems: y.c.Center
                    }, c.createElement(y.P, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, c.createElement("button", {
                        onClick: this.onClickToVerify,
                        "data-test-selector": "verify-email-btn"
                    }, c.createElement(y._22, {
                        color: y.F.Alt,
                        fontSize: y.L.Size5
                    }, Object(d.d)("Click here to verify your email", "VerifyEmail")))), c.createElement(y._18, {
                        className: "verify-email-banner__dismiss",
                        position: y._3.Absolute,
                        attachRight: !0,
                        margin: {
                            right: 2
                        }
                    }, c.createElement(y.u, {
                        type: y.z.Text,
                        onClick: this.dismissBarClickHandler,
                        "data-test-selector": "dimiss-btn"
                    }, Object(d.d)("Not Now", "VerifyEmail")))))
                }, t.prototype.renderEmailSent = function() {
                    return c.createElement(y._18, {
                        className: "verify-email-banner verify-email-banner--success",
                        display: y.H.Flex,
                        justifyContent: y.T.Center,
                        alignItems: y.c.Center
                    }, c.createElement(y.U, {
                        className: "verify-email-banner__body"
                    }, c.createElement(y._22, {
                        fontSize: y.L.Size5
                    }, Object(d.d)("Verification email sent to {email}", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.renderErrorSending = function() {
                    return c.createElement(y._18, {
                        className: "verify-email-banner verify-email-banner--error",
                        display: y.H.Flex,
                        justifyContent: y.T.Center,
                        alignItems: y.c.Center
                    }, c.createElement(y.U, {
                        className: "verify-email-banner__body"
                    }, c.createElement(y._22, {
                        fontSize: y.L.Size5
                    }, Object(d.d)("Unable to send an email to {email}. Please try again later.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.maybeToggleTopNavNotificationBar = function() {
                    var e = this.isVisible();
                    e !== this.topNavNotificationBarEnabled && (this.props.toggleTopNavNotificationBar(e), this.topNavNotificationBarEnabled = e)
                }, t.prototype.shouldHide = function() {
                    return !(this.isDataLoaded() && !this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell())
                }, t.prototype.isShowingPrimeUpsell = function() {
                    if (g.has(this.props.location.pathname)) {
                        var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                            t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                        return Object(h.h)(e, t)
                    }
                    return !1
                }, t.prototype.shouldRespectDismissal = function() {
                    var e = this.dismissalData;
                    return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + E)
                }, t.prototype.isDataLoaded = function() {
                    return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                }, t
            }(c.Component),
            b = Object(o.compose)(Object(f.c)("VerifyEmail"), Object(m.a)(_))(T);
        t.mapDispatchToProps = r, i.d(t, "VerifyEmailBar", function() {
            return D
        });
        var D = Object(s.e)(Object(a.a)(null, r)(b))
    },
    yY1M: function(e, t) {}
});
//# sourceMappingURL=features.verify-email.components.verify-email-bar.container-73eee8b1faa9116413758ed1715a15f1.js.map