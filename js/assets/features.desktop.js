(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "Msj/": function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("mrSG"),
                r = a("/7QA"),
                s = "desktop.performance.SAMPLES_LOADED",
                i = "desktop.performance.APP_LOAD_METRIC_UPDATED";

            function o(e) {
                return {
                    type: s,
                    samples: e
                }
            }

            function l(e) {
                return {
                    type: i,
                    desktopAppLoadDuration: e || void 0
                }
            }
            var c = a("DiGQ");

            function u(e) {
                return e.desktopPerformance.samples
            }

            function p(e) {
                return e.desktopPerformance.appLoadDuration
            }
            r.o.store.registerReducer("desktopPerformance", function(e, t) {
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
                    case i:
                        return n.__assign({}, e, {
                            appLoadDuration: t.desktopAppLoadDuration
                        });
                    case s:
                        return n.__assign({}, e, {
                            samples: n.__assign({}, t.samples)
                        });
                    default:
                        return e
                }
            });
            var m, d, h, f = a("/MKj"),
                y = a("fvjX"),
                E = a("q1tI");
            ! function(e) {
                e.UiLoaded = "ui-loaded", e.ShowWindow = "show-window"
            }(m || (m = {})),
            function(e) {
                e.WindowShown = "window-shown", e.Update = "update", e.ElectronLaunched = "electron-launched"
            }(d || (d = {})),
            function(e) {
                e.Electron = "electron", e.Launcher = "launcher"
            }(h || (h = {}));
            var _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.init()
                }, t.prototype.componentDidUpdate = function() {
                    this.updateAppLoaded()
                }, t.prototype.render = function() {
                    return null
                }, t.prototype.init = function() {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e, t, a, s, i, o, l, u, p, f, y, E, _ = this;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!r.o.integrations.performance) return [2];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, r.o.integrations.performance.getPerfSamples()];
                                case 2:
                                    for (e = n.sent(), t = this.props.samples.customEvents, a = this.props.samples.firstPaintDuration, s = this.props.samples.electronTotalDuration, i = this.props.samples.launcherTotalDuration, o = this.props.samples.updateDuration, l = void 0, u = void 0, e.timestamps && (l = e.timestamps.electronProcessStartTime, u = e.timestamps.launcherProcessStartTime), p = 0, f = e.samples; p < f.length; p++) y = f[p], this.addCustomEvent(y, t), y.group === h.Launcher && y.key === d.WindowShown && u && (a = {
                                        value: y.startTime - u + y.duration,
                                        latencyStatus: c.a.Pass
                                    }), y.group === h.Electron && y.key === m.UiLoaded && this.props.updateAppLoadMetric({
                                        value: y.duration,
                                        latencyStatus: c.a.Pass
                                    }), y.group === h.Launcher && y.key === d.ElectronLaunched && u && (i = {
                                        value: y.startTime - u + y.duration,
                                        latencyStatus: c.a.Pass
                                    }), y.group === h.Launcher && y.key === d.Update && u && (o = {
                                        value: y.duration,
                                        latencyStatus: c.a.Pass
                                    }), y.group === h.Electron && y.key === m.ShowWindow && l && (s = {
                                        value: y.startTime - l + y.duration,
                                        latencyStatus: c.a.Pass
                                    });
                                    return r.o.benchmarking.getRootLatencyTracker().subscribeToUpdates(function() {
                                        return _.updateAppLoaded()
                                    }), this.props.loadSamples({
                                        customEvents: t,
                                        firstPaintDuration: a,
                                        electronTotalDuration: s,
                                        launcherTotalDuration: i,
                                        updateDuration: o,
                                        electronProcessStartTime: l,
                                        launcherProcessStartTime: u
                                    }), [3, 4];
                                case 3:
                                    return E = n.sent(), r.o.logger.error(E, "Unable to fetch performance metrics."), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.addCustomEvent = function(e, t) {
                    var a = e.group.charAt(0).toUpperCase() + e.group.substr(1),
                        n = e.label,
                        r = {
                            benchmark: Number.MAX_SAFE_INTEGER,
                            duration: {
                                value: e.duration,
                                latencyStatus: c.a.Pass
                            },
                            group: a,
                            key: e.key,
                            label: n,
                            startTime: e.startTime
                        };
                    t[r.group] || (t[r.group] = []), t[r.group].push(r)
                }, t.prototype.updateAppLoaded = function() {
                    var e = r.o.benchmarking.getRootLatencyTracker();
                    if (this.props.samples.launcherProcessStartTime && this.props.appLoadDuration.latencyStatus === c.a.Unknown && e.isFirstLoad && e.getCompletedTimestamp()) {
                        var t = {
                            value: e.getCompletedTimestamp() - this.props.samples.launcherProcessStartTime,
                            latencyStatus: c.a.Pass
                        };
                        if (r.o.integrations.performance) {
                            var a = {
                                startTime: this.props.samples.launcherProcessStartTime,
                                duration: t.value,
                                isKeyMetric: !0,
                                group: "electron",
                                key: "ui-loaded",
                                label: "Loaded"
                            };
                            r.o.integrations.performance.setStartupSamples({
                                samples: [a]
                            })
                        }
                        this.props.updateAppLoadMetric(t)
                    }
                }, t
            }(E.Component);
            var b = Object(f.connect)(function(e) {
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
                v = a("8/mp"),
                T = a("j9uj"),
                S = a("Ue10"),
                w = "twilight.desktop-tab",
                g = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.renderTabButton = function(e, t, n) {
                            var r = a.state.selectedTab === e;
                            return E.createElement(S.yb, {
                                active: r,
                                onClick: function() {
                                    return a.onClickTab(e)
                                }
                            }, E.createElement(S.Va, {
                                display: S.W.Flex
                            }, t, n && a.renderTabBubble(n)))
                        }, a.renderTabBubble = function(e) {
                            return E.createElement(S.Va, {
                                margin: {
                                    left: .5
                                }
                            }, E.createElement(S.ab, {
                                label: e.toString(),
                                type: S.bb.Notification
                            }))
                        }, a.onClickTab = function(e) {
                            r.l.set(w, e), a.setState({
                                selectedTab: e
                            })
                        }, a.state = {
                            selectedTab: r.l.get(w, "overview")
                        }, a
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return E.createElement(S.Va, {
                            display: S.W.Flex,
                            flexDirection: S.Y.Column,
                            fullHeight: !0,
                            fullWidth: !0
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__header-container",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap,
                            alignItems: S.f.Start
                        }, E.createElement(S.zb, null, this.renderTabButton("overview", "Overview"), this.props.samples.electronProcessStartTime && this.renderTabButton("electron", "Electron"), this.props.samples.launcherProcessStartTime && this.renderTabButton("launcher", "Launcher"))), E.createElement(S.Va, {
                            className: "latency-metrics__body",
                            display: S.W.Flex,
                            flexDirection: S.Y.Column,
                            flexGrow: 1,
                            overflow: S.Ya.Hidden,
                            fullHeight: !0
                        }, E.createElement(v.b, {
                            className: "latency-metrics__scroller"
                        }, E.createElement(S.Va, {
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
                        return E.createElement(S.Va, null, E.createElement(S.Va, {
                            className: "latency-metrics__item",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap
                        }, E.createElement(S.Qb, {
                            label: "= Launcher Window Shown - Launcher Start Time",
                            direction: S.Sb.Right
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, E.createElement("span", null, "First Paint"))), E.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? E.createElement(T.a, {
                            metric: this.props.samples.firstPaintDuration
                        }) : E.createElement("span", null, "n/a"))), E.createElement(S.Va, {
                            className: "latency-metrics__item",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap
                        }, E.createElement(S.Qb, {
                            label: "= Twilight Complete - Launcher Start",
                            direction: S.Sb.Right
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, E.createElement("span", null, "Loaded"))), E.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? E.createElement(T.a, {
                            metric: this.props.appLoadDuration
                        }) : E.createElement("span", null, "n/a"))), E.createElement(S.Va, {
                            className: "latency-metrics__item",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap
                        }, E.createElement(S.Qb, {
                            label: "= Launcher End Update - Launcher Start Update",
                            direction: S.Sb.Right
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, E.createElement("span", null, "Update Time"))), E.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? E.createElement(T.a, {
                            metric: this.props.samples.updateDuration
                        }) : E.createElement("span", null, "n/a"))), E.createElement(S.Va, {
                            className: "latency-metrics__item",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap
                        }, E.createElement(S.Qb, {
                            label: "= Electron Launch - Launcher Process Start",
                            direction: S.Sb.Right
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, E.createElement("span", null, "Launcher Total"))), E.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? E.createElement(T.a, {
                            metric: this.props.samples.launcherTotalDuration
                        }) : E.createElement("span", null, "n/a"))), E.createElement(S.Va, {
                            className: "latency-metrics__item",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap
                        }, E.createElement(S.Qb, {
                            label: "= Show Window - Electron Process Start",
                            direction: S.Sb.Right
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, E.createElement("span", null, "Electron Total"))), E.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, E.createElement(T.a, {
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
                        return E.createElement(S.Va, {
                            key: e.key,
                            className: "latency-metrics__item",
                            display: S.W.Flex,
                            justifyContent: S.Ua.Between,
                            flexWrap: S.Z.NoWrap
                        }, E.createElement(S.Qb, {
                            label: "Start Time: " + e.startTime,
                            direction: S.Sb.Right
                        }, E.createElement(S.Va, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, E.createElement("span", null, e.label))), E.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, E.createElement(T.a, {
                            metric: e.duration
                        })))
                    }, t
                }(E.Component);
            var L = Object(f.connect)(function(e) {
                return {
                    appLoadDuration: p(e),
                    samples: u(e)
                }
            })(g);
            a.d(t, "DesktopBenchmarkingManager", function() {
                return b
            }), a.d(t, "DesktopInformation", function() {
                return L
            })
        }
    }
]);