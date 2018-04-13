webpackJsonp([61], {
    "9u8h": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return a
        });
        var r = i("TToO"),
            n = i("6sO2"),
            s = i("Aj/L"),
            a = function() {
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
                }, e.getOrThrow = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
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
                }, e.putOrThrow = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
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
                }, e.postOrThrow = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
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
                }, e.deleteOrThrow = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), i)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        var n, s, a, o;
                        return r.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return t = this.constructOptions(t, i), n = t.headers ? t.headers["Content-Type"] : void 0, s = this.serialize(t.body, n), a = r.__assign({}, t, {
                                        body: s
                                    }), [4, this._fetch(e, a)];
                                case 1:
                                    return o = u.sent(), [4, this.constructLegacyAPIResponse(o)];
                                case 2:
                                    return [2, u.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, i) {
                    return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, void 0, function() {
                        var n, s;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.request(e, t, i)];
                                case 1:
                                    if ((n = a.sent()).error || n.requestError) throw new Error("Error while making request");
                                    return s = r.__assign({}, n, {
                                        body: n.body
                                    }), [2, Promise.resolve(s)];
                                case 2:
                                    throw a.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, n.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, n, s;
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
                                    return n = r.sent(), e.headers && e.headers.get && (s = e.headers.get("Content-Type")) && -1 !== s.indexOf("application/json") && (t.requestError = n), [3, 4];
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var i = n.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": n.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var a = Object(s.c)(i);
                    return a && (r.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (r["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = n.o.logger.withCategory("legacy-api"), e
            }()
    },
    CNsG: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, n = i("TToO"),
            s = i("GiK3"),
            a = i("CIox"),
            o = i("2KeS"),
            u = i("6sO2"),
            c = i("7vx8"),
            l = i("CSlQ"),
            d = i("R0Kh"),
            h = i("9u8h"),
            f = this,
            m = u.o.logger.withCategory("verify-email"),
            p = function(e, t) {
                return n.__awaiter(f, void 0, void 0, function() {
                    var i, r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                i = "/kraken/users/" + e, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, h.a.putOrThrow(i, {
                                    body: {
                                        email: t
                                    }
                                })];
                            case 2:
                                return n.sent(), [2, !0];
                            case 3:
                                return r = n.sent(), m.error(r, "Verify Email Service"), [2, !1];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            _ = i("vH/s");
        ! function(e) {
            e.Click = "click", e.Dismiss = "dismiss"
        }(r || (r = {}));
        var v = i("Odds"),
            y = (i("yY1M"), i("RDCx"));
        i.d(t, "DISMISSAL_DATA_STORAGE_KEY", function() {
            return g
        }), i.d(t, "DISMISS_BTN_SELECTOR", function() {
            return D
        }), i.d(t, "VERIFY_BTN_SELECTOR", function() {
            return b
        }), i.d(t, "VerifyEmailBarPresentation", function() {
            return w
        }), i.d(t, "VerifyEmailBar", function() {
            return C
        });
        var E, g = "verifyemailbar_dismissal",
            S = 18e5,
            T = 5e3,
            I = new Set(["/"]),
            D = "dimiss-btn",
            b = "verify-email-btn";
        ! function(e) {
            e[e.INITIAL = 0] = "INITIAL", e[e.CLICK_TO_VERIFY = 1] = "CLICK_TO_VERIFY", e[e.EMAIL_SENT = 2] = "EMAIL_SENT", e[e.ERROR_SENDING = 3] = "ERROR_SENDING", e[e.DISMISSED = 4] = "DISMISSED"
        }(E || (E = {}));
        var w = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.state = {
                        isError: !1,
                        verifyEmailBarState: E.INITIAL
                    }, i.resetAfterDismissalTimeoutID = null, i.afterVerifyDismissTimeoutID = null, i.dismissalData = null, i.logger = u.o.logger.withCategory("verify-email-bar"), i.dismissBarClickHandler = function(e) {
                        e && e.stopPropagation();
                        var t = i.dismissalData ? i.dismissalData.dismissalCount : 0;
                        i.dismissalData = {
                            dismissalCount: t + 1,
                            dismissalDateTimeMs: Date.now()
                        }, u.l.set(g, i.dismissalData), i.setState({
                            verifyEmailBarState: E.DISMISSED
                        }), i.resetAfterDismissalTimeoutID = setTimeout(function() {
                            return n.__awaiter(i, void 0, void 0, function() {
                                return n.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch()];
                                        case 1:
                                            return e.sent(), this.setState({
                                                verifyEmailBarState: E.INITIAL
                                            }), this.resetAfterDismissalTimeoutID = null, [2]
                                    }
                                })
                            })
                        }, 1.01 * S), u.o.tracking.track(_.SpadeEventType.VerifyEmailBar, {
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
                                            verifyEmailBarState: E.EMAIL_SENT
                                        }) : this.setState({
                                            verifyEmailBarState: E.ERROR_SENDING
                                        }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                            i.setState({
                                                verifyEmailBarState: E.DISMISSED
                                            }), i.afterVerifyDismissTimeoutID = null
                                        }, T), u.o.tracking.track(_.SpadeEventType.VerifyEmailBar, {
                                            action: r.Click
                                        }), [2]
                                }
                            })
                        })
                    }, i.dismissalData = u.l.getOptional(g), i
                }
                return n.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
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
                    this.state.verifyEmailBarState !== E.EMAIL_SENT && this.state.verifyEmailBarState !== E.ERROR_SENDING && (this.isVisible() && this.shouldHide() ? this.setState({
                        verifyEmailBarState: E.INITIAL
                    }) : this.state.verifyEmailBarState !== E.INITIAL || this.shouldHide() || this.setState({
                        verifyEmailBarState: E.CLICK_TO_VERIFY
                    }))
                }, t.prototype.render = function() {
                    if (this.state.isError) return null;
                    switch (this.state.verifyEmailBarState) {
                        case E.CLICK_TO_VERIFY:
                            return this.renderClickToVerify();
                        case E.EMAIL_SENT:
                            return this.renderEmailSent();
                        case E.ERROR_SENDING:
                            return this.renderErrorSending();
                        default:
                            return null
                    }
                }, t.prototype.isVisible = function() {
                    return this.state.verifyEmailBarState !== E.INITIAL && this.state.verifyEmailBarState !== E.DISMISSED
                }, t.prototype.renderClickToVerify = function() {
                    return s.createElement(v._7, {
                        fullWidth: !0,
                        position: v._14.Relative
                    }, s.createElement(v._30, {
                        className: "verify-email-banner",
                        display: v.Q.Flex,
                        justifyContent: v._6.Center,
                        alignItems: v.c.Center
                    }, s.createElement(v._1, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, s.createElement("button", {
                        onClick: this.onClickToVerify,
                        "data-test-selector": b
                    }, s.createElement(v.P, {
                        color: v.J.Alt,
                        fontSize: v.U.Size5
                    }, Object(u.d)("Click here to verify your email", "VerifyEmail")))), s.createElement(v._30, {
                        className: "verify-email-banner__dismiss",
                        position: v._14.Absolute,
                        attachRight: !0,
                        margin: {
                            right: 2
                        }
                    }, s.createElement(v.u, {
                        type: v.A.Text,
                        onClick: this.dismissBarClickHandler,
                        "data-test-selector": D
                    }, Object(u.d)("Not Now", "VerifyEmail")))))
                }, t.prototype.renderEmailSent = function() {
                    return s.createElement(v._30, {
                        className: "verify-email-banner verify-email-banner--success",
                        display: v.Q.Flex,
                        justifyContent: v._6.Center,
                        alignItems: v.c.Center
                    }, s.createElement(v._7, {
                        className: "verify-email-banner__body"
                    }, s.createElement(v.P, {
                        fontSize: v.U.Size5
                    }, Object(u.d)("Verification email sent to {email}", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.renderErrorSending = function() {
                    return s.createElement(v._30, {
                        className: "verify-email-banner verify-email-banner--error",
                        display: v.Q.Flex,
                        justifyContent: v._6.Center,
                        alignItems: v.c.Center
                    }, s.createElement(v._7, {
                        className: "verify-email-banner__body"
                    }, s.createElement(v.P, {
                        fontSize: v.U.Size5
                    }, Object(u.d)("Unable to send an email to {email}. Please try again later.", {
                        email: this.props.data.currentUser.email
                    }, "VerifyEmail"))))
                }, t.prototype.shouldHide = function() {
                    return !(this.isDataLoaded() && !this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell())
                }, t.prototype.isShowingPrimeUpsell = function() {
                    if (I.has(this.props.location.pathname)) {
                        var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                            t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                        return Object(d.f)(e, t)
                    }
                    return !1
                }, t.prototype.shouldRespectDismissal = function() {
                    var e = this.dismissalData;
                    return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + S)
                }, t.prototype.isDataLoaded = function() {
                    return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                }, t
            }(s.Component),
            C = Object(o.d)(Object(l.d)("VerifyEmail"), Object(c.a)(y), a.f)(w)
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
//# sourceMappingURL=features.verify-email.components.verify-email-bar.component-00956dc723baad2b4abb5d316a529c61.js.map