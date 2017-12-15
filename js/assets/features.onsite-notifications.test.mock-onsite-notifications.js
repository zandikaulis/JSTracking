webpackJsonp([32], {
    SFZn: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("TToO"),
            o = i("u1/p"),
            a = i("U3i2"),
            c = i("XF1M"),
            s = i("UhWx"),
            r = i("WfBs"),
            u = i("c8sn"),
            d = i("wHbv");
        i.d(e, "MockOnsiteNotifications", function() {
            return f
        });
        var f = {
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
                for (var e = [], i = 0; i < t; i++) e.push(f.getMockOnsiteNotification());
                return e
            },
            getMockOnsiteNotificationEdges: function(t) {
                for (var e = [], i = 0; i < t; i++) e.push({
                    cursor: "",
                    node: n.__assign({}, f.getMockOnsiteNotification(i.toString())),
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
                            edges: f.getMockOnsiteNotificationEdges(t)
                        }
                    }
                }
            },
            getMockSummaryData: function(t) {
                return {
                    request: {
                        query: Object(o.addTypenameToDocument)(u)
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
                        query: Object(o.addTypenameToDocument)(d)
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
                return f.getMockOnsiteNotifications(f.getMockOnsiteNotificationEdges(t))
            },
            getMockOnsiteNotifications: function(t) {
                return {
                    request: {
                        query: Object(o.addTypenameToDocument)(s),
                        variables: {
                            limit: a.a,
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
                        query: Object(o.addTypenameToDocument)(c),
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
                        query: Object(o.addTypenameToDocument)(r),
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
    }
});
//# sourceMappingURL=features.onsite-notifications.test.mock-onsite-notifications-3a2db4ff8916b6540def4c016bb13e3d.js.map