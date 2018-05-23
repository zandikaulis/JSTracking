webpackJsonp([31], {
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n("TToO"),
            s = n("6sO2"),
            o = n("Aj/L"),
            i = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var s, o, i, a;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), s = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, s), i = r.__assign({}, t, {
                                        body: o
                                    }), [4, this._fetch(e, i)];
                                case 1:
                                    return a = c.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var s, o;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((s = i.sent()).error || s.requestError) throw new Error("Error while making request");
                                    return o = r.__assign({}, s, {
                                        body: s.body
                                    }), [2, Promise.resolve(o)];
                                case 2:
                                    throw i.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, s.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, s, o;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return s = r.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = s), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
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
                    var n = s.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": s.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var i = Object(o.c)(n);
                    return i && (r.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (r["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = s.o.logger.withCategory("legacy-api"), e
            }()
    },
    Y1tk: function(e, t, n) {
        e.exports = n.p + "assets/deprecated-bb746356673a86291107f8b330c6391d.png"
    },
    jWoj: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            s = n("2KeS"),
            o = n("+xm8"),
            i = n("f2i/"),
            a = n("Aj/L"),
            c = n("TToO"),
            u = n("GiK3"),
            d = n("6sO2"),
            l = n("Y1tk"),
            h = n.n(l),
            g = n("Odds"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.initiateDownload = function() {
                        var e = document.createElement("a");
                        e.href = t.props.fileURL, e.download = "twitch-message-history", e.target = "_blank", e.setAttribute("style", "visibility: hidden"), document.body.appendChild(e), e.click(), document.body.removeChild(e)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(g._8, {
                        className: "file-download-button"
                    }, u.createElement(g.v, {
                        icon: g._25.Download,
                        type: g.B.Default,
                        onClick: this.initiateDownload
                    }, Object(d.d)("Download", "FileDownload")))
                }, t
            }(u.Component),
            f = n("yWCw"),
            p = n("w9tK"),
            m = n("9u8h"),
            y = n("CSlQ"),
            v = "deprecated_messages_download_enabled";

        function w() {
            return d.b.get(v, !1)
        }
        n("mdIJ");
        var b = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    errorLoadingMessageHistory: !1,
                    hasLoadedMessageHistory: !w()
                }, t.fetchMessageHistory = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.sessionUser ? [4, m.a.get("/kraken/users/" + this.props.sessionUser.id + "/messages")] : [2, null];
                                case 1:
                                    return 200 === (e = t.sent()).status ? this.setState({
                                        errorLoadingMessageHistory: !1,
                                        fileURL: e.body && e.body.url,
                                        hasLoadedMessageHistory: !0
                                    }) : this.setState({
                                        errorLoadingMessageHistory: !0,
                                        hasLoadedMessageHistory: !0
                                    }), [2]
                            }
                        })
                    })
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.sessionUser && w() ? this.fetchMessageHistory() : this.props.latencyTracking.reportInteractive()
            }, t.prototype.componentDidUpdate = function(e, t) {
                this.state.hasLoadedMessageHistory && !t.hasLoadedMessageHistory && this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                return void 0 === this.props.sessionUser ? (this.props.login(), u.createElement(f.a, {
                    message: Object(d.d)("You must be logged in to view this page", "MessagesPage")
                })) : this.state.errorLoadingMessageHistory ? u.createElement(f.a, {
                    message: Object(d.d)("Oops, something went wrong.", "MessagesPage")
                }) : u.createElement(g._8, {
                    className: "messages-page",
                    alignItems: g.c.Center,
                    display: g.R.Flex,
                    fullWidth: !0,
                    fullHeight: !0,
                    justifyContent: g._7.Center,
                    position: g._15.Absolute
                }, u.createElement(g._8, {
                    alignItems: g.c.Center,
                    className: "messages-page__body",
                    display: g.R.Flex,
                    flexDirection: g.T.Column
                }, !this.state.hasLoadedMessageHistory && this.renderPlaceholder(), this.state.hasLoadedMessageHistory && this.renderLoadedBody()))
            }, t.prototype.renderPlaceholder = function() {
                return u.createElement(u.Fragment, null, u.createElement(g._8, {
                    justifyContent: g._7.Center
                }, u.createElement(g._14, {
                    height: 130,
                    width: 180
                })), u.createElement(g._8, {
                    margin: {
                        bottom: 1,
                        top: 4
                    }
                }, u.createElement(g._14, {
                    height: 15,
                    width: 370
                }), u.createElement(g._8, {
                    margin: {
                        y: 1
                    }
                }), u.createElement(g._14, {
                    height: 15,
                    width: 380
                }), u.createElement(g._8, {
                    margin: {
                        y: 1
                    }
                }), u.createElement(g._14, {
                    height: 15,
                    width: 65
                }), u.createElement(g._8, {
                    margin: {
                        y: 2
                    }
                }), u.createElement(g._14, {
                    height: 15,
                    width: 310
                }), u.createElement(g._8, {
                    margin: {
                        y: 2
                    }
                }), u.createElement(g._14, {
                    height: 15,
                    width: 390
                }), u.createElement(g._8, {
                    margin: {
                        y: 1
                    }
                }), u.createElement(g._14, {
                    height: 15,
                    width: 300
                })), u.createElement(g._8, {
                    justifyContent: g._7.Center
                }, u.createElement(g._14, {
                    height: 25,
                    width: 100
                })))
            }, t.prototype.renderLoadedBody = function() {
                return u.createElement(u.Fragment, null, u.createElement(g.N, {
                    src: h.a,
                    alt: Object(d.d)("Envelope fading into smoke", "MessagesPage")
                }), u.createElement(g._8, {
                    margin: {
                        y: 1
                    }
                }, u.createElement(g.Q, {
                    fontSize: g.V.Size5
                }, Object(d.d)("Messages have been deprecated due to legacy technology. This allows us to work on new ways for you to contact others on Twitch!", "MessagesPage")), u.createElement(g._8, {
                    margin: {
                        y: .5
                    }
                }), this.getActionCopy(), u.createElement(g._8, {
                    margin: {
                        y: .5
                    }
                }), u.createElement(g.Q, {
                    fontSize: g.V.Size5
                }, Object(d.d)('Streamers: You can still contact all your subscribers by clicking "Send e-mail to my subs" from the Channel Analytics page!', "MessagesPage"))), this.getDownloadContent())
            }, t.prototype.getActionCopy = function() {
                return w() ? u.createElement(g.Q, {
                    fontSize: g.V.Size5
                }, Object(d.d)("You can download your old messages until August 1.", "MessagesPage")) : u.createElement(g.Q, {
                    fontSize: g.V.Size5
                }, Object(d.d)("Check back on May 11 to download your old messages.", "MessagesPage"))
            }, t.prototype.getDownloadContent = function() {
                return w() ? this.state.fileURL ? u.createElement(_, {
                    fileURL: this.state.fileURL
                }) : u.createElement(g.Q, {
                    bold: !0
                }, Object(d.d)("You have no messages to download.", "MessagesPage")) : null
            }, t = c.__decorate([Object(y.d)("MessagesPage", {
                destination: p.a.MessagesPage
            })], t)
        }(u.Component);
        var E = Object(r.b)(function(e) {
            return {
                sessionUser: Object(a.c)(e)
            }
        }, function(e) {
            return Object(s.b)({
                login: function() {
                    return Object(i.f)(o.a.MessagesPage)
                }
            }, e)
        })(b);
        n.d(t, "MessagesPage", function() {
            return E
        })
    },
    mdIJ: function(e, t) {}
});
//# sourceMappingURL=pages.messages.components.messages-page-dc9799a40a29fc3920dd2d2f3eb9538d.js.map