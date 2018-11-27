(window.webpackJsonp = window.webpackJsonp || []).push([
    [181], {
        "9USO": function(e, t, a) {},
        FWE5: function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardActivity_Channel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelName"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelName"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 100
                }
            };
            a.loc.source = {
                body: "query DashboardActivity_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        ffwK: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("oJmH"),
                l = a("/7QA"),
                c = a("8/mp"),
                s = a("HAa/"),
                d = a("yR8l"),
                u = a("V+GM"),
                m = a("NvVO"),
                h = a("2xye"),
                p = a("GnwI");
            ! function(e) {
                e.All = "all", e.AdBreaks = "commercial", e.GameCategory = "game_change", e.StreamTitle = "status_change", e.AddEditor = "add_editor", e.RemoveEditor = "remove_editor"
            }(n || (n = {}));
            var g = a("Ue10"),
                v = {
                    "data-test-selector": "dashboard-activity-filter-select"
                },
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleTypeChange = function(e) {
                            t.props.onActionChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.filterAction || n.All;
                        return i.createElement(g.Fb, {
                            padding: 2,
                            borderBottom: !0
                        }, i.createElement(g.Ya, {
                            className: "activity-page__select",
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(g.Ab, r.__assign({
                            name: "activity_type",
                            onChange: this.handleTypeChange,
                            value: e,
                            disabled: !this.props.enabled
                        }, v), i.createElement("option", {
                            value: n.All
                        }, Object(l.d)("View All", "DashboardActivity")), i.createElement("option", {
                            value: n.AdBreaks
                        }, Object(l.d)("Ad Breaks", "DashboardActivity")), i.createElement("option", {
                            value: n.GameCategory
                        }, Object(l.d)("Game / Category", "DashboardActivity")), i.createElement("option", {
                            value: n.StreamTitle
                        }, Object(l.d)("Stream Title", "DashboardActivity")))))
                    }, t
                }(i.PureComponent),
                f = {
                    "data-test-selector": "dashboard-activity-no-data"
                },
                y = {
                    "data-test-selector": "dashboard-activity-list-select"
                },
                _ = "https://static-cdn.jtvnw.net/emoticons/v1/90076/3.0",
                A = "StinkyCheese",
                E = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (0 === this.props.audits.length) return this.renderNotEnoughDataPlaceholder();
                        var t = this.props.audits.map(function(t, a) {
                            var r, o = Object(l.i)(new Date(t.created_at)),
                                c = "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg",
                                s = "unknown user",
                                d = i.createElement(g.W, {
                                    bold: !0
                                }, s);
                            if (e.props.filterAction === n.All || t.action === e.props.filterAction) {
                                switch (t.actor && (c = t.actor.logo, s = t.actor.display_name, d = i.createElement(g.W, {
                                    bold: !0,
                                    type: g.Wb.Span
                                }, i.createElement(g.U, {
                                    to: "/" + t.actor.name
                                }, s))), t.action) {
                                    case n.AdBreaks:
                                        r = Object(l.d)("{actor} ran a {seconds}s Commercial Break", {
                                            actor: d,
                                            seconds: t.action_value
                                        }, "DashboardActivity");
                                        break;
                                    case n.StreamTitle:
                                        r = Object(l.d)("{actor} changed Stream Title to {resultingTitle} from {originalTitle}", {
                                            actor: d,
                                            resultingTitle: t.action_value,
                                            originalTitle: i.createElement("del", null, t.action_value_prev)
                                        }, "DashboardActivity");
                                        break;
                                    case n.GameCategory:
                                        r = Object(l.d)("{actor} changed Game/Category to {resultingGameCategory} from {originalGameCategory}", {
                                            actor: d,
                                            resultingGameCategory: t.action_value,
                                            originalGameCategory: i.createElement("del", null, t.action_value_prev)
                                        }, "DashboardActivity");
                                        break;
                                    case n.AddEditor:
                                        r = Object(l.d)("{actor} added an editor {editor}", {
                                            actor: d,
                                            editor: t.action_value
                                        }, "DashboardActivity");
                                        break;
                                    case n.RemoveEditor:
                                        r = Object(l.d)("{actor} removed an editor {editor}", {
                                            actor: d,
                                            editor: t.action_value
                                        }, "DashboardActivity");
                                        break;
                                    default:
                                        r = ""
                                }
                                return i.createElement(g.Fb, {
                                    key: "audit" + a,
                                    alignItems: g.f.Center,
                                    display: g.X.Flex,
                                    background: g.r.Base,
                                    borderBottom: !0,
                                    padding: {
                                        y: 1
                                    }
                                }, i.createElement(g.Ya, {
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    margin: {
                                        right: 1
                                    }
                                }, i.createElement(g.q, {
                                    src: c,
                                    alt: s,
                                    size: 40,
                                    presenceStatus: g.mb.Online,
                                    borderRadius: g.x.Small
                                })), i.createElement(g.Ya, {
                                    flexGrow: 1,
                                    flexShrink: 1
                                }, i.createElement(g.Ya, null, i.createElement(g.W, {
                                    color: g.O.Alt,
                                    fontSize: g.Ca.Size5
                                }, r))), i.createElement(g.Ya, {
                                    flexGrow: 0,
                                    flexShrink: 0
                                }, i.createElement(g.W, {
                                    color: g.O.Alt2,
                                    fontSize: g.Ca.Size6
                                }, o)))
                            }
                        });
                        return i.createElement(g.Ya, r.__assign({
                            className: "activity-page__list",
                            flexGrow: 0,
                            flexShrink: 0
                        }, y), t)
                    }, t.prototype.renderNotEnoughDataPlaceholder = function() {
                        return i.createElement(g.Fb, r.__assign({
                            className: "activity-page__no-data",
                            display: g.X.Flex,
                            flexGrow: 1,
                            flexDirection: g.Aa.Column,
                            alignItems: g.f.Center,
                            alignContent: g.e.Center,
                            justifyContent: g.Xa.Center,
                            padding: {
                                left: 2,
                                right: 2
                            }
                        }, f), i.createElement(g.q, {
                            src: _,
                            alt: A,
                            size: 50
                        }), i.createElement(g.W, {
                            color: g.O.Alt2,
                            fontSize: g.Ca.Size5
                        }, Object(l.d)("Not enough data for us to display", "DashboardActivity")))
                    }, t
                }(i.PureComponent),
                k = a("b6Yk");
            var S, w = a("IFXb"),
                C = a("FWE5");
            a("9USO");
            ! function(e) {
                e[e.Error = 0] = "Error", e[e.Loading = 1] = "Loading", e[e.Success = 2] = "Success"
            }(S || (S = {}));
            var N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            filterAction: n.All,
                            isLoadingMore: !1,
                            list: {
                                _cursor: null,
                                audits: []
                            },
                            requestState: S.Loading
                        }, t.logger = l.k.withCategory("activity-page"), t.handleActionChange = function(e) {
                            t.setState({
                                filterAction: e
                            })
                        }, t.loadMore = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return l.p.setPageTitle(Object(l.d)("Activity", "ActivityPage")), this.props.data.loading ? [3, 2] : [4, this.loadAudits()];
                                    case 1:
                                        e.sent(), this.props.latencyTracking.reportInteractive(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return !e.data.loading || this.props.data.loading ? [3, 2] : [4, this.loadAudits()];
                                    case 1:
                                        t.sent(), this.props.latencyTracking.reportInteractive(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.requestState;
                        if (this.props.data.loading || e === S.Loading || e === S.Error) return i.createElement(w.a, null, i.createElement(g.Ya, {
                            margin: {
                                top: 3,
                                bottom: 1
                            }
                        }, i.createElement(g.jb, {
                            height: 448,
                            width: 1040
                        })));
                        var t = this.state,
                            a = t.filterAction,
                            n = t.list,
                            r = e === S.Success && n.audits.length > 0;
                        return i.createElement(w.a, null, i.createElement(g.Fb, {
                            className: "activity-page",
                            background: g.r.Base,
                            elevation: 1,
                            overflow: g.db.Hidden
                        }, i.createElement(b, {
                            filterAction: a,
                            onActionChange: this.handleActionChange,
                            enabled: r
                        }), i.createElement(g.Ya, {
                            className: "activity-page__scrollable",
                            overflow: g.db.Hidden
                        }, i.createElement(c.b, {
                            suppressScrollX: !0
                        }, i.createElement(g.Ya, {
                            padding: {
                                x: 2
                            }
                        }, i.createElement(E, {
                            audits: n.audits,
                            filterAction: a
                        }), i.createElement(c.a, {
                            enabled: r,
                            loadMore: this.loadMore,
                            orientation: s.b.Down
                        }))))))
                    }, t.prototype.loadAudits = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = this.state.list._cursor || null, [4, function(e, t) {
                                            return r.__awaiter(this, void 0, Promise, function() {
                                                var a, n;
                                                return r.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return a = t && "?cursor=" + t || "", [4, k.a.get("/v5/channels/" + e + "/audits" + a)];
                                                        case 1:
                                                            return (n = r.sent()).error || n.requestError ? [2, null] : [2, n.body]
                                                    }
                                                })
                                            })
                                        }(this.props.data.channel.id, e)];
                                    case 1:
                                        return null === (t = a.sent()) ? (this.setState({
                                            requestState: S.Error
                                        }), [2]) : (this.setState(function(e) {
                                            return {
                                                list: {
                                                    _cursor: t._cursor,
                                                    audits: e.list.audits.concat(t.audits)
                                                },
                                                requestState: S.Success
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t
                }(i.PureComponent),
                D = Object(o.compose)(Object(d.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }), Object(p.b)("ActivityPage", {
                    destination: m.a.ChannelDashboardActivity
                }), Object(u.a)({
                    location: h.PageviewLocation.DashboardActivity
                }))(N);
            a.d(t, "ActivityPage", function() {
                return D
            }), a.d(t, "PublicProps", function() {})
        }
    }
]);