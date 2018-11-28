(window.webpackJsonp = window.webpackJsonp || []).push([
    [130], {
        x5gZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, a = n("mrSG"),
                o = n("q1tI"),
                l = n("fvjX"),
                r = n("V+GM"),
                s = n("NvVO"),
                d = n("Ar/j"),
                c = n("gXjh"),
                u = n("Wzgq"),
                p = n("GnwI"),
                f = n("/7QA"),
                b = n("skf7"),
                h = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDownload = function() {
                            t.props.onDownload(t.props.file)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(f.c)(new Date(this.props.file.fileDate), "short");
                        return o.createElement(h.Nb, null, o.createElement(h.Kb, null, e), o.createElement(h.Kb, null, this.props.file.fileName), o.createElement(h.Kb, null, b.a[this.props.file.releaseType]), o.createElement(h.Kb, null, this.props.installed && o.createElement(h.W, null, Object(f.d)("Installed", "AddonDetailVersion")), !this.props.installed && o.createElement(h.A, {
                            icon: h.ub.Download,
                            onClick: this.onDownload
                        })))
                    }, t
                }(o.Component);
            ! function(e) {
                e.SortingHeader = "sorting-header"
            }(i || (i = {}));
            var D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            dateSorting: h.Cb.Descending
                        }, t.renderRows = function() {
                            return (t.state.dateSorting === h.Cb.Descending ? t.props.files.sort(function(e, t) {
                                return new Date(t.fileDate).getTime() - new Date(e.fileDate).getTime()
                            }) : t.props.files.sort(function(e, t) {
                                return new Date(e.fileDate).getTime() - new Date(t.fileDate).getTime()
                            })).map(function(e) {
                                return o.createElement(m, {
                                    key: e.id,
                                    file: e,
                                    installed: t.props.installedFile === e.fileName,
                                    onDownload: t.props.onDownload
                                })
                            })
                        }, t.onChangeSort = function() {
                            t.setState({
                                dateSorting: t.state.dateSorting === h.Cb.Descending ? h.Cb.Ascending : h.Cb.Descending
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderRows();
                        return o.createElement(h.Ya, {
                            padding: {
                                x: 2
                            }
                        }, o.createElement(h.Ib, null, o.createElement(h.Lb, null, o.createElement(h.Mb, {
                            "data-test-selector": i.SortingHeader,
                            onClick: this.onChangeSort,
                            sorting: this.state.dateSorting,
                            label: Object(f.d)("Release Date", "AddonDetailsVersionTable")
                        }), o.createElement(h.Mb, {
                            label: Object(f.d)("File Name", "AddonDetailsVersionTable")
                        }), o.createElement(h.Mb, {
                            label: Object(f.d)("File Type", "AddonDetailsVersionTable")
                        }), o.createElement(h.Mb, {
                            label: Object(f.d)("Actions", "AddonDetailsVersionTable")
                        })), o.createElement(h.Jb, null, e)))
                    }, t
                }(o.Component),
                g = n("3lt/"),
                w = function(e) {
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
                        return this.state.initialized && this.props.addon ? o.createElement(D, {
                            files: this.state.files,
                            installedFile: this.props.addonInstance && this.props.addonInstance.installedFile.fileName,
                            onDownload: this.onDownload
                        }) : o.createElement(h.Ya, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: h.X.Flex,
                            justifyContent: h.Xa.Center,
                            alignItems: h.f.Center
                        }, o.createElement(h.ab, null))
                    }, t
                }(o.Component);
            var E = Object(l.compose)(Object(p.b)("AddonDetailsVersionPage", {
                destination: s.a.DesklightModsGamesAvailable
            }), Object(r.a)({
                location: g.PageviewLocation.DesklightModsGamesAvailable
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
            }))(w);
            n.d(t, "AddonDetailsVersionComponent", function() {
                return w
            }), n.d(t, "AddonDetailsVersionPage", function() {
                return E
            })
        }
    }
]);