(window.webpackJsonp = window.webpackJsonp || []).push([
    [133], {
        "5fUb": function(e, t, n) {},
        "Ar/j": function(e, t, n) {
            "use strict";
            var o, a = n("mrSG"),
                r = n("q1tI"),
                s = n("oJmH"),
                i = n("1rIY"),
                l = n("3ir2"),
                d = n("Wzgq"),
                c = (o = Object(i.a)("AddonContext", {
                    initialized: !1,
                    refetchAddon: function() {
                        return null
                    },
                    installed: !1
                })).InnerProvider,
                p = o.withContext,
                u = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.fetchAddon = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 5, , 6]), [4, Object(d.a)("api/addon/" + this.props.addonId)];
                                        case 1:
                                            return 200 !== (e = n.sent()).status ? [3, 3] : [4, e.json()];
                                        case 2:
                                            return t = n.sent(), this.setState({
                                                addon: t,
                                                initialized: !0
                                            }, this.determineInstalled), [3, 4];
                                        case 3:
                                            this.setState({
                                                initialized: !0
                                            }, this.determineInstalled), n.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return n.sent(), this.setState({
                                                initialized: !0
                                            }, this.determineInstalled), [3, 6];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, n.determineInstalled = function() {
                            var e = n.props.addonInstances.find(function(e) {
                                return e.installedData.id === parseInt(n.props.addonId, 10)
                            });
                            n.setState({
                                installed: !!e,
                                addonInstance: e ? e.installedData : void 0
                            })
                        }, n.state = {
                            initialized: !1,
                            refetchAddon: n.fetchAddon,
                            installed: !1
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchAddon()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.addonId !== this.props.addonId && this.fetchAddon(), e.addonInstances !== this.props.addonInstances && this.determineInstalled()
                    }, t.prototype.render = function() {
                        return r.createElement(c, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(r.Component);
            var m = Object(s.compose)(Object(l.b)(function(e) {
                return {
                    addonInstances: e.addonInstances
                }
            }))(u);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        BLOD: function(e, t, n) {
            "use strict";
            var o = n("mrSG"),
                a = n("q1tI"),
                r = n("9C/b"),
                s = n("fvjX"),
                i = n("/7QA"),
                l = n("4rCz"),
                d = n("gXjh"),
                c = n("GsbM");

            function p(e, t) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return i.p.integrations && i.p.integrations.mods ? (n = Object.assign({}, {
                                    gameInstanceGuid: e.gameInstanceGuid,
                                    addonId: e.id,
                                    preferenceAlternateFile: e.preferences.preferenceAlternateFile,
                                    preferenceAutoInstallUpdates: e.preferences.preferenceAutoInstallUpdates,
                                    preferenceIsIgnored: e.preferences.preferenceIsIgnored,
                                    preferenceReleaseType: e.preferences.preferredReleaseType
                                }, t), [4, i.p.integrations.mods.updateInstalledAddonProperties(n)]) : [3, 2];
                            case 1:
                                return [2, o.sent()];
                            case 2:
                                return [2]
                        }
                    })
                })
            }
            var u, m = n("Ue10"),
                h = n("HN5L");
            ! function(e) {
                e.ReleaseTypeItem = "release-type-item", e.ReleaseOption = "release-option", e.BrowseFolder = "browse-folder", e.BrowseFolderOption = "browse-folder-option", e.ReportABugOption = "report-a-bug", e.VisitWebsiteOption = "visit-website", e.ViewChangelogOption = "view-changelog", e.DiskActionOption = "disk-action"
            }(u || (u = {}));
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        releaseTypesOpen: !1,
                        browseFoldersOpen: !1
                    }, t.renderBrowseFolder = function() {
                        if (t.props.instance.supportsBrowseFolder) {
                            if (t.props.instance.moduleFolders && t.props.instance.moduleFolders.length > 1 || !1) {
                                var e = t.props.instance.moduleFolders && t.props.instance.moduleFolders.map(function(e, n) {
                                    return a.createElement(c.a, {
                                        key: n,
                                        title: e.name,
                                        value: e.path,
                                        onClick: t.onFolderOpen,
                                        "data-test-selector": u.BrowseFolderOption
                                    })
                                });
                                return a.createElement(m.Qa, {
                                    position: m.kb.Relative
                                }, a.createElement("div", {
                                    "data-test-selector": u.BrowseFolder,
                                    onMouseOver: t.showFolders,
                                    onMouseOut: t.hideFolders
                                }, a.createElement(c.a, {
                                    title: Object(i.d)("Browse Folders", "InstalledContextMenu"),
                                    more: !0
                                }), a.createElement(m.u, {
                                    show: t.state.browseFoldersOpen,
                                    direction: m.v.Left
                                }, e)))
                            }
                            return t.props.instance.moduleFolders && t.props.instance.moduleFolders.length ? a.createElement(c.a, {
                                title: Object(i.d)("Browse Folder", "InstalledContextMenu"),
                                value: t.props.instance.moduleFolders[0].path,
                                onClick: t.onFolderOpen
                            }) : null
                        }
                        return null
                    }, t.showReleaseTypes = function() {
                        t.closeReleaseTypeTrigger && clearTimeout(t.closeReleaseTypeTrigger), t.setState({
                            releaseTypesOpen: !0
                        })
                    }, t.hideReleaseTypes = function() {
                        t.closeReleaseTypeTrigger = setTimeout(function() {
                            t.setState({
                                releaseTypesOpen: !1
                            })
                        }, 250)
                    }, t.showFolders = function() {
                        t.closeFoldersTrigger && clearTimeout(t.closeFoldersTrigger), t.setState({
                            browseFoldersOpen: !0
                        })
                    }, t.hideFolders = function() {
                        t.closeFoldersTrigger = setTimeout(function() {
                            t.setState({
                                browseFoldersOpen: !1
                            })
                        }, 250)
                    }, t.renderDiskAction = function() {
                        return t.props.instance.hasUpdate ? a.createElement(c.a, {
                            title: Object(i.d)("Update", "InstalledContextMenu"),
                            icon: m.ub.Download,
                            borderTop: !0,
                            borderBottom: !0,
                            "data-test-selector": u.DiskActionOption,
                            onClick: t.onUpdate
                        }) : a.createElement(c.a, {
                            title: Object(i.d)("Reinstall", "InstalledContextMenu"),
                            icon: m.ub.Download,
                            borderTop: !0,
                            borderBottom: !0,
                            "data-test-selector": u.DiskActionOption,
                            onClick: t.onReinstall
                        })
                    }, t.onUninstall = function() {
                        t.props.instance && (t.props.uninstallAddon(t.props.instance.id, t.props.instance.gameInstanceGuid), t.props.onClose())
                    }, t.reportABug = function() {
                        window.open("https://www.curseforge.com/projects/" + t.props.addon.id + "/create-ticket"), t.props.onClose()
                    }, t.visitWebsite = function() {
                        window.open(t.props.addon.clientUrl), t.props.onClose()
                    }, t.viewChanelogs = function() {
                        t.props.history.push("/mods/games/" + t.props.addon.gameId + "/addons/" + t.props.addon.id + "/changelog"), t.props.onClose()
                    }, t.onFolderOpen = function(e) {
                        l.q.integrations && l.q.integrations.mods && (l.q.integrations.mods.openAddonFolder({
                            path: e
                        }), t.props.onClose())
                    }, t.onUpdate = function() {
                        t.props.updateAddon(t.props.addon.id, t.props.instance.gameInstanceGuid), t.props.onClose()
                    }, t.onReinstall = function() {
                        t.props.installAddon(t.props.addon.id, t.props.instance.gameInstanceGuid), t.props.onClose()
                    }, t.setFileType = function(e) {
                        p(t.props.instance, {
                            preferenceReleaseType: e
                        })
                    }, t.setAutoInstallUpdates = function() {
                        p(t.props.instance, {
                            preferenceAutoInstallUpdates: !t.props.instance.preferences.preferenceAutoInstallUpdates
                        })
                    }, t.setInstallSeperatly = function() {
                        p(t.props.instance, {
                            preferenceAlternateFile: !t.props.instance.preferences.preferenceAlternateFile
                        })
                    }, t.setIsignored = function() {
                        p(t.props.instance, {
                            preferenceIsIgnored: !t.props.instance.preferences.preferenceIsIgnored
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.renderDiskAction(),
                        t = this.renderBrowseFolder();
                    return a.createElement(m.Ya, {
                        margin: {
                            top: 2
                        }
                    }, e, a.createElement(c.a, {
                        title: Object(i.d)("Auto Install Updates", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceAutoInstallUpdates ? m.ub.Check : void 0,
                        onClick: this.setAutoInstallUpdates
                    }), a.createElement(c.a, {
                        title: Object(i.d)("Install Libraries Seperately", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceAlternateFile ? m.ub.Check : void 0,
                        onClick: this.setInstallSeperatly
                    }), a.createElement(c.a, {
                        title: Object(i.d)("Ignored", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceIsIgnored ? m.ub.Check : void 0,
                        onClick: this.setIsignored
                    }), a.createElement(m.Qa, {
                        position: m.kb.Relative
                    }, a.createElement("div", {
                        "data-test-selector": u.ReleaseTypeItem,
                        onMouseOver: this.showReleaseTypes,
                        onMouseOut: this.hideReleaseTypes
                    }, a.createElement(c.a, {
                        title: Object(i.d)("Release Type", "InstalledContextMenu"),
                        more: !0
                    }), a.createElement(m.u, {
                        show: this.state.releaseTypesOpen,
                        direction: m.v.Left
                    }, a.createElement(c.a, {
                        "data-test-selector": u.ReleaseOption,
                        title: Object(i.d)("Release", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === h.ModsIntegrationFileType.Release ? m.ub.Check : void 0,
                        value: h.ModsIntegrationFileType.Release,
                        onClick: this.setFileType,
                        borderBottom: !0
                    }), a.createElement(c.a, {
                        title: Object(i.d)("Beta", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === h.ModsIntegrationFileType.Beta ? m.ub.Check : void 0,
                        value: h.ModsIntegrationFileType.Beta,
                        onClick: this.setFileType
                    }), a.createElement(c.a, {
                        title: Object(i.d)("Alpha", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === h.ModsIntegrationFileType.Alpha ? m.ub.Check : void 0,
                        value: h.ModsIntegrationFileType.Alpha,
                        onClick: this.setFileType
                    })))), a.createElement(c.a, {
                        title: Object(i.d)("Report a Bug", "InstalledContextMenu"),
                        icon: m.ub.Sword,
                        borderTop: !0,
                        onClick: this.reportABug,
                        "data-test-selector": u.ReportABugOption
                    }), a.createElement(c.a, {
                        title: Object(i.d)("View Addon Website", "InstalledContextMenu"),
                        icon: m.ub.Popout,
                        onClick: this.visitWebsite,
                        "data-test-selector": u.VisitWebsiteOption
                    }), a.createElement(c.a, {
                        title: Object(i.d)("View Changelogs", "InstalledContextMenu"),
                        icon: m.ub.ViewerList,
                        onClick: this.viewChanelogs,
                        "data-test-selector": u.ViewChangelogOption
                    }), t, a.createElement(c.a, {
                        title: Object(i.d)("Delete Settings (Saved Variables)", "InstalledContextMenu"),
                        icon: m.ub.Close,
                        borderBottom: !0
                    }), a.createElement(c.a, {
                        title: Object(i.d)("Delete", "InstalledContextMenu"),
                        icon: m.ub.Trash,
                        interactableType: m.Wa.Alert,
                        onClick: this.onUninstall
                    }))
                }, t
            }(a.Component);
            var g, b = Object(s.compose)(r.a, Object(d.a)(function(e) {
                return {
                    uninstallAddon: e.uninstallAddon,
                    installAddon: e.installAddon,
                    updateAddon: e.updateAddon
                }
            }))(f);
            ! function(e) {
                e.OpenSiteOption = "open-site", e.InstallOption = "install"
            }(g || (g = {}));
            var I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openSite = function() {
                        window.open(t.props.addon.clientUrl), t.props.onClose()
                    }, t.onInstall = function() {
                        t.props.installAddon(t.props.addon.id), t.props.onClose()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(m.Ya, {
                        padding: {
                            top: 2
                        }
                    }, a.createElement(c.a, {
                        icon: m.ub.Download,
                        title: Object(i.d)("Install", "NotInstalledMenu"),
                        borderBottom: !0,
                        borderTop: !0,
                        "data-test-selector": g.InstallOption,
                        onClick: this.onInstall
                    }), a.createElement(c.a, {
                        icon: m.ub.Popout,
                        title: Object(i.d)("Browse Addon Website", "NotInstalledMenu"),
                        onClick: this.openSite,
                        "data-test-selector": g.OpenSiteOption
                    }))
                }, t
            }(a.Component);
            var C = Object(d.a)(function(e) {
                    return {
                        installAddon: e.installAddon
                    }
                })(I),
                A = n("ew8U"),
                v = (n("5fUb"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAddonHeader = function() {
                            var e = Object(A.c)(t.props.addon);
                            return a.createElement(m.Ya, {
                                padding: {
                                    x: 1
                                },
                                display: m.X.Flex,
                                alignItems: m.f.Center,
                                className: "addon-context-menu__header"
                            }, a.createElement(m.q, {
                                src: t.props.addon.primaryCategoryAvatarUrl,
                                alt: t.props.addon.name,
                                size: 36
                            }), a.createElement(m.Ya, {
                                margin: {
                                    left: 1
                                }
                            }, a.createElement(m.W, {
                                type: m.Wb.H2,
                                fontSize: m.Ca.Size4
                            }, t.props.addon.name), a.createElement(m.W, {
                                color: m.O.Alt2
                            }, e)))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.renderAddonHeader(),
                            n = this.props.addonInstances.find(function(t) {
                                return t.addon.id === e.props.addon.id
                            }),
                            o = n ? a.createElement(b, {
                                addon: this.props.addon,
                                instance: n.installedData,
                                onClose: this.props.onClose
                            }) : a.createElement(C, {
                                addon: this.props.addon,
                                onClose: this.props.onClose
                            });
                        return a.createElement(m.Ya, {
                            padding: {
                                top: 1
                            },
                            className: "addon-context-menu"
                        }, t, o)
                    }, t
                }(a.Component));
            var E = Object(d.a)(function(e) {
                return {
                    addonInstances: e.addonInstances
                }
            })(v);
            n.d(t, !1, function() {
                return v
            }), n.d(t, "a", function() {
                return E
            })
        },
        ew8U: function(e, t, n) {
            "use strict";
            var o;
            ! function(e) {
                e[e.Release = 1] = "Release", e[e.Beta = 2] = "Beta", e[e.Alpha = 3] = "Alpha"
            }(o || (o = {}));
            var a = n("skf7");

            function r(e) {
                var t = e.gameVersionLatestFiles && e.gameVersionLatestFiles.filter(function(e) {
                    return e.fileType === o.Release
                }) || [];
                return t.length ? t[t.length - 1].projectFileName : null
            }

            function s(e) {
                return e.categories && e.categories.length ? e.categories.map(function(e) {
                    return e.name
                }).join(", ") : null
            }

            function i(e) {
                return e.authors && e.authors.length ? e.authors.map(function(e) {
                    return e.name
                }).join(", ") : null
            }

            function l(e) {
                if (e.latestFiles) {
                    var t = e.latestFiles.filter(function(e) {
                        return e.releaseType === a.a.Release
                    }) || [];
                    return t[t.length - 1]
                }
                return null
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return l
            })
        },
        f1MR: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("mrSG"),
                a = n("q1tI"),
                r = n("9C/b"),
                s = n("fvjX"),
                i = n("Ar/j"),
                l = n("4p7I"),
                d = n("yoKv"),
                c = n("ZS2+"),
                p = n("/7QA"),
                u = n("mCR5"),
                m = n("ew8U"),
                h = n("Ue10"),
                f = (n("h03b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.addon) return a.createElement(h.ab, null);
                        var e = Object(m.c)(this.props.addon),
                            t = Object(m.b)(this.props.addon),
                            n = Object(m.a)(this.props.addon),
                            o = Object(p.g)(this.props.addon.downloadCount, {
                                maximumFractionDigits: 1
                            });
                        return a.createElement(h.Ya, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            className: "addon-header"
                        }, a.createElement(h.S, {
                            className: "addon-header__logo",
                            src: this.props.addon.primaryCategoryAvatarUrl,
                            alt: this.props.addon.name
                        }), a.createElement(h.Ya, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            margin: {
                                left: 2
                            }
                        }, a.createElement(h.Ya, {
                            display: h.X.Flex,
                            alignItems: h.f.End
                        }, a.createElement(h.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(h.W, {
                            fontSize: h.Ca.Size3,
                            type: h.Wb.H2
                        }, this.props.addon.name)), a.createElement(h.W, {
                            color: h.O.Alt2
                        }, e)), a.createElement(h.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(h.W, null, t)), a.createElement(h.Ya, {
                            display: h.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(h.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(h.Ya, {
                            display: h.X.Flex,
                            alignItems: h.f.Center
                        }, a.createElement(h.tb, {
                            asset: h.ub.Download
                        }), o)), a.createElement(h.Ya, {
                            display: h.X.Flex,
                            alignItems: h.f.Center
                        }, a.createElement(h.tb, {
                            asset: h.ub.NavProfile
                        }), n)), a.createElement(h.Ya, {
                            className: "addon-header__action"
                        }, a.createElement(u.a, {
                            addon: this.props.addon,
                            instance: this.props.addonInstance
                        }))))
                    }, t
                }(a.Component));
            var g, b = Object(i.b)(function(e) {
                    return {
                        addon: e.addon,
                        addonInstance: e.addonInstance,
                        initialized: e.initialized
                    }
                })(f),
                I = n("u5aL"),
                C = n("BLOD");
            ! function(e) {
                e.ContextMenuButton = "context-menu-button"
            }(g || (g = {}));
            var A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        contextOpen: !1
                    }, t.onBack = function(e) {
                        e.preventDefault(), t.props.history.goBack()
                    }, t.closeContextMenu = function() {
                        t.setState({
                            contextOpen: !1
                        })
                    }, t.toggleContextMenu = function() {
                        t.setState({
                            contextOpen: !t.state.contextOpen
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.addon ? a.createElement(h.Ya, {
                        display: h.X.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        },
                        justifyContent: h.Xa.Between
                    }, a.createElement(h.z, {
                        onClick: this.onBack,
                        type: h.F.Text,
                        icon: h.ub.AngleLeft
                    }, Object(p.d)("Back", "AddonDetailNavigationBar")), a.createElement(h.Ya, {
                        display: h.X.Flex
                    }, a.createElement(h.Ya, {
                        margin: {
                            right: 2
                        }
                    }, a.createElement(h.z, {
                        icon: h.ub.Popout,
                        targetBlank: !0,
                        type: h.F.Text,
                        linkTo: this.props.addon.websiteUrl
                    }, Object(p.d)("Website", "AddonDetailNavigation"))), a.createElement(I.a, {
                        onClickOut: this.closeContextMenu
                    }, a.createElement(h.Ya, {
                        position: h.kb.Relative
                    }, a.createElement(h.z, {
                        "data-test-selector": g.ContextMenuButton,
                        icon: h.ub.NavMore,
                        type: h.F.Text,
                        onClick: this.toggleContextMenu
                    }, Object(p.d)("More", "AddonDetailNavigation")), a.createElement(h.u, {
                        show: this.state.contextOpen,
                        direction: h.v.Left
                    }, a.createElement(C.a, {
                        addon: this.props.addon,
                        onClose: this.closeContextMenu
                    })))))) : a.createElement(h.ab, null)
                }, t
            }(a.Component);
            var v, E, O = Object(s.compose)(Object(i.b)(function(e) {
                return {
                    addon: e.addon,
                    initialized: e.initialized
                }
            }), r.a)(A);
            (v || (v = {})).ChangelogTab = "changelog-tab",
                function(e) {
                    e.Description = "description", e.Changelog = "changelog", e.Screenshots = "screenshots", e.Versions = "versions"
                }(E || (E = {}));
            var y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTabActive = function(e) {
                            var n = t.props.location.pathname;
                            switch (e) {
                                case E.Description:
                                    return n === "/mods/games/" + t.props.match.params.gameId + "/addons/" + t.props.match.params.addonId;
                                case E.Changelog:
                                    return n === "/mods/games/" + t.props.match.params.gameId + "/addons/" + t.props.match.params.addonId + "/changelog";
                                case E.Screenshots:
                                    return n === "/mods/games/" + t.props.match.params.gameId + "/addons/" + t.props.match.params.addonId + "/screenshots";
                                case E.Versions:
                                    return n === "/mods/games/" + t.props.match.params.gameId + "/addons/" + t.props.match.params.addonId + "/versions";
                                default:
                                    return !1
                            }
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(h.Ya, {
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, a.createElement(h.Hb, null, a.createElement(h.Gb, {
                            active: this.isTabActive(E.Description),
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/addons/" + this.props.match.params.addonId
                        }, a.createElement(h.W, {
                            transform: h.Vb.Uppercase
                        }, Object(p.d)("Overview", "AddonDetailTabs"))), a.createElement(h.Gb, {
                            "data-test-selector": v.ChangelogTab,
                            active: this.isTabActive(E.Changelog),
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/addons/" + this.props.match.params.addonId + "/changelog"
                        }, a.createElement(h.W, {
                            transform: h.Vb.Uppercase
                        }, Object(p.d)("Changelog", "AddonDetailTabs"))), a.createElement(h.Gb, {
                            active: this.isTabActive(E.Screenshots),
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/addons/" + this.props.match.params.addonId + "/screenshots"
                        }, a.createElement(h.W, {
                            transform: h.Vb.Uppercase
                        }, Object(p.d)("Screenshots", "AddonDetailTabs"))), a.createElement(h.Gb, {
                            active: this.isTabActive(E.Versions),
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/addons/" + this.props.match.params.addonId + "/versions"
                        }, a.createElement(h.W, {
                            transform: h.Vb.Uppercase
                        }, Object(p.d)("Versions", "AddonDetailTabs")))))
                    }, t
                }(a.Component),
                x = Object(s.compose)(r.a)(y),
                w = c.a.wrap(function() {
                    return n.e(132).then(n.bind(null, "CG/P"))
                }, "AddonDetailsDescriptionPage"),
                j = c.a.wrap(function() {
                    return n.e(131).then(n.bind(null, "eojJ"))
                }, "AddonDetailsScreenshotsPage"),
                T = c.a.wrap(function() {
                    return n.e(130).then(n.bind(null, "coCq"))
                }, "AddonDetailsChangelogPage"),
                F = c.a.wrap(function() {
                    return n.e(129).then(n.bind(null, "x5gZ"))
                }, "AddonDetailsVersionPage"),
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.initialized ? a.createElement(h.Ya, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(O, null), a.createElement(b, {
                            onInstall: this.props.onInstall
                        }), a.createElement(x, null), a.createElement(d.a, null, a.createElement(l.a, {
                            exact: !0,
                            path: "/mods/games/:gameId/addons/:addonId",
                            component: w
                        }), a.createElement(l.a, {
                            exact: !0,
                            path: "/mods/games/:gameId/addons/:addonId/changelog",
                            component: T
                        }), a.createElement(l.a, {
                            exact: !0,
                            path: "/mods/games/:gameId/addons/:addonId/screenshots",
                            component: j
                        }), a.createElement(l.a, {
                            exact: !0,
                            path: "/mods/games/:gameId/addons/:addonId/versions",
                            component: F
                        }))) : a.createElement(h.ab, null)
                    }, t
                }(a.Component);
            var M = Object(i.b)(function(e) {
                    return {
                        initialized: e.initialized
                    }
                })(k),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onInstall = function() {}, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.a, {
                            addonId: this.props.match.params.addonId
                        }, a.createElement(M, {
                            gameId: this.props.match.params.gameId,
                            onInstall: this.onInstall
                        }))
                    }, t
                }(a.Component),
                B = Object(s.compose)(r.a)(S);
            n.d(t, "AddonDetailsContainer", function() {
                return S
            }), n.d(t, "AddonDetailsPage", function() {
                return B
            })
        },
        gXjh: function(e, t, n) {
            "use strict";
            var o = n("3ir2");
            n.d(t, "a", function() {
                return o.b
            })
        },
        h03b: function(e, t, n) {},
        mCR5: function(e, t, n) {
            "use strict";
            var o, a = n("mrSG"),
                r = n("q1tI"),
                s = n("fvjX"),
                i = n("/7QA"),
                l = n("gXjh"),
                d = n("Ue10"),
                c = n("HN5L");
            ! function(e) {
                e.InstallButton = "install-button", e.UpdateButton = "update-button", e.StatusText = "status-text", e.WorkingCopy = "working-copy", e.InstallProgress = "install-progress"
            }(o || (o = {}));
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderInstallProgress = function(e) {
                        return r.createElement(d.Ya, {
                            display: d.X.Flex,
                            flexDirection: d.Aa.Column,
                            justifyContent: d.Xa.Center,
                            alignItems: d.f.Center,
                            "data-test-selector": o.InstallProgress
                        }, r.createElement(d.nb, {
                            value: e.progress
                        }), r.createElement(d.W, null, e.shortStatusText))
                    }, t.onUpdate = function() {
                        t.props.updateAddon(t.props.addon.id)
                    }, t.onInstall = function() {
                        t.props.installAddon(t.props.addon.id)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.operations[this.props.addon.id];
                    if (e) return this.renderInstallProgress(e);
                    if (!this.props.instance) return r.createElement(d.z, {
                        type: d.F.Hollow,
                        onClick: this.onInstall,
                        "data-test-selector": o.InstallButton
                    }, Object(i.d)("Install", "BrowsableAddon"));
                    switch (this.props.instance.status) {
                        case c.ModsIntegrationAddonStatus.Normal:
                            return r.createElement(d.W, {
                                "data-test-selector": o.StatusText
                            }, Object(i.d)("Up to Date", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.OutOfDate:
                            return r.createElement(d.z, {
                                type: d.F.Hollow,
                                onClick: this.onUpdate,
                                "data-test-selector": o.UpdateButton
                            }, Object(i.d)("Update", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.RecentlyUpdated:
                            return r.createElement(d.W, null, Object(i.d)("Recently Updated", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.Ignored:
                            return r.createElement(d.W, null, Object(i.d)("Ignored", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.Pending:
                            return r.createElement(d.W, null, Object(i.d)("Pending", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.WorkingCopy:
                            return r.createElement(d.Ya, {
                                display: d.X.Flex,
                                "data-test-selector": o.WorkingCopy
                            }, r.createElement(d.tb, {
                                asset: d.ub.Wrench
                            }), r.createElement(d.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, r.createElement(d.W, null, Object(i.d)("Working Copy", "InstalledAddon"))));
                        default:
                            return r.createElement(d.W, null, Object(i.d)("Installed", "InstalledAddon"))
                    }
                }, t
            }(r.Component);
            var u = Object(s.compose)(Object(l.a)(function(e) {
                return {
                    installAddon: e.installAddon,
                    updateAddon: e.updateAddon,
                    operations: e.operations
                }
            }))(p);
            n.d(t, !1, function() {
                return o
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return u
            })
        },
        skf7: function(e, t, n) {
            "use strict";
            var o;
            n.d(t, "a", function() {
                    return o
                }),
                function(e) {
                    e[e.Release = 1] = "Release", e[e.Beta = 2] = "Beta", e[e.Alpha = 3] = "Alpha"
                }(o || (o = {}))
        }
    }
]);