(window.webpackJsonp = window.webpackJsonp || []).push([
    [140], {
        "3ir2": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return p
            }), n.d(t, "a", function() {
                return g
            });
            var a, s = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                i = n("1rIY"),
                c = n("YTtd"),
                d = n("Wzgq"),
                l = n("r+YW"),
                u = (a = Object(i.a)("AddonInstancesContext", {
                    addonInstances: [],
                    error: !1,
                    refresh: function() {
                        return Promise.resolve()
                    },
                    installAddon: function() {},
                    updateAddon: function() {},
                    updateAddonBatch: function() {},
                    uninstallAddon: function() {},
                    updateAllAddons: function() {},
                    uninstallAddonsBatch: function() {},
                    operations: {}
                })).InnerProvider,
                p = a.withContext,
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.fetchAddons = function() {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a, r;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!(o.p.integrations && o.p.integrations.mods && this.props.gameInstance)) return [3, 7];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 6, , 7]), [4, o.p.integrations.mods.getInstalledAddons({
                                                gameInstanceGuid: this.props.gameInstance.guid
                                            })];
                                        case 2:
                                            return e = s.sent(), t = e.installedAddons.map(function(e) {
                                                return e.id
                                            }), [4, Object(d.a)("api/addon", {
                                                body: JSON.stringify(t),
                                                method: "POST"
                                            })];
                                        case 3:
                                            return 200 !== (n = s.sent()).status ? [3, 5] : [4, n.json()];
                                        case 4:
                                            a = s.sent(), r = e.installedAddons.map(function(e) {
                                                return {
                                                    addon: a.find(function(t) {
                                                        return e.id === t.id
                                                    }),
                                                    installedData: e
                                                }
                                            }), this.setState({
                                                addonInstances: r
                                            }), s.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return s.sent(), this.setState({
                                                error: !0
                                            }), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, n.installAddon = function(e, t, a) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (n = t || this.props.gameInstance && this.props.gameInstance.guid, !(o.p.integrations && o.p.integrations.mods && n)) return [3, 4];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, o.p.integrations.mods.installAddon({
                                                addonId: e,
                                                gameInstanceGuid: n,
                                                fileId: a
                                            })];
                                        case 2:
                                            return s.sent(), [3, 4];
                                        case 3:
                                            return s.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.updateAddon = function(e, t) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = t || this.props.gameInstance && this.props.gameInstance.guid, !(o.p.integrations && o.p.integrations.mods && n)) return [3, 4];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, o.p.integrations.mods.updateAddon({
                                                addonId: e,
                                                gameInstanceGuid: n
                                            })];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return a.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.updateAddonBatch = function(e, t) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = t || this.props.gameInstance && this.props.gameInstance.guid, !(o.p.integrations && o.p.integrations.mods && n)) return [3, 4];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, o.p.integrations.mods.updateAddonsBatch({
                                                addonIds: e,
                                                gameInstanceGuid: n
                                            })];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return a.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.updateAllAddons = function(e) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return s.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (t = e || this.props.gameInstance && this.props.gameInstance.guid, !(o.p.integrations && o.p.integrations.mods && t)) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, o.p.integrations.mods.updateAllAddons({
                                                gameInstanceGuid: t
                                            })];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return n.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.uninstallAddon = function(e, t) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = t || this.props.gameInstance && this.props.gameInstance.guid, !(o.p.integrations && o.p.integrations.mods && n)) return [3, 4];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, o.p.integrations.mods.uninstallAddon({
                                                addonId: e,
                                                gameInstanceGuid: n
                                            })];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return a.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.uninstallAddonsBatch = function(e, t) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = t || this.props.gameInstance && this.props.gameInstance.guid, !(o.p.integrations && o.p.integrations.mods && n)) return [3, 4];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, o.p.integrations.mods.uninstallAddonBatch({
                                                addonIds: e,
                                                gameInstanceGuid: n
                                            })];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return a.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = {
                            addonInstances: [],
                            error: !1,
                            refresh: n.fetchAddons,
                            operations: {},
                            installAddon: n.installAddon,
                            updateAddon: n.updateAddon,
                            updateAddonBatch: n.updateAddonBatch,
                            updateAllAddons: n.updateAllAddons,
                            uninstallAddon: n.uninstallAddon,
                            uninstallAddonsBatch: n.uninstallAddonsBatch
                        }, n
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.fetchAddons(), o.p.integrations && o.p.integrations.mods && (this.addonsSubscription = o.p.integrations.mods.onInstalledAddonsChanged(function(t) {
                            switch (t.reason) {
                                case l.ModsIntegrationInstalledAddonsChangedReason.Initialized:
                                    return;
                                case l.ModsIntegrationInstalledAddonsChangedReason.ScanResult:
                                    t.addonIds.length !== e.state.addonInstances.length && e.fetchAddons();
                                    break;
                                default:
                                    return void e.fetchAddons()
                            }
                        })), o.p.integrations && o.p.integrations.mods && o.p.integrations.mods.onAddonInstallTaskProgressChanged(function(t) {
                            var n = Object.assign({}, e.state.operations),
                                a = t.items.reduce(function(e, t) {
                                    return t.token.isComplete ? delete e[t.addonId] : e[t.addonId] = t.token, e
                                }, n);
                            e.setState({
                                operations: a
                            })
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.addonsSubscription && this.addonsSubscription()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.state.error || (!e.gameInstance && this.props.gameInstance && this.fetchAddons(), e.gameInstance && this.props.gameInstance && e.gameInstance.guid !== this.props.gameInstance.guid && this.fetchAddons())
                    }, t.prototype.render = function() {
                        return r.createElement(u, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(r.Component);
            var g = Object(c.b)(function(e) {
                return {
                    gameInstance: e.selectedGameInstance
                }
            })(m)
        },
        "6DaM": function(e, t, n) {},
        GsbM: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                s = n("q1tI"),
                r = n("Ue10"),
                o = (n("6DaM"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.stopPropagation(), e.preventDefault(), t.props.onClick && t.props.onClick(t.props.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(r.Ya, {
                            className: "addon-context-menu-item"
                        }, s.createElement(r.Va, {
                            type: this.props.interactableType ? this.props.interactableType : r.Wa.Base,
                            onClick: this.onClick,
                            blurAfterClick: !0
                        }, s.createElement(r.Fb, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            borderTop: this.props.borderTop,
                            borderBottom: this.props.borderBottom,
                            display: r.X.Flex,
                            alignItems: r.f.Center
                        }, this.props.icon && s.createElement(r.Ya, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(r.tb, {
                            asset: this.props.icon,
                            width: 20,
                            height: 15
                        })), s.createElement(r.Ya, {
                            margin: {
                                left: this.props.icon ? 0 : 3
                            }
                        }, s.createElement(r.W, null, this.props.title)), this.props.more && s.createElement(r.Ya, {
                            margin: {
                                left: "auto"
                            }
                        }, s.createElement(r.tb, {
                            asset: r.ub.AngleRight
                        })))))
                    }, t
                }(s.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        HN5L: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.Successful = 0] = "Successful", e[e.DirectoryNotFound = 1] = "DirectoryNotFound", e[e.InvalidDirectory = 2] = "InvalidDirectory", e[e.AlreadyExists = 3] = "AlreadyExists"
                }(t.ModsIntegrationAddGameInstanceStatus || (t.ModsIntegrationAddGameInstanceStatus = {})),
                function(e) {
                    e[e.Beta = 0] = "Beta", e[e.Release = 1] = "Release", e[e.Alpha = 2] = "Alpha"
                }(t.ModsIntegrationFileType || (t.ModsIntegrationFileType = {})),
                function(e) {
                    e[e.OutOfDate = 3] = "OutOfDate", e[e.RecentlyUpdated = 4] = "RecentlyUpdated", e[e.Normal = 5] = "Normal", e[e.WorkingCopy = 6] = "WorkingCopy", e[e.Ignored = 7] = "Ignored", e[e.Pending = 10] = "Pending"
                }(t.ModsIntegrationAddonStatus || (t.ModsIntegrationAddonStatus = {})),
                function(e) {
                    e[e.Successful = 1] = "Successful", e[e.Error = 2] = "Error", e[e.Cancelled = 99] = "Cancelled"
                }(t.ModsIntegrationInstallTaskCompletionReason || (t.ModsIntegrationInstallTaskCompletionReason = {})),
                function(e) {
                    e[e.General = 1] = "General", e[e.Permissions = 2] = "Permissions", e[e.IOException = 3] = "IOException", e[e.MinecraftErrorJavaNotInstalled = 70] = "MinecraftErrorJavaNotInstalled"
                }(t.ModsIntegrationInstallTaskErrorReason || (t.ModsIntegrationInstallTaskErrorReason = {}))
        },
        UP6V: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                s = n("/7QA"),
                r = n("kRBY");

            function o(e, t) {
                var n = Object(r.e)(s.p.store.getState());
                if (!n) return fetch(e, t);
                var o, c = t ? t.headers : {};
                if (Array.isArray(c)) {
                    var d = (o = c.slice()).findIndex(function(e) {
                        return "Authorization" === e[0]
                    });
                    d >= 0 && o.splice(d, 1), o.push(["Authorization", i(n)])
                } else c instanceof Headers ? (o = new Headers(c)).set("Authorization", i(n)) : o = a.__assign({}, c, {
                    Authorization: i(n)
                });
                return fetch(e, a.__assign({}, t, {
                    headers: o
                }))
            }

            function i(e) {
                return "OAuth " + e.authToken
            }
        },
        UYLc: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                s = n("q1tI"),
                r = n("3ir2"),
                o = n("YTtd"),
                i = n("Wzgq"),
                c = n("4p7I"),
                d = n("yoKv"),
                l = n("ZS2+"),
                u = n("/7QA"),
                p = n("4rCz"),
                m = n("/MKj"),
                g = n("fvjX"),
                h = n("aCAx"),
                f = n("u5aL"),
                I = n("GsbM"),
                b = n("Ue10"),
                A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = u.p.integrations && u.p.integrations.mods && u.p.integrations.mods.repairFileAssociations;
                        return s.createElement(b.Ya, null, s.createElement(I.a, {
                            icon: b.ub.NavSettings,
                            title: Object(u.d)("Settings", "GameInstanceActionsMenu")
                        }), s.createElement(I.a, {
                            icon: b.ub.Plus,
                            title: Object(u.d)("Add a Game", "GameInstanceActionsMenu"),
                            onClick: this.props.onAddGame
                        }), s.createElement(I.a, {
                            icon: b.ub.Desktop,
                            title: Object(u.d)("Scan for installed games", "GameInstanceActionsMenu"),
                            onClick: this.props.onScan
                        }), e && s.createElement(I.a, {
                            icon: b.ub.Wrench,
                            title: Object(u.d)("Repair File Associactions", "GameInstanceActionsMenu"),
                            onClick: this.props.onRepairAssociations
                        }))
                    }, t
                }(s.Component),
                C = n("cZKs"),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderInstructions = function() {
                            return s.createElement(b.Ya, null, s.createElement(b.W, null, Object(u.d)("Would you like to scan every drive for installed games?", "GameInstanceScanModal")), s.createElement(b.Ya, {
                                margin: {
                                    top: 1
                                },
                                display: b.X.Flex,
                                justifyContent: b.Xa.Center
                            }, s.createElement(b.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, s.createElement(b.z, {
                                onClick: t.props.onStart
                            }, Object(u.d)("Scan", "GameInstanceScanModal"))), s.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.props.closeModal
                            }, Object(u.d)("Cancel", "GameInstanceScanModal"))))
                        }, t.renderScanning = function() {
                            var e = t.renderProgress();
                            return s.createElement(b.Ya, {
                                display: b.X.Flex,
                                flexDirection: b.Aa.Column,
                                justifyContent: b.Xa.Center
                            }, s.createElement(b.Ya, {
                                margin: {
                                    bottom: 1
                                }
                            }, e), s.createElement(b.Ya, {
                                display: b.X.Flex,
                                justifyContent: b.Xa.Center
                            }, s.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.props.cancelScan
                            }, Object(u.d)("Cancel Scan", "GameInstanceScanModal"))))
                        }, t.renderProgress = function() {
                            return t.props.scanCurrentProgress && t.props.scanCurrentFolder && t.props.scanCurrentRootFolder ? s.createElement(b.Ya, null, s.createElement(b.Ya, {
                                margin: {
                                    bottom: 1
                                }
                            }, s.createElement(b.nb, {
                                value: t.props.scanCurrentProgress
                            })), s.createElement(b.W, null, Object(u.d)("Folder: {folder}", {
                                folder: t.props.scanCurrentFolder
                            }, "GameInstanceScanModal")), s.createElement(b.W, null, Object(u.d)("Root: {root}", {
                                root: t.props.scanCurrentRootFolder
                            }, "GameInstanceScanModal"))) : null
                        }, t.renderComplete = function() {
                            var e = t.props.errorMessage ? t.props.errorMessage : Object(u.d)("Scan Complete", "GameInstanceScanModal");
                            return s.createElement(b.Ya, null, s.createElement(b.Fb, {
                                textAlign: b.Sb.Center
                            }, s.createElement(b.W, null, e)), s.createElement(b.Ya, {
                                display: b.X.Flex,
                                justifyContent: b.Xa.Center,
                                margin: {
                                    top: 1
                                }
                            }, s.createElement(b.z, {
                                onClick: t.props.closeModal
                            }, Object(u.d)("Done", "GameINstanceScanModal"))))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return e = this.props.isScanning ? this.renderScanning() : this.props.isComplete ? this.renderComplete() : this.renderInstructions(), s.createElement(b.Fb, {
                            background: b.r.Base,
                            padding: 2
                        }, s.createElement(b.Ya, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column
                        }, s.createElement(b.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(b.W, {
                            type: b.Wb.H2
                        }, Object(u.d)("Scan for Installed Games", "GameInstanceScanModal"))), e))
                    }, t
                }(s.Component),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isScanning: !1,
                            isComplete: !1
                        }, t.startScan = function() {
                            if (t.setState({
                                    isScanning: !0
                                }), u.p.integrations && u.p.integrations.mods) try {
                                u.p.integrations.mods.startGameDetection()
                            } catch (e) {
                                t.setState({
                                    isScanning: !1,
                                    isComplete: !0,
                                    errorMessage: e.message
                                })
                            }
                        }, t.cancelScan = function() {
                            if (t.setState({
                                    isScanning: !1,
                                    errorMessage: Object(u.d)("Scan has been cancelled", "GameInstanceScanModal"),
                                    isComplete: !0
                                }), u.p.integrations && u.p.integrations.mods) try {
                                u.p.integrations.mods.stopGameDetection()
                            } catch (e) {
                                t.setState({
                                    isScanning: !1,
                                    isComplete: !0,
                                    errorMessage: e.message
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        u.p.integrations && u.p.integrations.mods && (this.completeSubscriber = u.p.integrations.mods.onGameInstanceDetectionCompleted(function(t) {
                            e.setState({
                                isScanning: !1,
                                isComplete: !0,
                                errorMessage: t.errorMessage
                            })
                        }), this.progressSubscriber = u.p.integrations.mods.onGameInstanceDetectionProgressChanged(function(t) {
                            e.setState({
                                scanCurrentProgress: t.progress,
                                scanCurrentFolder: t.currentFolder,
                                scanCurrentRootFolder: t.rootFolder
                            })
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.progressSubscriber && this.progressSubscriber(), this.completeSubscriber && this.completeSubscriber()
                    }, t.prototype.render = function() {
                        return s.createElement(b.Ya, null, s.createElement(S, {
                            closeModal: this.props.closeModal,
                            isScanning: this.state.isScanning,
                            isComplete: this.state.isComplete,
                            errorMessage: this.state.errorMessage,
                            scanCurrentFolder: this.state.scanCurrentFolder,
                            scanCurrentProgress: this.state.scanCurrentProgress,
                            scanCurrentRootFolder: this.state.scanCurrentRootFolder,
                            onStart: this.startScan,
                            cancelScan: this.cancelScan
                        }), s.createElement(C.a, null))
                    }, t
                }(s.Component);
            var y, G = Object(m.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        closeModal: h.c
                    }, e)
                })(v),
                E = n("9x10"),
                M = n("HN5L");
            ! function(e) {
                e.MenuButton = "menu-button", e.PlayButton = "play-button"
            }(y || (y = {}));
            var w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        menuOpen: !1
                    }, t.renderMenu = function() {
                        return t.state.menuOpen ? s.createElement(f.a, {
                            onClickOut: t.closeMenu
                        }, s.createElement(b.Ya, {
                            position: b.kb.Relative
                        }, s.createElement(b.u, {
                            show: !0,
                            direction: b.v.Left
                        }, s.createElement(A, {
                            onScan: t.onScan,
                            onAddGame: t.onAddGame,
                            onRepairAssociations: t.onRepairAssociations
                        })))) : null
                    }, t.renderInstanceSelection = function() {
                        if (!t.props.instance || t.props.availableInstances.length < 2) return null;
                        var e = t.props.availableInstances.map(function(e) {
                            return s.createElement("option", {
                                value: e.guid,
                                key: e.guid
                            }, e.installPath)
                        });
                        return s.createElement(b.Ab, {
                            value: t.props.instance.guid,
                            onChange: t.onInstanceSelection
                        }, e)
                    }, t.launchGame = function() {
                        u.p.integrations && u.p.integrations.mods && t.props.instance && u.p.integrations.mods.launchGameInstance({
                            gameInstanceGuid: t.props.instance.guid
                        })
                    }, t.onInstanceSelection = function(e) {
                        t.props.selectGameInstance(e.target.value)
                    }, t.openMenu = function() {
                        t.state.menuOpen || t.setState({
                            menuOpen: !0
                        })
                    }, t.closeMenu = function() {
                        t.setState({
                            menuOpen: !1
                        })
                    }, t.onScan = function() {
                        t.props.showModal(G, {})
                    }, t.onAddGame = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!u.p.integrations || !u.p.integrations.mods) return [3, 4];
                                        e = Object(u.d)("This game is already being tracked by the Twitch App", "GameInstanceActions"), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, u.p.integrations.mods.addGameFromPath()];
                                    case 2:
                                        switch (t.sent().result.status) {
                                            case M.ModsIntegrationAddGameInstanceStatus.AlreadyExists:
                                                this.props.showNotification(e);
                                                break;
                                            case M.ModsIntegrationAddGameInstanceStatus.DirectoryNotFound:
                                                this.props.showNotification(Object(u.d)("The Twitch App is unable to locate this directory", "GameInstanceActions"));
                                                break;
                                            case M.ModsIntegrationAddGameInstanceStatus.InvalidDirectory:
                                                this.props.showNotification(Object(u.d)("This is an invalid directory or unsupported game", "GameInstanceActions"));
                                                break;
                                            case M.ModsIntegrationAddGameInstanceStatus.Successful:
                                                this.props.showNotification(Object(u.d)("The folder is now being tracked by the Twitch App", "GameInstanceActions"));
                                                break;
                                            default:
                                                this.props.showNotification(Object(u.d)("An error occurred while trying to add this folder", "GameInstanceActions"))
                                        }
                                        return [3, 4];
                                    case 3:
                                        return t.sent(), this.props.showNotification(e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onRepairAssociations = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (e = Object(u.d)("Failed to repair file associations", "GameINstanceActions"), !(u.p.integrations && u.p.integrations.mods && u.p.integrations.mods.repairFileAssociations)) return [3, 4];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, u.p.integrations.mods.repairFileAssociations()];
                                    case 2:
                                        return t.sent().result ? this.props.showNotification(Object(u.d)("Twitch has successfully repaired its file associations", "GameInstanceActions")) : this.props.showNotification(e), [3, 4];
                                    case 3:
                                        return t.sent(), this.props.showNotification(e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.renderInstanceSelection(),
                        t = this.renderMenu();
                    return s.createElement(b.Ya, {
                        display: b.X.Flex
                    }, s.createElement(b.Ya, {
                        margin: {
                            right: 2
                        }
                    }, e), s.createElement(b.Ya, {
                        display: b.X.Flex
                    }, s.createElement(b.A, {
                        icon: b.ub.Play,
                        "data-test-selector": y.PlayButton,
                        onClick: this.launchGame
                    }), s.createElement(b.Ya, null, t, s.createElement(b.A, {
                        icon: b.ub.NavSettings,
                        onClick: this.openMenu,
                        "data-test-selector": y.MenuButton
                    }))))
                }, t
            }(s.Component);
            var k = Object(g.compose)(Object(o.b)(function(e) {
                return {
                    instance: e.selectedGameInstance,
                    availableInstances: e.gameInstances,
                    selectGameInstance: e.selectGameInstance
                }
            }), Object(E.b)(function(e) {
                return {
                    showNotification: e.showModal
                }
            }))(w);
            var _, j, O = Object(m.connect)(null, function(e) {
                return Object(g.bindActionCreators)({
                    showModal: h.d
                }, e)
            })(k);
            ! function(e) {
                e.MoreAddonsTab = "more-addons-tab"
            }(_ || (_ = {})),
            function(e) {
                e.Installed = "installed", e.Browse = "browse"
            }(j || (j = {}));
            var D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBannerURL = function() {
                            return "https://client.forgecdn.net/desktopAssets/gameAssets/addonBanner/" + t.props.gameId + "/" + t.props.gameId + "-banner.svg"
                        }, t.getLogoURL = function() {
                            return "https://client.forgecdn.net/desktopAssets/gameAssets/addonBanner/" + t.props.gameId + "/bannerLogo.svg"
                        }, t.renderMoreAddons = function() {
                            if (t.props.installed) return s.createElement(b.Gb, {
                                active: t.isActive(j.Browse),
                                linkTo: "/mods/games/" + t.props.gameId + "/featured",
                                "data-test-selector": _.MoreAddonsTab
                            }, Object(u.d)("Get More Addons", "DesklightModsGameDetailBanner"))
                        }, t.isActive = function(e) {
                            var n = p.q.history.location.pathname;
                            switch (e) {
                                case j.Installed:
                                    return n === "/mods/games/" + t.props.gameId;
                                case j.Browse:
                                    return n.startsWith("/mods/games/" + t.props.gameId + "/");
                                default:
                                    return !1
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.getBannerURL(),
                            t = this.getLogoURL(),
                            n = this.renderMoreAddons();
                        return s.createElement(b.Fb, {
                            background: b.r.Alt2,
                            padding: {
                                x: 3
                            },
                            className: "mods-game-detail-banner"
                        }, s.createElement(b.Ya, {
                            display: b.X.Flex
                        }, s.createElement(b.Ya, {
                            margin: {
                                right: 5
                            },
                            display: b.X.Flex,
                            alignItems: b.f.Center
                        }, s.createElement(b.Ya, {
                            fullHeight: !0,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column,
                            justifyContent: b.Xa.Between
                        }, s.createElement(b.Ya, null), s.createElement(b.Ya, {
                            className: "mods-game-detail-banner__logo-container"
                        }, s.createElement(b.S, {
                            src: t,
                            alt: Object(u.d)("Game Logo", "DesklightModsGameDetailBanner")
                        })), s.createElement(b.Hb, null, s.createElement(b.Gb, {
                            active: this.isActive(j.Installed),
                            linkTo: "/mods/games/" + this.props.gameId
                        }, Object(u.d)("My Addons", "DesklightModsGameDetailBanner")), n))), s.createElement(b.S, {
                            src: e,
                            alt: Object(u.d)("Game Banner", "DesklightModsGameDetailBanner")
                        }), s.createElement(b.Ya, {
                            margin: {
                                left: "auto"
                            },
                            display: b.X.Flex,
                            alignItems: b.f.Center
                        }, s.createElement(O, {
                            gameId: this.props.gameId
                        }))))
                    }, t
                }(s.Component),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onAddGame = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!u.p.integrations || !u.p.integrations.mods) return [3, 4];
                                            e = Object(u.d)("This game is already being tracked by the Twitch App", "GameNotInstalled"), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, u.p.integrations.mods.addGameFromPath()];
                                        case 2:
                                            switch (t.sent().result.status) {
                                                case M.ModsIntegrationAddGameInstanceStatus.AlreadyExists:
                                                    this.props.showNotification(e);
                                                    break;
                                                case M.ModsIntegrationAddGameInstanceStatus.DirectoryNotFound:
                                                    this.props.showNotification(Object(u.d)("The Twitch App is unable to locate this directory", "GameNotInstalled"));
                                                    break;
                                                case M.ModsIntegrationAddGameInstanceStatus.InvalidDirectory:
                                                    this.props.showNotification(Object(u.d)("This is an invalid directory or unsupported game", "GameNotInstalled"));
                                                    break;
                                                case M.ModsIntegrationAddGameInstanceStatus.Successful:
                                                    this.props.showNotification(Object(u.d)("The folder is now being tracked by the Twitch App", "GameNotInstalled"));
                                                    break;
                                                default:
                                                    this.props.showNotification(Object(u.d)("An error occurred while trying to add this folder", "GameNotInstalled"))
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t.sent(), this.props.showNotification(e), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onScan = function() {
                            t.props.showModal(G, {})
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(b.Ya, null, s.createElement(b.Ya, {
                            padding: {
                                left: 5,
                                top: 5
                            }
                        }, s.createElement(b.Ya, {
                            margin: {
                                bottom: 3
                            }
                        }, s.createElement(b.W, {
                            type: b.Wb.P,
                            fontSize: b.Ca.Size3
                        }, Object(u.d)("We didn't find this game! Lets try this again.", "DesklightModsNoAddonsFound"))), s.createElement(b.Ya, {
                            display: b.X.Flex
                        }, s.createElement(b.Ya, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(b.z, {
                            onClick: this.onScan
                        }, Object(u.d)("Scan Now", "DesklightModsNoAddonsFound"))), s.createElement(b.z, {
                            onClick: this.onAddGame,
                            type: b.F.Hollow
                        }, Object(u.d)("Locate Game", "DesklightModsNoAddonsFound")))))
                    }, t
                }(s.Component);
            var T = Object(g.compose)(Object(E.b)(function(e) {
                return {
                    showNotification: e.showModal
                }
            }))(P);
            var F = Object(m.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showModal: h.d
                    }, e)
                })(T),
                U = n("sSlw"),
                R = l.a.wrap(function() {
                    return n.e(139).then(n.bind(null, "Pjs9"))
                }, "InstalledAddonsPage"),
                x = l.a.wrap(function() {
                    return n.e(138).then(n.bind(null, "E7BC"))
                }, "BrowsableaddonsPage"),
                Y = l.a.wrap(function() {
                    return n.e(137).then(n.bind(null, "BBBA"))
                }, "FeaturedAddonsPage"),
                N = l.a.wrap(function() {
                    return n.e(136).then(n.bind(null, "f1MR"))
                }, "AddonDetailsPage"),
                B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContent = function() {
                            return !!t.props.selectedGameInstance ? s.createElement(b.Ya, {
                                fullWidth: !0,
                                fullHeight: !0
                            }, s.createElement(d.a, null, s.createElement(c.a, {
                                exact: !0,
                                path: "/mods/games/:gameId",
                                component: R
                            }), s.createElement(c.a, {
                                exact: !0,
                                path: "/mods/games/:gameId/browse",
                                component: x
                            }), s.createElement(c.a, {
                                exact: !0,
                                path: "/mods/games/:gameId/featured",
                                component: Y
                            }), s.createElement(c.a, {
                                path: "/mods/games/:gameId/addons/:addonId",
                                component: N
                            }))) : s.createElement(F, null)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderContent(),
                            t = !!this.props.selectedGameInstance;
                        return s.createElement(b.Ya, {
                            className: "game-instance-root",
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(U.a, null, s.createElement(D, {
                            gameId: this.props.gameId,
                            installed: t
                        })), e)
                    }, t
                }(s.Component);
            var W = Object(o.b)(function(e) {
                    return {
                        instances: e.gameInstances,
                        selectedGameInstance: e.selectedGameInstance
                    }
                })(B),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            game: void 0,
                            installed: !1,
                            modCount: 0
                        }, t.fetchGame = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            e = this.props.match.params.gameId, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 5, , 6]), [4, Object(i.a)("api/game/" + e)];
                                        case 2:
                                            return 200 !== (t = a.sent()).status ? [3, 4] : [4, t.json()];
                                        case 3:
                                            n = a.sent(), this.setState({
                                                game: n
                                            }), a.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return a.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchGame()
                    }, t.prototype.render = function() {
                        if (!this.state.game) return s.createElement(b.ab, null);
                        var e = parseInt(this.props.match.params.gameId, 10);
                        return s.createElement(o.a, {
                            gameId: e
                        }, s.createElement(r.a, null, s.createElement(W, {
                            gameId: e
                        })))
                    }, t
                }(s.Component);
            n.d(t, "GameRoot", function() {
                return z
            })
        },
        Wzgq: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                s = n("UP6V"),
                r = n("/7QA"),
                o = n("zB42"),
                i = r.p.config.buildType === o.a.Production ? "https://addons-ecs.forgesvc.net" : "https://addon-service-ecs-staging.elerium.wtf";

            function c(e, t) {
                var n, r = t ? t.headers : {},
                    o = i + "/" + e;
                if (Array.isArray(r)) {
                    var c = (n = r.slice()).findIndex(function(e) {
                        return "Content-Type" === e[0]
                    });
                    c >= 0 && n.splice(c, 1), n.push(["Content-Type", "application/json"]);
                    var d = n.findIndex(function(e) {
                        return "Accept" === e[0]
                    });
                    d >= 0 && n.splice(d, 1), n.push(["Accept", "application/json"])
                } else r instanceof Headers ? ((n = new Headers(r)).set("Content-Type", "application/json"), n.set("Accept", "application/json")) : n = a.__assign({}, r, {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                });
                return Object(s.a)(o, a.__assign({}, t, {
                    headers: n
                }))
            }
            n.d(t, "a", function() {
                return c
            })
        },
        YTtd: function(e, t, n) {
            "use strict";
            var a, s = n("mrSG"),
                r = n("q1tI"),
                o = n("1rIY"),
                i = n("ad4Y"),
                c = n("Wzgq"),
                d = (a = Object(o.a)("SelectedGameContext", {
                    gameInstances: [],
                    selectGameInstance: function() {
                        return null
                    },
                    selectSection: function() {
                        return null
                    }
                })).InnerProvider,
                l = a.withContext,
                u = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.selectGameInstance = function(e) {
                            var t = n.props.instances.find(function(t) {
                                return t.guid === e
                            });
                            n.setState({
                                selectedGameInstance: t
                            })
                        }, n.selectSection = function(e) {
                            if (n.state.gameData) {
                                var t = n.state.gameData.categorySections.find(function(t) {
                                    return t.Id === e
                                });
                                n.setState({
                                    selectedSection: t
                                })
                            }
                        }, n.fetchGame = function(e) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var t, n, a;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return s.trys.push([0, 4, , 5]), [4, Object(c.a)("api/game/" + e)];
                                        case 1:
                                            return 200 !== (t = s.sent()).status ? [3, 3] : [4, t.json()];
                                        case 2:
                                            n = s.sent(), a = n.categorySections[0], this.setState({
                                                gameData: n,
                                                selectedSection: a
                                            }), s.label = 3;
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            return s.sent(), [2];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        };
                        var a = n.props.instances.filter(function(e) {
                            return e.gameId === n.props.gameId
                        });
                        return n.state = {
                            gameInstances: a,
                            selectedGameInstance: a[0],
                            selectGameInstance: n.selectGameInstance,
                            selectSection: n.selectSection
                        }, n
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.state.selectedGameInstance && this.fetchGame(this.state.selectedGameInstance.gameId)
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        var n = this;
                        if (e.gameId !== this.props.gameId) {
                            var a = this.props.instances.filter(function(e) {
                                return e.gameId === n.props.gameId
                            });
                            this.setState({
                                gameInstances: a,
                                selectedGameInstance: a[0]
                            })
                        }!t.selectedGameInstance && this.state.selectedGameInstance ? this.fetchGame(this.state.selectedGameInstance.gameId) : this.state.selectedGameInstance && t.selectedGameInstance && this.state.selectedGameInstance.gameId !== t.selectedGameInstance.gameId ? this.fetchGame(this.state.selectedGameInstance.gameId) : this.state.selectedGameInstance || null === this.state.gameData || this.setState({
                            gameData: void 0
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(d, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(r.Component);
            var p = Object(i.b)(function(e) {
                return {
                    instances: e.gameInstances
                }
            })(u);
            n.d(t, !1, function() {
                return d
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return p
            })
        },
        "r+YW": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.Initialized = 0] = "Initialized", e[e.PermissionsChanged = 1] = "PermissionsChanged", e[e.AddedToDatabase = 2] = "AddedToDatabase", e[e.RemovedFromDatabase = 3] = "RemovedFromDatabase", e[e.Saved = 4] = "Saved", e[e.IsValidChanged = 5] = "IsValidChanged", e[e.IsEnabledChanged = 6] = "IsEnabledChanged", e[e.HasSufficientPermissionsChanged = 7] = "HasSufficientPermissionsChanged", e[e.SyncSettingsChanged = 8] = "SyncSettingsChanged", e[e.UpdateCountsChanged = 9] = "UpdateCountsChanged"
                }(t.ModsIntegrationGameInstancesChangedReason || (t.ModsIntegrationGameInstancesChangedReason = {})),
                function(e) {
                    e[e.Success = 0] = "Success", e[e.ErrorScanningVolume = 1] = "ErrorScanningVolume", e[e.ErrorScanningDirectory = 2] = "ErrorScanningDirectory"
                }(t.ModsIntegrationGameDetectionCompletedResultCode || (t.ModsIntegrationGameDetectionCompletedResultCode = {})),
                function(e) {
                    e[e.UpdateInstallTokenValue = 0] = "UpdateInstallTokenValue", e[e.UpdateInstallTokenStatusText = 1] = "UpdateInstallTokenStatusText", e[e.UpdateInstallTokenStatusTitle = 2] = "UpdateInstallTokenStatusTitle", e[e.UpdateInstallTokenProgress = 3] = "UpdateInstallTokenProgress", e[e.UpdateInstallTokenIsActive = 4] = "UpdateInstallTokenIsActive", e[e.UpdateInstallTokenIsPending = 5] = "UpdateInstallTokenIsPending", e[e.UpdateInstallTokenIsCancellationRequested = 6] = "UpdateInstallTokenIsCancellationRequested", e[e.Completed = 7] = "Completed", e[e.Errored = 8] = "Errored"
                }(t.ModsIntegrationInstallTaskProgressReason || (t.ModsIntegrationInstallTaskProgressReason = {})),
                function(e) {
                    e[e.Success = 0] = "Success", e[e.Error = 1] = "Error"
                }(t.ModsIntegrationGameInstanceScanCompletedReason || (t.ModsIntegrationGameInstanceScanCompletedReason = {})),
                function(e) {
                    e[e.Initialized = 0] = "Initialized", e[e.ScanResult = 1] = "ScanResult", e[e.Installed = 2] = "Installed", e[e.Uninstalled = 3] = "Uninstalled", e[e.Refreshed = 4] = "Refreshed", e[e.Updated = 5] = "Updated", e[e.UpdateFilenameOnDisk = 6] = "UpdateFilenameOnDisk", e[e.UpdateIsEnabled = 7] = "UpdateIsEnabled", e[e.UpdateInstalledFile = 8] = "UpdateInstalledFile", e[e.UpdateLatestFile = 9] = "UpdateLatestFile", e[e.UpdatePreferenceReleaseType = 10] = "UpdatePreferenceReleaseType", e[e.UpdatePreferenceAlternateFile = 11] = "UpdatePreferenceAlternateFile", e[e.UpdatePreferenceAutoInstallUpdates = 12] = "UpdatePreferenceAutoInstallUpdates", e[e.UpdatePreferenceIsIgnored = 13] = "UpdatePreferenceIsIgnored", e[e.UpdateIsWorkingCopy = 14] = "UpdateIsWorkingCopy", e[e.UpdateIsModified = 15] = "UpdateIsModified", e[e.UpdateIsFuzzyMatch = 16] = "UpdateIsFuzzyMatch", e[e.AddonTaskComplete = 17] = "AddonTaskComplete", e[e.DefaultPreferenceAutoInstallUpdatesChanged = 18] = "DefaultPreferenceAutoInstallUpdatesChanged", e[e.DefaultPreferenceProcessFileCommandsChanged = 19] = "DefaultPreferenceProcessFileCommandsChanged", e[e.DefaultPreferenceDeleteSavedVariablesChanged = 20] = "DefaultPreferenceDeleteSavedVariablesChanged", e[e.DefaultPreferenceQuickDeleteLibrariesChanged = 21] = "DefaultPreferenceQuickDeleteLibrariesChanged", e[e.DefaultPreferencePreferenceAlternateFileChanged = 22] = "DefaultPreferencePreferenceAlternateFileChanged", e[e.DefaultPreferencePreferenceReleaseTypeChanged = 23] = "DefaultPreferencePreferenceReleaseTypeChanged"
                }(t.ModsIntegrationInstalledAddonsChangedReason || (t.ModsIntegrationInstalledAddonsChangedReason = {}))
        }
    }
]);