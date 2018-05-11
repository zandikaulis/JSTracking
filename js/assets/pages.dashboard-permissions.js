webpackJsonp([122], {
    "8uM1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, s = n("TToO"),
            a = n("GiK3"),
            i = n("6sO2"),
            o = n("QRuM"),
            l = n("pK/l"),
            c = n("puy8"),
            d = n("9u8h"),
            u = this,
            m = n("Odds"),
            h = {
                "data-test-selector": "login"
            },
            p = {
                "data-test-selector": "empty"
            },
            g = {
                "data-test-selector": "loading"
            },
            b = {
                "data-test-selector": "error"
            };
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
        }(r || (r = {}));
        var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editableChannels: [],
                        requestState: r.Loading
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.state.requestState === r.Loading ? a.createElement("div", s.__assign({}, g), "Loading...") : this.state.requestState === r.Error ? a.createElement("div", s.__assign({}, b), "'Error'") : this.state.requestState === r.Success ? 0 === this.state.editableChannels.length ? a.createElement(m._8, s.__assign({
                        display: m.R.Flex,
                        flexDirection: m.T.Column,
                        alignItems: m.c.Center,
                        alignContent: m.b.Center,
                        justifyContent: m._7.Center,
                        fullHeight: !0
                    }, p), a.createElement(m._8, {
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(m.m, {
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/58127/2.0",
                        alt: "CoolCat",
                        size: 50
                    })), a.createElement(m.Q, {
                        color: m.K.OverlayAlt,
                        fontSize: m.V.Size5
                    }, Object(i.d)("No channels to display", "DashboardPermissionsPage"))) : a.createElement(a.Fragment, null, this.state.editableChannels.map(function(e) {
                        return a.createElement(m._35, {
                            key: e.id,
                            alignItems: m.c.Center,
                            borderBottom: !0,
                            display: m.R.Flex,
                            justifyContent: m._7.Between,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(m._8, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, a.createElement(m.m, {
                            alt: e.login,
                            size: 30,
                            src: Object(c.c)(e.id, 30)
                        }), a.createElement(m._8, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(m.Q, s.__assign({}, h), e.login))), a.createElement(m._8, null, a.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            display: m.R.InlineFlex
                        }, a.createElement(m.v, {
                            type: m.B.Hollow
                        }, "Whisper")), a.createElement(m.v, {
                            linkTo: "/" + e.login + "/dashboard",
                            type: m.B.Text
                        }, Object(i.d)("Dashboard", "DashboardPermissionPage"))))
                    })) : void 0
                }, t.prototype.componentDidMount = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return s.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, (n = this.props.user.id, s.__awaiter(u, void 0, void 0, function() {
                                        return s.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, d.a.getOrThrow("https://api.twitch.tv/v5/permissions/channels/" + n + "/editable_channels")];
                                                case 1:
                                                    return [2, e.sent().body.editable_channels || []]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        editableChannels: e,
                                        requestState: r.Success
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        requestState: r.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var n
                        })
                    })
                }, t
            }(a.Component),
            _ = n("jnhC"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(_.a, null, a.createElement(m._58, null, a.createElement(m._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("p", null, Object(i.d)("As an editor, you can access a channel's Dashboard to help the owner manage the following activities:", "DashboardPermissionsPage"))), a.createElement("ul", null, a.createElement("li", null, Object(i.d)("Editing stream info", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Running commercial breaks", "DashboardPermissionPage")), a.createElement("li", null, Object(i.d)("Editing video info", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Uploading videos", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Creating events", "DashboardPermissionsPage")), a.createElement("li", null, Object(i.d)("Starting Vodcasts", "DashboardPermissionsPage")))))
                }, t
            }(a.Component),
            v = (n("HHLN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(m._35, {
                        background: m.n.Base,
                        elevation: 1,
                        className: "dashboard-permissions-panel",
                        padding: 2
                    }, this.props.children)
                }, t
            }(a.Component)),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(m._8, {
                        alignItems: m.c.Center,
                        display: m.R.Flex,
                        margin: {
                            bottom: 2
                        },
                        justifyContent: m._7.Between
                    }, this.props.children)
                }, t
            }(a.Component),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Permissions", "DashboardPermissionsPage"))
                }, t.prototype.render = function() {
                    return a.createElement(o.b, {
                        name: "twilight_dashboard_permissions",
                        isStaff: this.props.isStaff
                    }, a.createElement(l.a, null, a.createElement(m._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(m.Q, {
                        bold: !0,
                        color: m.K.Alt,
                        fontSize: m.V.Size4,
                        type: m._49.H5
                    }, Object(i.d)("Editors", "DashboardPermissionsPage"))), a.createElement(v, null, a.createElement(y, null, a.createElement(m._8, {
                        alignItems: m.c.Center,
                        display: m.R.Flex
                    }, a.createElement(m.Q, {
                        bold: !0,
                        color: m.K.Alt,
                        fontSize: m.V.Size5
                    }, Object(i.d)("Channels you can manage", "DashboardPermissionsPage")), a.createElement(E, null)), a.createElement(m.O, {
                        to: "/dashboard/" + this.props.channelName
                    }, Object(i.d)("Go to your Channel", "DashboardPermissionsPage"))), this.props.user && a.createElement(f, {
                        user: this.props.user
                    }))))
                }, t
            }(a.Component),
            C = n("3zLD"),
            j = n("RH2O"),
            O = n("j7/Y"),
            S = n("w9tK"),
            D = n("vH/s"),
            w = n("Aj/L"),
            x = n("CSlQ");
        var H = Object(C.compose)(Object(x.d)("PermissionsPage", {
            destination: S.a.DashboardPermissions,
            autoReportInteractive: !0
        }), Object(O.a)({
            location: D.PageviewLocation.DashboardPermissions
        }), Object(j.b)(function(e) {
            var t = Object(w.c)(e);
            return {
                isStaff: t && t.roles && t.roles.isStaff,
                user: t
            }
        }))(P);
        n.d(t, "PermissionsPageComponent", function() {
            return P
        }), n.d(t, "PermissionsPage", function() {
            return H
        })
    },
    HHLN: function(e, t) {},
    Mbk8: function(e, t) {},
    jnhC: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            s = n("GiK3"),
            a = n("Odds"),
            i = (n("Mbk8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovered: !1
                    }, t.handleHover = function() {
                        t.setState(function(e) {
                            return {
                                isHovered: !e.isHovered
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.direction;
                    return s.createElement("div", {
                        onMouseEnter: this.handleHover,
                        onMouseLeave: this.handleHover
                    }, s.createElement(a._35, {
                        display: a.R.Flex,
                        padding: {
                            x: 1
                        },
                        position: a._15.Relative
                    }, s.createElement(a._35, {
                        className: "hoverable-icon",
                        display: a.R.InlineFlex,
                        color: a.K.Alt2,
                        alignItems: a.c.Center,
                        justifyContent: a._7.Center
                    }, s.createElement(a._24, {
                        asset: a._25.NotificationInfo,
                        width: 16,
                        height: 16
                    })), s.createElement(a.q, {
                        show: this.state.isHovered,
                        direction: n,
                        offsetX: "1rem"
                    }, s.createElement(a._8, {
                        padding: {
                            x: 1,
                            y: 1
                        }
                    }, t))))
                }, t.defaultProps = {
                    direction: a.r.Bottom
                }, t
            }(s.Component));
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.dashboard-permissions-4964d7e5b5c01f6e571f90b7e8a99594.js.map