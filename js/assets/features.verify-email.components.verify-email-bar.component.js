(window.webpackJsonp = window.webpackJsonp || []).push([
    [75], {
        Kcdb: function(e, t, r) {},
        b6Yk: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return s
            });
            var i = r("mrSG"),
                n = r("/7QA"),
                a = r("kRBY"),
                s = function() {
                    function e() {}
                    return e.get = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            var n, a, s, o;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), n = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, n), s = i.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, s)];
                                    case 1:
                                        return o = u.sent(), [4, this.constructLegacyAPIResponse(o)];
                                    case 2:
                                        return [2, u.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            var n;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((n = a.sent()).requestError) throw n.requestError;
                                        if (n.error) throw new Error("Error while sending legacy-api request: " + n.error.status + " - " + n.error.message);
                                        return [2, i.__assign({}, n, {
                                            body: n.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, n.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, r, n, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return r = i.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                    case 3:
                                        return n = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = n), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var r = n.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": n.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var s = Object(a.e)(r);
                        return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = n.p.logger.withCategory("legacy-api"), e
                }()
        },
        lEVP: function(e, t, r) {
            "use strict";
            r.r(t);
            var i, n = r("mrSG"),
                a = r("q1tI"),
                s = r("/MKj"),
                o = r("9C/b"),
                u = r("fvjX"),
                c = r("/7QA"),
                l = r("yR8l"),
                d = r("KxT4"),
                m = r("GnwI"),
                h = r("O4UZ"),
                p = r("b6Yk"),
                f = c.p.logger.withCategory("verify-email"),
                y = function(e, t) {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        var r, i;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    r = "/kraken/users/" + e, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, p.a.putOrThrow(r, {
                                        body: {
                                            email: t
                                        }
                                    })];
                                case 2:
                                    return n.sent(), [2, !0];
                                case 3:
                                    return i = n.sent(), f.error(i, "Verify Email Service"), [2, !1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                },
                v = r("2xye");
            ! function(e) {
                e.Click = "click", e.Dismiss = "dismiss", e.Impress = "impress"
            }(i || (i = {}));
            var g = r("Ue10"),
                _ = (r("Kcdb"), r("ongj"));
            r.d(t, "DISMISSAL_DATA_STORAGE_KEY", function() {
                return S
            }), r.d(t, "DISMISS_BTN_SELECTOR", function() {
                return D
            }), r.d(t, "VERIFY_BTN_SELECTOR", function() {
                return w
            }), r.d(t, "VerifyEmailBarPresentation", function() {
                return C
            }), r.d(t, "VerifyEmailBar", function() {
                return k
            });
            var E, S = "verifyemailbar_dismissal",
                I = 18e5,
                b = 5e3,
                T = new Set(["/"]),
                D = "dimiss-btn",
                w = "verify-email-btn";
            ! function(e) {
                e[e.INITIAL = 0] = "INITIAL", e[e.CLICK_TO_VERIFY = 1] = "CLICK_TO_VERIFY", e[e.EMAIL_SENT = 2] = "EMAIL_SENT", e[e.ERROR_SENDING = 3] = "ERROR_SENDING", e[e.DISMISSED = 4] = "DISMISSED"
            }(E || (E = {}));
            var C = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            isError: !1,
                            verifyEmailBarState: E.INITIAL
                        }, r.resetAfterDismissalTimeoutID = null, r.afterVerifyDismissTimeoutID = null, r.dismissalData = null, r.impressionEventFired = !1, r.dismissBarClickHandler = function(e) {
                            e && e.stopPropagation();
                            var t = r.dismissalData ? r.dismissalData.dismissalCount : 0;
                            r.dismissalData = {
                                dismissalCount: t + 1,
                                dismissalDateTimeMs: Date.now()
                            }, c.m.set(S, r.dismissalData), r.setState({
                                verifyEmailBarState: E.DISMISSED
                            }), r.resetAfterDismissalTimeoutID = setTimeout(function() {
                                return n.__awaiter(r, void 0, void 0, function() {
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
                            }, 1.01 * I), c.p.tracking.track(v.SpadeEventType.VerifyEmailBar, {
                                action: i.Dismiss
                            })
                        }, r.onClickToVerify = function(e) {
                            return n.__awaiter(r, void 0, void 0, function() {
                                var t, r = this;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e && e.currentTarget && (t = e.currentTarget) && t.blur(), this.props.data.currentUser && this.props.data.currentUser.id && this.props.data.currentUser.email ? [4, y(this.props.data.currentUser.id, this.props.data.currentUser.email)] : [2];
                                        case 1:
                                            return n.sent() ? this.setState({
                                                verifyEmailBarState: E.EMAIL_SENT
                                            }) : this.setState({
                                                verifyEmailBarState: E.ERROR_SENDING
                                            }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                                r.setState({
                                                    verifyEmailBarState: E.DISMISSED
                                                }), r.afterVerifyDismissTimeoutID = null
                                            }, b), c.p.tracking.track(v.SpadeEventType.VerifyEmailBar, {
                                                action: i.Click
                                            }), [2]
                                    }
                                })
                            })
                        }, r.dismissalData = c.m.getOptional(S), r
                    }
                    return n.__extends(t, e), t.prototype.componentWillUnmount = function() {
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
                                return this.impressionEventFired || (c.p.tracking.track(v.SpadeEventType.VerifyEmailBar, {
                                    action: i.Impress
                                }), this.impressionEventFired = !0), this.renderClickToVerify();
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
                        return this.props.data.currentUser && this.props.data.currentUser.email ? a.createElement(g.i, {
                            type: g.n.SlideInTop,
                            duration: g.k.ExtraLong
                        }, a.createElement(g.Ya, {
                            fullWidth: !0,
                            position: g.kb.Relative
                        }, a.createElement(g.Fb, {
                            className: "verify-email-bar",
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Xa.Center,
                            elevation: 1
                        }, a.createElement(g.Qa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 1
                        }, a.createElement("button", {
                            onClick: this.onClickToVerify,
                            "data-test-selector": w
                        }, a.createElement(g.Ya, {
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Xa.Center
                        }, a.createElement(g.Ya, {
                            className: "verify-email-bar__copy",
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            }
                        }, a.createElement(g.tb, {
                            asset: g.ub.NotificationWarning,
                            type: g.vb.Inherit
                        })), a.createElement(g.Ya, {
                            className: "verify-email-bar__copy"
                        }, a.createElement(g.W, {
                            fontSize: g.Ca.Size5,
                            color: g.O.Inherit
                        }, Object(c.d)("Keep your account secure and verify {email}.", {
                            email: this.props.data.currentUser.email
                        }, "VerifyEmail")))))), a.createElement(g.Fb, {
                            className: "verify-email-bar__dismiss",
                            position: g.kb.Absolute,
                            attachRight: !0,
                            margin: {
                                right: 2
                            },
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, a.createElement(g.U, {
                            type: g.V.Inherit,
                            onClick: this.dismissBarClickHandler,
                            "data-test-selector": D,
                            hoverColorInherit: !0,
                            hoverUnderlineNone: !0
                        }, Object(c.d)("Not Now", "VerifyEmail")))))) : null
                    }, t.prototype.renderEmailSent = function() {
                        return this.props.data.currentUser && this.props.data.currentUser.email ? a.createElement(g.Fb, {
                            className: "verify-email-bar verify-email-bar--success",
                            display: g.X.Flex,
                            justifyContent: g.Xa.Center,
                            alignItems: g.f.Center,
                            elevation: 1,
                            padding: 1
                        }, a.createElement(g.Fb, {
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            },
                            color: g.O.Overlay
                        }, a.createElement(g.tb, {
                            asset: g.ub.NavMessages,
                            type: g.vb.Inherit
                        })), a.createElement(g.W, {
                            fontSize: g.Ca.Size5,
                            color: g.O.Overlay
                        }, Object(c.d)("Check your inbox at {email} for your verification email.", {
                            email: this.props.data.currentUser.email
                        }, "VerifyEmail"))) : null
                    }, t.prototype.renderErrorSending = function() {
                        return this.props.data.currentUser && this.props.data.currentUser.email ? a.createElement(g.Fb, {
                            className: "verify-email-bar verify-email-bar--error",
                            display: g.X.Flex,
                            justifyContent: g.Xa.Center,
                            alignItems: g.f.Center,
                            elevation: 1,
                            padding: 1
                        }, a.createElement(g.Fb, {
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            },
                            color: g.O.Overlay
                        }, a.createElement(g.tb, {
                            asset: g.ub.DeadGlitch,
                            type: g.vb.Inherit
                        })), a.createElement(g.W, {
                            fontSize: g.Ca.Size5,
                            color: g.O.Overlay
                        }, Object(c.d)("Oops...we were unable to send an email to {email}. Please try again later or update your email.", {
                            email: this.props.data.currentUser.email
                        }, "VerifyEmail")), a.createElement(g.Fb, {
                            position: g.kb.Absolute,
                            attachRight: !0,
                            margin: {
                                right: 2
                            }
                        }, a.createElement(g.z, {
                            type: g.F.Hollow,
                            overlay: !0,
                            linkTo: "/settings/profile"
                        }, Object(c.d)("Update Email", "VerifyEmail")))) : null
                    }, t.prototype.shouldHide = function() {
                        return !!(!this.isDataLoaded() || this.props.data.currentUser && this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell() || this.props.blockedByGDPRBanner)
                    }, t.prototype.isShowingPrimeUpsell = function() {
                        if (T.has(this.props.location.pathname)) {
                            var e = !(!this.props.data.currentUser || !this.props.data.currentUser.hasPrime),
                                t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                            return Object(h.p)(e, t)
                        }
                        return !1
                    }, t.prototype.shouldRespectDismissal = function() {
                        var e = this.dismissalData;
                        return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + I)
                    }, t.prototype.isDataLoaded = function() {
                        return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                    }, t
                }(a.Component),
                k = Object(u.compose)(Object(m.b)("VerifyEmail"), Object(l.a)(_), Object(s.connect)(function(e) {
                    return {
                        blockedByGDPRBanner: Object(d.h)(e)
                    }
                }), o.a)(C)
        },
        ongj: function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "query VerifyEmail_CurrentUser {\ncurrentUser {\nid\nhasPrime\ndisplayName\nemail\nisEmailVerified\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        }
    }
]);