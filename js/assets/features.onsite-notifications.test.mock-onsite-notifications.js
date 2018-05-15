webpackJsonp([32], {
    SFZn: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("TToO");
        new Map;
        this && this.__assign || Object.assign;

        function o(t) {
            if ("Document" !== t.kind) throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
            var e = t.definitions.filter(function(t) {
                return "FragmentDefinition" !== t.kind
            }).map(function(t) {
                if ("OperationDefinition" !== t.kind) throw new Error('Schema type definitions not allowed in queries. Found: "' + t.kind + '"');
                return t
            });
            if (e.length > 1) throw new Error("Ambiguous GraphQL document: contains " + e.length + " operations")
        }

        function a(t) {
            if (Array.isArray(t)) return t.map(function(t) {
                return a(t)
            });
            if (null !== t && "object" == typeof t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[n] = a(t[n]));
                return e
            }
            return t
        }
        var r = {
            kind: "Field",
            name: {
                kind: "Name",
                value: "__typename"
            }
        };
        var c = new Map;

        function s(t) {
            o(t);
            var e = c.get(t);
            if (e) return e;
            var n = a(t);
            return n.definitions.forEach(function(t) {
                var e = "OperationDefinition" === t.kind;
                ! function t(e, n) {
                    void 0 === n && (n = !1), e.selections && (n || e.selections.some(function(t) {
                        return "Field" === t.kind && "__typename" === t.name.value
                    }) || e.selections.push(r), e.selections.forEach(function(e) {
                        "Field" === e.kind ? 0 !== e.name.value.lastIndexOf("__", 0) && e.selectionSet && t(e.selectionSet) : "InlineFragment" === e.kind && e.selectionSet && t(e.selectionSet)
                    }))
                }(t.selectionSet, e)
            }), c.set(t, n), n
        }
        new Map;
        n("mSTb");
        Object.create({});
        var u = n("U3i2"),
            f = n("XF1M"),
            d = n("UhWx"),
            l = n("WfBs"),
            p = n("c8sn"),
            m = n("wHbv");
        n.d(e, "MockOnsiteNotifications", function() {
            return g
        });
        var g = {
            getMockOnsiteNotification: function(t) {
                return {
                    id: t || "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" === t ? e : 3 & e | 8).toString(16)
                    }),
                    body: '**Twitch** posted: "Welcome to your notifications! From this area you can see and easily access all notifications about activities that involve you or the broadcasters you follow..."',
                    type: "onboarding",
                    thumbnailURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/twitch-profile_image-8a8c5be2e3b64a9a-70x70.png",
                    actions: [{
                        type: "click",
                        url: "https://blog.twitch.tv/notifications-c7ea43f360ae",
                        body: "View",
                        __typename: "OnsiteNotificationAction"
                    }],
                    createdAt: "2017-08-23T03:20:25.75536206Z",
                    updatedAt: "2017-08-23T03:20:25.7553624Z",
                    isRead: !1,
                    __typename: "OnsiteNotification"
                }
            },
            getMockOnsiteNotificationModels: function(t) {
                for (var e = [], n = 0; n < t; n++) e.push(g.getMockOnsiteNotification());
                return e
            },
            getMockOnsiteNotificationEdges: function(t) {
                for (var e = [], n = 0; n < t; n++) e.push({
                    cursor: "",
                    node: i.__assign({}, g.getMockOnsiteNotification(n.toString())),
                    __typename: "OnsiteNotificationEdge"
                });
                return e
            },
            getMockOnsiteNotificationList: function(t) {
                return {
                    currentUser: {
                        id: "1",
                        notifications: {
                            pageInfo: {
                                hasNextPage: !1
                            },
                            edges: g.getMockOnsiteNotificationEdges(t)
                        }
                    }
                }
            },
            getMockSummaryData: function(t) {
                return {
                    request: {
                        query: s(p)
                    },
                    result: {
                        data: {
                            currentUser: {
                                id: 1,
                                notifications: {
                                    summary: {
                                        unseenCount: t,
                                        lastSeenAt: "2017-09-27T19:47:36.611765769Z",
                                        __typename: "OnsiteNotificationsSummary"
                                    },
                                    __typename: "OnsiteNotificationConnection"
                                },
                                incomingFriendRequests: {
                                    totalUnreadCount: 0,
                                    newestEdge: {
                                        createdAt: null,
                                        __typename: "IncomingFriendRequestEdge"
                                    },
                                    __typename: "IncomingFriendRequestConnection"
                                },
                                __typename: "User"
                            }
                        }
                    }
                }
            },
            getMockViewedMutationData: function() {
                return {
                    request: {
                        query: s(m)
                    },
                    result: {
                        data: {
                            viewedNotifications: {
                                user: {
                                    notifications: {
                                        summary: {
                                            unseenCount: 0,
                                            lastSeenAt: new Date,
                                            __typename: "OnsiteNotificationsSummary"
                                        },
                                        __typename: "OnsiteNotificationConnection"
                                    },
                                    __typename: "User"
                                },
                                __typename: "ViewedNotificationsPayload"
                            }
                        }
                    }
                }
            },
            getMockListOnsiteNotifications: function(t) {
                return g.getMockOnsiteNotifications(g.getMockOnsiteNotificationEdges(t))
            },
            getMockOnsiteNotifications: function(t) {
                return {
                    request: {
                        query: s(d),
                        variables: {
                            limit: u.a,
                            cursor: "",
                            language: "en"
                        }
                    },
                    result: {
                        data: {
                            currentUser: {
                                __typename: "User",
                                id: "1",
                                notifications: {
                                    __typename: "OnsiteNotificationConnection",
                                    pageInfo: {
                                        hasNextPage: !0,
                                        __typename: "PageInfo"
                                    },
                                    edges: t
                                }
                            }
                        }
                    }
                }
            },
            getMockDeleteNotificationMutation: function(t) {
                return {
                    request: {
                        query: s(f),
                        variables: {
                            input: {
                                id: t
                            }
                        }
                    },
                    result: {
                        data: {
                            deleteNotification: {
                                notification: {
                                    id: t,
                                    __typename: "OnsiteNotification"
                                },
                                __typename: "DeleteNotificationPayload"
                            }
                        }
                    }
                }
            },
            getMockReadNotificationMutation: function(t) {
                var e = t.map(function(t) {
                    return {
                        id: t,
                        isRead: !0,
                        __typename: "OnsiteNotification"
                    }
                });
                return {
                    request: {
                        query: s(l),
                        variables: {
                            input: {
                                ids: t
                            }
                        }
                    },
                    result: {
                        data: {
                            readNotifications: {
                                notifications: e,
                                __typename: "ReadNotificationPayload"
                            }
                        }
                    }
                }
            }
        }
    },
    mSTb: function(t, e, n) {
        "use strict";
        (function(t) {
            function n(e) {
                return (void 0 !== t ? "production" : "development") === e
            }
            e.b = function() {
                return !0 === n("production")
            }, e.a = function() {
                return !0 === n("development")
            }, e.c = function() {
                return !0 === n("test")
            }
        }).call(e, n("W2nU"))
    }
});
//# sourceMappingURL=features.onsite-notifications.test.mock-onsite-notifications-666f18c09a441a61c9c9bed1ae965c8f.js.map