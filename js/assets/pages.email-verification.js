webpackJsonp([78], {
    "9u8h": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return a
        });
        var i = r("TToO"),
            n = r("6sO2"),
            o = r("Aj/L"),
            a = function() {
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
                }, e.getOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.putOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.postOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                }, e.deleteOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
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
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        var n, o, a, s;
                        return i.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, r), n = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, n), a = i.__assign({}, t, {
                                        body: o
                                    }), [4, this._fetch(e, a)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, r) {
                    return void 0 === t && (t = {}), void 0 === r && (r = {}), i.__awaiter(this, void 0, void 0, function() {
                        var n, o;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                case 1:
                                    if ((n = a.sent()).error || n.requestError) throw new Error("Error while making request");
                                    return o = i.__assign({}, n, {
                                        body: n.body
                                    }), [2, Promise.resolve(o)];
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
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, r, n, o;
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
                                    return n = i.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = n), [3, 4];
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var r = n.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": n.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var a = Object(o.c)(r);
                    return a && (i.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (i["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = n.o.logger.withCategory("legacy-api"), e
            }()
    },
    Tj44: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r("TToO"),
            n = r("GiK3"),
            o = r("2KeS"),
            a = r("6sO2"),
            s = r("j7/Y"),
            c = r("w9tK"),
            u = r("vH/s"),
            d = r("CSlQ"),
            h = r("9u8h");
        var l = r("Odds"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        isEmailVerified: !1,
                        errorMessage: ""
                    }, t.logger = a.o.logger.withCategory("email-verification"), t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.verifyEmail().then(function() {})
                }, t.prototype.render = function() {
                    return n.createElement(l._8, {
                        padding: 3
                    }, n.createElement(l.Q, {
                        className: "title",
                        type: l._49.H2
                    }, Object(a.d)("Email Verification", "EmailVerification")), this.renderVerificationStatus())
                }, t.prototype.renderVerificationStatus = function() {
                    if (this.state.isLoading) return n.createElement(l._8, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-loading"
                    }, n.createElement(l.Q, {
                        type: l._49.Strong
                    }, Object(a.d)("Verifying Email...", "EmailVerification")));
                    if (this.state.isEmailVerified) return n.createElement(l._8, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-success"
                    }, Object(a.d)("Your email address has been successfully validated.", "EmailVerification"));
                    var e = Object(a.d)("Couldn't validate your email: {errorMessage}", {
                        errorMessage: this.maybeGetLocalizedErrorMessage(this.state.errorMessage)
                    }, "EmailVerification");
                    return n.createElement(l._8, {
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "verify-error"
                    }, n.createElement(l.Q, {
                        color: l.K.Error,
                        type: l._49.Strong
                    }, e))
                }, t.prototype.maybeGetLocalizedErrorMessage = function(e) {
                    return e ? "Not Found" === e ? Object(a.d)("Not Found", "EmailVerification") : e : Object(a.d)("Unknown Error", "EmailVerification")
                }, t.prototype.verifyEmail = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, r, n;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (this.state.isLoading || this.state.isError) return [2];
                                    this.setState({
                                        isLoading: !0
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, function(e) {
                                        return i.__awaiter(this, void 0, void 0, function() {
                                            var t, r, n;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return t = !1, r = "", e ? [4, h.a.post("/v5/emailvalidator/" + e)] : [3, 2];
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
                                    return e = o.sent(), t = e.isEmailVerified, r = e.errorMessage, this.setState({
                                        isEmailVerified: t,
                                        errorMessage: r,
                                        isLoading: !1
                                    }), [3, 4];
                                case 3:
                                    return n = o.sent(), this.logger.error(n, "Failed to verify email"), this.setState({
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
            p = Object(o.d)(Object(d.d)("EmailVerificationPage", {
                destination: c.a.EmailVerification
            }), Object(s.a)({
                location: u.PageviewLocation.EmailVerification
            }))(f);
        r.d(t, "EmailVerificationPage", function() {
            return p
        })
    },
    "j7/Y": function(e, t, r) {
        "use strict";
        var i = r("TToO"),
            n = r("OAwv"),
            o = r("GiK3"),
            a = r("F8kA"),
            s = r("6sO2");

        function c(e) {
            return function(t) {
                var r = function(r) {
                    function a(t) {
                        var n = r.call(this, t) || this;
                        return n.tracked = !1, n.referenceTracking = {}, n.trackPageview = function() {
                            if (!(n.tracked || e.skip && e.skip(n.props))) {
                                n.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(n.props) : e.properties && (t = i.__assign({}, e.properties));
                                var r = i.__assign({}, n.props);
                                r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index);
                                var o = n.referenceTracking,
                                    a = o.content,
                                    c = o.medium,
                                    u = o.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: a,
                                    medium: c,
                                    content_index: u,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), n
                    }
                    return i.__extends(a, r), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                            "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? n.parse(e.search) : {},
                            r = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, r.medium || r.content) {
                            var i = "",
                                o = n.stringify(t);
                            o.length > 0 && (i = "?" + o), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return r
                    }, a
                }(o.Component);
                return Object(a.f)(r)
            }
        }
        r.d(t, "a", function() {
            return c
        })
    }
});
//# sourceMappingURL=pages.email-verification-462afbeefbf35510573a11ec354f24d6.js.map