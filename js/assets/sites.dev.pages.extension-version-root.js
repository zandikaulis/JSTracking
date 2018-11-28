(window.webpackJsonp = window.webpackJsonp || []).push([
    [99], {
        dkpX: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                o = n("kRBY"),
                s = n("mrSG"),
                r = n("q1tI"),
                a = n("9C/b"),
                c = n("2INN"),
                l = n("mf+E"),
                p = n("jKe7"),
                d = n("fvjX"),
                b = n("/7QA"),
                u = n("ZS2+"),
                x = n("GnwI"),
                E = n("gtej"),
                m = n("Ue10"),
                v = "/console/extensions",
                h = u.a.wrap(function() {
                    return n.e(230).then(n.bind(null, "EDlC"))
                }, "DevExtensionVersionStatus"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.isActive = function(e, n) {
                            void 0 === n && (n = !1);
                            var i = t.props.match.params.action;
                            return !!i && (n ? i === e : i.indexOf(e) > -1)
                        }, t.actionLink = function(e) {
                            var n = t.props.match.params;
                            return "/console/extensions/" + n.extensionID + "/" + n.extensionVersion + "/" + e
                        }, t.redirectToExtensionStatus = function() {
                            var e = t.props.match.params,
                                n = e.extensionID,
                                i = e.extensionVersion,
                                o = v + "/" + n + "/" + i + "/status";
                            return r.createElement(l.a, {
                                to: o
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return r.createElement(l.a, {
                            to: "/login"
                        });
                        var e = this.props.match.params,
                            t = e.extensionID,
                            n = e.extensionVersion;
                        return r.createElement(m.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(E.a, {
                            extensionID: t,
                            extensionVersion: n
                        }), r.createElement(m.sb, {
                            centered: !0
                        }, r.createElement("header", {
                            className: "dev-dashboard__header"
                        }, r.createElement(m.Ya, {
                            margin: {
                                y: 4
                            }
                        }, r.createElement(m.Hb, null, r.createElement(m.Gb, {
                            linkTo: this.actionLink("status"),
                            active: this.isActive("status", !0)
                        }, Object(b.d)("Version Status", "DevExtensionVersionRoot")), r.createElement(m.Gb, {
                            linkTo: this.actionLink("assets"),
                            active: this.isActive("assets", !0)
                        }, Object(b.d)("Version Assets", "DevExtensionVersionRoot")), r.createElement(m.Gb, {
                            linkTo: this.actionLink("discovery"),
                            active: this.isActive("discovery", !0)
                        }, Object(b.d)("Discovery Details", "DevExtensionVersionRoot")), r.createElement(m.Gb, {
                            linkTo: this.actionLink("capabilities"),
                            active: this.isActive("capabilities", !0)
                        }, Object(b.d)("Extension Capabilities", "DevExtensionVersionRoot")), r.createElement(m.Gb, {
                            linkTo: this.actionLink("hosting"),
                            active: this.isActive("hosting", !0)
                        }, Object(b.d)("Asset Hosting", "DevExtensionVersionRoot")), r.createElement(m.Gb, {
                            linkTo: this.actionLink("access"),
                            active: this.isActive("access", !0)
                        }, Object(b.d)("Access", "DevExtensionVersionRoot")), r.createElement(m.Gb, {
                            linkTo: this.actionLink("review"),
                            active: this.isActive("review", !0)
                        }, Object(b.d)("Review Details", "DevExtensionVersionRoot"))))), r.createElement(m.Ya, {
                            display: m.X.Block
                        }, r.createElement(p.a, null, r.createElement(c.a, {
                            exact: !0,
                            path: "/console/extensions/:extensionID/:extensionVersion/status",
                            component: h
                        }), r.createElement(c.a, {
                            path: "*",
                            render: this.redirectToExtensionStatus
                        })))))
                    }, t
                }(r.Component),
                V = Object(d.compose)(Object(x.b)("DevExtensionVersionRoot", {
                    autoReportInteractive: !0
                }), a.a)(f);
            var D = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e),
                    user: Object(o.e)(e)
                }
            })(V);
            n.d(t, "DevExtensionVersionRoot", function() {
                return D
            })
        },
        gtej: function(e, t, n) {
            "use strict";
            var i, o = n("mrSG"),
                s = n("q1tI"),
                r = n("fvjX"),
                a = n("/7QA"),
                c = n("GnwI"),
                l = n("Ue10");
            n("k1Qg");
            ! function(e) {
                e.ExtensionClientIDLabel = "ext-client-id-label", e.ExtensionNameLabel = "ext-name-label", e.ExtensionVersionsLabel = "ext-versions-label", e.ExtensionVersionLabel = "ext-version-label", e.ExtensionSeparatorLabel = "ext-separator-label"
            }(i || (i = {}));
            var p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = Object(a.d)("Extension Authorization Settings", "DevExtensionVersionHeader"),
                            t = {
                                x: 4,
                                y: 1
                            };
                        return s.createElement(l.Fb, {
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            background: l.r.Base,
                            borderBottom: !0
                        }, s.createElement(l.Fb, {
                            className: "version-header__nav",
                            display: l.X.Flex,
                            flexGrow: 1,
                            alignSelf: l.g.Stretch,
                            alignItems: l.f.Center,
                            padding: t,
                            borderRight: !0
                        }, s.createElement(l.U, {
                            "data-test-selector": i.ExtensionNameLabel,
                            to: "/console/extensions"
                        }, this.props.extensionName || Object(a.d)("Dashboard", "DevExtensionVersionHeader")), this.renderSeparator(), this.renderVersion()), s.createElement(l.Fb, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            padding: t,
                            borderRight: !0,
                            fullHeight: !0
                        }, s.createElement(l.W, {
                            type: l.Wb.Strong,
                            bold: !0
                        }, Object(a.d)("Client ID", "DevExtensionVersionHeader")), s.createElement(l.W, {
                            "data-test-selector": i.ExtensionClientIDLabel,
                            color: l.O.Alt2,
                            type: l.Wb.Span
                        }, this.props.extensionID)), s.createElement(l.Ya, {
                            padding: t,
                            fullHeight: !0
                        }, s.createElement(l.z, {
                            icon: l.ub.Gear,
                            ariaLabel: e
                        }, e)))
                    }, t.prototype.renderVersion = function() {
                        var e = Object(a.d)("Versions", "DevExtensionVersionHeader");
                        if (!this.props.extensionVersion) return s.createElement(l.W, {
                            "data-test-selector": i.ExtensionVersionsLabel,
                            type: l.Wb.Span
                        }, e);
                        var t = "/console/extensions/" + this.props.extensionID;
                        return s.createElement(s.Fragment, null, s.createElement(l.U, {
                            "data-test-selector": i.ExtensionVersionsLabel,
                            to: t
                        }, e), this.renderSeparator(), s.createElement(l.W, {
                            "data-test-selector": i.ExtensionVersionLabel,
                            type: l.Wb.Span
                        }, this.props.extensionVersion))
                    }, t.prototype.renderSeparator = function() {
                        return s.createElement(l.W, {
                            "data-test-selector": i.ExtensionSeparatorLabel,
                            type: l.Wb.Span
                        }, " ", "/", " ")
                    }, t
                }(s.Component),
                d = Object(r.compose)(Object(c.b)("DevExtensionVersionHeader", {
                    autoReportInteractive: !0
                }))(p);
            n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return d
            })
        },
        k1Qg: function(e, t, n) {}
    }
]);