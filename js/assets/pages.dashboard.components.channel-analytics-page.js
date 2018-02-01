webpackJsonp([77], {
    ELpn: function(e, t) {},
    UVy3: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            void 0 === n && (n = new Date);
            var a = s.__assign({}, e, t);
            if (Object(f.differenceInDays)(a.end, a.start) >= 0) return a;
            var i = Object(f.differenceInDays)(e.end, e.start);
            if (Object(f.isEqual)(e.end, a.end)) {
                var r = Object(f.startOfDay)(n),
                    o = Object(f.addDays)(a.start, i);
                return o > r && (o = r), s.__assign({}, a, {
                    end: o
                })
            }
            return Object(f.isEqual)(e.start, a.start) ? s.__assign({}, a, {
                start: Object(f.subDays)(a.end, i)
            }) : e
        }

        function i(e) {
            if (e) {
                var t = Object(f.parse)(e);
                if (Object(f.isValid)(t)) return t
            }
        }

        function r(e) {
            if (e) return Object(f.format)(e, "YYYY-MM-DD")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("TToO"),
            o = n("U7vG"),
            l = n("2KeS"),
            c = n("6sO2"),
            p = n("7vx8"),
            d = n("j7/Y"),
            u = n("w9tK"),
            m = n("vH/s"),
            h = n("CSlQ"),
            f = n("wuJz"),
            g = n("3zLD"),
            v = n("6UW8"),
            y = (n("eZz2"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        null === e ? t._picker.destroy() : (t._picker = new v({
                            onSelect: t.props.onChange,
                            theme: "inline",
                            minDate: t.props.minDate,
                            maxDate: t.props.maxDate,
                            defaultDate: t.props.date,
                            startRange: t.props.startRange,
                            endRange: t.props.endRange,
                            setDefaultDate: !0
                        }), e.appendChild(t._picker.el))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = !1;
                    this.props.date !== e.date && (this._picker.setDate(e.date, !0), t = !0), this.props.startRange !== e.startRange && (this._picker.setStartRange(e.startRange), t = !0), this.props.endRange !== e.endRange && (this._picker.setEndRange(e.endRange), t = !0), e.minDate && this.props.minDate !== e.minDate && (this._picker.setMinDate(e.minDate), t = !0), e.maxDate && this.props.maxDate !== e.maxDate && (this._picker.setMaxDate(e.maxDate), t = !0), t && this._picker.draw(!1)
                }, t.prototype.render = function() {
                    return o.createElement("div", {
                        ref: this.setContainerRef
                    })
                }, t
            }(o.Component)),
            D = 28,
            b = n("Odds"),
            C = {
                "data-test-selector": "commit-button"
            },
            _ = {
                "data-test-selector": "cancel-button"
            },
            E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleStartChange = function(e) {
                        var t = a(n.state.interval, {
                            start: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleEndChange = function(e) {
                        var t = a(n.state.interval, {
                            end: e
                        });
                        n.setState({
                            interval: t
                        })
                    }, n.handleUpdateClick = function() {
                        n.props.onCommit(n.state.interval)
                    }, n.state = {
                        interval: n.props.interval
                    }, n
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = new Date;
                    return o.createElement("div", null, o.createElement(b.V, {
                        display: b.H.Flex,
                        flexWrap: b.K.NoWrap,
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(b.V, {
                        padding: {
                            right: 2
                        }
                    }, o.createElement(y, {
                        date: this.state.interval.start,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: Object(f.subDays)(e, 90),
                        maxDate: e,
                        onChange: this.handleStartChange
                    })), o.createElement(y, {
                        date: this.state.interval.end,
                        startRange: this.state.interval.start,
                        endRange: this.state.interval.end,
                        minDate: this.state.interval.start,
                        maxDate: e,
                        onChange: this.handleEndChange
                    })), o.createElement(b.V, {
                        display: b.H.Flex,
                        justifyContent: b.U.Center
                    }, o.createElement(b.V, {
                        margin: {
                            right: 2
                        }
                    }, o.createElement(b.u, s.__assign({}, C, {
                        onClick: this.handleUpdateClick
                    }), Object(c.d)("Update", "ChannelAnalyticsDateRangePicker"))), o.createElement(b.u, s.__assign({}, _, {
                        type: b.z.Text,
                        onClick: this.props.onDismiss
                    }), Object(c.d)("Clear", "ChannelAnalyticsDateRangePicker"))))
                }, t
            }(o.Component),
            k = n("ylrR"),
            O = n("9uzc"),
            R = {
                "data-test-selector": "time-range"
            },
            j = {
                "data-test-selector": "total-days"
            },
            x = {
                "data-test-selector": "date-picker-toggle"
            },
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.urlStore;
                    return o.createElement(b.V, {
                        position: b._4.Relative
                    }, o.createElement(k.a, {
                        control: function(n) {
                            var a = n.toggle;
                            return o.createElement(O.a, {
                                previousPath: "",
                                nextPath: ""
                            }, o.createElement(b.u, s.__assign({}, x, {
                                type: b.z.Text,
                                onClick: a,
                                fullWidth: !0
                            }), o.createElement(b._23, s.__assign({}, R, {
                                fontSize: 4
                            }), e.formatDateRange(t)), o.createElement(b._23, s.__assign({}, j, {
                                fontSize: 6,
                                color: b.F.Alt2
                            }), e.formatDaysInRange(t))))
                        }
                    }, function(n) {
                        var a = n.close;
                        return o.createElement(b.p, {
                            noTail: !0,
                            show: !0,
                            direction: b.q.BottomCenter
                        }, o.createElement(b.V, {
                            padding: {
                                top: 2,
                                right: 2,
                                bottom: 1,
                                left: 2
                            }
                        }, o.createElement(E, {
                            interval: t,
                            onCommit: Object(g.compose)(a, e.props.urlStore.update),
                            onDismiss: a
                        })))
                    }))
                }, t.prototype.formatDateRange = function(e) {
                    return 1 === Object(f.differenceInDays)(e.end, e.start) + 1 ? Object(c.c)(e.start, "medium") : Object(c.d)("{start, date, medium} – {end, date, medium}", {
                        start: e.start,
                        end: e.end
                    }, "ChannelAnalyticsNavBar")
                }, t.prototype.formatDaysInRange = function(e) {
                    var t = Object(f.differenceInDays)(e.end, e.start) + 1;
                    return Object(c.d)("{numDays, plural, one {# day} other {# days}}", {
                        numDays: t
                    }, "ChannelAnalyticsNavBar")
                }, t
            }(o.Component),
            S = n("a+9f"),
            A = n("FeZP"),
            w = function(e) {
                var t = e.channel,
                    n = e.topClips;
                if (n.isLoading) return o.createElement(b.V, {
                    margin: {
                        bottom: 2
                    }
                }, o.createElement(b._3, {
                    height: 448
                }));
                if (!n.isLoading && !n.clips.length) return o.createElement("span", null);
                var a = Object(c.d)("View Details", "ChannelAnalyticsTopClipsPanelCTA");
                return o.createElement(b.V, {
                    margin: {
                        top: 0,
                        left: .5,
                        right: .5,
                        bottom: 2
                    }
                }, o.createElement(b.V, {
                    margin: {
                        bottom: 1
                    },
                    padding: {
                        x: 2,
                        top: 2
                    }
                }, o.createElement(b._23, {
                    type: b._28.H4,
                    bold: !0
                }, Object(c.d)("What were my top clips?", "ChannelAnalyticsTopClipsTitle"))), o.createElement(b._19, {
                    elevation: 1,
                    background: b.m.Base
                }, o.createElement(b.V, {
                    padding: {
                        top: .5
                    }
                }, o.createElement(V, {
                    clipsAttrs: n
                }), t ? o.createElement(A.a, {
                    message: a,
                    url: "/" + t + "/manager/clips/channel"
                }) : o.createElement("p", null, a))))
            },
            V = function(e) {
                if (e.clipsAttrs.isLoading)
                    for (var t = [], n = 0; n < 5; n++) t.push(o.createElement(b._19, {
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        key: n
                    }, o.createElement(b._3, {
                        height: 50
                    })));
                return o.createElement("span", null, e.clipsAttrs.clips.slice(0, 5).map(function(e, t) {
                    return o.createElement(S.a, s.__assign({}, e, {
                        key: t
                    }))
                }))
            },
            P = n("OAwv"),
            T = function() {
                function e(e, t) {
                    var n = this;
                    this.location = e, this.history = t, this.update = function(e) {
                        var t = s.__assign({
                            start: n.start,
                            end: n.end
                        }, e);
                        n.history.push(n.location.pathname + "?" + function(e) {
                            return P.stringify({
                                start: r(e.start),
                                end: r(e.end)
                            })
                        }(t))
                    }, this.location = e, this.history = t;
                    var a = P.parse(e.search);
                    this.start = i(a.start) || Object(f.subDays)(new Date, D - 1), this.end = i(a.end) || new Date
                }
                return e.fromRouter = function(t) {
                    return new e(t.location, t.history)
                }, e
            }(),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = new T(this.props.location, this.props.history);
                    return this.isValidDateRange(e) ? this.props.children(e) : (e.update({
                        start: void 0,
                        end: void 0
                    }), null)
                }, t.prototype.isValidDateRange = function(e) {
                    var t = this.dateLimits,
                        n = t.min,
                        a = t.max;
                    return e.start <= e.end && e.start >= n && e.end <= a
                }, Object.defineProperty(t.prototype, "dateLimits", {
                    get: function() {
                        var e = this.props.now || new Date;
                        return {
                            min: Object(f.startOfDay)(Object(f.subDays)(e, 89)),
                            max: e
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component),
            F = n("AJEV"),
            W = n("pDcl"),
            q = n("7qqA"),
            z = n("DNvj"),
            I = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        topClips: {
                            clips: [],
                            isLoading: !0
                        }
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTopClips()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    Object(F.f)(this.props.timeRange, e.timeRange) || this.fetchTopClips()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channel ? o.createElement(q.a, {
                        timeRange: this.props.timeRange,
                        channelName: this.props.channel.name
                    }, function(t) {
                        return o.createElement("span", null, e.props.children(s.__assign({}, e.state, {
                            streamSummaries: t.streamSummaries
                        })))
                    }) : o.createElement("span", null)
                }, t.prototype.fetchTopClips = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return s.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.channel ? (this.setState({
                                        topClips: {
                                            clips: [],
                                            isLoading: !0
                                        }
                                    }), [4, Object(z.a)(this.props.channel.name, this.props.timeRange)]) : [2];
                                case 1:
                                    return (e = t.sent()).isError ? [2] : (this.setState({
                                        topClips: {
                                            clips: e.topClips,
                                            isLoading: !1
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, t
            }(o.Component),
            M = (n("ELpn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Channel Analytics", "DashboardChannelAnalyticsPage"))
                }, t.prototype.render = function() {
                    if (!this.props.data.channel) return null;
                    var e = F.c.fromChannelData(this.props.data.channel);
                    return o.createElement(b.V, {
                        padding: 4,
                        className: "channel-analytics-page__width"
                    }, o.createElement(L, {
                        location: this.props.location,
                        history: this.props.history
                    }, function(t) {
                        return o.createElement("div", null, o.createElement(N, {
                            urlStore: t
                        }), o.createElement(b._19, {
                            margin: {
                                bottom: 1
                            },
                            display: b.H.Flex,
                            flexDirection: b.J.Column,
                            flexWrap: b.K.NoWrap,
                            alignItems: b.c.Stretch,
                            breakpointMedium: {
                                flexDirection: b.J.Row
                            }
                        }, o.createElement(b.V, {
                            display: b.H.Flex,
                            flexGrow: 1,
                            flexWrap: b.K.NoWrap,
                            flexDirection: b.J.Column
                        }, o.createElement(I, {
                            timeRange: t,
                            channel: e
                        }, function(t) {
                            return o.createElement("div", null, o.createElement(w, {
                                channel: e.name,
                                topClips: t.topClips
                            }), o.createElement("span", null, "insert more cards here"))
                        }))))
                    }))
                }, t
            }(o.Component)),
            U = Object(l.d)(Object(p.a)(W, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }), Object(h.d)("ChannelAnalyticsPage", {
                destination: u.a.ChannelDashboardChannelAnalytics,
                autoReportInteractive: !0
            }), Object(d.a)({
                location: m.PageviewLocation.DashboardChannelAnalytics
            }))(M);
        n.d(t, "ChannelAnalyticsPageComponent", function() {
            return M
        }), n.d(t, "ChannelAnalyticsPage", function() {
            return U
        })
    },
    pDcl: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardChannelAnalytics_Channel"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 146
            }
        };
        n.loc.source = {
            body: "query DashboardChannelAnalytics_Channel($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nlogin\nroles {\nisPartner\nisAffiliate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dashboard.components.channel-analytics-page-3677ddbb67e325474d64665c1619794a.js.map