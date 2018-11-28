(window.webpackJsonp = window.webpackJsonp || []).push([
    [134], {
        eojJ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("fvjX"),
                a = n("V+GM"),
                s = n("NvVO"),
                d = n("2xye"),
                c = n("Ar/j"),
                l = n("GnwI"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderScreenshots = function() {
                            return t.props.addon ? t.props.addon.attachments.map(function(e, t) {
                                return o.createElement(u.Ya, {
                                    margin: {
                                        bottom: 1
                                    },
                                    key: t
                                }, o.createElement(u.S, {
                                    alt: e.title,
                                    src: e.url
                                }))
                            }) : null
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.initialized || !this.props.addon) return o.createElement(u.Ya, {
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            alignItems: u.f.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, o.createElement(u.ab, null));
                        var e = this.renderScreenshots();
                        return o.createElement(u.Ya, {
                            padding: {
                                x: 2
                            }
                        }, e)
                    }, t
                }(o.Component);
            var h = Object(i.compose)(Object(l.b)("AddonDetailsScreenshotsPage", {
                destination: s.a.DesklightModsAddonDetailsScreenshots
            }), Object(a.a)({
                location: d.PageviewLocation.DesklightModsAddonDetailsScreenshots
            }), Object(c.b)(function(e) {
                return {
                    addon: e.addon,
                    initialized: e.initialized
                }
            }))(p);
            n.d(t, "AddonDetailsScreenshotsComponent", function() {
                return p
            }), n.d(t, "AddonDetailsScreenshotsPage", function() {
                return h
            })
        }
    }
]);