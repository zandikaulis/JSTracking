webpackJsonp([53], {
    1245: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(d.d)(e),
                theme: e.ui.theme
            }
        }

        function r(e) {
            return Object(o.bindActionCreators)({
                logout: s.g,
                login: function() {
                    return s.f(l.a.TopNavLoginButton)
                },
                changeTheme: c.b
            }, e)
        }
        var i = n(6),
            o = n(9),
            l = n(54),
            s = n(39),
            c = n(132),
            d = n(17),
            p = n(0),
            u = n(4),
            m = n(1),
            h = n(2),
            f = n(64),
            g = n(7),
            v = n(31),
            k = n(5),
            _ = n(3),
            E = n(1246),
            y = (n(1247), function(e) {
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
                        n.props.changeTheme(e, c.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return m.createElement(_._1, null);
                    if (this.props.isOnboarding) return m.createElement(_.U, {
                        display: _.H.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, m.createElement(_.U, {
                        display: _.H.Flex,
                        flexWrap: _.K.NoWrap,
                        alignItems: _.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, m.createElement(_.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, m.createElement(_.U, null, m.createElement(_.l, {
                        size: 30,
                        imageSrc: this.props.data.currentUser.profileImageURL,
                        imageAlt: "User avatar"
                    }))), m.createElement(_.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: _.J.Column,
                        ellipsis: !0
                    }, m.createElement(_._17, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = m.createElement(_._17, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, m.createElement(_.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, m.createElement(_.E, {
                            id: "dark-mode-toggle",
                            label: Object(h.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === v.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = u("theme--dark", {
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
                        }, m.createElement(_.U, {
                            display: _.H.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, m.createElement(_.S, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, m.createElement(_.U, {
                            display: _.H.Flex,
                            flexWrap: _.K.NoWrap,
                            alignItems: _.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, m.createElement(_.U, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, m.createElement(_.U, null, m.createElement(_.l, {
                            size: 30,
                            imageSrc: this.props.data.currentUser.profileImageURL,
                            imageAlt: "User avatar"
                        }))), m.createElement(_.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: _.J.Column,
                            ellipsis: !0
                        }, m.createElement(_._17, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), m.createElement(_._17, {
                            display: _.H.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, m.createElement(_._8, {
                            asset: _._9.GlyphArrDown
                        }))))), m.createElement(_._17, {
                            fullWidth: !0,
                            overflow: _.Y.Hidden,
                            position: _._2.Absolute,
                            padding: {
                                y: 1
                            },
                            background: _.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, m.createElement(_.S, {
                            onClick: this.onLogoutClick
                        }, m.createElement(_._17, {
                            color: _.F.Alt,
                            display: _.H.Flex,
                            alignItems: _.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, m.createElement(_.U, {
                            display: _.H.Flex,
                            alignItems: _.c.Center,
                            margin: {
                                right: 1
                            }
                        }, m.createElement(_._8, {
                            asset: _._9.NavLogout,
                            height: 18,
                            width: 18
                        })), m.createElement(_._21, null, Object(h.d)("Log Out", "MinimalUser"))))))
                    }
                    return m.createElement(_.U, {
                        margin: 1
                    }, m.createElement(_.u, {
                        onClick: this.onLoginClick
                    }, Object(h.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(k.c)("MinimalUser"), Object(g.a)(E)], t)
            }(m.Component)),
            b = y,
            U = Object(i.a)(a, r)(b);
        n.d(t, "a", function() {
            return U
        })
    },
    1246: function(e, t) {
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
    1247: function(e, t) {},
    132: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            return void 0 === n && (n = !0),
                function(a) {
                    a(Object(o.o)(e)), n && Object(i.d)(e), t && Object(l.b)(e, t)
                }
        }
        n.d(t, "a", function() {
            return r
        }), t.b = a;
        var r, i = n(33),
            o = n(58),
            l = n(138);
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(r || (r = {}))
    },
    138: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = "";
            switch (t) {
                case s.a.TypedCommand:
                    n = "typed_command";
                    break;
                case s.a.UserMenu:
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
            i.m.track(c.SpadeEventType.ThemeChange, {
                source: n,
                mode: a
            })
        }

        function r(e) {
            switch (e) {
                case l.a.Archive:
                    return c.SpadeVideoBroadcastType.Archive;
                case l.a.Highlight:
                    return c.SpadeVideoBroadcastType.Highlight;
                case l.a.Upload:
                    return c.SpadeVideoBroadcastType.Upload;
                case l.a.WatchParty:
                    return c.SpadeVideoBroadcastType.WatchParty;
                case l.a.PastPremiere:
                    return c.SpadeVideoBroadcastType.PastPremiere;
                case l.a.PremiereUpload:
                    return c.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        }
        t.b = a, t.a = r;
        var i = n(2),
            o = n(31),
            l = n(263),
            s = n(132),
            c = n(12)
    },
    1550: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(10),
            o = n(12),
            l = n(5),
            s = n(1245),
            c = n(3),
            d = (n(1551), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.P, {
                        position: c._2.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "minimal-top-nav"
                    }, r.createElement(c.U, {
                        className: "minimal-top-nav__menu",
                        display: c.H.Flex,
                        alignItems: c.c.Stretch,
                        flexWrap: c.K.NoWrap,
                        fullHeight: !0,
                        justifyContent: c.T.Between
                    }, r.createElement(c.P, {
                        display: c.H.InlineFlex,
                        alignItems: c.c.Center,
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
                    }, r.createElement(c._8, {
                        asset: c._9.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(s.a, {
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
    1551: function(e, t) {},
    2079: function(e, t, n) {
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
        var r = n(6),
            i = n(10),
            o = n(17),
            l = n(0),
            s = n(1),
            c = n(113),
            d = n(114),
            p = n(33),
            u = n(1550),
            m = n(3),
            h = c.a.wrap(function() {
                return n.e(62).then(n.bind(null, 2080))
            }, "BitsLandingPage"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(m.U, {
                        className: "bits-root " + Object(p.c)(this.props.theme),
                        position: m._2.Absolute,
                        overflow: m.Y.Hidden,
                        attachRight: !0,
                        attachTop: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            top: 5
                        }
                    }, s.createElement(u.a, {
                        darkModeEnabled: !0
                    }), s.createElement(m.U, {
                        display: m.H.Flex,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0,
                        position: m._2.Relative
                    }, s.createElement(m.P, {
                        display: m.H.Flex,
                        position: m._2.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, s.createElement("main", {
                        className: "bits-root__main"
                    }, s.createElement(i.d, {
                        path: "/bits",
                        component: h
                    }))), s.createElement(d.a, null)))
                }, t
            }(s.Component),
            g = f,
            v = Object(r.a)(a)(g),
            k = Object(i.f)(v);
        n.d(t, "BitsRoot", function() {
            return k
        })
    },
    263: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
        }(a || (a = {}))
    },
    64: function(e, t, n) {
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
//# sourceMappingURL=pages.bits-089e8c202a87ee3eac5c3c47a65fe41a.js.map