(window.webpackJsonp = window.webpackJsonp || []).push([
    [138], {
        "5fUb": function(e, t, n) {},
        BLOD: function(e, t, n) {
            "use strict";
            var o = n("mrSG"),
                s = n("q1tI"),
                a = n("9C/b"),
                r = n("fvjX"),
                d = n("/7QA"),
                l = n("4rCz"),
                i = n("gXjh"),
                c = n("GsbM");

            function p(e, t) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return d.p.integrations && d.p.integrations.mods ? (n = Object.assign({}, {
                                    gameInstanceGuid: e.gameInstanceGuid,
                                    addonId: e.id,
                                    preferenceAlternateFile: e.preferences.preferenceAlternateFile,
                                    preferenceAutoInstallUpdates: e.preferences.preferenceAutoInstallUpdates,
                                    preferenceIsIgnored: e.preferences.preferenceIsIgnored,
                                    preferenceReleaseType: e.preferences.preferredReleaseType
                                }, t), [4, d.p.integrations.mods.updateInstalledAddonProperties(n)]) : [3, 2];
                            case 1:
                                return [2, o.sent()];
                            case 2:
                                return [2]
                        }
                    })
                })
            }
            var u, f = n("Ue10"),
                m = n("HN5L");
            ! function(e) {
                e.ReleaseTypeItem = "release-type-item", e.ReleaseOption = "release-option", e.BrowseFolder = "browse-folder", e.BrowseFolderOption = "browse-folder-option", e.ReportABugOption = "report-a-bug", e.VisitWebsiteOption = "visit-website", e.ViewChangelogOption = "view-changelog", e.DiskActionOption = "disk-action"
            }(u || (u = {}));
            var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        releaseTypesOpen: !1,
                        browseFoldersOpen: !1
                    }, t.renderBrowseFolder = function() {
                        if (t.props.instance.supportsBrowseFolder) {
                            if (t.props.instance.moduleFolders && t.props.instance.moduleFolders.length > 1 || !1) {
                                var e = t.props.instance.moduleFolders && t.props.instance.moduleFolders.map(function(e, n) {
                                    return s.createElement(c.a, {
                                        key: n,
                                        title: e.name,
                                        value: e.path,
                                        onClick: t.onFolderOpen,
                                        "data-test-selector": u.BrowseFolderOption
                                    })
                                });
                                return s.createElement(f.Qa, {
                                    position: f.kb.Relative
                                }, s.createElement("div", {
                                    "data-test-selector": u.BrowseFolder,
                                    onMouseOver: t.showFolders,
                                    onMouseOut: t.hideFolders
                                }, s.createElement(c.a, {
                                    title: Object(d.d)("Browse Folders", "InstalledContextMenu"),
                                    more: !0
                                }), s.createElement(f.u, {
                                    show: t.state.browseFoldersOpen,
                                    direction: f.v.Left
                                }, e)))
                            }
                            return t.props.instance.moduleFolders && t.props.instance.moduleFolders.length ? s.createElement(c.a, {
                                title: Object(d.d)("Browse Folder", "InstalledContextMenu"),
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
                        return t.props.instance.hasUpdate ? s.createElement(c.a, {
                            title: Object(d.d)("Update", "InstalledContextMenu"),
                            icon: f.ub.Download,
                            borderTop: !0,
                            borderBottom: !0,
                            "data-test-selector": u.DiskActionOption,
                            onClick: t.onUpdate
                        }) : s.createElement(c.a, {
                            title: Object(d.d)("Reinstall", "InstalledContextMenu"),
                            icon: f.ub.Download,
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
                    return s.createElement(f.Ya, {
                        margin: {
                            top: 2
                        }
                    }, e, s.createElement(c.a, {
                        title: Object(d.d)("Auto Install Updates", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceAutoInstallUpdates ? f.ub.Check : void 0,
                        onClick: this.setAutoInstallUpdates
                    }), s.createElement(c.a, {
                        title: Object(d.d)("Install Libraries Seperately", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceAlternateFile ? f.ub.Check : void 0,
                        onClick: this.setInstallSeperatly
                    }), s.createElement(c.a, {
                        title: Object(d.d)("Ignored", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceIsIgnored ? f.ub.Check : void 0,
                        onClick: this.setIsignored
                    }), s.createElement(f.Qa, {
                        position: f.kb.Relative
                    }, s.createElement("div", {
                        "data-test-selector": u.ReleaseTypeItem,
                        onMouseOver: this.showReleaseTypes,
                        onMouseOut: this.hideReleaseTypes
                    }, s.createElement(c.a, {
                        title: Object(d.d)("Release Type", "InstalledContextMenu"),
                        more: !0
                    }), s.createElement(f.u, {
                        show: this.state.releaseTypesOpen,
                        direction: f.v.Left
                    }, s.createElement(c.a, {
                        "data-test-selector": u.ReleaseOption,
                        title: Object(d.d)("Release", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === m.ModsIntegrationFileType.Release ? f.ub.Check : void 0,
                        value: m.ModsIntegrationFileType.Release,
                        onClick: this.setFileType,
                        borderBottom: !0
                    }), s.createElement(c.a, {
                        title: Object(d.d)("Beta", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === m.ModsIntegrationFileType.Beta ? f.ub.Check : void 0,
                        value: m.ModsIntegrationFileType.Beta,
                        onClick: this.setFileType
                    }), s.createElement(c.a, {
                        title: Object(d.d)("Alpha", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === m.ModsIntegrationFileType.Alpha ? f.ub.Check : void 0,
                        value: m.ModsIntegrationFileType.Alpha,
                        onClick: this.setFileType
                    })))), s.createElement(c.a, {
                        title: Object(d.d)("Report a Bug", "InstalledContextMenu"),
                        icon: f.ub.Sword,
                        borderTop: !0,
                        onClick: this.reportABug,
                        "data-test-selector": u.ReportABugOption
                    }), s.createElement(c.a, {
                        title: Object(d.d)("View Addon Website", "InstalledContextMenu"),
                        icon: f.ub.Popout,
                        onClick: this.visitWebsite,
                        "data-test-selector": u.VisitWebsiteOption
                    }), s.createElement(c.a, {
                        title: Object(d.d)("View Changelogs", "InstalledContextMenu"),
                        icon: f.ub.ViewerList,
                        onClick: this.viewChanelogs,
                        "data-test-selector": u.ViewChangelogOption
                    }), t, s.createElement(c.a, {
                        title: Object(d.d)("Delete Settings (Saved Variables)", "InstalledContextMenu"),
                        icon: f.ub.Close,
                        borderBottom: !0
                    }), s.createElement(c.a, {
                        title: Object(d.d)("Delete", "InstalledContextMenu"),
                        icon: f.ub.Trash,
                        interactableType: f.Wa.Alert,
                        onClick: this.onUninstall
                    }))
                }, t
            }(s.Component);
            var g, A = Object(r.compose)(a.a, Object(i.a)(function(e) {
                return {
                    uninstallAddon: e.uninstallAddon,
                    installAddon: e.installAddon,
                    updateAddon: e.updateAddon
                }
            }))(h);
            ! function(e) {
                e.OpenSiteOption = "open-site", e.InstallOption = "install"
            }(g || (g = {}));
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openSite = function() {
                        window.open(t.props.addon.clientUrl), t.props.onClose()
                    }, t.onInstall = function() {
                        t.props.installAddon(t.props.addon.id), t.props.onClose()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(f.Ya, {
                        padding: {
                            top: 2
                        }
                    }, s.createElement(c.a, {
                        icon: f.ub.Download,
                        title: Object(d.d)("Install", "NotInstalledMenu"),
                        borderBottom: !0,
                        borderTop: !0,
                        "data-test-selector": g.InstallOption,
                        onClick: this.onInstall
                    }), s.createElement(c.a, {
                        icon: f.ub.Popout,
                        title: Object(d.d)("Browse Addon Website", "NotInstalledMenu"),
                        onClick: this.openSite,
                        "data-test-selector": g.OpenSiteOption
                    }))
                }, t
            }(s.Component);
            var I = Object(i.a)(function(e) {
                    return {
                        installAddon: e.installAddon
                    }
                })(b),
                C = n("ew8U"),
                v = (n("5fUb"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAddonHeader = function() {
                            var e = Object(C.c)(t.props.addon);
                            return s.createElement(f.Ya, {
                                padding: {
                                    x: 1
                                },
                                display: f.X.Flex,
                                alignItems: f.f.Center,
                                className: "addon-context-menu__header"
                            }, s.createElement(f.q, {
                                src: t.props.addon.primaryCategoryAvatarUrl,
                                alt: t.props.addon.name,
                                size: 36
                            }), s.createElement(f.Ya, {
                                margin: {
                                    left: 1
                                }
                            }, s.createElement(f.W, {
                                type: f.Wb.H2,
                                fontSize: f.Ca.Size4
                            }, t.props.addon.name), s.createElement(f.W, {
                                color: f.O.Alt2
                            }, e)))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.renderAddonHeader(),
                            n = this.props.addonInstances.find(function(t) {
                                return t.addon.id === e.props.addon.id
                            }),
                            o = n ? s.createElement(A, {
                                addon: this.props.addon,
                                instance: n.installedData,
                                onClose: this.props.onClose
                            }) : s.createElement(I, {
                                addon: this.props.addon,
                                onClose: this.props.onClose
                            });
                        return s.createElement(f.Ya, {
                            padding: {
                                top: 1
                            },
                            className: "addon-context-menu"
                        }, t, o)
                    }, t
                }(s.Component));
            var y = Object(i.a)(function(e) {
                return {
                    addonInstances: e.addonInstances
                }
            })(v);
            n.d(t, !1, function() {
                return v
            }), n.d(t, "a", function() {
                return y
            })
        },
        Pjs9: function(e, t, n) {
            "use strict";
            n.r(t);
            var o, s = n("mrSG"),
                a = n("q1tI"),
                r = n("9C/b"),
                d = n("fvjX"),
                l = n("u5aL"),
                i = n("V+GM"),
                c = n("NvVO"),
                p = n("2xye"),
                u = n("BLOD"),
                f = n("3ir2"),
                m = n("/7QA"),
                h = n("Ue10"),
                g = function(e) {
                    return a.createElement(h.Ya, null, a.createElement(h.Ya, {
                        padding: {
                            left: 5,
                            top: 5
                        }
                    }, a.createElement(h.Ya, {
                        margin: {
                            bottom: 3
                        }
                    }, a.createElement(h.W, {
                        type: h.Wb.P,
                        fontSize: h.Ca.Size3
                    }, Object(m.d)("Ready for battle? Install addons and you can manage them here!", "DesklightModsNoAddonsFound"))), a.createElement(h.Ya, {
                        display: h.X.Flex
                    }, a.createElement(h.Ya, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(h.z, {
                        linkTo: "/mods/games/" + e.gameId + "/featured"
                    }, Object(m.d)("Browse for Addons", "DesklightModsNoAddonsFound"))), a.createElement(h.z, {
                        type: h.F.Hollow
                    }, Object(m.d)("Refresh", "DesklightModsNoAddonsFound")))))
                },
                A = n("rk8K"),
                b = n("GnwI"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchTerm: ""
                        }, t.setSearchTerm = function(e) {
                            t.setState({
                                searchTerm: e.target.value
                            })
                        }, t.onSearchSubmit = function(e) {
                            e.preventDefault(), t.props.onSearch(t.state.searchTerm)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(h.Ya, {
                            display: h.X.Flex,
                            padding: {
                                y: 1
                            },
                            justifyContent: h.Xa.Between
                        }, a.createElement(h.Ya, {
                            display: h.X.Flex
                        }, a.createElement(h.z, {
                            type: h.F.Text,
                            icon: h.ub.Refresh,
                            onClick: this.props.onRefresh
                        }, Object(m.d)("Refresh", "InstalledAddonNavigationBar")), a.createElement(h.z, {
                            type: h.F.Text,
                            icon: h.ub.Download,
                            onClick: this.props.onUpdateAll
                        }, Object(m.d)("Update All", "InstalledAddonNavigationBar")), a.createElement(h.z, {
                            type: h.F.Text,
                            icon: h.ub.Download,
                            disabled: !this.props.canUpdate,
                            onClick: this.props.onUpdate
                        }, Object(m.d)("Update", "InstalledAddonNavigationBar")), a.createElement(h.z, {
                            type: h.F.Text,
                            icon: h.ub.Close,
                            disabled: !this.props.canDelete,
                            onClick: this.props.onDelete
                        }, Object(m.d)("Delete", "InstalledAddonNavigationBar")), a.createElement(h.z, {
                            type: h.F.Text,
                            icon: h.ub.Copy,
                            onClick: this.props.onSync
                        }, Object(m.d)("Sync", "InstalledAddonNavigationBar"))), a.createElement(h.Ya, null, a.createElement("form", {
                            onSubmit: this.onSearchSubmit
                        }, a.createElement(h.wb, {
                            placeholder: Object(m.d)("Search", "InstalledAddonNavigationBar"),
                            value: this.state.searchTerm,
                            onChange: this.setSearchTerm
                        }))))
                    }, t
                }(a.Component),
                C = n("mCR5"),
                v = n("ew8U"),
                y = (n("lpFT"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getLatestVersion = function() {
                            var e = Object(v.d)(t.props.instance.addon);
                            return e ? e.fileName : Object(m.d)("Unknown Version", "InstalledAddon")
                        }, t.getInstalledVersion = function() {
                            return t.props.instance.installedData.installedFile.fileName
                        }, t.getGameVersion = function() {
                            var e = t.props.instance.addon.gameVersionLatestFiles && t.props.instance.addon.gameVersionLatestFiles.filter(function(e) {
                                return 1 === e.fileType
                            }) || [];
                            return e.length ? e[e.length - 1].gameVersion : Object(m.d)("N/A", "InstalledAddon")
                        }, t.selectAddon = function(e) {
                            var n = A.a.Single;
                            e.ctrlKey ? n = A.a.Addition : e.shiftKey && (n = A.a.Range);
                            var o = {
                                addonId: t.props.instance.addon.id,
                                index: t.props.index
                            };
                            t.props.onSelect(o, n)
                        }, t.onContextMenu = function(e) {
                            t.props.onContextClick(t.props.instance, e.clientX, e.clientY)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.getLatestVersion(),
                            t = this.getGameVersion(),
                            n = this.getInstalledVersion(),
                            o = this.props.selected ? h.r.Alt2 : h.r.Base;
                        return a.createElement(h.Ra, {
                            background: o
                        }, a.createElement("div", {
                            onContextMenu: this.onContextMenu,
                            className: "installed-addon",
                            onClick: this.selectAddon
                        }, a.createElement("div", {
                            className: "installed-addon__avatar"
                        }, a.createElement(h.Ya, {
                            display: h.X.Flex,
                            justifyContent: h.Xa.Center
                        }, a.createElement(h.q, {
                            src: this.props.instance.addon.primaryCategoryAvatarUrl,
                            alt: this.props.instance.addon.name,
                            size: 40
                        }))), a.createElement(h.Kb, {
                            verticalAlign: h.gc.Middle
                        }, a.createElement(h.Ya, {
                            className: "installed-addon__name"
                        }, a.createElement(h.U, {
                            underline: !1,
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/addons/" + this.props.instance.addon.id
                        }, a.createElement(h.W, {
                            className: "installed-addon__title",
                            color: h.O.Base
                        }, this.props.instance.addon.name)), a.createElement(h.W, null, n))), a.createElement("div", {
                            className: "installed-addon__status"
                        }, a.createElement(h.Ya, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: h.X.Flex,
                            justifyContent: h.Xa.Center,
                            alignItems: h.f.Center
                        }, a.createElement(C.a, {
                            instance: this.props.instance.installedData,
                            addon: this.props.instance.addon
                        }))), a.createElement(h.Kb, {
                            verticalAlign: h.gc.Middle
                        }, e), a.createElement(h.Kb, {
                            verticalAlign: h.gc.Middle
                        }, t), a.createElement(h.Kb, {
                            verticalAlign: h.gc.Middle
                        }, this.props.instance.addon.primaryAuthorName)))
                    }, t
                }(a.Component)),
                E = Object(r.a)(y);
            ! function(e) {
                e.Name = "name", e.Status = "status"
            }(o || (o = {}));
            var x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            nameSorting: h.Cb.Default,
                            statusSorting: h.Cb.Default
                        }, t.renderAddons = function() {
                            return t.props.instances.map(function(e, n) {
                                var o = t.props.selectedAddons.some(function(t) {
                                    return t.addonId === e.addon.id
                                });
                                return a.createElement(E, {
                                    key: n,
                                    instance: e,
                                    onContextClick: t.props.onContextClick,
                                    onSelect: t.props.onSelect,
                                    selected: o,
                                    index: n
                                })
                            })
                        }, t.sortByName = function() {
                            var e = t.setSorting("nameSorting");
                            t.props.onSort(o.Name, e === h.Cb.Descending)
                        }, t.sortByStatus = function() {
                            var e = t.setSorting("statusSorting");
                            t.props.onSort(o.Status, e === h.Cb.Descending)
                        }, t.setSorting = function(e) {
                            var n, o = t.state[e] === h.Cb.Descending ? h.Cb.Ascending : h.Cb.Descending,
                                s = ((n = {
                                    nameSorting: h.Cb.Default,
                                    statusSorting: h.Cb.Default
                                })[e] = o, n);
                            return t.setState(s), o
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderAddons();
                        return a.createElement(h.Ib, null, a.createElement(h.Lb, null, a.createElement(h.Mb, {
                            label: ""
                        }), a.createElement(h.Mb, {
                            label: Object(m.d)("Addon", "InstalledAddonsTable"),
                            sorting: this.state.nameSorting,
                            onClick: this.sortByName
                        }), a.createElement(h.Mb, {
                            label: Object(m.d)("Status", "InstalledAddonsTable"),
                            sorting: this.state.statusSorting,
                            onClick: this.sortByStatus
                        }), a.createElement(h.Mb, {
                            label: Object(m.d)("Latest Version", "InstalledAddonsTable")
                        }), a.createElement(h.Mb, {
                            label: Object(m.d)("Game Version", "InstalledAddonsTable")
                        }), a.createElement(h.Mb, {
                            label: Object(m.d)("Author", "InstalledAddonsTable")
                        })), a.createElement(h.Jb, null, e))
                    }, t
                }(a.Component),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showContextMenu: !1,
                            contextY: 0,
                            contextX: 0,
                            addonInstances: t.props.addonInstances,
                            selectedAddons: []
                        }, t.elementRef = a.createRef(), t.onContextClick = function(e, n, o) {
                            t.state.showContextMenu ? t.closeContext() : t.setState({
                                showContextMenu: !0,
                                contextY: o,
                                contextX: n,
                                contextInstance: e
                            })
                        }, t.onSort = function(e, n) {
                            var s = t.props.addonInstances.slice();
                            switch (e) {
                                case o.Name:
                                    s = n ? s.sort(function(e, t) {
                                        return t.addon.name.localeCompare(e.addon.name)
                                    }) : s.sort(function(e, t) {
                                        return e.addon.name.localeCompare(t.addon.name)
                                    });
                                    break;
                                case o.Status:
                                    s = n ? s.sort(function(e, t) {
                                        return t.installedData.status - e.installedData.status
                                    }) : s.sort(function(e, t) {
                                        return e.installedData.status - t.installedData.status
                                    })
                            }
                            t.setState({
                                addonInstances: s
                            })
                        }, t.renderContextMenu = function() {
                            if (!t.state.showContextMenu || !t.state.contextInstance || !t.elementRef.current) return null;
                            var e = window.innerHeight,
                                n = t.state.contextInstance ? 400 : 150,
                                o = t.elementRef.current.getBoundingClientRect(),
                                s = o.left,
                                r = o.top;
                            e > n && n + t.state.contextY > e && (r += n);
                            var d = t.state.contextX - s + "px",
                                i = t.state.contextY - r + "px";
                            return a.createElement(h.Ya, {
                                position: h.kb.Relative
                            }, a.createElement(l.a, {
                                onClickOut: t.closeContext
                            }, a.createElement(h.u, {
                                show: !0,
                                noTail: !0,
                                offsetX: d,
                                offsetY: i
                            }, a.createElement(u.a, {
                                addon: t.state.contextInstance.addon,
                                onClose: t.closeContext
                            }))))
                        }, t.closeContext = function() {
                            t.setState({
                                contextX: 0,
                                contextY: 0,
                                contextInstance: void 0,
                                showContextMenu: !1
                            })
                        }, t.onSelect = function(e, n) {
                            var o = t.state.selectedAddons.some(function(t) {
                                return t.addonId === e.addonId
                            });
                            if (n === A.a.Addition)
                                if (1 === t.state.selectedAddons.length && o) t.setState({
                                    selectedAddons: []
                                });
                                else if (o) {
                                var s = t.state.selectedAddons.findIndex(function(t) {
                                        return t.addonId === e.addonId
                                    }),
                                    a = t.state.selectedAddons.slice(0, s).concat(t.state.selectedAddons.slice(s + 1));
                                a = t.sortAddons(a), t.setState({
                                    selectedAddons: a
                                })
                            } else {
                                a = t.state.selectedAddons.concat([e]);
                                a = t.sortAddons(a), t.setState({
                                    selectedAddons: a
                                })
                            } else if (n === A.a.Range) {
                                if (!t.state.selectedAddons.length) return void t.setState({
                                    selectedAddons: [e]
                                });
                                var r = t.state.selectedAddons[0].index > e.index,
                                    d = t.state.selectedAddons[t.state.selectedAddons.length - 1].index < e.index;
                                if (!r && !d) return;
                                var l = [];
                                r ? t.state.addonInstances.forEach(function(n, o) {
                                    o < e.index || o >= t.state.selectedAddons[0].index || l.push({
                                        index: o,
                                        addonId: n.addon.id
                                    })
                                }) : d && t.state.addonInstances.forEach(function(n, o) {
                                    o <= t.state.selectedAddons[t.state.selectedAddons.length - 1].index || o > e.index || l.push({
                                        index: o,
                                        addonId: n.addon.id
                                    })
                                });
                                a = t.state.selectedAddons.concat(l);
                                a = t.sortAddons(a), t.setState({
                                    selectedAddons: a
                                })
                            } else o ? t.setState({
                                selectedAddons: []
                            }) : t.setState({
                                selectedAddons: [e]
                            })
                        }, t.sortAddons = function(e) {
                            return e.sort(function(e, t) {
                                return e.index - t.index
                            })
                        }, t.onSearch = function(e) {
                            var n = t.props.addonInstances.filter(function(t) {
                                return t.addon.name.toLowerCase().includes(e.toLowerCase())
                            });
                            t.setState({
                                selectedAddons: [],
                                addonInstances: n
                            })
                        }, t.onRefresh = function() {
                            t.props.refresh()
                        }, t.onUpdateAll = function() {
                            t.props.updateAll()
                        }, t.onUpdate = function() {
                            var e = t.state.selectedAddons.map(function(e) {
                                return e.addonId
                            });
                            t.props.updateAddons(e)
                        }, t.onSync = function() {}, t.onDelete = function() {
                            t.props.uninstallAddonsBatch(t.state.selectedAddons.map(function(e) {
                                return e.addonId
                            })), t.setState({
                                selectedAddons: []
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        this.props.addonInstances !== e.addonInstances && this.setState({
                            addonInstances: this.props.addonInstances
                        })
                    }, t.prototype.render = function() {
                        if (!this.props.addonInstances.length) return a.createElement(g, {
                            gameId: this.props.match.params.gameId
                        });
                        var e = this.renderContextMenu();
                        return a.createElement("div", {
                            ref: this.elementRef
                        }, a.createElement(h.Ya, {
                            padding: {
                                x: 2
                            }
                        }, e, a.createElement(I, {
                            onRefresh: this.onRefresh,
                            onSearch: this.onSearch,
                            onUpdateAll: this.onUpdateAll,
                            onUpdate: this.onUpdate,
                            onDelete: this.onDelete,
                            onSync: this.onSync,
                            canUpdate: !!this.state.selectedAddons.length,
                            canDelete: !!this.state.selectedAddons.length
                        }), a.createElement(x, {
                            instances: this.state.addonInstances,
                            onContextClick: this.onContextClick,
                            onSort: this.onSort,
                            onSelect: this.onSelect,
                            selectedAddons: this.state.selectedAddons
                        })))
                    }, t
                }(a.Component);
            var S = Object(d.compose)(Object(b.b)("InstalledAddonsPage", {
                destination: c.a.DesklightModsInstalledAddons
            }), Object(i.a)({
                location: p.PageviewLocation.DesklightModsInstalledAddons
            }), Object(f.b)(function(e) {
                return {
                    addonInstances: e.addonInstances,
                    refresh: e.refresh,
                    uninstallAddonsBatch: e.uninstallAddonsBatch,
                    updateAll: e.updateAllAddons,
                    updateAddons: e.updateAddonBatch
                }
            }), r.a)(O);
            n.d(t, "InstalledAddonsComponent", function() {
                return O
            }), n.d(t, "InstalledAddonsPage", function() {
                return S
            })
        },
        ew8U: function(e, t, n) {
            "use strict";
            var o;
            ! function(e) {
                e[e.Release = 1] = "Release", e[e.Beta = 2] = "Beta", e[e.Alpha = 3] = "Alpha"
            }(o || (o = {}));
            var s = n("skf7");

            function a(e) {
                var t = e.gameVersionLatestFiles && e.gameVersionLatestFiles.filter(function(e) {
                    return e.fileType === o.Release
                }) || [];
                return t.length ? t[t.length - 1].projectFileName : null
            }

            function r(e) {
                return e.categories && e.categories.length ? e.categories.map(function(e) {
                    return e.name
                }).join(", ") : null
            }

            function d(e) {
                return e.authors && e.authors.length ? e.authors.map(function(e) {
                    return e.name
                }).join(", ") : null
            }

            function l(e) {
                if (e.latestFiles) {
                    var t = e.latestFiles.filter(function(e) {
                        return e.releaseType === s.a.Release
                    }) || [];
                    return t[t.length - 1]
                }
                return null
            }
            n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "d", function() {
                return l
            })
        },
        gXjh: function(e, t, n) {
            "use strict";
            var o = n("3ir2");
            n.d(t, "a", function() {
                return o.b
            })
        },
        lpFT: function(e, t, n) {},
        mCR5: function(e, t, n) {
            "use strict";
            var o, s = n("mrSG"),
                a = n("q1tI"),
                r = n("fvjX"),
                d = n("/7QA"),
                l = n("gXjh"),
                i = n("Ue10"),
                c = n("HN5L");
            ! function(e) {
                e.InstallButton = "install-button", e.UpdateButton = "update-button", e.StatusText = "status-text", e.WorkingCopy = "working-copy", e.InstallProgress = "install-progress"
            }(o || (o = {}));
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderInstallProgress = function(e) {
                        return a.createElement(i.Ya, {
                            display: i.X.Flex,
                            flexDirection: i.Aa.Column,
                            justifyContent: i.Xa.Center,
                            alignItems: i.f.Center,
                            "data-test-selector": o.InstallProgress
                        }, a.createElement(i.nb, {
                            value: e.progress
                        }), a.createElement(i.W, null, e.shortStatusText))
                    }, t.onUpdate = function() {
                        t.props.updateAddon(t.props.addon.id)
                    }, t.onInstall = function() {
                        t.props.installAddon(t.props.addon.id)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.operations[this.props.addon.id];
                    if (e) return this.renderInstallProgress(e);
                    if (!this.props.instance) return a.createElement(i.z, {
                        type: i.F.Hollow,
                        onClick: this.onInstall,
                        "data-test-selector": o.InstallButton
                    }, Object(d.d)("Install", "BrowsableAddon"));
                    switch (this.props.instance.status) {
                        case c.ModsIntegrationAddonStatus.Normal:
                            return a.createElement(i.W, {
                                "data-test-selector": o.StatusText
                            }, Object(d.d)("Up to Date", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.OutOfDate:
                            return a.createElement(i.z, {
                                type: i.F.Hollow,
                                onClick: this.onUpdate,
                                "data-test-selector": o.UpdateButton
                            }, Object(d.d)("Update", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.RecentlyUpdated:
                            return a.createElement(i.W, null, Object(d.d)("Recently Updated", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.Ignored:
                            return a.createElement(i.W, null, Object(d.d)("Ignored", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.Pending:
                            return a.createElement(i.W, null, Object(d.d)("Pending", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.WorkingCopy:
                            return a.createElement(i.Ya, {
                                display: i.X.Flex,
                                "data-test-selector": o.WorkingCopy
                            }, a.createElement(i.tb, {
                                asset: i.ub.Wrench
                            }), a.createElement(i.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, a.createElement(i.W, null, Object(d.d)("Working Copy", "InstalledAddon"))));
                        default:
                            return a.createElement(i.W, null, Object(d.d)("Installed", "InstalledAddon"))
                    }
                }, t
            }(a.Component);
            var u = Object(r.compose)(Object(l.a)(function(e) {
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
        rk8K: function(e, t, n) {
            "use strict";
            var o;
            n.d(t, "a", function() {
                    return o
                }),
                function(e) {
                    e.Single = "single", e.Addition = "addition", e.Range = "range"
                }(o || (o = {}))
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