(window.webpackJsonp = window.webpackJsonp || []).push([
    [193], {
        IWck: function(e, n, t) {
            "use strict";
            var i, a;
            t.d(n, "b", function() {
                    return i
                }), t.d(n, "a", function() {
                    return a
                }),
                function(e) {
                    e.DismissToken = "token_dismissed", e.RedeemToken = "token_redeemed", e.RequestEligibility = "eligibility_requested", e.RequestToken = "token_requested"
                }(i || (i = {})),
                function(e) {
                    e.Click = "clicked_manage_in_dashboards", e.Dismiss = "dismissed"
                }(a || (a = {}))
        },
        WkKR: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            }), t.d(n, "d", function() {
                return o
            }), t.d(n, "b", function() {
                return l
            }), t.d(n, "e", function() {
                return c
            }), t.d(n, "c", function() {
                return u
            });
            var i = t("/7QA"),
                a = t("2xye"),
                s = t("IWck"),
                r = function(e) {
                    var n = {
                        action: s.b.DismissToken,
                        channel_id: e.channelID,
                        user_banner: e.bannerMessage,
                        user_message: null
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                o = function(e) {
                    var n = {
                        action: s.b.RedeemToken,
                        channel_id: e.channelID,
                        user_banner: e.bannerMessage,
                        user_message: e.userMessage
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                l = function(e) {
                    var n = {
                        action: s.b.RequestEligibility,
                        channel_id: e.channelID,
                        user_banner: null,
                        user_message: null
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                c = function(e) {
                    var n = {
                        action: s.b.RequestToken,
                        channel_id: e.channelID,
                        user_banner: e.bannerMessage,
                        user_message: null
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                u = function(e) {
                    var n = {
                        action: e.action,
                        channel_id: e.channelID
                    };
                    i.o.track(a.SpadeEventType.NewChatterOnboardingInteraction, n)
                }
        },
        bDCY: function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RitualsEnabled_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "ritualsEnabled"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 153
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/chat/models/rituals-enabled-fragment.gql"\nquery RitualsEnabled_User($id: ID!) {\nchannel: user(id: $id) {\n...ritualsEnabled\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !a[n] && (a[n] = !0, !0)
                })
            }(t("pKQ0").definitions)), e.exports = i
        },
        pKQ0: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ritualsEnabled"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
                        }
                    },
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
                                value: "settings"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isRitualsEnabled"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isRitualsWhitelisted"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 89
                }
            };
            t.loc.source = {
                body: "fragment ritualsEnabled on User {\nid\nsettings {\nisRitualsEnabled\nisRitualsWhitelisted\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        rg60: function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("mrSG"),
                a = t("q1tI"),
                s = t("/MKj"),
                r = t("fvjX"),
                o = t("/7QA"),
                l = t("yR8l"),
                c = t("eDVu"),
                u = t("0Log"),
                d = t("/aPz"),
                m = t("kRBY"),
                b = t("IWck"),
                k = t("wo8Z"),
                p = t("bDCY"),
                h = t("WkKR"),
                g = t("Ue10"),
                f = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(g.Eb, {
                            background: g.r.Base,
                            color: g.O.Alt
                        }, a.createElement(g.Xa, {
                            padding: {
                                bottom: .5,
                                top: 1,
                                x: 1
                            }
                        }, a.createElement(g.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(g.W, {
                            bold: !0,
                            type: g.Vb.H5
                        }, Object(o.d)("Introducing: New Chatter Announcements!", "RitualsOnboardingSticky"))), a.createElement(g.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(g.W, {
                            type: g.Vb.Span
                        }, Object(o.d)("New chatter announcements are now active in your channel, making it easier to welcome new people.", "RitualsOnboardingSticky")), a.createElement(g.W, null, a.createElement(g.U, {
                            onClick: this.props.onClick,
                            to: "/" + this.props.channelLogin + "/dashboard/settings",
                            "data-test-selector": "rituals-sticky-link"
                        }, Object(o.d)("Manage in Dashboard", "RitualsOnboardingSticky"))))), a.createElement(g.Eb, {
                            alignItems: g.f.Center,
                            background: g.r.Alt2,
                            borderBottom: !0,
                            color: g.O.Alt2,
                            display: g.X.Flex,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, a.createElement(g.sb, {
                            asset: g.tb.Lock,
                            height: 12,
                            width: 12
                        }), a.createElement(g.Xa, {
                            display: g.X.Inline,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(g.W, {
                            fontSize: g.Ca.Size8,
                            type: g.Vb.Span
                        }, Object(o.d)("You see this because you own this channel", "RitualsOnboardingSticky")))), a.createElement(g.Eb, {
                            attachRight: !0,
                            attachTop: !0,
                            padding: {
                                x: .5,
                                top: 1
                            },
                            position: g.jb.Absolute
                        }, a.createElement(g.A, {
                            ariaLabel: Object(o.d)("Close", "RitualsOnboardingSticky"),
                            icon: g.tb.Close,
                            onClick: this.props.onDismiss,
                            size: g.B.Small,
                            type: g.C.Secondary,
                            "data-test-selector": "rituals-sticky-dismiss-button"
                        })))
                    }, n
                }(a.PureComponent),
                v = "seenNewChatterAnnouncementSticky",
                y = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.state = {
                            isDismissed: !1
                        }, t.onClick = function() {
                            Object(h.c)({
                                action: b.a.Click,
                                channelID: t.props.channelID
                            })
                        }, t.onDismiss = function() {
                            o.m.set(v, !0), t.setState({
                                isDismissed: !0
                            }), Object(h.c)({
                                action: b.a.Dismiss,
                                channelID: t.props.channelID
                            })
                        }, t.state.isDismissed = o.m.get(v, !1), t
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return !this.props.data || this.props.data.loading || this.props.data.error ? null : this.props.data.channel.settings.isRitualsEnabled ? this.state.isDismissed ? null : a.createElement(f, {
                            channelLogin: this.props.channelLogin,
                            onClick: this.onClick,
                            onDismiss: this.onDismiss
                        }) : null
                    }, n
                }(a.Component);

            function D(e) {
                return e.currentUserID !== e.channelID || !Object(k.a)()
            }
            var S = Object(r.compose)(Object(s.connect)(function(e) {
                var n = Object(m.e)(e);
                return {
                    currentUserID: n && n.id
                }
            }, null), Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            id: e.channelID
                        }
                    }
                },
                skip: D
            }), Object(c.a)(function(e) {
                return {
                    query: p,
                    variables: {
                        id: e.channelID
                    },
                    topic: Object(d.x)(e.channelID),
                    type: u.PubsubMessageType.UpdatedChannelChatProperty,
                    mutator: function(e, n) {
                        return n.channel.settings.isRitualsEnabled = e.data.is_rituals_enabled, n
                    },
                    skip: D(e)
                }
            }))(y);
            t.d(n, "RitualsOnboardingStickyContainer", function() {
                return y
            }), t.d(n, "RitualsOnboardingSticky", function() {
                return S
            })
        },
        wo8Z: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i = t("/7QA"),
                a = function() {
                    return i.m.get("ritualsFeatureFlagOverride", i.b.get("viewer_milestones_enabled", !1))
                }
        }
    }
]);