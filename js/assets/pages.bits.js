webpackJsonp([51], {
    1250: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(d.d)(e),
                theme: e.ui.theme
            }
        }

        function r(e) {
            return Object(o.bindActionCreators)({
                logout: c.g,
                login: function() {
                    return c.f(l.a.TopNavLoginButton)
                },
                changeTheme: s.b
            }, e)
        }
        var i = n(7),
            o = n(9),
            l = n(56),
            c = n(39),
            s = n(133),
            d = n(17),
            p = n(0),
            u = n(4),
            m = n(1),
            h = n(2),
            f = n(65),
            g = n(6),
            v = n(27),
            k = n(24),
            _ = n(5),
            E = n(3),
            y = n(1251),
            b = (n(1252), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCardClick = function() {
                        n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.onLoginClick = function(e) {
                        e.preventDefault(), n.props.login()
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === v.a.Dark ? v.a.Light : v.a.Dark;
                        n.props.changeTheme(e, s.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return m.createElement(E._2, null);
                    if (this.props.isOnboarding) return m.createElement(E.U, {
                        display: E.H.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, m.createElement(E.U, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        alignItems: E.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, m.createElement(E.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, m.createElement(E.U, null, m.createElement(E.l, {
                        size: 30,
                        imageSrc: this.props.data.currentUser.profileImageURL,
                        imageAlt: "User avatar"
                    }))), m.createElement(E.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: E.J.Column,
                        ellipsis: !0
                    }, m.createElement(E._18, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = m.createElement(E._18, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, m.createElement(E.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, m.createElement(E.E, {
                            id: "dark-mode-toggle",
                            label: Object(h.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === v.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = u(Object(k.c)(v.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = u({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return m.createElement(f.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, m.createElement(E.U, {
                            display: E.H.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, m.createElement(E.S, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, m.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            alignItems: E.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, m.createElement(E.U, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, m.createElement(E.U, null, m.createElement(E.l, {
                            size: 30,
                            imageSrc: this.props.data.currentUser.profileImageURL,
                            imageAlt: "User avatar"
                        }))), m.createElement(E.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: E.J.Column,
                            ellipsis: !0
                        }, m.createElement(E._18, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), m.createElement(E._18, {
                            display: E.H.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, m.createElement(E._9, {
                            asset: E._10.GlyphArrDown
                        }))))), m.createElement(E._18, {
                            fullWidth: !0,
                            overflow: E.Z.Hidden,
                            position: E._3.Absolute,
                            padding: {
                                y: 1
                            },
                            background: E.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, m.createElement(E.S, {
                            onClick: this.onLogoutClick
                        }, m.createElement(E._18, {
                            color: E.F.Alt,
                            display: E.H.Flex,
                            alignItems: E.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, m.createElement(E.U, {
                            display: E.H.Flex,
                            alignItems: E.c.Center,
                            margin: {
                                right: 1
                            }
                        }, m.createElement(E._9, {
                            asset: E._10.NavLogout,
                            height: 18,
                            width: 18
                        })), m.createElement(E._22, null, Object(h.d)("Log Out", "MinimalUser"))))))
                    }
                    return m.createElement(E.U, {
                        margin: 1
                    }, m.createElement(E.u, {
                        onClick: this.onLoginClick
                    }, Object(h.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(_.c)("MinimalUser"), Object(g.a)(y)], t)
            }(m.Component)),
            U = b,
            C = Object(i.a)(a, r)(U);
        n.d(t, "a", function() {
            return C
        })
    },
    1251: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "MinimalTopNav_MinimalUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "profileImageURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "70"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 110
            }
        };
        n.loc.source = {
            body: "query MinimalTopNav_MinimalUser {\n  currentUser {\n    id\n    displayName\n    profileImageURL(width: 70)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1252: function(e, t) {},
    133: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            return void 0 === n && (n = !0),
                function(a) {
                    a(Object(o.t)(e)), n && Object(i.d)(e), t && Object(l.b)(e, t)
                }
        }
        n.d(t, "a", function() {
            return r
        }), t.b = a;
        var r, i = n(24),
            o = n(53),
            l = n(140);
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(r || (r = {}))
    },
    140: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = "";
            switch (t) {
                case c.a.TypedCommand:
                    n = "typed_command";
                    break;
                case c.a.UserMenu:
                    n = "user_menu";
                    break;
                default:
                    n = "user_menu"
            }
            var a = "";
            switch (e) {
                case o.a.Dark:
                    a = "dark";
                    break;
                case o.a.Light:
                    a = "light";
                    break;
                default:
                    a = "light"
            }
            i.m.track(s.SpadeEventType.ThemeChange, {
                source: n,
                mode: a
            })
        }

        function r(e) {
            switch (e) {
                case l.a.Archive:
                    return s.SpadeVideoBroadcastType.Archive;
                case l.a.Highlight:
                    return s.SpadeVideoBroadcastType.Highlight;
                case l.a.Upload:
                    return s.SpadeVideoBroadcastType.Upload;
                case l.a.WatchParty:
                    return s.SpadeVideoBroadcastType.WatchParty;
                case l.a.PastPremiere:
                    return s.SpadeVideoBroadcastType.PastPremiere;
                case l.a.PremiereUpload:
                    return s.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        }
        t.b = a, t.a = r;
        var i = n(2),
            o = n(27),
            l = n(266),
            c = n(133),
            s = n(13)
    },
    1538: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(12),
            o = n(13),
            l = n(5),
            c = n(1250),
            s = n(3),
            d = (n(1539), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.P, {
                        position: s._3.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "minimal-top-nav"
                    }, r.createElement(s.U, {
                        className: "minimal-top-nav__menu",
                        display: s.H.Flex,
                        alignItems: s.c.Stretch,
                        flexWrap: s.K.NoWrap,
                        fullHeight: !0,
                        justifyContent: s.T.Between
                    }, r.createElement(s.P, {
                        display: s.H.InlineFlex,
                        alignItems: s.c.Center,
                        flexShrink: 0
                    }, r.createElement(i.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: o.PageviewMedium.TopNav,
                                content: o.PageviewContent.Logo
                            }
                        },
                        className: "minimal-top-nav__home-link"
                    }, r.createElement(s._9, {
                        asset: s._10.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(c.a, {
                        darkModeEnabled: this.props.darkModeEnabled
                    }))))
                }, t = a.__decorate([Object(l.c)("MinimalTopNav", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component)),
            p = d,
            u = p;
        n.d(t, "a", function() {
            return u
        })
    },
    1539: function(e, t) {},
    2092: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                firstPageLoaded: !!e.session.firstPageLoaded,
                isLoggedIn: Object(o.d)(e),
                theme: e.ui.theme
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(7),
            i = n(12),
            o = n(17),
            l = n(0),
            c = n(1),
            s = n(93),
            d = n(115),
            p = n(24),
            u = n(1538),
            m = n(3),
            h = s.a.wrap(function() {
                return n.e(61).then(n.bind(null, 2093))
            }, "BitsLandingPage"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(m.U, {
                        className: "bits-root " + Object(p.c)(this.props.theme),
                        position: m._3.Absolute,
                        overflow: m.Z.Hidden,
                        attachRight: !0,
                        attachTop: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            top: 5
                        }
                    }, c.createElement(u.a, {
                        darkModeEnabled: !0
                    }), c.createElement(m.U, {
                        display: m.H.Flex,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0,
                        position: m._3.Relative
                    }, c.createElement(m.P, {
                        display: m.H.Flex,
                        position: m._3.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, c.createElement("main", {
                        className: "bits-root__main"
                    }, c.createElement(i.d, {
                        path: "/bits",
                        component: h
                    }))), c.createElement(d.a, null)))
                }, t
            }(c.Component),
            g = f,
            v = Object(r.a)(a)(g),
            k = Object(i.f)(v);
        n.d(t, "BitsRoot", function() {
            return k
        })
    },
    266: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
        }(a || (a = {}))
    },
    65: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        t.container = e
                    }, t.handleGlobalClick = function(e) {
                        var n = e.target;
                        t.isParentOf(n) || t.props.onClickOut(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.onClickOut, a.__rest(e, ["onClickOut"]));
                    return r.createElement("div", a.__assign({}, t, {
                        ref: this.setContainerRef
                    }), this.props.children)
                }, t.prototype.isParentOf = function(e) {
                    for (var t = e; t;) {
                        if (t === this.container) return !0;
                        t = t.parentElement
                    }
                    return !1
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.bits-a03a22ed28992998b5202c683d2b3c33.js.map