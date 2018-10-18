(window.webpackJsonp = window.webpackJsonp || []).push([
    [32], {
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

            function p(e) {
                return e.desktopPerformance.samples
            }

            function m(e) {
                return e.desktopPerformance.appLoadDuration
            }
            r.p.store.registerReducer("desktopPerformance", function(e, t) {
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
            var u, d, h, f, y, _ = a("/MKj"),
                E = a("fvjX"),
                b = a("q1tI");
            ! function(e) {
                e.AppLoaded = "desktop_benchmark_app_loaded"
            }(u || (u = {})),
            function(e) {
                e.AppLoaded = "App Loaded"
            }(d || (d = {})),
            function(e) {
                e.ShowWindow = "show-window"
            }(h || (h = {})),
            function(e) {
                e.WindowShown = "window-shown", e.Update = "update", e.ElectronLaunched = "electron-launched"
            }(f || (f = {})),
            function(e) {
                e.Electron = "electron", e.Launcher = "launcher"
            }(y || (y = {}));
            var v = function(e) {
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
                        var e, t, a, s, i, o, l, p, m, d, _, E, b = this;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!r.p.integrations.performance) return [2];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, r.p.integrations.performance.getPerfSamples()];
                                case 2:
                                    for (e = n.sent(), t = this.props.samples.customEvents, a = this.props.samples.firstPaintDuration, s = this.props.samples.electronTotalDuration, i = this.props.samples.launcherTotalDuration, o = this.props.samples.updateDuration, l = void 0, p = void 0, e.timestamps && (l = e.timestamps.electronProcessStartTime, p = e.timestamps.launcherProcessStartTime), m = 0, d = e.samples; m < d.length; m++) _ = d[m], this.addCustomEvent(_, t), _.group === y.Launcher && _.key === f.WindowShown && p && (a = {
                                        value: _.startTime - p + _.duration,
                                        latencyStatus: c.a.Pass
                                    }), _.group === y.Electron && _.key === u.AppLoaded && this.props.updateAppLoadMetric({
                                        value: _.duration,
                                        latencyStatus: c.a.Pass
                                    }), _.group === y.Launcher && _.key === f.ElectronLaunched && p && (i = {
                                        value: _.startTime - p + _.duration,
                                        latencyStatus: c.a.Pass
                                    }), _.group === y.Launcher && _.key === f.Update && p && (o = {
                                        value: _.duration,
                                        latencyStatus: c.a.Pass
                                    }), _.group === y.Electron && _.key === h.ShowWindow && l && (s = {
                                        value: _.startTime - l + _.duration,
                                        latencyStatus: c.a.Pass
                                    });
                                    return r.p.benchmarking.getRootLatencyTracker().subscribeToUpdates(function() {
                                        return b.updateAppLoaded()
                                    }), this.props.loadSamples({
                                        customEvents: t,
                                        firstPaintDuration: a,
                                        electronTotalDuration: s,
                                        launcherTotalDuration: i,
                                        updateDuration: o,
                                        electronProcessStartTime: l,
                                        launcherProcessStartTime: p
                                    }), [3, 4];
                                case 3:
                                    return E = n.sent(), r.p.logger.error(E, "Unable to fetch performance metrics."), [3, 4];
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
                    var e = r.p.benchmarking.getRootLatencyTracker();
                    if (this.props.samples.launcherProcessStartTime && this.props.appLoadDuration.latencyStatus === c.a.Unknown && e.isFirstLoad && e.getCompletedTimestamp()) {
                        var t = {
                            value: e.getCompletedTimestamp() - this.props.samples.launcherProcessStartTime,
                            latencyStatus: c.a.Pass
                        };
                        if (r.p.integrations.performance && r.p.integrations.performance.getPreloadStartTime) {
                            var a = e.getRootInitTimestamp() - this.props.samples.launcherProcessStartTime,
                                n = r.p.integrations.performance.getPreloadStartTime(),
                                s = {
                                    startTime: this.props.samples.launcherProcessStartTime,
                                    duration: t.value,
                                    isKeyMetric: !0,
                                    group: y.Electron,
                                    key: u.AppLoaded,
                                    label: d.AppLoaded
                                };
                            r.p.integrations.performance.setStartupSamples({
                                samples: [s]
                            }), r.p.tracking.trackDesktopBenchmark(u.AppLoaded, {
                                duration: t.value,
                                twilight_relative_start_time: a,
                                preload_relative_start_time: n
                            })
                        }
                        this.props.updateAppLoadMetric(t)
                    }
                }, t
            }(b.Component);
            var T = Object(_.connect)(function(e) {
                    return {
                        appLoadDuration: m(e),
                        samples: p(e)
                    }
                }, function(e) {
                    return Object(E.bindActionCreators)({
                        loadSamples: o,
                        updateAppLoadMetric: l
                    }, e)
                })(v),
                S = a("8/mp"),
                g = a("j9uj"),
                w = a("Ue10"),
                L = "twilight.desktop-tab",
                k = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.renderTabButton = function(e, t, n) {
                            var r = a.state.selectedTab === e;
                            return b.createElement(w.Ab, {
                                active: r,
                                onClick: function() {
                                    return a.onClickTab(e)
                                }
                            }, b.createElement(w.Xa, {
                                display: w.X.Flex
                            }, t, n && a.renderTabBubble(n)))
                        }, a.renderTabBubble = function(e) {
                            return b.createElement(w.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, b.createElement(w.cb, {
                                label: e.toString(),
                                type: w.db.Notification
                            }))
                        }, a.onClickTab = function(e) {
                            r.m.set(L, e), a.setState({
                                selectedTab: e
                            })
                        }, a.state = {
                            selectedTab: r.m.get(L, "overview")
                        }, a
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return b.createElement(w.Xa, {
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__header-container",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap,
                            alignItems: w.f.Start
                        }, b.createElement(w.Bb, null, this.renderTabButton("overview", "Overview"), this.props.samples.electronProcessStartTime && this.renderTabButton("electron", "Electron"), this.props.samples.launcherProcessStartTime && this.renderTabButton("launcher", "Launcher"))), b.createElement(w.Xa, {
                            className: "latency-metrics__body",
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            flexGrow: 1,
                            overflow: w.ab.Hidden,
                            fullHeight: !0
                        }, b.createElement(S.b, {
                            className: "latency-metrics__scroller"
                        }, b.createElement(w.Xa, {
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
                        return b.createElement(w.Xa, null, b.createElement(w.Xa, {
                            className: "latency-metrics__item",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap
                        }, b.createElement(w.Sb, {
                            label: "= Launcher Window Shown - Launcher Start Time",
                            direction: w.Ub.Right
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, b.createElement("span", null, "First Paint"))), b.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? b.createElement(g.a, {
                            metric: this.props.samples.firstPaintDuration
                        }) : b.createElement("span", null, "n/a"))), b.createElement(w.Xa, {
                            className: "latency-metrics__item",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap
                        }, b.createElement(w.Sb, {
                            label: "= Twilight Complete - Launcher Start",
                            direction: w.Ub.Right
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, b.createElement("span", null, "Loaded"))), b.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? b.createElement(g.a, {
                            metric: this.props.appLoadDuration
                        }) : b.createElement("span", null, "n/a"))), b.createElement(w.Xa, {
                            className: "latency-metrics__item",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap
                        }, b.createElement(w.Sb, {
                            label: "= Launcher End Update - Launcher Start Update",
                            direction: w.Ub.Right
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, b.createElement("span", null, "Update Time"))), b.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? b.createElement(g.a, {
                            metric: this.props.samples.updateDuration
                        }) : b.createElement("span", null, "n/a"))), b.createElement(w.Xa, {
                            className: "latency-metrics__item",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap
                        }, b.createElement(w.Sb, {
                            label: "= Electron Launch - Launcher Process Start",
                            direction: w.Ub.Right
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, b.createElement("span", null, "Launcher Total"))), b.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.props.samples.launcherProcessStartTime ? b.createElement(g.a, {
                            metric: this.props.samples.launcherTotalDuration
                        }) : b.createElement("span", null, "n/a"))), b.createElement(w.Xa, {
                            className: "latency-metrics__item",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap
                        }, b.createElement(w.Sb, {
                            label: "= Show Window - Electron Process Start",
                            direction: w.Ub.Right
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, b.createElement("span", null, "Electron Total"))), b.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, b.createElement(g.a, {
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
                        return b.createElement(w.Xa, {
                            key: e.key,
                            className: "latency-metrics__item",
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexWrap: w.Ba.NoWrap
                        }, b.createElement(w.Sb, {
                            label: "Start Time: " + e.startTime,
                            direction: w.Ub.Right
                        }, b.createElement(w.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, b.createElement("span", null, e.label))), b.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, b.createElement(g.a, {
                            metric: e.duration
                        })))
                    }, t
                }(b.Component);
            var P = Object(_.connect)(function(e) {
                return {
                    appLoadDuration: m(e),
                    samples: p(e)
                }
            })(k);
            a.d(t, "DesktopBenchmarkingManager", function() {
                return T
            }), a.d(t, "DesktopInformation", function() {
                return P
            })
        }
    }
]);