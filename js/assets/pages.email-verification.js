(window.webpackJsonp = window.webpackJsonp || []).push([
    [65], {
        VkGE: function(e, t, r) {
            "use strict";
            r.r(t);
            var i = r("mrSG"),
                n = r("q1tI"),
                s = r("fvjX"),
                o = r("/7QA"),
                a = r("V+GM"),
                c = r("NvVO"),
                u = r("2xye"),
                h = r("GnwI"),
                l = r("b6Yk");
            var d = r("Ue10"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            isError: !1,
                            isEmailVerified: !1,
                            errorMessage: ""
                        }, t.logger = o.p.logger.withCategory("email-verification"), t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.verifyEmail().then(function() {})
                    }, t.prototype.render = function() {
                        return n.createElement(d.Xa, {
                            padding: 3
                        }, n.createElement(d.W, {
                            className: "title",
                            type: d.Tb.H2
                        }, Object(o.d)("Email Verification", "EmailVerification")), this.renderVerificationStatus())
                    }, t.prototype.renderVerificationStatus = function() {
                        if (this.state.isLoading) return n.createElement(d.Xa, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": "verify-loading"
                        }, n.createElement(d.W, {
                            type: d.Tb.Strong
                        }, Object(o.d)("Verifying Email...", "EmailVerification")));
                        if (this.state.isEmailVerified) return n.createElement(d.Xa, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": "verify-success"
                        }, Object(o.d)("Your email address has been successfully validated.", "EmailVerification"));
                        var e = Object(o.d)("Couldn't validate your email: {errorMessage}", {
                            errorMessage: this.maybeGetLocalizedErrorMessage(this.state.errorMessage)
                        }, "EmailVerification");
                        return n.createElement(d.Xa, {
                            margin: {
                                top: 1
                            },
                            "data-test-selector": "verify-error"
                        }, n.createElement(d.W, {
                            color: d.O.Error,
                            type: d.Tb.Strong
                        }, e))
                    }, t.prototype.maybeGetLocalizedErrorMessage = function(e) {
                        return e ? "Not Found" === e ? Object(o.d)("Not Found", "EmailVerification") : e : Object(o.d)("Unknown Error", "EmailVerification")
                    }, t.prototype.verifyEmail = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e, t, r, n;
                            return i.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, function(e) {
                                            return i.__awaiter(this, void 0, Promise, function() {
                                                var t, r, n;
                                                return i.__generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return t = !1, r = "", e ? [4, l.a.post("/v5/emailvalidator/" + e)] : [3, 2];
                                                        case 1:
                                                            n = i.sent(), t = n && (200 === n.status || 204 === n.status), r = n.error ? n.error.error : "", i.label = 2;
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
                                        return e = s.sent(), t = e.isEmailVerified, r = e.errorMessage, this.setState({
                                            isEmailVerified: t,
                                            errorMessage: r,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = s.sent(), this.logger.error(n, "Failed to verify email"), this.setState({
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
                g = Object(s.compose)(Object(h.b)("EmailVerificationPage", {
                    destination: c.a.EmailVerification,
                    autoReportInteractive: !0
                }), Object(a.a)({
                    location: u.PageviewLocation.EmailVerification
                }))(f);
            r.d(t, "EmailVerificationPage", function() {
                return g
            })
        },
        b6Yk: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var i = r("mrSG"),
                n = r("/7QA"),
                s = r("kRBY"),
                o = function() {
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
                            var n, s, o, a;
                            return i.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), n = t.headers ? t.headers["Content-Type"] : void 0, s = this.serialize(t.body, n), o = i.__assign({}, t, {
                                            body: s
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return a = c.sent(), [4, this.constructLegacyAPIResponse(a)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, Promise, function() {
                            var n;
                            return i.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((n = s.sent()).requestError) throw n.requestError;
                                        if (n.error) throw new Error("Error while sending legacy-api request: " + n.error.status + " - " + n.error.message);
                                        return [2, i.__assign({}, n, {
                                            body: n.body
                                        })];
                                    case 2:
                                        throw s.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, n.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, r, n, s;
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
                                        return n = i.sent(), e.headers && e.headers.get && (s = e.headers.get("Content-Type")) && -1 !== s.indexOf("application/json") && (t.requestError = n), [3, 4];
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
                        var o = Object(s.e)(r);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = n.p.logger.withCategory("legacy-api"), e
                }()
        }
    }
]);