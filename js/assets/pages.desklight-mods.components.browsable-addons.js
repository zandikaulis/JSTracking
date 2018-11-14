(window.webpackJsonp = window.webpackJsonp || []).push([
    [137], {
        "5fUb": function(e, t, n) {},
        "7i+i": function(e, t, n) {},
        BLOD: function(e, t, n) {
            "use strict";
            var o = n("mrSG"),
                r = n("q1tI"),
                s = n("9C/b"),
                a = n("fvjX"),
                i = n("/7QA"),
                d = n("4rCz"),
                l = n("gXjh"),
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
            var u, h = n("Ue10"),
                g = n("HN5L");
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
                                    return r.createElement(c.a, {
                                        key: n,
                                        title: e.name,
                                        value: e.path,
                                        onClick: t.onFolderOpen,
                                        "data-test-selector": u.BrowseFolderOption
                                    })
                                });
                                return r.createElement(h.Qa, {
                                    position: h.kb.Relative
                                }, r.createElement("div", {
                                    "data-test-selector": u.BrowseFolder,
                                    onMouseOver: t.showFolders,
                                    onMouseOut: t.hideFolders
                                }, r.createElement(c.a, {
                                    title: Object(i.d)("Browse Folders", "InstalledContextMenu"),
                                    more: !0
                                }), r.createElement(h.u, {
                                    show: t.state.browseFoldersOpen,
                                    direction: h.v.Left
                                }, e)))
                            }
                            return t.props.instance.moduleFolders && t.props.instance.moduleFolders.length ? r.createElement(c.a, {
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
                        return t.props.instance.hasUpdate ? r.createElement(c.a, {
                            title: Object(i.d)("Update", "InstalledContextMenu"),
                            icon: h.ub.Download,
                            borderTop: !0,
                            borderBottom: !0,
                            "data-test-selector": u.DiskActionOption,
                            onClick: t.onUpdate
                        }) : r.createElement(c.a, {
                            title: Object(i.d)("Reinstall", "InstalledContextMenu"),
                            icon: h.ub.Download,
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
                        d.q.integrations && d.q.integrations.mods && (d.q.integrations.mods.openAddonFolder({
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
                    return r.createElement(h.Ya, {
                        margin: {
                            top: 2
                        }
                    }, e, r.createElement(c.a, {
                        title: Object(i.d)("Auto Install Updates", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceAutoInstallUpdates ? h.ub.Check : void 0,
                        onClick: this.setAutoInstallUpdates
                    }), r.createElement(c.a, {
                        title: Object(i.d)("Install Libraries Seperately", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceAlternateFile ? h.ub.Check : void 0,
                        onClick: this.setInstallSeperatly
                    }), r.createElement(c.a, {
                        title: Object(i.d)("Ignored", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferenceIsIgnored ? h.ub.Check : void 0,
                        onClick: this.setIsignored
                    }), r.createElement(h.Qa, {
                        position: h.kb.Relative
                    }, r.createElement("div", {
                        "data-test-selector": u.ReleaseTypeItem,
                        onMouseOver: this.showReleaseTypes,
                        onMouseOut: this.hideReleaseTypes
                    }, r.createElement(c.a, {
                        title: Object(i.d)("Release Type", "InstalledContextMenu"),
                        more: !0
                    }), r.createElement(h.u, {
                        show: this.state.releaseTypesOpen,
                        direction: h.v.Left
                    }, r.createElement(c.a, {
                        "data-test-selector": u.ReleaseOption,
                        title: Object(i.d)("Release", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === g.ModsIntegrationFileType.Release ? h.ub.Check : void 0,
                        value: g.ModsIntegrationFileType.Release,
                        onClick: this.setFileType,
                        borderBottom: !0
                    }), r.createElement(c.a, {
                        title: Object(i.d)("Beta", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === g.ModsIntegrationFileType.Beta ? h.ub.Check : void 0,
                        value: g.ModsIntegrationFileType.Beta,
                        onClick: this.setFileType
                    }), r.createElement(c.a, {
                        title: Object(i.d)("Alpha", "InstalledContextMenu"),
                        icon: this.props.instance.preferences.preferredReleaseType === g.ModsIntegrationFileType.Alpha ? h.ub.Check : void 0,
                        value: g.ModsIntegrationFileType.Alpha,
                        onClick: this.setFileType
                    })))), r.createElement(c.a, {
                        title: Object(i.d)("Report a Bug", "InstalledContextMenu"),
                        icon: h.ub.Sword,
                        borderTop: !0,
                        onClick: this.reportABug,
                        "data-test-selector": u.ReportABugOption
                    }), r.createElement(c.a, {
                        title: Object(i.d)("View Addon Website", "InstalledContextMenu"),
                        icon: h.ub.Popout,
                        onClick: this.visitWebsite,
                        "data-test-selector": u.VisitWebsiteOption
                    }), r.createElement(c.a, {
                        title: Object(i.d)("View Changelogs", "InstalledContextMenu"),
                        icon: h.ub.ViewerList,
                        onClick: this.viewChanelogs,
                        "data-test-selector": u.ViewChangelogOption
                    }), t, r.createElement(c.a, {
                        title: Object(i.d)("Delete Settings (Saved Variables)", "InstalledContextMenu"),
                        icon: h.ub.Close,
                        borderBottom: !0
                    }), r.createElement(c.a, {
                        title: Object(i.d)("Delete", "InstalledContextMenu"),
                        icon: h.ub.Trash,
                        interactableType: h.Wa.Alert,
                        onClick: this.onUninstall
                    }))
                }, t
            }(r.Component);
            var m, b = Object(a.compose)(s.a, Object(l.a)(function(e) {
                return {
                    uninstallAddon: e.uninstallAddon,
                    installAddon: e.installAddon,
                    updateAddon: e.updateAddon
                }
            }))(f);
            ! function(e) {
                e.OpenSiteOption = "open-site", e.InstallOption = "install"
            }(m || (m = {}));
            var C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openSite = function() {
                        window.open(t.props.addon.clientUrl), t.props.onClose()
                    }, t.onInstall = function() {
                        t.props.installAddon(t.props.addon.id), t.props.onClose()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(h.Ya, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(c.a, {
                        icon: h.ub.Download,
                        title: Object(i.d)("Install", "NotInstalledMenu"),
                        borderBottom: !0,
                        borderTop: !0,
                        "data-test-selector": m.InstallOption,
                        onClick: this.onInstall
                    }), r.createElement(c.a, {
                        icon: h.ub.Popout,
                        title: Object(i.d)("Browse Addon Website", "NotInstalledMenu"),
                        onClick: this.openSite,
                        "data-test-selector": m.OpenSiteOption
                    }))
                }, t
            }(r.Component);
            var A = Object(l.a)(function(e) {
                    return {
                        installAddon: e.installAddon
                    }
                })(C),
                y = n("ew8U"),
                v = (n("5fUb"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAddonHeader = function() {
                            var e = Object(y.c)(t.props.addon);
                            return r.createElement(h.Ya, {
                                padding: {
                                    x: 1
                                },
                                display: h.X.Flex,
                                alignItems: h.f.Center,
                                className: "addon-context-menu__header"
                            }, r.createElement(h.q, {
                                src: t.props.addon.primaryCategoryAvatarUrl,
                                alt: t.props.addon.name,
                                size: 36
                            }), r.createElement(h.Ya, {
                                margin: {
                                    left: 1
                                }
                            }, r.createElement(h.W, {
                                type: h.Wb.H2,
                                fontSize: h.Ca.Size4
                            }, t.props.addon.name), r.createElement(h.W, {
                                color: h.O.Alt2
                            }, e)))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.renderAddonHeader(),
                            n = this.props.addonInstances.find(function(t) {
                                return t.addon.id === e.props.addon.id
                            }),
                            o = n ? r.createElement(b, {
                                addon: this.props.addon,
                                instance: n.installedData,
                                onClose: this.props.onClose
                            }) : r.createElement(A, {
                                addon: this.props.addon,
                                onClose: this.props.onClose
                            });
                        return r.createElement(h.Ya, {
                            padding: {
                                top: 1
                            },
                            className: "addon-context-menu"
                        }, t, o)
                    }, t
                }(r.Component));
            var w = Object(l.a)(function(e) {
                return {
                    addonInstances: e.addonInstances
                }
            })(v);
            n.d(t, !1, function() {
                return v
            }), n.d(t, "a", function() {
                return w
            })
        },
        E7BC: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("mrSG"),
                r = n("cr+I"),
                s = n("q1tI"),
                a = n("9C/b"),
                i = n("fvjX"),
                d = n("/7QA"),
                l = n("8/mp"),
                c = n("V+GM"),
                p = n("+GjP"),
                u = n("NvVO"),
                h = n("2xye"),
                g = n("3ir2"),
                f = n("YTtd"),
                m = n("rk8K"),
                b = n("Wzgq"),
                C = n("GnwI"),
                A = n("fvh5"),
                y = n("Ue10"),
                v = n("u5aL"),
                w = n("BLOD"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchTerm: ""
                        }, t.renderCategoryOptions = function() {
                            var e = s.createElement("option", {
                                    key: 0,
                                    value: 0
                                }, Object(d.d)("All Categories", "BrowsableAddonsNavigationBar")),
                                n = t.props.categories.map(function(e) {
                                    return s.createElement("option", {
                                        key: e.id,
                                        value: e.id
                                    }, e.name)
                                });
                            return [e].concat(n)
                        }, t.onCategoryChange = function(e) {
                            var n = e.target.value;
                            t.props.onCategoryChange(parseInt(n, 10))
                        }, t.onSearchTermChange = function(e) {
                            var n = e.target.value;
                            t.setState({
                                searchTerm: n
                            }, function() {
                                t.searchTimer && (clearTimeout(t.searchTimer), t.searchTimer = 0), t.searchTimer = window.setTimeout(function() {
                                    t.props.onTermChange(t.state.searchTerm), clearTimeout(t.searchTimer), t.searchTimer = 0
                                }, 200)
                            })
                        }, t.onFeatured = function() {
                            t.props.history.push("/mods/games/" + t.props.match.params.gameId + "/featured")
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderCategoryOptions();
                        return s.createElement(y.Ya, {
                            display: y.X.Flex,
                            margin: {
                                y: 1
                            },
                            justifyContent: y.Xa.Between
                        }, s.createElement(y.Ya, null, s.createElement(y.z, {
                            onClick: this.props.onRefresh,
                            icon: y.ub.Refresh,
                            type: y.F.Text
                        }, Object(d.d)("Refresh", "BrowsableAddonNavigationBar")), s.createElement(y.z, {
                            disabled: !this.props.canDownload,
                            onClick: this.props.onDownload,
                            icon: y.ub.ToBottom,
                            type: y.F.Text
                        }, Object(d.d)("Install", "BrowsableAddonNavigationBar")), s.createElement(y.z, {
                            onClick: this.onFeatured,
                            icon: y.ub.GridLayout,
                            type: y.F.Text
                        }, Object(d.d)("Featured", "BrowsableAddonNavigationBar"))), s.createElement(y.Ya, {
                            display: y.X.Flex
                        }, s.createElement(y.Ya, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(y.Ab, {
                            onChange: this.onCategoryChange,
                            value: this.props.selectedCategory.toString()
                        }, e)), s.createElement(y.Sa, {
                            icon: y.ub.NavSearch,
                            type: y.Ua.Search,
                            placeholder: Object(d.d)("Search", "BrowsableAddonsNavigationBar"),
                            value: this.state.searchTerm,
                            onChange: this.onSearchTermChange
                        })))
                    }, t
                }(s.Component);
            var S = Object(i.compose)(Object(f.b)(function(e) {
                    return {
                        instance: e.selectedGameInstance
                    }
                }), a.a)(I),
                E = n("mCR5"),
                O = n("ew8U"),
                x = (n("7i+i"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getSubtitle = function() {
                            var e = Object(O.d)(t.props.addon);
                            return e ? e.fileName : Object(d.d)("Unkown Version", "BrowsableAddon")
                        }, t.getGameVersion = function() {
                            var e = t.props.addon.gameVersionLatestFiles && t.props.addon.gameVersionLatestFiles.filter(function(e) {
                                return 1 === e.fileType
                            }) || [];
                            return e.length ? e[e.length - 1].gameVersion : Object(d.d)("N/A", "BrowsableAddon")
                        }, t.getDate = function() {
                            var e = Object(O.d)(t.props.addon);
                            return e ? Object(d.c)(new Date(e.fileDate)) : Object(d.d)("Unknown", "BrowsableAddon")
                        }, t.onContextMenu = function(e) {
                            t.props.onContextClick(t.props.addon, e.clientX, e.clientY)
                        }, t.selectAddon = function(e) {
                            var n = m.a.Single;
                            e.ctrlKey ? n = m.a.Addition : e.shiftKey && (n = m.a.Range);
                            var o = {
                                addonId: t.props.addon.id,
                                index: t.props.index
                            };
                            t.props.onSelect(o, n)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.getSubtitle(),
                            n = this.getGameVersion(),
                            o = this.getDate(),
                            r = Object(d.g)(this.props.addon.downloadCount, {
                                maximumFractionDigits: 1
                            }),
                            a = this.props.selected ? y.r.Alt2 : y.r.Base,
                            i = this.props.instances.find(function(t) {
                                return t.installedData.id === e.props.addon.id
                            });
                        return s.createElement(y.Ra, {
                            background: a
                        }, s.createElement("div", {
                            onContextMenu: this.onContextMenu,
                            className: "browsable-addon",
                            onClick: this.selectAddon
                        }, s.createElement("div", {
                            className: "browsable-addon__avatar"
                        }, s.createElement(y.Ya, {
                            display: y.X.Flex,
                            justifyContent: y.Xa.Center
                        }, s.createElement(y.q, {
                            src: this.props.addon.primaryCategoryAvatarUrl,
                            alt: this.props.addon.name,
                            size: 40
                        }))), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, s.createElement(y.Ya, {
                            className: "browsable-addon__name"
                        }, s.createElement(y.U, {
                            underline: !1,
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/addons/" + this.props.addon.id
                        }, s.createElement(y.W, {
                            className: "browsable-addon__title",
                            color: y.O.Base
                        }, this.props.addon.name)), s.createElement(y.W, null, t))), s.createElement("div", {
                            className: "browsable-addon__action"
                        }, s.createElement(y.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: y.X.Flex,
                            justifyContent: y.Xa.Center,
                            alignItems: y.f.Center
                        }, s.createElement(E.a, {
                            instance: i && i.installedData,
                            addon: this.props.addon
                        }))), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, r), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, this.props.addon.gamePopularityRank), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, o), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, this.props.addon.primaryCategoryName), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, n), s.createElement(y.Kb, {
                            verticalAlign: y.gc.Middle
                        }, this.props.addon.primaryAuthorName)))
                    }, t
                }(s.Component));
            var T, j = Object(i.compose)(Object(g.b)(function(e) {
                return {
                    instances: e.addonInstances
                }
            }), a.a)(x);
            ! function(e) {
                e.AddonName = "addon-name-selector"
            }(T || (T = {}));
            var B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            nameSorting: y.Cb.Default,
                            downloadsSorting: y.Cb.Default,
                            topSorting: y.Cb.Ascending,
                            latestSorting: y.Cb.Default,
                            categorySorting: y.Cb.Default,
                            gameVersionSorting: y.Cb.Default,
                            authorSorting: y.Cb.Default
                        }, t.renderAddons = function() {
                            return t.props.addons.map(function(e, n) {
                                var o = t.props.selectedAddons.some(function(t) {
                                    return e.id === t.addonId
                                });
                                return s.createElement(j, {
                                    addon: e,
                                    key: n,
                                    onContextClick: t.props.onContextClick,
                                    onSelect: t.props.onSelect,
                                    index: n,
                                    selected: o
                                })
                            })
                        }, t.renderNoResult = function() {
                            return t.props.addons.length ? null : s.createElement(y.Ya, {
                                fullWidth: !0,
                                display: y.X.Flex,
                                justifyContent: y.Xa.Center,
                                margin: {
                                    top: 5
                                }
                            }, s.createElement(y.W, {
                                color: y.O.Alt2,
                                fontSize: y.Ca.Size3
                            }, Object(d.d)("No result match your search criteria.", "BrowsableAddonsTable")))
                        }, t.sortByName = function() {
                            var e = t.setSorting("nameSorting");
                            t.props.onSort(A.a.Name, e === y.Cb.Descending)
                        }, t.sortByDownloads = function() {
                            var e = t.setSorting("downloadsSorting");
                            t.props.onSort(A.a.TotalDownloads, e === y.Cb.Descending)
                        }, t.sortByRanking = function() {
                            var e = t.setSorting("topSorting");
                            t.props.onSort(A.a.Popularity, e === y.Cb.Descending)
                        }, t.sortByLatest = function() {
                            var e = t.setSorting("latestSorting");
                            t.props.onSort(A.a.LastUpdated, e === y.Cb.Descending)
                        }, t.sortByCategory = function() {
                            var e = t.setSorting("categorySorting");
                            t.props.onSort(A.a.Category, e === y.Cb.Descending)
                        }, t.sortByGameVersion = function() {
                            var e = t.setSorting("gameVersionSorting");
                            t.props.onSort(A.a.GameVersion, e === y.Cb.Descending)
                        }, t.sortByAuthor = function() {
                            var e = t.setSorting("authorSorting");
                            t.props.onSort(A.a.Author, e === y.Cb.Descending)
                        }, t.setSorting = function(e) {
                            var n, o = t.state[e] === y.Cb.Descending ? y.Cb.Ascending : y.Cb.Descending,
                                r = ((n = {
                                    nameSorting: y.Cb.Default,
                                    downloadsSorting: y.Cb.Default,
                                    topSorting: y.Cb.Default,
                                    latestSorting: y.Cb.Default,
                                    categorySorting: y.Cb.Default,
                                    gameVersionSorting: y.Cb.Default,
                                    authorSorting: y.Cb.Default
                                })[e] = o, n);
                            return t.setState(r), o
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderAddons(),
                            t = this.renderNoResult();
                        return s.createElement(s.Fragment, null, s.createElement(y.Ib, null, s.createElement(y.Lb, null, s.createElement(y.Mb, {
                            label: ""
                        }), s.createElement(y.Mb, {
                            "data-test-selector": T.AddonName,
                            label: Object(d.d)("Addon", "BrowsableAddonsPage"),
                            sorting: this.state.nameSorting,
                            onClick: this.sortByName
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Action", "BrowsableAddonsTable")
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Downloads", "BrowsableAddonsPage"),
                            sorting: this.state.downloadsSorting,
                            onClick: this.sortByDownloads
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Top", "BrowsableAddonsPage"),
                            sorting: this.state.topSorting,
                            onClick: this.sortByRanking
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Latest", "BrowsableAddonsTable"),
                            sorting: this.state.latestSorting,
                            onClick: this.sortByLatest
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Category", "BrowsableAddonsTable"),
                            sorting: this.state.categorySorting,
                            onClick: this.sortByCategory
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Game Version", "BrowsableAddonsTable"),
                            sorting: this.state.gameVersionSorting,
                            onClick: this.sortByGameVersion
                        }), s.createElement(y.Mb, {
                            label: Object(d.d)("Author", "BrowsableAddonsTable"),
                            sorting: this.state.authorSorting,
                            onClick: this.sortByAuthor
                        })), s.createElement(y.Jb, null, e)), t)
                    }, t
                }(s.Component),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showContextMenu: !1,
                            contextY: 0,
                            contextX: 0
                        }, t.elementRef = s.createRef(), t.onContextClick = function(e, n, o) {
                            t.state.showContextMenu ? t.closeContext() : t.setState({
                                showContextMenu: !0,
                                contextY: o,
                                contextX: n,
                                contextAddon: e
                            })
                        }, t.renderContextMenu = function() {
                            if (!t.state.showContextMenu || !t.state.contextAddon || !t.elementRef.current) return null;
                            var e = t.props.addonInstances.find(function(e) {
                                    return e.addon.id === t.state.contextAddon.id
                                }),
                                n = window.innerHeight,
                                o = e ? 400 : 120,
                                r = t.elementRef.current.getBoundingClientRect(),
                                a = r.left,
                                i = r.top;
                            n > o && o + t.state.contextY > n && (i += o);
                            var d = t.state.contextX - a + "px",
                                l = t.state.contextY - i + "px";
                            return s.createElement(y.Ya, {
                                position: y.kb.Relative
                            }, s.createElement(v.a, {
                                onClickOut: t.closeContext
                            }, s.createElement(y.u, {
                                show: !0,
                                noTail: !0,
                                offsetX: d,
                                offsetY: l
                            }, s.createElement(w.a, {
                                addon: t.state.contextAddon,
                                onClose: t.closeContext
                            }))))
                        }, t.closeContext = function() {
                            t.setState({
                                contextY: 0,
                                contextX: 0,
                                contextAddon: void 0,
                                showContextMenu: !1
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderContextMenu();
                        return s.createElement("div", {
                            ref: this.elementRef
                        }, s.createElement(y.Ya, {
                            padding: {
                                x: 2
                            },
                            position: y.kb.Relative,
                            className: "browsable-addons"
                        }, e, s.createElement(S, {
                            categories: this.props.categories,
                            selectedCategory: this.props.selectedCategory,
                            onCategoryChange: this.props.onCategoryChange,
                            onTermChange: this.props.onTermChange,
                            onRefresh: this.props.onRefresh,
                            onDownload: this.props.onDownload,
                            canDownload: !!this.props.selectedAddons.length
                        }), s.createElement(y.Ya, null, s.createElement(B, {
                            addons: this.props.addons,
                            onSort: this.props.onSort,
                            onContextClick: this.onContextClick,
                            selectedAddons: this.props.selectedAddons,
                            onSelect: this.props.onSelect
                        }))))
                    }, t
                }(s.Component),
                F = 25,
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            addons: [],
                            initialized: !1,
                            currentPosition: 0,
                            loading: !1,
                            errorMessage: null,
                            sortDescending: !0,
                            currentSorting: t.parseParam("sort", A.a.Popularity),
                            categories: [],
                            selectedCategory: t.parseParam("category", 0),
                            searchTerm: t.parseParam("term", ""),
                            canPaginate: !1,
                            selectedAddons: []
                        }, t.fetchAddons = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, s;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.instance || this.state.loading || !this.props.section) return [2, []];
                                            this.setState({
                                                loading: !0
                                            }), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 6, , 7]), e = {
                                                gameId: this.props.instance.gameId,
                                                sectionId: this.props.section.Id,
                                                categoryId: this.state.selectedCategory,
                                                pageSize: F,
                                                index: this.state.currentPosition,
                                                sort: this.state.currentSorting,
                                                sortDescending: this.state.sortDescending,
                                                searchFilter: this.state.searchTerm
                                            }, t = "api/addon/search?" + Object(r.stringify)(e), [4, Object(b.a)(t)];
                                        case 2:
                                            return 200 !== (n = o.sent()).status ? [3, 4] : [4, n.json()];
                                        case 3:
                                            return s = o.sent(), this.setState({
                                                initialized: !0,
                                                canPaginate: s.length >= F
                                            }), [2, s];
                                        case 4:
                                            return this.setState({
                                                initialized: !0,
                                                canPaginate: !1
                                            }), [2, []];
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return o.sent(), this.setState({
                                                initialized: !0,
                                                canPaginate: !1,
                                                errorMessage: Object(d.d)("An Error occured", "BrowsableAddonsPage")
                                            }), [2, []];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onSort = function(e, n) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t = this;
                                return o.__generator(this, function(r) {
                                    return this.setState({
                                        currentSorting: e,
                                        sortDescending: n,
                                        currentPosition: 0
                                    }, function() {
                                        return o.__awaiter(t, void 0, void 0, function() {
                                            var e;
                                            return o.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, this.fetchAddons()];
                                                    case 1:
                                                        return e = t.sent(), this.setState({
                                                            addons: e,
                                                            loading: !1,
                                                            selectedAddons: []
                                                        }), [2]
                                                }
                                            })
                                        })
                                    }), [2]
                                })
                            })
                        }, t.onScroll = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e = this;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, new Promise(function(t) {
                                                e.setState({
                                                    currentPosition: e.state.currentPosition + F
                                                }, function() {
                                                    return o.__awaiter(e, void 0, void 0, function() {
                                                        var e;
                                                        return o.__generator(this, function(n) {
                                                            switch (n.label) {
                                                                case 0:
                                                                    return [4, this.fetchAddons()];
                                                                case 1:
                                                                    return e = n.sent(), this.setState({
                                                                        addons: this.state.addons.concat(e),
                                                                        loading: !1
                                                                    }, function() {
                                                                        t()
                                                                    }), [2]
                                                            }
                                                        })
                                                    })
                                                })
                                            })];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.fetchCategories = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.section) return [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 5, , 6]), [4, Object(b.a)("api/category/section/" + this.props.section.Id)];
                                        case 2:
                                            return 200 !== (e = n.sent()).status ? [3, 4] : [4, e.json()];
                                        case 3:
                                            t = n.sent(), this.setState({
                                                categories: t,
                                                currentPosition: 0
                                            }), n.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return n.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onCategoryChange = function(e) {
                            t.setState({
                                selectedCategory: e,
                                currentPosition: 0,
                                selectedAddons: []
                            })
                        }, t.onTermChange = function(e) {
                            t.setState({
                                searchTerm: e,
                                currentPosition: 0,
                                selectedAddons: []
                            })
                        }, t.onSelect = function(e, n) {
                            var o = t.state.selectedAddons.some(function(t) {
                                return t.addonId === e.addonId
                            });
                            if (n === m.a.Addition)
                                if (1 === t.state.selectedAddons.length && o) t.setState({
                                    selectedAddons: []
                                });
                                else if (o) {
                                var r = t.state.selectedAddons.findIndex(function(t) {
                                        return t.addonId === e.addonId
                                    }),
                                    s = t.state.selectedAddons.slice(0, r).concat(t.state.selectedAddons.slice(r + 1));
                                s = t.sortAddons(s), t.setState({
                                    selectedAddons: s
                                })
                            } else {
                                s = t.state.selectedAddons.concat([e]);
                                s = t.sortAddons(s), t.setState({
                                    selectedAddons: s
                                })
                            } else if (n === m.a.Range) {
                                if (!t.state.selectedAddons.length) return void t.setState({
                                    selectedAddons: [e]
                                });
                                var a = t.state.selectedAddons[0].index > e.index,
                                    i = t.state.selectedAddons[t.state.selectedAddons.length - 1].index < e.index;
                                if (!a && !i) return;
                                var d = [];
                                a ? t.state.addons.forEach(function(n, o) {
                                    o < e.index || o >= t.state.selectedAddons[0].index || d.push({
                                        index: o,
                                        addonId: n.id
                                    })
                                }) : i && t.state.addons.forEach(function(n, o) {
                                    o <= t.state.selectedAddons[t.state.selectedAddons.length - 1].index || o > e.index || d.push({
                                        index: o,
                                        addonId: n.id
                                    })
                                });
                                s = t.state.selectedAddons.concat(d);
                                s = t.sortAddons(s), t.setState({
                                    selectedAddons: s
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
                        }, t.onRefresh = function() {
                            t.props.refresh(), t.fetchAddons()
                        }, t.onDownload = function() {
                            t.state.selectedAddons.forEach(function(e) {
                                t.props.installAddon(e.addonId)
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.instance && this.props.section ? (this.fetchCategories(), [4, this.fetchAddons()]) : [3, 2];
                                    case 1:
                                        e = t.sent(), this.setState({
                                            addons: e,
                                            loading: !1
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var n, r;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.instance && this.props.section ? (n = !1, this.state.initialized || this.state.loading ? e.instance && this.props.instance && e.instance.gameId !== this.props.instance.gameId && (n = !0) : n = !0, e.section && this.props.section && e.section.Id !== this.props.section.Id ? (this.fetchCategories(), n = !0) : !e.section && this.props.section && (this.fetchCategories(), n = !0), t.selectedCategory !== this.state.selectedCategory && (n = !0), t.searchTerm !== this.state.searchTerm && (n = !0), n ? [4, this.fetchAddons()] : [3, 2]) : [2];
                                    case 1:
                                        r = o.sent(), this.setState({
                                            addons: r,
                                            loading: !1
                                        }), o.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        if (!this.props.instance || !this.props.section || !this.props.gameData) return s.createElement(y.Ya, {
                            display: y.X.Flex,
                            justifyContent: y.Xa.Center,
                            alignItems: y.f.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(y.ab, null));
                        var e = this.state.initialized && !this.state.loading && this.state.canPaginate;
                        return s.createElement(y.Ya, null, s.createElement(k, {
                            onSort: this.onSort,
                            instance: this.props.instance,
                            addons: this.state.addons,
                            categories: this.state.categories,
                            selectedCategory: this.state.selectedCategory,
                            onCategoryChange: this.onCategoryChange,
                            onTermChange: this.onTermChange,
                            selectedAddons: this.state.selectedAddons,
                            onSelect: this.onSelect,
                            onDownload: this.onDownload,
                            onRefresh: this.onRefresh,
                            addonInstances: this.props.addonInstances
                        }), s.createElement(l.a, {
                            enabled: e,
                            loadMore: this.onScroll
                        }))
                    }, t.prototype.parseParam = function(e, t) {
                        var n = this.props.location.search,
                            o = Object(p.a)(n, e);
                        return o && "number" == typeof t && (o = parseInt(o, 10)), o || t
                    }, t
                }(s.Component);
            var M = Object(i.compose)(Object(C.b)("BrowsableaddonsPage", {
                destination: u.a.DesklightModsBrowsableAddons
            }), Object(c.a)({
                location: h.PageviewLocation.DesklightModsBrowsableAddons
            }), Object(f.b)(function(e) {
                return {
                    instance: e.selectedGameInstance,
                    gameData: e.gameData,
                    section: e.selectedSection
                }
            }), Object(g.b)(function(e) {
                return {
                    addonInstances: e.addonInstances,
                    refresh: e.refresh,
                    installAddon: e.installAddon
                }
            }), a.a)(D);
            n.d(t, "BrowsableAddonsContainer", function() {
                return D
            }), n.d(t, "BrowsableaddonsPage", function() {
                return M
            })
        },
        ew8U: function(e, t, n) {
            "use strict";
            var o;
            ! function(e) {
                e[e.Release = 1] = "Release", e[e.Beta = 2] = "Beta", e[e.Alpha = 3] = "Alpha"
            }(o || (o = {}));
            var r = n("skf7");

            function s(e) {
                var t = e.gameVersionLatestFiles && e.gameVersionLatestFiles.filter(function(e) {
                    return e.fileType === o.Release
                }) || [];
                return t.length ? t[t.length - 1].projectFileName : null
            }

            function a(e) {
                return e.categories && e.categories.length ? e.categories.map(function(e) {
                    return e.name
                }).join(", ") : null
            }

            function i(e) {
                return e.authors && e.authors.length ? e.authors.map(function(e) {
                    return e.name
                }).join(", ") : null
            }

            function d(e) {
                if (e.latestFiles) {
                    var t = e.latestFiles.filter(function(e) {
                        return e.releaseType === r.a.Release
                    }) || [];
                    return t[t.length - 1]
                }
                return null
            }
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return d
            })
        },
        fvh5: function(e, t, n) {
            "use strict";
            var o;
            n.d(t, "a", function() {
                    return o
                }),
                function(e) {
                    e[e.Featured = 0] = "Featured", e[e.Popularity = 1] = "Popularity", e[e.LastUpdated = 2] = "LastUpdated", e[e.Name = 3] = "Name", e[e.Author = 4] = "Author", e[e.TotalDownloads = 5] = "TotalDownloads", e[e.Category = 6] = "Category", e[e.GameVersion = 7] = "GameVersion"
                }(o || (o = {}))
        },
        gXjh: function(e, t, n) {
            "use strict";
            var o = n("3ir2");
            n.d(t, "a", function() {
                return o.b
            })
        },
        mCR5: function(e, t, n) {
            "use strict";
            var o, r = n("mrSG"),
                s = n("q1tI"),
                a = n("fvjX"),
                i = n("/7QA"),
                d = n("gXjh"),
                l = n("Ue10"),
                c = n("HN5L");
            ! function(e) {
                e.InstallButton = "install-button", e.UpdateButton = "update-button", e.StatusText = "status-text", e.WorkingCopy = "working-copy", e.InstallProgress = "install-progress"
            }(o || (o = {}));
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderInstallProgress = function(e) {
                        return s.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Xa.Center,
                            alignItems: l.f.Center,
                            "data-test-selector": o.InstallProgress
                        }, s.createElement(l.nb, {
                            value: e.progress
                        }), s.createElement(l.W, null, e.shortStatusText))
                    }, t.onUpdate = function() {
                        t.props.updateAddon(t.props.addon.id)
                    }, t.onInstall = function() {
                        t.props.installAddon(t.props.addon.id)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.operations[this.props.addon.id];
                    if (e) return this.renderInstallProgress(e);
                    if (!this.props.instance) return s.createElement(l.z, {
                        type: l.F.Hollow,
                        onClick: this.onInstall,
                        "data-test-selector": o.InstallButton
                    }, Object(i.d)("Install", "BrowsableAddon"));
                    switch (this.props.instance.status) {
                        case c.ModsIntegrationAddonStatus.Normal:
                            return s.createElement(l.W, {
                                "data-test-selector": o.StatusText
                            }, Object(i.d)("Up to Date", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.OutOfDate:
                            return s.createElement(l.z, {
                                type: l.F.Hollow,
                                onClick: this.onUpdate,
                                "data-test-selector": o.UpdateButton
                            }, Object(i.d)("Update", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.RecentlyUpdated:
                            return s.createElement(l.W, null, Object(i.d)("Recently Updated", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.Ignored:
                            return s.createElement(l.W, null, Object(i.d)("Ignored", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.Pending:
                            return s.createElement(l.W, null, Object(i.d)("Pending", "AddonAction"));
                        case c.ModsIntegrationAddonStatus.WorkingCopy:
                            return s.createElement(l.Ya, {
                                display: l.X.Flex,
                                "data-test-selector": o.WorkingCopy
                            }, s.createElement(l.tb, {
                                asset: l.ub.Wrench
                            }), s.createElement(l.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, s.createElement(l.W, null, Object(i.d)("Working Copy", "InstalledAddon"))));
                        default:
                            return s.createElement(l.W, null, Object(i.d)("Installed", "InstalledAddon"))
                    }
                }, t
            }(s.Component);
            var u = Object(a.compose)(Object(d.a)(function(e) {
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