(window.webpackJsonp = window.webpackJsonp || []).push([
    [206], {
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("cr+I"),
                o = n("q1tI"),
                i = n("wIs1"),
                p = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function i(t) {
                            var a = n.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, a.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var o = a.referenceTracking,
                                        i = o.content,
                                        s = o.medium,
                                        c = o.content_index,
                                        l = o.email_id;
                                    p.p.tracking.trackPageview(r.__assign({
                                        content: i,
                                        medium: s,
                                        content_index: c,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, p.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : p.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return r.__extends(i, n), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return o.createElement(t, r.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    o = a.stringify(t);
                                o.length > 0 && (r = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, i
                    }(o.Component);
                    return Object(i.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        dE6c: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                i = n("V+GM"),
                p = n("Svt6"),
                s = n("NvVO"),
                c = n("2xye"),
                l = n("GnwI"),
                u = n("1mFg"),
                d = n("coZW"),
                m = n("NAv5");

            function h(e, t) {
                return Object(m.format)(e, t)
            }
            var _ = n("Ue10"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDelete = function(e) {
                            e.preventDefault(), t.props.onDelete(t.props.app.id)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = h(new Date(this.props.app.created_at), "MM/DD/YYYY, hh:mm a"),
                            t = h(new Date(this.props.app.updated_at), "MM/DD/YYYY, hh:mm a");
                        return a.createElement(_.Kb, {
                            key: this.props.app.id
                        }, a.createElement(_.Hb, null, this.props.app.name), a.createElement(_.Hb, null, this.props.app.redirect_uri), a.createElement(_.Hb, null, e), a.createElement(_.Hb, null, t), a.createElement(_.Hb, null, a.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Center
                        }, a.createElement(_.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(_.z, {
                            linkTo: "/console/apps/" + this.props.app.id,
                            onClick: Object(d.c)(d.a.AppManage, this.props.app.id),
                            type: _.F.Hollow
                        }, Object(o.d)("Manage", "DevAppListRow"))), a.createElement(_.z, {
                            onClick: this.onDelete,
                            "data-test-selector": "dev-apps-list-row-delete",
                            type: _.F.Hollow
                        }, Object(o.d)("Delete", "DevAppListRow")))))
                    }, t
                }(a.Component),
                f = Object(l.b)("DevAppListRow")(b),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAppRows = function() {
                            return t.props.apps.map(function(e) {
                                return a.createElement(f, {
                                    key: e.id,
                                    app: e,
                                    onDelete: t.props.onDelete
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.renderAppRows();
                        return a.createElement(_.Fb, {
                            alternateRows: !0
                        }, a.createElement(_.Ib, null, a.createElement(_.Jb, {
                            label: Object(o.d)("Name", "DevAppsList")
                        }), a.createElement(_.Jb, {
                            label: Object(o.d)("URL", "DevAppsList")
                        }), a.createElement(_.Jb, {
                            label: Object(o.d)("Date Created", "DevAppsList")
                        }), a.createElement(_.Jb, {
                            label: Object(o.d)("Last Updated", "DevAppsList")
                        }), a.createElement(_.Jb, {
                            label: ""
                        })), a.createElement(_.Gb, null, e))
                    }, t = r.__decorate([Object(l.b)("DevAppsList", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component),
                D = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(_.Xa, {
                            className: "dev-apps"
                        }, a.createElement(_.Pa, {
                            margin: {
                                bottom: 2
                            },
                            display: _.X.Flex,
                            justifyContent: _.Wa.Between
                        }, a.createElement("header", null, a.createElement(_.Xa, null, a.createElement(_.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(_.W, {
                            type: _.Sb.H3
                        }, Object(o.d)("Developer Applications", "DevApps"))), a.createElement(_.W, {
                            type: _.Sb.P
                        }, Object(o.d)("You have registered these apps to use the Twitch API", "DevApps"))), a.createElement(_.Xa, {
                            margin: {
                                bottom: 1
                            },
                            justifyContent: _.Wa.End,
                            display: _.X.Flex
                        }, a.createElement(_.z, {
                            icon: _.rb.Plus,
                            onClick: Object(d.c)(d.a.RegisterApp),
                            linkTo: "/console/apps/create"
                        }, Object(o.d)("Register Your Application", "DevApps"))))), a.createElement(_.Xa, null, a.createElement(v, {
                            apps: this.props.apps,
                            onDelete: this.props.onDelete
                        })))
                    }, t
                }(a.Component),
                y = Object(l.b)("DevAppsComponent", {
                    autoReportInteractive: !0
                })(D),
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            apps: []
                        }, n.onDelete = function(e) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!window.confirm(Object(o.d)("Are you sure you want to delete this App?", "DevApps"))) return [3, 6];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 5, , 6]), [4, Object(u.a)(p.a + "/kraken/apps/" + e, {
                                                method: "DELETE"
                                            })];
                                        case 2:
                                            return 204 !== t.sent().status ? [3, 4] : (Object(d.d)(d.a.AppDelete, e), [4, this.loadApps()]);
                                        case 3:
                                            t.sent(), t.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return t.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, n.loadApps = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), [4, Object(u.a)(p.a + "/kraken/apps")];
                                        case 1:
                                            return 200 !== (e = r.sent()).status ? [3, 3] : [4, e.json()];
                                        case 2:
                                            (t = r.sent()) && (n = t.apps.filter(function(e) {
                                                return !e.name.startsWith("Extension ")
                                            }).sort(function(e, t) {
                                                return new Date(t.updated_at).getTime() - new Date(e.updated_at).getTime()
                                            }), this.setState({
                                                apps: n
                                            })), r.label = 3;
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            return r.sent(), [2];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.loadApps()];
                                    case 1:
                                        return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return a.createElement(y, {
                            apps: this.state.apps,
                            onDelete: this.onDelete
                        })
                    }, t = r.__decorate([Object(l.b)("DevAppsListPage", {
                        destination: s.a.DevSiteApps
                    }), Object(i.a)({
                        location: c.PageviewLocation.DevSiteApps
                    })], t)
                }(a.Component);
            n.d(t, "DevAppsPage", function() {
                return g
            })
        }
    }
]);