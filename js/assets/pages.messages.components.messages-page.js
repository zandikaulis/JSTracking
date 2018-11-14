(window.webpackJsonp = window.webpackJsonp || []).push([
    [55], {
        "5G0D": function(e, t, n) {},
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                s = n("/7QA"),
                o = n("kRBY"),
                a = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var s, o, a, i;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), s = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, s), a = r.__assign({}, t, {
                                            body: o
                                        }), [4, this._fetch(e, a)];
                                    case 1:
                                        return i = c.sent(), [4, this.constructLegacyAPIResponse(i)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var s;
                            return r.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((s = o.sent()).requestError) throw s.requestError;
                                        if (s.error) throw new Error("Error while sending legacy-api request: " + s.error.status + " - " + s.error.message);
                                        return [2, r.__assign({}, s, {
                                            body: s.body
                                        })];
                                    case 2:
                                        throw o.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, s.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
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
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
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
                        var n = s.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": s.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var a = Object(o.e)(n);
                        return a && (r.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (r["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = s.p.logger.withCategory("legacy-api"), e
                }()
        },
        rVsl: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                s = n("fvjX"),
                o = n("1/iK"),
                a = n("y5D0"),
                i = n("kRBY"),
                c = n("mrSG"),
                u = n("q1tI"),
                l = n("/7QA"),
                d = n("wU95"),
                h = n.n(d),
                g = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.initiateDownload = function() {
                            var e = document.createElement("a");
                            e.href = t.props.fileURL, e.download = "twitch-message-history", e.target = "_blank", e.setAttribute("style", "visibility: hidden"), document.body.appendChild(e), e.click(), document.body.removeChild(e)
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(g.Ya, {
                            className: "file-download-button"
                        }, u.createElement(g.z, {
                            icon: g.ub.Download,
                            type: g.F.Default,
                            onClick: this.initiateDownload
                        }, Object(l.d)("Download", "FileDownload")))
                    }, t
                }(u.Component),
                f = n("ZDlU"),
                m = n("LA8z"),
                y = n("NvVO"),
                w = n("b6Yk"),
                _ = n("GnwI"),
                b = n("H4kz"),
                v = (n("5G0D"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            errorLoadingMessageHistory: !1,
                            hasLoadedMessageHistory: !Object(b.a)()
                        }, t.fetchMessageHistory = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return c.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.props.sessionUser ? [4, w.a.get("/kraken/chat/legacy_inbox")] : [2, null];
                                        case 1:
                                            return 200 === (e = t.sent()).status ? this.setState({
                                                errorLoadingMessageHistory: !1,
                                                fileURL: e.body && e.body.download_url,
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
                        this.props.sessionUser && Object(b.a)() ? this.fetchMessageHistory() : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        this.state.hasLoadedMessageHistory && !t.hasLoadedMessageHistory && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return Object(b.a)() ? void 0 === this.props.sessionUser ? (this.props.login(), u.createElement(f.a, {
                            message: Object(l.d)("You must be logged in to view this page", "MessagesPage")
                        })) : this.state.errorLoadingMessageHistory ? u.createElement(f.a, {
                            message: Object(l.d)("Oops, something went wrong.", "MessagesPage")
                        }) : u.createElement(g.Ya, {
                            className: "messages-page",
                            alignItems: g.f.Center,
                            display: g.X.Flex,
                            fullWidth: !0,
                            fullHeight: !0,
                            justifyContent: g.Xa.Center,
                            position: g.kb.Absolute
                        }, u.createElement(g.Ya, {
                            alignItems: g.f.Center,
                            className: "messages-page__body",
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column
                        }, !this.state.hasLoadedMessageHistory && this.renderPlaceholder(), this.state.hasLoadedMessageHistory && this.renderLoadedBody())) : u.createElement(m.a, null)
                    }, t.prototype.renderPlaceholder = function() {
                        return u.createElement(u.Fragment, null, u.createElement(g.Ya, {
                            justifyContent: g.Xa.Center
                        }, u.createElement(g.jb, {
                            height: 130,
                            width: 180
                        })), u.createElement(g.Ya, {
                            margin: {
                                bottom: 1,
                                top: 4
                            }
                        }, u.createElement(g.jb, {
                            height: 15,
                            width: 370
                        }), u.createElement(g.Ya, {
                            margin: {
                                y: 1
                            }
                        }), u.createElement(g.jb, {
                            height: 15,
                            width: 380
                        }), u.createElement(g.Ya, {
                            margin: {
                                y: 1
                            }
                        }), u.createElement(g.jb, {
                            height: 15,
                            width: 65
                        }), u.createElement(g.Ya, {
                            margin: {
                                y: 2
                            }
                        }), u.createElement(g.jb, {
                            height: 15,
                            width: 310
                        }), u.createElement(g.Ya, {
                            margin: {
                                y: 2
                            }
                        }), u.createElement(g.jb, {
                            height: 15,
                            width: 390
                        }), u.createElement(g.Ya, {
                            margin: {
                                y: 1
                            }
                        }), u.createElement(g.jb, {
                            height: 15,
                            width: 300
                        })), u.createElement(g.Ya, {
                            justifyContent: g.Xa.Center
                        }, u.createElement(g.jb, {
                            height: 25,
                            width: 100
                        })))
                    }, t.prototype.renderLoadedBody = function() {
                        return u.createElement(u.Fragment, null, u.createElement(g.S, {
                            src: h.a,
                            alt: Object(l.d)("Envelope fading into smoke", "MessagesPage")
                        }), u.createElement(g.Ya, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(g.W, {
                            fontSize: g.Ca.Size5
                        }, Object(l.d)("Messages have been deprecated due to legacy technology. This allows us to work on new ways for you to contact others on Twitch!", "MessagesPage")), u.createElement(g.Ya, {
                            margin: {
                                y: .5
                            }
                        }), this.getActionCopy(), u.createElement(g.Ya, {
                            margin: {
                                y: .5
                            }
                        }), u.createElement(g.W, {
                            fontSize: g.Ca.Size5
                        }, Object(l.d)('Streamers: You can still contact all your subscribers by clicking "Send e-mail to my subs" from the Channel Analytics page!', "MessagesPage"))), this.getDownloadContent())
                    }, t.prototype.getActionCopy = function() {
                        return Object(b.a)() ? u.createElement(g.W, {
                            fontSize: g.Ca.Size5
                        }, Object(l.d)("You can download old messages until November 1, 2018.", "MessagesPage")) : u.createElement(g.W, {
                            fontSize: g.Ca.Size5
                        }, Object(l.d)("Check back to download your old messages.", "MessagesPage"))
                    }, t.prototype.getDownloadContent = function() {
                        return Object(b.a)() ? this.state.fileURL ? u.createElement(p, {
                            fileURL: this.state.fileURL
                        }) : u.createElement(g.W, {
                            bold: !0
                        }, Object(l.d)("You have no messages to download.", "MessagesPage")) : null
                    }, t
                }(u.Component)),
                E = Object(s.compose)(Object(_.b)("MessagesPage", {
                    destination: y.a.MessagesPage
                }))(v);
            var O = Object(r.connect)(function(e) {
                return {
                    sessionUser: Object(i.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    login: function() {
                        return Object(a.e)(o.a.MessagesPage)
                    }
                }, e)
            })(E);
            n.d(t, "MessagesPage", function() {
                return O
            })
        },
        wU95: function(e, t, n) {
            e.exports = n.p + "assets/deprecated-bb746356673a86291107.png"
        }
    }
]);