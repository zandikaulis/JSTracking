(window.webpackJsonp = window.webpackJsonp || []).push([
    [32], {
        "4/kP": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_SetSessionStatus"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SetSessionStatusInput"
                                }
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
                                value: "setSessionStatus"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "setAgainInSeconds"
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
                    end: 127
                }
            };
            n.loc.source = {
                body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\nsetSessionStatus(input: $input) {\nsetAgainInSeconds\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Msj/": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("/7QA"),
                r = "desktop.performance.SAMPLES_LOADED",
                s = "desktop.performance.APP_LOAD_METRIC_UPDATED";

            function o(e) {
                return {
                    type: r,
                    samples: e
                }
            }

            function l(e) {
                return {
                    type: s,
                    desktopAppLoadDuration: e || void 0
                }
            }
            var c = n("DiGQ");

            function u(e) {
                return e.desktopPerformance.samples
            }

            function p(e) {
                return e.desktopPerformance.appLoadDuration
            }
            i.p.store.registerReducer("desktopPerformance", function(e, t) {
                switch (void 0 === e && (e = {
                    appLoadDuration: {
                        latencyStatus: c.a.Unknown
                    },
                    samples: {
                        customEvents: {},
                        electronTotalDuration: {
                            latencyStatus: c.a.Unknown
                        },
                        firstPaintDuration: {
                            latencyStatus: c.a.Unknown
                        },
                        launcherTotalDuration: {
                            latencyStatus: c.a.Unknown
                        },
                        updateDuration: {
                            latencyStatus: c.a.Unknown
                        }
                    }
                }), t.type) {
                    case s:
                        return a.__assign({}, e, {
                            appLoadDuration: t.desktopAppLoadDuration
                        });
                    case r:
                        return a.__assign({}, e, {
                            samples: a.__assign({}, t.samples)
                        });
                    default:
                        return e
                }
            });
            var m, d, f, h, b, v = n("/MKj"),
                y = n("fvjX"),
                g = n("q1tI");
            ! function(e) {
                e.AppLoaded = "desktop_benchmark_app_loaded"
            }(m || (m = {})),
            function(e) {
                e.AppLoaded = "App Loaded"
            }(d || (d = {})),
            function(e) {
                e.ShowWindow = "show-window"
            }(f || (f = {})),
            function(e) {
                e.WindowShown = "window-shown", e.Update = "update", e.ElectronLaunched = "electron-launched"
            }(h || (h = {})),
            function(e) {
                e.Electron = "electron", e.Launcher = "launcher"
            }(b || (b = {}));
            var _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.init()
                }, t.prototype.componentDidUpdate = function() {
                    this.updateAppLoaded()
                }, t.prototype.render = function() {
                    return null
                }, t.prototype.init = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, s, o, l, u, p, d, v, y, g = this;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!i.p.integrations.performance) return [2];
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, i.p.integrations.performance.getPerfSamples()];
                                case 2:
                                    for (e = a.sent(), t = this.props.samples.customEvents, n = this.props.samples.firstPaintDuration, r = this.props.samples.electronTotalDuration, s = this.props.samples.launcherTotalDuration, o = this.props.samples.updateDuration, l = void 0, u = void 0, e.timestamps && (l = e.timestamps.electronProcessStartTime, u = e.timestamps.launcherProcessStartTime), p = 0, d = e.samples; p < d.length; p++) v = d[p], this.addCustomEvent(v, t), v.group === b.Launcher && v.key === h.WindowShown && u && (n = {
                                        value: v.startTime - u + v.duration,
                                        latencyStatus: c.a.Pass
                                    }), v.group === b.Electron && v.key === m.AppLoaded && this.props.updateAppLoadMetric({
                                        value: v.duration,
                                        latencyStatus: c.a.Pass
                                    }), v.group === b.Launcher && v.key === h.ElectronLaunched && u && (s = {
                                        value: v.startTime - u + v.duration,
                                        latencyStatus: c.a.Pass
                                    }), v.group === b.Launcher && v.key === h.Update && u && (o = {
                                        value: v.duration,
                                        latencyStatus: c.a.Pass
                                    }), v.group === b.Electron && v.key === f.ShowWindow && l && (r = {
                                        value: v.startTime - l + v.duration,
                                        latencyStatus: c.a.Pass
                                    });
                                    return i.p.benchmarking.getRootLatencyTracker().subscribeToUpdates(function() {
                                        return g.updateAppLoaded()
                                    }), this.props.loadSamples({
                                        customEvents: t,
                                        firstPaintDuration: n,
                                        electronTotalDuration: r,
                                        launcherTotalDuration: s,
                                        updateDuration: o,
                                        electronProcessStartTime: l,
                                        launcherProcessStartTime: u
                                    }), [3, 4];
                                case 3:
                                    return y = a.sent(), i.p.logger.error(y, "Unable to fetch performance metrics."), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.addCustomEvent = function(e, t) {
                    var n = e.group.charAt(0).toUpperCase() + e.group.substr(1),
                        a = e.label,
                        i = {
                            benchmark: Number.MAX_SAFE_INTEGER,
                            duration: {
                                value: e.duration,
                                latencyStatus: c.a.Pass
                            },
                            group: n,
                            key: e.key,
                            label: a,
                            startTime: e.startTime
                        };
                    t[i.group] || (t[i.group] = []), t[i.group].push(i)
                }, t.prototype.updateAppLoaded = function() {
                    var e = i.p.benchmarking.getRootLatencyTracker();
                    if (this.props.samples.launcherProcessStartTime && this.props.appLoadDuration.latencyStatus === c.a.Unknown && e.isFirstLoad && e.getCompletedTimestamp()) {
                        var t = {
                            value: e.getCompletedTimestamp() - this.props.samples.launcherProcessStartTime,
                            latencyStatus: c.a.Pass
                        };
                        if (i.p.integrations.performance && i.p.integrations.performance.getPreloadStartTime) {
                            var n = e.getRootInitTimestamp() - this.props.samples.launcherProcessStartTime,
                                a = i.p.integrations.performance.getPreloadStartTime(),
                                r = {
                                    startTime: this.props.samples.launcherProcessStartTime,
                                    duration: t.value,
                                    isKeyMetric: !0,
                                    group: b.Electron,
                                    key: m.AppLoaded,
                                    label: d.AppLoaded
                                };
                            i.p.integrations.performance.setStartupSamples({
                                samples: [r]
                            }), i.p.tracking.trackDesktopBenchmark(m.AppLoaded, {
                                duration: t.value,
                                twilight_relative_start_time: n,
                                preload_relative_start_time: a
                            })
                        }
                        this.props.updateAppLoadMetric(t)
                    }
                }, t
            }(g.Component);
            var S = Object(v.connect)(function(e) {
                    return {
                        appLoadDuration: p(e),
                        samples: u(e)
                    }
                }, function(e) {
                    return Object(y.bindActionCreators)({
                        loadSamples: o,
                        updateAppLoadMetric: l
                    }, e)
                })(_),
                k = n("8/mp"),
                E = n("j9uj"),
                T = n("Ue10"),
                w = "twilight.desktop-tab",
                N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderTabButton = function(e, t, a) {
                            var i = n.state.selectedTab === e;
                            return g.createElement(T.Cb, {
                                active: i,
                                onClick: function() {
                                    return n.onClickTab(e)
                                }
                            }, g.createElement(T.Xa, {
                                display: T.X.Flex
                            }, t, a && n.renderTabBubble(a)))
                        }, n.renderTabBubble = function(e) {
                            return g.createElement(T.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, g.createElement(T.eb, {
                                label: e.toString(),
                                type: T.fb.Notification
                            }))
                        }, n.onClickTab = function(e) {
                            i.m.set(w, e), n.setState({
                                selectedTab: e
                            })
                        }, n.state = {
                            selectedTab: i.m.get(w, "overview")
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return g.createElement(T.Xa, {
                            display: T.X.Flex,
                            flexDirection: T.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__header-container",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap,
                            alignItems: T.f.Start
                        }, g.createElement(T.Db, null, this.renderTabButton("overview", "Overview"), this.props.samples.electronProcessStartTime && this.renderTabButton("electron", "Electron"), this.props.samples.launcherProcessStartTime && this.renderTabButton("launcher", "Launcher"))), g.createElement(T.Xa, {
                            className: "latency-metrics__body",
                            display: T.X.Flex,
                            flexDirection: T.Aa.Column,
                            flexGrow: 1,
                            overflow: T.cb.Hidden,
                            fullHeight: !0
                        }, g.createElement(k.b, {
                            className: "latency-metrics__scroller"
                        }, g.createElement(T.Xa, {
                            margin: {
                                y: 1,
                                right: 1
                            }
                        }, this.renderTabContent(this.state.selectedTab)))))
                    }, t.prototype.renderTabContent = function(e) {
                        switch (e) {
                            case "overview":
                                return this.renderOverviewTab();
                            case "electron":
                                return this.renderCustomEventGroup(this.props.samples.customEvents.Electron);
                            case "launcher":
                                return this.renderCustomEventGroup(this.props.samples.customEvents.Launcher);
                            default:
                                return null
                        }
                    }, t.prototype.renderOverviewTab = function() {
                        return g.createElement(T.Xa, null, g.createElement(T.Xa, {
                            className: "latency-metrics__item",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap
                        }, g.createElement(T.Ub, {
                            label: "= Launcher Window Shown - Launcher Start Time",
                            direction: T.Wb.Right
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, g.createElement("span", null, "First Paint"))), g.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? g.createElement(E.a, {
                            metric: this.props.samples.firstPaintDuration
                        }) : g.createElement("span", null, "n/a"))), g.createElement(T.Xa, {
                            className: "latency-metrics__item",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap
                        }, g.createElement(T.Ub, {
                            label: "= Twilight Complete - Launcher Start",
                            direction: T.Wb.Right
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, g.createElement("span", null, "Loaded"))), g.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? g.createElement(E.a, {
                            metric: this.props.appLoadDuration
                        }) : g.createElement("span", null, "n/a"))), g.createElement(T.Xa, {
                            className: "latency-metrics__item",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap
                        }, g.createElement(T.Ub, {
                            label: "= Launcher End Update - Launcher Start Update",
                            direction: T.Wb.Right
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, g.createElement("span", null, "Update Time"))), g.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? g.createElement(E.a, {
                            metric: this.props.samples.updateDuration
                        }) : g.createElement("span", null, "n/a"))), g.createElement(T.Xa, {
                            className: "latency-metrics__item",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap
                        }, g.createElement(T.Ub, {
                            label: "= Electron Launch - Launcher Process Start",
                            direction: T.Wb.Right
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, g.createElement("span", null, "Launcher Total"))), g.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? g.createElement(E.a, {
                            metric: this.props.samples.launcherTotalDuration
                        }) : g.createElement("span", null, "n/a"))), g.createElement(T.Xa, {
                            className: "latency-metrics__item",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap
                        }, g.createElement(T.Ub, {
                            label: "= Show Window - Electron Process Start",
                            direction: T.Wb.Right
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, g.createElement("span", null, "Electron Total"))), g.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, g.createElement(E.a, {
                            metric: this.props.samples.electronTotalDuration
                        }))))
                    }, t.prototype.renderCustomEventGroup = function(e) {
                        var t = this;
                        return e && e.length ? (e = e.sort(function(e, t) {
                            return e.startTime - t.startTime
                        })).map(function(e) {
                            return t.renderEvent(e)
                        }) : null
                    }, t.prototype.renderEvent = function(e) {
                        return g.createElement(T.Xa, {
                            key: e.key,
                            className: "latency-metrics__item",
                            display: T.X.Flex,
                            justifyContent: T.Wa.Between,
                            flexWrap: T.Ba.NoWrap
                        }, g.createElement(T.Ub, {
                            label: "Start Time: " + e.startTime,
                            direction: T.Wb.Right
                        }, g.createElement(T.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, g.createElement("span", null, e.label))), g.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, g.createElement(E.a, {
                            metric: e.duration
                        })))
                    }, t
                }(g.Component);
            var D = Object(v.connect)(function(e) {
                    return {
                        appLoadDuration: p(e),
                        samples: u(e)
                    }
                })(N),
                L = n("daa2"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setInitialActivity = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!i.p.integrations.process || !i.p.integrations.process.getIdleState) return [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, i.p.integrations.process.getIdleState()];
                                        case 2:
                                            return e = n.sent(), this.setAvailability(!e.isIdle), [3, 4];
                                        case 3:
                                            return t = n.sent(), i.k.error(t, 'Unable to fetch the initial idle state. Falling back to "available."'), Object(L.b)(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.setAvailability = function(e) {
                            e ? Object(L.b)() : Object(L.d)()
                        }, t.onIdleChanged = function(e) {
                            t.setAvailability(!e.isIdle)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        i.p.integrations.process && i.p.integrations.process.onIdleChanged && (this.unsubscribeIdleChange = i.p.integrations.process.onIdleChanged(this.onIdleChanged), this.setInitialActivity())
                    }, t.prototype.componentWillUnmount = function() {
                        this.unsubscribeIdleChange && this.unsubscribeIdleChange()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(g.Component);
            n.d(t, "DesktopBenchmarkingManager", function() {
                return S
            }), n.d(t, "DesktopInformation", function() {
                return D
            }), n.d(t, "DesktopUserActivityTracking", function() {
                return I
            })
        },
        NSwr: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = {
                Away: "AWAY",
                Busy: "BUSY",
                Idle: "IDLE",
                Invisible: "INVISIBLE",
                Offline: "OFFLINE",
                Online: "ONLINE"
            }
        },
        RmgP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "TopNav_User_UpdateVisibility"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UpdateVisibilityInput"
                                }
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
                                value: "updateVisibility"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
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
                                        value: "user"
                                    },
                                    arguments: [],
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
                                                value: "availability"
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
                    end: 134
                }
            };
            n.loc.source = {
                body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\nupdateVisibility(input: $input) {\nuser {\nid\navailability\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        daa2: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return f
            }), n.d(t, "e", function() {
                return h
            }), n.d(t, "c", function() {
                return b
            }), n.d(t, "b", function() {
                return v
            }), n.d(t, "d", function() {
                return y
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "g", function() {
                return _
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("NSwr"),
                s = n("kRBY"),
                o = n("4/kP"),
                l = n("RmgP"),
                c = "twilight.sessionID",
                u = 0,
                p = i.k.withCategory("Session Status"),
                m = {
                    sessionID: i.p.session.tabID,
                    availability: "",
                    activity: null
                },
                d = m;

            function f(e) {
                return p.debug("Updating activity", e), d = a.__assign({}, d, {
                    activity: e
                }), S()
            }

            function h(e) {
                return p.debug("Updating visibility", e),
                    function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!Object(s.f)(i.p.store.getState())) return [2];
                                        p.debug("Setting visibility on server", {
                                            visibility: e
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, i.p.apollo.client.mutate({
                                            mutation: l,
                                            variables: {
                                                input: {
                                                    visibility: e
                                                }
                                            }
                                        })];
                                    case 2:
                                        if (!(t = a.sent()) || !t.data) throw Error("EmptyResponse");
                                        return p.debug("Visibility set", {
                                            visibility: t.data.updateVisibility.user.availability
                                        }), [3, 4];
                                    case 3:
                                        return n = a.sent(), p.warn("Failed to update visibility.", n), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }(e)
            }

            function b(e) {
                p.debug("Saving current availability", e), d = a.__assign({}, d, {
                    availability: e
                })
            }

            function v() {
                b(r.a.Online)
            }

            function y() {
                b(r.a.Idle)
            }

            function g() {
                p.debug("Clearing activity"), d = a.__assign({}, d, {
                    activity: null
                }), S()
            }

            function _() {
                return a.__awaiter(this, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return p.debug("Clearing previous session"), d = {
                                    sessionID: i.m.get(c, ""),
                                    availability: r.a.Online,
                                    activity: null
                                }, [4, S()];
                            case 1:
                                return e.sent(), p.debug("Setting new session"), d = a.__assign({}, d, {
                                        sessionID: i.p.session.tabID
                                    }),
                                    function(e) {
                                        i.m.set(c, e)
                                    }(i.p.session.tabID), [4, S()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }

            function S() {
                return a.__awaiter(this, void 0, void 0, function() {
                    var e, t, n;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!Object(s.f)(i.p.store.getState())) return [2];
                                p.debug("Setting status on server", {
                                    state: d
                                }), u && clearTimeout(u), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, i.p.apollo.client.mutate({
                                    mutation: o,
                                    variables: {
                                        input: d
                                    }
                                })];
                            case 2:
                                if (!(e = a.sent()) || !e.data) throw Error("EmptyResponse");
                                if (!e.data.setSessionStatus.setAgainInSeconds) throw Error("InvalidSetAgainInSeconds");
                                return t = e.data.setSessionStatus.setAgainInSeconds, p.debug("Status scheduled to be set again", {
                                    setAgainInSeconds: t
                                }), u = setTimeout(S, 1e3 * t), [3, 4];
                            case 3:
                                return n = a.sent(), p.warn("Failed to update status. Trying again in 60 seconds.", n), u = setTimeout(S, 6e4), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
        }
    }
]);