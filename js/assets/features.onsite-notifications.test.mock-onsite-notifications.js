(window.webpackJsonp = window.webpackJsonp || []).push([
    [82], {
        Pm5e: function(n, e, t) {
            "use strict";
            t.r(e);
            var i = t("mrSG"),
                r = t("UfoR"),
                o = t("oSPo"),
                a = t("Je81"),
                u = t("IrUU"),
                c = t("GgTn"),
                f = t("1Ot3"),
                s = t("x73c");
            t.d(e, "MockOnsiteNotifications", function() {
                return l
            });
            var l = {
                getMockOnsiteNotification: function(n) {
                    return {
                        id: n || "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                            var e = 16 * Math.random() | 0;
                            return ("x" === n ? e : 3 & e | 8).toString(16)
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
                getMockOnsiteNotificationModels: function(n) {
                    for (var e = [], t = 0; t < n; t++) e.push(l.getMockOnsiteNotification());
                    return e
                },
                getMockOnsiteNotificationEdges: function(n) {
                    for (var e = [], t = 0; t < n; t++) e.push({
                        cursor: "",
                        node: i.__assign({}, l.getMockOnsiteNotification(t.toString())),
                        __typename: "OnsiteNotificationEdge"
                    });
                    return e
                },
                getMockOnsiteNotificationList: function(n) {
                    return {
                        currentUser: {
                            id: "1",
                            notifications: {
                                pageInfo: {
                                    hasNextPage: !1
                                },
                                edges: l.getMockOnsiteNotificationEdges(n)
                            }
                        }
                    }
                },
                getMockSummaryData: function(n) {
                    return {
                        request: {
                            query: Object(r.a)(f)
                        },
                        result: {
                            data: {
                                currentUser: {
                                    id: 1,
                                    notifications: {
                                        summary: {
                                            unseenCount: n,
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
                            query: Object(r.a)(s)
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
                getMockListOnsiteNotifications: function(n) {
                    return l.getMockOnsiteNotifications(l.getMockOnsiteNotificationEdges(n))
                },
                getMockOnsiteNotifications: function(n) {
                    return {
                        request: {
                            query: Object(r.a)(u),
                            variables: {
                                limit: o.a,
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
                                        edges: n
                                    }
                                }
                            }
                        }
                    }
                },
                getMockDeleteNotificationMutation: function(n) {
                    return {
                        request: {
                            query: Object(r.a)(a),
                            variables: {
                                input: {
                                    id: n
                                }
                            }
                        },
                        result: {
                            data: {
                                deleteNotification: {
                                    notification: {
                                        id: n,
                                        __typename: "OnsiteNotification"
                                    },
                                    __typename: "DeleteNotificationPayload"
                                }
                            }
                        }
                    }
                },
                getMockReadNotificationMutation: function(n) {
                    var e = n.map(function(n) {
                        return {
                            id: n,
                            isRead: !0,
                            __typename: "OnsiteNotification"
                        }
                    });
                    return {
                        request: {
                            query: Object(r.a)(c),
                            variables: {
                                input: {
                                    ids: n
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
        UfoR: function(n, e, t) {
            "use strict";

            function i(n) {
                return ["StringValue", "BooleanValue", "EnumValue"].indexOf(n.kind) > -1
            }

            function r(n) {
                return ["IntValue", "FloatValue"].indexOf(n.kind) > -1
            }

            function o(n, e, t, i) {
                if (function(n) {
                        return "IntValue" === n.kind
                    }(t) || function(n) {
                        return "FloatValue" === n.kind
                    }(t)) n[e.value] = Number(t.value);
                else if (function(n) {
                        return "BooleanValue" === n.kind
                    }(t) || function(n) {
                        return "StringValue" === n.kind
                    }(t)) n[e.value] = t.value;
                else if (function(n) {
                        return "ObjectValue" === n.kind
                    }(t)) {
                    var r = {};
                    t.fields.map(function(n) {
                        return o(r, n.name, n.value, i)
                    }), n[e.value] = r
                } else if (function(n) {
                        return "Variable" === n.kind
                    }(t)) {
                    var a = (i || {})[t.name.value];
                    n[e.value] = a
                } else if (function(n) {
                        return "ListValue" === n.kind
                    }(t)) n[e.value] = t.values.map(function(n) {
                    var t = {};
                    return o(t, e, n, i), t[e.value]
                });
                else {
                    if (! function(n) {
                            return "EnumValue" === n.kind
                        }(t)) throw new Error('The inline argument "' + e.value + '" of kind "' + t.kind + '" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.');
                    n[e.value] = t.value
                }
            }

            function a(n, e) {
                var t = null;
                n.directives && (t = {}, n.directives.forEach(function(n) {
                    t[n.name.value] = {}, n.arguments && n.arguments.forEach(function(i) {
                        var r = i.name,
                            a = i.value;
                        return o(t[n.name.value], r, a, e)
                    })
                }));
                var i = null;
                return n.arguments && n.arguments.length && (i = {}, n.arguments.forEach(function(n) {
                    var t = n.name,
                        r = n.value;
                    return o(i, t, r, e)
                })), c(n.name.value, i, t)
            }
            var u = ["connection", "include", "skip", "client", "rest", "export"];

            function c(n, e, t) {
                if (t && t.connection && t.connection.key) {
                    if (t.connection.filter && t.connection.filter.length > 0) {
                        var i = t.connection.filter ? t.connection.filter : [];
                        i.sort();
                        var r = e,
                            o = {};
                        return i.forEach(function(n) {
                            o[n] = r[n]
                        }), t.connection.key + "(" + JSON.stringify(o) + ")"
                    }
                    return t.connection.key
                }
                var a = n;
                if (e) {
                    var c = JSON.stringify(e);
                    a += "(" + c + ")"
                }
                return t && Object.keys(t).forEach(function(n) {
                    -1 === u.indexOf(n) && (t[n] && Object.keys(t[n]).length ? a += "@" + n + "(" + JSON.stringify(t[n]) + ")" : a += "@" + n)
                }), a
            }

            function f(n, e) {
                if (n.arguments && n.arguments.length) {
                    var t = {};
                    return n.arguments.forEach(function(n) {
                        var i = n.name,
                            r = n.value;
                        return o(t, i, r, e)
                    }), t
                }
                return null
            }

            function s(n) {
                return n.alias ? n.alias.value : n.name.value
            }

            function l(n) {
                return "Field" === n.kind
            }

            function d(n) {
                return "InlineFragment" === n.kind
            }

            function v(n) {
                return n && "id" === n.type
            }

            function m(n, e) {
                return void 0 === e && (e = !1), {
                    type: "id",
                    id: n,
                    generated: e
                }
            }

            function p(n) {
                return null != n && "object" == typeof n && "json" === n.type
            }

            function g(n) {
                throw new Error("Variable nodes are not supported by valueFromNode")
            }

            function h(n, e) {
                switch (void 0 === e && (e = g), n.kind) {
                    case "Variable":
                        return e(n);
                    case "NullValue":
                        return null;
                    case "IntValue":
                        return parseInt(n.value);
                    case "FloatValue":
                        return parseFloat(n.value);
                    case "ListValue":
                        return n.values.map(function(n) {
                            return h(n, e)
                        });
                    case "ObjectValue":
                        for (var t = {}, i = 0, r = n.fields; i < r.length; i++) {
                            var o = r[i];
                            t[o.name.value] = h(o.value, e)
                        }
                        return t;
                    default:
                        return n.value
                }
            }

            function y(n, e) {
                if (n.directives && n.directives.length) {
                    var t = {};
                    return n.directives.forEach(function(n) {
                        t[n.name.value] = f(n, e)
                    }), t
                }
                return null
            }

            function k(n, e) {
                if (void 0 === e && (e = {}), !n.directives) return !0;
                var t = !0;
                return n.directives.forEach(function(n) {
                    if ("skip" === n.name.value || "include" === n.name.value) {
                        var i = n.arguments || [],
                            r = n.name.value;
                        if (1 !== i.length) throw new Error("Incorrect number of arguments for the @" + r + " directive.");
                        var o = i[0];
                        if (!o.name || "if" !== o.name.value) throw new Error("Invalid argument for the @" + r + " directive.");
                        var a = i[0].value,
                            u = !1;
                        if (a && "BooleanValue" === a.kind) u = a.value;
                        else {
                            if ("Variable" !== a.kind) throw new Error("Argument for the @" + r + " directive must be a variable or a boolean value.");
                            if (void 0 === (u = e[a.name.value])) throw new Error("Invalid variable referenced in @" + r + " directive.")
                        }
                        "skip" === r && (u = !u), u || (t = !1)
                    }
                }), t
            }

            function w(n) {
                return n.selectionSet && n.selectionSet.selections.length > 0 ? [n].concat(n.selectionSet.selections.map(function(n) {
                    return [n].concat(w(n))
                }).reduce(function(n, e) {
                    return n.concat(e)
                }, [])) : [n]
            }
            var b = new Map;

            function O(n) {
                var e = b.get(n);
                if (e) return e;
                var t = n.definitions.filter(function(n) {
                    return n.selectionSet && n.selectionSet.selections
                }).map(function(n) {
                    return w(n)
                }).reduce(function(n, e) {
                    return n.concat(e)
                }, []).filter(function(n) {
                    return n.directives && n.directives.length > 0
                }).map(function(n) {
                    return n.directives
                }).reduce(function(n, e) {
                    return n.concat(e)
                }, []).map(function(n) {
                    return n.name.value
                });
                return b.set(n, t), t
            }

            function x(n, e) {
                return O(e).some(function(e) {
                    return n.indexOf(e) > -1
                })
            }
            var _ = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            };

            function E(n, e) {
                var t = e,
                    i = [];
                if (n.definitions.forEach(function(n) {
                        if ("OperationDefinition" === n.kind) throw new Error("Found a " + n.operation + " operation" + (n.name ? " named '" + n.name.value + "'" : "") + ". No operations are allowed when using a fragment as a query. Only fragments are allowed.");
                        "FragmentDefinition" === n.kind && i.push(n)
                    }), void 0 === t) {
                    if (1 !== i.length) throw new Error("Found " + i.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
                    t = i[0].name.value
                }
                return _({}, n, {
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: t
                                }
                            }]
                        }
                    }].concat(n.definitions)
                })
            }

            function N(n) {
                for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                return e.forEach(function(e) {
                    void 0 !== e && null !== e && Object.keys(e).forEach(function(t) {
                        n[t] = e[t]
                    })
                }), n
            }

            function S(n) {
                j(n);
                var e = n.definitions.filter(function(n) {
                    return "OperationDefinition" === n.kind && "mutation" === n.operation
                })[0];
                if (!e) throw new Error("Must contain a mutation definition.");
                return e
            }

            function j(n) {
                if ("Document" !== n.kind) throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
                var e = n.definitions.filter(function(n) {
                    return "FragmentDefinition" !== n.kind
                }).map(function(n) {
                    if ("OperationDefinition" !== n.kind) throw new Error('Schema type definitions not allowed in queries. Found: "' + n.kind + '"');
                    return n
                });
                if (e.length > 1) throw new Error("Ambiguous GraphQL document: contains " + e.length + " operations")
            }

            function F(n) {
                return j(n), n.definitions.filter(function(n) {
                    return "OperationDefinition" === n.kind
                })[0]
            }

            function q(n) {
                var e = F(n);
                if (!e) throw new Error("GraphQL document is missing an operation");
                return e
            }

            function D(n) {
                return n.definitions.filter(function(n) {
                    return "OperationDefinition" === n.kind && n.name
                }).map(function(n) {
                    return n.name.value
                })[0] || null
            }

            function M(n) {
                return n.definitions.filter(function(n) {
                    return "FragmentDefinition" === n.kind
                })
            }

            function V(n) {
                var e = F(n);
                if (!e || "query" !== e.operation) throw new Error("Must contain a query definition.");
                return e
            }

            function I(n) {
                if ("Document" !== n.kind) throw new Error('Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
                if (n.definitions.length > 1) throw new Error("Fragment must have exactly one definition.");
                var e = n.definitions[0];
                if ("FragmentDefinition" !== e.kind) throw new Error("Must be a fragment definition.");
                return e
            }

            function P(n) {
                var e;
                j(n);
                for (var t = 0, i = n.definitions; t < i.length; t++) {
                    var r = i[t];
                    if ("OperationDefinition" === r.kind) {
                        var o = r.operation;
                        if ("query" === o || "mutation" === o || "subscription" === o) return r
                    }
                    "FragmentDefinition" !== r.kind || e || (e = r)
                }
                if (e) return e;
                throw new Error("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.")
            }

            function U(n) {
                void 0 === n && (n = []);
                var e = {};
                return n.forEach(function(n) {
                    e[n.name.value] = n
                }), e
            }

            function A(n) {
                if (n && n.variableDefinitions && n.variableDefinitions.length) {
                    var e = n.variableDefinitions.filter(function(n) {
                        return n.defaultValue
                    }).map(function(n) {
                        var e = n.variable,
                            t = n.defaultValue,
                            i = {};
                        return o(i, e.name, t), i
                    });
                    return N.apply(void 0, [{}].concat(e))
                }
                return {}
            }

            function R(n) {
                var e = new Set;
                if (n.variableDefinitions)
                    for (var t = 0, i = n.variableDefinitions; t < i.length; t++) {
                        var r = i[t];
                        e.add(r.variable.name.value)
                    }
                return e
            }

            function L(n) {
                if (Array.isArray(n)) return n.map(function(n) {
                    return L(n)
                });
                if (null !== n && "object" == typeof n) {
                    var e = {};
                    for (var t in n) n.hasOwnProperty(t) && (e[t] = L(n[t]));
                    return e
                }
                return n
            }
            var T = {
                kind: "Field",
                name: {
                    kind: "Name",
                    value: "__typename"
                }
            };

            function C(n, e) {
                var t = L(e);
                t.definitions.forEach(function(e) {
                    ! function n(e, t) {
                        if (!t.selections) return t;
                        var i = e.some(function(n) {
                            return n.remove
                        });
                        return t.selections = t.selections.map(function(n) {
                            return "Field" === n.kind && n && n.directives ? (n.directives = n.directives.filter(function(n) {
                                var r = !e.some(function(e) {
                                    return !(!e.name || e.name !== n.name.value) || !(!e.test || !e.test(n))
                                });
                                return t || r || !i || (t = !0), r
                            }), t ? null : n) : n;
                            var t
                        }).filter(function(n) {
                            return !!n
                        }), t.selections.forEach(function(t) {
                            "Field" !== t.kind && "InlineFragment" !== t.kind || !t.selectionSet || n(e, t.selectionSet)
                        }), t
                    }(n, e.selectionSet)
                });
                var i = q(t),
                    r = U(M(t)),
                    o = function(n) {
                        return n.selectionSet.selections.filter(function(n) {
                            return !(n && "FragmentSpread" === n.kind && !o(r[n.name.value]))
                        }).length > 0
                    };
                return o(i) ? t : null
            }
            var G = new Map;

            function J(n) {
                j(n);
                var e = G.get(n);
                if (e) return e;
                var t = L(n);
                return t.definitions.forEach(function(n) {
                    var e = "OperationDefinition" === n.kind;
                    ! function n(e, t) {
                        void 0 === t && (t = !1), e.selections && (t || e.selections.some(function(n) {
                            return "Field" === n.kind && "__typename" === n.name.value
                        }) || e.selections.push(T), e.selections.forEach(function(e) {
                            "Field" === e.kind ? 0 !== e.name.value.lastIndexOf("__", 0) && e.selectionSet && n(e.selectionSet) : "InlineFragment" === e.kind && e.selectionSet && n(e.selectionSet)
                        }))
                    }(n.selectionSet, e)
                }), G.set(n, t), t
            }
            var Q = {
                    test: function(n) {
                        var e = "connection" === n.name.value;
                        return e && (n.arguments && n.arguments.some(function(n) {
                            return "key" === n.name.value
                        }) || console.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), e
                    }
                },
                B = new Map;

            function Z(n) {
                j(n);
                var e = B.get(n);
                if (e) return e;
                var t = C([Q], n);
                return B.set(n, t), t
            }
            var z = t("XvA5");

            function X(n) {
                try {
                    return n()
                } catch (n) {
                    console.error && console.error(n)
                }
            }

            function W(n) {
                return n.errors && n.errors.length
            }

            function Y(n, e) {
                if (n === e) return !0;
                if (n instanceof Date && e instanceof Date) return n.getTime() === e.getTime();
                if (null != n && "object" == typeof n && null != e && "object" == typeof e) {
                    for (var t in n)
                        if (Object.prototype.hasOwnProperty.call(n, t)) {
                            if (!Object.prototype.hasOwnProperty.call(e, t)) return !1;
                            if (!Y(n[t], e[t])) return !1
                        }
                    for (var t in e)
                        if (!Object.prototype.hasOwnProperty.call(n, t)) return !1;
                    return !0
                }
                return !1
            }

            function H(n) {
                return Object(z.a)() || Object(z.c)() ? function n(e) {
                    return Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
                        !e.hasOwnProperty(t) || null === e[t] || "object" != typeof e[t] && "function" != typeof e[t] || Object.isFrozen(e[t]) || n(e[t])
                    }), e
                }(n) : n
            }
            var K = Object.create({});

            function $(n, e) {
                if (void 0 === e && (e = "warn"), !Object(z.b)() && !K[n]) switch (Object(z.c)() || (K[n] = !0), e) {
                    case "error":
                        console.error(n);
                        break;
                    default:
                        console.warn(n)
                }
            }
            t.d(e, !1, function() {
                return y
            }), t.d(e, !1, function() {
                return k
            }), t.d(e, !1, function() {
                return w
            }), t.d(e, !1, function() {
                return O
            }), t.d(e, !1, function() {
                return x
            }), t.d(e, !1, function() {
                return E
            }), t.d(e, !1, function() {
                return S
            }), t.d(e, !1, function() {
                return j
            }), t.d(e, !1, function() {
                return F
            }), t.d(e, !1, function() {
                return q
            }), t.d(e, !1, function() {
                return D
            }), t.d(e, !1, function() {
                return M
            }), t.d(e, !1, function() {
                return V
            }), t.d(e, !1, function() {
                return I
            }), t.d(e, !1, function() {
                return P
            }), t.d(e, !1, function() {
                return U
            }), t.d(e, !1, function() {
                return A
            }), t.d(e, !1, function() {
                return R
            }), t.d(e, !1, function() {
                return C
            }), t.d(e, "a", function() {
                return J
            }), t.d(e, !1, function() {
                return Z
            }), t.d(e, !1, function() {
                return i
            }), t.d(e, !1, function() {
                return r
            }), t.d(e, !1, function() {
                return o
            }), t.d(e, !1, function() {
                return a
            }), t.d(e, !1, function() {
                return c
            }), t.d(e, !1, function() {
                return f
            }), t.d(e, !1, function() {
                return s
            }), t.d(e, !1, function() {
                return l
            }), t.d(e, !1, function() {
                return d
            }), t.d(e, !1, function() {
                return v
            }), t.d(e, !1, function() {
                return m
            }), t.d(e, !1, function() {
                return p
            }), t.d(e, !1, function() {
                return h
            }), t.d(e, !1, function() {
                return N
            }), t.d(e, !1, function() {
                return L
            }), t.d(e, !1, function() {}), t.d(e, !1, function() {}), t.d(e, !1, function() {
                return z.b
            }), t.d(e, !1, function() {
                return z.a
            }), t.d(e, !1, function() {
                return z.c
            }), t.d(e, !1, function() {
                return X
            }), t.d(e, !1, function() {
                return W
            }), t.d(e, !1, function() {
                return Y
            }), t.d(e, !1, function() {
                return H
            }), t.d(e, !1, function() {
                return $
            })
        },
        XvA5: function(n, e, t) {
            "use strict";
            (function(n) {
                function i(e) {
                    return (void 0 !== n ? "production" : "development") === e
                }

                function r() {
                    return !0 === i("production")
                }

                function o() {
                    return !0 === i("development")
                }

                function a() {
                    return !0 === i("test")
                }
                t.d(e, "b", function() {
                    return r
                }), t.d(e, "a", function() {
                    return o
                }), t.d(e, "c", function() {
                    return a
                })
            }).call(this, t("8oxB"))
        }
    }
]);