webpackJsonp([63], {
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
                    }, r.m.track(s.SpadeEventType.SubsLandingStreamerClick, t), [2]
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
                    }, r.m.track(s.SpadeEventType.Subscription, n), [2]
                })
            })
        };
        var a = n("TToO"),
            r = n("6sO2"),
            s = n("vH/s")
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
        var r = n("TToO"),
            s = n("OAwv"),
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
            r = n("TToO"),
            s = n("U7vG"),
            i = n("6sO2"),
            o = n("tKQv"),
            l = n.n(o),
            c = n("78L3"),
            u = n.n(c),
            d = n("zCIC"),
            m = n("j7/Y"),
            p = n("w9tK"),
            g = n("vH/s"),
            h = n("CSlQ"),
            f = n("2KeS"),
            b = n("+xm8"),
            _ = n("f2i/"),
            y = n("Aj/L"),
            v = n("7vx8"),
            S = n("oIkB"),
            k = n("F8kA"),
            w = n("Odds"),
            C = (n("1KsR"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleClick = function() {
                        t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.followedChannel.profileImageURL;
                    return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), s.createElement(k.a, {
                        className: "followed-channel-link",
                        to: "/subs/" + this.props.followedChannel.login,
                        onClick: this.handleClick
                    }, s.createElement(w.U, {
                        textAlign: w._23.Center,
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(w.P, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement("img", {
                        className: "followed-channel-link__avatar",
                        src: e,
                        alt: this.props.followedChannel.displayName
                    })), s.createElement(w.P, {
                        margin: {
                            top: 0,
                            bottom: 1
                        }
                    }, s.createElement(w._22, {
                        className: "followed-channel-link__name",
                        color: w.F.Link,
                        ellipsis: !0,
                        noWrap: !0
                    }, this.props.followedChannel.displayName))))
                }, t = r.__decorate([Object(h.c)("FollowedChannelLink")], t)
            }(s.Component)),
            E = n("XFEc"),
            x = n("2oK2"),
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
                        if (t.props.data.loading || t.props.data.error) return [s.createElement(w._2, {
                            key: "followed-channels-placeholder-1",
                            height: 96
                        })];
                        var e = t.state.followedChannels.map(function(e) {
                            return s.createElement(C, {
                                key: "followed-channel-link-" + e.id,
                                followedChannel: e,
                                onClick: t.onFollowClick
                            })
                        });
                        return e.length < 1 ? [s.createElement(w._22, {
                            key: "followed-channels_empty"
                        }, t.messages.emptyFollows)] : e
                    }, t.onFollowClick = function(e, n) {
                        Object(E.a)({
                            login: t.props.data.currentUser.login,
                            userId: t.props.data.currentUser.id,
                            channel: n,
                            channelId: e,
                            clickthroughLocation: "followed"
                        })
                    }, t.getShowMore = function() {
                        return t.props.data.loading || t.props.data.error || !t.props.data.currentUser.follows.pageInfo || !t.props.data.currentUser.follows.pageInfo.hasNextPage ? null : s.createElement(w.U, {
                            className: "subs-landing-followed-channels__show-more",
                            margin: {
                                top: 1
                            }
                        }, s.createElement(w.u, {
                            fullWidth: !0,
                            onClick: t.onShowMore
                        }, t.messages.showMore))
                    }, t.onShowMore = function() {
                        if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data.currentUser && e.data.currentUser.follows.edges) {
                        var t = (e.data.currentUser.follows.edges || []).map(function(e) {
                            return e.node
                        });
                        this.setState({
                            followedChannels: t
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? s.createElement(w.U, {
                        className: "subs-landing-followed-channels",
                        display: w.H.Flex,
                        alignItems: w.c.Center,
                        flexDirection: w.J.Column,
                        fullWidth: !0
                    }, s.createElement(w.P, {
                        margin: {
                            top: 3,
                            bottom: 2
                        }
                    }, s.createElement(w._22, {
                        type: w._27.H3,
                        color: w.F.Link,
                        bold: !0,
                        className: "subs-landing-followed-channels__title"
                    }, this.messages.title)), s.createElement(w._33, {
                        center: !0,
                        gutterSize: w._35.Small
                    }, this.getFollowedChannels()), this.getShowMore()) : s.createElement(w.U, {
                        textAlign: w._23.Center,
                        margin: {
                            top: 3
                        }
                    }, s.createElement(w.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, this.messages.login), s.createElement(w._22, null, this.messages.loginTitle))
                }, t = r.__decorate([Object(v.a)(x, {
                    options: function() {
                        return {
                            variables: {
                                limit: 12,
                                cursor: ""
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: x,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: r.__assign({}, n.currentUser, {
                                                follows: r.__assign({}, n.currentUser.follows, {
                                                    edges: Object(S.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(s.Component)),
            N = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(y.d)(e)
                }
            }, function(e) {
                return Object(f.bindActionCreators)({
                    login: function() {
                        return _.f(b.a.SubsLandingPage)
                    }
                }, e)
            })(O),
            P = n("6BvN"),
            F = n("HM6l"),
            T = n("5LoI"),
            D = n("MAZT"),
            L = n("uTyw"),
            I = n("rCmJ"),
            U = n("SZoP"),
            j = (n("np4D"), function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? s.createElement(w.Y, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), s.createElement(w._18, {
                        elevation: 4
                    }, s.createElement("div", {
                        className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, s.createElement(w._18, {
                        className: "streamer-search-panel__results",
                        background: w.m.Base,
                        position: w._3.Relative,
                        overflow: w.Z.Hidden,
                        display: w.H.Block,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        fullHeight: !0
                    }, s.createElement(w.P, {
                        overflow: w.Z.Hidden,
                        position: w._3.Relative,
                        fullHeight: !0
                    }, s.createElement(d.b, {
                        suppressScrollX: !0
                    }, s.createElement(w.U, null, e, s.createElement(d.a, {
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))))
                }, t.prototype.getStreamerResultContent = function() {
                    var e = this;
                    if (!this.props.streamerResults) return s.createElement(w.U, null);
                    var t = this.props.streamerResults.results.map(function(t) {
                        var n = Object(U.a)(t.login || "", t.name || "");
                        return s.createElement(w.S, {
                            linkTo: "/subs/" + t.login,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "streamer-search-result-" + t.id,
                            "data-streamer_id": t.id,
                            "data-streamer_login": t.login,
                            onClick: e.onStreamerClick
                        }, s.createElement(w.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(w.A, {
                            row: !0
                        }, s.createElement(w.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: w.D.Size4,
                            aspect: w.k.Aspect1x1
                        }), s.createElement(w.B, null, s.createElement(w.P, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement(w._22, {
                            type: w._27.H5,
                            ellipsis: !0
                        }, n))))))
                    });
                    return s.createElement(w.U, null, t)
                }, t.prototype.getErrorMessage = function() {
                    return s.createElement(w._22, null, "Error")
                }, t.prototype.getNoResultsMessage = function() {
                    return s.createElement(w._22, null, "No Results")
                }, t
            }(s.Component)),
            M = (n("yoqf"), {
                searchPlaceholder: Object(i.d)("Search for a Streamer", "StreamerSearch")
            }),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(w.U, {
                        margin: {
                            top: 2
                        },
                        display: w.H.Flex,
                        justifyContent: w.T.Center,
                        fullWidth: !0
                    }, s.createElement(w.P, {
                        fullWidth: !0,
                        zIndex: w._38.Above,
                        position: w._3.Relative
                    }, s.createElement("div", {
                        className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                    }, s.createElement(I.a, {
                        onClickOut: this.props.onClickOut
                    }, s.createElement(w._12, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: M.searchPlaceholder,
                        id: "streamer-search-input"
                    }), s.createElement(w.p, {
                        direction: w.q.BottomCenter,
                        noTail: !0,
                        size: w.r.ExtraLarge,
                        show: this.props.isOpen
                    }, s.createElement(j, {
                        isOpen: this.props.isOpen,
                        streamerResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    }))))))
                }, t
            }(s.Component),
            H = 50,
            A = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), e ? (t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, H)) : t.setState(t.getEmptyState())
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === P.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === P.a.Up ? t.focusNext(-1) : e.keyCode === P.a.Down && t.focusNext(1))
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
                        Object(E.a)(n)
                    }, t.loadMore = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a;
                            return r.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(T.a.Users, this.state.term, "", {
                                            page: e,
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return t = s.sent(), [3, 4];
                                    case 3:
                                        return n = s.sent(), i.i.error(n, "Algolia page search failed"), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (a = Object(L.b)({
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
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.state = t.getEmptyState(), t.searchClient = new D.a(i.a.algoliaApplicationID, i.a.algoliaAPIKey), t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(R, {
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
                    if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
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
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, s, o, l;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = F.a(), a = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !a && !!this.state.currentFocus
                                    }), c.label = 1;
                                case 1:
                                    return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(T.a.Users, e, n, {
                                        facetFilters: "has_subscription_products:true"
                                    })];
                                case 2:
                                    return s = c.sent(), [3, 4];
                                case 3:
                                    return o = c.sent(), i.i.error(o, "Algolia top results search failed"), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return s ? this.state.queryID !== s.id ? [2] : (l = Object(L.b)({
                                        searchResults: s,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return r.__assign({}, n, l, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t = r.__decorate([Object(h.c)("StreamerSearch")], t)
            }(s.Component),
            z = Object(a.a)(function(e) {
                return {
                    user: Object(y.c)(e)
                }
            })(A),
            V = (n("rbRz"), function(e) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), i.n.setPageTitle("Subscriptions")
                }, t.prototype.render = function() {
                    return s.createElement(w.U, {
                        className: "subs-landing-page",
                        fullHeight: !0,
                        display: w.H.Flex,
                        justifyContent: w.T.Center
                    }, s.createElement(w.P, {
                        fullWidth: !0
                    }, s.createElement(d.b, {
                        suppressScrollX: !0
                    }, s.createElement(w.U, {
                        fullWidth: !0,
                        display: w.H.Flex,
                        justifyContent: w.T.Center
                    }, s.createElement(w.U, {
                        className: "subs-landing-page-contents",
                        textAlign: w._23.Center,
                        display: w.H.Flex,
                        justifyContent: w.T.Center,
                        alignItems: w.c.Center,
                        flexWrap: w.K.NoWrap,
                        flexDirection: w.J.Column,
                        padding: {
                            x: 2
                        },
                        fullHeight: !0
                    }, s.createElement(w.P, {
                        margin: {
                            top: 4
                        }
                    }, s.createElement(w._22, {
                        type: w._27.H2,
                        color: w.F.Link,
                        bold: !0
                    }, this.messages.title)), s.createElement(w.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, s.createElement(w._22, {
                        type: w._27.P,
                        fontSize: w.L.Size5
                    }, this.messages.info)), s.createElement(w.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, s.createElement(w._22, {
                        type: w._27.H3,
                        color: w.F.Link,
                        bold: !0,
                        fontSize: w.L.Size4
                    }, this.messages.searchTitle)), s.createElement(w.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, s.createElement(w._22, {
                        type: w._27.P,
                        fontSize: w.L.Size5
                    }, this.messages.searchInfo)), s.createElement(z, null), s.createElement(N, null), s.createElement(w.U, {
                        className: "subs-landing-page-contents__section",
                        display: w.H.Flex,
                        justifyContent: w.T.Center
                    }, s.createElement(w.U, {
                        className: "subs-landing-page-contents__section-info",
                        display: w.H.Flex,
                        justifyContent: w.T.Center,
                        alignItems: w.c.Center,
                        flexDirection: w.J.Column,
                        margin: {
                            x: 3
                        }
                    }, s.createElement(w.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, s.createElement(w._22, {
                        type: w._27.H3,
                        color: w.F.Link,
                        bold: !0,
                        fontSize: w.L.Size4
                    }, this.messages.perksTitle)), s.createElement(w.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, s.createElement(w._22, {
                        type: w._27.P,
                        fontSize: w.L.Size5
                    }, this.messages.perksInfo))), s.createElement(w.U, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, s.createElement("img", {
                        src: l.a
                    }))), s.createElement(w.U, {
                        className: "subs-landing-page-contents__section",
                        display: w.H.Flex,
                        justifyContent: w.T.Center,
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(w.U, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, s.createElement("img", {
                        src: u.a
                    })), s.createElement(w.U, {
                        className: "subs-landing-page__section-info",
                        display: w.H.Flex,
                        justifyContent: w.T.Center,
                        alignItems: w.c.Center,
                        flexDirection: w.J.Column,
                        margin: {
                            x: 3
                        }
                    }, s.createElement(w.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, s.createElement(w._22, {
                        type: w._27.H3,
                        color: w.F.Link,
                        bold: !0,
                        fontSize: w.L.Size4
                    }, this.messages.emotesTitle)), s.createElement(w.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, s.createElement(w._22, {
                        type: w._27.P,
                        fontSize: w.L.Size5
                    }, this.messages.emotesInfo)))))))))
                }, t = r.__decorate([Object(h.c)("SubsLandingPage", {
                    destination: p.a.SubsLandingPage
                }), Object(m.a)({
                    location: g.PageviewLocation.SubsLandingPage
                })], t)
            }(s.Component)),
            B = Object(a.a)()(V);
        n.d(t, "SubsLandingPage", function() {
            return B
        })
    },
    np4D: function(e, t) {},
    rbRz: function(e, t) {},
    tKQv: function(e, t, n) {
        e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd364135a9d764.png"
    },
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
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
            ForYou: "for-you",
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
    yoqf: function(e, t) {}
});
//# sourceMappingURL=pages.subs.components.subs-landing-page-5dc54892fe615c8c74934b5b3b1c30ed.js.map