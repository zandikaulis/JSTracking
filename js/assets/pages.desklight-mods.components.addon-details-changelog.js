(window.webpackJsonp = window.webpackJsonp || []).push([
    [131], {
        cVjR: function(e, t, n) {},
        coCq: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                r = n("V+GM"),
                s = n("NvVO"),
                c = n("2xye"),
                d = n("Ar/j"),
                l = n("ew8U"),
                g = n("Wzgq"),
                u = n("GnwI"),
                h = n("Ue10"),
                p = (n("cVjR"), function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e.changelog, t.querySelectorAll("a").forEach(function(e) {
                        e.setAttribute("target", "_BLANK")
                    }), i.createElement(h.Xa, {
                        padding: {
                            x: 2
                        },
                        className: "addon-detail-changelog"
                    }, i.createElement("div", {
                        className: "addon-detail-changelog__content",
                        dangerouslySetInnerHTML: {
                            __html: t.innerHTML
                        }
                    }))
                }),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            changelog: "",
                            initialized: !1
                        }, t.getChangelog = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 5, , 6]), [4, Object(g.a)("api/addon/" + this.props.match.params.addonId + "/file/" + e + "/changelog")];
                                        case 1:
                                            return 200 !== (t = a.sent()).status ? [3, 3] : [4, t.json()];
                                        case 2:
                                            return n = a.sent(), this.setState({
                                                changelog: n,
                                                initialized: !0
                                            }), [3, 4];
                                        case 3:
                                            this.setState({
                                                initialized: !0
                                            }), a.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return a.sent(), this.setState({
                                                initialized: !0
                                            }), [3, 6];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.addon) {
                            var e = Object(l.d)(this.props.addon);
                            e && this.getChangelog(e.id)
                        }
                    }, t.prototype.render = function() {
                        return this.state.initialized ? i.createElement(p, {
                            changelog: this.state.changelog
                        }) : i.createElement(h.Za, null)
                    }, t
                }(i.Component);
            var m = Object(o.compose)(Object(u.b)("AddonDetailsChangelogPage", {
                destination: s.a.DesklightModsAddonDetailsChangelog
            }), Object(r.a)({
                location: c.PageviewLocation.DesklightModsAddonDetailsChangelog
            }), Object(d.b)(function(e) {
                return {
                    addon: e.addon,
                    initialized: e.initialized
                }
            }))(f);
            n.d(t, "AddonDetailsChangelogComponent", function() {
                return f
            }), n.d(t, "AddonDetailsChangelogPage", function() {
                return m
            })
        }
    }
]);