webpackJsonp([85], {
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
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
            return s.__awaiter(this, void 0, void 0, function() {
                var t;
                return s.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, r.n.track(a.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }, t.b = function(e) {
            return s.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return s.__generator(this, function(s) {
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
                    }, r.n.track(a.SpadeEventType.Subscription, n), [2]
                })
            })
        };
        var s = n("TToO"),
            r = n("6sO2"),
            a = n("vH/s")
    },
    "kd/b": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("RH2O"),
            r = n("TToO"),
            a = n("GiK3"),
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
            S = n("Aj/L"),
            k = n("7vx8"),
            v = n("oIkB"),
            y = n("F8kA"),
            w = n("Odds"),
            E = (n("1KsR"), function(e) {
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
                    return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), a.createElement(y.a, {
                        className: "followed-channel-link",
                        to: "/subs/" + this.props.followedChannel.login,
                        onClick: this.handleClick
                    }, a.createElement(w._7, {
                        textAlign: w._40.Center,
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(w._1, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("img", {
                        className: "followed-channel-link__avatar",
                        src: e,
                        alt: this.props.followedChannel.displayName
                    })), a.createElement(w._1, {
                        margin: {
                            top: 0,
                            bottom: 1
                        }
                    }, a.createElement(w.P, {
                        className: "followed-channel-link__name",
                        color: w.J.Link,
                        ellipsis: !0,
                        noWrap: !0
                    }, this.props.followedChannel.displayName))))
                }, t = r.__decorate([Object(h.d)("FollowedChannelLink")], t)
            }(a.Component)),
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
                        if (t.props.data.loading || t.props.data.error) return [a.createElement(w._13, {
                            key: "followed-channels-placeholder-1",
                            height: 96
                        })];
                        var e = t.state.followedChannels.map(function(e) {
                            return a.createElement(E, {
                                key: "followed-channel-link-" + e.id,
                                followedChannel: e,
                                onClick: t.onFollowClick
                            })
                        });
                        return e.length < 1 ? [a.createElement(w.P, {
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
                        return !t.props.data.loading && !t.props.data.error && t.props.data.currentUser.follows && t.props.data.currentUser.follows.pageInfo && t.props.data.currentUser.follows.pageInfo.hasNextPage ? a.createElement(w._7, {
                            className: "subs-landing-followed-channels__show-more",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(w.u, {
                            fullWidth: !0,
                            onClick: t.onShowMore
                        }, t.messages.showMore)) : null
                    }, t.onShowMore = function() {
                        if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser.follows && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data.currentUser && e.data.currentUser.follows) {
                        var t = (e.data.currentUser.follows.edges || []).map(function(e) {
                            return e.node
                        });
                        this.setState({
                            followedChannels: t
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? a.createElement(w._7, {
                        className: "subs-landing-followed-channels",
                        display: w.Q.Flex,
                        alignItems: w.c.Center,
                        flexDirection: w.S.Column,
                        fullWidth: !0
                    }, a.createElement(w._1, {
                        margin: {
                            top: 3,
                            bottom: 2
                        }
                    }, a.createElement(w.P, {
                        type: w._44.H3,
                        color: w.J.Link,
                        bold: !0,
                        className: "subs-landing-followed-channels__title"
                    }, this.messages.title)), a.createElement(w._50, {
                        center: !0,
                        gutterSize: w._52.Small
                    }, this.getFollowedChannels()), this.getShowMore()) : a.createElement(w._7, {
                        textAlign: w._40.Center,
                        margin: {
                            top: 3
                        }
                    }, a.createElement(w.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, this.messages.login), a.createElement(w.P, null, this.messages.loginTitle))
                }, t = r.__decorate([Object(k.a)(N, {
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
                                    query: N,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser.follows ? e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            s = [];
                                        return e.currentUser.follows && n.currentUser.follows ? s = Object(v.b)(e.currentUser.follows.edges, n.currentUser.follows.edges) : !e.currentUser.follows && n.currentUser.follows ? s = n.currentUser.follows.edges : e.currentUser.follows && !n.currentUser.follows && (s = e.currentUser.follows.edges), {
                                            currentUser: r.__assign({}, n.currentUser, {
                                                follows: r.__assign({}, n.currentUser.follows, {
                                                    edges: s
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(a.Component));
        var x = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(S.d)(e)
                }
            }, function(e) {
                return Object(f.b)({
                    login: function() {
                        return b.f(_.a.SubsLandingPage)
                    }
                }, e)
            })(O),
            F = n("6BvN"),
            I = n("HM6l"),
            P = n("5LoI"),
            U = n("MAZT"),
            L = n("uTyw"),
            j = n("rCmJ"),
            T = n("SZoP"),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? a.createElement(w._9, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), a.createElement(w._30, {
                        elevation: 4
                    }, a.createElement("div", {
                        className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, a.createElement(w._30, {
                        className: "streamer-search-panel__results",
                        background: w.m.Base,
                        position: w._14.Relative,
                        overflow: w._10.Hidden,
                        display: w.Q.Block,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        fullHeight: !0
                    }, a.createElement(w._1, {
                        overflow: w._10.Hidden,
                        position: w._14.Relative,
                        fullHeight: !0
                    }, a.createElement(d.b, {
                        suppressScrollX: !0
                    }, a.createElement(w._7, null, e, a.createElement(d.a, {
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))))
                }, t.prototype.getStreamerResultContent = function() {
                    var e = this;
                    if (!this.props.streamerResults) return a.createElement(w._7, null);
                    var t = this.props.streamerResults.results.map(function(t) {
                        var n = Object(T.a)(t.login || "", t.name || "");
                        return a.createElement(w._5, {
                            linkTo: "/subs/" + t.login,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "streamer-search-result-" + t.id,
                            "data-streamer_id": t.id,
                            "data-streamer_login": t.login,
                            onClick: e.onStreamerClick
                        }, a.createElement(w._7, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, a.createElement(w.B, {
                            row: !0
                        }, a.createElement(w.D, {
                            alt: t.thumbnailAltText,
                            src: t.thumbnail ? t.thumbnail : "",
                            size: w.E.Size4,
                            aspect: w.k.Aspect1x1
                        }), a.createElement(w.C, {
                            overflow: w._10.Hidden
                        }, a.createElement(w._1, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(w.P, {
                            type: w._44.H5,
                            ellipsis: !0
                        }, n))))))
                    });
                    return a.createElement(w._7, null, t)
                }, t.prototype.getErrorMessage = function() {
                    return a.createElement(w.P, null, "Error")
                }, t.prototype.getNoResultsMessage = function() {
                    return a.createElement(w.P, null, "No Results")
                }, t
            }(a.Component)),
            D = (n("yoqf"), {
                searchPlaceholder: Object(i.d)("Search for a Streamer", "StreamerSearch")
            }),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(w._7, {
                        margin: {
                            top: 2
                        },
                        display: w.Q.Flex,
                        justifyContent: w._6.Center,
                        fullWidth: !0
                    }, a.createElement(w._1, {
                        fullWidth: !0,
                        zIndex: w._57.Above,
                        position: w._14.Relative
                    }, a.createElement("div", {
                        className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                    }, a.createElement(j.a, {
                        onClickOut: this.props.onClickOut
                    }, a.createElement(w._23, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: D.searchPlaceholder,
                        id: "streamer-search-input"
                    }), a.createElement(w.p, {
                        direction: w.q.BottomCenter,
                        noTail: !0,
                        size: w.r.ExtraLarge,
                        show: this.props.isOpen
                    }, a.createElement(R, {
                        isOpen: this.props.isOpen,
                        streamerResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    }))))))
                }, t
            }(a.Component),
            W = 50;
        var H = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onChange = function(e) {
                        n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                            isWaiting: !0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doSearch(e)
                        }, W)) : n.setState(n.getEmptyState())
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.setState({
                            isOpen: !1
                        })
                    }, n.onFocus = function() {
                        n.state.term && !n.state.isOpen && n.setState({
                            isOpen: !0
                        })
                    }, n.onKeyDown = function(e) {
                        n.state.term && (e.keyCode === F.a.Esc ? n.setState({
                            isOpen: !1
                        }) : e.keyCode === F.a.Up ? n.focusNext(-1) : e.keyCode === F.a.Down && n.focusNext(1))
                    }, n.onResultSelected = function(e) {
                        n.setState({
                            isOpen: !1
                        });
                        var t = Object.assign({
                            login: n.props.user ? n.props.user.login : null,
                            userId: n.props.user ? String(n.props.user.id) : null,
                            channel: e.channel,
                            channelId: e.channelId,
                            clickthroughLocation: "search"
                        }, e);
                        Object(C.a)(t)
                    }, n.loadMore = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, s;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(P.a.Users, this.state.term, "", {
                                            page: e,
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), i.j.error(n, "Algolia page search failed"), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (s = Object(L.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: s.currentUserResults,
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: s.exhaustedHits
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, n.state = n.getEmptyState(), n.searchClient = new U.a({
                        appId: i.a.algoliaApplicationID,
                        apiKey: i.a.algoliaAPIKey,
                        apolloClient: i.o.apollo.client,
                        logger: i.j,
                        config: i.a
                    }), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(M, {
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
                        s = document.activeElement,
                        r = Array.prototype.indexOf.call(n, s);
                    if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
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
                        var t, n, s, a, o, l;
                        return r.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = I.a(), s = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !s && !!this.state.currentFocus
                                    }), c.label = 1;
                                case 1:
                                    return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(P.a.Users, e, n, {
                                        facetFilters: "has_subscription_products:true"
                                    })];
                                case 2:
                                    return a = c.sent(), [3, 4];
                                case 3:
                                    return o = c.sent(), i.j.error(o, "Algolia top results search failed"), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (l = Object(L.b)({
                                        searchResults: a,
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
                }, t = r.__decorate([Object(h.d)("StreamerSearch")], t)
            }(a.Component),
            z = Object(s.b)(function(e) {
                return {
                    user: Object(S.c)(e)
                }
            })(H),
            A = (n("rbRz"), function(e) {
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
                    this.props.latencyTracking.reportInteractive(), i.o.setPageTitle("Subscriptions")
                }, t.prototype.render = function() {
                    return a.createElement(w._7, {
                        className: "subs-landing-page",
                        fullHeight: !0,
                        display: w.Q.Flex,
                        justifyContent: w._6.Center
                    }, a.createElement(w._1, {
                        fullWidth: !0
                    }, a.createElement(d.b, {
                        suppressScrollX: !0
                    }, a.createElement(w._7, {
                        fullWidth: !0,
                        display: w.Q.Flex,
                        justifyContent: w._6.Center
                    }, a.createElement(w._7, {
                        className: "subs-landing-page-contents",
                        textAlign: w._40.Center,
                        display: w.Q.Flex,
                        justifyContent: w._6.Center,
                        alignItems: w.c.Center,
                        flexWrap: w.T.NoWrap,
                        flexDirection: w.S.Column,
                        padding: {
                            x: 2
                        },
                        fullHeight: !0
                    }, a.createElement(w._1, {
                        margin: {
                            top: 4
                        }
                    }, a.createElement(w.P, {
                        type: w._44.H2,
                        color: w.J.Link,
                        bold: !0
                    }, this.messages.title)), a.createElement(w._1, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, a.createElement(w.P, {
                        type: w._44.P,
                        fontSize: w.U.Size5
                    }, this.messages.info)), a.createElement(w._1, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, a.createElement(w.P, {
                        type: w._44.H3,
                        color: w.J.Link,
                        bold: !0,
                        fontSize: w.U.Size4
                    }, this.messages.searchTitle)), a.createElement(w._1, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, a.createElement(w.P, {
                        type: w._44.P,
                        fontSize: w.U.Size5
                    }, this.messages.searchInfo)), a.createElement(z, null), a.createElement(x, null), a.createElement(w._7, {
                        className: "subs-landing-page-contents__section",
                        display: w.Q.Flex,
                        justifyContent: w._6.Center,
                        flexWrap: w.T.Wrap
                    }, a.createElement(w._7, {
                        className: "subs-landing-page-contents__section-info",
                        display: w.Q.Flex,
                        justifyContent: w._6.Center,
                        alignItems: w.c.Center,
                        flexDirection: w.S.Column,
                        margin: {
                            x: 3
                        }
                    }, a.createElement(w._1, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, a.createElement(w.P, {
                        type: w._44.H3,
                        color: w.J.Link,
                        bold: !0,
                        fontSize: w.U.Size4
                    }, this.messages.perksTitle)), a.createElement(w._1, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, a.createElement(w.P, {
                        type: w._44.P,
                        fontSize: w.U.Size5
                    }, this.messages.perksInfo))), a.createElement(w._7, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, a.createElement("img", {
                        src: l.a
                    }))), a.createElement(w._7, {
                        className: "subs-landing-page-contents__section",
                        display: w.Q.Flex,
                        justifyContent: w._6.Center,
                        flexWrap: w.T.Wrap,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(w._7, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, a.createElement("img", {
                        src: u.a
                    })), a.createElement(w._7, {
                        className: "subs-landing-page__section-info",
                        display: w.Q.Flex,
                        justifyContent: w._6.Center,
                        alignItems: w.c.Center,
                        flexDirection: w.S.Column,
                        margin: {
                            x: 3
                        }
                    }, a.createElement(w._1, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, a.createElement(w.P, {
                        type: w._44.H3,
                        color: w.J.Link,
                        bold: !0,
                        fontSize: w.U.Size4
                    }, this.messages.emotesTitle)), a.createElement(w._1, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, a.createElement(w.P, {
                        type: w._44.P,
                        fontSize: w.U.Size5
                    }, this.messages.emotesInfo)))))))))
                }, t = r.__decorate([Object(h.d)("SubsLandingPage", {
                    destination: m.a.SubsLandingPage
                }), Object(p.a)({
                    location: g.PageviewLocation.SubsLandingPage
                })], t)
            }(a.Component)),
            K = Object(s.b)()(A);
        n.d(t, "SubsLandingPage", function() {
            return K
        })
    },
    np4D: function(e, t) {},
    rbRz: function(e, t) {},
    tKQv: function(e, t, n) {
        e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd364135a9d764.png"
    },
    yoqf: function(e, t) {}
});
//# sourceMappingURL=pages.subs.components.subs-landing-page-dbacd377eccb9d2f130a8f336e63b8f7.js.map