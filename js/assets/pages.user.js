(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        "2mE7": function(e, t, n) {},
        "5X7D": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                i = n("9C/b"),
                c = n("fvjX"),
                s = n("/7QA"),
                l = n("ZDlU"),
                u = n("y5D0"),
                p = n("kRBY"),
                d = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checkingSudoToken: !0
                        }, t.navigateToSettings = function() {
                            return t.props.history.push("/settings/profile")
                        }, t.onSudoTokenInvalid = function() {
                            return t.setState({
                                sudoTokenInvalid: !0,
                                checkingSudoToken: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.userID && this.checkSudoToken()
                    }, t.prototype.render = function() {
                        return this.state.error ? a.createElement(l.a, {
                            message: Object(s.d)("Something has gone wrong.  Please try again later.", "RequireSudoToken")
                        }) : this.state.sudoTokenInvalid ? this.renderTokenInvalidMessage() : this.props.isLoggedIn ? this.state.checkingSudoToken ? a.createElement(d.ab, {
                            fillContent: !0
                        }) : "function" == typeof this.props.children ? this.props.children(this.onSudoTokenInvalid) : this.props.children : (this.props.login(this.props.loginTrackingSource), a.createElement(l.a, {
                            message: Object(s.d)("You must be logged in to view this page", "RequireSudoToken")
                        }))
                    }, t.prototype.renderTokenInvalidMessage = function() {
                        var e = Object(s.d)("Back to settings", "RequireSudoToken");
                        return a.createElement(d.Ya, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center
                        }, a.createElement(d.Oa, {
                            type: d.Pa.Info,
                            closeButtonAriaLabel: e,
                            closeButtonOnClick: this.navigateToSettings,
                            title: Object(s.d)("Log in Required", "RequireSudoToken"),
                            description: Object(s.d)("You must log in again to confirm your identity before modifying your account status.", "RequireSudoToken"),
                            actions: [{
                                children: Object(s.d)("Log in again", "RequireSudoToken"),
                                onClick: this.props.logout
                            }, {
                                children: e,
                                onClick: this.navigateToSettings
                            }]
                        }))
                    }, t.prototype.checkSudoToken = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = "https://passport.twitch.tv/validate/sudo", n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, fetch(e, {
                                            body: JSON.stringify({
                                                user_id: this.userID
                                            }),
                                            credentials: "include",
                                            method: "POST"
                                        })];
                                    case 2:
                                        return t = n.sent(), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            checkingSudoToken: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return t && 204 === t.status ? (this.setState({
                                            sudoTokenInvalid: !1,
                                            checkingSudoToken: !1
                                        }), [2]) : (this.onSudoTokenInvalid(), [2])
                                }
                            })
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.user ? this.props.user.id : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component);
            var h = Object(c.compose)(i.a, Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(p.f)(e),
                    user: Object(p.e)(e)
                }
            }, function(e) {
                return Object(c.bindActionCreators)({
                    logout: function() {
                        return Object(u.f)()
                    },
                    login: function(e) {
                        return Object(u.e)(e)
                    }
                }, e)
            }))(m);
            n.d(t, "a", function() {
                return h
            })
        },
        "7PeK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("Ue10"),
                i = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = a.createElement(o.Fb, {
                        padding: 2,
                        background: o.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: o.x.Medium,
                        topLeft: o.x.Medium
                    });
                    var i = r.__assign({
                        bottomLeft: o.x.Medium,
                        bottomRight: o.x.Medium
                    }, n);
                    return a.createElement(a.Fragment, null, e.header, a.createElement(o.Fb, {
                        background: o.r.Base,
                        margin: {
                            bottom: 4
                        },
                        border: !0,
                        borderRadius: i
                    }, e.children, t))
                });
            n.d(t, "a", function() {
                return i
            })
        },
        "7iKH": function(e, t, n) {},
        "8zqa": function(e, t) {
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                    directives: []
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
        "9fsF": function(e, t, n) {},
        BK8n: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                o = n("q1tI"),
                i = n("i8i4"),
                c = n("/7QA"),
                s = n("Ue10"),
                l = (n("uOxp"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.focus || this.props.id && c.p.history.location.hash === "#" + this.props.id) {
                            var e = i.findDOMNode(this);
                            e && e.scrollIntoView()
                        }
                    }, t.prototype.render = function() {
                        var e = null;
                        this.props.title && (e = o.createElement(s.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(s.W, {
                            fontSize: s.Ca.Size6,
                            color: this.props.error ? s.O.Error : s.O.Base,
                            bold: !0
                        }, this.props.title)));
                        var t = {
                            "settings-row": !0,
                            "settings-row--focused": this.props.focus || !!this.props.id && c.p.history.location.hash === "#" + this.props.id
                        };
                        return o.createElement(s.Fb, {
                            padding: 2,
                            className: a(t),
                            fullWidth: !0
                        }, e, this.props.children, this.props.errorMessage && o.createElement(s.W, {
                            color: s.O.Error,
                            fontSize: s.Ca.Size7
                        }, this.props.errorMessage))
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        "EY7+": function(e, t, n) {},
        EpBn: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                o = n("BK8n"),
                i = n("Ue10"),
                c = (n("9fsF"), function(e) {
                    return r.createElement(o.a, {
                        focus: !!e.id && a.p.history.location.hash === "#" + e.id
                    }, r.createElement(i.Ea, {
                        error: e.error,
                        errorMessage: e.errorMessage || Object(a.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                        hint: e.hint,
                        id: e.id,
                        label: e.label,
                        labelOptional: e.labelOptional,
                        orientation: e.orientation || i.Fa.Horizontal
                    }, e.children))
                });
            n.d(t, "a", function() {
                return c
            })
        },
        GxR5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return s
            });
            var r = n("/7QA"),
                a = "https://passport.twitch.tv/forgot_username/new",
                o = "https://help.twitch.tv/customer/portal/emails/new",
                i = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                c = "https://www.twitch.tv/p/legal/terms-of-service/";

            function s() {
                return "https://passport.twitch.tv/password_resets/new?client_id=" + r.a.authSettings.clientID
            }
        },
        K6Vg: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DisableAccount_DisableUser"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DisableUserAccountInput"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "disableUserAccount"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 126
                }
            };
            n.loc.source = {
                body: "mutation DisableAccount_DisableUser($input: DisableUserAccountInput!) {\ndisableUserAccount(input: $input) {\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "KwO+": function(e, t, n) {},
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("cr+I"),
                o = n("q1tI"),
                i = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function i(t) {
                            var a = n.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, a.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var o = a.referenceTracking,
                                        i = o.content,
                                        s = o.medium,
                                        l = o.content_index,
                                        u = o.email_id;
                                    c.p.tracking.trackPageview(r.__assign({
                                        content: i,
                                        medium: s,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return r.__extends(i, n), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return o.createElement(t, r.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    o = a.stringify(t);
                                o.length > 0 && (r = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, i
                    }(o.Component);
                    return Object(i.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        W2HU: function(e, t, n) {
            "use strict";
            var r, a = n("/MKj"),
                o = n("fvjX"),
                i = n("1/iK"),
                c = n("y5D0"),
                s = n("jZLd"),
                l = n("kRBY"),
                u = n("mrSG"),
                p = n("TSYQ"),
                d = n("q1tI"),
                m = n("/7QA"),
                h = n("u5aL"),
                f = n("yR8l"),
                g = n("/0dD"),
                b = n("76Lv"),
                E = n("GnwI"),
                y = n("Ue10"),
                v = n("8zqa");
            n("2mE7");
            ! function(e) {
                e.DarkModeToggle = "minimal-user__dark-mode-toggle", e.DropdownDown = "minimal-user__dropdown-down", e.UserMenu = "minimal-user__user-menu-toggle", e.Logout = "minimal-user__logout", e.Login = "minimal-user__login"
            }(r || (r = {}));
            var k = function(e) {
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
                            var e = n.props.theme === g.a.Dark ? g.a.Light : g.a.Dark;
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
                        if (!this.props.isLoggedIn) return d.createElement(y.Ya, {
                            margin: 1
                        }, d.createElement(y.z, {
                            onClick: this.onLoginClick,
                            "data-test-selector": r.Login
                        }, Object(m.d)("Log in", "MinimalUser")));
                        if (this.props.data.loading || !this.props.data.currentUser || this.props.data.error) return d.createElement(y.jb, null);
                        if (this.props.isOnboarding) return d.createElement(y.Ya, {
                            display: y.X.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, d.createElement(y.Ya, {
                            display: y.X.Flex,
                            flexWrap: y.Ba.NoWrap,
                            alignItems: y.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, d.createElement(y.Ya, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, d.createElement(y.Ya, null, this.renderAvatar())), d.createElement(y.Ya, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: y.Aa.Column,
                            ellipsis: !0
                        }, d.createElement(y.W, {
                            className: "minimal-top-nav__username",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName))));
                        var e = null;
                        this.props.darkModeEnabled && (e = d.createElement(y.Fb, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(y.Ya, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, d.createElement(y.N, {
                            id: "dark-mode-toggle",
                            label: Object(m.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": r.DarkModeToggle,
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === g.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = p(Object(b.b)(g.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = p({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return d.createElement(h.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, d.createElement(y.Ya, {
                            display: y.X.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, d.createElement(y.Va, {
                            onClick: this.onCardClick,
                            "data-test-selector": r.UserMenu
                        }, d.createElement(y.Ya, {
                            display: y.X.Flex,
                            flexWrap: y.Ba.NoWrap,
                            alignItems: y.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, d.createElement(y.Ya, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, d.createElement(y.Ya, null, this.renderAvatar())), d.createElement(y.Ya, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: y.Aa.Column,
                            ellipsis: !0
                        }, d.createElement(y.W, {
                            className: "minimal-top-nav__username",
                            "data-a-target": "user-display-name",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName)), d.createElement(y.Fb, {
                            display: y.X.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, d.createElement(y.tb, {
                            asset: y.ub.GlyphArrDown
                        }))))), d.createElement(y.Fb, {
                            fullWidth: !0,
                            overflow: y.db.Hidden,
                            position: y.kb.Absolute,
                            padding: {
                                y: 1
                            },
                            background: y.r.Base,
                            className: n,
                            "data-test-selector": r.DropdownDown
                        }, e, d.createElement(y.Va, {
                            onClick: this.onLogoutClick,
                            "data-test-selector": r.Logout
                        }, d.createElement(y.Fb, {
                            color: y.O.Alt,
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, d.createElement(y.Ya, {
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(y.tb, {
                            asset: y.ub.NavLogout,
                            height: 20,
                            width: 20
                        })), d.createElement(y.W, null, Object(m.d)("Log Out", "MinimalUser"))))))
                    }, t.prototype.renderAvatar = function() {
                        return this.props.data.currentUser ? d.createElement(y.q, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: Object(m.d)("Your Avatar", "Minimaluser")
                        }) : null
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                S = Object(o.compose)(Object(E.b)("MinimalUser"), Object(f.a)(v))(k);
            var O = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    logout: c.f,
                    login: function() {
                        return c.e(i.a.TopNavLoginButton)
                    },
                    changeTheme: s.b
                }, e)
            })(S);
            n.d(t, "a", function() {
                return O
            })
        },
        c0Zc: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10");

            function o(e) {
                var t = null;
                return e.description && (t = r.createElement(a.Ya, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(a.W, {
                    color: a.O.Alt2
                }, e.description))), r.createElement(a.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(a.W, {
                    type: a.Wb.H3,
                    fontSize: a.Ca.Size4,
                    color: a.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        fbcT: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("2xye"),
                i = n("GnwI"),
                c = n("W2HU"),
                s = n("Ue10"),
                l = (n("EY7+"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(s.Qa, {
                            position: s.kb.Fixed,
                            attachTop: !0,
                            fullWidth: !0
                        }, a.createElement("nav", {
                            className: "minimal-top-nav"
                        }, a.createElement(s.Ya, {
                            className: "minimal-top-nav__menu",
                            display: s.X.Flex,
                            alignItems: s.f.Stretch,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0,
                            justifyContent: s.Xa.Between
                        }, a.createElement(s.Qa, {
                            display: s.X.InlineFlex,
                            alignItems: s.f.Center,
                            flexShrink: 0
                        }, a.createElement(s.U, {
                            to: {
                                pathname: "/",
                                state: {
                                    medium: o.PageviewMedium.TopNav,
                                    content: o.PageviewContent.Logo
                                }
                            }
                        }, a.createElement("div", {
                            className: "minimal-top-nav__home-link-logo"
                        }, a.createElement(s.tb, {
                            asset: s.ub.LogoGlitch,
                            width: 30,
                            height: 30
                        })))), this.renderUser())))
                    }, t.prototype.renderUser = function() {
                        return this.props.hideUser ? null : a.createElement(c.a, {
                            darkModeEnabled: this.props.darkModeEnabled
                        })
                    }, t
                }(a.Component)),
                u = Object(i.b)("MinimalTopNav", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, "a", function() {
                return p
            });
            var p = u
        },
        jFXk: function(e, t, n) {},
        kOk9: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DisableAccountForm_CurrentUserQuery"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isAffiliate"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isExtensionsDeveloper"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 118
                }
            };
            n.loc.source = {
                body: "query DisableAccountForm_CurrentUserQuery {\ncurrentUser {\nid\nroles {\nisAffiliate\nisPartner\nisExtensionsDeveloper\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        rACw: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA"),
                a = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            function o(e) {
                return !!e && a.test(e)
            }

            function i(e) {
                if (!o(e)) return Object(r.d)("Please enter a valid email.", "EmailValidator")
            }
        },
        uOxp: function(e, t, n) {},
        wUQP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            });
            var r, a, o = n("/7QA"),
                i = n("kRBY");

            function c(e) {
                var t = o.p.store.getState(),
                    n = o.b.get(e, r.Off);
                return !!(n === r.On || n === r.StaffOnly && Object(i.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(r || (r = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(a || (a = {}));
            var s = Math.pow(2, 32);

            function l(e) {
                var t = o.b.get(e, [0, a.Disabled]),
                    n = t[0],
                    r = t[1],
                    c = o.p.session.deviceID,
                    l = o.p.store.getState();
                return !(r !== a.Enabled || !Object(i.g)(l)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, r = 0, a = e.length; r < a; r++) n ^= e.charCodeAt(r), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(c + "-" + e) / s < n
            }
        },
        xuFZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("4p7I"),
                c = n("yoKv"),
                s = n("mLw1"),
                l = n("/7QA"),
                u = n("LA8z"),
                p = n("/MKj"),
                d = n("kRBY"),
                m = n("cr+I"),
                h = n("fvjX"),
                f = n("V+GM"),
                g = n("1/iK"),
                b = n("NvVO"),
                E = n("2xye"),
                y = n("GnwI"),
                v = n("5X7D"),
                k = n("y5D0"),
                S = n("yR8l"),
                O = n("geRD"),
                w = n("EpBn"),
                C = n("BK8n"),
                A = n("7PeK"),
                _ = n("c0Zc"),
                D = n("Ue10"),
                j = n("K6Vg"),
                T = n("kOk9");
            ! function(e) {
                e.PADMessage = "PAD_MESSAGE_SELECTOR"
            }(r || (r = {}));
            var x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            working: !1,
                            error: !1,
                            disableReason: ""
                        }, t.logger = l.k.withCategory("DisableAccountForm"), t.disable = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            this.setState({
                                                working: !0
                                            }), e = Object(O.a)({
                                                userID: this.props.user.id,
                                                isDelete: !!this.props.isDelete,
                                                description: this.state.disableReason
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.disableUserAccount(e)];
                                        case 2:
                                            return t = r.sent(), t.data.disableUserAccount && t.data.disableUserAccount.error && t.data.disableUserAccount.error.code ? (this.logger.warn("Failed to disable account"), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2]) : [3, 4];
                                        case 3:
                                            return n = r.sent(), this.logger.warn("Failed to disable account", {
                                                error: n
                                            }), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2];
                                        case 4:
                                            return [4, this.props.logout(this.props.redirect)];
                                        case 5:
                                            return r.sent(), [2]
                                    }
                                })
                            })
                        }, t.handleReasonChange = function(e) {
                            t.setState({
                                disableReason: e.currentTarget.value
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.state.error) {
                            var e = this.props.isDelete ? Object(l.d)("Something went wrong when attempting to delete your account.", "DisableAccountForm") : Object(l.d)("Something went wrong when attempting to disable your account.", "DisableAccountForm");
                            return o.createElement(A.a, null, o.createElement(C.a, null, o.createElement(D.W, {
                                color: D.O.Error
                            }, e)))
                        }
                        if (this.props.data.loading) return o.createElement(D.ab, {
                            fillContent: !0
                        });
                        if (!this.props.user) return null;
                        var t = this.props.data.currentUser && this.props.data.currentUser.roles,
                            n = !!t && !!(t.isAffiliate || t.isExtensionsDeveloper || t.isPartner),
                            r = null,
                            a = this.props.isDelete ? Object(l.d)("Delete Account", "DisableAccountForm") : Object(l.d)("Disable Account", "DisableAccountForm"),
                            i = this.props.isDelete ? Object(l.d)("Are you sure you'd like to delete your Twitch account? This will permanently erase all your content and personal information, and you will no longer be able to claim {login} as your user ID.", {
                                login: this.props.user.login
                            }, "DisableAccountForm") : Object(l.d)("We're sorry to see you go. Disabling your account does not delete your user information. Contact us at support@twitch.tv if there's anything we can do to change your mind.", "DisableAccountForm");
                        return r = n ? this.renderPADSection() : this.renderDisableSection(n, a), o.createElement(o.Fragment, null, o.createElement(_.a, {
                            title: a,
                            description: i
                        }), r)
                    }, t.prototype.renderPADSection = function() {
                        var e = Object(l.d)("We cannot delete your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return o.createElement(D.U, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            t = Object(l.d)("We cannot disable your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return o.createElement(D.U, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            n = this.props.isDelete ? e : t,
                            a = this.props.isDelete ? Object(l.d)("Delete Your Twitch Account", "DisableAccountForm") : Object(l.d)("Disable Your Twitch Account", "DisableAccountForm");
                        return o.createElement(A.a, null, o.createElement(w.a, {
                            "data-test-selector": r.PADMessage,
                            label: a,
                            orientation: D.Fa.Horizontal
                        }, n))
                    }, t.prototype.renderDisableSection = function(e, t) {
                        if (!this.props.user) return null;
                        var n = this.props.isDelete ? Object(l.d)("Account to delete", "DisableAccountForm") : Object(l.d)("Account to disable", "DisableAccountForm"),
                            r = this.props.isDelete ? Object(l.d)("Tell us why you're deleting your account (optional)", "DisableAccountForm") : Object(l.d)("Tell us why you're disabling your account (optional)", "DisableAccountForm"),
                            a = o.createElement(D.Ya, null, o.createElement(D.z, {
                                onClick: this.disable,
                                state: this.state.working ? D.E.Loading : D.E.Default,
                                disabled: this.state.working || e
                            }, t));
                        return o.createElement(A.a, {
                            footer: a
                        }, o.createElement(w.a, {
                            label: n
                        }, o.createElement(D.Sa, {
                            type: D.Ua.Text,
                            disabled: !0,
                            value: this.props.user.login || ""
                        })), o.createElement(w.a, {
                            label: r
                        }, o.createElement(D.Tb, {
                            onChange: this.handleReasonChange
                        })))
                    }, t
                }(o.Component),
                U = Object(h.compose)(Object(S.a)(T), Object(S.a)(j, {
                    name: "disableUserAccount"
                }))(x);
            var F = Object(p.connect)(function(e) {
                    return {
                        user: Object(d.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        logout: k.f
                    }, e)
                })(U),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.deleted && this.props.isLoggedIn ? window.location.replace("/user/delete-account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.deleted ? o.createElement(o.Fragment, null, o.createElement(D.Fb, {
                            borderBottom: !0
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size1
                        }, Object(l.d)("Your account has been deleted", "DeleteAccountPage"))), o.createElement(D.Ya, null, o.createElement(D.U, {
                            to: "/"
                        }, Object(l.d)("Back to the front page", "DeleteAccountPage")))) : o.createElement(v.a, {
                            loginTrackingSource: g.a.DeleteAccountPage
                        }, o.createElement(F, {
                            redirect: "/user/delete-account?account_deleted=true",
                            isDelete: !0
                        }))
                    }, Object.defineProperty(t.prototype, "deleted", {
                        get: function() {
                            return m.parse(this.props.location.search).account_deleted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                R = Object(h.compose)(Object(y.b)("DeleteAccountPage", {
                    destination: b.a.DeleteAccount
                }), Object(f.a)({
                    location: E.PageviewLocation.DeleteAccount
                }))(I);
            var N = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(R),
                Y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.disabled && this.props.isLoggedIn ? window.location.replace("/user/disable-account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.disabled ? o.createElement(o.Fragment, null, o.createElement(D.Fb, {
                            borderBottom: !0
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size1
                        }, Object(l.d)("Your account has been disabled", "DisableAccountPage"))), o.createElement(D.Ya, null, o.createElement(D.U, {
                            to: "/"
                        }, Object(l.d)("Back to the front page", "DisableAccountPage")))) : o.createElement(v.a, {
                            loginTrackingSource: g.a.DisableAccountPage
                        }, o.createElement(F, {
                            redirect: "/user/disable-account?account_disabled=true"
                        }))
                    }, Object.defineProperty(t.prototype, "disabled", {
                        get: function() {
                            return m.parse(this.props.location.search).account_disabled
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                P = Object(h.compose)(Object(y.b)("DisableAccountPage", {
                    destination: b.a.DisableAccount
                }), Object(f.a)({
                    location: E.PageviewLocation.DisableAccount
                }))(Y);
            var M, z = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(P),
                L = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle()
                    }, t.prototype.render = function() {
                        return o.createElement(D.Ya, {
                            padding: 3,
                            fullHeight: !0,
                            fullWidth: !0,
                            display: D.X.Flex,
                            flexDirection: D.Aa.Column,
                            flexWrap: D.Ba.NoWrap
                        }, o.createElement(c.a, null, o.createElement(i.a, {
                            path: "/user/disable-account",
                            component: z
                        }), o.createElement(i.a, {
                            path: "/user/delete-account",
                            component: N
                        }), o.createElement(s.a, {
                            from: "/user/disable_account",
                            exact: !0,
                            to: "/user/disable-account"
                        }), o.createElement(s.a, {
                            from: "/user/delete_account",
                            exact: !0,
                            to: "/user/delete-account"
                        }), o.createElement(i.a, {
                            component: u.a
                        })))
                    }, t
                }(o.Component),
                W = n("wUQP"),
                q = n("GxR5"),
                B = n("fbcT"),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startOver = function() {
                            t.props.clearInputs(), t.props.changeStepToEnterEmail()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(l.d)("Please go to your {email} email to retrieve your username.", {
                                email: o.createElement(D.W, {
                                    type: D.Wb.Span,
                                    bold: !0
                                }, this.props.email)
                            }, "AccountRecoveryCheckEmail"),
                            t = Object(l.d)("Please go to your {email} email and click the password reset link we've sent for your {username} Twitch account.", {
                                email: o.createElement(D.W, {
                                    type: D.Wb.Span,
                                    bold: !0
                                }, this.props.email),
                                username: o.createElement(D.W, {
                                    type: D.Wb.Span,
                                    bold: !0
                                }, this.props.username)
                            }, "AccountRecoveryCheckEmail"),
                            n = this.props.username && this.props.username.length ? t : e;
                        return o.createElement(o.Fragment, null, o.createElement(D.W, {
                            fontSize: D.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Check your email", "AccountRecoveryCheckEmail")), o.createElement(D.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4
                        }, n), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4
                        }, Object(l.d)("It could take a few minutes to appear, and be sure to check any spam and promotional folders—just in case!", "AccountRecoveryCheckEmail")))), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            },
                            display: D.X.Flex
                        }, o.createElement(D.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(D.z, {
                            linkTo: "https://www.twitch.tv/"
                        }, Object(l.d)("Done", "AccountRecoveryCheckEmail"))), o.createElement(D.z, {
                            type: D.F.Hollow,
                            onClick: this.startOver
                        }, Object(l.d)("Start Over", "AccountRecoveryCheckEmail"))))
                    }, t
                }(o.PureComponent),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startOver = function() {
                            t.props.clearInputs(), t.props.changeStepToEnterEmail()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(o.Fragment, null, o.createElement(D.W, {
                            fontSize: D.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("We need more information", "AccountRecoveryContactSupport")), o.createElement(D.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4
                        }, o.createElement(D.W, {
                            bold: !0,
                            type: D.Wb.Span
                        }, Object(l.d)("For your security, we need information from you that only the owner of this account would know.", "AccountRecoveryContactSupport"), " "), Object(l.d)("This is the best way for us to verify that you own this account and get it back to you.", "AccountRecoveryContactSupport")), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4
                        }, Object(l.d)("Please contact our Support Team below to get started. They will reach out with a response as soon as possible.", "AccountRecoveryContactSupport")))), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            },
                            display: D.X.Flex
                        }, o.createElement(D.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(D.z, {
                            linkTo: "https://www.twitch.tv/help"
                        }, Object(l.d)("Contact Support", "AccountRecoveryContactSupport"))), o.createElement(D.z, {
                            type: D.F.Hollow,
                            onClick: this.startOver
                        }, Object(l.d)("Start Over", "AccountRecoveryContactSupport"))))
                    }, t
                }(o.PureComponent),
                K = n("rACw"),
                Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleKeyPress = function(e) {
                            "Enter" === e.key && Object(K.b)(t.props.email) && t.props.changeStepToEnterUsername()
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = !Object(K.b)(this.props.email);
                        return o.createElement(o.Fragment, null, o.createElement(D.W, {
                            fontSize: D.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Getting back into your Twitch account", "AccountRecoveryEmail")), o.createElement(D.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4
                        }, Object(l.d)("Tell us the email address linked to your account.", "AccountRecoveryEmail"))), o.createElement(D.Ya, {
                            margin: {
                                y: .5
                            }
                        }, o.createElement(D.Ea, {
                            label: Object(l.d)("Enter your email", "AccountRecoveryEmail")
                        }, o.createElement(D.Sa, {
                            ariaLabel: Object(l.d)("Email", "AccountRecoveryEmail"),
                            defaultValue: this.props.email,
                            autoFocus: !0,
                            type: D.Ua.Text,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyPress
                        }))), o.createElement(D.U, {
                            onClick: this.props.changeStepToContactSupport
                        }, Object(l.d)("Forgot or having problems with your email?", "AccountRecoveryEmail")), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(D.z, {
                            disabled: e,
                            onClick: this.props.changeStepToEnterUsername
                        }, Object(l.d)("Continue", "AccountRecoveryEmail"))))
                    }, t
                }(o.PureComponent),
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.clearUsernameBeforeStepChange = function() {
                            t.props.clearUsername(), t.props.changeStepToCheckEmail()
                        }, t.handleKeyPress = function(e) {
                            "Enter" === e.key && t.props.username.length > 2 && t.props.changeStepToCheckEmail()
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.username.length < 3;
                        return o.createElement(o.Fragment, null, o.createElement(D.W, {
                            fontSize: D.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Getting back into your Twitch account", "AccountRecoveryUsername")), o.createElement(D.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4
                        }, Object(l.d)("Next, give us the Twitch username you're having trouble with.", "AccountRecoveryUsername"))), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(D.Ea, {
                            label: Object(l.d)("Email", "AccountRecoveryUsername")
                        }, o.createElement(D.Ya, {
                            display: D.X.Flex,
                            alignItems: D.f.Center
                        }, o.createElement(D.Ya, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(D.W, {
                            fontSize: D.Ca.Size4,
                            color: D.O.Alt2,
                            bold: !0
                        }, this.props.email)), o.createElement(D.A, {
                            icon: D.ub.Edit,
                            onClick: this.props.changeStepToEnterEmail,
                            ariaLabel: Object(l.d)("Edit", "AccountRecoveryUsername")
                        })))), o.createElement(D.Ya, {
                            margin: {
                                y: .5
                            }
                        }, o.createElement(D.Ea, {
                            label: Object(l.d)("Enter your username", "AccountRecoveryUsername")
                        }, o.createElement(D.Sa, {
                            ariaLabel: Object(l.d)("Username", "AccountRecoveryUsername"),
                            defaultValue: this.props.username,
                            autoFocus: !0,
                            type: D.Ua.Text,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyPress
                        }))), o.createElement(D.Ya, {
                            margin: {
                                y: 2
                            },
                            display: D.X.Flex
                        }, o.createElement(D.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(D.z, {
                            disabled: e,
                            onClick: this.props.changeStepToCheckEmail
                        }, Object(l.d)("Send My Password Reset Link", "AccountRecoveryUsername"))), o.createElement(D.z, {
                            type: D.F.Hollow,
                            onClick: this.clearUsernameBeforeStepChange
                        }, Object(l.d)("I Don't Know My Username", "AccountRecoveryUsername"))))
                    }, t
                }(o.PureComponent);
            ! function(e) {
                e.EnterEmail = "enterEmail", e.EnterUsername = "enterUsername", e.CheckEmail = "checkEmail", e.ContactSupport = "contactSupport"
            }(M || (M = {}));
            n("jFXk");
            var V, Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            email: "",
                            username: "",
                            currentStep: M.EnterEmail
                        }, t.changeStepToEnterEmail = function() {
                            t.setState({
                                currentStep: M.EnterEmail
                            })
                        }, t.emailChanged = function(e) {
                            t.setState({
                                email: e
                            })
                        }, t.usernameChanged = function(e) {
                            t.setState({
                                username: e
                            })
                        }, t.changeStepToContactSupport = function() {
                            t.setState({
                                currentStep: M.ContactSupport
                            })
                        }, t.changeStepToEnterUsername = function() {
                            t.setState({
                                currentStep: M.EnterUsername
                            })
                        }, t.changeStepToCheckEmail = function() {
                            t.setState({
                                currentStep: M.CheckEmail
                            })
                        }, t.clearEmail = function() {
                            t.setState({
                                email: ""
                            })
                        }, t.clearUsername = function() {
                            t.setState({
                                username: ""
                            })
                        }, t.clearInputs = function() {
                            t.clearEmail(), t.clearUsername()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(D.Ya, {
                            display: D.X.Flex,
                            justifyContent: D.Xa.Center,
                            padding: {
                                x: 2,
                                y: 5
                            }
                        }, o.createElement(D.Ya, {
                            className: "account-recovery__body"
                        }, this.renderContent()))
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case M.EnterEmail:
                                return o.createElement(Q, {
                                    email: this.state.email,
                                    onChange: this.emailChanged,
                                    changeStepToContactSupport: this.changeStepToContactSupport,
                                    changeStepToEnterUsername: this.changeStepToEnterUsername
                                });
                            case M.EnterUsername:
                                return o.createElement(H, {
                                    clearUsername: this.clearUsername,
                                    email: this.state.email,
                                    username: this.state.username,
                                    onChange: this.usernameChanged,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail,
                                    changeStepToCheckEmail: this.changeStepToCheckEmail
                                });
                            case M.ContactSupport:
                                return o.createElement(G, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail
                                });
                            case M.CheckEmail:
                                return o.createElement(X, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail,
                                    email: this.state.email,
                                    username: this.state.username
                                });
                            default:
                                return null
                        }
                    }, t
                }(o.Component),
                J = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(W.b)("native_account_recovery") || window.location.replace(Object(q.e)())
                    }, t.prototype.render = function() {
                        return Object(W.b)("native_account_recovery") ? o.createElement(o.Fragment, null, o.createElement(D.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, o.createElement(B.a, {
                            hideUser: !0
                        })), o.createElement(Z, null)) : null
                    }, t
                }(o.Component),
                $ = Object(h.compose)(Object(y.b)("AccountRecoveryPage", {
                    destination: b.a.RecoverAccount,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: E.PageviewLocation.RecoverAccount
                }))(J),
                ee = function() {
                    return o.createElement(o.Fragment, null, o.createElement(D.W, {
                        fontSize: D.Ca.Size3,
                        bold: !0
                    }, Object(l.d)("Account has been reported.", "NotMeReportedAccount")), o.createElement(D.Ya, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, o.createElement(D.W, {
                        fontSize: D.Ca.Size4
                    }, Object(l.d)("Thank you for reporting. We have disabled the account. If you need additional assistance, <x:link>please contact our support team</x:link>.", {
                        "x:link": function(e) {
                            return o.createElement(D.U, {
                                linkTo: "https://www.twitch.tv/help"
                            }, e)
                        }
                    }, "NotMeReportedAccount"))), o.createElement(D.Ya, {
                        margin: {
                            y: 2
                        },
                        display: D.X.Flex
                    }, o.createElement(D.z, {
                        linkTo: "https://www.twitch.tv/"
                    }, Object(l.d)("Back to Twitch", "NotMeReportedAccount"))))
                };
            ! function(e) {
                e.AccountInquiry = "accountInquiry", e.ReportedAccount = "reportedAccount"
            }(V || (V = {}));
            n("7iKH");
            var te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentStep: V.AccountInquiry
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(D.Ya, {
                            display: D.X.Flex,
                            justifyContent: D.Xa.Center,
                            padding: {
                                x: 2,
                                y: 5
                            }
                        }, o.createElement(D.Ya, {
                            className: "not-me-content__body"
                        }, this.renderContent()))
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case V.ReportedAccount:
                                return o.createElement(ee, null);
                            default:
                                return null
                        }
                    }, t
                }(o.Component),
                ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return Object(W.b)("native_not_me") ? o.createElement(o.Fragment, null, o.createElement(D.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, o.createElement(B.a, {
                            hideUser: !0
                        })), o.createElement(te, null)) : o.createElement(u.a, null)
                    }, t
                }(o.Component),
                re = Object(h.compose)(Object(y.b)("NotMePage", {
                    destination: b.a.NotMe,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: E.PageviewLocation.NotMe
                }))(ne);
            n.d(t, "UserRoot", function() {
                return L
            }), n.d(t, "AccountRecoveryPage", function() {
                return $
            }), n.d(t, "NotMePage", function() {
                return re
            })
        }
    }
]);