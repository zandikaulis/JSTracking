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
    CNsG: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i("TToO"),
            n = i("U7vG"),
            a = i("CIox"),
            s = i("2KeS"),
            o = i("6sO2"),
            l = i("7vx8"),
            u = i("CSlQ"),
            c = i("R0Kh"),
            d = i("9u8h"),
            m = this,
            f = o.n.logger.withCategory("verify-email"),
            h = function(e, t) {
                return r.__awaiter(m, void 0, void 0, function() {
                    var i, n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i = "/kraken/users/" + e, r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, d.a.put(i, {
                                    body: {
                                        email: t
                                    }
                                })];
                            case 2:
                                return r.sent(), [2, !0];
                            case 3:
                                return n = r.sent(), f.error(n, "Verify Email Service"), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            p = i("Odds"),
            y = (i("yY1M"), i("RDCx"));
        i.d(t, "DISMISSAL_DATA_STORAGE_KEY", function() {
            return _
        }), i.d(t, "DISMISS_BTN_SELECTOR", function() {
            return g
        }), i.d(t, "VERIFY_BTN_SELECTOR", function() {
            return D
        }), i.d(t, "VerifyEmailBarPresentation", function() {
            return T
        }), i.d(t, "VerifyEmailBar", function() {
            return b
        });
        var v, _ = "verifyemailbar_dismissal",
            S = 36e5,
            E = 5e3,
            I = new Set(["/"]),
            g = "dimiss-btn",
            D = "verify-email-btn";
        ! function(e) {
            e[e.INITIAL = 0] = "INITIAL", e[e.CLICK_TO_VERIFY = 1] = "CLICK_TO_VERIFY", e[e.EMAIL_SENT = 2] = "EMAIL_SENT", e[e.ERROR_SENDING = 3] = "ERROR_SENDING", e[e.DISMISSED = 4] = "DISMISSED"
        }(v || (v = {}));
        var T = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.state = {
                        verifyEmailBarState: v.INITIAL
                    }, i.resetAfterDismissalTimeoutID = null, i.afterVerifyDismissTimeoutID = null, i.dismissalData = null, i.dismissBarClickHandler = function(e) {
                        e && e.stopPropagation();
                        var t = i.dismissalData ? i.dismissalData.dismissalCount : 0;
                        i.dismissalData = {
                            dismissalCount: t + 1,
                            dismissalDateTimeMs: Date.now()
                        }, o.k.set(_, i.dismissalData), i.setState({
                            verifyEmailBarState: v.DISMISSED
                        }), i.resetAfterDismissalTimeoutID = setTimeout(function() {
                            return r.__awaiter(i, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
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
                        }, 1.01 * S)
                    }, i.onClickToVerify = function(e) {
                        return r.__awaiter(i, void 0, void 0, function() {
                            var t, i = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e && e.currentTarget && (t = e.currentTarget) && t.blur(), [4, h(this.props.data.currentUser.id, this.props.data.currentUser.email)];
                                    case 1:
                                        return r.sent() ? this.setState({
                                            verifyEmailBarState: v.EMAIL_SENT
                                        }) : this.setState({
                                            verifyEmailBarState: v.ERROR_SENDING
                                        }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                            i.setState({
                                                verifyEmailBarState: v.DISMISSED
                                            }), i.afterVerifyDismissTimeoutID = null
                                        }, E), [2]
                                }
                            })
                        })
                    }, i.dismissalData = o.k.getOptional(_), i
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
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
                    return n.createElement(p.U, {
                        fullWidth: !0,
                        position: p._3.Relative
                    }, n.createElement(p._18, {
                        className: "verify-email-banner",
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        alignItems: p.c.Center
                    }, n.createElement(p.P, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, n.createElement("button", {
                        onClick: this.onClickToVerify,
                        "data-test-selector": D
                    }, n.createElement(p._22, {
                        color: p.F.Alt,
                        fontSize: p.L.Size5
                    }, Object(o.d)("Click here to verify your email", "VerifyEmail")))), n.createElement(p._18, {
                        className: "verify-email-banner__dismiss",
                        position: p._3.Absolute,
                        attachRight: !0,
                        margin: {
                            right: 2
                        }
                    }, n.createElement(p.u, {
                        type: p.z.Text,
                        onClick: this.dismissBarClickHandler,
                        "data-test-selector": g
                    }, Object(o.d)("Not Now", "VerifyEmail")))))
                }, t.prototype.renderEmailSent = function() {
                    return n.createElement(p._18, {
                        className: "verify-email-banner verify-email-banner--success",
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        alignItems: p.c.Center
                    }, n.createElement(p.U, {
                        className: "verify-email-banner__body"
                    }, n.createElement(p._22, {
                        fontSize: p.L.Size5
                    }, Object(o.d)("Verification email sent to {email}", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.renderErrorSending = function() {
                    return n.createElement(p._18, {
                        className: "verify-email-banner verify-email-banner--error",
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        alignItems: p.c.Center
                    }, n.createElement(p.U, {
                        className: "verify-email-banner__body"
                    }, n.createElement(p._22, {
                        fontSize: p.L.Size5
                    }, Object(o.d)("Unable to send an email to {email}. Please try again later.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.shouldHide = function() {
                    return !(this.isDataLoaded() && !this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell())
                }, t.prototype.isShowingPrimeUpsell = function() {
                    if (I.has(this.props.location.pathname)) {
                        var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                            t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                        return Object(c.h)(e, t)
                    }
                    return !1
                }, t.prototype.shouldRespectDismissal = function() {
                    var e = this.dismissalData;
                    return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + S)
                }, t.prototype.isDataLoaded = function() {
                    return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                }, t
            }(n.Component),
            b = Object(s.compose)(Object(u.c)("VerifyEmail"), Object(l.a)(y), a.e)(T)
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
    yY1M: function(e, t) {}
});
//# sourceMappingURL=features.verify-email.components.verify-email-bar.component-fbb3d53d13ea787714026e335ad90f51.js.map