(window.webpackJsonp = window.webpackJsonp || []).push([
    [181], {
        "0Ex5": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ritualToken"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "RitualToken"
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
                                value: "expiresAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "status"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 64
                }
            };
            t.loc.source = {
                body: "fragment ritualToken on RitualToken {\nid\nexpiresAt\nstatus\ntype\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "7K5j": function(e, n, t) {
            "use strict";
            (function(e) {
                t.d(n, "b", function() {
                    return w
                }), t.d(n, "a", function() {
                    return C
                });
                var i, a = t("mrSG"),
                    r = t("q1tI"),
                    s = t("oJmH"),
                    o = t("/MKj"),
                    l = t("/7QA"),
                    u = t("yR8l"),
                    d = t("x7UT"),
                    c = t("eDVu"),
                    m = t("0Log"),
                    k = t("geRD"),
                    p = t("/aPz"),
                    f = t("kRBY"),
                    h = t("TApp"),
                    T = t("YXxK"),
                    v = t("wo8Z"),
                    b = t("lNGo"),
                    g = t("WkKR"),
                    N = t("LFgC"),
                    y = t("uP5h"),
                    R = t("QhAx"),
                    S = t("VyuC"),
                    D = t("TjZe"),
                    E = t("s/24"),
                    _ = 3e5,
                    w = function(e) {
                        function n() {
                            var n = null !== e && e.apply(this, arguments) || this;
                            return n.state = {
                                closedByError: !1,
                                isLive: !1
                            }, n.eligibilityTimeouts = {}, n.expirationTimeouts = {}, n.getBannerMessage = function() {
                                return Object(l.d)("Click an emote to say hello!", "NewChatterRitual")
                            }, n.getLiveStatus = function(e) {
                                var n = e.pubsub.messages.streamDown ? e.pubsub.messages.streamDown.server_time : 0,
                                    t = e.pubsub.messages.streamUp ? e.pubsub.messages.streamUp.server_time : 0;
                                return n || t ? t > n : e.data && e.data.channel && e.data.channel.stream && !!e.data.channel.stream.id || !1
                            }, n.setEligibilityTimeouts = function(e) {
                                for (var t = new Set(e.map(function(e) {
                                        return e.id
                                    })), i = 0, a = Object.keys(n.eligibilityTimeouts); i < a.length; i++) {
                                    var r = a[i];
                                    t.has(r) || (clearTimeout(n.eligibilityTimeouts[r]), delete n.eligibilityTimeouts[r])
                                }
                                t.forEach(function(e) {
                                    n.eligibilityTimeouts[e] || (n.eligibilityTimeouts[e] = setTimeout(function() {
                                        delete n.eligibilityTimeouts[e], n.isEligible = !0, n.state.isLive && n.requestRitualToken()
                                    }, _))
                                })
                            }, n.requestRitualToken = function() {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var e, n;
                                    return a.__generator(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                Object(g.e)({
                                                    bannerMessage: this.getBannerMessage(),
                                                    channelID: this.props.channelID
                                                }), e = a.__assign({}, Object(k.a)({
                                                    channelID: this.props.channelID,
                                                    type: y.RitualTokenType.NewChatter
                                                })), t.label = 1;
                                            case 1:
                                                return t.trys.push([1, 3, , 4]), [4, this.props.requestToken(e)];
                                            case 2:
                                                return t.sent(), this.isEligible = !1, [3, 4];
                                            case 3:
                                                return n = t.sent(), l.k.error(n, "Failed to request new chatter ritual token."), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }, n.setExpirationTimeouts = function(e) {
                                for (var t = new Set(e.map(function(e) {
                                        return e.id
                                    })), i = 0, a = Object.keys(n.expirationTimeouts); i < a.length; i++) {
                                    var r = a[i];
                                    t.has(r) || (clearTimeout(n.expirationTimeouts[r]), delete n.expirationTimeouts[r])
                                }
                                e.forEach(function(e) {
                                    if (!n.expirationTimeouts[e.id] && e.expiresAt && new Date(e.expiresAt).valueOf() > Date.now()) {
                                        var t = new Date(e.expiresAt).valueOf() - Date.now();
                                        n.expirationTimeouts[e.id] = setTimeout(n.expireRitualToken.bind(e.id), t)
                                    }
                                })
                            }, n.expireRitualToken = function(e) {
                                delete n.expirationTimeouts[e];
                                Object(k.e)(R, {
                                    id: n.props.channelID
                                }, function(n) {
                                    return n.channel && n.channel.self && n.channel.self.ritualTokens && (n.channel.self.ritualTokens = n.channel.self.ritualTokens.filter(function(n) {
                                        return n.id === e
                                    })), n
                                })
                            }, n.redeemRitualToken = function(e, t) {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var n, i, r;
                                    return a.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                Object(b.a)({
                                                    emotePickerSessionID: null,
                                                    channelID: this.props.channelID,
                                                    channelLogin: this.props.channelLogin,
                                                    isHostMode: this.props.isHostMode,
                                                    fromNewChatterRitual: !0,
                                                    subOnlyMode: this.props.isSubsOnlyModeEnabled,
                                                    player: this.props.isEmbedded || this.props.isPopout ? T.a.Embed : T.a.Web
                                                }), Object(g.d)({
                                                    bannerMessage: this.getBannerMessage(),
                                                    channelID: this.props.channelID,
                                                    userMessage: t
                                                }), n = a.__assign({}, Object(k.a)({
                                                    channelID: this.props.channelID,
                                                    type: y.RitualTokenType.NewChatter,
                                                    messageText: t
                                                }), {
                                                    optimisticResponse: {
                                                        redeemRitualToken: {
                                                            __typename: "RedeemRitualTokenPayload",
                                                            error: null,
                                                            token: {
                                                                id: e,
                                                                expiresAt: null,
                                                                status: y.RitualTokenStatus.Redeemed,
                                                                type: y.RitualTokenType.NewChatter,
                                                                __typename: "RitualToken"
                                                            }
                                                        }
                                                    }
                                                }), i = null, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, this.props.redeemToken(n)];
                                            case 2:
                                                return i = s.sent(), [3, 4];
                                            case 3:
                                                return r = s.sent(), l.k.error(r, "Failed to redeem new chatter ritual."), this.handleGenericError(), [2];
                                            case 4:
                                                if (i.data.redeemRitualToken.error) switch (i.data.redeemRitualToken.error.code) {
                                                    case y.RitualTokenMutationErrors.UserBanned:
                                                    case y.RitualTokenMutationErrors.UserNotFollowing:
                                                    case y.RitualTokenMutationErrors.UserNotSubbed:
                                                    case y.RitualTokenMutationErrors.UserTimedOut:
                                                        return this.props.onSendMessage(t), this.setState({
                                                            closedByError: !0
                                                        }), [2];
                                                    default:
                                                        return this.handleGenericError(), [2]
                                                }
                                                return i.data.redeemRitualToken.token ? [2] : (this.handleGenericError(), [2])
                                        }
                                    })
                                })
                            }, n.dismissRitualToken = function(e) {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var n, t, i;
                                    return a.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                Object(g.a)({
                                                    bannerMessage: this.getBannerMessage(),
                                                    channelID: this.props.channelID
                                                }), n = a.__assign({}, Object(k.a)({
                                                    channelID: this.props.channelID,
                                                    type: y.RitualTokenType.NewChatter
                                                }), {
                                                    optimisticResponse: {
                                                        dismissRitualToken: {
                                                            __typename: "DismissRitualTokenPayload",
                                                            error: null,
                                                            token: {
                                                                id: e,
                                                                expiresAt: null,
                                                                status: y.RitualTokenStatus.Dismissed,
                                                                type: y.RitualTokenType.NewChatter,
                                                                __typename: "RitualToken"
                                                            }
                                                        }
                                                    }
                                                }), t = null, r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), [4, this.props.dismissToken(n)];
                                            case 2:
                                                return t = r.sent(), [3, 4];
                                            case 3:
                                                return i = r.sent(), l.k.error(i, "Failed to redeem new chatter ritual."), [3, 4];
                                            case 4:
                                                return t && t.data.dismissRitualToken.token ? [2] : (this.handleGenericError(), [2])
                                        }
                                    })
                                })
                            }, n.handleGenericError = function() {
                                n.props.onPushMessage(Object(h.a)(Object(l.d)("Something went wrong.", "NewChatterRitual"))), n.setState({
                                    closedByError: !0
                                })
                            }, n.clearAllTimers = function() {
                                for (var e = 0, t = Object.keys(n.eligibilityTimeouts); e < t.length; e++) {
                                    var i = t[e];
                                    clearTimeout(n.eligibilityTimeouts[i])
                                }
                                n.eligibilityTimeouts = {};
                                for (var a = 0, r = Object.keys(n.expirationTimeouts); a < r.length; a++) {
                                    i = r[a];
                                    clearTimeout(n.expirationTimeouts[i])
                                }
                                n.expirationTimeouts = {}
                            }, n
                        }
                        return a.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                            this.props.data && this.props.data.loading || !e.data || !e.data.loading || Object(g.b)({
                                channelID: this.props.channelID
                            });
                            var n = this.getLiveStatus(e);
                            if (this.state.isLive !== n && (this.setState({
                                    isLive: n
                                }), n && this.isEligible && this.requestRitualToken()), e.data && e.data.channel && e.data.channel.self && e.data.channel.self.ritualTokens) {
                                var t = e.data.channel.self.ritualTokens;
                                this.setEligibilityTimeouts(t.filter(function(e) {
                                    return e.status === y.RitualTokenStatus.Eligible
                                })), this.setExpirationTimeouts(t.filter(function(e) {
                                    return !!e.expiresAt
                                }))
                            } else this.clearAllTimers()
                        }, n.prototype.componentWillUnmount = function() {
                            this.clearAllTimers()
                        }, n.prototype.render = function() {
                            return this.props.data && this.props.data.channel ? this.state.closedByError || !this.state.isLive ? null : r.createElement(N.a, {
                                bannerMessage: this.getBannerMessage(),
                                onRitualDismissed: this.dismissRitualToken,
                                onRitualRedeemed: this.redeemRitualToken,
                                ritualTokens: this.props.data.channel.self && this.props.data.channel.self.ritualTokens ? this.props.data.channel.self.ritualTokens : []
                            }) : null
                        }, n
                    }(r.Component);

                function O(e) {
                    return !e.firstPageLoaded || !Object(v.a)() || !e.isLoggedIn || e.isEmbedded || e.isPopout
                }
                var C = Object(s.compose)(Object(o.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded,
                        isLoggedIn: Object(f.f)(e),
                        isSubsOnlyModeEnabled: e.chat.subsOnlyMode
                    }
                }, null), Object(u.a)(R, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.channelID
                            }
                        }
                    },
                    skip: O
                }), Object(c.a)(function(n) {
                    return {
                        query: R,
                        variables: {
                            id: n.channelID
                        },
                        topic: Object(p.w)(n.channelID),
                        type: m.PubsubMessageType.UpdatedChannelChatProperty,
                        mutator: function(t, i) {
                            return t.data.is_rituals_enabled ? e(function() {
                                n.data && n.data.refetch && n.data.refetch()
                            }) : i.channel && i.channel.self && (i.channel.self.ritualTokens = []), i
                        },
                        skip: O(n)
                    }
                }), Object(d.a)([{
                    topic: function(e) {
                        return Object(p.G)(e.channelID)
                    },
                    mapMessageTypesToProps: (i = {}, i[m.PubsubMessageType.ChannelStreamUp] = "streamUp", i[m.PubsubMessageType.ChannelStreamDown] = "streamDown", i),
                    skip: O
                }]), Object(u.a)(S, {
                    name: "dismissToken"
                }), Object(u.a)(D, {
                    name: "redeemToken"
                }), Object(u.a)(E, {
                    name: "requestToken"
                }))(w)
            }).call(this, t("URgk").setImmediate)
        },
        BMqj: function(e, n) {},
        "F19/": function(e, n, t) {
            "use strict";
            var i, a, r;
            t.d(n, "c", function() {
                    return i
                }), t.d(n, "b", function() {
                    return a
                }), t.d(n, "a", function() {
                    return r
                }),
                function(e) {
                    e.NewChatter = "NEW_CHATTER"
                }(i || (i = {})),
                function(e) {
                    e.Available = "AVAILABLE", e.Dismissed = "DISMISSED", e.Eligible = "ELIGIBLE", e.Redeemed = "REDEEMED"
                }(a || (a = {})),
                function(e) {
                    e.TokenNotAvailable = "TOKEN_NOT_AVAILABLE", e.TokenNotFound = "TOKEN_NOT_FOUND", e.UserBanned = "USER_CHAT_BANNED", e.UserNotFollowing = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.UserNotSubbed = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.UserTimedOut = "USER_CHAT_TIMED_OUT"
                }(r || (r = {}))
        },
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
        K70z: function(e, n) {},
        LFgC: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return d
            });
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("/7QA"),
                s = t("a1OF"),
                o = t("Ue10"),
                l = t("uP5h"),
                u = (t("Oxg6"), [{
                    id: "30259",
                    alt: "HeyGuys"
                }, {
                    id: "81274",
                    alt: "VoHiYo"
                }, {
                    id: "64138",
                    alt: "SeemsGood"
                }]),
                d = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.onEmoteClick = function(e) {
                            if (t.renderedTokenID) {
                                var n = e.currentTarget.dataset.emoteString;
                                n ? t.props.onRitualRedeemed(t.renderedTokenID, n) : r.k.warn("[NewChatterRitual] Could not find clicked emote ID.")
                            } else r.k.warn("[NewChatterRitual] Could not find clicked Ritual token.")
                        }, t.onCloseButtonClick = function() {
                            t.renderedTokenID ? t.props.onRitualDismissed(t.renderedTokenID) : r.k.warn("[NewChatterRitual] Could not find clicked Ritual token.")
                        }, t.getAvailableToken = function() {
                            return t.props.ritualTokens.find(function(e) {
                                return e.type === l.RitualTokenType.NewChatter && e.status === l.RitualTokenStatus.Available && (!e.expiresAt || Date.now() < new Date(e.expiresAt).valueOf())
                            }) || null
                        }, t.renderedTokenID = null, t
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.getAvailableToken();
                        if (this.renderedTokenID = n ? n.id : null, !n) return null;
                        var t = u.map(function(n) {
                            return a.createElement(o.Xa, {
                                key: n.id,
                                flexShrink: 0,
                                margin: {
                                    right: .5
                                }
                            }, a.createElement(o.Vb, {
                                label: n.alt
                            }, a.createElement(o.Ua, {
                                type: o.Va.Alpha,
                                onClick: e.onEmoteClick,
                                "data-emote-string": n.alt,
                                "data-test-selector": "emote-button"
                            }, a.createElement(o.Xa, {
                                padding: .5
                            }, a.createElement("img", {
                                className: "new-chatter-ritual__emote",
                                src: Object(s.d)(n.id, 3)
                            })))))
                        });
                        return a.createElement(o.Cb, {
                            background: o.r.Base,
                            border: !0,
                            className: "new-chatter-ritual",
                            margin: {
                                x: 2,
                                bottom: .5
                            },
                            padding: {
                                left: .5,
                                y: .5
                            }
                        }, a.createElement(o.Xa, {
                            alignItems: o.f.Center,
                            display: o.X.Flex,
                            flexWrap: o.Ba.NoWrap
                        }, a.createElement(o.Xa, {
                            flexShrink: 1,
                            margin: {
                                right: .5
                            }
                        }, this.props.bannerMessage), t, a.createElement(o.Cb, {
                            borderLeft: !0,
                            flexShrink: 0
                        }, a.createElement(o.A, {
                            ariaLabel: "close",
                            icon: o.rb.Close,
                            onClick: this.onCloseButtonClick,
                            size: o.B.Large,
                            "data-test-selector": "dismiss-button"
                        }))))
                    }, n
                }(a.Component)
        },
        Oxg6: function(e, n, t) {},
        QhAx: function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NewChatterRitual_Channel"
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
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ritualTokens"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ritualToken"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "stream"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 167
                }
            };
            i.loc.source = {
                body: '#import "./ritual-token-fragment.gql"\nquery NewChatterRitual_Channel($id: ID!) {\nchannel: user(id: $id) {\nid\nself {\nritualTokens {\n...ritualToken\n}\n}\nstream {\nid\n}\n}\n}',
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
            }(t("0Ex5").definitions)), e.exports = i
        },
        TjZe: function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RedeemNewChatterToken"
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
                                    value: "RedeemRitualTokenInput"
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
                                value: "redeemRitualToken"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "token"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ritualToken"
                                            },
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
                    end: 182
                }
            };
            i.loc.source = {
                body: '#import "./ritual-token-fragment.gql"\nmutation RedeemNewChatterToken($input: RedeemRitualTokenInput!) {\nredeemRitualToken(input: $input) {\nerror {\ncode\n}\ntoken {\n...ritualToken\n}\n}\n}',
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
            }(t("0Ex5").definitions)), e.exports = i
        },
        VyuC: function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DismissNewChatterToken"
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
                                    value: "DismissRitualTokenInput"
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
                                value: "dismissRitualToken"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "token"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ritualToken"
                                            },
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
                    end: 185
                }
            };
            i.loc.source = {
                body: '#import "./ritual-token-fragment.gql"\nmutation DismissNewChatterToken($input: DismissRitualTokenInput!) {\ndismissRitualToken(input: $input) {\nerror {\ncode\n}\ntoken {\n...ritualToken\n}\n}\n}',
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
            }(t("0Ex5").definitions)), e.exports = i
        },
        WkKR: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return s
            }), t.d(n, "d", function() {
                return o
            }), t.d(n, "b", function() {
                return l
            }), t.d(n, "e", function() {
                return u
            }), t.d(n, "c", function() {
                return d
            });
            var i = t("/7QA"),
                a = t("2xye"),
                r = t("IWck"),
                s = function(e) {
                    var n = {
                        action: r.b.DismissToken,
                        channel_id: e.channelID,
                        user_banner: e.bannerMessage,
                        user_message: null
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                o = function(e) {
                    var n = {
                        action: r.b.RedeemToken,
                        channel_id: e.channelID,
                        user_banner: e.bannerMessage,
                        user_message: e.userMessage
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                l = function(e) {
                    var n = {
                        action: r.b.RequestEligibility,
                        channel_id: e.channelID,
                        user_banner: null,
                        user_message: null
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                u = function(e) {
                    var n = {
                        action: r.b.RequestToken,
                        channel_id: e.channelID,
                        user_banner: e.bannerMessage,
                        user_message: null
                    };
                    i.o.track(a.SpadeEventType.NewChatterTokenStatus, n)
                },
                d = function(e) {
                    var n = {
                        action: e.action,
                        channel_id: e.channelID
                    };
                    i.o.track(a.SpadeEventType.NewChatterOnboardingInteraction, n)
                }
        },
        Y9qK: function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("7K5j");
            t.d(n, "NewChatterRitualContainer", function() {
                return i.b
            }), t.d(n, "NewChatterRitual", function() {
                return i.a
            })
        },
        cm1s: function(e, n) {},
        "s/24": function(e, n, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RequestNewChatterToken"
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
                                    value: "RequestRitualTokenInput"
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
                                value: "requestRitualToken"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "token"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ritualToken"
                                            },
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
                    end: 185
                }
            };
            i.loc.source = {
                body: '#import "./ritual-token-fragment.gql"\nmutation RequestNewChatterToken($input: RequestRitualTokenInput!) {\nrequestRitualToken(input: $input) {\nerror {\ncode\n}\ntoken {\n...ritualToken\n}\n}\n}',
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
            }(t("0Ex5").definitions)), e.exports = i
        },
        uP5h: function(e, n, t) {
            "use strict";
            var i = t("F19/");
            t.d(n, "RitualTokenMutationErrors", function() {
                return i.a
            }), t.d(n, "RitualTokenStatus", function() {
                return i.b
            }), t.d(n, "RitualTokenType", function() {
                return i.c
            });
            t("K70z"), t("BMqj"), t("cm1s")
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