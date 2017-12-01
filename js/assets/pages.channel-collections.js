webpackJsonp([46], {
    1038: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i = n(0),
            a = n(4),
            r = (n.n(a), n(1)),
            s = (n.n(r), n(10)),
            o = n(907),
            l = n(56),
            c = n(875),
            d = n(444),
            u = n(3),
            m = n(1039),
            p = (n.n(m), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.onHistoryChange = function(e) {
                        e.pathname !== t.currentPath && t.context.scrollToTop(), t.currentPath = e.pathname
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return r.createElement(u.U, i.__assign({
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        flexWrap: u.K.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), r.createElement(d.b, {
                        className: e
                    }), r.createElement(o.a, null, r.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), r.createElement(u.U, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children));
                    var t
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.contextTypes = {
                    scrollToTop: r.PropTypes.func
                }, t
            }(r.Component)),
            h = Object(s.f)(p)
    },
    1039: function(e, t) {},
    129: function(e, t, n) {
        "use strict";

        function i(e) {
            return r.b.get(o.a, !1) || r.a.buildType !== s.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? l + e : l + e.pathname
        }

        function a() {
            return !r.b.get(o.a, !1) && r.a.buildType === s.a.Production
        }
        var r = n(2),
            s = n(16),
            o = n(262);
        t.a = i, t.b = a;
        var l = "https://www.twitch.tv"
    },
    132: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = a.b.get(l, "https://twitch.amazon.com/prime"),
                i = "";
            try {
                i = btoa(t)
            } catch (e) {
                c.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? n + "?ref_=" + e + "&redirectRoute=" + i : n + "?ref_=" + e
        }
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "c", function() {
            return o
        }), t.d = i;
        var a = n(2),
            r = "sm_tw_tup_ntp_t_all",
            s = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            l = "prime_landing_page_base_url",
            c = a.i.withCategory("PrimeUtilsLogger")
    },
    133: function(e, t, n) {
        "use strict";

        function i(e) {
            return S.debug("Updating activity", e), E = h.__assign({}, E, {
                activity: e
            }), m()
        }

        function a(e) {
            S.debug("Updating visibility", e), p(e)
        }

        function r(e) {
            S.debug("Saving current availability", e), E = h.__assign({}, E, {
                availability: e
            })
        }

        function s() {
            r(g.a.Online)
        }

        function o() {
            r(g.a.Idle)
        }

        function l() {
            S.debug("Clearing activity"), E = h.__assign({}, E, {
                activity: null
            }), m()
        }

        function c() {
            return h.__awaiter(this, void 0, void 0, function() {
                var e;
                return h.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            S.debug("Clearing previous session"), E = {
                                sessionID: d(),
                                availability: g.a.Online,
                                activity: null
                            }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, m()];
                        case 2:
                            return t.sent(), S.debug("Setting new session"), E = h.__assign({}, E, {
                                sessionID: f.n.session.tabID
                            }), u(f.n.session.tabID), [4, m()];
                        case 3:
                            return [2, t.sent()];
                        case 4:
                            return e = t.sent(), [2, e];
                        case 5:
                            return [2]
                    }
                })
            })
        }

        function d() {
            return f.k.get(b, "")
        }

        function u(e) {
            f.k.set(b, e)
        }

        function m() {
            return h.__awaiter(this, void 0, void 0, function() {
                return h.__generator(this, function(e) {
                    return Object(v.d)(f.n.store.getState()) ? (S.debug("Setting status on server", {
                        state: E
                    }), _ && clearTimeout(_), [2, f.n.apollo.client.mutate({
                        mutation: y,
                        variables: {
                            input: E
                        }
                    }).then(function(e) {
                        S.debug("Status scheduled to be set again", {
                            seconds: e.data.setSessionStatus.setAgainInSeconds
                        }), _ = setTimeout(m, 1e3 * e.data.setSessionStatus.setAgainInSeconds)
                    }, function(e) {
                        S.warn("Failed to update status. Trying again in 60 seconds.", e), _ = setTimeout(m, 6e4)
                    })]) : [2]
                })
            })
        }

        function p(e) {
            Object(v.d)(f.n.store.getState()) && (S.debug("Setting visibility on server", {
                visibility: e
            }), f.n.apollo.client.mutate({
                mutation: k,
                variables: {
                    input: {
                        visibility: e
                    }
                }
            }).then(function(e) {
                S.debug("Visibility set", {
                    visibility: e.data.updateVisibility.user.availability
                })
            }, function(e) {
                S.warn("Failed to update visibility.", e)
            }))
        }
        t.f = i, t.e = a, t.c = r, t.b = s, t.d = o, t.a = l, t.g = c;
        var h = n(0),
            f = n(2),
            g = n(51),
            v = n(17),
            y = n(416),
            k = (n.n(y), n(417)),
            b = (n.n(k), "twilight.sessionID"),
            _ = 0,
            S = f.i.withCategory("Session Status"),
            N = {
                sessionID: f.n.session.tabID,
                availability: "",
                activity: null
            },
            E = N
    },
    1704: function(e, t) {},
    1705: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionsPage_UserAndCurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "ownerLogin"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "ownerLogin"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "collections"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "first"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "1"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
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
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 543
            }
        };
        n.loc.source = {
            body: "query CollectionsPage_UserAndCurrentUser($ownerLogin: String!, $limit: Int, $cursor: Cursor) {\n  user(login: $ownerLogin) {\n    id\n    login\n    displayName\n    collections(first: $limit, after: $cursor) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          items(first: 1) {\n            totalCount\n          }\n          viewCount\n          thumbnailURL(width: 320 height: 180)\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2047: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            a = n(1),
            r = n(32),
            s = n(2),
            o = n(67),
            l = n(28),
            c = n(811),
            d = n(49),
            u = n(808),
            m = n(12),
            p = n(875),
            h = n(5),
            f = n(10),
            g = n(3),
            v = (n(1704), 0),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPrimaryImageLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.computeViewsMessage = function() {
                        var e = t.props.totalViews || v;
                        return 0 === e || 1 === e ? Object(s.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(s.d)("{viewCount} views", {
                            viewCount: Object(s.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(s.d)("By {channelName}", {
                        channelName: a.createElement(f.a, {
                            to: this.props.channelLinkTo,
                            className: "collection-card__link",
                            "data-test-selector": "collection-card-channel-link"
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(g.A, i.__assign({
                        key: this.props.title
                    }, Object(g._39)(this.props)), a.createElement(g.P, {
                        className: "collection-card",
                        position: g._2.Relative
                    }, a.createElement(f.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        title: this.props.title,
                        "data-test-selector": 'collection-card-overlay-link"'
                    }, a.createElement(g.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc || s.a.defaultCollectionPreviewURL,
                        aspect: g.k.Aspect16x9,
                        onImageLoad: this.onPrimaryImageLoad,
                        "data-test-selector": "collection-image-body"
                    }, a.createElement(g.U, {
                        position: g._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(g._17, {
                        alignItems: g.c.Center,
                        display: g.H.InlineFlex,
                        flexDirection: g.J.Column,
                        position: g._2.Absolute,
                        attachRight: !0,
                        color: g.F.Overlay,
                        fontSize: g.L.Size5,
                        className: "collection-card__wrapper",
                        fullHeight: !0,
                        textAlign: g._22.Center,
                        justifyContent: g.T.Center,
                        "data-test-selector": "collection-card-overlay"
                    }, a.createElement("figure", null, a.createElement("svg", {
                        className: "collection-card__svg",
                        width: "19",
                        height: "19",
                        viewBox: "0 0 19 19"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M0,6 L19,6 L19,19 L0,19 L0,6 Z M12.25,12.5 L7,9 L7,16 L12.25,12.5 Z M2,3 L17,3 L17,5 L2,5 L2,3 Z M4,0 L15,0 L15,2 L4,2 L4,0 Z"
                    }))), a.createElement(g._21, null, Object(s.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount
                    }, "CollectionCard"))))))), a.createElement(g.B, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Column,
                        flexWrap: g.K.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(g._21, {
                        fontSize: g.L.Size5,
                        ellipsis: !0
                    }, a.createElement(f.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        className: "collection-card__link",
                        "data-test-selector": "collection-card-title-link"
                    }, this.props.title)), a.createElement(g._21, {
                        color: g.F.Alt2,
                        ellipsis: !0
                    }, a.createElement(g._21, {
                        type: g._26.Span
                    }, e), a.createElement(g._21, {
                        type: g._26.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            k = Object(h.c)("CollectionCard")(y),
            b = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(g._21, {
                    type: g._26.H4,
                    "data-test-selector": "no-collections"
                }, Object(s.d)("Create a collection of your videos from Video Manager.", "collection-page")), a.createElement(g.U, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(g.u, {
                    type: g.z.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(s.d)("Go to Video Manager", "collection-page")))) : a.createElement(g._21, {
                    type: g._26.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(s.d)("No collections found.", "collection-page")), a.createElement(g._17, {
                    color: g.F.Alt2,
                    textAlign: g._22.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            _ = n(1038),
            S = n(1705),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    if (!this.props.data.loading && this.props.data.user) return s.n.setPageTitle(this.props.data.user.displayName), void this.props.latencyTracking.reportInteractive(this.props.data.user.collections.edges.length + 1);
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    if (!this.props.data.error && this.props.data.user) {
                        var t = this.props.data.user,
                            n = t.collections.edges.map(function(e) {
                                return e.node
                            }),
                            i = !this.props.data.loading && !this.props.data.error && !!t.collections.pageInfo.hasNextPage,
                            r = null;
                        0 === n.length && (r = a.createElement(b, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.match.params.channelLogin
                        }));
                        var c = null;
                        0 !== n.length && this.showCollectionManagerButton() && (c = a.createElement(g.U, {
                            display: g.H.Flex,
                            justifyContent: g.T.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(g.u, {
                            type: g.z.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(s.d)("Manage your collections", "collection-page"))));
                        var u = n.map(function(e, n) {
                            return a.createElement(g.U, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(k, {
                                channelLinkTo: "/" + t.login,
                                channelDisplayName: Object(d.a)(t.login, t.displayName),
                                imageAlt: e.title,
                                imageSrc: e.thumbnailURL,
                                linkTo: "/collections/" + e.id,
                                title: e.title,
                                totalViews: e.viewCount,
                                videoCount: e.items.totalCount,
                                "data-a-target": "collection-card-" + n
                            }))
                        });
                        e = a.createElement("div", null, c, r, a.createElement(g._33, {
                            gutterSize: g._35.Small,
                            childWidth: g._34.Medium,
                            placeholderItems: 20
                        }, u), a.createElement(l.a, {
                            enabled: i,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var m = [], h = 0; h < 12; h++) m.push(a.createElement(g.U, {
                            key: "collection-placeholder-" + h,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(g.U, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(g.j, {
                            ratio: g.k.Aspect16x9
                        }, a.createElement(g._1, null))), a.createElement(g._21, null, a.createElement(g._1, {
                            width: 150
                        })), a.createElement(g._21, {
                            fontSize: g.L.Size7
                        }, a.createElement(g._1, {
                            width: 100
                        }))));
                        e = a.createElement(g._33, {
                            gutterSize: g._35.Small,
                            childWidth: g._34.Medium,
                            placeholderItems: 20
                        }, m)
                    } else e = a.createElement(g.U, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(o.a, {
                        message: Object(s.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return a.createElement(g.U, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(_.a, {
                        currentPage: p.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            E = {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.match.params.channelLogin,
                            limit: 30
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: S,
                                variables: i.__assign({}, e.data.variables, {
                                    cursor: e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        a = n;
                                    return {
                                        user: i.__assign({}, a.user, {
                                            collections: i.__assign({}, a.user.collections, {
                                                edges: e.user.collections.edges.concat(a.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            },
            C = Object(r.compose)(Object(r.graphql)(S, E), Object(h.c)("ChannelCollectionsPage", {
                destination: u.a.ChannelCollections
            }), Object(c.a)({
                location: m.PageviewLocation.ChannelCollections,
                properties: function(e) {
                    return {
                        channel: e.match.params.channelLogin,
                        channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(N);
        n.d(t, "ChannelCollectionsPage", function() {
            return C
        })
    },
    262: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(20),
            r = n(1),
            s = n(2),
            o = n(16),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        return n.isEnabled ? "REPLACE" === t ? void n.logger.debug("Skipping legacy route processing, due to history replace.") : e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), void n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        l = s.a.buildType === o.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                s.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : void n.logger.debug("Unable to process history change. Path is null or empty.") : void n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? a.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = a.stringify(t),
                                    r = "";
                                i.length > 0 && (r = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = s.b.get(l, !1), n.logger = s.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = s.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var r = new RegExp(a, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: a,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(r.Component),
            d = c;
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    376: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = r.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment(this.props.name, this.props.channel ? {
                                        channel: this.props.channel
                                    } : {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (e && this.props.assignments[e] ? this.logger.debug("Displaying component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }) : this.logger.debug("Displaying fallback component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }), this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.assignmentDetermined) return this.props.loader();
                    if (this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(a.Component),
            o = s;
        n.d(t, "a", function() {
            return o
        })
    },
    378: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Math.floor(e % 60),
                i = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? a(r, 2) + ":" + a(i, 2) + ":" + a(n, 2) : r ? r + ":" + a(i, 2) + ":" + a(n, 2) : i + ":" + a(n, 2)
        }

        function a(e, t) {
            return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = i
    },
    384: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    386: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            s = n(6),
            o = n(56),
            l = n(3),
            c = n(406),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.S, i.__assign({
                        onClick: this.props.onClick,
                        linkTo: this.props.linkTo,
                        hover: this.props.hover,
                        tabIndex: -1,
                        key: this.props.id
                    }, Object(o.a)(this.props)), a.createElement(l.U, {
                        className: "search-game-result-card",
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a.createElement(l.A, {
                        row: !0
                    }, a.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.data && !this.props.data.loading && this.props.data.game ? this.props.data.game.boxArtURL : r.a.defaultBoxArtURL,
                        size: l.D.Size4,
                        aspect: l.k.BoxArt
                    }), a.createElement(l.B, null, a.createElement(l.P, {
                        padding: {
                            x: 1
                        }
                    }, a.createElement(l._21, {
                        type: l._26.H5,
                        ellipsis: !0
                    }, this.props.title))))))
                }, t = i.__decorate([Object(s.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(a.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    387: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: !!e.session.firstPageLoaded
            }
        }
        var a = n(7),
            r = n(0),
            s = n(20),
            o = n(1),
            l = n(2),
            c = n(47),
            d = n(6),
            u = n(105),
            m = n(5),
            p = n(3),
            h = (n(421), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.U, null, o.createElement(p._17, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p.U, {
                        flexGrow: 1
                    }, o.createElement(p._21, {
                        bold: !0,
                        type: p._26.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader")))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return o.createElement(p._17, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p.U, {
                        fullWidth: !0,
                        display: p.H.Flex
                    }, o.createElement(p.U, {
                        flexGrow: 1
                    }, o.createElement(p._21, {
                        bold: !0,
                        type: p._26.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(p.U, {
                        className: "prime-offer__new-offer-header-count",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        textAlign: p._22.Center
                    }, o.createElement(p._17, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: p.m.Base,
                        color: p.F.Base
                    }, o.createElement(p._21, null, e.toString())))))
                }, t = r.__decorate([Object(m.c)("PrimeOfferHeader")], t)
            }(o.Component)),
            f = h,
            g = n(28),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(l.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: o.createElement(p._21, {
                            italic: !0,
                            type: p._26.Span
                        }, Object(l.d)("Hearthstone", "PrimeEmpty")),
                        smite: o.createElement(p._21, {
                            italic: !0,
                            type: p._26.Span
                        }, Object(l.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return o.createElement(p.U, {
                        className: "prime-empty",
                        margin: 2
                    }, o.createElement(p.U, {
                        textAlign: p._22.Center,
                        margin: 2
                    }, o.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(l.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), o.createElement(p._21, {
                        type: p._26.P,
                        bold: !0
                    }, Object(l.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                }, t = r.__decorate([Object(m.c)("PrimeEmpty")], t)
            }(o.Component),
            y = v,
            k = n(65),
            b = n(21),
            _ = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            S = function(e, t) {
                return e + "-" + t
            },
            N = function() {
                return U("claimedOffers")
            },
            E = function(e) {
                l.k.set("claimedOffers", e)
            },
            C = function() {
                return U("seenOffers")
            },
            w = function(e) {
                l.k.set("seenOffers", e)
            },
            O = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            U = function(e) {
                return l.k.get(e, [])
            },
            x = function() {
                var e = location.search,
                    t = s.parse(e);
                return t && t.dateOverride || ""
            },
            F = (n(422), n(423)),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.U, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = o.createElement(p.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? p.y.Loading : p.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === _.EXTERNAL_OFFER ? o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : o.createElement(p.U, {
                        position: p._2.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === _.CLAIM_CODE ? Object(l.d)("Get Code", "PrimeClaimButton") : this.props.offerType === _.EXTERNAL_OFFER ? Object(l.d)("Learn More", "PrimeClaimButton") : Object(l.d)("Claim Offer", "PrimeClaimButton")
                }, t = r.__decorate([Object(d.a)(F), Object(m.c)("PrimeClaimButton")], t)
            }(o.Component),
            T = D,
            A = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.toggleShowDescription = function() {
                        t.setState({
                            showDescription: !t.state.showDescription
                        })
                    }, t.state = {
                        showDescription: !1
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.U, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        type: p.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(l.d)("Close Info", "PrimeClaimDescription") : Object(l.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = o.createElement(p._17, {
                        className: "prime-claim-description__body",
                        background: p.m.Alt2,
                        border: !0
                    }, o.createElement(p.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, o.createElement(k, {
                        source: this.props.description || ""
                    })))), e
                }, t = r.__decorate([Object(m.c)("PrimeClaimDescription")], t)
            }(o.Component),
            I = A,
            B = n(132),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(B.d)(B.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return o.createElement(p.U, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(l.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = r.__decorate([Object(m.c)("PrimeUpsellButton")], t)
            }(o.Component),
            R = j,
            L = n(424),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.U, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? o.createElement(T, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : o.createElement(R, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === _.EXTERNAL_OFFER ? null : o.createElement(I, {
                        description: this.props.offerDescription
                    })
                }, t = r.__decorate([Object(d.a)(L), Object(m.c)("PrimeInstructions")], t)
            }(o.Component),
            H = P,
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._17, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: p._22.Center
                    }, o.createElement(p._21, {
                        type: p._26.H4,
                        align: p._37.Middle
                    }, o.createElement(p._17, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : p.L.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, o.createElement(p.U, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._8, {
                        asset: p._9.DeadGlitch,
                        type: p._10.Alert,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = r.__decorate([Object(m.c)("PrimeError")], t)
            }(o.Component),
            W = M,
            V = (n(425), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.setRef = function(e) {
                        t.setState({
                            clipboardInput: e
                        })
                    }, t.copy = function() {
                        var e;
                        try {
                            t.state.clipboardInput && t.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return t.setState({
                            copied: e
                        }), e
                    }, t.state = {
                        copied: !1,
                        clipboardInput: void 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(l.d)("copied", "CopyButton") : Object(l.d)("copy", "CopyButton");
                    return o.createElement(p.U, {
                        className: "copy-button copy-btn",
                        display: p.H.Flex
                    }, o.createElement(p.P, {
                        className: "copy-button__btn"
                    }, o.createElement(p.u, {
                        onClick: this.copy,
                        type: this.state.copied ? p.z.Success : p.z.Default
                    }, e)), o.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = r.__decorate([Object(m.c)("CopyButton")], t)
            }(o.Component)),
            q = V,
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? o.createElement(p.U, {
                        className: "copyable-item",
                        display: p.H.Flex,
                        flexGrow: 1
                    }, o.createElement(p.U, {
                        flexGrow: 1
                    }, o.createElement(p.Q, {
                        type: p.R.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), o.createElement(p.U, null, o.createElement(q, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = r.__decorate([Object(m.c)("CopyableItem")], t)
            }(o.Component),
            G = z,
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._17, {
                        className: "prime-claim-instructions",
                        background: p.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: p.L.Size6
                    }, o.createElement(p._36, null, o.createElement(k, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0
                    })))
                }, t = r.__decorate([Object(m.c)("PrimeClaimInstructions")], t)
            }(o.Component),
            K = $,
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.U, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === _.CLAIM_CODE ? o.createElement(p.U, null, o.createElement(G, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : o.createElement(p._17, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(p._21, {
                        type: p._26.H4,
                        align: p._37.Middle
                    }, o.createElement(p.U, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, o.createElement(p.U, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._8, {
                        asset: p._9.Check,
                        type: p._10.Success,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return o.createElement(K, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = r.__decorate([Object(m.c)("PrimeRedeem")], t)
            }(o.Component),
            J = Q,
            X = n(426),
            Y = (n(427), n(428)),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            a = t.props.data || {},
                            r = a.currentUser || {};
                        if (t.state.error) return o.createElement(W, {
                            fontSize: p.L.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && r && r.hasPrime) {
                            var s = t.state.claimData || i.claimData;
                            return o.createElement(J, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return o.createElement(H, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = n.currentUser.id,
                                a = t.props.offer,
                                r = Object(b.a)({
                                    offerID: a.id
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = e.data || {},
                                    r = n.claimPrimeOffer || {},
                                    s = r.self || {};
                                s && a && t.setState({
                                    claimData: s.claimData
                                }), t.markAsClaimedInLocalStorage(i)
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: !0
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            i = S(n.id, e),
                            a = N();
                        a.push(i), E(a), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            i = n.game || {},
                            a = n.categories || [];
                        return o.createElement(p._17, {
                            className: "prime-offer",
                            alignItems: p.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(p.U, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(k, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), o.createElement("img", {
                            src: e.imageURL
                        }), o.createElement(p.U, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, o.createElement(p._21, {
                            type: p._26.P
                        }, i.name, " ", a[0])), o.createElement(p.U, {
                            className: "prime-offer__publisher"
                        }, o.createElement(p._21, {
                            type: p._26.P,
                            color: p.F.Alt2,
                            fontSize: p.L.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            i = S(t.id, n);
                        return N().includes(i)
                    }
                }, t = r.__decorate([Object(d.a)(Y, {
                    name: "data"
                }), Object(d.a)(X, {
                    name: "claimPrimeOffer"
                }), Object(m.c)("PrimeOffer")], t)
            }(o.Component),
            ee = Z,
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._17, {
                        className: "prime-offer-placeholder",
                        alignItems: p.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(p.U, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._1, {
                        height: 20
                    })), o.createElement(p._1, {
                        height: 160
                    }), o.createElement(p.U, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._1, {
                        height: 20,
                        width: 160
                    })), o.createElement(p.U, {
                        className: "prime-offer-placeholder__publisher"
                    }, o.createElement(p._1, {
                        height: 20,
                        width: 80
                    })), o.createElement(p.U, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p._1, {
                        height: 40
                    })))
                }, t = r.__decorate([Object(m.c)("PrimeOfferPlaceholder")], t)
            }(o.Component),
            ne = te,
            ie = (n(429), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._17, {
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: p.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(p._21, {
                        type: p._26.H4
                    }, Object(l.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(p.U, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: p._22.Center
                    }, o.createElement(p._8, {
                        asset: p._9.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: p._10.Brand
                    })), o.createElement(p._21, {
                        type: p._26.P
                    }, Object(l.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(R, null))
                }, t = r.__decorate([Object(m.c)("PrimeUpsell")], t)
            }(o.Component)),
            ae = ie,
            re = n(430),
            se = (n(431), n(432)),
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(o.createElement(ne, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return o.createElement(g.b, {
                        className: "prime-offer-listing"
                    }, o.createElement(p.U, {
                        className: "prime-offer-listing__content",
                        alignItems: p.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return o.createElement(ae, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return o.createElement(ee, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return o.createElement(y, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = N(),
                            i = e.filter(function(e) {
                                return !n.includes(S(e.id, t))
                            }).sort(O),
                            a = e.filter(function(e) {
                                return !i.includes(e)
                            }).sort(O);
                        return i.concat(a)
                    }
                    return e.slice().sort(O)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = r.__decorate([Object(d.a)(re, {
                    name: "offersData"
                }), Object(d.a)(se, {
                    name: "userData"
                }), Object(m.c)("PrimeOfferList")], t)
            }(o.Component),
            le = oe,
            ce = n(433),
            de = (n(434), n(435)),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = s.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                a = C();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(a.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = e.primeOffers || [],
                                i = n.map(function(e) {
                                    return "" + e.id
                                });
                            w(i)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1;
                        return e && !e.loading && !e.error || n ? o.createElement(p.U, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, o.createElement(f, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), o.createElement(le, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(u.b)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: p._31.Center,
                        direction: p._32.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), o.createElement(p.U, {
                        className: "prime-offers",
                        position: p._2.Relative
                    }, o.createElement(c.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, o.createElement(p.v, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: p.x.Large,
                        icon: p._9.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), o.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return o.createElement(p.U, {
                        className: "prime-offers__pill",
                        position: p._2.Absolute
                    }, o.createElement(p.e, {
                        type: p.i.BounceIn,
                        duration: p.g.Medium,
                        timing: p.h.EaseIn,
                        enabled: e > 0
                    }, o.createElement(p.Z, {
                        label: e.toString(),
                        type: p._0.Notification
                    })))
                }, t = r.__decorate([Object(d.a)(ce, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(d.a)(de, {
                    name: "userData"
                }), Object(m.c)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            me = ue,
            pe = Object(a.a)(i)(me),
            he = (n(436), n(437)),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.setState({
                        dateOverride: x()
                    })
                }, t.prototype.render = function() {
                    var e = this.props.data.requestInfo && Object(u.b)(this.props.data.requestInfo.countryCode);
                    if (this.props.data.currentUser && this.props.data.currentUser.hasPrime || !e) return null;
                    if (this.props.data.loading) return null;
                    var t = Object(B.d)(B.a, ""),
                        n = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = o.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(B.d)(B.a, ""),
                        r = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var s = this.props.data;
                        s && s.primePromotions && s.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    t = e.externalURL, n = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = o.createElement(k, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return o.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    a = e.externalURL, r = e.text
                            }
                        })
                    }
                    return o.createElement(p._17, {
                        color: p.F.Base,
                        className: "blue-bar",
                        position: p._2.Relative,
                        fullWidth: !0
                    }, o.createElement(p.U, {
                        className: "blue-bar__bar",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p.T.Between,
                        flexWrap: p.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(p.U, {
                        display: p.H.InlineFlex,
                        alignItems: p.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(p.U, {
                        className: "blue-bar__logo",
                        display: p.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement(p._8, {
                        asset: p._9.Crown,
                        width: 20,
                        height: 13
                    })), o.createElement(p._21, {
                        bold: !0,
                        type: p._26.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6
                    }, o.createElement(p.P, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n))), o.createElement(p._21, {
                        className: "blue-bar__headline",
                        type: p._26.Span,
                        fontSize: p.L.Size6
                    }, i)), o.createElement(p.U, {
                        display: p.H.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(p._21, {
                        bold: !0,
                        type: p._26.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6,
                        color: p.F.Base
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r)))))
                }, t = r.__decorate([Object(d.a)(he, {
                    options: function(e) {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: e.dateOverride
                            }
                        }
                    }
                }), Object(m.c)("BlueBarComponent")], t)
            }(o.Component),
            ge = fe;
        n.d(t, "b", function() {
            return pe
        }), n.d(t, "a", function() {
            return ge
        }), n.d(t, "c", function() {
            return x
        })
    },
    389: function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                Object(l.c)(e), window.location.reload(!0)
            }
        }

        function a() {
            return {}
        }

        function r(e) {
            return Object(o.bindActionCreators)({
                changeLanguage: i
            }, e)
        }
        var s = n(7),
            o = n(9),
            l = n(72),
            c = n(0),
            d = n(1),
            u = n(2),
            m = n(3),
            p = (n(397), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        var n = function() {
                            return t.props.changeLanguage(e.languageCode)
                        };
                        return d.createElement(m.S, {
                            key: e.languageCode,
                            onClick: n,
                            "data-target": "language-selector-link"
                        }, d.createElement(m.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e.name))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(u.a.locales.length / 2);
                    return d.createElement(m.U, {
                        className: "language-selector",
                        display: m.H.Flex,
                        padding: {
                            y: 1
                        }
                    }, d.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, u.a.locales.slice(0, e).map(this.renderLink)), d.createElement("div", {
                        className: "language-selector__list"
                    }, u.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(d.Component)),
            h = Object(s.a)(a, r)(p);
        n.d(t, "a", function() {
            return h
        })
    },
    390: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = {},
                i = s(e);
            if (!i) return n;
            var o;
            try {
                o = new URL(i)
            } catch (t) {
                return b.i.error(t.toString(), i + " was malformed from notification id:[" + e.id + "]"), n
            }
            return r(e.type, o) ? n.linkTo = {
                pathname: o.pathname,
                search: o.search,
                state: {
                    content: e.type,
                    medium: t
                }
            } : (n.linkTo = a(o.toString(), e.type, t), n.targetBlank = !0), n
        }

        function a(e, t, n) {
            var i = e.split("?");
            if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
            var a = y.parse(i[1]);
            return a.tt_content = a.tt_content ? a.tt_content : t, a.tt_medium = a.tt_medium ? a.tt_medium : n, [i[0], y.stringify(a, {
                encode: !1
            })].join("?")
        }

        function r(e, t) {
            return !j.has(e) && "https://www.twitch.tv" === t.origin
        }

        function s(e) {
            var t = e.actions.filter(function(e) {
                return "click" === e.type
            });
            return t.length > 0 ? t[0].url : ""
        }

        function o(e) {
            return {
                id: e.id,
                body: e.body_md,
                type: e.type,
                thumbnailURL: e.thumbnail_url,
                createdAt: e.created_at,
                updatedAt: e.updated_at,
                isRead: e.read,
                actions: e.actions.map(function(e) {
                    return {
                        body: e.body,
                        type: e.type,
                        url: e.url,
                        __typename: "OnsiteNotificationAction"
                    }
                }),
                __typename: "OnsiteNotification"
            }
        }

        function l(e) {
            return {
                currentUser: Object(ae.c)(e)
            }
        }

        function c(e) {
            return e.type === C.c.OnsiteNotificationsRead
        }

        function d(e) {
            return e.type === C.c.OnsiteNotificationCreate || e.type === C.c.OnsiteNotificationUpdate
        }

        function u(e) {
            return e.type === C.c.OnsiteNotificationDelete
        }

        function m(e, t) {
            return me.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
        }

        function p(e, t) {
            if (me.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
            if (c(e)) {
                var n = new Set(e.data.notification_ids),
                    i = t.currentUser.notifications.edges.map(function(e) {
                        return n.has(e.node.id) ? v.__assign({}, e, {
                            node: v.__assign({}, e.node, {
                                isRead: !0
                            })
                        }) : e
                    });
                t.currentUser.notifications.edges = i
            } else if (d(e)) {
                if (e.data.persistent) {
                    var a = o(e.data.notification),
                        i = h(t.currentUser.notifications.edges, a.id);
                    i.unshift({
                        cursor: null,
                        node: a,
                        __typename: "OnsiteNotificationEdge"
                    }), t.currentUser.notifications.edges = i
                }
            } else u(e) && (t.currentUser.notifications.edges = h(t.currentUser.notifications.edges, e.data.notification_id));
            return t
        }

        function h(e, t) {
            return e.filter(function(e) {
                return e.node.id !== t
            })
        }

        function f() {
            return function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            shouldDefer: !0
                        }, e.stopDeferring = function() {
                            e.state.shouldDefer && e.setState({
                                shouldDefer: !1
                            })
                        }, e
                    }
                    return v.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            shouldDefer: this.state.shouldDefer,
                            stopDeferring: this.stopDeferring
                        };
                        return k.createElement(e, v.__assign({}, this.props, t))
                    }, n
                }(k.Component)
            }
        }
        var g, v = n(0),
            y = n(20),
            k = n(1),
            b = n(2),
            _ = n(47),
            S = n(6),
            N = n(106),
            E = n(16),
            C = n(37),
            w = n(21),
            O = n(30),
            U = n(5),
            x = n(28),
            F = n(32),
            D = n(398),
            T = n.n(D),
            A = n(14),
            I = n(65),
            B = n(12),
            j = new Set(["affiliateinvite", "feedcomment", "friendrequests", "partneragreementupdate", "partnerinvite", "vodcomment", "vodcommentmod"]),
            R = {
                Center: "center",
                Toast: "toast",
                Browser: "browser"
            },
            L = {
                Open: "open",
                Close: "close",
                MarkAllRead: "mark_all_read"
            },
            P = {
                PrimaryCta: "primary_cta",
                Dismiss: "dismiss"
            },
            H = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext
                };
                b.m.track(B.SpadeEventType.NotificationImpression, t)
            },
            M = function(e) {
                var t = {
                    unseen_view_count: e.unseenCount,
                    action: e.action
                };
                b.m.track(B.SpadeEventType.NotificationCenterInteraction, t)
            },
            W = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext,
                    action: e.action
                };
                b.m.track(B.SpadeEventType.NotificationInteraction, t)
            },
            V = n(3),
            q = (n(399), "persistent-notification__delete"),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.top < e.bottom && n.bottom > e.top
                        }
                        return !1
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t.deleteNotification = function() {
                        W({
                            uiContext: R.Center,
                            notification: t.props.data,
                            action: P.Dismiss
                        }), t.props.onDeleteNotification(t.props.data.id)
                    }, t.clickNotification = function() {
                        W({
                            uiContext: R.Center,
                            notification: t.props.data,
                            action: P.PrimaryCta
                        }), t.props.onViewNotification(t.props.data.id)
                    }, t.renderDeleteNotification = function() {
                        return k.createElement(V.U, {
                            className: "persistent-notification__delete",
                            padding: {
                                top: 1,
                                left: 1,
                                right: .5
                            },
                            position: V._2.Absolute
                        }, k.createElement(V.U, {
                            display: V.H.Flex,
                            flexWrap: V.K.NoWrap,
                            alignItems: V.c.Start
                        }, k.createElement(V.v, {
                            ariaLabel: "delete-notification",
                            "data-test-selector": q,
                            icon: V._9.Close,
                            size: V.x.Small,
                            onClick: t.deleteNotification
                        })))
                    }, t
                }
                return v.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive();
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : b.i.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return k.createElement(V.U, {
                        className: "persistent-notification",
                        position: V._2.Relative,
                        refDelegate: this.setRef,
                        "data-test-selector": "persistent-notification"
                    }, k.createElement(V._17, {
                        display: V.H.Flex,
                        className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                        borderBottom: !0,
                        flexWrap: V.K.NoWrap
                    }, k.createElement(V.S, v.__assign({
                        "data-test-selector": "persistent-notification__click",
                        onClick: this.clickNotification
                    }, i(this.props.data, B.PageviewMedium.NotificationCenter), {
                        alpha: !0
                    }), k.createElement(V.U, {
                        className: "persistent-notification__area",
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        padding: {
                            top: 1,
                            bottom: 1,
                            left: 1,
                            right: 3
                        }
                    }, k.createElement(V.C, {
                        aspect: V.k.Aspect1x1,
                        imageSrc: this.props.data.thumbnailURL,
                        imageAlt: Object(b.d)("Notification center item thumbnail", "OnsiteNotifications"),
                        size: V.D.Size4
                    }), k.createElement(V.U, {
                        display: V.H.Flex,
                        flexDirection: V.J.Column,
                        flexWrap: V.K.NoWrap,
                        margin: {
                            x: 1
                        }
                    }, k.createElement(V.U, {
                        className: "persistent-notification__body",
                        overflow: V.Y.Hidden,
                        "data-test-selector": "persistent-notification__body"
                    }, k.createElement(V._21, {
                        type: V._26.Span,
                        color: V.F.Alt
                    }, k.createElement(I, {
                        source: this.props.data.body || ""
                    }))), k.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, k.createElement(V._8, {
                        asset: V._9.MessagesSC,
                        height: 12,
                        width: 12,
                        type: V._10.Alt2
                    }), k.createElement(V.U, {
                        margin: {
                            left: .5
                        }
                    }, k.createElement(V._21, {
                        type: V._26.Span,
                        color: V.F.Alt2
                    }, Object(b.g)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()))
                }, t.prototype.checkVisible = function(e) {
                    return v.__awaiter(this, void 0, void 0, function() {
                        return v.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (H({
                                uiContext: R.Center,
                                notification: this.props.data
                            }), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: A.func
                }, t = v.__decorate([Object(U.c)("PersistentNotification")], t)
            }(k.Component),
            G = z,
            $ = n(400),
            K = n(401),
            Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRead: !1
                    }, t.createNotificationData = function() {
                        return {
                            id: "friendrequests",
                            type: "friendrequests",
                            body: Object(b.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                count: t.props.count
                            }, "FriendRequestsNotification"),
                            createdAt: t.props.date,
                            updatedAt: t.props.date,
                            isRead: t.props.isOldNotification || t.state.isRead,
                            thumbnailURL: T.a,
                            actions: [{
                                body: "View",
                                type: "click",
                                url: "https://www.twitch.tv/friends/requests"
                            }]
                        }
                    }, t.clearUnseenCount = function() {
                        Object(w.d)(K, {}, function(e) {
                            return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                        }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                            return b.i.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                        })
                    }, t.viewFriendRequests = function() {
                        t.setState({
                            isRead: !0
                        })
                    }, t
                }
                return v.__extends(t, e), t.prototype.render = function() {
                    return k.createElement(G, {
                        key: "friendRequestsNotification",
                        data: this.createNotificationData(),
                        onDeleteNotification: this.clearUnseenCount,
                        onViewNotification: this.viewFriendRequests
                    })
                }, t
            }(k.Component),
            J = Object(F.compose)(Object(S.a)($, {
                name: "clearUnreadFriendRequests"
            }))(Q),
            X = (n(402), "center-window__empty"),
            Y = "center-window__content-footer",
            Z = "center-window__footer__text",
            ee = "center-window__read-all",
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMore: !1
                    }, t.renderContent = function() {
                        if (!t.props.hasInitiallyLoaded || t.props.data.length || t.props.friendRequestsData) {
                            return [t.mapPersistentNotificationElements(), t.renderContentFooter()]
                        }
                        return t.renderEmptyCenterWindowElement()
                    }, t.renderContentFooter = function() {
                        var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? k.createElement(V.X, {
                            delay: 0,
                            fillContent: !0
                        }) : k.createElement(V._8, {
                            asset: V._9.LogoGlitch,
                            width: 24,
                            height: 24,
                            type: V._10.Alt2
                        });
                        return k.createElement(V.U, {
                            className: "center-window__content-footer",
                            key: "center-window__content-footer",
                            "data-test-selector": Y,
                            display: V.H.Flex,
                            flexDirection: V.J.Column,
                            justifyContent: V.T.Center,
                            alignItems: V.c.Center,
                            textAlign: V._22.Center,
                            padding: 1,
                            flexGrow: 1
                        }, e)
                    }, t.mapPersistentNotificationElements = function() {
                        var e = t.props.data.map(function(e) {
                            return k.createElement(G, {
                                key: "onsite-notification-" + e.node.id,
                                data: e.node,
                                onDeleteNotification: t.props.onDeleteNotification,
                                onViewNotification: t.props.onViewNotification
                            })
                        });
                        return t.props.friendRequestsData && e.unshift(k.createElement(J, v.__assign({}, t.props.friendRequestsData))), e
                    }, t.renderEmptyCenterWindowElement = function() {
                        return k.createElement(V._17, {
                            "data-test-selector": X,
                            className: "center-window__empty-state",
                            background: V.m.Alt,
                            display: V.H.Flex,
                            justifyContent: V.T.Center,
                            alignItems: V.c.Center,
                            textAlign: V._22.Center,
                            flexDirection: V.J.Column,
                            padding: 2,
                            fullWidth: !0
                        }, k.createElement(V._8, {
                            asset: V._9.LogoGlitch,
                            width: 100,
                            height: 100,
                            type: V._10.Placeholder
                        }), k.createElement(V.U, {
                            margin: {
                                top: 1
                            }
                        }, k.createElement(V._21, {
                            type: V._26.H5,
                            color: V.F.Alt2
                        }, Object(b.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                    }, t.renderMarkAsRead = function() {
                        return 0 !== t.props.data.length || t.props.friendRequestsData ? k.createElement(V.u, {
                            "data-test-selector": ee,
                            type: V.z.Text,
                            size: V.x.Small,
                            disabled: 0 === t.props.data.length && !t.props.friendRequestsData,
                            onClick: t.props.onReadAllNotifications
                        }, Object(b.d)("Mark All as Read", "OnsiteNotifications")) : null
                    }, t.renderNotificationsHeaderElement = function() {
                        return k.createElement(V._17, {
                            className: "center-window__header",
                            background: V.m.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: V.H.Flex,
                            alignItems: V.c.Center,
                            justifyContent: V.T.Between,
                            borderBottom: !0
                        }, k.createElement(V._21, {
                            type: V._26.H6,
                            color: V.F.Alt2,
                            bold: !0
                        }, Object(b.d)("Notifications", "OnsiteNotifications")), t.renderMarkAsRead())
                    }, t.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === t.props.newNotificationsCount ? null : k.createElement(V._21, {
                            "data-test-selector": Z,
                            type: V._26.H6,
                            color: V.F.Alt2
                        }, Object(b.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: t.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return k.createElement(V._17, {
                            className: "center-window__footer",
                            background: V.m.Alt,
                            padding: .5,
                            alignItems: V.c.Center,
                            textAlign: V._22.Center,
                            borderTop: !0
                        }, e)
                    }, t.loadMore = function() {
                        return v.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return v.__generator(this, function(t) {
                                return this.state.isLoadingMore ? [2] : (this.setState({
                                    isLoadingMore: !0
                                }), [2, this.props.onLoadMore().then(function() {
                                    return e.setState({
                                        isLoadingMore: !1
                                    })
                                })])
                            })
                        })
                    }, t
                }
                return v.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return k.createElement(V._17, {
                        className: "center-window",
                        "data-test-selector": "center-window",
                        background: V.m.Alt
                    }, this.renderNotificationsHeaderElement(), k.createElement(x.b, {
                        className: "center-window__scroll",
                        contentClassName: "center-window__scroll-container"
                    }, k.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        flexDirection: V.J.Column,
                        flexGrow: 1,
                        flexWrap: V.K.NoWrap
                    }, this.renderContent(), k.createElement(x.a, {
                        enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                        contentLength: this.props.data.length,
                        loadMore: this.loadMore,
                        pixelThreshold: 200
                    }))), this.renderUnreadNotificationsFooterElement())
                }, t = v.__decorate([Object(U.c)("OnsiteNotificationsCenterWindow")], t)
            }(k.Component),
            ne = te,
            ie = n(7),
            ae = n(17),
            re = n(86),
            se = (n(403), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeTimeout = 0, t.close = function() {
                        W({
                            uiContext: R.Toast,
                            notification: t.props.item,
                            action: P.Dismiss
                        }), t.props.close(t.props.index)
                    }, t.onMouseEnter = function() {
                        t.cancelCloseTimer()
                    }, t.onMouseLeave = function() {
                        t.scheduleCloseTimer()
                    }, t.view = function() {
                        t.props.view(t.props.index)
                    }, t
                }
                return v.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.scheduleCloseTimer()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), H({
                        uiContext: R.Toast,
                        notification: this.props.item
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.cancelCloseTimer()
                }, t.prototype.render = function() {
                    return k.createElement(V.e, {
                        type: V.i.BounceIn,
                        duration: V.g.Medium,
                        enabled: !0
                    }, k.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                    }, k.createElement(V._17, {
                        className: "onsite-notification-toast",
                        background: V.m.Base,
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        margin: {
                            bottom: 1
                        },
                        border: !0
                    }, k.createElement(V.S, v.__assign({
                        onClick: this.view,
                        alpha: !0
                    }, i(this.props.item, B.PageviewMedium.NotificationToast)), k.createElement(V.U, {
                        className: "onsite-notification-toast__container",
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap
                    }, k.createElement(V.U, {
                        padding: {
                            y: 1,
                            left: 1
                        },
                        display: V.H.Flex,
                        flexShrink: 0
                    }, k.createElement(V.C, {
                        aspect: V.k.Aspect1x1,
                        imageSrc: this.props.item.thumbnailURL,
                        imageAlt: Object(b.d)("Notification toast thumbnail", "OnsiteNotifications"),
                        size: V.D.Size4
                    })), k.createElement(V.U, {
                        display: V.H.Flex,
                        flexDirection: V.J.Column,
                        flexWrap: V.K.NoWrap,
                        flexGrow: 1,
                        padding: 1
                    }, k.createElement(V.U, {
                        className: "onsite-notification-toast__body",
                        overflow: V.Y.Hidden
                    }, k.createElement(V._17, {
                        color: V.F.Alt
                    }, k.createElement(I, {
                        source: this.props.item.body
                    }))), k.createElement(V.U, {
                        margin: {
                            top: .5
                        },
                        flexShrink: 0
                    }, k.createElement(V._17, {
                        color: V.F.Alt2
                    }, Object(b.g)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                }, t.prototype.renderActions = function() {
                    return k.createElement(V._17, {
                        className: "onsite-notification-toast__action-wrapper",
                        display: V.H.Flex,
                        alignContent: V.b.Stretch,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexDirection: V.J.Column,
                        borderLeft: !0
                    }, k.createElement(V._17, {
                        className: "onsite-notification-toast__action",
                        display: V.H.Flex,
                        alignContent: V.b.Stretch,
                        flexGrow: 1,
                        borderBottom: !0
                    }, k.createElement(V.S, v.__assign({
                        onClick: this.view,
                        "data-test-selector": "onsite-notification-toast__view",
                        alpha: !0
                    }, i(this.props.item, B.PageviewMedium.NotificationToast)), k.createElement(V._17, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, k.createElement(V._21, {
                        color: V.F.Link
                    }, this.primaryCTAText())))), k.createElement(V._17, {
                        className: "onsite-notification-toast__action",
                        display: V.H.Flex,
                        alignContent: V.b.Stretch,
                        flexGrow: 1
                    }, k.createElement(V.S, {
                        onClick: this.close,
                        "data-test-selector": "onsite-notification-toast__close",
                        alpha: !0
                    }, k.createElement(V._17, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, k.createElement(V._21, {
                        color: V.F.Alt2
                    }, Object(b.d)("Close", "OnsiteNotifications"))))))
                }, t.prototype.primaryCTAText = function() {
                    var e = this.props.item.actions.find(function(e) {
                        return "click" === e.type
                    });
                    return e ? e.body : Object(b.d)("View", "OnsiteNotifications")
                }, t.prototype.scheduleCloseTimer = function() {
                    var e = this;
                    this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                        e.props.close(e.props.index), e.closeTimeout = 0
                    }, 1e4)
                }, t.prototype.cancelCloseTimer = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                }, t
            }(k.Component)),
            oe = Object(U.c)("OnsiteNotificationToast")(se),
            le = oe,
            ce = (n(404), b.i.withCategory("toast-manager")),
            de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        notifications: []
                    }, t.view = function(e) {
                        t.props.onViewNotification(t.state.notifications[e].id), t.close(e)
                    }, t.close = function(e) {
                        var n = t.state.notifications.slice();
                        n.splice(e, 1), t.setState({
                            notifications: n
                        })
                    }, t
                }
                return v.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.info,
                        n = e.pubsub.messages.info;
                    if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                        ce.debug("Received pubsub update", e.pubsub.messages.info);
                        var i = o(n.data.notification);
                        this.onNewNotification(i)
                    }
                }, t.prototype.render = function() {
                    return k.createElement(V.U, {
                        className: "onsite-notifications-toast-manager",
                        position: V._2.Absolute,
                        margin: {
                            top: 5
                        },
                        "data-test-selector": "onsite-notifications-toast-manager"
                    }, this.renderToasts())
                }, t.prototype.conditionallyInsertTestData = function() {
                    return v.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return v.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return b.a.buildType !== E.a.Production && y.parse(window.location.search).onsite_test_data ? [4, n.e(35).then(n.bind(null, 2043))] : [3, 2];
                                case 1:
                                    e = i.sent().MockOnsiteNotifications, t = e.getMockOnsiteNotificationModels(3), this.setState({
                                        notifications: t
                                    }), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderToasts = function() {
                    var e = this,
                        t = this.state.notifications.map(function(t, n) {
                            return k.createElement(le, {
                                key: t.id,
                                item: t,
                                index: n,
                                view: e.view,
                                close: e.close
                            })
                        });
                    return 0 === t.length ? null : t
                }, t.prototype.onNewNotification = function(e) {
                    var t = this.state.notifications.slice(),
                        n = t.findIndex(function(t) {
                            return t.id === e.id
                        });
                    n > -1 && t.splice(n, 1), t.unshift(e), t.length > 3 && t.pop(), this.setState({
                        notifications: t
                    })
                }, t = v.__decorate([Object(U.c)("OnsiteNotificationToastManager"), Object(re.a)([{
                    topic: function(e) {
                        return Object(O.e)("" + (e.currentUser && e.currentUser.id))
                    },
                    mapMessageTypesToProps: (g = {}, g[C.c.OnsiteNotificationCreate] = "info", g[C.c.OnsiteNotificationUpdate] = "info", g),
                    skip: function(e) {
                        return !e.currentUser
                    }
                }])], t)
            }(k.Component),
            ue = Object(ie.a)(l)(de),
            me = b.i.withCategory("onsite-pubsub-mutators"),
            pe = n(391),
            he = n(392),
            fe = n(393),
            ge = n(394),
            ve = n(395);
        n(405);
        n.d(t, "a", function() {
            return Se
        }), n.d(t, "b", function() {
            return we
        });
        var ye = b.i.withCategory("onsite-notifications"),
            ke = "onsite-notifications__badge",
            be = "99+",
            _e = 5e3,
            Se = 10,
            Ne = {
                align: V._31.Center,
                direction: V._32.Bottom,
                label: ""
            },
            Ee = {
                limit: Se,
                cursor: ""
            },
            Ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        newNotificationsCount: 0,
                        newFriendRequestsBadgeCount: 0,
                        isFriendRequestsNotificationUnread: !1
                    }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.viewNotification = function(e) {
                        t.centerWindowToggleBalloon.toggleBalloon(!1), t.readNotification(e)
                    }, t.conditionallyInsertSummaryTestData = function() {
                        t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && b.a.buildType !== E.a.Production && y.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(w.d)(ge, v.__assign({}, t.props.summaryData.variables), function(e) {
                            return e.currentUser.notifications.summary.unseenCount = y.parse(window.location.search).onsite_test_data, e
                        }))
                    }, t.conditionallyInsertListNotificationsTestData = function() {
                        return v.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return v.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.notificationsInitiallyLoaded() && !this.hasInsertedListNotificationsData && b.a.buildType !== E.a.Production && y.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(35).then(n.bind(null, 2043))]) : [3, 2];
                                    case 1:
                                        e = t.sent().MockOnsiteNotifications, Object(w.d)(he, v.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(y.parse(window.location.search).onsite_test_data), t
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.summaryDataLoaded = function(e) {
                        return e.summaryData && !e.summaryData.loading && !e.summaryData.error && e.summaryData.currentUser && e.summaryData.currentUser.notifications && e.summaryData.currentUser.notifications.summary && e.summaryData.currentUser.incomingFriendRequests
                    }, t.notificationsInitiallyLoaded = function() {
                        return t.props.listData && t.props.listData.currentUser && t.props.listData.currentUser.notifications && void 0 !== t.props.listData.currentUser.notifications.edges
                    }, t.hasNewFriendRequests = function(e) {
                        var t = e.summaryData.currentUser;
                        if (t.incomingFriendRequests && t.incomingFriendRequests.newestEdge && t.incomingFriendRequests.newestEdge.createdAt) {
                            var n = new Date(t.incomingFriendRequests.newestEdge.createdAt),
                                i = new Date(t.notifications.summary.lastSeenAt);
                            return t.incomingFriendRequests.totalUnreadCount > 0 && n > i
                        }
                        return !1
                    }, t.getFriendRequestsData = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            var e = t.props.summaryData.currentUser;
                            if (e.incomingFriendRequests && e.incomingFriendRequests.newestEdge) {
                                var n = e.incomingFriendRequests.totalUnreadCount,
                                    i = e.incomingFriendRequests.newestEdge.createdAt;
                                return n && i ? {
                                    count: n,
                                    date: i,
                                    isOldNotification: !t.state.isFriendRequestsNotificationUnread
                                } : void 0
                            }
                        }
                    }, t.toggleCenter = function(e) {
                        e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), M({
                            unseenCount: t.getUnseenNotificationsCount(t.props),
                            action: e ? L.Close : L.Open
                        })
                    }, t.getUnseenNotificationsAndApplyTimer = function() {
                        var e = t.state.newNotificationsCount;
                        t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                            newNotificationsCount: e
                        })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                            t.setState({
                                newNotificationsCount: 0
                            }), t.clearTimeout()
                        }, _e))
                    }, t.viewNotifications = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            t.setState({
                                newFriendRequestsBadgeCount: 0
                            });
                            var e = v.__assign({}, Object(w.a)({}), {
                                optimisticResponse: {
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
                            });
                            Object(w.d)(ge, v.__assign({}, t.props.summaryData.variables), function(e) {
                                return e.currentUser.notifications.summary.unseenCount = 0, e
                            }), t.props.viewNotifications(e).then(function() {}).catch(function(e) {
                                return ye.error(e, "failure to read message... ")
                            })
                        }
                    }, t.getUnseenNotificationsCount = function(e) {
                        return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                    }, t.renderUnseenNotificationsBadge = function() {
                        var e = t.getUnseenNotificationsCount(t.props);
                        if (e > 0) {
                            var n = e >= 100 ? be : e.toString();
                            return k.createElement(V.U, {
                                className: "onsite-notifications__badge",
                                "data-test-selector": ke,
                                position: V._2.Absolute
                            }, k.createElement(V.Z, {
                                label: n,
                                type: V._0.Notification
                            }))
                        }
                    }, t.deleteNotification = function(e) {
                        var n = v.__assign({}, Object(w.a)({
                            id: e
                        }), {
                            optimisticResponse: {
                                deleteNotification: {
                                    __typename: "DeleteNotificationPayload",
                                    notification: {
                                        __typename: "OnsiteNotification",
                                        id: e
                                    }
                                }
                            }
                        });
                        return Object(w.d)(he, v.__assign({}, t.props.listData.variables), function(t) {
                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                return t.node.id !== e
                            }), t
                        }), t.props.deleteOnsiteNotification(n).then(function() {}).catch(function(t) {
                            ye.error(t, "Unable to delete notification " + e)
                        })
                    }, t.readAllNotifications = function() {
                        t.setState({
                            isFriendRequestsNotificationUnread: !1
                        });
                        var e = t.notificationsInitiallyLoaded() ? t.props.listData.currentUser.notifications.edges.map(function(e) {
                            return e.node.id
                        }) : [];
                        if (e.length > 0) {
                            M({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: L.MarkAllRead
                            });
                            var n = e.map(function(e) {
                                    return {
                                        id: e,
                                        isRead: !0,
                                        __typename: "OnsiteNotification"
                                    }
                                }),
                                i = v.__assign({}, Object(w.a)({
                                    ids: e
                                }), {
                                    optimisticResponse: {
                                        readNotifications: {
                                            __typename: "ReadNotificationsPayload",
                                            notifications: n,
                                            count: e.length
                                        }
                                    }
                                });
                            return Object(w.d)(he, v.__assign({}, t.props.listData.variables), function(e) {
                                return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                    return v.__assign({}, e, {
                                        node: v.__assign({}, e.node, {
                                            isRead: !0
                                        })
                                    })
                                }), e
                            }), t.props.readOnsiteNotification(i).then(function() {}).catch(function(t) {
                                ye.error(t, "Unable to read notifications " + e)
                            })
                        }
                    }, t.readNotification = function(e) {
                        var n = v.__assign({}, Object(w.a)({
                            ids: [e]
                        }), {
                            optimisticResponse: {
                                readNotifications: {
                                    __typename: "ReadNotificationsPayload",
                                    notifications: [{
                                        id: e,
                                        isRead: !0,
                                        __typename: "OnsiteNotification"
                                    }],
                                    count: 1
                                }
                            }
                        });
                        return Object(w.d)(he, v.__assign({}, t.props.listData.variables), function(t) {
                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                return t.node.id === e ? v.__assign({}, t, {
                                    node: v.__assign({}, t.node, {
                                        isRead: !0
                                    })
                                }) : t
                            }), t
                        }), t.props.readOnsiteNotification(n).then(function() {}).catch(function(t) {
                            ye.error(t, "Unable to read notification " + e)
                        })
                    }, t.loadMore = function() {
                        return v.__awaiter(t, void 0, void 0, function() {
                            return v.__generator(this, function(e) {
                                return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                            })
                        })
                    }, t.clearTimeout = function() {
                        t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                    }, t.saveCenterWindowToggleBalloonRef = function(e) {
                        return t.centerWindowToggleBalloon = e
                    }, t
                }
                return v.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.conditionallyInsertSummaryTestData(), this.conditionallyInsertListNotificationsTestData()
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.summaryDataLoaded(e)) {
                        var t = this.hasNewFriendRequests(e);
                        this.setState({
                            newFriendRequestsBadgeCount: t ? 1 : 0
                        }), this.summaryDataLoaded(this.props) || this.setState({
                            isFriendRequestsNotificationUnread: t
                        }), b.n.setBadgeCount(this.getUnseenNotificationsCount(e))
                    }
                }, t.prototype.render = function() {
                    var e = this.props.shouldDefer || !this.notificationsInitiallyLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                    return Ne.label = Object(b.d)("Notifications", "OnsiteNotificationsToolTip"), k.createElement(V.U, {
                        className: "onsite-notifications"
                    }, k.createElement(ue, {
                        onViewNotification: this.viewNotification
                    }), k.createElement(V.U, {
                        position: V._2.Relative
                    }, k.createElement(_.a, {
                        onToggle: this.toggleCenter,
                        ref: this.saveCenterWindowToggleBalloonRef,
                        tooltipProps: Ne
                    }, k.createElement(V.v, {
                        ariaLabel: Object(b.d)("Open Notifications", "OnsiteNotifications"),
                        size: V.x.Large,
                        icon: V._9.NotificationBell,
                        overlay: !0
                    }), k.createElement(V.p, {
                        "data-test-selector": "center-window__balloon",
                        direction: V.q.BottomRight,
                        size: V.r.Large,
                        offsetX: "10px"
                    }, k.createElement(ne, {
                        newNotificationsCount: this.state.newNotificationsCount,
                        hasInitiallyLoaded: this.notificationsInitiallyLoaded(),
                        data: e,
                        friendRequestsData: this.getFriendRequestsData(),
                        onLoadMore: this.loadMore,
                        onViewNotification: this.viewNotification,
                        onReadAllNotifications: this.readAllNotifications,
                        onDeleteNotification: this.deleteNotification
                    }))), this.renderUnseenNotificationsBadge()))
                }, t = v.__decorate([f(), Object(S.a)(ge, {
                    name: "summaryData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(S.a)(ve, {
                    name: "viewNotifications"
                }), Object(S.a)(he, {
                    name: "listData",
                    options: function(e) {
                        return {
                            variables: v.__assign({}, Ee, {
                                language: e.languageCode
                            })
                        }
                    },
                    skip: function(e) {
                        return e.shouldDefer
                    },
                    props: function(e) {
                        return v.__assign({}, e, {
                            loadMore: function() {
                                return e.listData.fetchMore({
                                    query: he,
                                    variables: v.__assign({}, e.listData.variables, {
                                        cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            currentUser: v.__assign({}, i.currentUser, {
                                                notifications: v.__assign({}, i.currentUser.notifications, {
                                                    edges: e.currentUser.notifications.edges.concat(i.currentUser.notifications.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(S.a)(pe, {
                    name: "deleteOnsiteNotification"
                }), Object(S.a)(fe, {
                    name: "readOnsiteNotification"
                }), Object(N.a)(function(e) {
                    return {
                        query: ge,
                        skip: !e.currentUser,
                        topic: Object(O.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [C.c.OnsiteNotificationSummaryUpdate, C.c.OnsiteNotificationUpdate, C.c.OnsiteNotificationCreate, C.c.OnsiteNotificationDelete],
                        mutator: m
                    }
                }), Object(N.a)(function(e) {
                    return {
                        query: he,
                        variables: v.__assign({}, Ee, {
                            language: e.languageCode
                        }),
                        skip: !e.currentUser,
                        topic: Object(O.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [C.c.OnsiteNotificationsRead, C.c.OnsiteNotificationUpdate, C.c.OnsiteNotificationCreate, C.c.OnsiteNotificationDelete],
                        mutator: p
                    }
                }), Object(U.c)("OnsiteNotifications", {
                    autoReportInteractive: !0
                })], t)
            }(k.Component),
            we = Ce
    },
    391: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_DeleteNotification"
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
                                value: "DeleteNotificationInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "deleteNotification"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notification"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 162
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\n  deleteNotification(input: $input) {\n    notification {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    392: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ListNotifications"
                },
                variableDefinitions: [{
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notifications"
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
                                        value: "language"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "language"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "body"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "createdAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "updatedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isRead"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "actions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "body"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "type"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "url"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
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
                end: 514
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_ListNotifications($limit: Int, $cursor: Cursor, $language: String) {\n  currentUser {\n    id\n    notifications(first: $limit, after: $cursor, language: $language) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n          type\n          body\n          createdAt\n          updatedAt\n          isRead\n          thumbnailURL\n          actions {\n            body\n            type\n            url\n          }\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    393: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ReadNotifications"
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
                                value: "ReadNotificationsInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "readNotifications"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notifications"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isRead"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
        n.loc.source = {
            body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\n readNotifications(input: $input) {\n   notifications {\n     id\n     isRead\n   }\n }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    394: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_Summary"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notifications"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "summary"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "unseenCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "lastSeenAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "incomingFriendRequests"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalUnreadCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "newestEdge"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "createdAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 267
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_Summary {\n  currentUser {\n    id\n    notifications {\n      summary {\n        unseenCount\n        lastSeenAt\n      }\n    }\n    incomingFriendRequests(first: 1) {\n      totalUnreadCount\n      newestEdge {\n        createdAt\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    395: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_View"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewedNotifications"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "notifications"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "unseenCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "lastSeenAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
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
                end: 184
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_View {\n  viewedNotifications {\n    user {\n      notifications {\n        summary {\n          unseenCount\n          lastSeenAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    396: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                languageCode: e.session.languageCode,
                currentUser: Object(f.c)(e)
            }
        }

        function a(e) {
            return {
                isLoggedIn: Object(f.d)(e)
            }
        }

        function r(e) {
            return {
                theme: Object(_e.a)(e),
                firstPageLoaded: e.session.firstPageLoaded,
                initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
            }
        }

        function s(e) {
            return Object(m.bindActionCreators)({
                changeTheme: be.b,
                initialUserAvailabilitySet: ke.g
            }, e)
        }

        function o(e) {
            return Object(m.bindActionCreators)({
                login: function() {
                    return Object(h.f)(p.a.TopNavSignupButton)
                },
                logout: h.g,
                signup: function() {
                    return Object(h.h)(p.a.TopNavSignupButton)
                }
            }, e)
        }

        function l(e) {
            return {
                isLoggedIn: Object(f.d)(e)
            }
        }
        var c, d = n(7),
            u = n(10),
            m = n(9),
            p = n(48),
            h = n(31),
            f = n(17),
            g = n(0),
            v = n(1),
            y = n(2),
            k = n(376),
            b = n(389),
            _ = n(47),
            S = n(12),
            N = n(5),
            E = n(390),
            C = Object(d.a)(i)(E.b),
            w = n(22),
            O = n(39),
            U = n(18),
            x = n(107),
            F = n(265),
            D = n(64),
            T = n(4),
            A = n(28),
            I = n(129),
            B = n(49),
            j = n(378),
            R = n(386),
            L = n(6),
            P = n(56),
            H = n(3),
            M = (n(407), n(408)),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "search-live-result-card": !0,
                        "search-live-result-card--hover": this.props.borderHover
                    };
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), v.createElement(H.U, {
                        className: T(t),
                        key: this.props.id,
                        fullWidth: !0
                    }, v.createElement(H.S, g.__assign({
                        linkTo: this.props.linkTo,
                        hover: this.props.borderHover,
                        tabIndex: -1,
                        "data-a-target": "search-live-result-card-link"
                    }, Object(P.a)(this.props)), v.createElement(H.A, null, v.createElement(H.U, {
                        className: "search-live-result-card__wrapper",
                        position: H._2.Relative,
                        overflow: H.Y.Hidden,
                        fullWidth: !0
                    }, v.createElement(H.C, {
                        imageSrc: e || y.a.defaultStreamPreviewURL,
                        imageAlt: this.props.imageAlt,
                        aspect: H.k.Aspect16x9
                    }), v.createElement(H._17, {
                        className: "search-live-result-card__overlay",
                        position: H._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        display: H.H.Flex,
                        flexDirection: H.J.Column,
                        justifyContent: H.T.End,
                        overflow: H.Y.Hidden,
                        color: H.F.Overlay
                    }, v.createElement(H.B, null, v.createElement(H.U, {
                        className: "search-live-result-card__body",
                        padding: .5
                    }, v.createElement(H._21, {
                        type: H._26.H5,
                        ellipsis: !0,
                        className: "search-live-result-card__title"
                    }, this.props.channelName), v.createElement(H.U, {
                        className: "search-live-result-card__viewer-count-container",
                        display: H.H.Flex,
                        alignItems: H.c.Center
                    }, v.createElement(H.U, {
                        margin: {
                            right: .5
                        },
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        flexShrink: 0
                    }, v.createElement(H._8, {
                        asset: H._9.GlyphLive,
                        type: H._10.Live,
                        width: 14,
                        height: 14
                    })), v.createElement(H._21, {
                        className: "search-live-result-card__viewer-count",
                        ellipsis: !0
                    }, Object(y.e)(this.props.viewerCount))), v.createElement(H._21, {
                        className: "search-live-result-card__info",
                        ellipsis: !0
                    }, this.props.title))))))))
                }, t = g.__decorate([Object(L.a)(M, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(v.Component),
            V = (n(409), function(e) {
                var t, n, i;
                e.title && (e.hitsCount && e.hitsCount > 0 ? t = Object(y.d)("more", "SearchResultSection") : e.totalHitsCount && e.totalHitsCount > 0 && (t = Object(y.d)("Show", "SearchResultSection")), void 0 !== e.totalHitsCount && (i = v.createElement(H.Z, {
                    type: H._0.Brand,
                    label: e.totalHitsCount < 100 ? Object(y.e)(e.totalHitsCount) : "99+"
                })), n = v.createElement(H.S, g.__assign({
                    onClick: e.onHeaderClick,
                    tabIndex: -1
                }, Object(H._39)(e), {
                    "data-ts_selectable": !0
                }), v.createElement(H.U, {
                    className: "search-result-view__titlesep search-result-view--no-hover",
                    display: H.H.Flex,
                    justifyContent: H.T.Between
                }, v.createElement("div", null, v.createElement(H.U, {
                    display: H.H.Inline,
                    margin: {
                        right: 1
                    }
                }, v.createElement(H._21, {
                    type: H._26.Span,
                    color: H.F.Link,
                    fontSize: H.L.Size7,
                    transform: H._25.Uppercase
                }, e.title)), i), v.createElement(H._21, {
                    fontSize: H.L.Size7,
                    transform: H._25.Uppercase
                }, t))));
                var a;
                return (Array.isArray(e.children) && e.children.length > 0 || e.children && !Array.isArray(e.children)) && (a = v.createElement(H.U, {
                    className: "search-result-view__listing-wrapper",
                    margin: {
                        top: .5,
                        bottom: .5
                    }
                }, e.children)), v.createElement("div", {
                    className: "search-result-view__block"
                }, n, a)
            }),
            q = (n(410), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return v.createElement(H.U, {
                        className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        "data-a-target": "nav-search-title-bar"
                    }, v.createElement(H._17, {
                        className: "search-title-bar__back-container",
                        display: H.H.Flex,
                        alignItems: H.c.Stretch,
                        borderRight: !0
                    }, v.createElement(H.v, {
                        icon: H._9.AngleLeft,
                        type: H.w.Secondary,
                        size: H.x.Large,
                        onClick: this.props.onBackClick,
                        ariaLabel: Object(y.d)("Back button", "SearchTitleBar"),
                        "data-ts_selectable": this.props.showBack,
                        "data-a-target": "nav-search-back"
                    })), v.createElement(H.U, {
                        className: "search-title-bar__title"
                    }, v.createElement(H._21, {
                        fontSize: H.L.Size5
                    }, this.props.title)))
                }, t
            }(v.Component)),
            z = n(269),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOptionChange = function(e) {
                        var n = e.currentTarget.elements;
                        t.props.onOptionsChange({
                            type: +n.type.value,
                            length: +n.video_length.value,
                            sort: +n.sort.value
                        })
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return v.createElement(H._17, {
                        className: "search__video-filters",
                        background: H.m.Alt,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, v.createElement(H.P, {
                        display: H.H.Flex,
                        justifyContent: H.T.Between
                    }, v.createElement("form", {
                        onInput: this.handleOptionChange
                    }, v.createElement(H.U, {
                        flexShrink: 0
                    }, v.createElement(H.U, {
                        display: H.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._14, {
                        name: "type"
                    }, v.createElement("option", {
                        value: z.c.AllVideos
                    }, Object(y.d)("All Videos", "search__video-filters")), v.createElement("option", {
                        value: z.c.PastBroadcasts
                    }, Object(y.d)("Past Broadcasts", "search__video-filters")), v.createElement("option", {
                        value: z.c.Uploads
                    }, Object(y.d)("Uploads", "search__video-filters")), v.createElement("option", {
                        value: z.c.Highlights
                    }, Object(y.d)("Highlights", "search__video-filters")))), v.createElement(H.U, {
                        display: H.H.InlineFlex
                    }, v.createElement(H._14, {
                        name: "video_length"
                    }, v.createElement("option", {
                        value: z.a.AnyLength
                    }, Object(y.d)("Any Length", "search__video-filters")), v.createElement("option", {
                        value: z.a.Short
                    }, Object(y.d)("Short", "search__video-filters")), v.createElement("option", {
                        value: z.a.Long
                    }, Object(y.d)("Long", "search__video-filters"))))), v.createElement(H.U, {
                        display: H.H.InlineFlex,
                        flexShrink: 0
                    }, v.createElement(H._14, {
                        name: "sort"
                    }, v.createElement("option", {
                        value: z.b.Popular
                    }, Object(y.d)("Popular", "search__video-filters")), v.createElement("option", {
                        value: z.b.Newest
                    }, Object(y.d)("Newest", "search__video-filters")))))))
                }, t
            }(v.Component),
            $ = n(66),
            K = (n(411), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBackClick = function() {
                        return t.headerSelect(null)
                    }, t.gameHeaderSelect = function() {
                        return t.headerSelect($.a.Games)
                    }, t.liveHeaderSelect = function() {
                        return t.headerSelect($.a.Channels)
                    }, t.userHeaderSelect = function() {
                        return t.headerSelect($.a.Users)
                    }, t.videoHeaderSelect = function() {
                        return t.headerSelect($.a.Videos)
                    }, t.communityHeaderSelect = function() {
                        return t.headerSelect($.a.Communities)
                    }, t.headerSelect = function(e) {
                        t.props.onCategorySelected(e)
                    }, t.onClick = function(e) {
                        if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                            var n = e.target,
                                i = n.querySelector("a"),
                                a = i ? i.querySelector("[data-tt_content]") : null;
                            a || (i = n.closest("a")), a = i && i.dataset.tt_content ? i : null, a && t.props.onResultSelected()
                        }
                    }, t.setScrollRef = function(e) {
                        return t.scroll = e
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                }, t.prototype.render = function() {
                    var e, t = {
                        "search-result-view": !0,
                        "search-result-view--active": !0,
                        "search-result-view--filtered": this.props.currentCategory === $.a.Videos
                    };
                    e = this.props.currentCategory && null !== this.props.currentCategory ? v.createElement(q, {
                        title: this.getCategoryTitle(this.props.currentCategory),
                        showBack: !0,
                        onBackClick: this.onBackClick
                    }) : v.createElement(q, {
                        title: Object(y.d)("Top Results", "SearchResultPanel__titlebar"),
                        showBack: !1
                    });
                    var n;
                    n = this.props.isWaiting ? v.createElement(H.X, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.communityResults && this.props.communityResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage();
                    var i;
                    return this.props.currentCategory === $.a.Videos && (i = v.createElement(G, {
                        key: "video-filters",
                        onOptionsChange: this.props.onVideoOptionsChange
                    })), v.createElement("div", {
                        className: "search-panel " + (this.props.isOpen ? "" : "search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, e, i, v.createElement(H._17, {
                        className: T(t),
                        background: H.m.Base,
                        position: H._2.Absolute,
                        overflow: H.Y.Hidden,
                        display: H.H.Block
                    }, v.createElement(A.b, {
                        className: "search-result-view__wrapper",
                        contentClassName: "search-result-view__scroll-container",
                        onClick: this.onClick,
                        scrollRef: this.setScrollRef,
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, v.createElement(H.U, {
                        fullWidth: !0
                    }, n, v.createElement(A.a, {
                        key: this.props.currentCategory || "none",
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))
                }, t.prototype.getResultSections = function() {
                    var e, t = [],
                        n = [],
                        i = this.getGameCards(),
                        a = this.getUserCards(),
                        r = this.getCommunityCards(),
                        s = this.getVideoCards(),
                        o = this.getLiveCards();
                    return o.length > 0 && (e = v.createElement(H.U, {
                        className: "search-result-view__live",
                        margin: {
                            y: 1,
                            x: 1
                        }
                    }, v.createElement(H.N, null, o))), this.getResultSection("games-section", $.a.Games, this.gameHeaderSelect, this.props.gameResults, i.length, i, n, t), this.getResultSection("live-section", $.a.Channels, this.liveHeaderSelect, this.props.liveResults, o.length, e, n, t), this.getResultSection("channels-section", $.a.Users, this.userHeaderSelect, this.props.userResults, a.length, a, n, t), this.getResultSection("videos-section", $.a.Videos, this.videoHeaderSelect, this.props.videoResults, s.length, s, n, t), this.getResultSection("communities-section", $.a.Communities, this.communityHeaderSelect, this.props.communityResults, r.length, r, n, t), t.concat(n)
                }, t.prototype.getResultSection = function(e, t, n, i, a, r, s, o) {
                    var l = v.createElement(V, {
                        key: e,
                        totalHitsCount: i ? i.totalHits : 0,
                        hitsCount: a,
                        title: this.getCategoryTitle(t),
                        onHeaderClick: n,
                        "data-a-target": e
                    }, r);
                    0 === a ? s.push(l) : o.push(l)
                }, t.prototype.getGameCards = function() {
                    return this.props.gameResults ? this.props.gameResults.results.map(function(e) {
                        return v.createElement(R.a, {
                            id: "game_" + e.id,
                            key: "game_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.title,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })
                    }) : []
                }, t.prototype.getLiveCards = function() {
                    return this.props.liveResults ? this.props.liveResults.results.map(function(e) {
                        var t = Object(B.a)(e.login || "", e.name || "");
                        return v.createElement(H.G, {
                            key: "live_" + e.id,
                            cols: 6
                        }, v.createElement(H.U, {
                            margin: {
                                bottom: 1
                            }
                        }, v.createElement(W, {
                            id: "live_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.status || "",
                            login: e.login ? e.login : "",
                            channelName: t,
                            viewerCount: e.viewerCount || 0,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })))
                    }) : []
                }, t.prototype.getUserCards = function() {
                    return this.props.userResults ? this.props.userResults.results.map(function(e) {
                        var t = Object(B.a)(e.login || "", e.name || "");
                        return v.createElement(H.S, {
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: e.id
                        }, v.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(H.A, {
                            row: !0
                        }, v.createElement(H.C, {
                            imageAlt: e.thumbnailAltText,
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            size: H.D.Size4,
                            aspect: H.k.Aspect1x1
                        }), v.createElement(H.B, null, v.createElement(H.P, {
                            padding: {
                                x: 1
                            }
                        }, v.createElement(H._21, {
                            type: H._26.H5,
                            ellipsis: !0
                        }, t))))))
                    }) : []
                }, t.prototype.getVideoCards = function() {
                    return this.props.videoResults ? this.props.videoResults.results.map(function(e) {
                        var t = Object(B.a)(e.login || "", e.name || ""),
                            n = Object(j.a)(e.length || 0);
                        return v.createElement(H.S, {
                            key: "video_" + e.id,
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, v.createElement(H.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(H.A, {
                            row: !0
                        }, v.createElement(H.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: H.D.Size8,
                            aspect: H.k.Aspect16x9
                        }), v.createElement(H.B, null, v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            type: H._26.H5,
                            ellipsis: !0
                        }, e.title)), v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, e.createdAt ? Object(y.c)(new Date(1e3 * e.createdAt), "medium") : "", " · ", n || "", " · ", v.createElement(H._21, {
                            className: "search-pannel__highlight-link",
                            type: H._26.Span
                        }, t)))))))
                    }) : []
                }, t.prototype.getCommunityCards = function() {
                    return this.props.communityResults ? this.props.communityResults.results.map(function(e) {
                        return v.createElement(H.S, {
                            key: "community_" + e.id,
                            targetBlank: Object(I.b)(),
                            linkTo: Object(I.a)(e.linkTo),
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, v.createElement(H.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(H.A, {
                            row: !0
                        }, v.createElement(H.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: H.D.Size4,
                            aspect: H.k.BoxArt
                        }), v.createElement(H.B, null, v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            type: H._26.H5,
                            ellipsis: !0
                        }, e.name)), v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, Object(y.d)("{viewerCount,number} Viewers", {
                            viewerCount: e.viewerCount || 0
                        }, "SearchResultPanel")))))))
                    }) : []
                }, t.prototype.getCategoryDrillDown = function(e) {
                    var t;
                    switch (e) {
                        case $.a.Games:
                            if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                            t = this.getGameCards();
                            break;
                        case $.a.Users:
                            if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                            t = this.getUserCards();
                            break;
                        case $.a.Communities:
                            if (!this.props.communityResults || 0 === this.props.communityResults.totalHits) return this.getNoResultsMessage();
                            t = this.getCommunityCards();
                            break;
                        case $.a.Videos:
                            if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                            t = this.getVideoCards();
                            break;
                        case $.a.Channels:
                            if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                            t = [v.createElement(H.U, {
                                className: "search-result-view__live",
                                margin: {
                                    x: 1
                                },
                                key: "live_drill-down-container"
                            }, v.createElement(H.N, null, this.getLiveCards()))];
                            break;
                        default:
                            return this.getNoResultsMessage()
                    }
                    return v.createElement(V, null, t)
                }, t.prototype.getCategoryTitle = function(e) {
                    switch (e) {
                        case $.a.Games:
                            return Object(y.d)("Games", "SearchResultPanel");
                        case $.a.Users:
                            return Object(y.d)("Channels", "SearchResultPanel");
                        case $.a.Communities:
                            return Object(y.d)("Communities", "SearchResultPanel");
                        case $.a.Videos:
                            return Object(y.d)("Videos", "SearchResultPanel");
                        case $.a.Channels:
                            return Object(y.d)("Live", "SearchResultPanel");
                        default:
                            return Object(y.d)("Top Results", "SearchResultPanel")
                    }
                }, t.prototype.getNoResultsMessage = function() {
                    return v.createElement(H.U, {
                        display: H.H.Flex,
                        flexDirection: H.J.Column,
                        justifyContent: H.T.Center,
                        alignItems: H.c.Center,
                        className: "notice-wrap aspect__fill"
                    }, v.createElement(H.U, {
                        className: "notice-wrap__visual",
                        textAlign: H._22.Center,
                        flexShrink: 1
                    }, v.createElement(H._8, {
                        asset: H._9.SearchNoResults,
                        width: 46,
                        height: 48
                    })), v.createElement("h4", {
                        className: "notice-wrap__title flex__item",
                        "data-test-selector": "panel-body-no-results"
                    }, Object(y.d)("No results found", "SearchResultPanel")), v.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(y.d)("They're probably in another castle", "SearchResultPanel")))
                }, t.prototype.getErrorMessage = function() {
                    return v.createElement(H.U, {
                        display: H.H.Flex,
                        flexDirection: H.J.Column,
                        justifyContent: H.T.Center,
                        alignItems: H.c.Center,
                        className: "notice-wrap aspect__fill"
                    }, v.createElement(H.U, {
                        className: "notice-wrap__visual",
                        textAlign: H._22.Center,
                        flexShrink: 1
                    }, v.createElement(H._8, {
                        asset: H._9.DeadGlitch,
                        width: 46,
                        height: 48
                    })), v.createElement("h4", {
                        "data-test-selector": "search-error-message",
                        className: "notice-wrap__title flex__item"
                    }, Object(y.d)("Search is not available at this time", "SearchResultPanel")), v.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(y.d)("Please try again later", "SearchResultPanel")))
                }, t
            }(v.Component)),
            Q = (n(412), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isAnimating: !1,
                        currentCategory: t.currentCategory
                    }, n
                }
                return g.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this;
                    e.currentCategory && e.currentCategory !== this.props.currentCategory && this.setState({
                        currentCategory: e.currentCategory
                    }), this.props.isVisible !== e.isVisible && (this.animationTimeout && window.clearTimeout(this.animationTimeout), this.setState({
                        isAnimating: !0
                    }), this.animationTimeout = window.setTimeout(function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, 300))
                }, t.prototype.componentWillUnmount = function() {
                    this.animationTimeout && window.clearTimeout(this.animationTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.currentCategory) return null;
                    var e = this.getAssetName(this.state.currentCategory);
                    return this.props.isVisible || this.state.isAnimating ? v.createElement(H.U, {
                        className: "search-tag"
                    }, v.createElement(H.e, {
                        enabled: !0,
                        type: this.props.isVisible ? H.i.BounceIn : H.i.BounceOut
                    }, v.createElement(H._20, {
                        label: this.state.currentCategory,
                        icon: e,
                        onClose: this.props.onClick,
                        "data-test-selector": "filter-icon",
                        "data-a-target": "nav-search-clear"
                    }))) : null
                }, t.prototype.getAssetName = function(e) {
                    switch (e) {
                        case $.a.Games:
                            return H._9.NavGames;
                        case $.a.Users:
                            return H._9.NavProfile;
                        case $.a.Communities:
                            return H._9.Communities;
                        case $.a.Videos:
                            return H._9.NavVideos;
                        case $.a.Channels:
                        default:
                            return H._9.NavChannels
                    }
                }, t
            }(v.Component)),
            J = (n(413), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.categoryTagClicked = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return v.createElement("div", null, v.createElement("div", {
                        className: "top-nav__search-container",
                        "data-click-out-id": "nav-search-balloon"
                    }, v.createElement(D.a, {
                        onClickOut: this.props.onClickOut
                    }, v.createElement(H._11, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: Object(y.d)("Search", "NavSearch"),
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1
                    }), v.createElement(H.p, {
                        direction: H.q.Bottom,
                        noTail: !0,
                        size: H.r.Large,
                        show: this.props.isOpen,
                        offsetY: "5px",
                        "data-a-target": "nav-search-balloon"
                    }, v.createElement(K, {
                        isOpen: this.props.isOpen,
                        gameResults: this.props.gameResults,
                        userResults: this.props.userResults,
                        communityResults: this.props.communityResults,
                        videoResults: this.props.videoResults,
                        liveResults: this.props.liveResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        onCategorySelected: this.props.onCategorySelected,
                        currentCategory: this.props.currentCategory,
                        onVideoOptionsChange: this.props.onVideoOptionsChange,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    })), v.createElement(Q, {
                        isVisible: this.props.isOpen && !!this.props.currentCategory,
                        currentCategory: this.props.currentCategory,
                        onClick: this.categoryTagClicked
                    }))))
                }, t
            }(v.Component)),
            X = 50,
            Y = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onCategorySelected = function(e) {
                        t.setState(g.__assign({}, t.getEmptyState(), {
                            term: t.state.term,
                            currentCategory: e,
                            isOpen: !0,
                            isWaiting: !0
                        }), function() {
                            t.doSearch(t.state.term)
                        })
                    }, t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            topGameResults: null,
                            topUserResults: null,
                            topLiveResults: null,
                            topVideoResults: null,
                            topCommunityResults: null,
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, X)
                    }, t.onHistoryChange = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === O.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === O.a.Up ? t.focusNext(-1) : e.keyCode === O.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function() {
                        t.setState({
                            isOpen: !1
                        })
                    }, t.loadMore = function() {
                        return g.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return g.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), y.i.error(n, "Algolia page search failed"), this.setState(g.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(F.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentCommunityResults: this.state.currentCommunityResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(g.__assign({}, i, {
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        })), [2]) : (this.setState(g.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.changeVideoOptions = function(e) {
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return g.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = U.a(), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryVideos(this.state.term, t, e)];
                                    case 2:
                                        return n = a.sent(), n.hits && this.setState({
                                            currentVideoResults: {
                                                totalHits: n.totalHits,
                                                results: n.hits.map(F.a)
                                            },
                                            queryID: ""
                                        }), [3, 4];
                                    case 3:
                                        return i = a.sent(), y.i.error(i, "Algolia video search failed"), this.setState({
                                            isErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.searchClient = new x.a(y.a.algoliaApplicationID, y.a.algoliaAPIKey), t.state = t.getEmptyState(), t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentDidUpdate = function() {
                    !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                        focusSelectable: !1
                    }))
                }, t.prototype.render = function() {
                    return v.createElement(J, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        onResultSelected: this.onResultSelected,
                        gameResults: this.state.currentGameResults,
                        userResults: this.state.currentUserResults,
                        communityResults: this.state.currentCommunityResults,
                        videoResults: this.state.currentVideoResults,
                        liveResults: this.state.currentLiveResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onCategorySelected: this.onCategorySelected,
                        currentCategory: this.state.currentCategory,
                        onVideoOptionsChange: this.changeVideoOptions,
                        loadMore: this.loadMore
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        a = Array.prototype.indexOf.call(n, i);
                    if (t = a < 0 ? e > 0 ? 0 : n.length - 1 : a + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var r = n.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
                        })
                    }
                }, t.prototype.doSearch = function(e) {
                    return g.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, r, s;
                        return g.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = U.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                case 2:
                                    return a = o.sent(), [3, 5];
                                case 3:
                                    return this.state.topGameResults && this.state.topUserResults && this.state.topLiveResults && this.state.topVideoResults && this.state.topCommunityResults ? (this.setState({
                                        currentGameResults: this.state.topGameResults,
                                        currentUserResults: this.state.topUserResults,
                                        currentLiveResults: this.state.topLiveResults,
                                        currentVideoResults: this.state.topVideoResults,
                                        currentCommunityResults: this.state.topCommunityResults,
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    }), [2]) : [4, this.searchClient.queryTopResults(e, n)];
                                case 4:
                                    a = o.sent(), o.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return r = o.sent(), y.i.error(r, "Algolia top results search failed"), this.setState(g.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 7:
                                    return a ? this.state.queryID !== a.id ? [2] : (s = Object(F.b)({
                                        searchResults: a,
                                        append: !1,
                                        currentGameResults: this.state.currentGameResults,
                                        currentUserResults: this.state.currentUserResults,
                                        currentCommunityResults: this.state.currentCommunityResults,
                                        currentVideoResults: this.state.currentVideoResults,
                                        currentLiveResults: this.state.currentLiveResults
                                    }), this.state.currentCategory && null === this.state.currentCategory && (s = g.__assign({}, s, {
                                        topGameResults: s.currentGameResults,
                                        topUserResults: s.currentUserResults,
                                        topLiveResults: s.currentLiveResults,
                                        topVideoResults: s.currentVideoResults,
                                        topCommunityResults: s.currentCommunityResults,
                                        exhaustedHits: s.exhaustedHits
                                    })), this.setState(function(n) {
                                        return g.__assign({}, n, s, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(g.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        term: "",
                        currentGameResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentLiveResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentCommunityResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentVideoResults: {
                            totalHits: 0,
                            results: []
                        },
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentCategory: null,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t = g.__decorate([Object(N.c)("NavSearch")], t)
            }(v.Component),
            Z = Object(w.e)(Y),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return v.createElement(H.U, {
                        className: "anon-user",
                        flexWrap: H.K.NoWrap,
                        display: H.H.Flex,
                        margin: {
                            left: 1
                        },
                        "data-a-target": "user-card"
                    }, v.createElement(H.U, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, Object(y.d)("Log in", "top-nav"))), v.createElement(H.U, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H.u, {
                        onClick: this.onSignUpClick,
                        "data-a-target": "signup-button"
                    }, Object(y.d)("Sign up", "top-nav"))))
                }, t = g.__decorate([Object(N.c)("AnonUser")], t)
            }(v.Component),
            te = ee,
            ne = n(414),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = !1;
                    if (this.props.data) {
                        if (this.props.data.loading || this.props.data.error) return null;
                        e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }
                    return !this.props.isLoggedIn || e ? v.createElement(u.b, {
                        to: {
                            pathname: "/store/merch",
                            state: {
                                medium: S.PageviewMedium.TopNav,
                                content: S.PageviewContent.Games
                            }
                        },
                        className: "top-nav__nav-link",
                        "data-a-target": "store-link",
                        activeClassName: "active"
                    }, Object(y.d)("Store", "TopNavStore")) : null
                }, t = g.__decorate([Object(L.a)(ne, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(N.c)("TopNavStoreComponent", {
                    autoReportInteractive: !0
                })], t)
            }(v.Component),
            ae = ie,
            re = Object(d.a)(a)(ae),
            se = n(105),
            oe = n(132),
            le = n(415),
            ce = Object(I.a)("/products/turbo?ref=top_nav"),
            de = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo && !Object(se.b)(this.props.data.requestInfo.countryCode),
                        t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                    if (e && t) return v.createElement("a", {
                        href: ce,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "try-prime-link"
                    }, Object(y.d)("Go Turbo", "TopNavUpsell"));
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var n = Object(oe.d)(oe.b, window.location.pathname.substring(1));
                        return v.createElement("a", {
                            href: n,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(y.d)("Try Prime", "TopNavUpsell"))
                    }
                    return null
                }, t = g.__decorate([Object(L.a)(le), Object(N.c)("TopNavUpsellComponent")], t)
            }(v.Component),
            ue = de,
            me = n(86),
            pe = n(106),
            he = n(51),
            fe = n(37),
            ge = n(21),
            ve = n(30),
            ye = n(133),
            ke = n(53),
            be = n(131),
            _e = n(52),
            Se = function() {
                return v.createElement(H.U, {
                    display: H.H.Flex,
                    flexGrow: 1,
                    alignItems: H.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card",
                    "data-a-target": "user-card"
                }, v.createElement(H.U, {
                    display: H.H.Flex,
                    flexWrap: H.K.NoWrap,
                    alignItems: H.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, v.createElement(H.U, {
                    margin: {
                        x: 1
                    }
                }, v.createElement(N.a, {
                    size: 30,
                    imageSrc: y.a.defaultAvatarURL,
                    imageAlt: Object(y.d)("User Avatar", "UserError"),
                    "data-a-target": "top-nav-avatar"
                })), v.createElement(H.U, {
                    flexGrow: 1
                }, v.createElement(H._17, {
                    color: H.F.Base,
                    className: "top-nav__username"
                }, ""))))
            },
            Ne = function() {
                return v.createElement(H.U, {
                    display: H.H.Flex,
                    flexGrow: 1,
                    alignItems: H.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card top-nav__user-card--placeholder",
                    "data-a-target": "user-card"
                }, v.createElement(H.U, {
                    display: H.H.Flex,
                    flexWrap: H.K.NoWrap,
                    alignItems: H.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, v.createElement(H.U, {
                    margin: {
                        x: 1
                    }
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-avatar"
                })), v.createElement(H.U, {
                    flexGrow: 1,
                    display: H.H.Flex,
                    flexDirection: H.J.Column,
                    justifyContent: H.T.Center
                }, v.createElement(H._17, {
                    color: H.F.Base,
                    className: "top-nav__username"
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-name"
                })), v.createElement(H.U, {
                    className: "top-nav__user-status"
                }, v.createElement(H.U, {
                    ellipsis: !0,
                    display: H.H.Flex,
                    alignItems: H.c.Center
                }, v.createElement(H.U, {
                    display: H.H.InlineFlex,
                    margin: {
                        right: .5
                    }
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-presence"
                })), v.createElement(H._17, {
                    display: H.H.InlineFlex,
                    color: H.F.Alt
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-status"
                }))))), v.createElement(H.U, {
                    display: H.H.Flex,
                    flexShrink: 0,
                    className: "top-nav__user-card-dropdown-arrow top-nav__user-card-dropdown-arrow--presence",
                    "data-a-target": "top-nav-dropdown-arrow"
                }, v.createElement(H._8, {
                    asset: H._9.GlyphArrDown
                }))))
            },
            Ee = n(38),
            Ce = n(70),
            we = (n(418), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCardClick = function() {
                        n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onShareCheckboxClick = function() {
                        n.props.toggleShareActivity()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === Ee.a.Dark ? Ee.a.Light : Ee.a.Dark;
                        n.props.changeTheme(e, be.a.UserMenu)
                    }, n.onOnlineClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(he.a.Online)
                    }, n.onInvisibleClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(he.a.Offline)
                    }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }), n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return g.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.prototype.render = function() {
                    var e = this.props.gqlData.currentUser.profileImageURL || y.a.defaultAvatarURL,
                        t = T("top-nav__dropdown-wrapper", {
                            toggled: this.state.dropdownOpen
                        }),
                        n = T("top-nav__user-card", "theme--dark", {
                            "top-nav__dropdown-open": this.state.dropdownOpen
                        }),
                        i = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        a = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        r = this.props.gqlData.currentUser.availability === he.a.Offline ? H.F.Base : H.F.Alt2,
                        s = this.props.gqlData.currentUser.availability === he.a.Online ? H.F.Base : H.F.Alt2,
                        o = this.props.gqlData.currentUser.settings.isSharingActivity,
                        l = this.props.gqlData.currentUser.availability || this.props.gqlData.currentUser.settings.visibility,
                        c = v.createElement(H.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, v.createElement(H.E, {
                            id: "dark-mode-toggle",
                            label: Object(y.d)("Dark Mode", "TopNavUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === Ee.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }));
                    return v.createElement(H.U, {
                        position: H._2.Relative,
                        display: H.H.Flex,
                        flexGrow: 1,
                        alignItems: H.c.Stretch,
                        fullHeight: !0
                    }, v.createElement(D.a, {
                        onClickOut: this.onClickOut,
                        className: n
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        flexGrow: 1,
                        alignItems: H.c.Stretch,
                        fullHeight: !0
                    }, v.createElement(H.S, {
                        onClick: this.onCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": "user-menu-toggle"
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        alignItems: H.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        className: "top-nav__user-card-wrapper"
                    }, v.createElement(H.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, v.createElement(H.U, {
                        className: "top-nav__user-card-avatar-container"
                    }, v.createElement(N.a, {
                        size: 30,
                        imageSrc: e,
                        imageAlt: "User avatar",
                        "data-a-target": "top-nav-avatar"
                    }))), v.createElement(H.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: H.J.Column
                    }, v.createElement(H._17, {
                        color: H.F.Base,
                        className: "top-nav__username",
                        "data-a-target": "user-display-name"
                    }, this.props.gqlData.currentUser.displayName), v.createElement(H.U, {
                        className: "top-nav__user-status",
                        ellipsis: !0,
                        fullWidth: !0,
                        alignItems: H.c.Center,
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        flexShrink: 0,
                        margin: {
                            right: .5
                        }
                    }, v.createElement(Ce.a, {
                        availability: l
                    })), v.createElement(H._17, {
                        ellipsis: !0,
                        color: H.F.Alt
                    }, v.createElement(H._21, {
                        type: H._26.Span,
                        noWrap: !0,
                        "data-a-target": "online-status"
                    }, this.props.gqlData.currentUser && v.createElement(Ce.b, {
                        activity: this.props.gqlData.currentUser.activity,
                        availability: l === he.a.Offline ? he.a.Invisible : l
                    }))))), v.createElement(H._17, {
                        display: H.H.Flex,
                        flexShrink: 0,
                        color: H.F.Base,
                        className: "user-card-wrapper__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, v.createElement(H._8, {
                        asset: H._9.GlyphArrDown
                    }))))), v.createElement(H._17, {
                        fullWidth: !0,
                        overflow: H.Y.Hidden,
                        position: H._2.Absolute,
                        className: t,
                        background: H.m.Base,
                        color: H.F.Base,
                        "data-a-target": i,
                        "data-test-selector": a
                    }, v.createElement(H._17, {
                        padding: {
                            y: 1
                        },
                        background: H.m.Alt
                    }, v.createElement(H.S, {
                        onClick: this.onOnlineClick,
                        "data-a-target": "online-dropdown-button",
                        "data-test-selector": "online-dropdown-button"
                    }, v.createElement(H._17, {
                        color: H.F.Alt2,
                        display: H.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        alignItems: H.c.Center,
                        display: H.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._3, {
                        status: H._4.Online
                    })), v.createElement(H._21, {
                        bold: this.props.gqlData.currentUser.availability === he.a.Online,
                        color: s
                    }, Object(y.d)("Online", "TopNavUser")))), v.createElement(H.S, {
                        onClick: this.onInvisibleClick,
                        "data-a-target": "invisible-dropdown-button",
                        "data-test-selector": "invisible-dropdown-button"
                    }, v.createElement(H._17, {
                        color: H.F.Base,
                        display: H.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        alignItems: H.c.Center,
                        display: H.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._3, {
                        status: H._4.Invisible
                    })), v.createElement(H._21, {
                        bold: this.props.gqlData.currentUser.availability === he.a.Offline,
                        color: r
                    }, Object(y.d)("Invisible", "TopNavUser")))), v.createElement(H.U, {
                        margin: {
                            x: 2,
                            bottom: 1,
                            top: .5
                        }
                    }, v.createElement(H.E, {
                        id: "share-activity-toggle",
                        label: Object(y.d)("Share my activity", "TopNavUser"),
                        "data-a-target": "share-activity-toggle",
                        "data-test-selector": "share-activity-toggle",
                        "data-a-value": o,
                        checked: o,
                        onChange: this.onShareCheckboxClick,
                        disabled: this.props.gqlData.currentUser.availability === he.a.Offline
                    }), v.createElement(H._21, {
                        type: H._26.Span,
                        color: H.F.Alt
                    }, Object(y.d)("Share what you're watching, playing, or streaming with your friends.", "TopNavUser"))), v.createElement(H._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), c), v.createElement(H.U, {
                        margin: {
                            y: 1
                        }
                    }, v.createElement(H.S, {
                        linkTo: {
                            pathname: "/" + this.props.gqlData.currentUser.login,
                            state: {
                                content: "self-channel",
                                medium: "twitch-topnav"
                            }
                        },
                        "data-a-target": "channel-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavMyChannel,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Channel", "TopNavUser")))), v.createElement(H.S, {
                        linkTo: Object(I.a)("/" + this.props.gqlData.currentUser.login + "/manager/past_broadcasts"),
                        "data-a-target": "video-manager-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavManager,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Video Manager", "TopNavUser")))), v.createElement(H.S, {
                        linkTo: Object(I.a)("/" + this.props.gqlData.currentUser.login + "/dashboard"),
                        "data-a-target": "dashboard-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavDashboard,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Dashboard", "TopNavUser")))), v.createElement(H._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), v.createElement(H.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/friends"),
                        "data-a-target": "friends-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.Friends,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Friends", "TopNavUser")))), v.createElement(H.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/messages/inbox"),
                        "data-a-target": "inbox-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavMessages,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Messages", "TopNavUser")))), v.createElement(H.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/subscriptions"),
                        "data-a-target": "subscriptions-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavBackpack,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Subscriptions", "TopNavUser")))), v.createElement(H.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/inventory"),
                        "data-a-target": "inventory-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.Crate,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Inventory", "TopNavUser")))), v.createElement(H._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), v.createElement(H.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/settings/profile"),
                        "data-a-target": "settings-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavSettings,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Settings", "TopNavUser")))), v.createElement(H.S, {
                        "data-a-target": "dropdown-logout",
                        onClick: this.onLogoutClick
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavLogout,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Log Out", "TopNavUser"))))))))
                }, t
            }(v.Component)),
            Oe = Object(w.e)(we),
            Ue = n(419),
            xe = n(420),
            Fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSettingNewSession = !1, t.dataIsReady = function(e) {
                        return e.data && !e.data.loading && !e.data.error
                    }, t.setUserToOffline = function() {
                        Object(ye.c)(he.a.Offline), Object(ye.a)()
                    }, t.toggleShareActivity = function() {
                        var e = !t.props.data.currentUser.settings.isSharingActivity,
                            n = g.__assign({}, Object(ge.a)({
                                isSharingActivity: e
                            }), {
                                optimisticResponse: {
                                    updateIsSharingActivity: {
                                        __typename: "UpdateIsSharingActivityPayload",
                                        user: {
                                            __typename: "User",
                                            id: t.props.data.currentUser.id,
                                            settings: {
                                                isSharingActivity: e,
                                                __typename: "UserSettings"
                                            }
                                        }
                                    }
                                }
                            });
                        t.props.updateIsSharingActivity(n)
                    }, t.toggleVisibility = function(e) {
                        t.dataIsReady(t.props) && Object(ye.e)(e)
                    }, t.setNewSession = function() {
                        return g.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return g.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSettingNewSession) return [2];
                                        this.isSettingNewSession = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, Object(ye.g)()];
                                    case 2:
                                        return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                    case 3:
                                        return e = t.sent(), y.i.warn("Failed to set new user availability session.", e), [3, 5];
                                    case 4:
                                        return this.isSettingNewSession = !1, [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.maybeRefetchData = function(e) {
                        var n = e.pubsub.messages.presence;
                        n && e.data.currentUser.id && n.data.user_id === +e.data.currentUser.id && t.props.pubsub.messages.presence !== n && e.data.refetch()
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.setUserToOffline()
                }, t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.currentUser ? this.props.data.error ? v.createElement(Se, null) : v.createElement(Oe, {
                        gqlData: this.props.data,
                        toggleShareActivity: this.toggleShareActivity,
                        toggleVisibility: this.toggleVisibility,
                        changeTheme: this.props.changeTheme,
                        firstPageLoaded: this.props.firstPageLoaded,
                        logout: this.props.logout,
                        theme: this.props.theme
                    }) : v.createElement(Ne, null)
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = g.__decorate([Object(L.a)(Ue), Object(L.a)(xe, {
                    name: "updateIsSharingActivity"
                }), Object(pe.a)(function(e) {
                    return {
                        query: Ue,
                        topic: e.data.currentUser ? Object(ve.f)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: fe.c.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity, t
                        }
                    }
                }), Object(me.a)([{
                    topic: function(e) {
                        return Object(ve.f)(e.data.currentUser.id)
                    },
                    mapMessageTypesToProps: (c = {}, c[fe.c.Presence] = "presence", c),
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(N.c)("User")], t)
            }(v.Component),
            De = Object(d.a)(r, s)(Object(u.f)(Fe)),
            Te = n(387),
            Ae = (n(438), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOnsiteNotifications = function() {
                        return t.props.isLoggedIn ? v.createElement(H.U, {
                            flexGrow: 0,
                            alignSelf: H.d.Center,
                            flexWrap: H.K.NoWrap,
                            padding: {
                                left: .5,
                                right: 1
                            },
                            flexShrink: 0
                        }, v.createElement(C, null)) : null
                    }, t.renderTwitchPrimeCrown = function(e) {
                        return v.createElement(H.U, {
                            className: "top-nav__prime",
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: H.d.Center,
                            flexWrap: H.K.NoWrap
                        }, !e && v.createElement(Te.b, null))
                    }, t.saveEllipsisRef = function(e) {
                        return t.ellipsisMenu = e
                    }, t.onNavigationClicked = function() {
                        t.ellipsisMenu.toggleBalloon(!1)
                    }, t.renderBrowseLink = function(e) {
                        var t = e.match,
                            n = t && "following" !== t.params.subpage,
                            i = Object(y.d)("Browse", "TopNav");
                        return v.createElement(u.a, {
                            className: "top-nav__nav-link" + (n ? " active" : ""),
                            "data-a-target": "browse-link",
                            title: i,
                            to: {
                                pathname: "/directory",
                                state: {
                                    medium: S.PageviewMedium.TopNav,
                                    content: S.PageviewContent.Games
                                }
                            }
                        }, i)
                    }, t.renderStoreLink = function() {
                        var e = Object(y.d)("Store", "TopNav"),
                            t = function() {
                                return v.createElement(H.S, {
                                    targetBlank: !0,
                                    linkTo: "https://www.twitch.tv/store",
                                    "data-a-target": "store-link"
                                }, v.createElement(H.U, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, e))
                            },
                            n = function() {
                                return v.createElement(H.S, {
                                    linkTo: {
                                        pathname: "/store/merch",
                                        state: {
                                            medium: S.PageviewMedium.TopNav,
                                            content: S.PageviewContent.Logo
                                        }
                                    },
                                    "data-a-target": "store-link"
                                }, v.createElement(H.U, {
                                    padding: {
                                        y: .5,
                                        x: 1
                                    }
                                }, e))
                            },
                            i = {
                                fallback: t,
                                on: n
                            };
                        return v.createElement(k.a, {
                            name: "MERCH_STORE_LAUNCH",
                            loader: t,
                            assignments: i
                        })
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.isLoggedIn) {
                        var t = Object(y.d)("Following", "TopNav");
                        e = v.createElement(u.b, {
                            activeClassName: "active",
                            to: {
                                pathname: "/directory/following",
                                state: {
                                    medium: S.PageviewMedium.TopNav,
                                    content: S.PageviewContent.Following
                                }
                            },
                            className: "top-nav__nav-link",
                            "data-a-target": "following-link",
                            title: t
                        }, t)
                    }
                    return v.createElement(H.P, {
                        position: H._2.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, v.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container",
                        style: {
                            height: "5rem"
                        }
                    }, v.createElement(H.U, {
                        className: "top-nav__menu",
                        display: H.H.Flex,
                        alignItems: H.c.Stretch,
                        flexWrap: H.K.NoWrap
                    }, v.createElement(H.P, {
                        display: H.H.InlineFlex,
                        alignItems: H.c.Center,
                        flexShrink: 0
                    }, v.createElement(u.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: S.PageviewMedium.TopNav,
                                content: S.PageviewContent.Logo
                            }
                        },
                        className: "top-nav__home-link",
                        "data-a-target": "home-link"
                    }, v.createElement(H._8, {
                        asset: H._9.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), v.createElement(H.U, {
                        className: "top-nav__nav-items-container",
                        display: H.H.Flex,
                        flexGrow: 1,
                        flexWrap: H.K.NoWrap,
                        flexShrink: 0
                    }, e, v.createElement(u.d, {
                        path: "/directory/:subpage?",
                        children: this.renderBrowseLink
                    }), v.createElement("a", {
                        href: "https://app.twitch.tv/download",
                        "data-a-target": "get-desktop-link",
                        className: "top-nav__nav-link"
                    }, Object(y.d)("Get Desktop", "TopNav")), v.createElement(ue, null), v.createElement(re, null), v.createElement(H.U, {
                        className: "top-nav__ellipsis-button",
                        display: H.H.Flex,
                        alignItems: H.c.Center
                    }, v.createElement(_.a, {
                        ref: this.saveEllipsisRef
                    }, v.createElement(H.v, {
                        icon: H._9.NavMore,
                        overlay: !0,
                        ariaLabel: Object(y.d)("More nav items", "TopNav"),
                        "data-a-target": "ellipsis-button"
                    }), v.createElement(H.p, {
                        direction: H.q.Bottom,
                        tailOffset: 7,
                        size: H.r.Small,
                        "data-a-target": "overflow-menu"
                    }, v.createElement(H.U, {
                        padding: 1
                    }, v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/about",
                        "data-a-target": "about-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("About", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "http://twitchadvertising.tv/",
                        "data-a-target": "advertisers-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Advertisers", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://blog.twitch.tv/",
                        "data-a-target": "blog-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Blog", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                        "data-a-target": "community-guidelines-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Community Guidelines", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/cookie-policy",
                        "data-a-target": "cookie-policy-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Cookie Policy", "TopNav"))), v.createElement(H.S, {
                        onClick: this.onNavigationClicked,
                        linkTo: "/directory/game/Creative",
                        "data-a-target": "creative-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Creative", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://dev.twitch.tv/",
                        "data-a-target": "developers-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Developers", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/",
                        "data-a-target": "help-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Help", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/jobs",
                        "data-a-target": "jobs-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Jobs", "TopNav"))), v.createElement(_.a, {
                        display: H.H.Block
                    }, v.createElement(H.S, {
                        "data-target": "language-selector-click",
                        "data-a-target": "language-selector"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Language", "TopNav"))), v.createElement(H.p, {
                        size: H.r.Small,
                        direction: H.q.Right,
                        offsetY: "4px",
                        offsetX: "20px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, v.createElement(b.a, null))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://music.twitch.tv/",
                        "data-a-target": "music-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Music", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/partners",
                        "data-a-target": "partners-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Partners", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/press",
                        "data-a-target": "press-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Press", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://twitch.tv/p/security",
                        "data-a-target": "security-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Security", "TopNav"))), this.renderStoreLink(), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/terms-of-service",
                        "data-a-target": "terms-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Terms", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://app.twitch.tv/download",
                        "data-a-target": "desktop-app-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Get Twitch Desktop App", "TopNav"))))))), v.createElement(H.U, {
                        className: "top-nav__search",
                        flexGrow: 1,
                        alignSelf: H.d.Center
                    }, v.createElement(Z, null))), this.renderTwitchPrimeCrown(), this.renderOnsiteNotifications(), v.createElement(H.U, {
                        className: "top-nav__nav-items-container",
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        flexWrap: H.K.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.props.isLoggedIn ? v.createElement(De, {
                        logout: this.props.logout
                    }) : v.createElement(te, {
                        login: this.props.login,
                        signup: this.props.signup
                    })))))
                }, t = g.__decorate([Object(N.c)("TopNav")], t)
            }(v.Component)),
            Ie = Ae,
            Be = Object(u.f)(Object(d.a)(l, o)(Ie));
        n.d(t, "a", function() {
            return "5rem"
        }), n.d(t, "b", function() {
            return Be
        })
    },
    397: function(e, t) {},
    398: function(e, t, n) {
        e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d982c8c0f43d9.png"
    },
    399: function(e, t) {},
    400: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Clear"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clearUnreadFriendRequests"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation FriendRequestsNotification_Clear {\n  clearUnreadFriendRequests {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    401: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Query"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "incomingFriendRequests"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalUnreadCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
            body: "query FriendRequestsNotification_Query {\n  currentUser {\n    id\n    incomingFriendRequests(first: 1) {\n      totalUnreadCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    402: function(e, t) {},
    403: function(e, t) {},
    404: function(e, t) {},
    405: function(e, t) {},
    406: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchGameResultCard_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "boxArtURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "40"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "55"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 128
            }
        };
        n.loc.source = {
            body: "query Search_SearchGameResultCard_Game($name: String!) {\n  game(name: $name) {\n    id\n    boxArtURL(width: 40 height: 55)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    407: function(e, t) {},
    408: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchLiveResultCard_UserStream"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "previewImageURL"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "156"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "88"
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 174
            }
        };
        n.loc.source = {
            body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\n  user(login: $login) {\n    id\n    stream {\n      id\n      previewImageURL(width: 156 height: 88)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    409: function(e, t) {},
    410: function(e, t) {},
    411: function(e, t) {},
    412: function(e, t) {},
    413: function(e, t) {},
    414: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_Store_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 75
            }
        };
        n.loc.source = {
            body: "query TopNav_Store_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    415: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_PrimeUpsell_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 130
            }
        };
        n.loc.source = {
            body: "query TopNav_PrimeUpsell_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n    hasTurbo\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    416: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SetSessionStatus"
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
                                value: "SetSessionStatusInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "setSessionStatus"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "setAgainInSeconds"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\n  setSessionStatus(input: $input) {\n    setAgainInSeconds\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    417: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateVisibility"
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
                                value: "UpdateVisibilityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "updateVisibility"
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "availability"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\n  updateVisibility(input: $input) {\n    user {\n      id\n      availability\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    418: function(e, t) {},
    419: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_User_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "availability"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSharingActivity"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "visibility"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "activity"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Watching"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                alias: null,
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
                                                                        alias: null,
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: null
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "hosting"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
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
                                                                        alias: null,
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
                                                                                alias: null,
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: null
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
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Streaming"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
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
                                                value: "Playing"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
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
                end: 710
            }
        };
        n.loc.source = {
            body: "query TopNav_User_User {\n  currentUser {\n    id\n    displayName\n    profileImageURL(width: 70)\n    login\n    availability\n    settings {\n      isSharingActivity\n      visibility\n    }\n    activity {\n      type\n      ... on Watching {\n        user {\n          displayName\n          stream {\n            game {\n              name\n            }\n          }\n          hosting {\n            displayName\n            stream {\n              game {\n                name\n              }\n            }\n          }\n        }\n      }\n      ... on Streaming {\n        stream {\n          game {\n            name\n          }\n        }\n      }\n      ... on Playing {\n        game {\n          name\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    420: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateIsSharingActivity"
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
                                value: "UpdateIsSharingActivityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "updateIsSharingActivity"
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isSharingActivity"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 212
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\n  updateIsSharingActivity(input: $input) {\n    user {\n      id\n      settings {\n        isSharingActivity\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    421: function(e, t) {},
    422: function(e, t) {},
    423: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    424: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    425: function(e, t) {},
    426: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
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
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\n  claimPrimeOffer(input: $input) {\n    self {\n      claimData\n      hasEntitlement\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    427: function(e, t) {},
    428: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    429: function(e, t) {},
    430: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "claimInstructions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "publisher"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "categories"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 333
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers {\n  primeOffers {\n    id\n    title\n    imageURL\n    claimInstructions\n    description\n    deliveryMethod\n    priority\n    content {\n      game {\n        id\n        name\n      }\n      externalURL\n      publisher\n      categories\n    }\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    431: function(e, t) {},
    432: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    433: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 123
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds {\n  primeOffers {\n    id\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    434: function(e, t) {},
    435: function(e, t) {
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 116
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    436: function(e, t) {},
    437: function(e, t) {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "text"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 274
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!], $dateOverride: Time) {\n  currentUser {\n    id\n    hasPrime\n  }\n  primePromotions (ids: $stringIds, dateOverride: $dateOverride) {\n    id\n    text\n    externalURL\n    isExternalLink\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    438: function(e, t) {},
    451: function(e, t) {
        function n(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function i(e) {
            return !!e && "object" == typeof e
        }

        function a(e) {
            if (!i(e) || u.call(e) != r || n(e)) return !1;
            var t = m(e);
            if (null === t) return !0;
            var a = c.call(t, "constructor") && t.constructor;
            return "function" == typeof a && a instanceof a && l.call(a) == d
        }
        var r = "[object Object]",
            s = Function.prototype,
            o = Object.prototype,
            l = s.toString,
            c = o.hasOwnProperty,
            d = l.call(Object),
            u = o.toString,
            m = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.getPrototypeOf, Object);
        e.exports = a
    },
    806: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || u.ChatTooltip
            };
            c.m.track(d.SpadeEventType.BitsCardInteraction, t)
        }

        function a(e) {
            return e && p[e] ? p[e] : (c.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), m.Buy100)
        }

        function r(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            c.m.track(d.SpadeEventType.BitsAdsAvailability, t)
        }

        function s(e) {
            var t = {
                distinct_id: c.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            c.m.track(d.SpadeEventType.BitsAdsImpression, t)
        }

        function o(e) {
            var t = c.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: c.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            c.m.track(d.SpadeEventType.BitsAdsRequest, n)
        }
        t.h = i, n.d(t, "b", function() {
            return u
        }), n.d(t, "a", function() {
            return m
        }), t.d = a, t.e = r, t.f = s, n.d(t, "c", function() {
            return l
        }), t.g = o;
        var l, c = n(2),
            d = n(12),
            u = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            m = {
                BuyMain: "buy_main",
                Buy100: "buy_100",
                Buy500: "buy_500",
                Buy1000: "buy_1000",
                Buy1500: "buy_1500",
                Buy5000: "buy_5000",
                Buy10000: "buy_10000",
                Buy25000: "buy_25000",
                CloseCard: "menu_close",
                OpenCard: "menu_open",
                PreviewEmote: "emote_preview",
                WatchAd: "watch_ad",
                WatchAnotherAd: "watch_another_ad"
            },
            p = {
                100: m.Buy100,
                500: m.Buy500,
                1e3: m.Buy1000,
                1500: m.Buy1500,
                5e3: m.Buy5000,
                1e4: m.Buy10000,
                25e3: m.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(l || (l = {}))
    },
    808: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    811: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    s = r.content,
                                    o = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: s,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return s.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(s.Component);
                return Object(o.f)(n)
            }
        }
        var a = n(0),
            r = n(20),
            s = n(1),
            o = n(10),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    812: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return o
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            s = "single_purchase",
            o = "black_friday_2017"
    },
    813: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type !== u.a && (r(e) && null !== e.promotion && e.promotion.type === u.d)
        }

        function a(e) {
            return e.type !== u.a && (r(e) && null !== e.promotion && e.promotion.type === u.e)
        }

        function r(e) {
            return e.type === u.b && null !== e.promotion && !!e.promotion
        }

        function s(e) {
            var t = 0,
                n = 0,
                i = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount)
            }), {
                total: i,
                smallestCheermote: n,
                largestCheermote: t
            }
        }

        function o(e) {
            var t = e.messageBits,
                n = t.total,
                i = t.largestCheermote,
                a = t.smallestCheermote;
            if (n) {
                var r = {
                    cheerAboveMaxBitsPerEmote: i > m.k,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > m.j,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(r).some(function(e) {
                        return r[e]
                    })) return c.__assign({
                    canSpend: !1
                }, r)
            }
            return {
                canSpend: !0
            }
        }

        function l(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(p.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(d.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(p.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        }
        t.c = i, t.e = a, t.d = r, t.a = s, t.f = o, t.b = l;
        var c = n(0),
            d = n(829),
            u = n(812),
            m = n(259),
            p = n(806)
    },
    815: function(e, t, n) {
        "use strict";
        var i, a = n(4),
            r = n(1),
            s = n(372),
            o = n(375),
            l = n(373),
            c = n(3);
        n(859);
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.ExtraSmall = 3] = "ExtraSmall"
        }(i || (i = {}));
        var d;
        ! function(e) {
            e[e.ImageAndText = 0] = "ImageAndText", e[e.ImageOnly = 1] = "ImageOnly", e[e.TextOnly = 2] = "TextOnly", e[e.InlineTextOnly = 3] = "InlineTextOnly", e[e.Inline = 4] = "Inline"
        }(d || (d = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(o.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = null,
                m = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline
                });
            e.amount && e.display !== d.ImageOnly && (u = r.createElement(c.P, {
                padding: e.size === i.Small ? 0 : void 0,
                textAlign: e.size === i.Small ? c._22.Center : void 0
            }, r.createElement("strong", {
                className: m,
                style: {
                    color: n.color
                }
            }, e.amount)));
            var p = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__cheer-image--inline": e.display === d.Inline
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === i.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline && e.size !== i.Small
                }),
                h = r.createElement(l.a, {
                    className: p,
                    sources: Object(s.b)(n, 4, e.animated)
                });
            return e.display !== d.TextOnly && e.display !== d.InlineTextOnly || (h = null), e.display === d.InlineTextOnly || e.display === d.Inline ? r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: c.H.Inline
            }, h, u) : r.createElement(c.U, {
                className: "cheermote-for-amount"
            }, h, u)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return d
        })
    },
    822: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[o.e];
                i || (i = Object(c.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(l.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === s.a.Light ? m.dark = m.light : m.light = m.dark), t = a.createElement(d.a, {
                        className: "bits-count--img",
                        sources: m
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n(1),
            r = n(2),
            s = n(38),
            o = n(259),
            l = n(372),
            c = n(375),
            d = n(373);
        n(868);
        n.d(t, "a", function() {
            return i
        })
    },
    823: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!e) return void a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500)
        }
        t.a = i;
        var a = n(2)
    },
    829: function(e, t, n) {
        "use strict";

        function i(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        }
        t.a = i;
        var a = /\scurse\/\d/
    },
    831: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var i = e.tiers.map(function(e) {
                    var t = new Map,
                        n = new Map,
                        i = new Map,
                        r = new Map;
                    return e.images.forEach(function(e) {
                        "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
                    }), a.__assign({
                        indexedImages: {
                            LIGHT: {
                                static: t,
                                animated: n
                            },
                            DARK: {
                                static: i,
                                animated: r
                            }
                        }
                    }, e)
                });
                i.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var r = a.__assign({}, e, {
                    indexedTiers: new Map(i.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: i
                });
                t.push(r), n[r.prefix.toLowerCase()] = r
            }), {
                indexedActions: n,
                orderedActions: t
            }
        }
        t.a = i;
        var a = n(0)
    },
    832: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n(0),
            a = n(1),
            r = (n.n(a), n(3)),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver
                    }, a.createElement(r.P, {
                        display: r.H.Hide
                    }, a.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component)
    },
    834: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bitsOffersFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BitsOffer"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "type"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "InlineFragment",
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BitsBundleOffer"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "price"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "discount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "url"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "promotion"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 197
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\n  id\n  type\n  bits\n  ... on BitsBundleOffer {\n    price\n    discount\n    isPromo\n    url\n    includesVAT\n    promotion {\n      id\n      type \n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    835: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "cheer"
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "cheer"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "prefix"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "tiers"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "images"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
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
                end: 270
            }
        };
        n.loc.source = {
            body: "fragment cheer on User {\n  cheer {\n    id\n    emotes {\n      id\n      prefix\n      type\n      tiers {\n        id\n        bits\n        color\n        images {\n          id\n          url\n          theme\n          isAnimated\n          dpiScale\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    838: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(h.bindActionCreators)({
                closeModal: c.c
            }, e)
        }

        function a(e) {
            return m.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return m.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (t = f.b.get("bits_truex_partner_hash", ""), !(n = f.b.get("bits_truex_api_url", "")) || !t) return f.i.warn("Truex API info missing from dynamic settings"), [2, k.Error];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return i = s.sent(), i.ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = s.sent()) && Array.isArray(a) && a.length) return [2, k.Available];
                            s.label = 4;
                        case 4:
                            return [2, k.Unavailable];
                        case 5:
                            return r = s.sent(), f.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, k.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function r(e) {
            return {
                adModalOpen: Object(d.b)(e, C),
                isLoggedIn: Object(u.d)(e)
            }
        }

        function s(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(c.d)(C, t))
                }
            }
        }
        var o, l = n(7),
            c = n(36),
            d = n(90),
            u = n(17),
            m = n(0),
            p = n(1),
            h = n(9),
            f = n(2),
            g = n(104),
            v = n(6),
            y = n(21);
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(o || (o = {}));
        var k, b = n(384),
            _ = n(806),
            S = n(3),
            N = n(855),
            E = (n(856), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, a, r, s;
                            return m.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (n = t.type) {
                                            case b.a.Ready:
                                                return [3, 1];
                                            case b.a.RequestAd:
                                                return [3, 2];
                                            case b.a.Dimensions:
                                                return [3, 3];
                                            case b.a.OnStart:
                                                return [3, 4];
                                            case b.a.OnCredit:
                                                return [3, 5];
                                            case b.a.OnClose:
                                            case b.a.OnFinish:
                                            case b.a.LimitReached:
                                            case b.a.Adblock:
                                            case b.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return i = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(i, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(_.g)({
                                                campaignID: a.campaign_id.toString(),
                                                requestID: t.requestID,
                                                requestMethod: this.props.requestRef
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 3:
                                        return t.height && t.width && this.setState({
                                            customDimensions: {
                                                height: t.height,
                                                width: t.width
                                            }
                                        }), [3, 10];
                                    case 4:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(_.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return l.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(y.a)({
                                            args: t.engagement.signature_argument_string,
                                            signature: t.engagement.signature,
                                            trueXAd: {
                                                creativeID: t.engagement.ad.creative_id,
                                                campaignID: t.engagement.ad.campaign_id,
                                                name: t.engagement.ad.name,
                                                currencyAmount: t.engagement.ad.currency_amount
                                            },
                                            targetID: this.props.channelID
                                        }))];
                                    case 6:
                                        return r = l.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return s = l.sent(), f.i.warn("Error while redeeming bits for truex ad", s), this.props.onError && this.props.onError(o.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === b.a.LimitReached ? this.props.onError(o.LimitReached) : t.type === b.a.Adblock ? this.props.onError(o.Adblock) : t.type === b.a.OnError ? this.props.onError(o.Unknown) : this.hasAwarded || this.props.onError(o.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return p.createElement(S._17, {
                        background: S.m.Base
                    }, p.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, p.createElement(g.a, null), p.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = m.__decorate([Object(v.a)(N, {
                    name: "redeemTrueXAd"
                })], t)
            }(p.Component)),
            C = Object(l.a)(null, i)(E),
            w = n(4),
            O = n(823),
            U = n(28);
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(k || (k = {}));
        var x, F = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(f.d)("Try again later", "Bits--WatchAdOffer")), p.createElement(S._17, {
                    className: "bits-buy-card__offer-row",
                    display: S.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: S.T.Between,
                    flexWrap: S.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, p.createElement(S.U, {
                    padding: {
                        right: 4
                    }
                }, p.createElement("strong", null, Object(f.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), p.createElement(S.U, {
                    flexShrink: 0,
                    display: S.H.Flex,
                    flexDirection: S.J.Column,
                    alignItems: S.c.End
                }, p.createElement(S.u, {
                    type: S.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(f.d)("Watch Ad", "Bits--WatchAdOffer")), t && p.createElement(S.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: S.d.Stretch,
                    textAlign: S._22.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            D = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(_.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === k.Available
                                    }), e !== k.Available && e !== k.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return D.test(navigator.userAgent) ? null : p.createElement(F, m.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(p.Component),
            A = n(812),
            I = n(259),
            B = n(372),
            j = n(813),
            R = n(375),
            L = n(373),
            P = (n(857), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(j.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        i && (t.props.onBuyPopupClose(i), t.props.onClose())
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === A.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return p.createElement(T, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(j.c)(this.props.offer) ? t = p.createElement(S.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, p.createElement(S._21, {
                        type: S._26.Strong,
                        fontSize: S.L.Size6
                    }, Object(f.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(j.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === A.c && (t = p.createElement(S.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, p.createElement(S._21, {
                        type: S._26.Strong,
                        fontSize: S.L.Size6
                    }, Object(f.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = p.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(f.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(j.c)(this.props.offer) || Object(j.e)(this.props.offer)) && (i = p.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(f.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? S._17 : S.U;
                    return p.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: S.H.Flex,
                        justifyContent: S.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: S.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, p.createElement(S.U, {
                        display: S.H.Flex,
                        justifyContent: S.T.Between,
                        alignItems: S.c.Center
                    }, p.createElement(S.U, {
                        flexGrow: 1
                    }, p.createElement(S._21, {
                        type: S._26.H5,
                        color: S.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), p.createElement(S.U, {
                        flexShrink: 0,
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.End
                    }, p.createElement(S.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && p.createElement(S.U, {
                        alignSelf: S.d.Stretch,
                        textAlign: S._22.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[I.e];
                    t || (t = Object(R.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return p.createElement(S.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return p.createElement(L.a, {
                            key: e.bits,
                            sources: Object(B.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(p.Component)),
            H = (n(858), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var s = p.createElement(P, {
                            key: a.id,
                            offer: a,
                            isLastRow: r + 1 < e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction
                        }),
                        o = Object(j.d)(a),
                        l = Object(j.c)(a),
                        c = a.type === A.a;
                    l && !e.hidePromos ? t.push(s) : o && !l ? t.push(s) : c && !e.hideWateb ? i = s : c || o || n.push(s)
                }), e.fullsize ? p.createElement(S.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: S.K.NoWrap,
                    display: S.H.Flex,
                    flexDirection: S.J.Column
                }, i, t, n) : p.createElement(U.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, p.createElement(S.U, {
                    flexGrow: 1,
                    flexWrap: S.K.NoWrap,
                    display: S.H.Flex,
                    flexDirection: S.J.Column
                }, i, t, n))
            }),
            M = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = p.createElement(S._21, {
                    italic: !0,
                    type: S._26.P,
                    color: S.F.Alt
                }, Object(f.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = p.createElement(S._21, {
                    color: S.F.Alt
                }, Object(f.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = p.createElement(S._21, {
                    color: S.F.Alt
                }, Object(f.d)("You have {totalBits} Bits", {
                    totalBits: p.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), p.createElement(S._17, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, p.createElement(S.U, {
                    margin: {
                        bottom: 1
                    }
                }, p.createElement(S._21, {
                    type: S._26.H4,
                    color: S.F.Alt
                }, Object(f.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            W = n(815),
            V = function(e) {
                return p.createElement(S.U, {
                    display: S.H.Flex,
                    flexGrow: 1,
                    flexDirection: S.J.Column,
                    alignItems: S.c.Center,
                    fullWidth: !0,
                    flexWrap: S.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, p.createElement(W.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig
                }), p.createElement(S.U, {
                    display: S.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: S.J.Column,
                    alignItems: S.c.Center,
                    flexWrap: S.K.NoWrap
                }, p.createElement(S._21, {
                    type: S._26.H4,
                    bold: !0
                }, Object(f.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), p.createElement(S.P, {
                    padding: {
                        top: 1
                    }
                }, p.createElement(S._21, {
                    color: S.F.Alt2
                }, Object(f.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), p.createElement("br", null), Object(f.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), p.createElement(S.U, {
                    display: S.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: S.d.Stretch,
                    justifyContent: S.T.Between
                }, p.createElement(S.u, {
                    onClick: e.onStartCheering
                }, Object(f.d)("Start Cheering", "Bits--WatchAdAward")), p.createElement(S.u, {
                    type: S.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(f.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), e !== k.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return p.createElement(V, m.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(p.Component),
            z = (n(860), function(e) {
                var t = Object(f.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(f.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case o.Adblock:
                        i = "adserroradblock", n = Object(f.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case o.LimitReached:
                        i = "adserrorlimit", t = Object(f.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(f.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case o.ExitEarly:
                        n = Object(f.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = p.createElement(S.U, {
                    className: "watch-ad-error__footer",
                    display: S.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: S.d.Stretch,
                    justifyContent: S.T.Center
                }, p.createElement(S.u, {
                    onClick: e.onTryAgain
                }, Object(f.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (a = p.createElement(S.U, {
                    className: "watch-ad-error__footer",
                    display: S.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: S.d.Stretch,
                    justifyContent: S.T.Between
                }, p.createElement(S.u, {
                    onClick: e.onClose
                }, Object(f.d)("Got It", "Bits--WatchAdError")), p.createElement(S.u, {
                    onClick: e.onTryAgain,
                    type: S.z.Hollow
                }, Object(f.d)("Buy Bits", "Bits--WatchAdError")))), p.createElement(S.U, {
                    padding: {
                        x: 1
                    },
                    display: S.H.Flex,
                    flexGrow: 1,
                    flexDirection: S.J.Column,
                    alignItems: S.c.Center,
                    fullWidth: !0,
                    flexWrap: S.K.NoWrap
                }, p.createElement(S.U, {
                    padding: {
                        y: 2
                    }
                }, p.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: I.a + "/light/static/1/" + i + ".png"
                })), p.createElement(S.U, {
                    padding: {
                        bottom: 1
                    }
                }, p.createElement(S._21, {
                    type: S._26.H4,
                    bold: !0
                }, t)), p.createElement(S._21, {
                    color: S.F.Alt2
                }, n), a)
            }),
            G = n(861);
        n(862);
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(x || (x = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: x.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(O.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: x.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: _.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: x.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === x.Error && (t.setState({
                            wateb: x.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return m.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: S.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = w({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === _.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === _.b.ChatTooltip && (n = p.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, p.createElement(S._8, {
                            asset: S._9.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return p.createElement(S._17, m.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.T.Center,
                        textAlign: S._22.Center
                    }, e), p.createElement(S.X, {
                        delay: 0
                    }), p.createElement(S.U, {
                        padding: {
                            top: 2
                        }
                    }, p.createElement(S._21, {
                        italic: !0
                    }, Object(f.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return p.createElement(S.U, m.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.T.Center,
                        padding: 2,
                        textAlign: S._22.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, p.createElement(S._21, {
                        italic: !0
                    }, Object(f.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return p.createElement(S._17, m.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.T.Center,
                        textAlign: S._22.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === A.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        s = this.props.data.user ? this.props.data.user.id : "",
                        o = p.createElement(H, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: s,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        l = null;
                    return this.props.location === _.b.ChatTooltip && (l = p.createElement(M, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), p.createElement(S._17, m.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, o)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case x.Awarded:
                            return p.createElement(q, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case x.Error:
                            return p.createElement(z, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = m.__decorate([Object(v.a)(G, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(p.Component),
            K = $,
            Q = Object(l.a)(r, s)(K);
        n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return Q
        })
    },
    844: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(259),
            s = n(373),
            o = n(3),
            l = (n(869), {
                themed: !0,
                dark: {
                    "1x": r.a + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.a + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(o.U, {
                    display: o.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: o.J.Column,
                    justifyContent: o.T.Center,
                    alignItems: o.c.Center
                }, i.createElement(o._21, {
                    type: o._26.H4,
                    bold: !0
                }, i.createElement(s.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    855: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "WatchAdModal_Redeeem"
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
                                value: "RedeemTrueXAdInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "redeemTrueXAd"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\n  redeemTrueXAd(input:$input) {\n    grantedBits\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    856: function(e, t) {},
    857: function(e, t) {},
    858: function(e, t) {},
    859: function(e, t) {},
    860: function(e, t) {},
    861: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Bits_BuyCard_Offers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cheerMinimumBits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 528
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\n\nquery Bits_BuyCard_Offers($withChannel: Boolean!, $isLoggedIn: Boolean!, $channelLogin: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $channelLogin) @include(if: $withChannel) {\n    id\n    displayName\n    cheer {\n      id\n      settings {\n        cheerMinimumBits\n      }\n    }\n  }\n}\n',
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
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(834).definitions)), e.exports = i
    },
    862: function(e, t) {},
    868: function(e, t) {},
    869: function(e, t) {},
    875: function(e, t, n) {
        "use strict";
        var i = n(901);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
        })
    },
    901: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(E.d)(e)
            }
        }

        function a(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var a = new FileReader;
            a.onloadend = function() {
                t(a.result)
            }, a.readAsArrayBuffer(e)
        }

        function r(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var n = decodeURI(e);
            return fetch(n, {
                method: "PUT",
                body: new Blob([t])
            })
        }

        function s(e, t, n) {
            if (void 0 === n) throw new Error("No default avatar selected.");
            return fetch(v.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + v.a.authClientID + "&api_version=" + v.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: Z[n].id
                })
            })
        }

        function o(e, t, n) {
            return p.__awaiter(this, void 0, void 0, function() {
                var i;
                return p.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, fetch(v.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + v.a.authClientID + "&api_version=" + v.a.defaultAPIVersion + "&image_type=" + n, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return i = a.sent(), [2, i.json()]
                    }
                })
            })
        }

        function l(e) {
            switch (e) {
                case X.Success:
                    return {
                        message: Object(v.d)("Success!", "Profile Edit"),
                        type: T._0.Success
                    };
                case X.UnexpectedError:
                    return {
                        message: Object(v.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: T._0.Alert
                    };
                case X.BadSizeError:
                    return {
                        message: Object(v.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: T._0.Alert
                    };
                case X.NonImageError:
                    return {
                        message: Object(v.d)("You must upload an image.", "Profile Edit"),
                        type: T._0.Alert
                    };
                case X.WrongFormatError:
                    return {
                        message: Object(v.d)("You must select a valid image type.", "Profile Edit"),
                        type: T._0.Alert
                    };
                case X.TimeoutError:
                    return {
                        message: Object(v.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: T._0.Alert
                    };
                case X.Uploading:
                    return {
                        message: Object(v.d)("Uploading....", "Profile Edit"),
                        type: T._0.Brand
                    };
                case X.ImageNotSelected:
                    return {
                        message: Object(v.d)("Select a image first.", "Profile Edit"),
                        type: T._0.Alert
                    };
                default:
                    return {
                        message: Object(v.d)("Please try again.", "Profile Edit"),
                        type: T._0.Alert
                    }
            }
        }

        function c(e) {
            return {
                authToken: Object(E.a)(e)
            }
        }

        function d(e, t) {
            return Object(q.bindActionCreators)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(z.c)()
                }
            }, e)
        }

        function u(e) {
            return Object(q.bindActionCreators)({
                showModal: z.d
            }, e)
        }
        var m, p = n(0),
            h = n(4),
            f = n(1),
            g = n(10),
            v = n(2),
            y = n(139),
            k = n(380),
            b = n(47),
            _ = n(6),
            S = n(129),
            N = n(7),
            E = n(17),
            C = n(69),
            w = n(823),
            O = n(822),
            U = n(838),
            x = n(844),
            F = n(813),
            D = n(806),
            T = n(3),
            A = (n(908), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(F.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: D.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = f.createElement(T.U, null, f.createElement(T.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: T._22.Center
                    }, f.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, Object(v.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), f.createElement(T.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, f.createElement(T._21, {
                        type: T._26.Span,
                        color: T.F.Alt
                    }, Object(v.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), f.createElement(T.P, {
                        margin: {
                            left: .5
                        }
                    }, f.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(v.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), f.createElement(T.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: T._22.Center
                    }, f.createElement(T.P, {
                        margin: {
                            bottom: 1
                        }
                    }, f.createElement(T._21, {
                        type: T._26.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(v.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), f.createElement(T.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(v.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? f.createElement(T.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, f.createElement(T.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, f.createElement(T.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: T.z.Text
                    }, f.createElement(T._8, {
                        asset: T._9.Play,
                        height: 8
                    }), " ", Object(v.d)("Back", "Bits--FirstTimeUserPrompt"))), f.createElement(T.U, {
                        textAlign: T._22.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, f.createElement(T.e, {
                        type: T.i.SlideInLeft,
                        duration: T.g.Long,
                        enabled: !0
                    }, f.createElement(x.a, null)))) : this.props.animateFirstTimeUserIntro ? f.createElement(T.P, {
                        className: "bits-first-time-user-prompt"
                    }, f.createElement(T.e, {
                        type: T.i.SlideInRight,
                        duration: T.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : f.createElement(T.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(f.Component)),
            I = A,
            B = n(812),
            j = n(831),
            R = n(5),
            L = n(909),
            P = (n(910), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: D.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(D.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(w.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return f.createElement(T._17, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: T.H.Flex,
                        flexDirection: T.J.Column,
                        alignItems: T.c.Center,
                        justifyContent: T.T.Center,
                        textAlign: T._22.Center,
                        padding: {
                            y: 5
                        }
                    }, f.createElement(T.X, {
                        delay: 0
                    }), f.createElement(T.U, {
                        padding: {
                            top: 2
                        }
                    }, f.createElement(T._21, {
                        italic: !0
                    }, Object(v.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(F.c)(e)
                        });
                        t && t.type === B.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = f.createElement(I, {
                            promo: t,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        }))
                    }
                    var n = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = f.createElement(T._17, {
                        borderBottom: !0,
                        textAlign: T._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, f.createElement(T._21, {
                        type: T._26.Span
                    }, Object(v.d)("You have {bitsBalance}", {
                        bitsBalance: f.createElement(O.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = f.createElement(T._17, {
                        borderBottom: !0,
                        textAlign: T._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, f.createElement(T._21, {
                        type: T._26.Span
                    }, Object(v.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: f.createElement(O.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = f.createElement(U.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: D.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), f.createElement(C.b, {
                        className: "get-bits-button-content"
                    }, f.createElement(T.U, null, n, e, i))
                }, t = p.__decorate([Object(R.c)("GetBitsButtonContent"), Object(_.a)(L, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(j.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: n
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(f.Component)),
            H = P,
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(D.h)({
                            actionName: D.a.BuyMain,
                            location: D.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = f.createElement(H, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), f.createElement(b.a, {
                        onToggle: this.toggleBalloon
                    }, f.createElement(T.u, {
                        dropdown: !0
                    }, Object(v.d)("Get Bits", "Bits--GetBitsButton")), f.createElement(T.p, {
                        direction: T.q.BottomRight,
                        size: T.r.Large
                    }, e))
                }, t = p.__decorate([Object(R.c)("GetBitsButton")], t)
            }(f.Component),
            W = M,
            V = Object(N.a)(i)(W),
            q = n(9),
            z = n(36),
            G = n(832),
            $ = n(104),
            K = n(30),
            Q = (n(911), function(e) {
                var t = function() {
                        e.onSelect(e.index)
                    },
                    n = {
                        "default-avatar__selected": e.selected,
                        "default-avatar": !0
                    };
                return f.createElement(T.U, {
                    padding: {
                        bottom: 1
                    }
                }, f.createElement("div", {
                    onClick: t,
                    "aria-label": Object(v.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, f.createElement(T._17, {
                    border: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    position: T._2.Relative,
                    className: h(n)
                }, f.createElement("img", {
                    alt: Object(v.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(m || (m = {}));
        var J;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(J || (J = {}));
        var X;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(X || (X = {}));
        var Y = (n(912), n(913)),
            Z = [{
                id: "profile_image_001",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"
            }, {
                id: "profile_image_002",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"
            }, {
                id: "profile_image_003",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"
            }, {
                id: "profile_image_004",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"
            }, {
                id: "profile_image_005",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"
            }, {
                id: "profile_image_006",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"
            }, {
                id: "profile_image_007",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"
            }],
            ee = ["image/*"],
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1
                    }, t.currentImage = null, t.logger = v.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null === e) return void t.setState({
                            statusMessage: X.ImageNotSelected
                        });
                        n = e[0];
                        var i = (n.size / 1024 / 1024).toFixed(4);
                        if (parseInt(i, 10) > 10) return void t.setState({
                            statusMessage: X.BadSizeError
                        });
                        t.setState({
                            selectedImageIndex: void 0,
                            imagePreviewURL: "",
                            currentImageHasTallAspectRatio: !1
                        }), a(n, function(e) {
                            t.currentImage = e, t.setState({
                                statusMessage: null
                            })
                        }, function(e) {
                            var n = new Image,
                                i = !1;
                            n.onload = function() {
                                n.width < n.height && (i = !0), t.setState({
                                    currentImageHasTallAspectRatio: i
                                })
                            }, n.src = e, t.setState({
                                imagePreviewURL: e
                            })
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, s = this;
                            return p.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: X.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: X.Uploading
                                        }), l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, o(this.props.userID, this.props.authToken, m.ProfileImage)];
                                    case 2:
                                        return t = l.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return a = l.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: X.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = v.j.subscribe({
                                            topic: Object(K.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    r(n, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: X.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                s.timeoutHandle = setTimeout(function() {
                                                    return s.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                s.setState({
                                                    statusMessage: X.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null,
                                                        n = s.state.imagePreviewURL;
                                                    e.status === J.Success ? t = X.Success : e.status === J.BadSize ? (t = X.BadSizeError, n = "", s.currentImage = null) : e.status === J.NonImage ? (t = X.NonImageError, n = "", s.currentImage = null) : e.status === J.WrongFormat ? (t = X.WrongFormatError, n = "", s.currentImage = null) : (t = X.UnexpectedError, n = "", s.currentImage = null), s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t,
                                                        imagePreviewURL: n
                                                    }), s.state.statusMessage === X.Success && s.setState({
                                                        profileUpdated: !0
                                                    })
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Z[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: X.TimeoutError
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = Z.map(function(t, n) {
                            return f.createElement(Q, {
                                key: t.id,
                                imageSrc: t.uri,
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = "" !== this.state.imagePreviewURL,
                        i = null;
                    if (n) {
                        var a = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        i = f.createElement(T.U, {
                            className: h(a),
                            "data-test-selector": "preview-image",
                            position: T._2.Relative
                        }, f.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = "" === this.state.imagePreviewURL,
                        s = null;
                    r && (s = f.createElement(T.U, {
                        className: "profile-edit__upload-info"
                    }, f.createElement(T.U, null, f.createElement(T._8, {
                        asset: T._9.Plus,
                        type: T._10.Alt2,
                        height: 20,
                        width: 20
                    })), f.createElement(T._21, {
                        type: T._26.H3,
                        color: T.F.Alt2,
                        fontSize: T.L.Size4
                    }, Object(v.d)("Upload a Photo", "Profile Edit"))));
                    var o = null;
                    this.props.showCloser && (o = f.createElement($.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var d = l(this.state.statusMessage),
                            u = d.message,
                            m = d.type;
                        c = f.createElement(T.Z, {
                            label: u,
                            type: m
                        })
                    }
                    var p = this.props.login;
                    return this.props.displayName && (p = this.props.displayName), f.createElement(T.U, {
                        className: "profile-edit",
                        position: T._2.Relative,
                        fullHeight: !0
                    }, f.createElement(T._17, {
                        className: "profile-edit__background-container",
                        background: T.m.Base,
                        fullWidth: !0
                    }, f.createElement(T.U, {
                        padding: 2,
                        display: T.H.InlineBlock,
                        position: T._2.Relative,
                        textAlign: T._22.Center,
                        fullWidth: !0
                    }, f.createElement(T._17, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, f.createElement(T._21, {
                        type: T._26.H3,
                        fontSize: T.L.Size4
                    }, Object(v.d)("Editing profile picture for {userName}", {
                        userName: p
                    }, "Profile Edit"), " ")), f.createElement(T.U, {
                        className: "profile-edit__upload-container",
                        display: T.H.InlineBlock,
                        position: T._2.Relative,
                        textAlign: T._22.Center,
                        margin: {
                            bottom: 1
                        }
                    }, f.createElement(T.U, {
                        className: "profile-edit__upload",
                        display: T.H.InlineBlock,
                        position: T._2.Relative,
                        textAlign: T._22.Center
                    }, f.createElement(G.a, {
                        allowedFileTypes: ee,
                        onFilesSubmitted: this.onImageInputChange
                    }, s), i)), f.createElement(T._17, {
                        "data-test-selector": "status-message",
                        fontSize: T.L.Size4,
                        position: T._2.Relative,
                        textAlign: T._22.Center,
                        className: "profile-edit__status-message"
                    }, c), f.createElement(T._17, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, f.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, f.createElement(T._21, {
                        type: T._26.H3,
                        fontSize: T.L.Size5
                    }, Object(v.d)("Or select one of these", "Profile Edit"))), f.createElement(T._33, {
                        childWidth: T._34.ExtraSmall,
                        gutterSize: T._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), f.createElement(T.U, {
                        display: T.H.Flex,
                        justifyContent: T.T.Center
                    }, f.createElement(T.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick
                    }, Object(v.d)("Update", "Profile Edit"))))), o)
                }, t.prototype.setDefaultAvatar = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return p.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: X.Uploading
                                    }), e = X.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, s(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return t = i.sent(), 204 === t.status || 200 === t.status ? e = X.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === X.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = p.__decorate([Object(_.a)(Y, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(f.Component),
            ne = Object(R.c)("Profile Edit")(te),
            ie = Object(N.a)(c, d)(ne),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        t.props.showModal(ie, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return f.createElement(T.U, null, f.createElement("div", {
                        onClick: this.openModal
                    }, f.createElement(T._8, {
                        asset: T._9.Edit,
                        height: 36,
                        width: 36,
                        fill: !0,
                        type: T._10.Brand
                    })))
                }, t = p.__decorate([Object(R.c)("EditProfileOverlay")], t)
            }(f.Component),
            re = ae,
            se = Object(N.a)(null, u)(re),
            oe = n(136),
            le = (n(914), n(915));
        n.d(t, "b", function() {
            return ce
        }), n.d(t, "a", function() {
            return pe
        });
        var ce, de = "channel-header__verified-badge",
            ue = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(ce || (ce = {}));
        var me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        live: !1
                    }, t.verifiedBadgeElement = f.createElement(T._30, {
                        label: Object(v.d)("Verified", "ChannelHeader"),
                        direction: T._32.Right
                    }, f.createElement(T.U, {
                        className: "channel-header__verified",
                        "data-target": de,
                        display: T.H.Flex,
                        alignItems: T.c.Center,
                        margin: {
                            left: 1
                        }
                    }, f.createElement(T._8, {
                        asset: T._9.Verified
                    }))), t.liveIndicatorElement = f.createElement(T.U, {
                        margin: {
                            left: 1
                        },
                        "data-target": ue
                    }, f.createElement(T._30, {
                        label: Object(v.d)("Live Now", "ChannelHeader"),
                        direction: T._32.Right
                    }, f.createElement(T.V, {
                        pulse: !0
                    }))), t.renderAvatarEditButton = function() {
                        return t.props.data && t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? f.createElement(T.U, {
                            className: "channel-header__edit-profile-overlay",
                            position: T._2.Absolute
                        }, f.createElement(se, {
                            userID: t.props.data.user.id,
                            login: t.props.data.user.login,
                            displayName: t.props.data.user.displayName
                        })) : null
                    }, t.onUpdateDebounce = function() {
                        if (!t.resizeAnimationFrame && t.channelHeader) {
                            var e = t.channelHeader.querySelector('[data-target="channel-header-left"]');
                            t.updateWidth(t.getWidth(e).width), t.resizeAnimationFrame = requestAnimationFrame(t.handleWindowResize)
                        }
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame = null, t.getChannelHeaderSize()
                    }, t.saveChannelHeaderRef = function(e) {
                        return t.channelHeader = e
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.updateLiveState(this.props)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.updateLiveState(e)
                }, t.prototype.componentDidUpdate = function() {
                    this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                }, t.prototype.updateWidth = function(e) {
                    var t = e !== this.width || this.width !== this.prevWidth;
                    void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                }, t.prototype.render = function() {
                    var e, t, n = 0,
                        i = 0,
                        a = 0,
                        r = v.a.defaultAvatarURL;
                    this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, r = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                    var s = this.state.live && ce[this.props.currentPage] !== ce[ce.Channel],
                        o = this.createChannelLinks(n, i, a),
                        l = {
                            "channel-header__user": !0,
                            "channel-header__user--selected": ce[this.props.currentPage] === ce[ce.Channel]
                        },
                        c = null;
                    this.canRenderBitsButton() && (c = f.createElement(T.U, {
                        margin: {
                            left: 1
                        }
                    }, f.createElement(V, {
                        channelLogin: this.props.channelLogin
                    })));
                    var d, u = f.createElement(T.U, {
                        display: T.H.Flex,
                        flexWrap: T.K.NoWrap,
                        alignItems: T.c.Center,
                        flexShrink: 0
                    }, f.createElement(T.U, {
                        className: "channel-header__user-avatar channel-header__user-avatar--active",
                        margin: {
                            right: 1
                        },
                        display: T.H.Flex,
                        flexShrink: 0,
                        alignItems: T.c.Stretch
                    }, f.createElement(T.l, {
                        size: 36,
                        imageSrc: r,
                        imageAlt: e || ""
                    }), this.renderAvatarEditButton()), e ? f.createElement(T._21, {
                        type: T._26.H5
                    }, e) : f.createElement(T.U, {
                        alignItems: T.c.Center
                    }, f.createElement(T._1, {
                        lineCount: 1,
                        width: 120
                    })), s && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                    return d = this.props.data && this.props.data.user && this.props.data.user.login ? f.createElement(g.a, {
                        to: "/" + this.props.data.user.login,
                        "data-target": "channel-header__channel-link",
                        "data-a-target": "user-channel-header-item"
                    }, u) : u, f.createElement(T.U, {
                        className: "channel-header",
                        flexShrink: 0,
                        padding: {
                            x: 3
                        }
                    }, f.createElement(T.U, {
                        display: T.H.Flex,
                        justifyContent: T.T.Between,
                        flexWrap: T.K.NoWrap,
                        fullHeight: !0,
                        refDelegate: this.saveChannelHeaderRef
                    }, f.createElement(T.U, {
                        display: T.H.Flex,
                        alignItems: T.c.Stretch,
                        flexShrink: 0,
                        flexWrap: T.K.NoWrap,
                        "data-target": "channel-header-left"
                    }, f.createElement(T.P, {
                        className: h(l),
                        padding: {
                            y: .5,
                            right: 2
                        },
                        display: T.H.Flex,
                        flexWrap: T.K.NoWrap,
                        alignItems: T.c.Center,
                        flexShrink: 0
                    }, d), this.renderTabs(o), f.createElement(T.U, {
                        className: "channel-header__item channel-header__item--no-underline",
                        padding: {
                            x: 1
                        },
                        display: T.H.Flex,
                        flexShrink: 0,
                        alignSelf: T.d.Center,
                        "data-target": "channel-header-button"
                    }, f.createElement(b.a, {
                        alwaysMountBalloonContent: !0
                    }, f.createElement(T.v, {
                        icon: T._9.NavMore,
                        ariaLabel: Object(v.d)("More", "ChannelHeader")
                    }), f.createElement(T.p, {
                        direction: T.q.Bottom,
                        noTail: !0
                    }, f.createElement(T.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderDropdown(o)))))), f.createElement(T.U, {
                        display: T.H.Flex,
                        flexWrap: T.K.NoWrap,
                        flexShrink: 0,
                        alignItems: T.c.Center,
                        className: "channel-header__right",
                        "data-target": "channel-header-right"
                    }, f.createElement(T.U, {
                        className: "channel-header__follow-button",
                        display: T.H.Flex,
                        alignItems: T.c.Stretch,
                        margin: {
                            left: 1
                        }
                    }, f.createElement(y.a, {
                        updateContainerWidth: this.onUpdateDebounce,
                        isHostedFollow: !1,
                        channelLogin: this.props.channelLogin
                    })), f.createElement(T.U, {
                        margin: {
                            left: 1
                        }
                    }, f.createElement(oe.b, {
                        updateContainerWidth: this.onUpdateDebounce,
                        channelLogin: this.props.channelLogin
                    })), c)), f.createElement(k.a, {
                        onResize: this.onUpdateDebounce
                    }))
                }, t.prototype.updateLiveState = function(e) {
                    !e.data || e.data.loading || e.data.error || this.setState({
                        live: !!e.data.user.stream && "" !== e.data.user.stream.id
                    })
                }, t.prototype.generateUserLink = function(e, t) {
                    void 0 === e && (e = ""), void 0 === t && (t = !1);
                    var n = this.props.data && this.props.data.user && this.props.data.user.login;
                    if (!n) return "#";
                    var i = "/" + n + "/" + e;
                    return t ? Object(S.a)(i) : i
                }, t.prototype.renderTabs = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var n = e.count ? f.createElement(T.U, {
                                className: "channel-header__item-count",
                                display: T.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, f.createElement(T._21, {
                                type: T._26.Span,
                                fontSize: T.L.Size5
                            }, e.count)) : null,
                            i = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.target = Object(S.b)() ? "_blank" : ""), f.createElement(T.P, {
                            key: "channel-header__item--" + e.label,
                            display: T.H.Flex,
                            alignItems: T.c.Center,
                            flexShrink: 0
                        }, f.createElement(g.a, p.__assign({
                            className: "channel-header__item hide " + (e.isSelected ? "channel-header__item--selected" : "")
                        }, a, {
                            to: i,
                            disabled: "#" === i,
                            "data-target": "channel-header-item",
                            "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                        }), f.createElement(T.U, {
                            padding: {
                                x: 2,
                                y: .5
                            },
                            display: T.H.Flex
                        }, f.createElement(T._21, {
                            type: T._26.Span,
                            fontSize: T.L.Size5
                        }, e.label), n)))
                    })
                }, t.prototype.renderDropdown = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var n = e.count ? f.createElement(T.U, {
                                className: "channel-header__item-count",
                                display: T.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, f.createElement(T._21, {
                                type: T._26.Span
                            }, e.count)) : null,
                            i = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.targetBlank = !0), f.createElement(T.U, {
                            key: "channel-header__dropdown-item--" + e.label,
                            "data-target": "channel-header-dropdown-item"
                        }, f.createElement(T.S, p.__assign({
                            linkTo: i,
                            disabled: "#" === i
                        }, a), f.createElement(T.U, {
                            className: "channel-header__dropdown-hover-target",
                            padding: {
                                y: .5,
                                x: 1
                            },
                            display: T.H.Flex
                        }, f.createElement(T._21, {
                            type: T._26.Span
                        }, e.label), n)))
                    })
                }, t.prototype.createChannelLinks = function(e, t, n) {
                    return [{
                        label: Object(v.d)("Videos", "ChannelHeader"),
                        count: Object(v.e)(e),
                        pathSuffix: "videos/all",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Videos]
                    }, {
                        label: Object(v.d)("Clips", "ChannelHeader"),
                        pathSuffix: "clips",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Clips]
                    }, {
                        label: Object(v.d)("Collections", "ChannelHeader"),
                        pathSuffix: "collections",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Collections]
                    }, {
                        label: Object(v.d)("Events", "ChannelHeader"),
                        pathSuffix: "events",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Events]
                    }, {
                        label: Object(v.d)("Followers", "ChannelHeader"),
                        count: Object(v.e)(t),
                        pathSuffix: "followers",
                        isExternal: !0,
                        isSelected: ce[this.props.currentPage] === ce[ce.Followers]
                    }, {
                        label: Object(v.d)("Following", "ChannelHeader"),
                        count: Object(v.e)(n),
                        pathSuffix: "following",
                        isExternal: !0,
                        isSelected: ce[this.props.currentPage] === ce[ce.Following]
                    }]
                }, t.prototype.getChannelHeaderSize = function() {
                    if (this.channelHeader) {
                        var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                            t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                            n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                            i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                        if (n.length) {
                            var a = this.getWidth(this.channelHeader).width,
                                r = this.getWidth(e).width,
                                s = this.getWidth(t).width,
                                o = r + s + 20 - a;
                            if (o > 0)
                                for (var l = n.length - 1; l >= 0; l--) {
                                    var c = n[l];
                                    if (!c.classList.contains("hide")) {
                                        var d = this.getWidth(c);
                                        if (c.classList.add("hide"), i[l].classList.remove("hide"), (o -= d.width) <= 0) break
                                    }
                                } else
                                    for (var l = 0; l < n.length; l++) {
                                        var c = n[l];
                                        if (c.classList.contains("hide")) {
                                            c.classList.remove("hide");
                                            var d = this.getWidth(c);
                                            if (d.width >= Math.abs(o)) {
                                                c.classList.add("hide");
                                                break
                                            }
                                            c.classList.remove("hide"), i[l].classList.add("hide"), o += d.width
                                        }
                                    }
                            var u = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                            if (u) {
                                var m = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].hide').length;
                                u.classList.toggle("hide", m)
                            }
                        }
                    }
                }, t.prototype.canRenderBitsButton = function() {
                    return this.props.data && !this.props.data.loading && this.props.currentPage !== ce.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
                }, t.prototype.getWidth = function(e) {
                    return e ? {
                        width: e.clientWidth
                    } : {
                        width: 0
                    }
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(_.a)(le, {
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
                }), Object(R.c)("ChannelHeader")], t)
            }(f.Component),
            pe = me
    },
    907: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sideNavCollapsed: !e.ui.sideNavExpanded,
                rightColumnCollapsed: !e.ui.rightColumnExpanded
            }
        }
        var a = n(7),
            r = n(0),
            s = n(1),
            o = n(380),
            l = n(143),
            c = n(144),
            d = n(396),
            u = n(449),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.resizeAnimationFrame = 0, t.collapseOnBreakpoint = function() {
                        var e = window.innerWidth,
                            n = {
                                sideNavCollapsedFromCSS: e < c.d,
                                rightColumnCollapsedFromCSS: e < l.b
                            };
                        t.state.sideNavCollapsedFromCSS === n.sideNavCollapsedFromCSS && t.state.rightColumnCollapsedFromCSS === n.rightColumnCollapsedFromCSS || t.setState(n), t.resizeAnimationFrame = 0
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.collapseOnBreakpoint))
                    }, t.onInnerChildrenResize = function(e, n) {
                        t.context.setRootScrollableOffsetHeight(n / 10 + "rem")
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.handleWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.handleWindowResize), this.context.resetRootScrollableOffsetHeight(), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                }, t.prototype.render = function() {
                    var e = document.querySelector("." + u.b),
                        t = 0,
                        n = 0;
                    e ? (t = e.getBoundingClientRect().left, n = window.innerWidth - e.getBoundingClientRect().right) : n = window.innerWidth;
                    var i = {
                        position: "fixed",
                        top: d.a,
                        left: t,
                        right: n,
                        zIndex: 500
                    };
                    return s.createElement("div", {
                        style: i
                    }, s.createElement(o.a, {
                        onResize: this.onInnerChildrenResize
                    }), this.props.children)
                }, t.contextTypes = {
                    setRootScrollableOffsetHeight: s.PropTypes.func,
                    resetRootScrollableOffsetHeight: s.PropTypes.func
                }, t
            }(s.Component),
            p = Object(a.a)(i)(m);
        n.d(t, "a", function() {
            return p
        })
    },
    908: function(e, t) {},
    909: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetBitsButton_Bits"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 803
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\n\nquery GetBitsButton_Bits($isLoggedIn: Boolean!, $withChannel: Boolean!, $login: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $login) @include(if: $withChannel) {\n    id\n    ...cheer\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(834).definitions)), a.definitions = a.definitions.concat(i(n(835).definitions)), e.exports = a
    },
    910: function(e, t) {},
    911: function(e, t) {},
    912: function(e, t) {},
    913: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserProfileEditor"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 121
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\n  user(login: $login) {\n    id\n    login\n    profileImageURL(width: 70)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    914: function(e, t) {},
    915: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelHeader"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "videos"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "followers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follows"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 423
            }
        };
        n.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    profileImageURL(width: 70)\n    roles {\n      isPartner\n    }\n    stream {\n      id\n    }\n    videos {\n      totalCount\n    }\n    followers {\n      totalCount\n    }\n    follows {\n      totalCount\n    }\n    cheer {\n      id\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.channel-collections-0fe48c2fb594ba901a2ebdb3268e124c.js.map