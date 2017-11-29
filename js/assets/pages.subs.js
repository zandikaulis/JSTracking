webpackJsonp([57], {
    1233: function(e, t, n) {
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
        var i = n(8),
            o = n(10),
            l = n(50),
            c = n(34),
            s = n(127),
            d = n(18),
            u = n(0),
            p = n(4),
            m = n(1),
            h = n(2),
            f = n(82),
            g = n(7),
            v = n(36),
            k = n(5),
            _ = n(3),
            E = n(1234),
            b = (n(1235), function(e) {
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
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        var t = p("theme--dark", {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = p({
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
                }, t = u.__decorate([Object(k.c)("MinimalUser"), Object(g.a)(E)], t)
            }(m.Component)),
            y = b,
            U = Object(i.a)(a, r)(y);
        n.d(t, "a", function() {
            return U
        })
    },
    1234: function(e, t) {
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
    1235: function(e, t) {},
    127: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            return void 0 === n && (n = !0),
                function(a) {
                    a(Object(o.n)(e)), n && Object(i.c)(e), t && Object(l.b)(e, t)
                }
        }
        n.d(t, "a", function() {
            return r
        }), t.b = a;
        var r, i = n(45),
            o = n(65),
            l = n(129);
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(r || (r = {}))
    },
    129: function(e, t, n) {
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
            o = n(36),
            l = n(251),
            c = n(127),
            s = n(13)
    },
    1532: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(11),
            o = n(13),
            l = n(5),
            c = n(1233),
            s = n(3),
            d = (n(1533), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.P, {
                        position: s._2.Fixed,
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
                    }, r.createElement(s._8, {
                        asset: s._9.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(c.a, {
                        darkModeEnabled: this.props.darkModeEnabled
                    }))))
                }, t = a.__decorate([Object(l.c)("MinimalTopNav", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component)),
            u = d,
            p = u;
        n.d(t, "a", function() {
            return p
        })
    },
    1533: function(e, t) {},
    1972: function(e, t) {},
    2054: function(e, t, n) {
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
        var r = n(8),
            i = n(11),
            o = n(18),
            l = n(0),
            c = n(1),
            s = n(106),
            d = n(108),
            u = n(5),
            p = n(1532),
            m = n(3),
            h = (n(1972), s.a.wrap(function() {
                return n.e(66).then(n.bind(null, 2055))
            }, "SubsLandingPage")),
            f = s.a.wrap(function() {
                return n.e(67).then(n.bind(null, 2056))
            }, "SubsBroadcasterPage"),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(m.U, {
                        className: "twilight-root",
                        position: m._2.Absolute,
                        overflow: m.Y.Hidden,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0
                    }, c.createElement(p.a, null), c.createElement(m.U, {
                        display: m.H.Flex,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0,
                        position: m._2.Relative
                    }, c.createElement(m.P, {
                        position: m._2.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, c.createElement("main", {
                        className: "twilight-main"
                    }, c.createElement(i.e, null, c.createElement(i.d, {
                        path: "/subs/:channelName",
                        component: f
                    }), c.createElement(i.d, {
                        path: "/subs",
                        component: h
                    })))), c.createElement(d.a, null)))
                }, t = l.__decorate([Object(u.c)("SubsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(c.Component),
            v = g,
            k = Object(r.a)(a)(v),
            _ = Object(i.f)(k);
        n.d(t, "SubsRoot", function() {
            return _
        })
    },
    251: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
        }(a || (a = {}))
    },
    82: function(e, t, n) {
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
//# sourceMappingURL=pages.subs-b243e06ce7c55607d9bd74aba093dfaf.js.map