(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        "5X7D": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/MKj"),
                a = n("9C/b"),
                c = n("fvjX"),
                s = n("/7QA"),
                u = n("ZDlU"),
                l = n("y5D0"),
                d = n("kRBY"),
                p = n("Ue10"),
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
                        return this.state.error ? o.createElement(u.a, {
                            message: Object(s.d)("Something has gone wrong.  Please try again later.", "RequireSudoToken")
                        }) : this.state.sudoTokenInvalid ? this.renderTokenInvalidMessage() : this.props.isLoggedIn ? this.state.checkingSudoToken ? o.createElement(p.Xa, {
                            fillContent: !0
                        }) : "function" == typeof this.props.children ? this.props.children(this.onSudoTokenInvalid) : this.props.children : (this.props.login(this.props.loginTrackingSource), o.createElement(u.a, {
                            message: Object(s.d)("You must be logged in to view this page", "RequireSudoToken")
                        }))
                    }, t.prototype.renderTokenInvalidMessage = function() {
                        var e = Object(s.d)("Back to settings", "RequireSudoToken");
                        return o.createElement(p.Va, {
                            display: p.W.Flex,
                            justifyContent: p.Ua.Center
                        }, o.createElement(p.La, {
                            type: p.Ma.Info,
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
            var f = Object(c.compose)(a.a, Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(d.f)(e),
                    user: Object(d.e)(e)
                }
            }, function(e) {
                return Object(c.bindActionCreators)({
                    logout: function() {
                        return Object(l.f)()
                    },
                    login: function(e) {
                        return Object(l.e)(e)
                    }
                }, e)
            }))(m);
            n.d(t, "a", function() {
                return f
            })
        },
        "7PeK": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("Ue10"),
                a = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = o.createElement(i.xb, {
                        padding: 2,
                        background: i.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: i.x.Medium,
                        topLeft: i.x.Medium
                    });
                    var a = r.__assign({
                        bottomLeft: i.x.Medium,
                        bottomRight: i.x.Medium
                    }, n);
                    return o.createElement(o.Fragment, null, e.header, o.createElement(i.xb, {
                        background: i.r.Base,
                        margin: {
                            bottom: 4
                        },
                        border: !0,
                        borderRadius: a
                    }, e.children, t))
                });
            n.d(t, "a", function() {
                return a
            })
        },
        "9fsF": function(e, t, n) {},
        BK8n: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("Ue10"),
                i = function(e) {
                    var t = null;
                    return e.title && (t = r.createElement(o.Va, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(o.V, {
                        fontSize: o.Aa.Size6,
                        color: e.error ? o.O.Error : o.O.Base,
                        bold: !0
                    }, e.title))), r.createElement(o.xb, {
                        padding: 2,
                        className: "settings-row",
                        fullWidth: !0
                    }, t, e.children, e.errorMessage && r.createElement(o.V, {
                        color: o.O.Error,
                        fontSize: o.Aa.Size7
                    }, e.errorMessage))
                };
            n.d(t, "a", function() {
                return i
            })
        },
        EpBn: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("/7QA"),
                i = n("BK8n"),
                a = n("Ue10"),
                c = (n("9fsF"), function(e) {
                    return r.createElement(i.a, null, r.createElement(a.Ca, {
                        error: e.error,
                        errorMessage: e.errorMessage || Object(o.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                        hint: e.hint,
                        id: e.id,
                        label: e.label,
                        labelOptional: e.labelOptional,
                        orientation: e.orientation || a.Da.Horizontal
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
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "e", function() {
                return s
            });
            var r = n("/7QA"),
                o = "https://passport.twitch.tv/forgot_username/new",
                i = "https://help.twitch.tv/customer/portal/emails/new",
                a = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
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
                i = n("q1tI"),
                a = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function a(t) {
                            var o = n.call(this, t) || this;
                            return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                                if (!(o.tracked || e.skip && e.skip(o.props))) {
                                    o.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, o.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var i = o.referenceTracking,
                                        a = i.content,
                                        s = i.medium,
                                        u = i.content_index,
                                        l = i.email_id;
                                    c.o.tracking.trackPageview(r.__assign({
                                        content: a,
                                        medium: s,
                                        content_index: u,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                        }
                        return r.__extends(a, n), a.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, a.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, a.prototype.render = function() {
                            return i.createElement(t, r.__assign({}, this.props))
                        }, a.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? o.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    i = o.stringify(t);
                                i.length > 0 && (r = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, a
                    }(i.Component);
                    return Object(a.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        c0Zc: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("Ue10");

            function i(e) {
                var t = null;
                return e.description && (t = r.createElement(o.Va, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(o.V, {
                    color: o.O.Alt2
                }, e.description))), r.createElement(o.Va, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(o.V, {
                    type: o.Nb.H3,
                    fontSize: o.Aa.Size4,
                    color: o.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return i
            })
        },
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
        wUQP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            });
            var r, o, i = n("/7QA"),
                a = n("kRBY");

            function c(e) {
                var t = i.o.store.getState(),
                    n = i.b.get(e, r.Off);
                return !!(n === r.On || n === r.StaffOnly && Object(a.g)(t))
            }! function(e) {
                e.On = "on", e.Off = "off", e.StaffOnly = "staff"
            }(r || (r = {})),
            function(e) {
                e[e.Enabled = 1] = "Enabled", e[e.Disabled = 0] = "Disabled"
            }(o || (o = {}));
            var s = Math.pow(2, 32);

            function u(e) {
                var t = i.b.get(e, [0, o.Disabled]),
                    n = t[0],
                    r = t[1],
                    c = i.o.session.deviceID,
                    u = i.o.store.getState();
                return !(r !== o.Enabled || !Object(a.g)(u)) || function(e, t) {
                    for (var n = void 0 === t ? 2166136261 : t, r = 0, o = e.length; r < o; r++) n ^= e.charCodeAt(r), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
                    return n >>> 0
                }(c + "-" + e) / s < n
            }
        },
        xuFZ: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, o = n("mrSG"),
                i = n("q1tI"),
                a = n("4p7I"),
                c = n("yoKv"),
                s = n("/7QA"),
                u = n("LA8z"),
                l = n("/MKj"),
                d = n("kRBY"),
                p = n("cr+I"),
                m = n("fvjX"),
                f = n("V+GM"),
                h = n("1/iK"),
                b = n("NvVO"),
                g = n("2xye"),
                v = n("GnwI"),
                k = n("5X7D"),
                y = n("y5D0"),
                D = n("yR8l"),
                O = n("geRD"),
                A = n("EpBn"),
                S = n("BK8n"),
                w = n("7PeK"),
                _ = n("c0Zc"),
                E = n("Ue10"),
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
                        }, t.logger = s.j.withCategory("DisableAccountForm"), t.disable = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return o.__generator(this, function(r) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        if (this.state.error) {
                            var e = this.props.isDelete ? Object(s.d)("Something went wrong when attempting to delete your account.", "DisableAccountForm") : Object(s.d)("Something went wrong when attempting to disable your account.", "DisableAccountForm");
                            return i.createElement(w.a, null, i.createElement(S.a, null, i.createElement(E.V, {
                                color: E.O.Error
                            }, e)))
                        }
                        if (this.props.data.loading) return i.createElement(E.Xa, {
                            fillContent: !0
                        });
                        if (!this.props.user) return null;
                        var t = this.props.data.currentUser && this.props.data.currentUser.roles,
                            n = !!t && !!(t.isAffiliate || t.isExtensionsDeveloper || t.isPartner),
                            r = null,
                            o = this.props.isDelete ? Object(s.d)("Delete Account", "DisableAccountForm") : Object(s.d)("Disable Account", "DisableAccountForm"),
                            a = this.props.isDelete ? Object(s.d)("Are you sure you'd like to delete your Twitch account? This will permanently erase all your content and personal information, and you will no longer be able to claim {login} as your user ID.", {
                                login: this.props.user.login
                            }, "DisableAccountForm") : Object(s.d)("We're sorry to see you go. Disabling your account does not delete your user information. Contact us at support@twitch.tv if there's anything we can do to change your mind.", "DisableAccountForm");
                        return r = n ? this.renderPADSection() : this.renderDisableSection(n, o), i.createElement(i.Fragment, null, i.createElement(_.a, {
                            title: o,
                            description: a
                        }), r)
                    }, t.prototype.renderPADSection = function() {
                        var e = Object(s.d)("We cannot delete your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return i.createElement(E.T, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            t = Object(s.d)("We cannot disable your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return i.createElement(E.T, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            n = this.props.isDelete ? e : t,
                            o = this.props.isDelete ? Object(s.d)("Delete Your Twitch Account", "DisableAccountForm") : Object(s.d)("Disable Your Twitch Account", "DisableAccountForm");
                        return i.createElement(w.a, null, i.createElement(A.a, {
                            "data-test-selector": r.PADMessage,
                            label: o,
                            orientation: E.Da.Horizontal
                        }, n))
                    }, t.prototype.renderDisableSection = function(e, t) {
                        if (!this.props.user) return null;
                        var n = this.props.isDelete ? Object(s.d)("Account to delete", "DisableAccountForm") : Object(s.d)("Account to disable", "DisableAccountForm"),
                            r = this.props.isDelete ? Object(s.d)("Tell us why you're deleting your account (optional)", "DisableAccountForm") : Object(s.d)("Tell us why you're disabling your account (optional)", "DisableAccountForm"),
                            o = i.createElement(E.Va, null, i.createElement(E.z, {
                                onClick: this.disable,
                                state: this.state.working ? E.E.Loading : E.E.Default,
                                disabled: this.state.working || e
                            }, t));
                        return i.createElement(w.a, {
                            footer: o
                        }, i.createElement(A.a, {
                            label: n
                        }, i.createElement(E.Pa, {
                            type: E.Ra.Text,
                            disabled: !0,
                            value: this.props.user.login || ""
                        })), i.createElement(A.a, {
                            label: r
                        }, i.createElement(E.Kb, {
                            onChange: this.handleReasonChange
                        })))
                    }, t
                }(i.Component),
                P = Object(m.compose)(Object(D.a)(T), Object(D.a)(j, {
                    name: "disableUserAccount"
                }))(x);
            var I = Object(l.connect)(function(e) {
                    return {
                        user: Object(d.e)(e)
                    }
                }, function(e) {
                    return Object(m.bindActionCreators)({
                        logout: y.f
                    }, e)
                })(P),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.deleted && this.props.isLoggedIn ? window.location.replace("/user/delete_account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.deleted ? i.createElement(i.Fragment, null, i.createElement(E.xb, {
                            borderBottom: !0
                        }, i.createElement(E.V, {
                            fontSize: E.Aa.Size1
                        }, Object(s.d)("Your account has been deleted", "DeleteAccountPage"))), i.createElement(E.Va, null, i.createElement(E.T, {
                            to: "/"
                        }, Object(s.d)("Back to the front page", "DeleteAccountPage")))) : i.createElement(k.a, {
                            loginTrackingSource: h.a.DeleteAccountPage
                        }, i.createElement(I, {
                            redirect: "/user/delete_account?account_deleted=true",
                            isDelete: !0
                        }))
                    }, Object.defineProperty(t.prototype, "deleted", {
                        get: function() {
                            return p.parse(this.props.location.search).account_deleted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                C = Object(m.compose)(Object(v.c)("DeleteAccountPage", {
                    destination: b.a.DeleteAccount
                }), Object(f.a)({
                    location: g.PageviewLocation.DeleteAccount
                }))(F);
            var R = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(C),
                U = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.disabled && this.props.isLoggedIn ? window.location.replace("/user/disable_account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.disabled ? i.createElement(i.Fragment, null, i.createElement(E.xb, {
                            borderBottom: !0
                        }, i.createElement(E.V, {
                            fontSize: E.Aa.Size1
                        }, Object(s.d)("Your account has been disabled", "DisableAccountPage"))), i.createElement(E.Va, null, i.createElement(E.T, {
                            to: "/"
                        }, Object(s.d)("Back to the front page", "DisableAccountPage")))) : i.createElement(k.a, {
                            loginTrackingSource: h.a.DisableAccountPage
                        }, i.createElement(I, {
                            redirect: "/user/disable_account?account_disabled=true"
                        }))
                    }, Object.defineProperty(t.prototype, "disabled", {
                        get: function() {
                            return p.parse(this.props.location.search).account_disabled
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                M = Object(m.compose)(Object(v.c)("DisableAccountPage", {
                    destination: b.a.DisableAccount
                }), Object(f.a)({
                    location: g.PageviewLocation.DisableAccount
                }))(U);
            var L = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(d.f)(e)
                    }
                })(M),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        s.o.setPageTitle()
                    }, t.prototype.render = function() {
                        return i.createElement(E.Va, {
                            padding: 3,
                            fullHeight: !0,
                            fullWidth: !0,
                            display: E.W.Flex,
                            flexDirection: E.Y.Column,
                            flexWrap: E.Z.NoWrap
                        }, i.createElement(c.a, null, i.createElement(a.a, {
                            path: "/user/disable_account",
                            component: L
                        }), i.createElement(a.a, {
                            path: "/user/delete_account",
                            component: R
                        }), i.createElement(a.a, {
                            component: u.a
                        })))
                    }, t
                }(i.Component),
                V = n("wUQP"),
                q = n("GxR5"),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(V.b)("native_account_recovery") || window.location.replace(Object(q.e)())
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(i.Component),
                z = Object(m.compose)(Object(v.c)("AccountRecoveryPage", {
                    destination: b.a.RecoverAccount,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: g.PageviewLocation.RecoverAccount
                }))(B);
            n.d(t, "UserRoot", function() {
                return N
            }), n.d(t, "AccountRecoveryPage", function() {
                return z
            })
        }
    }
]);