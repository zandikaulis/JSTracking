(window.webpackJsonp = window.webpackJsonp || []).push([
    [207], {
        "0xbx": function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var a = n("mrSG"),
                r = n("Svt6"),
                s = n("+GjP"),
                o = n("1mFg");

            function i(t) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var e, n, i;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                e = Object(s.e)(r.a + "/v5/rbac/drops/jwt", {
                                    operation: t
                                }), a.label = 1;
                            case 1:
                                return a.trys.push([1, 6, , 7]), [4, Object(o.a)(e)];
                            case 2:
                                return 200 !== (n = a.sent()).status ? [3, 4] : [4, n.json()];
                            case 3:
                                return i = a.sent(), [2, i.token];
                            case 4:
                                return [2, null];
                            case 5:
                                return [3, 7];
                            case 6:
                                return a.sent(), [2, null];
                            case 7:
                                return [2]
                        }
                    })
                })
            }
        },
        RkBb: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n("mrSG"),
                r = n("q1tI"),
                s = n("/MKj"),
                o = n("fvjX"),
                i = n("V+GM"),
                c = n("Svt6"),
                p = n("NvVO"),
                u = n("2xye"),
                l = n("GnwI"),
                m = n("1mFg"),
                d = n("dEJ+"),
                _ = n("fy8Z"),
                h = n("0xbx"),
                f = n("/7QA"),
                g = n("coZW"),
                v = n("Ue10"),
                y = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return a.__extends(e, t), e.prototype.render = function() {
                        return r.createElement(v.Bb, {
                            className: "tenant-panel",
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            border: !0
                        }, r.createElement(v.Xa, {
                            className: "tenant-panel__info",
                            display: v.X.Block,
                            textAlign: v.Nb.Center,
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 2
                            }
                        }, r.createElement(v.Pa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(v.W, {
                            type: v.Rb.H2,
                            className: "tenant-panel__count",
                            color: v.O.Alt2
                        }, this.props.tenant.count)), r.createElement(v.W, {
                            type: v.Rb.H3,
                            transform: v.Qb.Uppercase,
                            className: "tenant-panel__name",
                            color: v.O.Alt2
                        }, this.props.tenant.name)), r.createElement(v.Bb, {
                            className: "tenant-panel__action",
                            display: v.X.Flex,
                            padding: {
                                y: 1
                            },
                            background: v.r.Alt2,
                            justifyContent: v.Wa.Center
                        }, r.createElement(v.z, {
                            type: v.F.Hollow,
                            onClick: Object(g.c)(this.trackLabel()),
                            linkTo: this.props.tenant.entryUrl
                        }, r.createElement(v.W, {
                            transform: v.Qb.Uppercase
                        }, this.buttonText()))))
                    }, e.prototype.trackLabel = function() {
                        var t = this.props.tenant.name.toLowerCase();
                        if (this.props.company) return Object(g.b)(t);
                        switch (t) {
                            case "games":
                                return g.a.ConsoleRegisterCompanyGames;
                            case "drops":
                                return g.a.ConsoleRegisterCompanyDrops;
                            default:
                                return Object(g.b)(t)
                        }
                    }, e.prototype.buttonText = function() {
                        var t = Object(f.d)("View {tenantName}", {
                            tenantName: this.props.tenant.name
                        }, "DevTenantPanel");
                        if (this.props.company) return t;
                        switch (this.props.tenant.name.toLowerCase()) {
                            case "games":
                            case "drops":
                                return Object(f.d)("Register Company", "DevTenantPanel");
                            default:
                                return t
                        }
                    }, e = a.__decorate([Object(l.b)("DevTenantPanel", {
                        autoReportInteractive: !0
                    })], e)
                }(r.Component),
                b = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return a.__extends(e, t), e.prototype.render = function() {
                        var t = this,
                            e = this.props.tenants.map(function(e, n) {
                                return r.createElement(v.P, {
                                    cols: {
                                        default: 12,
                                        sm: 6,
                                        md: 3
                                    },
                                    key: n
                                }, r.createElement(v.Xa, {
                                    margin: {
                                        bottom: 1
                                    }
                                }, r.createElement(y, {
                                    tenant: e,
                                    company: t.props.company
                                })))
                            });
                        return r.createElement(v.Ja, {
                            gutterSize: v.Ka.Small
                        }, e)
                    }, e
                }(r.Component),
                w = Object(o.compose)(Object(l.b)("DevOverviewPagePresentation", {
                    autoReportInteractive: !0
                }))(b),
                k = [{
                    name: "Extensions",
                    entryUrl: "https://dev.twitch.tv/dashboard/extensions",
                    count: 0
                }, {
                    name: "Apps",
                    entryUrl: "/console/apps",
                    count: 0
                }, {
                    name: "Games",
                    entryUrl: "/console/games",
                    count: 0
                }, {
                    name: "Drops",
                    entryUrl: "/console/drops",
                    count: 0
                }];
            var C = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            tenants: k
                        }, e.loadApps = function() {
                            return a.__awaiter(e, void 0, void 0, function() {
                                var t, e, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 4, , 5]), [4, Object(m.a)(c.a + "/kraken/apps")];
                                        case 1:
                                            return 200 !== (t = a.sent()).status ? [3, 3] : [4, t.json()];
                                        case 2:
                                            (e = a.sent()) && (n = e.apps.filter(function(t) {
                                                return !t.name.startsWith("Extension ")
                                            }), this.updateTenant("Apps", n.length)), a.label = 3;
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            return a.sent(), [2];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, e.loadGames = function() {
                            return a.__awaiter(e, void 0, void 0, function() {
                                var t, e, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.company) return [3, 6];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 5, , 6]), [4, Object(m.a)(c.a + "/v5/rbac/current-games")];
                                        case 2:
                                            return 200 !== (t = a.sent()).status ? [3, 4] : [4, t.json()];
                                        case 3:
                                            (e = a.sent()) && (n = e, this.updateTenant("Games", n._total)), a.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return a.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, e.loadCampaigns = function() {
                            return a.__awaiter(e, void 0, void 0, function() {
                                var t, e, n, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return this.props.company ? [4, Object(h.a)(_.a.GetCampaignsByCompany)] : [3, 4];
                                        case 1:
                                            return (t = a.sent()) ? (e = this.props.company.legacy || !this.props.company.curseCompanyId ? this.props.company.id : this.props.company.curseCompanyId, n = c.a + "/kraken/accounts/" + e + "/campaigns", [4, Object(m.a)(n, {
                                                headers: {
                                                    "X-Twitch-VHSCF": t
                                                }
                                            })]) : [3, 4];
                                        case 2:
                                            return 200 !== (r = a.sent()).status ? [3, 4] : [4, r.json()];
                                        case 3:
                                            s = a.sent(), this.updateTenant("Drops", s._total), a.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e.updateTenant = function(t, n) {
                            var a, r = e.state.tenants.findIndex(function(e) {
                                    return e.name === t
                                }),
                                s = Object.assign({}, e.state.tenants[r], {
                                    count: n
                                }),
                                o = Object.assign([], e.state.tenants, ((a = {})[r] = s, a));
                            e.setState({
                                tenants: o
                            })
                        }, e
                    }
                    return a.__extends(e, t), e.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.loadApps()];
                                    case 1:
                                        return t.sent(), [4, this.loadGames()];
                                    case 2:
                                        return t.sent(), [4, this.loadCampaigns()];
                                    case 3:
                                        return t.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, e.prototype.render = function() {
                        return r.createElement(w, {
                            tenants: this.state.tenants,
                            company: this.props.company
                        })
                    }, e
                }(r.Component),
                j = Object(o.compose)(Object(l.b)("DevOverviewPage", {
                    destination: p.a.DevSiteOverview
                }), Object(i.a)({
                    location: u.PageviewLocation.DevSiteOverview
                }), Object(s.connect)(function(t) {
                    return {
                        company: Object(d.c)(t)
                    }
                }))(C);
            n.d(e, "DevOverviewPageContainer", function() {
                return C
            }), n.d(e, "DevOverviewPage", function() {
                return j
            })
        },
        "V+GM": function(t, e, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
                s = n("q1tI"),
                o = n("wIs1"),
                i = n("/7QA");

            function c(t) {
                return function(e) {
                    var n = function(n) {
                        function o(e) {
                            var r = n.call(this, e) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || t.skip && t.skip(r.props))) {
                                    r.tracked = !0;
                                    var e = {};
                                    "function" == typeof t.properties ? e = t.properties(r.props) : t.properties && (e = a.__assign({}, t.properties));
                                    var n = a.__assign({}, r.props);
                                    n.location && n.location.state && (e.medium = n.location.state.medium, e.content = n.location.state.content, e.content_index = n.location.state.content_index, e.email_id = n.location.state.email_id);
                                    var s = r.referenceTracking,
                                        o = s.content,
                                        c = s.medium,
                                        p = s.content_index,
                                        u = s.email_id;
                                    i.p.tracking.trackPageview(a.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: p,
                                        email_id: u,
                                        location: t.location
                                    }, e))
                                }
                            }, i.k.debug("pageViewTracking", t), e.rootLatencyTracker ? e.rootLatencyTracker.setLocation(t.location) : i.k.warn("No latency tracker exists! This means no data will be sent to Spade.", t), r
                        }
                        return a.__extends(o, n), o.prototype.componentDidMount = function() {
                            var t = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(e, n) {
                                "REPLACE" !== n && (t.tracked = !1, t.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return s.createElement(e, a.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(t) {
                            var e = "" !== t.search ? r.parse(t.search) : {},
                                n = {
                                    content: e.tt_content,
                                    content_index: e.tt_content_index,
                                    medium: e.tt_medium,
                                    email_id: e.tt_email_id
                                };
                            if (delete e.tt_content, delete e.tt_content_index, delete e.tt_medium, delete e.tt_email_id, n.medium || n.content || n.email_id) {
                                var a = "",
                                    s = r.stringify(e);
                                s.length > 0 && (a = "?" + s), this.props.history.replace({
                                    pathname: t.pathname,
                                    hash: t.hash,
                                    search: a
                                })
                            }
                            return n
                        }, o
                    }(s.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(e, "a", function() {
                return c
            })
        },
        fy8Z: function(t, e, n) {
            "use strict";
            var a;
            n.d(e, "a", function() {
                    return a
                }),
                function(t) {
                    t.GetCampaignsByCompany = "get_campaigns_by_account", t.GetCampaignById = "get_campaign_by_id", t.PostCampaign = "post_campaign", t.PutCampaign = "put_campaign", t.GetService = "get_service", t.PutService = "put_service", t.PostCampaignImageUrl = "post_campaign_image_url", t.PostItemImageUrl = "post_item_image_url", t.GetItemsByCompany = "get_all_items", t.GetItemByID = "get_item", t.CreateItem = "create_item", t.UpdateItem = "update_item"
                }(a || (a = {}))
        }
    }
]);