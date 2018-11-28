(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        "2mE7": function(e, t, n) {},
        "5X7D": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("/MKj"),
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
                        return this.state.error ? o.createElement(l.a, {
                            message: Object(s.d)("Something has gone wrong.  Please try again later.", "RequireSudoToken")
                        }) : this.state.sudoTokenInvalid ? this.renderTokenInvalidMessage() : this.props.isLoggedIn ? this.state.checkingSudoToken ? o.createElement(d.ab, {
                            fillContent: !0
                        }) : "function" == typeof this.props.children ? this.props.children(this.onSudoTokenInvalid) : this.props.children : (this.props.login(this.props.loginTrackingSource), o.createElement(l.a, {
                            message: Object(s.d)("You must be logged in to view this page", "RequireSudoToken")
                        }))
                    }, t.prototype.renderTokenInvalidMessage = function() {
                        var e = Object(s.d)("Back to settings", "RequireSudoToken");
                        return o.createElement(d.Ya, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center
                        }, o.createElement(d.Oa, {
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
                }(o.Component);
            var h = Object(c.compose)(i.a, Object(a.connect)(function(e) {
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
                o = n("q1tI"),
                a = n("Ue10"),
                i = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = o.createElement(a.Fb, {
                        padding: 2,
                        background: a.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: a.x.Medium,
                        topLeft: a.x.Medium
                    });
                    var i = r.__assign({
                        bottomLeft: a.x.Medium,
                        bottomRight: a.x.Medium
                    }, n);
                    return o.createElement(o.Fragment, null, e.header, o.createElement(a.Fb, {
                        background: a.r.Base,
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
                o = n("TSYQ"),
                a = n("q1tI"),
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
                        this.props.title && (e = a.createElement(s.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(s.W, {
                            fontSize: s.Ca.Size6,
                            color: this.props.error ? s.O.Error : s.O.Base,
                            bold: !0
                        }, this.props.title)));
                        var t = {
                            "settings-row": !0,
                            "settings-row--focused": this.props.focus || !!this.props.id && c.p.history.location.hash === "#" + this.props.id
                        };
                        return a.createElement(s.Fb, {
                            padding: 2,
                            className: o(t),
                            fullWidth: !0
                        }, e, this.props.children, this.props.errorMessage && a.createElement(s.W, {
                            color: s.O.Error,
                            fontSize: s.Ca.Size7
                        }, this.props.errorMessage))
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        "EY7+": function(e, t, n) {},
        EpBn: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("/7QA"),
                a = n("BK8n"),
                i = n("Ue10"),
                c = (n("9fsF"), function(e) {
                    return r.createElement(a.a, {
                        focus: !!e.id && o.p.history.location.hash === "#" + e.id
                    }, r.createElement(i.Ea, {
                        error: e.error,
                        errorMessage: e.errorMessage || Object(o.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
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
                return o
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return s
            });
            var r = n("/7QA"),
                o = "https://passport.twitch.tv/forgot_username/new",
                a = "https://help.twitch.tv/customer/portal/emails/new",
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
                o = n("cr+I"),
                a = n("q1tI"),
                i = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function i(t) {
                            var o = n.call(this, t) || this;
                            return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                                if (!(o.tracked || e.skip && e.skip(o.props))) {
                                    o.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, o.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = o.referenceTracking,
                                        i = a.content,
                                        s = a.medium,
                                        l = a.content_index,
                                        u = a.email_id;
                                    c.p.tracking.trackPageview(r.__assign({
                                        content: i,
                                        medium: s,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                        }
                        return r.__extends(i, n), i.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, i.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, i.prototype.render = function() {
                            return a.createElement(t, r.__assign({}, this.props))
                        }, i.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? o.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    a = o.stringify(t);
                                a.length > 0 && (r = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, i
                    }(a.Component);
                    return Object(i.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        W2HU: function(e, t, n) {
            "use strict";
            var r, o = n("/MKj"),
                a = n("fvjX"),
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
                S = Object(a.compose)(Object(E.b)("MinimalUser"), Object(f.a)(v))(k);
            var w = Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    logout: c.f,
                    login: function() {
                        return c.e(i.a.TopNavLoginButton)
                    },
                    changeTheme: s.b
                }, e)
            })(S);
            n.d(t, "a", function() {
                return w
            })
        },
        c0Zc: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("Ue10");

            function a(e) {
                var t = null;
                return e.description && (t = r.createElement(o.Ya, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(o.W, {
                    color: o.O.Alt2
                }, e.description))), r.createElement(o.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(o.W, {
                    type: o.Wb.H3,
                    fontSize: o.Ca.Size4,
                    color: o.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        fbcT: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("2xye"),
                i = n("GnwI"),
                c = n("W2HU"),
                s = n("Ue10"),
                l = (n("EY7+"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(s.Qa, {
                            position: s.kb.Fixed,
                            attachTop: !0,
                            fullWidth: !0
                        }, o.createElement("nav", {
                            className: "minimal-top-nav"
                        }, o.createElement(s.Ya, {
                            className: "minimal-top-nav__menu",
                            display: s.X.Flex,
                            alignItems: s.f.Stretch,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0,
                            justifyContent: s.Xa.Between
                        }, o.createElement(s.Qa, {
                            display: s.X.InlineFlex,
                            alignItems: s.f.Center,
                            flexShrink: 0
                        }, o.createElement(s.U, {
                            to: {
                                pathname: "/",
                                state: {
                                    medium: a.PageviewMedium.TopNav,
                                    content: a.PageviewContent.Logo
                                }
                            }
                        }, o.createElement("div", {
                            className: "minimal-top-nav__home-link-logo"
                        }, o.createElement(s.tb, {
                            asset: s.ub.LogoGlitch,
                            width: 30,
                            height: 30
                        })))), this.renderUser())))
                    }, t.prototype.renderUser = function() {
                        return this.props.hideUser ? null : o.createElement(c.a, {
                            darkModeEnabled: this.props.darkModeEnabled
                        })
                    }, t
                }(o.Component)),
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
                return a
            }), n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA"),
                o = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            function a(e) {
                return !!e && o.test(e)
            }

            function i(e) {
                if (!a(e)) return Object(r.d)("Please enter a valid email.", "EmailValidator")
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
            var r, o, a = n("/7QA"),
                i = n("kRBY");

            function c(e) {
                var t = a.p.store.getState(),
                    n = a.b.get(e, r.Off);
                return !!(n === r.On || n === r.StaffOnly && Object(i.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(r || (r = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(o || (o = {}));
            var s = Math.pow(2, 32);

            function l(e) {
                var t = a.b.get(e, [0, o.Disabled]),
                    n = t[0],
                    r = t[1],
                    c = a.p.session.deviceID,
                    l = a.p.store.getState();
                return !(r !== o.Enabled || !Object(i.g)(l)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, r = 0, o = e.length; r < o; r++) n ^= e.charCodeAt(r), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(c + "-" + e) / s < n
            }
        },
        xuFZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, o = n("mrSG"),
                a = n("q1tI"),
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
                w = n("geRD"),
                O = n("EpBn"),
                C = n("BK8n"),
                A = n("7PeK"),
                _ = n("c0Zc"),
                j = n("Ue10"),
                D = n("K6Vg"),
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.props.user) return [2];
                                            this.setState({
                                                working: !0
                                            }), e = Object(w.a)({
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        if (this.state.error) {
                            var e = this.props.isDelete ? Object(l.d)("Something went wrong when attempting to delete your account.", "DisableAccountForm") : Object(l.d)("Something went wrong when attempting to disable your account.", "DisableAccountForm");
                            return a.createElement(A.a, null, a.createElement(C.a, null, a.createElement(j.W, {
                                color: j.O.Error
                            }, e)))
                        }
                        if (this.props.data.loading) return a.createElement(j.ab, {
                            fillContent: !0
                        });
                        if (!this.props.user) return null;
                        var t = this.props.data.currentUser && this.props.data.currentUser.roles,
                            n = !!t && !!(t.isAffiliate || t.isExtensionsDeveloper || t.isPartner),
                            r = null,
                            o = this.props.isDelete ? Object(l.d)("Delete Account", "DisableAccountForm") : Object(l.d)("Disable Account", "DisableAccountForm"),
                            i = this.props.isDelete ? Object(l.d)("Are you sure you'd like to delete your Twitch account? This will permanently erase all your content and personal information, and you will no longer be able to claim {login} as your user ID.", {
                                login: this.props.user.login
                            }, "DisableAccountForm") : Object(l.d)("We're sorry to see you go. Disabling your account does not delete your user information. Contact us at support@twitch.tv if there's anything we can do to change your mind.", "DisableAccountForm");
                        return r = n ? this.renderPADSection() : this.renderDisableSection(n, o), a.createElement(a.Fragment, null, a.createElement(_.a, {
                            title: o,
                            description: i
                        }), r)
                    }, t.prototype.renderPADSection = function() {
                        var e = Object(l.d)("We cannot delete your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return a.createElement(j.U, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            t = Object(l.d)("We cannot disable your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return a.createElement(j.U, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            n = this.props.isDelete ? e : t,
                            o = this.props.isDelete ? Object(l.d)("Delete Your Twitch Account", "DisableAccountForm") : Object(l.d)("Disable Your Twitch Account", "DisableAccountForm");
                        return a.createElement(A.a, null, a.createElement(O.a, {
                            "data-test-selector": r.PADMessage,
                            label: o,
                            orientation: j.Fa.Horizontal
                        }, n))
                    }, t.prototype.renderDisableSection = function(e, t) {
                        if (!this.props.user) return null;
                        var n = this.props.isDelete ? Object(l.d)("Account to delete", "DisableAccountForm") : Object(l.d)("Account to disable", "DisableAccountForm"),
                            r = this.props.isDelete ? Object(l.d)("Tell us why you're deleting your account (optional)", "DisableAccountForm") : Object(l.d)("Tell us why you're disabling your account (optional)", "DisableAccountForm"),
                            o = a.createElement(j.Ya, null, a.createElement(j.z, {
                                onClick: this.disable,
                                state: this.state.working ? j.E.Loading : j.E.Default,
                                disabled: this.state.working || e
                            }, t));
                        return a.createElement(A.a, {
                            footer: o
                        }, a.createElement(O.a, {
                            label: n
                        }, a.createElement(j.Sa, {
                            type: j.Ua.Text,
                            disabled: !0,
                            value: this.props.user.login || ""
                        })), a.createElement(O.a, {
                            label: r
                        }, a.createElement(j.Tb, {
                            onChange: this.handleReasonChange
                        })))
                    }, t
                }(a.Component),
                U = Object(h.compose)(Object(S.a)(T), Object(S.a)(D, {
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
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.deleted && this.props.isLoggedIn ? window.location.replace("/user/delete-account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.deleted ? a.createElement(a.Fragment, null, a.createElement(j.Fb, {
                            borderBottom: !0
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size1
                        }, Object(l.d)("Your account has been deleted", "DeleteAccountPage"))), a.createElement(j.Ya, null, a.createElement(j.U, {
                            to: "/"
                        }, Object(l.d)("Back to the front page", "DeleteAccountPage")))) : a.createElement(v.a, {
                            loginTrackingSource: g.a.DeleteAccountPage
                        }, a.createElement(F, {
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
                }(a.Component),
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
                M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.disabled && this.props.isLoggedIn ? window.location.replace("/user/disable-account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.disabled ? a.createElement(a.Fragment, null, a.createElement(j.Fb, {
                            borderBottom: !0
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size1
                        }, Object(l.d)("Your account has been disabled", "DisableAccountPage"))), a.createElement(j.Ya, null, a.createElement(j.U, {
                            to: "/"
                        }, Object(l.d)("Back to the front page", "DisableAccountPage")))) : a.createElement(v.a, {
                            loginTrackingSource: g.a.DisableAccountPage
                        }, a.createElement(F, {
                            redirect: "/user/disable-account?account_disabled=true"
                        }))
                    }, Object.defineProperty(t.prototype, "disabled", {
                        get: function() {
                            return m.parse(this.props.location.search).account_disabled
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                Y = Object(h.compose)(Object(y.b)("DisableAccountPage", {
                    destination: b.a.DisableAccount
                }), Object(f.a)({
                    location: E.PageviewLocation.DisableAccount
                }))(M);
            var P, z = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(Y),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle()
                    }, t.prototype.render = function() {
                        return a.createElement(j.Ya, {
                            padding: 3,
                            fullHeight: !0,
                            fullWidth: !0,
                            display: j.X.Flex,
                            flexDirection: j.Aa.Column,
                            flexWrap: j.Ba.NoWrap
                        }, a.createElement(c.a, null, a.createElement(i.a, {
                            path: "/user/disable-account",
                            component: z
                        }), a.createElement(i.a, {
                            path: "/user/delete-account",
                            component: N
                        }), a.createElement(s.a, {
                            from: "/user/disable_account",
                            exact: !0,
                            to: "/user/disable-account"
                        }), a.createElement(s.a, {
                            from: "/user/delete_account",
                            exact: !0,
                            to: "/user/delete-account"
                        }), a.createElement(i.a, {
                            component: u.a
                        })))
                    }, t
                }(a.Component),
                L = n("wUQP"),
                q = n("GxR5"),
                B = n("fbcT"),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startOver = function() {
                            t.props.clearInputs(), t.props.changeStepToEnterEmail()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = Object(l.d)("Please go to your {email} email to retrieve your username.", {
                                email: a.createElement(j.W, {
                                    type: j.Wb.Span,
                                    bold: !0
                                }, this.props.email)
                            }, "AccountRecoveryCheckEmail"),
                            t = Object(l.d)("Please go to your {email} email and click the password reset link we've sent for your {username} Twitch account.", {
                                email: a.createElement(j.W, {
                                    type: j.Wb.Span,
                                    bold: !0
                                }, this.props.email),
                                username: a.createElement(j.W, {
                                    type: j.Wb.Span,
                                    bold: !0
                                }, this.props.username)
                            }, "AccountRecoveryCheckEmail"),
                            n = this.props.username && this.props.username.length ? t : e;
                        return a.createElement(a.Fragment, null, a.createElement(j.W, {
                            fontSize: j.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Check your email", "AccountRecoveryCheckEmail")), a.createElement(j.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4
                        }, n), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4
                        }, Object(l.d)("It could take a few minutes to appear, and be sure to check any spam and promotional folders—just in case!", "AccountRecoveryCheckEmail")))), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            },
                            display: j.X.Flex
                        }, a.createElement(j.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(j.z, {
                            linkTo: "https://www.twitch.tv/"
                        }, Object(l.d)("Done", "AccountRecoveryCheckEmail"))), a.createElement(j.z, {
                            type: j.F.Hollow,
                            onClick: this.startOver
                        }, Object(l.d)("Start Over", "AccountRecoveryCheckEmail"))))
                    }, t
                }(a.PureComponent),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startOver = function() {
                            t.props.clearInputs(), t.props.changeStepToEnterEmail()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(j.W, {
                            fontSize: j.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("We need more information", "AccountRecoveryContactSupport")), a.createElement(j.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4
                        }, a.createElement(j.W, {
                            bold: !0,
                            type: j.Wb.Span
                        }, Object(l.d)("For your security, we need information from you that only the owner of this account would know.", "AccountRecoveryContactSupport"), " "), Object(l.d)("This is the best way for us to verify that you own this account and get it back to you.", "AccountRecoveryContactSupport")), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4
                        }, Object(l.d)("Please contact our Support Team below to get started. They will reach out with a response as soon as possible.", "AccountRecoveryContactSupport")))), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            },
                            display: j.X.Flex
                        }, a.createElement(j.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(j.z, {
                            linkTo: "https://www.twitch.tv/help"
                        }, Object(l.d)("Contact Support", "AccountRecoveryContactSupport"))), a.createElement(j.z, {
                            type: j.F.Hollow,
                            onClick: this.startOver
                        }, Object(l.d)("Start Over", "AccountRecoveryContactSupport"))))
                    }, t
                }(a.PureComponent),
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = !Object(K.b)(this.props.email);
                        return a.createElement(a.Fragment, null, a.createElement(j.W, {
                            fontSize: j.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Getting back into your Twitch account", "AccountRecoveryEmail")), a.createElement(j.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4
                        }, Object(l.d)("Tell us the email address linked to your account.", "AccountRecoveryEmail"))), a.createElement(j.Ya, {
                            margin: {
                                y: .5
                            }
                        }, a.createElement(j.Ea, {
                            label: Object(l.d)("Enter your email", "AccountRecoveryEmail")
                        }, a.createElement(j.Sa, {
                            ariaLabel: Object(l.d)("Email", "AccountRecoveryEmail"),
                            defaultValue: this.props.email,
                            autoFocus: !0,
                            type: j.Ua.Text,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyPress
                        }))), a.createElement(j.U, {
                            onClick: this.props.changeStepToContactSupport
                        }, Object(l.d)("Forgot or having problems with your email?", "AccountRecoveryEmail")), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(j.z, {
                            disabled: e,
                            onClick: this.props.changeStepToEnterUsername
                        }, Object(l.d)("Continue", "AccountRecoveryEmail"))))
                    }, t
                }(a.PureComponent),
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.username.length < 3;
                        return a.createElement(a.Fragment, null, a.createElement(j.W, {
                            fontSize: j.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Getting back into your Twitch account", "AccountRecoveryUsername")), a.createElement(j.Ya, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4
                        }, Object(l.d)("Next, give us the Twitch username you're having trouble with.", "AccountRecoveryUsername"))), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(j.Ea, {
                            label: Object(l.d)("Email", "AccountRecoveryUsername")
                        }, a.createElement(j.Ya, {
                            display: j.X.Flex,
                            alignItems: j.f.Center
                        }, a.createElement(j.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(j.W, {
                            fontSize: j.Ca.Size4,
                            color: j.O.Alt2,
                            bold: !0
                        }, this.props.email)), a.createElement(j.A, {
                            icon: j.ub.Edit,
                            onClick: this.props.changeStepToEnterEmail,
                            ariaLabel: Object(l.d)("Edit", "AccountRecoveryUsername")
                        })))), a.createElement(j.Ya, {
                            margin: {
                                y: .5
                            }
                        }, a.createElement(j.Ea, {
                            label: Object(l.d)("Enter your username", "AccountRecoveryUsername")
                        }, a.createElement(j.Sa, {
                            ariaLabel: Object(l.d)("Username", "AccountRecoveryUsername"),
                            defaultValue: this.props.username,
                            autoFocus: !0,
                            type: j.Ua.Text,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyPress
                        }))), a.createElement(j.Ya, {
                            margin: {
                                y: 2
                            },
                            display: j.X.Flex
                        }, a.createElement(j.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(j.z, {
                            disabled: e,
                            onClick: this.props.changeStepToCheckEmail
                        }, Object(l.d)("Send My Password Reset Link", "AccountRecoveryUsername"))), a.createElement(j.z, {
                            type: j.F.Hollow,
                            onClick: this.clearUsernameBeforeStepChange
                        }, Object(l.d)("I Don't Know My Username", "AccountRecoveryUsername"))))
                    }, t
                }(a.PureComponent);
            ! function(e) {
                e.EnterEmail = "enterEmail", e.EnterUsername = "enterUsername", e.CheckEmail = "checkEmail", e.ContactSupport = "contactSupport"
            }(P || (P = {}));
            n("jFXk");
            var V, Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            email: "",
                            username: "",
                            currentStep: P.EnterEmail
                        }, t.changeStepToEnterEmail = function() {
                            t.setState({
                                currentStep: P.EnterEmail
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
                                currentStep: P.ContactSupport
                            })
                        }, t.changeStepToEnterUsername = function() {
                            t.setState({
                                currentStep: P.EnterUsername
                            })
                        }, t.changeStepToCheckEmail = function() {
                            t.setState({
                                currentStep: P.CheckEmail
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(j.Ya, {
                            display: j.X.Flex,
                            justifyContent: j.Xa.Center,
                            padding: {
                                x: 2,
                                y: 5
                            }
                        }, a.createElement(j.Ya, {
                            className: "account-recovery__body"
                        }, this.renderContent()))
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case P.EnterEmail:
                                return a.createElement(Q, {
                                    email: this.state.email,
                                    onChange: this.emailChanged,
                                    changeStepToContactSupport: this.changeStepToContactSupport,
                                    changeStepToEnterUsername: this.changeStepToEnterUsername
                                });
                            case P.EnterUsername:
                                return a.createElement(H, {
                                    clearUsername: this.clearUsername,
                                    email: this.state.email,
                                    username: this.state.username,
                                    onChange: this.usernameChanged,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail,
                                    changeStepToCheckEmail: this.changeStepToCheckEmail
                                });
                            case P.ContactSupport:
                                return a.createElement(G, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail
                                });
                            case P.CheckEmail:
                                return a.createElement(X, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail,
                                    email: this.state.email,
                                    username: this.state.username
                                });
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                J = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(L.b)("native_account_recovery") || window.location.replace(Object(q.e)())
                    }, t.prototype.render = function() {
                        return Object(L.b)("native_account_recovery") ? a.createElement(a.Fragment, null, a.createElement(j.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, a.createElement(B.a, {
                            hideUser: !0
                        })), a.createElement(Z, null)) : null
                    }, t
                }(a.Component),
                $ = Object(h.compose)(Object(y.b)("AccountRecoveryPage", {
                    destination: b.a.RecoverAccount,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: E.PageviewLocation.RecoverAccount
                }))(J);
            ! function(e) {
                e.ReportAccountButton = "not-me-account-inquiry_report-account_button", e.ThisIsMyAccount = "not-me-account-inquiry_this-is-my-account_button"
            }(V || (V = {}));
            var ee, te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isReportAccountEnabled: !0
                    }, t.handleReportAccountClick = function() {
                        t.setState({
                            isReportAccountEnabled: !1
                        }), t.props.changeStepToReportedAccount()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.state.isReportAccountEnabled ? j.E.Default : j.E.Loading;
                    return a.createElement(a.Fragment, null, a.createElement(j.W, {
                        fontSize: j.Ca.Size3,
                        bold: !0
                    }, Object(l.d)("Didn’t create this account?", "NotMeAccountInquiry")), a.createElement(j.Ya, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, a.createElement(j.W, {
                        fontSize: j.Ca.Size4
                    }, Object(l.d)("If you didn’t create this account associated with this email <x:link> </x:link>, please let us know so we can take the appropriate steps to disable this account.", {
                        "x:link": function() {
                            return a.createElement(j.W, {
                                type: j.Wb.Strong
                            }, e.props.email)
                        }
                    }, "NotMeAccountInquiry"))), a.createElement(j.Ya, {
                        display: j.X.Flex
                    }, a.createElement(j.Ya, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(j.z, {
                        "data-test-selector": V.ReportAccountButton,
                        onClick: this.handleReportAccountClick,
                        disabled: !this.state.isReportAccountEnabled,
                        state: t
                    }, Object(l.d)("Report this account", "NotMeAccountInquiry"))), a.createElement(j.z, {
                        "data-test-selector": V.ThisIsMyAccount,
                        type: j.F.Hollow,
                        linkTo: "/"
                    }, Object(l.d)("This is my account", "NotMeAccountInquiry"))))
                }, t
            }(a.PureComponent);
            ! function(e) {
                e.Account = "account", e.Email = "email"
            }(ee || (ee = {}));
            var ne, re = n("ZDlU");
            (ne || (ne = {})).NotMeErrorButton = "not-me-error_button";
            var oe, ae = function() {
                    return a.createElement(re.a, {
                        message: Object(l.d)("Something went wrong", "NotMeError")
                    }, a.createElement(j.Ya, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(j.z, {
                        linkTo: "/",
                        "data-test-selector": ne.NotMeErrorButton
                    }, Object(l.d)("Back to Twitch", "NotMeError"))))
                },
                ie = function() {
                    return a.createElement(a.Fragment, null, a.createElement(j.W, {
                        fontSize: j.Ca.Size3,
                        bold: !0
                    }, Object(l.d)("Account has been reported.", "NotMeReportedAccount")), a.createElement(j.Ya, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, a.createElement(j.W, {
                        fontSize: j.Ca.Size4
                    }, Object(l.d)("Thank you for reporting. We have disabled the account. If you need additional assistance, <x:link>please contact our support team</x:link>.", {
                        "x:link": function(e) {
                            return a.createElement(j.U, {
                                linkTo: "https://www.twitch.tv/help"
                            }, e)
                        }
                    }, "NotMeReportedAccount"))), a.createElement(j.Ya, {
                        margin: {
                            y: 2
                        },
                        display: j.X.Flex
                    }, a.createElement(j.z, {
                        linkTo: "https://www.twitch.tv/"
                    }, Object(l.d)("Back to Twitch", "NotMeReportedAccount"))))
                };
            ! function(e) {
                e.AccountInquiry = "accountInquiry", e.ReportedAccount = "reportedAccount"
            }(oe || (oe = {}));
            n("7iKH");
            var ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentStep: oe.AccountInquiry
                        }, t.changeStepToReportedAccount = function() {
                            t.setState({
                                currentStep: oe.ReportedAccount
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(j.Ya, {
                            display: j.X.Flex,
                            justifyContent: j.Xa.Center,
                            padding: {
                                x: 2,
                                y: 5
                            }
                        }, a.createElement(j.Ya, {
                            className: "not-me-content__body"
                        }, this.renderContent()))
                    }, t.prototype.renderAccountInquiry = function() {
                        var e = function(e) {
                            void 0 === e && (e = "");
                            var t = m.parse(e);
                            return {
                                account: t[ee.Account] || null,
                                email: t[ee.Email] || null
                            }
                        }(window.location.search);
                        return function(e) {
                            var t = e.account,
                                n = e.email;
                            return !(!t || !n) && Object(K.b)(n)
                        }(e) ? a.createElement(te, o.__assign({
                            changeStepToReportedAccount: this.changeStepToReportedAccount
                        }, e)) : a.createElement(ae, null)
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case oe.AccountInquiry:
                                return this.renderAccountInquiry();
                            case oe.ReportedAccount:
                                return a.createElement(ie, null);
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                se = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return Object(L.b)("native_not_me") ? a.createElement(a.Fragment, null, a.createElement(j.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, a.createElement(B.a, {
                            hideUser: !0
                        })), a.createElement(ce, null)) : a.createElement(u.a, null)
                    }, t
                }(a.Component),
                le = Object(h.compose)(Object(y.b)("NotMePage", {
                    destination: b.a.NotMe,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: E.PageviewLocation.NotMe
                }))(se);
            n.d(t, "UserRoot", function() {
                return W
            }), n.d(t, "AccountRecoveryPage", function() {
                return $
            }), n.d(t, "NotMePage", function() {
                return le
            })
        }
    }
]);