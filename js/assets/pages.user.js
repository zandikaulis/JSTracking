(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
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
                        return this.state.error ? o.createElement(l.a, {
                            message: Object(s.d)("Something has gone wrong.  Please try again later.", "RequireSudoToken")
                        }) : this.state.sudoTokenInvalid ? this.renderTokenInvalidMessage() : this.props.isLoggedIn ? this.state.checkingSudoToken ? o.createElement(p.Za, {
                            fillContent: !0
                        }) : "function" == typeof this.props.children ? this.props.children(this.onSudoTokenInvalid) : this.props.children : (this.props.login(this.props.loginTrackingSource), o.createElement(l.a, {
                            message: Object(s.d)("You must be logged in to view this page", "RequireSudoToken")
                        }))
                    }, t.prototype.renderTokenInvalidMessage = function() {
                        var e = Object(s.d)("Back to settings", "RequireSudoToken");
                        return o.createElement(p.Xa, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Center
                        }, o.createElement(p.Na, {
                            type: p.Oa.Info,
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
                    isLoggedIn: Object(d.f)(e),
                    user: Object(d.e)(e)
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
                    e.footer && (t = o.createElement(a.Cb, {
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
                    return o.createElement(o.Fragment, null, e.header, o.createElement(a.Cb, {
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
        "9IY9": function(e, t, n) {},
        "9fsF": function(e, t, n) {},
        BK8n: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("Ue10"),
                a = function(e) {
                    var t = null;
                    return e.title && (t = r.createElement(o.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(o.W, {
                        fontSize: o.Ca.Size6,
                        color: e.error ? o.O.Error : o.O.Base,
                        bold: !0
                    }, e.title))), r.createElement(o.Cb, {
                        padding: 2,
                        className: "settings-row",
                        fullWidth: !0
                    }, t, e.children, e.errorMessage && r.createElement(o.W, {
                        color: o.O.Error,
                        fontSize: o.Ca.Size7
                    }, e.errorMessage))
                };
            n.d(t, "a", function() {
                return a
            })
        },
        EpBn: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("/7QA"),
                a = n("BK8n"),
                i = n("Ue10"),
                c = (n("9fsF"), function(e) {
                    return r.createElement(a.a, null, r.createElement(i.Ea, {
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
        c0Zc: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("Ue10");

            function a(e) {
                var t = null;
                return e.description && (t = r.createElement(o.Xa, {
                    margin: {
                        top: 1
                    }
                }, r.createElement(o.W, {
                    color: o.O.Alt2
                }, e.description))), r.createElement(o.Xa, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(o.W, {
                    type: o.Tb.H3,
                    fontSize: o.Ca.Size4,
                    color: o.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return a
            })
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
                d = n("/MKj"),
                p = n("kRBY"),
                m = n("cr+I"),
                h = n("fvjX"),
                f = n("V+GM"),
                b = n("1/iK"),
                g = n("NvVO"),
                y = n("2xye"),
                E = n("GnwI"),
                v = n("5X7D"),
                S = n("y5D0"),
                k = n("yR8l"),
                O = n("geRD"),
                w = n("EpBn"),
                A = n("BK8n"),
                C = n("7PeK"),
                j = n("c0Zc"),
                _ = n("Ue10"),
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
                            var e = this.props.isDelete ? Object(l.d)("Something went wrong when attempting to delete your account.", "DisableAccountForm") : Object(l.d)("Something went wrong when attempting to disable your account.", "DisableAccountForm");
                            return a.createElement(C.a, null, a.createElement(A.a, null, a.createElement(_.W, {
                                color: _.O.Error
                            }, e)))
                        }
                        if (this.props.data.loading) return a.createElement(_.Za, {
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
                        return r = n ? this.renderPADSection() : this.renderDisableSection(n, o), a.createElement(a.Fragment, null, a.createElement(j.a, {
                            title: o,
                            description: i
                        }), r)
                    }, t.prototype.renderPADSection = function() {
                        var e = Object(l.d)("We cannot delete your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return a.createElement(_.U, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            t = Object(l.d)("We cannot disable your account as you are currently an active Partner, Affiliate, and/or Developer and must offboard from those programs first. Please contact <x:link>Customer Support</x:link> for assistance with offboarding.", {
                                "x:link": function(e) {
                                    return a.createElement(_.U, {
                                        to: "https://help.twitch.tv"
                                    }, e)
                                }
                            }, "DisableAccountForm"),
                            n = this.props.isDelete ? e : t,
                            o = this.props.isDelete ? Object(l.d)("Delete Your Twitch Account", "DisableAccountForm") : Object(l.d)("Disable Your Twitch Account", "DisableAccountForm");
                        return a.createElement(C.a, null, a.createElement(w.a, {
                            "data-test-selector": r.PADMessage,
                            label: o,
                            orientation: _.Fa.Horizontal
                        }, n))
                    }, t.prototype.renderDisableSection = function(e, t) {
                        if (!this.props.user) return null;
                        var n = this.props.isDelete ? Object(l.d)("Account to delete", "DisableAccountForm") : Object(l.d)("Account to disable", "DisableAccountForm"),
                            r = this.props.isDelete ? Object(l.d)("Tell us why you're deleting your account (optional)", "DisableAccountForm") : Object(l.d)("Tell us why you're disabling your account (optional)", "DisableAccountForm"),
                            o = a.createElement(_.Xa, null, a.createElement(_.z, {
                                onClick: this.disable,
                                state: this.state.working ? _.E.Loading : _.E.Default,
                                disabled: this.state.working || e
                            }, t));
                        return a.createElement(C.a, {
                            footer: o
                        }, a.createElement(w.a, {
                            label: n
                        }, a.createElement(_.Ra, {
                            type: _.Ta.Text,
                            disabled: !0,
                            value: this.props.user.login || ""
                        })), a.createElement(w.a, {
                            label: r
                        }, a.createElement(_.Qb, {
                            onChange: this.handleReasonChange
                        })))
                    }, t
                }(a.Component),
                F = Object(h.compose)(Object(k.a)(T), Object(k.a)(D, {
                    name: "disableUserAccount"
                }))(x);
            var R = Object(d.connect)(function(e) {
                    return {
                        user: Object(p.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        logout: S.f
                    }, e)
                })(F),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.deleted && this.props.isLoggedIn ? window.location.replace("/user/delete-account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.deleted ? a.createElement(a.Fragment, null, a.createElement(_.Cb, {
                            borderBottom: !0
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size1
                        }, Object(l.d)("Your account has been deleted", "DeleteAccountPage"))), a.createElement(_.Xa, null, a.createElement(_.U, {
                            to: "/"
                        }, Object(l.d)("Back to the front page", "DeleteAccountPage")))) : a.createElement(v.a, {
                            loginTrackingSource: b.a.DeleteAccountPage
                        }, a.createElement(R, {
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
                P = Object(h.compose)(Object(E.b)("DeleteAccountPage", {
                    destination: g.a.DeleteAccount
                }), Object(f.a)({
                    location: y.PageviewLocation.DeleteAccount
                }))(I);
            var U = Object(d.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                })(P),
                X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.disabled && this.props.isLoggedIn ? window.location.replace("/user/disable-account") : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.disabled ? a.createElement(a.Fragment, null, a.createElement(_.Cb, {
                            borderBottom: !0
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size1
                        }, Object(l.d)("Your account has been disabled", "DisableAccountPage"))), a.createElement(_.Xa, null, a.createElement(_.U, {
                            to: "/"
                        }, Object(l.d)("Back to the front page", "DisableAccountPage")))) : a.createElement(v.a, {
                            loginTrackingSource: b.a.DisableAccountPage
                        }, a.createElement(R, {
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
                z = Object(h.compose)(Object(E.b)("DisableAccountPage", {
                    destination: g.a.DisableAccount
                }), Object(f.a)({
                    location: y.PageviewLocation.DisableAccount
                }))(X);
            var N, M = Object(d.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                })(z),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle()
                    }, t.prototype.render = function() {
                        return a.createElement(_.Xa, {
                            padding: 3,
                            fullHeight: !0,
                            fullWidth: !0,
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            flexWrap: _.Ba.NoWrap
                        }, a.createElement(c.a, null, a.createElement(i.a, {
                            path: "/user/disable-account",
                            component: M
                        }), a.createElement(i.a, {
                            path: "/user/delete-account",
                            component: U
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
                B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.startOver = function() {
                            t.props.clearInputs(), t.props.changeStepToEnterEmail()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(_.W, {
                            fontSize: _.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("We need more information", "AccountRecoveryContactSupport")), a.createElement(_.Xa, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size4
                        }, a.createElement(_.W, {
                            bold: !0,
                            type: _.Tb.Span
                        }, Object(l.d)("For your security, we need information from you that only the owner of this account would know.", "AccountRecoveryContactSupport"), " "), Object(l.d)("This is the best way for us to verify that you own this account and get it back to you.", "AccountRecoveryContactSupport")), a.createElement(_.Xa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size4
                        }, Object(l.d)("Please contact our Support Team below to get started. They will reach out with a response as soon as possible.", "AccountRecoveryContactSupport")))), a.createElement(_.Xa, {
                            margin: {
                                y: 2
                            },
                            display: _.X.Flex
                        }, a.createElement(_.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(_.z, {
                            linkTo: "https://www.twitch.tv/help"
                        }, Object(l.d)("Contact Support", "AccountRecoveryContactSupport"))), a.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: this.startOver
                        }, Object(l.d)("Start Over", "AccountRecoveryContactSupport"))))
                    }, t
                }(a.PureComponent),
                K = n("rACw"),
                G = function(e) {
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
                        return a.createElement(a.Fragment, null, a.createElement(_.W, {
                            fontSize: _.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Getting back into your Twitch account", "AccountRecoveryEmail")), a.createElement(_.Xa, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size4
                        }, Object(l.d)("Tell us the email address linked to your account.", "AccountRecoveryEmail"))), a.createElement(_.Xa, {
                            margin: {
                                y: .5
                            }
                        }, a.createElement(_.Ea, {
                            label: Object(l.d)("Enter your email", "AccountRecoveryEmail")
                        }, a.createElement(_.Ra, {
                            ariaLabel: Object(l.d)("Email", "AccountRecoveryEmail"),
                            defaultValue: this.props.email,
                            autoFocus: !0,
                            type: _.Ta.Text,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyPress
                        }))), a.createElement(_.U, {
                            onClick: this.props.changeStepToContactSupport
                        }, Object(l.d)("Forgot or having problems with your email?", "AccountRecoveryEmail")), a.createElement(_.Xa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(_.z, {
                            disabled: e,
                            onClick: this.props.changeStepToEnterUsername
                        }, Object(l.d)("Continue", "AccountRecoveryEmail"))))
                    }, t
                }(a.PureComponent),
                Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(_.W, {
                            fontSize: _.Ca.Size3,
                            bold: !0
                        }, Object(l.d)("Getting back into your Twitch account", "AccountRecoveryUsername")), a.createElement(_.Xa, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size4
                        }, Object(l.d)("Next, give us the Twitch username you're having trouble with.", "AccountRecoveryUsername"))), a.createElement(_.Xa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(_.Ea, {
                            label: Object(l.d)("Email", "AccountRecoveryUsername")
                        }, a.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Center
                        }, a.createElement(_.Xa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(_.W, {
                            fontSize: _.Ca.Size4,
                            color: _.O.Alt2,
                            bold: !0
                        }, this.props.email)), a.createElement(_.A, {
                            icon: _.rb.Edit,
                            onClick: this.props.changeStepToEnterEmail,
                            ariaLabel: Object(l.d)("Edit", "AccountRecoveryUsername")
                        })))), a.createElement(_.Xa, {
                            margin: {
                                y: .5
                            }
                        }, a.createElement(_.Ea, {
                            label: Object(l.d)("Enter your username", "AccountRecoveryUsername")
                        }, a.createElement(_.Ra, {
                            ariaLabel: Object(l.d)("Username", "AccountRecoveryUsername"),
                            defaultValue: this.props.username,
                            autoFocus: !0,
                            type: _.Ta.Text,
                            onChange: this.handleChange
                        }))), a.createElement(_.Xa, {
                            margin: {
                                y: 2
                            },
                            display: _.X.Flex
                        }, a.createElement(_.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(_.z, {
                            disabled: this.props.username.length < 3
                        }, Object(l.d)("Send My Password Reset Link", "AccountRecoveryUsername"))), a.createElement(_.z, {
                            type: _.F.Hollow
                        }, Object(l.d)("I Don't Know My Username", "AccountRecoveryUsername"))))
                    }, t
                }(a.PureComponent);
            ! function(e) {
                e.EnterEmail = "enterEmail", e.EnterUsername = "enterUsername", e.CheckEmail = "checkEmail", e.ContactSupport = "contactSupport"
            }(N || (N = {}));
            n("jFXk");
            var V, Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            email: "",
                            username: "",
                            currentStep: N.EnterEmail
                        }, t.changeStepToEnterEmail = function() {
                            t.setState({
                                currentStep: N.EnterEmail
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
                                currentStep: N.ContactSupport
                            })
                        }, t.changeStepToEnterUsername = function() {
                            t.setState({
                                currentStep: N.EnterUsername
                            })
                        }, t.clearInputs = function() {
                            t.setState({
                                email: "",
                                username: ""
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Center,
                            padding: {
                                x: 2,
                                y: 5
                            }
                        }, a.createElement(_.Xa, {
                            className: "account-recovery__body"
                        }, this.renderContent()))
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case N.EnterEmail:
                                return a.createElement(G, {
                                    email: this.state.email,
                                    onChange: this.emailChanged,
                                    changeStepToContactSupport: this.changeStepToContactSupport,
                                    changeStepToEnterUsername: this.changeStepToEnterUsername
                                });
                            case N.EnterUsername:
                                return a.createElement(Q, {
                                    email: this.state.email,
                                    username: this.state.username,
                                    onChange: this.usernameChanged,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail
                                });
                            case N.ContactSupport:
                                return a.createElement(B, {
                                    clearInputs: this.clearInputs,
                                    changeStepToEnterEmail: this.changeStepToEnterEmail
                                });
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                H = (n("y6xW"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        Object(L.b)("native_account_recovery") || window.location.replace(Object(q.e)())
                    }, t.prototype.render = function() {
                        return Object(L.b)("native_account_recovery") ? a.createElement(a.Fragment, null, a.createElement(_.Cb, {
                            className: "account-recovery__header",
                            alignItems: _.f.Center,
                            color: _.O.Overlay,
                            display: _.X.Flex,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, a.createElement(_.qb, {
                            asset: _.rb.LogoGlitch,
                            width: 30,
                            height: 30
                        })), a.createElement(Y, null)) : null
                    }, t
                }(a.Component)),
                Z = Object(h.compose)(Object(E.b)("AccountRecoveryPage", {
                    destination: g.a.RecoverAccount,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: y.PageviewLocation.RecoverAccount
                }))(H),
                J = function() {
                    return a.createElement(a.Fragment, null, a.createElement(_.W, {
                        fontSize: _.Ca.Size3,
                        bold: !0
                    }, Object(l.d)("Account has been reported.", "NotMeReportedAccount")), a.createElement(_.Xa, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, a.createElement(_.W, {
                        fontSize: _.Ca.Size4
                    }, Object(l.d)("Thank you for reporting. We have disabled the account. If you need additional assistance, <x:link>please contact our support team</x:link>.", {
                        "x:link": function(e) {
                            return a.createElement(_.U, {
                                linkTo: "https://www.twitch.tv/help"
                            }, e)
                        }
                    }, "NotMeReportedAccount"))), a.createElement(_.Xa, {
                        margin: {
                            y: 2
                        },
                        display: _.X.Flex
                    }, a.createElement(_.z, {
                        linkTo: "https://www.twitch.tv/"
                    }, Object(l.d)("Back to Twitch", "NotMeReportedAccount"))))
                };
            ! function(e) {
                e.AccountInquiry = "accountInquiry", e.ReportedAccount = "reportedAccount"
            }(V || (V = {}));
            n("7iKH");
            var $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentStep: V.AccountInquiry
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(_.Xa, {
                            display: _.X.Flex,
                            justifyContent: _.Wa.Center,
                            padding: {
                                x: 2,
                                y: 5
                            }
                        }, a.createElement(_.Xa, {
                            className: "not-me-content__body"
                        }, this.renderContent()))
                    }, t.prototype.renderContent = function() {
                        switch (this.state.currentStep) {
                            case V.ReportedAccount:
                                return a.createElement(J, null);
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                ee = (n("9IY9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return Object(L.b)("native_not_me") ? a.createElement(a.Fragment, null, a.createElement(_.Cb, {
                            className: "not-me-page__header",
                            alignItems: _.f.Center,
                            color: _.O.Overlay,
                            display: _.X.Flex,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, a.createElement(_.qb, {
                            asset: _.rb.LogoGlitch,
                            width: 30,
                            height: 30
                        })), a.createElement($, null)) : a.createElement(u.a, null)
                    }, t
                }(a.Component)),
                te = Object(h.compose)(Object(E.b)("NotMePage", {
                    destination: g.a.NotMe,
                    autoReportInteractive: !0
                }), Object(f.a)({
                    location: y.PageviewLocation.NotMe
                }))(ee);
            n.d(t, "UserRoot", function() {
                return W
            }), n.d(t, "AccountRecoveryPage", function() {
                return Z
            }), n.d(t, "NotMePage", function() {
                return te
            })
        },
        y6xW: function(e, t, n) {}
    }
]);