(window.webpackJsonp = window.webpackJsonp || []).push([
    [184], {
        "+PZR": function(e, t, n) {
            "use strict";
            var r = function(e, t) {
                    var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                    return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
                },
                i = n("/7QA");

            function a() {
                return [{
                    id: "other",
                    text: Object(i.d)("Other Terms of Service Violation", "ReportUserModal")
                }]
            }
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            })
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("cZKs"),
                l = n("aCAx"),
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
                        return a.createElement(u.zb, {
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
                        }), a.createElement(c.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "directories"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "nodes"
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
                                                        value: "displayName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "directoryType"
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
                    end: 236
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
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
                c = n("mrSG"),
                l = n("q1tI"),
                d = n("fvjX"),
                u = n("geRD"),
                p = n("1/iK"),
                m = n("y5D0"),
                f = "FriendEdge",
                g = "IncomingFriendRequestEdge",
                b = "",
                h = "OutgoingFriendRequestEdge";

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
                        return c.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("createFriendRequest", "CreateFriendRequestPayload", e.targetID, h))
                    }
                }))(function(e) {
                    var t = Object(k.d)("Add Friend", "AddFriendButton");
                    switch (e.friendButtonUIType) {
                        case y.a.WhisperSettings:
                            return l.createElement(S.Ua, {
                                ariaLabel: t,
                                onClick: e.isLoggedIn ? e.onCreateFriendRequest : e.onLoginClick
                            }, l.createElement(S.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, t));
                        default:
                            return l.createElement(S.z, {
                                ariaLabel: t,
                                onClick: e.isLoggedIn ? e.onCreateFriendRequest : e.onLoginClick,
                                "data-test-selector": "add-button"
                            }, t)
                    }
                }),
                E = n("aECu"),
                N = n("csdq"),
                _ = Object(r.compose)(Object(a.a)(E, {
                    name: "onAcceptFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("acceptFriendRequest", "AcceptFriendRequestPayload", e.targetID, f))
                    }
                }), Object(a.a)(N, {
                    name: "onRejectFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("rejectFriendRequest", "RejectFriendRequestPayload", e.targetID, b))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return l.createElement(S.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Friend Request Pending", "IncomingFriendRequestButton"));
                    var t = Object(k.d)("Accept", "IncomingFriendRequestButton"),
                        n = Object(k.d)("Reject", "IncomingFriendRequestButton");
                    return l.createElement(S.Xa, null, l.createElement(S.Xa, {
                        display: S.X.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, l.createElement(S.Sb, {
                        align: S.Tb.Left,
                        label: Object(k.d)("Accept Friend Request", "IncomingFriendRequestButton")
                    }, l.createElement(S.z, {
                        ariaLabel: t,
                        onClick: e.onAcceptFriendRequest,
                        "data-test-selector": "accept-button"
                    }, t))), l.createElement(S.Sb, {
                        align: S.Tb.Left,
                        label: Object(k.d)("Reject Friend Request", "IncomingFriendRequestButton")
                    }, l.createElement(S.z, {
                        ariaLabel: n,
                        onClick: e.onRejectFriendRequest,
                        type: S.F.Alert,
                        "data-test-selector": "reject-button"
                    }, n)))
                }),
                T = n("Xcb2"),
                R = Object(r.compose)(Object(a.a)(T, {
                    name: "onCancelFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("cancelFriendRequest", "CancelFriendRequestPayload", e.targetID, b))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return l.createElement(S.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Friend Request Pending", "OutgoingFriendRequestButton"));
                    var t = Object(k.d)("Cancel Request", "OutgoingFriendRequestButton");
                    return l.createElement(S.z, {
                        ariaLabel: t,
                        onClick: e.onCancelFriendRequest,
                        "data-test-selector": "cancel-button"
                    }, t)
                }),
                D = n("IRYN"),
                I = Object(r.compose)(Object(a.a)(D, {
                    name: "onUnfriendUser",
                    options: function(e) {
                        return c.__assign({}, Object(u.a)({
                            targetID: e.targetID
                        }), v("unfriendUser", "UnfriendUserPayload", e.targetID, b))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return null;
                    var t = Object(k.d)("Friends", "UnfriendButton"),
                        n = Object(k.d)("Unfriend", "UnfriendButton");
                    return l.createElement(S.z, {
                        ariaLabel: n,
                        onClick: e.onUnfriendUser,
                        statusAlertText: n,
                        "data-test-selector": "unfriend-button"
                    }, t)
                }),
                U = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.friendButtonUIType || y.a.Default;
                        if (!this.props.friendData && this.props.data && (this.props.data.loading || this.props.data.error)) return e === y.a.WhisperSettings ? null : l.createElement(S.eb, {
                            height: 30,
                            width: 60
                        });
                        var t = this.props.friendData || this.props.data;
                        if (!t || !t.user || !t.user.self || this.props.targetID === this.props.currentUserID) return null;
                        if (!this.props.isLoggedIn) return l.createElement(C, {
                            friendButtonUIType: e,
                            isLoggedIn: this.props.isLoggedIn,
                            targetID: this.props.targetID
                        });
                        switch (t.user.self.friendship ? t.user.self.friendship.__typename : b) {
                            case f:
                                return l.createElement(I, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case g:
                                return l.createElement(_, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case h:
                                return l.createElement(R, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case b:
                            default:
                                return l.createElement(C, {
                                    friendButtonUIType: e,
                                    isLoggedIn: this.props.isLoggedIn,
                                    targetID: this.props.targetID
                                })
                        }
                    }, t
                }(l.Component),
                j = n("GGok");
            var P = Object(r.compose)(Object(s.b)("FriendButton"), Object(i.connect)(function(e) {
                var t = Object(o.e)(e);
                return {
                    currentUserID: t && t.id,
                    isLoggedIn: Object(o.f)(e)
                }
            }), Object(a.a)(j, {
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
            }))(U);
            n.d(t, "a", function() {
                return P
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
                c = n("8/mp"),
                l = n("yR8l"),
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
                                type: u.Pb.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(u.W, {
                                italic: !0,
                                type: u.Pb.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(u.Xa, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(u.Xa, {
                            textAlign: u.Lb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(u.W, {
                            type: u.Pb.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                    }, t
                }(a.Component),
                m = Object(d.b)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                g = n("geRD"),
                b = n("JVUd"),
                h = n("cinR"),
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
                        return a.createElement(u.Xa, {
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
                        if (t || r === k.e.EXTERNAL_OFFER) return a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, i));
                        var o = a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            state: n ? u.E.Loading : u.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? u.pb.Gift : void 0
                        }, i));
                        return a.createElement(u.Xa, {
                            position: u.fb.Relative
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
                O = Object(o.compose)(Object(l.a)(y, {
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
                            return a.createElement(u.zb, {
                                className: "prime-claim-description__body",
                                background: u.r.Alt2,
                                border: !0,
                                position: u.fb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(u.zb, {
                                className: "prime-claim-description__body",
                                background: u.r.Base,
                                border: !0,
                                position: u.fb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: u.ab.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(u.Xa, {
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
                        return a.createElement(u.Xa, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(h.a, {
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
                E = Object(d.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(C),
                N = n("fvjX"),
                _ = n("aCAx"),
                T = n("kRBY"),
                R = n("ZS2+"),
                D = n("cZKs"),
                I = R.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(83)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                U = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Xa, {
                            className: "prime-gift-modal",
                            position: u.fb.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(I, {
                            action: this.props.action,
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            getGiftRecipientList: this.props.getGiftRecipientList,
                            updateGiftRecipientList: this.props.updateGiftRecipientList
                        }), a.createElement(D.a, {
                            closeOnBackdropClick: !0,
                            onClose: this.props.onClose
                        }))
                    }, t
                }(a.Component),
                j = Object(d.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(U),
                P = function(e) {
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
                            icon: u.pb.Gift,
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
                F = Object(o.compose)(Object(d.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(P);
            var x = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(T.f)(e)
                    }
                }, function(e, t) {
                    return Object(N.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(_.d)(j, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(F),
                w = n("9pSj"),
                M = n("j3KY"),
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
                        return a.createElement(u.Xa, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            linkTo: this.getLink(),
                            targetBlank: !0,
                            onClick: this.onClick
                        }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || w.b.Default) === w.b.Vertical ? M.d : M.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(M.e)(t, n)
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
                        return a.createElement(u.Xa, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(k.n)(e) || this.props.isGifted ? Object(k.n)(e) && Object(k.k)(this.props.offerID) ? a.createElement(u.Xa, {
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, a.createElement(u.Xa, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(u.Xa, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(x, {
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
                        return a.createElement(E, {
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
                z = Object(o.compose)(Object(l.a)(B), Object(d.b)("PrimeInstructions"))(W),
                G = n("z8lI"),
                X = (n("25vm"), function(e) {
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
                        return a.createElement(u.Xa, {
                            className: "copy-button copy-btn",
                            display: u.X.Flex
                        }, a.createElement(u.Pa, {
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
                V = Object(N.compose)(Object(d.b)("CopyButton"))(X),
                q = function(e) {
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
                        return this.state && this.state.value ? a.createElement(u.Xa, {
                            className: "copyable-item",
                            display: u.X.Flex,
                            flexGrow: 1
                        }, a.createElement(u.Xa, {
                            flexGrow: 1
                        }, a.createElement(u.Ra, {
                            type: u.Ta.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(u.Xa, null, a.createElement(V, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                H = Object(N.compose)(Object(d.b)("CopyableItem"))(q),
                Q = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(u.Yb, null, a.createElement(f, {
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
                            return a.createElement(u.zb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: u.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: u.Ca.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(u.zb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(u.Xa, {
                                fullWidth: !0,
                                justifyContent: u.Wa.Center,
                                textAlign: u.Lb.Center
                            }, a.createElement(u.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(u.zb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: u.fb.Absolute,
                                padding: 1,
                                background: u.r.Alt,
                                overflow: u.ab.Scroll,
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
                $ = Object(d.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })(Q),
                K = n("UFVY"),
                Y = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(u.eb, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(u.zb, {
                                fullWidth: !0,
                                display: u.X.Flex,
                                justifyContent: u.Wa.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: u.f.Center,
                                borderRadius: u.x.Medium
                            }, a.createElement(u.W, {
                                type: u.Pb.Span,
                                align: u.Zb.Middle,
                                color: u.O.Overlay
                            }, a.createElement(u.Xa, {
                                display: u.X.InlineFlex,
                                flexWrap: u.Ba.NoWrap,
                                alignItems: u.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(u.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: u.X.InlineFlex,
                                flexWrap: u.Ba.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: u.f.Center
                            }, a.createElement(u.ob, {
                                asset: n ? u.pb.Gift : u.pb.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(s.d)("Gift Claimed", "PrimeRedeem") : Object(s.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return a.createElement($, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-redeem", e);
                        return a.createElement(u.Xa, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(k.l)(e);
                        if (this.props.code && this.props.deliveryMethod === k.e.CLAIM_CODE) return a.createElement(u.Xa, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(H, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(k.k)(this.props.offerID) ? this.props.isPrime ? a.createElement(u.Xa, {
                            display: u.X.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(u.Xa, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(x, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(u.zb, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: u.x.Medium
                        }, a.createElement(u.W, {
                            type: t ? u.Pb.H4 : u.Pb.H6,
                            align: u.Zb.Middle,
                            color: u.O.Overlay
                        }, a.createElement(u.Xa, {
                            display: u.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: u.Ba.NoWrap,
                            alignItems: u.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(u.Xa, {
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
                        }, a.createElement(u.ob, {
                            asset: u.pb.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                Z = Object(o.compose)(Object(d.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(l.a)(K, {
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
                }))(Y),
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
                            return a.createElement(u.zb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: u.f.Center,
                                display: u.X.Block,
                                borderBottom: !n,
                                textAlign: u.Lb.Left,
                                position: u.fb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(u.Xa, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(u.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(u.zb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.Xa, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(u.W, {
                                type: u.Pb.P
                            }, i, " ", o)), a.createElement(u.Xa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(u.W, {
                                type: u.Pb.P,
                                color: u.O.Alt2,
                                fontSize: u.Ca.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                r = n && n.game && n.game.name || "",
                                i = n && n.categories && n.categories[0] || "",
                                o = n && n.publisher || "";
                            return a.createElement(u.zb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: u.f.Center,
                                display: u.X.InlineBlock,
                                textAlign: u.Lb.Left,
                                position: u.fb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(u.zb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.zb, {
                                className: "prime-offer__content__text",
                                background: u.r.Base
                            }, a.createElement(u.Xa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(u.W, {
                                type: u.Pb.P,
                                color: u.O.OverlayAlt,
                                fontSize: u.Ca.Size7,
                                transform: u.Ob.Uppercase
                            }, o)), a.createElement(u.Xa, {
                                className: "prime-offer__title",
                                alignItems: u.f.Start,
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e)), a.createElement(u.Xa, {
                                className: "prime-offer__description"
                            }, a.createElement(u.W, {
                                type: u.Pb.P,
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
                            }), a.createElement(u.Qa, {
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
                                return a.createElement(G.a, {
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
                            return a.createElement(z, {
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
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(u.Xa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(u.ob, {
                            asset: u.pb.Gift
                        }))), a.createElement(u.Xa, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: u.f.Start,
                            display: u.X.Flex
                        }, t, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(u.W, {
                                    type: u.Pb.Span,
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
                ae = Object(o.compose)(Object(l.a)(ne, {
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
                }), Object(l.a)(B, {
                    name: "data"
                }), Object(l.a)(J, {
                    name: "claimPrimeOffer"
                }), Object(l.a)(te, {
                    name: "claimGift"
                }), Object(d.b)("PrimeOffer"), Object(b.a)("PrimeOffer", {
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
                        return a.createElement(u.zb, {
                            className: "prime-offer-placeholder",
                            alignItems: u.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? u.X.Block : u.X.InlineBlock,
                            fullWidth: t
                        }, a.createElement(u.Xa, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(u.eb, {
                            height: 20
                        })), a.createElement(u.eb, {
                            height: 160
                        }), a.createElement(u.Xa, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(u.eb, {
                            height: 20,
                            width: 160
                        })), a.createElement(u.Xa, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(u.eb, {
                            height: 20,
                            width: 80
                        })), a.createElement(u.Xa, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(u.eb, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                se = Object(d.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(oe),
                ce = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.zb, {
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
                            type: u.Pb.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(u.Xa, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: u.Lb.Center
                        }, a.createElement(u.ob, {
                            asset: u.pb.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: u.qb.Brand
                        })), a.createElement(u.W, {
                            type: u.Pb.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(L, null))
                    }, t
                }(a.Component)),
                le = Object(d.b)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(ce),
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
                            return a.createElement(u.Xa, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(u.Vb, {
                                childWidth: u.Wb.Large,
                                gutterSize: u.Xb.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(v.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(u.Xa, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(u.eb, {
                                height: 28,
                                width: 300
                            })) : a.createElement(u.Xa, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(u.W, {
                                type: u.Pb.H3,
                                color: u.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(u.Xa, {
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
                        return this.shouldShowOffersSection() ? a.createElement(c.b, {
                            className: n,
                            suppressScrollX: o,
                            suppressScrollY: i
                        }, a.createElement(u.Xa, {
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
                        if (e && !Object(k.m)(e) && !Object(k.n)(e) && !this.props.hideUpsell) return a.createElement(le, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var r = this.getSortedOffers(),
                                i = r[r.length - 1];
                            return r.map(function(n, r) {
                                return a.createElement(u.Xa, {
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
                me = Object(o.compose)(Object(l.a)(ue, {
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
                }), Object(l.a)(B, {
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
                c = (n("3DuC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.hasDiscount(this.props.subscriptionProducts)) {
                            var e = this.getMessage();
                            return i.createElement(s.zb, {
                                textAlign: s.Lb.Center,
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
                return c
            })
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(i || (i = {}))
        },
        "5ZOr": function(e, t, n) {},
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
                c = n("oJmH"),
                l = n("/7QA"),
                d = n("eJ65"),
                u = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                g = n("GnwI"),
                b = n("cinR"),
                h = n("Ue10"),
                v = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h.Xa, null, s.createElement(h.zb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(h.W, {
                            bold: !0,
                            type: h.Pb.H6
                        }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(h.zb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(h.Xa, {
                            fullWidth: !0,
                            display: h.X.Flex,
                            alignItems: h.f.Center
                        }, s.createElement(h.Xa, {
                            flexGrow: 1
                        }, s.createElement(h.W, {
                            bold: !0,
                            type: h.Pb.H6
                        }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(h.Xa, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: h.Lb.Center
                        }, s.createElement(h.zb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: h.r.Base,
                            color: h.O.Base,
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Wa.Center
                        }, s.createElement(h.W, null, e.toString())))))
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
                E = n("SXud"),
                N = (n("l0e4"), n("yO+B")),
                _ = function(e) {
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
                            return l.b.get("prime-crown-hidden-ids", [])
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
                                var e, t, n, i, o, s, c, l;
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
                                            return s = a.sent(), (c = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && c.code ? (l = r[c.code], this.setState({
                                                updated: !1,
                                                error: l || r.UNKNOWN
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
                            return s.createElement(h.Xa, {
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
                            align: h.Tb.Center,
                            direction: h.Ub.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(h.Xa, {
                            className: "prime-offers",
                            position: h.fb.Relative
                        }, s.createElement(d.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(b.a, {
                            onHover: this.onHover
                        }, s.createElement(h.A, {
                            ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: h.pb.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), s.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === O.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return s.createElement(h.Xa, {
                            className: "prime-offers__pill",
                            position: h.fb.Absolute
                        }, s.createElement(h.i, {
                            type: h.n.BounceIn,
                            duration: h.k.Medium,
                            timing: h.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(h.cb, {
                            label: e.toString(),
                            type: h.db.Notification
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
                T = Object(c.compose)(Object(u.a)(E, {
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
                }), Object(u.a)(N, {
                    name: "userData"
                }), Object(u.a)(C, {
                    name: "updatePrimeOfferStatus"
                }), Object(g.b)("PrimeOffers"))(_);
            var R = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(T),
                D = n("6x+I"),
                I = n("KxT4"),
                U = n("j3KY"),
                j = (n("gQ2q"), n("487o")),
                P = function(e) {
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
                        var a = Object(U.e)(U.a, ""),
                            o = Object(l.d)("Twitch Prime", "BlueBar"),
                            c = s.createElement("span", null, Object(l.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            d = Object(U.e)(U.a, ""),
                            u = Object(l.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, o = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        c = s.createElement(D, {
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
                        }), s.createElement(b.a, {
                            onHover: S.g,
                            onClick: S.f
                        }, s.createElement(h.zb, {
                            color: h.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: h.fb.Relative,
                            fullWidth: !0,
                            zIndex: h.cc.Above
                        }, s.createElement(h.Xa, {
                            className: "blue-bar__bar",
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Wa.Between,
                            flexWrap: h.Ba.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(h.Xa, {
                            display: h.X.InlineFlex,
                            alignItems: h.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(h.Xa, {
                            className: "blue-bar__logo",
                            display: h.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(h.ob, {
                            asset: h.pb.Crown
                        })), s.createElement(h.W, {
                            bold: !0,
                            type: h.Pb.Span,
                            noWrap: !0,
                            fontSize: h.Ca.Size6
                        }, s.createElement(h.Pa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o))), s.createElement(h.W, {
                            className: "blue-bar__headline",
                            type: h.Pb.Span,
                            fontSize: h.Ca.Size6
                        }, c)), s.createElement(h.Xa, {
                            display: h.X.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(h.W, {
                            bold: !0,
                            type: h.Pb.Span,
                            noWrap: !0,
                            fontSize: h.Ca.Size6,
                            color: h.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: d,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, u))))))
                    }, t
                }(s.Component),
                F = Object(c.compose)(Object(i.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(I.h)(e)
                    }
                }), Object(u.a)(j, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(O.i)(O.f.DateOverride)
                            }
                        }
                    }
                }), Object(g.b)("BlueBarComponent"))(P),
                x = n("z8lI");
            n.d(t, "d", function() {
                return R
            }), n.d(t, "a", function() {
                return F
            }), n.d(t, "c", function() {
                return x.a
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
                c = n("3Bft"),
                l = n("geRD"),
                d = n("DMoW"),
                u = n("GnwI"),
                p = n("br9A"),
                m = n("9pSj"),
                f = n("O4UZ"),
                g = n("Ue10"),
                b = n("D/KL"),
                h = n("JRpg"),
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
                                    a = Object(l.a)({
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
                                        Object(l.e)(h, {
                                            login: t.props.channelLogin
                                        }, function(e) {
                                            var t = e.user;
                                            return t && t.self && t.id && (t.self.subscriptionBenefit || (t.self.subscriptionBenefit = {
                                                __typename: "SubscriptionBenefit",
                                                id: t.id,
                                                purchasedWithPrime: !0,
                                                tier: c.a.Prime,
                                                platform: d.K.WEB,
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
                            icon: g.pb.Crown,
                            state: g.E.Loading
                        }, Object(g.dc)(this.props)));
                        if (this.state.primeSubFailure) {
                            var e = this.getErrorType();
                            return i.createElement(m.c, {
                                fontSize: g.Ca.Size6,
                                testTarget: "prime-sub-error",
                                errorType: e
                            })
                        }
                        if (!this.isUserDataReady(this.props)) return i.createElement(g.eb, {
                            width: 82,
                            height: 30
                        });
                        var t = this.canPrimeSubscribe(this.props),
                            n = this.canResub(this.props),
                            a = this.willPrimeSubCreditRenew(),
                            s = this.primeSubCreditRenewalDate();
                        if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                            var c = Object(o.d)("Start Your Free Trial", "PrimeSubscribe");
                            return i.createElement(g.z, r.__assign({
                                ariaLabel: c,
                                "data-test-selector": v,
                                icon: g.pb.Crown,
                                linkTo: o.a.tryPrimeURI,
                                onClick: this.handleStartPrimeTrialClick
                            }, Object(g.dc)(this.props), {
                                targetBlank: !0
                            }), c)
                        }
                        if (this.isSubscribed(this.props) && !n) {
                            var l = Object(o.d)("Subscribed", "PrimeSubscribe");
                            return i.createElement(g.z, r.__assign({
                                ariaLabel: l,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: g.pb.Crown
                            }, Object(g.dc)(this.props)), l)
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
                                icon: g.pb.Crown
                            }, Object(g.dc)(this.props)), d)
                        }
                        var p = n ? Object(o.d)("Resubscribe Free", "PrimeSubscribe") : Object(o.d)("Subscribe Free", "PrimeSubscribe");
                        return i.createElement(g.z, r.__assign({
                            ariaLabel: p,
                            "data-test-selector": v,
                            disabled: this.state.isSubscribing,
                            icon: g.pb.Crown,
                            state: this.state.isSubscribing ? g.E.Loading : g.E.Default,
                            onClick: this.spendPrimeCredit
                        }, Object(g.dc)(this.props)), p)
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
                y = Object(a.compose)(Object(u.b)("PrimeSubscribe"), Object(s.a)(h, {
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
                }), Object(s.a)(b, {
                    name: "spendPrimeSubscriptionCredit"
                }))(k)
        },
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
                c = n("JMwM"),
                l = n("FLOH"),
                d = n("L+W6"),
                u = n("DnOo"),
                p = n("a5fV"),
                m = n("W8Fi"),
                f = n("br9A"),
                g = n("AXRb"),
                b = n("Ue10"),
                h = (n("J5He"), "gift-subscription-button"),
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
                                return t.props.giftRecipient ? i.createElement(c.a, {
                                    buttonMessage: r,
                                    checkoutURL: e.url,
                                    giftRecipient: t.props.giftRecipient,
                                    onClick: t.reportGiftCheckoutAction,
                                    productName: e.name,
                                    purchase: n,
                                    subProductId: e.id
                                }) : i.createElement(b.z, {
                                    ariaLabel: r + " " + n,
                                    "data-test-selector": h,
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
                        var e = this.props.subbedTier && i.createElement(b.Xa, {
                            className: "subscription-balloon-options__subbed-star",
                            display: b.X.InlineFlex,
                            margin: {
                                right: .5
                            }
                        }, i.createElement(b.ob, {
                            asset: b.pb.Star
                        }));
                        return i.createElement(b.Xa, {
                            className: "channel-header__subscription-balloon-options"
                        }, i.createElement(b.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(b.Bb, null, this.props.subbedTier === o.a.Prime ? !this.props.isGift && i.createElement(b.Xa, {
                            display: b.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(b.Xa, {
                            className: "subscription-balloon-options__prime-crown",
                            display: b.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(b.ob, {
                            asset: b.pb.Crown
                        })), i.createElement(b.Ab, {
                            active: this.state.activeTab === o.a.Prime,
                            "data-a-target": y(o.a.Prime),
                            "data-tier": y(o.a.Prime),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Prime", "SubTierTabs"))) : i.createElement(b.Xa, {
                            display: b.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === o.a.Tier1 && e, i.createElement(b.Ab, {
                            active: this.state.activeTab === o.a.Tier1,
                            "data-a-target": y(o.a.Tier1),
                            "data-tier": y(o.a.Tier1),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 1", "SubTierTabs"))), i.createElement(b.Xa, {
                            display: b.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === o.a.Tier2 && e, i.createElement(b.Ab, {
                            active: this.state.activeTab === o.a.Tier2,
                            "data-a-target": y(o.a.Tier2),
                            "data-tier": y(o.a.Tier2),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 2", "SubTierTabs"))), i.createElement(b.Xa, {
                            display: b.X.InlineFlex
                        }, this.props.subbedTier === o.a.Tier3 && e, i.createElement(b.Ab, {
                            active: this.state.activeTab === o.a.Tier3,
                            "data-a-target": y(o.a.Tier3),
                            "data-tier": y(o.a.Tier3),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 3", "SubTierTabs"))))), i.createElement(b.Xa, null, i.createElement(b.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(b.W, {
                            type: b.Pb.H5,
                            bold: !0
                        }, this.getTabTitle())), i.createElement(b.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(l.a, {
                            allSubProducts: this.props.subscriptionProducts,
                            selectedSubProduct: this.getSubProduct(this.state.activeTab) || this.props.subscriptionProducts[0]
                        })), i.createElement(d.a, {
                            isGift: this.props.isGift,
                            subscriptionProduct: this.getSubProduct(this.state.activeTab)
                        }), i.createElement(b.Xa, {
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
                return h
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
        EtPo: function(e, t, n) {},
        FLOH: function(e, t, n) {
            "use strict";
            var r, i = n("q1tI"),
                a = n("/7QA"),
                o = n("3Bft"),
                s = n("OpME"),
                c = n("0WFu"),
                l = n("Ue10");
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
                return i.createElement(l.Xa, null, i.createElement(l.W, {
                    "data-test-selector": r.BenefitMessage
                }, function(e) {
                    if (e.isEsportChannel) return Object(a.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                        giftPrice: e.selectedSubProduct ? e.selectedSubProduct.price : ""
                    }, "SubBenefitMessage");
                    var t = e.allSubProducts[0].emotes.length;
                    if (e.selectedSubProduct.tier) {
                        var n = Object(c.a)(e.selectedSubProduct.tier);
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
                }(e)), t.length > 0 && i.createElement(l.Xa, {
                    alignItems: l.f.Center,
                    display: l.X.Flex,
                    margin: {
                        top: 1
                    }
                }, t.map(function(e) {
                    return i.createElement(l.Xa, {
                        display: l.X.InlineFlex,
                        key: e.id,
                        margin: {
                            right: .5
                        }
                    }, i.createElement("img", {
                        alt: e.displayName,
                        srcSet: e.srcSet,
                        title: e.displayName
                    }))
                }), i.createElement(l.W, {
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
                c = n("+GjP"),
                l = n("D7An"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = n("k91D"),
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleClick = function() {
                            return n.openCheckout(), n.props.onClick && n.props.onClick()
                        }, n.openCheckout = function() {
                            n.state.hasPopupExperiment && n.props.giftRecipient && (a.n.set(s.b, n.props.productName), a.n.set(s.c, n.props.giftRecipient))
                        };
                        var r = a.p.experiments.getAssignment(l.b.InstreamCheckout);
                        return n.state = {
                            hasPopupExperiment: "yes" === r
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                        this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button");
                        var r = this.props.checkoutURL && this.props.giftRecipient ? Object(c.e)(this.props.checkoutURL, {
                            recipient: this.props.giftRecipient
                        }) : "";
                        return i.createElement(u.z, {
                            targetBlank: !0,
                            disabled: !n,
                            onClick: this.handleClick,
                            linkTo: this.state.hasPopupExperiment ? void 0 : r,
                            "data-test-selector": t,
                            purchase: this.props.purchase
                        }, this.props.buttonMessage || e)
                    }, t = r.__decorate([Object(d.b)("GiftSubscribeButton", {
                        autoReportInteractive: !0
                    }), Object(o.a)(p, {
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
                return m
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

            function c(e, t) {
                return function(n) {
                    return function(c) {
                        function l() {
                            var e = null !== c && c.apply(this, arguments) || this;
                            return e.state = {
                                hadImpression: !1,
                                didScroll: !1
                            }, e.logger = o.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return r.__extends(l, c), l.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                        }, l.prototype.componentWillUnmount = function() {
                            this.unregister && this.unregister()
                        }, l.prototype.render = function() {
                            var e = {
                                impressionListener: {
                                    hadImpression: this.state.hadImpression,
                                    didScroll: this.state.didScroll,
                                    registerImpressionCallback: this.registerImpressionCallback
                                }
                            };
                            return a.createElement("div", {
                                ref: this.setRef
                            }, a.createElement(n, r.__assign({}, this.props, e)))
                        }, l.prototype.checkVisible = function(e) {
                            return r.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return r.__generator(this, function(r) {
                                    return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                        hadImpression: t,
                                        didScroll: n
                                    }), this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, l.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                r = this.element.getBoundingClientRect();
                            if (r.left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var i = t.percentage,
                                    a = t.pixels,
                                    o = r.bottom - r.top,
                                    c = n.bottom - n.top,
                                    l = Math.min(n.bottom - r.top, o, c);
                                if (a) {
                                    if (o >= a) return l >= a;
                                    i = 100
                                }
                                return !i || 100 * (l / o) >= i
                            }
                            return !1
                        }, l.prototype.isScrolled = function() {
                            if (!this.scrollContext) return !1;
                            var e = this.scrollContext.getScrollContent();
                            return !(!e || 0 === e.scrollTop)
                        }, l.contextTypes = {
                            registerReceiver: i.func,
                            getScrollContent: i.func
                        }, l
                    }(a.Component)
                }
            }
            n.d(t, "a", function() {
                return c
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
        KbPt: function(e, t, n) {},
        "L+W6": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                i = n("/7QA"),
                a = n("a5fV"),
                o = n("W8Fi"),
                s = n("Ue10"),
                c = (n("W5/R"), function(e) {
                    var t = e.subscriptionProduct;
                    if (void 0 === t) return r.createElement("div", null);
                    var n = Object(o.e)([e.subscriptionProduct]),
                        c = Object(o.g)([e.subscriptionProduct]),
                        l = Object(o.f)([e.subscriptionProduct]),
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
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && l ? p = Object(i.d)("{price} / First Month", {
                                price: Object(o.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : c && (p = Object(i.d)("{price} for the first month (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(i.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return r.createElement(s.Xa, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, r.createElement(s.W, {
                            className: "sub-discount-price-label__original-price",
                            color: s.O.Alt2,
                            decoration: s.Nb.Strikethrough
                        }, u), r.createElement(s.W, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return r.createElement(s.Xa, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, r.createElement(s.W, null, u))
                });
            n.d(t, !1, function() {
                return "sub-discount-price-label__discounted"
            }), n.d(t, !1, function() {
                return "sub-discount-price-label__non-discounted"
            }), n.d(t, "a", function() {
                return c
            })
        },
        MPK0: function(e, t, n) {},
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
                return b
            }), n.d(t, "h", function() {
                return h
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
                return E
            }), n.d(t, "m", function() {
                return N
            }), n.d(t, "k", function() {
                return _
            });
            var r, i, a = n("TSYQ"),
                o = n("cr+I"),
                s = n("q1tI"),
                c = n("/7QA"),
                l = n("ht6z"),
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
                            return Object(c.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click <x:link>here to learn more</x:link>.", {
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
                            return Object(c.d)("Something has gone wrong. Please try again later.", "PrimeError")
                    }
                };
            ! function(e) {
                e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
            }(p || (p = {}));
            var g, b = function(e) {
                    return e === r.Vertical
                },
                h = function(e, t) {
                    var n = t === r.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                v = function() {
                    return S("seenOffers")
                },
                k = function(e) {
                    c.m.set("seenOffers", e)
                },
                y = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                S = function(e) {
                    return c.m.get(e, [])
                },
                O = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(l.a)(t))
                };
            ! function(e) {
                e.DateOverride = "dateOverride", e.CountryCode = "countryCode"
            }(g || (g = {}));
            var C = function(e) {
                    var t = location.search,
                        n = o.parse(t);
                    return n && n[e] || void 0
                },
                E = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                N = function(e) {
                    return e && e.loading
                },
                _ = function(e) {
                    return T().includes(e)
                },
                T = function() {
                    return c.b.get("prime_gift_experiment_offer_ids", [])
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
        PDCe: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserCommunity"
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
                                    value: "ReportUserInCommunityInput"
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
                                value: "reportUserInCommunity"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 138
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
                c = /iPod/i,
                l = /BlackBerry/i,
                d = /Windows Phone/i,
                u = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || o.test(e) || s.test(e) || c.test(e) || l.test(e) || d.test(e) || u.test(e)
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
                c = n("yR8l"),
                l = n("GnwI"),
                d = n("+PZR"),
                u = n("Ue10"),
                p = n("gIsd"),
                m = function(e) {
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
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(d.b)()).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(u.vb, {
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
                f = Object(s.compose)(Object(c.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(l.b)("ReportReasonSelect"))(m);
            n("y4Ne");
            n.d(t, "a", function() {
                return b
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "c", function() {
                return h
            });
            var g, b = "community_rules_violation";
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
            }(g || (g = {}));
            var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        if (e.preventDefault(), t.state.reason && t.state.description.length > 0) {
                            if (t.state.reason === b && !t.state.selectedCommunityID) {
                                if (!t.props.targetUser.directories.nodes.length) return void t.props.onError(g.CommunityError);
                                t.props.onError(g.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(g.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? a.createElement("div", null, a.createElement(u.z, {
                        onClick: this.props.onClose
                    }, a.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.W, {
                        type: u.Pb.H4
                    }, this.props.title), a.createElement(u.zb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u.zb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(f, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(u.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(u.Mb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u.zb, {
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, a.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case g.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case g.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case g.CommunityError:
                            e = Object(o.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return a.createElement(u.zb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== g.Success,
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
                return c
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "q", function() {
                return g
            }), n.d(t, "r", function() {
                return b
            }), n.d(t, "l", function() {
                return h
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
                return N
            }), n.d(t, "o", function() {
                return _
            }), n.d(t, "h", function() {
                return T
            }), n.d(t, "g", function() {
                return R
            }), n.d(t, "f", function() {
                return D
            });
            var r, i, a, o, s, c, l = n("/7QA"),
                d = n("2xye"),
                u = n("O4UZ");

            function p(e) {
                l.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: r.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                l.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? r.Open : r.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                l.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: r.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function g(e) {
                E(e, i.Click, o.StartYourFreeTrial)
            }

            function b(e) {
                E(e, i.Hover, o.StartYourFreeTrial)
            }

            function h(e, t) {
                E(t, i.Click, e ? o.MoreInfo : o.CloseInfo)
            }

            function v(e, t) {
                C(e, i.Click, t)
            }

            function k(e) {
                E(e, i.Hover, o.MoreInfo)
            }

            function y(e) {
                E(e, i.Hover, o.CloseInfo)
            }

            function S(e, t) {
                C(e, i.Hover, t)
            }

            function O(e) {
                E(e, i.Impression, o.Offer)
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
                r && E(e, t, r)
            }

            function E(e, t, n) {
                l.o.track(d.SpadeEventType.PrimeOfferInteraction, {
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

            function N(e) {
                l.o.track(d.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function _(e) {
                l.o.track(d.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function T() {
                I(a.Impression)
            }

            function R() {
                I(a.Hover)
            }

            function D() {
                I(a.Click)
            }

            function I(e) {
                l.o.track(d.SpadeEventType.PrimeBlueBarInteraction, {
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
            }(c || (c = {}))
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
        TJ6v: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ViewerCardModActions"
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
                            name: {
                                kind: "Name",
                                value: "chatRoomBanStatus"
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userID"
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
                                        value: "isPermanent"
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
                    end: 189
                }
            };
            n.loc.source = {
                body: "query ViewerCardModActions($targetUserID: ID! $channelID: ID!) {\n# This is currently backwards on the server\nchatRoomBanStatus(channelID: $targetUserID userID: $channelID) {\nisPermanent\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        XeSG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ViewerCardModActions_BanUser"
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
                                    value: "BanUserFromChatRoomInput"
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
                                value: "banUserFromChatRoom"
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
                                        value: "ban"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 135
                }
            };
            n.loc.source = {
                body: "mutation ViewerCardModActions_BanUser($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        a5fV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            });
            var r = n("/7QA");

            function i(e, t) {
                return e / Math.pow(10, t)
            }

            function a(e, t) {
                return Object(r.f)(e, {
                    style: "currency",
                    currency: t
                })
            }
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
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("/7QA"),
                l = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                f = n("D7An"),
                g = n("2xye"),
                b = n("GnwI"),
                h = n("QVaV"),
                v = n("Ue10"),
                k = (n("MPK0"), "report-wizard-block"),
                y = "report-wizard-unblock",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(v.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, a.createElement(v.Xa, {
                                display: v.X.Flex,
                                alignItems: v.f.Center
                            }, a.createElement(v.ob, {
                                type: v.qb.Brand,
                                asset: v.pb.Ban
                            }), a.createElement(v.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(v.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: v.X.Flex,
                                alignItems: v.f.Center
                            }, a.createElement(v.ob, {
                                type: v.qb.Success,
                                asset: v.pb.FollowCheck
                            }), a.createElement(v.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(v.W, {
                                className: "block-user__success",
                                type: v.Pb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), a.createElement(v.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, a.createElement(v.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(h.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(v.zb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(v.Xa, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(v.zb, {
                            color: v.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(v.Yb, {
                            baseFontSize: v.Ca.Size6
                        }, a.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(v.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component),
                O = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var C, E = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(c.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                N = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: E.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: E.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: O.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: O.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: O.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: O.b.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(c.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(c.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: O.b.Spam
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
                        reportReason: O.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: O.b.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: O.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: O.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: O.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: O.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: O.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: O.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: O.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: O.b.Miscategorized
                    },
                    video_general: {
                        getTitle: E.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: O.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: O.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: E.abusiveViolence,
                        value: "threatening violence",
                        reportReason: O.b.Harm
                    },
                    commitingViolence: {
                        getTitle: E.commitingViolence,
                        value: "committing violence",
                        reportReason: O.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: O.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: O.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: O.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: O.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: O.b.Harm
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
                        reportReason: O.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: O.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: O.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: O.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: O.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: O.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: O.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: O.b.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: O.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: O.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: O.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: E.me,
                        value: "impersonating me",
                        reportReason: O.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: O.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: E.someoneElse,
                        value: "impersonating someone else",
                        reportReason: O.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: O.b.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(c.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: O.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: O.b.OffensiveUsername
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
                            return Object(c.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: O.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: E.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: E.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: E.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: O.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: E.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: O.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: O.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: O.b.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(c.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                _ = function(e) {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(v.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(v.Xa, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(v.Ea, {
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
                                case r.Text:
                                    return a.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return a.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(v.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(v.Xa, {
                                        display: v.X.Flex
                                    }, a.createElement(v.Xa, {
                                        display: v.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(v.ob, {
                                        asset: v.pb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!i || !!i && 0 === i.trim().length);
                                    return a.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(v.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(v.Mb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return a.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(v.lb, {
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
                }(a.Component),
                T = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(C || (C = {}));
            var R, D, I, U = {
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
                j = {
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
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
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
                P = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: j.thanks,
                    type: C.Info,
                    value: "end card"
                },
                F = {
                    socialMedia: i.__assign({}, P, {
                        items: [N.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, P, {
                        items: [N.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: j.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [N.endLink_DMCA, N.endLink_trademark, N.endLink_devAgreement],
                        type: C.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: j.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [N.endLink_selfharm],
                        type: C.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: j.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [N.endLink_eventCoC],
                        value: "twitch event end",
                        type: C.Info
                    }
                },
                x = {
                    getTitle: j.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [N.video, N.whisper, N.chat, N.room, N.profile, N.username, N.report_other],
                    type: C.MultipleChoice,
                    value: "content type"
                },
                w = {
                    identifyUser: {
                        getTitle: j.reportVideo,
                        getLabel: U.identifyUser,
                        items: [N.video_streamer, N.video_someoneElse, N.video_chatSomeone],
                        type: C.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: j.reportVideo,
                        getLabel: U.contentGeneral,
                        items: [N.revealPersonalInfo, N.video_labeling, N.video_inactive, N.video_general, N.report_ip, N.violateDevAgreement, N.selfharm],
                        type: C.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: j.reportVideo,
                        getLabel: U.content,
                        items: [N.report_username, N.violence, N.abusive, N.cheating, N.scam, N.inappropriateContent, N.evasion, N.impersonation, N.underage, N.bitsViolation],
                        type: C.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                M = {
                    content: {
                        getTitle: j.reportMessage,
                        getLabel: U.contentGeneral,
                        items: [N.revealPersonalInfo, N.evasion, N.spam, N.maliciousRaid, N.report_username, N.messaging_general, N.selfharm],
                        type: C.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: j.reportMessage,
                        getLabel: U.content,
                        items: [N.report_emotes, N.violence, N.abusive, N.inappropriateContent, N.impersonation, N.underage, N.bitsViolation],
                        type: C.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                A = i.__assign({}, M.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                L = {
                    content: {
                        getTitle: j.reportProfile,
                        getLabel: U.contentGeneral,
                        items: [N.revealPersonalInfo, N.inappropriateBadge, N.inappropriateExtension, N.noModeration, N.profile_general, N.report_ip, N.violateDevAgreement, N.selfharm],
                        type: C.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: j.reportProfile,
                        getLabel: U.content,
                        items: [N.report_username, N.violence, N.abusive, N.scam, N.inappropriateContent, N.evasion, N.impersonation, N.underage, N.bitsViolation],
                        type: C.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                B = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.identifyUser,
                    items: [N.report_channelOwner, N.report_member],
                    value: "room report user",
                    type: C.MultipleChoice
                },
                W = {
                    getTitle: j.tellUsMore,
                    items: [N.input_description],
                    type: C.Confirm,
                    value: "tell us more"
                },
                z = {
                    banEvasion: i.__assign({}, W, {
                        items: [N.input_usernames, N.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, W, {
                        items: [N.input_link, N.input_connection, N.input_description],
                        nextCard: F.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: j.reportAbusive,
                        getLabel: U.relevantStatements,
                        items: [N.hateSpeech, N.harassment, N.abusiveViolence, N.commitingViolence, N.swatting, N.personalInfo],
                        type: C.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [N.threat_me, N.threat_person, N.threat_group, N.threat_selfharm],
                        type: C.MultipleChoice,
                        value: "violence type"
                    }
                },
                X = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [N.location_onTwitch, N.location_anotherSite, N.location_TwitchEvent],
                        type: C.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: U.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [N.external_incitingRaids, N.external_threatening, N.external_harassment],
                        type: C.MultipleChoice,
                        nextCard: z.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, G.violence, {
                        items: [N.threat_me, N.threat_person, N.threat_group],
                        nextCard: z.socialMedia
                    }),
                    external_abusive: i.__assign({}, G.content, {
                        items: [N.hateSpeech, N.harassment, N.external_abusiveViolence, N.external_commitingViolence, N.swatting, N.personalInfo],
                        nextCard: z.socialMedia
                    })
                },
                V = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.contentGeneral,
                    items: [N.spam_bot, N.spam_scam, N.spam_repeated],
                    type: C.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.relevantStatements,
                    items: [N.inappropriate_game, N.gory, N.sexuallyViolent, N.childAnimal, N.pornographic, N.suggestive, N.nudity, N.other],
                    type: C.MultipleChoice,
                    value: "inappropriate content type"
                },
                H = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [N.evasion_chat, N.evasion_sitewide, N.evasion_messaging],
                    type: C.MultipleChoice,
                    nextCard: z.banEvasion
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [N.impersonation_me, N.impersonation_brand, N.impersonation_other],
                    type: C.MultipleChoice,
                    value: "impersonation type"
                },
                $ = x,
                K = W,
                Y = P,
                Z = {
                    video: w.identifyUser,
                    whisper: A,
                    chat: M.content,
                    profile: L.content,
                    room: B,
                    "somewhere else": X.identifyLocation,
                    streamer: w.content,
                    "someone else in video": w.content,
                    "someone in chat": M.content,
                    general_video: w.general,
                    general_messaging: M.general,
                    general_profile: L.general,
                    "channel owner": L.content,
                    "community member": M.content,
                    "on twitch": L.content,
                    "another site": X.externalSite,
                    "twitch event": F.twitchEvent,
                    "brigading/raids": z.socialMedia,
                    threatening: X.external_violence,
                    "hateful/harassing": X.external_abusive,
                    "external site; threatening violence": X.external_violence,
                    "external site; committing violence": X.external_violence,
                    "external site; scam": z.socialMedia,
                    "ban evasion": H,
                    spam: V,
                    hateful: G.content,
                    impersonation: Q,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": q,
                    "intellectual property": F.legal,
                    "violating developer agreement": F.legal
                },
                J = {
                    selfharm: F.selfharm,
                    harm: F.violence,
                    other: Y
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: L.content,
                    COMMUNITY_REPORT: L.content,
                    CHAT_REPORT: M.content,
                    CLIP_REPORT: w.content,
                    EVENT_REPORT: L.content,
                    EXTENSION_REPORT: L.content,
                    LIVE_UP_REPORT: L.content,
                    ROOM_REPORT: B,
                    WHISPER_REPORT: A,
                    VOD_COMMENT_REPORT: M.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                re = "report-wizard-next",
                ie = "report-wizard-submit",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || $,
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
                            return a.createElement(v.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(v.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ne,
                                i = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case C.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = re, i = !t.state.currentSelection;
                                    break;
                                case C.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = ie
                            }
                            return a.createElement(v.Xa, null, o, a.createElement(v.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, a.createElement(v.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(v.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: v.X.InlineBlock
                            }, a.createElement(v.z, {
                                type: v.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, a.createElement(v.Xa, {
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
                                return t.props.trackClose(I.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || K;
                                Z[t.state.currentSelection.value] && (s = Z[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    l = s.type === C.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: c,
                                    prevCards: l ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: a,
                                    currentSelection: i || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(D.Next, e.value)
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
                                if (e.type !== r.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    i = n && 0 === n.trim().length;
                                return !n || i
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case T.b.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case T.b.Success:
                                                    r = Y, J[t] && (r = J[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(D.Submit)
                                                    });
                                                    break;
                                                case T.b.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case T.b.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(T.b.FormError), this.setState({
                                                error: e
                                            }), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, o = this;
                                return i.__generator(this, function(i) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return o.trackNavigation(D.Back, e.value)
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
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(I.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === C.Info && this.state.currentCard.blockPrompt ? a.createElement(S, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(v.zb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === C.Info ? null : this.renderPrimer();
                        return a.createElement(v.zb, {
                            className: "reporting-wizard",
                            display: v.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: v.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(v.W, {
                            bold: !0,
                            fontSize: v.Ca.Size4
                        }, this.getTitle()), n, a.createElement(v.Xa, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(_, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === T.b.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                oe = n("+PZR"),
                se = n("PDCe"),
                ce = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return D
                }), n.d(t, "a", function() {
                    return I
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(R || (R = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(D || (D = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(I || (I = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r, a, o) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, s, l, d, u = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== T.a) return [3, 5];
                                        l = {
                                            userID: this.props.data.targetUser.id,
                                            communityID: r || "",
                                            reason: t
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(l))];
                                    case 2:
                                        return i.sent(), c.p.tracking.track(g.SpadeEventType.CommunityModeration, {
                                            community_id: r,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: T.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(R.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), c.k.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: T.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (s = o === O.a.Whisper ? o : this.props.reportContext.contentType, l = {
                                                description: t,
                                                reason: e,
                                                content: s,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }, this.props.reportContext.contentType === O.a.Community && this.props.reportContext.extra && (l.description = Object(oe.a)(this.props.reportContext.extra, t)), null === l.targetID) return this.setState({
                                            submitStatus: T.b.UserError
                                        }), [2];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(l))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === O.a.Community && c.p.tracking.track(g.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: T.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(R.Submit)
                                        }), [3, 9];
                                    case 8:
                                        return d = i.sent(), c.k.error(d, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: T.b.MutationError
                                        }), [3, 9];
                                    case 9:
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(D.Open, void 0, e) : n.trackAction(R.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(D.Close, t, void 0, e) : n.trackAction(R.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i) {
                        c.p.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.b.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: i,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.b.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = c.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: T.b.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return a.createElement(v.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(v.W, {
                        fontSize: v.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(v.eb, {
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
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(v.Za, null) : a.createElement(ae, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(T.c, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(v.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(v.W, {
                        fontSize: v.Ca.Size5
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
            }(a.Component);
            var ue = Object(s.compose)(Object(l.a)(se, {
                name: "reportUserInCommunity"
            }), Object(l.a)(ce, {
                name: "reportUser"
            }), Object(l.a)(le, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(b.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(o.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        fbdC: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                c = n("q1tI"),
                l = n("/7QA"),
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
                        return c.cloneElement(t.props.confirmButton, {
                            onClick: t.handleConfirmClick,
                            "data-test-selector": r.ConfirmButton
                        })
                    }, t.handleConfirmClick = function() {
                        t.props.closeModal(), t.props.onConfirmClick()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(u.zb, {
                        background: u.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column
                    }, c.createElement(u.Xa, {
                        "data-test-selector": r.Message
                    }, this.props.message), c.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row,
                        justifyContent: u.Wa.Center,
                        padding: {
                            top: 2
                        }
                    }, c.createElement(u.Xa, {
                        padding: {
                            right: .5
                        }
                    }, c.createElement(u.z, {
                        type: u.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(l.d)("Cancel", "SettingsConfirmationModal"))), c.createElement(u.Xa, {
                        padding: {
                            left: .5
                        }
                    }, this.renderConfirmButton())), c.createElement(d.a, null))
                }, t
            }(c.Component);
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
                return c
            });
            var r = "sm_tw_tup_ntp_t_all",
                i = "sm_tw_thp_blue_t_all",
                a = "sm_w_tup_ntp_t_c",
                o = "sm_om_tpltp",
                s = n("/7QA").k.withCategory("PrimeUtilsLogger");

            function c(e, t) {
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
        l0e4: function(e, t, n) {},
        lZZ2: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("fbdC"),
                l = n("BhFH"),
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
                        return i.createElement(i.Fragment, null, i.createElement(p.zb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            textAlign: p.Lb.Center
                        }, i.createElement(p.W, {
                            bold: !0,
                            type: p.Pb.H4
                        }, Object(s.d)("Block {displayName}?", {
                            displayName: n
                        }, "BlockModal"))), i.createElement(p.zb, {
                            color: p.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(p.Yb, {
                            baseFontSize: p.Ca.Size6
                        }, i.createElement("p", null, Object(s.d)("Blocking {displayName} will:", {
                            displayName: n
                        }, "BlockModal")), i.createElement("ul", null, i.createElement("li", null, Object(s.d)("Prevent them from sending you whispers", "BlockModal")), i.createElement("li", null, Object(s.d)("Prevent them from hosting you", "BlockModal")), i.createElement("li", null, Object(s.d)("Prevent them from adding you as a friend", "BlockModal")), i.createElement("li", null, Object(s.d)("Filter their messages out of chats you don’t moderate", "BlockModal"))))))
                    }, n
                }(i.Component)
            }
            var f = Object(o.compose)(Object(l.a)(), Object(a.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showConfirmationModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(u.d)(c.a, t)
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
                c = n("UUve"),
                l = n("1/iK"),
                d = n("aCAx"),
                u = n("kRBY"),
                p = n("tY8L"),
                m = n("/HY+"),
                f = n("q1tI"),
                g = n("oJmH"),
                b = n("/7QA"),
                h = n("7CzK"),
                v = n("eJ65"),
                k = n("rqzT"),
                y = n("yR8l"),
                S = n("tIid"),
                O = n("D7An"),
                C = n("3GF+"),
                E = n("iS14"),
                N = n("DMoW"),
                _ = n("TvOw"),
                T = n("lZZ2"),
                R = n("GnwI"),
                D = n("Ue10"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isIgnored: !1
                        }, t.ignoreUser = function() {
                            t.props.showBlockModal({
                                context: N.c.CHAT,
                                currentUserData: t.props.currentUserData,
                                displayName: t.props.targetDisplayName,
                                login: t.props.targetLogin,
                                onBlock: function() {
                                    return t.setState({
                                        isIgnored: !0
                                    })
                                },
                                reason: _.a.Other,
                                userID: t.props.targetUserID
                            })
                        }, t.unignoreUser = function() {
                            t.props.unblockUserMutation(t.props.targetUserID, t.props.currentUserData), t.setState({
                                isIgnored: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.state.isIgnored) {
                            var e = Object(b.d)("Unblock User", "ViewerCardIgnoreAction");
                            return f.createElement(D.Sb, {
                                key: "Ignore",
                                label: e,
                                direction: D.Ub.Top,
                                align: D.Tb.Right,
                                offsetX: "15%"
                            }, f.createElement(D.A, {
                                icon: D.pb.Unignore,
                                ariaLabel: Object(b.d)("Unblock {displayName}", {
                                    displayName: this.props.targetDisplayName
                                }, "ViewerCardIgnoreAction"),
                                onClick: this.unignoreUser,
                                overlay: !0
                            }))
                        }
                        var t = Object(b.d)("Block User", "ViewerCardIgnoreAction");
                        return f.createElement(D.Sb, {
                            key: "Ignore",
                            label: t,
                            direction: D.Ub.Top,
                            align: D.Tb.Right,
                            offsetX: "15%"
                        }, f.createElement(D.A, {
                            icon: D.pb.Ignore,
                            ariaLabel: Object(b.d)("Block {displayName}", {
                                displayName: this.props.targetDisplayName
                            }, "ViewerCardIgnoreAction"),
                            onClick: this.ignoreUser,
                            overlay: !0
                        }))
                    }, t
                }(f.Component),
                U = Object(o.compose)(T.a, Object(E.a)(), Object(R.b)("ViewerCardIgnoreAction"))(I),
                j = n("geRD"),
                P = n("XeSG"),
                F = n("sO6I"),
                x = n("TJ6v"),
                w = "10 minutes",
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBanClick = function() {
                            var e = t.props,
                                n = e.banUser,
                                r = e.channelID,
                                i = e.userLogin;
                            t.props.confirmModerationAction && !t.props.confirmModerationAction() || n(Object(j.a)({
                                channelID: r,
                                bannedUserLogin: i
                            }))
                        }, t.onTimeoutClick = function() {
                            var e = t.props,
                                n = e.banUser,
                                r = e.channelID,
                                i = e.userLogin;
                            t.props.confirmModerationAction && !t.props.confirmModerationAction() || n(Object(j.a)({
                                channelID: r,
                                bannedUserLogin: i,
                                expiresIn: w
                            }))
                        }, t.onUnbanClick = function() {
                            var e = t.props,
                                n = e.unbanUser,
                                r = e.channelID,
                                i = e.userLogin;
                            t.props.confirmModerationAction && !t.props.confirmModerationAction() || n(Object(j.a)({
                                channelID: r,
                                bannedUserLogin: i
                            }))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return f.createElement(D.Xa, {
                            display: D.X.InlineFlex
                        }, this.getContent())
                    }, t.prototype.getContent = function() {
                        return this.props.data.loading || this.props.data.error ? [this.renderBanAction(!0), this.renderTimeoutAction(!0)] : this.props.data.chatRoomBanStatus ? this.props.data.chatRoomBanStatus.isPermanent ? [this.renderUnbanAction(), this.renderTimeoutAction(!0)] : [this.renderBanAction(), this.renderUntimeoutAction()] : [this.renderBanAction(), this.renderTimeoutAction()]
                    }, t.prototype.renderTimeoutAction = function(e) {
                        void 0 === e && (e = !1);
                        var t = Object(b.d)("Timeout User", "ViewerCardModActions");
                        return f.createElement(D.Xa, {
                            key: "Timeout",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(D.Sb, {
                            label: t,
                            direction: D.Ub.Top,
                            align: D.Tb.Left,
                            offsetX: "20%"
                        }, f.createElement(D.A, {
                            icon: D.pb.Timeout,
                            disabled: e,
                            ariaLabel: t,
                            onClick: this.onTimeoutClick
                        })))
                    }, t.prototype.renderUntimeoutAction = function() {
                        var e = Object(b.d)("Untimeout User", "ViewerCardModActions");
                        return f.createElement(D.Xa, {
                            key: "Untimeout",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(D.Sb, {
                            label: e,
                            direction: D.Ub.Top,
                            align: D.Tb.Left,
                            offsetX: "20%"
                        }, f.createElement(D.A, {
                            icon: D.pb.FollowCheck,
                            ariaLabel: e,
                            onClick: this.onUnbanClick
                        })))
                    }, t.prototype.renderBanAction = function(e) {
                        void 0 === e && (e = !1);
                        var t = Object(b.d)("Ban User", "ViewerCardModActions");
                        return f.createElement(D.Xa, {
                            key: "Ban",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(D.Sb, {
                            label: t,
                            direction: D.Ub.Top,
                            align: D.Tb.Left,
                            offsetX: "20%"
                        }, f.createElement(D.A, {
                            icon: D.pb.Ban,
                            disabled: e,
                            ariaLabel: t,
                            onClick: this.onBanClick
                        })))
                    }, t.prototype.renderUnbanAction = function() {
                        var e = Object(b.d)("Unban User", "ViewerCardModActions");
                        return f.createElement(D.Xa, {
                            key: "Unban",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(D.Sb, {
                            label: e,
                            direction: D.Ub.Top,
                            align: D.Tb.Left,
                            offsetX: "20%"
                        }, f.createElement(D.A, {
                            icon: D.pb.FollowCheck,
                            ariaLabel: e,
                            onClick: this.onUnbanClick
                        })))
                    }, t = i.__decorate([Object(R.b)("ViewerCardModActions"), Object(y.a)(x, {
                        options: function(e) {
                            return {
                                variables: {
                                    targetUserID: e.userID,
                                    channelID: e.channelID
                                },
                                fetchPolicy: "cache-and-network"
                            }
                        }
                    }), Object(y.a)(P, {
                        name: "banUser",
                        options: function(e) {
                            return {
                                update: function(t, n) {
                                    ! function(e, t, n) {
                                        var r = e.readQuery({
                                            query: x,
                                            variables: {
                                                targetUserID: n.userID,
                                                channelID: n.channelID
                                            }
                                        });
                                        r && (t && t.data && (r.chatRoomBanStatus = {
                                            isPermanent: !0,
                                            __typename: "ChatRoomBanStatus"
                                        }), e.writeQuery({
                                            query: x,
                                            variables: {
                                                targetUserID: n.userID,
                                                channelID: n.channelID
                                            },
                                            data: r
                                        }))
                                    }(t, n, e)
                                }
                            }
                        }
                    }), Object(y.a)(F, {
                        name: "unbanUser",
                        options: function(e) {
                            return {
                                update: function(t) {
                                    ! function(e, t) {
                                        var n = e.readQuery({
                                            query: x,
                                            variables: {
                                                targetUserID: t.userID,
                                                channelID: t.channelID
                                            }
                                        });
                                        if (n) {
                                            var r = i.__assign({}, n, {
                                                chatRoomBanStatus: null
                                            });
                                            e.writeQuery({
                                                query: x,
                                                variables: {
                                                    targetUserID: t.userID,
                                                    channelID: t.channelID
                                                },
                                                data: r
                                            })
                                        }
                                    }(t, e)
                                }
                            }
                        }
                    })], t)
                }(f.Component),
                A = n("WytW"),
                L = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.modUser = function() {
                            n.props.confirmModerationAction && !n.props.confirmModerationAction() || (n.props.sendMessageToTMI(Object(A.g)(n.props.targetLogin)), n.setState({
                                isModerator: !0
                            }))
                        }, n.unmodUser = function() {
                            n.props.confirmModerationAction && !n.props.confirmModerationAction() || (n.props.sendMessageToTMI(Object(A.h)(n.props.targetLogin)), n.setState({
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
                            var e = Object(b.d)("Unmod User", "ViewerCardOwnerActions");
                            return f.createElement(D.Xa, {
                                key: "OP",
                                display: D.X.InlineFlex,
                                padding: {
                                    right: 1
                                }
                            }, f.createElement(D.Sb, {
                                label: e,
                                direction: D.Ub.Top,
                                align: D.Tb.Center
                            }, f.createElement(D.A, {
                                icon: D.pb.FollowCheck,
                                ariaLabel: e,
                                onClick: this.unmodUser
                            })))
                        }
                        e = Object(b.d)("Mod User", "ViewerCardOwnerActions");
                        return f.createElement(D.Xa, {
                            key: "OP",
                            display: D.X.InlineFlex,
                            padding: {
                                right: 1
                            }
                        }, f.createElement(D.Sb, {
                            label: e,
                            direction: D.Ub.Top,
                            align: D.Tb.Center
                        }, f.createElement(D.A, {
                            icon: D.pb.OP,
                            ariaLabel: e,
                            onClick: this.modUser
                        })))
                    }, t = i.__decorate([Object(R.b)("ViewerCardOwnerActions")], t)
                }(f.Component),
                B = n("oK83"),
                W = n("0tEc"),
                z = n("4qQ0"),
                G = n("JMwM"),
                X = n("L+W6"),
                V = n("br9A"),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getSubscribeButton = function() {
                            var e = t.props.subscriptionProducts[0],
                                n = Object(b.d)("Gift All-Access Pass", "CampaignsGiftDescription");
                            return f.createElement(G.a, {
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
                                action: V.a.BuyGiftSub,
                                checkoutButtonTier: t.props.subscriptionProducts[0].price,
                                giftRecipient: t.props.giftRecipient ? t.props.giftRecipient : null
                            })
                        }, t.handleSubMenuAction = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return f.createElement(D.Xa, null, f.createElement(D.Xa, {
                            display: D.X.Flex,
                            justifyContent: D.Wa.Between,
                            alignItems: D.f.Center,
                            fullWidth: !0
                        }, f.createElement(D.W, {
                            bold: !0,
                            type: D.Pb.H5
                        }, Object(b.d)("Gift the Overwatch League All-Access Pass", "CampaignsGiftDescription")), f.createElement(D.z, {
                            type: D.F.Text,
                            icon: D.pb.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "sub-gift-select-back-button"
                        }, f.createElement(D.Xa, {
                            alignItems: D.f.Center,
                            display: D.X.InlineFlex
                        }, f.createElement(D.W, null, Object(b.d)("Back", "CampaignsGiftDescription"))))), f.createElement(D.Xa, {
                            className: "channel-header__subscription-balloon-options"
                        }, f.createElement(D.Xa, null, f.createElement(D.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, f.createElement(D.W, null, Object(b.d)("Exclusive Command Center stream access plus Passholder-only chat, Post-match Q&A and match-analysis videos by players, and 23 Twitch emotes, 2 Twitch badges and more!", "CampaignsGiftDescription"))), f.createElement(X.a, {
                            subscriptionProduct: this.props.subscriptionProducts[0],
                            isGift: !0,
                            isOneTime: !0
                        }), f.createElement(D.Xa, {
                            margin: {
                                top: 1,
                                right: 1
                            }
                        }, this.getSubscribeButton()))))
                    }, t
                }(f.Component),
                H = n("DqL7"),
                Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onGiftSelect = function() {
                            t.props.onGiftSelect && t.props.onGiftSelect()
                        }, t.handleSubMenuAction = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.isEsportChannel ? f.createElement(q, {
                            onBack: this.props.onBack,
                            subscriptionProducts: this.props.subscriptionProducts,
                            giftRecipient: this.props.giftRecipient,
                            handleSubMenuAction: this.props.handleSubMenuAction
                        }) : f.createElement(D.Xa, null, f.createElement(D.Xa, {
                            display: D.X.Flex,
                            justifyContent: D.Wa.Between,
                            alignItems: D.f.Center,
                            fullWidth: !0
                        }, f.createElement(D.W, {
                            bold: !0,
                            type: D.Pb.H5
                        }, Object(b.d)("Choose A Gift Subscription", "GiftTierTabs")), f.createElement(D.z, {
                            type: D.F.Text,
                            icon: D.pb.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "sub-gift-select-back-button"
                        }, f.createElement(D.Xa, {
                            alignItems: D.f.Center,
                            display: D.X.InlineFlex
                        }, f.createElement(D.W, null, Object(b.d)("Back", "GiftTierTabs"))))), f.createElement(H.a, {
                            canPrimeSubscribe: !1,
                            channelDisplayName: this.props.channelDisplayName,
                            giftRecipient: this.props.giftRecipient,
                            handleSubMenuAction: this.handleSubMenuAction,
                            isGift: !0,
                            isSubscribed: !1,
                            onGiftSelect: this.onGiftSelect,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: !1
                        }))
                    }, t
                }(f.Component),
                $ = n("4iu0"),
                K = n("NMMG"),
                Y = (n("EtPo"), n("Jl6Y"));
            ! function(e) {
                e[e.ActionsPage = 0] = "ActionsPage", e[e.SubGiftSelectPage = 1] = "SubGiftSelectPage"
            }(r || (r = {}));
            var Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: r.ActionsPage
                        }, t.getContent = function() {
                            if (t.props.data.loading || t.props.data.error) return f.createElement(D.zb, {
                                background: D.r.Base,
                                fullHeight: !0,
                                fullWidth: !0,
                                padding: 2
                            }, f.createElement(D.Za, {
                                fillContent: !0
                            }));
                            var e = {
                                    backgroundImage: "url(" + (t.props.data.targetUser.bannerImageURL || h) + ")"
                                },
                                n = t.state.currentPage === r.ActionsPage ? t.renderActions() : t.renderSubGiftSelect();
                            return f.createElement(D.zb, {
                                border: !0,
                                className: "viewer-card",
                                elevation: 1,
                                "data-a-target": "viewer-card"
                            }, f.createElement(D.Qa, {
                                background: D.r.AccentAlt2
                            }, f.createElement("div", {
                                className: "viewer-card__background",
                                style: e
                            }, f.createElement(D.Xa, {
                                display: D.X.Flex,
                                flexDirection: D.Aa.Column,
                                fullHeight: !0,
                                fullWidth: !0,
                                className: "viewer-card__overlay"
                            }, f.createElement(D.zb, {
                                alignItems: D.f.Center,
                                background: D.r.Overlay,
                                className: "viewer-card__banner",
                                display: D.X.Flex,
                                flexDirection: D.Aa.Row,
                                flexGrow: 1,
                                fullWidth: !0,
                                justifyContent: D.Wa.Start,
                                padding: 1,
                                position: D.fb.Relative,
                                textAlign: D.Lb.Center
                            }, f.createElement(C.a, null, f.createElement(D.q, {
                                src: t.props.data.targetUser.profileImageURL,
                                size: 50,
                                alt: t.props.data.targetUser.displayName
                            })), f.createElement(C.a, null, f.createElement(D.Xa, {
                                alignItems: D.f.Center,
                                margin: 1,
                                className: "viewer-card__display-name",
                                textAlign: D.Lb.Left,
                                ellipsis: !0
                            }, f.createElement(D.W, {
                                color: D.O.Overlay,
                                type: D.Pb.H4
                            }, f.createElement(D.U, {
                                hoverUnderlineNone: !0,
                                targetBlank: !0,
                                to: "/" + t.props.targetLogin,
                                type: D.V.Inherit
                            }, t.props.data.targetUser.displayName)), t.renderAccountAge())), f.createElement(C.a, null, t.renderIgnoreButton()))))), n)
                        }, t.toggleGiftPage = function() {
                            var e = t.state.currentPage === r.ActionsPage ? r.SubGiftSelectPage : r.ActionsPage;
                            e === r.SubGiftSelectPage && t.trackGiftEvent(), t.setState({
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
                                title: Object(b.d)("Report {channelDisplayName}", {
                                    channelDisplayName: t.props.data.targetUser.displayName
                                }, "ReportUserModalTitle")
                            })
                        }, t.handleBuyGiftSubEvent = function(e) {
                            e.action === V.a.BuyGiftSub && t.displaySubscriptionCheckout(), Object(V.b)(i.__assign({}, e, {
                                action: V.a.BuyGiftSub,
                                channelID: t.props.channelID || "",
                                channelLogin: t.props.data.channelUser.login || "",
                                isMenuOpen: null,
                                hasSubCredit: null,
                                sub_location: "viewer_card",
                                modal: !1,
                                showPrimeContent: !0,
                                giftRecipient: t.props.data.targetUser.login
                            }))
                        }, t.trackGiftEvent = function() {
                            Object(V.b)({
                                action: V.a.GiftASub,
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.error ? null : this.getContent()
                    }, t.prototype.renderIgnoreButton = function() {
                        var e = this.props.data.currentUser;
                        return !this.props.isEmbedded && e && this.props.data.targetUser && e.login !== this.props.targetLogin ? f.createElement(D.Xa, {
                            key: "Ignore",
                            position: D.fb.Absolute,
                            attachRight: !0,
                            attachBottom: !0,
                            margin: {
                                bottom: .5,
                                right: .5
                            }
                        }, f.createElement(U, {
                            currentUserData: e,
                            targetDisplayName: this.props.data.targetUser.displayName,
                            targetLogin: this.props.targetLogin,
                            targetUserID: this.props.data.targetUser.id
                        })) : null
                    }, t.prototype.renderActions = function() {
                        var e = this.props.data.currentUser;
                        return e && e.login === this.props.targetLogin ? null : f.createElement(D.zb, {
                            className: "viewer-card__actions",
                            "data-test-selector": "viewer-card-actions",
                            attachBottom: !0
                        }, this.renderSocialActions(), this.renderChatActions())
                    }, t.prototype.renderSocialActions = function() {
                        return this.props.isEmbedded || this.props.data.channelUser.self && this.props.data.channelUser.self.banStatus && this.props.data.channelUser.self.banStatus.isPermanent && this.props.sourceType !== B.a.viewer_list_mod_section ? null : f.createElement(D.zb, {
                            alignItems: D.f.Start,
                            display: D.X.Flex,
                            background: D.r.Base,
                            flexDirection: D.Aa.Row,
                            fullWidth: !0,
                            "data-test-selector": "viewer-card-social-actions"
                        }, f.createElement(D.Xa, {
                            display: D.X.Flex,
                            flexGrow: 1,
                            flexWrap: D.Ba.Wrap,
                            margin: {
                                bottom: 1,
                                left: 1,
                                top: .5
                            }
                        }, f.createElement(D.Xa, {
                            margin: {
                                right: .5,
                                top: .5
                            }
                        }, f.createElement(C.a, null, f.createElement(W.a, {
                            friendData: {
                                user: this.props.data.targetUser
                            },
                            targetID: this.props.data.targetUser.id
                        }))), f.createElement(D.Xa, {
                            margin: {
                                right: .5,
                                top: .5
                            }
                        }, f.createElement(C.a, null, this.renderWhisperButton())), f.createElement(D.Xa, {
                            margin: {
                                top: .5
                            }
                        }, f.createElement(C.a, null, this.renderGiftSubscriptionButton()))), f.createElement(D.Xa, {
                            margin: {
                                x: .5,
                                y: 1
                            }
                        }, f.createElement(C.a, null, f.createElement(v.a, {
                            key: "MoreOptionsButton"
                        }, f.createElement(D.A, {
                            ariaLabel: Object(b.d)("More options", "ViewerCard"),
                            icon: D.pb.More,
                            "data-a-target": "viewer-card-more-button"
                        }), f.createElement(D.u, {
                            direction: D.v.BottomRight,
                            "data-a-target": "viewer-card-more-balloon"
                        }, f.createElement(D.Xa, {
                            padding: {
                                y: 1
                            }
                        }, f.createElement(D.Ua, {
                            onClick: this.handleReportUserClick,
                            "data-a-target": "viewer-card-report-button"
                        }, f.createElement(D.Xa, {
                            padding: {
                                x: 1
                            }
                        }, Object(b.d)("Report {user}", {
                            user: this.props.targetLogin
                        }, "ViewerCard")))))))))
                    }, t.prototype.renderWhisperButton = function() {
                        if (!this.props.data.currentUser || !this.props.data.targetUser) return null;
                        var e = Object(K.a)(this.props.data.currentUser.id, this.props.data.targetUser.id);
                        return f.createElement(k.a, {
                            onClick: this.onWhisperButtonClick,
                            isPopout: this.props.isPopout,
                            threadID: e
                        })
                    }, t.prototype.renderGiftSubscriptionButton = function() {
                        return !this.props.data.channelUser || !this.props.data.channelUser.subscriptionProducts || this.props.data.channelUser.subscriptionProducts.length < 1 ? null : f.createElement(G.a, {
                            onClick: this.toggleGiftPage,
                            productName: this.props.data.channelUser.subscriptionProducts[0].name,
                            subProductId: this.props.data.channelUser.subscriptionProducts[0].id,
                            giftRecipient: this.props.targetLogin,
                            isEsportChannel: Object(S.a)(this.props.data.channelUser.id, this.props.sessionUser)
                        })
                    }, t.prototype.renderSubGiftSelect = function() {
                        return f.createElement(D.Xa, null, f.createElement($.a, {
                            subscriptionProducts: this.props.data.channelUser.subscriptionProducts,
                            isGift: !0
                        }), f.createElement(D.zb, {
                            background: D.r.Base,
                            attachBottom: !0,
                            display: D.X.Flex,
                            flexDirection: D.Aa.Row,
                            justifyContent: D.Wa.Between,
                            fullWidth: !0,
                            flexGrow: 0,
                            padding: 2
                        }, f.createElement(Q, {
                            onBack: this.toggleGiftPage,
                            channelDisplayName: this.props.data.channelUser.displayName,
                            subscriptionProducts: this.props.data.channelUser.subscriptionProducts,
                            giftRecipient: this.props.data.targetUser.login,
                            handleSubMenuAction: this.handleBuyGiftSubEvent,
                            isEsportChannel: Object(S.a)(this.props.data.channelUser.id, this.props.sessionUser)
                        })))
                    }, t.prototype.renderChatActions = function() {
                        var e = [];
                        return this.isModeratorOrHigher() && e.push(f.createElement(M, {
                            key: "ModActions",
                            channelID: this.props.data.channelUser.id,
                            confirmModerationAction: this.props.confirmModerationAction,
                            userID: this.props.data.targetUser.id,
                            userLogin: this.props.targetLogin
                        })), this.isOwnerOrHigher() && e.push(f.createElement(L, {
                            key: "OwnerActions",
                            confirmModerationAction: this.props.confirmModerationAction,
                            sendMessageToTMI: this.props.sendMessageToTMI,
                            targetLogin: this.props.targetLogin
                        })), e.length ? f.createElement(D.zb, {
                            display: D.X.Flex,
                            background: D.r.Alt2,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, f.createElement(C.a, null, e)) : null
                    }, t.prototype.renderAccountAge = function() {
                        if (!this.props.data.targetUser.createdAt || !this.isModeratorOrHigher()) return null;
                        var e = new Date(this.props.data.targetUser.createdAt),
                            t = (Date.now() - e.getTime()) / 36e5 > 24 ? Object(b.c)(e, "medium") : Object(b.i)(e);
                        return f.createElement(D.W, {
                            color: D.O.Overlay,
                            "data-test-selector": "viewer-card-account-age"
                        }, Object(b.d)("Account created {date}", {
                            date: t
                        }, "ViewerCard"))
                    }, t.prototype.isOwnerOrHigher = function() {
                        var e = this.props.data;
                        return !(e.loading || e.error || !e.currentUser) && (e.currentUser.roles.isGlobalMod || e.currentUser.roles.isSiteAdmin || this.isOwner())
                    }, t.prototype.isModeratorOrHigher = function() {
                        return this.isOwnerOrHigher() || this.props.data.channelUser.self && this.props.data.channelUser.self.isModerator
                    }, t.prototype.isOwner = function() {
                        var e = this.props.data;
                        return !(e.loading || e.error || !e.currentUser) && e.currentUser.id === e.channelUser.id
                    }, t.prototype.reportContentTypeFromSourceType = function(e) {
                        switch (e) {
                            case B.a.chat_message:
                                return z.a.Chat;
                            case B.a.room_message:
                                return z.a.Room;
                            case B.a.recent_raids:
                                return z.a.Raid;
                            case B.a.viewer_list:
                            default:
                                return z.a.User
                        }
                    }, t.prototype.displaySubscriptionCheckout = function() {
                        if ("yes" === b.p.experiments.getAssignment(O.b.InstreamCheckout))
                            if (this.props.sessionUser) {
                                var e = b.n.get(c.c, ""),
                                    t = b.n.get(c.b, "");
                                t && (this.props.data && this.props.data.channelUser.subscriptionProducts.map(function(e) {
                                    return e.name
                                }).includes(t) ? this.props.showSubscriptionCheckoutModal({
                                    productName: t,
                                    recipientLogin: e
                                }) : Object(c.d)())
                            } else this.props.login()
                    }, t
                }(f.Component),
                J = Object(g.compose)(Object(R.b)("ViewerCard"), Object(y.a)(Y, {
                    options: function(e) {
                        return {
                            variables: {
                                targetLogin: e.targetLogin,
                                channelID: e.channelID
                            }
                        }
                    }
                }))(Z);
            var ee = Object(a.connect)(function(e) {
                return {
                    sessionUser: Object(u.e)(e),
                    isLoggedIn: Object(u.f)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    hideViewerCard: p.c,
                    login: Object(c.e)(l.a.ViewerCard),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(d.d)(s.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(191)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(d.d)(m.a, t)
                    }
                }, e)
            })(J);
            n.d(t, "ViewerCard", function() {
                return ee
            })
        },
        rqzT: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("fvjX"),
                a = n("1/iK"),
                o = n("y5D0"),
                s = n("CzFK"),
                c = n("l1Uh"),
                l = n("mrSG"),
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
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.isPopout;
                        return e = this.props.isButtonIcon ? d.createElement(m.A, {
                            "data-test-selector": "whisper-button",
                            disabled: t,
                            icon: m.pb.Whisper,
                            onClick: this.handleClick
                        }) : d.createElement(m.z, {
                            disabled: t,
                            icon: m.pb.Whisper,
                            type: this.props.buttonType,
                            onClick: this.handleClick,
                            "data-a-target": "usercard-whisper-button",
                            "data-test-selector": "whisper-button"
                        }, Object(u.d)("Whisper", "WhisperButton")), t ? d.createElement(m.Sb, {
                            align: m.Tb.Left,
                            direction: m.Ub.Top,
                            label: Object(u.d)("Whispers are disabled in popout chat", "WhispersDisabledText")
                        }, e) : e
                    }, t
                }(d.Component),
                g = Object(i.compose)(Object(p.b)("WhisperButton", {
                    autoReportInteractive: !0
                }))(f);
            var b = Object(r.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(a.a.WhisperButton)
                    },
                    openThread: function(e) {
                        return Object(s.l)({
                            collapsed: !1,
                            threadID: e,
                            ignoreCollapseIfOpen: !0
                        }, Object(c.a)())
                    }
                }, e)
            })(g);
            n.d(t, "a", function() {
                return b
            })
        },
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
        sO6I: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ViewerCardModActions_UnbanUser"
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
                                    value: "UnbanUserFromChatRoomInput"
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
                                value: "unbanUserFromChatRoom"
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
                                        value: "ban"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 141
                }
            };
            n.loc.source = {
                body: "mutation ViewerCardModActions_UnbanUser($input: UnbanUserFromChatRoomInput!) {\nunbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\n}\n}\n}",
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
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.g)(this.props.errorType);
                        return i.createElement(s.zb, {
                            background: s.r.Alt2,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Lb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, i.createElement(s.W, {
                            type: s.Pb.H4,
                            align: s.Zb.Middle
                        }, i.createElement(s.zb, {
                            padding: 1,
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Lb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, i.createElement(s.Xa, {
                            margin: {
                                right: 1
                            },
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center
                        }, i.createElement(s.ob, {
                            asset: s.pb.DeadGlitch,
                            type: s.qb.Alert,
                            width: 20,
                            height: 20
                        })), i.createElement(s.W, {
                            type: s.Pb.P
                        }, e))))
                    }, t
                }(i.Component),
                l = Object(a.b)("PrimeError", {
                    autoReportInteractive: !0
                })(c);
            n.d(t, "a", function() {
                return l
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