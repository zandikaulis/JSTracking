(window.webpackJsonp = window.webpackJsonp || []).push([
    [75], {
        Kcdb: function(e, t, i) {},
        b6Yk: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return s
            });
            var r = i("mrSG"),
                n = i("/7QA"),
                a = i("kRBY"),
                s = function() {
                    function e() {}
                    return e.get = function(e, t, i) {
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
                            var n, a, s, o;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, i), n = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, n), s = r.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, s)];
                                    case 1:
                                        return o = c.sent(), [4, this.constructLegacyAPIResponse(o)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, i) {
                        return void 0 === t && (t = {}), void 0 === i && (i = {}), r.__awaiter(this, void 0, Promise, function() {
                            var n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, i)];
                                    case 1:
                                        if ((n = a.sent()).requestError) throw n.requestError;
                                        if (n.error) throw new Error("Error while sending legacy-api request: " + n.error.status + " - " + n.error.message);
                                        return [2, r.__assign({}, n, {
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
                        return new URL(e, n.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, i, n, a;
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
                                        return n = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = n), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        var s = Object(a.e)(i);
                        return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = n.o.logger.withCategory("legacy-api"), e
                }()
        },
        lEVP: function(e, t, i) {
            "use strict";
            i.r(t);
            var r, n = i("mrSG"),
                a = i("q1tI"),
                s = i("/MKj"),
                o = i("9C/b"),
                c = i("fvjX"),
                l = i("/7QA"),
                u = i("yR8l"),
                d = i("KxT4"),
                m = i("GnwI"),
                h = i("O4UZ"),
                f = i("b6Yk"),
                p = l.o.logger.withCategory("verify-email"),
                y = function(e, t) {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        var i, r;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    i = "/kraken/users/" + e, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, f.a.putOrThrow(i, {
                                        body: {
                                            email: t
                                        }
                                    })];
                                case 2:
                                    return n.sent(), [2, !0];
                                case 3:
                                    return r = n.sent(), p.error(r, "Verify Email Service"), [2, !1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                },
                v = i("2xye");
            ! function(e) {
                e.Click = "click", e.Dismiss = "dismiss", e.Impress = "impress"
            }(r || (r = {}));
            var g = i("Ue10"),
                _ = (i("Kcdb"), i("ongj"));
            i.d(t, "DISMISSAL_DATA_STORAGE_KEY", function() {
                return S
            }), i.d(t, "DISMISS_BTN_SELECTOR", function() {
                return D
            }), i.d(t, "VERIFY_BTN_SELECTOR", function() {
                return w
            }), i.d(t, "VerifyEmailBarPresentation", function() {
                return C
            }), i.d(t, "VerifyEmailBar", function() {
                return O
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
                        var i = e.call(this, t) || this;
                        return i.state = {
                            isError: !1,
                            verifyEmailBarState: E.INITIAL
                        }, i.resetAfterDismissalTimeoutID = null, i.afterVerifyDismissTimeoutID = null, i.dismissalData = null, i.impressionEventFired = !1, i.dismissBarClickHandler = function(e) {
                            e && e.stopPropagation();
                            var t = i.dismissalData ? i.dismissalData.dismissalCount : 0;
                            i.dismissalData = {
                                dismissalCount: t + 1,
                                dismissalDateTimeMs: Date.now()
                            }, l.l.set(S, i.dismissalData), i.setState({
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
                            }, 1.01 * I), l.o.tracking.track(v.SpadeEventType.VerifyEmailBar, {
                                action: r.Dismiss
                            })
                        }, i.onClickToVerify = function(e) {
                            return n.__awaiter(i, void 0, void 0, function() {
                                var t, i = this;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e && e.currentTarget && (t = e.currentTarget) && t.blur(), [4, y(this.props.data.currentUser.id, this.props.data.currentUser.email)];
                                        case 1:
                                            return n.sent() ? this.setState({
                                                verifyEmailBarState: E.EMAIL_SENT
                                            }) : this.setState({
                                                verifyEmailBarState: E.ERROR_SENDING
                                            }), this.afterVerifyDismissTimeoutID = setTimeout(function() {
                                                i.setState({
                                                    verifyEmailBarState: E.DISMISSED
                                                }), i.afterVerifyDismissTimeoutID = null
                                            }, b), l.o.tracking.track(v.SpadeEventType.VerifyEmailBar, {
                                                action: r.Click
                                            }), [2]
                                    }
                                })
                            })
                        }, i.dismissalData = l.l.getOptional(S), i
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
                                return this.impressionEventFired || (l.o.tracking.track(v.SpadeEventType.VerifyEmailBar, {
                                    action: r.Impress
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
                        return a.createElement(g.i, {
                            type: g.n.SlideInTop,
                            duration: g.k.ExtraLong
                        }, a.createElement(g.Va, {
                            fullWidth: !0,
                            position: g.db.Relative
                        }, a.createElement(g.xb, {
                            className: "verify-email-bar",
                            display: g.W.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Ua.Center,
                            elevation: 1
                        }, a.createElement(g.Na, {
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 1
                        }, a.createElement("button", {
                            onClick: this.onClickToVerify,
                            "data-test-selector": w
                        }, a.createElement(g.Va, {
                            display: g.W.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Ua.Center
                        }, a.createElement(g.Va, {
                            className: "verify-email-bar__copy",
                            display: g.W.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            }
                        }, a.createElement(g.mb, {
                            asset: g.nb.NotificationWarning,
                            type: g.ob.Inherit
                        })), a.createElement(g.Va, {
                            className: "verify-email-bar__copy"
                        }, a.createElement(g.V, {
                            fontSize: g.Aa.Size5,
                            color: g.O.Inherit
                        }, Object(l.d)("Keep your account secure and verify {email}.", {
                            email: this.props.data.currentUser.email
                        }, "VerifyEmail")))))), a.createElement(g.xb, {
                            className: "verify-email-bar__dismiss",
                            position: g.db.Absolute,
                            attachRight: !0,
                            margin: {
                                right: 2
                            },
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, a.createElement(g.T, {
                            type: g.U.Inherit,
                            onClick: this.dismissBarClickHandler,
                            "data-test-selector": D,
                            hoverColorInherit: !0,
                            hoverUnderlineNone: !0
                        }, Object(l.d)("Not Now", "VerifyEmail"))))))
                    }, t.prototype.renderEmailSent = function() {
                        return a.createElement(g.xb, {
                            className: "verify-email-bar verify-email-bar--success",
                            display: g.W.Flex,
                            justifyContent: g.Ua.Center,
                            alignItems: g.f.Center,
                            elevation: 1,
                            padding: 1
                        }, a.createElement(g.xb, {
                            display: g.W.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            },
                            color: g.O.Overlay
                        }, a.createElement(g.mb, {
                            asset: g.nb.NavMessages,
                            type: g.ob.Inherit
                        })), a.createElement(g.V, {
                            fontSize: g.Aa.Size5,
                            color: g.O.Overlay
                        }, Object(l.d)("Check your inbox at {email} for your verification email.", {
                            email: this.props.data.currentUser.email
                        }, "VerifyEmail")))
                    }, t.prototype.renderErrorSending = function() {
                        return a.createElement(g.xb, {
                            className: "verify-email-bar verify-email-bar--error",
                            display: g.W.Flex,
                            justifyContent: g.Ua.Center,
                            alignItems: g.f.Center,
                            elevation: 1,
                            padding: 1
                        }, a.createElement(g.xb, {
                            display: g.W.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            },
                            color: g.O.Overlay
                        }, a.createElement(g.mb, {
                            asset: g.nb.DeadGlitch,
                            type: g.ob.Inherit
                        })), a.createElement(g.V, {
                            fontSize: g.Aa.Size5,
                            color: g.O.Overlay
                        }, Object(l.d)("Oops...we were unable to send an email to {email}. Please try again later or update your email.", {
                            email: this.props.data.currentUser.email
                        }, "VerifyEmail")), a.createElement(g.xb, {
                            position: g.db.Absolute,
                            attachRight: !0,
                            margin: {
                                right: 2
                            }
                        }, a.createElement(g.z, {
                            type: g.F.Hollow,
                            overlay: !0,
                            linkTo: "/settings/profile"
                        }, Object(l.d)("Update Email", "VerifyEmail"))))
                    }, t.prototype.shouldHide = function() {
                        return !(this.isDataLoaded() && !this.props.data.currentUser.isEmailVerified) || (this.shouldRespectDismissal() || this.isShowingPrimeUpsell() || this.props.blockedByGDPRBanner)
                    }, t.prototype.isShowingPrimeUpsell = function() {
                        if (T.has(this.props.location.pathname)) {
                            var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                                t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                            return Object(h.o)(e, t)
                        }
                        return !1
                    }, t.prototype.shouldRespectDismissal = function() {
                        var e = this.dismissalData;
                        return null !== e && (e.dismissalCount > 0 && Date.now() < e.dismissalDateTimeMs + I)
                    }, t.prototype.isDataLoaded = function() {
                        return this.props.data && !(this.props.data.loading || this.props.data.error) && this.props.data.currentUser && this.props.data.requestInfo
                    }, t
                }(a.Component),
                O = Object(c.compose)(Object(m.c)("VerifyEmail"), Object(u.a)(_), Object(s.connect)(function(e) {
                    return {
                        blockedByGDPRBanner: Object(d.h)(e)
                    }
                }), o.a)(C)
        },
        ongj: function(e, t) {
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
        }
    }
]);