webpackJsonp([120], {
    "4I9D": function(e, t) {},
    B65D: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, n = a("TToO"),
            i = a("GiK3"),
            o = a("3zLD"),
            s = a("6sO2"),
            l = a("zCIC"),
            c = a("Th9g"),
            d = a("j7/Y"),
            u = a("w9tK"),
            h = a("vH/s"),
            m = a("CSlQ");
        ! function(e) {
            e.All = "all", e.AdBreaks = "commercial", e.GameCategory = "game_change", e.StreamTitle = "status_change", e.AddEditor = "add_editor", e.RemoveEditor = "remove_editor"
        }(r || (r = {}));
        var g = a("Odds"),
            p = {
                "data-test-selector": "dashboard-activity-filter-select"
            },
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTypeChange = function(e) {
                        t.props.onActionChange(e.target.value)
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.filterAction || r.All;
                    return i.createElement(g._35, {
                        padding: 2,
                        borderBottom: !0
                    }, i.createElement(g._8, {
                        className: "activity-page__select",
                        flexGrow: 0,
                        flexShrink: 0
                    }, i.createElement(g._30, n.__assign({
                        name: "activity_type",
                        onChange: this.handleTypeChange,
                        value: e,
                        disabled: !this.props.enabled
                    }, p), i.createElement("option", {
                        value: r.All
                    }, Object(s.d)("View All", "DashboardActivity")), i.createElement("option", {
                        value: r.AdBreaks
                    }, Object(s.d)("Ad Breaks", "DashboardActivity")), i.createElement("option", {
                        value: r.GameCategory
                    }, Object(s.d)("Game / Category", "DashboardActivity")), i.createElement("option", {
                        value: r.StreamTitle
                    }, Object(s.d)("Stream Title", "DashboardActivity")))))
                }, t
            }(i.PureComponent),
            v = {
                "data-test-selector": "dashboard-activity-no-data"
            },
            f = {
                "data-test-selector": "dashboard-activity-list-select"
            },
            b = "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
            y = "StinkyCheese",
            E = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (0 === this.props.audits.length) return this.renderNotEnoughDataPlaceholder();
                    var t = this.props.audits.map(function(t, a) {
                        var n, o = Object(s.h)(new Date(t.created_at)),
                            l = "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg",
                            c = "unknown user",
                            d = i.createElement(g.Q, {
                                bold: !0
                            }, c);
                        if (e.props.filterAction === r.All || t.action === e.props.filterAction) {
                            switch (t.actor && (l = t.actor.logo, c = t.actor.display_name, d = i.createElement(g.Q, {
                                bold: !0,
                                type: g._49.Span
                            }, i.createElement(g.O, {
                                to: "/" + t.actor.name
                            }, c))), t.action) {
                                case r.AdBreaks:
                                    n = Object(s.d)("{actor} ran a {seconds}s Commercial Break", {
                                        actor: d,
                                        seconds: t.action_value
                                    }, "DashboardActivity");
                                    break;
                                case r.StreamTitle:
                                    n = Object(s.d)("{actor} changed Stream Title to {resultingTitle} from {originalTitle}", {
                                        actor: d,
                                        resultingTitle: t.action_value,
                                        originalTitle: i.createElement("del", null, t.action_value_prev)
                                    }, "DashboardActivity");
                                    break;
                                case r.GameCategory:
                                    n = Object(s.d)("{actor} changed Game/Category to {resultingGameCategory} from {originalGameCategory}", {
                                        actor: d,
                                        resultingGameCategory: t.action_value,
                                        originalGameCategory: i.createElement("del", null, t.action_value_prev)
                                    }, "DashboardActivity");
                                    break;
                                case r.AddEditor:
                                    n = Object(s.d)("{actor} added an editor {editor}", {
                                        actor: d,
                                        editor: t.action_value
                                    }, "DashboardActivity");
                                    break;
                                case r.RemoveEditor:
                                    n = Object(s.d)("{actor} removed an editor {editor}", {
                                        actor: d,
                                        editor: t.action_value
                                    }, "DashboardActivity");
                                    break;
                                default:
                                    n = ""
                            }
                            return i.createElement(g._35, {
                                key: "audit" + a,
                                alignItems: g.c.Center,
                                display: g.R.Flex,
                                background: g.n.Base,
                                borderBottom: !0,
                                padding: {
                                    y: 1
                                }
                            }, i.createElement(g._8, {
                                flexGrow: 0,
                                flexShrink: 0,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(g.m, {
                                src: l,
                                alt: c,
                                size: 40,
                                presenceStatus: g._17.Online,
                                borderRadius: g.t.Small
                            })), i.createElement(g._8, {
                                flexGrow: 1,
                                flexShrink: 1
                            }, i.createElement(g._8, null, i.createElement(g.Q, {
                                color: g.K.Alt,
                                fontSize: g.V.Size5
                            }, n))), i.createElement(g._8, {
                                flexGrow: 0,
                                flexShrink: 0
                            }, i.createElement(g.Q, {
                                color: g.K.Alt2,
                                fontSize: g.V.Size6
                            }, o)))
                        }
                    });
                    return i.createElement(g._8, n.__assign({
                        className: "activity-page__list",
                        flexGrow: 0,
                        flexShrink: 0
                    }, f), t)
                }, t.prototype.renderNotEnoughDataPlaceholder = function() {
                    return i.createElement(g._35, n.__assign({
                        className: "activity-page__no-data",
                        display: g.R.Flex,
                        flexGrow: 1,
                        flexDirection: g.T.Column,
                        alignItems: g.c.Center,
                        alignContent: g.b.Center,
                        justifyContent: g._7.Center,
                        padding: {
                            left: 2,
                            right: 2
                        }
                    }, v), i.createElement(g.m, {
                        src: b,
                        alt: y,
                        size: 50
                    }), i.createElement(g.Q, {
                        color: g.K.Alt2,
                        fontSize: g.V.Size5
                    }, Object(s.d)("Not enough data for us to display", "DashboardActivity")))
                }, t
            }(i.PureComponent),
            A = a("9u8h");
        var S, C = a("pK/l");
        a("4I9D");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
        }(S || (S = {}));
        var w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMore: !1,
                        requestState: S.Loading,
                        list: null,
                        filterAction: r.All
                    }, t.logger = s.j.withCategory("activity-page"), t.handleActionChange = function(e) {
                        t.setState({
                            filterAction: e
                        })
                    }, t.loadMore = function() {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return n.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.state.isLoadingMore) return [3, 5];
                                        this.setState({
                                            isLoadingMore: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.loadAudits()];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.logger.error(e, "unexpected loadMore failure"), [3, 4];
                                    case 4:
                                        this.setState({
                                            isLoadingMore: !1
                                        }), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.loadAudits()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.state.requestState;
                    if (e === S.Loading || e === S.Error) return i.createElement(C.a, null, i.createElement(g._8, {
                        margin: {
                            top: 3,
                            bottom: 1
                        }
                    }, i.createElement(g._14, {
                        height: 448,
                        width: 1040
                    })));
                    var t = this.state.list,
                        a = this.state.requestState === S.Success && this.state.list && this.state.list.audits.length > 0;
                    return i.createElement(C.a, null, i.createElement(g._35, {
                        className: "activity-page",
                        background: g.n.Base,
                        elevation: 1
                    }, i.createElement(_, {
                        filterAction: this.state.filterAction,
                        onActionChange: this.handleActionChange,
                        enabled: a
                    }), i.createElement(g._8, {
                        className: "activity-page__scrollable"
                    }, i.createElement(l.b, {
                        suppressScrollX: !0
                    }, i.createElement(g._8, {
                        padding: {
                            x: 2
                        }
                    }, i.createElement(E, {
                        audits: t.audits,
                        filterAction: this.state.filterAction
                    }), i.createElement(l.a, {
                        enabled: a,
                        loadMore: this.loadMore,
                        orientation: c.b.Down
                    }))))))
                }, t.prototype.loadAudits = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, r;
                        return n.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return e = this.state.list && this.state.list._cursor || null, [4, function(e, t) {
                                        return n.__awaiter(this, void 0, void 0, function() {
                                            var a, r;
                                            return n.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return a = t && "?cursor=" + t || "", [4, A.a.get("/v5/channels/" + e + "/audits" + a)];
                                                    case 1:
                                                        return (r = n.sent()).error || r.requestError ? [2, null] : [2, r.body]
                                                }
                                            })
                                        })
                                    }(this.props.channelID, e)];
                                case 1:
                                    return null === (t = i.sent()) ? (this.setState({
                                        requestState: S.Error,
                                        list: null
                                    }), [2]) : (null === (a = this.state.list) && (a = {
                                        _cursor: "",
                                        audits: []
                                    }), r = {
                                        _cursor: t._cursor,
                                        audits: a.audits.concat(t.audits)
                                    }, this.setState({
                                        requestState: S.Success,
                                        list: r
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(i.PureComponent),
            D = Object(o.compose)(Object(m.d)("ActivityPage", {
                destination: u.a.ChannelDashboardActivity
            }), Object(d.a)({
                location: h.PageviewLocation.Directory
            }))(w);
        a.d(t, "ActivityPage", function() {
            return D
        }), a.d(t, "PublicProps", function() {})
    }
});
//# sourceMappingURL=pages.dashboard-activity-e273a8b14a9808801088a72bf5d0c756.js.map