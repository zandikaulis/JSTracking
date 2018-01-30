webpackJsonp([71], {
    "1KsR": function(e, t) {},
    "2oK2": function(e, t) {
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
                end: 239
            }
        };
        n.loc.source = {
            body: "query Following_CurrentUser($limit: Int $cursor: Cursor){\ncurrentUser{\nid\nlogin\nfollows(first: $limit after: $cursor filter: SUBBABLE){\nedges{\nnode{\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "78L3": function(e, t, n) {
        e.exports = n.p + "assets/emotes-e2efaf11b6d1b3db4fe5fd980350e28b.png"
    },
    VNre: function(e, t) {},
    XFEc: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return a.__awaiter(this, void 0, void 0, function() {
                var t;
                return a.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, s.m.track(r.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }, t.b = function(e) {
            return a.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return a.__generator(this, function(a) {
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
                    }, s.m.track(r.SpadeEventType.Subscription, n), [2]
                })
            })
        };
        var a = n("TToO"),
            s = n("6sO2"),
            r = n("vH/s")
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = s.__assign({}, e.properties));
                                var n = s.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    i = r.content,
                                    o = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(s.__assign({
                                    content: i,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return s.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return i.createElement(t, s.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                s = r.stringify(t);
                            s.length > 0 && (a = "?" + s), this.props.history.replace({
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
        var s = n("TToO"),
            r = n("OAwv"),
            i = n("U7vG"),
            o = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    "kd/b": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("RH2O"),
            s = n("TToO"),
            r = n("U7vG"),
            i = n("6sO2"),
            o = n("tKQv"),
            l = n.n(o),
            c = n("78L3"),
            u = n.n(c),
            d = n("zCIC"),
            p = n("j7/Y"),
            m = n("w9tK"),
            g = n("vH/s"),
            h = n("CSlQ"),
            f = n("2KeS"),
            _ = n("+xm8"),
            b = n("f2i/"),
            k = n("Aj/L"),
            S = n("7vx8"),
            v = n("oIkB"),
            y = n("F8kA"),
            E = n("Odds"),
            w = (n("1KsR"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleClick = function() {
                        t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.followedChannel.profileImageURL;
                    return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), r.createElement(y.a, {
                        className: "followed-channel-link",
                        to: "/subs/" + this.props.followedChannel.login,
                        onClick: this.handleClick
                    }, r.createElement(E.V, {
                        textAlign: E._24.Center,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(E.Q, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement("img", {
                        className: "followed-channel-link__avatar",
                        src: e,
                        alt: this.props.followedChannel.displayName
                    })), r.createElement(E.Q, {
                        margin: {
                            top: 0,
                            bottom: 1
                        }
                    }, r.createElement(E._23, {
                        className: "followed-channel-link__name",
                        color: E.F.Link,
                        ellipsis: !0,
                        noWrap: !0
                    }, this.props.followedChannel.displayName))))
                }, t = s.__decorate([Object(h.d)("FollowedChannelLink")], t)
            }(r.Component)),
            C = n("XFEc"),
            N = n("2oK2"),
            O = (n("VNre"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        followedChannels: []
                    }, t.messages = {
                        title: Object(i.d)("Streamers You Follow", "SubsLandingFollowing"),
                        login: Object(i.d)("Log in", "SubsLandingFollowing"),
                        loginTitle: Object(i.d)("Log in to see a list of Streamers you follow", "SubsLandingFollowing"),
                        showMore: Object(i.d)("Show More", "SubsLandingFollowing"),
                        emptyFollows: Object(i.d)("No followed channels to show", "SubsLandingFollowing")
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.getFollowedChannels = function() {
                        if (t.props.data.loading || t.props.data.error) return [r.createElement(E._3, {
                            key: "followed-channels-placeholder-1",
                            height: 96
                        })];
                        var e = t.state.followedChannels.map(function(e) {
                            return r.createElement(w, {
                                key: "followed-channel-link-" + e.id,
                                followedChannel: e,
                                onClick: t.onFollowClick
                            })
                        });
                        return e.length < 1 ? [r.createElement(E._23, {
                            key: "followed-channels_empty"
                        }, t.messages.emptyFollows)] : e
                    }, t.onFollowClick = function(e, n) {
                        Object(C.a)({
                            login: t.props.data.currentUser.login,
                            userId: t.props.data.currentUser.id,
                            channel: n,
                            channelId: e,
                            clickthroughLocation: "followed"
                        })
                    }, t.getShowMore = function() {
                        return t.props.data.loading || t.props.data.error || !t.props.data.currentUser.follows.pageInfo || !t.props.data.currentUser.follows.pageInfo.hasNextPage ? null : r.createElement(E.V, {
                            className: "subs-landing-followed-channels__show-more",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(E.u, {
                            fullWidth: !0,
                            onClick: t.onShowMore
                        }, t.messages.showMore))
                    }, t.onShowMore = function() {
                        if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data.currentUser && e.data.currentUser.follows.edges) {
                        var t = (e.data.currentUser.follows.edges || []).map(function(e) {
                            return e.node
                        });
                        this.setState({
                            followedChannels: t
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? r.createElement(E.V, {
                        className: "subs-landing-followed-channels",
                        display: E.H.Flex,
                        alignItems: E.c.Center,
                        flexDirection: E.J.Column,
                        fullWidth: !0
                    }, r.createElement(E.Q, {
                        margin: {
                            top: 3,
                            bottom: 2
                        }
                    }, r.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Link,
                        bold: !0,
                        className: "subs-landing-followed-channels__title"
                    }, this.messages.title)), r.createElement(E._34, {
                        center: !0,
                        gutterSize: E._36.Small
                    }, this.getFollowedChannels()), this.getShowMore()) : r.createElement(E.V, {
                        textAlign: E._24.Center,
                        margin: {
                            top: 3
                        }
                    }, r.createElement(E.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, this.messages.login), r.createElement(E._23, null, this.messages.loginTitle))
                }, t = s.__decorate([Object(S.a)(N, {
                    options: function() {
                        return {
                            variables: {
                                limit: 12,
                                cursor: ""
                            }
                        }
                    },
                    props: function(e) {
                        return s.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: N,
                                    variables: s.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: s.__assign({}, n.currentUser, {
                                                follows: s.__assign({}, n.currentUser.follows, {
                                                    edges: Object(v.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(r.Component)),
            x = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(k.d)(e)
                }
            }, function(e) {
                return Object(f.bindActionCreators)({
                    login: function() {
                        return b.f(_.a.SubsLandingPage)
                    }
                }, e)
            })(O),
            F = n("6BvN"),
            L = n("HM6l"),
            T = n("5LoI"),
            I = n("MAZT"),
            j = n("uTyw"),
            U = n("rCmJ"),
            P = n("SZoP"),
            R = (n("np4D"), function(e) {
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
                return s.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? r.createElement(E.Z, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), r.createElement(E._19, {
                        elevation: 4
                    }, r.createElement("div", {
                        className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, r.createElement(E._19, {
                        className: "streamer-search-panel__results",
                        background: E.m.Base,
                        position: E._4.Relative,
                        overflow: E._0.Hidden,
                        display: E.H.Block,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        fullHeight: !0
                    }, r.createElement(E.Q, {
                        overflow: E._0.Hidden,
                        position: E._4.Relative,
                        fullHeight: !0
                    }, r.createElement(d.b, {
                        suppressScrollX: !0
                    }, r.createElement(E.V, null, e, r.createElement(d.a, {
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))))
                }, t.prototype.getStreamerResultContent = function() {
                    var e = this;
                    if (!this.props.streamerResults) return r.createElement(E.V, null);
                    var t = this.props.streamerResults.results.map(function(t) {
                        var n = Object(P.a)(t.login || "", t.name || "");
                        return r.createElement(E.T, {
                            linkTo: "/subs/" + t.login,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "streamer-search-result-" + t.id,
                            "data-streamer_id": t.id,
                            "data-streamer_login": t.login,
                            onClick: e.onStreamerClick
                        }, r.createElement(E.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(E.A, {
                            row: !0
                        }, r.createElement(E.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: E.D.Size4,
                            aspect: E.k.Aspect1x1
                        }), r.createElement(E.B, null, r.createElement(E.Q, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(E._23, {
                            type: E._28.H5,
                            ellipsis: !0
                        }, n))))))
                    });
                    return r.createElement(E.V, null, t)
                }, t.prototype.getErrorMessage = function() {
                    return r.createElement(E._23, null, "Error")
                }, t.prototype.getNoResultsMessage = function() {
                    return r.createElement(E._23, null, "No Results")
                }, t
            }(r.Component)),
            D = (n("yoqf"), {
                searchPlaceholder: Object(i.d)("Search for a Streamer", "StreamerSearch")
            }),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(E.V, {
                        margin: {
                            top: 2
                        },
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        fullWidth: !0
                    }, r.createElement(E.Q, {
                        fullWidth: !0,
                        zIndex: E._39.Above,
                        position: E._4.Relative
                    }, r.createElement("div", {
                        className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                    }, r.createElement(U.a, {
                        onClickOut: this.props.onClickOut
                    }, r.createElement(E._13, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: D.searchPlaceholder,
                        id: "streamer-search-input"
                    }), r.createElement(E.p, {
                        direction: E.q.BottomCenter,
                        noTail: !0,
                        size: E.r.ExtraLarge,
                        show: this.props.isOpen
                    }, r.createElement(R, {
                        isOpen: this.props.isOpen,
                        streamerResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    }))))))
                }, t
            }(r.Component),
            V = 50,
            M = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), e ? (t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, V)) : t.setState(t.getEmptyState())
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === F.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === F.a.Up ? t.focusNext(-1) : e.keyCode === F.a.Down && t.focusNext(1))
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
                        Object(C.a)(n)
                    }, t.loadMore = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(T.a.Users, this.state.term, "", {
                                            page: e,
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), i.i.error(n, "Algolia page search failed"), this.setState(s.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (a = Object(j.b)({
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
                                        }), [2]) : (this.setState(s.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.state = t.getEmptyState(), t.searchClient = new I.a(i.a.algoliaApplicationID, i.a.algoliaAPIKey), t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(H, {
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
                        s = Array.prototype.indexOf.call(n, a);
                    if ((t = s < 0 ? e > 0 ? 0 : n.length - 1 : s + e) < 0 && (t = 0), !(t >= n.length)) {
                        var r = n.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
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
                    return s.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, r, o, l;
                        return s.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = L.a(), a = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !a && !!this.state.currentFocus
                                    }), c.label = 1;
                                case 1:
                                    return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(T.a.Users, e, n, {
                                        facetFilters: "has_subscription_products:true"
                                    })];
                                case 2:
                                    return r = c.sent(), [3, 4];
                                case 3:
                                    return o = c.sent(), i.i.error(o, "Algolia top results search failed"), this.setState(s.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return r ? this.state.queryID !== r.id ? [2] : (l = Object(j.b)({
                                        searchResults: r,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return s.__assign({}, n, l, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(s.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t = s.__decorate([Object(h.d)("StreamerSearch")], t)
            }(r.Component),
            A = Object(a.a)(function(e) {
                return {
                    user: Object(k.c)(e)
                }
            })(M),
            z = (n("rbRz"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.messages = {
                        title: Object(i.d)("Subscriptions", "SubsLandingPage"),
                        info: Object(i.d)("Subscribe to a streamer to enjoy exclusive emotes, badges and more!", "SubsLandingPage"),
                        searchTitle: Object(i.d)("Search For Streamer", "SubsLandingPage"),
                        searchInfo: Object(i.d)("Find a streamer you're thinking of subbing to, then click on their name to go to their page and subscribe.", "SubsLandingPage"),
                        perksTitle: Object(i.d)("Subscriber Perks", "SubsLandingPage"),
                        perksInfo: Object(i.d)("Subscriptions let Partners and Affiliates interact with their most passionate fans. Subscribing unlocks exclusive chat badges, plus many streamers host sub-only games or events too.", "SubsLandingPage"),
                        emotesTitle: Object(i.d)("Emotes", "SubsLandingPage"),
                        emotesInfo: Object(i.d)("Subscribing to a streamer unlocks custom emotes, usable on any channel on Twitch. The more subs a streamer has, the more custom emotes slots will be unlocked, so more support equals more rewards for everyone.", "SubsLandingPage")
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), i.n.setPageTitle("Subscriptions")
                }, t.prototype.render = function() {
                    return r.createElement(E.V, {
                        className: "subs-landing-page",
                        fullHeight: !0,
                        display: E.H.Flex,
                        justifyContent: E.U.Center
                    }, r.createElement(E.Q, {
                        fullWidth: !0
                    }, r.createElement(d.b, {
                        suppressScrollX: !0
                    }, r.createElement(E.V, {
                        fullWidth: !0,
                        display: E.H.Flex,
                        justifyContent: E.U.Center
                    }, r.createElement(E.V, {
                        className: "subs-landing-page-contents",
                        textAlign: E._24.Center,
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        alignItems: E.c.Center,
                        flexWrap: E.K.NoWrap,
                        flexDirection: E.J.Column,
                        padding: {
                            x: 2
                        },
                        fullHeight: !0
                    }, r.createElement(E.Q, {
                        margin: {
                            top: 4
                        }
                    }, r.createElement(E._23, {
                        type: E._28.H2,
                        color: E.F.Link,
                        bold: !0
                    }, this.messages.title)), r.createElement(E.Q, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, r.createElement(E._23, {
                        type: E._28.P,
                        fontSize: E.L.Size5
                    }, this.messages.info)), r.createElement(E.Q, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, r.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Link,
                        bold: !0,
                        fontSize: E.L.Size4
                    }, this.messages.searchTitle)), r.createElement(E.Q, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, r.createElement(E._23, {
                        type: E._28.P,
                        fontSize: E.L.Size5
                    }, this.messages.searchInfo)), r.createElement(A, null), r.createElement(x, null), r.createElement(E.V, {
                        className: "subs-landing-page-contents__section",
                        display: E.H.Flex,
                        justifyContent: E.U.Center
                    }, r.createElement(E.V, {
                        className: "subs-landing-page-contents__section-info",
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        alignItems: E.c.Center,
                        flexDirection: E.J.Column,
                        margin: {
                            x: 3
                        }
                    }, r.createElement(E.Q, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, r.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Link,
                        bold: !0,
                        fontSize: E.L.Size4
                    }, this.messages.perksTitle)), r.createElement(E.Q, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, r.createElement(E._23, {
                        type: E._28.P,
                        fontSize: E.L.Size5
                    }, this.messages.perksInfo))), r.createElement(E.V, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, r.createElement("img", {
                        src: l.a
                    }))), r.createElement(E.V, {
                        className: "subs-landing-page-contents__section",
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(E.V, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, r.createElement("img", {
                        src: u.a
                    })), r.createElement(E.V, {
                        className: "subs-landing-page__section-info",
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        alignItems: E.c.Center,
                        flexDirection: E.J.Column,
                        margin: {
                            x: 3
                        }
                    }, r.createElement(E.Q, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, r.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Link,
                        bold: !0,
                        fontSize: E.L.Size4
                    }, this.messages.emotesTitle)), r.createElement(E.Q, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, r.createElement(E._23, {
                        type: E._28.P,
                        fontSize: E.L.Size5
                    }, this.messages.emotesInfo)))))))))
                }, t = s.__decorate([Object(h.d)("SubsLandingPage", {
                    destination: m.a.SubsLandingPage
                }), Object(p.a)({
                    location: g.PageviewLocation.SubsLandingPage
                })], t)
            }(r.Component)),
            W = Object(a.a)()(z);
        n.d(t, "SubsLandingPage", function() {
            return W
        })
    },
    np4D: function(e, t) {},
    rbRz: function(e, t) {},
    tKQv: function(e, t, n) {
        e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd364135a9d764.png"
    },
    yoqf: function(e, t) {}
});
//# sourceMappingURL=pages.subs.components.subs-landing-page-140b48e9f65f69c68ce6bd966e19c4b1.js.map