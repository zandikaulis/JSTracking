(window.webpackJsonp = window.webpackJsonp || []).push([
    [130], {
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var i = n("L9xt");
            n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return i.PageviewContent
            }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return i.PageviewLocation
            }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return i.PageviewMedium
            }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return i.SpadeEventType
            })
        },
        x5gZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, a = n("mrSG"),
                o = n("q1tI"),
                r = n("fvjX"),
                l = n("V+GM"),
                s = n("NvVO"),
                d = n("Ar/j"),
                c = n("gXjh"),
                u = n("Wzgq"),
                p = n("GnwI"),
                f = n("/7QA"),
                b = n("skf7"),
                m = n("Ue10"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDownload = function() {
                            t.props.onDownload(t.props.file)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(f.c)(new Date(this.props.file.fileDate), "short");
                        return o.createElement(m.Kb, null, o.createElement(m.Hb, null, e), o.createElement(m.Hb, null, this.props.file.fileName), o.createElement(m.Hb, null, b.a[this.props.file.releaseType]), o.createElement(m.Hb, null, this.props.installed && o.createElement(m.W, null, Object(f.d)("Installed", "AddonDetailVersion")), !this.props.installed && o.createElement(m.A, {
                            icon: m.rb.Download,
                            onClick: this.onDownload
                        })))
                    }, t
                }(o.Component);
            ! function(e) {
                e.SortingHeader = "sorting-header"
            }(i || (i = {}));
            var g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            dateSorting: m.zb.Descending
                        }, t.renderRows = function() {
                            return (t.state.dateSorting === m.zb.Descending ? t.props.files.sort(function(e, t) {
                                return new Date(t.fileDate).getTime() - new Date(e.fileDate).getTime()
                            }) : t.props.files.sort(function(e, t) {
                                return new Date(e.fileDate).getTime() - new Date(t.fileDate).getTime()
                            })).map(function(e) {
                                return o.createElement(h, {
                                    key: e.id,
                                    file: e,
                                    installed: t.props.installedFile === e.fileName,
                                    onDownload: t.props.onDownload
                                })
                            })
                        }, t.onChangeSort = function() {
                            t.setState({
                                dateSorting: t.state.dateSorting === m.zb.Descending ? m.zb.Ascending : m.zb.Descending
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderRows();
                        return o.createElement(m.Xa, {
                            padding: {
                                x: 2
                            }
                        }, o.createElement(m.Fb, null, o.createElement(m.Ib, null, o.createElement(m.Jb, {
                            "data-test-selector": i.SortingHeader,
                            onClick: this.onChangeSort,
                            sorting: this.state.dateSorting,
                            label: Object(f.d)("Release Date", "AddonDetailsVersionTable")
                        }), o.createElement(m.Jb, {
                            label: Object(f.d)("File Name", "AddonDetailsVersionTable")
                        }), o.createElement(m.Jb, {
                            label: Object(f.d)("File Type", "AddonDetailsVersionTable")
                        }), o.createElement(m.Jb, {
                            label: Object(f.d)("Actions", "AddonDetailsVersionTable")
                        })), o.createElement(m.Gb, null, e)))
                    }, t
                }(o.Component),
                w = n("3lt/"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            files: [],
                            initialized: !1
                        }, t.fetchFiles = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 5, , 6]), [4, Object(u.a)("api/addon/" + this.props.match.params.addonId + "/files")];
                                        case 1:
                                            return 200 !== (e = n.sent()).status ? [3, 3] : [4, e.json()];
                                        case 2:
                                            return t = n.sent(), this.setState({
                                                files: t,
                                                initialized: !0
                                            }), [3, 4];
                                        case 3:
                                            this.setState({
                                                initialized: !0
                                            }), n.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return n.sent(), this.setState({
                                                initialized: !0
                                            }), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onDownload = function(e) {
                            t.props.addon && t.props.installAddon(t.props.addon.id, void 0, e.id)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchFiles()
                    }, t.prototype.render = function() {
                        return this.state.initialized && this.props.addon ? o.createElement(g, {
                            files: this.state.files,
                            installedFile: this.props.addonInstance && this.props.addonInstance.installedFile.fileName,
                            onDownload: this.onDownload
                        }) : o.createElement(m.Xa, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            alignItems: m.f.Center
                        }, o.createElement(m.Za, null))
                    }, t
                }(o.Component);
            var v = Object(r.compose)(Object(p.b)("AddonDetailsVersionPage", {
                destination: s.a.DesklightModsGamesAvailable
            }), Object(l.a)({
                location: w.PageviewLocation.DesklightModsGamesAvailable
            }), Object(d.b)(function(e) {
                return {
                    addon: e.addon,
                    initialized: e.initialized,
                    addonInstance: e.addonInstance
                }
            }), Object(c.a)(function(e) {
                return {
                    installAddon: e.installAddon
                }
            }))(D);
            n.d(t, "AddonDetailsVersionComponent", function() {
                return D
            }), n.d(t, "AddonDetailsVersionPage", function() {
                return v
            })
        }
    }
]);