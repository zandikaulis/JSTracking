(window.webpackJsonp = window.webpackJsonp || []).push([
    [205], {
        "+djN": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "e", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("oK83"),
                o = n("aF6k"),
                s = n("aU+G");

            function l(e) {
                return r.__assign({}, e, {
                    kind: s.a.RoomMessageEvent
                })
            }

            function c(e) {
                return {
                    kind: s.a.DeletedMessageEvent,
                    id: e.id
                }
            }

            function d(e, t, n) {
                return {
                    kind: s.a.ModerationEvent,
                    id: Object(o.a)(t + "-moderation-event"),
                    channelID: e,
                    userID: t,
                    purgeAfter: n
                }
            }

            function u(e) {
                return {
                    kind: s.a.SystemMessageEvent,
                    id: Object(o.a)("roomSystemMessage"),
                    text: e
                }
            }

            function p(e) {
                var t = Object(i.d)('Broadcaster set this room\'s topic to "{topic}"', {
                    topic: e
                }, "RoomTopic");
                return {
                    kind: s.a.SystemMessageEvent,
                    id: Object(o.a)("initialRoomTopicMessage"),
                    text: t
                }
            }

            function m(e, t, n, r, i, l, c, d) {
                return {
                    kind: s.a.CheerbombEvent,
                    id: Object(o.a)(t + "-cheerbomb-event"),
                    messageID: e,
                    userID: t,
                    displayName: n,
                    userLogin: r,
                    minCheerAmount: l,
                    selectedCount: i,
                    bitsAmount: c,
                    domain: d,
                    sourceType: a.a.room_message
                }
            }
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        "/rr3": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.WhisperSettings = 1] = "WhisperSettings"
                }(r || (r = {}))
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                                value: "targetUser"
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                        value: "login"
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
                                }]
                            }
                        }, {
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
                                        value: "blockedUsers"
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "0tEc": function(e, t, n) {
            "use strict";
            var r = n("oJmH"),
                i = n("/MKj"),
                a = n("yR8l"),
                o = n("kRBY"),
                s = n("GnwI"),
                l = n("mrSG"),
                c = n("q1tI"),
                d = n("fvjX"),
                u = n("geRD"),
                p = n("1/iK"),
                m = n("y5D0"),
                f = "FriendEdge",
                g = "IncomingFriendRequestEdge",
                h = "",
                b = "OutgoingFriendRequestEdge";

            function v(e, t, n, r) {
                var i;
                return {
                    optimisticResponse: (i = {}, i[e] = {
                        __typename: t,
                        user: {
                            __typename: "User",
                            id: n,
                            self: {
                                __typename: "UserSelfConnection",
                                friendship: {
                                    __typename: r
                                }
                            }
                        }
                    }, i)
                }
            }
            var k = n("/7QA"),
                y = n("/rr3"),
                S = n("Ue10"),
                O = n("heM0");
            var C = Object(r.compose)(Object(i.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        onLoginClick: function() {
                            return m.e(p.a.FriendAdd)
                        }
                    }, e)
                }), Object(a.a)(O, {
                    name: "onCreateFriendRequest",
                    options: function(e) {
                        return l.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("createFriendRequest", "CreateFriendRequestPayload", e.targetID, b))
                    }
                }))(function(e) {
                    var t = Object(k.d)("Add Friend", "AddFriendButton");
                    switch (e.friendButtonUIType) {
                        case y.a.WhisperSettings:
                            return c.createElement(S.Va, {
                                ariaLabel: t,
                                onClick: e.isLoggedIn ? e.onCreateFriendRequest : e.onLoginClick
                            }, c.createElement(S.Ya, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, t));
                        default:
                            return c.createElement(S.z, {
                                ariaLabel: t,
                                onClick: e.isLoggedIn ? e.onCreateFriendRequest : e.onLoginClick,
                                "data-test-selector": "add-button"
                            }, t)
                    }
                }),
                N = n("aECu"),
                E = n("csdq"),
                D = Object(r.compose)(Object(a.a)(N, {
                    name: "onAcceptFriendRequest",
                    options: function(e) {
                        return l.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("acceptFriendRequest", "AcceptFriendRequestPayload", e.targetID, f))
                    }
                }), Object(a.a)(E, {
                    name: "onRejectFriendRequest",
                    options: function(e) {
                        return l.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("rejectFriendRequest", "RejectFriendRequestPayload", e.targetID, h))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return c.createElement(S.Ya, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Friend Request Pending", "IncomingFriendRequestButton"));
                    var t = Object(k.d)("Accept", "IncomingFriendRequestButton"),
                        n = Object(k.d)("Reject", "IncomingFriendRequestButton");
                    return c.createElement(S.Ya, null, c.createElement(S.Ya, {
                        display: S.X.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, c.createElement(S.Zb, {
                        align: S.ac.Left,
                        label: Object(k.d)("Accept Friend Request", "IncomingFriendRequestButton")
                    }, c.createElement(S.z, {
                        ariaLabel: t,
                        onClick: e.onAcceptFriendRequest,
                        "data-test-selector": "accept-button"
                    }, t))), c.createElement(S.Zb, {
                        align: S.ac.Left,
                        label: Object(k.d)("Reject Friend Request", "IncomingFriendRequestButton")
                    }, c.createElement(S.z, {
                        ariaLabel: n,
                        onClick: e.onRejectFriendRequest,
                        type: S.F.Alert,
                        "data-test-selector": "reject-button"
                    }, n)))
                }),
                _ = n("Xcb2"),
                T = Object(r.compose)(Object(a.a)(_, {
                    name: "onCancelFriendRequest",
                    options: function(e) {
                        return l.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("cancelFriendRequest", "CancelFriendRequestPayload", e.targetID, h))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return c.createElement(S.Ya, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Friend Request Pending", "OutgoingFriendRequestButton"));
                    var t = Object(k.d)("Cancel Request", "OutgoingFriendRequestButton");
                    return c.createElement(S.z, {
                        ariaLabel: t,
                        onClick: e.onCancelFriendRequest,
                        "data-test-selector": "cancel-button"
                    }, t)
                }),
                I = n("IRYN"),
                R = Object(r.compose)(Object(a.a)(I, {
                    name: "onUnfriendUser",
                    options: function(e) {
                        return l.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("unfriendUser", "UnfriendUserPayload", e.targetID, h))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return null;
                    var t = Object(k.d)("Friends", "UnfriendButton"),
                        n = Object(k.d)("Unfriend", "UnfriendButton");
                    return c.createElement(S.z, {
                        ariaLabel: n,
                        onClick: e.onUnfriendUser,
                        statusAlertText: n,
                        "data-test-selector": "unfriend-button"
                    }, t)
                }),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.friendButtonUIType || y.a.Default;
                        if (!this.props.friendData && this.props.data && (this.props.data.loading || this.props.data.error)) return e === y.a.WhisperSettings ? null : c.createElement(S.jb, {
                            height: 30,
                            width: 60
                        });
                        var t = this.props.friendData || this.props.data;
                        if (!t || !t.user || !t.user.self || this.props.targetID === this.props.currentUserID) return null;
                        if (!this.props.isLoggedIn) return c.createElement(C, {
                            friendButtonUIType: e,
                            isLoggedIn: this.props.isLoggedIn,
                            targetID: this.props.targetID
                        });
                        switch (t.user.self.friendship ? t.user.self.friendship.__typename : h) {
                            case f:
                                return c.createElement(R, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case g:
                                return c.createElement(D, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case b:
                                return c.createElement(T, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case h:
                            default:
                                return c.createElement(C, {
                                    friendButtonUIType: e,
                                    isLoggedIn: this.props.isLoggedIn,
                                    targetID: this.props.targetID
                                })
                        }
                    }, t
                }(c.Component),
                M = n("GGok");
            var w = Object(r.compose)(Object(s.b)("FriendButton"), Object(i.connect)(function(e) {
                var t = Object(o.e)(e);
                return {
                    currentUserID: t && t.id,
                    isLoggedIn: Object(o.f)(e)
                }
            }), Object(a.a)(M, {
                options: function(e) {
                    return {
                        variables: {
                            id: e.targetID
                        }
                    }
                },
                skip: function(e) {
                    return !!e.friendData || !e.isLoggedIn || e.currentUserID === e.targetID
                }
            }))(F);
            n.d(t, "a", function() {
                return w
            })
        },
        "25vm": function(e, t, n) {},
        "3DuC": function(e, t, n) {},
        "487o": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_BlueBar_CurrentUser"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "stringIds"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "primePromotions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "stringIds"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
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
                                        value: "text"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "externalURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isExternalLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 231
                }
            };
            n.loc.source = {
                body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4NwI": function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                s = n("/7QA"),
                l = n("8/mp"),
                c = n("yR8l"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: a.createElement(u.W, {
                                italic: !0,
                                type: u.Wb.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(u.W, {
                                italic: !0,
                                type: u.Wb.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(u.Ya, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(u.Ya, {
                            textAlign: u.Sb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(u.W, {
                            type: u.Wb.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                    }, t
                }(a.Component),
                m = Object(d.b)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                g = n("geRD"),
                h = n("JVUd"),
                b = n("cinR"),
                v = n("Rjl4"),
                k = n("O4UZ"),
                y = n("cx1G"),
                S = (n("5ZOr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(v.i)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType), t.props.claimCallback && t.props.offerType !== k.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                        }, t.onHover = function() {
                            Object(v.j)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType)
                        }, t.isGifted = function() {
                            return t.props.data && t.props.data.currentUser && t.props.data.currentUser.primeGift
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = k.l(e),
                            n = k.h("prime-claim-button", e);
                        return a.createElement(u.Ya, {
                            fullWidth: !0,
                            className: n,
                            display: t ? u.X.Block : u.X.InlineBlock
                        }, this.renderClaimButton())
                    }, t.prototype.renderClaimButton = function() {
                        var e = this.props,
                            t = e.externalURL,
                            n = e.claiming,
                            r = e.offerType,
                            i = this.getButtonText();
                        if (t || r === k.e.EXTERNAL_OFFER) return a.createElement(b.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, i));
                        var o = a.createElement(b.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            state: n ? u.E.Loading : u.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? u.ub.Gift : void 0
                        }, i));
                        return a.createElement(u.Ya, {
                            position: u.kb.Relative
                        }, o)
                    }, t.prototype.getButtonText = function() {
                        var e = Object(s.d)("Learn More", "PrimeClaimButton");
                        if (this.props.externalURL) return e;
                        switch (this.props.offerType) {
                            case k.e.CLAIM_CODE:
                                return Object(s.d)("Get Code", "PrimeClaimButton");
                            case k.e.EXTERNAL_OFFER:
                                return e;
                            case k.e.DIRECT_ENTITLEMENT:
                            default:
                                return this.isGifted() ? Object(s.d)("Claim Gift", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                        }
                    }, t
                }(a.Component)),
                O = Object(o.compose)(Object(c.a)(y, {
                    skip: function(e) {
                        return !Object(k.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(d.b)("PrimeClaimButton"))(S),
                C = (n("KbPt"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.toggleShowDescription = function() {
                            var e = !n.state.showDescription;
                            Object(v.l)(e, {
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }), n.setState({
                                showDescription: e
                            })
                        }, n.onHover = function() {
                            n.state.showDescription ? Object(v.k)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }) : Object(v.m)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            })
                        }, n.renderVerticalDescriptionBlock = function() {
                            return a.createElement(u.Fb, {
                                className: "prime-claim-description__body",
                                background: u.r.Alt2,
                                border: !0,
                                position: u.kb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(u.Fb, {
                                className: "prime-claim-description__body",
                                background: u.r.Base,
                                border: !0,
                                position: u.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: u.db.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(u.Ya, {
                                "data-a-target": "prime-claim-description-body",
                                margin: {
                                    bottom: 2
                                },
                                padding: 1
                            }, a.createElement(f, {
                                source: n.props.description || ""
                            }))
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-claim-description", e);
                        return a.createElement(u.Ya, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(b.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            "data-a-target": "prime-claim-description-button",
                            fullWidth: !0,
                            type: u.F.Hollow,
                            onClick: this.toggleShowDescription
                        }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                    }, t.prototype.getDescriptionButtonText = function() {
                        return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(k.l)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(a.Component)),
                N = Object(d.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(C),
                E = n("fvjX"),
                D = n("aCAx"),
                _ = n("kRBY"),
                T = n("ZS2+"),
                I = n("cZKs"),
                R = T.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(83)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                F = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Ya, {
                            className: "prime-gift-modal",
                            position: u.kb.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(R, {
                            action: this.props.action,
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            getGiftRecipientList: this.props.getGiftRecipientList,
                            updateGiftRecipientList: this.props.updateGiftRecipientList
                        }), a.createElement(I.a, {
                            closeOnBackdropClick: !0,
                            onClose: this.props.onClose
                        }))
                    }, t
                }(a.Component),
                M = Object(d.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(F),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            recipients: t.getGiftLogins(),
                            newRecipients: new Set
                        }, t.onClick = function() {
                            t.props.isLoggedIn && (t.props.giftPrimeOffer(t.getGiftRecipients.bind(t), t.updateGiftRecipients.bind(t)), t.props.toggleCrownMenu && t.props.toggleCrownMenu(!1))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.z, {
                            type: u.F.Hollow,
                            icon: u.ub.Gift,
                            onClick: this.onClick,
                            fullWidth: !0,
                            targetBlank: !0,
                            "data-a-target": "prime-gift-button"
                        }, Object(s.d)("Send as a Gift", "PrimeGiftExperiment"))
                    }, t.prototype.getGiftRecipients = function() {
                        return this.state.recipients.concat(Array.from(this.state.newRecipients.values()))
                    }, t.prototype.updateGiftRecipients = function(e) {
                        this.state.newRecipients.add(e)
                    }, t.prototype.getGiftLogins = function() {
                        var e = [];
                        return this.props.offer && this.props.offer.self && this.props.offer.self.gifts && this.props.offer.self.gifts.forEach(function(t) {
                            t.to && t.to.login && e.push(t.to.login)
                        }), e
                    }, t
                }(a.Component),
                U = Object(o.compose)(Object(d.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(w);
            var j = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(_.f)(e)
                    }
                }, function(e, t) {
                    return Object(E.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(D.d)(M, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(U),
                x = n("9pSj"),
                P = n("j3KY"),
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            Object(v.q)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t.onHover = function() {
                            Object(v.r)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Ya, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(b.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            linkTo: this.getLink(),
                            targetBlank: !0,
                            onClick: this.onClick
                        }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || x.b.Default) === x.b.Vertical ? P.d : P.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(P.e)(t, n)
                    }, t
                }(a.Component),
                L = Object(d.b)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(A),
                B = n("zUQL"),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-claim", e);
                        return a.createElement(u.Ya, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(k.n)(e) || this.props.isGifted ? Object(k.n)(e) && Object(k.k)(this.props.offerID) ? a.createElement(u.Ya, {
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, a.createElement(u.Ya, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(u.Ya, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(j, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderPrimeClaimButton() : a.createElement(L, {
                            externalReftag: this.props.externalReftag,
                            externalURL: this.props.externalURL,
                            offerID: this.props.offerID,
                            index: this.props.index,
                            orientation: this.props.orientation
                        })
                    }, t.prototype.getClaimDescriptionSection = function() {
                        if (this.props.offerType === k.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                        var e = this.props.data;
                        return a.createElement(N, {
                            description: this.props.offerDescription,
                            offerID: this.props.offerID,
                            externalURL: this.props.externalURL,
                            index: this.props.index,
                            orientation: this.props.orientation,
                            hasPrime: Object(k.n)(e)
                        })
                    }, t.prototype.renderPrimeClaimButton = function() {
                        return a.createElement(O, {
                            offerType: this.props.offerType,
                            offerID: this.props.offerID,
                            claimCallback: this.props.claimCallback,
                            claiming: this.props.claiming,
                            orientation: this.props.orientation,
                            externalURL: this.props.externalURL,
                            index: this.props.index
                        })
                    }, t
                }(a.Component),
                G = Object(o.compose)(Object(c.a)(B), Object(d.b)("PrimeInstructions"))(W),
                z = n("z8lI"),
                V = (n("25vm"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.setRef = function(e) {
                            n.setState({
                                clipboardInput: e
                            })
                        }, n.copy = function() {
                            var e;
                            try {
                                n.state.clipboardInput && n.state.clipboardInput.select(), e = document.execCommand("copy")
                            } catch (t) {
                                e = !1
                            }
                            return n.setState({
                                copied: e
                            }), e
                        }, n.state = {
                            copied: !1,
                            clipboardInput: null
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                        return a.createElement(u.Ya, {
                            className: "copy-button copy-btn",
                            display: u.X.Flex
                        }, a.createElement(u.Qa, {
                            className: "copy-button__btn"
                        }, a.createElement(u.z, {
                            onClick: this.copy,
                            type: this.state.copied ? u.F.Success : u.F.Default
                        }, e)), a.createElement("input", {
                            className: "copy-button__copy-input",
                            ref: this.setRef,
                            value: this.props.clipboardText,
                            readOnly: !0
                        }))
                    }, t
                }(a.Component)),
                q = Object(E.compose)(Object(d.b)("CopyButton"))(V),
                Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.setState({
                                value: e.currentTarget.value,
                                copied: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        this.props.initialText && this.setState({
                            value: this.props.initialText,
                            copied: !1
                        })
                    }, t.prototype.render = function() {
                        return this.state && this.state.value ? a.createElement(u.Ya, {
                            className: "copyable-item",
                            display: u.X.Flex,
                            flexGrow: 1
                        }, a.createElement(u.Ya, {
                            flexGrow: 1
                        }, a.createElement(u.Sa, {
                            type: u.Ua.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(u.Ya, null, a.createElement(q, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                H = Object(E.compose)(Object(d.b)("CopyableItem"))(Y),
                X = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(u.fc, null, a.createElement(f, {
                                source: n.props.claimInstructions || "",
                                escapeHtml: !0,
                                renderers: {
                                    Link: function(e) {
                                        return a.createElement("a", {
                                            href: e.href,
                                            target: "_blank",
                                            rel: "nofollow noopener noreferrer"
                                        }, e.children)
                                    }
                                }
                            }))
                        }, n.renderVerticalLayout = function() {
                            return a.createElement(u.Fb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: u.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: u.Ca.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(u.Fb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(u.Ya, {
                                fullWidth: !0,
                                justifyContent: u.Xa.Center,
                                textAlign: u.Sb.Center
                            }, a.createElement(u.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(u.Fb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: u.kb.Absolute,
                                padding: 1,
                                background: u.r.Alt,
                                overflow: u.db.Scroll,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                }
                            }, n.getClaimInstructions()))
                        }, n.toggleShowDescription = function() {
                            n.setState({
                                showDescription: !n.state.showDescription
                            })
                        }, n.getDescriptionButtonText = function() {
                            return n.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimInstruction") : Object(s.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default;
                        return Object(k.l)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(a.Component)),
                Q = Object(d.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })(X),
                $ = n("UFVY"),
                K = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(u.jb, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(u.Fb, {
                                fullWidth: !0,
                                display: u.X.Flex,
                                justifyContent: u.Xa.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: u.f.Center,
                                borderRadius: u.x.Medium
                            }, a.createElement(u.W, {
                                type: u.Wb.Span,
                                align: u.gc.Middle,
                                color: u.O.Overlay
                            }, a.createElement(u.Ya, {
                                display: u.X.InlineFlex,
                                flexWrap: u.Ba.NoWrap,
                                alignItems: u.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(u.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: u.X.InlineFlex,
                                flexWrap: u.Ba.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: u.f.Center
                            }, a.createElement(u.tb, {
                                asset: n ? u.ub.Gift : u.ub.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(s.d)("Gift Claimed", "PrimeRedeem") : Object(s.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return a.createElement(Q, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-redeem", e);
                        return a.createElement(u.Ya, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(k.l)(e);
                        if (this.props.code && this.props.deliveryMethod === k.e.CLAIM_CODE) return a.createElement(u.Ya, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(H, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(k.k)(this.props.offerID) ? this.props.isPrime ? a.createElement(u.Ya, {
                            display: u.X.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(u.Ya, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(j, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(u.Fb, {
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: u.x.Medium
                        }, a.createElement(u.W, {
                            type: t ? u.Wb.H4 : u.Wb.H6,
                            align: u.gc.Middle,
                            color: u.O.Overlay
                        }, a.createElement(u.Ya, {
                            display: u.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: u.Ba.NoWrap,
                            alignItems: u.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(u.Ya, {
                            margin: {
                                right: 1
                            },
                            display: u.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: u.Ba.NoWrap,
                            padding: {
                                y: .5
                            },
                            alignItems: u.f.Center
                        }, a.createElement(u.tb, {
                            asset: u.ub.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                Z = Object(o.compose)(Object(d.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(c.a)($, {
                    skip: function(e) {
                        return !Object(k.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }))(K),
                J = n("SStD"),
                ee = n("QK1T"),
                te = n("9k8c"),
                ne = n("PsVi"),
                re = (n("oj5W"), "prime-offer__video"),
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            claimed: !1,
                            claiming: !1,
                            error: void 0,
                            claimData: void 0,
                            status: void 0
                        }, t.renderVerticalLayout = function(e) {
                            var n = t.props.isLast || !1,
                                r = e.content,
                                i = r && r.game && r.game.name || "",
                                o = r && r.categories && r.categories[0] || "",
                                s = r && r.publisher || "";
                            return a.createElement(u.Fb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: u.f.Center,
                                display: u.X.Block,
                                borderBottom: !n,
                                textAlign: u.Sb.Left,
                                position: u.kb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(u.Ya, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(u.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(u.Fb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.Ya, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(u.W, {
                                type: u.Wb.P
                            }, i, " ", o)), a.createElement(u.Ya, {
                                className: "prime-offer__publisher"
                            }, a.createElement(u.W, {
                                type: u.Wb.P,
                                color: u.O.Alt2,
                                fontSize: u.Ca.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                r = n && n.game && n.game.name || "",
                                i = n && n.categories && n.categories[0] || "",
                                o = n && n.publisher || "";
                            return a.createElement(u.Fb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: u.f.Center,
                                display: u.X.InlineBlock,
                                textAlign: u.Sb.Left,
                                position: u.kb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(u.Fb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.Fb, {
                                className: "prime-offer__content__text",
                                background: u.r.Base
                            }, a.createElement(u.Ya, {
                                className: "prime-offer__publisher"
                            }, a.createElement(u.W, {
                                type: u.Wb.P,
                                color: u.O.Alt2,
                                fontSize: u.Ca.Size7,
                                transform: u.Vb.Uppercase
                            }, o)), a.createElement(u.Ya, {
                                className: "prime-offer__title",
                                alignItems: u.f.Start,
                                padding: {
                                    bottom: .5
                                }
                            }, t.renderTitle(e)), a.createElement(u.Ya, {
                                className: "prime-offer__description",
                                padding: {
                                    bottom: .5
                                }
                            }, a.createElement(u.W, {
                                type: u.Wb.P,
                                color: u.O.Alt2
                            }, r, " ", i, " ", t.renderGiftText()))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderOfferImageOrVideo = function(e) {
                            var n;
                            return n = "mp4" === t.getExtensionFromURL(e) ? a.createElement("video", {
                                preload: "auto",
                                ref: function(e) {
                                    t.offerVideo = e || void 0
                                },
                                loop: !0,
                                playsInline: !0,
                                muted: !0,
                                autoPlay: !0,
                                controls: Object(ee.c)(window.navigator.userAgent),
                                "data-test-selector": re,
                                poster: "https://m.media-amazon.com/images/G/01/sm/Evergreen_Shared/crown_video_evergreen.jpg"
                            }, a.createElement("source", {
                                src: e,
                                type: "video/mp4"
                            })) : a.createElement("img", {
                                src: e
                            }), a.createElement(u.Ra, {
                                borderRadius: u.x.Medium
                            }, n)
                        }, t.getExtensionFromURL = function(e) {
                            if (!e) return e;
                            var t = e.split(".");
                            return t[t.length - 1]
                        }, t.renderRedeemUpsellOrClaimSection = function(e) {
                            var n = e.content,
                                r = n && n.externalURL || "",
                                i = e.self || {
                                    claimData: ""
                                };
                            if (t.state.error) {
                                var o = t.getErrorType();
                                return a.createElement(z.a, {
                                    fontSize: u.Ca.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: o
                                })
                            }
                            if (!r && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var s = t.state.claimData || i.claimData;
                                return a.createElement(Z, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(k.n)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: s,
                                    deliveryMethod: e.deliveryMethod,
                                    orientation: t.props.orientation,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                })
                            }
                            return a.createElement(G, {
                                offerID: e.id,
                                offer: e,
                                offerDescription: e.description,
                                offerType: e.deliveryMethod,
                                isGifted: !!(t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift),
                                externalReftag: t.props.externalReftag,
                                externalURL: r,
                                claimCallback: t.claimOffer,
                                claiming: t.state.claiming,
                                index: t.props.index,
                                orientation: t.props.orientation,
                                toggleCrownMenu: t.props.toggleCrownMenu
                            })
                        }, t.getErrorType = function() {
                            return t.state.error || k.b.UNKNOWN_ERROR
                        }, t.claimOffer = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.setState({
                                claiming: !0
                            }), t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift && t.props.giftData.currentUser.primeGift && t.props.claimGift(Object(g.a)({
                                giftID: t.props.giftData.currentUser.primeGift.id
                            })).then(function(e) {
                                t.setState({
                                    claiming: !1,
                                    claimed: !0,
                                    error: void 0
                                })
                            }).catch(function(e) {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: k.b.UNKNOWN_ERROR
                                })
                            });
                            var n = t.props.data;
                            if (n && !n.loading && !n.error && n.currentUser && n.currentUser.id) {
                                var r = t.props.offer,
                                    i = Object(g.a)({
                                        offerID: r.id
                                    });
                                t.props.claimPrimeOffer(i).then(function(e) {
                                    var n = (e.data || {}).claimPrimeOffer || {},
                                        i = n.self || {},
                                        a = n.error || {};
                                    if (i && i.hasEntitlement && r && t.setState({
                                            claimData: i.claimData,
                                            claiming: !1,
                                            claimed: !0,
                                            error: void 0
                                        }), a && a.code) {
                                        var o = k.b[a.code];
                                        t.setState({
                                            claiming: !1,
                                            claimed: !1,
                                            error: o || k.b.UNKNOWN_ERROR
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: k.b.UNKNOWN_ERROR
                                    })
                                })
                            }
                        }, t.trackImpression = function() {
                            var e = null;
                            t.props.offer.content && (e = t.props.offer.content.externalURL), Object(v.p)({
                                offerID: t.props.offer.id,
                                externalURL: e || "",
                                index: t.props.index,
                                hasPrime: Object(k.n)(t.props.data),
                                displayWidthType: t.props.displayWidthType
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractiveIfReady(), this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractiveIfReady(), this.offerVideo && (this.offerVideo.setAttribute("muted", "muted"), this.offerVideo.play())
                    }, t.prototype.reportInteractiveIfReady = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.offer;
                        if (e) {
                            var t = this.props.orientation || k.c.Default;
                            return k.l(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(u.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(u.tb, {
                            asset: u.ub.Gift
                        }))), a.createElement(u.Ya, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: u.f.Start,
                            display: u.X.Flex
                        }, t, a.createElement(f, {
                            unwrapDisallowed: !0,
                            disallowedTypes: ["Paragraph"],
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(u.W, {
                                    type: u.Wb.Span,
                                    bold: !0
                                }, e)
                            },
                            gifterLogin: this.props.giftData.currentUser.primeGift.from.login
                        }, "PrimeClaimButton") : null
                    }, t.prototype.isCurrentOfferClaimed = function(e) {
                        return (e.self || {
                            hasEntitlement: !1
                        }).hasEntitlement
                    }, t
                }(a.Component),
                ae = Object(o.compose)(Object(c.a)(ne, {
                    name: "giftData",
                    skip: function(e) {
                        return !Object(k.k)(e.offer.id)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offer.id
                            }
                        }
                    }
                }), Object(c.a)(B, {
                    name: "data"
                }), Object(c.a)(J, {
                    name: "claimPrimeOffer"
                }), Object(c.a)(te, {
                    name: "claimGift"
                }), Object(d.b)("PrimeOffer"), Object(h.a)("PrimeOffer", {
                    pixels: 100
                }))(ie),
                oe = (n("WGf9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.l)(e);
                        return a.createElement(u.Fb, {
                            className: "prime-offer-placeholder",
                            alignItems: u.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? u.X.Block : u.X.InlineBlock,
                            fullWidth: t
                        }, a.createElement(u.Ya, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(u.jb, {
                            height: 20
                        })), a.createElement(u.jb, {
                            height: 160
                        }), a.createElement(u.Ya, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(u.jb, {
                            height: 20,
                            width: 160
                        })), a.createElement(u.Ya, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(u.jb, {
                            height: 20,
                            width: 80
                        })), a.createElement(u.Ya, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(u.jb, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                se = Object(d.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(oe),
                le = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Fb, {
                            "data-test-target": "prime-offers-upsell",
                            "data-a-target": "prime-offers-upsell",
                            className: "prime-offers-upsell",
                            alignItems: u.f.Center,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            borderBottom: !0
                        }, a.createElement(u.W, {
                            type: u.Wb.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(u.Ya, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: u.Sb.Center
                        }, a.createElement(u.tb, {
                            asset: u.ub.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: u.vb.Brand
                        })), a.createElement(u.W, {
                            type: u.Wb.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(L, null))
                    }, t
                }(a.Component)),
                ce = Object(d.b)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(le),
                de = n("RfIv"),
                ue = n("OeOm"),
                pe = (n("iuxt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.shouldShowOffersSection = function() {
                            if (t.isOffersDataLoading) return !0;
                            var e = t.props.offersData,
                                n = e && e.primeOffers && e.primeOffers.length && t.getSortedOffers(),
                                r = n && n.length;
                            return r || !r && !t.props.hideWithNoOffers
                        }, t.renderDesktopOffers = function() {
                            return a.createElement(u.Ya, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(u.cc, {
                                childWidth: u.dc.Large,
                                gutterSize: u.ec.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(v.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(u.Ya, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(u.jb, {
                                height: 28,
                                width: 300
                            })) : a.createElement(u.Ya, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(u.W, {
                                type: u.Wb.H3,
                                color: u.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(u.Ya, {
                                className: "prime-offer-list__content--mobile"
                            }, t.renderSectionTitle(), t.renderOfferExperience(v.a.Narrow))
                        }, t.getOfferListOrientation = function() {
                            return t.props.listDirection || k.c.Default
                        }, t.getHiddenOfferIdsByPlacement = function(e) {
                            switch (e) {
                                case k.d.Crown:
                                    return s.b.get("prime-crown-hidden-ids", []);
                                case k.d.LootPage:
                                    return s.b.get("prime-loot-page-hidden-ids", []);
                                default:
                                    return []
                            }
                        }, t.renderOfferPlaceholders = function() {
                            for (var e = [], n = 0; n < 3; ++n) {
                                var r = a.createElement(se, {
                                    key: n,
                                    orientation: t.getOfferListOrientation()
                                });
                                e.push(r)
                            }
                            return e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.getOfferListOrientation(),
                            t = e.toLowerCase(),
                            n = Object(k.h)("prime-offer-list", e),
                            r = "prime-offer-list__content prime-offer-list__content--" + t,
                            i = this.props.listDirection === k.c.Horizontal,
                            o = this.props.listDirection === k.c.Vertical;
                        return this.shouldShowOffersSection() ? a.createElement(l.b, {
                            className: n,
                            suppressScrollX: o,
                            suppressScrollY: i
                        }, a.createElement(u.Ya, {
                            className: r,
                            alignItems: u.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 1
                            }
                        }, this.renderUpsell(), this.props.listDirection === k.c.Horizontal && this.renderDesktopOffers(), this.renderMobileOffers())) : null
                    }, t.prototype.renderUpsell = function() {
                        var e = this.props.userData;
                        if (e && !Object(k.m)(e) && !Object(k.n)(e) && !this.props.hideUpsell) return a.createElement(ce, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var r = this.getSortedOffers(),
                                i = r[r.length - 1];
                            return r.map(function(n, r) {
                                return a.createElement(u.Ya, {
                                    display: u.X.InlineBlock,
                                    key: n.id
                                }, a.createElement(ae, {
                                    externalReftag: t.props.externalReftag,
                                    key: n.id,
                                    offer: n,
                                    isLast: i.id === n.id,
                                    index: r,
                                    orientation: t.getOfferListOrientation(),
                                    displayWidthType: e,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                }))
                            })
                        }
                        return a.createElement(m, null)
                    }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                        return this.props.offersData ? this.props.offersData.primeOffers.filter(function(e) {
                            return e.tags.includes("FGWP")
                        }).map(function(e) {
                            return e.id
                        }) : []
                    }, t.prototype.getSortedOffers = function() {
                        var e = this;
                        if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                        var t = this.props.offersData.primeOffers,
                            n = this.getHiddenOfferIdsByPlacement(this.props.placement),
                            r = t.filter(function(e) {
                                return !n.includes(e.id)
                            });
                        if (this.getUserId()) {
                            var i = r.filter(function(t) {
                                    return e.isClaimedOffer(t)
                                }).sort(k.q),
                                a = this.filterOffersByOfferType(i),
                                o = r.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(k.q);
                            return this.filterOffersByOfferType(o).concat(a)
                        }
                        return this.filterOffersByOfferType(r).slice().sort(k.q)
                    }, t.prototype.isClaimedOffer = function(e) {
                        return !this.offerHasExternalURL(e) && this.offerHasEntitlement(e)
                    }, t.prototype.offerHasEntitlement = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.prototype.offerHasExternalURL = function(e) {
                        return e.content && e.content.externalURL
                    }, t.prototype.filterOffersByOfferType = function(e) {
                        var t = this.getFreeGamesWithPrimeOfferIds() || [];
                        return this.props.offerFilterType === de.a.Game ? e.filter(function(e) {
                            return t.includes(e.id)
                        }).sort(k.q) : this.props.offerFilterType === de.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(k.q) : e
                    }, t.prototype.getUserId = function() {
                        var e = this.props.userData;
                        return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                    }, Object.defineProperty(t.prototype, "shouldShowPlaceholders", {
                        get: function() {
                            var e = this.props.offersData;
                            return !e || e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "shouldReportInteractive", {
                        get: function() {
                            return (!this.isUserDataLoading || this.isUserDataError) && (!this.isOffersDataLoading || this.isOffersDataError)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataLoading", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataError", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataError", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component)),
                me = Object(o.compose)(Object(c.a)(ue, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(k.i)(k.f.DateOverride),
                                countryCode: Object(k.i)(k.f.CountryCode)
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(c.a)(B, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(d.b)("PrimeOfferList"))(pe);
            var fe = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(me);
            n.d(t, "a", function() {
                return fe
            })
        },
        "4iu0": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("W8Fi"),
                s = n("Ue10"),
                l = (n("3DuC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.hasDiscount(this.props.subscriptionProducts)) {
                            var e = this.getMessage();
                            return i.createElement(s.Fb, {
                                textAlign: s.Sb.Center,
                                className: "sub-discount-banner",
                                padding: 1,
                                color: s.O.Overlay,
                                "data-test-selector": "sub-discount-banner"
                            }, i.createElement(s.W, {
                                bold: !0
                            }, e))
                        }
                        return null
                    }, t.prototype.getMessage = function() {
                        var e = Object(o.d)(this.props.subscriptionProducts[0], this.props.isGift);
                        return this.props.isGift ? Object(a.d)("Gift a sub and get {percent} off!", {
                            percent: Object(a.f)(e / 100, "percent")
                        }, "SubDiscountBanner") : Object(a.d)("Get {percent} off the first month of any paid subscription!", {
                            percent: Object(a.f)(e / 100, "percent")
                        }, "SubDiscountBanner")
                    }, t.prototype.hasDiscount = function(e) {
                        return this.props.isGift ? Object(o.e)(e) : Object(o.g)(e)
                    }, t
                }(i.Component));
            n.d(t, !1, function() {
                return "sub-discount-banner"
            }), n.d(t, "a", function() {
                return l
            })
        },
        "5ZOr": function(e, t, n) {},
        "6UMh": function(e, t, n) {},
        "6sE4": function(e, t, n) {},
        "7CzK": function(e, t, n) {
            e.exports = n.p + "assets/bg_glitch_pattern-34ca2e369aad1ed33b57.png"
        },
        "9k8c": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer_ClaimGiftMutation"
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
                                    value: "ClaimGiftedOfferInput"
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
                                value: "claimGiftedOffer"
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
                                        value: "claimedGift"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "status"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                    end: 186
                }
            };
            n.loc.source = {
                body: "mutation PrimeOffer_ClaimGiftMutation($input: ClaimGiftedOfferInput!) {\nclaimGiftedOffer(input: $input) {\nclaimedGift {\nid\nto {\nlogin\n}\nofferID\nfrom {\nlogin\n}\nstatus\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9pSj": function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("mrSG"),
                o = n("cr+I"),
                s = n("q1tI"),
                l = n("oJmH"),
                c = n("/7QA"),
                d = n("eJ65"),
                u = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                g = n("GnwI"),
                h = n("cinR"),
                b = n("Ue10"),
                v = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(b.Ya, null, s.createElement(b.Fb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: b.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(b.W, {
                            bold: !0,
                            type: b.Wb.H6
                        }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(b.Fb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: b.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(b.Ya, {
                            fullWidth: !0,
                            display: b.X.Flex,
                            alignItems: b.f.Center
                        }, s.createElement(b.Ya, {
                            flexGrow: 1
                        }, s.createElement(b.W, {
                            bold: !0,
                            type: b.Wb.H6
                        }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(b.Ya, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: b.Sb.Center
                        }, s.createElement(b.Fb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: b.r.Base,
                            color: b.O.Base,
                            display: b.X.Flex,
                            alignItems: b.f.Center,
                            justifyContent: b.Xa.Center
                        }, s.createElement(b.W, null, e.toString())))))
                    }, t
                }(s.Component)),
                k = Object(g.b)("PrimeOfferHeader", {
                    autoReportInteractive: !0
                })(v),
                y = n("4NwI"),
                S = n("Rjl4"),
                O = n("O4UZ");
            ! function(e) {
                e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
            }(r || (r = {}));
            var C = n("QAxy"),
                N = n("SXud"),
                E = (n("l0e4"), n("yO+B")),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numOfUnseenOffers: 0,
                            updated: !1,
                            status: void 0,
                            error: void 0
                        }, t.saveCrownMenuRef = function(e) {
                            return t.crownMenuRef = e
                        }, t.toggleCrownMenu = function(e) {
                            t.crownMenuRef.toggleBalloon(e)
                        }, t.showOffersByDefault = function() {
                            var e = location.search,
                                n = o.parse(e);
                            return n && !!n.expandoffers || t.props.openByDefault
                        }, t.onToggleMenu = function(e) {
                            t.seeOffers(), e && t.setState({
                                numOfUnseenOffers: 0
                            }), Object(S.d)(!e, {
                                hasPrime: t.hasPrime(),
                                numberOfOffers: t.getNumberOfOffers()
                            }), t.refreshImpressionTracking()
                        }, t.refreshImpressionTracking = function() {
                            window.dispatchEvent(new Event("resize"))
                        }, t.getHiddenCrownOfferIds = function() {
                            return c.b.get("prime-crown-hidden-ids", [])
                        }, t.getNumberOfOffers = function() {
                            var e = t.props.offersData,
                                n = e && e.primeOffers;
                            return n && n.length || 0
                        }, t.onHover = function() {
                            Object(S.c)({
                                hasPrime: t.hasPrime()
                            })
                        }, t.hasPrime = function() {
                            return !!(t.props.userData && t.props.userData.currentUser && t.props.userData.currentUser.hasPrime)
                        }, t.registerOffersLoadedEvent = function() {
                            return t.props.latencyTracking.registerCustomEvent({
                                benchmark: 1e3,
                                group: f.a.TwitchPrime,
                                key: f.b.PrimeOfferLoaded,
                                label: f.c.Loaded,
                                start: f.d.Registration
                            })
                        }, t.getUnseenOffers = function(e) {
                            var n = e.offersData;
                            if (n && !n.loading && !n.error) {
                                var r = n.primeOffers || [];
                                t.setState({
                                    numOfUnseenOffers: r.filter(t.offerIsUnseen).length
                                })
                            }
                        }, t.offerIsUnseen = function(e) {
                            var n = Object(O.j)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(O.o)(n)
                            }
                        }, t.updateOfferStatus = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, o, s, l, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.props.userData, !(t = e && e.currentUser && e.currentUser.id)) return [2];
                                            n = this.props.offersData && this.props.offersData.primeOffers || [], i = n.map(function(e) {
                                                return {
                                                    offerID: e.id,
                                                    status: O.a.Seen
                                                }
                                            }), o = Object(m.a)({
                                                userID: t,
                                                statusChanges: i
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(o)];
                                        case 2:
                                            return s = a.sent(), (l = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && l.code ? (c = r[l.code], this.setState({
                                                updated: !1,
                                                error: c || r.UNKNOWN
                                            }), [2]) : s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.self ? (this.setState({
                                                updated: !0,
                                                error: void 0
                                            }), [3, 4]) : (this.setState({
                                                updated: !1,
                                                error: r.UNKNOWN
                                            }), [2]);
                                        case 3:
                                            return a.sent(), this.setState({
                                                updated: !1,
                                                error: r.UNKNOWN
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.renderOfferList = function() {
                            return s.createElement(b.Ya, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, s.createElement(k, {
                                numOfUnseenOffers: t.state.numOfUnseenOffers
                            }), s.createElement(y.a, {
                                placement: O.d.Crown,
                                toggleCrownMenu: t.toggleCrownMenu
                            }))
                        }, t.shouldReportInteractive = function() {
                            return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive(), this.offersLoadedEvent = this.registerOffersLoadedEvent(), this.getUnseenOffers(this.props)
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.getUnseenOffers(e);
                        var t = this.props.offersData,
                            n = e.offersData;
                        if (t && t.loading && n && !n.loading && n.primeOffers) {
                            this.props.latencyTracking.reportCustomEvent(this.offersLoadedEvent);
                            var r = n.primeOffers,
                                i = r && r.length;
                            Object(S.e)({
                                hasPrime: this.hasPrime(),
                                numberOfOffers: i || 0
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                            t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                        if (!e && !t) return null;
                        var n = {
                            align: b.ac.Center,
                            direction: b.bc.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(c.d)("New Prime Loot", "PrimeOffers") : n.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(b.Ya, {
                            className: "prime-offers",
                            position: b.kb.Relative
                        }, s.createElement(d.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(h.a, {
                            onHover: this.onHover
                        }, s.createElement(b.A, {
                            ariaLabel: Object(c.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: b.ub.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), s.createElement(b.u, {
                            direction: b.v.BottomRight,
                            size: b.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === O.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return s.createElement(b.Ya, {
                            className: "prime-offers__pill",
                            position: b.kb.Absolute
                        }, s.createElement(b.i, {
                            type: b.n.BounceIn,
                            duration: b.k.Medium,
                            timing: b.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(b.hb, {
                            label: e.toString(),
                            type: b.ib.Notification
                        })))
                    }, Object.defineProperty(t.prototype, "isUserDataLoading", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataError", {
                        get: function() {
                            var e = this.props.userData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOffersDataError", {
                        get: function() {
                            var e = this.props.offersData;
                            return e && e.error
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(s.Component),
                _ = Object(l.compose)(Object(u.a)(N, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(O.i)(O.f.DateOverride),
                                countryCode: Object(O.i)(O.f.CountryCode)
                            }
                        }
                    }
                }), Object(u.a)(E, {
                    name: "userData"
                }), Object(u.a)(C, {
                    name: "updatePrimeOfferStatus"
                }), Object(g.b)("PrimeOffers"))(D);
            var T = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(_),
                I = n("6x+I"),
                R = n("KxT4"),
                F = n("j3KY"),
                M = (n("gQ2q"), n("487o")),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            var e = t.props,
                                n = e.data,
                                r = e.latencyTracking;
                            n.loading && !n.error || r.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(), Object(S.h)()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.data,
                            n = e.blockBannerForGDPR,
                            r = !!t.currentUser && t.currentUser.hasPrime,
                            i = t.requestInfo && t.requestInfo.countryCode;
                        if (!Object(O.p)(r, i) || t.loading || n) return null;
                        var a = Object(F.e)(F.a, ""),
                            o = Object(c.d)("Twitch Prime", "BlueBar"),
                            l = s.createElement("span", null, Object(c.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            d = Object(F.e)(F.a, ""),
                            u = Object(c.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, o = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        l = s.createElement(I, {
                                            source: e.text,
                                            renderers: {
                                                Link: function(e) {
                                                    return s.createElement("a", {
                                                        href: e.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer"
                                                    }, e.children)
                                                }
                                            }
                                        });
                                        break;
                                    case "twitch.prime.bluebar.right1":
                                        d = t, u = e.text
                                }
                            }
                        }), s.createElement(h.a, {
                            onHover: S.g,
                            onClick: S.f
                        }, s.createElement(b.Fb, {
                            color: b.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: b.kb.Relative,
                            fullWidth: !0,
                            zIndex: b.jc.Above
                        }, s.createElement(b.Ya, {
                            className: "blue-bar__bar",
                            display: b.X.Flex,
                            alignItems: b.f.Center,
                            justifyContent: b.Xa.Between,
                            flexWrap: b.Ba.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(b.Ya, {
                            display: b.X.InlineFlex,
                            alignItems: b.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(b.Ya, {
                            className: "blue-bar__logo",
                            display: b.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(b.tb, {
                            asset: b.ub.Crown
                        })), s.createElement(b.W, {
                            bold: !0,
                            type: b.Wb.Span,
                            noWrap: !0,
                            fontSize: b.Ca.Size6
                        }, s.createElement(b.Qa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-test-selector": "blue-bar-left-url"
                        }, o))), s.createElement(b.W, {
                            className: "blue-bar__headline",
                            type: b.Wb.Span,
                            fontSize: b.Ca.Size6
                        }, l)), s.createElement(b.Ya, {
                            display: b.X.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(b.W, {
                            bold: !0,
                            type: b.Wb.Span,
                            noWrap: !0,
                            fontSize: b.Ca.Size6,
                            color: b.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: d,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-test-selector": "blue-bar-right-url"
                        }, u))))))
                    }, t
                }(s.Component),
                U = Object(l.compose)(Object(i.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(R.h)(e)
                    }
                }), Object(u.a)(M, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(O.i)(O.f.DateOverride)
                            }
                        }
                    }
                }), Object(g.b)("BlueBarComponent"))(w),
                j = n("z8lI");
            n.d(t, "d", function() {
                return T
            }), n.d(t, "a", function() {
                return U
            }), n.d(t, "c", function() {
                return j.a
            }), n.d(t, "f", function() {
                return O.i
            }), n.d(t, "b", function() {
                return O.c
            }), n.d(t, "e", function() {
                return O.f
            })
        },
        AXRb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
                l = n("3Bft"),
                c = n("geRD"),
                d = n("DMoW"),
                u = n("GnwI"),
                p = n("br9A"),
                m = n("9pSj"),
                f = n("O4UZ"),
                g = n("Ue10"),
                h = n("D/KL"),
                b = n("JRpg"),
                v = "subscribe-button__prime-subscribe",
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSubscribing: !1,
                            primeSubFailure: !1,
                            error: void 0
                        }, t.handleStartPrimeTrialClick = function() {
                            t.props.handleSubMenuAction({
                                action: p.a.ClickSignupForPrime
                            })
                        }, t.getErrorType = function() {
                            return t.state.error || f.b.UNABLE_TO_SPEND
                        }, t.spendPrimeCredit = function() {
                            t.setState({
                                isSubscribing: !0
                            });
                            var e = t.props,
                                n = e.data;
                            if (t.isUserDataReady(e) && n.currentUser && n.currentUser.id && n.user && n.user.id) {
                                var r = n.user.id,
                                    i = n.currentUser.id,
                                    a = Object(c.a)({
                                        broadcasterID: r,
                                        userID: i
                                    });
                                t.props.handleSubMenuAction({
                                    action: p.a.SubWithPrime
                                }), t.props.spendPrimeSubscriptionCredit(a).then(function(e) {
                                    var n = ((e.data || {}).spendSubscriptionCredit || {}).error;
                                    if (n) {
                                        var r = f.b[n.code];
                                        t.setState({
                                            isSubscribing: !1,
                                            primeSubFailure: !0,
                                            error: r || f.b.UNABLE_TO_SPEND
                                        })
                                    } else {
                                        t.setState({
                                            isSubscribing: !1,
                                            primeSubFailure: !1,
                                            error: void 0
                                        });
                                        Object(c.e)(b, {
                                            login: t.props.channelLogin
                                        }, function(e) {
                                            var t = e.user;
                                            return t && t.self && t.id && (t.self.subscriptionBenefit || (t.self.subscriptionBenefit = {
                                                __typename: "SubscriptionBenefit",
                                                id: t.id,
                                                purchasedWithPrime: !0,
                                                tier: l.a.Prime,
                                                platform: d.V.WEB,
                                                gift: {
                                                    __typename: "SubscriptionGift",
                                                    isGift: !1,
                                                    gifter: null
                                                },
                                                renewsAt: null,
                                                endsAt: null,
                                                paidUpgrade: null
                                            }), t.self.canPrimeSubscribe = !1), e
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !0,
                                        error: f.b.UNABLE_TO_SPEND
                                    })
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.state.isSubscribing) return i.createElement(g.z, r.__assign({
                            "data-test-selector": v,
                            disabled: this.state.isSubscribing,
                            icon: g.ub.Crown,
                            state: g.E.Loading
                        }, Object(g.kc)(this.props)));
                        if (this.state.primeSubFailure) {
                            var e = this.getErrorType();
                            return i.createElement(m.c, {
                                fontSize: g.Ca.Size6,
                                testTarget: "prime-sub-error",
                                errorType: e
                            })
                        }
                        if (!this.isUserDataReady(this.props)) return i.createElement(g.jb, {
                            width: 82,
                            height: 30
                        });
                        var t = this.canPrimeSubscribe(this.props),
                            n = this.canResub(this.props),
                            a = this.willPrimeSubCreditRenew(),
                            s = this.primeSubCreditRenewalDate();
                        if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                            var l = Object(o.d)("Start Your Free Trial", "PrimeSubscribe");
                            return i.createElement(g.z, r.__assign({
                                ariaLabel: l,
                                "data-test-selector": v,
                                icon: g.ub.Crown,
                                linkTo: o.a.tryPrimeURI,
                                onClick: this.handleStartPrimeTrialClick
                            }, Object(g.kc)(this.props), {
                                targetBlank: !0
                            }), l)
                        }
                        if (this.isSubscribed(this.props) && !n) {
                            var c = Object(o.d)("Subscribed", "PrimeSubscribe");
                            return i.createElement(g.z, r.__assign({
                                ariaLabel: c,
                                "data-a-target": "subscribe-with-prime-button",
                                "data-test-selector": v,
                                disabled: !0,
                                icon: g.ub.Crown
                            }, Object(g.kc)(this.props)), c)
                        }
                        if (!t) {
                            var d = Object(o.d)("Prime subscription unavailable", "PrimeSubscribe");
                            if (a && s) {
                                var u = Object(o.c)(new Date(s), {
                                    month: "long",
                                    day: "numeric"
                                });
                                d = Object(o.d)("Prime subscription available {availableDate}", {
                                    availableDate: u
                                }, "PrimeSubscribe")
                            }
                            return i.createElement(g.z, r.__assign({
                                ariaLabel: d,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: g.ub.Crown
                            }, Object(g.kc)(this.props)), d)
                        }
                        var p = n ? Object(o.d)("Resubscribe Free", "PrimeSubscribe") : Object(o.d)("Subscribe Free", "PrimeSubscribe");
                        return i.createElement(g.z, r.__assign({
                            ariaLabel: p,
                            "data-test-selector": v,
                            "data-a-target": "subscribe-with-prime-button",
                            disabled: this.state.isSubscribing,
                            icon: g.ub.Crown,
                            state: this.state.isSubscribing ? g.E.Loading : g.E.Default,
                            onClick: this.spendPrimeCredit
                        }, Object(g.kc)(this.props)), p)
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.canPrimeSubscribe = function(e) {
                        return e.data && e.data.user && e.data.user.self && e.data.user.self.canPrimeSubscribe
                    }, Object.defineProperty(t.prototype, "primeSubCreditBenefit", {
                        get: function() {
                            return this.props.data && this.props.data.user && this.props.data.user.self && this.props.data.user.self.primeSubCreditBenefit
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.willPrimeSubCreditRenew = function() {
                        return this.primeSubCreditBenefit && this.primeSubCreditBenefit.willRenew
                    }, t.prototype.primeSubCreditRenewalDate = function() {
                        return this.primeSubCreditBenefit && this.primeSubCreditBenefit.renewalDate
                    }, t.prototype.canResub = function(e) {
                        return e.data && e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && e.data.user.self.subscriptionBenefit.purchasedWithPrime && this.canPrimeSubscribe(this.props)
                    }, t.prototype.isSubscribed = function(e) {
                        var t = e.data,
                            n = t && t.user,
                            r = n && n.self;
                        return r && r.subscriptionBenefit
                    }, t
                }(i.Component),
                y = Object(a.compose)(Object(u.b)("PrimeSubscribe"), Object(s.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(s.a)(h, {
                    name: "spendPrimeSubscriptionCredit"
                }))(k)
        },
        CFPd: function(e, t, n) {},
        "D/KL": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PrimeSubscribe_SpendPrimeSubscriptionCredit"
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
                                    value: "SpendSubscriptionCreditInput"
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
                                value: "spendSubscriptionCredit"
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
                                        value: "userID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionBenefit"
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
                                                value: "purchasedWithPrime"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tier"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "platform"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "endsAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                    end: 227
                }
            };
            n.loc.source = {
                body: "mutation PrimeSubscribe_SpendPrimeSubscriptionCredit($input: SpendSubscriptionCreditInput!) {\nspendSubscriptionCredit(input: $input) {\nuserID\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nendsAt\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DqL7: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("3Bft"),
                s = n("GnwI"),
                l = n("JMwM"),
                c = n("FLOH"),
                d = n("L+W6"),
                u = n("DnOo"),
                p = n("a5fV"),
                m = n("W8Fi"),
                f = n("br9A"),
                g = n("AXRb"),
                h = n("Ue10"),
                b = (n("J5He"), "gift-subscription-button"),
                v = "subscribe-button",
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: t.props.subbedTier || ""
                        }, t.toggleActiveTab = function(e) {
                            if (e.currentTarget.parentElement) {
                                var n = e.currentTarget.parentElement.getAttribute("data-tier");
                                if (n) {
                                    var r = n.replace("subscribe-button-modal-tab-", "");
                                    t.props.handleSubMenuAction({
                                        action: f.a.ChangeTier,
                                        checkoutButtonTier: t.getPrice(t.getSubProduct(r))
                                    }), t.setState({
                                        activeTab: r
                                    })
                                }
                            }
                        }, t.getTabTitle = function() {
                            switch (t.state.activeTab) {
                                case o.a.Prime:
                                    return Object(a.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                                case o.a.Tier1:
                                    return t.props.subscriptionProducts[0].displayName;
                                case o.a.Tier2:
                                    return t.props.subscriptionProducts[1].displayName;
                                case o.a.Tier3:
                                    return t.props.subscriptionProducts[2].displayName;
                                default:
                                    return t.props.subscriptionProducts[0].displayName
                            }
                        }, t.getTierSubscribeButton = function() {
                            var e = t.getSubProduct(t.state.activeTab || ""),
                                n = t.getPrice(e);
                            if (t.props.isGift) {
                                var r = Object(a.d)("Gift A Subscription", "SubTierTabs");
                                return t.props.giftRecipient ? i.createElement(l.a, {
                                    buttonMessage: r,
                                    checkoutURL: e.url,
                                    giftingAnonymously: t.props.giftingAnonymously,
                                    giftRecipient: t.props.giftRecipient,
                                    onClick: t.reportGiftCheckoutAction,
                                    productName: e.name,
                                    purchase: n,
                                    subProductId: e.id
                                }) : i.createElement(h.z, {
                                    ariaLabel: r + " " + n,
                                    "data-test-selector": b,
                                    onClick: t.onGiftSelect,
                                    purchase: n
                                }, r)
                            }
                            return t.props.subbedTier === t.state.activeTab && t.state.activeTab === o.a.Prime ? i.createElement(g.a, {
                                "data-a-target": "subscribe-with-prime-button",
                                handleSubMenuAction: t.props.handleSubMenuAction,
                                channelLogin: t.props.subLogin
                            }) : i.createElement(u.a, {
                                "data-a-target": "subscribe-now-button",
                                "data-test-selector": v,
                                handleSubAction: t.props.handleSubMenuAction,
                                isSubbedToTier: t.props.subbedTier === t.state.activeTab,
                                productName: e.name,
                                tierPrice: n,
                                url: e.url
                            })
                        }, t.reportGiftCheckoutAction = function() {
                            t.props.handleSubMenuAction({
                                action: f.a.BuyGiftSub,
                                checkoutButtonTier: t.getPrice(t.getSubProduct(t.state.activeTab)),
                                giftRecipient: t.props.giftRecipient || null
                            })
                        }, t.onGiftSelect = function() {
                            t.props.onGiftSelect && t.props.onGiftSelect()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.subbedTier && i.createElement(h.Ya, {
                            className: "subscription-balloon-options__subbed-star",
                            display: h.X.InlineFlex,
                            margin: {
                                right: .5
                            }
                        }, i.createElement(h.tb, {
                            asset: h.ub.Star
                        }));
                        return i.createElement(h.Ya, {
                            className: "channel-header__subscription-balloon-options"
                        }, i.createElement(h.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(h.Hb, null, this.props.subbedTier === o.a.Prime ? !this.props.isGift && i.createElement(h.Ya, {
                            display: h.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(h.Ya, {
                            className: "subscription-balloon-options__prime-crown",
                            display: h.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(h.tb, {
                            asset: h.ub.Crown
                        })), i.createElement(h.Gb, {
                            active: this.state.activeTab === o.a.Prime,
                            "data-a-target": y(o.a.Prime),
                            "data-tier": y(o.a.Prime),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Prime", "SubTierTabs"))) : i.createElement(h.Ya, {
                            display: h.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === o.a.Tier1 && e, i.createElement(h.Gb, {
                            active: this.state.activeTab === o.a.Tier1,
                            "data-a-target": y(o.a.Tier1),
                            "data-tier": y(o.a.Tier1),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 1", "SubTierTabs"))), i.createElement(h.Ya, {
                            display: h.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === o.a.Tier2 && e, i.createElement(h.Gb, {
                            active: this.state.activeTab === o.a.Tier2,
                            "data-a-target": y(o.a.Tier2),
                            "data-tier": y(o.a.Tier2),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 2", "SubTierTabs"))), i.createElement(h.Ya, {
                            display: h.X.InlineFlex
                        }, this.props.subbedTier === o.a.Tier3 && e, i.createElement(h.Gb, {
                            active: this.state.activeTab === o.a.Tier3,
                            "data-a-target": y(o.a.Tier3),
                            "data-tier": y(o.a.Tier3),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 3", "SubTierTabs"))))), i.createElement(h.Ya, null, i.createElement(h.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(h.W, {
                            type: h.Wb.H5,
                            bold: !0
                        }, this.getTabTitle())), i.createElement(h.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(c.a, {
                            allSubProducts: this.props.subscriptionProducts,
                            selectedSubProduct: this.getSubProduct(this.state.activeTab) || this.props.subscriptionProducts[0]
                        })), i.createElement(d.a, {
                            isGift: this.props.isGift,
                            subscriptionProduct: this.getSubProduct(this.state.activeTab)
                        }), this.props.giftRecipient && i.createElement(h.Ya, {
                            margin: {
                                top: 1
                            }
                        }, i.createElement(h.N, {
                            checked: this.props.giftingAnonymously,
                            label: Object(a.d)("Gift Anonymously", "SubscribeTierTabs"),
                            onChange: this.props.onAnonymousGiftingSelect
                        })), i.createElement(h.Ya, {
                            margin: {
                                right: 1,
                                top: 1
                            }
                        }, this.getTierSubscribeButton())))
                    }, t.prototype.getPrice = function(e) {
                        return Object(m.g)(this.props.subscriptionProducts) || Object(m.e)(this.props.subscriptionProducts) ? Object(m.c)(e, this.props.isGift) : e.priceInfo ? Object(p.a)(Object(p.b)(e.priceInfo.total, e.priceInfo.exponent), e.priceInfo.currency) : e.price
                    }, t.prototype.getSubProduct = function(e) {
                        switch (e) {
                            case o.a.Tier1:
                                return this.props.subscriptionProducts[0];
                            case o.a.Tier2:
                                return this.props.subscriptionProducts[1];
                            case o.a.Tier3:
                                return this.props.subscriptionProducts[2];
                            default:
                                return this.props.subscriptionProducts[0]
                        }
                    }, t
                }(i.Component);

            function y(e) {
                return "subscribe-button-modal-tab-" + e
            }
            var S = Object(s.b)("SubTierTabs", {
                autoReportInteractive: !0
            })(k);
            n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, "a", function() {
                return S
            })
        },
        EmWE: function(e, t, n) {},
        EtPo: function(e, t, n) {},
        FLOH: function(e, t, n) {
            "use strict";
            var r, i = n("q1tI"),
                a = n("/7QA"),
                o = n("3Bft"),
                s = n("OpME"),
                l = n("0WFu"),
                c = n("Ue10");
            ! function(e) {
                e.BenefitMessage = "BenefitMessage", e.ExtraEmoteMessage = "ExtraEmoteMessage"
            }(r || (r = {}));
            var d = function(e) {
                var t = function(e, t) {
                    var n = [];
                    e.tier === o.a.Tier2 && n.push.apply(n, t[1].emotes);
                    e.tier === o.a.Tier3 && (n.push.apply(n, t[1].emotes), n.push.apply(n, t[2].emotes));
                    return Object(s.b)(n)
                }(e.selectedSubProduct, e.allSubProducts);
                return i.createElement(c.Ya, null, i.createElement(c.W, {
                    "data-test-selector": r.BenefitMessage
                }, function(e) {
                    if (e.isEsportChannel) return Object(a.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                        giftPrice: e.selectedSubProduct ? e.selectedSubProduct.price : ""
                    }, "SubBenefitMessage");
                    var t = e.allSubProducts[0].emotes.length;
                    if (e.selectedSubProduct.tier) {
                        var n = Object(l.b)(e.selectedSubProduct.tier);
                        if (n) return e.selectedSubProduct.hasAdFree ? t > 0 ? Object(a.d)("{emoteCount, plural,               one {Tier {tierNum} Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emote.}               other {Tier {tierNum} Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                            tierNum: n,
                            emoteCount: t
                        }, "SubBenefitMessage") : Object(a.d)("Tier {tierNum} Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, and subscription tenure badges.", {
                            tierNum: n
                        }, "SubBenefitMessage") : t > 0 ? Object(a.d)("{emoteCount, plural,               one {Tier {tierNum} Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emote.}               other {Tier {tierNum} Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                            tierNum: n,
                            emoteCount: t
                        }, "SubBenefitMessage") : Object(a.d)("Tier {tierNum} Subscriptions include chatting during Sub-Only Mode, and subscription tenure badges.", {
                            tierNum: n
                        }, "SubBenefitMessage")
                    }
                    if (e.selectedSubProduct.hasAdFree) return t > 0 ? Object(a.d)("{emoteCount, plural,           one {Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emote.}           other {Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                        emoteCount: t
                    }, "SubBenefitMessage") : Object(a.d)("Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, and subscription tenure badges.", "SubBenefitMessage");
                    if (t > 0) return Object(a.d)("{emoteCount, plural,           one {Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emote.}           other {Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                        emoteCount: t
                    }, "SubBenefitMessage");
                    return Object(a.d)("Subscriptions include chatting during Sub-Only Mode and subscription tenure badges.", "SubBenefitMessage")
                }(e)), t.length > 0 && i.createElement(c.Ya, {
                    alignItems: c.f.Center,
                    display: c.X.Flex,
                    margin: {
                        top: 1
                    }
                }, t.map(function(e) {
                    return i.createElement(c.Ya, {
                        display: c.X.InlineFlex,
                        key: e.id,
                        margin: {
                            right: .5
                        }
                    }, i.createElement("img", {
                        alt: e.displayName,
                        srcSet: e.srcSet,
                        title: e.displayName
                    }))
                }), i.createElement(c.W, {
                    bold: !0,
                    "data-test-selector": r.ExtraEmoteMessage
                }, Object(a.d)("{extraEmoteCount, plural,                 one {Plus {extraEmoteCount, number} extra channel emote}                 other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: t.length
                }, "SubBenefitMessage"))))
            };
            n.d(t, !1, function() {
                return r
            }), n.d(t, "a", function() {
                return d
            })
        },
        "FV/7": function(e, t, n) {},
        GGok: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FriendButton"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "friendButtonFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 154
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nquery FriendButton($id: ID!) {\nuser(id: $id) {\nid\n...friendButtonFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        GheN: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ViewerCardModLogsMessagesBySender"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "senderID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "cursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
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
                                        value: "channelID"
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
                                        value: "modLogs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "messagesBySender"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "senderID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "senderID"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "limit"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "50"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "order"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "DESC"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "includeMessageCount"
                                                },
                                                value: {
                                                    kind: "BooleanValue",
                                                    value: !1
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
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
                                                        value: "edges"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "node"
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
                                                                        value: "sentAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "content"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "fragments"
                                                                            },
                                                                            arguments: [],
                                                                            directives: [],
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [{
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "text"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "content"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: [],
                                                                                    selectionSet: {
                                                                                        kind: "SelectionSet",
                                                                                        selections: [{
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Emote"
                                                                                                }
                                                                                            },
                                                                                            directives: [],
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [{
                                                                                                    kind: "Field",
                                                                                                    alias: {
                                                                                                        kind: "Name",
                                                                                                        value: "emoteID"
                                                                                                    },
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
                                                                                                        value: "setID"
                                                                                                    },
                                                                                                    arguments: [],
                                                                                                    directives: []
                                                                                                }, {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "token"
                                                                                                    },
                                                                                                    arguments: [],
                                                                                                    directives: []
                                                                                                }]
                                                                                            }
                                                                                        }, {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "__typename"
                                                                                            },
                                                                                            arguments: [],
                                                                                            directives: []
                                                                                        }]
                                                                                    }
                                                                                }]
                                                                            }
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "__typename"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "sender"
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
                                                                                value: "login"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "chatColor"
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
                                                                                value: "displayBadges"
                                                                            },
                                                                            arguments: [{
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "channelID"
                                                                                },
                                                                                value: {
                                                                                    kind: "Variable",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "channelID"
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
                                                                                        value: "setID"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "version"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }]
                                                                            }
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "__typename"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }]
                                                                    }
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "__typename"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "cursor"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 510
                }
            };
            n.loc.source = {
                body: "query ViewerCardModLogsMessagesBySender($senderID: ID! $channelID: ID! $cursor: Cursor) {\nchannel: user(id: $channelID) {\nid\nmodLogs{\nmessagesBySender(senderID: $senderID limit: 50 order: DESC includeMessageCount: false cursor: $cursor) {\nedges{\nnode{\nid\nsentAt\ncontent {\ntext\nfragments {\ntext\ncontent {\n... on Emote {\nemoteID: id\nsetID\ntoken\n}\n__typename\n}\n}\n__typename\n}\nsender {\nid\nlogin\nchatColor\ndisplayName\ndisplayBadges(channelID: $channelID) {\nsetID\nversion\n}\n__typename\n}\n__typename\n}\ncursor\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        IRYN: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FriendButton_UnfriendUser"
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
                                    value: "UnfriendUserInput"
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
                                value: "unfriendUser"
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
                                        value: "user"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "friendButtonFragment"
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
                    end: 211
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nmutation FriendButton_UnfriendUser($input: UnfriendUserInput!) {\nunfriendUser(input: $input) {\nuser {\nid\n...friendButtonFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        J5He: function(e, t, n) {},
        JMwM: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("UUve"),
                l = n("GnwI"),
                c = n("Ue10"),
                d = n("k91D"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            return t.openCheckout(), t.props.onClick && t.props.onClick()
                        }, t.openCheckout = function() {
                            t.props.giftRecipient && (a.n.set(s.d, t.props.productName), a.n.set(s.e, t.props.giftRecipient), a.n.set(s.a, t.props.giftingAnonymously || !1))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                        return this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button"), i.createElement(c.z, {
                            targetBlank: !0,
                            disabled: !n,
                            onClick: this.handleClick,
                            "data-test-selector": t,
                            purchase: this.props.purchase
                        }, this.props.buttonMessage || e)
                    }, t = r.__decorate([Object(l.b)("GiftSubscribeButton", {
                        autoReportInteractive: !0
                    }), Object(o.a)(d, {
                        options: function(e) {
                            return {
                                variables: {
                                    recipientLogin: e.giftRecipient,
                                    subProductId: e.subProductId
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.giftRecipient || !e.subProductId
                        }
                    })], t)
                }(i.Component);
            n.d(t, !1, function() {
                return "gift-subscribe-button"
            }), n.d(t, !1, function() {
                return "checkout-gift-subscribe-button"
            }), n.d(t, !1, function() {
                return "esports-gift-subscribe-button"
            }), n.d(t, !1, function() {
                return "esports-checkout-gift-subscribe-button"
            }), n.d(t, "a", function() {
                return u
            })
        },
        JRpg: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeSubscribe_UserPrimeData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "login"
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
                                                value: "canPrimeSubscribe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "primeSubCreditBenefit"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "willRenew"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalDate"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                                        value: "purchasedWithPrime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tier"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "platform"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "endsAt"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgrade"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "gifter"
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
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 362
                }
            };
            n.loc.source = {
                body: "query PrimeSubscribe_UserPrimeData($login: String!) {\nuser(login: $login) {\nid\nself {\ncanPrimeSubscribe\nprimeSubCreditBenefit {\nwillRenew\nrenewalDate\n}\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JVUd: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("17x9"),
                a = n("q1tI"),
                o = n("/7QA");

            function s(e) {
                var t = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: 0,
                        width: 0
                    },
                    n = function() {
                        if (window.innerWidth) return window.innerWidth;
                        if (document.documentElement.clientWidth) return document.documentElement.clientWidth;
                        return screen.width
                    }(),
                    r = function() {
                        if (window.innerHeight) return window.innerHeight;
                        if (document.documentElement.clientHeight) return document.documentElement.clientHeight;
                        return screen.height
                    }();
                return e.bottom <= 0 || e.top > r || e.right < 0 || e.left > n ? t : (t.top = Math.max(0, e.top), t.left = Math.max(0, e.left), t.right = Math.min(e.right, n), t.bottom = Math.min(e.bottom, r), t.width = t.right - t.left, t.height = t.bottom - t.top, t)
            }

            function l(e, t) {
                return function(n) {
                    return function(l) {
                        function c() {
                            var e = null !== l && l.apply(this, arguments) || this;
                            return e.hadImpression = !1, e.logger = o.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return r.__extends(c, l), c.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                        }, c.prototype.componentWillUnmount = function() {
                            this.unregister && this.unregister()
                        }, c.prototype.render = function() {
                            var e = {
                                    impressionListener: {
                                        registerImpressionCallback: this.registerImpressionCallback
                                    }
                                },
                                i = t && t.impressionWrapperClassName,
                                o = i ? {
                                    className: i
                                } : {};
                            return a.createElement("div", r.__assign({
                                ref: this.setRef
                            }, o), a.createElement(n, r.__assign({}, this.props, e)))
                        }, c.prototype.checkVisible = function(e) {
                            return r.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return r.__generator(this, function(r) {
                                    return this.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.hadImpression = t, this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, c.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                r = this.element.getBoundingClientRect();
                            if (r.left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var i = t.percentage,
                                    a = t.pixels,
                                    o = r.bottom - r.top,
                                    l = n.bottom - n.top,
                                    c = Math.min(n.bottom - r.top, o, l);
                                if (a) {
                                    if (o >= a) return c >= a;
                                    i = 100
                                }
                                return !i || 100 * (c / o) >= i
                            }
                            return !1
                        }, c.prototype.isScrolled = function() {
                            if (!this.scrollContext) return !1;
                            var e = this.scrollContext.getScrollContent();
                            return !(!e || 0 === e.scrollTop)
                        }, c.contextTypes = {
                            registerReceiver: i.func,
                            getScrollContent: i.func
                        }, c
                    }(a.Component)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        Jl6Y: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ViewerCard"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetLogin"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                value: "targetUser"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetLogin"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bannerImageURL"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "createdAt"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "friendButtonFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "channelUser"
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
                                        value: "channelID"
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
                                        value: "login"
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
                                        value: "subscriptionProducts"
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
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emoteSetID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emotes"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "giftPromotion"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "oldPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountValue"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
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
                                                value: "banStatus"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isPermanent"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isModerator"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGlobalMod"
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
                    end: 579
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nquery ViewerCard($targetLogin: String! $channelID: ID!) {\ntargetUser: user(login: $targetLogin) {\nid\nlogin\nbannerImageURL\ndisplayName\nprofileImageURL(width: 70)\ncreatedAt\n...friendButtonFragment\n}\nchannelUser: user(id: $channelID) {\nid\nlogin\ndisplayName\nsubscriptionProducts {\nid\nname\nprice\nurl\nemoteSetID\nemotes {\nid\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\nbanStatus {\nisPermanent\n}\nisModerator\n}\n}\ncurrentUser {\nlogin\nid\nroles {\nisSiteAdmin\nisStaff\nisGlobalMod\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        JrF4: function(e, t, n) {},
        KLGS: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelBadgeSets"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                            name: {
                                kind: "Name",
                                value: "badges"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "badge"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
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
                                        value: "channelID"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcastBadges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "badge"
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
                    end: 196
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChannelBadgeSets($channelID: ID!) {\nbadges {\n...badge\n}\nchannel: user(id: $channelID) {\nid\nlogin\nbroadcastBadges {\n...badge\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = r
        },
        KbPt: function(e, t, n) {},
        "L+W6": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n("/7QA"),
                a = n("a5fV"),
                o = n("W8Fi"),
                s = n("Ue10"),
                l = (n("W5/R"), function(e) {
                    var t = e.subscriptionProduct;
                    if (void 0 === t) return r.createElement("div", null);
                    var n = Object(o.e)([e.subscriptionProduct]),
                        l = Object(o.g)([e.subscriptionProduct]),
                        c = Object(o.f)([e.subscriptionProduct]),
                        d = t.price;
                    t.priceInfo && (d = Object(a.a)(Object(a.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                    var u = e.isOneTime ? Object(i.d)("{price} / One-time purchase", {
                        price: d
                    }, "SubDiscountPriceLabel") : Object(i.d)("{price} / Month", {
                        price: d
                    }, "SubDiscountPriceLabel");
                    if (o.e || o.g || o.f) {
                        var p = void 0;
                        if (e.isGift && n ? p = Object(i.d)("{price} (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(i.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && c ? p = Object(i.d)("{price} / First Month", {
                                price: Object(o.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : l && (p = Object(i.d)("{price} for the first month (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(i.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return r.createElement(s.Ya, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, r.createElement(s.W, {
                            className: "sub-discount-price-label__original-price",
                            color: s.O.Alt2,
                            decoration: s.Ub.Strikethrough
                        }, u), r.createElement(s.W, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return r.createElement(s.Ya, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, r.createElement(s.W, null, u))
                });
            n.d(t, !1, function() {
                return "sub-discount-price-label__discounted"
            }), n.d(t, !1, function() {
                return "sub-discount-price-label__non-discounted"
            }), n.d(t, "a", function() {
                return l
            })
        },
        "LFw/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ViewerCardModDrawer"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetID"
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
                                value: "targetUser"
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
                                        value: "targetID"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "channelUser"
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
                                        value: "channelID"
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
                                        value: "modLogsRoleAccess"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "role"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "MODERATOR"
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "accessLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                                value: "isModerator"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "modLogs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "modLogs"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "modLogs"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ModLogs"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "bans"
                            },
                            name: {
                                kind: "Name",
                                value: "targetedModActions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "targetID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "actionType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "BAN_USER"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "edges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cursor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "node"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "targetedModAction"
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
                                        value: "pageInfo"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasNextPage"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasPreviousPage"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "timeouts"
                            },
                            name: {
                                kind: "Name",
                                value: "targetedModActions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "targetID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "actionType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "TIMEOUT_USER"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "edges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cursor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "node"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "targetedModAction"
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
                                        value: "pageInfo"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasNextPage"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasPreviousPage"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "targetedModAction"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ModLogsTargetedModActionsEntry"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "action"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "timestamp"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "channel"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "target"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "details"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "targetedModActionDetails"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "targetedModActionDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "TargetedModActionDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "durationSeconds"
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
                                value: "reason"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 970
                }
            };
            n.loc.source = {
                body: "query ViewerCardModDrawer( $channelID: ID! $targetID: ID!) {\ntargetUser: user(id: $targetID) {\nid\n}\nchannelUser: user(id: $channelID) {\nid\nmodLogsRoleAccess(role: MODERATOR) {\naccessLevel\n}\nself {\nisModerator\n}\nmodLogs {\n...modLogs\n}\n}\ncurrentUser {\nlogin\nid\n}\n}\n# do this to get ModLogsFragment typescript interface definition\nfragment modLogs on ModLogs {\nbans: targetedModActions(targetID:$targetID actionType:BAN_USER) {\nedges {\ncursor\nnode {\n...targetedModAction\n}\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\ntimeouts: targetedModActions(targetID:$targetID actionType:TIMEOUT_USER) {\nedges {\ncursor\nnode {\n...targetedModAction\n}\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\n}\nfragment targetedModAction on ModLogsTargetedModActionsEntry {\naction\ntimestamp\nchannel {\nid\nlogin\n}\ntarget {\nid\nlogin\n}\nuser {\nid\nlogin\n}\ndetails {\n...targetedModActionDetails\n}\n}\nfragment targetedModActionDetails on TargetedModActionDetails {\nbannedAt\ndurationSeconds\nexpiresAt\nreason\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MHUA: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("8/mp"),
                s = n("HAa/"),
                l = n("yZCp"),
                c = n("uIkQ"),
                d = n("cys1"),
                u = n("QVaV"),
                p = n("oK83"),
                m = (n("6UMh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleUsernameClick = function(e) {
                            t.props.onUsernameClick(t.props.sender.login, p.a.room_message, t.props.roomID, e.currentTarget.getBoundingClientRect().bottom)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.sender,
                            t = [i.createElement("span", {
                                key: "username-display",
                                className: "message-author__display-name",
                                "data-test-selector": "message-username",
                                style: {
                                    color: e.chatColor
                                }
                            }, e.displayName)];
                        return Object(u.b)(e.displayName) || t.push(i.createElement("span", {
                            key: "username-login",
                            style: {
                                color: e.chatColor
                            },
                            className: "message-author__intl-login",
                            "data-test-selector": "message-username-canonical"
                        }, " (" + e.login + ")")), i.createElement("button", {
                            onClick: this.handleUsernameClick,
                            className: "message-author__username"
                        }, i.createElement("span", {
                            key: e.id + "-messageauthor"
                        }, t))
                    }, t
                }(i.Component)),
                f = n("Ue10"),
                g = (n("kK7i"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBanUser = function() {
                            t.props.sendMessage("/ban " + t.props.message.sender.login)
                        }, t.onTimeoutUser = function() {
                            t.props.sendMessage("/timeout " + t.props.message.sender.login)
                        }, t.onUnbanUser = function() {
                            t.props.sendMessage("/unban " + t.props.message.sender.login)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.message.deletedAt,
                            t = this.onBanUser,
                            n = f.ub.Ban,
                            r = Object(a.d)("Ban", "RoomMessageModIcons");
                        return e && (t = this.onUnbanUser, n = f.ub.FollowCheck, r = Object(a.d)("Unban", "RoomMessageModIcons")), i.createElement(f.Ya, {
                            display: f.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            className: "room-message-mod-icons"
                        }, i.createElement(f.Ra, {
                            color: f.O.Alt2,
                            display: f.X.InlineFlex
                        }, i.createElement("button", {
                            className: "room-message-mod-icons__mod-icon",
                            "data-test-selector": "default-action-button",
                            onClick: t
                        }, i.createElement(f.Zb, {
                            label: r
                        }, i.createElement(f.tb, {
                            width: 20,
                            height: 20,
                            type: f.vb.Inherit,
                            asset: n
                        })))), i.createElement(f.Ra, {
                            color: f.O.Alt2,
                            display: f.X.InlineFlex
                        }, i.createElement("button", {
                            className: "room-message-mod-icons__mod-icon",
                            "data-test-selector": "timeout-action-button",
                            onClick: this.onTimeoutUser
                        }, i.createElement(f.Zb, {
                            label: Object(a.d)("Timeout", "RoomMessageModIcons")
                        }, i.createElement(f.tb, {
                            width: 20,
                            height: 20,
                            type: f.vb.Inherit,
                            asset: f.ub.Timeout
                        })))))
                    }, t
                }(i.Component)),
                h = n("VS9Q"),
                b = (n("FV/7"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            shouldShowDeletedBody: !1
                        }, t.showDeleted = function(e) {
                            e && e.preventDefault(), t.setState({
                                shouldShowDeletedBody: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                        return e.showModerationIcons !== this.props.showModerationIcons || (e.showTimestamps !== this.props.showTimestamps || (t.shouldShowDeletedBody !== this.state.shouldShowDeletedBody || (e.hasModPermissions !== this.props.hasModPermissions || e.message.deletedAt !== this.props.message.deletedAt)))
                    }, t.prototype.render = function() {
                        var e = this.props.message.sender.displayBadges,
                            t = {},
                            n = ": ";
                        return this.props.message.content.text.startsWith(h.a) && (t = {
                            color: this.props.message.sender.chatColor
                        }, n = " "), i.createElement(f.Ya, {
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, i.createElement("div", {
                            id: this.props.message.id,
                            className: "room-message",
                            style: t
                        }, this.renderTimestamp(), this.renderModerationIcons(), i.createElement(c.b, {
                            badgeSets: this.props.badgeSets,
                            badgesToRender: e
                        }), i.createElement(m, {
                            roomID: this.props.roomID,
                            messageID: this.props.message.id,
                            sender: this.props.message.sender,
                            onUsernameClick: this.props.onUsernameClick
                        }), i.createElement("span", {
                            key: "separator"
                        }, n), this.renderMessageBody()))
                    }, t.prototype.renderMessageBody = function() {
                        if (!this.props.message.deletedAt || this.state.shouldShowDeletedBody) return Object(d.f)(Object(h.f)(this.props.message, this.props.bitsConfig, this.props.currentUserLogin), {
                            forceClipsNetworkRequest: !0
                        });
                        var e = Object(a.d)("message deleted", "RoomMessage"),
                            t = this.props.hasModPermissions ? i.createElement(f.U, {
                                onClick: this.showDeleted,
                                "data-test-selector": "show-deleted"
                            }, "<" + e + ">") : "<" + e + ">";
                        return i.createElement("span", {
                            key: "deleted",
                            className: "room-message--deleted",
                            "data-test-selector": "deleted-message"
                        }, t)
                    }, t.prototype.renderTimestamp = function() {
                        return this.props.showTimestamps ? i.createElement("span", {
                            key: "timestamp",
                            className: "room-message__timestamp",
                            "data-test-selector": "room-message-timestamp"
                        }, Object(d.a)(new Date(this.props.message.sentAt))) : null
                    }, t.prototype.renderModerationIcons = function() {
                        return this.props.showModerationIcons && this.props.hasModPermissions ? i.createElement(g, {
                            channelID: this.props.channelID,
                            message: this.props.message,
                            sendMessage: this.props.sendMessage
                        }) : null
                    }, t
                }(i.Component)),
                v = (n("JrF4"), function(e) {
                    return i.createElement(f.Fb, {
                        className: "room-system-message",
                        color: f.O.Alt2,
                        key: e.message.id,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, i.createElement(f.W, null, e.message.text))
                }),
                k = n("aU+G"),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        switch (this.props.message.kind) {
                            case k.a.SystemMessageEvent:
                                return i.createElement(v, {
                                    message: this.props.message
                                });
                            case k.a.RoomMessageEvent:
                                return i.createElement(b, {
                                    showModerationIcons: this.props.showModerationIcons,
                                    showTimestamps: this.props.showTimestamps,
                                    badgeSets: this.props.badgeSets,
                                    bitsConfig: this.props.bitsConfig,
                                    channelID: this.props.channelID,
                                    currentUserLogin: this.props.currentUserLogin,
                                    roomID: this.props.roomID,
                                    hasModPermissions: this.props.hasModPermissions,
                                    message: this.props.message,
                                    sendMessage: this.props.sendMessage,
                                    onUsernameClick: this.props.onUsernameClick
                                });
                            case k.a.CheerbombEvent:
                                return i.createElement(l.a, {
                                    channelID: this.props.channelID,
                                    event: this.props.message
                                });
                            default:
                                return null
                        }
                    }, t
                }(i.Component),
                S = n("+djN"),
                O = (n("CFPd"), ["scroll", "wheel", "mousewheel", "DOMMouseScroll", "keyup", "mousedown"]),
                C = 10,
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            disableInfiniteTrigger: !0,
                            isAutoScrolling: !0
                        }, t.saveScrollRef = function(e) {
                            return t.scroll = e
                        }, t.handleScrollEvent = function(e) {
                            if (t.scroll && t.scroll.scrollContent && (e.which > 0 || "mousedown" === e.type || "mousewheel" === e.type || "wheel" === e.type)) {
                                var n = t.scroll.scrollContent.scrollHeight - t.scroll.scrollContent.scrollTop - t.scroll.scrollContent.offsetHeight;
                                n <= C && !t.state.isAutoScrolling ? t.setState({
                                    isAutoScrolling: !0
                                }) : n > C && t.state.isAutoScrolling && t.setState({
                                    isAutoScrolling: !1
                                })
                            }
                        }, t.handleClickMoreMessages = function() {
                            t.setState({
                                isAutoScrolling: !0
                            }, t.scrollToBottom), t.props.loadNewest()
                        }, t.loadOlder = function() {
                            return t.isLoadingOlder = !0, t.props.loadOlder()
                        }, t.loadNewer = function() {
                            return t.isLoadingOlder = !1, t.props.loadNewer()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.setState({
                            disableInfiniteTrigger: !1
                        }), this.scroll && this.scroll.scrollContent && (this.scrollToBottom(), O.forEach(function(t) {
                            e.scroll.scrollContent && e.scroll.scrollContent.addEventListener(t, e.handleScrollEvent)
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        var e = this;
                        O.forEach(function(t) {
                            e.scroll && e.scroll.scrollContent && e.scroll.scrollContent.removeEventListener(t, e.handleScrollEvent)
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.isBulkLoad && this.isLoadingOlder && this.scroll && this.scroll.scrollContent && (this.prevScrollTop = this.scroll.scrollContent.scrollTop), e.isBulkLoad && !this.isLoadingOlder && this.scroll && this.scroll.scrollContent) {
                            var t = this.props.messages[this.props.messages.length - 1] && this.props.messages[this.props.messages.length - 1].id;
                            if (t && document.getElementById(t)) {
                                var n = document.getElementById(t).offsetTop;
                                this.prevScrollTop = this.scroll.scrollContent.scrollTop - n
                            } else this.prevScrollTop = this.scroll.scrollContent.scrollTop
                        }
                    }, t.prototype.componentDidUpdate = function(e) {
                        if (e.messages !== this.props.messages && (this.state.isAutoScrolling && this.scrollToBottom(), this.props.isBulkLoad && e.messages && this.props.messages))
                            if (this.isLoadingOlder) {
                                var t = e.messages[0] && e.messages[0].id,
                                    n = this.props.messages[0] && this.props.messages[0].id;
                                if (t && n && t !== n) {
                                    var r = document.getElementById(t);
                                    if (r && this.scroll && this.scroll.scrollContent) {
                                        var i = r.offsetTop;
                                        this.scroll.scrollContent.scrollTop = this.prevScrollTop + i
                                    }
                                }
                            } else {
                                var a = e.messages[e.messages.length - 1] && e.messages[e.messages.length - 1].id,
                                    o = this.props.messages[this.props.messages.length - 1] && this.props.messages[this.props.messages.length - 1].id;
                                if (a && o && a !== o) {
                                    var s = document.getElementById(a);
                                    if (s && this.scroll && this.scroll.scrollContent) {
                                        i = s.offsetTop;
                                        this.scroll.scrollContent.scrollTop = this.prevScrollTop + i
                                    }
                                }
                            }
                    }, t.prototype.render = function() {
                        var e = this.getRoomLines();
                        return i.createElement(f.Ya, {
                            className: "room-list",
                            display: f.X.Flex,
                            flexDirection: f.Aa.Column,
                            flexWrap: f.Ba.NoWrap,
                            overflow: f.db.Hidden,
                            flexGrow: 1
                        }, i.createElement(o.b, {
                            className: "room-list__lines",
                            scrollRef: this.saveScrollRef
                        }, i.createElement(f.Ya, {
                            flexGrow: 1,
                            fullHeight: !0,
                            overflow: f.db.Hidden,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(o.a, {
                            "data-test-selector": "backward-infinite-scroll",
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadOlder,
                            pixelThreshold: 400,
                            orientation: s.b.Down,
                            contentLength: e.length,
                            forceLoadMoreContent: this.props.hasOlderLeft,
                            requestCap: 2
                        }), e, i.createElement(o.a, {
                            "data-test-selector": "forward-infinite-scroll",
                            enabled: !this.state.disableInfiniteTrigger,
                            loadMore: this.loadNewer,
                            pixelThreshold: 400,
                            orientation: s.b.Up,
                            contentLength: e.length,
                            forceLoadMoreContent: this.props.hasNewerLeft,
                            requestCap: 2
                        }))), i.createElement(f.Ya, {
                            className: "room-list__more-messages-placeholder",
                            position: f.kb.Relative,
                            margin: {
                                x: 2
                            }
                        }, this.moreMessages()))
                    }, t.prototype.moreMessages = function() {
                        return this.state.isAutoScrolling ? null : i.createElement(f.Fb, {
                            alignItems: f.f.Center,
                            attachBottom: !0,
                            display: f.X.Flex,
                            fullWidth: !0,
                            background: f.r.Overlay,
                            justifyContent: f.Xa.Center,
                            position: f.kb.Absolute,
                            borderRadius: f.x.Medium
                        }, i.createElement(f.z, {
                            onClick: this.handleClickMoreMessages,
                            overlay: !0,
                            type: f.F.Text,
                            fullWidth: !0
                        }, Object(a.d)("More messages below.", "RoomList")))
                    }, t.prototype.scrollToBottom = function() {
                        this.scroll.scrollToBottom()
                    }, t.prototype.getRoomLines = function() {
                        var e = this,
                            t = this.props.messages;
                        return 0 === t.length && (t = [Object(S.f)(Object(a.d)("Welcome to the chat room!", "RoomList"))]), t.map(function(t) {
                            return i.createElement(y, {
                                key: t.id,
                                badgeSets: e.props.badgeSets,
                                bitsConfig: e.props.bitsConfig,
                                channelID: e.props.channelID,
                                currentUserLogin: e.props.currentUserLogin,
                                roomID: e.props.roomID,
                                hasModPermissions: e.props.hasModPermissions,
                                message: t,
                                showModerationIcons: e.props.showModerationIcons,
                                showTimestamps: e.props.showTimestamps,
                                sendMessage: e.props.sendMessage,
                                onUsernameClick: e.props.onUsernameClick
                            })
                        })
                    }, t
                }(i.Component);
            n.d(t, !1, function() {
                return "backward-infinite-scroll"
            }), n.d(t, !1, function() {
                return "forward-infinite-scroll"
            }), n.d(t, "a", function() {
                return N
            })
        },
        MPK0: function(e, t, n) {},
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, i = n("/7QA"),
                a = n("2xye");

            function o(e) {
                i.p.tracking.track(a.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(r || (r = {}))
        },
        O4UZ: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return u
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "h", function() {
                return b
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "o", function() {
                return k
            }), n.d(t, "q", function() {
                return y
            }), n.d(t, "p", function() {
                return O
            }), n.d(t, "f", function() {
                return g
            }), n.d(t, "i", function() {
                return C
            }), n.d(t, "n", function() {
                return N
            }), n.d(t, "m", function() {
                return E
            }), n.d(t, "k", function() {
                return D
            });
            var r, i, a = n("TSYQ"),
                o = n("cr+I"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("ht6z"),
                d = n("Ue10"),
                u = {
                    DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                    CLAIM_CODE: "CLAIM_CODE",
                    EXTERNAL_OFFER: "EXTERNAL_OFFER"
                };
            ! function(e) {
                e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
            }(r || (r = {})),
            function(e) {
                e.Crown = "Crown", e.LootPage = "LootPage"
            }(i || (i = {}));
            var p, m = {
                    UNKNOWN_ERROR: "UNKNOWN_ERROR",
                    OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                    UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                    TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
                },
                f = function(e) {
                    switch (e || m.UNKNOWN_ERROR) {
                        case m.OFFER_ALREADY_CLAIMED:
                            return Object(l.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click <x:link>here to learn more</x:link>.", {
                                "x:link": function(e) {
                                    return s.createElement(d.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        targetBlank: !0,
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, e)
                                }
                            }, "PrimeError");
                        case m.UNABLE_TO_SPEND:
                        case m.TOO_MANY_RECENT_SPENDS:
                        default:
                            return Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError")
                    }
                };
            ! function(e) {
                e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
            }(p || (p = {}));
            var g, h = function(e) {
                    return e === r.Vertical
                },
                b = function(e, t) {
                    var n = t === r.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                v = function() {
                    return S("seenOffers")
                },
                k = function(e) {
                    l.m.set("seenOffers", e)
                },
                y = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                S = function(e) {
                    return l.m.get(e, [])
                },
                O = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(c.a)(t))
                };
            ! function(e) {
                e.DateOverride = "dateOverride", e.CountryCode = "countryCode"
            }(g || (g = {}));
            var C = function(e) {
                    var t = location.search,
                        n = o.parse(t);
                    return n && n[e] || void 0
                },
                N = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                E = function(e) {
                    return e && e.loading
                },
                D = function(e) {
                    return _().includes(e)
                },
                _ = function() {
                    return l.b.get("prime_gift_experiment_offer_ids", [])
                }
        },
        OeOm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOfferList_PrimeOffers"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                value: "primeOffers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "imageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "claimInstructions"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "deliveryMethod"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priority"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "content"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "game"
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "externalURL"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "publisher"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "categories"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimData"
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
                                                value: "gifts"
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
                                                        value: "to"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "from"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "offerID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "offerConnection"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "status"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 411
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ntags\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\ngifts {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferID\nofferConnection {\nstatus\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Oy4H: function(e, t, n) {},
        PCo6: function(e, t, n) {},
        PsVi: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 169
                }
            };
            n.loc.source = {
                body: "query PrimeOffer_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QAxy: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "updatePrimeOfferStatus"
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
                                    value: "UpdatePrimeOfferStatusInput"
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
                                value: "updatePrimeOfferStatus"
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
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimData"
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
                                        }]
                                    }
                                }, {
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
                    end: 171
                }
            };
            n.loc.source = {
                body: "mutation updatePrimeOfferStatus($input: UpdatePrimeOfferStatusInput!) {\nupdatePrimeOfferStatus(input: $input) {\nself {\nhasEntitlement\nclaimData\nstatus\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QK1T: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            });
            var r = /Android/i,
                i = /chrome/i,
                a = /webOS/i,
                o = /iPhone/i,
                s = /iPad/i,
                l = /iPod/i,
                c = /BlackBerry/i,
                d = /Windows Phone/i,
                u = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || o.test(e) || s.test(e) || l.test(e) || c.test(e) || d.test(e) || u.test(e)
            }

            function m(e) {
                return r.test(e)
            }

            function f(e) {
                return i.test(e)
            }
        },
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(d.Ab, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, a.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(a.Component),
                m = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return f
            }), n.d(t, "b", function() {
                return g
            });
            var f;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(f || (f = {}));
            var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(f.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === f.Success ? a.createElement("div", null, a.createElement(d.z, {
                        onClick: this.props.onClose
                    }, a.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), a.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, a.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case f.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case f.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case f.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case f.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== f.Success,
                        "reporting__success-container": this.props.submitStatus === f.Success
                    });
                    return a.createElement(d.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== f.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        RfIv: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
                }(r || (r = {}))
        },
        Rjl4: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "q", function() {
                return g
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "l", function() {
                return b
            }), n.d(t, "i", function() {
                return v
            }), n.d(t, "m", function() {
                return k
            }), n.d(t, "k", function() {
                return y
            }), n.d(t, "j", function() {
                return S
            }), n.d(t, "p", function() {
                return O
            }), n.d(t, "n", function() {
                return E
            }), n.d(t, "o", function() {
                return D
            }), n.d(t, "h", function() {
                return _
            }), n.d(t, "g", function() {
                return T
            }), n.d(t, "f", function() {
                return I
            });
            var r, i, a, o, s, l, c = n("/7QA"),
                d = n("2xye"),
                u = n("O4UZ");

            function p(e) {
                c.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: r.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                c.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? r.Open : r.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                c.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: r.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function g(e) {
                N(e, i.Click, o.StartYourFreeTrial)
            }

            function h(e) {
                N(e, i.Hover, o.StartYourFreeTrial)
            }

            function b(e, t) {
                N(t, i.Click, e ? o.MoreInfo : o.CloseInfo)
            }

            function v(e, t) {
                C(e, i.Click, t)
            }

            function k(e) {
                N(e, i.Hover, o.MoreInfo)
            }

            function y(e) {
                N(e, i.Hover, o.CloseInfo)
            }

            function S(e, t) {
                C(e, i.Hover, t)
            }

            function O(e) {
                N(e, i.Impression, o.Offer)
            }

            function C(e, t, n) {
                var r;
                switch (n) {
                    case u.e.CLAIM_CODE:
                        r = o.GetCode;
                        break;
                    case u.e.EXTERNAL_OFFER:
                        r = o.LearnMore;
                        break;
                    case u.e.DIRECT_ENTITLEMENT:
                        r = o.ClaimOffer
                }
                r && N(e, t, r)
            }

            function N(e, t, n) {
                c.o.track(d.SpadeEventType.PrimeOfferInteraction, {
                    offer_id: e.offerID,
                    external_url: e.externalURL,
                    index: e.index,
                    element: n,
                    action: t,
                    user_agent: navigator.userAgent,
                    has_prime: e.hasPrime,
                    display_width_type: e.displayWidthType
                })
            }

            function E(e) {
                c.o.track(d.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function D(e) {
                c.o.track(d.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function _() {
                R(a.Impression)
            }

            function T() {
                R(a.Hover)
            }

            function I() {
                R(a.Click)
            }

            function R(e) {
                c.o.track(d.SpadeEventType.PrimeBlueBarInteraction, {
                    client_time: Date.now(),
                    action: e
                })
            }! function(e) {
                e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
            }(r || (r = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(i || (i = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(a || (a = {})),
            function(e) {
                e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code", e.Offer = "offer"
            }(o || (o = {})),
            function(e) {
                e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
            }(s || (s = {})),
            function(e) {
                e.Wide = "wide", e.Narrow = "narrow"
            }(l || (l = {}))
        },
        SStD: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "claimPrimeOffer"
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
                                    value: "ClaimPrimeOfferInput"
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
                                value: "claimPrimeOffer"
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
                                                value: "claimData"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                    end: 143
                }
            };
            n.loc.source = {
                body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SXud: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOffers_PrimeOfferIds"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                value: "primeOffers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                                                value: "status"
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
                    end: 173
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\nself {\nstatus\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Sb+K": function(e, t, n) {},
        UFVY: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeRedeem_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 170
                }
            };
            n.loc.source = {
                body: "query PrimeRedeem_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "W5/R": function(e, t, n) {},
        WGf9: function(e, t, n) {},
        Wu8b: function(e, t, n) {},
        Xcb2: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FriendButton_CancelFriendRequest"
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
                                    value: "CancelFriendRequestInput"
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
                                value: "cancelFriendRequest"
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
                                        value: "user"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "friendButtonFragment"
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
                    end: 232
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nmutation FriendButton_CancelFriendRequest($input: CancelFriendRequestInput!) {\ncancelFriendRequest(input: $input) {\nuser {\nid\n...friendButtonFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        aECu: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FriendButton_AcceptFriendRequest"
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
                                    value: "AcceptFriendRequestInput"
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
                                value: "acceptFriendRequest"
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
                                        value: "user"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "friendButtonFragment"
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
                    end: 232
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nmutation FriendButton_AcceptFriendRequest($input: AcceptFriendRequestInput!) {\nacceptFriendRequest(input: $input) {\nuser {\nid\n...friendButtonFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        "aU+G": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.RoomMessageEvent = 0] = "RoomMessageEvent", e[e.ModerationEvent = 1] = "ModerationEvent", e[e.SystemMessageEvent = 2] = "SystemMessageEvent", e[e.DeletedMessageEvent = 3] = "DeletedMessageEvent", e[e.CheerbombEvent = 4] = "CheerbombEvent"
                }(r || (r = {}))
        },
        cinR: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                a = n("q1tI");
            ! function(e) {
                e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
            }(r || (r = {}));
            var o = 200,
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.hoverTimer = 0, t.onMouseEnter = function(e) {
                            t.clearTimeout(), t.hoverTimer = setTimeout(function() {
                                t.props.onHover && t.props.onHover(e)
                            }, o)
                        }, t.onMouseLeave = function() {
                            t.clearTimeout()
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e), t.clearTimeout()
                        }, t.clearTimeout = function() {
                            t.hoverTimer && (clearTimeout(t.hoverTimer), t.hoverTimer = 0)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.clearTimeout()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            "data-test-selector": r.PrimeTrackingButtonWrapper,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onClick: this.onClick
                        }, this.props.children)
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return r
            }), n.d(t, "a", function() {
                return s
            })
        },
        csdq: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FriendButton_RejectFriendRequest"
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
                                    value: "RejectFriendRequestInput"
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
                                value: "rejectFriendRequest"
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
                                        value: "user"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "friendButtonFragment"
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
                    end: 232
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nmutation FriendButton_RejectFriendRequest($input: RejectFriendRequestInput!) {\nrejectFriendRequest(input: $input) {\nuser {\nid\n...friendButtonFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        cx1G: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeClaimButton_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 175
                }
            };
            n.loc.source = {
                body: "query PrimeClaimButton_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, i, a = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                f = n("O3Y9"),
                g = n("f00E"),
                h = n("D7An"),
                b = n("DMoW"),
                v = n("2xye"),
                k = n("GnwI"),
                y = n("QVaV"),
                S = n("Ue10"),
                O = (n("MPK0"), "report-wizard-block"),
                C = "report-wizard-unblock",
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(S.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": O
                            }, o.createElement(S.Ya, {
                                display: S.X.Flex,
                                alignItems: S.f.Center
                            }, o.createElement(S.tb, {
                                type: S.vb.Brand,
                                asset: S.ub.Ban
                            }), o.createElement(S.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(S.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: S.X.Flex,
                                alignItems: S.f.Center
                            }, o.createElement(S.tb, {
                                type: S.vb.Success,
                                asset: S.ub.FollowCheck
                            }), o.createElement(S.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(S.W, {
                                className: "block-user__success",
                                type: S.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(S.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": C
                            }, o.createElement(S.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(y.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(S.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(S.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(S.Fb, {
                            color: S.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(S.fc, {
                            baseFontSize: S.Ca.Size6
                        }, o.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(S.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(i || (i = {}));
            var E, D = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("Threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("Committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("Threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("Being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    harassment: function() {
                        return Object(c.d)("Hate speech, harassment, or abuse", "ReportModalWizard")
                    },
                    moreOptions: function() {
                        return Object(c.d)("Give me more options...", "ReportModalWizard")
                    },
                    scam: function() {
                        return Object(c.d)("Attempts to scam other community members", "ReportModalWizard")
                    }
                },
                _ = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: i.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: i.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: i.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: i.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: i.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: i.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: i.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: i.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: i.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: i.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: i.Link
                    },
                    messaging_general: {
                        getTitle: D.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: D.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(c.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: r.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(c.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: D.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: D.scam,
                        value: "scam",
                        reportReason: r.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(c.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(c.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    impersonating: {
                        getTitle: function() {
                            return Object(c.d)("Impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: r.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    itsInappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("Inappropriate or obscene content", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Revealing someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: r.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: r.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(c.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: r.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: D.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(c.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: r.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(c.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: D.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: D.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: r.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: r.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: r.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(c.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: r.Prohibited
                    },
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
                        reportReason: r.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: r.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: r.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: r.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: r.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: r.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("Evading a block, ban, or suspension", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: r.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: r.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: r.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: D.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: D.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: D.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: b.O.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: D.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: D.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(c.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: r.Other
                    },
                    otherContent: {
                        getTitle: function(e) {
                            return Object(c.d)("In {username}'s other content (profile, emotes, etc.)", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "other content"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("The profile content (avatar, panels, etc.)", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    profile_more_options: {
                        getTitle: D.moreOptions,
                        value: "profile more options"
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(c.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(c.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(c.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(c.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(c.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(c.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(c.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(c.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(c.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(c.d)("Inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: D.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: D.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: D.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: D.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: r.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: r.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_links: {
                        getTitle: function() {
                            return Object(c.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: D.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                i = n.value;
                            t.props.onChangeText(r, i)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(S.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(S.Ya, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(S.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case i.Text:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case i.Link:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(S.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(S.Ya, {
                                        display: S.X.Flex
                                    }, o.createElement(S.Ya, {
                                        display: S.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(S.tb, {
                                        asset: S.ub.Document
                                    })), t.getTitle())));
                                case i.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!r || !!r && 0 === r.trim().length);
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(S.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(S.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case i.MultipleChoice:
                                default:
                                    return o.createElement(S.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(S.qb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(o.Component),
                I = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(E || (E = {}));
            var R, F, M, w = {
                    contentGeneral: function() {
                        return Object(c.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(c.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(c.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(c.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(c.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                U = {
                    report: function(e) {
                        return Object(c.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(c.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(c.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportWhisper: function(e) {
                        return Object(c.d)("Report {username}'s Whisper", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfileOrOtherContent: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportEmotesBadges: function(e) {
                        return Object(c.d)("Report {username}'s Emotes or Badges", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(c.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(c.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(c.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(c.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                j = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: U.thanks,
                    type: E.Info,
                    value: "end card"
                },
                x = {
                    socialMedia: a.__assign({}, j, {
                        items: [_.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, j, {
                        items: [_.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: U.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [_.endLink_DMCA, _.endLink_trademark, _.endLink_devAgreement],
                        type: E.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: U.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [_.endLink_selfharm],
                        type: E.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: U.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [_.endLink_eventCoC],
                        value: "twitch event end",
                        type: E.Info
                    }
                },
                P = {
                    getTitle: U.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [_.video, _.whisper, _.chat, _.moderating, _.otherContent, _.report_username, _.report_other],
                    type: E.MultipleChoice,
                    value: "content type"
                },
                A = {
                    identifyUser: {
                        getTitle: U.reportVideo,
                        getLabel: w.identifyUser,
                        items: [_.video_streamer, _.video_someoneElse, _.video_chatSomeone],
                        type: E.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: U.reportVideo,
                        getLabel: w.contentGeneral,
                        items: [_.violence, _.abusive, _.video_inactive, _.video_labeling, _.inappropriateContent, _.selfharm, _.video_more_options],
                        type: E.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: U.reportVideo,
                        getLabel: w.contentGeneral,
                        items: [_.revealPersonalInfo, _.cheating, _.impersonating, _.underage, _.bitsViolation, _.report_ip, _.other],
                        type: E.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                L = {
                    content: {
                        getTitle: U.reportMessage,
                        getLabel: w.contentGeneral,
                        items: [_.report_username, _.violence, _.abusive, _.evasion, _.spam, _.selfharm, _.chat_more_options],
                        type: E.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: U.reportMessage,
                        getLabel: w.contentGeneral,
                        items: [_.emotes_break_guidelines, _.inappropriateContent, _.revealPersonalInfo, _.maliciousRaid, _.underage, _.bitsViolation, _.other],
                        type: E.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = {
                    general: {
                        getTitle: U.reportWhisper,
                        getLabel: w.contentGeneral,
                        items: [_.report_username, _.violence, _.abusive, _.spam, _.selfharm, _.whisper_more_options],
                        type: E.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: U.reportWhisper,
                        getLabel: w.contentGeneral,
                        items: [_.emotes_break_guidelines, _.evasion, _.inappropriateContent, _.revealPersonalInfo, _.underage, _.other],
                        type: E.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                W = {
                    profile: {
                        getTitle: U.reportProfile,
                        getLabel: w.contentGeneral,
                        items: [_.revealPersonalInfo, _.violence, _.abusive, _.inappropriateContent, _.selfharm, _.profile_more_options],
                        type: E.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: U.reportProfile,
                        getLabel: w.contentGeneral,
                        items: [_.scam, _.evasion, _.impersonation, _.underage, _.report_ip, _.other],
                        type: E.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: U.reportEmotesBadges,
                        getLabel: w.content,
                        items: [_.hateSpeechSymbols, _.harassing, _.itsInappropriateContent, _.automod, _.report_ip, _.other],
                        type: E.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: U.reportProfileOrOtherContent,
                        getLabel: w.content,
                        items: [_.report_username, _.profile, _.report_emotes, _.inappropriateExtension, _.compromisedAccount, _.violateDevAgreement],
                        type: E.MultipleChoice,
                        value: "profile content location"
                    }
                },
                G = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: w.identifyUser,
                    items: [_.report_channelOwner, _.report_member],
                    value: "room report user",
                    type: E.MultipleChoice
                },
                z = {
                    getTitle: U.tellUsMore,
                    items: [_.input_description],
                    type: E.Confirm,
                    value: "tell us more"
                },
                V = {
                    banEvasion: a.__assign({}, z, {
                        items: [_.input_usernames, _.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, z, {
                        items: [_.input_link, _.input_connection, _.input_description],
                        nextCard: x.socialMedia,
                        value: "social media tell us more"
                    })
                },
                q = {
                    content: {
                        getTitle: U.reportAbusive,
                        getLabel: w.relevantStatements,
                        items: [_.hateSpeech, _.harassment, _.abusiveViolence, _.commitingViolence, _.swatting, _.personalInfo],
                        type: E.MultipleChoice,
                        value: "abuse type"
                    }
                },
                Y = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [_.location_onTwitch, _.location_anotherSite, _.location_TwitchEvent],
                        type: E.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: w.contentGeneral,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [_.external_incitingRaids, _.external_threatening, _.external_harassment],
                        type: E.MultipleChoice,
                        nextCard: V.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: a.__assign({}, q.content, {
                        items: [_.hateSpeech, _.harassment, _.external_abusiveViolence, _.external_commitingViolence, _.swatting, _.personalInfo],
                        nextCard: V.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: w.contentGeneral,
                    items: [_.spam_bot, _.spam_scam, _.spam_links, _.spam_repeated],
                    type: E.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: w.relevantStatements,
                    items: [_.inappropriate_game, _.gory, _.sexuallyViolentChildAnimal, _.pornographic, _.suggestive, _.nudity, _.other],
                    type: E.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [_.evasion_chat, _.evasion_sitewide, _.evasion_messaging],
                    type: E.MultipleChoice,
                    nextCard: V.banEvasion
                },
                $ = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [_.impersonation_me, _.impersonation_brand, _.impersonation_other],
                    type: E.MultipleChoice,
                    value: "impersonation type"
                },
                K = P,
                Z = z,
                J = j,
                ee = {
                    video: A.content,
                    "video more options": A.moreOptions,
                    whisper: B.general,
                    "whisper more options": B.moreOptions,
                    chat: L.content,
                    "chat more options": L.moreOptions,
                    "other content": W.general,
                    profile: W.profile,
                    "profile more options": W.profileMoreOptions,
                    room: G,
                    "somewhere else": Y.identifyLocation,
                    streamer: A.content,
                    "someone else in video": A.content,
                    "someone in chat": L.content,
                    general_video: A.moreOptions,
                    general_messaging: L.content,
                    general_profile: W.profile,
                    "channel owner": W.general,
                    "community member": L.content,
                    "on twitch": W.general,
                    "another site": Y.externalSite,
                    "twitch event": x.twitchEvent,
                    "brigading/raids": V.socialMedia,
                    "hateful/harassing": Y.external_abusive,
                    "external site; scam": V.socialMedia,
                    "ban evasion": Q,
                    spam: H,
                    hateful: q.content,
                    impersonation: $,
                    abusive: q.content,
                    "inappropriate content": X,
                    "inappropriate emotes": W.emotes,
                    "intellectual property": x.legal,
                    "violating developer agreement": x.legal
                },
                te = {
                    selfharm: x.selfharm,
                    harm: x.violence,
                    other: J
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: W.general,
                    COMMUNITY_REPORT: W.general,
                    CHAT_REPORT: L.content,
                    CLIP_REPORT: A.content,
                    EVENT_REPORT: W.general,
                    EXTENSION_REPORT: W.general,
                    LIVE_UP_REPORT: W.general,
                    ROOM_REPORT: G,
                    WHISPER_REPORT: B.general,
                    VOD_COMMENT_REPORT: L.content
                },
                re = "report-wizard-back",
                ie = "report-wizard-close",
                ae = "report-wizard-next",
                oe = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ne[t.props.reportContentType] || K,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return o.createElement(S.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(S.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ie,
                                i = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case E.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = ae, i = !t.state.currentSelection;
                                    break;
                                case E.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = oe
                            }
                            return o.createElement(S.Ya, null, a, o.createElement(S.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, o.createElement(S.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(S.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: S.X.InlineBlock
                            }, o.createElement(S.z, {
                                type: S.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": re
                            }, o.createElement(S.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, Object(c.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(c.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(c.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(M.Finish, t.state.currentCard.value, t.getChoiceIndex())
                            }), t.props.onClose()
                        }, t.getChoiceIndex = function() {
                            var e = 0;
                            return t.state.currentCard && t.state.currentCard.items && (e = t.state.currentCard.items.findIndex(function(e) {
                                return t.state.currentSelection === e
                            }) + 1), e >= 1 ? e : void 0
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || Z;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = l.type === E.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: d ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: a,
                                    currentSelection: i || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(F.Next, e.value, s)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== i.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, o = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case I.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case I.a.Success:
                                                    r = J, te[t] && (r = te[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), i = this.getChoiceIndex(), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(F.Submit, void 0, i)
                                                    });
                                                    break;
                                                case I.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case I.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(I.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, o, s = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, i = this.getChoiceIndex(), o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return s.trackNavigation(F.Back, e.value, i)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var r = t.state.userTextInput;
                            r[e] = n, t.setState({
                                userTextInput: r
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var r = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: r
                                })
                            }
                        }, t.trackNavigation = function(e, n, r) {
                            t.props.trackAction(e, n, t.state.currentCard.value, r)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(M.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === E.Info && this.state.currentCard.blockPrompt ? o.createElement(N, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(S.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === E.Info ? null : this.renderPrimer();
                        return o.createElement(S.Fb, {
                            className: "reporting-wizard",
                            display: S.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: S.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(S.W, {
                            bold: !0,
                            fontSize: S.Ca.Size4
                        }, this.getTitle()), n, o.createElement(S.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(T, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === I.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return F
                }), n.d(t, "a", function() {
                    return M
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(R || (R = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(F || (F = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(M || (M = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, i, o, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = r === b.O.WHISPER_REPORT ? r : this.props.reportContext.contentType, i = b.O[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: i,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: I.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: I.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(R.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: I.a.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(f.b)({
                            context: f.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(F.Open, void 0, e) : n.trackAction(R.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t, r) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(F.Close, t, void 0, r, e) : n.trackAction(R.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i, a) {
                        c.p.tracking.track(v.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === I.a.Success,
                            modal_type: "wizard_v2",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: a,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r,
                            choice_index: i
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(v.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === I.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(g.a)();
                    var r = c.p.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: I.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return o.createElement(S.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(S.W, {
                        fontSize: S.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(S.jb, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(S.ab, null) : o.createElement(se, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(I.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(S.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(S.W, {
                        fontSize: S.Ca.Size5
                    }, Object(c.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component);
            var ue = Object(l.compose)(Object(d.a)(le, {
                name: "reportUser"
            }), Object(d.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(k.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        "ee/9": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ViewerCardModLogsMessageCount"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "senderID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                        value: "channelID"
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
                                        value: "modLogs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "messagesBySender"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "senderID"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "senderID"
                                                    }
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "limit"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "1"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "includeMessageCount"
                                                },
                                                value: {
                                                    kind: "BooleanValue",
                                                    value: !0
                                                }
                                            }],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "messageCount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 209
                }
            };
            n.loc.source = {
                body: "query ViewerCardModLogsMessageCount($senderID: ID! $channelID: ID!) {\nchannel: user(id: $channelID) {\nid\nmodLogs{\nmessagesBySender(senderID: $senderID limit: 1 includeMessageCount: true) {\nmessageCount\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        fbdC: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                l = n("q1tI"),
                c = n("/7QA"),
                d = n("cZKs"),
                u = n("Ue10");
            ! function(e) {
                e.Message = "confirmation-modal__message", e.ConfirmButton = "confirmation-modal__confirm-button"
            }(r || (r = {}));
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCancelClick = function() {
                        t.props.closeModal()
                    }, t.renderConfirmButton = function() {
                        return l.cloneElement(t.props.confirmButton, {
                            onClick: t.handleConfirmClick,
                            "data-test-selector": r.ConfirmButton
                        })
                    }, t.handleConfirmClick = function() {
                        t.props.closeModal(), t.props.onConfirmClick()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u.Fb, {
                        background: u.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column
                    }, l.createElement(u.Ya, {
                        "data-test-selector": r.Message
                    }, this.props.message), l.createElement(u.Ya, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row,
                        justifyContent: u.Xa.Center,
                        padding: {
                            top: 2
                        }
                    }, l.createElement(u.Ya, {
                        padding: {
                            right: .5
                        }
                    }, l.createElement(u.z, {
                        type: u.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(c.d)("Cancel", "SettingsConfirmationModal"))), l.createElement(u.Ya, {
                        padding: {
                            left: .5
                        }
                    }, this.renderConfirmButton())), l.createElement(d.a, null))
                }, t
            }(l.Component);
            var m = Object(i.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    closeModal: o.c
                }, e)
            })(p);
            n.d(t, "a", function() {
                return m
            }), n.d(t, !1, function() {})
        },
        g7ZD: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "friendButtonFragment"
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
                                        value: "friendship"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "__typename"
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
                    end: 148
                }
            };
            n.loc.source = {
                body: "# Queries the fields necessary to render the FriendButton component.\nfragment friendButtonFragment on User {\nid\nself {\nfriendship {\n__typename\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gIsd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportReasons"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "content"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ReportContentType"
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
                                value: "reportReasons"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "content"
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
                                        value: "text"
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gQ2q: function(e, t, n) {},
        heM0: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FriendButton_CreateFriendRequest"
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
                                    value: "CreateFriendRequestInput"
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
                                value: "createFriendRequest"
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
                                        value: "user"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "friendButtonFragment"
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
                    end: 232
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/friend-button/queries/friend-button-fragment.gql"\nmutation FriendButton_CreateFriendRequest($input: CreateFriendRequestInput!) {\ncreateFriendRequest(input: $input) {\nuser {\nid\n...friendButtonFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("g7ZD").definitions)), e.exports = r
        },
        iuxt: function(e, t, n) {},
        j3KY: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "e", function() {
                return l
            });
            var r = "sm_tw_tup_ntp_t_all",
                i = "sm_tw_thp_blue_t_all",
                a = "sm_w_tup_ntp_t_c",
                o = "sm_om_tpltp",
                s = n("/7QA").k.withCategory("PrimeUtilsLogger");

            function l(e, t) {
                return function(e, t, n) {
                    var r = "";
                    try {
                        r = btoa(n)
                    } catch (e) {
                        s.error(e, "Could not decode location pathname substring for redirect")
                    }
                    return r ? e + "?ref_=" + t + "&redirectRoute=" + r : e + "?ref_=" + t
                }("https://twitch.amazon.com/prime/country", e, t)
            }
        },
        k91D: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GiftSubscribeButton_Gift_Eligibility"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recipientLogin"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "subProductId"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
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
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "recipientLogin"
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
                                                value: "canGift"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "product"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subProductId"
                                                    }
                                                }
                                            }],
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
                    end: 171
                }
            };
            n.loc.source = {
                body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String $subProductId: String!) {\nuser(login: $recipientLogin) {\nid\nself {\ncanGift(product: $subProductId)\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kK7i: function(e, t, n) {},
        l0e4: function(e, t, n) {},
        lZZ2: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("fbdC"),
                c = n("BhFH"),
                d = n("QVaV"),
                u = n("aCAx"),
                p = n("Ue10");

            function m(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.showBlockModal = function(t) {
                            return e.props.showConfirmationModal({
                                confirmButton: e.renderBlockButton(),
                                onConfirmClick: function() {
                                    e.props.blockUserMutation(t.userID, t.reason, t.context, t.currentUserData), t.onBlock && t.onBlock()
                                },
                                message: e.renderMessage(t.login, t.displayName)
                            })
                        }, e
                    }
                    return r.__extends(n, t), n.prototype.render = function() {
                        return i.createElement(e, r.__assign({}, this.props, {
                            showBlockModal: this.showBlockModal
                        }))
                    }, n.prototype.renderBlockButton = function() {
                        return i.createElement(p.z, {
                            type: p.F.Alert
                        }, Object(s.d)("Block", "BlockModal"))
                    }, n.prototype.renderMessage = function(e, t) {
                        var n = Object(d.a)(e, t, !0);
                        return i.createElement(i.Fragment, null, i.createElement(p.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            textAlign: p.Sb.Center
                        }, i.createElement(p.W, {
                            bold: !0,
                            type: p.Wb.H4
                        }, Object(s.d)("Block {displayName}?", {
                            displayName: n
                        }, "BlockModal"))), i.createElement(p.Fb, {
                            color: p.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(p.fc, {
                            baseFontSize: p.Ca.Size6
                        }, i.createElement("p", null, Object(s.d)("Blocking {displayName} will:", {
                            displayName: n
                        }, "BlockModal")), i.createElement("ul", null, i.createElement("li", null, Object(s.d)("Prevent them from sending you whispers", "BlockModal")), i.createElement("li", null, Object(s.d)("Prevent them from hosting you", "BlockModal")), i.createElement("li", null, Object(s.d)("Prevent them from adding you as a friend", "BlockModal")), i.createElement("li", null, Object(s.d)("Filter their messages out of chats you don’t moderate", "BlockModal"))))))
                    }, n
                }(i.Component)
            }
            var f = Object(o.compose)(Object(c.a)(), Object(a.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showConfirmationModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(u.d)(l.a, t)
                    }
                }, e)
            }), m);
            n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return f
            })
        },
        oj5W: function(e, t, n) {},
        q3Qz: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i = n("mrSG"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("ZS2+"),
                l = n("UUve"),
                c = n("1/iK"),
                d = n("aCAx"),
                u = n("kRBY"),
                p = n("/HY+"),
                m = n("q1tI"),
                f = n("oJmH"),
                g = n("/7QA"),
                h = n("7CzK"),
                b = n("rqzT"),
                v = n("yR8l"),
                k = n("tIid"),
                y = n("DMoW"),
                S = n("3GF+"),
                O = n("TApp"),
                C = n("iyGE"),
                N = n("a2UF"),
                E = n("HzXE"),
                D = n("2EzP"),
                _ = n("AREq"),
                T = n("Av0x"),
                I = n("GnwI"),
                R = n("Ue10"),
                F = 600;
            ! function(e) {
                e.BanButton = "ban-button", e.UnbanButton = "unban-button", e.TimeoutButton = "timeout-button", e.UntimeoutButton = "untimeout-button"
            }(r || (r = {}));
            var M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBanClick = function() {
                        t.attemptBanAction(Object(g.d)("Unable to ban user.", "ViewerCardModActions"))
                    }, t.onTimeoutClick = function() {
                        t.attemptBanAction(Object(g.d)("Unable to timeout user.", "ViewerCardModActions"), F)
                    }, t.onUnbanClick = function() {
                        t.attemptUnbanAction(Object(g.d)("Unable to unban user.", "ViewerCardModActions"))
                    }, t.onUntimeoutClick = function() {
                        t.attemptUnbanAction(Object(g.d)("Unable to untimeout user.", "ViewerCardModActions"))
                    }, t.attemptBanAction = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.props.confirmModerationAction && !this.props.confirmModerationAction()) return [3, 4];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.banUserMutation(this.props.userLogin, n)];
                                    case 2:
                                        return (t = r.sent()) || this.surfaceError(e), t.banUserFromChatRoom && t.banUserFromChatRoom.error && this.surfaceError(Object(_.a)(this.props.userLogin, t.banUserFromChatRoom.error.code, !!n)), [3, 4];
                                    case 3:
                                        return r.sent(), this.surfaceError(e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.attemptUnbanAction = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.props.confirmModerationAction && !this.props.confirmModerationAction()) return [3, 4];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.unbanUserMutation(this.props.userLogin)];
                                    case 2:
                                        return (t = n.sent()) || this.surfaceError(e), t.unbanUserFromChatRoom && t.unbanUserFromChatRoom.error && this.surfaceError(Object(T.a)(this.props.userLogin, t.unbanUserFromChatRoom.error.code)), [3, 4];
                                    case 3:
                                        return n.sent(), this.surfaceError(e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.surfaceError = function(e) {
                        t.props.messageHandlerAPI && t.props.messageHandlerAPI.handleMessage(Object(O.a)(e))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return m.createElement(R.Ya, {
                        display: R.X.InlineFlex
                    }, this.getContent())
                }, t.prototype.getContent = function() {
                    return this.props.data.loading || this.props.data.error ? [this.renderBanAction(!0), this.renderTimeoutAction(!0)] : this.props.data.chatRoomBanStatus ? this.props.data.chatRoomBanStatus.isPermanent ? [this.renderUnbanAction(), this.renderTimeoutAction(!0)] : [this.renderBanAction(), this.renderUntimeoutAction()] : [this.renderBanAction(), this.renderTimeoutAction()]
                }, t.prototype.renderTimeoutAction = function(e) {
                    void 0 === e && (e = !1);
                    var t = Object(g.d)("Timeout User", "ViewerCardModActions");
                    return m.createElement(R.Ya, {
                        key: "Timeout",
                        padding: {
                            right: 1
                        }
                    }, m.createElement(R.Zb, {
                        label: t,
                        direction: R.bc.Top,
                        align: R.ac.Left,
                        offsetX: "20%"
                    }, m.createElement(R.A, {
                        ariaLabel: t,
                        disabled: e,
                        icon: R.ub.Timeout,
                        onClick: this.onTimeoutClick,
                        "data-test-selector": r.TimeoutButton
                    })))
                }, t.prototype.renderUntimeoutAction = function() {
                    var e = Object(g.d)("Untimeout User", "ViewerCardModActions");
                    return m.createElement(R.Ya, {
                        key: "Untimeout",
                        padding: {
                            right: 1
                        }
                    }, m.createElement(R.Zb, {
                        label: e,
                        direction: R.bc.Top,
                        align: R.ac.Left,
                        offsetX: "20%"
                    }, m.createElement(R.A, {
                        ariaLabel: e,
                        icon: R.ub.FollowCheck,
                        onClick: this.onUntimeoutClick,
                        "data-test-selector": r.UntimeoutButton
                    })))
                }, t.prototype.renderBanAction = function(e) {
                    void 0 === e && (e = !1);
                    var t = Object(g.d)("Ban User", "ViewerCardModActions");
                    return m.createElement(R.Ya, {
                        key: "Ban",
                        padding: {
                            right: 1
                        }
                    }, m.createElement(R.Zb, {
                        label: t,
                        direction: R.bc.Top,
                        align: R.ac.Left,
                        offsetX: "20%"
                    }, m.createElement(R.A, {
                        ariaLabel: t,
                        disabled: e,
                        icon: R.ub.Ban,
                        onClick: this.onBanClick,
                        "data-test-selector": r.BanButton
                    })))
                }, t.prototype.renderUnbanAction = function() {
                    var e = Object(g.d)("Unban User", "ViewerCardModActions");
                    return m.createElement(R.Ya, {
                        key: "Unban",
                        padding: {
                            right: 1
                        }
                    }, m.createElement(R.Zb, {
                        label: e,
                        direction: R.bc.Top,
                        align: R.ac.Left,
                        offsetX: "20%"
                    }, m.createElement(R.A, {
                        ariaLabel: e,
                        icon: R.ub.FollowCheck,
                        onClick: this.onUnbanClick,
                        "data-test-selector": r.UnbanButton
                    })))
                }, t
            }(m.Component);

            function w(e) {
                return {
                    channelID: e.channelID
                }
            }
            var U, j = Object(f.compose)(Object(I.b)("ViewerCardModActions"), Object(v.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: e.userID,
                                channelID: e.channelID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(C.a)(w), Object(N.a)(w), D.a)(M),
                x = n("TSYQ"),
                P = (n("s6vn"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            e.preventDefault(), t.props.onClick(t.props.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = x("viewer-card-mod-drawer-tab", {
                            "viewer-card-mod-drawer-tab--active": this.props.isActive
                        });
                        return m.createElement(R.Ya, {
                            "data-test-selector": "viewer-card-mod-drawer-tab",
                            className: e,
                            display: R.X.Flex,
                            flexGrow: 1
                        }, m.createElement(R.Qa, {
                            flexGrow: 1,
                            flexDirection: R.Aa.Column,
                            textAlign: R.Sb.Left
                        }, m.createElement(R.Va, {
                            blurAfterClick: !0,
                            replace: !0,
                            type: R.Wa.Alpha,
                            "data-action": this.props.value,
                            onClick: this.onClick
                        }, m.createElement(R.Ya, {
                            display: R.X.Flex,
                            flexGrow: 1,
                            flexDirection: R.Aa.Column,
                            padding: .5,
                            ellipsis: !0
                        }, m.createElement(R.W, {
                            className: "viewer-card-mod-drawer-tab__title",
                            type: R.Wb.H3
                        }, m.createElement(R.W, {
                            bold: !0,
                            color: R.O.Link
                        }, this.props.count), m.createElement(R.W, null, this.props.label))))))
                    }, t
                }(m.Component)),
                A = Object(o.compose)(Object(I.b)("ViewerCardModDrawerTab"))(P),
                L = n("uIkQ"),
                B = n("XmgI"),
                W = n("MHUA"),
                G = n("+djN"),
                z = n("KLGS"),
                V = n("GheN");
            n("EmWE");
            ! function(e) {
                e.NoMessages = "no-messages", e.Loading = "loading", e.Error = "error", e.MessageList = "message-list"
            }(U || (U = {}));
            var q, Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            cursor: null,
                            messages: [],
                            loading: !1,
                            hasMoreLeft: !0
                        }, t.initialLoad = null, t.loadMore = function() {
                            return t.props.loading || t.state.loading || !t.state.hasMoreLeft ? Promise.resolve() : new Promise(function(e) {
                                t.setState({
                                    loading: !0
                                }, e)
                            }).then(function() {
                                return t.props.loadMore({
                                    senderID: t.props.senderID,
                                    channelID: t.props.channelID,
                                    cursor: t.state.cursor
                                })
                            }).then(function(e) {
                                t.setState({
                                    messages: e.messages.concat(t.state.messages),
                                    cursor: e.cursor,
                                    loading: !1,
                                    hasMoreLeft: !(!e.cursor || e.cursor === t.state.cursor)
                                })
                            }).then(function() {
                                return Promise.resolve()
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        this.props.loading || this.initialLoad || (this.initialLoad = this.loadMore())
                    }, t.prototype.render = function() {
                        if (this.props.error) return m.createElement(R.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: R.Sb.Center,
                            padding: 1,
                            "data-test-selector": U.Error
                        }, m.createElement(R.tb, {
                            asset: R.ub.DeadGlitch,
                            width: 30,
                            height: 30
                        }));
                        if (this.props.loading || !this.initialLoad || this.state.loading && 0 === this.state.messages.length) return m.createElement(R.ab, {
                            delay: 0,
                            fillContent: !0,
                            size: R.Db.Large,
                            "data-test-selector": U.Loading
                        });
                        if (0 === this.state.messages.length) return m.createElement(R.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: R.Sb.Center,
                            padding: 1,
                            "data-test-selector": U.NoMessages
                        }, Object(g.d)("This user hasn't chat in this channel", "ViewerCardModLogsMessagesBySender"));
                        var e = function() {
                            return Promise.resolve()
                        };
                        return m.createElement(R.Fb, {
                            className: "messages-by-sender",
                            background: R.r.Base,
                            fullWidth: !0,
                            "data-test-selector": U.MessageList
                        }, m.createElement(W.a, {
                            badgeSets: this.props.badgeSets,
                            bitsConfig: B.a,
                            channelID: this.props.channelID,
                            currentUserLogin: "",
                            roomID: "",
                            hasModPermissions: !1,
                            isBulkLoad: !0,
                            loadOlder: this.loadMore,
                            loadNewer: e,
                            messages: this.state.messages,
                            hasOlderLeft: this.state.hasMoreLeft,
                            hasNewerLeft: !1,
                            showModerationIcons: !1,
                            showTimestamps: !0,
                            sendMessage: e,
                            onUsernameClick: function(e, t, n, r) {},
                            loadNewest: e
                        }))
                    }, t
                }(m.Component),
                H = Object(o.compose)(Object(v.a)(V, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: i.__assign({}, e)
                        }
                    },
                    props: function(e) {
                        var t = !(!e.data || !e.data.loading),
                            n = !(!e.data || !e.data.error),
                            r = null;
                        return n || t ? {
                            loadMore: r,
                            loading: t,
                            error: n
                        } : (e.data && (r = function(t) {
                            return e.data.fetchMore({
                                query: V,
                                variables: t,
                                updateQuery: function(e) {
                                    return e
                                }
                            }).then(function(e) {
                                var t = new Array,
                                    n = null;
                                return e.data.channel && e.data.channel.modLogs && e.data.channel.modLogs.messagesBySender && e.data.channel.modLogs.messagesBySender.edges.forEach(function(e) {
                                    var r = Object(G.c)(e.node);
                                    n = e.cursor || n, t.unshift(r)
                                }), {
                                    messages: t,
                                    cursor: n
                                }
                            })
                        }), {
                            loadMore: r
                        })
                    }
                }), Object(v.a)(z, {
                    options: function(e) {
                        return {
                            variables: i.__assign({}, e)
                        }
                    },
                    props: function(e) {
                        var t = new L.c([]);
                        if (e.data) {
                            var n = e.data,
                                r = n.badges,
                                i = n.channel;
                            r && i && i.broadcastBadges && i.login && (t = new L.c(r, i.broadcastBadges, i.login))
                        }
                        return {
                            badgeSets: t
                        }
                    }
                }))(Y),
                X = n("ee/9"),
                Q = n("LFw/");
            ! function(e) {
                e[e.Messages = 0] = "Messages", e[e.Timeouts = 1] = "Timeouts", e[e.Bans = 2] = "Bans", e[e.ModComments = 3] = "ModComments"
            }(q || (q = {}));
            var $, K = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onTabChange = function(e) {
                            e === t.state.currentPage ? t.setState({
                                currentPage: void 0
                            }) : t.setState({
                                currentPage: e
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data.channelUser || !this.props.data.currentUser || !this.props.data.targetUser) return null;
                        var e = this.props.data.channelUser.modLogsRoleAccess && this.props.data.channelUser.modLogsRoleAccess.accessLevel === y.C.WRITE,
                            t = this.props.data.channelUser.id === this.props.data.currentUser.id;
                        return (e || t) && this.props.data.channelUser.modLogs ? m.createElement(R.Ya, {
                            fullWidth: !0,
                            "data-test-selector": "viewer-card-mod-drawer"
                        }, this.renderTabs(), void 0 !== this.state.currentPage && m.createElement(R.Fb, {
                            "data-test-selector": "viewer-card-mod-drawer-page",
                            background: R.r.Base
                        }, this.renderPage())) : null
                    }, t.prototype.renderPage = function() {
                        var e = this.props.data.targetUser.id;
                        switch (this.state.currentPage) {
                            case q.Messages:
                                return m.createElement(H, {
                                    key: e,
                                    channelID: this.props.channelID,
                                    senderID: e
                                });
                            case q.ModComments:
                                return this.renderModComments();
                            default:
                                return m.createElement(R.Ya, {
                                    padding: 1
                                })
                        }
                    }, t.prototype.renderModComments = function() {
                        return m.createElement(R.Ya, null, Object(g.d)("Comments", "ViewerCardModLogs"))
                    }, t.prototype.renderTabs = function() {
                        return m.createElement(R.Fb, {
                            fullWidth: !0,
                            display: R.X.Flex,
                            padding: {
                                top: .5,
                                x: 1
                            },
                            className: "viewer-card-mod-drawer-tabs"
                        }, m.createElement(A, {
                            count: this.getMessageCountString(),
                            label: Object(g.d)("Messages", "ViewerCardModLogs"),
                            isActive: this.state.currentPage === q.Messages,
                            onClick: this.onTabChange,
                            value: q.Messages
                        }), m.createElement(A, {
                            count: this.getTimeoutCount(),
                            label: Object(g.d)("Timeouts", "ViewerCardModLogs"),
                            isActive: this.state.currentPage === q.Timeouts,
                            onClick: this.onTabChange,
                            value: q.Timeouts
                        }), m.createElement(A, {
                            count: this.getChannelBanCount(),
                            label: Object(g.d)("Bans", "ViewerCardModLogs"),
                            isActive: this.state.currentPage === q.Bans,
                            onClick: this.onTabChange,
                            value: q.Bans
                        }), m.createElement(A, {
                            count: "1",
                            label: Object(g.d)("Mod Comments", "ViewerCardModLogs"),
                            isActive: this.state.currentPage === q.ModComments,
                            onClick: this.onTabChange,
                            value: q.ModComments
                        }))
                    }, t.prototype.getTimeoutCount = function() {
                        if (this.props.data.loading || this.props.data.error) return "-";
                        var e = this.props.data.channelUser && this.props.data.channelUser.modLogs,
                            t = e && e.timeouts && e.timeouts.edges || [],
                            n = e && e.timeouts && e.timeouts.pageInfo && e.timeouts.pageInfo.hasNextPage;
                        return t.length >= 99 && n ? "99+" : "" + t.length
                    }, t.prototype.getChannelBanCount = function() {
                        if (this.props.data.loading || this.props.data.error) return "-";
                        var e = this.props.data.channelUser && this.props.data.channelUser.modLogs,
                            t = e && e.bans && e.bans.edges || [],
                            n = e && e.bans && e.bans.pageInfo && e.bans.pageInfo.hasNextPage;
                        return t.length >= 99 && n ? "99+" : "" + t.length
                    }, t.prototype.getMessageCountString = function() {
                        if (!this.props.messageCountData || this.props.messageCountData.loading || this.props.messageCountData.error) return "-";
                        if (!(this.props.messageCountData.channel && this.props.messageCountData.channel.modLogs && this.props.messageCountData.channel.modLogs.messagesBySender && this.props.messageCountData.channel.modLogs.messagesBySender.messageCount)) return "0";
                        var e = this.props.messageCountData.channel.modLogs.messagesBySender.messageCount;
                        return e >= 1e3 ? "999+" : "" + e
                    }, t
                }(m.Component),
                Z = Object(o.compose)(Object(I.b)("ViewerCardModDrawer"), Object(v.a)(Q, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID,
                                targetID: e.targetID
                            }
                        }
                    }
                }), Object(v.a)(X, {
                    name: "messageCountData",
                    options: function(e) {
                        return {
                            variables: {
                                senderID: e.data.targetUser.id,
                                channelID: e.channelID,
                                includeMessageCount: !0
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.data && e.data.targetUser && e.data.targetUser.id)
                    }
                }))(K),
                J = n("eJ65"),
                ee = n("iS14"),
                te = n("O3Y9"),
                ne = n("TvOw"),
                re = n("lZZ2"),
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isIgnored: !1
                        }, t.blockUser = function() {
                            t.props.currentUserData && t.props.showBlockModal({
                                context: y.e.CHAT,
                                currentUserData: t.props.currentUserData,
                                displayName: t.props.targetDisplayName,
                                login: t.props.targetLogin,
                                onBlock: t.onBlock,
                                reason: ne.a.Other,
                                userID: t.props.targetUserID
                            })
                        }, t.onBlock = function() {
                            t.setState({
                                isIgnored: !0
                            }), t.props.currentUserData && t.props.currentUserData.login && Object(te.b)({
                                context: te.a.ViewerCard,
                                targetUserLogin: t.props.targetLogin,
                                currentUserLogin: t.props.currentUserData.login
                            })
                        }, t.unblockUser = function() {
                            t.props.currentUserData && (t.props.unblockUserMutation(t.props.targetUserID, t.props.currentUserData), t.setState({
                                isIgnored: !1
                            }))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return m.createElement(J.a, {
                            key: "MoreOptionsButton"
                        }, m.createElement(R.A, {
                            ariaLabel: Object(g.d)("More options", "ViewerCardMoreOptions"),
                            icon: R.ub.More,
                            "data-a-target": "viewer-card-more-button"
                        }), m.createElement(R.u, {
                            size: R.w.Small,
                            direction: R.v.BottomRight,
                            "data-a-target": "viewer-card-more-balloon"
                        }, m.createElement(R.Ya, {
                            padding: .5
                        }, this.renderBlockAction(), m.createElement(R.Va, {
                            borderRadius: R.x.Medium,
                            onClick: this.props.handleReportUserClick,
                            "data-a-target": "viewer-card-report-button"
                        }, m.createElement(R.Ya, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(g.d)("Report {user}", {
                            user: this.props.targetDisplayName
                        }, "ViewerCardMoreOptions"))))))
                    }, t.prototype.renderBlockAction = function() {
                        if (!this.props.currentUserData) return null;
                        if (this.state.isIgnored) {
                            var e = Object(g.d)("Unblock {user}", {
                                user: this.props.targetDisplayName
                            }, "ViewerCardMoreOptions");
                            return m.createElement(R.Va, {
                                borderRadius: R.x.Medium,
                                onClick: this.unblockUser,
                                "data-a-target": "viewer-card-unblock-user"
                            }, m.createElement(R.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, e))
                        }
                        var t = Object(g.d)("Block {user}", {
                            user: this.props.targetDisplayName
                        }, "ViewerCardMoreOptions");
                        return m.createElement(R.Va, {
                            borderRadius: R.x.Medium,
                            onClick: this.blockUser,
                            "data-a-target": "viewer-card-block-user"
                        }, m.createElement(R.Ya, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t))
                    }, t
                }(m.Component),
                ae = Object(o.compose)(re.a, Object(ee.a)(), Object(I.b)("ViewerCardMoreOptions"))(ie),
                oe = n("WytW"),
                se = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.modUser = function() {
                            n.props.confirmModerationAction && !n.props.confirmModerationAction() || (n.props.sendMessageToTMI(Object(oe.g)(n.props.targetLogin)), n.setState({
                                isModerator: !0
                            }))
                        }, n.unmodUser = function() {
                            n.props.confirmModerationAction && !n.props.confirmModerationAction() || (n.props.sendMessageToTMI(Object(oe.h)(n.props.targetLogin)), n.setState({
                                isModerator: !1
                            }))
                        }, n.state = {
                            isModerator: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.state.isModerator) {
                            var e = Object(g.d)("Unmod User", "ViewerCardOwnerActions");
                            return m.createElement(R.Ya, {
                                key: "OP",
                                display: R.X.InlineFlex,
                                padding: {
                                    right: 1
                                }
                            }, m.createElement(R.Zb, {
                                label: e,
                                direction: R.bc.Top,
                                align: R.ac.Center
                            }, m.createElement(R.A, {
                                icon: R.ub.FollowCheck,
                                ariaLabel: e,
                                onClick: this.unmodUser
                            })))
                        }
                        e = Object(g.d)("Mod User", "ViewerCardOwnerActions");
                        return m.createElement(R.Ya, {
                            key: "OP",
                            display: R.X.InlineFlex,
                            padding: {
                                right: 1
                            }
                        }, m.createElement(R.Zb, {
                            label: e,
                            direction: R.bc.Top,
                            align: R.ac.Center
                        }, m.createElement(R.A, {
                            icon: R.ub.OP,
                            ariaLabel: e,
                            onClick: this.modUser
                        })))
                    }, t = i.__decorate([Object(I.b)("ViewerCardOwnerActions")], t)
                }(m.Component),
                le = n("oK83"),
                ce = n("KriR"),
                de = n("0tEc"),
                ue = n("JMwM"),
                pe = n("L+W6"),
                me = n("br9A"),
                fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getSubscribeButton = function() {
                            var e = t.props.subscriptionProducts[0],
                                n = Object(g.d)("Gift All-Access Pass", "CampaignsGiftDescription");
                            return m.createElement(ue.a, {
                                productName: e.name,
                                subProductId: e.id,
                                giftRecipient: t.props.giftRecipient,
                                checkoutURL: e.url,
                                buttonMessage: n,
                                purchase: e.price,
                                onClick: t.handleGiftCheckoutAction
                            })
                        }, t.handleGiftCheckoutAction = function() {
                            t.handleSubMenuAction({
                                action: me.a.BuyGiftSub,
                                checkoutButtonTier: t.props.subscriptionProducts[0].price,
                                giftRecipient: t.props.giftRecipient ? t.props.giftRecipient : null
                            })
                        }, t.handleSubMenuAction = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return m.createElement(R.Ya, null, m.createElement(R.Ya, {
                            display: R.X.Flex,
                            justifyContent: R.Xa.Between,
                            alignItems: R.f.Center,
                            fullWidth: !0
                        }, m.createElement(R.W, {
                            bold: !0,
                            type: R.Wb.H5
                        }, Object(g.d)("Gift the Overwatch League All-Access Pass", "CampaignsGiftDescription")), m.createElement(R.z, {
                            type: R.F.Text,
                            icon: R.ub.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "sub-gift-select-back-button"
                        }, m.createElement(R.Ya, {
                            alignItems: R.f.Center,
                            display: R.X.InlineFlex
                        }, m.createElement(R.W, null, Object(g.d)("Back", "CampaignsGiftDescription"))))), m.createElement(R.Ya, {
                            className: "channel-header__subscription-balloon-options"
                        }, m.createElement(R.Ya, null, m.createElement(R.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, m.createElement(R.W, null, Object(g.d)("Exclusive Command Center stream access plus Passholder-only chat, Post-match Q&A and match-analysis videos by players, and 23 Twitch emotes, 2 Twitch badges and more!", "CampaignsGiftDescription"))), m.createElement(pe.a, {
                            subscriptionProduct: this.props.subscriptionProducts[0],
                            isGift: !0,
                            isOneTime: !0
                        }), m.createElement(R.Ya, {
                            margin: {
                                top: 1,
                                right: 1
                            }
                        }, this.getSubscribeButton()))))
                    }, t
                }(m.Component),
                ge = n("DqL7"),
                he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            giftingAnonymously: !1
                        }, t.onGiftSelect = function() {
                            t.props.onGiftSelect && t.props.onGiftSelect()
                        }, t.handleSubMenuAction = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction(i.__assign({
                                isAnonymous: t.state.giftingAnonymously
                            }, e))
                        }, t.onAnonymousGiftingSelect = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction({
                                action: me.a.ClickAnonymousGiftCheckbox,
                                isAnonymous: e.target.checked
                            }), t.setState({
                                giftingAnonymously: e.target.checked
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.isEsportChannel ? m.createElement(fe, {
                            giftRecipient: this.props.giftRecipient,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            onBack: this.props.onBack,
                            subscriptionProducts: this.props.subscriptionProducts
                        }) : m.createElement(R.Ya, null, m.createElement(R.Ya, {
                            display: R.X.Flex,
                            justifyContent: R.Xa.Between,
                            alignItems: R.f.Center,
                            fullWidth: !0
                        }, m.createElement(R.W, {
                            bold: !0,
                            type: R.Wb.H5
                        }, Object(g.d)("Choose A Gift Subscription", "GiftTierTabs")), m.createElement(R.z, {
                            "data-test-selector": "sub-gift-select-back-button",
                            icon: R.ub.AngleLeft,
                            onClick: this.props.onBack,
                            type: R.F.Text
                        }, m.createElement(R.Ya, {
                            alignItems: R.f.Center,
                            display: R.X.InlineFlex
                        }, m.createElement(R.W, null, Object(g.d)("Back", "GiftTierTabs"))))), m.createElement(ge.a, {
                            canPrimeSubscribe: !1,
                            channelDisplayName: this.props.channelDisplayName,
                            giftingAnonymously: this.state.giftingAnonymously,
                            giftRecipient: this.props.giftRecipient,
                            handleSubMenuAction: this.handleSubMenuAction,
                            isGift: !0,
                            isStaff: this.props.isStaff,
                            isSubscribed: !1,
                            onAnonymousGiftingSelect: this.onAnonymousGiftingSelect,
                            onGiftSelect: this.onGiftSelect,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: !1
                        }))
                    }, t
                }(m.Component),
                be = n("4iu0"),
                ve = n("NMMG"),
                ke = (n("EtPo"), n("Jl6Y"));
            ! function(e) {
                e[e.ActionsPage = 0] = "ActionsPage", e[e.SubGiftSelectPage = 1] = "SubGiftSelectPage"
            }($ || ($ = {}));
            var ye = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: $.ActionsPage,
                            modLogsEnabled: !1
                        }, t.getContent = function() {
                            if (t.props.data.loading || t.props.data.error) return m.createElement(R.Fb, {
                                background: R.r.Base,
                                fullHeight: !0,
                                fullWidth: !0,
                                padding: 2
                            }, m.createElement(R.ab, {
                                fillContent: !0
                            }));
                            var e = {
                                    backgroundImage: "url(" + (t.props.data.targetUser.bannerImageURL || h) + ")"
                                },
                                n = t.state.currentPage === $.ActionsPage ? t.renderActions() : t.renderSubGiftSelect(),
                                r = t.state.currentPage === $.ActionsPage ? t.renderModDrawer() : null;
                            return m.createElement(R.Fb, {
                                border: !0,
                                className: "viewer-card",
                                elevation: 1,
                                "data-a-target": "viewer-card"
                            }, m.createElement(R.Ra, {
                                background: R.r.AccentAlt2
                            }, m.createElement("div", {
                                className: "viewer-card__background",
                                style: e
                            }, m.createElement(R.Ya, {
                                display: R.X.Flex,
                                flexDirection: R.Aa.Column,
                                fullHeight: !0,
                                fullWidth: !0,
                                className: "viewer-card__overlay"
                            }, m.createElement(R.Fb, {
                                alignItems: R.f.Center,
                                background: R.r.Overlay,
                                className: "viewer-card__banner",
                                display: R.X.Flex,
                                flexDirection: R.Aa.Row,
                                flexGrow: 1,
                                fullWidth: !0,
                                justifyContent: R.Xa.Start,
                                padding: 1,
                                position: R.kb.Relative,
                                textAlign: R.Sb.Center
                            }, m.createElement(S.a, null, m.createElement(R.q, {
                                src: t.props.data.targetUser.profileImageURL,
                                size: 50,
                                alt: t.props.data.targetUser.displayName
                            })), m.createElement(S.a, null, m.createElement(R.Ya, {
                                alignItems: R.f.Center,
                                margin: 1,
                                className: "viewer-card__display-name",
                                textAlign: R.Sb.Left,
                                ellipsis: !0
                            }, m.createElement(R.W, {
                                color: R.O.Overlay,
                                type: R.Wb.H4
                            }, m.createElement(R.U, {
                                hoverUnderlineNone: !0,
                                targetBlank: !0,
                                to: "/" + t.props.targetLogin,
                                type: R.V.Inherit
                            }, t.props.data.targetUser.displayName)), t.renderAccountAge())))))), n, r)
                        }, t.toggleGiftPage = function() {
                            var e = t.state.currentPage === $.ActionsPage ? $.SubGiftSelectPage : $.ActionsPage;
                            e === $.SubGiftSelectPage && t.trackGiftEvent(), t.setState({
                                currentPage: e
                            })
                        }, t.onWhisperButtonClick = function() {
                            t.props.hideViewerCard()
                        }, t.handleReportUserClick = function() {
                            if (!t.props.isLoggedIn) return t.props.login();
                            t.props.showReportUserModal({
                                reportContext: {
                                    contentType: t.reportContentTypeFromSourceType(t.props.sourceType),
                                    targetUserID: t.props.data.targetUser.id,
                                    contentID: t.props.sourceID,
                                    extra: JSON.stringify({
                                        channel_id: t.props.channelID.toString()
                                    }),
                                    additionalTrackingID: t.props.channelID
                                },
                                title: Object(g.d)("Report {channelDisplayName}", {
                                    channelDisplayName: t.props.data.targetUser.displayName
                                }, "ReportUserModalTitle")
                            })
                        }, t.handleSubMenuAction = function(e) {
                            e.action === me.a.BuyGiftSub && t.displaySubscriptionCheckout(), Object(me.b)(i.__assign({
                                channelID: t.props.channelID || "",
                                channelLogin: t.props.data.channelUser.login || "",
                                isMenuOpen: null,
                                hasSubCredit: null,
                                sub_location: "viewer_card",
                                modal: !1,
                                showPrimeContent: !0,
                                giftRecipient: t.props.data.targetUser.login
                            }, e))
                        }, t.trackGiftEvent = function() {
                            Object(me.b)({
                                action: me.a.GiftASub,
                                channelID: t.props.channelID || "",
                                channelLogin: t.props.data.channelUser.login || "",
                                isMenuOpen: null,
                                hasSubCredit: null,
                                sub_location: "viewer_card",
                                modal: !1,
                                showPrimeContent: !0,
                                giftRecipient: t.props.data.targetUser.login
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = g.b.get("viewer_card_mod_logs", !1);
                        this.setState({
                            modLogsEnabled: e
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.error ? null : this.getContent()
                    }, t.prototype.renderModDrawer = function() {
                        return this.isModeratorOrHigher() && this.state.modLogsEnabled && !this.props.isEmbedded ? m.createElement(R.Fb, {
                            display: R.X.Flex,
                            background: R.r.Alt2,
                            fullWidth: !0,
                            borderTop: !0
                        }, m.createElement(S.a, {
                            fullWidth: !0
                        }, m.createElement(Z, {
                            channelID: this.props.channelID,
                            "data-test-selector": "viewer-card-mod-drawer",
                            targetID: this.props.data.targetUser.id
                        }))) : null
                    }, t.prototype.renderActions = function() {
                        var e = this.props.data.currentUser;
                        return e && e.login === this.props.targetLogin ? null : m.createElement(R.Fb, {
                            className: "viewer-card__actions",
                            "data-test-selector": "viewer-card-actions",
                            attachBottom: !0
                        }, this.renderSocialActions(), this.renderChatActions())
                    }, t.prototype.renderSocialActions = function() {
                        return this.props.isEmbedded || this.props.data.channelUser.self && this.props.data.channelUser.self.banStatus && this.props.data.channelUser.self.banStatus.isPermanent && this.props.sourceType !== le.a.viewer_list_mod_section ? null : m.createElement(R.Fb, {
                            alignItems: R.f.Start,
                            display: R.X.Flex,
                            background: R.r.Base,
                            flexDirection: R.Aa.Row,
                            fullWidth: !0,
                            "data-test-selector": "viewer-card-social-actions"
                        }, m.createElement(R.Ya, {
                            display: R.X.Flex,
                            flexGrow: 1,
                            flexWrap: R.Ba.Wrap,
                            margin: {
                                bottom: 1,
                                left: 1,
                                top: .5
                            }
                        }, m.createElement(R.Ya, {
                            margin: {
                                right: .5,
                                top: .5
                            }
                        }, m.createElement(S.a, null, m.createElement(de.a, {
                            friendData: {
                                user: this.props.data.targetUser
                            },
                            targetID: this.props.data.targetUser.id
                        }))), m.createElement(R.Ya, {
                            margin: {
                                right: .5,
                                top: .5
                            }
                        }, m.createElement(S.a, null, this.renderWhisperButton())), m.createElement(R.Ya, {
                            margin: {
                                top: .5
                            }
                        }, m.createElement(S.a, null, this.renderGiftSubscriptionButton()))), m.createElement(R.Ya, {
                            margin: {
                                x: .5,
                                y: 1
                            }
                        }, m.createElement(S.a, null, this.renderMoreOptions())))
                    }, t.prototype.renderMoreOptions = function() {
                        var e = this.props.data.currentUser;
                        return this.props.isEmbedded || !this.props.data.targetUser || e && e.login === this.props.targetLogin ? null : m.createElement(ae, {
                            handleReportUserClick: this.handleReportUserClick,
                            targetLogin: this.props.targetLogin,
                            currentUserData: e,
                            targetDisplayName: this.props.data.targetUser.displayName,
                            targetUserID: this.props.data.targetUser.id
                        })
                    }, t.prototype.renderWhisperButton = function() {
                        if (!this.props.data.currentUser || !this.props.data.currentUser.id || !this.props.data.targetUser) return null;
                        var e = Object(ve.a)(this.props.data.currentUser.id, this.props.data.targetUser.id);
                        return m.createElement(b.a, {
                            onClick: this.onWhisperButtonClick,
                            isPopout: this.props.isPopout,
                            threadID: e
                        })
                    }, t.prototype.renderGiftSubscriptionButton = function() {
                        return !this.props.data.channelUser || !this.props.data.channelUser.subscriptionProducts || this.props.data.channelUser.subscriptionProducts.length < 1 ? null : m.createElement(ue.a, {
                            onClick: this.toggleGiftPage,
                            productName: this.props.data.channelUser.subscriptionProducts[0].name,
                            subProductId: this.props.data.channelUser.subscriptionProducts[0].id,
                            giftRecipient: this.props.targetLogin,
                            isEsportChannel: Object(k.a)(this.props.data.channelUser.id, this.props.sessionUser)
                        })
                    }, t.prototype.renderSubGiftSelect = function() {
                        return m.createElement(R.Ya, null, m.createElement(be.a, {
                            subscriptionProducts: this.props.data.channelUser.subscriptionProducts,
                            isGift: !0
                        }), m.createElement(R.Fb, {
                            background: R.r.Base,
                            attachBottom: !0,
                            display: R.X.Flex,
                            flexDirection: R.Aa.Row,
                            justifyContent: R.Xa.Between,
                            fullWidth: !0,
                            flexGrow: 0,
                            padding: {
                                bottom: 2,
                                top: 1,
                                x: 2
                            }
                        }, m.createElement(he, {
                            onBack: this.toggleGiftPage,
                            channelDisplayName: this.props.data.channelUser.displayName,
                            subscriptionProducts: this.props.data.channelUser.subscriptionProducts,
                            giftRecipient: this.props.data.targetUser.login,
                            handleSubMenuAction: this.handleSubMenuAction,
                            isStaff: !!this.props.data.currentUser && !!this.props.data.currentUser.roles && !!this.props.data.currentUser.roles.isStaff,
                            isEsportChannel: Object(k.a)(this.props.data.channelUser.id, this.props.sessionUser)
                        })))
                    }, t.prototype.renderChatActions = function() {
                        var e = [];
                        return this.isModeratorOrHigher() && e.push(m.createElement(j, {
                            key: "ModActions",
                            channelID: this.props.data.channelUser.id,
                            confirmModerationAction: this.props.confirmModerationAction,
                            userID: this.props.data.targetUser.id,
                            userLogin: this.props.targetLogin
                        })), this.isOwnerOrHigher() && e.push(m.createElement(se, {
                            key: "OwnerActions",
                            confirmModerationAction: this.props.confirmModerationAction,
                            sendMessageToTMI: this.props.sendMessageToTMI,
                            targetLogin: this.props.targetLogin
                        })), e.length ? m.createElement(R.Fb, {
                            display: R.X.Flex,
                            background: R.r.Alt2,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, m.createElement(S.a, null, e)) : null
                    }, t.prototype.renderAccountAge = function() {
                        if (!this.props.data.targetUser.createdAt || !this.isModeratorOrHigher()) return null;
                        var e = new Date(this.props.data.targetUser.createdAt),
                            t = (Date.now() - e.getTime()) / 36e5 > 24 ? Object(g.c)(e, "medium") : Object(g.i)(e);
                        return m.createElement(R.W, {
                            color: R.O.Overlay,
                            "data-test-selector": "viewer-card-account-age"
                        }, Object(g.d)("Account created {date}", {
                            date: t
                        }, "ViewerCard"))
                    }, t.prototype.isOwnerOrHigher = function() {
                        var e = this.props.data;
                        return !(e.loading || e.error || !e.currentUser) && (e.currentUser && e.currentUser.roles && (e.currentUser.roles.isGlobalMod || e.currentUser.roles.isSiteAdmin) || this.isOwner())
                    }, t.prototype.isModeratorOrHigher = function() {
                        return this.isOwnerOrHigher() || this.props.data.channelUser.self && this.props.data.channelUser.self.isModerator
                    }, t.prototype.isOwner = function() {
                        var e = this.props.data;
                        return !(e.loading || e.error || !e.currentUser) && e.currentUser.id === e.channelUser.id
                    }, t.prototype.reportContentTypeFromSourceType = function(e) {
                        switch (e) {
                            case le.a.chat_message:
                                return y.O.CHAT_REPORT;
                            case le.a.room_message:
                                return y.O.ROOM_REPORT;
                            case le.a.recent_raids:
                                return y.O.RAID_REPORT;
                            case le.a.viewer_list:
                            default:
                                return y.O.USER_REPORT
                        }
                    }, t.prototype.displaySubscriptionCheckout = function() {
                        if (this.props.sessionUser) {
                            var e = g.n.get(l.e, ""),
                                t = g.n.get(l.d, ""),
                                n = g.n.get(l.a, !1);
                            t && (this.props.data && this.props.data.channelUser.subscriptionProducts.map(function(e) {
                                return e.name
                            }).includes(t) ? this.props.showSubscriptionCheckoutModal({
                                isAnonymous: n,
                                productName: t,
                                recipientLogin: e,
                                trackingContext: {
                                    source: ce.c.ViewerCard
                                }
                            }) : Object(l.f)())
                        } else this.props.login()
                    }, t
                }(m.Component),
                Se = Object(f.compose)(Object(I.b)("ViewerCard"), Object(v.a)(ke, {
                    options: function(e) {
                        return {
                            variables: {
                                targetLogin: e.targetLogin,
                                channelID: e.channelID
                            }
                        }
                    }
                }))(ye);
            var Oe = Object(a.connect)(function(e) {
                return {
                    sessionUser: Object(u.e)(e),
                    isLoggedIn: Object(u.f)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: Object(l.g)(c.a.ViewerCard),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(d.d)(s.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(212)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(d.d)(p.a, t)
                    }
                }, e)
            })(Se);
            n.d(t, "ViewerCard", function() {
                return Oe
            })
        },
        rqzT: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("fvjX"),
                a = n("1/iK"),
                o = n("y5D0"),
                s = n("CzFK"),
                l = n("l1Uh"),
                c = n("mrSG"),
                d = n("q1tI"),
                u = n("/7QA"),
                p = n("GnwI"),
                m = n("Ue10"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.threadID ? (t.props.onClick && t.props.onClick(), t.props.openThread(t.props.threadID)) : t.props.login()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.isPopout;
                        return e = this.props.isButtonIcon ? d.createElement(m.A, {
                            "data-test-selector": "whisper-button",
                            disabled: t,
                            icon: m.ub.Whisper,
                            onClick: this.handleClick
                        }) : d.createElement(m.z, {
                            disabled: t,
                            icon: m.ub.Whisper,
                            type: this.props.buttonType,
                            onClick: this.handleClick,
                            "data-a-target": "usercard-whisper-button",
                            "data-test-selector": "whisper-button"
                        }, Object(u.d)("Whisper", "WhisperButton")), t ? d.createElement(m.Zb, {
                            align: m.ac.Left,
                            direction: m.bc.Top,
                            label: Object(u.d)("Whispers are disabled in popout chat", "WhispersDisabledText")
                        }, e) : e
                    }, t
                }(d.Component),
                g = Object(i.compose)(Object(p.b)("WhisperButton", {
                    autoReportInteractive: !0
                }))(f);
            var h = Object(r.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(a.a.WhisperButton)
                    },
                    openThread: function(e) {
                        return Object(s.l)({
                            collapsed: !1,
                            threadID: e,
                            ignoreCollapseIfOpen: !0
                        }, Object(l.a)())
                    }
                }, e)
            })(g);
            n.d(t, "a", function() {
                return h
            })
        },
        s6vn: function(e, t, n) {},
        s8Ou: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUser"
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
                                    value: "ReportContentInput"
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
                                value: "reportContent"
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
                                        value: "contentID"
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
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        y4Ne: function(e, t, n) {},
        "yO+B": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOffers_CurrentUser"
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 95
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        z8lI: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("GnwI"),
                o = n("O4UZ"),
                s = n("Ue10"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.g)(this.props.errorType);
                        return i.createElement(s.Fb, {
                            background: s.r.Alt2,
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Sb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, i.createElement(s.W, {
                            type: s.Wb.H4,
                            align: s.gc.Middle
                        }, i.createElement(s.Fb, {
                            padding: 1,
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Sb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, i.createElement(s.Ya, {
                            margin: {
                                right: 1
                            },
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center
                        }, i.createElement(s.tb, {
                            asset: s.ub.DeadGlitch,
                            type: s.vb.Alert,
                            width: 20,
                            height: 20
                        })), i.createElement(s.W, {
                            type: s.Wb.P
                        }, e))))
                    }, t
                }(i.Component),
                c = Object(a.b)("PrimeError", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, "a", function() {
                return c
            })
        },
        zUQL: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_Current_User"
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
                                        value: "hasPrime"
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
                    end: 56
                }
            };
            n.loc.source = {
                body: "query Prime_Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);