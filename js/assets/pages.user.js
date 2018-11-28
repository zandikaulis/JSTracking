(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        "2mE7": function(e, t, n) {},
        "4PHc": function(e, t, n) {},
        "5X7D": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                i = n("9C/b"),
                s = n("fvjX"),
                c = n("/7QA"),
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
                            message: Object(c.d)("Something has gone wrong.  Please try again later.", "RequireSudoToken")
                        }) : this.state.sudoTokenInvalid ? this.renderTokenInvalidMessage() : this.props.isLoggedIn ? this.state.checkingSudoToken ? a.createElement(d.ab, {
                            fillContent: !0
                        }) : "function" == typeof this.props.children ? this.props.children(this.onSudoTokenInvalid) : this.props.children : (this.props.login(this.props.loginTrackingSource), a.createElement(l.a, {
                            message: Object(c.d)("You must be logged in to view this page", "RequireSudoToken")
                        }))
                    }, t.prototype.renderTokenInvalidMessage = function() {
                        var e = Object(c.d)("Back to settings", "RequireSudoToken");
                        return a.createElement(d.Ya, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center
                        }, a.createElement(d.Oa, {
                            type: d.Pa.Info,
                            closeButtonAriaLabel: e,
                            closeButtonOnClick: this.navigateToSettings,
                            title: Object(c.d)("Log in Required", "RequireSudoToken"),
                            description: Object(c.d)("You must log in again to confirm your identity before modifying your account status.", "RequireSudoToken"),
                            actions: [{
                                children: Object(c.d)("Log in again", "RequireSudoToken"),
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
            var h = Object(s.compose)(i.a, Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(p.f)(e),
                    user: Object(p.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
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
        "96Fe": function(e, t, n) {
            "use strict";
            var r = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                i = n("Ue10"),
                s = (n("4PHc"), function(e) {
                    if (!e.message) return null;
                    var t = void 0 === e.subMessage ? Object(o.d)("Please try again.", "ServerMessage") : e.subMessage;
                    return a.createElement(i.Fb, {
                        className: r({
                            "server-message-success": e.isSuccessMessage,
                            "server-message-alert": !e.isSuccessMessage
                        }),
                        background: i.r.Alt2,
                        borderRadius: i.x.Large,
                        display: i.X.Flex,
                        margin: {
                            top: 2,
                            x: "auto"
                        },
                        padding: {
                            y: 1,
                            left: 1,
                            right: 2
                        },
                        position: i.kb.Relative,
                        fullWidth: !0
                    }, a.createElement(i.Ya, {
                        className: r({
                            "server-message-success__icon": e.isSuccessMessage,
                            "server-message-alert__icon": !e.isSuccessMessage
                        }),
                        alignItems: i.f.Start,
                        display: i.X.Flex
                    }, a.createElement(i.tb, {
                        asset: e.isSuccessMessage ? i.ub.NotificationSuccess : i.ub.NotificationError,
                        height: 30,
                        width: 30
                    })), a.createElement(i.Ya, {
                        display: i.X.Flex,
                        flexDirection: i.Aa.Column,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(i.W, {
                        fontSize: i.Ca.Size6,
                        type: i.Wb.Strong
                    }, e.message), a.createElement(i.Ya, null, a.createElement(i.W, {
                        fontSize: i.Ca.Size6,
                        color: i.O.Alt2
                    }, t))))
                });
            n.d(t, "a", function() {
                return s
            })
        },
        "9fsF": function(e, t, n) {},
        BK8n: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                o = n("q1tI"),
                i = n("i8i4"),
                s = n("/7QA"),
                c = n("Ue10"),
                l = (n("uOxp"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.focus || this.props.id && s.p.history.location.hash === "#" + this.props.id) {
                            var e = i.findDOMNode(this);
                            e && e.scrollIntoView()
                        }
                    }, t.prototype.render = function() {
                        var e = null;
                        this.props.title && (e = o.createElement(c.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(c.W, {
                            fontSize: c.Ca.Size6,
                            color: this.props.error ? c.O.Error : c.O.Base,
                            bold: !0
                        }, this.props.title)));
                        var t = {
                            "settings-row": !0,
                            "settings-row--focused": this.props.focus || !!this.props.id && s.p.history.location.hash === "#" + this.props.id
                        };
                        return o.createElement(c.Fb, {
                            padding: 2,
                            className: a(t),
                            fullWidth: !0
                        }, e, this.props.children, this.props.errorMessage && o.createElement(c.W, {
                            color: c.O.Error,
                            fontSize: c.Ca.Size7
                        }, this.props.errorMessage))
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        EQ2E: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                a = n("kRBY"),
                o = n("mrSG"),
                i = n("TSYQ"),
                s = n("q1tI"),
                c = n("/7QA"),
                l = n("tKDy"),
                u = n("Ue10"),
                p = (n("g/Ny"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            widgetId: null
                        }, t.onChange = function(e) {
                            Object(l.j)({
                                screen: t.props.screen,
                                target: l.g.Captcha,
                                action: l.a.Complete
                            }), t.props.onChange(e)
                        }, t.onExpired = function() {
                            t.props.onChange(null)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        if (this.props.refDelegate && this.props.refDelegate(this), window.onRecaptchaLoad = function() {
                                e.initRecaptcha()
                            }, document.querySelector("#recaptcha-script")) this.initRecaptcha();
                        else {
                            var t = document.createElement("script");
                            t.src = "https://recaptcha.net/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit&hl=" + this.props.languageCode, t.async = !0, t.id = "recaptcha-script", document.body.appendChild(t)
                        }
                    }, t.prototype.componentWillUnmount = function() {
                        window.onRecaptchaLoad = function() {}
                    }, t.prototype.render = function() {
                        var e = this.props.showLoader && null === this.state.widgetId,
                            t = i({
                                "g-recaptcha": this.props.invisible,
                                "recaptcha--loading": e
                            });
                        return s.createElement(s.Fragment, null, e && s.createElement(u.ab, {
                            size: u.Db.Large
                        }), s.createElement("div", {
                            id: "recaptcha-element-container",
                            className: t
                        }))
                    }, t.prototype.reset = function() {
                        null !== this.state.widgetId && window.grecaptcha && window.grecaptcha.reset(this.state.widgetId)
                    }, t.prototype.execute = function() {
                        null !== this.state.widgetId && window.grecaptcha && this.props.invisible && window.grecaptcha.execute(this.state.widgetId)
                    }, t.prototype.initRecaptcha = function() {
                        if (window.grecaptcha) {
                            var e = window.grecaptcha.render("recaptcha-element-container", {
                                sitekey: this.props.invisible ? c.p.config.invisibleCaptchaKey : c.p.config.captchaKey,
                                callback: this.onChange,
                                theme: "light",
                                type: "image",
                                size: this.props.invisible ? "invisible" : "normal",
                                tabindex: 0,
                                hl: this.props.languageCode,
                                badge: "bottomright",
                                "expired-callback": this.onExpired
                            });
                            this.setState({
                                widgetId: e
                            })
                        }
                    }, t
                }(s.PureComponent));
            var d = Object(r.connect)(function(e) {
                return {
                    languageCode: Object(a.b)(e)
                }
            })(p);
            n.d(t, "a", function() {
                return d
            }), n.d(t, !1, function() {
                return p
            })
        },
        "EY7+": function(e, t, n) {},
        EpBn: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("/7QA"),
                o = n("BK8n"),
                i = n("Ue10"),
                s = (n("9fsF"), function(e) {
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
                return s
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
                return s
            }), n.d(t, "e", function() {
                return c
            });
            var r = n("/7QA"),
                a = "https://passport.twitch.tv/forgot_username/new",
                o = "https://help.twitch.tv/customer/portal/emails/new",
                i = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                s = "https://www.twitch.tv/p/legal/terms-of-service/";

            function c() {
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
                s = n("/7QA");

            function c(e) {
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
                                        c = o.medium,
                                        l = o.content_index,
                                        u = o.email_id;
                                    s.p.tracking.trackPageview(r.__assign({
                                        content: i,
                                        medium: c,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
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
                return c
            })
        },
        W2HU: function(e, t, n) {
            "use strict";
            var r, a = n("/MKj"),
                o = n("fvjX"),
                i = n("1/iK"),
                s = n("y5D0"),
                c = n("jZLd"),
                l = n("kRBY"),
                u = n("mrSG"),
                p = n("TSYQ"),
                d = n("q1tI"),
                m = n("/7QA"),
                h = n("u5aL"),
                g = n("yR8l"),
                f = n("/0dD"),
                b = n("76Lv"),
                E = n("GnwI"),
                v = n("Ue10"),
                y = n("8zqa");
            n("2mE7");
            ! function(e) {
                e.DarkModeToggle = "minimal-user__dark-mode-toggle", e.DropdownDown = "minimal-user__dropdown-down", e.UserMenu = "minimal-user__user-menu-toggle", e.Logout = "minimal-user__logout", e.Login = "minimal-user__login"
            }(r || (r = {}));
            var S = function(e) {
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
                            n.props.changeTheme(e, c.a.UserMenu)
                        }, n.state = {
                            dropdownOpen: !1
                        }, n
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return d.createElement(v.Ya, {
                            margin: 1
                        }, d.createElement(v.z, {
                            onClick: this.onLoginClick,
                            "data-test-selector": r.Login
                        }, Object(m.d)("Log in", "MinimalUser")));
                        if (this.props.data.loading || !this.props.data.currentUser || this.props.data.error) return d.createElement(v.jb, null);
                        if (this.props.isOnboarding) return d.createElement(v.Ya, {
                            display: v.X.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            alignItems: v.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, d.createElement(v.Ya, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, d.createElement(v.Ya, null, this.renderAvatar())), d.createElement(v.Ya, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: v.Aa.Column,
                            ellipsis: !0
                        }, d.createElement(v.W, {
                            className: "minimal-top-nav__username",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName))));
                        var e = null;
                        this.props.darkModeEnabled && (e = d.createElement(v.Fb, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(v.Ya, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, d.createElement(v.N, {
                            id: "dark-mode-toggle",
                            label: Object(m.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": r.DarkModeToggle,
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === f.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = p(Object(b.b)(f.a.Dark), {
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
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, d.createElement(v.Va, {
                            onClick: this.onCardClick,
                            "data-test-selector": r.UserMenu
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            alignItems: v.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, d.createElement(v.Ya, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, d.createElement(v.Ya, null, this.renderAvatar())), d.createElement(v.Ya, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: v.Aa.Column,
                            ellipsis: !0
                        }, d.createElement(v.W, {
                            className: "minimal-top-nav__username",
                            "data-a-target": "user-display-name",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName)), d.createElement(v.Fb, {
                            display: v.X.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, d.createElement(v.tb, {
                            asset: v.ub.GlyphArrDown
                        }))))), d.createElement(v.Fb, {
                            fullWidth: !0,
                            overflow: v.db.Hidden,
                            position: v.kb.Absolute,
                            padding: {
                                y: 1
                            },
                            background: v.r.Base,
                            className: n,
                            "data-test-selector": r.DropdownDown
                        }, e, d.createElement(v.Va, {
                            onClick: this.onLogoutClick,
                            "data-test-selector": r.Logout
                        }, d.createElement(v.Fb, {
                            color: v.O.Alt,
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(v.tb, {
                            asset: v.ub.NavLogout,
                            height: 20,
                            width: 20
                        })), d.createElement(v.W, null, Object(m.d)("Log Out", "MinimalUser"))))))
                    }, t.prototype.renderAvatar = function() {
                        return this.props.data.currentUser ? d.createElement(v.q, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: Object(m.d)("Your Avatar", "Minimaluser")
                        }) : null
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                k = Object(o.compose)(Object(E.b)("MinimalUser"), Object(g.a)(y))(S);
            var w = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    logout: s.f,
                    login: function() {
                        return s.e(i.a.TopNavLoginButton)
                    },
                    changeTheme: c.b
                }, e)
            })(k);
            n.d(t, "a", function() {
                return w
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
                s = n("W2HU"),
                c = n("Ue10"),
                l = (n("EY7+"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(c.Qa, {
                            position: c.kb.Fixed,
                            attachTop: !0,
                            fullWidth: !0
                        }, a.createElement("nav", {
                            className: "minimal-top-nav"
                        }, a.createElement(c.Ya, {
                            className: "minimal-top-nav__menu",
                            display: c.X.Flex,
                            alignItems: c.f.Stretch,
                            flexWrap: c.Ba.NoWrap,
                            fullHeight: !0,
                            justifyContent: c.Xa.Between
                        }, a.createElement(c.Qa, {
                            display: c.X.InlineFlex,
                            alignItems: c.f.Center,
                            flexShrink: 0
                        }, a.createElement(c.U, {
                            to: {
                                pathname: "/",
                                state: {
                                    medium: o.PageviewMedium.TopNav,
                                    content: o.PageviewContent.Logo
                                }
                            }
                        }, a.createElement("div", {
                            className: "minimal-top-nav__home-link-logo"
                        }, a.createElement(c.tb, {
                            asset: c.ub.LogoGlitch,
                            width: 30,
                            height: 30
                        })))), this.renderUser())))
                    }, t.prototype.renderUser = function() {
                        return this.props.hideUser ? null : a.createElement(s.a, {
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
        "g/Ny": function(e, t, n) {},
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
                return s
            }), n.d(t, "c", function() {
                return l
            });
            var r, a, o = n("/7QA"),
                i = n("kRBY");

            function s(e) {
                var t = o.p.store.getState(),
                    n = o.b.get(e, r.Off);
                return !!(n === r.On || n === r.StaffOnly && Object(i.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(r || (r = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(a || (a = {}));
            var c = Math.pow(2, 32);

            function l(e) {
                var t = o.b.get(e, [0, a.Disabled]),
                    n = t[0],
                    r = t[1],
                    s = o.p.session.deviceID,
                    l = o.p.store.getState();
                return !(r !== a.Enabled || !Object(i.g)(l)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, r = 0, a = e.length; r < a; r++) n ^= e.charCodeAt(r), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(s + "-" + e) / c < n
            }
        },
        xuFZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("4p7I"),
                s = n("yoKv"),
                c = n("mLw1"),
                l = n("/7QA"),
                u = n("LA8z"),
                p = n("/MKj"),
                d = n("kRBY"),
                m = n("cr+I"),
                h = n("fvjX"),
                g = n("V+GM"),
                f = n("1/iK"),
                b = n("NvVO"),
                E = n("2xye"),
                v = n("GnwI"),
                y = n("5X7D"),
                S = n("y5D0"),
                k = n("yR8l"),
                w = n("geRD"),
                C = n("EpBn"),
                O = n("BK8n"),
                _ = n("7PeK"),
                A = n("c0Zc"),
                D = n("Ue10"),
                j = n("K6Vg"),
                T = n("kOk9");
            ! function(e) {
                e.PADMessage = "PAD_MESSAGE_SELECTOR"
            }(r || (r = {}));
            var U = function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.state.error) {
                            var e = this.props.isDelete ? Object(l.d)("Something went wrong when attempting to delete your account.", "DisableAccountForm") : Object(l.d)("Something went wrong when attempting to disable your account.", "DisableAccountForm");
                            return o.createElement(_.a, null, o.createElement(O.a, null, o.createElement(D.W, {
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
                        return r = n ? this.renderPADSection() : this.renderDisableSection(n, a), o.createElement(o.Fragment, null, o.createElement(A.a, {
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
                        return o.createElement(_.a, null, o.createElement(C.a, {
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
                        return o.createElement(_.a, {
                            footer: a
                        }, o.createElement(C.a, {
                            label: n
                        }, o.createElement(D.Sa, {
                            type: D.Ua.Text,
                            disabled: !0,
                            value: this.props.user.login || ""
                        })), o.createElement(C.a, {
                            label: r
                        }, o.createElement(D.Tb, {
                            onChange: this.handleReasonChange
                        })))
                    }, t
                }(o.Component),
                x = Object(h.compose)(Object(k.a)(T), Object(k.a)(j, {
                    name: "disableUserAccount"
                }))(U);
            var M = Object(p.connect)(function(e) {
                    return {
                        user: Object(d.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        logout: S.f
                    }, e)
                })(x),
                F = function(e) {
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
                        }, Object(l.d)("Back to the front page", "DeleteAccountPage")))) : o.createElement(y.a, {
                            loginTrackingSource: f.a.DeleteAccountPage
                        }, o.createElement(M, {
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
                R = Object(h.compose)(Object(v.b)("DeleteAccountPage", {
                    destination: b.a.DeleteAccount
                }), Object(g.a)({
                    location: E.PageviewLocation.DeleteAccount
                }))(F);
            var I = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(R),
                N = function(e) {
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
                        }, Object(l.d)("Back to the front page", "DisableAccountPage")))) : o.createElement(y.a, {
                            loginTrackingSource: f.a.DisableAccountPage
                        }, o.createElement(M, {
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
                P = Object(h.compose)(Object(v.b)("DisableAccountPage", {
                    destination: b.a.DisableAccount
                }), Object(g.a)({
                    location: E.PageviewLocation.DisableAccount
                }))(N);
            var Y, z, L = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(P),
                W = function(e) {
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
                        }, o.createElement(s.a, null, o.createElement(i.a, {
                            path: "/user/disable-account",
                            component: L
                        }), o.createElement(i.a, {
                            path: "/user/delete-account",
                            component: I
                        }), o.createElement(c.a, {
                            from: "/user/disable_account",
                            exact: !0,
                            to: "/user/disable-account"
                        }), o.createElement(c.a, {
                            from: "/user/delete_account",
                            exact: !0,
                            to: "/user/delete-account"
                        }), o.createElement(i.a, {
                            component: u.a
                        })))
                    }, t
                }(o.Component),
                q = n("wUQP"),
                B = n("4rCz"),
                V = n("GxR5"),
                X = n("fbcT"),
                K = function(e) {
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
                            n = this.props.showMessageWithUsername && this.props.username && this.props.username.length ? t : e;
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
                Q = n("rACw"),
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleKeyPress = function(e) {
                            "Enter" === e.key && Object(Q.b)(t.props.email) && t.props.changeStepToEnterUsername()
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = !Object(Q.b)(this.props.email);
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
                J = n("EQ2E"),
                Z = n("96Fe"),
                $ = n("tKDy"),
                ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            submitButtonState: D.E.Default,
                            usernameButtonState: D.E.Default,
                            usernameForgotten: !1,
                            isButtonLoading: !1
                        }, t.onCaptchaInputChanged = function(e) {
                            t.props.updateCaptchaValue(e), t.state.usernameForgotten ? t.handleForgotUsername() : t.submit()
                        }, t.onCaptchaRefDelegate = function(e) {
                            t.captchaInstance = e
                        }, t.handleForgotUsername = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.setState({
                                                usernameForgotten: !0
                                            }), this.captchaInstance ? this.props.captchaValue.length ? [4, this.props.handleForgotUsername()] : [3, 2] : [3, 3];
                                        case 1:
                                            return e.sent(), this.setState({
                                                usernameButtonState: D.E.Default,
                                                isButtonLoading: !1
                                            }), this.captchaInstance.reset(), [3, 3];
                                        case 2:
                                            this.setState({
                                                usernameButtonState: D.E.Loading,
                                                isButtonLoading: !0
                                            }), this.captchaInstance.execute(), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.submit = function() {
                            t.captchaInstance && (t.props.captchaValue.length ? (t.props.onSubmit(), t.setState({
                                submitButtonState: D.E.Default,
                                isButtonLoading: !1
                            }), t.captchaInstance.reset()) : (t.setState({
                                submitButtonState: D.E.Loading,
                                isButtonLoading: !0
                            }), t.captchaInstance.execute()))
                        }, t.handleKeyPress = function(e) {
                            "Enter" === e.key && t.props.username.length > 2 && t.submit()
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.username.length < 3 || this.state.isButtonLoading;
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
                        }, Object(l.d)("Next, give us the Twitch username you're having trouble with.", "AccountRecoveryUsername"))), o.createElement(Z.a, {
                            message: this.props.errorMessage,
                            subMessage: this.props.subMessage,
                            isSuccessMessage: !1
                        }), o.createElement(D.Ya, {
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
                            error: !!this.props.errorMessage,
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
                            onClick: this.submit,
                            state: this.state.submitButtonState
                        }, Object(l.d)("Send My Password Reset Link", "AccountRecoveryUsername"))), o.createElement(D.z, {
                            disabled: this.state.isButtonLoading,
                            type: D.F.Hollow,
                            onClick: this.handleForgotUsername,
                            state: this.state.usernameButtonState
                        }, Object(l.d)("I Don't Know My Username", "AccountRecoveryUsername"))), o.createElement(J.a, {
                            screen: $.f.AccountRecoveryUsername,
                            refDelegate: this.onCaptchaRefDelegate,
                            onChange: this.onCaptchaInputChanged,
                            invisible: !0
                        }))
                    }, t
                }(o.PureComponent);
            ! function(e) {
                e.EnterEmail = "enterEmail", e.EnterUsername = "enterUsername", e.CheckEmail = "checkEmail", e.ContactSupport = "contactSupport"
            }(Y || (Y = {})),
            function(e) {
                e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.MissingEmail = 4003] = "MissingEmail", e[e.TooManyForgotUsernameRequests = 4015] = "TooManyForgotUsernameRequests", e[e.UnexpectedError = 3e3] = "UnexpectedError", e[e.UserDoesNotExist = 1014] = "UserDoesNotExist"
            }(z || (z = {}));
            var te, ne = "https://passport.twitch.tv/api/v1/usernames/forgot";

            function re(e) {
                var t = e.email,
                    n = e.captchaValue,
                    r = {
                        email: t,
                        device_id: l.p.session.deviceID,
                        client_id: l.p.config.authSettings.clientID,
                        captcha: {
                            value: n,
                            key: l.p.config.invisibleCaptchaKey
                        }
                    };
                return function(e, t) {
                    return a.__awaiter(this, void 0, Promise, function() {
                        var n;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    n = null, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, fetch(e, {
                                        method: "POST",
                                        body: JSON.stringify(t)
                                    })];
                                case 2:
                                    return n = r.sent(), [3, 4];
                                case 3:
                                    return r.sent(), [2, {
                                        success: !1,
                                        errorCode: z.UnexpectedError
                                    }];
                                case 4:
                                    if (200 === n.status) return [2, {
                                        success: !0
                                    }];
                                    r.label = 5;
                                case 5:
                                    return r.trys.push([5, 7, , 8]), [4, n.json()];
                                case 6:
                                    return [2, {
                                        success: !1,
                                        errorCode: r.sent().error_code
                                    }];
                                case 7:
                                    return r.sent(), [2, {
                                        success: !1,
                                        errorCode: z.FailedToDecodeJSON
                                    }];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }(ne, r)
            }

            function ae() {
                return Object(l.d)("Please check its spelling or try another username.", "PasswordResetError")
            }! function(e) {
                e[e.FailedToDecodeJSON = 1002] = "FailedToDecodeJSON", e[e.IncorrectCaptcha = 1e3] = "IncorrectCaptcha", e[e.IncorrectEmailForUsername = 4019] = "IncorrectEmailForUsername", e[e.TooManyPasswordResetRequests = 4015] = "TooManyPasswordResetRequests", e[e.UnexpectedError = 3e3] = "UnexpectedError", e[e.UserDoesNotExist = 1014] = "UserDoesNotExist"
            }(te || (te = {}));
            var oe = "https://passport.twitch.tv/api/v1/passwords/reset/request";

            function ie(e) {
                var t = e.username,
                    n = e.email,
                    r = e.captchaValue,
                    o = {
                        username: t,
                        email: n,
                        device_id: l.p.session.deviceID,
                        client_id: l.p.config.authSettings.clientID,
                        captcha: {
                            value: r,
                            key: l.p.config.invisibleCaptchaKey
                        }
                    };
                return function(e, t) {
                    return a.__awaiter(this, void 0, Promise, function() {
                        var n;
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    n = null, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, fetch(e, {
                                        method: "POST",
                                        body: JSON.stringify(t)
                                    })];
                                case 2:
                                    return n = r.sent(), [3, 4];
                                case 3:
                                    return r.sent(), [2, {
                                        success: !1,
                                        errorCode: te.UnexpectedError
                                    }];
                                case 4:
                                    if (200 === n.status) return [2, {
                                        success: !0
                                    }];
                                    r.label = 5;
                                case 5:
                                    return r.trys.push([5, 7, , 8]), [4, n.json()];
                                case 6:
                                    return [2, {
                                        success: !1,
                                        errorCode: r.sent().error_code
                                    }];
                                case 7:
                                    return r.sent(), [2, {
                                        success: !1,
                                        errorCode: te.FailedToDecodeJSON
                                    }];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }(oe, o)
            }
            n("jFXk");
            var se, ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            email: "",
                            username: "",
                            currentStep: Y.EnterEmail,
                            captchaValue: "",
                            errorMessage: void 0,
                            subMessage: void 0,
                            showMessageWithUsername: !1
                        }, t.changeStepToEnterEmail = function() {
                            t.setState({
                                currentStep: Y.EnterEmail
                            }), t.clearCaptcha()
                        }, t.updateCaptchaValue = function(e) {
                            t.setState({
                                captchaValue: e
                            })
                        }, t.emailChanged = function(e) {
                            t.setState({
                                email: e,
                                errorMessage: void 0,
                                subMessage: void 0
                            })
                        }, t.usernameChanged = function(e) {
                            t.setState({
                                username: e,
                                errorMessage: void 0,
                                subMessage: void 0
                            })
                        }, t.setErrorMessages = function(e, n) {
                            t.setState({
                                errorMessage: e,
                                subMessage: n
                            })
                        }, t.changeStepToContactSupport = function() {
                            t.setState({
                                currentStep: Y.ContactSupport
                            })
                        }, t.changeStepToEnterUsername = function() {
                            t.setState({
                                currentStep: Y.EnterUsername
                            })
                        }, t.changeStepToCheckEmail = function() {
                            t.setState({
                                currentStep: Y.CheckEmail
                            })
                        }, t.clearEmail = function() {
                            t.setState({
                                email: ""
                            })
                        }, t.clearUsername = function() {
                            t.setState({
                                username: "",
                                showMessageWithUsername: !1
                            })
                        }, t.clearCaptcha = function() {
                            t.setState({
                                captchaValue: ""
                            })
                        }, t.clearInputs = function() {
                            t.clearEmail(), t.clearUsername(), t.clearCaptcha(), t.setErrorMessages(void 0, void 0), t.setState({
                                showMessageWithUsername: !1
                            })
                        }, t.handlePasswordServerResponse = function(e) {
                            var n = e.success,
                                r = e.errorCode;
                            if (n) t.setState({
                                showMessageWithUsername: !0
                            }), t.changeStepToCheckEmail();
                            else if (r) {
                                var a = function(e, t) {
                                        switch (t) {
                                            case te.IncorrectCaptcha:
                                                return {
                                                    serverMessage: {
                                                        message: Object(l.d)("That reCAPTCHA did not work.", "PasswordResetError"),
                                                        subMessage: Object(l.d)("Please try another one.", "PasswordResetError")
                                                    },
                                                    passwordResetServerErrors: {}
                                                };
                                            case te.IncorrectEmailForUsername:
                                                return {
                                                    serverMessage: {
                                                        message: Object(l.d)("That username and email ({emailValue}) don’t match.", {
                                                            emailValue: e
                                                        }, "PasswordResetError"),
                                                        subMessage: ae()
                                                    },
                                                    passwordResetServerErrors: {
                                                        emailError: !0,
                                                        usernameError: !0
                                                    }
                                                };
                                            case te.TooManyPasswordResetRequests:
                                                return {
                                                    serverMessage: {
                                                        message: Object(l.d)("You have requested too many password resets.", "PasswordResetError"),
                                                        subMessage: Object(l.d)("Please try again later.", "PasswordResetError")
                                                    },
                                                    passwordResetServerErrors: {}
                                                };
                                            case te.UserDoesNotExist:
                                                return {
                                                    serverMessage: {
                                                        message: Object(l.d)("That username does not exist.", "PasswordResetError"),
                                                        subMessage: ae()
                                                    },
                                                    passwordResetServerErrors: {
                                                        usernameError: !0
                                                    }
                                                };
                                            case te.FailedToDecodeJSON:
                                            case te.UnexpectedError:
                                            default:
                                                return {
                                                    serverMessage: {
                                                        message: Object(l.d)("Something went wrong.", "PasswordResetError")
                                                    },
                                                    passwordResetServerErrors: {}
                                                }
                                        }
                                    }(t.state.email, r).serverMessage,
                                    o = a.message,
                                    i = a.subMessage;
                                t.setErrorMessages(o, i)
                            }
                        }, t.handleUsernameServerResponse = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, o, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = e.success, n = e.errorCode, t ? (this.changeStepToCheckEmail(), [3, 3]) : [3, 1];
                                        case 1:
                                            return n ? [4, function(e) {
                                                switch (e) {
                                                    case z.IncorrectCaptcha:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(l.d)("That reCAPTCHA did not work.", "ForgotUsernameError"),
                                                                subMessage: Object(l.d)("Please try another one.", "ForgotUsernameError")
                                                            },
                                                            forgotUsernameServerErrors: {}
                                                        };
                                                    case z.TooManyForgotUsernameRequests:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(l.d)("You have requested your username too many times.", "ForgotUsernameError"),
                                                                subMessage: Object(l.d)("Please try again later.", "ForgotUsernameError")
                                                            },
                                                            forgotUsernameServerErrors: {}
                                                        };
                                                    case z.UserDoesNotExist:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(l.d)("We don’t recognize that email address.", "ForgotUsernameError"),
                                                                subMessage: Object(l.d)("Please check its spelling or try another email.", "ForgotUsernameError")
                                                            },
                                                            forgotUsernameServerErrors: {
                                                                emailError: !0
                                                            }
                                                        };
                                                    case z.MissingEmail:
                                                    case z.FailedToDecodeJSON:
                                                    case z.UnexpectedError:
                                                    default:
                                                        return {
                                                            serverMessage: {
                                                                message: Object(l.d)("Something went wrong.", "ForgotUsernameError"),
                                                                subMessage: Object(l.d)("Please try again.", "ForgotUsernameError")
                                                            },
                                                            forgotUsernameServerErrors: {}
                                                        }
                                                }
                                            }(n).serverMessage] : [3, 3];
                                        case 2:
                                            r = a.sent(), o = r.message, i = r.subMessage, this.setErrorMessages(o, i), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleForgotUsername = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this.state, t = e.email, n = e.captchaValue, [4, re({
                                                email: t,
                                                captchaValue: n
                                            })];
                                        case 1:
                                            return r = a.sent(), [4, this.handleUsernameServerResponse(r)];
                                        case 2:
                                            return a.sent(), this.clearCaptcha(), [2]
                                    }
                                })
                            })
                        }, t.submit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this.state, t = e.username, n = e.email, r = e.captchaValue, [4, ie({
                                                username: t,
                                                email: n,
                                                captchaValue: r
                                            })];
                                        case 1:
                                            return o = a.sent(), [4, this.handlePasswordServerResponse(o)];
                                        case 2:
                                            return a.sent(), this.clearCaptcha(), [2]
                                    }
                                })
                            })
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
                            case Y.EnterEmail:
                                return o.createElement(H, {
                                    email: this.state.email,
                                    onChange: this.emailChanged,
                                    changeStepToContactSupport: this.changeStepToContactSupport,
                                    changeStepToEnterUsername: this.changeStepToEnterUsername
                                });
                            case Y.EnterUsername:
                                return o.createElement(ee, {
                                    email: this.state.email,
                                    captchaValue: this.state.captchaValue,
                                    username: this.state.username,
                                    errorMessage: this.state.errorMessage,
                                    subMessage: this.state.subMessage,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail,
                                    changeStepToCheckEmail: this.changeStepToCheckEmail,
                                    onChange: this.usernameChanged,
                                    onSubmit: this.submit,
                                    handleForgotUsername: this.handleForgotUsername,
                                    updateCaptchaValue: this.updateCaptchaValue
                                });
                            case Y.ContactSupport:
                                return o.createElement(G, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail
                                });
                            case Y.CheckEmail:
                                return o.createElement(K, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail,
                                    email: this.state.email,
                                    username: this.state.username,
                                    showMessageWithUsername: this.state.showMessageWithUsername
                                });
                            default:
                                return null
                        }
                    }, t
                }(o.Component),
                le = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(q.b)("native_account_recovery") || window.location.replace(Object(V.e)()), l.p.setPageTitle(Object(B.d)("Account Recovery", "AccountRecoveryPage"))
                    }, t.prototype.render = function() {
                        return Object(q.b)("native_account_recovery") ? o.createElement(o.Fragment, null, o.createElement(D.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, o.createElement(X.a, {
                            hideUser: !0
                        })), o.createElement(ce, null)) : null
                    }, t
                }(o.Component),
                ue = Object(h.compose)(Object(v.b)("AccountRecoveryPage", {
                    destination: b.a.RecoverAccount,
                    autoReportInteractive: !0
                }), Object(g.a)({
                    location: E.PageviewLocation.RecoverAccount
                }))(le);
            ! function(e) {
                e.ReportAccountButton = "not-me-account-inquiry_report-account_button", e.ThisIsMyAccount = "not-me-account-inquiry_this-is-my-account_button"
            }(se || (se = {}));
            var pe, de = function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.state.isReportAccountEnabled ? D.E.Default : D.E.Loading;
                    return o.createElement(o.Fragment, null, o.createElement(D.W, {
                        fontSize: D.Ca.Size3,
                        bold: !0
                    }, Object(l.d)("Didn’t create this account?", "NotMeAccountInquiry")), o.createElement(D.Ya, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, o.createElement(D.W, {
                        fontSize: D.Ca.Size4
                    }, Object(l.d)("If you didn’t create this account associated with this email <x:link> </x:link>, please let us know so we can take the appropriate steps to disable this account.", {
                        "x:link": function() {
                            return o.createElement(D.W, {
                                type: D.Wb.Strong
                            }, e.props.email)
                        }
                    }, "NotMeAccountInquiry"))), o.createElement(D.Ya, {
                        display: D.X.Flex
                    }, o.createElement(D.Ya, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(D.z, {
                        "data-test-selector": se.ReportAccountButton,
                        onClick: this.handleReportAccountClick,
                        disabled: !this.state.isReportAccountEnabled,
                        state: t
                    }, Object(l.d)("Report this account", "NotMeAccountInquiry"))), o.createElement(D.z, {
                        "data-test-selector": se.ThisIsMyAccount,
                        type: D.F.Hollow,
                        linkTo: "/"
                    }, Object(l.d)("This is my account", "NotMeAccountInquiry"))))
                }, t
            }(o.PureComponent);
            ! function(e) {
                e.Account = "account", e.Email = "email"
            }(pe || (pe = {}));
            var me, he = n("ZDlU");
            (me || (me = {})).NotMeErrorButton = "not-me-error_button";
            var ge, fe = function() {
                    return o.createElement(he.a, {
                        message: Object(l.d)("Something went wrong", "NotMeError")
                    }, o.createElement(D.Ya, {
                        margin: {
                            top: 2
                        }
                    }, o.createElement(D.z, {
                        linkTo: "/",
                        "data-test-selector": me.NotMeErrorButton
                    }, Object(l.d)("Back to Twitch", "NotMeError"))))
                },
                be = function() {
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
            }(ge || (ge = {}));
            n("7iKH");
            var Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentStep: ge.AccountInquiry
                        }, t.changeStepToReportedAccount = function() {
                            t.setState({
                                currentStep: ge.ReportedAccount
                            })
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
                    }, t.prototype.renderAccountInquiry = function() {
                        var e = function(e) {
                            void 0 === e && (e = "");
                            var t = m.parse(e);
                            return {
                                account: t[pe.Account] || null,
                                email: t[pe.Email] || null
                            }
                        }(window.location.search);
                        return function(e) {
                            var t = e.account,
                                n = e.email;
                            return !(!t || !n) && Object(Q.b)(n)
                        }(e) ? o.createElement(de, a.__assign({
                            changeStepToReportedAccount: this.changeStepToReportedAccount
                        }, e)) : o.createElement(fe, null)
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case ge.AccountInquiry:
                                return this.renderAccountInquiry();
                            case ge.ReportedAccount:
                                return o.createElement(be, null);
                            default:
                                return null
                        }
                    }, t
                }(o.Component),
                ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return Object(q.b)("native_not_me") ? o.createElement(o.Fragment, null, o.createElement(D.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, o.createElement(X.a, {
                            hideUser: !0
                        })), o.createElement(Ee, null)) : o.createElement(u.a, null)
                    }, t
                }(o.Component),
                ye = Object(h.compose)(Object(v.b)("NotMePage", {
                    destination: b.a.NotMe,
                    autoReportInteractive: !0
                }), Object(g.a)({
                    location: E.PageviewLocation.NotMe
                }))(ve);
            n.d(t, "UserRoot", function() {
                return W
            }), n.d(t, "AccountRecoveryPage", function() {
                return ue
            }), n.d(t, "NotMePage", function() {
                return ye
            })
        }
    }
]);