webpackJsonp([51], {
    "2b/B": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("+xm8"),
            o = n("f2i/"),
            l = n("NikC"),
            s = n("Aj/L"),
            c = n("TToO"),
            d = n("HW6M"),
            p = n("U7vG"),
            u = n("6sO2"),
            m = n("rCmJ"),
            h = n("7vx8"),
            f = n("NXs7"),
            g = n("VAT8"),
            v = n("CSlQ"),
            k = n("Odds"),
            _ = n("Kkxm"),
            E = (n("e6tx"), function(e) {
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
                        var e = n.props.theme === f.a.Dark ? f.a.Light : f.a.Dark;
                        n.props.changeTheme(e, l.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return p.createElement(k._3, null);
                    if (this.props.isOnboarding) return p.createElement(k.V, {
                        display: k.H.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, p.createElement(k.V, {
                        display: k.H.Flex,
                        flexWrap: k.K.NoWrap,
                        alignItems: k.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, p.createElement(k.V, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, p.createElement(k.V, null, p.createElement(k.l, {
                        size: 30,
                        imageSrc: this.props.data.currentUser.profileImageURL,
                        imageAlt: "User avatar"
                    }))), p.createElement(k.V, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: k.J.Column,
                        ellipsis: !0
                    }, p.createElement(k._19, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = p.createElement(k._19, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, p.createElement(k.V, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, p.createElement(k.E, {
                            id: "dark-mode-toggle",
                            label: Object(u.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === f.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = d(Object(g.c)(f.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = d({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return p.createElement(m.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, p.createElement(k.V, {
                            display: k.H.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, p.createElement(k.T, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, p.createElement(k.V, {
                            display: k.H.Flex,
                            flexWrap: k.K.NoWrap,
                            alignItems: k.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, p.createElement(k.V, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, p.createElement(k.V, null, p.createElement(k.l, {
                            size: 30,
                            imageSrc: this.props.data.currentUser.profileImageURL,
                            imageAlt: "User avatar"
                        }))), p.createElement(k.V, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: k.J.Column,
                            ellipsis: !0
                        }, p.createElement(k._19, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), p.createElement(k._19, {
                            display: k.H.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, p.createElement(k._10, {
                            asset: k._11.GlyphArrDown
                        }))))), p.createElement(k._19, {
                            fullWidth: !0,
                            overflow: k._0.Hidden,
                            position: k._4.Absolute,
                            padding: {
                                y: 1
                            },
                            background: k.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, p.createElement(k.T, {
                            onClick: this.onLogoutClick
                        }, p.createElement(k._19, {
                            color: k.F.Alt,
                            display: k.H.Flex,
                            alignItems: k.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, p.createElement(k.V, {
                            display: k.H.Flex,
                            alignItems: k.c.Center,
                            margin: {
                                right: 1
                            }
                        }, p.createElement(k._10, {
                            asset: k._11.NavLogout,
                            height: 18,
                            width: 18
                        })), p.createElement(k._23, null, Object(u.d)("Log Out", "MinimalUser"))))))
                    }
                    return p.createElement(k.V, {
                        margin: 1
                    }, p.createElement(k.u, {
                        onClick: this.onLoginClick
                    }, Object(u.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.c)("MinimalUser"), Object(h.a)(_)], t)
            }(p.Component)),
            b = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    logout: o.g,
                    login: function() {
                        return o.f(i.a.TopNavLoginButton)
                    },
                    changeTheme: l.b
                }, e)
            })(E);
        n.d(t, "a", function() {
            return b
        })
    },
    "6WAQ": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
        }(a || (a = {}))
    },
    "JeT+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("RH2O"),
            r = n("F8kA"),
            i = n("Aj/L"),
            o = n("TToO"),
            l = n("U7vG"),
            s = n("bZTi"),
            c = n("ZyA2"),
            d = n("VAT8"),
            p = n("tnNl"),
            u = n("Odds"),
            m = s.a.wrap(function() {
                return n.e(63).then(n.bind(null, "HQb3"))
            }, "BitsLandingPage"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u.V, {
                        className: "bits-root " + Object(d.c)(this.props.theme),
                        position: u._4.Absolute,
                        overflow: u._0.Hidden,
                        attachRight: !0,
                        attachTop: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            top: 5
                        }
                    }, l.createElement(p.a, {
                        darkModeEnabled: !0
                    }), l.createElement(u.V, {
                        display: u.H.Flex,
                        flexWrap: u.K.NoWrap,
                        fullHeight: !0,
                        position: u._4.Relative
                    }, l.createElement(u.Q, {
                        display: u.H.Flex,
                        position: u._4.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, l.createElement("main", {
                        className: "bits-root__main"
                    }, l.createElement(r.d, {
                        path: "/bits",
                        component: m
                    }))), l.createElement(c.a, null)))
                }, t
            }(l.Component),
            f = Object(a.a)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded,
                    isLoggedIn: Object(i.d)(e),
                    theme: e.ui.theme
                }
            })(h),
            g = Object(r.f)(f);
        n.d(t, "BitsRoot", function() {
            return g
        })
    },
    Kkxm: function(e, t) {
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
                end: 93
            }
        };
        n.loc.source = {
            body: "query MinimalTopNav_MinimalUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    NikC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = function(e, t, n) {
            return void 0 === n && (n = !0),
                function(a) {
                    a(Object(i.s)(e)), n && Object(r.d)(e), t && Object(o.b)(e, t)
                }
        };
        var a, r = n("VAT8"),
            i = n("7enT"),
            o = n("xrVp");
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(a || (a = {}))
    },
    Xorj: function(e, t) {},
    e6tx: function(e, t) {},
    rCmJ: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
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
    },
    tnNl: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("F8kA"),
            o = n("vH/s"),
            l = n("CSlQ"),
            s = n("2b/B"),
            c = n("Odds"),
            d = (n("Xorj"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.Q, {
                        position: c._4.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "minimal-top-nav"
                    }, r.createElement(c.V, {
                        className: "minimal-top-nav__menu",
                        display: c.H.Flex,
                        alignItems: c.c.Stretch,
                        flexWrap: c.K.NoWrap,
                        fullHeight: !0,
                        justifyContent: c.U.Between
                    }, r.createElement(c.Q, {
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
                    }, r.createElement(c._10, {
                        asset: c._11.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(s.a, {
                        darkModeEnabled: this.props.darkModeEnabled
                    }))))
                }, t = a.__decorate([Object(l.c)("MinimalTopNav", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component));
        n.d(t, "a", function() {
            return d
        })
    },
    xrVp: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = "";
            switch (t) {
                case o.a.TypedCommand:
                    n = "typed_command";
                    break;
                case o.a.UserMenu:
                    n = "user_menu";
                    break;
                default:
                    n = "user_menu"
            }
            var i = "";
            switch (e) {
                case r.a.Dark:
                    i = "dark";
                    break;
                case r.a.Light:
                    i = "light";
                    break;
                default:
                    i = "light"
            }
            a.m.track(l.SpadeEventType.ThemeChange, {
                source: n,
                mode: i
            })
        }, t.a = function(e) {
            switch (e) {
                case i.a.Archive:
                    return l.SpadeVideoBroadcastType.Archive;
                case i.a.Highlight:
                    return l.SpadeVideoBroadcastType.Highlight;
                case i.a.Upload:
                    return l.SpadeVideoBroadcastType.Upload;
                case i.a.WatchParty:
                    return l.SpadeVideoBroadcastType.WatchParty;
                case i.a.PastPremiere:
                    return l.SpadeVideoBroadcastType.PastPremiere;
                case i.a.PremiereUpload:
                    return l.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        };
        var a = n("6sO2"),
            r = n("NXs7"),
            i = n("6WAQ"),
            o = n("NikC"),
            l = n("vH/s")
    }
});
//# sourceMappingURL=pages.bits-d0ac271f05ab7f19ea33a1daf82b0125.js.map