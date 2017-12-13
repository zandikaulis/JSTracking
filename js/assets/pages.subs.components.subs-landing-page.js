webpackJsonp([63], {
    1258: function(e, t, n) {
        "use strict";

        function a(e) {
            return s.__awaiter(this, void 0, void 0, function() {
                var t;
                return s.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, i.m.track(o.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }

        function r(e) {
            return s.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return s.__generator(this, function(a) {
                    if (t = null, e.isSubscribedCurrentTier) switch (e.isSubscribedCurrentTier) {
                        case "1000":
                            t = "$4.99";
                            break;
                        case "2000":
                            t = "$9.99";
                            break;
                        case "3000":
                            t = "$24.99"
                    }
                    return n = {
                        action: e.action,
                        can_subscribe: e.canSubscribe,
                        channel: e.channelLogin,
                        channel_id: e.channelID,
                        checkout_button_tier: e.checkoutButtonTier,
                        has_sub_credit: e.hasSubCredit,
                        host_channel: e.hostChannelLogin,
                        host_channel_id: e.hostChannelID,
                        is_menu_open: e.isMenuOpen,
                        is_subscribed: e.isSubscribed,
                        is_subscribed_current_tier: t,
                        sub_location: e.sub_location,
                        modal: e.modal,
                        modal_level: "",
                        show_prime_content: e.showPrimeContent,
                        show_resub: e.showResub,
                        vod_id: "",
                        vod_type: "",
                        viewport_height: window.innerHeight,
                        viewport_width: window.innerWidth
                    }, i.m.track(o.SpadeEventType.Subscription, n), [2]
                })
            })
        }
        t.a = a, t.b = r;
        var s = n(0),
            i = n(2),
            o = n(13)
    },
    2022: function(e, t, n) {
        e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd364135a9d764.png"
    },
    2023: function(e, t, n) {
        e.exports = n.p + "assets/emotes-e2efaf11b6d1b3db4fe5fd980350e28b.png"
    },
    2024: function(e, t) {},
    2025: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Following_CurrentUser"
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
                                    value: "follows"
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
                                        value: "filter"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "SUBBABLE"
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
                                                                value: "300"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 359
            }
        };
        n.loc.source = {
            body: "query Following_CurrentUser($limit: Int, $cursor: Cursor){\n  currentUser{\n    id\n    login\n    follows(first: $limit, after: $cursor, filter: SUBBABLE){\n      edges{\n        node{\n          id\n          login\n          displayName\n          profileImageURL(width: 300)\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2026: function(e, t) {},
    2027: function(e, t) {},
    2028: function(e, t) {},
    2029: function(e, t) {},
    2102: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(k.d)(e)
            }
        }

        function r(e) {
            return Object(y.bindActionCreators)({
                login: function() {
                    return S.f(v.a.SubsLandingPage)
                }
            }, e)
        }

        function s(e) {
            return {
                user: Object(k.c)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(6),
            o = n(0),
            l = n(1),
            c = n(2),
            u = n(2022),
            d = n.n(u),
            m = n(2023),
            p = n.n(m),
            g = n(28),
            h = n(823),
            f = n(821),
            b = n(13),
            _ = n(5),
            y = n(9),
            v = n(55),
            S = n(39),
            k = n(17),
            w = n(7),
            C = n(20),
            E = n(10),
            x = n(3),
            P = (n(2024), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleClick = function() {
                        t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.followedChannel.profileImageURL;
                    return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), l.createElement(E.a, {
                        className: "followed-channel-link",
                        to: "/subs/" + this.props.followedChannel.login,
                        onClick: this.handleClick
                    }, l.createElement(x.U, {
                        textAlign: x._23.Center,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(x.P, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement("img", {
                        className: "followed-channel-link__avatar",
                        src: e,
                        alt: this.props.followedChannel.displayName
                    })), l.createElement(x.P, {
                        margin: {
                            top: 0,
                            bottom: 1
                        }
                    }, l.createElement(x._22, {
                        className: "followed-channel-link__name",
                        color: x.F.Link,
                        ellipsis: !0,
                        noWrap: !0
                    }, this.props.followedChannel.displayName))))
                }, t = o.__decorate([Object(_.c)("FollowedChannelLink")], t)
            }(l.Component)),
            N = P,
            F = n(1258),
            O = n(2025),
            D = (n(2026), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        followedChannels: []
                    }, t.messages = {
                        title: Object(c.d)("Streamers You Follow", "SubsLandingFollowing"),
                        login: Object(c.d)("Log in", "SubsLandingFollowing"),
                        loginTitle: Object(c.d)("Log in to see a list of Streamers you follow", "SubsLandingFollowing"),
                        showMore: Object(c.d)("Show More", "SubsLandingFollowing"),
                        emptyFollows: Object(c.d)("No followed channels to show", "SubsLandingFollowing")
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.getFollowedChannels = function() {
                        if (t.props.data.loading || t.props.data.error) return [l.createElement(x._2, {
                            key: "followed-channels-placeholder-1",
                            height: 96
                        })];
                        var e = t.state.followedChannels.map(function(e) {
                            return l.createElement(N, {
                                key: "followed-channel-link-" + e.id,
                                followedChannel: e,
                                onClick: t.onFollowClick
                            })
                        });
                        return e.length < 1 ? [l.createElement(x._22, {
                            key: "followed-channels_empty"
                        }, t.messages.emptyFollows)] : e
                    }, t.onFollowClick = function(e, n) {
                        Object(F.a)({
                            login: t.props.data.currentUser.login,
                            userId: t.props.data.currentUser.id,
                            channel: n,
                            channelId: e,
                            clickthroughLocation: "followed"
                        })
                    }, t.getShowMore = function() {
                        return t.props.data.loading || t.props.data.error || !t.props.data.currentUser.follows.pageInfo || !t.props.data.currentUser.follows.pageInfo.hasNextPage ? null : l.createElement(x.U, {
                            className: "subs-landing-followed-channels__show-more",
                            margin: {
                                top: 1
                            }
                        }, l.createElement(x.u, {
                            fullWidth: !0,
                            onClick: t.onShowMore
                        }, t.messages.showMore))
                    }, t.onShowMore = function() {
                        if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data.currentUser && e.data.currentUser.follows.edges) {
                        var t = (e.data.currentUser.follows.edges || []).map(function(e) {
                            return e.node
                        });
                        this.setState({
                            followedChannels: t
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? l.createElement(x.U, {
                        className: "subs-landing-followed-channels",
                        display: x.H.Flex,
                        alignItems: x.c.Center,
                        flexDirection: x.J.Column,
                        fullWidth: !0
                    }, l.createElement(x.P, {
                        margin: {
                            top: 3,
                            bottom: 2
                        }
                    }, l.createElement(x._22, {
                        type: x._27.H3,
                        color: x.F.Link,
                        bold: !0,
                        className: "subs-landing-followed-channels__title"
                    }, this.messages.title)), l.createElement(x._34, {
                        center: !0,
                        gutterSize: x._36.Small
                    }, this.getFollowedChannels()), this.getShowMore()) : l.createElement(x.U, {
                        textAlign: x._23.Center,
                        margin: {
                            top: 3
                        }
                    }, l.createElement(x.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, this.messages.login), l.createElement(x._22, null, this.messages.loginTitle))
                }, t = o.__decorate([Object(w.a)(O, {
                    options: function() {
                        return {
                            variables: {
                                limit: 12,
                                cursor: ""
                            }
                        }
                    },
                    props: function(e) {
                        return o.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: O,
                                    variables: o.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            currentUser: o.__assign({}, a.currentUser, {
                                                follows: o.__assign({}, a.currentUser.follows, {
                                                    edges: Object(C.b)(e.currentUser.follows.edges, a.currentUser.follows.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(l.Component)),
            L = D,
            T = Object(i.a)(a, r)(L),
            U = n(40),
            I = n(18),
            j = n(68),
            M = n(110),
            R = n(269),
            H = n(65),
            A = n(48),
            W = (n(2027), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamerClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.streamer_id;) n = n.parentElement;
                        n.dataset.streamer_login && n.dataset.streamer_id && t.props.onResultSelected({
                            channel: n.dataset.streamer_login,
                            channelId: n.dataset.streamer_id
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? l.createElement(x.Y, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), l.createElement(x._18, {
                        elevation: 4
                    }, l.createElement("div", {
                        className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, l.createElement(x._18, {
                        className: "streamer-search-panel__results",
                        background: x.m.Base,
                        position: x._3.Relative,
                        overflow: x.Z.Hidden,
                        display: x.H.Block,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        fullHeight: !0
                    }, l.createElement(x.P, {
                        overflow: x.Z.Hidden,
                        position: x._3.Relative,
                        fullHeight: !0
                    }, l.createElement(g.b, {
                        suppressScrollX: !0
                    }, l.createElement(x.U, null, e, l.createElement(g.a, {
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))))
                }, t.prototype.getStreamerResultContent = function() {
                    var e = this;
                    if (!this.props.streamerResults) return l.createElement(x.U, null);
                    var t = this.props.streamerResults.results.map(function(t) {
                        var n = Object(A.a)(t.login || "", t.name || "");
                        return l.createElement(x.S, {
                            linkTo: "/subs/" + t.login,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "streamer-search-result-" + t.id,
                            "data-streamer_id": t.id,
                            "data-streamer_login": t.login,
                            onClick: e.onStreamerClick
                        }, l.createElement(x.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, l.createElement(x.A, {
                            row: !0
                        }, l.createElement(x.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: x.D.Size4,
                            aspect: x.k.Aspect1x1
                        }), l.createElement(x.B, null, l.createElement(x.P, {
                            padding: {
                                x: 1
                            }
                        }, l.createElement(x._22, {
                            type: x._27.H5,
                            ellipsis: !0
                        }, n))))))
                    });
                    return l.createElement(x.U, null, t)
                }, t.prototype.getErrorMessage = function() {
                    return l.createElement(x._22, null, "Error")
                }, t.prototype.getNoResultsMessage = function() {
                    return l.createElement(x._22, null, "No Results")
                }, t
            }(l.Component)),
            z = W,
            B = (n(2028), {
                searchPlaceholder: Object(c.d)("Search for a Streamer", "StreamerSearch")
            }),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(x.U, {
                        margin: {
                            top: 2
                        },
                        display: x.H.Flex,
                        justifyContent: x.T.Center,
                        fullWidth: !0
                    }, l.createElement(x.P, {
                        fullWidth: !0,
                        zIndex: x._39.Above,
                        position: x._3.Relative
                    }, l.createElement("div", {
                        className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                    }, l.createElement(H.a, {
                        onClickOut: this.props.onClickOut
                    }, l.createElement(x._12, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: B.searchPlaceholder,
                        id: "streamer-search-input"
                    }), l.createElement(x.p, {
                        direction: x.q.BottomCenter,
                        noTail: !0,
                        size: x.r.ExtraLarge,
                        show: this.props.isOpen
                    }, l.createElement(z, {
                        isOpen: this.props.isOpen,
                        streamerResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    }))))))
                }, t
            }(l.Component),
            q = 50,
            K = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, q)
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === U.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === U.a.Up ? t.focusNext(-1) : e.keyCode === U.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function(e) {
                        t.setState({
                            isOpen: !1
                        });
                        var n = Object.assign({
                            login: t.props.user ? t.props.user.login : null,
                            userId: t.props.user ? String(t.props.user.id) : null,
                            channel: e.channel,
                            channelId: e.channelId,
                            clickthroughLocation: "search"
                        }, e);
                        Object(F.a)(n)
                    }, t.loadMore = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a;
                            return o.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(j.a.Users, this.state.term, "", {
                                            page: e,
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), c.i.error(n, "Algolia page search failed"), this.setState(o.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (a = Object(R.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: a.currentUserResults,
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: a.exhaustedHits
                                        }), [2]) : (this.setState(o.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.state = t.getEmptyState(), t.searchClient = new M.a(c.a.algoliaApplicationID, c.a.algoliaAPIKey), t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(V, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        loadMore: this.loadMore,
                        onResultSelected: this.onResultSelected,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        a = document.activeElement,
                        r = Array.prototype.indexOf.call(n, a);
                    if (t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var s = n.item(t);
                        s.focus(), s.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: s
                        })
                    }
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, r, s, i;
                        return o.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = I.a(), a = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !a && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(j.a.Users, e, n, {
                                        facetFilters: "has_subscription_products:true"
                                    })];
                                case 2:
                                    return r = l.sent(), [3, 4];
                                case 3:
                                    return s = l.sent(), c.i.error(s, "Algolia top results search failed"), this.setState(o.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return r ? this.state.queryID !== r.id ? [2] : (i = Object(R.b)({
                                        searchResults: r,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return o.__assign({}, n, i, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(o.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t = o.__decorate([Object(_.c)("StreamerSearch")], t)
            }(l.Component),
            G = Object(i.a)(s)(K),
            $ = (n(2029), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.messages = {
                        title: Object(c.d)("Subscriptions", "SubsLandingPage"),
                        info: Object(c.d)("Subscribe to a streamer to enjoy exclusive emotes, badges and more!", "SubsLandingPage"),
                        searchTitle: Object(c.d)("Search For Streamer", "SubsLandingPage"),
                        searchInfo: Object(c.d)("Find a streamer you're thinking of subbing to, then click on their name to go to their page and subscribe.", "SubsLandingPage"),
                        perksTitle: Object(c.d)("Subscriber Perks", "SubsLandingPage"),
                        perksInfo: Object(c.d)("Subscriptions let Partners and Affiliates interact with their most passionate fans. Subscribing unlocks exclusive chat badges, plus many streamers host sub-only games or events too.", "SubsLandingPage"),
                        emotesTitle: Object(c.d)("Emotes", "SubsLandingPage"),
                        emotesInfo: Object(c.d)("Subscribing to a streamer unlocks custom emotes, usable on any channel on Twitch. The more subs a streamer has, the more custom emotes slots will be unlocked, so more support equals more rewards for everyone.", "SubsLandingPage")
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), c.n.setPageTitle("Subscriptions")
                }, t.prototype.render = function() {
                    return l.createElement(x.U, {
                        className: "subs-landing-page",
                        fullHeight: !0,
                        display: x.H.Flex,
                        justifyContent: x.T.Center
                    }, l.createElement(x.P, {
                        fullWidth: !0
                    }, l.createElement(g.b, {
                        suppressScrollX: !0
                    }, l.createElement(x.U, {
                        fullWidth: !0,
                        display: x.H.Flex,
                        justifyContent: x.T.Center
                    }, l.createElement(x.U, {
                        className: "subs-landing-page-contents",
                        textAlign: x._23.Center,
                        display: x.H.Flex,
                        justifyContent: x.T.Center,
                        alignItems: x.c.Center,
                        flexWrap: x.K.NoWrap,
                        flexDirection: x.J.Column,
                        padding: {
                            x: 2
                        },
                        fullHeight: !0
                    }, l.createElement(x.P, {
                        margin: {
                            top: 4
                        }
                    }, l.createElement(x._22, {
                        type: x._27.H2,
                        color: x.F.Link,
                        bold: !0
                    }, this.messages.title)), l.createElement(x.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(x._22, {
                        type: x._27.P,
                        fontSize: x.L.Size5
                    }, this.messages.info)), l.createElement(x.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, l.createElement(x._22, {
                        type: x._27.H3,
                        color: x.F.Link,
                        bold: !0,
                        fontSize: x.L.Size4
                    }, this.messages.searchTitle)), l.createElement(x.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(x._22, {
                        type: x._27.P,
                        fontSize: x.L.Size5
                    }, this.messages.searchInfo)), l.createElement(G, null), l.createElement(T, null), l.createElement(x.U, {
                        className: "subs-landing-page-contents__section",
                        display: x.H.Flex,
                        justifyContent: x.T.Center
                    }, l.createElement(x.U, {
                        className: "subs-landing-page-contents__section-info",
                        display: x.H.Flex,
                        justifyContent: x.T.Center,
                        alignItems: x.c.Center,
                        flexDirection: x.J.Column,
                        margin: {
                            x: 3
                        }
                    }, l.createElement(x.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, l.createElement(x._22, {
                        type: x._27.H3,
                        color: x.F.Link,
                        bold: !0,
                        fontSize: x.L.Size4
                    }, this.messages.perksTitle)), l.createElement(x.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(x._22, {
                        type: x._27.P,
                        fontSize: x.L.Size5
                    }, this.messages.perksInfo))), l.createElement(x.U, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, l.createElement("img", {
                        src: d.a
                    }))), l.createElement(x.U, {
                        className: "subs-landing-page-contents__section",
                        display: x.H.Flex,
                        justifyContent: x.T.Center,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(x.U, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, l.createElement("img", {
                        src: p.a
                    })), l.createElement(x.U, {
                        className: "subs-landing-page__section-info",
                        display: x.H.Flex,
                        justifyContent: x.T.Center,
                        alignItems: x.c.Center,
                        flexDirection: x.J.Column,
                        margin: {
                            x: 3
                        }
                    }, l.createElement(x.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, l.createElement(x._22, {
                        type: x._27.H3,
                        color: x.F.Link,
                        bold: !0,
                        fontSize: x.L.Size4
                    }, this.messages.emotesTitle)), l.createElement(x.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(x._22, {
                        type: x._27.P,
                        fontSize: x.L.Size5
                    }, this.messages.emotesInfo)))))))))
                }, t = o.__decorate([Object(_.c)("SubsLandingPage", {
                    destination: f.a.SubsLandingPage
                }), Object(h.a)({
                    location: b.PageviewLocation.SubsLandingPage
                })], t)
            }(l.Component)),
            J = $,
            Y = Object(i.a)()(J);
        n.d(t, "SubsLandingPage", function() {
            return Y
        })
    },
    821: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
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
            DirectoryPopularByLanguage: "directory.popular.language",
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
    823: function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var s = a.referenceTracking,
                                    i = s.content,
                                    o = s.medium,
                                    c = s.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: i,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return i.createElement(t, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? s.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                r = s.stringify(t);
                            r.length > 0 && (a = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(i.Component);
                return Object(o.f)(n)
            }
        }
        var r = n(0),
            s = n(21),
            i = n(1),
            o = n(10),
            l = n(2);
        n.d(t, "a", function() {
            return a
        })
    }
});
//# sourceMappingURL=pages.subs.components.subs-landing-page-773800519a2dbce01fd01313da4a8f89.js.map