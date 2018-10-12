(window.webpackJsonp = window.webpackJsonp || []).push([
    [115], {
        DXJk: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Events_FollowEvent"
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
                                    value: "FollowEventInput"
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
                                value: "followEvent"
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
                                        value: "event"
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
                                                    value: "EventCollection"
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
                                                                value: "isFollowing"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "EventLeaf"
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
                                                                value: "isFollowing"
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
                    end: 193
                }
            };
            t.loc.source = {
                body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        Jhye: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                l = t("/7QA"),
                r = t("X7Ac"),
                o = t("eJ65");
            var d = t("ug+5"),
                s = t("Ue10"),
                c = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onShareClicked = function(e) {
                            var t = "";
                            switch (e) {
                                case r.b.Twitter:
                                    t = "twitter";
                                    break;
                                case r.b.Facebook:
                                    t = "facebook";
                                    break;
                                case r.b.Reddit:
                                    t = "reddit";
                                    break;
                                case r.b.VKontakte:
                                    t = "vk";
                                    break;
                                case r.b.Copy:
                                    t = "url";
                                    break;
                                default:
                                    t = "unknown"
                            }
                            Object(d.c)({
                                shareMedium: t,
                                eventID: n.props.id,
                                channelLogin: n.props.channelLogin || "undefined",
                                channelID: n.props.channelID || "undefined",
                                location: n.props.eventLocation
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = function(e) {
                                return "https://www.twitch.tv/events/" + e
                            }(this.props.id),
                            n = this.props.children;
                        return this.props.children || (n = a.createElement(s.z, {
                            dropdown: !0,
                            type: s.F.Hollow
                        }, Object(l.d)("Share", "ShareEvent"))), a.createElement(o.a, null, n, a.createElement(s.u, {
                            direction: this.props.balloonDirection
                        }, a.createElement(s.Va, {
                            padding: 1
                        }, a.createElement(s.Va, {
                            display: s.W.Flex,
                            flexDirection: s.Y.Row,
                            flexWrap: s.Z.NoWrap,
                            justifyContent: s.Ua.Center
                        }, a.createElement(r.a, {
                            type: r.b.Twitter,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(r.a, {
                            type: r.b.Facebook,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(r.a, {
                            type: r.b.Reddit,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(r.a, {
                            type: r.b.VKontakte,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        }), a.createElement(r.a, {
                            type: r.b.Copy,
                            text: this.props.title,
                            url: e,
                            onShareClick: this.onShareClicked
                        })))))
                    }, n
                }(a.Component);
            t.d(n, "a", function() {
                return c
            })
        },
        LfZz: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("/MKj"),
                l = t("fvjX"),
                r = t("1/iK"),
                o = t("aCAx"),
                d = t("y5D0"),
                s = t("kRBY"),
                c = t("/HY+"),
                u = t("q1tI"),
                m = t("/7QA"),
                v = t("eJ65"),
                p = t("4qQ0"),
                k = t("Ue10"),
                f = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleReportClick = function() {
                            if (!n.props.isLoggedIn) return n.props.login();
                            if (n.props.targetUser) {
                                var e = "https://www.twitch.tv/events/" + n.props.eventID;
                                n.props.showReportUserModal({
                                    reportContext: {
                                        contentType: p.a.User,
                                        targetUserID: n.props.targetUser.id
                                    },
                                    title: Object(m.d)("Report {channelName}", {
                                        channelName: n.props.targetUser.displayName
                                    }, "EventMoreMenu"),
                                    defaultDescription: "Report event: " + e
                                })
                            }
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return u.createElement(v.a, null, u.createElement(k.z, {
                            icon: k.nb.More,
                            type: k.F.Hollow
                        }), u.createElement(k.u, {
                            direction: this.props.balloonDirection,
                            tailOffset: this.props.tailOffset
                        }, u.createElement(k.Va, {
                            padding: {
                                y: 1
                            }
                        }, u.createElement(k.Sa, {
                            disabled: !this.props.targetUser,
                            onClick: this.handleReportClick
                        }, u.createElement(k.Va, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(m.d)("Report", "EventMoreMenu"))))))
                    }, n
                }(u.Component);
            var g = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(l.bindActionCreators)({
                    login: function() {
                        return Object(d.e)(r.a.ReportChannel)
                    },
                    showReportUserModal: function(e) {
                        var n = i.__rest(e, []);
                        return Object(o.d)(c.a, n)
                    }
                }, e)
            })(f);
            t.d(n, "a", function() {
                return g
            })
        },
        QTKY: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EventsPage_EventScheduleQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "before"
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
                                value: "after"
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
                                value: "following"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sortOrder"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SortOrder"
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
                                        value: "channelLogin"
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
                                        value: "eventLeaves"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "after"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "cursor"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "criteria"
                                        },
                                        value: {
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsBefore"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "before"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAfter"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "after"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "sortOrder"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sortOrder"
                                                    }
                                                }
                                            }]
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                                                }]
                                            }
                                        }, {
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
                                                            directives: [{
                                                                kind: "Directive",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "include"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "if"
                                                                    },
                                                                    value: {
                                                                        kind: "Variable",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "following"
                                                                        }
                                                                    }
                                                                }]
                                                            }],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "isFollowing"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "InlineFragment",
                                                            typeCondition: {
                                                                kind: "NamedType",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "EventLeaf"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
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
                                                                        value: "startAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "endAt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
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
                                                                        value: "imageURL"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "320"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "180"
                                                                        }
                                                                    }],
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 541
                }
            };
            t.loc.source = {
                body: "query EventsPage_EventScheduleQuery($channelLogin: String! $limit: Int $cursor: Cursor $before: Time $after: Time $following: Boolean! $sortOrder: SortOrder) {\nuser(login: $channelLogin) {\nid\neventLeaves(first: $limit after: $cursor criteria: {endsBefore: $before endsAfter: $after sortOrder: $sortOrder}) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nself @include(if: $following) {\nisFollowing\n}\n...on EventLeaf {\ntitle\nstartAt\nendAt\ngame {\nid\ndisplayName\n}\nchannel {\nid\nlogin\ndisplayName\n}\nimageURL(width:320 height:180)\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        ePeS: function(e, n, t) {
            "use strict";
            var i;

            function a(e) {
                switch (e) {
                    case "past":
                        return i.Past;
                    case "future":
                    default:
                        return i.Future
                }
            }
            t.d(n, "a", function() {
                    return i
                }), t.d(n, "b", function() {
                    return a
                }),
                function(e) {
                    e.Future = "future", e.Past = "past"
                }(i || (i = {}))
        },
        irYM: function(e, n, t) {
            "use strict";
            var i = t("/MKj"),
                a = t("fvjX"),
                l = t("1/iK"),
                r = t("y5D0"),
                o = t("kRBY"),
                d = t("mrSG"),
                s = t("q1tI"),
                c = t("/7QA"),
                u = t("yR8l"),
                m = t("geRD"),
                v = t("ug+5"),
                p = t("Ue10"),
                k = t("DXJk"),
                f = t("wSZZ"),
                g = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleButton = function(e) {
                            return e && (e.stopPropagation(), e.preventDefault()), n.toggleFollowing()
                        }, n
                    }
                    return d.__extends(n, e), n.prototype.render = function() {
                        var e = Object(c.d)("Remind Me", "FollowEvent"),
                            n = Object(c.d)("Reminder Set", "FollowEvent");
                        if (this.props.small) {
                            var t = e,
                                i = p.nb.Heart;
                            return this.props.areNotificationsEnabled && (t = n, i = p.nb.FollowCheck), s.createElement(p.Qb, {
                                label: t,
                                direction: this.props.tooltipDirection
                            }, s.createElement(p.A, {
                                size: p.B.Default,
                                icon: i,
                                onClick: this.handleButton,
                                ariaLabel: t
                            }))
                        }
                        return s.createElement(p.z, {
                            type: this.props.areNotificationsEnabled ? p.F.Success : p.F.Default,
                            onClick: this.handleButton,
                            icon: this.props.areNotificationsEnabled ? p.nb.FollowCheck : p.nb.Heart,
                            ariaLabel: this.props.areNotificationsEnabled ? n : e
                        }, this.props.areNotificationsEnabled ? n : e)
                    }, n.prototype.createOptimisticResponse = function(e) {
                        var n = {
                            __typename: e ? "FollowEventPayload" : "UnfollowEventPayload",
                            event: {
                                id: this.props.eventID,
                                self: {
                                    __typename: "EventSelfConnection",
                                    isFollowing: e
                                },
                                __typename: this.props.eventTypename
                            }
                        };
                        return e ? {
                            __typename: "Mutation",
                            followEvent: n
                        } : {
                            __typename: "Mutation",
                            unfollowEvent: n
                        }
                    }, n.prototype.toggleFollowing = function() {
                        if (!this.props.isLoggedIn) return this.props.login();
                        var e = d.__assign({}, Object(m.a)({
                            eventID: this.props.eventID
                        }), {
                            optimisticResponse: this.createOptimisticResponse(!this.props.areNotificationsEnabled)
                        });
                        this.props.areNotificationsEnabled ? this.props.unfollowEvent(e) : this.props.followEvent(e), Object(v.d)({
                            action: this.props.areNotificationsEnabled ? v.b.EmailReminderOff : v.b.EmailReminderOn,
                            channelLogin: this.props.channelLogin || "undefined",
                            channelID: this.props.channelID || "undefined",
                            eventID: this.props.eventID,
                            location: this.props.eventLocation
                        })
                    }, n
                }(s.PureComponent),
                h = Object(a.compose)(Object(u.a)(k, {
                    name: "followEvent"
                }), Object(u.a)(f, {
                    name: "unfollowEvent"
                }))(g);
            var b = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(r.e)(l.a.EventFollowButton)
                    }
                }, e)
            })(h);
            t.d(n, "a", function() {
                return b
            })
        },
        r93r: function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("mrSG"),
                a = t("cr+I"),
                l = t("q1tI"),
                r = t("/7QA"),
                o = t("8/mp"),
                d = t("GnwI"),
                s = t("/MKj"),
                c = t("kRBY"),
                u = t("fvjX"),
                m = t("yR8l"),
                v = t("2iEm"),
                p = t("kduP"),
                k = t("rO6o"),
                f = t("irYM"),
                g = t("LfZz"),
                h = t("Jhye");
            var b = t("ug+5"),
                E = t("Ue10"),
                N = Object(d.c)("EventListCard", {
                    autoReportInteractive: !0
                })(function(e) {
                    var n = new Date(e.event.startAt),
                        t = new Date(e.event.endAt),
                        a = n > new Date,
                        o = Object(p.b)(e.event.id),
                        d = !(!e.event.self || !e.event.self.isFollowing),
                        s = e.upwardBalloons ? E.v.Top : E.v.Bottom,
                        c = e.upwardBalloons ? E.Sb.Top : E.Sb.Bottom,
                        u = e.event.game && e.event.game.displayName || "-",
                        m = e.channel && (e.channel.displayName || e.channel.login) || "-",
                        N = null,
                        y = null,
                        S = null;
                    return e.channel && e.channel.id && e.channel.login && (a && (N = l.createElement(E.Va, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(f.a, {
                        eventID: e.event.id,
                        eventTypename: e.event.__typename,
                        areNotificationsEnabled: d,
                        channelLogin: e.channel.login,
                        channelID: e.channel.id,
                        eventLocation: b.a.ChannelEvents,
                        tooltipDirection: c
                    }))), y = l.createElement(E.Va, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(h.a, {
                        id: e.event.id,
                        title: e.event.title,
                        channelLogin: e.channel.login,
                        channelID: e.channel.id,
                        eventLocation: b.a.ChannelEvents,
                        balloonDirection: s
                    })), S = l.createElement(g.a, {
                        targetUser: {
                            id: e.channel.id,
                            displayName: m
                        },
                        eventID: e.event.id,
                        balloonDirection: s
                    })), l.createElement(E.xb, {
                        margin: {
                            y: 1
                        },
                        background: E.r.Base,
                        elevation: 1
                    }, l.createElement(E.G, {
                        row: !0
                    }, l.createElement(E.Na, {
                        flexShrink: 0
                    }, l.createElement(v.a, {
                        to: o
                    }, l.createElement(E.I, {
                        size: E.J.Size32,
                        aspect: E.p.Aspect16x9,
                        src: e.event.imageURL,
                        alt: e.event.title
                    }, l.createElement(k.a, {
                        date: n
                    })))), l.createElement(E.H, null, l.createElement(E.Va, {
                        margin: {
                            x: 2
                        }
                    }, l.createElement(E.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(v.a, {
                        to: o
                    }, l.createElement(E.V, {
                        type: E.Nb.H4
                    }, e.event.title))), l.createElement(E.V, {
                        color: E.O.Alt2
                    }, function(e, n) {
                        var t = new Date,
                            a = {
                                weekday: "long",
                                month: "short",
                                day: "numeric"
                            },
                            l = {
                                timeZoneName: "short"
                            };
                        t.getFullYear() !== e.getFullYear() && (a = i.__assign({}, a, {
                            year: "numeric"
                        })), e.getDate() !== n.getDate() && (l = i.__assign({}, l, {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        }), t.getFullYear() !== n.getFullYear() && (l = i.__assign({}, l, {
                            year: "numeric"
                        })));
                        var o = Object(r.i)(e, a),
                            d = Object(r.i)(n, l);
                        return Object(r.d)("{startTime} - {endTime}", {
                            startTime: o,
                            endTime: d
                        }, "EventListCard")
                    }(n, t)), l.createElement(E.V, {
                        color: E.O.Alt2
                    }, Object(r.d)("{channelName} streaming {gameName}", {
                        channelName: m,
                        gameName: u
                    }, "EventListCard")), l.createElement(E.Va, {
                        display: E.W.Flex,
                        margin: {
                            top: 2
                        }
                    }, N, y, l.createElement(E.Va, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(E.z, {
                        type: E.F.Hollow,
                        linkTo: o
                    }, Object(r.d)("View Details", "EventListCard"))), S)))))
                }),
                y = t("4hz/"),
                S = t("ePeS"),
                F = t("QTKY"),
                w = {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                limit: 20,
                                before: e.filter === S.a.Future ? null : (new Date).toISOString(),
                                after: e.filter !== S.a.Future ? null : (new Date).toISOString(),
                                sortOrder: e.filter === S.a.Future ? "ASC" : "DESC",
                                following: e.isLoggedIn && e.filter === S.a.Future
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                if (e.data.user && e.data.user.eventLeaves && e.data.user.eventLeaves.edges) {
                                    var n = e.data.user.eventLeaves.edges[Math.max(e.data.user.eventLeaves.edges.length - 1, 0)],
                                        t = n && n.cursor || "";
                                    return e.data.fetchMore({
                                        query: F,
                                        variables: i.__assign({}, e.data.variables, {
                                            cursor: t
                                        }),
                                        updateQuery: function(e, n) {
                                            var t = n.fetchMoreResult,
                                                a = e.user && e.user.eventLeaves && e.user.eventLeaves.edges || [];
                                            return t.user && t.user.eventLeaves && t.user.eventLeaves.edges && (a = a.concat(t.user.eventLeaves.edges)), {
                                                user: i.__assign({}, t.user, {
                                                    eventLeaves: i.__assign({}, t.user && t.user.eventLeaves || {}, {
                                                        edges: a
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                },
                C = Object(u.compose)(Object(m.a)(F, w), Object(d.c)("ChannelEventsSchedule", {
                    autoReportInteractive: !0
                }))(function(e) {
                    var n = null,
                        t = null,
                        i = null,
                        a = !1;
                    if (!e.data.loading && !e.data.error && e.data.user && e.data.user.eventLeaves) e.data.user.eventLeaves.edges && 0 !== e.data.user.eventLeaves.edges.length ? i = e.data.user.eventLeaves.edges.map(function(e, n, t) {
                        if (!e || !e.node) return null;
                        var i = n === t.length - 1,
                            a = null;
                        switch (e.node.channel && e.node.channel.id && e.node.channel.login && (a = {
                            id: e.node.channel.id,
                            login: e.node.channel.login,
                            displayName: e.node.channel.displayName
                        }), e.node.__typename) {
                            case "EventLeaf":
                                return l.createElement(N, {
                                    key: e.node.id,
                                    event: e.node,
                                    channel: a,
                                    upwardBalloons: i
                                });
                            default:
                                return null
                        }
                    }) : n = Object(r.d)("Nothing here yet", "ChannelEventsSchedule"), a = e.data.user.eventLeaves.pageInfo.hasNextPage;
                    else if (e.data.error) n = Object(r.d)("Error loading events", "ChannelEventsSchedule");
                    else if (e.data.loading && (!e.data.user || !e.data.user.eventLeaves)) return l.createElement(y.a, null);
                    return null !== n && (t = l.createElement(E.Va, {
                        margin: {
                            top: 5
                        },
                        display: E.W.Flex,
                        flexDirection: E.Y.Row,
                        justifyContent: E.Ua.Center
                    }, l.createElement(E.V, {
                        type: E.Nb.H4,
                        color: E.O.Alt2,
                        italic: !0
                    }, n))), l.createElement(E.Va, null, i, t, e.data.loading && l.createElement(E.Xa, {
                        fillContent: !0
                    }), l.createElement(o.a, {
                        loadMore: e.loadMore,
                        enabled: a
                    }))
                });
            var O = Object(s.connect)(function(e) {
                    return {
                        isLoggedIn: Object(c.f)(e)
                    }
                })(C),
                D = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleToggleChange = function(e) {
                            var t = Object(S.b)(e.currentTarget.value),
                                i = a.parse(n.props.searchQuery);
                            t !== S.a.Future ? i.filter = t : delete i.filter, n.props.onEventToggle(a.stringify(i))
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.channelLogin,
                            n = a.parse(this.props.searchQuery),
                            t = Object(S.b)(n.filter);
                        return l.createElement(E.Va, {
                            display: E.W.Flex,
                            flexGrow: 1,
                            fullHeight: !0
                        }, l.createElement(E.Na, {
                            fullWidth: !0
                        }, l.createElement(o.b, null, l.createElement(E.Va, {
                            fullWidth: !0,
                            padding: {
                                y: 2,
                                x: 3
                            }
                        }, l.createElement(E.qb, null, l.createElement(E.rb, {
                            name: "events-toggle",
                            label: Object(r.d)("Future Events", "ChannelEventsPage"),
                            defaultChecked: t === S.a.Future,
                            onChange: this.handleToggleChange,
                            value: S.a.Future
                        }), l.createElement(E.rb, {
                            name: "events-toggle",
                            label: Object(r.d)("Past Events", "ChannelEventsPage"),
                            defaultChecked: t === S.a.Past,
                            onChange: this.handleToggleChange,
                            value: S.a.Past
                        })), l.createElement(O, {
                            filter: t,
                            channelLogin: e
                        })))))
                    }, n
                }(l.Component),
                L = Object(d.c)("ChannelEventsContent", {
                    autoReportInteractive: !0
                })(D);
            t.d(n, "ChannelEventsContentComponent", function() {
                return D
            }), t.d(n, "ChannelEventsContent", function() {
                return L
            })
        },
        rO6o: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("/7QA"),
                l = t("Ue10"),
                r = (t("z3xZ"), function(e) {
                    var n = Object(a.c)(e.date, {
                            month: "short"
                        }),
                        t = Object(a.c)(e.date, {
                            day: "numeric"
                        });
                    return i.createElement(l.xb, {
                        background: l.r.Base,
                        elevation: 2,
                        display: l.W.Flex,
                        flexDirection: l.Y.Column,
                        className: "event-calendar-date",
                        margin: {
                            top: .5,
                            left: .5
                        },
                        position: l.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        flexWrap: l.Z.NoWrap
                    }, i.createElement(l.xb, {
                        className: "event-calendar-date__month",
                        display: l.W.Flex,
                        justifyContent: l.Ua.Center,
                        background: l.r.AccentAlt2
                    }, i.createElement(l.V, {
                        fontSize: l.Aa.Size6,
                        transform: l.Mb.Uppercase,
                        color: l.O.Overlay
                    }, n)), i.createElement(l.Va, {
                        display: l.W.Flex,
                        justifyContent: l.Ua.Center
                    }, i.createElement(l.V, {
                        fontSize: l.Aa.Size3,
                        color: l.O.Base
                    }, t)))
                });
            t.d(n, "a", function() {
                return r
            })
        },
        "ug+5": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return a
            }), t.d(n, "c", function() {
                return o
            }), t.d(n, "d", function() {
                return d
            });
            var i, a, l = t("/7QA"),
                r = t("2xye");

            function o(e) {
                var n = {
                    share_medium: e.shareMedium,
                    event_id: e.eventID,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    location: e.location
                };
                return l.o.tracking.track(r.SpadeEventType.EventShare, n)
            }

            function d(e) {
                var n = {
                    action: e.action,
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    event_id: e.eventID,
                    location: e.location
                };
                return l.o.tracking.track(r.SpadeEventType.EventFollowing, n)
            }! function(e) {
                e.ChannelEvents = "channel_events", e.DashboardEvents = "dashboard_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
            }(i || (i = {})),
            function(e) {
                e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
            }(a || (a = {}))
        },
        wSZZ: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Events_UnfollowEvent"
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
                                    value: "UnfollowEventInput"
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
                                value: "unfollowEvent"
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
                                        value: "event"
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
                                                    value: "EventCollection"
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
                                                                value: "isFollowing"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "EventLeaf"
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
                                                                value: "isFollowing"
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
                    end: 199
                }
            };
            t.loc.source = {
                body: "mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        z3xZ: function(e, n, t) {}
    }
]);