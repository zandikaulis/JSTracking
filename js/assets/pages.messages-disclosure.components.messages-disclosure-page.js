(window.webpackJsonp = window.webpackJsonp || []).push([
    [56], {
        Sqs6: function(e, t, r) {},
        WtmX: function(e, t, r) {
            "use strict";
            r.r(t);
            var s = r("/MKj"),
                n = r("fvjX"),
                i = r("1/iK"),
                o = r("y5D0"),
                a = r("kRBY"),
                c = r("mrSG"),
                u = r("q1tI"),
                h = r("/7QA"),
                d = r("wU95"),
                l = r.n(d),
                g = r("ZDlU"),
                f = r("LA8z"),
                p = r("NvVO"),
                _ = r("b6Yk"),
                w = r("GnwI"),
                v = "messages_disclosure_enabled";

            function m() {
                return h.b.get(v, !1)
            }
            var b = r("Ue10"),
                y = (r("Sqs6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            errorLoadingMessagesDisclosure: !1,
                            hasLoadedMessagesDisclosure: !m()
                        }, t.fetchMessagesDisclosure = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return c.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.props.sessionUser ? [4, _.a.get("/kraken/chat/legacy_inbox?download_type=archive")] : [2, null];
                                        case 1:
                                            return (e = t.sent()).body && e.body.archive_url && this.setState({
                                                fileURL: e.body.archive_url
                                            }), this.setState({
                                                errorLoadingMessagesDisclosure: 200 !== e.status,
                                                hasLoadedMessagesDisclosure: !0
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.sessionUser && m() ? this.fetchMessagesDisclosure() : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        this.state.hasLoadedMessagesDisclosure && !t.hasLoadedMessagesDisclosure && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return m() ? void 0 === this.props.sessionUser ? (this.props.login(), u.createElement(g.a, {
                            message: Object(h.d)("You must be logged in to view this page", "MessagesDisclosurePage")
                        })) : this.state.errorLoadingMessagesDisclosure ? u.createElement(g.a, {
                            message: Object(h.d)("Oops, something went wrong.", "MessagesDisclosurePage")
                        }) : u.createElement(b.Xa, {
                            className: "messages-disclosure-page",
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            fullWidth: !0,
                            fullHeight: !0,
                            justifyContent: b.Wa.Center,
                            position: b.jb.Absolute
                        }, u.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            className: "messages-disclosure-page__body",
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column
                        }, !this.state.hasLoadedMessagesDisclosure && this.renderPlaceholder(), this.state.hasLoadedMessagesDisclosure && this.renderLoadedBody())) : u.createElement(f.a, null)
                    }, t.prototype.renderPlaceholder = function() {
                        return u.createElement(b.Xa, {
                            justifyContent: b.Wa.Center
                        }, u.createElement(b.ib, {
                            height: 130,
                            width: 180
                        }))
                    }, t.prototype.renderLoadedBody = function() {
                        return u.createElement(u.Fragment, null, u.createElement(b.S, {
                            src: l.a,
                            alt: Object(h.d)("Envelope fading into smoke", "MessagesDisclosurePage")
                        }), this.state.fileURL && this.renderDownloadIFrame() || u.createElement(b.Xa, {
                            margin: {
                                y: 2
                            }
                        }, u.createElement(b.W, {
                            fontSize: b.Ca.Size5
                        }, Object(h.d)("None of your private messages were affected.", "MessagesDisclosurePage"))))
                    }, t.prototype.renderDownloadIFrame = function() {
                        return u.createElement("iframe", {
                            width: "0",
                            height: "0",
                            src: this.state.fileURL
                        })
                    }, t
                }(u.Component)),
                D = Object(n.compose)(Object(w.b)("MessagesDisclosurePage", {
                    destination: p.a.MessagesDisclosurePage
                }))(y);
            var O = Object(s.connect)(function(e) {
                return {
                    sessionUser: Object(a.e)(e)
                }
            }, function(e) {
                return Object(n.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(i.a.MessagesDisclosurePage)
                    }
                }, e)
            })(D);
            r.d(t, "MessagesDisclosurePage", function() {
                return O
            })
        },
        b6Yk: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var s = r("mrSG"),
                n = r("/7QA"),
                i = r("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, s.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, s.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, s.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, s.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, s.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, s.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.request(e, s.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, s.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            var n, i, o, a;
                            return s.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), n = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, n), o = s.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return a = c.sent(), [4, this.constructLegacyAPIResponse(a)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), s.__awaiter(this, void 0, Promise, function() {
                            var n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((n = i.sent()).requestError) throw n.requestError;
                                        if (n.error) throw new Error("Error while sending legacy-api request: " + n.error.status + " - " + n.error.message);
                                        return [2, s.__assign({}, n, {
                                            body: n.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, n.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return s.__awaiter(this, void 0, Promise, function() {
                            var t, r, n, i;
                            return s.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return r = s.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                    case 3:
                                        return n = s.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = n), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), s.__awaiter(this, void 0, Promise, function() {
                            return s.__generator(this, function(r) {
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
                            headers: s.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var r = n.p.store.getState(),
                            s = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": n.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (s["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(r);
                        return o && (s.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (s["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            s[e] && delete s[e]
                        }), s
                    }, e.logger = n.p.logger.withCategory("legacy-api"), e
                }()
        },
        wU95: function(e, t, r) {
            e.exports = r.p + "assets/deprecated-bb746356673a86291107.png"
        }
    }
]);