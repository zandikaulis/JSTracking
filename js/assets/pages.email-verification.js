webpackJsonp([64], {
    "9u8h": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return s
        });
        var i = r("TToO"),
            n = r("6sO2"),
            a = r("Aj/L"),
            s = function() {
                function e() {}
                return e.get = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.put = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.post = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.delete = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.request = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        var n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, r), n = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, n), [4, this._fetch(e, t)];
                                case 1:
                                    return a = i.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, n.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var r = n.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": n.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var s = Object(a.c)(r);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    Tj44: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r("TToO"),
            n = r("GiK3"),
            a = r("2KeS"),
            s = r("6sO2"),
            o = r("j7/Y"),
            c = r("w9tK"),
            u = r("vH/s"),
            d = r("CSlQ"),
            l = r("9u8h");
        var f = r("Odds"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        isEmailVerified: !1,
                        errorMessage: ""
                    }, t.logger = s.o.logger.withCategory("email-verification"), t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.verifyEmail().then(function() {})
                }, t.prototype.render = function() {
                    return n.createElement(f._4, {
                        padding: 3
                    }, n.createElement(f.O, {
                        className: "title",
                        type: f._41.H2
                    }, Object(s.d)("Email Verification", "EmailVerification")), this.renderVerificationStatus())
                }, t.prototype.renderVerificationStatus = function() {
                    if (this.state.isLoading) return n.createElement(f._4, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-loading"
                    }, n.createElement(f.O, {
                        type: f._41.Strong
                    }, Object(s.d)("Verifying Email...", "EmailVerification")));
                    if (this.state.isEmailVerified) return n.createElement(f._4, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-success"
                    }, Object(s.d)("Your email address has been successfully validated.", "EmailVerification"));
                    var e = Object(s.d)("Couldn't validate your email: {errorMessage}", {
                        errorMessage: this.maybeGetLocalizedErrorMessage(this.state.errorMessage)
                    }, "EmailVerification");
                    return n.createElement(f._4, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-error"
                    }, n.createElement(f.O, {
                        color: f.J.Error,
                        type: f._41.Strong
                    }, e))
                }, t.prototype.maybeGetLocalizedErrorMessage = function(e) {
                    return e ? "Not Found" === e ? Object(s.d)("Not Found", "EmailVerification") : e : Object(s.d)("Unknown Error", "EmailVerification")
                }, t.prototype.verifyEmail = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, n;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (this.state.isLoading || this.state.isError) return [2];
                                    this.setState({
                                        isLoading: !0
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, function(e) {
                                        return i.__awaiter(this, void 0, void 0, function() {
                                            var t, r, n;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return t = !1, r = "", e ? [4, l.a.post("/v5/emailvalidator/" + e)] : [3, 2];
                                                    case 1:
                                                        n = i.sent(), t = n && (200 === n.status || 204 === n.status), r = n.error && n.error.error || "", i.label = 2;
                                                    case 2:
                                                        return [2, Promise.resolve({
                                                            isEmailVerified: t,
                                                            errorMessage: r
                                                        })]
                                                }
                                            })
                                        })
                                    }(this.props.match.params.emailOpaqueId)];
                                case 2:
                                    return e = a.sent(), t = e.isEmailVerified, r = e.errorMessage, this.setState({
                                        isEmailVerified: t,
                                        errorMessage: r,
                                        isLoading: !1
                                    }), [3, 4];
                                case 3:
                                    return n = a.sent(), this.logger.error(n, "Failed to verify email"), this.setState({
                                        isError: !0,
                                        isLoading: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(n.Component),
            g = Object(a.d)(Object(d.d)("EmailVerification", {
                destination: c.a.EmailVerification
            }), Object(o.a)({
                location: u.PageviewLocation.EmailVerification
            }))(h);
        r.d(t, "EmailVerificationPage", function() {
            return g
        })
    }
});
//# sourceMappingURL=pages.email-verification-d234198f3bf3cab5701882683ca95826.js.map