(window.webpackJsonp = window.webpackJsonp || []).push([
    [191], {
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
                u = n("GnwI"),
                d = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.xb, {
                            className: "reporting-modal__container",
                            background: d.r.Base,
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
            var m = Object(s.compose)(Object(u.c)("ReportUserModal"), Object(o.connect)(null, function(e) {
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
                u = n("fvjX"),
                d = n("geRD"),
                p = n("1/iK"),
                m = n("y5D0"),
                f = "FriendEdge",
                b = "IncomingFriendRequestEdge",
                g = "",
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
                    return Object(u.bindActionCreators)({
                        onLoginClick: function() {
                            return m.e(p.a.FriendAdd)
                        }
                    }, e)
                }), Object(a.a)(O, {
                    name: "onCreateFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(d.a)({
                            targetID: e.targetID
                        }), v("createFriendRequest", "CreateFriendRequestPayload", e.targetID, h))
                    }
                }))(function(e) {
                    var t = Object(k.d)("Add Friend", "AddFriendButton");
                    switch (e.friendButtonUIType) {
                        case y.a.WhisperSettings:
                            return l.createElement(S.Sa, {
                                ariaLabel: t,
                                onClick: e.isLoggedIn ? e.onCreateFriendRequest : e.onLoginClick
                            }, l.createElement(S.Va, {
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
                N = n("aECu"),
                T = n("csdq"),
                E = Object(r.compose)(Object(a.a)(N, {
                    name: "onAcceptFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(d.a)({
                            targetID: e.targetID
                        }), v("acceptFriendRequest", "AcceptFriendRequestPayload", e.targetID, f))
                    }
                }), Object(a.a)(T, {
                    name: "onRejectFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(d.a)({
                            targetID: e.targetID
                        }), v("rejectFriendRequest", "RejectFriendRequestPayload", e.targetID, g))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return l.createElement(S.Va, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Friend Request Pending", "IncomingFriendRequestButton"));
                    var t = Object(k.d)("Accept", "IncomingFriendRequestButton"),
                        n = Object(k.d)("Reject", "IncomingFriendRequestButton");
                    return l.createElement(S.Va, null, l.createElement(S.Va, {
                        display: S.W.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, l.createElement(S.Qb, {
                        align: S.Rb.Left,
                        label: Object(k.d)("Accept Friend Request", "IncomingFriendRequestButton")
                    }, l.createElement(S.z, {
                        ariaLabel: t,
                        onClick: e.onAcceptFriendRequest,
                        "data-test-selector": "accept-button"
                    }, t))), l.createElement(S.Qb, {
                        align: S.Rb.Left,
                        label: Object(k.d)("Reject Friend Request", "IncomingFriendRequestButton")
                    }, l.createElement(S.z, {
                        ariaLabel: n,
                        onClick: e.onRejectFriendRequest,
                        type: S.F.Alert,
                        "data-test-selector": "reject-button"
                    }, n)))
                }),
                _ = n("Xcb2"),
                R = Object(r.compose)(Object(a.a)(_, {
                    name: "onCancelFriendRequest",
                    options: function(e) {
                        return c.__assign({}, Object(d.a)({
                            targetID: e.targetID
                        }), v("cancelFriendRequest", "CancelFriendRequestPayload", e.targetID, g))
                    }
                }))(function(e) {
                    if (e.friendButtonUIType === y.a.WhisperSettings) return l.createElement(S.Va, {
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
                I = n("IRYN"),
                D = Object(r.compose)(Object(a.a)(I, {
                    name: "onUnfriendUser",
                    options: function(e) {
                        return c.__assign({}, Object(d.a)({
                            targetID: e.targetID
                        }), v("unfriendUser", "UnfriendUserPayload", e.targetID, g))
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
                        if (!this.props.friendData && this.props.data && (this.props.data.loading || this.props.data.error)) return e === y.a.WhisperSettings ? null : l.createElement(S.cb, {
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
                        switch (t.user.self.friendship ? t.user.self.friendship.__typename : g) {
                            case f:
                                return l.createElement(D, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case b:
                                return l.createElement(E, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case h:
                                return l.createElement(R, {
                                    friendButtonUIType: e,
                                    targetID: this.props.targetID
                                });
                            case g:
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
            var P = Object(r.compose)(Object(s.c)("FriendButton"), Object(i.connect)(function(e) {
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
                u = n("GnwI"),
                d = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: a.createElement(d.V, {
                                italic: !0,
                                type: d.Nb.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(d.V, {
                                italic: !0,
                                type: d.Nb.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(d.Va, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(d.Va, {
                            textAlign: d.Jb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(d.V, {
                            type: d.Nb.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                    }, t
                }(a.Component),
                m = Object(u.c)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                b = n("geRD"),
                g = n("JVUd"),
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
                            t = k.k(e),
                            n = k.h("prime-claim-button", e);
                        return a.createElement(d.Va, {
                            fullWidth: !0,
                            className: n,
                            display: t ? d.W.Block : d.W.InlineBlock
                        }, this.renderClaimButton())
                    }, t.prototype.renderClaimButton = function() {
                        var e = this.props,
                            t = e.externalURL,
                            n = e.claiming,
                            r = e.offerType,
                            i = this.getButtonText();
                        if (t || r === k.e.EXTERNAL_OFFER) return a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, i));
                        var o = a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            state: n ? d.E.Loading : d.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? d.nb.Gift : void 0
                        }, i));
                        return a.createElement(d.Va, {
                            position: d.db.Relative
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
                        return !Object(k.j)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(u.c)("PrimeClaimButton"))(S),
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
                            return a.createElement(d.xb, {
                                className: "prime-claim-description__body",
                                background: d.r.Alt2,
                                border: !0,
                                position: d.db.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(d.xb, {
                                className: "prime-claim-description__body",
                                background: d.r.Base,
                                border: !0,
                                position: d.db.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: d.Ya.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(d.Va, {
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
                        return a.createElement(d.Va, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            "data-a-target": "prime-claim-description-button",
                            fullWidth: !0,
                            type: d.F.Hollow,
                            onClick: this.toggleShowDescription
                        }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                    }, t.prototype.getDescriptionButtonText = function() {
                        return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(k.k)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(a.Component)),
                N = Object(u.c)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(C),
                T = n("fvjX"),
                E = n("aCAx"),
                _ = n("kRBY"),
                R = n("ZS2+"),
                I = n("cZKs"),
                D = R.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(84)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                U = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Va, {
                            className: "prime-gift-modal",
                            position: d.db.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(D, {
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
                j = Object(u.c)("PrimeGiftModal", {
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
                        return a.createElement(d.z, {
                            type: d.F.Hollow,
                            icon: d.nb.Gift,
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
                x = Object(o.compose)(Object(u.c)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(P);
            var F = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(_.f)(e)
                    }
                }, function(e, t) {
                    return Object(T.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(E.d)(j, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(x),
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
                        return a.createElement(d.Va, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
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
                V = Object(u.c)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(A),
                L = n("zUQL"),
                B = function(e) {
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
                        return a.createElement(d.Va, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(k.m)(e) || this.props.isGifted ? Object(k.m)(e) && Object(k.j)(this.props.offerID) ? a.createElement(d.Va, {
                            display: d.W.Flex,
                            alignItems: d.f.Center
                        }, a.createElement(d.Va, {
                            fullWidth: !0,
                            display: d.W.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(d.Va, {
                            fullWidth: !0,
                            display: d.W.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(F, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderPrimeClaimButton() : a.createElement(V, {
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
                            hasPrime: Object(k.m)(e)
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
                W = Object(o.compose)(Object(l.a)(L), Object(u.c)("PrimeInstructions"))(B),
                G = n("z8lI"),
                z = (n("25vm"), function(e) {
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
                        return a.createElement(d.Va, {
                            className: "copy-button copy-btn",
                            display: d.W.Flex
                        }, a.createElement(d.Na, {
                            className: "copy-button__btn"
                        }, a.createElement(d.z, {
                            onClick: this.copy,
                            type: this.state.copied ? d.F.Success : d.F.Default
                        }, e)), a.createElement("input", {
                            className: "copy-button__copy-input",
                            ref: this.setRef,
                            value: this.props.clipboardText,
                            readOnly: !0
                        }))
                    }, t
                }(a.Component)),
                q = Object(T.compose)(Object(u.c)("CopyButton"))(z),
                H = function(e) {
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
                        return this.state && this.state.value ? a.createElement(d.Va, {
                            className: "copyable-item",
                            display: d.W.Flex,
                            flexGrow: 1
                        }, a.createElement(d.Va, {
                            flexGrow: 1
                        }, a.createElement(d.Pa, {
                            type: d.Ra.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(d.Va, null, a.createElement(q, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                Q = Object(T.compose)(Object(u.c)("CopyableItem"))(H),
                $ = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(d.Wb, null, a.createElement(f, {
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
                            return a.createElement(d.xb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: d.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: d.Aa.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(d.xb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(d.Va, {
                                fullWidth: !0,
                                justifyContent: d.Ua.Center,
                                textAlign: d.Jb.Center
                            }, a.createElement(d.T, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(d.xb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: d.db.Absolute,
                                padding: 1,
                                background: d.r.Alt,
                                overflow: d.Ya.Scroll,
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
                        return Object(k.k)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(a.Component)),
                K = Object(u.c)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })($),
                Y = n("UFVY"),
                X = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(d.cb, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(d.xb, {
                                fullWidth: !0,
                                display: d.W.Flex,
                                justifyContent: d.Ua.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: d.f.Center,
                                borderRadius: d.x.Medium
                            }, a.createElement(d.V, {
                                type: d.Nb.Span,
                                align: d.Xb.Middle,
                                color: d.O.Overlay
                            }, a.createElement(d.Va, {
                                display: d.W.InlineFlex,
                                flexWrap: d.Z.NoWrap,
                                alignItems: d.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(d.Va, {
                                margin: {
                                    right: 1
                                },
                                display: d.W.InlineFlex,
                                flexWrap: d.Z.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: d.f.Center
                            }, a.createElement(d.mb, {
                                asset: n ? d.nb.Gift : d.nb.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(s.d)("Gift Claimed", "PrimeRedeem") : Object(s.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return a.createElement(K, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-redeem", e);
                        return a.createElement(d.Va, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(k.k)(e);
                        if (this.props.code && this.props.deliveryMethod === k.e.CLAIM_CODE) return a.createElement(d.Va, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(Q, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(k.j)(this.props.offerID) ? this.props.isPrime ? a.createElement(d.Va, {
                            display: d.W.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(d.Va, {
                            fullWidth: !0,
                            display: d.W.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(F, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(d.xb, {
                            display: d.W.Flex,
                            justifyContent: d.Ua.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: d.x.Medium
                        }, a.createElement(d.V, {
                            type: t ? d.Nb.H4 : d.Nb.H6,
                            align: d.Xb.Middle,
                            color: d.O.Overlay
                        }, a.createElement(d.Va, {
                            display: d.W.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Z.NoWrap,
                            alignItems: d.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(d.Va, {
                            margin: {
                                right: 1
                            },
                            display: d.W.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Z.NoWrap,
                            padding: {
                                y: .5
                            },
                            alignItems: d.f.Center
                        }, a.createElement(d.mb, {
                            asset: d.nb.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                Z = Object(o.compose)(Object(u.c)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(l.a)(Y, {
                    skip: function(e) {
                        return !Object(k.j)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }))(X),
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
                            return a.createElement(d.xb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: d.f.Center,
                                display: d.W.Block,
                                borderBottom: !n,
                                textAlign: d.Jb.Left,
                                position: d.db.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(d.Va, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(d.V, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(d.xb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.Va, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(d.V, {
                                type: d.Nb.P
                            }, i, " ", o)), a.createElement(d.Va, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.V, {
                                type: d.Nb.P,
                                color: d.O.Alt2,
                                fontSize: d.Aa.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                r = n && n.game && n.game.name || "",
                                i = n && n.categories && n.categories[0] || "",
                                o = n && n.publisher || "";
                            return a.createElement(d.xb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: d.f.Center,
                                display: d.W.InlineBlock,
                                textAlign: d.Jb.Left,
                                position: d.db.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(d.xb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.xb, {
                                className: "prime-offer__content__text",
                                background: d.r.Base
                            }, a.createElement(d.Va, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.V, {
                                type: d.Nb.P,
                                color: d.O.OverlayAlt,
                                fontSize: d.Aa.Size7,
                                transform: d.Mb.Uppercase
                            }, o)), a.createElement(d.Va, {
                                className: "prime-offer__title",
                                alignItems: d.f.Start,
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e)), a.createElement(d.Va, {
                                className: "prime-offer__description"
                            }, a.createElement(d.V, {
                                type: d.Nb.P,
                                color: d.O.Alt2
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
                            }), a.createElement(d.Oa, {
                                borderRadius: d.x.Medium
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
                                    fontSize: d.Aa.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: o
                                })
                            }
                            if (!r && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var s = t.state.claimData || i.claimData;
                                return a.createElement(Z, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(k.m)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: s,
                                    deliveryMethod: e.deliveryMethod,
                                    orientation: t.props.orientation,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                })
                            }
                            return a.createElement(W, {
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
                            }), t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift && t.props.giftData.currentUser.primeGift && t.props.claimGift(Object(b.a)({
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
                                    i = Object(b.a)({
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
                                hasPrime: Object(k.m)(t.props.data),
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
                            return k.k(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(d.Va, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.mb, {
                            asset: d.nb.Gift
                        }))), a.createElement(d.Va, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: d.f.Start,
                            display: d.W.Flex
                        }, t, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(d.V, {
                                    type: d.Nb.Span,
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
                        return !Object(k.j)(e.offer.id)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offer.id
                            }
                        }
                    }
                }), Object(l.a)(L, {
                    name: "data"
                }), Object(l.a)(J, {
                    name: "claimPrimeOffer"
                }), Object(l.a)(te, {
                    name: "claimGift"
                }), Object(u.c)("PrimeOffer"), Object(g.a)("PrimeOffer", {
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
                            t = Object(k.k)(e);
                        return a.createElement(d.xb, {
                            className: "prime-offer-placeholder",
                            alignItems: d.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? d.W.Block : d.W.InlineBlock,
                            fullWidth: t
                        }, a.createElement(d.Va, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.cb, {
                            height: 20
                        })), a.createElement(d.cb, {
                            height: 160
                        }), a.createElement(d.Va, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.cb, {
                            height: 20,
                            width: 160
                        })), a.createElement(d.Va, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(d.cb, {
                            height: 20,
                            width: 80
                        })), a.createElement(d.Va, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(d.cb, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                se = Object(u.c)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(oe),
                ce = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.xb, {
                            "data-test-target": "prime-offers-upsell",
                            "data-a-target": "prime-offers-upsell",
                            className: "prime-offers-upsell",
                            alignItems: d.f.Center,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            borderBottom: !0
                        }, a.createElement(d.V, {
                            type: d.Nb.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(d.Va, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: d.Jb.Center
                        }, a.createElement(d.mb, {
                            asset: d.nb.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: d.ob.Brand
                        })), a.createElement(d.V, {
                            type: d.Nb.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(V, null))
                    }, t
                }(a.Component)),
                le = Object(u.c)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(ce),
                ue = n("RfIv"),
                de = n("OeOm"),
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
                            return a.createElement(d.Va, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(d.Tb, {
                                childWidth: d.Ub.Large,
                                gutterSize: d.Vb.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(v.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(d.Va, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(d.cb, {
                                height: 28,
                                width: 300
                            })) : a.createElement(d.Va, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(d.V, {
                                type: d.Nb.H3,
                                color: d.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(d.Va, {
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
                        }, a.createElement(d.Va, {
                            className: r,
                            alignItems: d.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 1
                            }
                        }, this.renderUpsell(), this.props.listDirection === k.c.Horizontal && this.renderDesktopOffers(), this.renderMobileOffers())) : null
                    }, t.prototype.renderUpsell = function() {
                        var e = this.props.userData;
                        if (e && !Object(k.l)(e) && !Object(k.m)(e) && !this.props.hideUpsell) return a.createElement(le, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var r = this.getSortedOffers(),
                                i = r[r.length - 1];
                            return r.map(function(n, r) {
                                return a.createElement(d.Va, {
                                    display: d.W.InlineBlock,
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
                                }).sort(k.p),
                                a = this.filterOffersByOfferType(i),
                                o = r.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(k.p);
                            return this.filterOffersByOfferType(o).concat(a)
                        }
                        return this.filterOffersByOfferType(r).slice().sort(k.p)
                    }, t.prototype.isClaimedOffer = function(e) {
                        return !this.offerHasExternalURL(e) && this.offerHasEntitlement(e)
                    }, t.prototype.offerHasEntitlement = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.prototype.offerHasExternalURL = function(e) {
                        return e.content && e.content.externalURL
                    }, t.prototype.filterOffersByOfferType = function(e) {
                        var t = this.getFreeGamesWithPrimeOfferIds() || [];
                        return this.props.offerFilterType === ue.a.Game ? e.filter(function(e) {
                            return t.includes(e.id)
                        }).sort(k.p) : this.props.offerFilterType === ue.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(k.p) : e
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
                me = Object(o.compose)(Object(l.a)(de, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(k.f)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(l.a)(L, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(u.c)("PrimeOfferList"))(pe);
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
                            return i.createElement(s.xb, {
                                textAlign: s.Jb.Center,
                                className: "sub-discount-banner",
                                padding: 1,
                                color: s.O.Overlay,
                                "data-test-selector": "sub-discount-banner"
                            }, i.createElement(s.V, {
                                bold: !0
                            }, e))
                        }
                        return null
                    }, t.prototype.getMessage = function() {
                        var e = Object(o.d)(this.props.subscriptionProducts[0], this.props.isGift);
                        return this.props.isGift ? Object(a.d)("Gift a sub and get {percent} off!", {
                            percent: Object(a.e)(e / 100, "percent")
                        }, "SubDiscountBanner") : Object(a.d)("Get {percent} off the first month of any paid subscription!", {
                            percent: Object(a.e)(e / 100, "percent")
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
                u = n("eJ65"),
                d = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                b = n("GnwI"),
                g = n("cinR"),
                h = n("Ue10"),
                v = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h.Va, null, s.createElement(h.xb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(h.V, {
                            bold: !0,
                            type: h.Nb.H6
                        }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(h.xb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(h.Va, {
                            fullWidth: !0,
                            display: h.W.Flex,
                            alignItems: h.f.Center
                        }, s.createElement(h.Va, {
                            flexGrow: 1
                        }, s.createElement(h.V, {
                            bold: !0,
                            type: h.Nb.H6
                        }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(h.Va, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: h.Jb.Center
                        }, s.createElement(h.xb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: h.r.Base,
                            color: h.O.Base,
                            display: h.W.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Ua.Center
                        }, s.createElement(h.V, null, e.toString())))))
                    }, t
                }(s.Component)),
                k = Object(b.c)("PrimeOfferHeader", {
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
                T = (n("l0e4"), n("yO+B")),
                E = function(e) {
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
                            var n = Object(O.i)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(O.n)(n)
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
                            return s.createElement(h.Va, {
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
                            align: h.Rb.Center,
                            direction: h.Sb.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(h.Va, {
                            className: "prime-offers",
                            position: h.db.Relative
                        }, s.createElement(u.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(g.a, {
                            onHover: this.onHover
                        }, s.createElement(h.A, {
                            ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: h.nb.Crown,
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
                        if (e && !this.state.error) return s.createElement(h.Va, {
                            className: "prime-offers__pill",
                            position: h.db.Absolute
                        }, s.createElement(h.i, {
                            type: h.n.BounceIn,
                            duration: h.k.Medium,
                            timing: h.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(h.ab, {
                            label: e.toString(),
                            type: h.bb.Notification
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
                _ = Object(c.compose)(Object(d.a)(N, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(O.f)()
                            }
                        }
                    }
                }), Object(d.a)(T, {
                    name: "userData"
                }), Object(d.a)(C, {
                    name: "updatePrimeOfferStatus"
                }), Object(b.c)("PrimeOffers"))(E);
            var R = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(_),
                I = n("6x+I"),
                D = n("KxT4"),
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
                        if (!Object(O.o)(r, i) || t.loading || n) return null;
                        var a = Object(U.e)(U.a, ""),
                            o = Object(l.d)("Twitch Prime", "BlueBar"),
                            c = s.createElement("span", null, Object(l.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            u = Object(U.e)(U.a, ""),
                            d = Object(l.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, o = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        c = s.createElement(I, {
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
                                        u = t, d = e.text
                                }
                            }
                        }), s.createElement(g.a, {
                            onHover: S.g,
                            onClick: S.f
                        }, s.createElement(h.xb, {
                            color: h.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: h.db.Relative,
                            fullWidth: !0,
                            zIndex: h.ac.Above
                        }, s.createElement(h.Va, {
                            className: "blue-bar__bar",
                            display: h.W.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Ua.Between,
                            flexWrap: h.Z.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(h.Va, {
                            display: h.W.InlineFlex,
                            alignItems: h.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(h.Va, {
                            className: "blue-bar__logo",
                            display: h.W.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(h.mb, {
                            asset: h.nb.Crown
                        })), s.createElement(h.V, {
                            bold: !0,
                            type: h.Nb.Span,
                            noWrap: !0,
                            fontSize: h.Aa.Size6
                        }, s.createElement(h.Na, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o))), s.createElement(h.V, {
                            className: "blue-bar__headline",
                            type: h.Nb.Span,
                            fontSize: h.Aa.Size6
                        }, c)), s.createElement(h.Va, {
                            display: h.W.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(h.V, {
                            bold: !0,
                            type: h.Nb.Span,
                            noWrap: !0,
                            fontSize: h.Aa.Size6,
                            color: h.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: u,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, d))))))
                    }, t
                }(s.Component),
                x = Object(c.compose)(Object(i.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(D.h)(e)
                    }
                }), Object(d.a)(j, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(O.f)()
                            }
                        }
                    }
                }), Object(b.c)("BlueBarComponent"))(P),
                F = n("z8lI");
            n.d(t, "d", function() {
                return R
            }), n.d(t, "a", function() {
                return x
            }), n.d(t, "c", function() {
                return F.a
            }), n.d(t, "e", function() {
                return O.f
            }), n.d(t, "b", function() {
                return O.c
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
                u = n("DMoW"),
                d = n("GnwI"),
                p = n("br9A"),
                m = n("9pSj"),
                f = n("O4UZ"),
                b = n("Ue10"),
                g = n("D/KL"),
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
                                                tier: c.b.Prime,
                                                platform: u.G.WEB,
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
                        if (this.state.isSubscribing) return i.createElement(b.z, r.__assign({
                            "data-test-selector": v,
                            disabled: this.state.isSubscribing,
                            icon: b.nb.Crown,
                            state: b.E.Loading
                        }, Object(b.bc)(this.props)));
                        if (this.state.primeSubFailure) {
                            var e = this.getErrorType();
                            return i.createElement(m.c, {
                                fontSize: b.Aa.Size6,
                                testTarget: "prime-sub-error",
                                errorType: e
                            })
                        }
                        if (!this.isUserDataReady(this.props)) return i.createElement(b.cb, {
                            width: 82,
                            height: 30
                        });
                        var t = this.canPrimeSubscribe(this.props),
                            n = this.canResub(this.props),
                            a = this.willPrimeSubCreditRenew(),
                            s = this.primeSubCreditRenewalDate();
                        if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                            var c = Object(o.d)("Start Your Free Trial", "PrimeSubscribe");
                            return i.createElement(b.z, r.__assign({
                                ariaLabel: c,
                                "data-test-selector": v,
                                icon: b.nb.Crown,
                                linkTo: o.a.tryPrimeURI,
                                onClick: this.handleStartPrimeTrialClick
                            }, Object(b.bc)(this.props), {
                                targetBlank: !0
                            }), c)
                        }
                        if (this.isSubscribed(this.props) && !n) {
                            var l = Object(o.d)("Subscribed", "PrimeSubscribe");
                            return i.createElement(b.z, r.__assign({
                                ariaLabel: l,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: b.nb.Crown
                            }, Object(b.bc)(this.props)), l)
                        }
                        if (!t) {
                            var u = Object(o.d)("Prime subscription unavailable", "PrimeSubscribe");
                            if (a && s) {
                                var d = Object(o.c)(new Date(s), {
                                    month: "long",
                                    day: "numeric"
                                });
                                u = Object(o.d)("Prime subscription available {availableDate}", {
                                    availableDate: d
                                }, "PrimeSubscribe")
                            }
                            return i.createElement(b.z, r.__assign({
                                ariaLabel: u,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: b.nb.Crown
                            }, Object(b.bc)(this.props)), u)
                        }
                        var p = n ? Object(o.d)("Resubscribe Free", "PrimeSubscribe") : Object(o.d)("Subscribe Free", "PrimeSubscribe");
                        return i.createElement(b.z, r.__assign({
                            ariaLabel: p,
                            "data-test-selector": v,
                            disabled: this.state.isSubscribing,
                            icon: b.nb.Crown,
                            state: this.state.isSubscribing ? b.E.Loading : b.E.Default,
                            onClick: this.spendPrimeCredit
                        }, Object(b.bc)(this.props)), p)
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
                y = Object(a.compose)(Object(d.c)("PrimeSubscribe"), Object(s.a)(h, {
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
                }), Object(s.a)(g, {
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
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("3Bft"),
                c = n("GnwI"),
                l = n("JMwM"),
                u = n("FLOH"),
                d = n("L+W6"),
                p = n("DnOo"),
                m = n("a5fV"),
                f = n("W8Fi"),
                b = n("br9A"),
                g = n("AXRb"),
                h = n("Ue10"),
                v = (n("J5He"), "gift-subscription-button"),
                k = "subscribe-button";
            ! function(e) {
                e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
            }(r || (r = {}));
            var y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-tier")) {
                            case "subscribe-button-modal-tab-" + r.Prime:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                                }), n.props.onSelectTierTab(r.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier1:
                                n.setState({
                                    activeTab: r.Tier1,
                                    currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                                }), n.props.onSelectTierTab(r.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier2:
                                n.setState({
                                    activeTab: r.Tier2,
                                    currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[1])
                                }), n.props.onSelectTierTab(r.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier3:
                                n.setState({
                                    activeTab: r.Tier3,
                                    currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[2])
                                }), n.props.onSelectTierTab(r.Tier3);
                                break;
                            default:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                                }), n.props.onSelectTierTab(r.Prime)
                        }
                    }, n.getTabTitle = function() {
                        switch (n.state.activeTab) {
                            case r.Prime:
                                return Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                            case r.Tier1:
                                return n.props.subscriptionProducts[0].displayName;
                            case r.Tier2:
                                return n.props.subscriptionProducts[1].displayName;
                            case r.Tier3:
                                return n.props.subscriptionProducts[2].displayName;
                            default:
                                return n.props.subscriptionProducts[0].displayName
                        }
                    }, n.getTierSubscribeButton = function() {
                        var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                        if (n.props.isGift) {
                            var t = Object(o.d)("Gift A Subscription", "SubTierTabs");
                            return n.props.giftRecipient ? a.createElement(l.a, {
                                productName: e.name,
                                subProductId: e.id,
                                giftRecipient: n.props.giftRecipient,
                                checkoutURL: e.url,
                                buttonMessage: t,
                                purchase: n.state.currentPurchasePrice,
                                onClick: n.reportGiftCheckoutAction
                            }) : a.createElement(h.z, {
                                ariaLabel: t + " " + n.state.currentPurchasePrice,
                                "data-test-selector": v,
                                onClick: n.onGiftSelect,
                                purchase: n.state.currentPurchasePrice
                            }, t)
                        }
                        return n.state.subbedTier === n.state.activeTab && n.state.activeTab === r.Prime ? a.createElement(g.a, {
                            "data-a-target": "subscribe-with-prime-button",
                            handleSubMenuAction: n.props.handleSubMenuAction,
                            channelLogin: n.props.subLogin
                        }) : a.createElement(p.a, {
                            isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                            tierPrice: n.state.currentPurchasePrice,
                            handleSubAction: n.props.handleSubMenuAction,
                            productName: e.name,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": k
                        })
                    }, n.reportGiftCheckoutAction = function() {
                        n.props.handleSubMenuAction({
                            action: b.a.BuyGiftSub,
                            checkoutButtonTier: n.state.currentPurchasePrice,
                            giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                        })
                    }, n.onGiftSelect = function() {
                        n.props.onGiftSelect && n.props.onGiftSelect()
                    }, n.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === s.b.Prime ? (n.setState({
                            activeTab: r.Prime,
                            subbedTier: r.Prime
                        }), e.onSelectTierTab(r.Prime)) : e.subbedTier === s.b.Tier1 ? (n.setState({
                            activeTab: r.Tier1,
                            subbedTier: r.Tier1
                        }), e.onSelectTierTab(r.Tier1)) : e.subbedTier === s.b.Tier2 ? (n.setState({
                            activeTab: r.Tier2,
                            subbedTier: r.Tier2
                        }), e.onSelectTierTab(r.Tier2)) : e.subbedTier === s.b.Tier3 ? (n.setState({
                            activeTab: r.Tier3,
                            subbedTier: r.Tier3
                        }), e.onSelectTierTab(r.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(r.Prime)
                    }, n.state = n.getInitialState(), n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.mapSubbedTierToTabs(this.props)
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = a.createElement(h.Va, {
                        display: h.W.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, a.createElement(h.mb, {
                        asset: h.nb.Star
                    })));
                    var t, n = null,
                        i = null,
                        c = Object(o.d)("Tier 3", "SubTierTabs"),
                        l = a.createElement(h.Va, {
                            display: h.W.InlineFlex
                        }, this.state.subbedTier === r.Tier3 && e, a.createElement(h.yb, {
                            active: this.state.activeTab === r.Tier3,
                            "data-tier": S(r.Tier3),
                            "data-a-target": S(r.Tier3),
                            onClick: this.toggleActiveTab
                        }, c));
                    if (this.props.subbedTier !== s.b.Prime || this.props.isGift || (n = a.createElement(h.Va, {
                            display: h.W.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, a.createElement(h.Va, {
                            display: h.W.InlineFlex,
                            margin: {
                                right: 1
                            },
                            className: "subscription-balloon-options__prime-crown"
                        }, a.createElement(h.mb, {
                            asset: h.nb.Crown
                        })), a.createElement(h.yb, {
                            active: this.state.activeTab === r.Prime,
                            "data-tier": S(r.Prime),
                            "data-a-target": S(r.Prime),
                            onClick: this.toggleActiveTab
                        }, Object(o.d)("Prime", "SubTierTabs")))), this.props.subbedTier !== s.b.Prime) {
                        var p = Object(o.d)("Tier 1", "SubTierTabs");
                        i = a.createElement(h.Va, {
                            display: h.W.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.state.subbedTier === r.Tier1 && e, a.createElement(h.yb, {
                            active: this.state.activeTab === r.Tier1,
                            "data-tier": S(r.Tier1),
                            "data-a-target": S(r.Tier1),
                            onClick: this.toggleActiveTab
                        }, p))
                    }
                    var m = Object(o.d)("Tier 2", "SubTierTabs");
                    t = a.createElement(h.Va, {
                        display: h.W.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier2 && e, a.createElement(h.yb, {
                        active: this.state.activeTab === r.Tier2,
                        "data-tier": S(r.Tier2),
                        "data-a-target": S(r.Tier2),
                        onClick: this.toggleActiveTab
                    }, m));
                    var f = this.props.subscriptionProducts[this.state.activeTab - 1];
                    return a.createElement(h.Va, {
                        className: "channel-header__subscription-balloon-options"
                    }, a.createElement(h.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(h.zb, null, n, i, t, l)), a.createElement(h.Va, null, a.createElement(h.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(h.V, {
                        type: h.Nb.H5,
                        bold: !0
                    }, this.getTabTitle())), a.createElement(h.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(u.a, {
                        selectedSubProduct: f || this.props.subscriptionProducts[0],
                        allSubProducts: this.props.subscriptionProducts
                    })), a.createElement(d.a, {
                        subscriptionProduct: f,
                        isGift: this.props.isGift
                    }), a.createElement(h.Va, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.getInitialState = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    return (Object(f.g)(this.props.subscriptionProducts) || Object(f.e)(this.props.subscriptionProducts)) && (e = Object(f.c)(this.props.subscriptionProducts[0], this.props.isGift)), {
                        activeTab: r.Tier1,
                        currentPurchasePrice: e,
                        subbedTier: null
                    }
                }, t.prototype.getPrice = function(e) {
                    if (Object(f.g)(this.props.subscriptionProducts) || Object(f.e)(this.props.subscriptionProducts)) return Object(f.c)(e, this.props.isGift);
                    var t = e.price;
                    return e.priceInfo && (t = Object(m.a)(Object(m.b)(e.priceInfo.total, e.priceInfo.exponent), e.priceInfo.currency)), t
                }, t
            }(a.Component);

            function S(e) {
                return "subscribe-button-modal-tab-" + e
            }
            var O = Object(c.c)("SubTierTabs", {
                autoReportInteractive: !0
            })(y);
            n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, "a", function() {
                return O
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
            var u = function(e) {
                var t = function(e, t) {
                    var n = [];
                    e.tier === o.b.Tier2 && n.push.apply(n, t[1].emotes);
                    e.tier === o.b.Tier3 && (n.push.apply(n, t[1].emotes), n.push.apply(n, t[2].emotes));
                    return Object(s.b)(n)
                }(e.selectedSubProduct, e.allSubProducts);
                return i.createElement(l.Va, null, i.createElement(l.V, {
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
                }(e)), t.length > 0 && i.createElement(l.Va, {
                    alignItems: l.f.Center,
                    display: l.W.Flex,
                    margin: {
                        top: 1
                    }
                }, t.map(function(e) {
                    return i.createElement(l.Va, {
                        display: l.W.InlineFlex,
                        key: e.id,
                        margin: {
                            right: .5
                        }
                    }, i.createElement("img", {
                        alt: e.displayName,
                        srcSet: e.srcSet,
                        title: e.displayName
                    }))
                }), i.createElement(l.V, {
                    bold: !0,
                    "data-test-selector": r.ExtraEmoteMessage
                }, Object(a.d)("{extraEmoteCount, plural,                 one {Plus {extraEmoteCount, number} extra channel emote}                 other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: t.length
                }, "SubBenefitMessage"))))
            };
            n.d(t, !1, function() {
                return r
            }), n.d(t, "a", function() {
                return u
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
                u = n("GnwI"),
                d = n("Ue10"),
                p = n("k91D"),
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleClick = function() {
                            return n.openCheckout(), n.props.onClick && n.props.onClick()
                        }, n.openCheckout = function() {
                            n.state.hasPopupExperiment && n.props.giftRecipient && (a.m.set(s.b, n.props.productName), a.m.set(s.c, n.props.giftRecipient))
                        };
                        var r = a.o.experiments.getAssignment(l.b.InstreamCheckout);
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
                        return i.createElement(d.z, {
                            targetBlank: !0,
                            disabled: !n,
                            onClick: this.handleClick,
                            linkTo: this.state.hasPopupExperiment ? void 0 : r,
                            "data-test-selector": t,
                            purchase: this.props.purchase
                        }, this.props.buttonMessage || e)
                    }, t = r.__decorate([Object(u.c)("GiftSubscribeButton", {
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
                            }, e.logger = o.j.withCategory("with-impression-listener"), e.setRef = function(t) {
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
                        u = t.price;
                    t.priceInfo && (u = Object(a.a)(Object(a.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                    var d = e.isOneTime ? Object(i.d)("{price} / One-time purchase", {
                        price: u
                    }, "SubDiscountPriceLabel") : Object(i.d)("{price} / Month", {
                        price: u
                    }, "SubDiscountPriceLabel");
                    if (o.e || o.g || o.f) {
                        var p = void 0;
                        if (e.isGift && n ? p = Object(i.d)("{price} (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(i.e)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && l ? p = Object(i.d)("{price} / First Month", {
                                price: Object(o.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : c && (p = Object(i.d)("{price} for the first month (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(i.e)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return r.createElement(s.Va, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, r.createElement(s.V, {
                            className: "sub-discount-price-label__original-price",
                            color: s.O.Alt2,
                            decoration: s.Lb.Strikethrough
                        }, d), r.createElement(s.V, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return r.createElement(s.Va, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, r.createElement(s.V, null, d))
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
                return d
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
            }), n.d(t, "k", function() {
                return b
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "i", function() {
                return h
            }), n.d(t, "n", function() {
                return v
            }), n.d(t, "p", function() {
                return k
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "f", function() {
                return O
            }), n.d(t, "m", function() {
                return C
            }), n.d(t, "l", function() {
                return N
            }), n.d(t, "j", function() {
                return T
            });
            var r, i, a = n("TSYQ"),
                o = n("cr+I"),
                s = n("q1tI"),
                c = n("/7QA"),
                l = n("ht6z"),
                u = n("Ue10"),
                d = {
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
                                    return s.createElement(u.T, {
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
            var b = function(e) {
                    return e === r.Vertical
                },
                g = function(e, t) {
                    var n = t === r.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                h = function() {
                    return y("seenOffers")
                },
                v = function(e) {
                    c.l.set("seenOffers", e)
                },
                k = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                y = function(e) {
                    return c.l.get(e, [])
                },
                S = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(l.a)(t))
                },
                O = function() {
                    var e = location.search,
                        t = o.parse(e);
                    return t && t.dateOverride || void 0
                },
                C = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                N = function(e) {
                    return e && e.loading
                },
                T = function(e) {
                    return E().includes(e)
                },
                E = function() {
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
                    end: 364
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ntags\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\ngifts {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferID\nofferConnection {\nstatus\n}\n}\n}\n}\n}",
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
                u = /Windows Phone/i,
                d = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || o.test(e) || s.test(e) || c.test(e) || l.test(e) || u.test(e) || d.test(e)
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
                u = n("+PZR"),
                d = n("Ue10"),
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
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(u.b)()).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(d.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ca, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(d.sb, {
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
                }), Object(l.c)("ReportReasonSelect"))(m);
            n("y4Ne");
            n.d(t, "a", function() {
                return g
            }), n.d(t, "b", function() {
                return b
            }), n.d(t, "c", function() {
                return h
            });
            var b, g = "community_rules_violation";
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
            }(b || (b = {}));
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
                            if (t.state.reason === g && !t.state.selectedCommunityID) {
                                if (!t.props.targetUser.directories.nodes.length) return void t.props.onError(b.CommunityError);
                                t.props.onError(b.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(b.FormError)
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
                    return a.createElement(d.Va, {
                        display: d.W.Flex,
                        flexDirection: d.Y.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Ua.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === b.Success ? a.createElement("div", null, a.createElement(d.z, {
                        onClick: this.props.onClose
                    }, a.createElement(d.Va, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.Va, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.V, {
                        type: d.Nb.H4
                    }, this.props.title), a.createElement(d.xb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d.xb, {
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
                    }), a.createElement(d.Ca, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(d.Kb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d.xb, {
                        display: d.W.Flex,
                        justifyContent: d.Ua.Center
                    }, a.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.Va, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case b.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case b.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case b.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case b.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case b.CommunityError:
                            e = Object(o.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== b.Success,
                        "reporting__success-container": this.props.submitStatus === b.Success
                    });
                    return a.createElement(d.xb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== b.Success,
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
                return b
            }), n.d(t, "r", function() {
                return g
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
                return T
            }), n.d(t, "o", function() {
                return E
            }), n.d(t, "h", function() {
                return _
            }), n.d(t, "g", function() {
                return R
            }), n.d(t, "f", function() {
                return I
            });
            var r, i, a, o, s, c, l = n("/7QA"),
                u = n("2xye"),
                d = n("O4UZ");

            function p(e) {
                l.n.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: r.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                l.n.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? r.Open : r.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                l.n.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: r.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function b(e) {
                N(e, i.Click, o.StartYourFreeTrial)
            }

            function g(e) {
                N(e, i.Hover, o.StartYourFreeTrial)
            }

            function h(e, t) {
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
                    case d.e.CLAIM_CODE:
                        r = o.GetCode;
                        break;
                    case d.e.EXTERNAL_OFFER:
                        r = o.LearnMore;
                        break;
                    case d.e.DIRECT_ENTITLEMENT:
                        r = o.ClaimOffer
                }
                r && N(e, t, r)
            }

            function N(e, t, n) {
                l.n.track(u.SpadeEventType.PrimeOfferInteraction, {
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

            function T(e) {
                l.n.track(u.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function E(e) {
                l.n.track(u.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function _() {
                D(a.Impression)
            }

            function R() {
                D(a.Hover)
            }

            function I() {
                D(a.Click)
            }

            function D(e) {
                l.n.track(u.SpadeEventType.PrimeBlueBarInteraction, {
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
                    end: 126
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nstatus\n}\n}\n}",
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
                return Object(r.e)(e, {
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
                u = n("BhFH"),
                d = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                f = n("D7An"),
                b = n("2xye"),
                g = n("GnwI"),
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
                            return a.createElement(v.T, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, a.createElement(v.Va, {
                                display: v.W.Flex,
                                alignItems: v.f.Center
                            }, a.createElement(v.mb, {
                                type: v.ob.Brand,
                                asset: v.nb.Ban
                            }), a.createElement(v.Va, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(v.Va, {
                                className: "reporting-wizard__block-actions",
                                display: v.W.Flex,
                                alignItems: v.f.Center
                            }, a.createElement(v.mb, {
                                type: v.ob.Success,
                                asset: v.nb.FollowCheck
                            }), a.createElement(v.Va, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(v.V, {
                                className: "block-user__success",
                                type: v.Nb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), a.createElement(v.T, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, a.createElement(v.Va, {
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
                        return a.createElement(v.xb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(v.Va, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(v.xb, {
                            color: v.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(v.Wb, {
                            baseFontSize: v.Aa.Size6
                        }, a.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(v.Va, {
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
            var C, N = {
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
                T = {
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
                        getTitle: N.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: N.generalFilter,
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
                        getTitle: N.generalFilter,
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
                        getTitle: N.abusiveViolence,
                        value: "threatening violence",
                        reportReason: O.b.Harm
                    },
                    commitingViolence: {
                        getTitle: N.commitingViolence,
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
                        getTitle: N.me,
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
                        getTitle: N.someoneElse,
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
                        getTitle: N.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: N.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: N.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: O.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: N.commitingViolence,
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
                E = function(e) {
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
                        var e = this.props.currentCard.getDescription ? a.createElement(v.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(v.Va, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(v.Ca, {
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
                                    return a.createElement(v.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return a.createElement(v.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(v.T, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(v.Va, {
                                        display: v.W.Flex
                                    }, a.createElement(v.Va, {
                                        display: v.W.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(v.mb, {
                                        asset: v.nb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!i || !!i && 0 === i.trim().length);
                                    return a.createElement(v.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(v.Ca, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(v.Kb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return a.createElement(v.Va, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(v.jb, {
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
                _ = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(C || (C = {}));
            var R, I, D, U = {
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
                x = {
                    socialMedia: i.__assign({}, P, {
                        items: [T.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, P, {
                        items: [T.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: j.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [T.endLink_DMCA, T.endLink_trademark, T.endLink_devAgreement],
                        type: C.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: j.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [T.endLink_selfharm],
                        type: C.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: j.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [T.endLink_eventCoC],
                        value: "twitch event end",
                        type: C.Info
                    }
                },
                F = {
                    getTitle: j.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [T.video, T.whisper, T.chat, T.room, T.profile, T.username, T.report_other],
                    type: C.MultipleChoice,
                    value: "content type"
                },
                w = {
                    identifyUser: {
                        getTitle: j.reportVideo,
                        getLabel: U.identifyUser,
                        items: [T.video_streamer, T.video_someoneElse, T.video_chatSomeone],
                        type: C.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: j.reportVideo,
                        getLabel: U.contentGeneral,
                        items: [T.revealPersonalInfo, T.video_labeling, T.video_inactive, T.video_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                        type: C.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: j.reportVideo,
                        getLabel: U.content,
                        items: [T.report_username, T.violence, T.abusive, T.cheating, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                        type: C.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                M = {
                    content: {
                        getTitle: j.reportMessage,
                        getLabel: U.contentGeneral,
                        items: [T.revealPersonalInfo, T.evasion, T.spam, T.maliciousRaid, T.report_username, T.messaging_general, T.selfharm],
                        type: C.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: j.reportMessage,
                        getLabel: U.content,
                        items: [T.report_emotes, T.violence, T.abusive, T.inappropriateContent, T.impersonation, T.underage, T.bitsViolation],
                        type: C.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                A = i.__assign({}, M.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                V = {
                    content: {
                        getTitle: j.reportProfile,
                        getLabel: U.contentGeneral,
                        items: [T.revealPersonalInfo, T.inappropriateBadge, T.inappropriateExtension, T.noModeration, T.profile_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                        type: C.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: j.reportProfile,
                        getLabel: U.content,
                        items: [T.report_username, T.violence, T.abusive, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                        type: C.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                L = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.identifyUser,
                    items: [T.report_channelOwner, T.report_member],
                    value: "room report user",
                    type: C.MultipleChoice
                },
                B = {
                    getTitle: j.tellUsMore,
                    items: [T.input_description],
                    type: C.Confirm,
                    value: "tell us more"
                },
                W = {
                    banEvasion: i.__assign({}, B, {
                        items: [T.input_usernames, T.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, B, {
                        items: [T.input_link, T.input_connection, T.input_description],
                        nextCard: x.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: j.reportAbusive,
                        getLabel: U.relevantStatements,
                        items: [T.hateSpeech, T.harassment, T.abusiveViolence, T.commitingViolence, T.swatting, T.personalInfo],
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
                        items: [T.threat_me, T.threat_person, T.threat_group, T.threat_selfharm],
                        type: C.MultipleChoice,
                        value: "violence type"
                    }
                },
                z = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [T.location_onTwitch, T.location_anotherSite, T.location_TwitchEvent],
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
                        items: [T.external_incitingRaids, T.external_threatening, T.external_harassment],
                        type: C.MultipleChoice,
                        nextCard: W.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, G.violence, {
                        items: [T.threat_me, T.threat_person, T.threat_group],
                        nextCard: W.socialMedia
                    }),
                    external_abusive: i.__assign({}, G.content, {
                        items: [T.hateSpeech, T.harassment, T.external_abusiveViolence, T.external_commitingViolence, T.swatting, T.personalInfo],
                        nextCard: W.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.contentGeneral,
                    items: [T.spam_bot, T.spam_scam, T.spam_repeated],
                    type: C.MultipleChoice,
                    value: "spam type"
                },
                H = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.relevantStatements,
                    items: [T.inappropriate_game, T.gory, T.sexuallyViolent, T.childAnimal, T.pornographic, T.suggestive, T.nudity, T.other],
                    type: C.MultipleChoice,
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
                    items: [T.evasion_chat, T.evasion_sitewide, T.evasion_messaging],
                    type: C.MultipleChoice,
                    nextCard: W.banEvasion
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
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [T.impersonation_me, T.impersonation_brand, T.impersonation_other],
                    type: C.MultipleChoice,
                    value: "impersonation type"
                },
                K = F,
                Y = B,
                X = P,
                Z = {
                    video: w.identifyUser,
                    whisper: A,
                    chat: M.content,
                    profile: V.content,
                    room: L,
                    "somewhere else": z.identifyLocation,
                    streamer: w.content,
                    "someone else in video": w.content,
                    "someone in chat": M.content,
                    general_video: w.general,
                    general_messaging: M.general,
                    general_profile: V.general,
                    "channel owner": V.content,
                    "community member": M.content,
                    "on twitch": V.content,
                    "another site": z.externalSite,
                    "twitch event": x.twitchEvent,
                    "brigading/raids": W.socialMedia,
                    threatening: z.external_violence,
                    "hateful/harassing": z.external_abusive,
                    "external site; threatening violence": z.external_violence,
                    "external site; committing violence": z.external_violence,
                    "external site; scam": W.socialMedia,
                    "ban evasion": Q,
                    spam: q,
                    hateful: G.content,
                    impersonation: $,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": H,
                    "intellectual property": x.legal,
                    "violating developer agreement": x.legal
                },
                J = {
                    selfharm: x.selfharm,
                    harm: x.violence,
                    other: X
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: V.content,
                    COMMUNITY_REPORT: V.content,
                    CHAT_REPORT: M.content,
                    CLIP_REPORT: w.content,
                    EVENT_REPORT: V.content,
                    EXTENSION_REPORT: V.content,
                    LIVE_UP_REPORT: V.content,
                    ROOM_REPORT: L,
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
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || K,
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
                            return a.createElement(v.Va, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(v.V, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
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
                            return a.createElement(v.Va, null, o, a.createElement(v.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, a.createElement(v.Va, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(v.Va, {
                                margin: {
                                    right: 1
                                },
                                display: v.W.InlineBlock
                            }, a.createElement(v.z, {
                                type: v.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, a.createElement(v.Va, {
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
                                return t.props.trackClose(D.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Y;
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
                                    return t.trackNavigation(I.Next, e.value)
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
                                                case _.b.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case _.b.Success:
                                                    r = X, J[t] && (r = J[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(I.Submit)
                                                    });
                                                    break;
                                                case _.b.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case _.b.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(_.b.FormError), this.setState({
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
                                        return o.trackNavigation(I.Back, e.value)
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
                        this.state.modalCloseTracked || this.props.trackClose(D.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === C.Info && this.state.currentCard.blockPrompt ? a.createElement(S, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(v.xb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === C.Info ? null : this.renderPrimer();
                        return a.createElement(v.xb, {
                            className: "reporting-wizard",
                            display: v.W.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: v.Y.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(v.V, {
                            bold: !0,
                            fontSize: v.Aa.Size4
                        }, this.getTitle()), n, a.createElement(v.Va, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(E, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === _.b.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                oe = n("+PZR"),
                se = n("PDCe"),
                ce = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return I
                }), n.d(t, "a", function() {
                    return D
                }), n.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(R || (R = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(D || (D = {}));
            var ue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r, a, o) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, s, l, u, d = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== _.a) return [3, 5];
                                        l = {
                                            userID: this.props.data.targetUser.id,
                                            communityID: r || "",
                                            reason: t
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(l))];
                                    case 2:
                                        return i.sent(), c.o.tracking.track(b.SpadeEventType.CommunityModeration, {
                                            community_id: r,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: _.b.Success
                                        }, function() {
                                            d.state.showWizard || d.trackAction(R.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), c.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: _.b.MutationError
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
                                            submitStatus: _.b.UserError
                                        }), [2];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(l))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === O.a.Community && c.o.tracking.track(b.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: _.b.Success
                                        }, function() {
                                            d.state.showWizard || d.trackAction(R.Submit)
                                        }), [3, 9];
                                    case 8:
                                        return u = i.sent(), c.j.error(u, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: _.b.MutationError
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
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(I.Open, void 0, e) : n.trackAction(R.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(I.Close, t, void 0, e) : n.trackAction(R.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i) {
                        c.o.tracking.track(b.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === _.b.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: i,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        c.o.tracking.track(b.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === _.b.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = c.o.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: _.b.Unsubmitted,
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
                    if (this.props.data.error) return a.createElement(v.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(v.V, {
                        fontSize: v.Aa.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(v.cb, {
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
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(v.Xa, null) : a.createElement(ae, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(_.c, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(v.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(v.V, {
                        fontSize: v.Aa.Size5
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
            var de = Object(s.compose)(Object(l.a)(se, {
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
            }), Object(g.c)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(d.a)(), Object(o.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(ue)
        },
        fbdC: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                c = n("q1tI"),
                l = n("/7QA"),
                u = n("cZKs"),
                d = n("Ue10");
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
                    return c.createElement(d.xb, {
                        background: d.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: d.W.Flex,
                        flexDirection: d.Y.Column
                    }, c.createElement(d.Va, {
                        "data-test-selector": r.Message
                    }, this.props.message), c.createElement(d.Va, {
                        display: d.W.Flex,
                        flexDirection: d.Y.Row,
                        justifyContent: d.Ua.Center,
                        padding: {
                            top: 2
                        }
                    }, c.createElement(d.Va, {
                        padding: {
                            right: .5
                        }
                    }, c.createElement(d.z, {
                        type: d.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(l.d)("Cancel", "SettingsConfirmationModal"))), c.createElement(d.Va, {
                        padding: {
                            left: .5
                        }
                    }, this.renderConfirmButton())), c.createElement(u.a, null))
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
                s = n("/7QA").j.withCategory("PrimeUtilsLogger");

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
                u = n("QVaV"),
                d = n("aCAx"),
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
                        var n = Object(u.a)(e, t, !0);
                        return i.createElement(i.Fragment, null, i.createElement(p.xb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            textAlign: p.Jb.Center
                        }, i.createElement(p.V, {
                            bold: !0,
                            type: p.Nb.H4
                        }, Object(s.d)("Block {displayName}?", {
                            displayName: n
                        }, "BlockModal"))), i.createElement(p.xb, {
                            color: p.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(p.Wb, {
                            baseFontSize: p.Aa.Size6
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
                        return Object(d.d)(c.a, t)
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
                u = n("aCAx"),
                d = n("kRBY"),
                p = n("tY8L"),
                m = n("/HY+"),
                f = n("q1tI"),
                b = n("oJmH"),
                g = n("/7QA"),
                h = n("7CzK"),
                v = n("eJ65"),
                k = n("rqzT"),
                y = n("yR8l"),
                S = n("tIid"),
                O = n("D7An"),
                C = n("3GF+"),
                N = n("iS14"),
                T = n("DMoW"),
                E = n("TvOw"),
                _ = n("lZZ2"),
                R = n("GnwI"),
                I = n("Ue10"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isIgnored: !1
                        }, t.ignoreUser = function() {
                            t.props.showBlockModal({
                                context: T.c.CHAT,
                                currentUserData: t.props.currentUserData,
                                displayName: t.props.targetDisplayName,
                                login: t.props.targetLogin,
                                onBlock: function() {
                                    return t.setState({
                                        isIgnored: !0
                                    })
                                },
                                reason: E.a.Other,
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
                            var e = Object(g.d)("Unblock User", "ViewerCardIgnoreAction");
                            return f.createElement(I.Qb, {
                                key: "Ignore",
                                label: e,
                                direction: I.Sb.Top,
                                align: I.Rb.Right,
                                offsetX: "15%"
                            }, f.createElement(I.A, {
                                icon: I.nb.Unignore,
                                ariaLabel: Object(g.d)("Unblock {displayName}", {
                                    displayName: this.props.targetDisplayName
                                }, "ViewerCardIgnoreAction"),
                                onClick: this.unignoreUser,
                                overlay: !0
                            }))
                        }
                        var t = Object(g.d)("Block User", "ViewerCardIgnoreAction");
                        return f.createElement(I.Qb, {
                            key: "Ignore",
                            label: t,
                            direction: I.Sb.Top,
                            align: I.Rb.Right,
                            offsetX: "15%"
                        }, f.createElement(I.A, {
                            icon: I.nb.Ignore,
                            ariaLabel: Object(g.d)("Block {displayName}", {
                                displayName: this.props.targetDisplayName
                            }, "ViewerCardIgnoreAction"),
                            onClick: this.ignoreUser,
                            overlay: !0
                        }))
                    }, t
                }(f.Component),
                U = Object(o.compose)(_.a, Object(N.a)(), Object(R.c)("ViewerCardIgnoreAction"))(D),
                j = n("geRD"),
                P = n("XeSG"),
                x = n("sO6I"),
                F = n("TJ6v"),
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
                        return f.createElement(I.Va, {
                            display: I.W.InlineFlex
                        }, this.getContent())
                    }, t.prototype.getContent = function() {
                        return this.props.data.loading || this.props.data.error ? [this.renderBanAction(!0), this.renderTimeoutAction(!0)] : this.props.data.chatRoomBanStatus ? this.props.data.chatRoomBanStatus.isPermanent ? [this.renderUnbanAction(), this.renderTimeoutAction(!0)] : [this.renderBanAction(), this.renderUntimeoutAction()] : [this.renderBanAction(), this.renderTimeoutAction()]
                    }, t.prototype.renderTimeoutAction = function(e) {
                        void 0 === e && (e = !1);
                        var t = Object(g.d)("Timeout User", "ViewerCardModActions");
                        return f.createElement(I.Va, {
                            key: "Timeout",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(I.Qb, {
                            label: t,
                            direction: I.Sb.Top,
                            align: I.Rb.Left,
                            offsetX: "20%"
                        }, f.createElement(I.A, {
                            icon: I.nb.Timeout,
                            disabled: e,
                            ariaLabel: t,
                            onClick: this.onTimeoutClick
                        })))
                    }, t.prototype.renderUntimeoutAction = function() {
                        var e = Object(g.d)("Untimeout User", "ViewerCardModActions");
                        return f.createElement(I.Va, {
                            key: "Untimeout",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(I.Qb, {
                            label: e,
                            direction: I.Sb.Top,
                            align: I.Rb.Left,
                            offsetX: "20%"
                        }, f.createElement(I.A, {
                            icon: I.nb.FollowCheck,
                            ariaLabel: e,
                            onClick: this.onUnbanClick
                        })))
                    }, t.prototype.renderBanAction = function(e) {
                        void 0 === e && (e = !1);
                        var t = Object(g.d)("Ban User", "ViewerCardModActions");
                        return f.createElement(I.Va, {
                            key: "Ban",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(I.Qb, {
                            label: t,
                            direction: I.Sb.Top,
                            align: I.Rb.Left,
                            offsetX: "20%"
                        }, f.createElement(I.A, {
                            icon: I.nb.Ban,
                            disabled: e,
                            ariaLabel: t,
                            onClick: this.onBanClick
                        })))
                    }, t.prototype.renderUnbanAction = function() {
                        var e = Object(g.d)("Unban User", "ViewerCardModActions");
                        return f.createElement(I.Va, {
                            key: "Unban",
                            padding: {
                                right: 1
                            }
                        }, f.createElement(I.Qb, {
                            label: e,
                            direction: I.Sb.Top,
                            align: I.Rb.Left,
                            offsetX: "20%"
                        }, f.createElement(I.A, {
                            icon: I.nb.FollowCheck,
                            ariaLabel: e,
                            onClick: this.onUnbanClick
                        })))
                    }, t = i.__decorate([Object(R.c)("ViewerCardModActions"), Object(y.a)(F, {
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
                                            query: F,
                                            variables: {
                                                targetUserID: n.userID,
                                                channelID: n.channelID
                                            }
                                        });
                                        r && (t && t.data && (r.chatRoomBanStatus = {
                                            isPermanent: !0,
                                            __typename: "ChatRoomBanStatus"
                                        }), e.writeQuery({
                                            query: F,
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
                    }), Object(y.a)(x, {
                        name: "unbanUser",
                        options: function(e) {
                            return {
                                update: function(t) {
                                    ! function(e, t) {
                                        var n = e.readQuery({
                                            query: F,
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
                                                query: F,
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
                V = function(e) {
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
                            var e = Object(g.d)("Unmod User", "ViewerCardOwnerActions");
                            return f.createElement(I.Va, {
                                key: "OP",
                                display: I.W.InlineFlex,
                                padding: {
                                    right: 1
                                }
                            }, f.createElement(I.Qb, {
                                label: e,
                                direction: I.Sb.Top,
                                align: I.Rb.Center
                            }, f.createElement(I.A, {
                                icon: I.nb.FollowCheck,
                                ariaLabel: e,
                                onClick: this.unmodUser
                            })))
                        }
                        e = Object(g.d)("Mod User", "ViewerCardOwnerActions");
                        return f.createElement(I.Va, {
                            key: "OP",
                            display: I.W.InlineFlex,
                            padding: {
                                right: 1
                            }
                        }, f.createElement(I.Qb, {
                            label: e,
                            direction: I.Sb.Top,
                            align: I.Rb.Center
                        }, f.createElement(I.A, {
                            icon: I.nb.OP,
                            ariaLabel: e,
                            onClick: this.modUser
                        })))
                    }, t = i.__decorate([Object(R.c)("ViewerCardOwnerActions")], t)
                }(f.Component),
                L = n("oK83"),
                B = n("0tEc"),
                W = n("4qQ0"),
                G = n("JMwM"),
                z = n("L+W6"),
                q = n("br9A"),
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getSubscribeButton = function() {
                            var e = t.props.subscriptionProducts[0],
                                n = Object(g.d)("Gift All-Access Pass", "CampaignsGiftDescription");
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
                                action: q.a.BuyGiftSub,
                                checkoutButtonTier: t.props.subscriptionProducts[0].price,
                                giftRecipient: t.props.giftRecipient ? t.props.giftRecipient : null
                            })
                        }, t.handleSubMenuAction = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return f.createElement(I.Va, null, f.createElement(I.Va, {
                            display: I.W.Flex,
                            justifyContent: I.Ua.Between,
                            alignItems: I.f.Center,
                            fullWidth: !0
                        }, f.createElement(I.V, {
                            bold: !0,
                            type: I.Nb.H5
                        }, Object(g.d)("Gift the Overwatch League All-Access Pass", "CampaignsGiftDescription")), f.createElement(I.z, {
                            type: I.F.Text,
                            icon: I.nb.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "sub-gift-select-back-button"
                        }, f.createElement(I.Va, {
                            alignItems: I.f.Center,
                            display: I.W.InlineFlex
                        }, f.createElement(I.V, null, Object(g.d)("Back", "CampaignsGiftDescription"))))), f.createElement(I.Va, {
                            className: "channel-header__subscription-balloon-options"
                        }, f.createElement(I.Va, null, f.createElement(I.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, f.createElement(I.V, null, Object(g.d)("Exclusive Command Center stream access plus Passholder-only chat, Post-match Q&A and match-analysis videos by players, and 23 Twitch emotes, 2 Twitch badges and more!", "CampaignsGiftDescription"))), f.createElement(z.a, {
                            subscriptionProduct: this.props.subscriptionProducts[0],
                            isGift: !0,
                            isOneTime: !0
                        }), f.createElement(I.Va, {
                            margin: {
                                top: 1,
                                right: 1
                            }
                        }, this.getSubscribeButton()))))
                    }, t
                }(f.Component),
                Q = n("DqL7"),
                $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onGiftSelect = function() {
                            t.props.onGiftSelect && t.props.onGiftSelect()
                        }, t.onSelectTierTab = function(e) {
                            t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                        }, t.handleSubMenuAction = function(e) {
                            t.props.handleSubMenuAction && t.props.handleSubMenuAction(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.isEsportChannel ? f.createElement(H, {
                            onBack: this.props.onBack,
                            subscriptionProducts: this.props.subscriptionProducts,
                            giftRecipient: this.props.giftRecipient,
                            handleSubMenuAction: this.props.handleSubMenuAction
                        }) : f.createElement(I.Va, null, f.createElement(I.Va, {
                            display: I.W.Flex,
                            justifyContent: I.Ua.Between,
                            alignItems: I.f.Center,
                            fullWidth: !0
                        }, f.createElement(I.V, {
                            bold: !0,
                            type: I.Nb.H5
                        }, Object(g.d)("Choose A Gift Subscription", "GiftTierTabs")), f.createElement(I.z, {
                            type: I.F.Text,
                            icon: I.nb.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "sub-gift-select-back-button"
                        }, f.createElement(I.Va, {
                            alignItems: I.f.Center,
                            display: I.W.InlineFlex
                        }, f.createElement(I.V, null, Object(g.d)("Back", "GiftTierTabs"))))), f.createElement(Q.a, {
                            canPrimeSubscribe: !1,
                            channelDisplayName: this.props.channelDisplayName,
                            giftRecipient: this.props.giftRecipient,
                            isGift: !0,
                            isSubscribed: !1,
                            onGiftSelect: this.onGiftSelect,
                            onSelectTierTab: this.onSelectTierTab,
                            handleSubMenuAction: this.handleSubMenuAction,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: !1
                        }))
                    }, t
                }(f.Component),
                K = n("4iu0"),
                Y = n("NMMG"),
                X = (n("EtPo"), n("Jl6Y"));
            ! function(e) {
                e[e.ActionsPage = 0] = "ActionsPage", e[e.SubGiftSelectPage = 1] = "SubGiftSelectPage"
            }(r || (r = {}));
            var Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: r.ActionsPage
                        }, t.getContent = function() {
                            if (t.props.data.loading || t.props.data.error) return f.createElement(I.xb, {
                                background: I.r.Base,
                                fullHeight: !0,
                                fullWidth: !0,
                                padding: 2
                            }, f.createElement(I.Xa, {
                                fillContent: !0
                            }));
                            var e = {
                                    backgroundImage: "url(" + (t.props.data.targetUser.bannerImageURL || h) + ")"
                                },
                                n = t.state.currentPage === r.ActionsPage ? t.renderActions() : t.renderSubGiftSelect();
                            return f.createElement(I.xb, {
                                border: !0,
                                className: "viewer-card",
                                elevation: 1,
                                "data-a-target": "viewer-card"
                            }, f.createElement(I.Oa, {
                                background: I.r.AccentAlt2
                            }, f.createElement("div", {
                                className: "viewer-card__background",
                                style: e
                            }, f.createElement(I.Va, {
                                display: I.W.Flex,
                                flexDirection: I.Y.Column,
                                fullHeight: !0,
                                fullWidth: !0,
                                className: "viewer-card__overlay"
                            }, f.createElement(I.xb, {
                                alignItems: I.f.Center,
                                background: I.r.Overlay,
                                className: "viewer-card__banner",
                                display: I.W.Flex,
                                flexDirection: I.Y.Row,
                                flexGrow: 1,
                                fullWidth: !0,
                                justifyContent: I.Ua.Start,
                                padding: 1,
                                position: I.db.Relative,
                                textAlign: I.Jb.Center
                            }, f.createElement(C.a, null, f.createElement(I.q, {
                                src: t.props.data.targetUser.profileImageURL,
                                size: 50,
                                alt: t.props.data.targetUser.displayName
                            })), f.createElement(C.a, null, f.createElement(I.Va, {
                                alignItems: I.f.Center,
                                margin: 1,
                                className: "viewer-card__display-name",
                                textAlign: I.Jb.Left,
                                ellipsis: !0
                            }, f.createElement(I.V, {
                                color: I.O.Overlay,
                                type: I.Nb.H4
                            }, f.createElement(I.T, {
                                hoverUnderlineNone: !0,
                                targetBlank: !0,
                                to: "/" + t.props.targetLogin,
                                type: I.U.Inherit
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
                                title: Object(g.d)("Report {channelDisplayName}", {
                                    channelDisplayName: t.props.data.targetUser.displayName
                                }, "ReportUserModalTitle")
                            })
                        }, t.handleBuyGiftSubEvent = function(e) {
                            e.action === q.a.BuyGiftSub && t.displaySubscriptionCheckout(), Object(q.b)(i.__assign({}, e, {
                                action: q.a.BuyGiftSub,
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
                            Object(q.b)({
                                action: q.a.GiftASub,
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
                        return !this.props.isEmbedded && e && this.props.data.targetUser && e.login !== this.props.targetLogin ? f.createElement(I.Va, {
                            key: "Ignore",
                            position: I.db.Absolute,
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
                        return e && e.login === this.props.targetLogin ? null : f.createElement(I.xb, {
                            className: "viewer-card__actions",
                            "data-test-selector": "viewer-card-actions",
                            attachBottom: !0
                        }, this.renderSocialActions(), this.renderChatActions())
                    }, t.prototype.renderSocialActions = function() {
                        return this.props.isEmbedded || this.props.data.channelUser.self && this.props.data.channelUser.self.banStatus && this.props.data.channelUser.self.banStatus.isPermanent && this.props.sourceType !== L.a.viewer_list_mod_section ? null : f.createElement(I.xb, {
                            alignItems: I.f.Start,
                            display: I.W.Flex,
                            background: I.r.Base,
                            flexDirection: I.Y.Row,
                            fullWidth: !0,
                            "data-test-selector": "viewer-card-social-actions"
                        }, f.createElement(I.Va, {
                            display: I.W.Flex,
                            flexGrow: 1,
                            flexWrap: I.Z.Wrap,
                            margin: {
                                bottom: 1,
                                left: 1,
                                top: .5
                            }
                        }, f.createElement(I.Va, {
                            margin: {
                                right: .5,
                                top: .5
                            }
                        }, f.createElement(C.a, null, f.createElement(B.a, {
                            friendData: {
                                user: this.props.data.targetUser
                            },
                            targetID: this.props.data.targetUser.id
                        }))), f.createElement(I.Va, {
                            margin: {
                                right: .5,
                                top: .5
                            }
                        }, f.createElement(C.a, null, this.renderWhisperButton())), f.createElement(I.Va, {
                            margin: {
                                top: .5
                            }
                        }, f.createElement(C.a, null, this.renderGiftSubscriptionButton()))), f.createElement(I.Va, {
                            margin: {
                                x: .5,
                                y: 1
                            }
                        }, f.createElement(C.a, null, f.createElement(v.a, {
                            key: "MoreOptionsButton"
                        }, f.createElement(I.A, {
                            ariaLabel: Object(g.d)("More options", "ViewerCard"),
                            icon: I.nb.More,
                            "data-a-target": "viewer-card-more-button"
                        }), f.createElement(I.u, {
                            direction: I.v.BottomRight,
                            "data-a-target": "viewer-card-more-balloon"
                        }, f.createElement(I.Va, {
                            padding: {
                                y: 1
                            }
                        }, f.createElement(I.Sa, {
                            onClick: this.handleReportUserClick,
                            "data-a-target": "viewer-card-report-button"
                        }, f.createElement(I.Va, {
                            padding: {
                                x: 1
                            }
                        }, Object(g.d)("Report {user}", {
                            user: this.props.targetLogin
                        }, "ViewerCard")))))))))
                    }, t.prototype.renderWhisperButton = function() {
                        if (!this.props.data.currentUser || !this.props.data.targetUser) return null;
                        var e = Object(Y.a)(this.props.data.currentUser.id, this.props.data.targetUser.id);
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
                        return f.createElement(I.Va, null, f.createElement(K.a, {
                            subscriptionProducts: this.props.data.channelUser.subscriptionProducts,
                            isGift: !0
                        }), f.createElement(I.xb, {
                            background: I.r.Base,
                            attachBottom: !0,
                            display: I.W.Flex,
                            flexDirection: I.Y.Row,
                            justifyContent: I.Ua.Between,
                            fullWidth: !0,
                            flexGrow: 0,
                            padding: 2
                        }, f.createElement($, {
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
                        })), this.isOwnerOrHigher() && e.push(f.createElement(V, {
                            key: "OwnerActions",
                            confirmModerationAction: this.props.confirmModerationAction,
                            sendMessageToTMI: this.props.sendMessageToTMI,
                            targetLogin: this.props.targetLogin
                        })), e.length ? f.createElement(I.xb, {
                            display: I.W.Flex,
                            background: I.r.Alt2,
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, f.createElement(C.a, null, e)) : null
                    }, t.prototype.renderAccountAge = function() {
                        if (!this.props.data.targetUser.createdAt || !this.isModeratorOrHigher()) return null;
                        var e = new Date(this.props.data.targetUser.createdAt),
                            t = (Date.now() - e.getTime()) / 36e5 > 24 ? Object(g.c)(e, "medium") : Object(g.h)(e);
                        return f.createElement(I.V, {
                            color: I.O.Overlay,
                            "data-test-selector": "viewer-card-account-age"
                        }, Object(g.d)("Account created {date}", {
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
                            case L.a.chat_message:
                                return W.a.Chat;
                            case L.a.room_message:
                                return W.a.Room;
                            case L.a.recent_raids:
                                return W.a.Raid;
                            case L.a.viewer_list:
                            default:
                                return W.a.User
                        }
                    }, t.prototype.displaySubscriptionCheckout = function() {
                        if ("yes" === g.o.experiments.getAssignment(O.b.InstreamCheckout))
                            if (this.props.sessionUser) {
                                var e = g.m.get(c.c, ""),
                                    t = g.m.get(c.b, "");
                                t && (this.props.data && this.props.data.channelUser.subscriptionProducts.map(function(e) {
                                    return e.name
                                }).includes(t) ? this.props.showSubscriptionCheckoutModal({
                                    productName: t,
                                    recipientLogin: e
                                }) : Object(c.d)())
                            } else this.props.login()
                    }, t
                }(f.Component),
                J = Object(b.compose)(Object(R.c)("ViewerCard"), Object(y.a)(X, {
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
                    sessionUser: Object(d.e)(e),
                    isLoggedIn: Object(d.f)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    hideViewerCard: p.c,
                    login: Object(c.e)(l.a.ViewerCard),
                    showSubscriptionCheckoutModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(u.d)(s.a, {
                            component: "CheckoutModal",
                            loader: function() {
                                return Promise.all([n.e(0), n.e(198)]).then(n.bind(null, "KJv/"))
                            },
                            componentProps: t
                        })
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(u.d)(m.a, t)
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
                u = n("q1tI"),
                d = n("/7QA"),
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
                        var e = !this.props.isPopout,
                            t = Object(d.d)("Whisper", "WhisperButton"),
                            n = u.createElement(m.z, {
                                disabled: !e,
                                type: this.props.buttonType,
                                onClick: this.handleClick,
                                "data-a-target": "usercard-whisper-button",
                                "data-test-selector": "whisper-button"
                            }, t);
                        return e ? n : u.createElement(m.Qb, {
                            align: m.Rb.Left,
                            direction: m.Sb.Top,
                            label: Object(d.d)("Whispers are disabled in popout chat", "WhispersDisabledText")
                        }, n)
                    }, t
                }(u.Component),
                b = Object(i.compose)(Object(p.c)("WhisperButton", {
                    autoReportInteractive: !0
                }))(f);
            var g = Object(r.connect)(null, function(e) {
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
            })(b);
            n.d(t, "a", function() {
                return g
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
                        return i.createElement(s.xb, {
                            background: s.r.Alt2,
                            display: s.W.Flex,
                            justifyContent: s.Ua.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Jb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, i.createElement(s.V, {
                            type: s.Nb.H4,
                            align: s.Xb.Middle
                        }, i.createElement(s.xb, {
                            padding: 1,
                            display: s.W.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Z.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Jb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Aa.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, i.createElement(s.Va, {
                            margin: {
                                right: 1
                            },
                            display: s.W.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Z.NoWrap,
                            alignItems: s.f.Center
                        }, i.createElement(s.mb, {
                            asset: s.nb.DeadGlitch,
                            type: s.ob.Alert,
                            width: 20,
                            height: 20
                        })), i.createElement(s.V, {
                            type: s.Nb.P
                        }, e))))
                    }, t
                }(i.Component),
                l = Object(a.c)("PrimeError", {
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