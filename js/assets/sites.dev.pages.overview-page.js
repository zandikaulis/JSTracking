webpackJsonp([117], {
    "4ci7": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            o = n("GiK3"),
            i = n("2KeS"),
            a = n("j7/Y"),
            s = n("w9tK"),
            c = n("9u8h"),
            u = n("vH/s"),
            d = n("CSlQ"),
            p = n("6sO2"),
            h = n("Odds"),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.__extends(e, t), e.prototype.render = function() {
                    return o.createElement(h._35, {
                        className: "tenant-panel",
                        display: h.R.Flex,
                        flexDirection: h.T.Column,
                        border: !0
                    }, o.createElement(h._8, {
                        className: "tenant-panel__info",
                        display: h.R.Block,
                        textAlign: h._45.Center,
                        margin: {
                            y: 1
                        },
                        padding: {
                            top: 2
                        }
                    }, o.createElement(h._2, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(h.Q, {
                        type: h._49.H2,
                        className: "tenant-panel__count",
                        color: h.K.Alt2
                    }, this.props.tenant.count)), o.createElement(h.Q, {
                        type: h._49.H3,
                        transform: h._48.Uppercase,
                        className: "tenant-panel__name",
                        color: h.K.Alt2
                    }, this.props.tenant.name)), o.createElement(h._35, {
                        className: "tenant-panel__action",
                        display: h.R.Flex,
                        padding: {
                            y: 1
                        },
                        background: h.n.Alt2,
                        justifyContent: h._7.Center
                    }, o.createElement(h.v, {
                        type: h.B.Hollow,
                        linkTo: this.props.tenant.entryUrl
                    }, o.createElement(h.Q, {
                        transform: h._48.Uppercase
                    }, Object(p.d)("View", "DevTenantPanel"), " ", this.props.tenant.name))))
                }, e = r.__decorate([Object(d.d)("DevTenantPanel", {
                    autoReportInteractive: !0
                })], e)
            }(o.Component),
            _ = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.__extends(e, t), e.prototype.render = function() {
                    var t = this.props.tenants.map(function(t, e) {
                        return o.createElement(h.L, {
                            cols: {
                                default: 12,
                                sm: 6,
                                md: 3
                            },
                            key: e
                        }, o.createElement(h._8, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(l, {
                            tenant: t
                        })))
                    });
                    return o.createElement(h.Y, {
                        gutterSize: h.Z.Small
                    }, t)
                }, e
            }(o.Component),
            v = Object(i.d)(Object(d.d)("DevOverviewPagePresentation", {
                autoReportInteractive: !0
            }))(_),
            f = [{
                name: "Extensions",
                entryUrl: "https://dev.twitch.tv/dashboard/extensions",
                count: 0
            }, {
                name: "Apps",
                entryUrl: "/console/apps",
                count: 0
            }, {
                name: "Games",
                entryUrl: "https://dev.twitch.tv/dashboard/games",
                count: 0
            }, {
                name: "Drops",
                entryUrl: "https://dev.twitch.tv/dashboard/drops",
                count: 0
            }],
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.state = {
                        tenants: f
                    }, e.loadApps = function() {
                        return r.__awaiter(e, void 0, void 0, function() {
                            var t, e;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, c.a.get("/kraken/apps")];
                                    case 1:
                                        return 200 === (t = n.sent()).status && t.body && (e = t.body.apps.filter(function(t) {
                                            return !t.name.startsWith("Extension ")
                                        }), this.updateTenant("Apps", e.length)), [3, 3];
                                    case 2:
                                        return n.sent(), [2];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.updateTenant = function(t, n) {
                        var r, o = e.state.tenants.findIndex(function(e) {
                                return e.name === t
                            }),
                            i = Object.assign({}, e.state.tenants[o], {
                                count: n
                            }),
                            a = Object.assign([], e.state.tenants, ((r = {})[o] = i, r));
                        e.setState({
                            tenants: a
                        })
                    }, e
                }
                return r.__extends(e, t), e.prototype.componentDidMount = function() {
                    this.loadApps()
                }, e.prototype.render = function() {
                    return o.createElement(v, {
                        tenants: this.state.tenants
                    })
                }, e = r.__decorate([Object(d.d)("DevOverviewPage", {
                    destination: s.a.DevSiteOverview
                }), Object(a.a)({
                    location: u.PageviewLocation.DevSiteOverview
                })], e)
            }(o.Component),
            m = Object(i.d)(Object(d.d)("DevOverviewPage", {
                destination: s.a.DevSiteOverview
            }), Object(a.a)({
                location: u.PageviewLocation.DevSiteOverview
            }))(g);
        n.d(e, "DevOverviewPage", function() {
            return m
        })
    },
    "9u8h": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r = n("TToO"),
            o = n("6sO2"),
            i = n("Aj/L"),
            a = function() {
                function t() {}
                return t.get = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(t, r.__assign({}, e, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.getOrThrow = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(t, r.__assign({}, e, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.put = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(t, r.__assign({}, e, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.putOrThrow = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(t, r.__assign({}, e, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.post = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(t, r.__assign({}, e, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.postOrThrow = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(t, r.__assign({}, e, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.delete = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(t, r.__assign({}, e, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.deleteOrThrow = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(t, r.__assign({}, e, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, t.request = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var o, i, a, s;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return e = this.constructOptions(e, n), o = e.headers ? e.headers["Content-Type"] : void 0, i = this.serialize(e.body, o), a = r.__assign({}, e, {
                                        body: i
                                    }), [4, this._fetch(t, a)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, t.requestOrThrow = function(t, e, n) {
                    return void 0 === e && (e = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var o, i;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.request(t, e, n)];
                                case 1:
                                    if ((o = a.sent()).error || o.requestError) throw new Error("Error while making request");
                                    return i = r.__assign({}, o, {
                                        body: o.body
                                    }), [2, Promise.resolve(i)];
                                case 2:
                                    throw a.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.getAPIURL = function(t) {
                    return new URL(t, o.o.config.apiBaseURL)
                }, t.constructLegacyAPIResponse = function(t) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, n, o, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    e = {
                                        status: t.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, t.json()];
                                case 2:
                                    return n = r.sent(), t.ok ? e.body = n : e.error = n, [3, 4];
                                case 3:
                                    return o = r.sent(), t.headers && t.headers.get && (i = t.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (e.requestError = o), [3, 4];
                                case 4:
                                    return [2, e]
                            }
                        })
                    })
                }, t._fetch = function(t, e) {
                    return void 0 === e && (e = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(t).toString(), e)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.constructOptions = function(t, e) {
                    return t = Object.assign({}, t, {
                        headers: r.__assign({}, this.getDefaultHeaders(t, e), t.headers)
                    })
                }, t.serialize = function(t, e) {
                    return "application/json; charset=UTF-8" === e ? JSON.stringify(t) : "string" == typeof t ? t : t && FormData.prototype.isPrototypeOf(t) ? t : t ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: e
                    }), null) : null
                }, t.getDefaultHeaders = function(t, e) {
                    var n = o.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (e.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": o.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    t.body && FormData.prototype.isPrototypeOf(t.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var a = Object(i.c)(n);
                    return a && (r.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (r["Twitch-Api-Token"] = a.legacyCSRFToken)), e.excludeHeaders && e.excludeHeaders.forEach(function(t) {
                        r[t] && delete r[t]
                    }), r
                }, t.logger = o.o.logger.withCategory("legacy-api"), t
            }()
    },
    "j7/Y": function(t, e, n) {
        "use strict";
        var r = n("TToO"),
            o = n("OAwv"),
            i = n("GiK3"),
            a = n("F8kA"),
            s = n("6sO2");

        function c(t) {
            return function(e) {
                var n = function(n) {
                    function a(e) {
                        var o = n.call(this, e) || this;
                        return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                            if (!(o.tracked || t.skip && t.skip(o.props))) {
                                o.tracked = !0;
                                var e = {};
                                "function" == typeof t.properties ? e = t.properties(o.props) : t.properties && (e = r.__assign({}, t.properties));
                                var n = r.__assign({}, o.props);
                                n.location && n.location.state && (e.medium = n.location.state.medium, e.content = n.location.state.content, e.content_index = n.location.state.content_index);
                                var i = o.referenceTracking,
                                    a = i.content,
                                    c = i.medium,
                                    u = i.content_index;
                                s.o.tracking.trackPageview(r.__assign({
                                    content: a,
                                    medium: c,
                                    content_index: u,
                                    location: t.location
                                }, e))
                            }
                        }, s.j.debug("pageViewTracking", t), e.rootLatencyTracker ? e.rootLatencyTracker.setLocation(t.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", t), o
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var t = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(e, n) {
                            "REPLACE" !== n && (t.tracked = !1, t.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return i.createElement(e, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(t) {
                        var e = "" !== t.search ? o.parse(t.search) : {},
                            n = {
                                content: e.tt_content,
                                content_index: e.tt_content_index,
                                medium: e.tt_medium
                            };
                        if (delete e.tt_content, delete e.tt_content_index, delete e.tt_medium, n.medium || n.content) {
                            var r = "",
                                i = o.stringify(e);
                            i.length > 0 && (r = "?" + i), this.props.history.replace({
                                pathname: t.pathname,
                                hash: t.hash,
                                search: r
                            })
                        }
                        return n
                    }, a
                }(i.Component);
                return Object(a.f)(n)
            }
        }
        n.d(e, "a", function() {
            return c
        })
    }
});
//# sourceMappingURL=sites.dev.pages.overview-page-94b2164a7994b8f6c523d90c242d90b7.js.map